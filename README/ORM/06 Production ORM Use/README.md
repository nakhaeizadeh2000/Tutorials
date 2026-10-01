## 1. Connections and transactions

### [1.1. Pool sizing per tool](<./sections/1. Connections and transactions/1.1. Pool sizing per tool.md>)

1. **Pools bound concurrency** (max connections per service — sized from workload, never defaulted)
2. **Per-tool configuration** (Prisma connection_limit, TypeORM pool options, Drizzle pg passthrough)
3. **Exhaustion designed out** (queueing, timeouts, backpressure — degraded gracefully, never hung)

---

### [1.2. Transaction discipline at scale](<./sections/1. Connections and transactions/1.2. Transaction discipline at scale.md>)

1. **Scope transactions minimally** (shortest unit covering the invariant — locks held briefly, never conversationally)
2. **Isolation chosen deliberately** (read committed default, repeatable-read/snapshot where anomalies threaten)
3. **Timeouts bound everything** (statement + transaction + lock timeouts — runaway work killed structurally)

---

## 2. Operating mappers

### [2.1. Production observability per mapper](<./sections/2. Operating mappers/2.1. Production observability per mapper.md>)

1. **Log sampled, alert thresholded** (query events sampled in production — slow statements paging, not all statements)
2. **Gauges per handoff** (pool depth, relay lag, queue age — dashboarded from birth, owned per team)
3. **Magic re-audited per deploy** (defaults checked post-upgrade — behavior changes caught before customers)

---

### [2.2. Upgrade operations without drama](<./sections/2. Operating mappers/2.2. Upgrade operations without drama.md>)

1. **Rehearse majors on staging** (breaking changes inventoried pre-adoption — upgrades practiced, never hoped)
2. **Canary tool upgrades** (one service first — blast radius bounded — rollback rehearsed alongside)
3. **Ledger re-priced per major** (cost lines updated — strategies re-audited, magic re-inventoried)

---

## 3. Slow-query response

### [3.1. Slow-query response playbook](<./sections/3. Slow-query response/3.1. Slow-query response playbook.md>)

1. **Triage by layer** (statement counts first — N+1 vs planner vs contention — measured, never guessed)
2. **Fix at the owning layer** (strategy, shape, or index — causes removed where decided, not where observed)
3. **Prevent by assertion** (regression tests on counts and plans — fixed stays fixed structurally)

---

## 4. Mentor checklist

### [4.1. Production checklist mentors insist on](<./sections/4. Mentor checklist/4.1. Production checklist mentors insist on.md>)

1. **Pools sized and monitored** (max set per workload — exhaustion alerted, never discovered)
2. **Transactions bounded and chosen** (scopes minimal, isolation deliberate, timeouts enforced)
3. **Upgrades rehearsed and ledgers current** (majors practiced, magic inventoried, costs re-priced)

---

## 5. Interview QA

### [5.1. Common interview QA production ORM](<./sections/5. Interview QA/5.1. Common interview QA production ORM.md>)

1. **Pool exhaustion live** (diagnose and fix under questioning — evidence over adjectives)
2. **N+1 in production** (triage shape — counts, strategies, prevention — the three-beat answer)
3. **Upgrade a major safely** (rehearse, canary, roll back — operations answers, not version notes)

---

## 6. Boundaries

### [6.1. Boundaries what is covered elsewhere](<./sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md>)

1. **Tools live in Domains 02–04** (Prisma/TypeORM/Drizzle mechanics — operated here, homed there)
2. **Selection lives in Domain 05** (verdicts with triggers — operated on evidence, decided earlier)
3. **Mechanics live in Databases** (pooling internals, EXPLAIN, transactions — linked, not repeated)

---

[← Back to ORM track](<../README.md>)
