# Async Event Loop and Promises

The single-threaded loop that makes asynchronous JavaScript work — the call stack and run-to-completion, macrotask vs microtask queues (`queueMicrotask`, `process.nextTick`, `setTimeout`/`setInterval`/`setImmediate`), what `Promise` really is (states, executor, thenable assimilation, the job queue), how `then`/`catch`/`finally` chain and propagate errors, the combinators (`all`/`allSettled`/`any`/`race`/`withResolvers`), how `async`/`await` desugars into promises and microtasks, concurrency patterns (sequential vs parallel vs race, `AbortSignal`, top-level `await`), and the callback-to-promise migration — with the checklist and production bugs mentors screen for.

## 0. Prerequisites

[Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) for [event loop overview tasks microtasks and scheduling preview](<../01 Fundamentals and Mental Model/sections/2. How JavaScript executes/2.3. Event loop overview tasks microtasks and scheduling preview.md>) and [single-threaded execution](<../01 Fundamentals and Mental Model/sections/2. How JavaScript executes/2.1. Parse bytecode JIT pipeline and single-threaded execution.md>); [Variables Scope and Closures](<../04 Variables Scope and Closures/README.md>) for [closures](<../04 Variables Scope and Closures/sections/3. Closures/3.1. Closures functions that remember their birth environment.md>) and [scope and lookup](<../04 Variables Scope and Closures/sections/2. Scope and lookup/2.1. Lexical scope and the scope chain how name lookup works.md>); [Functions Deep Dive](<../05 Functions Deep Dive/README.md>) for [first-class callbacks and HOF](<../05 Functions Deep Dive/sections/4. First-class and execution patterns/4.1. First-class functions callbacks higher-order functions and composition.md>) and [call-site `this` rules](<../05 Functions Deep Dive/sections/3. this binding/3.1. Call-site rules default implicit explicit new and strict mode.md>); [Iterables Generators and Async Iteration](<../10 Iterables Generators and Async Iteration/README.md>) for [async iterables and `for await...of`](<../10 Iterables Generators and Async Iteration/sections/4. Async iteration/4.1. Async iterables Symbol.asyncIterator and for await...of.md>) and [async generators](<../10 Iterables Generators and Async Iteration/sections/4. Async iteration/4.2. Async generators async yield and composition.md>); [Values Types and Coercion](<../03 Values Types and Coercion/README.md>) for [ToPrimitive and thenable assimilation](<../03 Values Types and Coercion/sections/2. The conversion algorithms/2.3. ToPrimitive and the valueOf toString and Symbol.toPrimitive dance.md>).

---

## 1. Event loop and the job queue

### [1.1. Call stack run-to-completion and the event loop](<./sections/1. Event loop and the job queue/1.1. Call stack run-to-completion and the event loop.md>)

1. **Single thread run-to-completion — one task at a time, never preempted** (call stack, task queue, host loop; why synchronous code never races).
2. **Browser vs Node — same language, different loop phases** (browser rendering interleaving; Node timers → pending → poll → check → close).
3. **Cooperative yielding — breaking long tasks into queued chunks** (`setTimeout(0)` vs `queueMicrotask` vs `await`; starvation vs responsiveness).

### [1.2. Microtasks vs macrotasks queueMicrotask and starvation](<./sections/1. Event loop and the job queue/1.2. Microtasks vs macrotasks queueMicrotask and starvation.md>)

1. **Two queues with a fixed drain order — microtasks drain exhaustively after every macrotask** (promise jobs, `queueMicrotask`, `MutationObserver` vs timer/I/O callbacks).
2. **`queueMicrotask` vs `process.nextTick` vs `setImmediate` — ordering and platform quirks** (nextTick before microtasks on Node; setImmediate in check phase; Promise jobs as spec jobs).
3. **Starvation — unbounded microtask chaining blocks rendering and timers** (recursive `queueMicrotask` or `then` loops; how to detect and break).

---

## 2. Timers and scheduling

### [2.1. Timers setTimeout setInterval setImmediate and Node phases](<./sections/2. Timers and scheduling/2.1. Timers setTimeout setInterval setImmediate and Node phases.md>)

