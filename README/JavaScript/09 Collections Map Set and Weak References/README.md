# Collections Map Set and Weak References

Ordered keyed collections that don't stringify away their keys, sets that deduplicate by value identity, weak ephemeron tables that don't keep their values alive, and the host-managed cleanup that finally runs — when the GC decides — with the `WeakRef`/`FinalizationRegistry` contracts that prevent promise-as-resource bugs.

## 0. Prerequisites

[Objects in Depth](<../06 Objects in Depth/README.md>) for [property-key coercion and null-prototype dictionaries](<../06 Objects in Depth/sections/1. Object creation and literals/1.2. Creation patterns literal Object create and constructors.md>) and [immutability shallow reality](<../06 Objects in Depth/sections/5. Integrity and immutability/5.1. Prevent extensions seal freeze and shallow immutability.md>); [Values, Types, and Coercion](<../03 Values Types and Coercion/README.md>) for [SameValueZero vs strict equality and ToPrimitive](<../03 Values Types and Coercion/sections/3. Coercion at work/3.1. Loose equality the abstract equality algorithm walkthrough.md>) which `Map`/`Set` actually use; [Arrays](<../08 Arrays/README.md>) for [hole vs dense and iteration costs](<../08 Arrays/sections/2. Holes sparsity and length/2.1. Holes vs undefined sparse arrays and empty slots.md>) and [mutating vs copy-era patterns](<../08 Arrays/sections/3. Mutation and its copy-era alternative/3.2. Non-mutating copies toReversed toSorted toSpliced and with ES2023.md>); [Variables, Scope, and Closures](<../04 Variables Scope and Closures/README.md>) for [closure capture and GC reachability](<../04 Variables Scope and Closures/sections/3. Closures/3.4. Closures and garbage collection what stays alive.md>).

---

## 1. Map deep dive

### [1.1. Map creation SameValueZero insertion order and iteration](<./sections/1. Map deep dive/1.1. Map creation SameValueZero insertion order and iteration.md>)

1. **Creation and literal intent** (why there is no `Map` literal; `new Map(iterable)` and `Map.groupBy` ES2024 as factory).
2. **SameValueZero is the comparator, not `===`** (`NaN` equals `NaN`, `-0`/`+0` conflated — table vs `===`/`Object.is`).
3. **Insertion-order iteration with stable mutation semantics** (entries/keys/values, `for-of`, and what re-insert/update does to order).

### [1.2. Map operations lookup mutation and Object vs Map trade offs](<./sections/1. Map deep dive/1.2. Map operations lookup mutation and Object vs Map trade offs.md>)

1. **`get`/`set`/`has`/`delete`/`clear`/`size` contracts** (return values, chaining, and `has` vs `get !== undefined` ambiguity).
2. **Object keys, symbol keys, and identity — no stringification** (any value as key, preserved identity vs `ToPropertyKey` collapse).
3. **When to pick `Map` vs plain object vs `null`-proto dict** (untrusted keys, prototype-pollution safety, key-type, iteration-order guarantees).

---

## 2. Set deep dive

### [2.1. Set creation uniqueness SameValueZero and iteration](<./sections/2. Set deep dive/2.1. Set creation uniqueness SameValueZero and iteration.md>)

1. **Creation and uniqueness by SameValueZero** (`new Set(iterable)` dedupes; `NaN` deduped, `-0 === +0`).
2. **Insertion order and iteration — entries are `[v,v]`** (why `Set` has `keys`/`values` twins and `entries` mirrors `Map`).
3. **`has`/`add`/`delete`/`clear`/`size` and value identity** (object identity vs structural equality; mutation order rules).

### [2.2. Set operations and Array vs Set trade offs](<./sections/2. Set deep dive/2.2. Set operations and Array vs Set trade offs.md>)

1. **Set as a deduplication and O(1) membership engine** (vs `Array.includes` O(n); filter-unique pattern).
2. **Set algebra without language sugar** (union/intersection/difference via iteration — and ES2024 `Set` proposal future).
3. **When to pick `Set` vs `Array` vs `Map`** (uniqueness invariant, ordered-list vs keyed-access trade-off, GC note for object sets).

---

## 3. Weak collections

### [3.1. WeakMap ephemeron keys non-iterability and use cases](<./sections/3. Weak collections/3.1. WeakMap ephemeron keys non-iterability and use cases.md>)

1. **Object-only keys and ephemeron lifetime** (key alive → value alive; key dead → entry disappears; no `size`/`iteration`).
2. **No stringification, no enumeration, no leak** (why WeakMap is the private-association and memo-cache primitive).
3. **Canonical patterns: private state and object-keyed memoization** (vs symbol-keyed or closure-per-instance).

### [3.2. WeakSet object-only membership and non-iterability](<./sections/3. Weak collections/3.2. WeakSet object-only membership and non-iterability.md>)

