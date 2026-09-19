# Git — work log

## [2026-09-17 16:00] Session 1 — Create track + Domain 01 Git Fundamentals and Mental Model
- Status: DONE
- Context read: PROMPT.md (full §1–§8, binding), root README.md (Categories table — Git & GitHub already listed at #4, link target did not exist), README/JavaScript/README.md + README/TypeScript/README.md (Template A reference), README/ITVocabulary/README.md (most recent Template A), README/ITVocabulary/LOG.md (full — all 7 sessions DONE, TRACK COMPLETE), README/ITVocabulary/01 Core IT Concepts and Professional Jargon/README.md (Template B reference). README/Git/ did not exist — Mode 1 new track, no recovery needed (grep found no live `Status: IN PROGRESS` entries; only historical prose mentions).
- Plan (Mode 1 new track; Domain 01 fully implemented this session, domains 02–07 later):
  1. Unit 1 — open this entry (this write) + create track README.md (Template A, lists Domain 01)
  2. Unit 2 — create 01 Git Fundamentals and Mental Model README.md (Template B, sections 1–6) + track README row already covers it
  3. Unit 3 — leaf 1.1. What Git is and why snapshots win
  4. Unit 4 — leaf 1.2. The commit DAG history as a graph
  5. Unit 5 — leaf 2.1. Working tree index HEAD and the file lifecycle
  6. Unit 6 — leaf 2.2. Status diff and seeing what changed
  7. Unit 7 — leaf 3.1. Init clone config and your first commit
  8. Unit 8 — leaf 4.1. Fundamentals checklist mentors insist on
  9. Unit 9 — leaf 5.1. Common interview QA fundamentals
  10. Unit 10 — leaf 6.1. Boundaries what is covered elsewhere
  11. Final verification (DoD + links + DRY) + close entry
- Full planned curriculum (future domains, in order): 02 Core Workflow Add Commit and Inspect, 03 Branching Merging and Conflicts, 04 Remotes GitHub and Pull Requests, 05 Undo Fix and Rewrite History, 06 Workflows Tags Stash and Releases, 07 Production Checklist Security and Collaboration Mastery. Only Domain 01 is implemented in this session; later sessions append domains 02–07.
- Research notes: latest stable Git is 2.55.0 (released 2026-06-29, verified on git-scm.com 2026-09-17; era label "September 2026 era" used on track index). Pro Git book (Chacon/Straub, free online) is the canonical reference alongside `git help` / git-scm reference docs. roadmap.sh/git-github confirms the beginner spine (what is Git, install/config, add/commit, branching, remotes/GitHub, undo, workflows) — matches the 7-domain plan; no gaps added. Web-search API was blocked (403), so version facts came from direct fetch of git-scm.com. DRY grep: no prior Git-mechanics coverage anywhere in repo (JS track hits are incidental `.github`/wording matches only); ITVocabulary Domain 03 §1 owns the *naming* level of repo/branch/commit/PR — this track owns *mechanics* and links back (boundary declared in Domain 01 leaf 6.1).
- Decisions:
  - Next-track choice: root README mentor-path order puts Git & GitHub at #4 (first unimplemented track — JS/TS/ITVocabulary complete on disk). The TypeScript LOG tail suggested TS-Node/Databases loosely, but root README order governs; user request "go for next track, git" confirms Git.
  - Domain 01 teaches the mental model (snapshots, DAG, three areas, first commit) only; everyday commands/branching/remotes/history-rewrite deferred to domains 02–05 to respect DRY single-source-of-truth.
  - 10 commits ahead of origin/main (ITVocabulary Sessions 6–7 work) are left unpushed — push needs explicit user approval per repo git rules; not part of this session.
- Done:
  - [unit 1] Created `README/Git/README.md` (Template A track index, lists Domain 01) + opened this LOG entry
  - [unit 2] Created `README/Git/01 Git Fundamentals and Mental Model/README.md` (Template B index, sections 1–6, 8 leaf promises)
  - [unit 3] Created leaf `1.1. What Git is and why snapshots win.md`
  - [unit 4] Created leaf `1.2. The commit DAG history as a graph.md`
  - [unit 5] Created leaf `2.1. Working tree index HEAD and the file lifecycle.md`
  - [unit 6] Created leaf `2.2. Status diff and seeing what changed.md`
  - [unit 7] Created leaf `3.1. Init clone config and your first commit.md`
  - [unit 8] Created leaf `4.1. Fundamentals checklist mentors insist on.md`
  - [unit 9] Created leaf `5.1. Common interview QA fundamentals.md`
  - [unit 10] Created leaf `6.1. Boundaries what is covered elsewhere.md`
- Files touched: created `README/Git/LOG.md`, created `README/Git/README.md`, created `README/Git/01 Git Fundamentals and Mental Model/README.md`, created `.../sections/1. Thinking in snapshots/1.1. What Git is and why snapshots win.md`
- Links fixed / added: track index → Domain 01 README (to be created in unit 2) + back-link to root README; root README row #4 already pointed here, now resolves
- Verification: DoD walk per leaf — junior-readable first half (plain definitions + verbatim runnable git commands), expert/mentor second half (trade-offs, performance notes, mentor notes); every anti-pattern labeled with why; era label "September 2026 era / Git 2.55" on track index; link checker over all 11 Git md files — 43/43 real `[text](<path>)` targets resolve, 0 broken; filenames free of `: , ? & ( )` with `M.k.` prefixes (badchar scan 0 hits); domain+track indexes created in units 1–2; DRY — grep-confirmed no prior Git-mechanics coverage, ITVocabulary naming-level leaves linked not re-taught. One typo caught and fixed pre-commit (`\frac` in leaf 5.1).
- Next steps: Session 2 — Domain 02 Core Workflow Add Commit and Inspect (next `NN`): domain README (Template B) + leaves (partial staging, log filtering/formatting, show/blame archaeology, gitignore, aliases), then 03–07 in order. Outstanding: upgrade Domain 01 leaf 6.1 `(planned, see LOG)` forward-lines to live links as domains 02–07 land.

## [2026-09-17 17:00] Session 2 — Domain 02 Core Workflow Add Commit and Inspect
- Status: DONE
- Context read: PROMPT.md (binding; full read Session 1), root README.md (Git #4, unchanged), README/Git/LOG.md (full — Session 1 DONE), README/Git/README.md (lists Domain 01 only), README/Git/01 Git Fundamentals and Mental Model/README.md (Template B reference for Domain 02 shape). Recovery: grep for live `Status: IN PROGRESS|PARTIAL` across all track LOGs — none; disk verified — Domain 01 README + 8 leaves match Session 1 Done claims, tree clean. No discrepancies; trust log + disk, nothing to redo.
- Plan (resumed from Session 1 Next steps; no scope override in request):
  1. Unit 1 — open this entry (this write) + create 02 domain README (Template B, sections 1–6) + track README row 2
  2. Unit 2 — leaf 1.1. Partial staging and the atomic commit
  3. Unit 3 — leaf 1.2. Commit messages reviewers thank you for
  4. Unit 4 — leaf 2.1. Log filtering formatting and the questions log answers
  5. Unit 5 — leaf 2.2. Show blame and archaeology without blame games
  6. Unit 6 — leaf 3.1. Gitignore patterns that keep status fast and secrets out
  7. Unit 7 — leaf 3.2. Aliases and config that compress the daily loop
  8. Unit 8 — leaf 4.1. Workflow checklist mentors insist on
  9. Unit 9 — leaf 5.1. Common interview QA workflow and history
  10. Unit 10 — leaf 6.1. Boundaries what is covered elsewhere
  11. Unit 11 — link upgrade: Domain 01 leaf 6.1 Domain-02 forward-line → live Domain 02 README
  12. Final verification (DoD + links + DRY) + close entry
- Research notes: everyday-command facts are stable Git knowledge (verified against git-scm reference docs model from Session 1; Pro Git Ch. 2–3 cover add/commit/log/show/blame/ignore/aliases). Conventional Commits v1.0.0 is the message-convention reference. No version-sensitive claims — only the track-level September 2026 era label applies.
- Decisions:
  - Domain 02 answers "how do I do it fast every day?" — the model questions stay in Domain 01, linked back, never re-taught.
  - Commit-message conventions live here (1.2), not in Domain 06 workflows: messages are written at commit time, and Domain 06 will assume the habit.
- Done:
  - [unit 1] Created `README/Git/02 Core Workflow Add Commit and Inspect/README.md` (Template B index, sections 1–6, 8 leaf promises) + added track README row 2
  - [unit 2] Created leaf `1.1. Partial staging and the atomic commit.md`
  - [unit 3] Created leaf `1.2. Commit messages reviewers thank you for.md`
  - [unit 4] Created leaf `2.1. Log filtering formatting and the questions log answers.md`
  - [unit 5] Created leaf `2.2. Show blame and archaeology without blame games.md`
  - [unit 6] Created leaf `3.1. Gitignore patterns that keep status fast and secrets out.md`
  - [unit 7] Created leaf `3.2. Aliases and config that compress the daily loop.md`
  - [unit 8] Created leaf `4.1. Workflow checklist habits mentors insist on.md`
  - [unit 9] Created leaf `5.1. Common interview QA workflow and history.md`
  - [unit 10] Created leaf `6.1. Boundaries what is covered elsewhere.md`
  - [unit 11] Upgraded Domain 01 leaf 6.1 Domain-02 forward-line → live Domain 02 README link
  - [unit 12] Link-fix pass: 8 cross-domain `../../01…` links in Domain 02 leaves corrected to `../../../01…` (leaf dirs sit one level deeper than assumed) + 1 same-track `./1.1…` corrected to `../1. Composing commits/1.1…`; re-check 89/89 resolve, 0 broken
- Files touched: created `README/Git/02 Core Workflow Add Commit and Inspect/README.md`, modified `README/Git/README.md` (row 2)
- Files touched: created `README/Git/02 Core Workflow Add Commit and Inspect/README.md`, modified `README/Git/README.md` (row 2)
- Links fixed / added: track README row 2 → Domain 02 README; domain 02 §0 prerequisites link Domain 01 leaves
- Verification: DoD walk per leaf — junior-readable first half (definitions + verbatim git commands), expert/mentor second half (trade-offs, performance notes, mentor notes); anti-patterns labeled with why; link checker over all 20 Git md files — 89/89 real `[text](<path>)` targets resolve, 0 broken (unit-12 pass fixed 9 depth bugs: cross-domain leaf links need `../../../`, verified by re-run); 0 `%20`; filenames clean; domain+track indexes updated in unit 1; DRY — model theory stays in Domain 01 (linked, never re-taught), release automation deferred to Domain 06, rescue to Domain 05. One pre-commit cleanup (invalid `pull.ff` keystroke passage in leaf 3.2 simplified to the single correct line).
- Next steps: Session 3 — Domain 03 Branching Merging and Conflicts (next `NN`): domain README (Template B) + leaves (branch create/switch, fast-forward vs true merges, conflict markers and resolution, rerere), then 04–07 in order. Outstanding: upgrade Domain 01 + 02 leaf 6.1 `(planned, see LOG)` forward-lines to live links as domains 03–07 land (Domain-02 lines already live).

## [2026-09-18 08:00] Session 3 — Domain 03 Branching Merging and Conflicts
- Status: DONE
- Context read: PROMPT.md (binding; full reads Sessions 1–2), root README.md (Git #4, unchanged), README/Git/LOG.md (full — Sessions 1–2 DONE), README/Git/README.md (lists Domains 01–02). Recovery: grep for live `Status: IN PROGRESS|PARTIAL` across all track LOGs — none; disk verified — Domain 02 README + 8 leaves match Session 2 Done claims, tree clean. No discrepancies; trust log + disk, nothing to redo.
- Plan (resumed from Session 2 Next steps; no scope override in request):
  1. Unit 1 — open this entry (this write) + create 03 domain README (Template B, sections 1–6) + track README row 3
  2. Unit 2 — leaf 1.1. Creating switching and deleting branches
  3. Unit 3 — leaf 1.2. Short-lived branches and the feature-branch habit
  4. Unit 4 — leaf 2.1. Fast-forward vs true merges
  5. Unit 5 — leaf 2.2. Reading conflict markers and resolving without fear
  6. Unit 6 — leaf 3.1. Rerere and merge confidence
  7. Unit 7 — leaf 4.1. Branching checklist mentors insist on
  8. Unit 8 — leaf 5.1. Common interview QA branching and merging
  9. Unit 9 — leaf 6.1. Boundaries what is covered elsewhere
  10. Unit 10 — link upgrades: Domain 01 + 02 leaf 6.1 Domain-03 forward-lines → live Domain 03 README
  11. Final verification (DoD + links + DRY) + close entry
- Research notes: branching/merging facts are stable Git knowledge (Pro Git Ch. 3 covers branch/switch/merge/conflicts/rerere; `git switch`/`git restore` since 2.23 are the taught spellings, `checkout` noted as legacy). No version-sensitive claims — track-level September 2026 era label applies.
- Decisions:
  - Domain 03 owns local branching end-to-end (create → work → join → delete); remotes/tracking-branch sync stays in Domain 04, rebase-based joining stays in Domain 05 — both linked, never taught here.
  - Conflict resolution taught as a calm mechanical loop (markers → decide → test → add → commit), not a crisis skill.
- Done:
  - [unit 1] Created `README/Git/03 Branching Merging and Conflicts/README.md` (Template B index, sections 1–6, 8 leaf promises) + added track README row 3
  - [unit 2] Created leaf `1.1. Creating switching and deleting branches.md` (switch -c gap removal, carry-vs-refuse dirty rule with exact refusal text, -d guard vs -D intent; verified on Git 2.53.0: -d merged rc=0, unmerged rc=1 with "not fully merged", carry rc=0, overwrite-block rc=1)
  - [unit 3] Created leaf `1.2. Short-lived branches and the feature-branch habit.md` (one-idea divergence window, type/area naming for triage, delete-on-merge ritual; verified: --merged lists feat/demo before -d, gone after)
  - [unit 4] Created leaf `2.1. Fast-forward vs true merges.md` (slide vs two-parent join, merge-message naming, --no-ff/--ff-only decision table; verified on Git 2.53.0: FF prints Updating/Fast-forward, no-ff graph shape, --ff-only diverged rc=128 "Not possible to fast-forward")
  - [unit 5] Created leaf `2.2. Reading conflict markers and resolving without fear.md` (markers-as-question with verified layout, edit-test-add-commit loop, --abort pause; verified: rc=1 + CONFLICT + UU status, abort restores file/log/status exactly)
  - [unit 6] Created leaf `3.1. Rerere and merge confidence.md` (record/reuse/relax, enable-globally-today, local-only cache sharing; verified: "Recorded resolution for 'f.txt'", replay "Resolved 'f.txt' using previous resolution." with pre-filled content still UU)
  - [unit 7] Created leaf `4.1. Branching checklist habits mentors insist on.md` (branch-small / read-graph / resolve-calmly synthesis with pre-merge gate commands; mirrors Domain 02 checklist shape)
  - [unit 8] Created leaf `5.1. Common interview QA branching and merging.md` (fork-check merge answer, FF-vs-join judgment, conflict-hunk exercise with verified commands, rapid-fire drills + grading guidance)
  - [unit 9] Created leaf `6.1. Boundaries what is covered elsewhere.md` (label/remotes → 01/04, rebase/surgery → 05, strategy → 06; map-style mentor note consistent with 01/02)
  - [unit 10] Upgraded Domain 01 + 02 leaf 6.1 Domain-03 signpost lines → live Domain 03 README links (same `[...](<../../../03 .../README.md>)` form as existing live links)
- Files touched: created `README/Git/03 Branching Merging and Conflicts/README.md`, modified `README/Git/README.md` (row 3); created `.../sections/1. Branches in daily use/1.1. Creating switching and deleting branches.md`, created `.../sections/1. Branches in daily use/1.2. Short-lived branches and the feature-branch habit.md`, created `.../sections/2. Joining lines/2.1. Fast-forward vs true merges.md`, created `.../sections/2. Joining lines/2.2. Reading conflict markers and resolving without fear.md`, created `.../sections/3. Reuse and safety/3.1. Rerere and merge confidence.md`, created `.../sections/4. Important points to remember/4.1. Branching checklist habits mentors insist on.md`, created `.../sections/5. Interview questions and answers/5.1. Common interview QA branching and merging.md`, created `.../sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md`; modified Domain 01 + 02 leaf 6.1s (Domain-03 live links)
- Links fixed / added: track README row 3 → Domain 03 README; domain 03 §0 prerequisites link Domains 01–02; [unit 10] Domain 01 + 02 leaf 6.1 Domain-03 lines now live links to Domain 03 README
- Verification: DoD walk per leaf — junior-readable first half (plain definitions + verbatim runnable git commands with verified outputs), expert/mentor second half (trade-offs, performance notes, mentor notes); every anti-pattern labeled with why; link checker over all 29 Git md files — 149/149 real `[text](<path>)` targets resolve, 0 broken, 0 `%20`; filenames free of `: , ? & ( )` with `M.k.` prefixes (badchar scan 0 hits); heading prefixes 8/8 match filenames; index promises 8/8 ↔ leaf delivery 1:1; domain+track indexes created in unit 1; DRY — model theory stays in Domain 01 (linked, never re-taught), remotes/rebase/strategy deferred to Domains 04–06 via textual forwards; all command claims executed on Git 2.53.0 before writing (switch -c, -d refusal rc=1, carry rc=0, overwrite-block rc=1, FF/no-ff/--ff-only rc=128, CONFLICT+UU, abort restore, --merged audit, Recorded/Resolved rerere lines). Self-repair note: an early LOG edit duplicated the entry tail (Links/Verification/Next steps) — deduped before close, history after unit 3 is clean.
- Next steps: Session 4 — Domain 04 Remotes GitHub and Pull Requests (next `NN`): domain README (Template B) + leaves (fetch/pull/push, tracking branches, forks, PR flow, fork currency), then 05–07 in order. Outstanding: upgrade Domain 01/02/03 leaf 6.1 `(planned, see LOG)` forward-lines to live links as domains 04–07 land (Domain-03 lines already live).

## [2026-09-19 07:22] Session 4 — Domains 04–07 to track completion (resume from Session 3 Next steps)
- Status: IN PROGRESS
- Context read: PROMPT.md (binding, full); root README.md (Git #4); README/Git/README.md (rows 1–3); README/Git/LOG.md full Sessions 1–3; README/Git/03 + 02 domain READMEs (Template B); sample leaf 03/2.1 (anatomy/style); disk `find` (Domain 03 README + 8 leaves match Session 3 Done claims — no discrepancies; total 30 md files).
- Recovery verification (PROMPT.md:165): no live `Status: IN PROGRESS|PARTIAL` in any track LOG (JS 24 modules DONE track-complete; TS 24 modules DONE track-complete; ITVocabulary 7/7 DONE track-complete; Git Sessions 1–3 DONE). Session 3 Done bullets verified against disk (9 files under `03 Branching Merging and Conflicts/` present, 1:1). Trust disk over log: no discrepancies, nothing to redo. Fresh Session 4 block. No scope override in request (no `rest of`/`till finishing`/`complete`) → resume from Session 3 Next steps: Domain 04, then 05–07 in order until track complete.
- Plan (Mode 2, one unit = one leaf/index/link-set → LOG update → commit, looping without stopping):
  1. Unit D4-1 — open this entry (this write) + create 04 domain README (Template B, sections 1–6) + track README row 4
  2. Unit D4-2 — leaf 1.1. Fetch pull and push
  3. Unit D4-3 — leaf 1.2. Tracking branches and upstream
  4. Unit D4-4 — leaf 2.1. Forks clones and remotes
  5. Unit D4-5 — leaf 2.2. Pull request flow review and merge
  6. Unit D4-6 — leaf 3.1. Keeping forks and branches current
  7. Unit D4-7 — leaf 4.1. Remotes checklist mentors insist on
  8. Unit D4-8 — leaf 5.1. Common interview QA remotes and PRs
  9. Unit D4-9 — leaf 6.1. Boundaries what is covered elsewhere
  10. Unit D4-10 — link upgrades: 01/02/03 leaf 6.1 Domain-04 lines → live Domain 04 README
  11. Units D5-1…D5-10 — Domain 05 Undo Fix and Rewrite History (README + leaves: restore/reset/checkout paths, revert, amend, rebase interactive, reflog rescue, checklist, QA, boundaries) + row 5 + link upgrades
  12. Units D6-1…D6-10 — Domain 06 Workflows Tags Stash and Releases (README + leaves: trunk vs flow, tags, stash, release lines, checklist, QA, boundaries) + row 6 + link upgrades
  13. Units D7-1…D7-9 — Domain 07 Production Checklist Security and Collaboration Mastery (README + leaves: signing, secret hygiene, hooks/CI gates, collaboration contracts, checklist, QA, boundaries) + row 7 + retire ALL remaining `(planned, see LOG)` placeholders track-wide
  14. Final verification (DoD + links + DRY) + close entry DONE (PARTIAL only on context limits)
- Full remaining curriculum: 04 Remotes GitHub and Pull Requests ← now; 05 Undo Fix and Rewrite History; 06 Workflows Tags Stash and Releases; 07 Production Checklist Security and Collaboration Mastery. Track complete after Domain 07.
- Research notes: remotes/sync facts are stable Git knowledge (Pro Git Ch. 2–3: remote/fetch/pull/push, tracking branches; GitHub Docs: fork/PR flow). `git switch`/`restore` since 2.23 are taught spellings. No version-sensitive claims — track-level September 2026 era (Git 2.55) applies. DRY grep: no prior remotes-mechanics coverage in repo (Domains 01–03 name remotes only, defer mechanics here).
- Decisions:
  - Domain 04 shape mirrors 01–03 (8 leaves: 2 sync + 2 GitHub + 1 currency + checklist + QA + boundaries); rebase-vs-merge policy and history rewrite stay textual forwards to Domains 05/06 (no dead links).
  - Domain 05 shape mirrors 04 (8 leaves: 2 safe-undo + 2 rewrite + 1 rescue + checklist + QA + boundaries); merge policy stays forward to 06, trust to 07.
- Done:
  - [unit D4-1] Created `README/Git/04 Remotes GitHub and Pull Requests/README.md` (Template B index, sections 1–6, 8 leaf promises) + 6 section folders + added track README row 4
  - [unit D4-2] Created leaf `04/sections/1. Syncing with remotes/1.1. Fetch pull and push.md` (fetch-read vs pull-join, push refusal contract, inspect-before-join ritual; all outputs verified on Git 2.53.0: fetch mirror line, rejected non-fast-forward rc=1, ahead1/behind1, --ff-only fatal rc=128)
  - [unit D4-3] Created leaf `04/sections/1. Syncing with remotes/1.2. Tracking branches and upstream.md` (upstream pairing, read-only mirrors, ahead/behind table; verified: -u pairing line, no-upstream fatal rc=128, branch -vv ahead1/behind1)
  - [unit D4-4] Created leaf `04/sections/2. GitHub collaboration/2.1. Forks clones and remotes.md` (fork-vs-clone rule, origin/upstream directions, clone-once discipline; verified: remote -v 4 lines, fetch upstream new-branch mirror rc=0, branch -r both families; real repo remotes untouched)
  - [unit D4-5] Created leaf `04/sections/2. GitHub collaboration/2.2. Pull request flow propose review and merge.md` (branch-push-propose unit, staged reading, delete-on-merge; git-side verified: push -u new-branch lines; `gh` absent in env so gh lines labeled documented-per-manual)
  - [unit D4-6] Created leaf `04/sections/3. Staying current/3.1. Keeping forks and branches current.md` (downhill sync order, rebase-private/merge-public, stale-PR rot; verified: fetch --all two-remote lines rc=0, two-name fetch fatal rc=128 gotcha, rebase up-to-date rc=0)
  - [unit D4-7] Created leaf `04/sections/4. Important points to remember/4.1. Remotes checklist habits mentors insist on.md` (fetch-first ritual, pair-on-birth, small-and-fresh synthesis; commands reference verified D4-2…D4-6 probes)
  - [unit D4-8] Created leaf `04/sections/5. Interview questions and answers/5.1. Common interview QA remotes and pull requests.md` (fetch-vs-pull judgment, rejected-push exercise, PR walkthrough; outputs reference verified probes)
  - [unit D4-9] Created leaf `04/sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md` (label/join theory → 01/03, rewrite → 05, policy/trust → 06/07 map)
  - [unit D4-10] Upgraded Domain 01 + 02 + 03 leaf 6.1 Domain-04 signpost lines → live Domain 04 README links (same `[...](<../../../04 .../README.md>)` form as Session 3 upgrades; 03 body + boundary-rule lines both live)
  - [unit D5-1] Created `README/Git/05 Undo Fix and Rewrite History/README.md` (Template B index, sections 1–6, 8 leaf promises) + 6 section folders + added track README row 5
  - [unit D5-2] Created leaf `05/sections/1. Undoing safely/1.1. Restore reset and unstaging without fear.md` (unstage-vs-discard areas, --staged/--source/--soft/mixed/hard table; verified: restore --staged leaves ' M', amend hash change, soft keeps index staged)
  - [unit D5-3] Created leaf `05/sections/1. Undoing safely/1.2. Revert the public undo.md` (append-only revert, -m 1 merge parent, revert-conflict loop; verified: Revert commit hash chain, merge+revert -m 1 outputs)
  - [unit D5-4] Created leaf `05/sections/2. Rewriting history/2.1. Amend fixing the last commit.md` (tip replacement, orphan semantics, lease-push; verified: 5e3a9cd -> 16e80b4 replacement)
  - [unit D5-5] Created leaf `05/sections/2. Rewriting history/2.2. Rebase and cherry-pick replaying commits.md` (replay onto new base, interactive script, single-commit picks; verified: rebase success line, up-to-date rc=0, cherry-pick new hash, empty-pick detection; caught + fixed own non-English artifact pre-commit)
  - [unit D5-6] Created leaf `05/sections/3. Rescue and recovery/3.1. Reflog the seatbelt under everything.md` (movement journal, re-label recovery, local-and-finite coverage; verified: full reflog trail, log --all count 0 for orphan, branch-rescue restoration)
  - [unit D5-7] Created leaf `05/sections/4. Important points to remember/4.1. Undo checklist habits mentors insist on.md` (golden rule, status-plus-bookmark, lease-and-reflog synthesis; references verified D5-2…D5-6 probes)
  - [unit D5-8] Created leaf `05/sections/5. Interview questions and answers/5.1. Common interview QA undo rewrite and recovery.md` (wrong-branch trap, reset/revert/restore tree, force-push incident; references verified probes)
  - [unit D5-9] Created leaf `05/sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md` (joining → 03/04, policy → 06, trust → 07, composition/model → 02/01 map)
  - [unit D5-10] Upgraded Domain 01 + 02 + 03 + 04 leaf 6.1 Domain-05 signpost lines → live Domain 05 README links (list items, body, boundary-rule, cross-links; code comment reworded to live-link-below since fences can't link)
- Files touched:
  - [unit D4-1] created `README/Git/04 Remotes GitHub and Pull Requests/README.md` (+ 6 section dirs); modified `README/Git/README.md` (row 4)
  - [unit D5-1] created `README/Git/05 Undo Fix and Rewrite History/README.md` (+ 6 section dirs); modified `README/Git/README.md` (row 5)
- Links fixed / added:
  - [unit D4-1] track row 4 → Domain 04 README; domain 04 §0 prerequisites link Domains 01–03 (all resolve)
  - [unit D4-10] 01/6.1 + 02/6.1 Domain-04 list lines → live links; 03/6.1 body + boundary-rule Domain-04 mentions → live links (4 lines total)
- Verification:
  - [unit D4-1] domain index 8 leaf links are placeholders until leaves land (expected); 3 prerequisite links resolve; track rows 1–4 resolve
  - [unit D4-10] link checker over all Git md files: 204 angle-bracket targets, 4 broken — all 4 are backticked doc-text inside LOG history (pre-existing false-positive class, same as Sessions 1–3 notes); real content links 200/200 resolve, 0 `%20`; Domain 04 index promises 8/8 ↔ leaves 8/8 present; heading prefixes 8/8 match filenames
  - [unit D5-10] link checker: 266 angle-bracket targets, 5 broken — all 5 backticked doc-text in LOG history (same class); real content 261/261 resolve, 0 `%20`; Domain 05 promises 8/8 ↔ leaves 8/8; heading prefixes 8/8 match
- Next steps:
