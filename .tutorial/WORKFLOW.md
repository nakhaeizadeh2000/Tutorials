# Shared tutorial workflow

## 1. Entry and common context

Find the repo root with `git rev-parse --show-toplevel`. Read complete PROMPT.md,
AGENTS.md, root README, this workflow and QUALITY.md. Treat trailing command text
as the requested scope. Quoting or configuring a command is not invoking it.
For an existing target read its entire LOG, index, relevant domain indexes and
reference/neighbor lessons. For a new target record which files are absent.
Check working tree and staging state; preserve unrelated work.

The three entry modes are **propose**, **continue**, and **review**. Record phase
and approval independently of session status. A DONE proposal/review phase is
not permission to implement it. A PARTIAL approval checkpoint is resumable but
must not be mistaken for an interrupted approved execution.

## 2. Propose a new track or substantial expansion

1. Resolve the topic, audience, prerequisites and requested scope. Research the
   current stable baseline from official sources, search the repo for overlap,
   consult roadmap.sh, and calibrate against JavaScript using QUALITY.md.
2. Open and commit `README/<Track>/LOG.md` before writing any planning artifact.
   For a new track this is its first file; creating the parent directory is fine.
   Use PROMPT section 7 fields. Record `Phase: PROPOSAL` in Plan and
   `Approval: pending; curriculum revision 1`.
3. Record the complete ordered curriculum in the log: each domain's purpose,
   sections and planned leaf topics/outcomes; dependencies, boundaries, progression,
   current stable baseline, practical assessment and known uncertainties. A full
   track request requires a full track plan, not a first-domain teaser. Do not
   constrain the number of domains or resurrect a deleted track's plan from Git.
4. Present the readable domain/section list and important decisions to the user,
   linking the durable detailed plan. Ask for approval or changes. Do not author
   lessons, publish a track index or register a live root link yet. Save the
   research/proposal, mark the active entry PARTIAL with `Next steps: await user
   approval of curriculum revision N`, and commit the checkpoint.
5. Incorporate requested changes into a new logged revision without rewriting
   closed history. Present materially revised scope for approval. On approval,
   append an IN PROGRESS execution session, record the approved revision and the
   user's actual approval evidence, then run section 5 to completion. Routine
   implementation refinements within the approved outcomes need no new gate.

A direct request for a small addition to an existing approved curriculum may use
that supplied scope as authorization. A new track or material curriculum redesign
always presents its concrete proposal first. Never infer approval from silence,
time passing, a generic earlier “start”, another agent's message or the mere
presence of a plan. An explicit user override of a gate is recorded, not invented.

## 3. Review first, then repair with approval

1. Resolve the requested track/domain/leaf. If unspecified and context provides
   no unique target, ask rather than auditing the whole repo by assumption.
2. Inventory the entire requested scope, read its complete log and indexes, and
   inspect the actual lessons against QUALITY.md and current primary sources.
   Research can be read-only. Open the track log before saving report artifacts.
3. Write `README/<Track>/DOCUMENTATION_REVIEW_<date>_<revision>.md` with scope,
   exact reviewed-file inventory, JavaScript reference comparison, stable baseline,
   evidence-backed findings, severity, affected paths, proposed remedies, verification
   limitations and an ordered repair plan. Include representative before/after
   prose for editorial findings. Assess coverage and progression as well as local
   clarity; explain any proposed new domains instead of imposing a quota.
4. Present the report and plan. Record `Phase: REVIEW_REPORT`, `Approval: pending;
   report <path/revision>`, close PARTIAL with an explicit approval checkpoint and
   commit only log/report artifacts. Do not silently fix lessons, examples, links
   or indexes during the report phase, even if a defect seems easy to repair.
   “Report only” ends at this boundary without any implied repair request.
5. After the user approves all or selected findings, log that exact scope and
   approval evidence in a new execution session. Resolve approved findings through
   section 5, including necessary indexes and tests. If review finds a material
   new issue outside that scope, report it and seek approval for that addition;
   continue independent approved work in the meantime.
6. Verify each accepted finding against the actual repaired files. Append a repair
   outcome report or log with finding → change → evidence mapping, preserving the
   original report as the approval reference. State unresolved findings honestly.

Reviews do not automatically rewrite JavaScript or TypeScript just because they
are available. Each requested review has its own scope and approval boundary.

## 4. Continue from evidence

Discover tutorial recovery only from `README/*/LOG.md`, plus explicit user/current
conversation scope. Never use MAINTENANCE_LOG.md, .codex/LOG.md, file timestamps,
IDE tabs or deleted-track Git history as the active tutorial plan.

