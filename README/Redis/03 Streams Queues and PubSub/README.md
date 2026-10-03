## 1. Streams

### [1.1. Streams as append-only logs](<./sections/1. Streams/1.1. Streams as append-only logs.md>)

1. **XADD appends, IDs order** (auto `*` IDs time-ordered — entries immutable, history replayable)
2. **Reads slice without consuming** (XRANGE/XREVRANGE/XREAD — cursors client-side, streams never drained by reading)
3. **Trim to bound memory** (XTRIM MAXLEN/MINID — retention enforced, unbounded growth capped)

---

### [1.2. Lists as simple queues vs streams](<./sections/1. Streams/1.2. Lists as simple queues vs streams.md>)

1. **Lists coordinate simply** (LPUSH producers + BRPOP consumers — blocking pops idling efficiently)
2. **Streams add durability** (history + acknowledgment + groups — at-most-once upgraded to at-least-once)
3. **Choose by recovery needs** (simple/ephemeral → lists; acknowledged/replayable → streams — priced per workload)

---

## 2. Reliable consumption

### [2.1. Consumer groups](<./sections/2. Reliable consumption/2.1. Consumer groups.md>)

1. **Groups partition deliveries** (XREADGROUP per consumer — each entry to exactly one member, PEL tracking)
2. **ACK completes explicitly** (XACK per processed ID — unacked entries visible in XPENDING, never silently lost)
3. **Claim the stalled** (XCLAIM/XAUTOCLAIM on idle — crashed consumers' entries reassigned, liveness preserved)

---

### [2.2. Delivery semantics and idempotency](<./sections/2. Reliable consumption/2.2. Delivery semantics and idempotency.md>)

1. **At-least-once is the contract** (redelivery possible — PEL replays after crashes, duplicates priced in)
2. **Idempotent consumers absorb duplicates** (dedupe keys + SET NX guards — applied-twice impossible structurally)
3. **Fence the unorderable** (monotonic tokens per producer — stale writes rejected, ordering without distributed locks)

---

## 3. Broadcast

### [3.1. PubSub fire-and-forget](<./sections/3. Broadcast/3.1. PubSub fire-and-forget.md>)

1. **Publish reaches the connected** (PUBLISH/SUBSCRIBE — no history, offline subscribers missing messages by design)
2. **Patterns fan out** (PSUBSCRIBE glob channels — one subscription covering keyspaces, priced per match)
3. **Streams persist what PubSub drops** (durable broadcast → streams; ephemeral signals → PubSub — chosen per loss tolerance)

---

## 4. Mentor checklist

### [4.1. Messaging checklist mentors insist on](<./sections/4. Mentor checklist/4.1. Messaging checklist mentors insist on.md>)

1. **Every stream is trimmed** (MAXLEN/MINID retention — unbounded growth scheduled never)
2. **Every consumer acknowledges** (XACK per processed ID — PEL monitored, stalled entries claimed)
3. **Every handler is idempotent-or-fenced** (duplicates absorbed — redelivery safe by construction, never by hope)

---

## 5. Interview QA

### [5.1. Common interview QA messaging](<./sections/5. Interview QA/5.1. Common interview QA messaging.md>)

1. **Lists vs streams placed** (simple queues vs durable consumption — judgment, not fashion)
2. **Groups and PEL live** (partitioning, acking, claiming — diagnosed with fixes, priced)
3. **PubSub vs streams live** (ephemeral broadcast vs durable log — loss tolerance stated, not hoped)

---

## 6. Boundaries

### [6.1. Boundaries what is covered elsewhere](<./sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md>)

1. **Structures live in Domain 01** (lists/sets/sorted sets — the shapes messaging coordinates)
2. **Patterns live in Domain 02** (Lua atomicity, locks, write-back handoffs — neighbors, not repeats)
3. **Events theory lives in DesignPatterns** (pub-sub/event-sourcing patterns — linked, not repeated)

---

[← Back to Redis track](<../README.md>)
