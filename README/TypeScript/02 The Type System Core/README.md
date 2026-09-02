# The Type System Core

The type system underneath the syntax: structural assignability, the separation of type and value spaces, declaration spaces, type queries, and the soundness/variance decisions that explain every "why does this assign?" question. This domain owns the core model; later domains add features on top of it (see Overlaps for boundaries).

## 0. Prerequisites

[01 Fundamentals and Mental Model](<../01%20Fundamentals%20and%20Mental%20Model/README.md>) — especially [2.1. Type erasure](<../01%20Fundamentals%20and%20Mental%20Model/sections/2.%20How%20TypeScript%20doesnt%20execute/2.1.%20Type%20erasure%20what%20survives%20compilation.md>) (erasure) and [1.3. Superset, soundness](<../01%20Fundamentals%20and%20Mental%20Model/sections/1.%20What%20TypeScript%20is/1.3.%20Superset%20soundness%20and%20the%20type%20system%20flavor.md>) (structural, sound vs useful). JavaScript object model from [JavaScript 06 Objects in Depth](<../../JavaScript/06%20Objects%20in%20Depth/README.md>).

## 1. Structural typing

### [1.1. Structural assignability — shape, not name](<./sections/1. Structural typing/1.1. Structural assignability shape not name.md>)

1. **Assignability by shape** (if `A` has every member `B` requires, `A` is assignable to `B` — member types checked recursively).
2. **Width subtyping** (extra members don't break assignability — `{ x, y, color }` satisfies `{ x, y }`).
3. **Depth subtyping** (nested members must themselves be assignable — `{ a: { x: number } }` vs `{ a: { x: string } }`).

### [1.2. Excess property checks and freshness](<./sections/1. Structural typing/1.2. Excess property checks and freshness.md>)

1. **Freshness is the exception** (a fresh object literal checked directly against a target gets an extra "unknown property" check — a pragmatic extra, not part of core assignability).
2. **When freshness doesn't apply** (assigning through an intermediate variable, spread, or non-literal — excess members are silent).
3. **How to diagnose** ("Object literal may only specify known properties" means freshness triggered — not a structural failure).

### [1.3. Nominal typing techniques — branding and opaque types](<./sections/1. Structural typing/1.3. Nominal typing techniques branding and opaque types.md>)

1. **Why nominal sometimes matters** (two `string`-based IDs that shouldn't mix: `UserId` vs `OrderId`).
2. **Branding pattern** (`type UserId = string & { __brand: "UserId" }` — intersection adds a phantom member that collapses compatibility).
3. **Trade-offs** (branding requires assertions at creation; true opaque types remain a proposal — measure the cost/benefit).

---

## 2. The type vs value separation

### [2.1. Type space vs value space — two parallel universes](<./sections/2. The type vs value separation/2.1. Type space vs value space two parallel universes.md>)

1. **Two spaces** (`type`/`interface` names live in type space; `const`/`let`/`function` live in value space — they never collide).
2. **Same identifier, different meaning** (`class Point` declares *both* a value (constructor) and a type (instance shape) simultaneously).
3. **What can appear where** (type space allows `string`, `number`, `extends`, `keyof`; value space allows runtime expressions — `typeof` bridges them ambiguously).

### [2.2. Declaration spaces — type, value, and namespace](<./sections/2. The type vs value separation/2.2. Declaration spaces type value and namespace.md>)

1. **Three declaration spaces** (value: `const x`; type: `type T`, `interface I`; namespace: `namespace N` / `enum E` legacy).
2. **Merging rules** (`class` + `namespace` can merge; `type` cannot merge with `class` value; `interface` merging is nominally forbidden but declaration-merging allows same-named `interface` repetition).
3. **Module scope vs script scope** (files are modules when they contain `import`/`export` — otherwise ambient global merging applies).

### [2.3. Type queries — typeof, keyof, and indexed access](<./sections/2. The type vs value separation/2.3. Type queries typeof keyof and indexed access.md>)

1. **`typeof` in type space vs value space** (value `typeof x === "string"` is a runtime check; type `typeof x` is a type query that captures the variable's type).
2. **`keyof` and indexed access `T[K]`** (produce union of keys, or member type — the two primitive type-level operators).
3. **Synthesis** (how `typeof`, `keyof`, `T[K]` and `as const` together enable type-level programming without runtime cost because they erase).

---

## 3. Soundness and variance

### [3.1. Covariance, contravariance, and invariance — who varies which way](<./sections/3. Soundness and variance/3.1. Covariance contravariance and invariance who varies which way.md>)

1. **Definitions** (covariant: same direction `Dog ≤ Animal` → `ReadonlyArray<Dog> ≤ ReadonlyArray<Animal>`; contravariant: opposite ` (Animal) => void ≤ (Dog) => void `; invariant: neither).
2. **Where each appears** (returns are covariant; function parameters are contravariant — but methods remain bivariant for compat).
3. **Explicit annotations `in`/`out`** (TypeScript 5.8 variance annotations let you declare intent — the checker validates it).

### [3.2. Function variance and strictFunctionTypes](<./sections/3. Soundness and variance/3.2. Function variance and strictFunctionTypes.md>)

1. **`strictFunctionTypes`** (enabled via `strict`: function *values* are checked contravariantly; method shorthand remains bivariant).
2. **Why methods stay bivariant** (historical compatibility with JS's `Array.prototype` patterns — would otherwise be massively breaking).
3. **How to be safe** (prefer function-value syntax `prop: (x: T) => void` over method `prop(x: T): void` when variance matters).

### [3.3. Unsound by design spots — budgeted risks](<./sections/3. Soundness and variance/3.3. Unsound by design spots budgeted risks.md>)

1. **Array covariance** (`Dog[]` → `Animal[]` then `push(cat)` breaks `Dog[]` — `readonly` arrays are the safe alternative).
2. **`any` and `as` escapes** (disable checking; `unknown` + predicate is the disciplined alternative).
3. **Type assertion narrowing** (type predicates `value is T` must be *proven* at runtime — a lying predicate breaks soundness globally).

---

## 4. Important points to remember (type system core)

### [4.1. Type system core checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Type system core checklist mental models mentors insist on.md>)

1. **Shape, not name, governs assignability** (freshness is the exception — know when it triggers).
2. **Type and value are parallel spaces** (same name, different meaning; `typeof` is context-dependent).
3. **Variance is directional** (`return` covariant, `parameter` contravariant — method bivariance is the legacy exception).
4. **Branding adds nominal identity without runtime cost** (but requires a proving assertion at creation).

---

## 5. Common pitfalls → production bugs (type system core)

### [5.1. Real production bugs caused by type system misunderstandings](<./sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by type system misunderstandings.md>)

1. **Fresh-vs-stale freshness escape** (excess property missed because it went through a variable).
2. **Covariant array mutation** (`Dog[]` → `Animal[]` then `push` breaks downstream `Dog`-only code).
3. **Predicate lies** (`value is T` that returns true for non-`T` — every downstream consumer inherits the lie).
4. **Confusing `typeof` spaces** (`typeof x === "string"` guard vs `type T = typeof x` — mixing the two).

---

## 6. Interview questions and answers (type system core)

### [6.1. Common interview Q&A — the type system core](<./sections/6. Interview questions and answers/6.1. Common interview QA the type system core.md>)

1. **Structural vs nominal** (when does TypeScript behave nominally?).
2. **Freshness** (why does `const x: Point = { x: 1, y: 2, z: 3 }` error but `const y = { x: 1, y: 2, z: 3 }; const x: Point = y` not?).
3. **`in`/`out` variance** (how to annotate and what it catches).
4. **`any` vs `unknown` vs `never`** (three "I don't know" flavors — when each fits).
5. **Type/value separation** (why `class C` can be both a type and a value).

---

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries — what is covered elsewhere](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **JavaScript mechanics** — [JavaScript track](<../../JavaScript/README.md>).
2. **Basic type inventory** (`string`, `number`, `any`/`unknown`/`never`/`void`, literal types) — [03 Basic Types and Annotations](../03%20Basic%20Types%20and%20Annotations/README.md) (textual forward until it lands).
3. **Utility types and type transformations** (mapped, conditional, `infer`, template literals) — [09 Utility Types and Type Transformations](../09%20Utility%20Types%20and%20Type%20Transformations/README.md) (textual).
4. **Configuration and variance flags** (`strictFunctionTypes`, `strictPropertyInitialization`) — [13 Configuration and Compiler Options](../13%20Configuration%20and%20Compiler%20Options/README.md) (textual).

