## Update ECMAScript 2024 (feature map + where it lives in this repo)

This domain is an **index** for ECMAScript 2024-era language features (15th edition, ratified 2024-06-18 — ECMA-262 15.0). Deep explanations live in the linked topical domains below; this file only routes you there. No concept is re-taught here; every entry is a one-line mention + link per the anti-boilerplate law (§5).

> Scope: ES2024 added six specification groups — **`Object.groupBy`/`Map.groupBy`**, **`Promise.withResolvers`**, **resizable `ArrayBuffer` / `SharedArrayBuffer` + `transfer`**, **`String.prototype.isWellFormed`/`toWellFormed`**, **`RegExp` `v` flag (unicodeSets)**, and **`Atomics.waitAsync`**. Runtime support: Node.js 20 already ships `isWellFormed`/`toWellFormed` (V8 11.1+), `v` flag and resizable `ArrayBuffer` (V8 11.1+ / 11.3+); `Object.groupBy`/`Map.groupBy` shipped in Node.js 21 (Chrome 117 / Firefox 119 / Safari 17.4); `ArrayBuffer.prototype.transfer`/`transferToFixedLength`/`detached` and `SharedArrayBuffer.prototype.grow`/`growable` landed in Node.js 21–22 (Chrome 114+ / Safari 17.4+); `Promise.withResolvers` in Node.js 22 (Chrome 119 / Firefox 121 / Safari 17.4); `Atomics.waitAsync` available since Node.js 16 (Chrome 90+ / Safari 16.4+ — the ES2024 change is specification alignment, not new engine work). All claims labeled "ES2024 era" below.

## 1. `Object.groupBy` and `Map.groupBy` — native grouping without `reduce`

### [1.1. Map creation — `Map.groupBy` / `Object.groupBy` as factories (grouping by callback)](<../09 Collections Map Set and Weak References/sections/1. Map deep dive/1.1. Map creation SameValueZero insertion order and iteration.md>)

1. **Why it exists** (grouping an iterable by `callbackfn(value, index)` previously required a manual `reduce` — object accumulator, key coercion, missing-key init — or Lodash; native `groupBy` does it in one call with a shared `GroupBy` abstract operation)
2. **Production guidance** (`Object.groupBy(items, cb)` returns a *null-prototype* object (`Object.create(null)`, no inherited `toString`/`hasOwnProperty`); `Map.groupBy(items, cb)` returns a `Map` that preserves non-string keys (objects, symbols, `NaN` via SameValueZero); `cb` returning `undefined`/`null`/symbol still groups correctly — the former is `String(undefined)` key vs the latter identity-keyed in the `Map` variant)
3. **Choosing which variant** (string/symbol-serializable buckets → `Object.groupBy`; object/symbol identity buckets or iterative downstream → `Map.groupBy`; both preserve insertion order of first appearance — see [Choosing the right collection](<../09 Collections Map Set and Weak References/sections/5. Choosing and performance/5.1. Choosing the right collection Map vs Object vs Set vs Array and Weak variants.md>) for the broader matrix)

---

## 2. `Promise.withResolvers` — the deferred pattern without the executor anti-pattern

### [2.1. Promise combinators — `Promise.withResolvers` deferred `promise`/`resolve`/`reject`](<../13 Async Event Loop and Promises/sections/4. Promise combinators and utilities/4.2. Promise.race any and withResolvers first-wins and deferred.md>)

1. **Why it exists** (previously you had to capture `resolve`/`reject` via `let` outside `new Promise((res, rej) => ...)` — the "deferred" or executor anti-pattern — to settle a promise from outside its construction scope; `withResolvers()` returns `{ promise, resolve, reject }` as a single atomic triple, with no scoping dance)
2. **Production guidance** (`const { promise, resolve, reject } = Promise.withResolvers()` then `resolve(value)` / `reject(reason)` from event handlers, callback bridges, or test harnesses; `promise` is a fresh pending `Promise` — chaining/settling semantics are identical to `new Promise`; use `AbortSignal` to avoid leaking the deferred when callers abandon it — see [async `await` desugaring](<../13 Async Event Loop and Promises/sections/5. Async functions concurrency and migration/5.1. async await desugaring error handling and gotchas.md>) for `await` interaction)
3. **When to use vs `new Promise`** (external control (bridging callback/stream → promise), one-shot coordination, `withResolvers` wins; simple wrapping where executor does all work → `new Promise` is clearer — same "when not to promisify" rule as [callback migration](<../13 Async Event Loop and Promises/sections/5. Async functions concurrency and migration/5.3. Callback to promise migration and interop.md>))

---

## 3. Resizable `ArrayBuffer` and `transfer` — grow, shrink, and move ownership

### [3.1. ArrayBuffer, TypedArray, and DataView — resizable buffers and zero-copy transfer (ES2024)](<../08 Arrays/sections/5. Transforming ordering and typed preview/5.3. ArrayBuffer TypedArray and DataView how they differ from Array.md>)

