## 1. Params

### [1.1. Route params and validation](<./sections/1. Params/1.1. Route params and validation.md>)

1. **Params arrive as strings** (coercion owning — numbers parsing, validation guarding)
2. **Preloaders centralize fetching** (app.param loading — handlers receiving, never querying)
3. **Schemas validate shapes** (allowlisting inputs — injection declining, trust earning)

---

### [1.2. Nested routers and composition](<./sections/1. Params/1.2. Nested routers and composition.md>)

1. **Routers mount subtrees** (resources nesting — paths composing, never flattening)
2. **mergeParams shares parents** (children inheriting — scopes composing, duplication declining)
3. **Composition scales teams** (modules owning — boundaries holding, velocity sustaining)

---

## 2. Matching

### [2.1. Advanced matching and wildcards](<./sections/2. Matching/2.1. Advanced matching and wildcards.md>)

1. **Patterns match precisely** (path-to-regexp ruling — strings, params, regex composing)
2. **Splats catch tails** (`/*splat` globbing — files nesting, ever matching)
3. **Order decides ambiguity** (specific preceding — shadowing declining, surprises ending)

---

### [2.2. Custom middleware patterns](<./sections/2. Matching/2.2. Custom middleware patterns.md>)

1. **Factories configure behavior** (functions returning middleware — options closing, reuse rising)
2. **Guards authorize centrally** (roles checking — denials short-circuiting, logic isolating)
3. **Wrappers adapt signatures** (async catching — legacy bridging, errors forwarding)

---

## 3. Async safety

### [3.1. Async pipeline safety](<./sections/3. Async safety/3.1. Async pipeline safety.md>)

1. **Rejections forward centrally** (Express 5 catching — handlers receiving, never swallowing)
2. **Parallel work joins safely** (Promise.all gating — partials handling, failures structuring)
3. **Timeouts bound handlers** (races limiting — hangs declining, resources freeing)

---

## 4. Mentor checklist

### [4.1. Routing checklist mentors insist on](<./sections/4. Mentor checklist/4.1. Routing checklist mentors insist on.md>)

1. **Every param is coerced and checked** (strings typing — injection declining, trust earning)
2. **Every subtree mounts deliberately** (routers nesting — paths composing, never sprawling)
3. **Every async path forwards errors** (rejections catching — central receiving, never hanging)

---

## 5. Interview QA

### [5.1. Common interview QA routing](<./sections/5. Interview QA/5.1. Common interview QA routing.md>)

1. **Params and validation live** (coercion, preloaders, schemas — diagnosed with fixes, priced)
2. **Matching and order live** (patterns, splats, precedence — judgment, not fashion)
3. **Async safety live** (rejections, joins, timeouts — robustness stated, not hoped)

---

## 6. Boundaries

### [6.1. Boundaries what is covered elsewhere](<./sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md>)

1. **Basics live in Domain 01** (routes, pipeline, errors — the floor depth stands on)
2. **Schemas live in TypeScript** (branded types, parsing unknown — linked, not repeated)
3. **Security lives in Domain 03** (headers, secrets, threats — neighbors, not repeats)

---

[← Back to Express track](<../README.md>)
