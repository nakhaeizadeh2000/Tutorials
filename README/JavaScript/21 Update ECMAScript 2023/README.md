## Update ECMAScript 2023 (feature map + where it lives in this repo)

This domain is an **index** for ECMAScript 2023-era language features (14th edition, ratified 2023-06-13 — ECMA-262 14.0). Deep explanations live in the linked topical domains below; this file only routes you there. No concept is re-taught here; every entry is a one-line mention + link per the anti-boilerplate law (§5).

> Scope: ES2023 added four specification groups — **Array `findLast`/`findLastIndex`**, **Change Array by Copy** (`toReversed`/`toSorted`/`toSpliced`/`with`), **Symbols as weak collection keys** (`WeakMap`/`WeakSet`/`WeakRef`/`FinalizationRegistry`), and **Hashbang Grammar** (`#!`). Runtime support: Node.js 20 already ships `findLast`/`findLastIndex` (V8 10.8+); Change Array by Copy shipped in Node.js 20 (Chrome 110 / Firefox 115 / Safari 16.4 — July 2023 baseline); Symbols as `WeakMap`/`WeakSet`/`WeakRef`/`FinalizationRegistry` keys landed in V8 11.4 / Node.js 20.6+ (Chrome 109 / Safari 16.4); Hashbang is grammar-level (Node.js parses `#!/usr/bin/env node` at file start since Node 14 — browsers ignore it as unexecuted script prefix). All claims labeled "ES2023 era" below.

## 1. Array find from last — `findLast` and `findLastIndex`

### [1.1. Searching and testing — `findLast` / `findLastIndex` (predicate from the end)](<../08 Arrays/sections/4. Searching slicing and joining/4.1. Searching and testing indexOf lastIndexOf includes find findLast every some.md>)

1. **Why it exists** (finding the *last* match without `[...arr].reverse().find(...)` copy or manual reverse-loop index arithmetic — declarative and O(n) without allocation)
2. **Production guidance** (`findLast` returns the *value* or `undefined`; `findLastIndex` returns the *index* or `-1`; both visit indices in descending order and support the same optional `thisArg` as `find`/`findIndex`)
3. **TypedArray parity** (`TypedArray.prototype.findLast`/`findLastIndex` share the same algorithm — see [TypedArray preview](<../08 Arrays/sections/5. Transforming ordering and typed preview/5.3. ArrayBuffer TypedArray and DataView how they differ from Array.md>) for dense/no-hole vs Array semantics)

---

## 2. Change Array by Copy — `toReversed`, `toSorted`, `toSpliced`, `with`

### [2.1. Non-mutating copies: `toReversed` / `toSorted` / `toSpliced` / `with` (ES2023)](<../08 Arrays/sections/3. Mutation and its copy-era alternative/3.2. Non-mutating copies toReversed toSorted toSpliced and with ES2023.md>)

1. **Why it exists** (`reverse`/`sort`/`splice` mutate the receiver — a source of state-management bugs in reducers and shared data; copy-era twins return a *new* array and leave the original untouched)
2. **Production guidance** (`toSorted(compareFn?)` defaults to lexical `ToString` sort like `sort` but without mutation; `toSpliced(start, deleteCount, ...items)` mirrors `splice` signature without side effects; `with(index, value)` replaces one index non-destructively and throws `RangeError` on out-of-bounds; TypedArray has `toReversed`/`toSorted`/`with` but *no* `toSpliced` — use `slice`+concat pattern)
3. **When to copy vs mutate** (state containers / function purity / chained pipelines → copy; hot-loop in-place reordering where allocation would churn → mutate — same shallow-copy warning: nested refs still share)

---

## 3. Symbols as weak collection keys (`WeakMap` / `WeakSet` / `WeakRef` / `FinalizationRegistry`)

### [3.1. WeakMap / WeakSet / WeakRef / FinalizationRegistry — ES2023 adds non-registered `Symbol` as a valid weak key/value](<../09 Collections Map Set and Weak References/sections/3. Weak collections/3.1. WeakMap ephemeron keys non-iterability and use cases.md>)

