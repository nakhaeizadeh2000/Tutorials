## 1. Observe

### [1.1. Observability with INFO and metrics](<./sections/1. Observe/1.1. Observability with INFO and metrics.md>)

1. **INFO sections instrument everything** (server/clients/memory/persistence/stats — gauges scraped, never guessed)
2. **Hit rates justify caches** (keyspace hits/misses — effectiveness numeric, unjustified caches retired)
3. **Saturation alerts pre-incident** (memory/clients/replication — thresholds paging, never hoping)

---

### [1.2. Slow log and latency diagnosis](<./sections/1. Observe/1.2. Slow log and latency diagnosis.md>)

1. **SLOWLOG records slow executions** (commands over threshold — culprits named with durations, never profiled blindly)
2. **Latency differs from slowness** (event-loop stalls vs slow commands — blocking vs executing, diagnosed separately, fixed differently)
3. **Diagnose with data, fix the command** (O(N) culprits replaced — SCAN paging, Lua bounding, never hoping)

---

## 2. Tune

### [2.1. Memory and encoding tuning](<./sections/2. Tune/2.1. Memory and encoding tuning.md>)

1. **Encodings stay compact deliberately** (listpack/intset thresholds — promotions priced, crossings watched)
2. **Thresholds match workloads** (hash-max-listpack-entries sized — small collections compact, large honest)
3. **Sample before sizing** (MEMORY USAGE auditing — capacity arithmetic, never fiction)

---

### [2.2. Timeouts and client management](<./sections/2. Tune/2.2. Timeouts and client management.md>)

1. **Idle connections reaped** (timeout closing — dead clients never accumulating, fds bounded)
2. **Keepalive detects death** (tcp-keepalive probing — half-open connections surfacing, never lingering)
3. **Clients audited and culled** (CLIENT LIST inspecting — runaways KILLed surgically, never blindly)

---

## 3. Runbooks

### [3.1. Production runbooks](<./sections/3. Runbooks/3.1. Production runbooks.md>)

1. **Restart without loss** (drain, snapshot, verify — procedures ordered, never improvised)
2. **Failover without panic** (promote, redirect, verify — succession rehearsed, never hoped)
3. **OOM without guessing** (evict, scale, shard — pressure relieved structurally, never hopefully)

---

## 4. Mentor checklist

### [4.1. Operations checklist mentors insist on](<./sections/4. Mentor checklist/4.1. Operations checklist mentors insist on.md>)

1. **Every instance is observable** (INFO scraped — blind production returned)
2. **Every instance is bounded** (memory/timeouts/maxclients — unbounded operation scheduled never)
3. **Every failure has a runbook** (procedures written — improvisation priced, never planned)

---

## 5. Interview QA

### [5.1. Common interview QA operations](<./sections/5. Interview QA/5.1. Common interview QA operations.md>)

1. **Observability live** (INFO sections, hit rates, saturation — measured answers, not vibes)
2. **Slowness diagnosed live** (SLOWLOG, latency, O(N) — culprits named with fixes, priced)
3. **Runbooks live** (restart, failover, OOM — procedures stated, never hoped)

---

## 6. Boundaries

### [6.1. Boundaries what is covered elsewhere](<./sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md>)

1. **Durability lives in Domain 04** (RDB/AOF/replication — operations assuming, never re-teaching)
2. **Scale lives in Domain 05** (slots, resharding — runbooks coordinating, never redesigning)
3. **Synthesis lives in Domain 07** (interview mastery — checklists composing, never repeating)

---

[← Back to Redis track](<../README.md>)
