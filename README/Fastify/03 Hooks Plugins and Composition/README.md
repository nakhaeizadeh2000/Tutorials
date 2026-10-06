## 1. Encapsulation

### [1.1. Encapsulation and contexts](<./sections/1. Encapsulation/1.1. Encapsulation and contexts.md>)

1. **Plugins bound contexts** (routes scoping — decorators isolating, leaks preventing)
2. **Avvio orders boot** (graphs resolving — dependencies sequencing, chaos declining)
3. **Override escapes deliberately** (fastify-plugin sharing — globals opting, never leaking)

---

### [1.2. Plugin registration patterns](<./sections/1. Encapsulation/1.2. Plugin registration patterns.md>)

1. **Register composes trees** (prefixes nesting — options passing, duplication declining)
2. **Ready gates boot** (after sequencing — errors surfacing, startups proving)
3. **Async registers cleanly** (promises resolving — callbacks retiring, never mixing)

---

## 2. Extension

### [2.1. Decorators request reply](<./sections/2. Extension/2.1. Decorators request reply.md>)

1. **decorate shares instance** (utilities attaching — handlers accessing, never importing)
2. **Request scopes per call** (decorateRequest isolating — tenants separating, never leaking)
3. **Reply extends responses** (decorateReply shaping — outputs composing, never tangling)

---

### [2.2. Lifecycle hooks deep dive](<./sections/2. Extension/2.2. Lifecycle hooks deep dive.md>)

1. **Order spans parsing to send** (preParsing → preSerialization — stages naming, never guessing)
2. **Encapsulation scopes hooks** (plugins bounding — phases nesting, never leaking)
3. **Aborts and timeouts guard** (onRequestAbort cleaning — onTimeout bounding, never hanging)

---

## 3. Scale

### [3.1. Plugin composition at scale](<./sections/3. Scale/3.1. Plugin composition at scale.md>)

1. **Trees mirror teams** (plugins owning — boundaries holding, velocity sustaining)
2. **Utilities flow downward** (parents providing — children consuming, never reaching up)
3. **Versions coexist peacefully** (prefixes scoping — contracts evolving, never breaking)

---

## 4. Mentor checklist

### [4.1. Composition checklist mentors insist on](<./sections/4. Mentor checklist/4.1. Composition checklist mentors insist on.md>)

1. **Every plugin scopes state** (encapsulation bounding — globals declining, never leaking)
2. **Every hook names its phase** (lifecycle stating — order proving, never hoping)
3. **Every decorator documents scope** (instance/request/reply separating — confusion ending)

---

## 5. Interview QA

### [5.1. Common interview QA composition](<./sections/5. Interview QA/5.1. Common interview QA composition.md>)

1. **Encapsulation live under pressure** (contexts, avvio, overrides — diagnosed with fixes, priced)
2. **Hooks live under pressure** (order, scoping, aborts — judgment, not fashion)
3. **Composition live under pressure** (trees, utilities, versions — robustness stated, not hoped)

---

## 6. Boundaries

### [6.1. Boundaries what is covered elsewhere](<./sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md>)

1. **Basics live in Domains 01–02** (routes, schemas, pipeline — the floor depth stands on)
2. **Patterns live in Express** (middleware, routers — linked, not repeated)
3. **Depth lives in Domain 04** (data, persistence — neighbors, not repeats)

---

[← Back to Fastify track](<../README.md>)