1. **Why it exists** (`Object` and `Symbol` are both unique and unforgeable — non-registered `Symbol()` values are now admissible as weak keys so unique symbols can be memoized or tracked without stringifying; `WeakMap`/`WeakSet`/`WeakRef`/`FinalizationRegistry` all accept them — registered `Symbol.for("app:auth")` remains *not* allowed because the global registry is strongly held)
2. **Production guidance** (`weakMap.set(Symbol("ref"), value)` and `weakSet.add(Symbol("ref"))` and `new WeakRef(Symbol("ref"))` and `registry.register(obj, Symbol("ref"))` all work; `get`/`has`/`delete` via the *same* symbol identity only — `Symbol("x") !== Symbol("x")`; no `size`/iteration still — observation of liveness is still forbidden; see also [WeakSet object-only membership](<../09 Collections Map Set and Weak References/sections/3. Weak collections/3.2. WeakSet object-only membership and non-iterability.md>), [WeakRef semantics](<../09 Collections Map Set and Weak References/sections/4. Weak references and cleanup/4.1. WeakRef semantics deref and lifetime reality.md>), and [FinalizationRegistry cleanup](<../09 Collections Map Set and Weak References/sections/4. Weak references and cleanup/4.2. FinalizationRegistry cleanup and timing reality.md>) for the contracts that now accept symbols)
3. **WeakMap vs `Map` vs strong `Set` trade-off** (keep [Choosing the right collection](<../09 Collections Map Set and Weak References/sections/5. Choosing and performance/5.1. Choosing the right collection Map vs Object vs Set vs Array and Weak variants.md>) guidance: unique non-stringified keys + ephemeron lifetime → `WeakMap`/`WeakSet`; ordered deduplication → `Set`; stringified keys → plain object or `Map`)

---

## 4. Hashbang Grammar (`#!`)

### [4.1. Hashbang at the start of a file — executable scripts without a syntax error](<../01 Fundamentals and Mental Model/sections/1. What JavaScript is/1.1. From LiveScript to ECMAScript history editions and legacy quirks.md>)

1. **Why it exists** (executable CLI scripts start with `#!/usr/bin/env node`; before ES2023 that line was a `SyntaxError` when the file was loaded as a module — ES2023 makes `#!` a grammar token that the parser strips before execution, matching hosts that already tolerated it)
2. **Production guidance** (`#!` is valid *only* at the absolute start of the file before any other token — not inside a module, not after `"use strict"`; browsers parse a `#!` line as a comment-like prefix and ignore it; linters/formatters strip or preserve it based on `"type": "module"` vs `"commonjs"` target)
3. **How it was before / host reality** (Node.js tolerated `#!` via pre-parse stripping since v14 even before the spec — the ES2023 change standardizes that tolerance so direct `import "./cli.js"` no longer breaks on a hashbang-prefixed file; see [Transpilation/polyfills and baseline](<../01 Fundamentals and Mental Model/sections/3. Running JavaScript today/3.4. Transpilation polyfills and baseline strategy.md>) for Baseline targeting)

---

## 5. Overlaps to avoid (keep the repo navigable)

1. **Deep Array mechanics (exotic indices, `length`, holes, `sort` stability, TypedArray)** belong in [Arrays](<../08 Arrays/README.md>) — this index only notes the ES2023 deltas (`findLast*`, copy-era) and links there.
2. **SameValueZero/`Map`/`Set` ordering/performance and `WeakRef`/`FinalizationRegistry` use contract** belong in [Collections Map Set and Weak References](<../09 Collections Map Set and Weak References/README.md>) (here only the Symbol-key extension to `WeakMap`/`WeakSet`/`WeakRef`/`FinalizationRegistry`).
3. **`Hashbang` vs transpilation/baseline, engine vs runtime, stages/availability** belong in [Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) (here only the grammar token and host-file placement).
4. **`import`/`export` live bindings and module evaluation order** belong in [Modules and Code Organization](<../14 Modules and Code Organization/README.md>) (this index does not re-explain script vs module scope).
5. **`JSON`/`structuredClone` and `Symbol` as type** belong in [JSON Serialization and Data Exchange](<../16 JSON Serialization and Data Exchange/README.md>) / [Values, Types, and Coercion](<../03 Values Types and Coercion/README.md>) (here only as the key-type for `WeakMap`).

[← Back to JavaScript track](<../README.md>)
