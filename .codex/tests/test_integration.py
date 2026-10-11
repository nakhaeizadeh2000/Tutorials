#!/usr/bin/env python3
"""Offline behavioral checks. No model calls, tutorial writes, or real commits."""

import json
import os
from pathlib import Path
import re
import subprocess
import sys
import tempfile
import tomllib
import unittest


ROOT = Path(__file__).resolve().parents[2]
CODEX = ROOT / ".codex"
REMINDER = CODEX / "hooks/tutorial_reminder.py"


def run_hook(payload, cwd=None):
    raw = payload if isinstance(payload, str) else json.dumps(payload)
    result = subprocess.run(
        [sys.executable, str(REMINDER)], input=raw, text=True,
        capture_output=True, cwd=cwd, timeout=5, check=True,
    )
    if result.stderr:
        raise AssertionError(result.stderr)
    return json.loads(result.stdout) if result.stdout.strip() else None


class HookBehavior(unittest.TestCase):
    def assert_context_only(self, output, event):
        self.assertEqual(set(output), {"hookSpecificOutput"})
        item = output["hookSpecificOutput"]
        self.assertEqual(set(item), {"hookEventName", "additionalContext"})
        self.assertEqual(item["hookEventName"], event)
        self.assertTrue(item["additionalContext"])
        return item["additionalContext"]

    def test_start_and_compaction_are_advisory(self):
        for source in ("startup", "resume", "clear", "compact"):
            with self.subTest(source=source):
                output = run_hook({"hook_event_name": "SessionStart", "source": source})
                self.assert_context_only(output, "SessionStart")

    def test_exact_commands_route_to_the_right_skill(self):
        for command in ("tutorial", "tutorial-continue"):
            for prefix in ("$", "/"):
                with self.subTest(command=command, prefix=prefix):
                    output = run_hook({
                        "hook_event_name": "UserPromptSubmit",
                        "prompt": f"  {prefix}{command} SystemDesign — all remaining",
                    })
                    context = self.assert_context_only(output, "UserPromptSubmit")
                    self.assertIn(f".codex/skills/{command}/SKILL.md", context)

    def test_discussion_and_near_matches_do_not_trigger(self):
        for prompt in (
            "Explain /tutorial-continue", "Configure $tutorial", "/tutorialism",
            "/tutorial-continue-extra", "$tutorial-continue.md", "git status",
            "`/tutorial-continue`", "", None, ["$tutorial"],
        ):
            with self.subTest(prompt=prompt):
                self.assertIsNone(run_hook({
                    "hook_event_name": "UserPromptSubmit", "prompt": prompt,
                }))

    def test_tool_reminders_do_not_rewrite_or_approve_calls(self):
        for command in (
            'git add -- "README/Track/LOG.md"',
            'git commit -m "feat(track): add one unit"',
            '*** Update File: README/Track/01 Domain/sections/1. Section/1.1. Leaf.md',
        ):
            with self.subTest(command=command):
                output = run_hook({
                    "hook_event_name": "PreToolUse", "tool_name": "Bash",
                    "tool_input": {"command": command},
                })
                self.assert_context_only(output, "PreToolUse")
        self.assertIsNone(run_hook({
            "hook_event_name": "PreToolUse", "tool_input": {"command": "node --version"},
        }))

    def test_unknown_or_malformed_events_fail_open(self):
        for payload in ("{", "null", "[]", {}, {"hook_event_name": "Stop"}):
            with self.subTest(payload=payload):
                self.assertIsNone(run_hook(payload))

    def test_prompt_and_tool_input_are_never_executed(self):
        with tempfile.TemporaryDirectory(prefix="tutorial-hook-test-") as directory:
            sentinel = Path(directory) / "should-not-exist"
            attack = f'$(touch "{sentinel}") ; touch "{sentinel}"'
            before = set(Path(directory).iterdir())
            for payload in (
                {"hook_event_name": "UserPromptSubmit", "prompt": "$tutorial " + attack},
                {"hook_event_name": "PreToolUse", "tool_input": {"command": "README/ " + attack}},
            ):
                run_hook(payload, cwd=directory)
            self.assertEqual(set(Path(directory).iterdir()), before)
            self.assertFalse(sentinel.exists())


