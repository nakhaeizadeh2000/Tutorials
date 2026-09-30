# DatabaseDesign — work log

## [2026-09-29 16:26] Session 6 — Domain 06 Modeling for Operations
- Status: IN PROGRESS
- Context read: PROMPT.md (binding §§1–8 — full read this session); root README.md (Database Design #10, unchanged); README/DatabaseDesign/LOG.md (full — Sessions 1–5 DONE, S5 Next steps names Domain 06); README/DatabaseDesign/README.md (5/7 rows); README/DatabaseDesign/05 Evolution Growth and Partitioning/README.md (Template B reference + standing link rules: literal spaces, depth counting, verify targets' content). Recovery: grep for live `^- Status: IN PROGRESS` across all track LOGs — none. Disk verified — S5 Done 11/11 present (domain 05 index + 6 section dirs + 8/8 leaves); git log head 1fc51bd, tree clean. dbprobe PostgreSQL 16.15 up. No discrepancies; trust log + disk, nothing to redo. Fresh Session 6 block (S1–S5 immutable). No scope override in request → resume from S5 Next steps: Domain 06 only (07 final session next).
- Plan (Domain 06 fully implemented this session):
  1. Unit 1 — open this entry (this write)
  2. Unit 2 — research (operations-modeling sources, DRY grep) + record
  3. Unit 3 — create `06 Modeling for Operations/README.md` (Template B, sections 1–6) + 6 section folders + track README row 6
  4. Unit 4 — leaf 1.1. Audit trails that answer questions
  5. Unit 5 — leaf 1.2. Soft deletes done deliberately
  6. Unit 6 — leaf 2.1. Outbox pattern for reliable publishing
  7. Unit 7 — leaf 2.2. Job tables and queues in the database
  8. Unit 8 — leaf 3.1. Feature flags and config storage
  9. Unit 9 — leaf 4.1. Operations-modeling checklist mentors insist on
  10. Unit 10 — leaf 5.1. Common interview QA operations modeling
  11. Unit 11 — leaf 6.1. Boundaries what is covered elsewhere
  12. Final verification (DoD + links + DRY) + close entry DONE/PARTIAL
- Research notes: operations-modeling sources — transactional outbox pattern (industry standard: Fowler/Kleppmann lineage — atomic record + relay + idempotent consume — version-free); audit/history table design (effective dating, history tables — standard temporal practice); SKIP LOCKED work queues (PostgreSQL queueing pattern — stable); feature-flag storage (targeting rules, kill switches — industry practice). DRY grep (`outbox|audit trail|soft delete|SKIP LOCKED|feature flag|job queue|effective dat` + target check): Databases 05 leaf 3.1 owns outbox *pattern + mechanics* (transactional recording, relay process, idempotent consumers, runnable JS) — Domain 06/2.1 does NOT re-teach it (links instead); owned here: outbox *table design* (payload shape, relay cursors, ordering, relayed-row purge). `soft.delete|SKIP LOCKED|feature.flag` outside DatabaseDesign: only TS compiler-flag/type-guard fragments — unrelated. Audit-trail *table design*, soft-delete *design* (UNIQUE interplay, purge path), job-table *schema*, flag/config *schema*: all unowned — Domain 06 owns them. Databases 06 owns backup/monitoring mechanics (linked, not repeated).
- Done:
  - [unit 1] Opened this Session 6 entry (first write on disk)
  - [unit 2] Research recorded (outbox pattern owner found in Databases 05/3.1 — complementary split; soft-delete/SKIP LOCKED/flag schemas confirmed unowned)
  - [unit 3] Created `README/DatabaseDesign/06 Modeling for Operations/README.md` (Template B domain index, sections 1–6 with back-link) + 6 section folders; track README row 6 appended (resolves, verified on disk)
- Decisions:
  - [unit 4] Leaf `06 …/sections/1. History and deletion/1.1. Audit trails that answer questions.md` (3 promises) — trigger-mirror + effective-dating DDL verified on PostgreSQL 16.15 (dbprobe), residue cleaned
  - [unit 5] Leaf `06 …/sections/1. History and deletion/1.2. Soft deletes done deliberately.md` (3 promises) — partial-unique reuse-after-delete verified on PostgreSQL 16.15 (dbprobe), residue cleaned
  - [unit 6] Leaf `06 …/sections/2. Coordination out of the database/2.1. Outbox tables designed for relay.md` (3 promises) — outbox table + SKIP LOCKED relay-claim + windowed purge verified on PostgreSQL 16.15 (dbprobe), residue cleaned; pattern itself linked to Databases 05 §3.1 (not re-taught)
  - [unit 7] Leaf `06 …/sections/2. Coordination out of the database/2.2. Job tables and queues in the database.md` (3 promises) — claim-work SKIP LOCKED + coherence-CHECK rejection + state-machine DDL verified on PostgreSQL 16.15 (dbprobe), residue cleaned
  - [unit 8] Leaf `06 …/sections/3. Runtime configuration/3.1. Feature flags and config storage.md` (3 promises) — flag-table + targeting-evaluation DDL verified on PostgreSQL 16.15 (dbprobe), residue cleaned; stray non-ASCII glitch caught and fixed pre-commit (non-ASCII scan clean: only standard ←/§/≪ remain)
  - [unit 9] Leaf `06 …/sections/4. Mentor checklist/4.1. Operations-modeling checklist mentors insist on.md` (3 promises — process leaf, no DDL surface)
- Files touched: modified `README/DatabaseDesign/LOG.md`, created `README/DatabaseDesign/06 Modeling for Operations/README.md` + 6 `sections/` folders, modified `README/DatabaseDesign/README.md` (row 6), created leaf `1. History and deletion/1.1. Audit trails that answer questions.md`, created leaf `1. History and deletion/1.2. Soft deletes done deliberately.md`, created leaf `2. Coordination out of the database/2.1. Outbox tables designed for relay.md`, created leaf `2. Coordination out of the database/2.2. Job tables and queues in the database.md`, created leaf `3. Runtime configuration/3.1. Feature flags and config storage.md`, created leaf `4. Mentor checklist/4.1. Operations-modeling checklist mentors insist on.md`
- Links fixed / added:
- Verification:
- Next steps:

## [2026-09-29 10:47] Session 5 — Domain 05 Evolution Growth and Partitioning
- Status: DONE
- Context read: PROMPT.md (binding §§1–8 — full read this session); root README.md (Database Design #10, unchanged); README/DatabaseDesign/LOG.md (full — Sessions 1–4 DONE, S4 Next steps names Domain 05); README/DatabaseDesign/README.md (4/7 rows); README/DatabaseDesign/04 Relationships at Scale/README.md (Template B reference + standing link rules: literal spaces, depth counting, verify targets' content). Recovery: grep for live `^- Status: IN PROGRESS` across all track LOGs — none. Disk verified — S4 Done 11/11 present (domain 04 index + 6 section dirs + 8/8 leaves); git log head 0900f88, tree clean. dbprobe PostgreSQL 16.15 up. No discrepancies; trust log + disk, nothing to redo. Fresh Session 5 block (S1–S4 immutable). No scope override in request → resume from S4 Next steps: Domain 05 only (06–07 future sessions).
- Plan (Domain 05 fully implemented this session):
  1. Unit 1 — open this entry (this write)
  2. Unit 2 — research (evolution/partitioning sources, DRY grep) + record
  3. Unit 3 — create `05 Evolution Growth and Partitioning/README.md` (Template B, sections 1–6) + 6 section folders + track README row 5
  4. Unit 4 — leaf 1.1. Expand and contract migrations
  5. Unit 5 — leaf 1.2. Backward-compatible discipline
  6. Unit 6 — leaf 2.1. Capacity modeling with measured triggers
  7. Unit 7 — leaf 2.2. Partitioning keys that prune
  8. Unit 8 — leaf 3.1. Archival and lifecycle tiers
  9. Unit 9 — leaf 4.1. Evolution review checklist mentors insist on
  10. Unit 10 — leaf 5.1. Common interview QA evolution and growth
  11. Unit 11 — leaf 6.1. Boundaries what is covered elsewhere
  12. Final verification (DoD + links + DRY) + close entry DONE/PARTIAL
- Research notes: evolution/partitioning sources — expand/contract migration pattern (industry standard zero-downtime practice: expand → migrate → contract — version-free procedure); PostgreSQL declarative partitioning (PARTITION BY RANGE/LIST/HASH — stable since v10, as-of-September-2026 era); capacity planning (growth-rate math — version-free); retention/archival tiers (hot/warm/cold + purge discipline — practice, not version). DRY grep (`expand.*contract|zero-downtime migration|partitioning|table partitioning|data retention|archival|capacity model|cold storage` + target check): hits are this track's own mentions/forwards + NodeJS QA passing mentions; Databases 02 "partition" hit is GROUP BY grouping language, "contract" hits are shape-as-contract — both unrelated. NO expand/contract-migration, table-partitioning-design, capacity-modeling, or archival-policy treatment exists; Domain 05 owns all four. Databases 02 owns migration *execution mechanics* (DDL safety — linked, not repeated).
- Done:
  - [unit 1] Opened this Session 5 entry (first write on disk)
  - [unit 2] Research recorded (evolution/partitioning sources, DRY grep with target-content check — no competing coverage)
  - [unit 3] Created `README/DatabaseDesign/05 Evolution Growth and Partitioning/README.md` (Template B domain index, sections 1–6 with back-link) + 6 section folders; track README row 5 appended (resolves, verified on disk)
- Decisions:
  - [unit 4] Leaf `05 …/sections/1. Schema evolution/1.1. Expand and contract migrations.md` (3 promises) — phased DDL (add-nullable → backfill → SET NOT NULL → NOT VALID → VALIDATE) verified on PostgreSQL 16.15 (dbprobe), residue cleaned
  - [unit 5] Leaf `05 …/sections/1. Schema evolution/1.2. Backward-compatible discipline.md` (3 promises) — additive-DDL safety verified on PostgreSQL 16.15 (dbprobe), residue cleaned
  - [unit 6] Leaf `05 …/sections/2. Growth and capacity/2.1. Capacity modeling with measured triggers.md` (3 promises) — storage-size probes (`pg_total_relation_size` pattern, 10k rows) verified on PostgreSQL 16.15 (dbprobe), residue cleaned
  - [unit 7] Leaf `05 …/sections/2. Growth and capacity/2.2. Partitioning keys that prune.md` (3 promises) — declarative partitioning + pruning (single-partition plan) verified on PostgreSQL 16.15 (dbprobe), residue cleaned
  - [unit 8] Leaf `05 …/sections/3. Lifecycle and retention/3.1. Archival and lifecycle tiers.md` (3 promises) — DETACH + cold-copy + batched-purge DDL verified on PostgreSQL 16.15 (dbprobe), residue cleaned
  - [unit 9] Leaf `05 …/sections/4. Mentor checklist/4.1. Evolution review checklist mentors insist on.md` (3 promises — process leaf, no DDL surface)
  - [unit 11] Leaf `05 …/sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md` (3 promises — outward/twin/operations boundary map)
- Decisions:
  - Domain 05 mirrors Domains 01–04 shape (6 sections, 8 leaves, §§1–3 teaching + §4 checklist + §5 QA + §6 boundaries), Template B + PROMPT.md:86 compliant.
  - DRY: pre-build grep + target-content check (GROUP BY "partition" and shape-"contract" hits unrelated; NodeJS expand/contract mention is deploy-context) — NO expand/contract-migration, table-partitioning-design, capacity-modeling, or archival-policy treatment exists; Domain 05 owns all four. Post-build spot check (`legal_hold|expand/contract`) confirms mention-only elsewhere.
  - Link discipline: 427/427 with exactly one break (bare same-dir `2.2.` link in 4.1 — the recurring class, fixed pre-close). Standing rules routine; checker run before every close.
  - Infra: dbprobe up throughout (PG 16.15); all DDL verified live with `dd_` scratch tables (phased DDL, additive safety, storage-size probes, declarative partitioning + pruning plan, DETACH + cold-copy + batched purge), 0 residue.
- Files touched: modified `README/DatabaseDesign/LOG.md`, created `README/DatabaseDesign/05 Evolution Growth and Partitioning/README.md` + 6 `sections/` folders, modified `README/DatabaseDesign/README.md` (row 5), created 8 leaves (1.1, 1.2, 2.1, 2.2, 3.1, 4.1, 5.1, 6.1)
- Links fixed / added: track README row 5 (resolves); domain index 8 leaf links + back-link; inter-leaf cross-links; 6.1 boundary map (Databases 02/05/06/07 with verified paths, Domain 03 §3.2 twin, Domain 06 forward textual, track LOG at `../../../LOG.md`); 1 bare-link fix in 4.1 pre-close
- Verification: 427/427 relative links resolve track-wide (script-checked with unquote — S1 48 + S2 80 + S3 111 + S4 99 + S5 89); all leaf DDL executed on PostgreSQL 16.15 via dbprobe (`dd_` scratch, 0 residue); DRY grep — expand/contract, partitioning-design, capacity-modeling, archival-policy, legal-hold treatments unowned elsewhere; DoD: era-labeled, junior-first halves, trade-offs priced, runnable examples, neighbor tone matched, indexes updated, LOG appended
- Status: DONE
- Next steps: Session 6 — Domain 06 Modeling for Operations (observability schemas, audit trails, outbox pattern, job tables, flag storage) per S1 curriculum; then 07 in order. Track README row 6 appended when 06 lands.

## [2026-09-29 08:40] Session 4 — Domain 04 Relationships at Scale
- Status: DONE
- Context read: PROMPT.md (binding §§1–8 — full read this session); root README.md (Database Design #10, unchanged); README/DatabaseDesign/LOG.md (full — Sessions 1–3 DONE, S3 Next steps names Domain 04); README/DatabaseDesign/README.md (3/7 rows); README/DatabaseDesign/03 Document Modeling for Scale/README.md (Template B reference + standing link rules, scripted replace pass). Recovery: grep for live `^- Status: IN PROGRESS` across all track LOGs — none. Disk verified — S3 Done 12/12 present (domain 03 index + 6 section dirs + 9/9 leaves); git log head f616bf6, tree clean. dbprobe PostgreSQL 16.15 up (Up 14 hours). No discrepancies; trust log + disk, nothing to redo. Fresh Session 4 block (S1–S3 immutable). No scope override in request → resume from S3 Next steps: Domain 04 only (05–07 future sessions).
- Plan (Domain 04 fully implemented this session):
  1. Unit 1 — open this entry (this write)
  2. Unit 2 — research (relationship-scale sources, DRY grep) + record
  3. Unit 3 — create `04 Relationships at Scale/README.md` (Template B, sections 1–6) + 6 section folders + track README row 4
  4. Unit 4 — leaf 1.1. Foreign keys that survive traffic
  5. Unit 5 — leaf 1.2. Self-references and hierarchies
  6. Unit 6 — leaf 2.1. Junction tables at scale
  7. Unit 7 — leaf 2.2. Polymorphic associations done honestly
  8. Unit 8 — leaf 3.1. Hot keys and skew
  9. Unit 9 — leaf 4.1. Relationship review checklist mentors insist on
  10. Unit 10 — leaf 5.1. Common interview QA relationships at scale
  11. Unit 11 — leaf 6.1. Boundaries what is covered elsewhere
  12. Final verification (DoD + links + DRY) + close entry DONE/PARTIAL
- Research notes: relationship-scale sources — hierarchy modeling options (adjacency list, closure table, nested sets, PostgreSQL ltree extension — all stable, version-free theory; ltree is contrib, available since forever, as-of-September-2026 era); polymorphic patterns (exclusive arcs, supertype/subtype tables — standard SQL modeling literature); fan-out/celebrity problem (social-graph scale literature — version-free); FK discipline (PostgreSQL FKs not auto-indexed — engine behavior owned by Databases 02, decision rules here). DRY grep (`polymorphic|exclusive arc|closure table|ltree|celebrity|hot key|skew` + `nested set|adjacency list|supertype|fan-out|fanout`): hits are NodeJS event fan-out/pub-sub, TS polymorphic types and perf checklists, plus this track's own mentions (03/3.2 discriminator, 01/3.1 junctions) — NO relational relationship-scale treatment exists; Domain 04 owns FK-at-volume, hierarchies, junctions-at-scale, polymorphic associations, hot-key skew.
- Done:
  - [unit 1] Opened this Session 4 entry (first write on disk)
  - [unit 2] Research recorded (hierarchy/polymorphic/skew sources, DRY grep — no competing relational coverage)
  - [unit 3] Created `README/DatabaseDesign/04 Relationships at Scale/README.md` (Template B domain index, sections 1–6 with back-link) + 6 section folders; track README row 4 appended (resolves, verified on disk)
- Decisions:
  - [unit 4] Leaf `04 …/sections/1. Foreign keys at volume/1.1. Foreign keys that survive traffic.md` (3 promises) — FK + index + policy DDL verified on PostgreSQL 16.15 (dbprobe), residue cleaned
  - [unit 5] Leaf `04 …/sections/1. Foreign keys at volume/1.2. Self-references and hierarchies.md` (3 promises) — self-FK + recursive CTE + closure + ltree 1.2 verified on PostgreSQL 16.15 (dbprobe); scratch tables cleaned (ltree extension left installed — idempotent infra, disclosed)
  - [unit 6] Leaf `04 …/sections/2. Many-to-many and polymorphism/2.1. Junction tables at scale.md` (3 promises) — junction + reverse covering index DDL verified on PostgreSQL 16.15 (dbprobe), residue cleaned
  - [unit 7] Leaf `04 …/sections/2. Many-to-many and polymorphism/2.2. Polymorphic associations done honestly.md` (3 promises) — exclusive-arc CHECK + supertype DDL verified on PostgreSQL 16.15 (dbprobe), residue cleaned
  - [unit 8] Leaf `04 …/sections/3. Skew and hot relationships/3.1. Hot keys and skew.md` (3 promises) — sharded-counter + keyset DDL verified on PostgreSQL 16.15 (dbprobe), residue cleaned
  - [unit 9] Leaf `04 …/sections/4. Mentor checklist/4.1. Relationship review checklist mentors insist on.md` (3 promises — process leaf, no DDL surface)
  - [unit 11] Leaf `04 …/sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md` (3 promises — inbound/inheritance/outward boundary map)
- Decisions:
  - Domain 04 mirrors Domains 01–03 shape (6 sections, 8 leaves, §§1–3 teaching + §4 checklist + §5 QA + §6 boundaries), Template B + PROMPT.md:86 compliant.
  - DRY: two grep rounds pre-build (`polymorphic|exclusive arc|closure|ltree|celebrity|hot key|skew` + `nested set|adjacency|supertype|fan-out`) — hits are NodeJS event fan-out/pub-sub, TS polymorphic types, plus this track's own mentions; NO relational relationship-scale treatment exists. Post-build DRY caught one misattribution: keyset-pagination mechanics linked to Databases 02 (which has zero keyset coverage — verified by grep) → all 5 references repointed to the true owner Databases 07 §2.2 Data API contracts (verified on disk). Sharded counters mentioned once in Databases 05 transactional context (redesign-aside, no treatment) — full DDL + economics owned here, no conflict. Lesson: verify link *targets'* content, not just their paths.
  - Link discipline: 333/333 on first checker pass (no replace pass needed — careful writing held); +5 keyset repoint links → 338/338 final. Standing rules (literal spaces, depth counting, `ls` before cross-linking) now routine.
  - Infra: dbprobe up throughout (PG 16.15); all DDL verified live with `dd_` scratch tables, 0 residue (ltree extension left installed from S4U5 — idempotent, disclosed S4U5).
- Files touched: modified `README/DatabaseDesign/LOG.md`, created `README/DatabaseDesign/04 Relationships at Scale/README.md` + 6 `sections/` folders, modified `README/DatabaseDesign/README.md` (row 4), created 8 leaves (1.1, 1.2, 2.1, 2.2, 3.1, 4.1, 5.1, 6.1)
- Links fixed / added: track README row 4 (resolves); domain index 8 leaf links + back-link; inter-leaf cross-links; 6.1 boundary map (Domains 01–02 leaves, Databases 02/05/06/07 with verified real names, DesignPatterns 06, track LOG at `../../../LOG.md`); 5 keyset-mechanics references repointed Databases 02 → Databases 07 §2.2 (true owner, verified)
- Verification: 338/338 relative links resolve track-wide (script-checked with unquote — S1 48 + S2 80 + S3 111 + S4 99); all leaf DDL executed on PostgreSQL 16.15 via dbprobe (FK+index+policy, self-FK + recursive CTE + closure + ltree 1.2, junction + reverse covering index, exclusive-arc CHECK + supertype, sharded counters + keyset shape — `dd_` scratch, 0 residue); DRY grep — exclusive-arc/closure/sharded-counter full treatments unowned elsewhere (keyset mechanics correctly attributed to Databases 07 §2.2); DoD: era-labeled, junior-first halves, trade-offs priced, runnable examples, neighbor tone matched, indexes updated, LOG appended
- Status: DONE
- Next steps: Session 5 — Domain 05 Evolution Growth and Partitioning (expand/contract migration, capacity modeling, partitioning keys, archival) per S1 curriculum; then 06–07 in order. Track README row 5 appended when 05 lands.

## [2026-09-28 15:28] Session 3 — Domain 03 Document Modeling for Scale
- Status: DONE
- Context read: PROMPT.md (binding §§1–8 — full read this session); root README.md (Database Design #10, unchanged); README/DatabaseDesign/LOG.md (full — Sessions 1–2 DONE, S2 Next steps names Domain 03); README/DatabaseDesign/README.md (2/7 rows); README/DatabaseDesign/02 Normalization Deep Dive/README.md (Template B reference + standing link rules). Recovery: grep for live `^- Status: IN PROGRESS` across all track LOGs — none. Disk verified — S2 Done 11/11 present (domain 02 index + 6 section dirs + 8/8 leaves); git log head f98b9e0, tree clean. dbprobe PostgreSQL 16.15 up. Mongo: NO live verification available — mongoprobe container gone, mongo:8 image fails on kernel 6.19 (SERVER-121912 incompatibility, confirmed via docker logs, container removed). Mitigation recorded in Decisions. No discrepancies otherwise; trust log + disk, nothing to redo. Fresh Session 3 block (S1–S2 immutable). No scope override in request → resume from S2 Next steps: Domain 03 only (04–07 future sessions).
- Plan (Domain 03 fully implemented this session):
  1. Unit 1 — open this entry (this write)
  2. Unit 2 — research (document-modeling sources, DRY grep) + record
  3. Unit 3 — create `03 Document Modeling for Scale/README.md` (Template B, sections 1–6) + 6 section folders + track README row 3
  4. Unit 4 — leaf 1.1. Aggregates the unit of document modeling
  5. Unit 5 — leaf 1.2. Access patterns drive document shape
  6. Unit 6 — leaf 2.1. Embed when together
  7. Unit 7 — leaf 2.2. Reference when apart
  8. Unit 8 — leaf 3.1. Schema patterns that scale
  9. Unit 9 — leaf 3.2. Versioning and shape migration (split from patterns — distinct promise: contracts + migration economics)
  10. Unit 10 — leaf 4.1. Document modeling checklist mentors insist on
  11. Unit 11 — leaf 5.1. Common interview QA document modeling
  12. Unit 12 — leaf 6.1. Boundaries what is covered elsewhere
  13. Final verification (DoD + links + DRY + JSON validation) + close entry DONE/PARTIAL
- Research notes: document-modeling sources — MongoDB official "Building with Patterns" series (subset, computed, bucket, extended reference, schema versioning, approximation, attribute, outlier, tree patterns — stable documented patterns, version-free); DDD aggregates (Evans/Vernon — consistency boundaries, version-free theory); 16MB document limit (stable server constant, as-of-September-2026 era). DRY grep (`embed|aggregate root|bucket pattern|subset pattern|computed pattern|extended reference`): Databases 03 leaf 2.1 owns embed-vs-reference *read-locality* guidance + 16MB ceiling math + snapshot-vs-truth — Domain 03 does NOT re-teach those (links instead); UNOCCUPIED and owned here: aggregate-as-consistency-boundary lens, access-pattern-first procedure, named schema patterns catalog (bucket/subset/computed/extended-reference/versioning), polymorphic/versioned schemas, shape migration. Named-pattern grep (`bucket|subset pattern|computed pattern|schema versioning|polymorphic|approximation|extended reference|attribute pattern`) in Databases 03: zero hits — confirmed unowned. "Aggregate" hits in Databases 03 are aggregation pipelines ($group), not DDD aggregates — no conflict.
- Done:
  - [unit 1] Opened this Session 3 entry (first write on disk)
  - [unit 2] Research recorded (pattern sources, DRY boundary vs Databases 03 leaf 2.1 — complementary lenses, named patterns confirmed unowned)
  - [unit 3] Created `README/DatabaseDesign/03 Document Modeling for Scale/README.md` (Template B domain index, sections 1–6, 9 leaves with back-link) + 6 section folders; track README row 3 appended (resolves, verified on disk)
- Decisions:
  - No live Mongo (kernel 6.19 vs mongo:8 incompatibility): document examples written as strict-JSON documents (string ids/dates, no shell-only constructors) and machine-validated with a JSON-parse script; query/mechanics claims deferred by link to Databases 03 MongoDB Deep Dive (owns mechanics); design rules (this domain's content) need no engine — they are access-pattern reasoning. Verification section records this substitution honestly.
  - [unit 4] Leaf `03 …/sections/1. Aggregates and access/1.1. Aggregates the unit of document modeling.md` (3 promises) — 6 strict-JSON blocks machine-validated (parse OK, no live Mongo per Decisions)
  - [unit 5] Leaf `03 …/sections/1. Aggregates and access/1.2. Access patterns drive document shape.md` (3 promises) — 6 JSON blocks machine-validated (parse OK)
  - [unit 6] Leaf `03 …/sections/2. Embed or reference/2.1. Embed when together.md` (3 promises) — 6 JSON blocks machine-validated (parse OK)
  - [unit 7] Leaf `03 …/sections/2. Embed or reference/2.2. Reference when apart.md` (3 promises) — 6 JSON blocks machine-validated (parse OK)
  - [unit 8] Leaf `03 …/sections/3. Patterns and change/3.1. Schema patterns that scale.md` (3 promises — bucket/subset/computed) — 6 JSON blocks machine-validated (parse OK)
  - [unit 9] Leaf `03 …/sections/3. Patterns and change/3.2. Versioning and shape migration.md` (3 promises) — 6 JSON blocks machine-validated (parse OK)
  - [unit 10] Leaf `03 …/sections/4. Mentor checklist/4.1. Document modeling checklist mentors insist on.md` (3 promises — process leaf; 6 illustrative JSON blocks parse OK)
  - [unit 12] Leaf `03 …/sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md` (3 promises — inbound/forward/outward boundary map)
- Decisions:
  - Domain 03 mirrors Domains 01–02 shape (6 sections, 9 leaves — extra 3.2 split justified: versioning/migration is a distinct promise from patterns catalog; §§1–3 teaching + §4 checklist + §5 QA + §6 boundaries), Template B + PROMPT.md:86 compliant.
  - DRY boundary vs Databases 03 leaf 2.1 held by complementary lenses: Databases owns read-locality + ceiling math + snapshot-vs-truth framing; Domain 03 owns consistency-boundary lens, access-catalog procedure, named patterns catalog, versioning/migration, checklists/QA. Named-pattern grep in Databases 03 pre-build: zero hits — confirmed unowned.
  - Verification re-caught the standing link lesson a third session running: same-track depth `../../` → `../../../` (in 6.1, 13 occurrences) + bare same-dir `2.2.` links in 3.1/4.1/5.1 (4 occurrences) — all fixed pre-close via scripted replace + re-check. Standing rule now scripted: after writing leaves, run replace pass + link checker before committing 6.1-class leaves.
  - Infra notes: mongoprobe gone + mongo:8 unrunnable on kernel 6.19 (SERVER-121912, container removed after log inspection) → strict-JSON + parser validation substitution (recorded Unit 1, honored all session). dbprobe found Exited (255) at verification time — restarted cleanly, data intact, 0 `dd_` residue (no DDL run this session — nothing to clean).
- Files touched: modified `README/DatabaseDesign/LOG.md`, created `README/DatabaseDesign/03 Document Modeling for Scale/README.md` + 6 `sections/` folders, modified `README/DatabaseDesign/README.md` (row 3), created 9 leaves (1.1, 1.2, 2.1, 2.2, 3.1, 3.2, 4.1, 5.1, 6.1)
- Links fixed / added: track README row 3 (resolves); domain index 9 leaf links + back-link; inter-leaf cross-links; 6.1 boundary map (Domains 01–02 leaves, Databases 03/02/05/06/07 + track indices, DesignPatterns 06, track LOG at `../../../LOG.md`)
- Verification: 239/239 relative links resolve track-wide (script-checked with unquote — S1 48 + S2 80 + S3 111); 48 JSON blocks / 55 documents machine-parse across 9 Domain 03 leaves (comment-stripped, multi-doc-tolerant parser); DRY grep — `bucket/subset/computed pattern|schemaVersion|extended reference` zero hits outside this track; DoD: era-labeled, junior-first halves, trade-offs priced, runnable strict-JSON examples, neighbor tone matched, indexes updated, LOG appended
- Status: DONE
- Next steps: Session 4 — Domain 04 Relationships at Scale (FK discipline at volume, junction growth, polymorphism relationally, hot keys) per S1 curriculum; then 05–07 in order. Track README row 4 appended when 04 lands.

## [2026-09-28 11:07] Session 2 — Domain 02 Normalization Deep Dive
- Status: DONE
- Context read: PROMPT.md (binding §§1–8 — full read this session); root README.md (Database Design #10, unchanged); README/DatabaseDesign/LOG.md (full — Session 1 DONE, all 11 units verified on disk, Next steps names Domain 02); README/DatabaseDesign/README.md (1/7 rows); README/DatabaseDesign/01 Modeling Foundations and Mental Model/README.md (Template B reference + link lesson: literal spaces, `../../../../` cross-track depth, real folder names only). Recovery: grep for live `^- Status: IN PROGRESS` across all track LOGs — none (prior hits are historical mentions inside Context-read lines). Disk verified — Session 1 Done 11/11 present (track README + domain 01 index + 6 section dirs + 8/8 leaves); git log head a6a873f, tree clean. No discrepancies; trust log + disk, nothing to redo. Fresh Session 2 block (S1 immutable). No scope override in request → resume from S1 Next steps: Domain 02 only (03–07 future sessions).
- Plan (Domain 02 fully implemented this session):
  1. Unit 1 — open this entry (this write)
  2. Unit 2 — research (theory sources, DRY grep) + record
  3. Unit 3 — create `02 Normalization Deep Dive/README.md` (Template B, sections 1–6) + 6 section folders + track README row 2
  4. Unit 4 — leaf 1.1. Functional dependencies the one idea behind every normal form
  5. Unit 5 — leaf 1.2. First normal form atomic values
  6. Unit 6 — leaf 2.1. Second and third normal form
  7. Unit 7 — leaf 2.2. BCNF fourth and fifth normal forms
  8. Unit 8 — leaf 3.1. Deliberate denormalization with priced trade-offs
  9. Unit 9 — leaf 4.1. Normalization review checklist mentors insist on
  10. Unit 10 — leaf 5.1. Common interview QA normalization
  11. Unit 11 — leaf 6.1. Boundaries what is covered elsewhere
  12. Final verification (DoD + links + DRY) + close entry DONE/PARTIAL
- Research notes: normalization theory is stable textbook knowledge — Codd 1971/72 (1NF/2NF/3NF), Boyce–Codd 1974 (BCNF), Fagin 1977 (4NF/5NF); no version-sensitive claims, labeled "as of September 2026" only for tooling. No roadmap.sh spine (database-design 404s, sql shell — established Session 1). Local verification: PostgreSQL 16.15 via docker dbprobe (violating-vs-normalized DDL pairs executed per leaf). DRY grep (`normal form|denormal|BCNF|functional depend|transitive depend`): hits are only this track's own forward refs + Databases 6.1 boundary pointers deferring normalization here — no full treatment exists; Domain 02 owns it.
- Done:
  - [unit 1] Opened this Session 2 entry (first write on disk)
  - [unit 2] Research recorded (theory sources, DRY grep — no competing coverage)
  - [unit 3] Created `README/DatabaseDesign/02 Normalization Deep Dive/README.md` (Template B domain index, sections 1–6 with back-link) + 6 section folders; track README row 2 appended (resolves, verified on disk)
  - [unit 4] Leaf `02 …/sections/1. Dependencies and atomicity/1.1. Functional dependencies the one idea behind every normal form.md` (3 promises) — DDL verified on PostgreSQL 16.15 (dbprobe), residue cleaned; fixed own link errors pre-commit (`%20` + same-track depth `../../` → `../../../`)
  - [unit 5] Leaf `02 …/sections/1. Dependencies and atomicity/1.2. First normal form atomic values.md` (3 promises) — DDL + array operators verified on PostgreSQL 16.15 (dbprobe), residue cleaned
  - [unit 6] Leaf `02 …/sections/2. The core ladder/2.1. Second and third normal form.md` (3 promises) — split DDL verified on PostgreSQL 16.15 (dbprobe), residue cleaned
  - [unit 7] Leaf `02 …/sections/2. The core ladder/2.2. BCNF fourth and fifth normal forms.md` (3 promises) — split + three-way DDL verified on PostgreSQL 16.15 (dbprobe), residue cleaned
  - [unit 8] Leaf `02 …/sections/3. Judgment/3.1. Deliberate denormalization with priced trade-offs.md` (3 promises) — materialized-view + CONCURRENTLY DDL verified on PostgreSQL 16.15 (dbprobe), residue cleaned
  - [unit 9] Leaf `02 …/sections/4. Mentor checklist/4.1. Normalization review checklist mentors insist on.md` (3 promises — process leaf, no DDL surface)
  - [unit 10] Leaf `02 …/sections/5. Interview QA/5.1. Common interview QA normalization.md` (3 promises — process leaf, no DDL surface)
  - [unit 11] Leaf `02 …/sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md` (3 promises — inbound/forward/outward boundary map)
- Decisions:
  - Domain 02 mirrors Domain 01's shape (6 sections, 8 leaves, §§1–3 teaching + §4 checklist + §5 QA + §6 boundaries) — consistent track rhythm, Template B + PROMPT.md:86 compliant.
  - Verification re-caught the Session 1 link lesson: `%20`-encoding in 1.1 (fixed pre-commit) and same-track depth `../../` → `../../../` in 1.1 + 6.1 (fixed pre-close). Standing rule: literal spaces, count depth from file (section dir → `../` = sections, `../../` = own domain, `../../../` = track, `../../../../` = README/), `ls` before cross-linking.
- Files touched: modified `README/DatabaseDesign/LOG.md`, created `README/DatabaseDesign/02 Normalization Deep Dive/README.md` + 6 `sections/` folders, modified `README/DatabaseDesign/README.md` (row 2), created 8 leaves (1.1, 1.2, 2.1, 2.2, 3.1, 4.1, 5.1, 6.1)
- Links fixed / added: track README row 2 (resolves); domain index 8 leaf links + back-link; inter-leaf cross-links; 6.1 boundary map (Domain 01 leaves, Databases 02/03/05/06/07 verified real names, track LOG at `../../../LOG.md`)
- Verification: 128/128 relative links resolve track-wide (script-checked with unquote — includes Session 1's 48); all leaf DDL executed on PostgreSQL 16.15 via dbprobe (dependency/anomaly pairs, repeating-groups vs arrays with GIN + overlap ops, 2NF/3NF splits, BCNF/4NF/5NF shapes, materialized view + CONCURRENTLY refresh — `dd_` scratch, 0 residue confirmed); DRY grep — `materialized view|second/third normal` zero hits outside this track, normalization mentions elsewhere are forwards here; DoD: version-free theory labeled, junior-first halves, trade-offs priced, runnable examples, neighbor tone matched, indexes updated, LOG appended
- Status: DONE
- Next steps: Session 3 — Domain 03 Document Modeling for Scale (aggregate boundaries, embed-vs-reference, schema patterns, shape migration) per S1 curriculum; then 04–07 in order. Track README row 3 appended when 03 lands.

## [2026-09-28 09:34] Session 1 — Create track + Domain 01 Modeling Foundations (Domains 02–07 next)
- Status: DONE
- Context read: PROMPT.md (binding, §§1–8 — full read this session, skill harness reloaded); root README.md (Categories table — Database Design already listed at #10, link target did not exist); README/Databases/LOG.md (tail — Session 7 DONE, TRACK COMPLETE 7/7, Next steps names Database Design as next track); README/Databases/README.md (Template A reference, September 2026 era). Recovery: grep for live `- Status: IN PROGRESS` across all track LOGs — none (JS/TS/ITV/Git/AlgoDesign/Patterns/NodeJS/TSNode/Databases all close DONE). Disk verified — `ls README/` showed no DatabaseDesign dir (created empty this session via mkdir check only, no files), tree clean. No discrepancies; trust log + disk, nothing to redo. Fresh Session 1 block. User chose option 1 "Start Database Design track" → Mode 1, Domain 01 first (PARTIAL + precise Next steps only on context limits).
- Plan (Mode 1 new track; Domain 01 fully implemented this session, domains 02–07 next in order):
  1. Unit 1 — open this entry (this write)
  2. Unit 2 — create track README.md (Template A, lists Domain 01)
  3. Unit 3 — create 01 Modeling Foundations and Mental Model README.md (Template B, sections 1–6) + section folders
  4. Unit 4 — leaf 1.1. What data modeling is and is not
  5. Unit 5 — leaf 1.2. Entities relationships and cardinality
  6. Unit 6 — leaf 2.1. Surrogate versus natural keys
  7. Unit 7 — leaf 2.2. Identity at scale
  8. Unit 8 — leaf 3.1. From requirements to tables
  9. Unit 9 — leaf 4.1. Modeling checklist mentors insist on
  10. Unit 10 — leaf 5.1. Common interview QA modeling foundations
  11. Unit 11 — leaf 6.1. Boundaries what is covered elsewhere
  12. Final verification (DoD + links + DRY) + close entry DONE/PARTIAL
- Full planned curriculum (future domains, in order): 02 Normalization Deep Dive, 03 Document Modeling for Scale, 04 Relationships at Scale, 05 Evolution Growth and Partitioning, 06 Modeling for Operations, 07 Production Modeling and Interview Mastery. Only Domain 01 is guaranteed in this session; later units/sessions append domains 02–07.
- Research notes: relational modeling theory is stable textbook knowledge (Codd 1NF→5NF, ER modeling — no version-sensitive claims; labeled "as of September 2026" era conventions where tooling touched). roadmap.sh/database-design 404s; roadmap.sh/sql is a JS-rendered shell (no extractable spine — same class as prior sessions; spine taken from standard theory + Databases-track experience above). Era label "September 2026 era" on track index (matches Databases convention). Local verification: PostgreSQL 16.15 via docker dbprobe (DDL for every modeled shape executed — `CREATE TABLE` outcomes recorded per leaf); /tmp/dbprobe survives with prior gates. DRY grep: Databases 6.1s own *usage/design-split* pointers (modeling explicitly deferred here — textual forwards inbound from 6 domains); DesignPatterns 06 owns *repository seam*; Databases 02 owns *constraint mechanics*; Databases 03 owns *embed/reference mechanics* — this track owns *modeling discipline* (entities, keys, normal forms, relationships, evolution, capacity modeling) and links back (boundaries in Domain 01 leaf 6.1).
- Decisions:
  - Track index lists Domain 01 only; rows 02–07 appended as each domain lands (no dead links — matches Databases/TSNode convention). Root README row #10 already points here — creating the track README resolves it, no root edit needed.
- Done:
  - [unit 1] Opened this Session 1 entry (first write on disk)
  - [unit 2] Created `README/DatabaseDesign/README.md` (Template A track index, lists Domain 01) — root README row #10 now resolves, no root edit needed (ORM sibling kept textual — target unbuilt)
  - [unit 3] Created `README/DatabaseDesign/01 Modeling Foundations and Mental Model/README.md` (Template B domain index, sections 1–6 with back-link) + 6 section folders
  - [unit 4] Leaf `01 …/sections/1. What modeling means/1.1. What data modeling is and is not.md` (3 promises) — DDL verified on PostgreSQL 16.15 (dbprobe), residue cleaned
  - [unit 5] Leaf `01 …/sections/1. What modeling means/1.2. Entities relationships and cardinality.md` (3 promises) — junction-table DDL verified on PostgreSQL 16.15 (dbprobe), residue cleaned
  - [unit 6] Leaf `01 …/sections/2. Identity and keys/2.1. Surrogate versus natural keys.md` (3 promises) — DDL verified on PostgreSQL 16.15 (dbprobe), residue cleaned
  - [unit 7] Leaf `01 …/sections/2. Identity and keys/2.2. Identity at scale.md` (3 promises) — UUID + idempotency DDL verified on PostgreSQL 16.15 (dbprobe), residue cleaned
  - [unit 8] Leaf `01 …/sections/3. First design moves/3.1. From requirements to tables.md` (3 promises, bookstore worked example) — full 6-table DDL verified on PostgreSQL 16.15 (dbprobe), residue cleaned
  - [unit 9] Leaf `01 …/sections/4. Mentor checklist/4.1. Modeling checklist mentors insist on.md` (3 promises — process leaf, no DDL surface)
  - [unit 10] Leaf `01 …/sections/5. Interview QA/5.1. Common interview QA modeling foundations.md` (3 promises — process leaf, no DDL surface)
  - [unit 11] Leaf `01 …/sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md` (3 promises — outbound/inbound/future boundary map)
- Decisions:
  - Track index lists Domain 01 only; rows 02–07 appended as each domain lands (no dead links — matches Databases/TSNode convention). Root README row #10 already points here — creating the track README resolves it, no root edit needed.
  - Verification caught 3 link classes, all fixed pre-close: (a) `%20`-encoding → literal spaces (neighbor convention, angle-bracket form); (b) cross-track depth `../../../` → `../../../../` (leaf sits 4 deep from README/); (c) fabricated Databases/DesignPatterns folder names replaced with real ones (`02 Postgres Deep Dive`, `03 MongoDB Deep Dive`, `05 Transactions Consistency and Integrity`, `06 Performance Backup and Operations`, `06 Modern Patterns and Anti-Patterns` — verified on disk, not from memory). Track README ORM reference made textual (target unbuilt). Lesson recorded: never write cross-links from memory — `ls` first.
- Files touched: created `README/DatabaseDesign/LOG.md`, created `README/DatabaseDesign/README.md`, created `README/DatabaseDesign/01 Modeling Foundations and Mental Model/README.md` + 6 `sections/` folders, created 8 leaves (1.1, 1.2, 2.1, 2.2, 3.1, 4.1, 5.1, 6.1)
- Links fixed / added: track index → Databases README (resolves) + back-link to root README; ORM kept textual (target unbuilt); domain index 8 leaf links + back-link; inter-leaf cross-links; 6.1 boundary map (Databases 02/03/05/06–07, DesignPatterns 06, track LOG)
- Verification: 48/48 relative links resolve (script-checked); all leaf DDL executed on PostgreSQL 16.15 via dbprobe (`dd_` scratch tables, 0 residue confirmed); DRY grep — idempotency/cardinality only mentioned in logs/glossaries, modeling discipline unowned elsewhere; DoD: era-labeled, junior-first halves, trade-off-justified practices, runnable examples, neighbor tone matched, indexes updated, LOG appended
- Status: DONE
- Next steps: Session 2 — Domain 02 Normalization Deep Dive (1NF→5NF, dependencies, denormalization judgment) per plan above; then 03–07 in order. Track README row 2 appended when 02 lands.
