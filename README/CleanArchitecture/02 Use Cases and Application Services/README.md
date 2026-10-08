## 1. Service orchestration

### [1.1. Application services arrange cross-cutting flows](<./sections/1. Service orchestration/1.1. Application services arrange cross-cutting flows.md>)

1. **Services arrange flows** (intents sequencing — ports calling — entities deciding)
2. **Cross-cutting homing** (auth scoping — logging bounding — metrics timing)
3. **Use cases staying pure** (domain orchestrating — infrastructure deferring — tests headlessing)

---

### [1.2. Transactions bound the use case](<./sections/1. Service orchestration/1.2. Transactions bound the use case.md>)

1. **Boundary matching** (transaction scoping — use case owning — partials declining)
2. **Unit-of-work porting** (needs declaring — runners implementing — cores ignorant)
3. **Rollback judging** (failures atomicing — compensations sequencing — contexts deciding)

---

## 2. Long flows

### [2.1. Sagas sequencing without distributed lockstep](<./sections/2. Long flows/2.1. Sagas sequencing without distributed lockstep.md>)

1. **Steps sequencing** (flows staging — states persisting — lockstep declining)
2. **Compensation owning** (failures unwinding — inverses naming — consistency earning)
3. **Orchestration choosing** (drivers deciding — choreography reacting — sizes weighing)

---

### [2.2. Idempotency guarding retries](<./sections/2. Long flows/2.2. Idempotency guarding retries.md>)

1. **Retries guarding** (keys carrying — replays detecting — effects-once holding)
2. **Receivers idempotenting** (messages deduping — handlers reentranting — storms surviving)
3. **Keys owning** (callers generating — stores remembering — windows bounding)

---

## 3. Service edges

### [3.1. DTOs mapping at service edges](<./sections/3. Service edges/3.1. DTOs mapping at service edges.md>)

1. **Edges validating** (shapes proving — garbage declining — handlers assuming)
2. **Mappers translating** (DTOs mapping — entities building — layers holding)
3. **Contracts versioning** (fields evolving — breakage preventing — clients trusting)

---

## 4. Mentor checklist

### [4.1. Services checklist mentors insist on](<./sections/4. Mentor checklist/4.1. Services checklist mentors insist on.md>)

1. **Every flow owning intent** (services arranging — use cases deciding — edges translating)
2. **Every boundary transacting** (units scoping — partials declining — compensations naming)
3. **Every retry idempotenting** (keys carrying — effects-once holding — storms surviving)

---

## 5. Interview QA

### [5.1. Common interview QA services and flows](<./sections/5. Interview QA/5.1. Common interview QA services and flows.md>)

1. **Flows live under pressure** (services, sagas, transactions — diagnosed with fixes, priced)
2. **Failures live under pressure** (retries, compensations, partials — honesty stated, not hoped)
3. **Edges live under pressure** (DTOs, mappers, contracts — ownership stated, not hoped)

---

## 6. Boundaries

### [6.1. Boundaries what is covered elsewhere](<./sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md>)

1. **Transactions live in NestJS** (runner mechanics — linked, not repeated)
2. **Pools live in ORM** (sizing discipline — linked, not repeated)
3. **Mastery lives in Domains 03–07** (ports, DDD, CQRS, isolation — neighbors, not repeats)

---

[← Back to Clean Architecture track](<../README.md>)