1. **`setTimeout`/`setInterval` — minimum delay, clamping, and the `0` vs `4ms` rule** (nested timers clamped to 4ms in browsers; extra args forwarding; `unref`/`ref` on Node).
2. **`setImmediate` vs `setTimeout(0)` vs `nextTick` — where each runs in Node's phases** (check vs timers vs nextTick queue; browser has no `setImmediate` — `postMessage`/`MessageChannel` polyfill).
3. **Cancellation and handle discipline — `clearTimeout`/`clearInterval` and orphaned timers** (leaked intervals that keep the loop alive; `AbortSignal` with `setTimeout`).

### [2.2. Scheduling patterns debounce throttle and yielding](<./sections/2. Timers and scheduling/2.2. Scheduling patterns debounce throttle and yielding.md>)

1. **Debounce vs throttle — coalescing bursts vs rate-limiting** (trailing vs leading, cancel/flush, `AbortSignal` bridge).
2. **Yielding to the loop — `await scheduler.yield` / `setTimeout(0)` chunking for responsive UIs** (splitting CPU-bound loops; `navigator.scheduling.isInputPending` where available).
3. **Ordering guarantees and testing — fake timers, determinism, and `await` vs `setTimeout` in tests** (`sinon`/`vitest` fake timers; why `await` flushes microtasks before timers).

---

## 3. Promises core

### [3.1. Promise states executor thenable assimilation and the job queue](<./sections/3. Promises core/3.1. Promise states executor thenable assimilation and the job queue.md>)

1. **Three states — pending → fulfilled / rejected, settled once, never back** (executor runs synchronously; `resolve` vs `reject`; throwing inside executor rejects).
2. **Thenable assimilation — any object with `then` is unwrapped one level per job** (`Promise.resolve(thenable)` flattening; foreign thenables; `then` getter throwing).
3. **Jobs not tasks — `then` handlers always run as microtasks, never inline** (even `Promise.resolve(1).then(...)` defers; ordering vs `queueMicrotask`).

### [3.2. Chaining then catch finally and error propagation](<./sections/3. Promises core/3.2. Chaining then catch finally and error propagation.md>)

1. **`then` returns a new promise — chaining as `map` over async values** (onFulfilled/onRejected → next promise; missing handler passes through).
2. **`catch` and `finally` — `catch` is `then(null, onRejected)`, `finally` is transparent** (`finally` does not change the value unless it throws/returns a rejecting promise).
3. **Error propagation and unhandled rejections — where throws land** (rejected promise vs thrown exception; `unhandledrejection`/`rejectionHandled`; Node `unhandledRejection` warning).

---

## 4. Promise combinators and utilities

### [4.1. Promise.all and allSettled — parallel aggregation](<./sections/4. Promise combinators and utilities/4.1. Promise.all and allSettled parallel aggregation.md>)

1. **`Promise.all` — all fulfilled or first rejection wins; preserves input order** (short-circuits on first reject; non-promise values `Promise.resolve`-wrapped; empty iterable resolves `[]`).
2. **`Promise.allSettled` — never rejects; reports per-outcome `{status, value|reason}`** (batch reporting; ES2020; interaction with cancellation).
3. **Concurrency control — bounded `all` via pools and why unbounded `all` with 10k promises is a bug** (p-limit pattern; `Array.map(async...)` fan-out).

### [4.2. Promise.race any and withResolvers — first-wins and deferred](<./sections/4. Promise combinators and utilities/4.2. Promise.race any and withResolvers first-wins and deferred.md>)

1. **`Promise.race` — first settlement wins, including first rejection** (timeout pattern; leak of losers without `AbortSignal`).
2. **`Promise.any` — first fulfillment wins; rejects only with `AggregateError` when all reject** (ES2021; `AggregateError.errors`; vs `race` semantics).
3. **`Promise.withResolvers` — the deferred pattern without the executor anti-pattern** (ES2024; `withResolvers().promise/resolve/reject`; bridging callback APIs).

---

## 5. Async functions concurrency and migration

### [5.1. async await desugaring error handling and gotchas](<./sections/5. Async functions concurrency and migration/5.1. async await desugaring error handling and gotchas.md>)

1. **`async` always returns a Promise; `await` suspends and resumes via jobs** (sync preamble before first `await`; `await nonPromise` wraps; desugaring to `Promise` + `then` chain).
2. **Error handling — `try/catch` around `await`, rethrow, and `finally` timing** (`await` rejection throws at that point; mixing `catch` vs `try` vs `.catch()`; `return await` vs `return` inside `try/finally`).
3. **Common gotchas — `await` in loops, `Array.map(async...)` without `all`, and `forEach(async...)` fire-and-forget** (sequential `for...of` vs `Promise.all(map)`; `forEach` never awaits).

### [5.2. Concurrency patterns sequential vs parallel vs race and top-level await](<./sections/5. Async functions concurrency and migration/5.2. Concurrency patterns sequential vs parallel vs race and top-level await.md>)

1. **Sequential `for await` vs parallel `all` vs racing `race`/`any` — choosing by dependency** (dependent steps `await` in order; independent steps start before `await`; measured trade-offs).
2. **Throttling and timeout — `AbortSignal.timeout`, `Promise.race` timeout leak, and `AbortController` wiring** (propagating `signal` through `fetch`/async work; cancel vs settle).
3. **Top-level `await` — module-only, blocks dependents, and how it differs from bare `await` in scripts** (ES2022; CJS has no TLA; bundler implications).

### [5.3. Callback to promise migration and interop](<./sections/5. Async functions concurrency and migration/5.3. Callback to promise migration and interop.md>)

1. **From error-first callbacks to promises — `util.promisify` and manual wrapping** (`(err, val) =>` → `resolve/reject`; preserving `this`; multi-arg callbacks).
2. **Interop — promisifying event emitters, streams, and resolvers** (`once`, `finished`, `using` patterns; promisified `setTimeout`).
3. **When not to promisify — callback may be called many times vs promise settles once** (streams need async iteration, not a single promise).

---

## 6. Important points to remember (async and promises)

### [6.1. Async checklist reflex rules mentors screen for](<./sections/6. Important points to remember/6.1. Async checklist reflex rules mentors screen for.md>)

1. **The three queues before any "order" claim — stack, microtasks, macrotasks** (and where `nextTick`/`queueMicrotask`/`then`/`setTimeout` each land).
2. **`await` always yields — even `await 1` defers to a microtask** (sync preamble vs post-`await` continuation; `return await` in `try/catch`).
3. **The review grep list** (`setTimeout` without `clear`, `Promise.all` unbounded, `map(async` without `all`, `forEach(async`, `race` without `AbortSignal`, `withResolvers` vs executor defer).

---

## 7. Common pitfalls → production bugs

### [7.1. Real production bugs caused by async mistakes](<./sections/7. Common pitfalls to production bugs/7.1. Real production bugs caused by async mistakes.md>)

1. **Fire-and-forget `map(async` without `await all` — silently succeeds while failures vanish** (unhandled rejections, half-finished migrations).
2. **Unbounded `Promise.all` fan-out — 10k parallel fetches OOM or rate-limit** (pool + backpressure; file descriptor exhaustion).
3. **Timer leak — forgotten `setInterval` keeps process alive and doubles work after reconnect** (`clearInterval` on teardown; `unref` vs ref).
4. **Microtask starvation — recursive `then`/`queueMicrotask` freezes rendering/timers** (chunking and yielding).

---

## 8. Interview questions and answers (async and promises)

### [8.1. Common interview Q&A async event loop and promises](<./sections/8. Interview questions and answers/8.1. Common interview QA async event loop and promises.md>)

1. **The classics with mechanism-level answers** (microtask vs macrotask ordering, `await` desugaring, `all`/`allSettled`/`any`/`race`, `thenable` assimilation).
2. **What interviewers actually probe for** (narrating job queue + `await` suspension vs reciting `setTimeout 0` folklore).
3. **Grading guidance** (junior/mid/senior signals, red flags like "`Promise` runs in parallel" or "`await` blocks the thread").

---

## 9. Overlaps to avoid (where this domain stops)

### [9.1. Boundaries what is covered elsewhere](<./sections/9. Overlaps to avoid/9.1. Boundaries what is covered elsewhere.md>)

1. **Generators and async generators / async iteration — [Iterables Generators and Async Iteration](<../10 Iterables Generators and Async Iteration/README.md>).**
2. **Error classes, `try/catch/finally`, and debugging async stacks — Error Handling and Debugging domain (when it lands).**
3. **Modules, `import`/`export`, top-level `await` bundling, and `using`/`Symbol.dispose` — Modules and Code Organization / Memory Management domains.**

---

[← Back to JavaScript track](<../README.md>)
