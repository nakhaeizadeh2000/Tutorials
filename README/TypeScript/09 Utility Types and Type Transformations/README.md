# Utility Types and Type Transformations

Mapped types derive property contracts, conditional types choose results from type relationships, and infer patterns extract parts of matching shapes. This domain combines those mechanisms to select standard utilities and design practical transformations. Generic parameter mechanics and initial pattern examples live in [08 Generics](<../08 Generics Deep Dive/README.md>); this domain owns full transformation policies, utility implementations and their failure cases. Types describe the resulting contracts; runtime construction, validation and projection require actual JavaScript operations.

## 0. Prerequisites

[01 Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) — [2.1. Type erasure](<../01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.1. Type erasure what survives compilation.md>) (all transforms erase) and [3.3. Choosing erasable syntax](<../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>) (mapped/conditional syntax stays safe under `--erasableSyntaxOnly`). [02 The Type System Core](<../02 The Type System Core/README.md>) — [1.1. Structural assignability](<../02 The Type System Core/sections/1. Structural typing/1.1. Structural assignability shape not name.md>) (why `Partial<User>` still accepts a full `User`). [04 Objects, Interfaces and Type Aliases](<../04 Objects Interfaces and Type Aliases/README.md>) — [2.3. Type queries on objects](<../04 Objects Interfaces and Type Aliases/sections/2. Composition and Declaration Merging/2.3. Type queries on objects keyof indexed access and typeof capture.md>) (`keyof`/`T[K]` groundwork that mapped types iterate) and [3.1. Recursive objects](<../04 Objects Interfaces and Type Aliases/sections/3. Advanced Object Types/3.1. Recursive object types and self-referential structures.md>) (recursive shapes and runtime cycles, distinct from type computation). [07 Unions, Intersections and Narrowing](<../07 Unions Intersections and Narrowing/README.md>) — [2.3. Distributivity](<../07 Unions Intersections and Narrowing/sections/2. Intersection Types/2.3. Unions and intersections distributive behavior and primitive intersections.md>) (`Exclude`/`Extract` echo that becomes the real thing here). [08 Generics Deep Dive](<../08 Generics Deep Dive/README.md>) — [2.3. infer](<../08 Generics Deep Dive/sections/2. Constraints Defaults and Inference Control/2.3. infer conditional inference and distributive preview.md>) (extraction mechanic + distributive preview this domain completes) and [3.2. Recursive generics](<../08 Generics Deep Dive/sections/3. Variance and Advanced Generic Patterns/3.2. Recursive generic types and self-referential patterns.md>) (depth budget that deep transforms inherit).

## 1. Mapped Types

### [1.1. Mapped type fundamentals homomorphic mapping over keys](<./sections/1. Mapped Types/1.1. Mapped type fundamentals homomorphic mapping over keys.md>)

1. **Derived contracts:** compute nullable/partial variants while distinguishing type assignment from actual copying or validation.
2. **Modifier behavior:** compare full mapping, constrained Pick-style subsets and fresh Record keys without an exclusive syntax rule.
3. **Structural evidence:** verify array/tuple/union behavior and deliberate failures with live probes instead of relying on tooltip expansion.

### [1.2. readonly and optional modifiers with plus and minus](<./sections/1. Mapped Types/1.2. readonly and optional modifiers with plus and minus.md>)

1. **Writable views:** add/remove readonly while distinguishing shared aliases, actual copies and runtime freezing.
2. **Presence and values:** apply optional modifiers and verify exact-mode undefined behavior, required results and a real patch failure.
3. **Inheritance evidence:** compare filtered/constrained subsets with resolved-key and intersection mappings using actual writes and omissions.

### [1.3. keyof constrained mapping and template literal keys](<./sections/1. Mapped Types/1.3. keyof constrained mapping and template literal keys.md>)

1. **Key admission and projection:** distinguish constraints from filters and static mapped views from actual runtime properties.
2. **Remapping policy:** implement checked getters, preserve tested modifiers and detect names that collide after remapping.
3. **Handler relationships:** derive finite keys with event-specific payloads and verify typos, missing handlers and source evolution.

---

## 2. Conditional Types

### [2.1. Conditional fundamentals distributive law and never branches](<./sections/2. Conditional Types/2.1. Conditional fundamentals distributive law and never branches.md>)

1. **Distribution evidence:** distinguish a bare checked parameter from concrete unions, left wrappers and right-side patterns with live results.
2. **Type versus value filtering:** use never to select type members while observing the separate runtime array check and failure path.
3. **Whole-type boundaries:** test never/any/unknown, apply explicit empty-input policy and distinguish mutual assignability from a chosen equality probe.

### [2.2. Exclude Extract NonNullable Pick Omit under the hood](<./sections/2. Conditional Types/2.2. Exclude Extract NonNullable Pick Omit under the hood.md>)

1. **Installed definitions:** read actual utility bodies and distinguish Pick/Omit key constraints, literal-preserving filters and useful domain aliases.
2. **Object alternatives:** compare common-key Omit with an explicitly distributive transform that retains branch payloads.
3. **Value boundaries:** check current NonNullable behavior, preserve non-nullish primitives and construct a real public projection.

### [2.3. infer pipelines ReturnType Parameters Awaited](<./sections/2. Conditional Types/2.3. infer pipelines ReturnType Parameters Awaited.md>)

1. **Callable extraction:** verify constraints, last-public-overload metadata, generic unknown results and runtime arity independent of tuple types.
2. **Awaited boundaries:** compare static recursive unwrapping with actual thenable adoption, unchanged fields and a reproduced recursion failure.
3. **Real pipelines:** derive a returned array's element type while preserving possible index absence and handling nullable results explicitly.

---

## 3. Transformations in Practice

### [3.1. Deep transforms DeepPartial DeepReadonly and the budget](<./sections/3. Transformations in Practice/3.1. Deep transforms DeepPartial DeepReadonly and the budget.md>)

1. **Recursive input versus update:** reproduce naive callable-contract loss and a shallow nested-patch failure, then perform a concrete repair.
2. **Container and leaf policies:** define array/tuple, Map/Set, Date/RegExp and function behavior while preserving identity and distinguishing readonly views from runtime immutability.
3. **Stopping guarantees:** verify explicit cap remainders and required deeper fields without inventing universal depths or checking-cost formulas.

### [3.2. Template literal composition Capitalize handlers and routes](<./sections/3. Transformations in Practice/3.2. Template literal composition Capitalize handlers and routes.md>)

1. **Casing contracts:** verify literal and broad intrinsic behavior while distinguishing type computation from actual runtime conversion.
2. **Generated value relationships:** apply setting-change names with precise callback inputs and real implementations.
3. **Legal route combinations:** compare a full product with a version-dependent rule, then validate and dispatch against an actual finite table.

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

1. **Generic declaration mechanics:** distinguish parameter selection and scope from applying an extraction or mapping.
2. **Object composition and queries:** inspect source members/keys and separate a derived type from runtime projection.
3. **Union algebra and narrowing:** route alternatives, conditional filtering and actual live-value checks to their owners.
4. **Arrays, tuples and literal keys:** choose the source-shape, forwarding, extraction or key-generation explanation.
5. **Configuration and deep transforms:** investigate tool support and measured transform failures while preserving the stopping contract.

[← Back to track](<../README.md>)
