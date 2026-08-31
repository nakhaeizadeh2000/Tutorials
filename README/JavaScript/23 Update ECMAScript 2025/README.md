## Update ECMAScript 2025 (feature map + where it lives in this repo)

This domain is an **index** for ECMAScript 2025-era language features (16th edition, ratified 2025-06-25 — ECMA-262 16.0). Deep explanations live in the linked topical domains below; this file only routes you there. No concept is re-taught here; every entry is a one-line mention + link per the anti-boilerplate law (§5).

> Scope: ES2025 added seven specification groups — **`Iterator` helpers** (`Iterator.from` + prototype `map`/`filter`/`take`/`drop`/`flatMap`/`reduce`/`toArray`/`forEach`/`some`/`every`/`find`), **`Set` methods** (`union`/`intersection`/`difference`/`symmetricDifference`/`isSubsetOf`/`isSupersetOf`/`isDisjointFrom`), **`RegExp.escape`**, **duplicate named capturing groups** + **inline RegExp modifiers** (`(?i:...)`/`(?-i:...)`/`(?ims-ims:...)`), **`Promise.try`**, **`Float16Array`** + `DataView.getFloat16`/`setFloat16` + `Math.f16round`, and **import attributes** (`with { type: "json" }`) + **JSON modules**. Runtime support: Iterator helpers + Set methods shipped in Node.js 22 (V8 12.4+ / Chrome 122+ / Safari 17+); `RegExp.escape` + duplicate groups + `Promise.try` in Node.js 22.6+ (V8 12.5–13+); inline modifiers `(?i:...)` in V8 12.6+ / Node 22.7+; `Float16Array`/`DataView` half-float + `Math.f16round` in Node.js 24 (V8 13+ / Chrome 135+); import attributes `with` + JSON `type: "json"` in Node.js 22 (ships `with`; `assert` deprecated since Node 20). All claims labeled "ES2025 era" below.

## 1. `Iterator` helpers — lazy pipelines without `Array.from`

### [1.1. Iterable vs iterator — `Iterator.from`, `map`/`filter`/`take`/`drop`/`flatMap`/`reduce`/`toArray`](<../10 Iterables Generators and Async Iteration/sections/1. Iterable and iterator protocols/1.1. Iterable vs iterator vs array-like and Symbol.iterator.md>)

1. **Why it exists** (iterators were iterable but had no `map`/`filter`/`reduce` — every pipeline forced `Array.from(iter)` eager copy or a manual `while(!done)` loop; ES2025 adds a global `Iterator` with lazy helpers that return new iterators, not arrays)
2. **Production guidance** (`Iterator.from(iterableOrIterator)` wraps any iterable-or-iterator as an `Iterator`; `iter.map(fn)`/`filter(pred)`/`flatMap(fn)`/`take(n)`/`drop(n)` return lazy `Iterator` helpers; `reduce`/`toArray`/`forEach`/`some`/`every`/`find` are *eager* consumers; all helpers close the source via `return()` on early exit — see [iterator closing](<../10 Iterables Generators and Async Iteration/sections/1. Iterable and iterator protocols/1.2. The iterator protocol next done value return throw and closing.md>) and [for-of closing](<../10 Iterables Generators and Async Iteration/sections/2. Consumption for-of spread and interop/2.1. for-of mechanics iteration closing and break throw.md>))
3. **When prototypal vs standalone** (prefer `Iterator.from(gen()).filter(...).map(...).toArray()` for lazy pipelines over `[...gen()].filter(...).map(...)` when `n` is large or infinite — the latter eagerly materializes; iterator helpers stay O(1) space per step — see [spread and Array.from](<../10 Iterables Generators and Async Iteration/sections/2. Consumption for-of spread and interop/2.2. Spread Array.from destructuring and interop with Map Set generators strings.md>) for eager vs lazy)

---

## 2. `Set` methods — set algebra as `Set.prototype` members

### [2.1. Set creations and uniqueness — `union` / `intersection` / `difference` / `symmetricDifference` / `isSubsetOf` / `isSupersetOf` / `isDisjointFrom`](<../09 Collections Map Set and Weak References/sections/2. Set deep dive/2.1. Set creation uniqueness SameValueZero and iteration.md>)

