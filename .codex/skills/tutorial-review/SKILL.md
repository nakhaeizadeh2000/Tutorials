---
name: tutorial-review
description: Review tutorial clarity, coverage, progression, correctness and examples against the JavaScript benchmark; report first, then repair only after user approval. Use for $tutorial-review and tutorial quality reviews.
---

# Tutorial Review

Find the repository root with `git rev-parse --show-toplevel`. Read complete
[PROMPT.md](<../../../PROMPT.md>), [AGENTS.md](<../../../AGENTS.md>),
[shared workflow](<../../../.tutorial/WORKFLOW.md>) and
[quality guide](<../../../.tutorial/QUALITY.md>). These shared files own policy.

Use **review** mode, specifically workflow section 3, followed by its
approved execution and closure sections when applicable. Preserve the user's
trailing arguments, scope and previously recorded approval. Merely discussing
or configuring this command does not invoke it.

Inventory and inspect the requested scope with the shared quality guide.
Produce a durable evidence-backed report and ordered repair plan. Present it,
record the report revision and pending approval, close PARTIAL and wait.
Do not change lessons, examples or published indexes before the user approves.
After approval, finish the accepted findings with one-unit verification/log/commit
cycles. Preserve the original report and map repairs to evidence. A report-only
request ends at the report. Sampling must never be described as a full review.

Read the full selected track log and relevant indexes/reference leaves before
work. Open the log before durable writes. After every approved implementation
unit, verify, save the log and commit before the next unit. Recover the same
phase/approval/plan after compaction; close the active entry before normal exit.
