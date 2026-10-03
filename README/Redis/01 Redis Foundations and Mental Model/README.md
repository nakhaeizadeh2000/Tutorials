## 1. What Redis is

### [1.1. What Redis is and is not](<./sections/1. What Redis is/1.1. What Redis is and is not.md>)

1. **RAM with structures** (in-memory data-structure server — speed from memory, shapes from types)
2. **What it buys** (sub-millisecond reads, purpose-built structures, atomic operations — each priced)
3. **What it costs** (memory prices, volatility discipline, single-threaded command model — each named)

---

### [1.2. Strings keys and expiry](<./sections/1. What Redis is/1.2. Strings keys and expiry.md>)

1. **Strings are the atoms** (GET/SET with NX/XX/EX — conditional writes, bounded lifetimes)
2. **Keys are namespaced contracts** (colons segment domains — keyspace navigable, collisions impossible by convention)
3. **Expiry is a first-class citizen** (TTL on everything transient — memory reclaimed structurally, never hoped)

---

## 2. Core structures

### [2.1. Core structures hash list set zset](<./sections/2. Core structures/2.1. Core structures hash list set zset.md>)

1. **Hashes are objects** (HSET/HGETALL — field-level access without serializing whole documents)
2. **Lists and sets order and deduplicate** (LPUSH/RPUSH queues, SADD/SISMEMBER membership — each shape honest)
3. **Sorted sets rank** (ZADD/ZRANGE with scores — leaderboards, timelines, priority queues natively)

---

### [2.2. Choosing structures by access](<./sections/2. Core structures/2.2. Choosing structures by access.md>)

1. **Access decides shape** (read/write/query patterns mapped — structure following workload, never fashion)
2. **Memory math per structure** (overhead per key, per element, per encoding — priced before scaling)
3. **Wrong-structure symptoms** (serialization soup, key explosions, scan storms — each diagnosed with its fix)

---

## 3. First caching

### [3.1. Hello caching with cache-aside](<./sections/3. First caching/3.1. Hello caching with cache-aside.md>)

1. **Cache-aside flow** (read cache, miss loads DB, write back with TTL — the dominant pattern performed)
2. **Invalidation named upfront** (write-through vs invalidate vs TTL-only — staleness priced per choice)
3. **Cold starts priced** (thundering herds on empty caches — warming and request coalescing designed)

---

## 4. Mentor checklist

### [4.1. Redis checklist mentors insist on](<./sections/4. Mentor checklist/4.1. Redis checklist mentors insist on.md>)

1. **Every key earns its namespace and TTL** (no bare keys, no immortal transients — stated per write)
2. **Every structure matches its access** (shapes justified per workload — fashion declined structurally)
3. **Every cache has an invalidation story** (staleness priced, cold starts planned — hope scheduled never)

---

## 5. Interview QA

### [5.1. Common interview QA Redis foundations](<./sections/5. Interview QA/5.1. Common interview QA Redis foundations.md>)

1. **Strings versus hashes under pressure** (the trade-off answer — access-priced, not dogmatic)
2. **Expiry and eviction live** (TTL vs maxmemory policies — the memory-safety answers)
3. **Design a cache live** (keys, structures, invalidation — narrated out loud, priced throughout)

---

## 6. Boundaries

### [6.1. Boundaries what is covered elsewhere](<./sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md>)

1. **Mechanics live in Databases** (drivers, pooling — linked, not repeated)
2. **Design lives in Database Design** (entities, aggregates — the shapes caches mirror)
3. **Code mapping lives outside this track** (clients and repositories consume caches — they do not define them)

---

[← Back to Redis track](<../README.md>)
