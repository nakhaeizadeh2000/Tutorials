# Generics Deep Dive

How TypeScript writes types that work for *many* types — type parameters (`<T>`) as compile-time arguments, inferred per call, erased at emit. This domain owns the declaration-site mechanics behind every generic you already met: where `<T>` may appear, how inference fills it, how `extends` constrains it, how defaults fill gaps, how `infer` extracts from it, how `in`/`out` annotate its variance, and how recursion and variadic tuples scale it — without re-teaching function-level basics (see 05/2.2) or utility-type transforms (see 09).

## 0. Prerequisites

[01 Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) — [2.1. Type erasure](<../01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.1. Type erasure what survives compilation.md>) (all `<T>` syntax erases) and [3.3. Choosing erasable syntax](<../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>) (generics stay safe under `--erasableSyntaxOnly`). [02 The Type System Core](<../02 The Type System Core/README.md>) — [1.1. Structural assignability](<../02 The Type System Core/sections/1. Structural typing/1.1. Structural assignability shape not name.md>) (why `Box<string>` and `Box<number>` are structurally distinct) and [3.1. Variance](<../02 The Type System Core/sections/3. Soundness and variance/3.1. Covariance contravariance and invariance who varies which way.md>) (the direction rules `in`/`out` annotate). [03 Basic Types and Annotations](<../03 Basic Types and Annotations/README.md>) — [3.2. Inference and widening](<../03 Basic Types and Annotations/sections/3. Annotations Inference and Literals/3.2. Type inference widening and contextual typing.md>) (widening vs literal preservation that generic inference inherits). [05 Functions and Callable Types](<../05 Functions and Callable Types/README.md>) — [2.2. Generic functions](<../05 Functions and Callable Types/sections/2. Overloads and Generics/2.2. Generic functions inference constraints defaults and scope.md>) (function-level `<T>` basics this domain deepens) and [2.3. Rest and tuples](<../05 Functions and Callable Types/sections/2. Overloads and Generics/2.3. Rest parameters tuple types and variadic composition.md>) (tuple rest that variadic generics generalize).

## 1. Generic Fundamentals

### [1.1. Type parameters declaration instantiation and erasure](<./sections/1. Generic Fundamentals/1.1. Type parameters declaration instantiation and erasure.md>)

1. **What `<T>` declares** (a compile-time parameter listed at the declaration — filled per use, erased before emit).
2. **Where generics may appear** (function, interface, type alias, class — per-call vs per-value scope and why `static` cannot see class `T`).
3. **Erasure proof** (`Box<string>` and `Box<number>` emit identical JavaScript — generics are checker-only contracts).

### [1.2. Inference from arguments and explicit type arguments](<./sections/1. Generic Fundamentals/1.2. Inference from arguments and explicit type arguments.md>)

1. **Inference from arguments** (the checker fills `T` from what you pass — `identity("hi")` gives `T = string` with no annotation).
2. **Explicit type arguments** (`identity<string>("hi")` — when inference picks too wide a type or there is nothing to infer from).
3. **Inference failure modes** (`{}` / `unknown` fallbacks, widened literals, empty-array `never[]` — reading the hover to catch them).

### [1.3. Generic scope per-call vs per-value and declaration sites](<./sections/1. Generic Fundamentals/1.3. Generic scope per-call vs per-value and declaration sites.md>)

1. **Per-call scope** (function `<T>` is fresh on every call — `map` over `string[]` then `number[]` re-instantiates).
2. **Per-value scope** (`Box<T>` fixes `T` for the whole value — a `Box<string>` cannot later hold a `number`).
3. **Declaration-site choice** (generic function vs generic interface vs generic class — which scope the API needs and the `static`-side exclusion).

---

## 2. Constraints Defaults and Inference Control

### [2.1. Constraints extends narrowing inside the body](<./sections/2. Constraints Defaults and Inference Control/2.1. Constraints extends narrowing inside the body.md>)

1. **What `T extends` promises** (the constraint is the only member access the body may assume — `T extends { length: number }` unlocks `.length`).
2. **Constraining without erasing use** (callers keep precise subtypes — `T extends string` still returns the literal, not `string`).
3. **Over-constraining cost** (`T extends object` / `T extends any` blocks primitives silently — keep constraints minimal).

### [2.2. Defaults and optional type parameters](<./sections/2. Constraints Defaults and Inference Control/2.2. Defaults and optional type parameters.md>)

1. **What defaults fill** (`type R<T = string>` — omitted arguments fall back instead of erroring; required params must precede defaulted ones).
2. **Defaults with constraints** (`T extends object = {}` — the default must satisfy the constraint or declaration fails).
3. **When defaults pay** (config/response wrappers where 90% of callers want the same `T` — one fewer argument at every call site).

### [2.3. infer conditional inference and distributive preview](<./sections/2. Constraints Defaults and Inference Control/2.3. infer conditional inference and distributive preview.md>)

