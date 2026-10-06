## 1. Services

### [1.1. Service layer in plugins](<./sections/1. Services/1.1. Service layer in plugins.md>)

1. **Plugins own stores** (services decorating — teams bounding, never globaling)
2. **Handlers stay thin** (requests parsing — services deciding, never querying)
3. **Theory lives in Express** (extraction owning — linked, not repeated)

---

### [1.2. DTOs and response shaping](<./sections/1. Services/1.2. DTOs and response shaping.md>)

1. **Schemas filter responses** (outputs declaring — extras dropping, contracts bounding)
2. **Shapes version explicitly** (v1 freezing — evolution planning, breakage declining)
3. **Contracts live in Express** (DTO owning — linked, not repeated)

---

## 2. Transactions

### [2.1. ORM per-request scoping](<./sections/2. Transactions/2.1. ORM per-request scoping.md>)

1. **Instances decorate once** (clients attaching — handlers accessing, never importing)
2. **Requests scope work** (tx/loaders flowing — tenants isolating, never leaking)
3. **Mechanics live in ORM** (pooling owning — linked, not repeated)

---

### [2.2. Transactions per request](<./sections/2. Transactions/2.2. Transactions per request.md>)

1. **Hooks bound lifecycles** (requests opening — work scoping, partials declining)
2. **Services thread clients** (tx passing — nesting composing, never globaling)
3. **Theory lives in Express** (settlement owning — linked, not repeated)

---

## 3. Loading

### [3.1. N+1 and batching](<./sections/3. Loading/3.1. N+1 and batching.md>)

1. **Loaders scope per request** (decorateRequest isolating — keys coalescing, never sharing)
2. **Counts assert bounds** (renders numbering — builds failing, never hoping)
3. **Strategies live in ORM** (include deciding — linked, not repeated)

---

## 4. Mentor checklist

### [4.1. Persistence checklist mentors insist on](<./sections/4. Mentor checklist/4.1. Persistence checklist mentors insist on.md>)

1. **Every store decorates scoped** (plugins bounding — globals declining, never leaking)
2. **Every response filters** (schemas declaring — extras dropping, never dumping)
3. **Every tx settles per request** (commit pairing — leaks declining, never dangling)

---

## 5. Interview QA

### [5.1. Common interview QA persistence](<./sections/5. Interview QA/5.1. Common interview QA persistence.md>)

1. **Scoping live under pressure** (decorate, per-request, isolation — diagnosed with fixes, priced)
2. **Filtering live under pressure** (schemas, versions, leaks — judgment, not fashion)
3. **Settling live under pressure** (units, threading, counts — robustness stated, not hoped)

---

## 6. Boundaries

### [6.1. Boundaries what is covered elsewhere](<./sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md>)

1. **Theory lives in Express 04** (services, DTOs, tx — linked, not repeated)
2. **Queries live in ORM** (strategies, isolation — linked, not repeated)
3. **Delivery lives in Domain 05** (tests, deploy — neighbors, not repeats)

---

[← Back to Fastify track](<../README.md>)
