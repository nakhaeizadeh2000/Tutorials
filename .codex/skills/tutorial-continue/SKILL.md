---
name: tutorial-continue
description: Continue tutorial work in this Tutorials repository from the current track LOG.md and verified disk/Git state. Use for $tutorial-continue, /tutorial-continue, or requests to resume the tutorial. Supports an explicit track and all-remaining scope. Excludes merely discussing or configuring the command.
---

# Tutorial Continue — recover and finish the authorized plan

## 1. Load policy and identify the current handoff

Find the repository root with `git rev-parse --show-toplevel`. Read the entire
root [PROMPT.md](<../../../PROMPT.md>), [AGENTS.md](<../../../AGENTS.md>), and
[README.md](<../../../README.md>). Interpret trailing user text as arguments,
including any explicit track, domain, scope limit, or full-track override.

Find candidate recovery records in **`README/*/LOG.md` only**. Never use
`.codex/LOG.md`, file modification times alone, IDE tabs alone, or an unrelated
old PARTIAL entry as the current tutorial task. Inspect the newest session of
each relevant track; an older PARTIAL superseded by a later session is history.

Resolve in this order:

1. An explicitly named track/domain or established current conversation task.
2. An unambiguous current IN PROGRESS/PARTIAL session, using session timestamps,
   Git history, and root curriculum order together.
3. If there is no unresolved session, the latest applicable DONE handoff and its
   Next steps. DONE can finish one domain while naming the next domain. Do not
   conclude there is nothing to do merely because all session statuses are DONE.
4. If that handoff finishes a track and names the next eligible track, use the
   handoff and root curriculum order to plan that next track. Check its on-disk
   progress before creating anything. Honor explicit gates such as APISynthesis
   after RxJS DONE and EnterpriseApp after APISynthesis DONE, unless the user
   explicitly overrides them; log such deviations.

Ask one focused clarification only when this evidence leaves multiple plausible
targets or a blocked handoff requires missing information. Do not silently pick
another track to bypass a genuine blocker. Do not start concurrent writers in
the same track/worktree.

## 2. Recover from evidence before writing

Read the selected track README, **entire** selected track LOG, target domain
README, and relevant neighboring leaves. For an absent next track/domain, note
the missing files and use the predecessor handoff and root templates. Read long
logs in consecutive chunks; no tail-only or truncation-based context shortcuts.

Check `git status`, recent commits, and every claimed Done item in the recovery
record against the actual files, indexes, and recorded verification artifacts.
Trust disk/Git over prose. Identify uncommitted changes and do not overwrite or
stage unrelated user work. Missing scratch directories mean verification may
need rerunning, not that checks can be reported as passed.

- **IN PROGRESS** (interrupted session): verify its Done claims, then either
  continue that same open block or mark it PARTIAL with an honest handoff and
  append a new session block. Commit the recovery log update before content work.
- **PARTIAL / DONE / BLOCKED** (closed history): never edit the closed block.
  Append a fresh IN PROGRESS block referencing the previous handoff. A blocked
  record resumes only when its blocking condition is resolved or explicitly
  changed by the user.
- **Unlogged partial unit**: reconcile existing edits with the plan and record
  the discrepancy in the active/new block. Finish or repair that unit before
  moving forward; never silently recreate or discard it.

## 3. Resolve scope and execute

If the request says “rest of”, “all remaining”, “complete”, “till finishing
completely”, “deepdive for rest”, or equivalent **as a scope instruction**, replace
the old narrow Next steps scope with all remaining units for the selected track.
Compare planned curriculum, domain-index promises, leaf files, and Git/disk so
existing work is not duplicated. This does not authorize all future tracks.

Otherwise follow the latest relevant Next steps. A domain-sized handoff remains
domain-sized; a previously authorized unfinished full-track plan remains
full-track. Record the complete resolved Plan in the new/open log before any
content edits.

Load the shared [unit loop](<../tutorial/references/unit-loop.md>) and execute
one unit → ancestor indexes → verify → LOG update → Git commit → next unit,
across domain boundaries, until that plan is exhausted. Do not stop after one
domain if the plan includes more. The loop is carried by the agent and durable
track logs, not by an OpenCode plugin or an unbounded shell restart process.

## 4. Close and hand off

After final verification, close the same active entry as DONE, PARTIAL, or
BLOCKED according to the actual outcome, write precise Next steps, and commit
the closeout. Never return normally with your session still IN PROGRESS.
Report scope completed, commands/checks actually run, commits, and any remaining
work. Do not run this workflow when the user only asks how it works.
