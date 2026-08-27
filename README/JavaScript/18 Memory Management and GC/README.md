# Memory Management and GC

How JavaScript reclaims memory without `free`/`delete` — what the heap and stack really mean in a GC language, which references count as roots, how V8's generational/incremental/mark-sweep (Orinoco/Oilpan) decides to sweep, what hidden classes and allocation pressure do to throughput, when collection actually runs (idle/pressure/`--expose-gc`) and why you must not rely on timing, how closures/timers/listeners/`Map` keep entire graphs alive, what `WeakMap`/`WeakSet` ephemeron semantics vs `WeakRef`/`FinalizationRegistry` best-effort really guarantee, and how to measure (heap snapshots/allocation timelines) and prevent leaks (bounded caches, `WeakMap`, explicit `dispose`/`using`) — with the checklist and production bugs mentors screen for.

## 0. Prerequisites

[Variables, Scope, and Closures](<../04 Variables Scope and Closures/README.md>) for [closures and GC what stays alive](<../04 Variables Scope and Closures/sections/3. Closures/3.4. Closures and garbage collection what stays alive.md>) and [scope chain and TDZ](<../04 Variables Scope and Closures/sections/2. Scope and lookup/2.1. Lexical scope and the scope chain how name lookup works.md>); [Collections Map Set and Weak References](<../09 Collections Map Set and Weak References/README.md>) for [WeakMap ephemeron keys](<../09 Collections Map Set and Weak References/sections/3. Weak collections/3.1. WeakMap ephemeron keys non-iterability and use cases.md>) and [WeakSet](<../09 Collections Map Set and Weak References/sections/3. Weak collections/3.2. WeakSet object-only membership and non-iterability.md>) and [WeakRef semantics](<../09 Collections Map Set and Weak References/sections/4. Weak references and cleanup/4.1. WeakRef semantics deref and lifetime reality.md>) and [FinalizationRegistry timing](<../09 Collections Map Set and Weak References/sections/4. Weak references and cleanup/4.2. FinalizationRegistry cleanup and timing reality.md>); [Objects in Depth](<../06 Objects in Depth/README.md>) for [descriptors and seal/freeze shallow reality](<../06 Objects in Depth/sections/5. Integrity and immutability/5.1. Prevent extensions seal freeze and shallow immutability.md>) and [prototype linkage](<../06 Objects in Depth/sections/3. Prototype linkage intro/3.1. The prototype chain getPrototypeOf setPrototypeOf and Object.create.md>); [Async Event Loop and Promises](<../13 Async Event Loop and Promises/README.md>) for [microtasks vs macrotasks and timers](<../13 Async Event Loop and Promises/sections/1. Event loop and the job queue/1.2. Microtasks vs macrotasks queueMicrotask and starvation.md>) and [timers and scheduling](<../13 Async Event Loop and Promises/sections/2. Timers and scheduling/2.1. Timers setTimeout setInterval setImmediate and Node phases.md>); [JSON Serialization and Data Exchange](<../16 JSON Serialization and Data Exchange/README.md>) for [`structuredClone` vs `JSON` lossy cloning](<../16 JSON Serialization and Data Exchange/sections/5. Beyond JSON structuredClone and data exchange/5.1. structuredClone deep cloning and limitations.md>); [Arrays](<../08 Arrays/README.md>) for [holes/sparsity and ArrayBuffer transfer](<../08 Arrays/sections/2. Holes sparsity and length/2.1. Holes vs undefined sparse arrays and empty slots.md>) and [ArrayBuffer TypedArray](<../08 Arrays/sections/5. Transforming ordering and typed preview/5.3. ArrayBuffer TypedArray and DataView how they differ from Array.md>); [Error Handling and Debugging](<../15 Error Handling and Debugging/README.md>) for [stack traces and `using`/`Symbol.dispose`](<../15 Error Handling and Debugging/sections/3. Defensive patterns/3.1. Cause wrapping context preservation and suppressed errors.md>).

---

## 1. Memory model

### [1.1. Heap stack execution contexts and references how values live](<./sections/1. Memory model/1.1. Heap stack execution contexts and references how values live.md>)

