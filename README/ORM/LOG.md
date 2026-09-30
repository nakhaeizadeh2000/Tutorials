# ORM — work log

## [2026-09-30 14:11] Session 1 — Create track + Domain 01 Data Access Foundations (Domains 02–07 next)
- Status: IN PROGRESS
- Context read: PROMPT.md (binding §§1–8 — full reads S1–S7 DatabaseDesign on file; PROMPT.md/root README.md unchanged since long before (git log: last touches 49a1003/4ad143a, unrelated) — deltas re-verified this session, no re-read needed beyond change check); root README.md (Categories table — ORM already listed at #11, link target did not exist); README/DatabaseDesign/LOG.md (tail — Session 7 DONE, TRACK COMPLETE 7/7, Next steps names ORM as next track); README/DatabaseDesign/README.md (Template A reference, September 2026 era). Recovery: repo-wide grep for live `^- Status: IN PROGRESS` — none (all PARTIAL hits are closed-session history, immutable per PROMPT.md:165). Disk verified — DatabaseDesign TRACK COMPLETE on disk (7/7 domains, 7/7 rows, 66 md files, HEAD 4d62abd closeout, tree clean); `ls README/` shows no ORM dir. No discrepancies; trust log + disk, nothing to redo. Fresh Session 1 block. No scope override in request → Mode 1 new track, Domain 01 only (02–07 future sessions, per convention).
- Plan (Mode 1 new track; Domain 01 fully implemented this session, domains 02–07 next in order):
  1. Unit 1 — open this entry (this write)
  2. Unit 2 — research (Prisma/TypeORM/Drizzle latest versions via npm, DRY grep) + record
  3. Unit 3 — create track README.md (Template A, lists Domain 01) + `01 Data Access Foundations and Mental Model/README.md` (Template B, sections 1–6) + 6 section folders (root README row #11 resolves, no root edit needed)
  4. Unit 4 — leaf 1.1. What problem data-access layers solve and create
  5. Unit 5 — leaf 1.2. Query builders versus ORMs versus raw drivers
  6. Unit 6 — leaf 2.1. ActiveRecord versus DataMapper
  7. Unit 7 — leaf 2.2. The repository seam (DesignPatterns 06 owned — data-layer perspective, linked)
  8. Unit 8 — leaf 3.1. Hello database three ways (Prisma, TypeORM, Drizzle)
  9. Unit 9 — leaf 4.1. Data-access checklist mentors insist on
  10. Unit 10 — leaf 5.1. Common interview QA data-access foundations
  11. Unit 11 — leaf 6.1. Boundaries what is covered elsewhere
  12. Final verification (DoD + links + DRY) + close entry DONE/PARTIAL
- Full planned curriculum (future domains, in order): 02 Prisma Deep Dive, 03 TypeORM Deep Dive, 04 Drizzle Deep Dive, 05 Comparing and Choosing, 06 Production ORM Use, 07 Production Mastery and Interview Synthesis. Only Domain 01 is guaranteed in this session; later sessions append domains 02–07.
- Research notes: versions via npm (2026-09-30, labeled as-of-September-2026 era) — Prisma: stable 7.10.0 (`prev` tag), `latest` tag points at 8.0.0-rc.19 PRERELEASE (verified via dist-tags; track teaches v7 stable, notes v8 RC — never teach an RC silently); TypeORM: 1.1.1 stable (`latest`; `legacy` 0.3.31; 1.0.0-beta.3 historic); Drizzle: 0.45.3 stable (`latest` per version query; 1.0.0-rc in prerelease tags — teach 0.45.x stable); pg driver 8.23.0; node v20.20.2, TypeScript 7.0.2 globally. DRY grep (`prisma|typeorm|drizzle|ActiveRecord|DataMapper`): hits are DatabaseDesign 6.1 textual forwards (inbound — resolve as ORM lands), TS decorators leaves (decorator mechanics — TypeORM usage links there), Databases 04/2.2 migrations basis (migration execution mechanics — linked); NO Prisma/TypeORM/Drizzle treatments exist. Domain 01 owns foundations; 02/03/04 own each tool; 05 owns comparison. Verification plan: /tmp/ormprobe scratch project (pg + drizzle-orm + typeorm installed, tsc typecheck of snippets importing real packages, live PG smoke on dbprobe); Prisma generate attempted (engines download) — outcome recorded per leaf; ORM-runtime depth deferred to Domains 02–04.
- Done:
  - [unit 1] Opened this Session 1 entry (first write on disk)
  - [unit 2] Research recorded (npm versions incl. Prisma-8-RC-as-latest catch, DRY grep — no competing coverage)
  - [unit 3] Created `README/ORM/README.md` (Template A track index, lists Domain 01) + `README/ORM/01 Data Access Foundations and Mental Model/README.md` (Template B domain index, sections 1–6 with back-link) + 6 section folders — root README row #11 now resolves, no root edit needed
- Decisions:
- Files touched: created `README/ORM/LOG.md`, created `README/ORM/README.md`, created `README/ORM/01 Data Access Foundations and Mental Model/README.md` + 6 `sections/` folders
- Links fixed / added:
- Verification:
- Next steps:
