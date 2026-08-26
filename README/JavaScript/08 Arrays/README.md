# Arrays

Arrays as exotic indexed objects: what the engine really stores (indexed properties + `length`), how holes differ from `undefined`, which mutations resize and re-index, which modern copies don't, how searching/testing/slicing/transforming/ordering methods differ in hole and sparsity handling, and why `sort` stability and `TypedArray` are separate worlds — with the checklist and production bugs mentors screen for.

## 0. Prerequisites

[Objects in Depth](<../06 Objects in Depth/README.md>) for [creation patterns](<../06 Objects in Depth/sections/1. Object creation and literals/1.2. Creation patterns literal Object create and constructors.md>), [property descriptors](<../06 Objects in Depth/sections/2. Properties and descriptors/2.1. Data vs accessor descriptors and attribute defaults.md>) and [enumeration order](<../06 Objects in Depth/sections/2. Properties and descriptors/2.3. Enumerability enumeration order and for-in mechanics.md>); [Values, Types, and Coercion](<../03 Values Types and Coercion/README.md>) for [ToString coercion of keys](<../03 Values Types and Coercion/sections/2. The conversion algorithms/2.2. ToString and ToNumber the exact conversion tables.md>) and [SameValueZero vs strict equality](<../03 Values Types and Coercion/sections/3. Coercion at work/3.1. Loose equality the abstract equality algorithm walkthrough.md>); [Language Basics](<../02 Language Basics/README.md>) for [for-of vs for-in](<../02 Language Basics/sections/2. Control flow/2.3. for-of vs for-in iteration semantics and traps.md>) and [spread/rest](<../02 Language Basics/sections/3. Operators/3.5. Inspection operators typeof instanceof in delete void spread rest.md>); [Prototypes and Classes](<../07 Prototypes and Classes/README.md>) for [prototype delegation](<../07 Prototypes and Classes/sections/1. Prototype delegation/1.1. Delegation mechanics lookup shadowing and dynamic updates.md>).

---

## 1. Arrays are exotic objects

### [1.1. What arrays really are: the indexed exotic, length, and Array.isArray](<./sections/1. Arrays are exotic objects/1.1. What arrays really are the indexed exotic length and Array.isArray.md>)

