#!/usr/bin/env python3
"""Emit advisory Codex hook context without executing or modifying anything."""

import json
import re
import sys


def reminder(payload):
    """Return context only for supported events; untrusted input is never run."""
    if not isinstance(payload, dict):
        return None
    event = payload.get("hook_event_name")
    if event == "SessionStart":
        return (
            "Tutorials: read complete PROMPT.md and AGENTS.md. Use the matching "
            ".codex/skills/tutorial, tutorial-continue or tutorial-review SKILL.md, "
            "with .tutorial/WORKFLOW.md and QUALITY.md. New curricula and review "
            "repairs require approval of the presented plan/report. After compaction "
            "recover phase, revision, approval and progress from the complete track "
            "LOG plus disk/Git. A pending gate stays pending. Do not start work "
            "because this reminder loaded; maintenance logs are not tutorial handoffs."
        )
    if event == "UserPromptSubmit":
        prompt = payload.get("prompt", "")
        if not isinstance(prompt, str):
            return None
        match = re.match(r"^\s*[$/](tutorial-continue|tutorial-review|tutorial)(?=\s|$)", prompt)
        if not match:
            return None
        skill = match.group(1)
        return (
            f"Load .codex/skills/{skill}/SKILL.md and its shared workflow/quality guide. "
            "Preserve trailing scope, phase and recorded approval. Propose a new "
            "curriculum or report review findings before asking for approval; do "
            "not author or repair before that gate. Continue preserves pending "
            "gates and executes already approved work without repeated permission."
        )
    if event == "PreToolUse":
        tool_input = json.dumps(payload.get("tool_input", {}), ensure_ascii=False)
        if not any(marker in tool_input for marker in ("README/", "LOG.md", "git commit")):
            return None
        return (
            "If this action mutates tutorial content: verified approval, full context and the open "
            "track LOG must precede it. Finish only the current unit and affected "
            "indexes; verify, immediately save Done/Files touched/Links/Verification "
            "in the active LOG, and commit only this unit before the next. Preserve "
            "closed log blocks and unrelated staged work. This is an advisory "
            "reminder, not evidence that those checks have passed."
        )
    return None


def main():
    try:
        payload = json.load(sys.stdin)
    except (ValueError, UnicodeError):
        return
    context = reminder(payload)
    if context:
        print(json.dumps({"hookSpecificOutput": {
            "hookEventName": payload["hook_event_name"],
            "additionalContext": context,
        }}))


if __name__ == "__main__":
    main()
