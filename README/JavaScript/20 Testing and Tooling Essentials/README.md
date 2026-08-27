# Testing and Tooling Essentials

How JavaScript gets tested and shipped without lies — why the test pyramid beats 100 % line coverage, what AAA/naming/isolation buy you, how Node's built-in `node:test` runner actually works (`describe`/`it`/`test`/`before`/`after` + `--test` flags and TAP), what `node:assert/strict` guarantees (`deepStrictEqual`/`throws`/`rejects`) vs `expect`-style matchers and snapshots, how the test-double taxonomy (dummy/stub/spy/mock/fake) maps to `mock.fn`/`mock.method`/timers/`fetch`/module mocking, how to test promises/`async`/`EventEmitter` without flakes, why fake timers and bounded concurrency beat `setTimeout` in tests, what `c8`/V8 coverage really measures (and how to gate it), and how ESLint/Prettier/`npm scripts`/`package.json`/`workspaces`/engines and CI form the delivery contract — with the checklist and production bugs mentors screen for.

## 0. Prerequisites

[Error Handling and Debugging](<../15 Error Handling and Debugging/README.md>) for [built-in Error types](<../15 Error Handling and Debugging/sections/1. Error taxonomy/1.1. Built-in Error types and when engines throw them.md>) and [throw semantics why always Error](<../15 Error Handling and Debugging/sections/2. Throwing and catching/2.1. throw semantics what is throwable and why always Error.md>) and [assert.throws / rejects patterns](<../15 Error Handling and Debugging/sections/3. Defensive patterns/3.2. Assertions guards Result Either and when not to throw.md>) and [console toolkit](<../15 Error Handling and Debugging/sections/5. Debugging toolkit/5.1. Console toolkit debugger breakpoints and stepping.md>); [Async Event Loop and Promises](<../13 Async Event Loop and Promises/README.md>) for [Promise states and chaining](<../13 Async Event Loop and Promises/sections/3. Promises core/3.1. Promise states executor thenable assimilation and the job queue.md>) and [combinators](<../13 Async Event Loop and Promises/sections/4. Promise combinators and utilities/4.1. Promise.all and allSettled parallel aggregation.md>) and [async await desugaring](<../13 Async Event Loop and Promises/sections/5. Async functions concurrency and migration/5.1. async await desugaring error handling and gotchas.md>); [Modules and Code Organization](<../14 Modules and Code Organization/README.md>) for [ESM vs CJS and live bindings](<../14 Modules and Code Organization/sections/5. CommonJS interop and resolution/5.2. ESM and CJS interop dual packages and migration.md>) and [package.json exports and specifiers](<../14 Modules and Code Organization/sections/5. CommonJS interop and resolution/5.3. Specifiers package.json exports import maps and organization.md>); [Memory Management and GC](<../18 Memory Management and GC/README.md>) for [heap snapshots and allocation pressure](<../18 Memory Management and GC/sections/5. Measuring and preventing leaks/5.1. Measuring memory heap snapshots allocation timeline and inspector.md>); [Performance and JIT Mindset](<../19 Performance and JIT Mindset/README.md>) for [clocks and harnesses](<../19 Performance and JIT Mindset/sections/3. Measuring performance correctly/3.1. Clocks hrtime performance.now and benchmark harnesses.md>) and [microbenchmark traps](<../19 Performance and JIT Mindset/sections/3. Measuring performance correctly/3.2. Microbenchmark traps warmup dead code and variance.md>).

---

## 1. Testing foundations

### [1.1. Why test the test pyramid economics and what not to test](<./sections/1. Testing foundations/1.1. Why test the test pyramid economics and what not to test.md>)

1. **Pyramid over ice-cream — unit dominates, e2e caps** (many fast units, fewer integration, handful of e2e; diamond anti-pattern when everything is mocked e2e).
2. **Economics — cost of a bug × probability vs cost of a test × flake rate** (why high-traffic parsing/coercion paths get tests, trivial getters do not; ROI table).
3. **What not to test — framework invariants and tautologies** (don't test `Array.isArray` or a getter that returns `this._x`; test your branching, your contract, your bug).

### [1.2. Anatomy of a test AAA naming isolation and determinism](<./sections/1. Testing foundations/1.2. Anatomy of a test AAA naming isolation and determinism.md>)

1. **AAA — Arrange, Act, Assert in one screen** (one act per test; readable failure diff over clever setup).
2. **Naming as documentation — `when/then` and `should` vs `it renders`** (good name survives without reading the body; bad name is comment debt).
3. **Isolation and determinism — seeded RNG, no shared mutable, no wall clock** (why `Date.now`/`Math.random`/global `Map` breaks determinism; `beforeEach` resets only).

---

## 2. Node test runner and assertions

### [2.1. node:test runner describe it test hooks filtering and --test flags](<./sections/2. Node test runner and assertions/2.1. node test runner describe it test hooks filtering and test flags.md>)

1. **Runner primitives — `test` / `describe` / `it` / `before` / `after` / `beforeEach` / `afterEach` and `t.todo`/`t.skip`** (when `describe` sugar helps vs flat `test`).
2. **Execution model — single process, per-file isolation, `node --test` discovery, `--test-name-pattern`, `--test-only`, and TAP/`--test-reporter` output.**
3. **Subtests — `await t.test` nesting and concurrency defaults (serial unless you fan out with `Promise.all`) and how failures surface.**

### [2.2. node:assert strict deepStrictEqual throws rejects and assertion ergonomics](<./sections/2. Node test runner and assertions/2.2. node assert strict deepStrictEqual throws rejects and assertion ergonomics.md>)

1. **`assert/strict` vs `assert` — strict poisoning of `==` (`deepStrictEqual` vs `deepEqual`; `strictEqual` vs `equal`) and why `assert/strict` is the stdlib contract.**
2. **The stdlib assertion palette — `ok` / `equal` / `deepStrictEqual` / `throws` / `rejects` / `match` / `doesNotThrow` and their async twins.**
3. **Messages and diffs — when an assertion prints a useful diff vs `AssertionError: false == true` (the ergonomic gap that matchers fill).**

### [2.3. Matchers snapshots and assertion libraries expect style and custom matchers](<./sections/2. Node test runner and assertions/2.3. Matchers snapshots and assertion libraries expect style and custom matchers.md>)

1. **`expect`-style — `expect(value).toEqual` / `toBe` / `toContain` / `toThrow` semantics and why `toBe` is `Object.is` not `===`.**
2. **Snapshots — file snapshots for large outputs, when they rot, and how `--update` gates edits.**
3. **Custom matchers — extending with asymmetric matchers (`expect.stringContaining`) and writing your own without a framework.**

---

## 3. Mocks and test doubles

### [3.1. Test doubles taxonomy dummy stub spy mock fake and when each fits](<./sections/3. Mocks and test doubles/3.1. Test doubles taxonomy dummy stub spy mock fake and when each fits.md>)

1. **Five doubles — dummy (fill arity), stub (canned answer), spy (record call), mock (record + expect), fake (working in-memory impl).**
2. **When each fits — stub for query replacement, spy for interaction probe, fake for `Fs`/`Clock`/`Queue` subsystem, mock rarely for protocol.**
3. **Behaviour vs state — interaction testing (`calledWith`) vs state assertion (`assert.equal(state, …)`) and why over-mocking couples tests to impl.**

### [3.2. Mocking in Node mock.fn mock.method timers fetch and modules](<./sections/3. Mocks and test doubles/3.2. Mocking in Node mock.fn mock.method timers fetch and modules.md>)

1. **`mock.fn` and `mock.method` — creating spies/mocks, `mock.calls`/`callCount`, `mock.restore`/`mock.reset`, and why every mock must be restored.**
2. **Timers and I/O — `mock.timers.enable` / `tick` / `runAll` vs `setTimeout` in tests; stubbing `global.fetch` and `node:fs` without leaking.**
3. **Module mocking — `mock.module` (experimental Node 22) vs manual `require.cache` seam vs dependency injection (which to prefer today).**

---

## 4. Async timing and flake control

### [4.1. Testing promises async await event emitters and rejections](<./sections/4. Async timing and flake control/4.1. Testing promises async await event emitters and rejections.md>)

1. **The async contract — every `Promise` must be returned or `await`ed or chained to `t`** (why `Promise.all` fan-out without `await` becomes an orphaned failure).
2. **Reject paths — `assert.rejects` vs `try { await p; assert.fail() }`, `t.after` for cleanup, and `unhandledRejection` as a test failure.**
3. **`EventEmitter` and streams — `once(emitter,'event')` / `on` + `AbortSignal` vs callback `done(err)` pattern.**

### [4.2. Determinism fake timers race timeouts retries and flake hygiene](<./sections/4. Async timing and flake control/4.2. Determinism fake timers race timeouts retries and flake hygiene.md>)

1. **Deterministic time — `mock.timers`/`FakeTimers` replaces `Date`/`setTimeout`/`setInterval` and why wall-clock `Date.now` must go through a `clock` seam.**
2. **`race`/`any`/`setTimeout` hygiene — timeout helpers with `AbortSignal` and why ad-hoc `sleep(100)` is a flake.**
3. **Retries are not fixes — flaky tests get quarantined, not retried, until the root `await`/`cleanup` leak is closed.**

---

## 5. Quality gates and tooling

### [5.1. Coverage with c8 v8 line branch function thresholds and lies](<./sections/5. Quality gates and tooling/5.1. Coverage with c8 v8 line branch function thresholds and lies.md>)

1. **How V8 coverage works — `c8` as the `node --experimental-test-coverage` predecessor, Istanbul mapping, and `/* c8 ignore next */`.**
2. **Line vs branch vs function — 100 % line with 0 % branch on a `?:` is still untested; threshold triage (`lines 90`, `branches 85`).**
3. **Coverage lies — getter that returns a constant can be "covered" without an assertion; uncovered `default` arms and `catch` paths.**

### [5.2. Linting formatting static analysis ESLint Prettier type checks npm scripts workspaces and CI gates](<./sections/5. Quality gates and tooling/5.2. Linting formatting static analysis ESLint Prettier type checks npm scripts workspaces and CI gates.md>)

1. **ESLint + Prettier — flat config (`eslint.config.js`), rules as bug filters (`no-undef`/`eqeqeq`/`no-floating-promises`), Prettier as formatter not linter.**
2. **`package.json` scripts and workspaces — `test`/`lint`/`format`/`prepare`, `engines`/`type`/`exports`, `workspaces` for monorepo linkage.**
3. **CI gates — `node --test` + `c8 --check-coverage` + `eslint` + `prettier --check` as the four-gate pipeline and why `npm ci` beats `npm install` in CI.**

---

## 6. Important points to remember (testing and tooling)

### [6.1. Testing and tooling checklist reflex rules mentors screen for](<./sections/6. Important points to remember/6.1. Testing and tooling checklist reflex rules mentors screen for.md>)

1. **The five reflexes — "pyramid?", "AAA?", "awaited?", "mock restored?", "covered branch?"** (table of when each fires).
2. **The review grep list** (`Math.random`/`Date.now` in test, `setTimeout` without `mock.timers`, `t.test` without `await`, `mock.fn` without `restore`, bare `try { await }` without `assert.rejects`).
3. **Boundary rule — one behavior per test, restore every mock, gate both lint and coverage.**

---

## 7. Common pitfalls → production bugs

### [7.1. Real production bugs caused by testing and tooling mistakes](<./sections/7. Common pitfalls to production bugs/7.1. Real production bugs caused by testing and tooling mistakes.md>)

1. **Unawaited `Promise.all` fan-out that swallows rejections — CI green, prod crash on the third shard.**
2. **Mock that leaks across tests (`mock.method` without `t.after` restore) — second test passes alone, fails in suite.**
3. **Snapshot that encodes time or id and flips every run — PRs drown in `--update` churn.**
4. **Coverage gate on line % that hides an uncovered `catch` — error path never exercised.**
5. **ESLint `eqeqeq` off + `== null` coercion gate missed — data bug ships behind a passing suite.**

---

## 8. Interview questions and answers (testing and tooling)

### [8.1. Common interview Q&A testing tooling and quality](<./sections/8. Interview questions and answers/8.1. Common interview QA testing tooling and quality.md>)

1. **The classics with mechanism-level answers** (pyramid vs diamond, `deepStrictEqual` vs `equal`, `mock.fn` vs `mock.method`, fake vs mock, `assert.rejects`, branch vs line coverage).
2. **What interviewers actually probe for** (narrating "AAA → isolation → async await → coverage branch → lint as gate" vs reciting "100 % coverage means correct").
3. **Grading guidance** (junior/mid/senior signals, red flags like "`setTimeout` in test is fine" or "coverage equals quality").

---

## 9. Overlaps to avoid (where this domain stops)

### [9.1. Boundaries what is covered elsewhere](<./sections/9. Overlaps to avoid/9.1. Boundaries what is covered elsewhere.md>)

1. **Error taxonomy, `throw`/`try`/`cause`/`AggregateError` and async error translation — [Error Handling and Debugging](<../15 Error Handling and Debugging/README.md>).**
2. **Event loop queens (`call stack`, `queueMicrotask`, timers/`nextTick`) and `Promise`/`async` desugaring — [Async Event Loop and Promises](<../13 Async Event Loop and Promises/README.md>).**
3. **Heap/GC reachability, `WeakRef`/`FinalizationRegistry`, and leak prevention — [Memory Management and GC](<../18 Memory Management and GC/README.md>).**
4. **JIT shapes/IC/polymorphism, clocks/harnesses, and bundle `tree-shaking` — [Performance and JIT Mindset](<../19 Performance and JIT Mindset/README.md>).**
5. **ESM/CJS live bindings, `package.json`/`exports` resolution deep dive — [Modules and Code Organization](<../14 Modules and Code Organization/README.md>) (here only the `scripts`/`workspaces`/`engines` contract and CI wiring).**
6. **`JSON`/`structuredClone` contracts and `Proxy`/`Reflect` metaprogramming — [JSON Serialization and Data Exchange](<../16 JSON Serialization and Data Exchange/README.md>) / [Metaprogramming](<../17 Metaprogramming Symbols Proxy Reflect/README.md>) (here only as test-surface objects).**

---

[← Back to JavaScript track](<../README.md>)