1. **Why it exists** (`ArrayBuffer` was fixed-length — growing a streaming buffer meant allocating a new `ArrayBuffer` and copying; ES2024 adds *resizable* buffers (`new ArrayBuffer(byteLength, { maxByteLength })`) that resize in place via `buffer.resize(newLength)` and transferable buffers that move ownership without copying via `buffer.transfer(newLength?)` / `buffer.transferToFixedLength()` + `buffer.detached` / `buffer.resizable` / `buffer.maxByteLength`; `SharedArrayBuffer` gains analogous `growable`/`maxByteLength`/`grow(newLength)` for shared memory — all designed for in-place virtual-memory growth where the engine can reserve address space up front)
2. **Production guidance** (`maxByteLength` caps growth — `resize()` beyond it throws `RangeError`; `transfer()` detaches the source (`source.detached === true`) and may truncate/extend; `transferToFixedLength()` returns a *fixed-length* buffer (`resizable === false`); resizable `TypedArray` views auto-track the new length; `SharedArrayBuffer` resizable is *growable* only (never shrinks) — `sab.grow(newLength)` and `sab.growable`; `DataView` over a resizable buffer sees the updated `byteLength` on next access — see [Numbers / TypedArray boundaries](<../12 Numbers Dates Math and Temporal/README.md>) for numeric limits and `maxByteLength` sizing recommendation ≤1 GiB per spec guidelines)
3. **Before vs after** (pre-ES2024: `new Uint8Array(old.byteLength + extra)` + `set()` copy for growth and `structuredClone`/`postMessage` transfer as the only ownership transfer; now: `buffer.resize(buffer.byteLength + extra)` or `buffer.transfer()` zero-copy where the engine implements virtual-memory reservation — measure with [Memory Management](<../18 Memory Management and GC/README.md>) heap tools, not micro-benchmarks)

---

## 4. `String.prototype.isWellFormed` and `toWellFormed` — well-formedness without `try/catch`

### [4.1. String primitives — `isWellFormed` / `toWellFormed` (ES2024) and lone surrogates](<../11 Strings and Regular Expressions/sections/1. String model/1.1. String primitives immutability UTF-16 and well-formedness.md>)

1. **Why it exists** (strings are UTF-16 code-unit sequences that may contain *lone surrogates* (`\uD800` without `\uDC00` etc.) — previously detecting/fixing them required a `try { encodeURI(s) }` throw or a regex; ES2024 adds direct `s.isWellFormed()` (boolean) and `s.toWellFormed()` (replaces each lone surrogate with U+FFFD) — the only string methods that inspect well-formedness, and the reason `encodeURI`/`JSON.stringify` may throw or repair)
2. **Production guidance** (`isWellFormed()` guards before `encodeURI`/`TextEncoder`/`Intl` which throw or behave unexpectedly on lone surrogates; `toWellFormed()` is the *sanitize* step for logging / `postMessage` / `structuredClone` boundaries where a replacement character is acceptable; `length`/`split("")` vs `Array.from`/`for-of` vs `Intl.Segmenter` counts are unchanged — see [indexing and iteration](<../11 Strings and Regular Expressions/sections/1. String model/1.2. Indexing length and iteration code units vs code points vs graphemes.md>) for the 4/2/1 ladder on `"🇫🇷"` / `"👩‍🚀"`)
3. **When to branch vs sanitize** (interop boundary where malformed strings must be rejected → `if (!s.isWellFormed()) throw`; display/storage where data must survive → `s = s.toWellFormed()` before serialize — same framing as [Metaprogramming `toStringTag`](<../17 Metaprogramming Symbols Proxy Reflect/sections/4. Metaprogramming customization/4.1. Customizing coercion toPrimitive toStringTag hasInstance and match hooks.md>) for protocol hooks that inspect string identity)

---

## 5. `RegExp` `v` flag (unicodeSets) and `Atomics.waitAsync` — text sets and async shared-memory wait

### [5.1. RegExp `v` flag — unicodeSets, set notation, and strings as sets](<../11 Strings and Regular Expressions/sections/5. Advanced RegExp/5.2. Assertions lookaround boundaries and unicode flags.md>)

