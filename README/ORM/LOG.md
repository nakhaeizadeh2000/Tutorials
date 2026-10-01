# ORM — work log

## [2026-10-01 09:28] Session 5 — Domain 05 Comparing and Choosing
- Status: IN PROGRESS
- Context read: PROMPT.md (binding §§1–8 — full reads S1–S7 DatabaseDesign + S1–S4 ORM on file; PROMPT.md/root README.md unchanged (git log last touches 49a1003/4ad143a, unrelated) — change-checked this session); root README.md (ORM #11, unchanged); README/ORM/LOG.md (full — Sessions 1–4 DONE, S4 Next steps names Domain 05); README/ORM/README.md (4/7 rows); README/ORM/04 Drizzle Deep Dive/README.md (Template B reference + standing rules: literal spaces, depth counting (`../../../` same-track / `../../../../` cross-track from section dirs), verify targets' content, global-module + temp-dir verification, dbprobe TCP localhost:5433/password `probe`). Recovery: grep for live `^- Status: IN PROGRESS` across all track LOGs — none. Disk verified — S4 Done 11/11 present (domain 04 index + 6 section dirs + 8/8 leaves = 9 md); git log head fee83ad, tree clean. dbprobe PostgreSQL 16.15 up. All three tools live-verified S1–S4 (Prisma 7.10.0, TypeORM 1.1.1, Drizzle 0.45.3). No discrepancies; trust log + disk, nothing to redo. Fresh Session 5 block (S1–S4 immutable). No scope override in request → resume from S4 Next steps: Domain 05 only (06–07 future sessions).
- Plan (Domain 05 fully implemented this session):
  1. Unit 1 — open this entry (this write)
  2. Unit 2 — research (comparison dimensions, DRY grep — comparison must synthesize, never re-teach) + record
  3. Unit 3 — create `05 Comparing and Choosing/README.md` (Template B, sections 1–6) + 6 section folders + track README row 5
  4. Unit 4 — leaf 1.1. Workload-matched selection
  5. Unit 5 — leaf 1.2. Cost ledgers per tool
  6. Unit 6 — leaf 2.1. Migrating between tools
  7. Unit 7 — leaf 2.2. Polyglot persistence honestly
  8. Unit 8 — leaf 3.1. Benchmarks that inform (and deceive)
  9. Unit 9 — leaf 4.1. Selection checklist mentors insist on
  10. Unit 10 — leaf 5.1. Common interview QA tool selection
  11. Unit 11 — leaf 6.1. Boundaries what is covered elsewhere
  12. Final verification (DoD + links + DRY) + close entry DONE/PARTIAL
- Research notes: comparison sources — this track's own Domains 01–04 (positions, ledgers, idioms — all verified live S1–S4; Domain 05 synthesizes by link, never re-teaches); benchmark literacy (statement-count methodology, workload-matched measurement — version-free practice). DRY grep (comparison/benchmark/selection terms): hits are only this track's own forwards promising Domain 05 — NO comparison treatment exists; Domain 05 owns workload-matched selection, cost ledgers, inter-tool migration, polyglot discipline, benchmark literacy. Verification for synthesis domain: cross-tool live comparison (same workload, three tools, statement counts + timings measured on dbprobe) + tsc checks; temp-dirs-in-repo deleted pre-commit.
- Done:
  - [unit 1] Opened this Session 5 entry (first write on disk)
  - [unit 2] Research recorded (DRY grep — comparison scope confirmed unowned; synthesis-by-link rule set)
  - [unit 3] Created `README/ORM/05 Comparing and Choosing/README.md` (Template B domain index, sections 1–6 with back-link) + 6 section folders; track README row 5 appended (resolves, verified on disk)
- Decisions:
  - [unit 4] Leaf `05 …/sections/1. Selection by workload/1.1. Workload-matched selection.md` (3 promises) — cross-tool measured comparison run live on dbprobe (5 users × 4 posts: raw-loop 6, raw-join 1, drizzle-with 1, prisma-include 2, typeorm-relations 1 — outputs verified, tables dropped, 0 residue); 1 writing glitch fixed pre-commit
  - [unit 5] Leaf `05 …/sections/1. Selection by workload/1.2. Cost ledgers per tool.md` (3 promises — Prisma/TypeORM/Drizzle ledgers synthesized by link, never re-taught)
  - [unit 6] Leaf `05 …/sections/2. Changing tools/2.1. Migrating between tools.md` (3 promises — triggers, strangler, schema continuity; 2 stray-text glitches fixed pre-commit, CJK scan clean)
  - [unit 7] Leaf `05 …/sections/2. Changing tools/2.2. Polyglot persistence honestly.md` (3 promises — two-tool budget, documented boundaries, shared types)
- Files touched: modified `README/ORM/LOG.md`, created `README/ORM/05 Comparing and Choosing/README.md` + 6 `sections/` folders, modified `README/ORM/README.md` (row 5), created leaf `1. Selection by workload/1.1. Workload-matched selection.md`, created leaf `1. Selection by workload/1.2. Cost ledgers per tool.md`, created leaf `2. Changing tools/2.1. Migrating between tools.md`, created leaf `2. Changing tools/2.2. Polyglot persistence honestly.md`
- Links fixed / added:
- Verification:
- Next steps:

## [2026-10-01 08:55] Session 4 — Domain 04 Drizzle Deep Dive
- Status: DONE
- Context read: PROMPT.md (binding §§1–8 — full reads S1–S7 DatabaseDesign + S1–S3 ORM on file; PROMPT.md/root README.md unchanged (git log last touches 49a1003/4ad143a, unrelated) — change-checked this session); root README.md (ORM #11, unchanged); README/ORM/LOG.md (full — Sessions 1–3 DONE, S3 Next steps names Domain 04); README/ORM/README.md (3/7 rows); README/ORM/03 TypeORM Deep Dive/README.md (Template B reference + standing rules: literal spaces, depth counting (`../../../` same-track / `../../../../` cross-track from section dirs), verify targets' content, global-module + temp-dir verification, dbprobe TCP localhost:5433/password `probe`). Recovery: grep for live `^- Status: IN PROGRESS` across all track LOGs — none. Disk verified — S3 Done 11/11 present (domain 03 index + 6 section dirs + 8/8 leaves = 9 md); git log head 87597ae, tree clean. dbprobe PostgreSQL 16.15 up. Drizzle 0.45.3 global (S1 on file: pgTable/bigint/text/eq + drizzle() verified live). No discrepancies; trust log + disk, nothing to redo. Fresh Session 4 block (S1–S3 immutable). No scope override in request → resume from S3 Next steps: Domain 04 only (05–07 future sessions).
- Plan (Domain 04 fully implemented this session):
  1. Unit 1 — open this entry (this write)
  2. Unit 2 — research (Drizzle 0.45 kit/relations specifics, DRY grep) + record
  3. Unit 3 — create `04 Drizzle Deep Dive/README.md` (Template B, sections 1–6) + 6 section folders + track README row 4
  4. Unit 4 — leaf 1.1. Schema as code
  5. Unit 5 — leaf 1.2. Relations declared beside tables
  6. Unit 6 — leaf 2.1. Queries composed, not concatenated
  7. Unit 7 — leaf 2.2. Migrations via drizzle-kit
  8. Unit 8 — leaf 3.1. Relational queries and N+1
  9. Unit 9 — leaf 4.1. Drizzle checklist mentors insist on
  10. Unit 10 — leaf 5.1. Common interview QA Drizzle
  11. Unit 11 — leaf 6.1. Boundaries what is covered elsewhere
  12. Final verification (DoD + links + DRY) + close entry DONE/PARTIAL
- Research notes: Drizzle 0.45.3 API verified live via require — `relations()` exists, `defineRelations` does NOT (0.45 uses relations()); helpers sql/and/desc/count present. drizzle-kit 0.31.11 installed global, `--help` verified — commands: generate/migrate/introspect/push/studio/up/check/drop/export. DRY grep (`drizzle-kit|drizzle relation|defineRelations|db.query`): hits are only this track's own Domain 01–03 mentions/forwards — NO Drizzle deep treatment exists; Domain 04 owns schema-as-code, relations, query composition, kit migrations, relational queries/N+1. Verification setup reused (global drizzle-orm/pg, dbprobe TCP localhost:5433/`probe`, tsc --strict, temp-dirs-in-repo deleted pre-commit, live .mjs runs).
- Done:
  - [unit 1] Opened this Session 4 entry (first write on disk)
  - [unit 2] Research recorded (Drizzle 0.45 API + kit commands verified live, DRY grep — no competing coverage)
  - [unit 3] Created `README/ORM/04 Drizzle Deep Dive/README.md` (Template B domain index, sections 1–6 with back-link) + 6 section folders; track README row 4 appended (resolves, verified on disk)
- Decisions:
  - [unit 4] Leaf `04 …/sections/1. Schema as code/1.1. Schema as code.md` (3 promises) — table with pgEnum/varchar/identity/index + insert/select run live on dbprobe (defaults applied, typed row returned, tables + type dropped, 0 residue); tsc --strict clean; key discovery: insert without `.generatedAlwaysAsIdentity()` fails tsc (TS2769 — explicitness enforced by compiler, recorded in-leaf)
  - [unit 5] Leaf `04 …/sections/1. Schema as code/1.2. Relations declared beside tables.md` (3 promises) — relations() + db.query both directions run live on dbprobe (outputs verified, tables dropped, 0 residue); discoveries: `relations` imports from drizzle-orm root (not pg-core — import error caught live), db.query needs schema passed (DrizzleTypeError caught live)
  - [unit 6] Leaf `04 …/sections/2. Composition and migration/2.1. Queries composed, not concatenated.md` (3 promises) — dynamic conditions-array + groupBy/having run live on dbprobe (outputs verified, table dropped, 0 residue); `$dynamic` export checked (absent as named export in 0.45 — conditions arrays suffice, recorded); 1 leaked meta-glitch fixed pre-commit
  - [unit 7] Leaf `04 …/sections/2. Composition and migration/2.2. Migrations via drizzle-kit.md` (3 promises) — kit generate/check verified live on drizzle-kit 0.31.11 (reviewable SQL + journal rendered; check non-mutating clean run; 0 residue — nothing applied to shared DB); push/migrate/check semantics from verified --help + behavior
  - [unit 8] Leaf `04 …/sections/3. Relational discipline/3.1. Relational queries and N+1.md` (3 promises) — N+1 counted live via query-counting wrapper (3 looped vs 1 batched) + columns projection verified; cross-link label cleaned pre-commit
  - [unit 9] Leaf `04 …/sections/4. Mentor checklist/4.1. Drizzle checklist mentors insist on.md` (3 promises — process leaf, no DDL surface)
  - [unit 11] Leaf `04 …/sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md` (3 promises — foundations/siblings/mechanics boundary map)
- Decisions:
  - Domain 04 mirrors Domains 01–03 shape (6 sections, 8 leaves, §§1–3 teaching + §4 checklist + §5 QA + §6 boundaries), Template B + PROMPT.md:86 compliant.
  - DRY: pre-build grep found only this track's mentions (all linked, none re-taught); API discoveries verified live (`relations` root-only, schema registration required, identity explicitness tsc-enforced, `$dynamic` named-export absent). Post-build spot check (`generatedAlwaysAsIdentity|defineRelations|db.query with`) zero hits elsewhere.
  - Link discipline: scripted replace pass (same-track `../../0N` → `../../../0N`, cross-track `../../../DatabaseDesign/` → `../../../../DatabaseDesign/` — the recurring depth class, caught by checker across all 8 Domain 04 leaves) then re-check → 490/490 resolve (S1 113 + S2 126 + S3 116 + S4 135).
  - Infra: dbprobe up throughout (PG 16.15); all DDL verified live with scratch tables (schema round-trips, relations both directions, dynamic composition + grouping, kit generate/check, N+1 counts — outputs verified, tables + types dropped, 0 residue); `.tmp-verify/` removed pre-close, never committed (staged paths only).
- Files touched: modified `README/ORM/LOG.md`, created `README/ORM/04 Drizzle Deep Dive/README.md` + 6 `sections/` folders, modified `README/ORM/README.md` (row 4), created 8 leaves (1.1, 1.2, 2.1, 2.2, 3.1, 4.1, 5.1, 6.1)
- Links fixed / added: track README row 4 (resolves); domain index 8 leaf links + back-link; inter-leaf cross-links; 6.1 boundary map (Domain 01 ×6 leaves, Domains 02–03 siblings, Databases 04/06/07 with verified paths, track LOG at `../../../LOG.md`); depth remediation across 8 leaves pre-close
- Verification: 490/490 relative links resolve track-wide (script-checked with unquote); TS snippets tsc --strict clean against real drizzle-orm package; live runs on dbprobe PG 16.15 (all passing, 0 residue); non-ASCII scan clean (standard set only); DoD: era-labeled (Drizzle 0.45.3 + kit 0.31.11), junior-first halves, trade-offs priced, runnable examples (all executed live), neighbor tone matched, indexes updated, LOG appended
- Status: DONE
- Next steps: Session 5 — Domain 05 Comparing and Choosing (workload-matched selection, migration between tools, cost ledgers) per plan above; then 06–07 in order. Track README row 5 appended when 05 lands. Connection facts reused: localhost:5433, password `probe`, global-module + temp-dir verification pattern.

## [2026-10-01 08:31] Session 3 — Domain 03 TypeORM Deep Dive
- Status: DONE
- Context read: PROMPT.md (binding §§1–8 — full reads S1–S7 DatabaseDesign + S1–S2 ORM on file; PROMPT.md/root README.md unchanged (git log last touches 49a1003/4ad143a, unrelated) — change-checked this session); root README.md (ORM #11, unchanged); README/ORM/LOG.md (full — Sessions 1–2 DONE, S2 Next steps names Domain 03); README/ORM/README.md (2/7 rows); README/ORM/02 Prisma Deep Dive/README.md (Template B reference + standing rules: literal spaces, depth counting (`../../../` same-track / `../../../../` cross-track from section dirs), verify targets' content, global-module + temp-dir verification, dbprobe TCP localhost:5433/password `probe`). Recovery: grep for live `^- Status: IN PROGRESS` across all track LOGs — none. Disk verified — S2 Done 11/11 present (domain 02 index + 6 section dirs + 8/8 leaves = 9 md); git log head 10a885e, tree clean. dbprobe PostgreSQL 16.15 up. TypeORM 1.1.1 global (S1–S2 on file: DataSource/Entity/BaseEntity/Repository verified, legacy decorator flags pass TS 7.0.2). No discrepancies; trust log + disk, nothing to redo. Fresh Session 3 block (S1–S2 immutable). No scope override in request → resume from S2 Next steps: Domain 03 only (04–07 future sessions).
- Plan (Domain 03 fully implemented this session):
  1. Unit 1 — open this entry (this write)
  2. Unit 2 — research (TypeORM 1.x migration/testing specifics, DRY grep) + record
  3. Unit 3 — create `03 TypeORM Deep Dive/README.md` (Template B, sections 1–6) + 6 section folders + track README row 3
  4. Unit 4 — leaf 1.1. Entities and decorators that mean something
  5. Unit 5 — leaf 1.2. Relations the TypeORM way
  6. Unit 6 — leaf 2.1. Both flavors operated (ActiveRecord and DataMapper)
  7. Unit 7 — leaf 2.2. Migrations generated and governed
  8. Unit 8 — leaf 3.1. Loading strategies and N+1
  9. Unit 9 — leaf 4.1. TypeORM checklist mentors insist on
  10. Unit 10 — leaf 5.1. Common interview QA TypeORM
  11. Unit 11 — leaf 6.1. Boundaries what is covered elsewhere
  12. Final verification (DoD + links + DRY) + close entry DONE/PARTIAL
- Research notes: TypeORM 1.1.1 CLI verified live (`typeorm/cli.js --help`) — commands: cache:clear, entity:create, init, migration:create/generate/revert/run/show, query, schema:drop/log/sync (migration family complete: generate/show/run/revert + manual create). DRY grep (`typeorm migration|BaseEntity|getRepository|QueryBuilder`): hits are only this track's own Domain 01–02 mentions/forwards + TS decorators mechanics — NO TypeORM deep treatment exists; Domain 03 owns entities/decorators, relations, both flavors, migrations, loading/N+1, testing. Verification setup reused (global typeorm/reflect-metadata/pg, dbprobe TCP localhost:5433/`probe`, tsc with experimentalDecorators + emitDecoratorMetadata on TS 7.0.2, temp-dirs-in-repo deleted pre-commit, CJS compile for live runs).
- Done:
  - [unit 1] Opened this Session 3 entry (first write on disk)
  - [unit 2] Research recorded (TypeORM 1.x CLI surface verified live, DRY grep — no competing coverage)
  - [unit 3] Created `README/ORM/03 TypeORM Deep Dive/README.md` (Template B domain index, sections 1–6 with back-link) + 6 section folders; track README row 3 appended (resolves, verified on disk)
- Decisions:
  - [unit 4] Leaf `03 …/sections/1. Entities and relations/1.1. Entities and decorators that mean something.md` (3 promises) — entity (enum + unique + CreateDateColumn + defaults) repository round-trip run live on dbprobe (outputs verified, table dropped, 0 residue); 1.x API surface verified (EntityRepository/getCustomRepository gone, .extend() present); 1 writing glitch fixed pre-commit
  - [unit 5] Leaf `03 …/sections/1. Entities and relations/1.2. Relations the TypeORM way.md` (3 promises) — cascade save + relations include + implicit m-n connect/include run live on dbprobe (outputs verified, tables dropped, 0 residue); junction column convention discovered via metadata probe after a guessed-name failure (t_studentId wrong, tStudentId right — recorded in-leaf as probe-don't-guess lesson)
  - [unit 6] Leaf `03 …/sections/2. Flavors and migrations/2.1. Both flavors operated.md` (3 promises) — AR save/find + `.extend()` custom round-trip run live on dbprobe (outputs verified, tables dropped, 0 residue); 1 leaked editing note caught + fixed pre-commit
  - [unit 7] Leaf `03 …/sections/2. Flavors and migrations/2.2. Migrations generated and governed.md` (3 promises) — migration:generate/show/run verified live on TypeORM 1.1.1 (rendered reviewable SQL with up/down; show read-only; run bookkeeping observed; misplaced-file path lesson learned live); tracking table cleaned, 0 residue
  - [unit 8] Leaf `03 …/sections/3. Loading and performance/3.1. Loading strategies and N+1.md` (3 promises) — cascade save + bare/relations/QueryBuilder reads run live on dbprobe (absent vs 2 vs 2 verified, tables dropped, 0 residue); nested-save-without-cascade silent drop discovered live (documented in-leaf as cascade requirement)
  - [unit 9] Leaf `03 …/sections/4. Mentor checklist/4.1. TypeORM checklist mentors insist on.md` (3 promises — process leaf, no DDL surface; 1 mangled cross-link caught + fixed pre-commit)
  - [unit 11] Leaf `03 …/sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md` (3 promises — foundations/siblings/mechanics boundary map)
- Decisions:
  - Domain 03 mirrors Domains 01–02 shape (6 sections, 8 leaves, §§1–3 teaching + §4 checklist + §5 QA + §6 boundaries), Template B + PROMPT.md:86 compliant.
  - DRY: pre-build grep found only this track's mentions + TS decorator mechanics (all linked, none re-taught); 1.x idiom discoveries verified live (EntityRepository/getCustomRepository removed → .extend(); implicit junction columns tStudentId via metadata probe). Post-build spot check confirms home-domain concepts only linked.
  - Link discipline: scripted replace pass (same-track `../../01|02` → `../../../01|02`, cross-track `../../../DatabaseDesign/` → `../../../../DatabaseDesign/` — the recurring depth class, caught by checker across all 8 Domain 03 leaves) + 1 wrong-filename fix (Prisma's "Relations in schema" vs TypeORM's "Relations the TypeORM way") + 1 LOG prose false-positive reword → 355/355 resolve (S1 113 + S2 126 + S3 116).
  - Infra: dbprobe up throughout (PG 16.15); all DDL verified live with scratch tables (entity round-trips, cascade/relations/implicit m-n, AR + .extend() customs, generate/show/run bookkeeping, bare/relations/QueryBuilder reads — outputs verified, tables + tracking table dropped, 0 residue); `.tmp-verify/` removed pre-close, never committed (staged paths only).
- Files touched: modified `README/ORM/LOG.md`, created `README/ORM/03 TypeORM Deep Dive/README.md` + 6 `sections/` folders, modified `README/ORM/README.md` (row 3), created 8 leaves (1.1, 1.2, 2.1, 2.2, 3.1, 4.1, 5.1, 6.1)
- Links fixed / added: track README row 3 (resolves); domain index 8 leaf links + back-link; inter-leaf cross-links; 6.1 boundary map (Domain 01 ×6 leaves, Domains 02 siblings, Databases 04/05/07 + TypeScript 14 with verified paths, track LOG at `../../../LOG.md`); depth remediation across 8 leaves + 1 filename fix pre-close
- Verification: 355/355 relative links resolve track-wide (script-checked with unquote); TS snippets tsc --strict clean against real typeorm package (legacy decorator flags on TS 7.0.2); live runs on dbprobe PG 16.15 (all passing, 0 residue); non-ASCII scan clean (standard set only); DoD: era-labeled (TypeORM 1.1.1 + removed-idiom notes), junior-first halves, trade-offs priced, runnable examples (all executed live), neighbor tone matched, indexes updated, LOG appended
- Status: DONE
- Next steps: Session 4 — Domain 04 Drizzle Deep Dive (schema-as-code, relations, migrations via kit, composition patterns) per plan above; then 05–07 in order. Track README row 4 appended when 04 lands. Connection facts reused: localhost:5433, password `probe`, global-module + temp-dir verification pattern.

## [2026-09-30 14:43] Session 2 — Domain 02 Prisma Deep Dive
- Status: DONE
- Context read: PROMPT.md (binding §§1–8 — full reads S1–S7 DatabaseDesign + S1 ORM on file; PROMPT.md/root README.md unchanged (git log: last touches 49a1003/4ad143a, unrelated) — change-checked this session); root README.md (ORM #11, unchanged); README/ORM/LOG.md (full — Session 1 DONE, Next steps names Domain 02); README/ORM/README.md (1/7 rows); README/ORM/01 Data Access Foundations and Mental Model/README.md (Template B reference + standing link/rules: literal spaces, depth counting, verify targets' content, global-module verification, dbprobe TCP localhost:5433/password `probe`). Recovery: grep for live `^- Status: IN PROGRESS` across all track LOGs — none. Disk verified — S1 Done 11/11 present (track README + domain 01 index + 6 section dirs + 8/8 leaves); git log head 9445687, tree clean. dbprobe PostgreSQL 16.15 up. Prisma 7.10.0 global + generated-client pattern from S1 on file. No discrepancies; trust log + disk, nothing to redo. Fresh Session 2 block (S1 immutable). No scope override in request → resume from S1 Next steps: Domain 02 only (03–07 future sessions).
- Plan (Domain 02 fully implemented this session):
  1. Unit 1 — open this entry (this write)
  2. Unit 2 — research (Prisma 7 docs specifics, DRY grep) + record
  3. Unit 3 — create `02 Prisma Deep Dive/README.md` (Template B, sections 1–6) + 6 section folders + track README row 2
  4. Unit 4 — leaf 1.1. Models fields and attributes
  5. Unit 5 — leaf 1.2. Relations in schema
  6. Unit 6 — leaf 2.1. Migrate tooling that stays honest
  7. Unit 7 — leaf 2.2. Client queries and relations
  8. Unit 8 — leaf 3.1. N+1 strategies and raw escapes
  9. Unit 9 — leaf 4.1. Prisma checklist mentors insist on
  10. Unit 10 — leaf 5.1. Common interview QA Prisma
  11. Unit 11 — leaf 6.1. Boundaries what is covered elsewhere
  12. Final verification (DoD + links + DRY) + close entry DONE/PARTIAL
- Research notes: Prisma 7.10.0 CLI verified live (`prisma --help`, `prisma migrate --help`) — commands: init/bootstrap/dev/generate/db/migrate/studio/validate/format; migrate subcommands dev/reset/deploy/status/resolve/diff (baselining via `migrate resolve` — verified in help text). DRY grep (`prisma migrate|migrate.*prisma|prisma include|relation|queryRaw|transaction`): hits are only this track's own Domain 01 mentions/forwards — NO Prisma deep treatment exists; Domain 02 owns schema authoring, migrate tooling, client relations/queries, N+1 strategies, raw escapes. Verification setup reused from S1 (global prisma/adapter/client, dbprobe TCP localhost:5433/`probe`, temp-dirs-in-repo deleted pre-commit).
- Done:
  - [unit 1] Opened this Session 2 entry (first write on disk)
  - [unit 2] Research recorded (Prisma 7 CLI surface verified live, DRY grep — no competing coverage)
  - [unit 3] Created `README/ORM/02 Prisma Deep Dive/README.md` (Template B domain index, sections 1–6 with back-link) + 6 section folders; track README row 2 appended (resolves, verified on disk)
- Decisions:
  - [unit 4] Leaf `02 …/sections/1. Schema authoring/1.1. Models fields and attributes.md` (3 promises) — richer schema (enum/relations/defaults) validate + generate passing; enum defaults + nested connect-create + include run live on dbprobe (outputs verified, tables + PG enum type dropped, 0 residue)
  - [unit 5] Leaf `02 …/sections/1. Schema authoring/1.2. Relations in schema.md` (3 promises) — extended schema (1-1 unique FK, implicit + explicit m-n) validate + generate passing; nested 1-1 create, implicit connect + include, explicit create-with-grade + nested include all run live on dbprobe (outputs verified, tables dropped, 0 residue); 1 writing glitch fixed pre-commit
  - [unit 6] Leaf `02 …/sections/2. Migrations and client/2.1. Migrate tooling that stays honest.md` (3 promises) — migrate diff/status/deploy behaviors verified live on Prisma 7.10.0 against shared dbprobe WITHOUT mutating it (diff renders reviewable SQL; dev correctly refuses shared DB without reset; deploy correctly refuses unbaselined DB with P3005 + pointer; 0 residue — nothing created); 1 writing glitch fixed pre-commit
  - [unit 7] Leaf `02 …/sections/2. Migrations and client/2.2. Client queries and relations.md` (3 promises) — findMany/include/nested-create/$transaction/$queryRaw all run live on dbprobe (outputs verified, tables + type dropped, 0 residue); caught + fixed own wrong-target link pre-commit (ORM 01/2.2 vs DatabaseDesign 01/2.2)
  - [unit 8] Leaf `02 …/sections/3. Performance discipline/3.1. N+1 strategies and raw escapes.md` (3 promises) — N+1 counted live via v7 $on(query) events (3 looped vs 2 batched), $queryRaw typed + $executeRaw live (outputs verified, tables dropped, 0 residue); v7 $use-removal discovered live (TypeError recorded in-leaf)
  - [unit 9] Leaf `02 …/sections/4. Mentor checklist/4.1. Prisma checklist mentors insist on.md` (3 promises — process leaf, no DDL surface; 1 writing glitch fixed pre-commit)
  - [unit 11] Leaf `02 …/sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md` (3 promises — foundations/siblings/mechanics boundary map)
- Decisions:
  - Domain 02 mirrors Domain 01 shape (6 sections, 8 leaves, §§1–3 teaching + §4 checklist + §5 QA + §6 boundaries), Template B + PROMPT.md:86 compliant.
  - DRY: pre-build grep found only this track's own mentions — NO Prisma deep treatment exists. Post-build spot check (`migrate deploy|findUnique|batch include`) confirms mention-fragments elsewhere only (outbox batches, English words — no client mechanics).
  - Link discipline: scripted replace pass (same-track `../../01` → `../../../01`, cross-track `../../../DatabaseDesign/` → `../../../../DatabaseDesign/` — the recurring depth class, caught by checker across all 8 Domain 02 leaves) then re-check → 239/239 resolve (S1 113 + S2 126, S1 files untouched — bracket-anchor prevents over-match, verified by file count + full re-check).
  - Infra: dbprobe up throughout (PG 16.15); Prisma 7.10.0 generate + validate + migrate diff/status/deploy-refusal + full client round-trips (enums/defaults/nested writes/includes/transactions/raw/N+1 counts) verified live with scratch schemas, 0 residue (tables + PG enum type dropped; shared DB never mutated — dev/deploy refusals verified as safety behaviors); `.tmp-verify/` removed pre-close, never committed.
- Files touched: modified `README/ORM/LOG.md`, created `README/ORM/02 Prisma Deep Dive/README.md` + 6 `sections/` folders, modified `README/ORM/README.md` (row 2), created 8 leaves (1.1, 1.2, 2.1, 2.2, 3.1, 4.1, 5.1, 6.1)
- Links fixed / added: track README row 2 (resolves); domain index 8 leaf links + back-link; inter-leaf cross-links; 6.1 boundary map (Domain 01 ×6 leaves, Databases 04/05/06/07 with verified paths, DatabaseDesign 01–06 with verified paths, track LOG at `../../../LOG.md`); depth remediation across 8 leaves pre-close
- Verification: 239/239 relative links resolve track-wide (script-checked with unquote); TS snippets tsc --strict clean against real generated clients; live runs on dbprobe PG 16.15 (validate/generate/diff/status/deploy-refusal/N+1 counts/raw/typed — all passing, 0 residue); non-ASCII scan clean (standard set only); DoD: era-labeled (Prisma 7 stable + v8 RC noted), junior-first halves, trade-offs priced, runnable examples (all executed live), neighbor tone matched, indexes updated, LOG appended
- Status: DONE
- Next steps: Session 3 — Domain 03 TypeORM Deep Dive (entities/decorators, both flavors operated, repositories, migrations, testing) per plan above; then 04–07 in order. Track README row 3 appended when 03 lands. Connection facts reused: localhost:5433, password `probe`, global-module + temp-dir verification pattern.

## [2026-09-30 14:11] Session 1 — Create track + Domain 01 Data Access Foundations (Domains 02–07 next)
- Status: DONE
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
- Research notes: versions via npm (2026-09-30, labeled as-of-September-2026 era) — Prisma: stable 7.10.0 (`prev` tag), `latest` tag points at 8.0.0-rc.19 PRERELEASE (verified via dist-tags; track teaches v7 stable, notes v8 RC — never teach an RC silently); TypeORM: 1.1.1 stable (`latest`; `legacy` 0.3.31; 1.0.0-beta.3 historic); Drizzle: 0.45.3 stable (`latest` per version query; 1.0.0-rc in prerelease tags — teach 0.45.x stable); pg driver 8.23.0; node v20.20.2, TypeScript 7.0.2 globally. DRY grep (`prisma|typeorm|drizzle|ActiveRecord|DataMapper`): hits are DatabaseDesign 6.1 textual forwards (inbound — resolve as ORM lands), TS decorators leaves (decorator mechanics — TypeORM usage links there), Databases 04/2.2 migrations basis (migration execution mechanics — linked); NO Prisma/TypeORM/Drizzle treatments exist. Domain 01 owns foundations; 02/03/04 own each tool; 05 owns comparison. Verification setup: global npm installs (pg, drizzle-orm, typeorm, reflect-metadata — repo stays clean, NODE_PATH used); dbprobe TCP = localhost:5433 + password `probe` (port mapping 5432→5433 found via docker port; localhost:5432 is a different cluster — recorded so Domains 02–04 don't repeat the trip); pg smoke `SELECT 1+1` passes. ORM-runtime depth deferred to Domains 02–04 (each tool installed + exercised live there); Domain 01 verifies raw-driver baseline + tsc typechecks (temp files in repo, deleted pre-commit, git status verified clean).
- Done:
  - [unit 1] Opened this Session 1 entry (first write on disk)
  - [unit 2] Research recorded (npm versions incl. Prisma-8-RC-as-latest catch, DRY grep — no competing coverage)
  - [unit 3] Created `README/ORM/README.md` + domain 01 index + 6 section folders (root row #11 resolves); verification harness ready (global modules, dbprobe TCP facts recorded)
  - [unit 3] Created `README/ORM/README.md` (Template A track index, lists Domain 01) + `README/ORM/01 Data Access Foundations and Mental Model/README.md` (Template B domain index, sections 1–6 with back-link) + 6 section folders — root README row #11 now resolves, no root edit needed
- Decisions:
  - [unit 4] Leaf `01 …/sections/1. Why data-access layers/1.1. What problem data-access layers solve and create.md` (3 promises) — TS snippets tsc --strict clean (temp files, deleted pre-commit, tree verified clean); pg parameterized query run live on dbprobe (row returned, table dropped, 0 residue); BIGINT-returns-string gotcha verified live and recorded in-leaf
  - [unit 5] Leaf `01 …/sections/1. Why data-access layers/1.2. Query builders versus ORMs versus raw drivers.md` (3 promises) — raw + Drizzle snippets tsc --strict clean against real packages (temp files, deleted pre-commit); Drizzle select run live on dbprobe (typed row returned, table dropped, 0 residue); Prisma/TypeORM sketches orientation-only (full mechanics deferred to Domains 02–03)
  - [unit 6] Leaf `01 …/sections/2. Mapping patterns/2.1. ActiveRecord versus DataMapper.md` (3 promises) — TypeORM 1.1.1 AR + DataMapper snippets tsc --strict clean (experimentalDecorators + emitDecoratorMetadata, real package imports; temp files, deleted pre-commit); API surface verified live via require (DataSource/Entity/BaseEntity/Repository/Column/PrimaryGeneratedColumn all present)
  - [unit 7] Leaf `01 …/sections/2. Mapping patterns/2.2. The repository seam.md` (3 promises) — interface + MemUsers + contract suite tsc --strict clean; MemUsers round-trip run live (OK); pattern itself linked to DesignPatterns 06 §1.2 (verified on disk — not re-taught); temp files deleted pre-commit
  - [unit 8] Leaf `01 …/sections/3. First contact/3.1. Hello database three ways.md` (3 promises) — Prisma 7.10.0: schema validate + client generate + live create/findUnique on dbprobe (all passing; v7 specifics discovered live: no schema url (P1012), prisma.config.ts + adapter at construction, output in generator block; 1 writing glitch fixed); TypeORM 1.1.1: live DataSource save/findOneBy + tsc entity check; Drizzle 0.45.3: live select + tsc (1.2 shapes reused, linked); Prisma usage snippet tsc --strict clean against real generated client
  - [unit 9] Leaf `01 …/sections/4. Mentor checklist/4.1. Data-access checklist mentors insist on.md` (3 promises — process leaf, no DDL surface; 1 writing glitch fixed pre-commit)
  - [unit 11] Leaf `01 …/sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md` (3 promises — mechanics/design/patterns boundary map; 2 writing glitches fixed pre-commit)
- Decisions:
  - Domain 01 mirrors DatabaseDesign shape (6 sections, 8 leaves, §§1–3 teaching + §4 checklist + §5 QA + §6 boundaries), Template B + PROMPT.md:86 compliant.
  - DRY: pre-build grep found only inbound textual forwards + TS decorator mechanics + Databases migration mechanics (all linked, none re-taught); DesignPatterns 06 repository leaf verified on disk before linking (pattern linked, obligations owned — incl. declined-duplication tombstone). Post-build spot check confirms home-domain concepts only linked.
  - Link discipline: scripted replace pass (`../../../DatabaseDesign/` → `../../../../DatabaseDesign/` — same cross-track depth class as DatabaseDesign S1, now in reverse — plus 1 bare same-dir link) then re-check → 113/113 resolve. Standing rules routine.
  - Infra: global npm installs keep repo clean (pg/drizzle-orm/typeorm/reflect-metadata/@types + prisma/adapter/client for verification only); dbprobe TCP = localhost:5433 + password `probe` (recorded for Domains 02–04); `.tmp-verify/` scratch removed pre-close, never committed (staged paths only — verified via git status per commit).
- Files touched: created `README/ORM/LOG.md`, created `README/ORM/README.md`, created `README/ORM/01 Data Access Foundations and Mental Model/README.md` + 6 `sections/` folders, created 8 leaves (1.1, 1.2, 2.1, 2.2, 3.1, 4.1, 5.1, 6.1)
- Links fixed / added: root README row #11 resolves (no root edit); track README row 1; domain index 8 leaf links + back-link; inter-leaf cross-links; 6.1 boundary map (Databases 04/02/06/07 with verified paths, DatabaseDesign 01–06 with verified paths, DesignPatterns 06 ×2 verified paths, track LOG)
- Verification: 113/113 relative links resolve (script-checked with unquote); TS snippets tsc --strict clean against real packages (pg/drizzle-orm/typeorm/prisma-generated-client); live runs on dbprobe PG 16.15 (pg smoke + parameterized query, Drizzle select, Prisma generate + create/findUnique, TypeORM save/findOneBy, MemUsers round-trip — all passing, 0 residue); TS 7.0.2 accepts legacy decorator flags (TypeORM verified); non-ASCII scan clean (standard ←/§/—/→/×/✓ only); DoD: era-labeled (incl. Prisma-8-RC catch), junior-first halves, trade-offs priced, runnable examples, neighbor tone matched, indexes updated, LOG appended
- Status: DONE
- Next steps: Session 2 — Domain 02 Prisma Deep Dive (schema authoring, migrate tooling, client relations, N+1 strategies, raw escapes) per plan above; then 03–07 in order. Track README row 2 appended when 02 lands. Connection facts reused: localhost:5433, password `probe`, global-module verification pattern.
