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
- Status: DONE
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
  - [unit 6] Created leaf `4.1. Engineering terms checklist mentors insist on.md`
  - [unit 7] Created leaf `5.1. Common interview QA engineering terms.md`
  - [unit 8] Created leaf `6.1. Boundaries what is covered elsewhere.md`
- Files touched: created `README/ITVocabulary/03 Software Development and Engineering Terms/README.md`, modified `README/ITVocabulary/README.md` (row 3), created `.../sections/1. Change words/1.1. Repo branch commit and merge.md`, created `.../sections/1. Change words/1.2. Pull request review and conflicts.md`, created `.../sections/2. Ship words/2.1. Build test release and deploy.md`, created `.../sections/3. Health words/3.1. Refactor tech debt legacy and cleanup.md`, created `.../sections/4. Important points to remember/4.1. Engineering terms checklist mental models mentors insist on.md`, created `.../sections/5. Interview questions and answers/5.1. Common interview QA engineering terms.md`, created `.../sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md`
- Links fixed / added: track README row 3 → Domain 03 README; domain 03 §0 prerequisites link Domains 01–02; leaf 2.1 → Domain 02 §2.1
- Verification: link checker over whole track — 124/124 real `[text](<path>)` targets resolve, 0 broken (3 backticked doc-text matches skipped, pre-existing). Caught + fixed own defect pre-commit: stray non-English word in leaf 3.1 replaced with English. DoD walk per leaf: junior-readable definitions + good/bad snippets first half, trade-offs + mentor notes second half; filenames clean with `M.k.` prefixes; domain+track indexes updated in unit 1; DRY — git commands/pipelines/test code named-not-taught, mechanics deferred to Git/Testing/Domain 06-07 via links.
- Next steps: Session 4 — Domain 04 Networks Web and Internet Vocabulary (next `NN`): domain README (Template B) + leaves (protocol/packet, DNS, HTTP/request verbs/status, latency vs bandwidth, checklist, interview QA, overlaps), then 05–07 in order. Outstanding link upgrades: `LOG.md`-placeholder links in Domain 01 leaf 6.1 (×3) and Domain 03 leaf 6.1 (Domain 06) → real READMEs as domains 04–06 land.

## [2026-09-17 13:30] Session 4 — Domain 04 Networks Web and Internet Vocabulary
- Status: DONE
- Context read: PROMPT.md (binding; full reads Sessions 1–2, core re-reads 3–4), root README.md (IT Vocabulary #3, unchanged), README/ITVocabulary/LOG.md (full — Sessions 1–3 DONE), README/ITVocabulary/README.md (lists Domains 01–03). Recovery: grep for live `Status: IN PROGRESS|PARTIAL` across all track LOGs — none; disk verified — Domain 03 README + 7 leaves match Session 3 Done claims, tree clean at eec0fe9. No discrepancies.
- Plan (resumed from Session 3 Next steps; no scope override in request):
  1. Unit 1 — open this entry + create 04 domain README (Template B, sections 1–2 + 4–6) + track README row 4
  2. Unit 2 — leaf 1.1. Protocol packet and address
  3. Unit 3 — leaf 1.2. DNS names to numbers
  4. Unit 4 — leaf 2.1. HTTP requests verbs and status codes
  5. Unit 5 — leaf 2.2. Latency vs bandwidth and timeouts
  6. Unit 6 — leaf 4.1. Networking vocabulary checklist mentors insist on
  7. Unit 7 — leaf 5.1. Common interview QA networking vocabulary
  8. Unit 8 — leaf 6.1. Boundaries what is covered elsewhere
  9. Unit 9 — link upgrade: Domain 01 leaf 6.1 Domain-04 placeholder → real Domain 04 README
  10. Final verification + close entry
- Research notes: networking vocabulary per IETF/MDN consensus (protocol/packet/DNS/HTTP semantics stable for decades). No version-sensitive claims. DRY check: packet mechanics/socket programming belong to future tracks — naming level only.
- Decisions:
  - Protocol internals (TCP handshakes, TLS negotiation) named-not-taught; how-packets-move belongs to future Networks/System tracks.
  - Leaf examples remain good-vs-bad usage snippets, matching Domains 01–03 form.
- Done:
  - [unit 1] Created `README/ITVocabulary/04 Networks Web and Internet Vocabulary/README.md` (Template B index, sections 1–2 + 4–6, 7 leaf promises) + added track README row 4
  - [unit 2] Created leaf `1.1. Protocol packet and address.md`
  - [unit 3] Created leaf `1.2. DNS names to numbers.md`
  - [unit 4] Created leaf `2.1. HTTP requests verbs and status codes.md`
  - [unit 5] Created leaf `2.2. Latency vs bandwidth and timeouts.md`
  - [unit 6] Created leaf `4.1. Networking vocabulary checklist mentors insist on.md`
  - [unit 7] Created leaf `5.1. Common interview QA networking vocabulary.md`
  - [unit 8] Created leaf `6.1. Boundaries what is covered elsewhere.md`
  - [unit 9] Upgraded Domain 01 leaf 6.1 placeholders → real READMEs (Domain 04 + Domains 02/03)
- Files touched: created `README/ITVocabulary/04 Networks Web and Internet Vocabulary/README.md`, modified `README/ITVocabulary/README.md` (row 4), created `.../sections/1. How messages travel/1.1. Protocol packet and address.md`, created `.../sections/1. How messages travel/1.2. DNS names to numbers.md`, created `.../sections/2. Web talk/2.1. HTTP requests verbs and status codes.md`, created `.../sections/2. Web talk/2.2. Latency vs bandwidth and timeouts.md`, created `.../sections/4. Important points to remember/4.1. Networking vocabulary checklist mental models mentors insist on.md`, created `.../sections/5. Interview questions and answers/5.1. Common interview QA networking vocabulary.md`, created `.../sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md`; modified Domain 01 leaf 6.1 (link upgrades)
- Links fixed / added: track README row 4 → Domain 04 README; domain 04 §0 prerequisites link Domains 01–02; leaf 2.1 → Domain 02 §1.2; unit 9 retired two `LOG.md`-placeholder links in Domain 01 leaf 6.1
- Verification: link checker over whole track (37 files) — 167/167 real targets resolve, 0 broken (backticked doc-text lines skipped). DoD walk per leaf: junior definitions + good/bad snippets first half, trade-offs + mentor notes second half; filenames clean with `M.k.` prefixes; domain+track indexes updated in unit 1; DRY — handshakes/TLS/sockets/API-design named-not-taught, deferred to future Networks/API/Cloud tracks.
- Next steps: Session 5 — Domain 05 Data Databases and AI Vocabulary (next `NN`): domain README (Template B) + leaves (data vs information, database/table/query, AI model/token/training vs inference, checklist, interview QA, overlaps), then 06–07. Outstanding link upgrades: `LOG.md`-placeholders in Domain 01 leaf 6.1 (Domains 05–06) + Domain 02/03/04 leaf 6.1s (Domains 05–06) → real READMEs as 05–06 land.

## [2026-09-17 14:00] Session 5 — Domain 05 Data Databases and AI Vocabulary
- Status: DONE
- Context read: PROMPT.md (binding; full reads Sessions 1–2, core re-reads 3–5), root README.md (IT Vocabulary #3, unchanged), README/ITVocabulary/LOG.md (full — Sessions 1–4 DONE), README/ITVocabulary/README.md (lists Domains 01–04). Recovery: grep for live `Status: IN PROGRESS|PARTIAL` across all track LOGs — none; disk verified — Domain 04 README + 7 leaves match Session 4 Done claims, tree clean at 367435b. No discrepancies.
- Plan (resumed from Session 4 Next steps; no scope override in request):
  1. Unit 1 — open this entry + create 05 domain README (Template B, sections 1–2 + 4–6) + track README row 5
  2. Unit 2 — leaf 1.1. Data vs information structured vs unstructured
  3. Unit 3 — leaf 1.2. Database table query and index
  4. Unit 4 — leaf 2.1. Model token and prompt
  5. Unit 5 — leaf 2.2. Training vs inference and hallucination
  6. Unit 6 — leaf 4.1. Data vocabulary checklist mentors insist on
  7. Unit 7 — leaf 5.1. Common interview QA data and AI vocabulary
  8. Unit 8 — leaf 6.1. Boundaries what is covered elsewhere
  9. Unit 9 — link upgrades: Domain 01 leaf 6.1 Domain-05 placeholder → real Domain 05 README
  10. Final verification + close entry
- Research notes: data/DB/AI vocabulary per standard usage (relational docs for DB terms; provider-neutral LLM glossary consensus for token/prompt/training/inference). No version-sensitive claims. DRY check: SQL/query mechanics belong to future Databases track; ML internals to future AI topics — naming level only.
- Decisions:
  - Query languages and model architectures named-not-taught; what-each-word-points-to stays, how-it-works defers.
  - Leaf examples remain good-vs-bad usage snippets, matching Domains 01–04 form.
- Done:
  - [unit 1] Created `README/ITVocabulary/05 Data Databases and AI Vocabulary/README.md` (Template B index, sections 1–2 + 4–6, 7 leaf promises) + added track README row 5
  - [unit 2] Created leaf `1.1. Data vs information structured vs unstructured.md`
  - [unit 3] Created leaf `1.2. Database table query and index.md`
  - [unit 4] Created leaf `2.1. Model token and prompt.md`
  - [unit 5] Created leaf `2.2. Training vs inference and hallucination.md`
  - [unit 6] Created leaf `4.1. Data vocabulary checklist mentors insist on.md`
  - [unit 7] Created leaf `5.1. Common interview QA data and AI vocabulary.md`
  - [unit 8] Created leaf `6.1. Boundaries what is covered elsewhere.md`
  - [unit 9] Upgraded Domain 01 leaf 6.1 Domain-05 placeholder → real Domain 05 README
- Files touched: created `README/ITVocabulary/05 Data Databases and AI Vocabulary/README.md`, modified `README/ITVocabulary/README.md` (row 5), created `.../sections/1. Data words/1.1. Data vs information structured vs unstructured.md`, created `.../sections/1. Data words/1.2. Database table query and index.md`, created `.../sections/2. AI words/2.1. Model token and prompt.md`, created `.../sections/2. AI words/2.2. Training vs inference and hallucination.md`, created `.../sections/4. Important points to remember/4.1. Data vocabulary checklist mental models mentors insist on.md`, created `.../sections/5. Interview questions and answers/5.1. Common interview QA data and AI vocabulary.md`, created `.../sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md`; modified Domain 01 leaf 6.1 (Domain-05 link upgrade)
- Links fixed / added: track README row 5 → Domain 05 README; domain 05 §0 prerequisites link Domains 01–02; leaf 1.2 → Domain 02 §1.1; unit 9 retired the Domain-05 `LOG.md`-placeholder in Domain 01 leaf 6.1
- Verification: link checker over whole track (45 files) — 210/210 real targets resolve, 0 broken (backticked doc-text lines skipped). Caught + fixed own typo pre-commit (`is_media` → English in leaf 4.1). DoD walk per leaf: junior definitions + good/bad snippets first half, trade-offs + mentor notes second half; filenames clean with `M.k.` prefixes; domain+track indexes updated in unit 1; DRY — SQL/ML-internals/pipelines named-not-taught, deferred to Databases/ORM/AI/Domain 06 via links.
- Next steps: Session 6 — Domain 06 Security Cloud and DevOps Vocabulary (next `NN`): domain README (Template B) + leaves (threat/vulnerability/CVE, auth/IAM/secret, CI/CD-pipeline/deploy words, checklist, interview QA, overlaps), then Domain 07 to finish the track. Outstanding link upgrades: `LOG.md`-placeholders for Domain 06 in Domain 01/03/04/05 leaf 6.1s → real README when 06 lands.

## [2026-09-17 14:30] Session 6 — Domain 06 Security Cloud and DevOps Vocabulary
- Status: DONE
- Context read: PROMPT.md (binding; full reads Sessions 1–2, core re-reads 3–6), root README.md (IT Vocabulary #3, unchanged), README/ITVocabulary/LOG.md (full — Sessions 1–5 DONE), README/ITVocabulary/README.md (lists Domains 01–05). Recovery: grep for live `Status: IN PROGRESS|PARTIAL` across all track LOGs — none; disk verified — Domain 05 README + 7 leaves match Session 5 Done claims, tree clean at 24c2707. No discrepancies.
- Plan (resumed from Session 5 Next steps; no scope override in request):
  1. Unit 1 — open this entry + create 06 domain README (Template B, sections 1–2 + 4–6) + track README row 6
  2. Unit 2 — leaf 1.1. Threat vulnerability CVE and patch
  3. Unit 3 — leaf 1.2. Auth identity secrets and least privilege
  4. Unit 4 — leaf 2.1. Pipeline observe and incident words
  5. Unit 5 — leaf 2.2. On-call runbook hotfix and rollback words
  6. Unit 6 — leaf 4.1. Safety checklist mentors insist on
  7. Unit 7 — leaf 5.1. Common interview QA safety and flow vocabulary
  8. Unit 8 — leaf 6.1. Boundaries what is covered elsewhere
  9. Unit 9 — link upgrades: Domain-06 placeholders in Domain 01/03/04/05 leaf 6.1s → real Domain 06 README
  10. Final verification + close entry
- Research notes: security/DevOps vocabulary per industry consensus (CVE/NIST naming; CWE/CVSS at naming level; CI/CD meanings stable). No version-sensitive claims. DRY check: exploit/pentest/pipeline-config mechanics belong to future Security/DevOps/Cloud tracks — naming level only. Deploy basics already live in Domain 03 §2.1 — referenced, not repeated.
- Decisions:
  - Leaf 2.2 covers operate-side words (on-call/runbook/hotfix/rollback-as-action); Domain 03 owns build→release pipeline + release-shape words — cross-linked, not duplicated.
  - Leaf examples remain good-vs-bad usage snippets, matching Domains 01–05 form.
- Done:
  - [unit 1] Created `README/ITVocabulary/06 Security Cloud and DevOps Vocabulary/README.md` (Template B index, sections 1–2 + 4–6, 7 leaf promises) + added track README row 6
  - [unit 2] Created leaf `1.1. Threat vulnerability CVE and patch.md`
  - [unit 3] Created leaf `1.2. Auth identity secrets and least privilege.md`
  - [unit 4] Created leaf `2.1. Pipeline observe and incident words.md`
  - [unit 5] Created leaf `2.2. On-call runbook hotfix and rollback words.md`
  - [unit 6] Created leaf `4.1. Safety checklist mentors insist on.md`
  - [unit 7] Created leaf `5.1. Common interview QA safety and flow vocabulary.md`
  - [unit 8] Created leaf `6.1. Boundaries what is covered elsewhere.md`
  - [unit 9] Upgraded Domain-06 placeholders → real Domain 06 README (Domain 01/03/04/05 leaf 6.1s) + Domain-05 placeholder in Domain 04 leaf 6.1
- Files touched: created `README/ITVocabulary/06 Security Cloud and DevOps Vocabulary/README.md`, modified `README/ITVocabulary/README.md` (row 6), created `.../sections/1. Safety words/1.1. Threat vulnerability CVE and patch.md`, created `.../sections/1. Safety words/1.2. Auth identity secrets and least privilege.md`, created `.../sections/2. Flow words/2.1. Pipeline observe and incident words.md`, created `.../sections/2. Flow words/2.2. On-call runbook hotfix and rollback words.md`, created `.../sections/4. Important points to remember/4.1. Safety checklist mental models mentors insist on.md`, created `.../sections/5. Interview questions and answers/5.1. Common interview QA safety and flow vocabulary.md`, created `.../sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md`; modified Domain 01/03/04/05 leaf 6.1s (link upgrades)
- Links fixed / added: track README row 6 → Domain 06 README; domain 06 §0 prerequisites link Domains 01/03/04; leaf 2.1 → Domain 03 §2.1 + Domain 01 §3.1; leaf 1.2 → Domain 04 §2.1; unit 9 retired all Domain-06 + one Domain-05 `LOG.md`-placeholders
- Verification: link checker over whole track (53 files) — 256/256 real targets resolve, 0 broken (backticked doc-text lines skipped). DoD walk per leaf: junior definitions + good/bad snippets first half, trade-offs + mentor notes second half; filenames clean with `M.k.` prefixes; domain+track indexes updated in unit 1; DRY — threat-modeling/pentest/pipeline-YAML/flag-ops named-not-taught, deferred to future Security/DevOps/Cloud tracks; release-shape words cross-linked to Domain 03, not duplicated.
- Next steps: Session 7 — Domain 07 Teamwork Agile and Interview Vocabulary (final domain): domain README (Template B) + leaves (agile/sprint/standup-process words, roles/stakeholder words, feedback/career-ladder words, checklist, interview QA, overlaps). Track complete after Session 7 — verify full-track links + DRY sweep, then close track.

## [2026-09-17 15:00] Session 7 — Domain 07 Teamwork Agile and Interview Vocabulary (final)
- Status: IN PROGRESS
- Context read: PROMPT.md (binding; full reads Sessions 1–2, core re-reads 3–7), root README.md (IT Vocabulary #3, unchanged), README/ITVocabulary/LOG.md (full — Sessions 1–6 DONE), README/ITVocabulary/README.md (lists Domains 01–06). Recovery: grep for live `Status: IN PROGRESS|PARTIAL` across all track LOGs — none; disk verified — Domain 06 README + 7 leaves match Session 6 Done claims, tree clean at c00174d. No discrepancies.
- Plan (resumed from Session 6 Next steps; no scope override in request — final domain):
  1. Unit 1 — open this entry + create 07 domain README (Template B, sections 1–2 + 4–6) + track README row 7
  2. Unit 2 — leaf 1.1. Sprint backlog and velocity
  3. Unit 3 — leaf 1.2. Standup retro and demo as process
  4. Unit 4 — leaf 2.1. Roles stakeholders and ownership
  5. Unit 5 — leaf 2.2. Feedback ladder and one-on-ones
  6. Unit 6 — leaf 4.1. Teamwork vocabulary checklist mentors insist on
  7. Unit 7 — leaf 5.1. Common interview QA teamwork and career
  8. Unit 8 — leaf 6.1. Boundaries what is covered elsewhere
  9. Unit 9 — link upgrades: Domain-07 placeholders in older leaf 6.1s → real Domain 07 README
  10. Final verification (full-track links + DRY sweep) + close entry + close track
- Research notes: agile vocabulary per Scrum Guide / industry consensus (sprint, backlog, velocity, retro); career-ladder words per standard leveling usage. No version-sensitive claims. DRY check: Domain 01 §3.2 owns meeting-contract angle of standup/sync/retro — Domain 07 covers the *process* angle (cadence, artifacts, purpose) and cross-links, never re-teaches.
- Decisions:
  - Standup/retro/demo appear twice deliberately with split angles (01 = meeting contracts, 07 = agile process purpose) — the one sanctioned overlap, linked both ways.
  - Leaf examples remain good-vs-bad usage snippets, matching Domains 01–06 form.
- Done:
  - [unit 1] Created `README/ITVocabulary/07 Teamwork Agile and Interview Vocabulary/README.md` (Template B index, sections 1–2 + 4–6, 7 leaf promises) + added track README row 7
- Files touched: created `README/ITVocabulary/07 Teamwork Agile and Interview Vocabulary/README.md`, modified `README/ITVocabulary/README.md`
- Links fixed / added: track README row 7 → Domain 07 README; domain 07 §0 prerequisites link Domains 01/03
- Verification:
- Next steps: (pending — filled at close)
