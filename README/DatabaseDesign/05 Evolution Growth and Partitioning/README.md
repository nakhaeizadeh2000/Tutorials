## 1. Schema evolution

### [1.1. Expand and contract migrations](<./sections/1. Schema evolution/1.1. Expand and contract migrations.md>)

1. **Never rewrite in one deploy** (expand: add the new shape; migrate: dual-write and backfill; contract: remove the old — three deploys, zero downtime)
2. **Backfills are batch jobs** (chunked, throttled, resumable — measured wall-time, abort signals named)
3. **Renames are add-and-drop** (no RENAME COLUMN under traffic — alias, migrate, drop, each deployed separately)

---

### [1.2. Backward-compatible discipline](<./sections/1. Schema evolution/1.2. Backward-compatible discipline.md>)

1. **Old and new code coexist** (every migration ships while both versions run — compatibility is the deploy assumption)
2. **Additive changes are safe, breaking changes expand first** (new nullable columns yes; renames, type changes, drops go through contract phases)
3. **Readers tolerate, writers conform** (Postel across deploys — new readers handle old rows, old readers ignore new columns)

---

## 2. Growth and capacity

### [2.1. Capacity modeling with measured triggers](<./sections/2. Growth and capacity/2.1. Capacity modeling with measured triggers.md>)

1. **Growth rates are business facts** (rows per day per table — asked, not guessed, recorded with source)
2. **Storage math per row** (row width × count × indexes × overhead — the spreadsheet that prices headroom)
3. **Triggers turn anxiety into runbooks** (partition at N rows, archive at M months, reprice at thresholds — numbers with owners)

---

### [2.2. Partitioning keys that prune](<./sections/2. Growth and capacity/2.2. Partitioning keys that prune.md>)

1. **Partition by query predicate** (time ranges for recency queries, lists for tenants, hash for uniform spread — pruning decides)
2. **Keys must appear in queries** (unpruned partitions are expensive decoration — the key earns its place per workload)
3. **Partition count is a budget** (hundreds, not thousands — planning time, lock fan-out, and manageability cap it)

---

## 3. Lifecycle and retention

### [3.1. Archival and lifecycle tiers](<./sections/3. Lifecycle and retention/3.1. Archival and lifecycle tiers.md>)

1. **Hot warm cold by access** (live rows hot, recent history warm, legal history cold — tier per temperature, priced per tier)
2. **Retention is a business rule** (legal holds, tax years, user promises — policy first, purge jobs second)
3. **Purge with the same discipline as migrate** (batched, monitored, reversible-windowed — deletes are migrations too)

---

## 4. Mentor checklist

### [4.1. Evolution review checklist mentors insist on](<./sections/4. Mentor checklist/4.1. Evolution review checklist mentors insist on.md>)

1. **Every migration is expand-compatible** (old code runs against new schema — stated per migration, not hoped)
2. **Every growth claim is measured** (rates sourced, math shown, triggers set — numbers or it didn't happen)
3. **Every retention rule is owned** (policy named, job scheduled, legal signed — or the data stays forever by default)

---

## 5. Interview QA

### [5.1. Common interview QA evolution and growth](<./sections/5. Interview QA/5.1. Common interview QA evolution and growth.md>)

1. **Migrate a live table on a whiteboard** (expand-contract narration — phases, dual-writes, rollback per phase)
2. **Partition for a workload** (key choice derived from queries — pruning demonstrated, not asserted)
3. **Capacity-plan a feature** (rows-per-day math live — headroom priced, triggers named)

---

## 6. Boundaries

### [6.1. Boundaries what is covered elsewhere](<./sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md>)

1. **Migration mechanics live in Databases 02** (DDL safety, CONCURRENTLY, lock behavior — linked, not repeated)
2. **Versioning discipline lives in Domain 03** (schemaVersion, lazy/eager economics — the document twin, linked)
3. **Operations live in Databases 06–07 and Domain 06** (backup, monitoring, on-call modeling — neighbors, not repeats)

---

[← Back to Database Design track](<../README.md>)
