# Error Handling and Debugging

How JavaScript signals failure — the builtin `Error` family and when engines throw (`SyntaxError`/`ReferenceError`/`TypeError`/`RangeError`/`URIError`/`EvalError`), what `throw` really does and why `Error` objects win over strings, how `try`/`catch`/`finally` control flow and rethrow, the `cause` chain (`ES2022`) and `AggregateError`/`SuppressedError` (`ES2021`/`ES2024`), when to assert/guard vs `Result`-style branches instead of throwing, how sync throws vs promise rejections vs `async` throws differ and how `unhandledrejection`/`uncaughtException` surface, and the debugging toolkit (`console` levels, `debugger`, `Error.stack`, `prepareStackTrace`, source maps, Node inspector/DevTools, async stacks) — with the checklist and production bugs mentors screen for.

## 0. Prerequisites

[Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) for [parse vs runtime errors and strict mode](<../01 Fundamentals and Mental Model/sections/3. Running JavaScript today/3.3. Strict mode sloppy mode and modern defaults.md>) and [JIT stack and single thread](<../01 Fundamentals and Mental Model/sections/2. How JavaScript executes/2.1. Parse bytecode JIT pipeline and single-threaded execution.md>); [Language Basics](<../02 Language Basics/README.md>) for [equality loose vs strict](<../02 Language Basics/sections/3. Operators/3.2. Equality loose vs strict and when either is safe.md>); [Values Types and Coercion](<../03 Values Types and Coercion/README.md>) for [primitive vs object and `instanceof` branding](<../03 Values Types and Coercion/sections/1. The value model/1.1. Eight types two families primitives vs objects.md>); [Variables Scope and Closures](<../04 Variables Scope and Closures/README.md>) for [TDZ before `catch` and scope chain](<../04 Variables Scope and Closures/sections/1. Declarations and bindings/1.2. Temporal dead zone why early access throws.md>) and [closures and GC reachability](<../04 Variables Scope and Closures/sections/3. Closures/3.1. Closures functions that remember their birth environment.md>); [Functions Deep Dive](<../05 Functions Deep Dive/README.md>) for [call-site rules and stack depth `RangeError`](<../05 Functions Deep Dive/sections/3. this binding/3.1. Call-site rules default implicit explicit new and strict mode.md>) and [recursion stacks and `RangeError`](<../05 Functions Deep Dive/sections/4. First-class and execution patterns/4.3. Recursion stacks and tail-call reality.md>); [Objects in Depth](<../06 Objects in Depth/README.md>) for [property descriptors `writable/configurable`](<../06 Objects in Depth/sections/2. Properties and descriptors/2.1. Data vs accessor descriptors and attribute defaults.md>); [Prototypes and Classes](<../07 Prototypes and Classes/README.md>) for [class `extends Error` and brand checks](<../07 Prototypes and Classes/sections/3. Class syntax/3.2. Extends and super chain wiring and obligations.md>); [Async Event Loop and Promises](<../13 Async Event Loop and Promises/README.md>) for [promise states and thenable assimilation](<../13 Async Event Loop and Promises/sections/3. Promises core/3.1. Promise states executor thenable assimilation and the job queue.md>) and [chaining `then`/`catch`/`finally`](<../13 Async Event Loop and Promises/sections/3. Promises core/3.2. Chaining then catch finally and error propagation.md>) and [combinators `all`/`allSettled`/`any`/`race`](<../13 Async Event Loop and Promises/sections/4. Promise combinators and utilities/4.1. Promise.all and allSettled parallel aggregation.md>) and [async desugaring and concurrency](<../13 Async Event Loop and Promises/sections/5. Async functions concurrency and migration/5.1. async await desugaring error handling and gotchas.md>); [Iterables Generators and Async Iteration](<../10 Iterables Generators and Async Iteration/README.md>) for [generator `throw`/`return`](<../10 Iterables Generators and Async Iteration/sections/3. Generators/3.3. Communicating with generators next throw return.md>); [Modules and Code Organization](<../14 Modules and Code Organization/README.md>) for [evaluation order and top-level `await` blocking](<../14 Modules and Code Organization/sections/3. Evaluation and circular dependencies/3.1. Evaluation order single evaluation and hoisting.md>).

---

## 1. Error taxonomy

### [1.1. Built-in Error types and when engines throw them](<./sections/1. Error taxonomy/1.1. Built-in Error types and when engines throw them.md>)

1. **Native hierarchy — `Error` base and its seven children** (how `SyntaxError`/`ReferenceError`/`TypeError`/`RangeError`/`URIError`/`EvalError`/`AggregateError` inherit; `name`/`message` shape).
2. **When the engine throws — parse vs early vs runtime `throw`** (what `SyntaxError` before evaluation, `ReferenceError` on missing binding/TDZ, `TypeError` on illegal operation, `RangeError` on bounds/stack, `URIError` on bad `decodeURI`).
3. **Instance checks — `instanceof Error` vs `err.name ===` and cross-realm pitfalls** (realm-safe `Error.isError` ES2025; `instanceof` fails across `vm`/`iframe`; why code `ERR_*` matters more).
4. **Properties engines actually set — `name`/`message`/`stack`/`cause` and Node `code`** (what is spec vs V8/Node extension; `stack` not in ECMA-262, `cause` standardized 2022).

### [1.2. Custom errors cause chaining and AggregateError](<./sections/1. Error taxonomy/1.2. Custom errors cause chaining and AggregateError.md>)

1. **Custom `extends Error` — correct subclass discipline (call `super`, set `name`, preserve `cause`)** (why `super(message, {cause})` not `this.cause =`; fixing `name`; `Error.captureStackTrace` exclusion).
2. **`cause` chaining (ES2022) — the stdlib error chain** (how `new Error("high", {cause: low})` wires `.cause`; walking chains; `cause` vs `innerError` legacy).
3. **`AggregateError` (ES2021) — one error holding many (`errors` array)** (how `Promise.any` rejects with it; manual `new AggregateError([...], msg)` for batch validation; `cause` vs `errors` distinction).
4. **`SuppressedError` and `using` (ES2024) — disposing throws without losing the primary error** (`Explicit Resource Management` `using` + `Symbol.dispose`; suppressed chain on cleanup throw).

---

## 2. Throwing and catching

### [2.1. throw semantics what is throwable and why always Error](<./sections/2. Throwing and catching/2.1. throw semantics what is throwable and why always Error.md>)

1. **Anything can be thrown — but only `Error` preserves a stack and chain** (`throw "oops"` vs `throw new Error("oops")`; `throw null`/`throw 42` loses `stack`/`cause`/`name`).
2. **Throw is a statement — expression position, `throw` vs `Error` construction, and ASI hazard** (`throw` must not newline; `new Error` without `throw` does not throw).
3. **Non-Error throws break tooling — stacks, `instanceof`, reporters, and `cause` expect `Error`** (why Sentry/logging, `catch (e instanceof Error)` fails on strings; `Error.isError` guard).

### [2.2. try catch finally mechanics rethrow and nesting](<./sections/2. Throwing and catching/2.2. try catch finally mechanics rethrow and nesting.md>)

1. **`try`/`catch`/`finally` control flow — who runs when, and what wins** (`finally` always runs; `return`/`throw` inside `try`/`catch` defers to `finally`; `finally` return/throw overrides).
2. **Catch binding — optional `catch {}` (ES2019), `catch (e)` scope, and rethrow discipline** (why `catch (e) { if (!expected) throw e; }` must rethrow unknowns; filtering by type).
3. **Nesting and `finally` hygiene — cleanup vs swallowing, and `using` vs `try/finally`** (why swallowed errors hide root cause; `finally` must not throw unless preserving original via `cause`/`SuppressedError`).

---

## 3. Defensive patterns

### [3.1. Cause wrapping context preservation and suppressed errors](<./sections/3. Defensive patterns/3.1. Cause wrapping context preservation and suppressed errors.md>)

