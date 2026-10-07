## 1. Repository wiring

### [1.1. Repository injection with forFeature](<./sections/1. Repository wiring/1.1. Repository injection with forFeature.md>)

1. **forFeature registers repositories** (entities scoping — tokens binding — modules owning)
2. **InjectRepository delivers instances** (constructors receiving — services deciding — globals declining)
3. **Services own queries** (logic centralizing — controllers thinning — reuse enabling)

---

### [1.2. Module wiring forRoot and async config](<./sections/1. Repository wiring/1.2. Module wiring forRoot and async config.md>)

1. **forRoot opens connections** (pools creating — entities registering — apps serving)
2. **forRootAsync defers decisions** (configs injecting — secrets awaiting — graphs composing)
3. **Wiring stays centralized** (modules owning — duplication declining — drift ending)

---

## 2. Transactions and config

### [2.1. Transactions scoped per request](<./sections/2. Transactions and config/2.1. Transactions scoped per request.md>)

1. **Runners scope work** (transactions opening — queries threading — partials declining)
2. **Commit pairs rollback** (outcomes settling — cleanup owning — leaks declining)
3. **Services receive runners** (parameters passing — globals declining — tests controlling)

---

### [2.2. Config connections and test doubles](<./sections/2. Transactions and config/2.2. Config connections and test doubles.md>)

1. **ConfigModule centralizes env** (variables validating — secrets separating — code unchanging)
2. **Connections read config** (factories injecting — envs deciding — rebuilds declining)
3. **Doubles replace stores** (fakes substituting — networks severing — flakes declining)

---

## 3. Persistence seams

### [3.1. Persistence seams and N+1 discipline](<./sections/3. Persistence seams/3.1. Persistence seams and N+1 discipline.md>)

1. **Repositories hide stores** (interfaces owning — callers depending — swaps enabling)
2. **Relations load deliberately** (strategies choosing — counts bounding — loops declining)
3. **Seams stay substituted** (fakes replacing — units isolating — flakes declining)

---

## 4. Mentor checklist

### [4.1. Persistence checklist mentors insist on](<./sections/4. Mentor checklist/4.1. Persistence checklist mentors insist on.md>)

1. **Every query lives in services** (repositories injecting — controllers thinning — logic centralizing)
2. **Every tx settles** (runners scoping — commit pairing — leaks declining)
3. **Every store substitutes** (seams owning — fakes replacing — flakes declining)

---

## 5. Interview QA

### [5.1. Common interview QA data access](<./sections/5. Interview QA/5.1. Common interview QA data access.md>)

1. **Wiring live under pressure** (forRoot, forFeature, injection — diagnosed with fixes, priced)
2. **Transactions live under pressure** (runners, settling, threading — judgment, not fashion)
3. **Seams live under pressure** (config, doubles, N+1 — robustness stated, not hoped)

---

## 6. Boundaries

### [6.1. Boundaries what is covered elsewhere](<./sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md>)

1. **Foundations live in Domains 01–03** (wiring, validation, DI — the floor depth stands on)
2. **Mechanics live outside NestJS** (ORM, engines, minimal contrast — linked, not repeated)
3. **Mastery lives in Domains 05–07** (delivery, production, synthesis — neighbors, not repeats)

---

[← Back to NestJS track](<../README.md>)