1. **Indexed exotic, not plain object** (array indices are string keys `0 ≤ i < 2³²−1` with a live `length` invariant).
2. **`length` is an own data property with side effects** (growing on index writes, truncating on `length=` writes — and what it doesn't do).
3. **`Array.isArray` is the only reliable test** (`instanceof` breaks across realms; `typeof` lies).

### [1.2. Creating arrays: literals, the Array constructor trap, Array.of and Array.from](<./sections/1. Arrays are exotic objects/1.2. Creating arrays literals the Array constructor trap Array.of and Array.from.md>)

1. **Literals are the default; `new Array(n)` is the trap** (single numeric arg creates holes, not `[n]`).
2. **`Array.of` fixes the constructor variadic bug** (always creates elements, never holes).
3. **`Array.from` builds from any iterable or array-like** (mapping, `thisArg`, shallow copy vs `slice`).

---

## 2. Holes, sparsity, and length

### [2.1. Holes vs undefined: sparse arrays and empty slots](<./sections/2. Holes sparsity and length/2.1. Holes vs undefined sparse arrays and empty slots.md>)

1. **Hole means no property; `undefined` means a property whose value is `undefined`** (`in` distinguishes them; `0 in arr` is the test).
2. **Sparse arrays are objects with missing indices — holes included** (`[1,,3]` has length 3 but no `"1"` key).
3. **Modern syntax treats holes differently** (`for` vs `for-of` vs `map` vs spread — which skips and which densifies).

### [2.2. Length invariants and the array index contract](<./sections/2. Holes sparsity and length/2.2. Length invariants and the array index contract.md>)

1. **Index definition is `ToString(ToUint32(i)) === key` and `i < 2³²−1`** (keys `4294967295` and `"01"` are not indices).
2. **Writing an index auto-bumps `length` to `i+1`; writing `length` deletes the tail** (truncation, extension with holes, non-writable `length`).
3. **Non-index properties ride along without touching `length`** (`arr.foo = 1` and `arr["01"]` do not grow the array).

---

## 3. Mutation and its copy-era alternative

### [3.1. Core mutating methods: push pop shift unshift splice fill and copyWithin](<./sections/3. Mutation and its copy-era alternative/3.1. Core mutating methods push pop shift unshift splice fill and copyWithin.md>)

1. **Stack/queue ends: `push`/`pop` are fast, `shift`/`unshift` re-index** (complexity and engine compaction notes).
2. **`splice` is the Swiss knife — delete, insert, replace** (returns deleted, mutates in place; `splice` inside iteration corrupts traversal).
3. **`fill` and `copyWithin` write in place with overlapping semantics** (range clamping, negative indices, holes preserved).

### [3.2. Non-mutating copies: toReversed toSorted toSpliced and with ES2023](<./sections/3. Mutation and its copy-era alternative/3.2. Non-mutating copies toReversed toSorted toSpliced and with ES2023.md>)

1. **Copy-era twins return new arrays, original untouched** (`toReversed`/`toSorted`/`toSpliced`/`with` — ES2023, Node 20+).
2. **When to copy vs mutate** (Redux/state, function purity, chained pipelines — and why sort's mutation was the original sin).
3. **Shallow copies still share nested refs** (copy-era or spread — the shallow reality from Objects §5.1).

---

## 4. Searching, slicing, and joining

### [4.1. Searching and testing: indexOf lastIndexOf includes find findLast every some](<./sections/4. Searching slicing and joining/4.1. Searching and testing indexOf lastIndexOf includes find findLast every some.md>)

1. **`indexOf` vs `includes` — Strict Equality vs SameValueZero** (the `NaN` gap that `includes` fixed).
2. **`find`/`findIndex`/`findLast`/`findLastIndex` — predicate first match** (return value vs index vs `undefined` ambiguity).
3. **`every`/`some` — short-circuit all/any with the same predicate shape** (empty-array vacuous truth: `every` true, `some` false).

### [4.2. Slicing, concatenating, and joining: slice concat join at with](<./sections/4. Searching slicing and joining/4.2. Slicing concatenating and joining slice concat join at with.md>)

1. **`slice` copies shallowly with clamping; never mutates** (negative indices, holes preserved as holes).
2. **`concat` flattens one level — and respects `Symbol.isConcatSpreadable`** (array vs array-like vs non-spreadable wrapper).
3. **`join` stringifies via `ToString` with hole→`""` and `toString` join alias; `at`/`with` handle negative indices** (`at(-1)` and `with(-1, v)` without `length` math).

---

## 5. Transforming, ordering, and typed preview

### [5.1. Mapping, filtering, flat and flatMap pipelines](<./sections/5. Transforming ordering and typed preview/5.1. Mapping filtering flat and flatMap pipelines.md>)

1. **`map` preserves holes — callback not called for holes, result keeps same holes** (the most misunderstood array quirk).
2. **`filter`/`flat`/`flatMap` skip holes; result is always dense** (sparse input → compact dense output; `Array.from`/`spread` densify while `slice`/`toSpliced`/`toReversed` preserve).
3. **Pipeline shape and the `parseInt` trap** (`["10","10","10"].map(parseInt)` → `[10, NaN, 2]` — index becomes radix).

### [5.2. Reducing and sorting: reduce reduceRight sort stability and compareFn](<./sections/5. Transforming ordering and typed preview/5.2. Reducing and sorting reduce reduceRight sort stability and compareFn.md>)

1. **`reduce` without initial value throws on empty and skips holes** (the two mandatory `if` checks before calling it).
2. **`sort` without `compareFn` stringifies — numbers sort lexicographically** (`[10,9].sort()` → `[10,9]` is lexical, not numeric).
3. **`sort` is stable since ES2019; `compareFn` contract `negative|0|positive` with `ToString` coercion pitfalls** (and why `toSorted` is the same algorithm without mutation).

### [5.3. ArrayBuffer, TypedArray, and DataView — how they differ from Array](<./sections/5. Transforming ordering and typed preview/5.3. ArrayBuffer TypedArray and DataView how they differ from Array.md>)

1. **Buffer owns bytes; views interpret them** (`ArrayBuffer` → `Uint8Array`/`Float64Array`/`DataView` — fixed length, no holes, no `length` auto-resize).
2. **Typed arrays are numeric, dense, and clamped/typed** (out-of-range wraps/clamps, every index is present, no `Array` methods like `concat`/`push` with holes).
3. **When to pick which** (`Array` for general data; `TypedArray` for binary I/O, canvas, WASM, performance — and `DataView` for mixed-endian control).

---

## 6. Important points to remember (arrays)

### [6.1. Array checklist: reflex rules mentors screen for](<./sections/6. Important points to remember/6.1. Array checklist reflex rules mentors screen for.md>)

1. **Holes vs `undefined` vs `length` truncation — three checks before any index claim**.
2. **Mutating vs copy-era choice and `compareFn` discipline** (the five reflexes that catch most array bugs).
3. **The review grep list** (`new Array(n)` without `fill`, `sort()` without `compareFn`, `reduce` without initial, `map(parseInt)`, index-mutating loop).

---

## 7. Common pitfalls → production bugs

### [7.1. Real production bugs caused by array mistakes](<./sections/7. Common pitfalls to production bugs/7.1. Real production bugs caused by array mistakes.md>)

1. **Sparse pagination and `length` truncation bugs** (API pages stitched with holes; later `map` densifies silently).
2. **`sort()` without `compareFn` ships lexical order to prod** (price list, leaderboard — paginated wrong).
3. **Mutating a shared array under state management** (Redux reducer that `sort`ed the original; `toSorted` fix and shallow-clone still leaks nested state).

---

## 8. Interview questions and answers (arrays)

### [8.1. Common interview Q&A: arrays, holes, sorting, and typed arrays](<./sections/8. Interview questions and answers/8.1. Common interview QA arrays holes sorting and typed arrays.md>)

1. **The classics with mechanism-level answers** (holes vs `undefined`, `Array(n)` trap, `includes` vs `indexOf` for `NaN`, `sort` stability, `reduce` empty throw, `flat` depth, TypedArray vs Array).
2. **What interviewers actually probe for** (narrating exotic-index + length invariants, not reciting method names).
3. **Grading guidance** (junior/mid/senior signals, red flags like "holes are `undefined`" or "sort is numeric by default").

---

## 9. Overlaps to avoid (where this domain stops)

### [9.1. Boundaries: what is covered elsewhere](<./sections/9. Overlaps to avoid/9.1. Boundaries what is covered elsewhere.md>)

1. **Iterator protocol, `for-of`, generators, and async iteration** — Iterables, Generators, and Async Iteration domain.
2. **Maps, Sets, WeakMap/WeakRef lifetime, and GC internals** — Collections / Memory Management domains.
3. **String/regex methods, number formatting, `Temporal`, and JSON serialization** — Strings / Numbers / JSON domains; object descriptor basics — Objects in Depth domain.

---

[← Back to JavaScript track](<../README.md>)
