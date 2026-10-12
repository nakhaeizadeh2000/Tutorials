---
name: tutorial-continue
description: Resume tutorial work from complete track logs and verified Git/disk, preserving the approved scope and any pending curriculum or review approval gate. Use for /tutorial-continue or tutorial resumption.
---

# Tutorial Continue

Find the repository root with `git rev-parse --show-toplevel`. Read complete
[PROMPT.md](<../../../PROMPT.md>), [AGENTS.md](<../../../AGENTS.md>),
[shared workflow](<../../../.tutorial/WORKFLOW.md>) and
[quality guide](<../../../.tutorial/QUALITY.md>). These shared files own policy.

Use **continue** mode, specifically workflow section 4, followed by its
approved execution and closure sections when applicable. Preserve the user's
trailing arguments, scope and previously recorded approval. Merely discussing
or configuring this command does not invoke it.

Discover recovery only in README/*/LOG.md. Read the selected log completely;
verify phase, revision, approval evidence, Done items, files and commits.
A pending proposal/report stays pending until the user approves it. Approved
work continues without repeated approval, across all remaining planned domains.
Do not resume maintenance logs, superseded entries or deleted curricula from Git.
Do not automatically author the next root track. Handle legacy approval records
and explicit all-remaining scope using shared workflow section 4.

Read the full selected track log and relevant indexes/reference leaves before
work. Open the log before durable writes. After every approved implementation
unit, verify, save the log and commit before the next unit. Recover the same
phase/approval/plan after compaction; close the active entry before normal exit.