class Launchers(unittest.TestCase):
    def test_launch_from_another_directory_preserves_root_and_literal_arguments(self):
        with tempfile.TemporaryDirectory(prefix="tutorial-launch-test-") as directory:
            temporary = Path(directory)
            fake = temporary / "codex"
            fake.write_text(
                "#!/usr/bin/env python3\nimport json,sys\nprint(json.dumps(sys.argv[1:]))\n"
            )
            fake.chmod(0o755)
            env = dict(os.environ, PATH=str(temporary) + os.pathsep + os.environ["PATH"])
            sentinel = temporary / "should-not-exist"
            args = ["SystemDesign", "complete all remaining domains", f'$(touch "{sentinel}")', "a'b"]
            for name in ("tutorial", "tutorial-continue"):
                with self.subTest(name=name):
                    result = subprocess.run(
                        [str(CODEX / "bin" / name), *args], cwd=temporary, env=env,
                        text=True, capture_output=True, timeout=5, check=True,
                    )
                    self.assertEqual(json.loads(result.stdout), ["-C", str(ROOT), "$" + name + " " + " ".join(args)])
                    self.assertFalse(sentinel.exists())

    def test_no_argument_launcher_uses_exact_native_skill(self):
        with tempfile.TemporaryDirectory(prefix="tutorial-launch-test-") as directory:
            fake = Path(directory) / "codex"
            fake.write_text("#!/usr/bin/env python3\nimport json,sys\nprint(json.dumps(sys.argv[1:]))\n")
            fake.chmod(0o755)
            env = dict(os.environ, PATH=directory + os.pathsep + os.environ["PATH"])
            for name in ("tutorial", "tutorial-continue"):
                result = subprocess.run(
                    [str(CODEX / "bin" / name)], cwd=directory, env=env,
                    capture_output=True, text=True, timeout=5, check=True,
                )
                self.assertEqual(json.loads(result.stdout), ["-C", str(ROOT), "$" + name])


class Wiring(unittest.TestCase):
    def test_project_and_agent_configs_parse_without_replacing_base_instructions(self):
        config = tomllib.loads((CODEX / "config.toml").read_text())
        agent = tomllib.loads((CODEX / "agents/tutorial_executor.toml").read_text())
        self.assertNotIn("model_instructions_file", config)
        self.assertNotIn("model_provider", config)
        self.assertNotIn("model", config)
        self.assertEqual(agent["name"], "tutorial_executor")
        for field in ("description", "developer_instructions"):
            self.assertTrue(agent[field])

    def test_real_markdown_links_resolve(self):
        count = 0
        for path in CODEX.rglob("*.md"):
            source = re.sub(r"```.*?```", "", path.read_text(), flags=re.S)
            source = re.sub(r"`[^`]*`", "", source)
            for target in re.findall(r"\]\(<([^>]+)>\)", source):
                if re.match(r"^[a-zA-Z][a-zA-Z0-9+.-]*:", target) or target.startswith("#"):
                    continue
                target = target.split("#", 1)[0]
                self.assertTrue((path.parent / target).exists(), f"{path}: {target}")
                count += 1
        self.assertGreater(count, 0)

    def test_registered_hooks_run_from_nested_directories(self):
        config = json.loads((CODEX / "hooks.json").read_text())
        for event, groups in config["hooks"].items():
            for group in groups:
                for handler in group["hooks"]:
                    payload = {"hook_event_name": event, "source": "compact",
                               "prompt": "$tutorial-continue", "tool_input": {"command": "git commit"}}
                    result = subprocess.run(
                        ["bash", "-c", handler["command"]], input=json.dumps(payload),
                        cwd=CODEX / "skills/tutorial", text=True, capture_output=True,
                        timeout=handler["timeout"], check=True,
                    )
                    self.assertEqual(json.loads(result.stdout)["hookSpecificOutput"]["hookEventName"], event)


if __name__ == "__main__":
    unittest.main(verbosity=2)
