# Performance and JIT Mindset

Why fast JavaScript stays fast — how V8's pipeline (parse → Ignition bytecode → TurboFan/Maglev/Turboshaft tiers) speculates and deoptimizes, what hidden classes/maps and inline caches (monomorphic/polymorphic/megamorphic) cost, how to measure without lying (clocks, harnesses, warmup, dead-code and variance traps, flamegraphs and allocation timelines), what JIT-friendly code looks like (call-site monomorphism, shape stability, element kinds, string and array patterns that keep the compiler speculative), and what runtime and delivery costs dominate (event-loop yielding, bundle size, tree-shaking, code-splitting) — with the checklist and production bugs mentors screen for.

## 0. Prerequisites

[Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) for [parse bytecode JIT pipeline and single-threaded execution](<../01 Fundamentals and Mental Model/sections/2. How JavaScript executes/2.1. Parse bytecode JIT pipeline and single-threaded execution.md>) and [event loop overview](<../01 Fundamentals and Mental Model/sections/2. How JavaScript executes/2.3. Event loop overview tasks microtasks and scheduling preview.md>); [Variables Scope and Closures](<../04 Variables Scope and Closures/README.md>) for [closures and GC what stays alive](<../04 Variables Scope and Closures/sections/3. Closures/3.4. Closures and garbage collection what stays alive.md>); [Objects in Depth](<../06 Objects in Depth/README.md>) for [descriptors and seal/freeze](<../06 Objects in Depth/sections/5. Integrity and immutability/5.1. Prevent extensions seal freeze and shallow immutability.md>) and [prototype linkage](<../06 Objects in Depth/sections/3. Prototype linkage intro/3.1. The prototype chain getPrototypeOf setPrototypeOf and Object.create.md>) and [enumeration order](<../06 Objects in Depth/sections/2. Properties and descriptors/2.3. Enumerability enumeration order and for-in mechanics.md>); [Arrays](<../08 Arrays/README.md>) for [exotic length and holes](<../08 Arrays/sections/2. Holes sparsity and length/2.2. Length invariants and the array index contract.md>) and [ArrayBuffer TypedArray](<../08 Arrays/sections/5. Transforming ordering and typed preview/5.3. ArrayBuffer TypedArray and DataView how they differ from Array.md>); [Async Event Loop and Promises](<../13 Async Event Loop and Promises/README.md>) for [microtasks vs macrotasks](<../13 Async Event Loop and Promises/sections/1. Event loop and the job queue/1.2. Microtasks vs macrotasks queueMicrotask and starvation.md>) and [scheduling patterns debounce throttle and yielding](<../13 Async Event Loop and Promises/sections/2. Timers and scheduling/2.2. Scheduling patterns debounce throttle and yielding.md>); [Memory Management and GC](<../18 Memory Management and GC/README.md>) for [allocation hidden classes inline caches and GC pressure](<../18 Memory Management and GC/sections/2. GC engine and allocation/2.2. Allocation hidden classes inline caches and GC pressure.md>) and [measuring memory heap snapshots](<../18 Memory Management and GC/sections/5. Measuring and preventing leaks/5.1. Measuring memory heap snapshots allocation timeline and inspector.md>) and [preventing leaks](<../18 Memory Management and GC/sections/5. Measuring and preventing leaks/5.2. Preventing leaks bounded caches eviction WeakMap and dispose patterns.md>); [Error Handling and Debugging](<../15 Error Handling and Debugging/README.md>) for [stack traces](<../15 Error Handling and Debugging/sections/5. Debugging toolkit/5.2. Stack traces Error.stack prepareStackTrace and async stacks.md>) and [console toolkit](<../15 Error Handling and Debugging/sections/5. Debugging toolkit/5.1. Console toolkit debugger breakpoints and stepping.md>).

---

## 1. The engine pipeline — how JavaScript gets fast

### [1.1. Parse bytecode Ignition TurboFan Maglev and Turboshaft tiers](<./sections/1. The engine pipeline/1.1. Parse bytecode Ignition TurboFan Maglev and Turboshaft tiers.md>)

1. **Parse → bytecode → tiers — speculative, not magical** (Ignition bytecode, Sparkplug baseline, Maglev mid-tier, TurboFan/Turboshaft optimizing tier; each tier trades compile time for peak speed).
2. **Where time really goes — parsing vs optimizing vs executing** (cold start dominated by parse/bytecode; hot loops dominated by optimized code and IC feedback).
3. **Warmup and feedback — type feedback vectors drive speculation** (ICs and `FeedbackVector` record shapes/element kinds; optimizer assumes the common case).

### [1.2. Deoptimization and bailouts when speculation fails](<./sections/1. The engine pipeline/1.2. Deoptimization and bailouts when speculation fails.md>)

1. **Deopt is correctness, not a bug — guard failure bails to bytecode** (type/branch/shape guard fails → deoptimize, reconstruct frame, resume in Ignition/Maglev).
2. **What triggers deopts most often in JS** (shape change, element-kind transition, `arguments` exotic use, out-of-bounds/optics, polymorphic call site after monomorphic optimization).
3. **Observing deopts — `--trace-deopt --trace-opt --allow-natives-syntax` as lab tools** (never ship with natives syntax; use local V8 flags to diagnose, then fix the shape not the flag).

---

## 2. Shapes inline caches and polymorphism

### [2.1. Hidden classes maps and inline cache states](<./sections/2. Shapes inline caches and polymorphism/2.1. Hidden classes maps and inline cache states.md>)

1. **Maps (hidden classes) — shape drives property access** (same add-order and kinds → same map → fast offset load; out-of-order add or `delete` → new map or dictionary).
2. **IC states — monomorphic fast, polymorphic table, megamorphic hash** (monomorphic: one map → one stub; polymorphic: 2–4 maps → polymorphic stub; megamorphic: hash/prototype walk).
3. **Element kinds — `PACKED_SMI` → `PACKED_DOUBLE` → `PACKED_ELEMENTS` → `HOLEY_*` → `DICTIONARY`** (one-way lattice; `delete` or hole or mixed type widens the kind and costs).

### [2.2. Polymorphic megamorphic and dictionary mode costs](<./sections/2. Shapes inline caches and polymorphism/2.2. Polymorphic megamorphic and dictionary mode costs.md>)

1. **Call-site polymorphism — one call with many receiver shapes poisons the IC** (factory returning three shapes → megamorphic call; hoisting shape test out keeps monomorphic).
2. **Dictionary mode — `delete` and computed-add chaos turn objects hash-table slow** (transitions that were O(1) offset become hash lookup + allocation).
3. **Prototype and global pollution — megamorphic prototype walks and `with`/global leaks widen every access** (why stable prototypes and lexical scope help the ICs).

---

## 3. Measuring performance correctly

### [3.1. Clocks hrtime performance.now and benchmark harnesses](<./sections/3. Measuring performance correctly/3.1. Clocks hrtime performance.now and benchmark harnesses.md>)

1. **Clocks — `Date.now` is wall time with ±1 ms jitter and clock-skew; `performance.now` is monotonic high-res; `process.hrtime.bigint` is nanosecond** (which clock for which question).
2. **Harnesses — warmup, iterations, statistics, and isolation** (Mitata/Benchmark.js/tinybench: warmup vs measured, `gc` between runs, median/p95 not just mean, `--allow-natives-syntax` off in CI).
3. **Async and I/O harness discipline — `await` inside the measured loop vs outside** (microtask drain and event-loop interleaving must be part of the measurement).

### [3.2. Microbenchmark traps warmup dead code and variance](<./sections/3. Measuring performance correctly/3.2. Microbenchmark traps warmup dead code and variance.md>)

1. **Dead-code elimination — an unused result may be optimized away entirely** (always `consume`/`assert` the result; `globalThis` side-effect or `assert` keeps it live).
2. **Tier-up and GC noise — first 10k iterations are still tiering and allocating** (ignore warmup; run GC between samples or measure steady-state; variance from GC and CPU throttling).
3. **Micro vs macro — a 3 % micro win can be 0 % in the real pipeline** (measure the user path (route/handler) before tuning a leaf; add allocation and bundle size to the story).

