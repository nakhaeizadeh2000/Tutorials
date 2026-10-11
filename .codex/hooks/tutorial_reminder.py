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
            "Tutorials repository: read the entire root PROMPT.md and obey AGENTS.md. "
            "For tutorial tasks use .codex/skills/tutorial/SKILL.md or "
            ".codex/skills/tutorial-continue/SKILL.md. For an active tutorial after "
            "compaction/resume, recover the same plan from the complete selected "
            "README/<Track>/LOG.md plus disk/Git. Do not start tutorial work merely "
            "because this reminder loaded. .codex/LOG.md is integration history only."
        )
    if event == "UserPromptSubmit":
        prompt = payload.get("prompt", "")
        if not isinstance(prompt, str):
            return None
        match = re.match(r"^\s*[$/](tutorial-continue|tutorial)(?=\s|$)", prompt)
        if not match:
            return None
        skill = match.group(1)
        return (
            f"Load .codex/skills/{skill}/SKILL.md and follow it for this request. "
            "Preserve the user's trailing arguments and scope. First load full "
            "context and verify recovery, then open the track log before writing. "
            "Complete one unit with indexes, verification, immediate LOG update, "
            "and explicit-path commit before the next; continue through the plan."
        )
    if event == "PreToolUse":
        tool_input = json.dumps(payload.get("tool_input", {}), ensure_ascii=False)
        if not any(marker in tool_input for marker in ("README/", "LOG.md", "git commit")):
            return None
        return (
            "If this action mutates tutorial content: full context and the open "
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