1. **Wrap low-level causes — `throw new AppError(msg, {cause: low})` preserves chain** (how to add context without erasing original stack; walking `err.cause` to root).
2. **When to wrap vs rethrow bare vs aggregate — the decision table** (wrap on crossing boundary, rethrow if caller handles, aggregate on fan-out, suppress on dispose).
3. **Suppressed on cleanup — `using`/`Symbol.dispose` wiring `SuppressedError`** (why `finally { close(); }` that throws loses the primary error without suppression; ES2024 solution).

### [3.2. Assertions guards Result Either and when not to throw](<./sections/3. Defensive patterns/3.2. Assertions guards Result Either and when not to throw.md>)

1. **Invariants — `assert`/`invariant` for programmer errors that should never be caught** (dev vs prod strip; `console.assert` is not an `assert` that throws).
2. **Guards vs throws — validate at boundary (`if (!ok) throw`) vs recoverable paths** (user input validates with early return; internal state violation throws; exhaustive `switch` with `assertNever`).
3. **Result/Either style — `{ok, value/error}` or discriminated union instead of exceptions for expected failures** (when exceptions hide control flow; Go/Rust-style `Result` for hot paths; interop with `throw` at boundary).

---

## 4. Async error propagation

### [4.1. Sync throws vs promise rejections vs async function throws](<./sections/4. Async error propagation/4.1. Sync throws vs promise rejections vs async function throws.md>)

1. **Sync throw vs async reject — thrown sync never becomes a rejection unless awaited** (`try/catch` catches `throw`, not `Promise.reject`; `async` function `throw` becomes `reject`; `new Promise((_,r)=>r(err))` vs `throw`).
2. **`await` rethrow translation — `await rejected` throws at suspension point** (why `try { await p } catch(e)` works but `try { p } catch` does not; `return await` vs `return p` inside `try`).
3. **Callback-to-promise bridges — `promisify`, `withResolvers`, and thenable assimilation throwing** (`throw` inside `then` handler rejects the chained promise; `throw` inside executor rejects synchronously).

### [4.2. Unhandled rejections AggregateError in combinators and async stack hygiene](<./sections/4. Async error propagation/4.2. Unhandled rejections AggregateError in combinators and async stack hygiene.md>)

1. **`unhandledrejection` vs `uncaughtException` — where orphaned rejects go (browser `window`, Node `process`; `rejectionHandled` late handler)** (why every `Promise` needs a consumer; Node warning vs crash with `--unhandled-rejections=strict`).
2. **Combinator error semantics — `all` fail-fast, `allSettled` never rejects, `any` aggregates, `race` first-settled** (which combinator discards context and when to use `AggregateError` explicitly).
3. **Async stack hygiene — `await` preserves cause chains; parallel `Promise.all` loses per-task stacks without `cause`** (how to attach `cause` per task + aggregate; microtask queue ordering note linking to domain 13).

---

## 5. Debugging toolkit

### [5.1. Console toolkit debugger breakpoints and stepping](<./sections/5. Debugging toolkit/5.1. Console toolkit debugger breakpoints and stepping.md>)

1. **Console levels — `log`/`info`/`warn`/`error`/`debug`/`trace`/`table`/`group`/`time`/`count`** (when each logs, filtering levels in DevTools/Node; `console.trace` prints a stack without throwing).
2. **`debugger` statement, `break`/`conditional` breakpoints, and `step` vs `stepOver`** (how `debugger` pauses with inspector attached; conditional `x > 10` break; blackboxing).
3. **Watch, scope, and evaluate — call stack, closure scope, `watch` expressions, and live edit** (why paused scope shows TDZ bindings as unavailable).

### [5.2. Stack traces Error.stack prepareStackTrace and async stacks](<./sections/5. Debugging toolkit/5.2. Stack traces Error.stack prepareStackTrace and async stacks.md>)

1. **`Error.stack` is V8-format — frames, `at fn (file:line:col)`, and what `cause` stacks do not include** (`stack` is non-standard but de-facto; `cause` chain has separate stacks in Node).
2. **Customizing stacks — `Error.captureStackTrace(target, ctor)` and `Error.prepareStackTrace`** (how `captureStackTrace` trims internal frames; `prepareStackTrace` returns structured `CallSite[]`).
3. **Async stacks — `await` chains stitch stacks with `--async-stack-traces` and `cause`** (why plain `Promise.then` loses sync caller without `await`; `--enable-source-maps` interaction).

