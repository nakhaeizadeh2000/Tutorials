# Performance Backup and Operations

Operating PostgreSQL in production: EXPLAIN at scale, vacuum and bloat discipline, backups that restore, containers that run databases honestly, and data observability. Query depth lives in [02 Postgres Deep Dive](<../02 Postgres Deep Dive/README.md>); this domain teaches the *operation* — fast queries sustained, dead tuples reclaimed, restores proven, containers inspected, bloat alarmed.

## 0. Prerequisites

[02/2.2. Indexes and EXPLAIN](<../02 Postgres Deep Dive/sections/2. Shape and speed/2.2. Indexes and EXPLAIN.md>) (plan reading, ANALYZE actuals — assumed; applied at scale here). [05/2.1. MVCC](<../05 Transactions Consistency and Integrity/sections/2. Mechanisms/2.1. MVCC snapshots not locks.md>) (versions, vacuum, bloat mechanics — assumed; operated here). Live PostgreSQL with `pg_dump`/`pg_restore` present plus `pg_stat_*` views (every ops claim executed against `dbprobe`, never asserted). This domain assumes working queries and spends its pages on keeping them working at scale and age.

## 1. Performance at scale

### [1.1. EXPLAIN at scale](<./sections/1. Performance at scale/1.1. EXPLAIN at scale.md>)

1. **Slow-query pipeline, not slow-query heroics** (log → top-N by total time → EXPLAIN → index-or-rewrite → re-measure — the funnel, ordered).
2. **Estimates rot, statistics refresh** (`ANALYZE` per bulk load — stale stats misplanning, verified live).
3. **Worst query first, always** (total-time ranking — optimizing the 1% tail wastes quarters; the top row pays).

### [1.2. Vacuum and bloat](<./sections/1. Performance at scale/1.2. Vacuum and bloat.md>)

1. **Dead tuples are deferred work** (updates append, vacuum reclaims — `n_dead_tup` witnessed live per table).
2. **Autovacuum tuned per hot table** (defaults suffice generally; scale factors per churn — measured, never feared).
3. **Bloat alarms before impact** (dead-ratio thresholds — visibility quarters before slowdown, not after).

---

## 2. Survival

### [2.1. Backups that restore](<./sections/2. Survival/2.1. Backups that restore.md>)

1. **Dump, restore, verify — the round trip** (`pg_dump` → fresh database → `pg_restore` → row counts match — verified live).
2. **Untested backups are wishes** (restore rehearsals scheduled — recovery proven, RTO measured, never hoped).
3. **PITR named, not mythologized** (WAL archiving + base backups — point-in-time recovery explained honestly, RPO priced).

### [2.2. Postgres in containers](<./sections/2. Survival/2.2. Postgres in containers.md>)

1. **Data lives in volumes, never layers** (named volumes for PGDATA — container death without data death, verified).
2. **Config ships as files and env** (postgresql.conf deltas + env — reviewed, versioned, reproducible).
3. **Healthchecks prove serving** (`pg_isready` in HEALTHCHECK — schedulers route on proof, not on process existence).

---

## 3. Visibility

### [3.1. Observability for data](<./sections/3. Visibility/3.1. Observability for data.md>)

1. **Four signals, one dashboard** (dead tuples, cache hit ratio, connection counts, slow queries — the vital signs).
2. **`pg_stat_*` over guesses** (user tables, statements where available, activity — evidence per symptom, always).
3. **Alerts on approach, not arrival** (80% thresholds — pages before cliffs, never at them).

---

## 4. Important points to remember (operations)

### [4.1. Operations checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Operations checklist habits mentors insist on.md>)

1. **Measure before touching** (EXPLAIN + stats per slow shape — evidence precedes prescription, always).
2. **Prove recovery, not backups** (restore rehearsals with RTO numbers — recovery proven, dumps merely taken).
3. **Observe the four signals** (bloat, cache, connections, slow queries — dashboarded, alarmed, reviewed).

---

## 5. Interview questions and answers (operations)

### [5.1. Common interview QA: operations](<./sections/5. Interview questions and answers/5.1. Common interview QA operations.md>)

1. **"Queries slowed over months" — diagnose it** (bloat vs stats vs growth — three suspects, evidence per suspect).
2. **"Restore from last night" — walk it** (dump/restore round trip with counts — the recovery screen with receipts).
3. **"Postgres in Docker for prod?" — answer honestly** (volumes, config, healthchecks — the container screen), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Query and transaction foundations** (joins/plans → 02; lifecycles/models → 05; access/pools → 04 — linked, never restated).
2. **Judgment synthesis** (capacity, review, full-system drill → 07 — owned there).
3. **Design and mapping** (modeling → Database Design track; ORMs → ORM track — planned siblings, textual forwards).