1. **Why it exists** (union/intersection/difference previously required manual iteration + `has` loop or Lodash; ES2025 adds seven `Set.prototype` methods that operate on any set-like (any object with `size`/`has`/`keys`) and honor `SameValueZero`)
2. **Production guidance** (`a.union(b)` / `a.intersection(b)` / `a.difference(b)` / `a.symmetricDifference(b)` return a **new `Set`**; `isSubsetOf`/`isSupersetOf`/`isDisjointFrom` return booleans; the `other` arg accepts any set-like (`Set`, `Map` via `keys`, custom `GetSetRecord`); `NaN` dedupes and `-0` ≡ `+0` per [SameValueZero](<../09 Collections Map Set and Weak References/sections/1. Map deep dive/1.1. Map creation SameValueZero insertion order and iteration.md>))
3. **Choosing helper vs hand-rolled** (multi-set composition → helpers; mutation-in-place or custom comparator → manual loop — keep [Set vs Array trade-offs](<../09 Collections Map Set and Weak References/sections/2. Set deep dive/2.2. Set operations and Array vs Set trade offs.md>) and [choosing the right collection](<../09 Collections Map Set and Weak References/sections/5. Choosing and performance/5.1. Choosing the right collection Map vs Object vs Set vs Array and Weak variants.md>) for cost framing; all new methods are O(n))

---

## 3. `RegExp.escape` — escaping user strings for safe pattern injection

### [3.1. RegExp creation — `RegExp.escape(string)` as the vetted escaper](<../11 Strings and Regular Expressions/sections/4. RegExp essentials/4.1. RegExp creation literals vs constructor flags and lastIndex state.md>)

1. **Why it exists** (manual `s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")` was inconsistent across engines and missed future syntax and `v`-mode escaping; `RegExp.escape` returns the *minimally escaped* string so `new RegExp(RegExp.escape(userInput))` matches `userInput` literally — the Perl/PHP/Python primitive finally standardized)
2. **Production guidance** (`RegExp.escape(s)` coerces `s` via `ToString`; escapes every character that could alter pattern semantics (including `]` inside `v` class and bare `/`); use it for every dynamic `new RegExp(..., "g")` / `split` / `replace` pattern — never inline a self-rolled `escapeRegExp` again — see [searching and matching](<../11 Strings and Regular Expressions/sections/4. RegExp essentials/4.2. Searching and matching match matchAll exec test search split replace.md>) for the `g`/`lastIndex` hazard that compounds injection bugs)
3. **Before vs after** (pre-ES2025: copy/pasted `escapeRegExp` utility with varying regex; now: single call `RegExp.escape` — forward-compatible with new `v` set notation and future syntax; guard with `typeof RegExp.escape === "function"` on Node < 22.14 / Chrome < 125)

---

## 4. `RegExp` grammar — duplicate named groups + inline modifier flags

### [4.1. Groups — duplicate `(?<name>...)` across alternatives (ES2025)](<../11 Strings and Regular Expressions/sections/5. Advanced RegExp/5.1. Groups named groups backreferences hasIndices and replacement patterns.md>)