1. **Why it exists** (`u` flag handled single code points with `\p{...}` but character classes were single-point sets — no set difference/intersection, no multi-code-point string literals; `v` (ES2024, superset of `u`) adds set-notation `--` (difference), `&&` (intersection), `\q{...}` (strings-as-atoms), and Unicode property of strings `\p{...}` so patterns like `[\p{Script=Greek}--[α-ω]]` and `[\q{a|bc|def}]` are possible — with stricter escaping (unlike `u`, `v` disallows bare `/` inside `[]` without escaping))
2. **Production guidance** (`new RegExp("...", "v")` implies `unicode` — `u` and `v` are mutually exclusive (`SyntaxError` if both); `v` class ranges are Unicode-aware and reject invalid ranges early; combine with `g`/`y`/`d`/`m`/`i` as before — the [flags table](<../11 Strings and Regular Expressions/sections/4. RegExp essentials/4.1. RegExp creation literals vs constructor flags and lastIndex state.md>) now documents `v` as the unicodeSets successor to `u`; prefer `v` for new patterns that need set operations, keep `u` for backwards-compatible single-point patterns)
3. **Before vs after** (pre-ES2024: simulate set difference with lookahead/multiple passes or external libraries; now: single `v` pattern does it in the engine — test under both `u` and `v` in migration to catch new strict-escaping `SyntaxError` on patterns that passed under `u`)

### [5.2. `Atomics.waitAsync` — non-blocking wait on `SharedArrayBuffer` locations](<../13 Async Event Loop and Promises/sections/1. Event loop and the job queue/1.1. Call stack run-to-completion and the event loop.md>)

1. **Why it exists** (`Atomics.wait` blocks the calling thread until a `SharedArrayBuffer` `Int32` location changes — forbidden on the main thread in browsers because it blocks rendering and the event loop; `waitAsync` returns `{ async: boolean, value: Promise }` so the event loop can yield — `value` fulfills with `"ok"` / `"not-equal"` / `"timed-out"` without blocking, making shared-memory coordination usable on the main thread and in `async`/`await` flows)
2. **Production guidance** (`await Atomics.waitAsync(typedArray, index, expectedValue, timeout?).value` inside workers or main thread; check `.async` — if `false` the wait resolved synchronously (`"not-equal"` or already `"timed-out"` and `value` is already fulfilled); pair `waitAsync` with `Atomics.notify`/`Atomics.store` on the writer side; for Node.js `worker_threads` the promise integrates with the libuv event loop, not a busy spin — see [microtasks vs macrotasks](<../13 Async Event Loop and Promises/sections/1. Event loop and the job queue/1.2. Microtasks vs macrotasks queueMicrotask and starvation.md>) for why `waitAsync` jobs drain as microtasks, unlike `wait` which never yields)
3. **Before vs after** (pre-ES2024: only blocking `Atomics.wait` (workers only on the main-thread path) plus `postMessage` fallback; now: `waitAsync` enables async shared-memory patterns in the same style as [debounce/throttle yielding](<../13 Async Event Loop and Promises/sections/2. Timers and scheduling/2.2. Scheduling patterns debounce throttle and yielding.md>) — still explicit memory ordering (`Atomics` semantics apply), still requires `SharedArrayBuffer` + appropriate headers (`Cross-Origin-Isolated` in browsers))

---

## 6. Overlaps to avoid (keep the repo navigable)

1. **Deep `Map`/`Set` SameValueZero, ordering, and `WeakRef`/`FinalizationRegistry` contracts** belong in [Collections Map Set and Weak References](<../09 Collections Map Set and Weak References/README.md>) — this index only notes the `groupBy` delta.
2. **Promise states, `async`/`await` desugaring, `all`/`allSettled`/`any`/`race`, and module TLA** belong in [Async Event Loop and Promises](<../13 Async Event Loop and Promises/README.md>) — this index only notes `withResolvers` as a deferred-construction twin to `new Promise`.
3. **`ArrayBuffer`/`TypedArray`/`DataView`/`SharedArrayBuffer` typed, dense, and no-hole semantics** belong in [Arrays](<../08 Arrays/README.md>) (and [Numbers, Dates, Math, Temporal](<../12 Numbers Dates Math and Temporal/README.md>) for `maxByteLength` limits) — this index only notes the resizable/`transfer`/`grow` delta.
4. **UTF-16 surrogate pairs, lone surrogates, and `Intl.Segmenter`/`normalize`** belong in [Strings and Regular Expressions](<../11 Strings and Regular Expressions/README.md>) — this index only notes `isWellFormed`/`toWellFormed` as the ES2024 well-formedness pair (the broader well-formedness story is in §1.1 there).
5. **`RegExp` creation, `lastIndex` mutation, `match`/`matchAll`/`replace` families, and `u` vs `v` discipline** belong in [Strings and Regular Expressions](<../11 Strings and Regular Expressions/README.md>) — this index only notes `v` as unicodeSets successor; `Atomics` blocking vs async wait belongs in [Async Event Loop](<../13 Async Event Loop and Promises/README.md>), not in strings.
6. **Heap layout, GC pressure, `ArrayBuffer` transfer cost, `structuredClone` vs `JSON`** belong in [Memory Management](<../18 Memory Management and GC/README.md>) / [JSON Serialization](<../16 JSON Serialization and Data Exchange/README.md>) — this index does not re-explain allocation modes.

[← Back to JavaScript track](<../README.md>)
