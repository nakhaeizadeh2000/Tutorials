# Redis — work log

## [2026-10-03 12:52] Session 2 — Domain 02 Caching Patterns at Scale
- Status: IN PROGRESS
- Context read: PROMPT.md (binding §§1–8 — full reads S1–S7 DatabaseDesign + S1–S7 ORM + S1 Redis on file; PROMPT.md/root README.md unchanged (git log last touches 49a1003/4ad143a, unrelated) — change-checked this session); root README.md (Redis #12, unchanged); README/Redis/LOG.md (full — Session 1 DONE, Next steps names Domain 02); README/Redis/README.md (1/7 rows); README/Redis/01 Redis Foundations and Mental Model/README.md (Template B reference + standing rules: literal spaces, depth counting (`../../../` same-track / `../../../../` cross-track from section dirs), verify targets' content, scoped-paths-only commits, global node-redis + CJS require, redisprobe localhost:6380 plaintext). Recovery: grep for live `^- Status: IN PROGRESS` across all track LOGs — none. Disk verified — S1 Done 11/11 present (track README + domain 01 index + 6 section dirs + 8/8 leaves = 9 md); git log head 84c908e, tree clean. redisprobe Redis 8.0.2 PONG. No discrepancies; trust log + disk, nothing to redo. Fresh Session 2 block (S1 immutable). No scope override in request → resume from S1 Next steps: Domain 02 only (03–07 future sessions).
- Plan (Domain 02 fully implemented this session):
  1. Unit 1 — open this entry (this write)
  2. Unit 2 — research (caching-pattern sources, DRY grep) + record
  3. Unit 3 — create `02 Caching Patterns at Scale/README.md` (Template B, sections 1–6) + 6 section folders + track README row 2
  4. Unit 4 — leaf 1.1. Cache-aside write-through write-back
  5. Unit 5 — leaf 1.2. Stampede prevention
  6. Unit 6 — leaf 2.1. Lua scripting for atomic multi-step
  7. Unit 7 — leaf 2.2. Transactions MULTI EXEC WATCH
  8. Unit 8 — leaf 3.1. Eviction policies and memory safety
  9. Unit 9 — leaf 4.1. Caching checklist mentors insist on
  10. Unit 10 — leaf 5.1. Common interview QA caching patterns
  11. Unit 11 — leaf 6.1. Boundaries what is covered elsewhere
  12. Final verification (DoD + links + DRY) + close entry DONE/PARTIAL
- Research notes: caching-pattern sources — standard industry practice (cache-aside/write-through/write-back semantics; thundering-herd prevention via jitter/coalescing/locks; Lua atomicity + MULTI/EXEC/WATCH semantics from Redis docs behavior; eviction policies per use case — all version-free theory, verified live on Redis 8.0.2 behaviors). DRY grep (write-through/write-back/stampede/dogpile/singleflight + EVALSHA/MULTI-EXEC/WATCH/allkeys-lru/volatile-ttl/noeviction/maxmemory-policy): hits are ORM/NodeJS/JS fragments (retry jitter, TypeORM transactions, module interop — unrelated contexts) + this track's own forwards — NO cache-pattern/Lua/transaction/eviction treatment exists; Domain 02 owns all four. Verification setup reused (node-redis global + CJS require, redis-cli, dd:-namespaced keys + DEL cleanup, 0 residue).
- Done:
  - [unit 1] Opened this Session 2 entry (first write on disk)
  - [unit 2] Research recorded (pattern sources, DRY grep with target check — no competing coverage)
  - [unit 3] Created `README/Redis/02 Caching Patterns at Scale/README.md` (Template B domain index, sections 1–6 with back-link) + 6 section folders; track README row 2 appended (resolves, verified on disk)
- Decisions:
- Files touched: modified `README/Redis/LOG.md`, created `README/Redis/02 Caching Patterns at Scale/README.md` + 6 `sections/` folders, modified `README/Redis/README.md` (row 2)
- Links fixed / added:
- Verification:
- Next steps:

## [2026-10-03 09:49] Session 1 — Create track + Domain 01 Redis Foundations (Domains 02–07 next)
- Status: DONE
- Context read: PROMPT.md (binding §§1–8 — full reads S1–S7 DatabaseDesign + S1–S7 ORM on file; PROMPT.md/root README.md unchanged (git log last touches 49a1003/4ad143a, unrelated) — change-checked this session); root README.md (Categories table — Redis already listed at #12, link target did not exist); README/ORM/LOG.md (tail — Session 7 DONE, TRACK COMPLETE 7/7, Next steps names Redis as next track); README/ORM/README.md (Template A reference, September 2026 era). Recovery: repo-wide grep for live `^- Status: IN PROGRESS` — none (all PARTIAL hits are closed-session history, immutable per PROMPT.md:165). Disk verified — ORM TRACK COMPLETE on disk (7/7 domains, 7/7 rows, 65 md files, HEAD ebacccf closeout, tree clean); `ls README/` shows no Redis dir. No discrepancies; trust log + disk, nothing to redo. Fresh Session 1 block. No scope override in request → Mode 1 new track, Domain 01 only (02–07 future sessions, per convention).
- Plan (Mode 1 new track; Domain 01 fully implemented this session, domains 02–07 next in order):
  1. Unit 1 — open this entry (this write)
  2. Unit 2 — research (Redis 8 sources, DRY grep) + record
  3. Unit 3 — create track README.md (Template A, lists Domain 01) + `01 Redis Foundations and Mental Model/README.md` (Template B, sections 1–6) + 6 section folders (root README row #12 resolves, no root edit needed)
  4. Unit 4 — leaf 1.1. What Redis is and is not
  5. Unit 5 — leaf 1.2. Strings keys and expiry
  6. Unit 6 — leaf 2.1. Core structures hash list set zset
  7. Unit 7 — leaf 2.2. Choosing structures by access
  8. Unit 8 — leaf 3.1. Hello caching with cache-aside
  9. Unit 9 — leaf 4.1. Redis checklist mentors insist on
  10. Unit 10 — leaf 5.1. Common interview QA Redis foundations
  11. Unit 11 — leaf 6.1. Boundaries what is covered elsewhere
  12. Final verification (DoD + links + DRY) + close entry DONE/PARTIAL
- Full planned curriculum (future domains, in order): 02 Caching Patterns at Scale, 03 Streams Queues and PubSub, 04 Persistence Replication and Sentinel, 05 Cluster and Partitioning, 06 Production Redis Operations, 07 Production Mastery and Interview Synthesis. Only Domain 01 is guaranteed in this session; later sessions append domains 02–07.
- Research notes: versions via live probe + npm (labeled September 2026 era per track convention — verified 2026-10-03): Redis 8.0.2 standalone via redisprobe (localhost:6380, plaintext override on TLS-only image); node-redis 6.3.0 + ioredis 6.0.0 latest (teach node-redis primary — official client). DRY grep (`redis|valkey|cache-aside|write-through|cache stampede|leaderboard|hyperloglog`): hits are ORM usage mentions (cache-aside, invalidation — linked, not re-taught) + NodeJS production mentions — NO Redis data-structures/caching-patterns treatment exists; Domain 01 owns foundations (what/strings/expiry/structures/choice/hello-caching). Verification setup: global node-redis, CJS require (ESM ignores NODE_PATH — established), redis-cli for DDL-equivalents, keys namespaced per leaf + DEL cleanup, 0 residue.
- Done:
  - [unit 1] Opened this Session 1 entry (first write on disk)
  - [unit 2] Research recorded (Redis 8.0.2 live + client versions, DRY grep — no competing coverage)
  - [unit 3] Created `README/Redis/README.md` (Template A track index, lists Domain 01) + `README/Redis/01 Redis Foundations and Mental Model/README.md` (Template B domain index, sections 1–6 with back-link) + 6 section folders — root README row #12 now resolves, no root edit needed
- Decisions:
  - [unit 4] Leaf `01 …/sections/1. What Redis is/1.1. What Redis is and is not.md` (3 promises) — INFO/PING/SET/INCR/DEL run live on Redis 8.0.2 (outputs verified, keys cleaned, 0 residue); 2 leaked thinking-notes caught + fixed pre-commit (forward ownership decided: Lua+transactions and eviction → Domain 02)
  - [unit 5] Leaf `01 …/sections/1. What Redis is/1.2. Strings keys and expiry.md` (3 promises) — SET NX/EX/TTL/GETDEL/MSET verified live on Redis 8.0.2 (outputs verified, keys cleaned, 0 residue); 1 writing glitch fixed pre-commit
  - [unit 6] Leaf `01 …/sections/2. Core structures/2.1. Core structures hash list set zset.md` (3 promises) — HSET/HINCRBY/HGETALL + RPUSH/LRANGE + SADD/SISMEMBER + ZADD/ZREVRANGE all run live on Redis 8.0.2 (outputs verified, 4 keys cleaned, 0 residue); 1 leaked thinking-note fixed pre-commit (forward ownership decided: streams/queues/durability → Domain 03)
  - [unit 7] Leaf `01 …/sections/2. Core structures/2.2. Choosing structures by access.md` (3 promises) — MEMORY USAGE/OBJECT ENCODING probes run live on Redis 8.0.2 (64B/embstr/listpack outputs verified); 3 leaked thinking-notes fixed pre-commit (forward ownership decided: streams/queues/durability → Domain 03, encoding/threshold tuning → Domain 06)
  - [unit 8] Leaf `01 …/sections/3. First caching/3.1. Hello caching with cache-aside.md` (3 promises) — full miss→hit→TTL→invalidate→miss cycle run live via node-redis 6.3.0 on Redis 8.0.2 (outputs verified; leftover key from re-population found post-write via KEYS check and DELeted, 0 residue); 1 mangled cross-link fixed pre-commit
  - [unit 9] Leaf `01 …/sections/4. Mentor checklist/4.1. Redis checklist mentors insist on.md` (3 promises — process leaf, no DDL surface)
  - [unit 11] Leaf `01 …/sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md` (3 promises — mechanics/design/code-mapping boundary map; 1 malformed link fixed pre-check)
- Decisions:
  - Domain 01 mirrors DatabaseDesign/ORM shape (6 sections, 8 leaves, §§1–3 teaching + §4 checklist + §5 QA + §6 boundaries), Template B + PROMPT.md:86 compliant.
  - DRY: pre-build grep found only usage mentions (all linked, none re-taught); forward ownership decided live during writing (Lua + transactions → Domain 02, eviction → Domain 02, streams/queues/durability → Domain 03, encoding tuning → Domain 06, persistence/replication → Domains 04–05). Post-build spot check (`cache-aside|write-through|thundering herd|staleness window`) hits mentions only (denormalization staleness twin correctly linked, NodeJS networking fragments).
  - Link discipline: scripted replace pass (cross-track `../../../X/` → `../../../../X/` for DatabaseDesign/Databases/DesignPatterns/ORM — the recurring depth class, caught by checker across 5 Domain 01 leaves; same-track `../../../01` correct throughout) then re-check → 85/85 resolve.
  - Infra: redisprobe Redis 8.0.2 (plaintext override on TLS-only 8.0.2 image; 7.2 fallback discarded); node-redis 6.3.0 global, CJS require (ESM ignores NODE_PATH — established); all commands verified live (INFO/SET/INCR/DEL, NX/EX/TTL/GETDEL/MSET, hashes/lists/sets/zsets, MEMORY/OBJECT, cache-aside cycle) with dd:-namespaced keys cleaned, 0 residue.
- Files touched: created `README/Redis/LOG.md`, created `README/Redis/README.md`, created `README/Redis/01 Redis Foundations and Mental Model/README.md` + 6 `sections/` folders, created 8 leaves (1.1, 1.2, 2.1, 2.2, 3.1, 4.1, 5.1, 6.1)
- Links fixed / added: root README row #12 resolves (no root edit); track README row 1; domain index 8 leaf links + back-link; inter-leaf cross-links; 6.1 boundary map (Databases 04 + DatabaseDesign 01/03/05/06 + DesignPatterns 06 + ORM 01/2.2 with verified paths, track LOG at `../../../LOG.md`); depth remediation across 5 leaves + 1 malformed link pre-close
- Verification: 85/85 relative links resolve (script-checked with unquote); all commands executed live on Redis 8.0.2 (outputs verified, keys cleaned, 0 residue); non-ASCII scan clean (standard set only); DoD: era-labeled (Redis 8.0.2 + node-redis 6.3.0), junior-first halves, trade-offs priced, runnable examples (all executed live), neighbor tone matched, indexes updated, LOG appended
- Status: DONE
- Next steps: Session 2 — Domain 02 Caching Patterns at Scale (cache-aside/write-through/write-back discipline, stampede prevention, Lua + transactions, eviction policies) per plan above; then 03–07 in order. Track README row 2 appended when 02 lands. Connection facts reused: redisprobe localhost:6380 plaintext (TLS override documented), global node-redis + CJS require pattern.