1. **Object-only values, no primitives, no iteration** (`has`/`add`/`delete` only; no `size`, no enumeration).
2. **Ephemeron-by-membership: reachability follows members** (when a member dies its entry vanishes).
3. **Use cases: tagging and branding without leaking** (vs `Set` for long-lived tracers, brand-check via `has`).

---

## 4. Weak references and cleanup

### [4.1. WeakRef semantics deref and lifetime reality](<./sections/4. Weak references and cleanup/4.1. WeakRef semantics deref and lifetime reality.md>)

1. **A `WeakRef` doesn't keep its target alive** (constructor requires object; `deref()` may return `undefined` after GC).
2. **Non-deterministic lifetime — GC decides, spec promises nothing** (testing with `--expose-gc`; never rely on prompt collection).
3. **`WeakRef` vs strong ref vs `WeakMap` entry lifetime** (caching pattern and the "resurrection hazard").

### [4.2. FinalizationRegistry cleanup timing and safety rules](<./sections/4. Weak references and cleanup/4.2. FinalizationRegistry cleanup and timing reality.md>)

1. **Registration does not keep the target alive; cleanup is best-effort** (callback may run late, or never; untrusted timing).
2. **Held value vs token and `unregister` discipline** (holdings shouldn't reference the target; tokens for cancellation).
3. **Never use finalizers for resource correctness** (file handles, locks, network — use explicit `dispose`/`using` instead; registry is observability/best-effort only).

---

## 5. Choosing and performance

### [5.1. Choosing the right collection Map vs Object vs Set vs Array and Weak variants](<./sections/5. Choosing and performance/5.1. Choosing the right collection Map vs Object vs Set vs Array and Weak variants.md>)

1. **Key-type and identity matrix** (string/symbol/object, `ToPropertyKey` vs identity, duplication hazard).
2. **Mutation and iteration surface matrix** (ordered iteration, O(1) lookup vs linear scan, non-iterable weak).
3. **Decision table with migration notes** (object-as-map → `Map`, array-unique → `Set`, object-keyed memo → `WeakMap`, tagging → `WeakSet`).

### [5.2. Performance hidden costs iteration overhead and GC pressure](<./sections/5. Choosing and performance/5.2. Performance hidden costs iteration overhead and GC pressure.md>)

1. **`Map`/`Set` iteration cost vs object key enumeration** (insertion-order walk, iterator allocation, and engine fast paths).
2. **Weak collections and GC pressure — what actually leaks** (strong vs weak liveness, unbounded `Map` cache pathology).
3. **Measure-don't-guess framing** (micro-benchmarks lie on tiny `n`; profile with representative workloads — cite V8 fast-path notes but label as engine-hint, not contract).

---

## 6. Important points to remember (collections)

### [6.1. Collection checklist reflex rules mentors screen for](<./sections/6. Important points to remember/6.1. Collection checklist reflex rules mentors screen for.md>)

1. **SameValueZero before any `Map`/`Set` membership claim** (the three-way table `===` vs `Object.is` vs SameValueZero).
2. **No stringification vs property-key coercion — know which container you're in** (identity-keyed vs stringified-key).
3. **Weak means non-enumerable and non-deterministic** (no `size`/iteration; `WeakRef.deref()` may be `undefined`; `FinalizationRegistry` is best-effort).

---

## 7. Common pitfalls → production bugs

### [7.1. Real production bugs caused by collection mistakes](<./sections/7. Common pitfalls to production bugs/7.1. Real production bugs caused by collection mistakes.md>)

1. **Unbounded `Map` cache that pins every object ever seen** (should have been `WeakMap` — heap grows, OOM).
2. **Finalizer relied on to close resources — runs too late or never** (file/socket leak; explicit `dispose`/`using` required).
3. **`-0` vs `+0` vs `NaN` membership surprise** (strict-equality mental model breaks SameValueZero cases).

---

## 8. Interview questions and answers (collections)

### [8.1. Common interview Q&A collections weak references and GC](<./sections/8. Interview questions and answers/8.1. Common interview QA collections weak references and GC.md>)

1. **The classics with mechanism-level answers** (SameValueZero vs `===`, insertion-order, `WeakMap` vs `Map` lifetime, `WeakRef` non-determinism, `FinalizationRegistry` safety).
2. **What interviewers actually probe for** (narrating identity vs stringification and ephemeron lifetime, not reciting method names).
3. **Grading guidance** (junior/mid/senior signals, red flags like "WeakMap has size" or "finalizer runs immediately").

---

## 9. Overlaps to avoid (where this domain stops)

### [9.1. Boundaries what is covered elsewhere](<./sections/9. Overlaps to avoid/9.1. Boundaries what is covered elsewhere.md>)

1. **Iterator protocol, `for-of`, generators, and async iteration** — Iterables, Generators, and Async Iteration domain.
2. **GC internals, heap snapshots, and `structuredClone`/JSON serialization** — Memory Management / JSON domains.
3. **Object descriptors, prototype chain, and class private fields** — Objects in Depth / Prototypes and Classes domains; holes/sparse Arrays — Arrays domain.

---

[← Back to JavaScript track](<../README.md>)
