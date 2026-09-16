# Arrays, Tuples and Collections

How TypeScript types *ordered* and *keyed* groups — arrays (`T[]`) for same-type lists, tuples (`[string, number]`) for fixed-arity heterogeneous slots, and collection typings (`Map<K, V>`, `Set<T>`, `Record<K, V>`, `ReadonlyArray`) for choosing the right container. Function-level rest/tuple mechanics live in [05 Functions](<../05 Functions and Callable Types/README.md>) ([2.3. Rest and tuples](<../05 Functions and Callable Types/sections/2. Overloads and Generics/2.3. Rest parameters tuple types and variadic composition.md>)); generic forwarding over tuples lives in [08 Generics](<../08 Generics Deep Dive/README.md>) ([3.3. Variadic tuples](<../08 Generics Deep Dive/sections/3. Variance and Advanced Generic Patterns/3.3. Variadic tuple generics pipe concat and rest capture.md>)) — this domain owns the *types themselves*: syntax, arity, labels, readonly, method precision, and the selection rules between containers.

## 0. Prerequisites

[01 Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) — [2.1. Type erasure](<../01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.1. Type erasure what survives compilation.md>) (all collection syntax erases) and [3.3. Choosing erasable syntax](<../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>) (array/tuple syntax stays safe under `--erasableSyntaxOnly`). [03 Basic Types and Annotations](<../03 Basic Types and Annotations/README.md>) — [3.2. Inference and widening](<../03 Basic Types and Annotations/sections/3. Annotations Inference and Literals/3.2. Type inference widening and contextual typing.md>) (empty-array `never[]` fallback, `as const` literal arrays) and [3.3. Literal types](<../03 Basic Types and Annotations/sections/3. Annotations Inference and Literals/3.3. Literal types and const assertions.md>) (literal tuples). [04 Objects, Interfaces and Type Aliases](<../04 Objects Interfaces and Type Aliases/README.md>) — [1.2. Optional readonly](<../04 Objects Interfaces and Type Aliases/sections/1. Object Type Fundamentals/1.2. Optional readonly and index signatures.md>) (index signatures vs `Record` vs `Map` first contact). [05 Functions](<../05 Functions and Callable Types/README.md>) — [2.3. Rest and tuples](<../05 Functions and Callable Types/sections/2. Overloads and Generics/2.3. Rest parameters tuple types and variadic composition.md>) (tuple rest on signatures, the function-side half).

## 1. Array Types

### [1.1. Array type syntax and element checking](<./sections/1. Array Types/1.1. Array type syntax and element checking.md>)

1. **Two spellings, one type** (`T[]` vs `Array<T>` — style choice with identical meaning; `T[]` reads better, `Array<T>` nests cleaner in complex positions).
2. **Element checking per position** (every element verified against `T` — heterogeneous literals widen to a union element type or error).
3. **Empty arrays and `never[]`** (no elements → no evidence → `never[]` fallback; annotate or seed — the 03/3.2 rule applied to collections).

### [1.2. Readonly arrays and mutable vs frozen arrays](<./sections/1. Array Types/1.2. Readonly arrays and mutable vs frozen arrays.md>)

