# Transactions Consistency and Integrity

What makes concurrent writes correct: ACID guarantees, isolation levels with their anomalies, MVCC snapshots instead of locks, constraints as integrity, and honest distributed protocols. Transaction *lifecycle* lives in [02/3.1](<../02 Postgres Deep Dive/sections/3. Atomicity/3.1. Transactions basis.md>); this domain teaches the *models* — guarantees, levels, snapshots, and cross-system honesty.

## 0. Prerequisites

[02/3.1. Transactions basis](<../02 Postgres Deep Dive/sections/3. Atomicity/3.1. Transactions basis.md>) (BEGIN/COMMIT/ROLLBACK lifecycle, one-client binding — assumed; models compose on top). [04/2.1. Checkout discipline](<../04 Node.js Data Access Drivers and Pooling/sections/2. Discipline/2.1. Checkout discipline.md>) (pooled lifecycle — assumed; concurrent units demonstrated through it). Live PostgreSQL plus two `pg` clients (anomalies witnessed with concurrent connections — every isolation claim executed, never asserted). This domain assumes working transactions and spends its pages on what concurrent transactions guarantee.

## 1. Guarantees

### [1.1. ACID that holds](<./sections/1. Guarantees/1.1. ACID that holds.md>)

1. **Atomicity and Durability, witnessed** (all-or-nothing units, committed writes surviving restarts — verified live).
2. **Consistency as constraint preservation** (valid states to valid states — constraints carrying the C, per [2.2](<./sections/2. Mechanisms/2.2. Constraints as integrity.md>)).
3. **Isolation previewed, modeled next** (concurrent units interfering — anomalies named here, levels in [1.2](<./sections/1. Guarantees/1.2. Isolation levels and anomalies.md>)).

### [1.2. Isolation levels and anomalies](<./sections/1. Guarantees/1.2. Isolation levels and anomalies.md>)

1. **Read committed: the default that suffices** (no dirty reads, writers never block readers — verified live default).
2. **Anomalies priced per level** (non-repeatable reads, phantoms, skew — demonstrated with concurrent clients, verified).
3. **Serializable on measured evidence** (strongest level for proven anomalies — cost acknowledged, adopted on receipts).

---

## 2. Mechanisms

### [2.1. MVCC snapshots not locks](<./sections/2. Mechanisms/2.1. MVCC snapshots not locks.md>)

1. **Readers never block writers** (snapshot reads — concurrent SELECT during UPDATE, verified live).
2. **Versions, not overwrites** (dead tuples cleaned by vacuum — bloat monitored, never feared).
3. **Locks where snapshots stop** (row locks on write-write contention — `SELECT FOR UPDATE` queuing, verified).

### [2.2. Constraints as integrity](<./sections/2. Mechanisms/2.2. Constraints as integrity.md>)

1. **Deferred constraints check at commit** (cross-row rules spanning statements — immediate vs deferred, verified).
2. **Exclusion beyond unique** (non-overlapping ranges — the constraint UNIQUE cannot express, verified).
3. **Application checks race; constraints don't** (TOCTOU closed at write time — the race demonstrated, then shut).

---

## 3. Distribution

### [3.1. Distributed honesty 2PC and sagas](<./sections/3. Distribution/3.1. Distributed honesty 2PC and sagas.md>)

1. **2PC coordinates, rarely** (prepare/commit across systems — correctness priced in availability and latency).
2. **Sagas compensate stepwise** (each step with an inverse — failures triggering backward compensation, narrated).
3. **Outbox bridges honestly** (transactional messaging via relay tables — exactly-once effects without distributed transactions).

---

## 4. Important points to remember (integrity)

### [4.1. Integrity checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Integrity checklist habits mentors insist on.md>)

1. **Lifecycle correct, level deliberate** (BEGIN/COMMIT/ROLLBACK wired; isolation chosen per anomaly evidence — never defaulted blindly).
2. **Constraints first, anomalies tested** (invariants in DDL; concurrent scenarios reproduced in suites — races proven absent, not hoped).
3. **Distribute explicitly or not at all** (single-system transactions by default; 2PC/sagas/outbox named deliberately per boundary).

---

## 5. Interview questions and answers (integrity)

### [5.1. Common interview QA: consistency](<./sections/5. Interview questions and answers/5.1. Common interview QA consistency.md>)

1. **"Dirty reads in Postgres?" — answer no, then why** (read committed floor + MVCC snapshots — the default screen with receipts).
2. **"Lost update, two writers" — demonstrate it** (concurrent increments, one clobbered — then the three fixes, priced).
3. **"Pay across services" — saga it** (steps with inverses, outbox relay, idempotent handlers — the distribution drill), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Lifecycle and access** (BEGIN/COMMIT/ROLLBACK/binding → 02/3.1; pools/checkouts → 04 — linked, never restated).
2. **Deeper data topics** (performance/ops → 06 — each owned there).
3. **Design and mapping** (modeling → Database Design track; ORMs → ORM track — planned siblings, textual forwards).
