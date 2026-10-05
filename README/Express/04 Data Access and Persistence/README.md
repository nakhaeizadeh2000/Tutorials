## 1. Service layer

### [1.1. Service layer extraction](<./sections/1. Service layer/1.1. Service layer extraction.md>)

1. **Handlers translate HTTP** (requests parsing — services deciding, never querying)
2. **Services own use cases** (transactions orchestrating — rules enforcing, never routing)
3. **Context flows per request** (tx/loaders scoping — globals declining, leaks ending)

---

### [1.2. DTOs and response shaping](<./sections/1. Service layer/1.2. DTOs and response shaping.md>)

1. **DTOs bound the contract** (fields selecting — over-fetching declining, clients trusting)
2. **Presenters shape output** (internals hiding — secrets omitting, versions evolving)
3. **Errors map to statuses** (failures translating — clients branching, never guessing)

---

## 2. Transactions

### [2.1. ORM integration in handlers](<./sections/2. Transactions/2.1. ORM integration in handlers.md>)

1. **Clients inject per request** (connections scoping — sharing declining, leaks ending)
2. **Services receive, never import** (dependencies passing — testing mocking, never wiring)
3. **Middleware attaches context** (req scoping — loaders/tx flowing, globals declining)

---

### [2.2. Transactions per request](<./sections/2. Transactions/2.2. Transactions per request.md>)

1. **Begin with the request** (tx opening — work scoping, partials declining)
2. **Pass through services** (clients threading — nesting composing, never globaling)
3. **Commit or roll back once** (outcomes settling — cleanup owning, never leaking)

---

## 3. Loading

### [3.1. N+1 and dataLoader](<./sections/3. Loading/3.1. N+1 and dataLoader.md>)

1. **Loops multiply queries** (per-parent fetching — latency linearing, builds failing)
2. **Loaders batch per request** (keys coalescing — queries collapsing, instances scoping)
3. **Strategies live in ORM** (include/select deciding — linked, not repeated)

---

## 4. Mentor checklist

### [4.1. Persistence checklist mentors insist on](<./sections/4. Mentor checklist/4.1. Persistence checklist mentors insist on.md>)

1. **Every handler delegates** (services deciding — queries absent, never inline)
2. **Every tx settles** (commit/rollback pairing — leaks declining, never dangling)
3. **Every list counts queries** (bounds asserting — N+1 failing builds, never pages)

---

## 5. Interview QA

### [5.1. Common interview QA persistence](<./sections/5. Interview QA/5.1. Common interview QA persistence.md>)

1. **Layering live under pressure** (handlers/services/repos — judgment, not fashion)
2. **Transactions live under pressure** (scoping, threading, settling — diagnosed with fixes)
3. **N+1 live under pressure** (loops, loaders, strategies — robustness stated, not hoped)

---

## 6. Boundaries

### [6.1. Boundaries what is covered elsewhere](<./sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md>)

1. **Queries live in ORM** (strategies, isolation — linked, not repeated)
2. **Errors live in Domain 03** (translation, triage — neighbors, not repeats)
3. **Delivery lives in Domain 05** (testing, deploy — neighbors, not repeats)

---

[← Back to Express track](<../README.md>)