1. **`readonly T[]` / `ReadonlyArray<T>`** (compile-time freeze: no `push`/`splice`/index-write — the array half of 04/1.2's `readonly`).
2. **Mutable assignable to readonly** (`T[]` flows into `readonly T[]`, never the reverse — covariance for reading, invariance for writing).
3. **`as const` arrays and runtime freezing** (literal + readonly inference vs `Object.freeze` runtime — checker promise vs value guarantee).

### [1.3. Array methods map filter reduce typed precisely](<./sections/1. Array Types/1.3. Array methods map filter reduce typed precisely.md>)

1. **`map`/`filter`/`find` precision** (mapper return becomes element type; `filter` with predicates narrows — `is` vs `Boolean` callback).
2. **`reduce` accumulator threading** (initial value fixes the accumulator — the most mis-typed stdlib method, and why).
3. **Mutating vs non-mutating methods** (`sort`/`splice` mutate in place and return; `toSorted`/`toSpliced` copy — typing the difference).

---

## 2. Tuple Types

### [2.1. Fixed arity tuples labels and optional elements](<./sections/2. Tuple Types/2.1. Fixed arity tuples labels and optional elements.md>)

1. **Fixed arity, heterogeneous slots** (`[string, number]` — length *and* per-position types checked; push beyond arity errors).
2. **Labeled elements** (`[name: string, age: number]` — documentation in the type; tooltips and apply-order guidance).
3. **Optional and rest elements** (`[string, number?]` trailing optionals; `[...T, last]` composition — the 08/3.3 patterns at value level).

### [2.2. as const tuples literal inference and readonly](<./sections/2. Tuple Types/2.2. as const tuples literal inference and readonly.md>)

1. **`as const` tuple inference** (`["get", 200]` narrows to `readonly ["get", 200]` — literals plus readonly plus tuple-ness in one assertion).
2. **Literal tuples as derived sets** (`ids[number]` unions, `keyof`-style derivation — the 09/3.3 pair applied to ordered data).
3. **When `as const` over-narrows** (function arguments expecting `string[]` reject `readonly ["get"]` — widen the parameter, not the argument).

### [2.3. Destructuring tuples inference and rest elements](<./sections/2. Tuple Types/2.3. Destructuring tuples inference and rest elements.md>)

1. **Positional destructuring** (`const [name, age] = pair` — each binding gets its slot type; length mismatches error).
2. **Rest in destructuring** (`const [head, ...tail] = xs` — tuple-aware rest types vs array rest).
3. **Destructuring function returns** (multi-value returns as tuples — the `useState` shape — vs options objects).

---

## 3. Collections and Selection

### [3.1. Map and Set typing generics over collections](<./sections/3. Collections and Selection/3.1. Map and Set typing generics over collections.md>)

1. **`Map<K, V>` per-key precision** (has/get/set threaded through `K`/`V` — unknown-key access returns `V | undefined` honestly).
2. **`Set<T>` membership typing** (add/has/delete over one element type — iteration yields `T`, not `unknown`).
3. **Constructing from entries** (`new Map(entries: [K, V][])` — tuple-typed entries bridge arrays into maps).

### [3.2. Record vs Map indexed access vs hashed keys](<./sections/3. Collections and Selection/3.2. Record vs Map indexed access vs hashed keys.md>)

1. **`Record<K, V>` for fixed key sets** (known keys, object literal syntax, JSON-serializable — the 04/1.2 rule completed).
2. **`Map` for dynamic keys** (unknown-at-compile-time keys, non-string keys, frequent add/delete — iteration order guaranteed).
3. **Choosing by four questions** (keys known? keys strings? JSON needed? mutation pattern? — the decision table).

### [3.3. Choosing Array Tuple ReadonlyArray and readonly tuples](<./sections/3. Collections and Selection/3.3. Choosing Array Tuple ReadonlyArray and readonly tuples.md>)

1. **Array vs tuple** (unknown length, same type → array; fixed arity, mixed types → tuple — the one-sentence test).
2. **Mutable vs readonly** (published/shared data → readonly; local builders → mutable, freeze on exit).
3. **Review stamp** (three questions — length known? types mixed? mutated after creation? — routing every collection declaration).

---

## 4. Important points to remember (arrays, tuples, collections)

### [4.1. Collections checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Collections checklist mental models mentors insist on.md>)

1. **Arrays for lists, tuples for slots, Maps for dynamic keys** (container follows data shape — the selection instinct).
2. **Readonly at boundaries, mutable inside** (freeze published snapshots; build locally; never `as`-away freezing).
3. **Literals narrow at the source** (`as const` tables and tuples keep exhaustiveness alive through every transform).
4. **Probe arity and element types in review** (`T[]` vs tuple vs `readonly` — hover the declaration, not the usage).

---

## 5. Common pitfalls → production bugs (arrays, tuples, collections)

### [5.1. Real production bugs caused by collection misunderstandings](<./sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by collection misunderstandings.md>)

1. **`as`-cast array push overflowed a fixed protocol frame** (tuple-typed frame built as `string[]`; 4th field shipped to hardware).
2. **Mutated shared `sort` reordered a cached leaderboard** (in-place sort on a published array; every reader saw the mutation).
3. **`Record<string, Handler>` swallowed a missing route** (stringly table accepted absence; unauthenticated path shipped).
4. **`noUncheckedIndexedAccess` off: `users[0]` typed non-optional and crashed** (index access assumed present; empty page threw).

---

## 6. Interview questions and answers (arrays, tuples, collections)

### [6.1. Common interview QA — arrays, tuples and collections](<./sections/6. Interview questions and answers/6.1. Common interview QA arrays tuples and collections.md>)

1. **When is `[string, number]` preferable to `(string | number)[]`?** (arity + position vs open list).
2. **Why does `readonly string[]` accept `string[]` but not the reverse?** (read-covariance, write-invariance).
3. **How does `filter` narrow with an `is` predicate — and why not with `Boolean`?** (predicate vs truthiness overloads).
4. **`Record<K, V>` vs `Map<K, V>` — which for dynamic user-supplied keys, and why?** (known-serializable vs hashed-dynamic).
5. **What does `noUncheckedIndexedAccess` change — and what breaks when you enable it?** (index signatures gain `undefined`; every access narrows).

---

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries — what is covered elsewhere](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **Function-level rest, overloads, and generic forwarding** (tuple rest on signatures, `<T extends unknown[]>` capture, pipes) — [05 Functions and Callable Types](<../05 Functions and Callable Types/README.md>) + [08 Generics Deep Dive](<../08 Generics Deep Dive/README.md>).
2. **Mapped/conditional transforms over collections** (`Partial`, `Exclude`, `DeepPartial`, `Awaited` on arrays) — [09 Utility Types and Type Transformations](<../09 Utility Types and Type Transformations/README.md>).
3. **Object-type composition and literal basics** (`&` vs `extends`, literals, `as const` sources, `satisfies`) — [04 Objects, Interfaces and Type Aliases](<../04 Objects Interfaces and Type Aliases/README.md>) + [03 Basic Types and Annotations](<../03 Basic Types and Annotations/README.md>).
4. **Union algebra and narrowing over elements** (distributivity, discriminants, exhaustiveness on element unions) — [07 Unions, Intersections and Narrowing](<../07 Unions Intersections and Narrowing/README.md>).
5. **Compiler strictness flags** (`strict`, `noUncheckedIndexedAccess`, `--erasableSyntaxOnly`) — [13 Configuration and Compiler Options](<../13 Configuration and Compiler Options/README.md>).

[← Back to track](<../README.md>)