### [5.3. Source maps Node inspector DevTools workflow and flags](<./sections/5. Debugging toolkit/5.3. Source maps Node inspector DevTools workflow and flags.md>)

1. **Source maps — `//# sourceMappingURL=` and Node `--enable-source-maps` / `SourceMap` support** (how transpiled/bundled code maps to original lines; inline vs external maps).
2. **Node inspector — `node --inspect`/`--inspect-brk`, `chrome://inspect`, `vscode` attach, `node:inspector`** (break on first line, `SIGUSR1`; `process._debugProcess` legacy).
3. **DevTools workflow — breakpoints vs `debugger`, `logpoints`, `blackbox`, `XHR/fetch` breakpoints, Node `--watch` and `--trace-warnings`** (when each accelerates triage vs noise).

---

## 6. Important points to remember (error handling)

### [6.1. Error handling checklist reflex rules mentors screen for](<./sections/6. Important points to remember/6.1. Error handling checklist reflex rules mentors screen for.md>)

1. **The five reflexes — always `Error`, always `cause`, handle `finally` return, handle `unhandledrejection`, print stack** (table of when each reflex fires).
2. **The review grep list** (`throw "`/`throw 42`/`throw null`, bare `catch {}` swallowing, `finally { return`, `new Error(msg)` without `{cause}`, `all` without `catch`, missing source-map flag).
3. **Boundary rule — wrap at module boundary, rethrow unknown, aggregate on fan-out** (one-sentence rule per site).

---

## 7. Common pitfalls → production bugs

### [7.1. Real production bugs caused by error handling mistakes](<./sections/7. Common pitfalls to production bugs/7.1. Real production bugs caused by error handling mistakes.md>)

1. **String throw that erases the stack — `throw "not found"` breaks Sentry and `instanceof`** (logs lose file:line, grouping fails).
2. **`finally` return that swallows the original throw — `try { throw A } finally { return B }` loses `A`** (silent success with wrong value).
3. **Unawaited `map(async` without `await all` and `any` vs `all` misuse — orphan rejects + `AggregateError` misread** (health-check fan-out example).
4. **Lost `cause` and unmapped stack — rethrow without `{cause}` + missing `--enable-source-maps` leaves on-call blind** (root cause hidden on minified line 1:12345).

---

## 8. Interview questions and answers (error handling)

### [8.1. Common interview Q&A error handling debugging and stacks](<./sections/8. Interview questions and answers/8.1. Common interview QA error handling debugging and stacks.md>)

1. **The classics with mechanism-level answers** (`cause` chain vs wrapping, `AggregateError`/`SuppressedError`, `finally` precedence, `async` throw vs reject, `stack` customization).
2. **What interviewers actually probe for** (narrating `throw` vs `reject` translation + `using` suppression vs reciting `try/catch` folklore).
3. **Grading guidance** (junior/mid/senior signals, red flags like "`throw` works like `return` inside `finally`" or "`Promise` rejects are caught by `try/catch`").

---

## 9. Overlaps to avoid (where this domain stops)

### [9.1. Boundaries what is covered elsewhere](<./sections/9. Overlaps to avoid/9.1. Boundaries what is covered elsewhere.md>)

1. **Event loop queues, promise states, and combinators — [Async Event Loop and Promises](<../13 Async Event Loop and Promises/README.md>).**
2. **Generators `yield throw`/`return`, async generators, and iteration closing — [Iterables Generators and Async Iteration](<../10 Iterables Generators and Async Iteration/README.md>).**
3. **Scope/TDZ, closures, `this` parameter handling — [Variables Scope and Closures](<../04 Variables Scope and Closures/README.md>), [Functions Deep Dive](<../05 Functions Deep Dive/README.md>).**
4. **Modules evaluation and circular `ReferenceError` — [Modules and Code Organization](<../14 Modules and Code Organization/README.md>).**
5. **Testing assertions (`expect().toThrow`, `assert.throws`) and linting/tooling — Testing and Tooling domain (when it lands).**

---

[← Back to JavaScript track](<../README.md>)
