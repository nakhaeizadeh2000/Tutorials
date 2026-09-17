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
- Status: IN PROGRESS
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
- Files touched: created `README/Git/02 Core Workflow Add Commit and Inspect/README.md`, modified `README/Git/README.md` (row 2)
- Links fixed / added: track README row 2 → Domain 02 README; domain 02 §0 prerequisites link Domain 01 leaves
- Verification:
- Next steps:
