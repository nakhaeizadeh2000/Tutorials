## 1. Write patterns

### [1.1. Cache-aside write-through write-back](<./sections/1. Write patterns/1.1. Cache-aside write-through write-back.md>)

1. **Three writes, three staleness contracts** (aside/TTL-bounded, through/zero, back/async — priced per datum)
2. **Write-through couples availability** (reads always fresh — writes failing cache-down, priced explicitly)
3. **Write-back buys speed with risk** (async persistence — durability windows stated, never hoped)

---

### [1.2. Stampede prevention](<./sections/1. Write patterns/1.2. Stampede prevention.md>)

1. **Jitter desynchronizes expiry** (randomized TTL ±10% — herds dispersed structurally)
2. **Coalescing shares misses** (single-flight loads — duplicate DB hits suppressed)
3. **Locks serialize rebuilds** (SET NX mutex per key — one rebuilder, rest waiting with timeout)

---

## 2. Atomic multi-step

### [2.1. Lua scripting for atomic multi-step](<./sections/2. Atomic multi-step/2.1. Lua scripting for atomic multi-step.md>)

1. **Scripts execute atomically** (EVAL runs to completion — no interleaving, check-and-set safe)
2. **Keep scripts small and fast** (O(1)-ish logic — long scripts blocking the event loop, priced)
3. **Cache scripts with EVALSHA** (SHA-addressed execution — bandwidth saved, NOSCRIPT fallback handled)

---

### [2.2. Transactions MULTI EXEC WATCH](<./sections/2. Atomic multi-step/2.2. Transactions MULTI EXEC WATCH.md>)

1. **MULTI queues, EXEC runs** (optimistic batching — commands queued, executed atomically-ish)
2. **WATCH aborts on change** (check-and-set across keys — concurrent modification retrying, not clobbering)
3. **Transactions are not rollbacks** (partial EXEC failures persist — errors isolated per command, designed)

---

## 3. Memory governance

### [3.1. Eviction policies and memory safety](<./sections/3. Memory governance/3.1. Eviction policies and memory safety.md>)

1. **maxmemory bounds datasets** (limits set per instance — OOM killer never the eviction policy)
2. **Policies match workloads** (volatile-lru/ttl for caches, allkeys-lru for sessions, noeviction never by default)
3. **Monitor before evicting** (used_memory gauges, hit rates, evicted_keys — saturation visible pre-incident)

---

## 4. Mentor checklist

### [4.1. Caching checklist mentors insist on](<./sections/4. Mentor checklist/4.1. Caching checklist mentors insist on.md>)

1. **Every pattern names its staleness** (aside/TTL, through/zero, back/window — priced per datum, never hoped)
2. **Every hot path coalesces** (stampede protection designed — jitter, single-flight, or locks stated)
3. **Every multi-step is atomic-or-explicit** (Lua/transactions where races threaten — hope scheduled never)

---

## 5. Interview QA

### [5.1. Common interview QA caching patterns](<./sections/5. Interview QA/5.1. Common interview QA caching patterns.md>)

1. **Cache strategies under pressure** (aside/through/back placed by workload — judgment, not fashion)
2. **Stampedes and races live** (thundering herds, check-and-set — diagnosed with fixes, priced)
3. **Eviction and Lua live** (policies chosen, scripts bounded — operations answers, not trivia)

---

## 6. Boundaries

### [6.1. Boundaries what is covered elsewhere](<./sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md>)

1. **Foundations live in Domain 01** (structures, expiry, namespaces — the judgments patterns apply)
2. **Streams and persistence live in Domains 03–05** (messaging/durability/scale — neighbors, not repeats)
3. **Mechanics live in Databases** (drivers, pooling — linked, not repeated)

---

[← Back to Redis track](<../README.md>)
