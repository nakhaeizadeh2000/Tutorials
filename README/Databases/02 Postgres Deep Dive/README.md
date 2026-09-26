# Postgres Deep Dive

PostgreSQL beyond first queries: joins across tables, aggregates that summarize, schemas and constraints that protect, indexes with `EXPLAIN` proof, and transactions as the atomicity basis. First-contact querying lives in [01/2.1](<../01 Database Foundations and Mental Model/sections/2. First queries/2.1. First Postgres queries.md>); this domain teaches the *depth* — multi-table questions, summarizing questions, protected shapes, fast questions, and all-or-nothing writes.

## 0. Prerequisites

[01/2.1. First Postgres queries](<../01 Database Foundations and Mental Model/sections/2. First queries/2.1. First Postgres queries.md>) (CRUD, `$1` parameters, row counts, `RETURNING` — assumed, used in every probe here). Live PostgreSQL (docker `postgres:16-alpine` in this track's probe lab — every leaf verifies against it). This domain assumes working CRUD and spends its pages on what CRUD alone cannot express.

## 1. Query depth

### [1.1. Joins across tables](<./sections/1. Query depth/1.1. Joins across tables.md>)

1. **INNER JOIN answers cross-entity questions** (matching rows combined — the product relational stores sell).
2. **LEFT JOIN keeps the lonely** (unmatched left rows survive with NULLs — absence reported, not hidden).
3. **Join on keys, filter with WHERE** (ON matches, WHERE restricts — conflating them misreports).

### [1.2. Aggregates and grouping](<./sections/1. Query depth/1.2. Aggregates and grouping.md>)

1. **Five functions summarize anything** (`COUNT`/`SUM`/`AVG`/`MIN`/`MAX` — whole-table answers in one row).
2. **`GROUP BY` summarizes per group** (one row per key — per-customer totals, per-day counts).
3. **`HAVING` filters groups** (WHERE filters rows before grouping, HAVING filters groups after — order matters).

---

## 2. Shape and speed

### [2.1. Schema and constraints that protect](<./sections/2. Shape and speed/2.1. Schema and constraints that protect.md>)

1. **Types and NOT NULL declare intent** (shape as contract — bad data rejected at write time, verified).
2. **UNIQUE, CHECK, and FOREIGN KEY refuse** (duplicates, nonsense, orphans — each rejected loudly with a named error).
3. **Constraints are the cheapest tests** (store-enforced invariants survive every client — apps come and go, rules persist).

### [2.2. Indexes and EXPLAIN](<./sections/2. Shape and speed/2.2. Indexes and EXPLAIN.md>)

1. **Indexes trade writes for reads** (`CREATE INDEX` — lookups stop scanning; writes pay maintenance).
2. **`EXPLAIN` shows the plan** (Seq Scan vs Index Scan — the database narrating itself, read before theorizing).
3. **Measure with EXPLAIN ANALYZE** (actual times, not estimates — proof over hope, per query).

---

## 3. Atomicity

### [3.1. Transactions basis](<./sections/3. Atomicity/3.1. Transactions basis.md>)

1. **BEGIN/COMMIT make all-or-nothing** (multi-statement writes succeed together or vanish together — verified live).
2. **ROLLBACK is the undo you plan** (error path rolls back explicitly — partial writes never escape).
3. **One client, one transaction** (a checked-out connection carries the txn — pooling meets atomicity in Domain 04).

---

## 4. Important points to remember (Postgres)

### [4.1. Postgres checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Postgres checklist habits mentors insist on.md>)

1. **Join deliberately, aggregate explicitly** (join type named, group keys listed — no accidental fan-out).
2. **Constrain early, index on evidence** (rules at design time, indexes at EXPLAIN time — never reversed).
3. **Wrap multi-writes in transactions** (two writes, one fate — unwrapped pairs are incidents scheduled).

---

## 5. Interview questions and answers (Postgres)

### [5.1. Common interview QA: Postgres](<./sections/5. Interview questions and answers/5.1. Common interview QA Postgres.md>)

1. **"INNER vs LEFT JOIN?" — answer with NULLs** (matched-only vs lonely-kept — the absence-reporting screen).
2. **"This query is slow — what now?" — read the plan** (EXPLAIN first, index second, rewrite third — the measurement sequence).
3. **"Transfer money safely" — transact it** (BEGIN/transfer/transfer/COMMIT + ROLLBACK path — the atomicity drill), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Foundations and drivers** (CRUD/params/witnesses → 01; pooling/migrations → 04 — linked, never restated).
2. **Deeper data topics** (MongoDB depth → 03; full ACID/isolation theory → 05; performance/ops → 06 — each owned there).
3. **Design and mapping** (modeling → Database Design track; ORMs → ORM track — planned siblings, textual forwards).
