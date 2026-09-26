# MongoDB Deep Dive

MongoDB beyond first operations: aggregation pipelines that summarize, query operators with projections, embed-versus-reference modeling, document indexes, and idempotent writes. First-contact operations live in [01/2.2](<../01 Database Foundations and Mental Model/sections/2. First queries/2.2. First MongoDB operations.md>); this domain teaches the *depth* — server-side pipelines, expressive filters, shape decisions, fast documents, and exactly-once writes.

## 0. Prerequisites

[01/2.2. First MongoDB operations](<../01 Database Foundations and Mental Model/sections/2. First queries/2.2. First MongoDB operations.md>) (CRUD arc, object queries, `_id` contract, operator-injection sibling — assumed, used in every leaf here). MongoDB driver locally (for BSON/ObjectId probes); server-executed snippets documented from the MongoDB 8.3 manual and labeled per snippet (no `mongod` runs on this track's probe floor — honest scope from Session 1, recorded per leaf). This domain assumes working CRUD and spends its pages on what CRUD alone cannot express.

## 1. Query depth

### [1.1. Aggregation pipelines](<./sections/1. Query depth/1.1. Aggregation pipelines.md>)

1. **Stages compose: match, group, sort** (`$match` narrows, `$group` summarizes, `$sort` orders — documents flowing stage to stage).
2. **Pipelines run server-side** (computation at data — one cursor back, not collections over the wire).
3. **Build incrementally, verify per stage** (append one stage, inspect output — pipelines debugged stage by stage, never whole).

### [1.2. Query operators and projections](<./sections/1. Query depth/1.2. Query operators and projections.md>)

1. **Operators express intent** (`$gt`/`$in`/`$regex`/`$and` — comparisons, membership, patterns, combinations).
2. **Projections return only what's needed** (include/exclude fields — narrow documents, fast transfers).
3. **Operator-bearing input stays in code** (allowlisted fields, validated structure — the injection sibling from 01, enforced).

---

## 2. Modeling and speed

### [2.1. Embed versus reference](<./sections/2. Modeling and speed/2.1. Embed versus reference.md>)

1. **Embed what reads together** (order with its items — one fetch, zero joins — nesting for read locality).
2. **Reference what grows apart** (shared entities, unbounded arrays — `_id` links, `$lookup`/application-join at read).
3. **The 16MB ceiling decides ties** (documents bounded — unbounded growth references, always; size measured, never hoped).

### [2.2. Document indexes](<./sections/2. Modeling and speed/2.2. Document indexes.md>)

1. **Index the queried shape** (equality-first fields, sort keys, compound order matching sort — ESR discipline).
2. **Uniqueness where identity lives** (unique indexes on natural keys — duplicates refused with named errors).
3. **Measure with explain** (`executionStats` — winning plan, ms measured — proof over hope, per document).

---

## 3. Writes

### [3.1. Writes, ids, and idempotency](<./sections/3. Writes/3.1. Writes ids and idempotency.md>)

1. **`_id` as the dedup mechanism** (natural-key ids — duplicate inserts fail loudly, exactly once enforced).
2. **Upserts complete the idempotent write** (match-or-create in one operation — retries safe by construction).
3. **Ordered bulk for all-or-most** (ordered stops at first error; unordered collects — chosen per intent, witnessed per batch).

---

## 4. Important points to remember (MongoDB)

### [4.1. MongoDB checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. MongoDB checklist habits mentors insist on.md>)

1. **Pipeline per question, index per shape** (server-side summaries, evidenced indexes — never client-side loops).
2. **Model per access, bound per document** (embed/reference decided, 16MB respected — shapes reviewed, not hoped).
3. **Write idempotently, witness always** (dedup ids, upserts, acknowledged counts — retries safe, results read).

---

## 5. Interview questions and answers (MongoDB)

### [5.1. Common interview QA: MongoDB](<./sections/5. Interview questions and answers/5.1. Common interview QA MongoDB.md>)

1. **"Embed or reference?" — answer with access** (read-together nests, grow-apart links — the modeling screen).
2. **"This aggregation is slow — what now?" — explain it** (stage inspection, index evidence, shape review — the measurement sequence).
3. **"Double-charge on retry" — prevent it** (idempotency keys as `_id` — the exactly-once drill), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Foundations and drivers** (CRUD/objects/ids → 01; pooling/topology → 04 — linked, never restated).
2. **Deeper data topics** (Postgres depth → 02; transactions theory → 05; performance/ops → 06 — each owned there).
3. **Design and mapping** (modeling → Database Design track; ODMs → ORM track — planned siblings, textual forwards).
