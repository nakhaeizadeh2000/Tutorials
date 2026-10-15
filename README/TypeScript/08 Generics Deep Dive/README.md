# Generics Deep Dive

How TypeScript writes types that work for *many* types — type parameters (`<T>`) as compile-time arguments, inferred per call, erased at emit. This domain owns the declaration-site mechanics behind every generic you already met: where `<T>` may appear, how inference fills it, how `extends` constrains it, how defaults fill gaps, how `infer` extracts from it, how `in`/`out` annotate its variance, and how recursion and variadic tuples scale it — without re-teaching function-level basics (see 05/2.2) or utility-type transforms (see 09).

## 0. Prerequisites

[01 Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) — [2.1. Type erasure](<../01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.1. Type erasure what survives compilation.md>) (all `<T>` syntax erases) and [3.3. Choosing erasable syntax](<../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>) (generics stay safe under `--erasableSyntaxOnly`). [02 The Type System Core](<../02 The Type System Core/README.md>) — [1.1. Structural assignability](<../02 The Type System Core/sections/1. Structural typing/1.1. Structural assignability shape not name.md>) (why `Box<string>` and `Box<number>` are structurally distinct) and [3.1. Variance](<../02 The Type System Core/sections/3. Soundness and variance/3.1. Covariance contravariance and invariance who varies which way.md>) (the direction rules `in`/`out` annotate). [03 Basic Types and Annotations](<../03 Basic Types and Annotations/README.md>) — [3.2. Inference and widening](<../03 Basic Types and Annotations/sections/3. Annotations Inference and Literals/3.2. Type inference widening and contextual typing.md>) (widening vs literal preservation that generic inference inherits). [05 Functions and Callable Types](<../05 Functions and Callable Types/README.md>) — [2.2. Generic functions](<../05 Functions and Callable Types/sections/2. Overloads and Generics/2.2. Generic functions inference constraints defaults and scope.md>) (function-level `<T>` basics this domain deepens) and [2.3. Rest and tuples](<../05 Functions and Callable Types/sections/2. Overloads and Generics/2.3. Rest parameters tuple types and variadic composition.md>) (tuple rest that variadic generics generalize).

## 1. Generic Fundamentals

### [1.1. Type parameters declaration instantiation and erasure](<./sections/1. Generic Fundamentals/1.1. Type parameters declaration instantiation and erasure.md>)

1. **Parameter relationships:** retain box and first-element contracts, reject unsupported generic-body assumptions and observe an unchecked-value failure.
2. **Declaration sites:** compare aliases/interfaces/functions/classes and a method/static factory with their own type parameters.
3. **Erasure evidence:** compare emitted files differing only in a type annotation and execute formatting supplied by runtime callbacks.

### [1.2. Inference from arguments and explicit type arguments](<./sections/1. Generic Fundamentals/1.2. Inference from arguments and explicit type arguments.md>)

1. **Inferred precision:** check actual literal results, source widening and deliberately explicit contracts with live type probes.
2. **Evidence and fallback:** distinguish return context, no-evidence factories and empty-array element inference.
3. **Competing inference:** use NoInfer to make one argument own the allowed set, then verify acceptance, rejection and runtime limits.
4. **Boundary contracts:** relate T to a real decoder and explain why explicit type arguments do not validate data.

### [1.3. Generic scope per-call vs per-value and declaration sites](<./sections/1. Generic Fundamentals/1.3. Generic scope per-call vs per-value and declaration sites.md>)

1. **Per-call contracts:** compare a generic call signature with a fixed callable view and execute independently typed transformations.
2. **Stored relationships:** preserve bag writes/reads, choose fresh mapping/fallback types and expose a reader-selected result lie.
3. **Declaration design:** justify aliases, stored formatter configuration and generic methods from their actual relationships, with explicit erasable fields.

---

## 2. Constraints Defaults and Inference Control

### [2.1. Constraints extends narrowing inside the body](<./sections/2. Constraints Defaults and Inference Control/2.1. Constraints extends narrowing inside the body.md>)

1. **Body capabilities:** distinguish collection/element requirements, absence and the runtime limit of unchecked inputs.
2. **Result relationships:** preserve supplied subtypes only when the implementation honors them; contrast identity and transforming returns.
3. **Bound choice:** compare primitive/readonly admission and forward actual callback arguments rather than trusting a callable constraint alone.

### [2.2. Defaults and optional type parameters](<./sections/2. Constraints Defaults and Inference Control/2.2. Defaults and optional type parameters.md>)

1. **Omitted type choices:** distinguish inference, explicit arguments, trailing defaults and required runtime arguments.
2. **Bounded defaults:** check constraint/dependent defaults and observe empty-tuple, non-nullish and unsafe-any outcomes.
3. **API and runtime design:** replace a phantom builder with stored filter snapshots and assess the impact of changing an envelope default.

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

1. **Function-level generic basics:** route input/output signatures, inference evidence and tuple forwarding to their full explanations.
2. **Utility types and transforms:** distinguish parameter mechanics from choosing and authoring a transformation.
3. **Object composition and class containers:** separate member/construction requirements from fixed and fresh generic scope.
4. **Union algebra and live narrowing:** distinguish type filtering, runtime branch checks and deep-transform stopping policies.
5. **Compiler configuration:** route option/tool support questions to current configuration and interface owners.
6. **Evidence-based routing practice:** justify the next observation for widened sources, competing candidates, depth caps and parsed data.

[← Back to track](<../README.md>)