1. **What `infer` extracts** (`T extends Array<infer U> ? U : never` — naming the piece the checker solved for inside a conditional).
2. **`infer` positions** (return types, array elements, tuple heads, promise payloads — the four extraction sites mentors use daily).
3. **Distributive preview** (naked `T` distributes over unions — `T extends U ? X : Y` maps member-by-member; full treatment lives in 09).

---

## 3. Variance and Advanced Generic Patterns

### [3.1. Variance in out annotations and generic positions](<./sections/3. Variance and Advanced Generic Patterns/3.1. Variance in out annotations and generic positions.md>)

1. **What `in` / `out` declare** (use-site direction: `out T` is produced, `in T` is consumed — the checker verifies the annotation).
2. **Reading variance errors** (using `T` in the wrong position under an annotation fails fast instead of leaking unsound assignment).
3. **When to annotate** (public library interfaces with one-direction `T` — internal code can rely on inferred variance).

### [3.2. Recursive generic types and self-referential patterns](<./sections/3. Variance and Advanced Generic Patterns/3.2. Recursive generic types and self-referential patterns.md>)

1. **The wrapped rule** (recursion must pass through a property/array/union — bare `type X<T> = X<T>` never terminates).
2. **Generic recursion sites** (`Json<T>`, `DeepReadonly<T>`, linked nodes — the parameter threads through each nesting level).
3. **Depth budget** (deeply nested instantiation hits `TS2589` — cap depth or flatten before the checker gives up).

### [3.3. Variadic tuple generics pipe concat and rest capture](<./sections/3. Variance and Advanced Generic Patterns/3.3. Variadic tuple generics pipe concat and rest capture.md>)

1. **Labeled tuple rest** (`...args: [a: A, b: B]` — arity plus names survive through the generic).
2. **Concat and pipe composition** (`[...A, ...B]` builds pipelines where each stage's output feeds the next input type).
3. **Generic rest capture vs `any`** (`<T extends unknown[]>` preserves each element type; `any[]` flattens them away).

---

## 4. Important points to remember (generics)

### [4.1. Generics checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Generics checklist mental models mentors insist on.md>)

1. **Parameters erase — contracts do not leak to runtime** (prove with emit before reaching for runtime type checks).
2. **Constrain minimally, default generously** (the body needs little; callers appreciate the fallback).
3. **Scope follows the declaration** (per-call function vs per-value container — pick before writing `<T>`).
4. **Extract with `infer`, compose with tuples** (name the piece, thread it through — do not hand-roll what the checker solves).

---

## 5. Common pitfalls → production bugs (generics)

### [5.1. Real production bugs caused by generic misunderstandings](<./sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by generic misunderstandings.md>)

1. **`any` fallback from failed inference reached a price calculation** (untyped fetch generic returned `any`; arithmetic silently produced `NaN`).
2. **Over-constrained `T extends object` rejected valid primitive IDs** (checkout broke for numeric SKUs the constraint never allowed).
3. **Missing `as const` widened a literal through a generic boundary** (route table lost `"get"` precision; exhaustive switch stopped failing).
4. **Unbounded recursive type hit `TS2589` in CI only** (deep config generic compiled locally but timed out the build checker).

---

## 6. Interview questions and answers (generics)

### [6.1. Common interview QA — generics deep dive](<./sections/6. Interview questions and answers/6.1. Common interview QA generics deep dive.md>)

1. **Where can `<T>` appear and what scope does each site give?** (function vs interface vs class vs alias).
2. **What does `T extends { length: number }` unlock inside the body — and what does it still preserve for callers?** (constraint vs precision).
3. **When is an explicit type argument required instead of inference?** (no inference site, widened literal, `never[]` fallback).
4. **What does `infer U` do inside `T extends Array<infer U> ? U : never`?** (naming the solved piece).
5. **`in T` vs `out T` — what breaks when you use `T` in the wrong position?** (variance annotation enforcement).

---

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries — what is covered elsewhere](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **Function-level generic basics** (per-call inference, overloads vs generics) — [05 Functions and Callable Types](<../05 Functions and Callable Types/README.md>).
2. **Utility types and mapped/conditional transforms** (`Partial`/`Pick`/`Exclude`, `keyof` mapping) — [09 Utility Types and Type Transformations](<../09 Utility Types and Type Transformations/README.md>) (textual forward).
3. **Object-type composition and class hierarchies** (`&` vs `extends`, `implements`, mixins) — [04 Objects, Interfaces and Type Aliases](<../04 Objects Interfaces and Type Aliases/README.md>) + [06 Classes and Object-Oriented Types](<../06 Classes and Object-Oriented Types/README.md>).
4. **Union/intersection algebra and narrowing** (distributivity in practice, discriminants) — [07 Unions, Intersections and Narrowing](<../07 Unions Intersections and Narrowing/README.md>).
5. **Compiler strictness flags** (`strict`, `strictFunctionTypes`, `--erasableSyntaxOnly`) — [13 Configuration and Compiler Options](<../13 Configuration and Compiler Options/README.md>).

[← Back to track](<../README.md>)
