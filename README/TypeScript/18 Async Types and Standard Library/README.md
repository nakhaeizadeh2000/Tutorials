# Async Types and Standard Library

How TypeScript *types asynchrony* — `Promise<T>` states and anatomy (pending/fulfilled/rejected as one generic), `Awaited` unwrapping at await positions (the 09 infer mechanic applied), `async` function return contracts (`Promise<T>` always — never bare `T`), combinators (`all`/`race`/`allSettled`/`any` — tuple-preserving vs union-collapsing), cancellation (`AbortSignal` as data — propagation contracts), and the standard library behind it all (`lib` settings, `AsyncIterable`/generators, timers/queues). `Awaited` *mechanics* live in [09 Utility Types](<../09 Utility Types and Type Transformations/README.md>) ([2.3. infer pipelines](<../09 Utility Types and Type Transformations/sections/2. Conditional Types/2.3. infer pipelines ReturnType Parameters Awaited.md>)); *testing* async seams (rejections, floats, abort doubles) lives in [17 Testing Types](<../17 Testing Types/README.md>) ([2.3. Async error paths](<../17 Testing Types/sections/2. Typed Test Doubles/2.3. Testing async and error paths with types.md>)) — this domain owns async *evaluation*: how promises compose, cancel, and resolve into types.

## 0. Prerequisites

[05 Functions and Callable Types](<../05 Functions and Callable Types/README.md>) — [1.3. Return types](<../05 Functions and Callable Types/sections/1. Function Type Fundamentals/1.3. Return types void never and contextual inference.md>) (`Promise<void>` vs `Promise<never>` callback contracts). [09 Utility Types and Type Transformations](<../09 Utility Types and Type Transformations/README.md>) — [2.3. infer pipelines](<../09 Utility Types and Type Transformations/sections/2. Conditional Types/2.3. infer pipelines ReturnType Parameters Awaited.md>) (`Awaited` recursion mechanics). [13 Configuration and Compiler Options](<../13 Configuration and Compiler Options/README.md>) — [3.1. module pairing](<../13 Configuration and Compiler Options/sections/3. Modules Emit and Projects/3.1. module and moduleResolution pairing.md>) (runtimes whose async primitives differ). [17 Testing Types](<../17 Testing Types/README.md>) — [2.3. Async error paths](<../17 Testing Types/sections/2. Typed Test Doubles/2.3. Testing async and error paths with types.md>) (rejection/float/abort testing this domain's evaluation enables).

## 1. Promise Types

### [1.1. Promise states and the Promise type anatomy](<./sections/1. Promise Types/1.1. Promise states and the Promise type anatomy.md>)

1. **One generic, three states** (`Promise<T>` pending/fulfilled/rejected — the state invisible in the type, carried at runtime).
2. **`then`/`catch`/`finally` signatures** (continuation typing — `then` unwraps one level, `catch` widens the union, `finally` preserves).
3. **Executor typing** (`new Promise<T>((resolve, reject) => ...)` — resolve-typed, reject-`any` legacy and its containment).

### [1.2. Awaited recursive unwrapping and thenables](<./sections/1. Promise Types/1.2. Awaited recursive unwrapping and thenables.md>)

1. **`await` positions unwrap via `Awaited`** (expression/return/assignment — every `await` is an `Awaited<T>` assertion).
2. **Thenable assimilation** (non-`Promise` `then`ables adopted — interop shape, one-level adoption per `await`).
3. **Nested-promise flattening** (`Promise<Promise<T>>` collapsing to `T` — the recursion 09 proves, applied here).

### [1.3. async function return-type contracts](<./sections/1. Promise Types/1.3. async function return-type contracts.md>)

1. **`async` always returns `Promise<T>`** (returned `T` wrapped, thrown errors rejecting — the wrapping contract).
2. **Explicit vs inferred async returns** (annotation discipline — public contracts state `Promise<T>`, bodies infer).
3. **`Promise<void>` vs `Promise<never>` discipline** (fire-and-observe vs never-settling — the 05 callback rule at async scale).

---

## 2. Combinators and Cancellation

### [2.1. all race allSettled any typed precisely](<./sections/2. Combinators and Cancellation/2.1. all race allSettled any typed precisely.md>)

1. **`Promise.all` tuple preservation** (readonly-tuple in, tuple out — positional results typed per input).
2. **`race`/`any` union collapsing** (first-settled wins — result typed as the member union, losers discarded).
3. **`allSettled` never-rejecting unions** (`PromiseSettledResult<T>` per member — partial-failure shapes typed, not thrown).

### [2.2. AbortSignal propagation and cancellation contracts](<./sections/2. Combinators and Cancellation/2.2. AbortSignal propagation and cancellation contracts.md>)

1. **Signals as parameters** (cancellation as data — `signal?: AbortSignal` threading, not globals).
2. **Abort semantics in types** (`aborted` checks narrowing control flow — rejection with `AbortError`, typed at the seam).
3. **Timeout composition** (`AbortSignal.timeout(ms)` + `Promise.race` patterns — time-bounded operations typed end-to-end).

### [2.3. Sequential vs parallel patterns and tuple typing](<./sections/2. Combinators and Cancellation/2.3. Sequential vs parallel patterns and tuple typing.md>)

1. **Loop-await serialization** (`for...of` + `await` — ordered, slow, typed simply — when order beats speed).
2. **`Promise.all` parallelism** (concurrent launch, tuple results — when independence allows batching).
3. **Bounded concurrency** (pools/queues limiting flight — throughput without collapse, typed worker contracts).

---

## 3. Standard Library in Practice

### [3.1. lib settings and built-in async types](<./sections/3. Standard Library in Practice/3.1. lib settings and built-in async types.md>)

1. **`lib` selecting async surface** (`esnext.asynciterable`, `dom` timers/signals — missing-lib `TS2550`/`TS2304` diagnosis).
2. **`PromiseSettledResult`/`AggregateError` shapes** (settled unions, multi-error aggregation — reading stdlib declarations as documentation).
3. **`Disposable`/`AsyncDisposable` with `using`** (explicit resource management — async cleanup typed via `Symbol.asyncDispose`).

### [3.2. AsyncIterable generators and for-await](<./sections/3. Standard Library in Practice/3.2. AsyncIterable generators and for-await.md>)

1. **`AsyncGenerator<T, TReturn, TNext>` anatomy** (yield/send/return channels typed — the three-parameter contract).
2. **`for await...of` consumption** (async iteration protocol — `Symbol.asyncIterator`, backpressure by awaiting).
3. **Sync/async generator choice** (push-vs-pull, chunked streams — when `AsyncIterable` beats `Promise<T[]>`).

### [3.3. Timers queues and the event-loop type view](<./sections/3. Standard Library in Practice/3.3. Timers queues and the event-loop type view.md>)

1. **Timer handle types** (`setTimeout` returning `Timeout` (node) vs `number` (dom) — the dual-declaration collision and its containment).
2. **`queueMicrotask` vs `setImmediate` vs `setTimeout`** (scheduling tiers — ordering guarantees typed by intent, not by hope).
3. **Unref/drain patterns** (`unref` lifecycle types — process-lifetime management without leaks).

---

## 4. Important points to remember (async and stdlib)

### [4.1. Async checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Async checklist mental models mentors insist on.md>)

1. **Await unwraps, combinators shape** (`Awaited` at positions, tuples/unions at combinators — two mechanics, composed).
2. **Cancel via signals, never via flags** (propagation typed through parameters — abort as data, end-to-end).
3. **Parallel by default, sequential by reason** (independence batched, order justified — performance as a typed decision).
4. **Lib selected, not assumed** (async surface declared per target — missing-lib errors read as configuration, not bugs).

---

## 5. Common pitfalls → production bugs (async and stdlib)

### [5.1. Real production bugs caused by async misunderstandings](<./sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by async misunderstandings.md>)

1. **Unawaited `Promise.all` in a loop serialized 10k requests** (float disguised as batching — p99 incident, `no-await-in-loop` interplay).
2. **`race` without cleanup leaked every losing socket** (losers un-aborted — connection exhaustion, abort-controller fix).
3. **DOM-typed timer handle shipped to Node cleared nothing** (`number` vs `Timeout` — `clearTimeout` no-op, interval leak).
4. **`any`-typed reject swallowed error classes across service boundaries** (reject-`any` legacy — wrong-class handling, outage extended).

---

## 6. Interview questions and answers (async and stdlib)

### [6.1. Common interview QA — async types and standard library](<./sections/6. Interview questions and answers/6.1. Common interview QA async types and standard library.md>)

1. **`Promise<T>` vs `T` vs `Awaited<T>` — what does each mean at an `await` position?** (wrapping, value, unwrapped).
2. **`all` vs `allSettled` vs `race` vs `any` — what shapes come back, and which rejects?** (tuples, settled unions, first-wins).
3. **How does cancellation propagate — and what types carry it?** (signals as parameters, abort narrowing).
4. **Why does `setTimeout` return two different types — and how do you contain it?** (dom/node duality, environment-scoped code).
5. **Sequential loop vs `Promise.all` vs pool — how do you choose, and how does typing differ?** (order, independence, boundedness).

---

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries — what is covered elsewhere](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **Awaited mechanics and conditional/infer evaluation** (recursion, naked-vs-wrapped, stdlib under-the-hood) — [09 Utility Types and Type Transformations](<../09 Utility Types and Type Transformations/README.md>).
2. **Async testing practice** (rejection tests, float detection, abort doubles, fake timers) — [17 Testing Types](<../17 Testing Types/README.md>).
3. **Return-type and variance mechanics** (void/never callbacks, strictFunctionTypes, contextual inference) — [05 Functions and Callable Types](<../05 Functions and Callable Types/README.md>).
4. **Runtime configuration and module pairing** (targets, libs, module/resolution per runtime) — [13 Configuration and Compiler Options](<../13 Configuration and Compiler Options/README.md>).
5. **Performance engineering at scale** (check-time budgets, references architecture, event-loop tuning) — [19 Performance, Project References and Scaling](<../19 Performance Project References and Scaling/README.md>) (textual forward).

[← Back to track](<../README.md>)
