## 1. On-disk persistence

### [1.1. RDB snapshots](<./sections/1. On-disk persistence/1.1. RDB snapshots.md>)

1. **Forks snapshot compactly** (BGSAVE copy-on-write — point-in-time dumps without stopping writes)
2. **Save points schedule dumps** (minute/hourly thresholds — snapshots automatic, never remembered)
3. **Restores load whole datasets** (restarts loading latest dump — minutes-old state, loss bounded by schedule)

---

### [1.2. AOF logs and fsync policies](<./sections/1. On-disk persistence/1.2. AOF logs and fsync policies.md>)

1. **Logs record every write** (append-only commands — replays rebuilding exact state, history complete)
2. **Fsync prices durability** (always/everysec/no — loss windows of zero/one-second/unbounded, priced per policy)
3. **Rewrites compact logs** (BGREWRITEAOF — minimal command sets, growth bounded without blocking)

---

## 2. Copies

### [2.1. Replication async and replicas](<./sections/2. Copies/2.1. Replication async and replicas.md>)

1. **Async by design** (primaries answering before replicas — latency minimal, lag structural)
2. **Resyncs reattach cheaply** (partial PSYNC2 — brief disconnects replaying backlog, full syncs rare)
3. **Reads scale, writes don't** (replicas serving reads — write throughput single-primary, topology honest)

---

### [2.2. Sentinel failover](<./sections/2. Copies/2.2. Sentinel failover.md>)

1. **Quorum detects objectively** (sdown subjective, odown agreed — failovers decided, never guessed)
2. **Failover promotes replicas** (elected leader reconfiguring — writes resuming on new primary in seconds)
3. **Clients follow via Sentinel** (topology discovery — hardcoded primaries failing over never)

---

## 3. Crash truth

### [3.1. Crash semantics and durability windows](<./sections/3. Crash truth/3.1. Crash semantics and durability windows.md>)

1. **Every layer states its window** (RDB schedule, AOF fsync, async lag — loss bounded numerically, never hoped)
2. **Windows compose additively** (cache + queue + replica lags summing — total loss priced end-to-end)
3. **Rehearse crashes before customers do** (kill -9 drills, failover tests — durability demonstrated, never assumed)

---

## 4. Mentor checklist

### [4.1. Durability checklist mentors insist on](<./sections/4. Mentor checklist/4.1. Durability checklist mentors insist on.md>)

1. **Every instance persists deliberately** (RDB or AOF configured — unpersisted production returned)
2. **Every primary has replicas-or-backups** (copies existing — single-node data loss scheduled never)
3. **Every window is stated and tested** (loss bounded numerically — crash drills demonstrating, never hoping)

---

## 5. Interview QA

### [5.1. Common interview QA durability](<./sections/5. Interview QA/5.1. Common interview QA durability.md>)

1. **RDB vs AOF placed** (snapshots vs logs — recovery needs deciding, not fashion)
2. **Replication and failover live** (async lag, split-brain, quorum — diagnosed with fixes, priced)
3. **Crash windows live** (loss bounded per layer — honesty under pressure, not hope)

---

## 6. Boundaries

### [6.1. Boundaries what is covered elsewhere](<./sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md>)

1. **Structures and patterns live in Domains 01–03** (shapes, caching, messaging — durability applying to them)
2. **Scale topology lives in Domain 05** (partitioning, cluster slots — neighbors, not repeats)
3. **Backups theory lives in Databases** (relational backup discipline — linked, not repeated)

---

[← Back to Redis track](<../README.md>)
