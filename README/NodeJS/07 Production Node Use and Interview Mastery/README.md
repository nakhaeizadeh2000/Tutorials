# Production Node Use and Interview Mastery

The capstone: production judgment across all six domains (selecting architectures under constraints, planning capacity, degrading gracefully), reviewing and designing Node systems, tracing one request through every layer, and interview mastery. No new mechanics here — every leaf synthesizes receipts from Domains 01–06 into judgment, method, and narrative. Fluency assumed; wisdom taught.

## 0. Prerequisites

Domains [01](<../01 Runtime Fundamentals and Mental Model/README.md>)–[06](<../06 Debugging Configuring and Shipping/README.md>) (runtime, packaging, data path, conversations, parallelism, delivery — the vocabulary every leaf here speaks; this domain spends its pages on judgment and synthesis, not mechanics).

## 1. Production judgment

### [1.1. Selecting architectures under constraints](<./sections/1. Production judgment/1.1. Selecting architectures under constraints.md>)

1. **Constraints first, patterns second** (traffic shape, team size, SLOs — the inputs; cluster/workers/processes/frameworks — outputs of the tree, never defaults).
2. **Boring wins ties** (fewest moving parts meeting SLOs — novelty budgeted, not assumed; every component justified).
3. **Decisions recorded** (ADRs per crossroads — context, options, verdict, review date; judgment replayable).

### [1.2. Capacity and graceful degradation](<./sections/1. Production judgment/1.2. Capacity and graceful degradation.md>)

1. **Capacity from numbers** (per-request budgets × traffic — cores, memory, connections derived; headroom explicit).
2. **Degrade by layers** (shed load before quality — timeouts, caches, static fallbacks; graceful worse beats failed best).
3. **Limits everywhere, discovers nowhere** (caps, queues, budgets — every resource bounded; exhaustion designed, never surprised).

---

## 2. Review and design

### [2.1. Reviewing Node code](<./sections/2. Review and design/2.1. Reviewing Node code.md>)

1. **Gates before taste** (sync-in-handler, bare-pipe, uncapped, unguarded — mechanical findings first; style after).
2. **Ask for the numbers** (pool sizes, caps, timeouts — every constant justified; unpriced numbers challenged).
3. **Approve the failure paths** (errors routed, drains sequenced, rollouts asserted — happy paths necessary, insufficient).

### [2.2. API design for Node services](<./sections/2. Review and design/2.2. API design for Node services.md>)

1. **Contracts explicit** (statuses, shapes, errors — documented; versioning planned; breaking changes announced).
2. **Streaming where sized** (large payloads chunked — pagination, ranges, SSE; whole-body APIs capped by policy).
3. **Failures name remedies** (errors actionable — retryable flagged, limits quoted, runbooks linked).

---

## 3. Full-system synthesis

### [3.1. One request, every layer](<./sections/3. Full-system synthesis/3.1. One request every layer.md>)

1. **Trace cradle to grave** (DNS → accept → route → stream → compute → respond → log — each layer named with its domain).
2. **Budgets per layer** (time and bytes accounted — slowest layer optimized; totals reconciled).
3. **Narrate it cold** (whiteboard the trace — interviewers hire narrators; incidents obey narrators).

---

## 4. Important points to remember (mastery)

### [4.1. Mastery checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Mastery checklist habits mentors insist on.md>)

1. **Six domains, one engineer** (runtime, packaging, data, conversation, parallelism, delivery — fluent in all, expert in several).
2. **Receipts over opinions** (measured before claimed — profiles, benchmarks, counts; judgment priced).
3. **Teach to retain** (narrate systems cold — review juniors kindly; mastery demonstrated by transfer).

---

## 5. Interview questions and answers (mastery)

### [5.1. Common interview QA: judgment and synthesis](<./sections/5. Interview questions and answers/5.1. Common interview QA judgment synthesis.md>)

1. **Design a URL shortener, Node edition** (the systems screen — layers, stores, caps, rollouts, narrated).
2. **"Your service falls over at noon" — debug it live** (the incident screen — triage order, evidence, fix with receipt).
3. **Teach the event loop in five minutes** (the mentoring screen — boxes, phases, one demo), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this track stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Mechanics in 01–06** (every technique here references its owning domain — this domain judges and assembles, never re-teaches).
2. **Frameworks and platform** (Express/Fastify/NestJS structure → their tracks; runtimes, clouds, vendors → platform docs).
3. **Words and careers** (meeting vocabulary → IT Vocabulary; growth beyond Node → mentor paths elsewhere).
