## 1. Tests

### [1.1. Handler tests without servers](<./sections/1. Tests/1.1. Handler tests without servers.md>)

1. **Supertest drives apps** (injecting without listen — requests flowing, ports unbinding)
2. **Mocks isolate handlers** (req/res faking — units proving, servers skipping)
3. **Assertions cover contracts** (status/body checking — regressions catching, never hoping)

---

### [1.2. Service tests with fakes](<./sections/1. Tests/1.2. Service tests with fakes.md>)

1. **Fakes replace stores** (Maps standing in — databases skipping, tests speeding)
2. **node:test runs stdlib** (asserting natively — deps declining, suites executing live)
3. **Boundaries prove with contracts** (fakes honoring — integration confirming, never assuming)

---

## 2. Delivery

### [2.1. Config gating at deploy](<./sections/2. Delivery/2.1. Config gating at deploy.md>)

1. **Boot schemas gate serving** (env proving — crashes earlying, deploys blocking)
2. **Gates run in pipelines** (CI asserting — bad config merging never, rollouts guarding)
3. **Frozen config ships** (values locking — drift ending, surprises expiring)

---

### [2.2. Graceful shutdown and probes](<./sections/2. Delivery/2.2. Graceful shutdown and probes.md>)

1. **Closes drain connections** (server closing — in-flight landing, data preserving)
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

1. **Every handler tests headless** (supertest/mocks proving — servers skipping, never binding)
2. **Every deploy gates config** (schemas crashing early — bad serving never, rollouts blocking)
3. **Every process drains** (closes owning — probes answering — improvisation ending)

---

## 5. Interview QA

### [5.1. Common interview QA delivery](<./sections/5. Interview QA/5.1. Common interview QA delivery.md>)

1. **Testing live under pressure** (supertest, fakes, contracts — diagnosed with fixes, priced)
2. **Delivery live under pressure** (gating, draining, probing — robustness stated, not hoped)
3. **Readiness live under pressure** (checklists, drills, owners — evidence dated, not hoped)

---

## 6. Boundaries

### [6.1. Boundaries what is covered elsewhere](<./sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md>)

1. **Mechanics live in Domains 01–04** (routes, errors, data — the floor delivery stands on)
2. **Containers live in NodeJS** (orchestration, HEALTHCHECK — linked, not repeated)
3. **Mastery lives in Domains 06–07** (operations, synthesis — neighbors, not repeats)

---

[← Back to Express track](<../README.md>)