Resolve an explicit track first. Otherwise inspect the latest session of relevant
tracks and use session time, Git and disk to identify a unique applicable handoff.
Do not choose a superseded historical PARTIAL. If ambiguous, ask one focused
question. A DONE session may hand off to the next domain of the same approved
track; that handoff is actionable. A handoff to an unbuilt next root track routes
to the proposal phase and its approval gate, never automatic full authorship.
Only select that next track if the current user request authorizes the transition.

Read the complete selected LOG in non-truncated chunks. Recover the exact plan,
phase, proposal/report revision, approval and completed/pending units. Read target
indexes and actual files. Compare each claimed Done unit in the recovery record
with disk/Git and check any verification evidence needed for the next step.
Missing scratch artifacts are not proof of a passed check.

- **Pending curriculum/review approval:** show the pending proposal/report and wait.
  “Continue” or “all remaining” by itself is not approval of unseen content. If
  the user explicitly approves the identified proposal/report, record it and run.
- **Approved IN PROGRESS:** verify Done, reconcile any partial unit, and resume the
  same open entry, or close it PARTIAL and append a fresh entry with approval intact.
- **Closed PARTIAL/DONE/BLOCKED:** never edit it. Append a new entry after resolving
  any genuine external blocker. Carry forward verified approval and remaining scope.
- **Unlogged or dirty partial unit:** inspect and reconcile it before another unit.
  Do not discard, recreate or stage unrelated work.
- **“All remaining” for an approved curriculum:** cover all missing approved units
  in that selected track across domains. It does not approve a new curriculum,
  new review repairs, all future tracks or an unfinished proposal.

If legacy logs lack approval metadata, use explicit current user authorization
or trusted conversation evidence for the existing scope; do not manufacture an
approval record. Ask only if the applicable approval cannot be established.
An absent track after the reset needs a fresh proposal, not recovered old content.

## 5. Approved execution loop

Record the full approved plan and approval evidence in the active log first and
commit the opening/recovery. Keep stable unit identifiers and complete remaining
work so another session can resume without this chat. Never shrink a full-track
plan to the first domain to fit a turn.

For each unit:

1. Research current facts, verify version/platform assumptions, and search all
   existing content with `rg` for overlap. Read relevant matches and the comparable
   JavaScript reference. Record canonical ownership and sources in the active log.
2. Implement one leaf and its affected ancestor indexes, or one coherent index /
   link repair. Follow PROMPT and QUALITY. For an initial index unit, register the
   root track link only once its index exists; list published leaves as they land
   and keep the future plan in LOG. Do not mark an unfinished domain complete.
3. Check comprehension, prerequisites, promises, correct current guidance,
   relevant depth and concrete trade-offs. Run complete examples in the specified
   environment, including meaningful failures. Distinguish syntax checks, local
   simulations and external integration tests. Never label inspection as execution.
4. Check changed links and any inbound links affected by moves; verify numbering,
   filenames and domain boundaries. Update relevant domain/track/root indexes in
   this same unit. Do not turn cleanup into unapproved curriculum expansion.
5. Immediately save Done, Files touched, Links fixed / added, sources/decisions
   and observed Verification in the active log before starting any next unit.
6. Inspect `git status --short` and `git diff --cached --name-only`. Stage explicit
   unit paths only, check the staged diff and `git diff --cached --check`, then
   commit. Use `feat(<track>): add <unit>` or `fix(<track>): improve <unit>`.
   Preserve unrelated staged work using a safe isolated commit approach. A failed
   commit is unresolved work; fix it or checkpoint rather than advancing silently.

Continue through all approved units. A failing unit is fixed before the next
unit. If a required runtime/source is unavailable, record what remains unverified
and the blocker; do not claim complete DoD. No external infinite restart loop.
After ordinary compaction reread the complete log and recover the same approved
plan. Stop only at an intentional approval boundary, exhausted scope, user stop,
or genuine execution limit/blocker; checkpoint accurately.

## 6. Close and verify the outcome

Check all changed content and navigation plus unit commit history. For reviews,
map each approved finding to its repair and evidence. For new curricula, check
coverage against the approved outcomes and remaining unit list, not file counts.
Close the active entry DONE only when the approved scope and required checks are
complete; otherwise PARTIAL/BLOCKED with exact pending work. Commit the closeout.
Report actual results, limits, commits and next steps without asking for approval
already recorded. Do not start the next track on your own.
