# Unions, Intersections and Narrowing

How TypeScript types *either/or* and *both* — union (`|`) and intersection (`&`) as type algebra, and the control-flow analysis that narrows a wide type to a precise one. This is the heart of TypeScript's everyday modeling: discriminated unions as the scalable alternative to inheritance, intersections for composition, and the narrowing machinery (`typeof`/`instanceof`/`in`/equality/predicates/`satisfies`) that makes the checker prove exhaustiveness.

## 0. Prerequisites

[01 Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) — [2.1. Type erasure](<../01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.1. Type erasure what survives compilation.md>) (all `|`/`&` syntax erases) and [3.3. Choosing erasable syntax](<../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>) (union/intersection stays safe under `--erasableSyntaxOnly`). [02 The Type System Core](<../02 The Type System Core/README.md>) — [1.1. Structural assignability](<../02 The Type System Core/sections/1. Structural typing/1.1. Structural assignability shape not name.md>) + [1.2. Freshness](<../02 The Type System Core/sections/1. Structural typing/1.2. Excess property checks and freshness.md>) (why extra members are ok except fresh literals), [3.1. Variance](<../02 The Type System Core/sections/3. Soundness and variance/3.1. Covariance contravariance and invariance who varies which way.md>) (how unions behave in positions). [03 Basic Types and Annotations](<../03 Basic Types and Annotations/README.md>) — [2.3. never and void](<../03 Basic Types and Annotations/sections/2. The Special Types/2.3. never and void bottom vs deliberate nothing.md>) (`never` as empty union / exhaustive marker), [3.3. Literal types](<../03 Basic Types and Annotations/sections/3. Annotations Inference and Literals/3.3. Literal types and const assertions.md>) (literal unions) and [1.3. null and undefined](<../03 Basic Types and Annotations/sections/1. The Primitive Family/1.3. null and undefined strictNullChecks and optionality.md>) (`T | null` vs optional). [04 Objects, Interfaces and Type Aliases](<../04 Objects Interfaces and Type Aliases/README.md>) — [2.1. Intersection vs extends](<../04 Objects Interfaces and Type Aliases/sections/2. Composition and Declaration Merging/2.1. Intersection vs extends composing object types.md>) (object composition) and [3.3. satisfies](<../04 Objects Interfaces and Type Aliases/sections/3. Advanced Object Types/3.3. satisfies assertions and narrowing on object shapes.md>) (literal preservation). [05 Functions and Callable Types](<../05 Functions and Callable Types/README.md>) — [3.3. Type guards](<../05 Functions and Callable Types/sections/3. Advanced Callable Patterns/3.3. Type guards predicates asserts and satisfies on functions.md>) (predicate vs assert shoulders; this domain extends them to union narrowing). [06 Classes and Object-Oriented Types](<../06 Classes and Object-Oriented Types/README.md>) — [1.1. Duality](<../06 Classes and Object-Oriented Types/sections/1. Class Type Fundamentals/1.1. Class as type and value duality instance vs constructor.md>) (`instanceof` narrowing relies on class heritage) and [2.3. Override](<../06 Classes and Object-Oriented Types/sections/2. Inheritance and Polymorphism/2.3. Override and polymorphic this typing.md>) (why `switch` over `kind` beats deep class hierarchies).

## 1. Union Types

### [1.1. Union fundamentals member access and the common property rule](<./sections/1. Union Types/1.1. Union fundamentals member access and the common property rule.md>)

1. **What `A | B` means** (set union — a value is *either* — why unions are the primary way to model alternatives in TypeScript).
2. **The common-property rule** (only properties present on *every* member are safely accessible without narrowing — the checker blocks the rest).
3. **Unions from optionality** (`T | null`, `T | undefined`, `T | null | undefined` — how `strictNullChecks` turns `T | null` from an erased habit into a checked contract).

### [1.2. Discriminated unions the tagged pattern that scales](<./sections/1. Union Types/1.2. Discriminated unions the tagged pattern that scales.md>)

1. **The discriminant** (a shared literal property `kind: "circle"` that the checker uses to split the union — why literal, not boolean).
2. **Scaling to many variants** (adding actions/events/states without growing an inheritance tree — the API-evolution advantage over class hierarchies).
3. **When a non-discriminated union is better** (two primitive alternatives, optional fields, or `in`-check narrowing — the cost of tagging everything).

### [1.3. Literal unions enums vs unions and exhaustiveness preview](<./sections/1. Union Types/1.3. Literal unions enums vs unions and exhaustiveness preview.md>)

1. **Literal union as a finite set** (`type Direction = "up" | "down"` — behaves like an enum without emitting values).
2. **Literal union vs `enum`** (literal unions erase, compose with template literals and `Exclude`, and stay erasable under `--erasableSyntaxOnly` — `enum` does not).
3. **Exhaustiveness hook** (`switch` with missing case should break — `never` assignment that proves it, preview of 3.2).

---

## 2. Intersection Types

### [2.1. Intersection fundamentals merging object shapes](<./sections/2. Intersection Types/2.1. Intersection fundamentals merging object shapes.md>)

1. **What `A & B` means** (set intersection — a value is *both* — why intersections are the glue for mixin / composition patterns).
2. **Merging object types** (`{a: string} & {b: number}` → `{a: string; b: number}` — reading the merged hover type and overlapping compatible members).
3. **Intersections vs `extends`** (when `type C = A & B` and `interface C extends A, B` agree and when error messages/conflicts diverge — link back to 04/2.1).

### [2.2. The never trap conflicting intersections and impossible states](<./sections/2. Intersection Types/2.2. The never trap conflicting intersections and impossible states.md>)

1. **Conflicting property trap** (`{ kind: "a" } & { kind: "b" }` → `never` on `kind` — why the whole intersection collapses to `never` and where it silently swallows downstream code).
2. **Impossible-state modeling** (using `never` to forbid illegal combinations — `HaveKey & WithoutKey` as a design tool, not a bug).
3. **Detecting the trap early** (hover shows `never`; assignment to `never` errors — the guard before it ships).

### [2.3. Unions and intersections distributive behavior and primitive intersections](<./sections/2. Intersection Types/2.3. Unions and intersections distributive behavior and primitive intersections.md>)

1. **Distributivity** (`(A|B) & C` distributes to `(A & C) | (B & C)` — reading distributed hover types and why order matters for filtering).
2. **Primitive intersections and `never`** (`string & number` is `never`; `string & {}` is `string` — the set-theoretic surprise for newcomers).
3. **Filtering with `Exclude`/`Extract` echo** (how `A & B` underpins conditional-type filtering — forward link to utility types without teaching them fully).

---

## 3. Control Flow Narrowing

### [3.1. Built-in narrowers typeof instanceof in and equality](<./sections/3. Control Flow Narrowing/3.1. Built-in narrowers typeof instanceof in and equality.md>)

1. **`typeof` and `instanceof`** (the two runtime checks the checker trusts — narrowing `string | number` with `typeof x === "string"` and `Dog | Cat` with `x instanceof Dog`).
2. **`in` and property checks** (`"value" in x`, `x.kind === "text"` — narrowing un-discriminated unions without a common literal tag).
3. **Equality and truthiness** (`x !== null`, `x != null`, `if (x)` — which checks eliminate `null | undefined` and which smuggle falsy bugs).

### [3.2. Exhaustiveness never and switch narrowing](<./sections/3. Control Flow Narrowing/3.2. Exhaustiveness never and switch narrowing.md>)

1. **Exhaustiveness via `never`** (`const _exhaustive: never = variant` — the assignment that proves you handled every branch).
2. **`switch` and `if/else` narrowing** (how control-flow analysis threads narrowed types through `switch(kind)` / `else if`; why `default: assertNever` beats `default: break`).
3. **When exhaustiveness is worth the ceremony** (public `APIResult`, state machines, reducers — the cases where a missing case is a production bug, not a style nit).

