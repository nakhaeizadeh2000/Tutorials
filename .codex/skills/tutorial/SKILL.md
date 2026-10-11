---
name: tutorial
description: Build, extend, refresh, or deep-dive a tutorial track, domain, section, or leaf in this Tutorials repository. Use for $tutorial, /tutorial, and requests to add or extend tutorial content under PROMPT.md. For recovery use tutorial-continue. Excludes discussions about models, agent setup, or workflow configuration.
---

# Tutorial — create, extend, or refresh

## 1. Resolve the task

Find the repository root with `git rev-parse --show-toplevel`; all repository
paths in these instructions are relative to that root, not the launch directory.
Read the entire [PROMPT.md](<../../../PROMPT.md>) and
[AGENTS.md](<../../../AGENTS.md>) from the repository root. (The paths in these
two links are resolved relative to this skill directory.)

Treat the user's text following `$tutorial` or `/tutorial` as the task arguments.
For natural-language requests, use the requested tutorial scope. Do not treat a
quoted command in an analysis or configuration request as a build invocation.

Choose PROMPT.md Mode 1 (new track), Mode 2 (extend), or Mode 3 (refresh).
Read the root README, selected track README and **entire** track LOG, target
domain README, and relevant neighboring leaves. Read long files in consecutive
chunks until complete; a truncated tool result or log tail is not a full read.
For a new track/domain, explicitly note which context files do not exist.

If the selected track has an unresolved current session, perform the recovery
steps in [tutorial-continue](<../tutorial-continue/SKILL.md>) before planning.
Otherwise preserve the closed history and open a new session.

## 2. Define and complete the plan

For requests such as “all remaining”, “complete the track”, “rest of sections
and domains”, or “until the end”, compare the track's planned curriculum in its
LOG with actual files and index promises. Plan **all missing units**, across all
remaining domains, in teaching order. A narrower request gets its requested
scope. Do not infer a full-track request merely from quoted history or examples.

Record every planned unit and follow the shared
[unit loop](<references/unit-loop.md>) through log opening, research,
implementation, verification, log updates, and one commit per unit. This
reference is required before writing. Reuse root Templates A/B and the exact
log contract instead of creating another policy format.

Continue through the entire authorized plan without pausing at each leaf or
domain. If a true blocker or user interruption prevents completion, close
honestly with the remaining work. If the host is about to exhaust a hard
execution/context limit, checkpoint PARTIAL; after ordinary compaction recover
the active plan and continue. Do not run an external infinite restart loop.

## 3. Completion

Verify all affected units and indexes, close the same open entry as DONE only
when the plan is complete, commit the closeout, and report the completed scope,
verification, commit(s), and precise remaining steps. Never claim unexecuted
examples passed. All tutorial content logs remain in `README/<Track>/LOG.md`.
