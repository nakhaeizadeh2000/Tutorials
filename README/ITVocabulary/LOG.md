# IT Vocabulary — work log

## [2026-09-17 12:00] Session 1 — Deep dive: create track + Domain 01 Core IT Concepts
- Status: DONE
- Context read: PROMPT.md (full §1–§8), root README.md (Categories table — IT Vocabulary already listed at #3), README/TypeScript/README.md + README/JavaScript/README.md (Template A reference), README/JavaScript/01 Fundamentals and Mental Model/README.md (Template B reference), one JS leaf + one Overlaps leaf (anatomy/style reference). README/ITVocabulary/ did not exist — Mode 1 new track, no recovery needed (no prior IN PROGRESS entry).
- Plan:
  1. Unit 1 — track README.md (Template A) + this LOG open entry
  2. Unit 2 — 01 Core IT Concepts and Professional Jargon README.md (Template B, sections 1–6)
  3. Unit 3 — leaf 1.1. Why precise vocabulary matters
  4. Unit 4 — leaf 1.2. How to decode unknown terms
  5. Unit 5 — leaf 2.1. Hardware software OS and platform
  6. Unit 6 — leaf 2.2. Data units bit byte and encoding basics
  7. Unit 7 — leaf 2.3. Programs processes compile vs interpret
  8. Unit 8 — leaf 3.1. Core acronyms API SDK SLA KPI and friends
  9. Unit 9 — leaf 3.2. Meeting jargon standup sync blockers and shipped
  10. Unit 10 — leaf 4.1. Core concepts checklist mentors insist on
  11. Unit 11 — leaf 5.1. Common interview QA core IT vocabulary
  12. Unit 12 — leaf 6.1. Boundaries what is covered elsewhere
  13. Final verification + close entry
- Full planned curriculum (future domains, in order): 02 Hardware Infrastructure and Platforms, 03 Software Development and Engineering Terms, 04 Networks Web and Internet Vocabulary, 05 Data Databases and AI Vocabulary, 06 Security Cloud and DevOps Vocabulary, 07 Teamwork Agile and Interview Vocabulary. Only Domain 01 is implemented in this session; later sessions append domains 02–07.
- Research notes: vocabulary definitions are stable reference knowledge — verified against MDN Web Docs Glossary for web-adjacent terms; computing fundamentals per standard CS usage. No version-sensitive claims in Domain 01, so no era labels needed except the track-level "August 2026 era" line. roadmap.sh has no dedicated IT-vocabulary path; track positioned at #3 (before Git) per root README mentor-path decision so learners speak the language before touching tooling.
- Decisions:
  - Domain 01 teaches *how to learn terms* + *core concepts* + *everyday jargon* first; themed vocab (networks, data/AI, security, agile) deferred to domains 02–07 to respect DRY single-source-of-truth.
  - Leaf examples are usage snippets (good vs bad sentences/commands) rather than programs — labeled as such; this is the honest "runnable" form for a vocabulary track.
- Done:
  - [unit 1] Created `README/ITVocabulary/README.md` (Template A track index, lists Domain 01) + opened this LOG entry
  - [unit 2] Created `README/ITVocabulary/01 Core IT Concepts and Professional Jargon/README.md` (Template B index, sections 1–6, 10 leaf promises)
  - [unit 3] Created leaf `1.1. Why precise vocabulary matters.md`
  - [unit 4] Created leaf `1.2. How to decode unknown terms.md`
  - [unit 5] Created leaf `2.1. Hardware software OS and platform.md`
  - [unit 6] Created leaf `2.2. Data units bit byte and encoding basics.md`
  - [unit 7] Created leaf `2.3. Programs processes compile vs interpret.md`
  - [unit 8] Created leaf `3.1. Core acronyms API SDK SLA KPI and friends.md`
  - [unit 9] Created leaf `3.2. Meeting jargon standup sync blockers and shipped.md`
  - [unit 10] Created leaf `4.1. Core concepts checklist mental models mentors insist on.md`
  - [unit 11] Created leaf `5.1. Common interview QA core IT vocabulary.md`
  - [unit 12] Created leaf `6.1. Boundaries what is covered elsewhere.md`
  - [unit 13] Fixed 3 outbound links (added missing `../` level): 2.1 → JavaScript track, 6.1 → JavaScript + TypeScript tracks
- Files touched: created `README/ITVocabulary/README.md`, created `README/ITVocabulary/LOG.md`, created `README/ITVocabulary/01 Core IT Concepts and Professional Jargon/README.md`, created `.../sections/1. Learning vocabulary like a professional/1.1. Why precise vocabulary matters.md`, created `.../sections/1. Learning vocabulary like a professional/1.2. How to decode unknown terms.md`, created `.../sections/2. Core computing concepts/2.1. Hardware software OS and platform.md`, created `.../sections/2. Core computing concepts/2.2. Data units bit byte and encoding basics.md`, created `.../sections/2. Core computing concepts/2.3. Programs processes compile vs interpret.md`, created `.../sections/3. Everyday professional jargon/3.1. Core acronyms API SDK SLA KPI and friends.md`, created `.../sections/3. Everyday professional jargon/3.2. Meeting jargon standup sync blockers and shipped.md`, created `.../sections/4. Important points to remember/4.1. Core concepts checklist mental models mentors insist on.md`, created `.../sections/5. Interview questions and answers/5.1. Common interview QA core IT vocabulary.md`, created `.../sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md`; modified 2.1 + 6.1 (link fixes)
- Links fixed / added: track index links Domain 01 README (to be created in unit 2) + back-link to root README; root README row #3 already pointed here, now resolves; unit 13: 3 outbound sibling-track links fixed (`../../../../` level)
- Verification: link checker over all 13 md files — 47/47 `[text](<path>)` targets resolve, 0 broken. DoD walk per leaf: junior-readable first half (plain definitions + good/bad usage snippets), expert/mentor second half (trade-offs, consequences, mentor notes); every anti-pattern labeled with why; filenames free of `: , ? & ( )` with `M.k.` prefixes; domain/track indexes updated in same units; DRY — mechanics owned by JS/TS/Git tracks are linked, not re-taught (grep-confirmed no prior ITVocabulary coverage existed; single-source-of-truth preserved). Examples are usage snippets labeled as such (honest runnable form for a vocabulary track).
- Next steps: Session 2 — Domain 02 Hardware Infrastructure and Platforms (next `NN`): create domain README (Template B) + leaves (CPU/RAM/storage, client vs server, localhost vs cloud, checklist, interview QA, overlaps), then continue 03–07 in order. Upgrade the three `LOG.md`-placeholder links in leaf 6.1 to real domain READMEs as domains 04–06 land.

## [2026-09-17 12:30] Session 2 — Domain 02 Hardware Infrastructure and Platforms
- Status: DONE
- Context read: PROMPT.md (full §1–§8), root README.md (IT Vocabulary still #3), README/ITVocabulary/LOG.md (full — Session 1 DONE, no IN PROGRESS/PARTIAL anywhere; all tracks' LOGs grep-confirmed DONE), README/ITVocabulary/README.md (lists Domain 01 only). Recovery: disk verified — 13 md files match Session 1 Done claims, working tree clean at 78c7ac4. No discrepancies; trust log + disk, nothing to redo.
- Plan (resumed from Session 1 Next steps; no scope override in request):
  1. Unit 1 — open this entry (this write) + create 02 domain README (Template B, sections 1–2 + 4–6) + add track README row 2
  2. Unit 2 — leaf 1.1. CPU RAM and storage the working trio
  3. Unit 3 — leaf 1.2. Client vs server who serves whom
  4. Unit 4 — leaf 2.1. Localhost staging and production environments
  5. Unit 5 — leaf 2.2. Cloud words region zone instance and managed
  6. Unit 6 — leaf 4.1. Infrastructure checklist mentors insist on
  7. Unit 7 — leaf 5.1. Common interview QA infrastructure vocabulary
  8. Unit 8 — leaf 6.1. Boundaries what is covered elsewhere
  9. Final verification + close entry
- Research notes: hardware/cloud vocabulary is stable reference knowledge (standard CS + cloud-provider glossary consensus: region/zone/instance per AWS/GCP/Azure shared meaning). No version-sensitive claims; track-level "August 2026 era" line covers dating. roadmap.sh DevOps/cloud paths confirm region/zone/instance/managed-service as the core beginner set — no gaps added.
- Decisions:
  - Domain 02 stays at naming level (what each word points to); how servers/VMs/containers *work* belongs to future Linux/Docker/Cloud tracks — DRY boundary enforced in leaf 6.1.
  - Leaf examples remain good-vs-bad usage snippets, matching Domain 01's established honest-runnable form.
- Done:
  - [unit 1] Created `README/ITVocabulary/02 Hardware Infrastructure and Platforms/README.md` (Template B index, sections 1–2 + 4–6, 7 leaf promises) + added track README row 2
  - [unit 2] Created leaf `1.1. CPU RAM and storage the working trio.md`
  - [unit 3] Created leaf `1.2. Client vs server who serves whom.md`
  - [unit 4] Created leaf `2.1. Localhost staging and production environments.md`
  - [unit 5] Created leaf `2.2. Cloud words region zone instance and managed.md`
  - [unit 6] Created leaf `4.1. Infrastructure checklist mental models mentors insist on.md`
  - [unit 7] Created leaf `5.1. Common interview QA infrastructure vocabulary.md`
  - [unit 8] Created leaf `6.1. Boundaries what is covered elsewhere.md`
- Files touched: created `README/ITVocabulary/02 Hardware Infrastructure and Platforms/README.md`, modified `README/ITVocabulary/README.md` (row 2), created `.../sections/1. Inside the machine/1.1. CPU RAM and storage the working trio.md`, created `.../sections/1. Inside the machine/1.2. Client vs server who serves whom.md`, created `.../sections/2. Where code lives and runs/2.1. Localhost staging and production environments.md`, created `.../sections/2. Where code lives and runs/2.2. Cloud words region zone instance and managed.md`, created `.../sections/4. Important points to remember/4.1. Infrastructure checklist mental models mentors insist on.md`, created `.../sections/5. Interview questions and answers/5.1. Common interview QA infrastructure vocabulary.md`, created `.../sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md`
- Links fixed / added: track README row 2 → Domain 02 README; domain 02 §0 prerequisites link Domain 01 leaves 2.1 + 2.3
- Verification: link checker over all 21 track md files — 82/82 real `[text](<path>)` targets resolve, 0 broken (single regex hit on backticked doc text `` `[text](<path>)` `` in Session 1 verification line is a false positive, pre-existing). DoD walk per leaf: junior-readable first half, expert/mentor second half; anti-patterns with consequences; filenames free of `: , ? & ( )` with `M.k.` prefixes; domain+track indexes updated in unit 1; DRY — grep-confirmed no prior coverage of zone/instance/hyper-threading concepts in JS/TS tracks; mechanics deferred to future Linux/Docker/Cloud tracks via links.
- Next steps: Session 3 — Domain 03 Software Development and Engineering Terms (next `NN`): domain README (Template B) + leaves (repo/branch/commit, build/test/release, refactor/debt/code-review words, checklist, interview QA, overlaps), then 04–07 in order. Outstanding link upgrades: three `LOG.md`-placeholder links in Domain 01 leaf 6.1 → real READMEs when domains 04–06 land.

## [2026-09-17 13:00] Session 3 — Domain 03 Software Development and Engineering Terms
- Status: IN PROGRESS
- Context read: PROMPT.md (§1–30 binding core re-read; full read in Sessions 1–2), README/ITVocabulary/LOG.md (full — Sessions 1–2 DONE), README/ITVocabulary/README.md (lists Domains 01–02). Recovery: grep for `Status: IN PROGRESS|PARTIAL` found only historical prose in a TypeScript LOG line, no live entries; disk verified — Domain 02 README + 7 leaves match Session 2 Done claims, tree clean at 20dfa37. No discrepancies.
- Plan (resumed from Session 2 Next steps; no scope override in request):
  1. Unit 1 — open this entry + create 03 domain README (Template B, sections 1–3 + 4–6) + track README row 3
  2. Unit 2 — leaf 1.1. Repo branch commit and merge
  3. Unit 3 — leaf 1.2. Pull request review and conflicts
  4. Unit 4 — leaf 2.1. Build test release and deploy
  5. Unit 5 — leaf 3.1. Refactor tech debt legacy and cleanup
  6. Unit 6 — leaf 4.1. Engineering terms checklist mentors insist on
  7. Unit 7 — leaf 5.1. Common interview QA engineering terms
  8. Unit 8 — leaf 6.1. Boundaries what is covered elsewhere
  9. Final verification + close entry
- Research notes: VCS/build/release vocabulary is stable industry consensus (git docs for command names used at naming level only; CI/CD/release meanings per standard DevOps usage). No version-sensitive claims. DRY check: Git mechanics belong to future Git track — this domain stays at naming level.
- Decisions:
  - Git *commands* are named, never taught — one line each; how branching/merging works belongs to the Git track (boundary in leaf 6.1).
  - Leaf examples remain good-vs-bad usage snippets, matching Domains 01–02 form.
- Done:
  - [unit 1] Created `README/ITVocabulary/03 Software Development and Engineering Terms/README.md` (Template B index, sections 1–3 + 4–6, 7 leaf promises) + added track README row 3
  - [unit 2] Created leaf `1.1. Repo branch commit and merge.md`
  - [unit 3] Created leaf `1.2. Pull request review and conflicts.md`
  - [unit 4] Created leaf `2.1. Build test release and deploy.md`
  - [unit 5] Created leaf `3.1. Refactor tech debt legacy and cleanup.md`
- Files touched: created `README/ITVocabulary/03 Software Development and Engineering Terms/README.md`, modified `README/ITVocabulary/README.md`
- Links fixed / added: track README row 3 → Domain 03 README; domain 03 §0 prerequisites link Domains 01–02
- Verification:
- Next steps: (pending — filled at close)