### [3.3. Profiling flamegraphs allocation and heap timelines](<./sections/3. Measuring performance correctly/3.3. Profiling flamegraphs allocation and heap timelines.md>)

1. **Sampling profiler — `--prof`, `node --cpu-prof`, Chrome Performance panel → flamegraph** (self time vs total time; inlined frames may be hidden; deopt marks).
2. **Allocation timeline — which stack churns the nursery** (DevTools Allocation timeline vs `allocation` sampling; link to [Memory 5.1](<../18 Memory Management and GC/sections/5. Measuring and preventing leaks/5.1. Measuring memory heap snapshots allocation timeline and inspector.md>) for the workflow).
3. **From flame to fix — widening kind, megamorphic IC, or large bundle chunk** (profile before patch; re-profile after — no folklore).

---

## 4. Writing JIT-friendly code

### [4.1. Functions inlining and monomorphic call sites](<./sections/4. Writing JIT-friendly code/4.1. Functions inlining and monomorphic call sites.md>)

1. **Inlining — small hot functions called with one shape inline and fold** (size threshold, monomorphic call site, no `arguments`/`try/catch` in the inlinee in older heuristics).
2. **Keeping call sites monomorphic — one shape per site, not one polymorphic helper** (split `process(cat)` vs `process(dog)` by call site instead of one `process(anyPet)` if hot).
3. **What blocks inlining — `eval`, `with`, `try/catch` around the call, megamorphic receivers, and cross-script `Function` construction** (measure, don't guess — `printOpt` in d8).

### [4.2. Objects arrays and strings shape stability and element kinds](<./sections/4. Writing JIT-friendly code/4.2. Objects arrays and strings shape stability and element kinds.md>)

1. **Object shape stability — initialize all fields up front in the same order; never `delete`** (constructor that assigns `this.x`, `this.y`, `this.z` always → one map; add `this.w` later ad-hoc → transition chain).
2. **Array element kinds — stay `PACKED_SMI` when you can; adding a `double`, `undefined` hole, or object widens to `DOUBLE`/`ELEMENTS`/`DICTIONARY`** (pre-size when known; don't `delete arr[i]` — `splice`/`with` or re-allocate).
3. **Strings — `+` and `join` both linear but rope vs flatten differ; repeated `+=` in a loop churns, `Array.join` or `String` builder patterns reuse buffers** (and intern long-lived keys via `Map`, not via string concat of `__proto__`).

---

## 5. Runtime and delivery performance

### [5.1. Event loop yielding responsiveness and scheduling](<./sections/5. Runtime and delivery performance/5.1. Event loop yielding responsiveness and scheduling.md>)

1. **Main-thread budget — 16 ms per frame vs 50 ms `isInputPending` vs Node event-loop tick** (long tasks block rendering/I/O; chunk with `setTimeout`/`scheduler.yield`/`queueMicrotask` appropriately).
2. **Yielding patterns — chunked loops, `await scheduler.yield()`, `requestAnimationFrame`/`requestIdleCallback` vs microtask starvation** (why `queueMicrotask` loop never yields to rendering while `setTimeout(0)` does).
3. **Backpressure and bounded concurrency — `p-limit` pools beat `Promise.all` fan-out for throughput and latency** (link to [Async 4.1](<../13 Async Event Loop and Promises/sections/4. Promise combinators and utilities/4.1. Promise.all and allSettled parallel aggregation.md>) and [Memory 5.2](<../18 Memory Management and GC/sections/5. Measuring and preventing leaks/5.2. Preventing leaks bounded caches eviction WeakMap and dispose patterns.md>)).

### [5.2. Bundle size tree-shaking code splitting and load cost](<./sections/5. Runtime and delivery performance/5.2. Bundle size tree-shaking code splitting and load cost.md>)

1. **Parse and evaluate cost dominates cold start — smaller bundle = faster start even if gzipped sizes look similar** (profile parse time; `import()` cost vs static `import` waterfall).
2. **Tree-shaking needs ESM and purity — `sideEffects: false` and pure `/* #__PURE__ */` annotations** (CJS and `export *` with side-effectful init blocks shake poorly).
3. **Code-splitting and caching — route-based `import()` chunks, `importmap`/`exports` for sharing, and why barrel `index.js` re-exporting everything defeats shaking** (measure chunk parse time, not just network bytes).

---

## 6. Important points to remember (performance)

### [6.1. Performance checklist reflex rules mentors screen for](<./sections/6. Important points to remember/6.1. Performance checklist reflex rules mentors screen for.md>)

1. **The five reflexes — "what's the IC state?", "what's the element kind?", "allocation or compute?", "yield or block?", "bundle or runtime?"** (table of when each fires).
2. **The review grep list** (`delete obj.prop`, `new Array(n)` holes, mixed `PACKED_` widening, megamorphic call, `+=` in tight loop, barrel re-export, `Promise.all` fan-out, `queueMicrotask` starvation).
3. **Boundary rule — profile first, fix shape/kind/yield second, micro-tune last; never gate correctness on observed GC or deopt timing.**

---

## 7. Common pitfalls → production bugs

### [7.1. Real production bugs caused by performance mistakes](<./sections/7. Common pitfalls to production bugs/7.1. Real production bugs caused by performance mistakes.md>)

1. **Polymorphic hot call — one helper fed three shapes drops 40 % throughput** (split by shape or normalize at the boundary).
2. **`delete` turning a hot map into dictionary mode — latency cliff after a feature flag** (set sentinel `null`/`undefined` instead of `delete`).
3. **Holey `PACKED` → `DICTIONARY` after sparse push — iteration regresses from vector to hash** (dense `Array.from` or pre-size vs `arr[idx]=v` holes).
4. **Unbounded `Promise.all` fan-out and queue starvation — latency spike and OOM under load** (bounded pool `p-limit` + `AbortSignal`).
5. **Barrel + CJS kills tree-shaking — 200 kB extra parse on every route** (route chunks + `sideEffects: false` + remove barrel).

---

## 8. Interview questions and answers (performance)

### [8.1. Common interview Q&A performance JIT and measurement](<./sections/8. Interview questions and answers/8.1. Common interview QA performance JIT and measurement.md>)

1. **The classics with mechanism-level answers** (tiers/deopt, maps/IC states, element kinds, clocks, microbenchmark traps, flamegraphs, inlining, yielding, bundle shaking).
2. **What interviewers actually probe for** (narrating "shape → IC → deopt → measure → fix" vs reciting "V8 is fast").
3. **Grading guidance** (junior/mid/senior signals, red flags like "`delete` frees memory" or "`Date.now` is high-res" or "JIT guarantees speed").

---

## 9. Overlaps to avoid (where this domain stops)

### [9.1. Boundaries what is covered elsewhere](<./sections/9. Overlaps to avoid/9.1. Boundaries what is covered elsewhere.md>)

1. **Scope/closure/TDZ and lifetime/retention graphs — [Variables, Scope, and Closures](<../04 Variables Scope and Closures/README.md>) / [Memory Management and GC](<../18 Memory Management and GC/README.md>) (here only the allocation-throughput angle).**
2. **`Array` holes/length/`TypedArray`/`ArrayBuffer` transfer and `Map`/`Set` ordering — [Arrays](<../08 Arrays/README.md>) / [Collections](<../09 Collections Map Set and Weak References/README.md>) (here only element-kind and IC cost).**
3. **Iterator/generator/`Symbol.iterator` and async iteration machines — [Iterables Generators and Async Iteration](<../10 Iterables Generators and Async Iteration/README.md>) (here only the yielding cost).**
4. **Error stacks/`console`/`inspector` deep and `Proxy` membranes/revocables — [Error Handling and Debugging](<../15 Error Handling and Debugging/README.md>) / [Metaprogramming](<../17 Metaprogramming Symbols Proxy Reflect/README.md>) (here only the profiler-flame angle).**
5. **JSON `stringify`/`structuredClone` trade-offs and `Module` ESM vs CJS live-binding interop — [JSON Serialization and Data Exchange](<../16 JSON Serialization and Data Exchange/README.md>) / [Modules and Code Organization](<../14 Modules and Code Organization/README.md>) (here only bundle size and parse cost).**

---

[← Back to JavaScript track](<../README.md>)
