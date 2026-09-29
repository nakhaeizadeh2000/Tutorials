## 1. History and deletion

### [1.1. Audit trails that answer questions](<./sections/1. History and deletion/1.1. Audit trails that answer questions.md>)

1. **History tables mirror entities** (who changed what when — row-versioned copies, append-only by design)
2. **Effective dating for state over time** (valid-from/valid-to ranges — point-in-time queries without reconstruction)
3. **Audit for questions, not compliance theater** (which questions must be answerable — design from the query list)

---

### [1.2. Soft deletes done deliberately](<./sections/1. History and deletion/1.2. Soft deletes done deliberately.md>)

1. **deleted_at is a lifecycle state** (visible, filterable, reversible — with a purge path, not a hope)
2. **Uniqueness survives soft deletion** (partial unique indexes — the constraint that outlives the row)
3. **Soft-delete is not archival** (operational undo vs lifecycle tier — different tools, different owners)

---

## 2. Coordination out of the database

### [2.1. Outbox tables designed for relay](<./sections/2. Coordination out of the database/2.1. Outbox tables designed for relay.md>)

1. **The pattern lives in Databases 05** (atomic record, relay, idempotent consume — linked, not repeated)
2. **Design the relay surface** (ordered cursors, payload contracts, relayed-at marking — the table relays serve)
3. **Purge relayed rows routinely** (at-least-once delivery needs at-most-once storage — retention on the outbox itself)

---

### [2.2. Job tables and queues in the database](<./sections/2. Coordination out of the database/2.2. Job tables and queues in the database.md>)

1. **Claim-work with SKIP LOCKED** (concurrent workers without coordination — the queue in a table)
2. **State machines, not status strings** (pending → claimed → done/failed — transitions constrained, retries counted)
3. **Know when to leave the database** (rate, fan-out, and ordering limits — graduate to brokers deliberately)

---

## 3. Runtime configuration

### [3.1. Feature flags and config storage](<./sections/3. Runtime configuration/3.1. Feature flags and config storage.md>)

1. **Flags are rows, not branches** (name, state, targeting rules — deploys stop gating releases)
2. **Targeting rules stay queryable** (percentage, cohorts, kill switches — evaluation without deploys)
3. **Flag lifecycle is managed** (stale flags retire — flags without owners become permanent branches)

---

## 4. Mentor checklist

### [4.1. Operations-modeling checklist mentors insist on](<./sections/4. Mentor checklist/4.1. Operations-modeling checklist mentors insist on.md>)

1. **Every destructive path is reversible** (soft windows, audit coverage, purge certificates — undo designed in)
2. **Every async handoff is observable** (outbox lag, queue depth, relay health — queues with gauges, not hopes)
3. **Every runtime switch is owned** (flags with owners and expiry — switches, not sediment)

---

## 5. Interview QA

### [5.1. Common interview QA operations modeling](<./sections/5. Interview QA/5.1. Common interview QA operations modeling.md>)

1. **Design reliable notifications live** (outbox narration — table, relay, idempotency, purge)
2. **Background work without a broker** (job-table design under questioning — claim, retry, graduate)
3. **Audit and deletion under pressure** (history vs soft-delete vs purge — the judgment call)

---

## 6. Boundaries

### [6.1. Boundaries what is covered elsewhere](<./sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md>)

1. **Transaction mechanics live in Databases 05** (atomicity, outbox pattern, sagas — linked, not repeated)
2. **Backup and monitoring live in Databases 06–07** (restore mechanics, alerting — neighbors, not repeats)
3. **Application patterns live in DesignPatterns 06** (repository seam, pub-sub consumption — outside this track)

---

[← Back to Database Design track](<../README.md>)
