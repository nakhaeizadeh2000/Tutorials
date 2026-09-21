# Child Processes, Workers, and Clustering

How Node uses more than one thread and more than one process: child processes for isolation and delegation (`spawn`/`exec`/`fork`), worker threads for parallel JS (messaging, transfer, shared memory), and `cluster` for multi-core servers. The single-threaded loop they relieve lives in [Domain 01](<../01 Runtime Fundamentals and Mental Model/README.md>); this domain teaches the *escape hatches* — when the loop isn't enough, and which parallelism fits.

## 0. Prerequisites

[Domain 01: Runtime Fundamentals and Mental Model](<../01 Runtime Fundamentals and Mental Model/README.md>) (three-box model, pool-vs-loop diagnosis — assumed; this domain spends its pages on processes, threads, and cores, not loop theory).

## 1. Child processes

### [1.1. spawn, exec, and execFile compared](<./sections/1. Child processes/1.1. spawn exec and execFile compared.md>)

1. **Three spawns, three shapes** (`spawn` streams — large outputs, backpressure; `exec` buffers — small conveniences with a size cap; `execFile` without a shell — injection-safe binaries).
2. **Shells are opt-in risk** (`shell: true` convenience vs injection — arguments joined by attackers; `execFile` + argv the safe shape).
3. **Lifecycle owned end to end** (exit codes collected, `error` on spawn failure, timeouts killing strays — no orphaned children).

### [1.2. fork and IPC channels](<./sections/1. Child processes/1.2. fork and IPC channels.md>)

1. **fork is Node-to-Node** (module + channel — `send`/`message` JSON-structured; subprocesses running the same runtime).
2. **Channels carry protocol, not dumps** (message shapes versioned — `{ type, payload }` envelopes; validation at receipt).
3. **Death supervised, restarts bounded** (exit → classify → bounded respawn — crash loops detected, not fed).

---

## 2. Worker threads

### [2.1. Messaging and transfer](<./sections/2. Worker threads/2.1. Messaging and transfer.md>)

1. **Workers run JS in parallel** (separate isolates, one process — true CPU parallelism; `postMessage`/`onmessage` ports).
2. **Transfer beats copy** (transferList moves buffers — zero-copy handoff; structured clone otherwise — priced per message).
3. **Pools size the parallelism** (worker pools bounded by cores — queues feed, results return; unbounded workers thrash).

### [2.2. Shared memory done carefully](<./sections/2. Worker threads/2.2. Shared memory done carefully.md>)

1. **SharedArrayBuffer shares, Atomics synchronize** (racy by default — `Atomics.add/wait/notify` the discipline; data races real here).
2. **Share little, message mostly** (shared counters/flags — bulk data transferred; shared-everything is shared-bugs).
3. **Measure before sharing** (clone costs vs sync complexity — profile the message path first; sharing earns its danger).

---

## 3. Multi-core servers

### [3.1. cluster for multi-core servers](<./sections/3. Multi-core servers/3.1. cluster for multi-core servers.md>)

1. **One port, N workers** (primary accepts, workers share — OS distributes; deaths reforked, zero-downtime rolling).
2. **Sticky state avoided** (workers stateless — sessions externalized; in-memory stickiness breaks on refork).
3. **Cluster vs workers vs processes chosen** (I/O fan-out → cluster; CPU tasks → worker pool; isolation → processes — the decision tree).

---

## 4. Important points to remember (parallelism)

### [4.1. Parallelism checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Parallelism checklist habits mentors insist on.md>)

1. **Isolate by default, share by exception** (processes for boundaries — threads for speed — shared memory last).
2. **Supervise every child** (exit codes, restarts bounded, orphans reaped — no unsupervised parallelism).
3. **Measure the contention** (cores counted, pools sized, races tested — parallelism evidenced, not hoped).

---

## 5. Interview questions and answers (parallelism)

### [5.1. Common interview QA: processes, workers, cluster](<./sections/5. Interview questions and answers/5.1. Common interview QA processes workers cluster.md>)

1. **"CPU-bound task in Node?" — route it** (the offload screen — loop, pool, worker, or process, priced per shape).
2. **Worker vs child process: which and why?** (the isolation judgment — memory model, startup cost, failure blast radius).
3. **Cluster with sessions: design it** (the state trace — externalized sessions, rolling restarts, refork safety), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Loop and pool execution** (three-box model, phases, pool sizing → 01 — this domain assumes the diagnosis, teaches the remedies).
2. **Streams and messaging patterns** (pipeline, backpressure → 03; design patterns → Design Patterns track — channels assumed streamed here).
3. **Debugging and production** (inspect workers, ship clustered → 06; synthesis → 07 — each owned there).
