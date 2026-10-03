# Redis — work log

## [2026-10-03 09:49] Session 1 — Create track + Domain 01 Redis Foundations (Domains 02–07 next)
- Status: IN PROGRESS
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
  - [unit 10] Leaf `01 …/sections/5. Interview QA/5.1. Common interview QA Redis foundations.md` (3 promises — process leaf, no DDL surface; 1 mangled cross-link fixed pre-commit)
- Files touched: created `README/Redis/LOG.md`, created `README/Redis/README.md`, created `README/Redis/01 Redis Foundations and Mental Model/README.md` + 6 `sections/` folders, created leaf `1. What Redis is/1.1. What Redis is and is not.md`, created leaf `1. What Redis is/1.2. Strings keys and expiry.md`, created leaf `2. Core structures/2.1. Core structures hash list set zset.md`, created leaf `2. Core structures/2.2. Choosing structures by access.md`, created leaf `3. First caching/3.1. Hello caching with cache-aside.md`, created leaf `4. Mentor checklist/4.1. Redis checklist mentors insist on.md`, created leaf `5. Interview QA/5.1. Common interview QA Redis foundations.md`
- Links fixed / added:
- Verification:
- Next steps:
