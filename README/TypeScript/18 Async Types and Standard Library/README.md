# Async Types and Standard Library

How TypeScript *types asynchrony* — `Promise<T>` states and anatomy (pending/fulfilled/rejected as one generic), `Awaited` unwrapping at await positions (the 09 infer mechanic applied), `async` function return contracts (`Promise<T>` always — never bare `T`), combinators (`all`/`race`/`allSettled`/`any` — tuple-preserving vs union-collapsing), cancellation (`AbortSignal` as data — propagation contracts), and the standard library behind it all (`lib` settings, `AsyncIterable`/generators, timers/queues). `Awaited` *mechanics* live in [09 Utility Types](<../09 Utility Types and Type Transformations/README.md>) ([2.3. infer pipelines](<../09 Utility Types and Type Transformations/sections/2. Conditional Types/2.3. infer pipelines ReturnType Parameters Awaited.md>)); *testing* async seams (rejections, floats, abort doubles) lives in [17 Testing Types](<../17 Testing Types/README.md>) ([2.3. Async error paths](<../17 Testing Types/sections/2. Typed Test Doubles/2.3. Testing async and error paths with types.md>)) — this domain owns async *evaluation*: how promises compose, cancel, and resolve into types.

## 0. Prerequisites

[05 Functions and Callable Types](<../05 Functions and Callable Types/README.md>) — [1.3. Return types](<../05 Functions and Callable Types/sections/1. Function Type Fundamentals/1.3. Return types void never and contextual inference.md>) (`Promise<void>` vs `Promise<never>` callback contracts). [09 Utility Types and Type Transformations](<../09 Utility Types and Type Transformations/README.md>) — [2.3. infer pipelines](<../09 Utility Types and Type Transformations/sections/2. Conditional Types/2.3. infer pipelines ReturnType Parameters Awaited.md>) (`Awaited` recursion mechanics). [13 Configuration and Compiler Options](<../13 Configuration and Compiler Options/README.md>) — [3.1. module pairing](<../13 Configuration and Compiler Options/sections/3. Modules Emit and Projects/3.1. module and moduleResolution pairing.md>) (runtimes whose async primitives differ). [17 Testing Types](<../17 Testing Types/README.md>) — [2.3. Async error paths](<../17 Testing Types/sections/2. Typed Test Doubles/2.3. Testing async and error paths with types.md>) (rejection/float/abort testing this domain's evaluation enables).

## 1. Promise Types

### [1.1. Promise states and the Promise type anatomy](<./sections/1. Promise Types/1.1. Promise states and the Promise type anatomy.md>)

1. **Fulfillment and state:** observe synchronous construction, later reactions and adoption of a still-pending promise.
2. **Continuation outcomes:** check transformation/recovery types, preserved values, cleanup rejection and awaited cleanup.
3. **Constructor boundaries:** inspect resolve/reject typing and reproduce why an async executor can leave the outer promise pending.

### [1.2. Awaited recursive unwrapping and thenables](<./sections/1. Promise Types/1.2. Awaited recursive unwrapping and thenables.md>)

1. **Wrapped and consumed contracts:** apply Awaited without confusing it with runtime execution or recursive field traversal.
2. **Actual thenable adoption:** observe synchronous getter access, deferred calls, recursive consumption and the fuller PromiseLike API.
3. **Honest normalization:** test constructor-sensitive identity and expose a nested annotation whose callback type disagrees with runtime adoption.

### [1.3. async function return-type contracts](<./sections/1. Promise Types/1.3. async function return-type contracts.md>)

1. **Returned promises:** observe async adoption, promise identity and body rejection versus argument-evaluation errors.
2. **Actual return inference:** inspect emitted declarations, literal unions and a chosen annotation's implementation check.
3. **Completion contracts:** distinguish void, undefined and never payloads, callback ownership and a pending promise's lack of process keepalive.

---

## 2. Combinators and Cancellation

### [2.1. all race allSettled any typed precisely](<./sections/2. Combinators and Cancellation/2.1. all race allSettled any typed precisely.md>)

1. **Input-ordered aggregation:** check contextual tuples versus widened arrays, mutable outputs and siblings continuing after rejection.
2. **First outcome choices:** observe race's early rejection, any's later success and input-ordered AggregateError reasons.
3. **Settlement boundaries:** narrow member outcomes, test empty inputs and reproduce aggregate rejection when iteration fails.

### [2.2. AbortSignal propagation and cancellation contracts](<./sections/2. Combinators and Cancellation/2.2. AbortSignal propagation and cancellation contracts.md>)

1. **Actual propagation:** forward a signal through a loader to local HTTP fetch and test success, pre-abort and in-flight cancellation.
2. **Reason and type boundaries:** compare default/custom/composed reasons and prove that throwIfAborted is not an assertion signature.
3. **Cooperative deadlines:** run a real pending-request timeout and distinguish scheduled zero delay, invalid negative delay and resource ownership.

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

1. **Transformations and operations:** locate conditional evaluation separately from async consumption and synchronous iterator helpers.
2. **Verification evidence:** choose actual type-test tools, completion tests, doubles and declaration-consumer checks.
3. **Callable boundaries:** distinguish accepted callbacks, returned completion, receivers and cancellation seams.
4. **Programs and artifacts:** route declarations, libraries, runtime implementations and source/output graph failures.
5. **Measurement boundaries:** separate application scheduling from published compiler/build scaling owners.

[← Back to track](<../README.md>)
