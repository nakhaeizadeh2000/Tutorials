## 1. Scopes deep

### [1.1. Singleton default and why shared](<./sections/1. Scopes deep/1.1. Singleton default and why shared.md>)

1. **Singletons share by default** (instances reusing — memory bounding — graphs composing)
2. **Statelessness earns sharing** (state declining — concurrency surviving — bugs declining)
3. **Constructor injection wires** (containers resolving — tests substituting — globals declining)

---

### [1.2. Request and transient scopes with costs](<./sections/1. Scopes deep/1.2. Request and transient scopes with costs.md>)

1. **Request scope isolates per call** (contexts owning — tenants separating — leaks declining)
2. **Transient scope isolates per injection** (instances multiplying — state partitioning — sharing declining)
3. **Narrow scopes cost bubbles** (singletons chaining — performance pricing — requests scoping)

---

## 2. Provider composition

### [2.1. Custom providers useFactory useValue useClass](<./sections/2. Provider composition/2.1. Custom providers useFactory useValue useClass.md>)

1. **useFactory builds dynamically** (configs deciding — async awaiting — graphs composing)
2. **useValue fixes constants** (tests faking — configs freezing — logic absenting)
3. **useClass swaps implementations** (interfaces owning — variants selecting — branches declining)

---

### [2.2. Lifecycle hooks and shutdown](<./sections/2. Provider composition/2.2. Lifecycle hooks and shutdown.md>)

1. **Init hooks prepare readiness** (connections opening — caches warming — traffic preceding)
2. **Destroy hooks release cleanly** (connections closing — flushes completing — leaks declining)
3. **Shutdown stays graceful** (signals handling — in-flight draining — data surviving)

---

## 3. Testing seams

### [3.1. Testing seams with module overrides](<./sections/3. Testing seams/3.1. Testing seams with module overrides.md>)

1. **Test modules isolate units** (modules compiling — dependencies resolving — apps unbooted)
2. **Overrides substitute fakes** (providers replacing — boundaries controlling — flakes declining)
3. **Seams stay designed** (constructors receiving — globals absenting — tests owning)

---

## 4. Mentor checklist

### [4.1. DI checklist mentors insist on](<./sections/4. Mentor checklist/4.1. DI checklist mentors insist on.md>)

1. **Every provider scopes deliberately** (singletons defaulting — narrow justifying — bubbles pricing)
2. **Every dependency injects** (constructors receiving — customs composing — globals absenting)
3. **Every seam tests** (modules compiling — overrides faking — flakes declining)

---

## 5. Interview QA

### [5.1. Common interview QA providers and DI](<./sections/5. Interview QA/5.1. Common interview QA providers and DI.md>)

1. **Scopes live under pressure** (singleton, request, transient — diagnosed with fixes, priced)
2. **Composition live under pressure** (factories, values, lifecycles — judgment, not fashion)
3. **Testing live under pressure** (modules, overrides, seams — robustness stated, not hoped)

---

## 6. Boundaries

### [6.1. Boundaries what is covered elsewhere](<./sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md>)

1. **Foundations live in Domains 01–02** (wiring, gating, validation — the floor depth stands on)
2. **Mechanics live outside NestJS** (decorator DI, engine, contrast — linked, not repeated)
3. **Mastery lives in Domains 04–07** (data, delivery, production — neighbors, not repeats)

---

[← Back to NestJS track](<../README.md>)
