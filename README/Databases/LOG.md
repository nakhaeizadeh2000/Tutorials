# Databases — work log

## [2026-09-26 11:02] Session 1 — Create track + Domain 01 Database Foundations (Domains 02–07 next)
- Status: IN PROGRESS
- Context read: PROMPT.md (binding, §§1–8 — full read this session, skill harness reloaded); root README.md (Categories table — Databases already listed at #9, link target did not exist); README/TSNode/LOG.md (tail — Session 7 DONE, TRACK COMPLETE 7/7, Next steps names Databases as next track); README/TSNode/README.md (Template A reference, September 2026 era). Recovery: grep for live `- Status: IN PROGRESS` across all track LOGs — none (JS/TS/ITV/Git/AlgoDesign/Patterns/NodeJS/TSNode all close DONE). Disk verified — `ls README/` showed no Databases dir (created empty this session via mkdir check only, no files), tree clean. No discrepancies; trust log + disk, nothing to redo. Fresh Session 1 block. User chose option 1 "Start Databases track" → Mode 1, Domain 01 first (PARTIAL + precise Next steps only on context limits).
- Plan (Mode 1 new track; Domain 01 fully implemented this session, domains 02–07 next in order):
  1. Unit 1 — open this entry (this write)
  2. Unit 2 — create track README.md (Template A, lists Domain 01)
  3. Unit 3 — create 01 Database Foundations and Mental Model README.md (Template B, sections 1–6) + section folders
  4. Unit 4 — leaf 1.1. What databases are and are not
  5. Unit 5 — leaf 1.2. Connecting from Node
  6. Unit 6 — leaf 2.1. First Postgres queries
  7. Unit 7 — leaf 2.2. First MongoDB operations
  8. Unit 8 — leaf 3.1. Choosing Postgres or MongoDB
  9. Unit 9 — leaf 4.1. Data checklist mentors insist on
  10. Unit 10 — leaf 5.1. Common interview QA database foundations
  11. Unit 11 — leaf 6.1. Boundaries what is covered elsewhere
  12. Final verification (DoD + links + DRY) + close entry DONE/PARTIAL
- Full planned curriculum (future domains, in order): 02 Postgres Deep Dive, 03 MongoDB Deep Dive, 04 Node.js Data Access Drivers and Pooling, 05 Transactions Consistency and Integrity, 06 Performance Backup and Operations, 07 Production Data Use and Interview Mastery. Only Domain 01 is guaranteed in this session; later units/sessions append domains 02–07.
- Research notes: PostgreSQL official docs (postgresql.org/docs/current — 18 Current, 17/16/15/14 supported, 19 Beta 4 as of Sep 24 2026; 13 and below unsupported). MongoDB manual release notes (docs.mongodb.com — 8.3 current stable, 8.0/7.0 previous). roadmap.sh postgresql-dba page is JS-rendered shell (no extractable spine — same class as prior sessions; spine taken from official docs above). Era label "September 2026 era" on track index (matches TSNode convention). Version claims labeled "as of September 2026: PostgreSQL 18 Current, 17/16 supported; MongoDB 8.3 stable". Local verification: psql/mongosh absent — live Postgres 16.15 via docker (postgres:16-alpine, daemon v29.7.2) probed with `docker exec dbprobe psql`; Mongo image pull pending (documented per leaf if unavailable). DRY grep: ITVocabulary 05 owns *naming* level only (SQL/query mechanics explicitly deferred to Databases — 05/6.1 forwards here); DesignPatterns 06 owns *repository seam* (link, never re-teach); JS 11 owns template-literal *injection* mention; TS 11 owns enum-as-int *persisted* story — this track owns *usage* (connecting, querying, choosing, operating Postgres & Mongo from Node) and links back (boundaries in Domain 01 leaf 6.1).
- Decisions:
  - Track index lists Domain 01 only; rows 02–07 appended as each domain lands (no dead links — matches TSNode/NodeJS convention). Root README row #9 already points here — creating the track README resolves it, no root edit needed.
- Done:
  - [unit 1] Opened this Session 1 entry (first write on disk)
  - [unit 2] Created `README/Databases/README.md` (Template A track index, lists Domain 01) — root README row #9 now resolves, no root edit needed (caught + fixed own dead links to unbuilt DatabaseDesign/ORM tracks pre-commit → textual forwards)
  - [unit 3] Created `README/Databases/01 Database Foundations and Mental Model/README.md` (Template B index, sections 1–6, 8 leaf promises) + 6 section folders (link sweep: only not-yet-written leaf forwards outstanding, 0 broken existing targets incl. ITV 05 index)
  - [unit 4] Created leaf `01/sections/1. Database identity and setup/1.1. What databases are and are not.md` (three properties, two shapes, three impostors; verified live on PG 16.15: shared 1/1, queryable 0, durable across `docker restart`; link sweep: only not-yet-written forwards outstanding, cross-track targets verified on disk)
  - [unit 5] Created leaf `01/sections/1. Database identity and setup/1.2. Connecting from Node.md` (five-fact URLs, handshake rite, secret boundary; verified PG+Mongo URL parses, live pg handshake {ok:1}, env-loaded handshake, gitignore match, Mongo fail-fast MongoServerSelectionError; honest scope: no Mongo server on this floor — kernel 6.19 vs SERVER-121912 + registry EOF ×3, recorded; link sweep: only not-yet-written forwards outstanding)
  - [unit 6] Created leaf `01/sections/2. First queries/2.1. First Postgres queries.md` (CRUD cycle, bound parameters, result witnesses; verified live on PG 16.15: O'Reilly round-trip, interpolation 42601 death, rowCount/RETURNING per statement; link sweep: only not-yet-written forwards outstanding)
  - [unit 7] Created leaf `01/sections/2. First queries/2.2. First MongoDB operations.md` (CRUD arc, object-query injection sibling, _id contract; verified ObjectId probe live (hex24/unique/has-time); server snippets documented from 8.3 manual labeled per snippet; link sweep: only not-yet-written forwards outstanding)
  - [unit 8] Created leaf `01/sections/3. Choosing/3.1. Choosing Postgres or MongoDB.md` (questions-first, relational default, monoglot start; verified live JOIN round-trip with enforced FK; link sweep: only not-yet-written forwards outstanding)
  - [unit 9] Created leaf `01/sections/4. Important points to remember/4.1. Data checklist habits mentors insist on.md` (prove rite, grep-gate, four facts; verified gate1.sh exit 11 on planted interpolation + DATA-GREEN exit 0 clean; caught + fixed own drafting-debris link pre-commit; link sweep fully OK, 0 forwards)
  - [unit 10] Created leaf `01/sections/5. Interview questions and answers/5.1. Common interview QA database foundations.md` (shape-choice screen, wiring trace, live injection demo + 6 rapid-fire drills; all outputs previously executed this session; link sweep fully OK, 0 forwards)
- Files touched: created `README/Databases/LOG.md`, created `README/Databases/README.md`
- Links fixed / added: track index → ITVocabulary README (resolves) + back-link to root README; DatabaseDesign/ORM kept textual (targets unbuilt)
- Links fixed / added:
- Verification:
- Next steps:
