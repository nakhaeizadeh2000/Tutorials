# Functions and Callable Types

How TypeScript types the only value that *does* something — functions and every callable shape: call signatures, parameter patterns, return-type contracts, overloads, `this` typing, generic callables, and the variance rules that govern callback safety. Runtime function mechanics (closure, `this` binding, hoisting) live in [JavaScript Functions Deep Dive](<../../JavaScript/05 Functions Deep Dive/README.md>); this domain owns the static callable-type model.

## 0. Prerequisites

[01 Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) — [2.1. Type erasure](<../01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.1. Type erasure what survives compilation.md>) (all function-type syntax erases) and [3.3. Choosing erasable syntax](<../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>) (call signatures are erasable). [02 The Type System Core](<../02 The Type System Core/README.md>) — [3.1. Covariance/contravariance](<../02 The Type System Core/sections/3. Soundness and variance/3.1. Covariance contravariance and invariance who varies which way.md>) + [3.2. strictFunctionTypes](<../02 The Type System Core/sections/3. Soundness and variance/3.2. Function variance and strictFunctionTypes.md>) (variance foundations) and [2.1. Type space vs value space](<../02 The Type System Core/sections/2. The type vs value separation/2.1. Type space vs value space two parallel universes.md>) (callable duality). [03 Basic Types and Annotations](<../03 Basic Types and Annotations/README.md>) — [2.3. never and void](<../03 Basic Types and Annotations/sections/2. The Special Types/2.3. never and void bottom vs deliberate nothing.md>) (`void` vs `never` on returns) and [3.1. Annotation syntax](<../03 Basic Types and Annotations/sections/3. Annotations Inference and Literals/3.1. Annotation syntax where types appear.md>) (where annotations appear on callables). [04 Objects, Interfaces and Type Aliases](<../04 Objects Interfaces and Type Aliases/README.md>) — [1.1. Object types](<../04 Objects Interfaces and Type Aliases/sections/1. Object Type Fundamentals/1.1. Object types structural shape and excess property checks.md>) (callable objects are object types with a call signature) and [2.3. Type queries](<../04 Objects Interfaces and Type Aliases/sections/2. Composition and Declaration Merging/2.3. Type queries on objects keyof indexed access and typeof capture.md>) (`keyof` on callable shapes).

## 1. Function Type Fundamentals

### [1.1. Function type syntax call signatures and callable objects](<./sections/1. Function Type Fundamentals/1.1. Function type syntax call signatures and callable objects.md>)

1. **Syntax inventory** (arrow type `(x: T) => R` vs `interface` call signature vs `type` with construct signature — what each spells and when to use which).
2. **Callable objects** (functions that carry properties — `{ (x: number): number; debug: string }` — why object + call is one type, not two).
3. **Erasable and literal-free** (every function-type form erases — no `enum` trap here — and interacts cleanly with `satisfies`/`as const`).

### [1.2. Parameters optional default rest and destructuring](<./sections/1. Function Type Fundamentals/1.2. Parameters optional default rest and destructuring.md>)

1. **Optionality matrix:** distinguish omittable positions, required undefined values, trailing/leading defaults and optional-property flag behavior.
2. **Rest and tuple contracts:** verify element/arity checks, readonly source spreads and mutation permissions on the gathered argument array.
3. **Destructured parameters:** type one whole options object and distinguish property defaults from an intentional whole-argument default.

### [1.3. Return types void never and contextual inference](<./sections/1. Function Type Fundamentals/1.3. Return types void never and contextual inference.md>)

1. **Return contracts:** distinguish a void callback view, explicit implementation returns, undefined/never and the host's promise-handling behavior.
2. **Annotation and inference:** verify literal unions, a genuinely widened expression and a deliberately broader published object result.
3. **Contextual callbacks:** observe target-supplied parameter types, accepted value returns and meaningful context-free/member failures.

---

## 2. Overloads and Generics

### [2.1. Function overloads call signatures and implementation compatibility](<./sections/2. Overloads and Generics/2.1. Function overloads call signatures and implementation compatibility.md>)

1. **Overload shape** (multiple call signatures above one implementation — which signatures callers see and which the implementation must satisfy).
2. **Implementation compatibility** (the implementation signature must be *wider* than every overload — the "implementation is not callable" rule).
3. **When not to overload** (union params + conditional return vs overload — readability vs hover budget vs `strict` diagnostics).

### [2.2. Generic functions inference constraints defaults and scope](<./sections/2. Overloads and Generics/2.2. Generic functions inference constraints defaults and scope.md>)

1. **Call-site inference:** verify literal, widened-source and mapped-result types, including an empty array whose value argument still supplies evidence.
2. **Constraints and defaults:** preserve richer inputs, reject an invalid replacement and distinguish default selection from inferred empty input.
3. **Generic scope:** compare a generic mapper, a fixed callable and a container with a fresh result parameter on its map method.
4. **Boundary evidence:** relate a generic parsed result to a checked decoder and observe malformed-input rejection.

### [2.3. Rest parameters tuple types and variadic composition](<./sections/2. Overloads and Generics/2.3. Rest parameters tuple types and variadic composition.md>)

1. **Rest as tuple, spread as call** (`...args: [A, B]` defines arity; `fn(...tuple)` checks assignability — labeled tuples preserve names in hover).
2. **Variadic tuple composition** (`[...A, ...B]` — concatenating parameter lists for `pipe`/`compose` without overloads).
3. **Generic rest and `infer`** (how `function call<T extends unknown[]>(...args: T)` captures full arity and why `any[]` loses it).

---

## 3. Advanced Callable Patterns

### [3.1. this parameter explicit typing and arrow vs function capture](<./sections/3. Advanced Callable Patterns/3.1. this parameter explicit typing and arrow vs function capture.md>)

1. **Explicit `this` parameter** (`function f(this: Context, x: number)` — fake first param that types `this` without emitting a runtime parameter).
2. **`this` in callbacks** (`--noImplicitThis` and `this: void` on callbacks — why library `forEach` types `this` and how arrow functions erase `this` capability).
3. **When to annotate** (methods vs standalone functions vs `bind`/`call` — where `this` actually varies and where arrow makes it irrelevant).

### [3.2. Callback variance strictFunctionTypes and bivariance pitfalls](<./sections/3. Advanced Callable Patterns/3.2. Callback variance strictFunctionTypes and bivariance pitfalls.md>)

1. **`strictFunctionTypes` in practice** (parameter contravariance for function values — why `(x: Animal) => void` is not assignable to `(x: Dog) => void`).
2. **Method bivariance trap** (`interface Obj { method(x: Animal): void }` stays bivariant for compatibility — when it leaks and how to close it with property syntax).
3. **Callback safety patterns** (`this: void`, branded params, generic constraints — how production code keeps callbacks safe without disabling `strict`).

### [3.3. Type guards predicates asserts and satisfies on functions](<./sections/3. Advanced Callable Patterns/3.3. Type guards predicates asserts and satisfies on functions.md>)

1. **Predicate returns** (`x is Dog` — how `is` narrows callers, not the function body; `in` vs predicate vs `instanceof`).
2. **Assertion signatures** (`asserts x is Dog` — void-returning functions that narrow on success and throw on failure; `asserts condition` form).
3. **`satisfies` on function values** (checking a value matches a callable type while preserving literal arity/narrowness — vs `as` widening).

---

## 4. Important points to remember (functions, callable types)

### [4.1. Functions checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Functions checklist mental models mentors insist on.md>)

1. **Call signature is the contract** (params are contravariant, returns are covariant — the signature is what callers see, not the body).
2. **Arity is type-checked** (optional/default/rest and tuple labels define what counts as "enough" arguments — spread is checked structurally).
3. **Generic scope lives on the signature** (one inference per call — constraints guarantee properties, defaults fill gaps).
4. **Narrow via the return** (predicates and asserts turn a boolean-returning function into a narrowing tool for callers).

---

## 5. Common pitfalls → production bugs (functions, callable types)

### [5.1. Real production bugs caused by function type misunderstandings](<./sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by function type misunderstandings.md>)

1. **`void` swallowed return** (a callback typed `() => void` ignoring a `Promise` or meaningful return that the caller awaited).
2. **Overload implementation leaks** (calling the broad implementation signature instead of the narrow overload — caller sees `string | number` when they expected `string`).
3. **Bivariant method accepts wrong subtype** (a method-typed callback accepted a parent type and mutated a missing child property at runtime).
4. **`this: void` omission lets `this` leak into a detached callback** (later moved to a `strict` codebase and `this` became `any` at runtime).

---

## 6. Interview questions and answers (functions, callable types)

### [6.1. Common interview QA — functions and callable types](<./sections/6. Interview questions and answers/6.1. Common interview QA functions and callable types.md>)

1. **When does an overload beat a union param?** (caller experience vs maintainability — the hover and error-message budget).
2. **Why does `strictFunctionTypes` reject a callback assignment that worked before?** (contravariance — the caller supplies the supertype, not the subtype).
3. **What does `this: void` on a callback buy you?** (proves the callback does not use `this` — safe to detach and store).
4. **How does `x is T` differ from `asserts x is T`?** (returning boolean vs throwing — caller narrows in `if` vs after the call).
5. **`satisfies` vs `as` on a function value** (preserved arity/literal vs widened and silenced).

---

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries — what is covered elsewhere](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **Runtime versus types:** locate callable signatures and receiver execution, using the observed detached-method case.
2. **Object/class/decorator boundaries:** distinguish member contracts, instance construction and configured decorator behavior.
3. **Narrowing and validation:** identify the trusted signature, runtime evidence and full branch-analysis owners.
4. **Generics and transformations:** route input/output inference, NoInfer, tuple forwarding and utility pipelines to their precise owners.
5. **Configuration and diagnosis:** choose an option or behavior owner from the failing operation and explain the check that resolves it.

[← Back to track](<../README.md>)
