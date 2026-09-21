# Debugging, Configuring, and Shipping

How Node services are observed, configured, and delivered: debugging servers and workers (`--inspect` in production shapes), profiling CPU and memory with action attached, environment-driven config with validation, structured logging, and shipping (containers, healthchecks, graceful deploys). Tooling mechanics live in [JavaScript 15](<../../JavaScript/15 Error Handling and Debugging/README.md>); this domain teaches the *service* — debugging and delivering running backends, not stepping through syntax.

## 0. Prerequisites

[Domain 01: Runtime Fundamentals and Mental Model](<../01 Runtime Fundamentals and Mental Model/README.md>) (process lifecycle, exit codes, versions — assumed; this domain spends its pages on observability, config, and delivery, not runtime theory).

## 1. Debugging and profiling

### [1.1. Inspecting servers and workers](<./sections/1. Debugging and profiling/1.1. Inspecting servers and workers.md>)

1. **Inspect without stopping the world** (`--inspect` + DevTools — breakpoints on live servers; `SIGUSR1` enabling post-hoc; workers each inspectable).
2. **Diagnose with built-in reporters** (`--report` on crash — heap, handles, env in one JSON; `process.report` triggered programmatically).
3. **Debug through the layers** (reproduce on bare metal first — Domain 01's layer rule; logs before debugger — cheap evidence first).

### [1.2. CPU and memory profiles with action](<./sections/1. Debugging and profiling/1.2. CPU and memory profiles with action.md>)

1. **Profile CPU, then deoptimize the hot** (`--cpu-prof` — flame-first; V8 deopts named; fix the shape, not the symptom).
2. **Snapshot heaps, diff the growth** (`--heap-prof`, snapshots compared — retained paths named; leak class identified).
3. **Every profile ends in a change** (no profile without a hypothesis — action recorded; re-profile proving the fix).

---

## 2. Configuring and logging

### [2.1. Env config validated at boot](<./sections/2. Configuring and logging/2.1. Env config validated at boot.md>)

1. **Twelve-factor config, Node-shaped** (env owns values — code owns shapes; `.env` local-only, never committed).
2. **Validate once, crash early** (schema at boot — missing/invalid fails in line 10 with a named error, never line 10,000).
3. **Secrets never in code or logs** (managers/ mounts — redaction at the logger; leaked secrets rotated, not regretted).

### [2.2. Structured logging that pays](<./sections/2. Configuring and logging/2.2. Structured logging that pays.md>)

1. **JSON lines with context** (levels, request ids, timestamps — grep-able, joinable; `console` for dev, structured for prod).
2. **Log at boundaries, not in loops** (request in/out, error with cause, deployment markers — signal over noise).
3. **Drain on shutdown** (async transports flushed — leaf 2.1 of Domain 01's lifecycle; lost tail logs on deploy otherwise).

---

## 3. Shipping

### [3.1. Containers, healthchecks, graceful deploys](<./sections/3. Shipping/3.1. Containers healthchecks graceful deploys.md>)

1. **Images layered by change rate** (deps cached, source last — rebuilds seconds; lockfile in the image — frozen trees shipped).
2. **Healthchecks gate traffic** (liveness vs readiness — started ≠ ready; failing checks shed load, not just log).
3. **Deploys drain, never drop** (SIGTERM → stop accepting → finish in-flight → exit — orchestrators grant seconds, use them).

---

## 4. Important points to remember (delivery)

### [4.1. Delivery checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Delivery checklist habits mentors insist on.md>)

1. **Observable by default** (inspectable, profiled, logged with context — evidence before incidents).
2. **Configured explicitly** (validated at boot — secrets managed; environments differ by values, never by code).
3. **Shipped gracefully** (layered images, healthchecked, draining deploys — delivery as a discipline).

---

## 5. Interview questions and answers (delivery)

### [5.1. Common interview QA: debugging, config, shipping](<./sections/5. Interview questions and answers/5.1. Common interview QA debugging config shipping.md>)

1. **"Production is slow" — walk me through it** (the triage screen — metrics, profiles, layers, in order).
2. **Memory climbs weekly: find it** (the leak trace — snapshots diffed, retainers named, fix verified).
3. **Deploy without dropping requests** (the rollout trace — healthchecks, drains, SIGTERM discipline), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Tooling mechanics** (debugger stepping, heap/GC internals → JavaScript 15/18 — this domain assumes the tools, teaches service use).
2. **Runtime and packaging** (loop/phases → 01; manifests/locks → 02 — delivery assumes both, teaches neither).
3. **Synthesis capstone** (production judgment across all domains → 07 — this domain delivers the pieces, 07 assembles them).
