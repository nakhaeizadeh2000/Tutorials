## 1. First slice

### [1.1. What clean architecture is and is not](<./sections/1. First slice/1.1. What clean architecture is and is not.md>)

1. **Architecture owns decisions** (policy separated — frameworks deferring — details depending inward)
2. **Screaming structure** (folders shouting use cases — not frameworks — intent readable)
3. **Costs priced honestly** (indirection billed — small apps declining — growth affording)

---

### [1.2. First NestJS vertical slice](<./sections/1. First slice/1.2. First NestJS vertical slice.md>)

1. **Slice cuts vertically** (one use case end to end — controller thinning — provider deciding)
2. **Nest wires the slice** (module registering — provider injecting — inject proving headless)
3. **Domain imports nothing** (framework ignorance — testability earning — swapability keeping)

---

## 2. Dependency rule

### [2.1. Dependency rule and layer map](<./sections/2. Dependency rule/2.1. Dependency rule and layer map.md>)

1. **Dependencies point inward** (outer knowing inner — inner ignorant — rule enforcing)
2. **Four layers mapped** (entities → use cases → adapters → frameworks — each owning one job)
3. **Violations detected mechanically** (import graphs proving — lint rules guarding — reviews catching)

---

### [2.2. Use cases as application core](<./sections/2. Dependency rule/2.2. Use cases as application core.md>)

1. **Use cases orchestrate intent** (one public method — ports calling — entities deciding)
2. **Ports declare needs** (interfaces owned inward — adapters implementing — fakes sliding)
3. **Framework stays outside** (no HTTP in use cases — no ORM in entities — boundaries holding)

---

## 3. First modeling

### [3.1. Entities own rules DTOs carry data](<./sections/3. First modeling/3.1. Entities own rules DTOs carry data.md>)

1. **Entities enforce invariants** (rules living — constructors guarding — invalid states unrepresentable)
2. **DTOs carry across** (shapes validating — mappers translating — layers never leaking)
3. **Anemic models declined** (getters-only scattering — behavior homing — richness earning)

---

## 4. Mentor checklist

### [4.1. Clean checklist mentors insist on](<./sections/4. Mentor checklist/4.1. Clean checklist mentors insist on.md>)

1. **Every dependency points inward** (imports proving — outward edges absenting — lint confirming)
2. **Every use case owns one intent** (single public method — ports declaring — framework absenting)
3. **Every entity guards itself** (invariants holding — constructors proving — DTOs translating)

---

## 5. Interview QA

### [5.1. Common interview QA clean foundations](<./sections/5. Interview QA/5.1. Common interview QA clean foundations.md>)

1. **Foundations live under pressure** (layers, rule, slices — diagnosed with fixes, priced)
2. **Trade-offs live under pressure** (costs, sizes, timings — honesty stated, not hoped)
3. **Modeling live under pressure** (entities, DTOs, use cases — ownership stated, not hoped)

---

## 6. Boundaries

### [6.1. Boundaries what is covered elsewhere](<./sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md>)

1. **SOLID lives in DesignPatterns** (DIP mechanics — linked, not repeated)
2. **Persistence lives in ORM** (repository seam — linked, not repeated)
3. **Mastery lives in Domains 02–07** (ports, DDD, CQRS, isolation — neighbors, not repeats)

---

[← Back to Clean Architecture track](<../README.md>)