### [3.3. Custom narrowers predicates asserts and type guards on unions](<./sections/3. Control Flow Narrowing/3.3. Custom narrowers predicates asserts and type guards on unions.md>)

1. **Predicate `x is T` on unions** (`isCircle(shape): shape is Circle` — caller-side narrowing, not body validation; the `in`-guard vs predicate trade).
2. **`asserts x is T` / `asserts condition`** (throwing narrows after the call; `assertDefined` pattern for early-exit guards).
3. **`satisfies` + `as const` with unions** (preserving literal discriminants so narrowing stays precise — why `as` widens and hides missing branches).

---

## 4. Important points to remember (unions, intersections, narrowing)

### [4.1. Unions intersections narrowing checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Unions intersections narrowing checklist mental models mentors insist on.md>)

1. **Unions are checked by what is common — narrow first** (only shared members survive without a guard).
2. **Tag unions when variants grow** (a `kind` literal scales better than `in` checks and survives refactors).
3. **Intersections for composition, unions for alternatives** (if the value is both, use `&`; if either, use `|` — do not mix them to simulate exhaustiveness).
4. **Prove exhaustiveness with `never`** (every public union-typed switch/reducer gets a `never` sink; the next PR that adds a variant must fail).

---

## 5. Common pitfalls → production bugs (unions, intersections, narrowing)

### [5.1. Real production bugs caused by union and narrowing misunderstandings](<./sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by union and narrowing misunderstandings.md>)

1. **`in` check without discriminant caused alias narrowing to misfire** (common property narrowed the wrong branch and mutated the wrong shape).
2. **Conflicting intersection collapsed to `never` and silenced a handler** (the dead branch never ran; no error until a new variant shipped).
3. **Exhaustiveness without `never` let a new API status fall through `default: break`** (reducer returned stale state; no compile error to catch it).
4. **Predicate returned `boolean` instead of `x is T` so narrowing never happened downstream** (guard looked correct; the checker never narrowed).

---

## 6. Interview questions and answers (unions, intersections, narrowing)

### [6.1. Common interview QA — unions, intersections and narrowing](<./sections/6. Interview questions and answers/6.1. Common interview QA unions intersections and narrowing.md>)

1. **Why can I only access common members of `A | B` without narrowing?** (the set-safety argument).
2. **When does `{ kind: "a" } & { kind: "b" }` become `never` — and how do you catch it?** (conflicting literal intersection).
3. **How do you make a `switch` on a discriminated union exhaustive — and why `never`?** (proof that every variant is handled).
4. **When does `typeof` narrow and when do you need a custom predicate?** (runtime-checkable vs expression-level narrowing).
5. **`in` vs `x is T` vs `asserts x is T` — which narrows, when, and for whom?** (caller vs callee, throwing vs returning).

---

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries — what is covered elsewhere](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **Object-type composition details** (freshness, `readonly`/optional, declaration merging) — [04 Objects, Interfaces and Type Aliases](<../04 Objects Interfaces and Type Aliases/README.md>).
2. **Function-level variance and callable overloads** (contravariance, overloads vs unions on params) — [05 Functions and Callable Types](<../05 Functions and Callable Types/README.md>).
3. **Class hierarchies as union alternatives** (`extends`/`implements`/`abstract` vs discriminated unions) — [06 Classes and Object-Oriented Types](<../06 Classes and Object-Oriented Types/README.md>).
4. **Generics, conditional types, and mapped types over unions** (distributive `T extends U ? …` and `keyof` filtering) — [08 Generics Deep Dive](<../08 Generics Deep Dive/README.md>) + [09 Utility Types and Type Transformations](<../09 Utility Types and Type Transformations/README.md>) (textual forwards).
5. **Compiler strictness flags** (`strictNullChecks`, `noImplicitAny`, `--strict`) — [13 Configuration and Compiler Options](<../13 Configuration and Compiler Options/README.md>) (textual forward).

[← Back to track](<../README.md>)
