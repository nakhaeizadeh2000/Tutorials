# Utility Types and Type Transformations

How TypeScript *computes* new types from old ones — mapped types (`{ [K in keyof T]: … }`) that rebuild objects key by key, conditional types (`T extends U ? X : Y`) that branch per member, and the standard-library catalog (`Partial`/`Pick`/`Omit`/`Exclude`/`ReturnType`/`Awaited`) built from those two primitives plus `infer`. Prerequisites taught the mechanics — [08 Generics](<../08 Generics Deep Dive/README.md>) owns `infer` extraction, naked-`T` distribution, and recursive budgets — this domain owns the *catalog*: which transform when, how each is implemented in one line, and where each breaks in production.

## 0. Prerequisites

[01 Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) — [2.1. Type erasure](<../01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.1. Type erasure what survives compilation.md>) (all transforms erase) and [3.3. Choosing erasable syntax](<../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>) (mapped/conditional syntax stays safe under `--erasableSyntaxOnly`). [02 The Type System Core](<../02 The Type System Core/README.md>) — [1.1. Structural assignability](<../02 The Type System Core/sections/1. Structural typing/1.1. Structural assignability shape not name.md>) (why `Partial<User>` still accepts a full `User`). [04 Objects, Interfaces and Type Aliases](<../04 Objects Interfaces and Type Aliases/README.md>) — [2.3. Type queries on objects](<../04 Objects Interfaces and Type Aliases/sections/2. Composition and Declaration Merging/2.3. Type queries on objects keyof indexed access and typeof capture.md>) (`keyof`/`T[K]` groundwork that mapped types iterate) and [3.1. Recursive objects](<../04 Objects Interfaces and Type Aliases/sections/3. Advanced Object Types/3.1. Recursive object types and self-referential structures.md>) (wrapping rule that deep transforms inherit). [07 Unions, Intersections and Narrowing](<../07 Unions Intersections and Narrowing/README.md>) — [2.3. Distributivity](<../07 Unions Intersections and Narrowing/sections/2. Intersection Types/2.3. Unions and intersections distributive behavior and primitive intersections.md>) (`Exclude`/`Extract` echo that becomes the real thing here). [08 Generics Deep Dive](<../08 Generics Deep Dive/README.md>) — [2.3. infer](<../08 Generics Deep Dive/sections/2. Constraints Defaults and Inference Control/2.3. infer conditional inference and distributive preview.md>) (extraction mechanic + distributive preview this domain completes) and [3.2. Recursive generics](<../08 Generics Deep Dive/sections/3. Variance and Advanced Generic Patterns/3.2. Recursive generic types and self-referential patterns.md>) (depth budget that deep transforms inherit).

## 1. Mapped Types

### [1.1. Mapped type fundamentals homomorphic mapping over keys](<./sections/1. Mapped Types/1.1. Mapped type fundamentals homomorphic mapping over keys.md>)

1. **What `{ [K in keyof T]: V }` computes** (rebuilds `T` key by key — homomorphic mappers preserve structure while changing optionality, mutability, or value types).
2. **Homomorphic vs non-homomorphic** (`in keyof T` preserves modifiers and maps cleanly; `in string` / `in Union` builds fresh shapes without modifier memory).
3. **Reading mapped hover types** (the checker shows the *result*, not the loop — how to verify a transform produced what you intended).

### [1.2. readonly and optional modifiers with plus and minus](<./sections/1. Mapped Types/1.2. readonly and optional modifiers with plus and minus.md>)

1. **Adding and removing `readonly`** (`+readonly`/`-readonly` — freezing API output vs unfreezing builder input).
2. **Adding and removing `?`** (`Partial` adds, `Required` removes — why `-?` exists and when stripping optionality is honest).
3. **Homomorphic modifier memory** (only `keyof T` mappers inherit `?`/`readonly` silently — non-homomorphic mappers start clean).

### [1.3. keyof constrained mapping and template literal keys](<./sections/1. Mapped Types/1.3. keyof constrained mapping and template literal keys.md>)

1. **Constraining the key set** (`K extends keyof T`, `K extends string` — narrowing which keys the mapper visits).
2. **`as` key remapping** (`[K in keyof T as Prefix<K>]` — renaming keys while mapping values, TS 4.1+).
3. **Template literal keys** (`` `on${Capitalize<K>}` `` — generating handler/event key sets the object never declared).

---

## 2. Conditional Types

### [2.1. Conditional fundamentals distributive law and never branches](<./sections/2. Conditional Types/2.1. Conditional fundamentals distributive law and never branches.md>)

1. **The distributive law, completely** (naked `T` maps member-by-member; `[T]` wrapper tests whole — the rule 08 previewed, with the `Exclude` proof).
2. **`never` as the filter sink** (false-branch `never` drops members from the reunited union — why filtering *is* mapping-to-`never`).
3. **Non-distributive escapes** (`[T] extends [U]`, tuple-wrapped checks — testing emptiness, exact equality, and whole-union properties).

### [2.2. Exclude Extract NonNullable Pick Omit under the hood](<./sections/2. Conditional Types/2.2. Exclude Extract NonNullable Pick Omit under the hood.md>)

1. **One-line implementations** (`Exclude = T extends U ? never : T` and friends — reading stdlib sources as distributive applications).
2. **Union filters vs object pickers** (`Exclude`/`Extract`/`NonNullable` filter members; `Pick`/`Omit` rebuild shapes — different primitives, often confused).
3. **When the stdlib name beats a hand-rolled conditional** (readability, hover quality, and the accidental-distribution trap in custom filters).

### [2.3. infer pipelines ReturnType Parameters Awaited](<./sections/2. Conditional Types/2.3. infer pipelines ReturnType Parameters Awaited.md>)

1. **Function utilities under the hood** (`ReturnType`, `Parameters`, `ConstructorParameters` — one `infer` pattern each, from 08's four sites).
2. **`Awaited` as recursive conditional** (unwrapping nested promises via self-reference + `infer` — the stdlib's canonical recursion).
3. **Composing pipelines** (`Awaited<ReturnType<typeof fetchUser>>` — stacking extraction without intermediate aliases).

---

## 3. Transformations in Practice

### [3.1. Deep transforms DeepPartial DeepReadonly and the budget](<./sections/3. Transformations in Practice/3.1. Deep transforms DeepPartial DeepReadonly and the budget.md>)

1. **`DeepPartial` line by line** (mapped recursion with an object stop-condition — the transform 04/3.1 budgeted, owned here).
2. **Composing mapped with conditional** (recursion guard `T extends object ? … : T` decides per branch whether to descend or stop).
3. **Budgeting deep transforms in production** (tuple-counter caps, scope-narrowing, largest-schema fixtures — 08/3.2's rules applied to the catalog).

### [3.2. Template literal composition Capitalize handlers and routes](<./sections/3. Transformations in Practice/3.2. Template literal composition Capitalize handlers and routes.md>)

1. **Intrinsic string mappers** (`Capitalize`/`Uncapitalize`/`Uppercase`/`Lowercase` — compile-time string surgery, no runtime cost).
2. **Key generation at scale** (`` `on${Capitalize<K>}` `` handler maps, `` `${M} ${P}` `` route tables — shapes the source object never listed).
3. **String unions as programs** (distributing intrinsics over literal unions to derive exhaustive event/API sets).

### [3.3. satisfies and as const preserving literals through transforms](<./sections/3. Transformations in Practice/3.3. satisfies and as const preserving literals through transforms.md>)

1. **Where transforms widen** (mapped output over `string`-typed sources loses literals the input never carried — the source, not the mapper, is usually at fault).
2. **`as const` sources + `satisfies` contracts** (narrow input, checked shape — the pair that keeps `Theme`/`Route` tables literal through `Partial`/`Pick`).
3. **Return-the-parameter through transforms** (generic wrappers around utilities must thread `M`, not the constraint — 08/2.1's rule inside utility pipelines).

---

## 4. Important points to remember (utility types)

### [4.1. Utility checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Utility checklist mental models mentors insist on.md>)

1. **Map with mapped, filter with conditional, extract with `infer`** (one primitive per intent — the three-tool rule).
2. **Prefer stdlib names at call sites** (`Partial`/`Exclude`/`Awaited` read better than their one-line bodies — write bodies only for project wrappers).
3. **Naked distributes, wrapped tests whole** (the single sentence that predicts every conditional result).
4. **Budget recursion before it budgets you** (caps, scope, largest-schema fixture — no unbounded deep transform over generated input).

---

## 5. Common pitfalls → production bugs (utility types)

### [5.1. Real production bugs caused by transform misunderstandings](<./sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by transform misunderstandings.md>)

1. **`Partial` at an API boundary hid a missing `price`** (optional-ized response skipped validation; checkout charged zero).
2. **Hand-rolled `Exclude` distributed accidentally and dropped a state** (non-naked intent written naked — reducer lost `"archived"`).
3. **Unbounded `DeepPartial` over generated schema timed out CI** (same TS2589 class as 08/5.1, new catalog angle — capped + scoped fix).
4. **Template-literal route table widened through `Record<string, …>`** (generated `"GET /a"` keys collapsed to `string`; exhaustiveness died).

---

## 6. Interview questions and answers (utility types)

### [6.1. Common interview QA — utility types and transformations](<./sections/6. Interview questions and answers/6.1. Common interview QA utility types and transformations.md>)

1. **How does `{ [K in keyof T]?: T[K] }` implement `Partial` — and what makes it homomorphic?** (key iteration + modifier memory).
2. **Write `Exclude` from memory — and explain which word makes it distribute.** (naked `T` + `never` sink).
3. **How is `Awaited` implemented — and why must it recurse?** (`infer` payload + self-reference with a non-promise base).
4. **When does a mapped type *lose* `readonly`/`?` — and how do `-`/`+` modifiers control it?** (homomorphic memory vs explicit operators).
5. **How do you generate `` `on${Capitalize<K>}` `` keys from a union — and why `as` remapping instead of a second object?** (key computation inside the mapper).

---

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries — what is covered elsewhere](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **Generic declaration mechanics** (sites, inference, constraints, `in`/`out`, recursion theory) — [08 Generics Deep Dive](<../08 Generics Deep Dive/README.md>).
2. **Object-type composition primitives** (`&` vs `extends`, merging, `keyof`/`T[K]` queries) — [04 Objects, Interfaces and Type Aliases](<../04 Objects Interfaces and Type Aliases/README.md>).
3. **Union/intersection algebra and narrowing** (distributivity at shape level, discriminants, exhaustiveness) — [07 Unions, Intersections and Narrowing](<../07 Unions Intersections and Narrowing/README.md>).
4. **Arrays, tuples, and template-literal element patterns** (variadic composition, tuple `infer`) — [10 Arrays, Tuples and Collections](<../10 Arrays Tuples and Collections/README.md>) (textual forward).
5. **Compiler strictness and emit flags** (`strict`, `--erasableSyntaxOnly`, `isolatedDeclarations`) — [13 Configuration and Compiler Options](<../13 Configuration and Compiler Options/README.md>) (textual forward).

[← Back to track](<../README.md>)
