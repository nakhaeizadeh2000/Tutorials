## 1. Tests

### [1.1. Handler tests via inject](<./sections/1. Tests/1.1. Handler tests via inject.md>)

1. **Inject drives apps** (built-in light-my-request — no supertest, ports unbinding)
2. **Suites parallelize safely** (sockets skipping — collisions ending, CI stabilizing)
3. **Assertions cover contracts** (status/body checking — regressions catching, never hoping)

---

### [1.2. Service tests with fakes](<./sections/1. Tests/1.2. Service tests with fakes.md>)

1. **Fakes replace stores** (Maps standing in — databases skipping, tests speeding)
2. **node:test runs stdlib** (asserting natively — deps declining, suites executing live)
3. **Inject composes services** (routes proving — fakes honoring, drift detecting)

---

## 2. Delivery

### [2.1. Config gating at deploy](<./sections/2. Delivery/2.1. Config gating at deploy.md>)

1. **Schemas gate boot** (env proving — crashes earlying, deploys blocking)
2. **Gates run in pipelines** (CI asserting — bad config merging never, rollouts guarding)
3. **Frozen config ships** (values locking — drift ending, surprises expiring)

---

### [2.2. Graceful shutdown and probes](<./sections/2. Delivery/2.2. Graceful shutdown and probes.md>)

1. **Closes drain connections** (fastify.close owning — in-flight landing, data preserving)
2. **Probes split verdicts** (live cheaping — ready deeping, traffic gating)
3. **Containers own orchestration** (SIGTERM sequencing — linked, not repeated)

---

## 3. Readiness

### [3.1. Production checklists](<./sections/3. Readiness/3.1. Production checklists.md>)

1. **Checklists gate releases** (tests proving — config gating — probes answering)
2. **Drills rehearse failure** (kills measuring — failovers observing — restores timing)
3. **Ownership names humans** (responders designating — pages routing, never hoping)

---

## 4. Mentor checklist

### [4.1. Delivery checklist mentors insist on](<./sections/4. Mentor checklist/4.1. Delivery checklist mentors insist on.md>)

1. **Every handler tests headless** (inject/mocks proving — servers skipping, never binding)
2. **Every deploy gates config** (schemas crashing early — bad serving never, rollouts blocking)
3. **Every process drains** (closes owning — probes answering — improvisation ending)

---

## 5. Interview QA

### [5.1. Common interview QA delivery](<./sections/5. Interview QA/5.1. Common interview QA delivery.md>)

1. **Testing live under pressure** (inject, fakes, contracts — diagnosed with fixes, priced)
2. **Delivery live under pressure** (gating, draining, probing — robustness stated, not hoped)
3. **Readiness live under pressure** (checklists, drills, owners — evidence dated, not hoped)

---

## 6. Boundaries

### [6.1. Boundaries what is covered elsewhere](<./sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md>)

1. **Mechanics live in Domains 01–04** (routes, hooks, data — the floor delivery stands on)
2. **Theory lives in Express 05** (supertest, fakes, gates — linked, not repeated)
3. **Mastery lives in Domains 06–07** (operations, synthesis — neighbors, not repeats)

---

[← Back to Fastify track](<../README.md>)
