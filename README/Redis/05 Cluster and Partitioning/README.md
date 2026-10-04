## 1. Slots

### [1.1. Hash slots and key distribution](<./sections/1. Slots/1.1. Hash slots and key distribution.md>)

1. **16384 slots partition keys** (CRC16 hashed — distribution uniform, masters owning ranges)
2. **Masters own disjoint ranges** (shards holding subsets — writes scaling with shard count, reads following)
3. **Replicas guard per shard** (failover per shard — Sentinel concepts transferring, election cluster-native)

---

### [1.2. Hash tags for colocation](<./sections/1. Slots/1.2. Hash tags for colocation.md>)

1. **Braces pin shared slots** (`{user:7}.cart` hashing `user:7` — related keys colocating structurally)
2. **Colocation enables multi-key** (same-slot operations legal — Lua/MULTI spanning colocated keys)
3. **Hot tags unbalance** (colocation concentrating — hotspot tags splitting, never hoping)

---

## 2. Cluster operations

### [2.1. Multi-key operations in clusters](<./sections/2. Cluster operations/2.1. Multi-key operations in clusters.md>)

1. **Same-slot or CROSSSLOT** (scattered keys rejected — operations declaring their span explicitly)
2. **Lua follows keys** (scripts atomic per slot — cross-slot scripts failing fast, never partially)
3. **Design colocated access** (tags grouping transactions — spans planned, never discovered)

---

### [2.2. Resharding and rebalancing](<./sections/2. Cluster operations/2.2. Resharding and rebalancing.md>)

1. **Slots migrate online** (SETSLOT MIGRATING/IMPORTING — keys moving per slot, clients served throughout)
2. **ASK redirects mid-migration** (temporary forwarding — clients retrying, never failing)
3. **Balance deliberately** (slots counted per shard — skew measured, migrations scheduled)

---

## 3. Clients

### [3.1. Client routing and MOVED ASK](<./sections/3. Clients/3.1. Client routing and MOVED ASK.md>)

1. **MOVED redirects permanently** (slot ownership cached — clients refreshing maps, never hardcoding)
2. **ASK retries transiently** (migrations forwarding — single retry, then proceeding)
3. **Cluster-aware clients required** (topology following built-in — naive clients CROSSSLOTing blindly)

---

## 4. Mentor checklist

### [4.1. Partitioning checklist mentors insist on](<./sections/4. Mentor checklist/4.1. Partitioning checklist mentors insist on.md>)

1. **Every deployment counts slots** (16384 mapped — ownership visible, skew measured)
2. **Every multi-key fits one slot** (tags colocating — CROSSSLOT failing review structurally)
3. **Every client follows redirects** (MOVED/ASK handled — hardcoded topologies returned)

---

## 5. Interview QA

### [5.1. Common interview QA partitioning](<./sections/5. Interview QA/5.1. Common interview QA partitioning.md>)

1. **Slots and tags placed** (distribution vs colocation — judgment, not fashion)
2. **Resharding live** (migrations, ASK, balance — diagnosed with fixes, priced)
3. **Clients and redirections live** (MOVED/ASK handling — robustness stated, not hoped)

---

## 6. Boundaries

### [6.1. Boundaries what is covered elsewhere](<./sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md>)

1. **Replication lives in Domain 04** (copies, Sentinel, windows — per-shard foundations)
2. **Messaging lives in Domain 03** (sharded pub/sub landing here — SSUBSCRIBE owned, theory linked)
3. **Operations live in Domain 06** (observability, tuning — neighbors, not repeats)

---

[← Back to Redis track](<../README.md>)