1. **Heap vs stack vs queue — what actually lives where** (heap holds objects/closures/arrays; stack holds execution contexts and primitive locals; spec model vs V8 reality).
2. **References are edges, not values — the object graph** (variables/fields/`[[Prototype]]`/closures as edges; copying a reference doesn't copy the object).
3. **Lifetime follows reachability, not scope exit alone** (scope exit prunes locals, but closure/registry may retain the graph beyond the block).
4. **Common confusion — "primitives on stack, objects on heap" is a useful lie that breaks on optimization** (V8 allocates small objects inline, escapes analysis, and may box primitives).

### [1.2. Reachability roots retaining paths and object death](<./sections/1. Memory model/1.2. Reachability roots retaining paths and object death.md>)

1. **The root set — globals, active stack, micro/macrotask queues, and handles held by the host** (why an uncleared `setInterval` is a GC root).
2. **Retaining paths — every chain from a root to the dying object must break** (one surviving path keeps the subgraph alive).
3. **`null` vs `delete` vs scope exit — which actually cuts a path** (`obj.field = null` cuts one edge; `delete` removes the slot; block exit nulls locals; `Map.delete`/`clear`/`WeakMap` key death differ).
4. **Seeing retention — reading a heap-snapshot retaining path bottom-up** (from leaked object up to its root holder).

---

## 2. GC engine and allocation

### [2.1. Mark-and-sweep incremental generational and concurrent V8 Orinoco](<./sections/2. GC engine and allocation/2.1. Mark-and-sweep incremental generational and concurrent V8 Orinoco.md>)

1. **Mark-and-sweep core — trace live, sweep dead** (mark bits/transitive closure; sweep reclaims unreachable pages; compaction vs free lists).
2. **Generational hypothesis — nursery vs old space** (most objects die young; minor vs major collections; write barriers and remembered sets).
3. **Incremental and concurrent — slicing and background threads** (incremental steps avoid long pauses; concurrent marking on V8 Orinoco; `Oilpan` for C++ objects).
4. **What it costs and when it pauses** (throughput vs latency; why allocation rate drives frequency more than heap size alone).

### [2.2. Allocation hidden classes inline caches and GC pressure](<./sections/2. GC engine and allocation/2.2. Allocation hidden classes inline caches and GC pressure.md>)

1. **How allocation really works — bump pointer in the nursery, then promote** (contiguous bumps; out-of-space triggers minor collection).
2. **Hidden classes (maps) — shape drives inline caches** (same property order → same map → monomorphic IC; ad-hoc `delete`/out-of-order add → dictionary mode and deopt).
3. **GC pressure — short-lived churn vs long-lived bloat** (allocating throwaway arrays per frame hurts differently than `Map` that never evicts).
4. **Measure, not folklore — why micro benchmarks mislead about GC** (real pipelines show pause/throughput; label version-specific V8 hints as "engine-hint, not contract").

### [2.3. When GC runs determinism idle scheduling and --expose-gc](<./sections/2. GC engine and allocation/2.3. When GC runs determinism idle scheduling and --expose-gc.md>)

1. **No promise when — GC is implementation-defined and heuristic** (heap size, pressure, idle windows, allocation rate decide; `gc()` is not a language feature).
2. **`--expose-gc` and `global.gc()` are test tools, not production APIs** (Node `node --expose-gc`; browser DevTools "Collect garbage" button; never gate correctness on a forced GC).
3. **Idle-time collection — `requestIdleCallback` / scheduler hints as polite reclamation windows** (cooperative yielding vs forced `gc()`).
4. **What determinism you do get — reachability is deterministic, timing is not** (same code, same live set, different wall-clock collection instant is correct behavior).

---

## 3. Lifetimes what stays alive

### [3.1. Closures timers listeners maps and the lifetime of a graph](<./sections/3. Lifetimes what stays alive/3.1. Closures timers listeners maps and the lifetime of a graph.md>)

1. **Closure pinning revisited — whole environment, not just the variable read** (spec retains per scope; V8 may prune unreachable slots as an optimization — but don't rely on it).
2. **Timers/host queues as roots — `setTimeout`/`setInterval`/`requestAnimationFrame`/`queueMicrotask` hold callbacks (and their captures) until fired/cancelled.**
3. **Listeners and maps — `addEventListener`/`Map.set`/`Array.push` as retaining edges until `remove`/`delete`/`signal.abort`.**
4. **Breaking the graph — explicit release (`= null`/`clearTimeout`/`AbortSignal`/`Map.delete`/`using`) and narrow scopes as lifecycle design, not micro-management.**

---

## 4. Weak references and cleanup deep dive

### [4.1. WeakMap and WeakSet ephemeron semantics revisited deep](<./sections/4. Weak references and cleanup deep dive/4.1. WeakMap and WeakSet ephemeron semantics revisited deep.md>)

1. **Ephemeron-by-key (and by-value for `WeakSet`) — aliveness flows from the object, not the collection** (key alive → entry kept; key dead → entry evaporates atomically).
2. **No enumeration, no size, object-only keys/values — what the contract forbids and why** (prevents "are you dead yet?" observation).
3. **The classic bug — adding the key as a value keeps it alive** (`wm.set(obj, obj)` pins itself; holdings referencing the target pin in `FinalizationRegistry`).
4. **Canonical patterns — private state, object-keyed memoization, and tagging without leak** (vs symbol-keyed or strong `Map`).

### [4.2. WeakRef deref hazards lifetime reality and resurrection ordering](<./sections/4. Weak references and cleanup deep dive/4.2. WeakRef deref hazards lifetime reality and resurrection ordering.md>)

1. **`new WeakRef(obj)` doesn't keep `obj` alive; `deref()` may return `undefined` at any turn** (and may also return the object again if resurrected via another strong edge).
2. **Double-`deref` hazard — never cache the result across an `await`/yield without re-checking** (GC may run between your two uses).
3. **`ClearKeptObjects` host hook — live `WeakRef`/`FinalizationRegistry` contents are cleared atomically after marking** (spec §26.1: only unreachable bindings clear).
4. **When to reach for `WeakRef` — and when not to — caches and observer lists, never ownership.**

### [4.3. FinalizationRegistry cleanup never-for-correctness hosted discipline](<./sections/4. Weak references and cleanup deep dive/4.3. FinalizationRegistry cleanup never for correctness hosted discipline.md>)

1. **Registration doesn't keep the target alive — but holding the target in `heldValue` does** (hold a descriptor/token, not the object itself).
2. **Timing is best-effort — may run late, in batches, or never; host may delay after resurrection** (V8 runs cleanups after marking; ordering among registries not guaranteed).
3. **`unregister(token)` and `Symbol.dispose`/`using` as explicit correctness vs observability split** (resource correctness always explicit; finalizer is last-resort telemetry/metrics only).
4. **Testing finalizers — retry loops + `--expose-gc` + `queueMicrotask` drain, and why prod must not depend on them.**

---

## 5. Measuring and preventing leaks

### [5.1. Measuring memory heap snapshots allocation timeline and inspector](<./sections/5. Measuring and preventing leaks/5.1. Measuring memory heap snapshots allocation timeline and inspector.md>)

1. **The workflow — two snapshots, diff, retaining paths** (DevTools Memory / `node --inspect` / `node --heapsnapshot-signal=SIGUSR2`; compare delta, not single snapshot size).
2. **`performance.memory` (Chrome), `process.memoryUsage()`, `v8.getHeapStatistics()` — RSS vs heap used vs heap total** (which number tells which story).
3. **Allocation timeline — record allocation, see the stack that churns** (DevTools Allocation instrumentation vs heap snapshot).
4. **Forcing GC for measurement only — why "size after `gc()`" is a lab metric, not a user metric.**

### [5.2. Preventing leaks bounded caches eviction WeakMap and dispose patterns](<./sections/5. Measuring and preventing leaks/5.2. Preventing leaks bounded caches eviction WeakMap and dispose patterns.md>)

1. **Bounded `Map`/`Array` vs unbounded growth — LRU/FIFO/TinyLFU and why every cache needs a policy** (size cap or TTL or `WeakRef` keying).
2. **`WeakMap`/`WeakSet`/`WeakRef` as leak-safe edges — and their limits** (keys must be objects; values need strong handling; not a cure for global `Set` of objects).
3. **Explicit lifecycle — `clearTimeout`/`AbortSignal`/`close()`/`Symbol.dispose` + `using` as the ownership contract** (why `FinalizationRegistry` cannot replace `dispose`).
4. **Reviewable checklist — what a PR's "retention surface" should document** (listener/interval/`Map`/closure sites enumerated).

---

## 6. Important points to remember (memory)

### [6.1. Memory and GC checklist reflex rules mentors screen for](<./sections/6. Important points to remember/6.1. Memory and GC checklist reflex rules mentors screen for.md>)

1. **The five reflexes — "what's the root?", "what's the path?", "weak or strong edge?", "bounded or unbounded?", "explicit teardown?"** (table of when each fires).
2. **The review grep list** (`new Map` without `delete`/`clear`, `setInterval`/`setTimeout` without `clear*`/`AbortSignal`, `addEventListener` without `remove`/`signal`, `new WeakMap` with self-reference value, `new WeakRef` double-deref without guard, `FinalizationRegistry` holding target).
3. **Boundary rule — never test `WeakRef`/`FinalizationRegistry` with `assert(deref() === undefined)` without retry + forced GC; never ship a test that depends on exact GC timing.**

---

## 7. Common pitfalls → production bugs

### [7.1. Real production bugs caused by memory mistakes](<./sections/7. Common pitfalls to production bugs/7.1. Real production bugs caused by memory mistakes.md>)

1. **Unbounded `Map` cache that pins every request/response forever — OOM after a deploy** (should have been bounded or `WeakMap`).
2. **Forgotten interval/listener pins kilobyte payloads to megabytes** (one `setInterval` retains a `Buffer` graph).
3. **Closure capturing a whole config/db handle to read one count** (the `bigData = null` one-line fix in [Variables §3.4](<../04 Variables Scope and Closures/sections/3. Closures/3.4. Closures and garbage collection what stays alive.md>) forgotten).
4. **Finalizer relied on to close a file/socket — runs too late or never under pressure** (`using`/`close()` is the correctness path).
5. **Self-referential `WeakMap` value or `heldValue` holding target — weak collection that never weakens.**

---

## 8. Interview questions and answers (memory)

### [8.1. Common interview Q&A memory GC weak references](<./sections/8. Interview questions and answers/8.1. Common interview QA memory GC weak references.md>)

1. **The classics with mechanism-level answers** (heap vs stack, reachability, generational hypothesis, `WeakMap` vs `Map`, `WeakRef` double-deref, finalizer non-determinism, hidden classes).
2. **What interviewers actually probe for** (narrating retaining paths vs "JS has a GC so no leaks").
3. **Grading guidance** (junior/mid/senior signals, red flags like "`delete` frees memory" or "`gc()` guarantees collection").

---

## 9. Overlaps to avoid (where this domain stops)

### [9.1. Boundaries what is covered elsewhere](<./sections/9. Overlaps to avoid/9.1. Boundaries what is covered elsewhere.md>)

1. **Scope/hoisting/TDZ/closure capture mechanics — [Variables, Scope, and Closures](<../04 Variables Scope and Closures/README.md>); block-function Annex B nuances — there (this domain only covers retention/lifetimes).**
2. **SameValueZero/`Map`/`Set` ordering/performance and `WeakRef`/`FinalizationRegistry` use contract — [Collections](<../09 Collections Map Set and Weak References/README.md>) (this domain covers GC-engine/heap view).**
3. **Event-loop queues/timers/microtasks — [Async Event Loop and Promises](<../13 Async Event Loop and Promises/README.md>) (here only the GC-root implication of host queues).**
4. **`Array` holes/length/`ArrayBuffer` transfer and `structuredClone`/`JSON` serialization trade-offs — [Arrays](<../08 Arrays/README.md>) / [JSON Serialization and Data Exchange](<../16 JSON Serialization and Data Exchange/README.md>) (here only the allocation/retention angle).**
5. **Object descriptors/`seal`/`freeze`/`Proxy` membranes/revocables and `class #private` branding — [Objects in Depth](<../06 Objects in Depth/README.md>) / [Prototypes and Classes](<../07 Prototypes and Classes/README.md>) / [Metaprogramming](<../17 Metaprogramming Symbols Proxy Reflect/README.md>) (here only the invariant/GC interaction).**
6. **Debugging workflow/stack traces/`console`/`inspector` — [Error Handling and Debugging](<../15 Error Handling and Debugging/README.md>) (here only heap/inspector hooks).**

---

[← Back to JavaScript track](<../README.md>)
