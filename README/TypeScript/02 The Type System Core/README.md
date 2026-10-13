# The Type System Core

The type system underneath the syntax: structural assignability, the separation of type and value spaces, declaration spaces, type queries, and the soundness/variance decisions that explain every "why does this assign?" question. This domain owns the core model; later domains add features on top of it (see Overlaps for boundaries).

## 0. Prerequisites

[01 Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) — especially [2.1. Type erasure](<../01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.1. Type erasure what survives compilation.md>) (erasure) and [1.3. Superset, soundness](<../01 Fundamentals and Mental Model/sections/1. What TypeScript is/1.3. Superset soundness and the type system flavor.md>) (structural, sound vs useful). JavaScript object model from [JavaScript 06 Objects in Depth](<../../JavaScript/06 Objects in Depth/README.md>).

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

1. **Two meanings:** identify type/value uses, legal same-name pairs and the role of scope.
2. **Dual declarations:** run a complete class/status example and distinguish type-only from value-bearing namespace emission.
3. **Type queries and errors:** compare static and runtime typeof, then reproduce incorrect-space diagnostics.

### [2.2. Declaration spaces — type, value, and namespace](<./sections/2. The type vs value separation/2.2. Declaration spaces type value and namespace.md>)

1. **Three declaration spaces:** Distinguish type names, runtime values and qualified namespace names; predict which declarations emit code.
2. **Merging rules:** Run accepted interface/namespace examples and reject a same-scope alias/interface collision.
3. **Scope and augmentation:** Build a complete global augmentation project, identify the runtime provider, and diagnose a misplaced `declare global`.

### [2.3. Type queries — typeof, keyof, and indexed access](<./sections/2. The type vs value separation/2.3. Type queries typeof keyof and indexed access.md>)

1. **`typeof` in type space vs value space** (value `typeof x === "string"` is a runtime check; type `typeof x` is a type query that captures the variable's type).
2. **`keyof` and indexed access `T[K]`** (produce union of keys, or member type — the two primitive type-level operators).
3. **Synthesis** (how `typeof`, `keyof`, `T[K]` and `as const` together enable type-level programming without runtime cost because they erase).

---

## 3. Soundness and variance

### [3.1. Covariance, contravariance, and invariance — who varies which way](<./sections/3. Soundness and variance/3.1. Covariance contravariance and invariance who varies which way.md>)

1. **Definitions** (covariant: same direction `Dog ≤ Animal` → `ReadonlyArray<Dog> ≤ ReadonlyArray<Animal>`; contravariant: opposite ` (Animal) => void ≤ (Dog) => void `; invariant: neither).
2. **Where each appears** (returns are covariant; function parameters are contravariant — but methods remain bivariant for compat).
3. **Explicit annotations `in`/`out`** (TypeScript 4.7 introduced variance annotations; compare actual input/output relations and the method exception).

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
4. **Branding records a reviewed construction decision** (erased distinctions, assertion sites and explicit domain validation).

---

## 5. Common pitfalls → production bugs (type system core)

### [5.1. Real production bugs caused by type system misunderstandings](<./sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by type system misunderstandings.md>)

1. **Freshness:** observe the missing port through variable flow, then reject a typo at the literal.
2. **Mutable covariance:** reproduce alias mutation, reject readonly-to-mutable assignment, and distinguish a reader view from a frozen snapshot.
3. **Predicate evidence:** compare an incomplete object check with the required email-field check.
4. **Type versus value change:** keep the initializer constant, then demonstrate a real mutation and a finite host contract.

---

## 6. Interview questions and answers (type system core)

### [6.1. Common interview Q&A — the type system core](<./sections/6. Interview questions and answers/6.1. Common interview QA the type system core.md>)

1. **Structural vs nominal:** check namespace-qualified compatibility and private-member rejection.
2. **Freshness:** compare direct-literal diagnostics with the same object's variable flow and runtime properties.
3. **Variance:** verify producer/consumer direction and the method versus function-property annotation check.
4. **Special types:** distinguish unknown evidence from never's impossible-case assignment direction.
5. **Class duality:** identify the constructor value, instance type and constructor type query.
6. **Runtime versus query:** execute typeof narrowing and explain what deriving a type does and does not do.

---

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries — what is covered elsewhere](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **JavaScript mechanics** — [JavaScript track](<../../JavaScript/README.md>).
2. **Basic type inventory** (`string`, `number`, `any`/`unknown`/`never`/`void`, literal types) — [03 Basic Types and Annotations](<../03 Basic Types and Annotations/README.md>).
3. **Utility types and type transformations** (mapped, conditional, `infer`, template literals) — [09 Utility Types and Type Transformations](<../09 Utility Types and Type Transformations/README.md>) (textual).
4. **Configuration and variance flags** (`strictFunctionTypes`, `strictPropertyInitialization`) — [13 Configuration and Compiler Options](<../13 Configuration and Compiler Options/README.md>) (textual).

