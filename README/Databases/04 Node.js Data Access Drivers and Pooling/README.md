# Node.js Data Access Drivers and Pooling

How Node.js programs hold databases: `pg` pools that amortize handshakes, `MongoClient` topology that survives failover, checkout discipline binding transactions to connections, migration discipline evolving schemas, and retries with backoff. Single-client handshakes live in [01/1.2](<../01 Database Foundations and Mental Model/sections/1. Database identity and setup/1.2. Connecting from Node.md>); this domain teaches the *fleet* — many queries, many clients, one discipline per concern.

## 0. Prerequisites

[01/1.2. Connecting from Node](<../01 Database Foundations and Mental Model/sections/1. Database identity and setup/1.2. Connecting from Node.md>) (URLs, handshake rite, secrets boundary — assumed; pools compose on top). [02/3.1. Transactions basis](<../02 Postgres Deep Dive/sections/3. Atomicity/3.1. Transactions basis.md>) (BEGIN/COMMIT/ROLLBACK lifecycle, one-client binding — assumed; checkout discipline applies it at pool scale). Live PostgreSQL plus `pg` 8.23.0 locally (every pg probe verified against `dbprobe`). This domain assumes working single-client queries and spends its pages on sharing them correctly.

## 1. Drivers

### [1.1. pg Pool that serves](<./sections/1. Drivers/1.1. pg Pool that serves.md>)

1. **Pool amortizes handshakes** (persistent connections reused — per-query connects cost handshakes, pooled queries cost microseconds).
2. **Size from arithmetic, not default** (`max` derived from slots and server caps — measured, never defaulted).
3. **Drain on shutdown** (`pool.end()` empties cleanly — verified total 0; leaked pools hang exits and starve servers).

### [1.2. MongoClient topology without a server](<./sections/1. Drivers/1.2. MongoClient topology without a server.md>)

1. **Topology options declare intent** (`maxPoolSize`, timeouts, `retryWrites` — behavior versioned in code/URL, verified locally).
2. **Fail-fast and bounded waits** (server selection timeouts — never 30s defaults in scripts; verified failure shape).
3. **Single shared client per process** (one MongoClient, many operations — connection storms from client-per-request).

---

## 2. Discipline

### [2.1. Checkout discipline](<./sections/2. Discipline/2.1. Checkout discipline.md>)

1. **Acquire, transact, release** (pool.connect → BEGIN → work → COMMIT/ROLLBACK → release — verified live).
2. **Never share mid-transaction** (one checkout, one unit — concurrent use corrupts units structurally).
3. **Leak-checked by construction** (try/finally release — every path returns the connection, verified by counts).

### [2.2. Migrations basis](<./sections/2. Discipline/2.2. Migrations basis.md>)

1. **Schema changes are versioned files** (up/down pairs, ordered, reviewed — evolution with history, never ad-hoc ALTERs).
2. **Expand before contract** (additive first, removal later — deploys never stranding running code).
3. **Migrations prove before mutating** (handshake rite per run — wrong-database writes prevented structurally).

---

## 3. Resilience

### [3.1. Retries timeouts and backoff](<./sections/3. Resilience/3.1. Retries timeouts and backoff.md>)

1. **Timeout every hop** (statement timeouts, server-selection caps — unbounded waits cascade, bounded waits route).
2. **Retry idempotent work only** (keys make retries safe — [03/3.1](<../03 MongoDB Deep Dive/sections/3. Writes/3.1. Writes ids and idempotency.md>) — blind retries manufacture duplicates).
3. **Backoff with jitter and caps** (spacing grows, fleets de-pulse, ceilings terminate — retry storms never).

---

## 4. Important points to remember (access)

### [4.1. Access checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Access checklist habits mentors insist on.md>)

1. **Pool sized, drained, witnessed** (max derived, end() asserted, counts monitored — the pool healthy by numbers).
2. **Checkouts bound, migrations versioned** (units on one connection, schemas in files — discipline per concern).
3. **Resilience budgeted per hop** (timeouts set, retries keyed, backoff capped — overload designed, never discovered).

---

## 5. Interview questions and answers (access)

### [5.1. Common interview QA: data access](<./sections/5. Interview questions and answers/5.1. Common interview QA data access.md>)

1. **"Pool size 10 — why?" — price it** (slots math vs server caps — the sizing screen with numbers).
2. **"Mid-transaction pool release" — diagnose it** (poisoned borrower, aborted unit — the binding screen).
3. **"Migration locked prod" — prevent it** (expand/contract, concurrent indexes, proved runs — the evolution drill), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Foundations and depth** (handshakes/secrets → 01; joins/indexes/transactions → 02–03 — linked, never restated).
2. **Deeper data topics** (transactions theory → 05; performance/ops → 06 — each owned there).
3. **Design and mapping** (modeling → Database Design track; ORMs/ODMs → ORM track — planned siblings, textual forwards).
