# Shared Codex tutorial unit loop

## 1. Sources of truth and execution order

Read root `PROMPT.md` completely before work. Root `AGENTS.md`, including its
NestJS-first section, applies unchanged. The Codex adaptation changes invocation
and tool plumbing only. Root policy takes precedence over an old neighboring
leaf's defects; explicit user overrides are recorded in the active track LOG.

Load root README, track README, **complete** track LOG, domain README, and relevant
neighbors before opening a session. The skill entrypoint determines creation
versus recovery and the exact authorized Plan. No tutorial state belongs in
`.codex/LOG.md`; that file tracks integration maintenance only.

Use this order without skipping or batching units:

1. Load context and recover verified progress.
2. Write the active track LOG entry FIRST and commit the log opening/recovery.
3. Research current facts and search the whole repository for overlap.
4. Implement one unit with its affected ancestor indexes.
5. Verify that unit, then immediately save the LOG update and commit it.
6. Repeat steps 3–5 until the Plan is exhausted, even across domains.
7. Verify the complete scope, close the active LOG, and commit the closeout.

For new tracks, the first repository file created is `README/<Track>/LOG.md`.
Creating its parent directory is allowed; no content or scratch artifact should
precede the log. For recovery, update the current open block or append a new
block after preserving closed history. Reuse PROMPT.md section 7's exact fields:
Status, Context read, Plan, Done, Decisions, Files touched, Links fixed / added,
Verification, Next steps. Include date/time and a sequential Session number.

## 2. Research and boundaries

Before each new section, use `rg` over the entire repository for its concepts,
synonyms, and related APIs. Read relevant hits and decide the canonical owner.
Teach a concept fully once; elsewhere use one line and an angle-bracket link,
adding only the genuinely new angle. Track logs and index summaries are evidence
about coverage, not substitutes for reading the existing explanation.

Verify current stable versions and non-obvious claims from official/authoritative
documentation. Check https://roadmap.sh/ for curriculum coverage alongside those
sources. Record exact URLs, dates/version labels, and relevant decisions in the
open log. Browsing failure is reported; remembered versions are not “verified.”
If a research/log-only unit is completed, update and commit it before moving on.

Backend tracks listed in AGENTS.md section 9 and future backend tracks use
**NestJS with Fastify adapter by default**. Include short Express-adapter
differences only where behavior changes, without teaching Express. Framework
mechanics stay in their owning tracks; link them. Record explicit user exceptions.

## 3. Unit implementation and indexes

A unit is one leaf plus its affected ancestor indexes, or a standalone coherent
index/link update. Never put multiple leaves in one commit. Use PROMPT.md's
Templates A/B, the `NN Domain/sections/M. Section/M.k. Leaf.md` hierarchy, and
teaching order. No unnecessary renames, reorderings, or deletion. If required,
record old→new mappings and repair inbound links in the same unit.

Each leaf delivers its domain-index promises with matching `### k) **Label**`
parts. For each promise, include the applicable definition, problem/history,
modern guidance, complete good/bad examples with consequences, common confusion,
performance trade-offs, mentor guidance, and cross-links. Ramp from junior to
mid, senior, expert, and mentor. Prefer clear technical sentences to repeated
slogans or decorative code. Do not mistake a neighboring formatting violation
for an override of PROMPT.md.

Keep 3–5 bold-label summary promises per leaf; numbered headings; bold labels
with useful parentheticals; separators; real language code fences; sanitized
filenames; and `[text](<path>)` relative links. Domains end with real leaves for
Important points/mentor checklist, Common pitfalls → production bugs, Interview
Q&A, and Overlaps to avoid. A README-only placeholder does not fulfill a leaf.

Update the domain index in the same unit as its leaf; update the track index when
its module list changes and the root index when a track changes. Record future
curriculum in the LOG; do not publish links to nonexistent planned leaves just
to fill a domain outline. Maintain coherent indexes at each committed checkpoint.

## 4. Verification that earns a commit

Walk every item in PROMPT.md section 4. Check all touched/new relative links
against their source directories, filenames, heading numbers, index-to-leaf
promises, and all required late sections. Verify linked content has the promised
meaning; an existing target alone does not establish DRY or accuracy.

Compile and execute runnable examples with declared dependencies, imports,
compiler settings, and versions. Exercise the behavior being taught, including
meaningful failure cases. Syntax-only checks, comment-only fences, simulation,
and live integration runs must be distinguished in the log. Never substitute
“mentally executed” for a real run. If a runtime or dependency is unavailable,
record the exact limitation and remaining check; do not claim complete DoD.

Keep temporary verification artifacts separate from tutorial content unless the
task calls for committed runnable projects. Record reproducible commands and
dependency versions; do not rely on an old `/tmp` directory surviving recovery.

Fix unit failures before starting another unit. A hard blocker is logged and
closed honestly rather than hidden behind a passing link/syntax count.

## 5. Immediate logging and one-unit commits

After completing a unit, save the active LOG update **before any next-unit
write**. Append its Done item, exact Files touched, Links fixed / added, research
decisions/sources, and observed Verification results. Closed historical blocks
are immutable; only the current open block is updated in place.

Then check the complete working tree and staging area, stage explicit unit paths,
and commit immediately. Example (replace paths with actual quoted paths):

```bash
git status --short
git diff --cached --name-only
git add -- "<leaf>" "<affected domain README>" "<track LOG>"
git diff --cached --name-only
git diff --cached --check
git commit -m "feat(<track>): add <NN Domain / M.k leaf> - <short why>"
```

Include the track/root README only when actually changed by this unit. Never use
`git add .` or `git add -A`, discard unrelated edits, or commit unrelated staged
files. If unrelated staged work already exists, preserve it and use an approach
that commits only the intended paths; if safe isolation is unclear, resolve it
before committing. A failed commit means the unit is not durably finished:
resolve the failure or record a blocker, never continue as though it succeeded.
Git commit is part of an authorized tutorial request; no repeated permission is
needed. Publishing/pushing is outside this local unit loop unless requested.

## 6. Delegation and continuous execution

The coordinator may run the unit directly. When delegation is requested or
authorized and supported, the optional `tutorial_executor` role implements one
assigned unit and returns evidence. The coordinator supplies full scope and the
open-log context, reviews the files, logs, and commits. It alone owns log/Git
mutations. Keep writers serial and never assign the next unit until the current
one is verified, logged, and committed. Do not require delegation to make progress.

Continue the entire recorded Plan without asking the user to repeat the command
after each leaf/domain. After compaction, read the complete active LOG and check
disk/Git, then continue. On user interruption, genuine hard limits, or external
blockers, preserve the current unit and precise resumption point. Do not invent
a successful closeout or launch endless automatic fresh sessions.

## 7. Final verification and closure

Check all affected indexes, links, overlap boundaries, runnable examples, and
unit commit history. Update the same session entry with final evidence. DONE
means the authorized Plan is fully achieved; PARTIAL names the remaining units;
BLOCKED names the external condition and next action. Normal exits never leave
the active session IN PROGRESS.

Write Next steps with track/domain/leaf paths, completed versus pending work,
verification still needed, and any future-track gates. Commit the log closeout
with `docs(<track>): close Session N - <outcome>` if not already committed in the
last unit. Report actual outcomes and limits; the next agent must be able to
resume from LOG + Git + disk without relying on this conversation.