1. **Why it exists** (named groups previously had to be unique per pattern — `/(?<year>\d{4})-\d{2}|(?<year>\d{4})\//` was a `SyntaxError`; but alternatives by definition leave only one branch matched so the name collision is harmless; ES2025 relaxes uniqueness to per-disjunction, so `(?<year>…)|(?<year>…)` is legal and `match.groups.year` yields whichever branch participated)
2. **Production guidance** (duplicate names allowed **only** in different `|` alternatives — same alternative still throws; backreference `\k<year>` and `groups.year` resolve to the *participating* group's match; `hasIndices` `d` groups follow the same rule — see [hasIndices](<../11 Strings and Regular Expressions/sections/5. Advanced RegExp/5.1. Groups named groups backreferences hasIndices and replacement patterns.md>) for `indices.groups.year` tuples)
3. **When to use** (parsing variants like `YYYY-MM` vs `MM-YYYY` vs log timestamps with one `groups.year` accessor instead of post-hoc `||` — keep [replacement patterns](<../11 Strings and Regular Expressions/sections/5. Advanced RegExp/5.1. Groups named groups backreferences hasIndices and replacement patterns.md>) for `$<year>` in `replace`)

### [4.2. Assertions — inline modifiers `(?i:...)`, `(?-i:...)`, `(?ims:...)` and `(?-ims:...)` (ES2025)](<../11 Strings and Regular Expressions/sections/5. Advanced RegExp/5.2. Assertions lookaround boundaries and unicode flags.md>)

1. **Why it exists** (`i`/`m`/`s` previously applied to the whole pattern — `/hello -i` was impossible without splitting into two regexes; ES2025 adds non-capturing modifier groups `(?i:foo)` and enable/disable `(?i-m:foo)` / `(?-i:foo)` scoping flags to that subpattern)
2. **Production guidance** (`(?i:...)` turns `i` on inside `...`; `(?-i:...)` turns `i` off; `(?ims:...)` / `(?-ims:...)` / `(?i-m:...)` enable/disable `i`/`m`/`s` independently; nested `(?i:(? -i:foo)bar)` inner wins; outside modifiers revert after the group — see [flags table](<../11 Strings and Regular Expressions/sections/4. RegExp essentials/4.1. RegExp creation literals vs constructor flags and lastIndex state.md>) for global `i`/`m`/`s` vs inline discipline)
3. **Before vs after** (pre-ES2025: `new RegExp("(?i)foo")` threw; simulated with two regexes or `/i` global that over-matched; now: `/(?i:bearer) (?-i:abc)/` matches `BEARER abc` but not `BEARER ABC` — test migration under both old literal and new inline to catch new scoping semantics)

---

## 5. `Promise.try` — call anything, always get a `Promise`

### [5.1. Promise states — `Promise.try(fn, ...args)` as the sync-throw-to-rejection wrapper](<../13 Async Event Loop and Promises/sections/3. Promises core/3.1. Promise states executor thenable assimilation and the job queue.md>)

1. **Why it exists** (`Promise.resolve().then(fn)` schedules an extra microtask and `new Promise(r=>r(fn()))` still doesn't catch sync throws before `then`; `Promise.try(fn, ...args)` calls `fn(...args)` *immediately*, wraps the return (thenable assimilation) or sync throw into a single `Promise` — the standardized Bluebird `Promise.try` / `try`/`catch`→rejection primitive)
2. **Production guidance** (`Promise.try(fn)` ≡ `() => { try{ return fn()} catch(e){ return Promise.reject(e)} }` but without the boilerplate; `Promise.try(fnWithArgs, arg1,arg2)` passes args positionally; use for uniform error channels in handler maps / plugin loaders / test runners — see [chaining and error propagation](<../13 Async Event Loop and Promises/sections/3. Promises core/3.2. Chaining then catch finally and error propagation.md>) and [async/await desugaring](<../13 Async Event Loop and Promises/sections/5. Async functions concurrency and migration/5.1. async await desugaring error handling and gotchas.md>) for why a bare `try/catch` around `fn()` still needs `Promise` wrapping)
3. **When `Promise.try` vs `async` wrapper** (`await Promise.try(fn)` and `(async()=>fn())()` both normalize throw→reject but `Promise.try` avoids the `async` microtask + `await` ordering nuance — see [microtasks vs macrotasks](<../13 Async Event Loop and Promises/sections/1. Event loop and the job queue/1.2. Microtasks vs macrotasks queueMicrotask and starvation.md>) for job-queue cost; prefer `async` only when you already need `await` inside)

---

## 6. `Float16Array` / `DataView` half-float / `Math.f16round` — half-precision numerics

### [6.1. ArrayBuffer and TypedArray — `Float16Array` + `getFloat16`/`setFloat16` (ES2025)](<../08 Arrays/sections/5. Transforming ordering and typed preview/5.3. ArrayBuffer TypedArray and DataView how they differ from Array.md>)

1. **Why it exists** (`Float32Array`/`Float64Array` have existed since ES2015 but ML/WebGPU/vertex buffers need *half* precision (1-5-10 sign/exponent/mantissa, 2 bytes) for bandwidth and VRAM — `Float16Array` gives typed-array semantics for `float16` and `DataView` gives endian-aware access)
2. **Production guidance** (`new Float16Array(buffer?, byteOffset?, length?)` — `BYTES_PER_ELEMENT === 2`; `DataView.prototype.getFloat16(byteOffset, littleEndian?)` / `setFloat16(offset, value, le?)` respect `littleEndian` and throw `RangeError` if `detached`/`out-of-bounds`; `Float16Array` shares `ArrayBuffer`/`SharedArrayBuffer` growth rules — see [resizable buffers](<../08 Arrays/sections/5. Transforming ordering and typed preview/5.3. ArrayBuffer TypedArray and DataView how they differ from Array.md>) for `resizable`/`growable` interaction; overflow → `Infinity`, underflow → subnormal/±0)
3. **Storage vs compute** (store as `float16` to move less data; compute in `float64` — round-trip via `Math.f16round` or `DataView` — and measure with [performance and JIT](<../19 Performance and JIT Mindset/README.md>) rather than micro-benchmarking half-float arithmetic in JS)

### [6.2. Math — `Math.f16round(x)` to round to `float16` (ES2025)](<../12 Numbers Dates Math and Temporal/sections/3. Math/3.1. Math object constants trigonometry logs and rounding.md>)

1. **Why it exists** (`Math.fround(x)` rounds to `float32`; `Math.f16round(x)` rounds to the nearest `float16` value (ties to even) so JS can simulate half-precision compute without moving through a `DataView` — the scalar twin to `Float16Array` storage)
2. **Production guidance** (`Math.f16round(NaN)` → `NaN` (preserves canonical payload), `±Infinity` preserved, `max 65504` clamps larger magnitudes to `Infinity`; use as `const h = Math.f16round(x); /* compute in f64 */` then store `view.setFloat16(off, h)` — see [Number model](<../12 Numbers Dates Math and Temporal/sections/1. Number model/1.1. Number primitives IEEE-754 NaN Infinity and negative zero.md>) for `Infinity`/`NaN` stickiness that composes with half-float)
3. **When to stay `float32`/`float64`** (general numeric code should stay `float64`; half-float is for interop with GPU/ML codecs and `ArrayBuffer` packing — the spec deliberately leaves `float16` arithmetic in `float64`, not as a JS operator)

---

## 7. Import attributes + JSON modules — `with { type: "json" }`

### [7.1. Dynamic import and meta — `import ... with { type: "json" }` (ES2025)](<../14 Modules and Code Organization/sections/4. Dynamic import and meta/4.2. import.meta import attributes and JSON modules.md>)

1. **Why it exists** (`import data from "./data.json" assert { type: "json" }` was stage-3 `assert`; `with` replaces it as the attribute keyword — `import ... with { type: "json" }` and `await import("./data.json", { with: { type: "json" } })` give hosts a statically analyzable MIME hint so JSON is fetched/parsed as module namespace, not executed as script)
2. **Production guidance** (static: `import cfg from "./cfg.json" with { type: "json" }` → `cfg` is the JSON namespace default (mirrors dynamic `m.default`); the `type` attribute is mandatory — bare `import "./data.json"` throws `SyntaxError` in compliant hosts; `with` supersedes `assert` (deprecated but still parsed in older tools) — see [specifiers and organization](<../14 Modules and Code Organization/sections/5. CommonJS interop and resolution/5.3. Specifiers package.json exports import maps and organization.md>) for `exports` mapping of JSON entry points)
3. **Host reality** (Node.js 22 parses `with { type: "json" }` for both static and dynamic import; bundlers/engines that still accept `assert` should be migrated — guard with syntax-feature detection, not runtime `try/catch` — JSON modules are *always* external via attributes; see [JSON data exchange](<../16 JSON Serialization and Data Exchange/sections/5. Beyond JSON structuredClone and data exchange/5.2. Data exchange patterns APIs NDJSON binary and base64.md>) for when raw `JSON.parse(fs.readFileSync)` remains the CJS path)

---

## 8. Overlaps to avoid (keep the repo navigable)

1. **Deep iterator protocol, generator `yield`/`yield*`, `for-of`/`for await...of` mechanics** belong in [Iterables Generators and Async Iteration](<../10 Iterables Generators and Async Iteration/README.md>) — this index only notes the ES2025 `Iterator` helpers delta.
2. **Deep `Set`/`Map` SameValueZero, insertion order, `WeakMap` ephemeron, and `structuredClone` vs JSON** belong in [Collections Map Set and Weak References](<../09 Collections Map Set and Weak References/README.md>) / [JSON Serialization](<../16 JSON Serialization and Data Exchange/README.md>) — this index only notes the seven `Set` set-algebra methods.
3. **`RegExp` creation, `lastIndex` state, `match`/`matchAll`/`replace`, `hasIndices`/`d`, `u` vs `v` unicode sets** belong in [Strings and Regular Expressions](<../11 Strings and Regular Expressions/README.md>) — this index only notes `escape`, duplicate named groups, and inline modifiers.
4. **Promise states, thenable assimilation, chaining/`catch`/`finally`, `async`/`await` desugaring, combinators `all`/`allSettled`/`any`/`race`/`withResolvers`** belong in [Async Event Loop and Promises](<../13 Async Event Loop and Promises/README.md>) — this index only notes `Promise.try`.
5. **`ArrayBuffer`/`TypedArray`/`DataView`/`SharedArrayBuffer` growth, resizable/transfer, `Math` trigonometry/log, and IEEE-754 `Number` model** belong in [Arrays](<../08 Arrays/README.md>) / [Numbers, Dates, Math, Temporal](<../12 Numbers Dates Math and Temporal/README.md>) — this index only notes `Float16Array`/`getFloat16`/`setFloat16`/`f16round`.
6. **`import`/`export` live bindings, evaluation order, cycles, CJS interop, and `package.json` `exports`/`imports`** belong in [Modules and Code Organization](<../14 Modules and Code Organization/README.md>) — this index only notes `with { type: "json" }` attribute syntax and JSON-module namespace shape.
7. **Heap/GC, JIT/IC/deopt, and error stacks** belong in [Memory Management](<../18 Memory Management and GC/README.md>) / [Performance and JIT Mindset](<../19 Performance and JIT Mindset/README.md>) / [Error Handling and Debugging](<../15 Error Handling and Debugging/README.md>) — not here.

[← Back to JavaScript track](<../README.md>)
