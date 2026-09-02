# Objects, Interfaces and Type Aliases

How TypeScript models *object shapes* statically: structural object types, optional and `readonly` members, index signatures, when an `interface` differs from a `type` alias, how composition via `&`/`extends` builds larger shapes, and how declaration merging powers ambient augmentation. This domain owns the static object-type model — runtime object mechanics live in [JavaScript 06 Objects in Depth](<../../JavaScript/06 Objects in Depth/README.md>).

## 0. Prerequisites

[01 Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) — especially [2.1. Type erasure](<../01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.1. Type erasure what survives compilation.md>) (all object-type syntax erases) and [3.3. Choosing erasable syntax](<../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>) (both `interface` and `type` are erasable). [02 The Type System Core](<../02 The Type System Core/README.md>) — [1.1. Structural assignability](<../02 The Type System Core/sections/1. Structural typing/1.1. Structural assignability shape not name.md>) (why extra members are ok), [1.2. Excess property checks](<../02 The Type System Core/sections/1. Structural typing/1.2. Excess property checks and freshness.md>) (freshness), [1.3. Branding](<../02 The Type System Core/sections/1. Structural typing/1.3. Nominal typing techniques branding and opaque types.md>) and [2.3. Type queries](<../02 The Type System Core/sections/2. The type vs value separation/2.3. Type queries typeof keyof and indexed access.md>) (`keyof`/`T[K]`). [03 Basic Types and Annotations](<../03 Basic Types and Annotations/README.md>) — [1.3. null and undefined](<../03 Basic Types and Annotations/sections/1. The Primitive Family/1.3. null and undefined strictNullChecks and optionality.md>) (optionality) and [3.1. Annotation syntax](<../03 Basic Types and Annotations/sections/3. Annotations Inference and Literals/3.1. Annotation syntax where types appear.md>) (`satisfies` vs `as`).

## 1. Object Type Fundamentals

### [1.1. Object types structural shape and excess property checks](<./sections/1. Object Type Fundamentals/1.1. Object types structural shape and excess property checks.md>)

1. **Structural shape** (an object type is a set of required members — assignability is by shape, not by name; extra members are allowed via width subtyping).
2. **Freshness at the literal** (assigning a fresh literal directly triggers an excess-property error; the same literal through a variable does not — diagnosis vs core rule).
3. **Sealing the leak** (when to use `satisfies`, a wider target, or an explicit annotation to keep literals honest without widening callers).

### [1.2. Optional readonly and index signatures](<./sections/1. Object Type Fundamentals/1.2. Optional readonly and index signatures.md>)

1. **Optional members** (`prop?: T` vs `prop: T | undefined` — assignability, `exactOptionalPropertyTypes`, and narrowing).
2. **`readonly` at the type level** (prevents *type-checked* writes but emits no runtime freeze — contrast with `Object.freeze`).
3. **Index signatures** (`[key: string]: T` — the open-ended dictionary escape; why mapped types and `Record` are usually safer).

### [1.3. Interfaces vs type aliases when to use which](<./sections/1. Object Type Fundamentals/1.3. Interfaces vs type aliases when to use which.md>)

1. **What overlaps** (both can describe object shapes, both erase, both participate structurally — 90% interchangeable for shapes).
2. **What diverges** (`interface` merges and extends nominally; `type` aliases compose via `&`/`|`, support mapped/conditional/template-literal operators, and can name any type).
3. **Team rule of thumb** (public, augmentable contracts → `interface`; composite, utility, or union shapes → `type` — with `erasableSyntaxOnly` both stay safe).

---

## 2. Composition and Declaration Merging

### [2.1. Intersection vs extends composing object types](<./sections/2. Composition and Declaration Merging/2.1. Intersection vs extends composing object types.md>)

1. **Two composition operators** (`interface B extends A` vs `type B = A & { extra }` — similar results, different error reporting and assignability edges).
2. **When they disagree** (conflicting property types, optional vs required overrides, intersection with primitives/union members).
3. **Readability trade-off** (extends chains read like inheritance; intersections read like set union — error messages differ at scale).

### [2.2. Declaration merging and module augmentation](<./sections/2. Composition and Declaration Merging/2.2. Declaration merging and module augmentation.md>)

1. **What merges** (`interface` with `interface`, `namespace` with `class`/`function`/`enum` — `type` never merges; module scope disables global merging).
2. **Ambient augmentation** (`declare global`, `declare module "pkg"` — how `.d.ts` and `@types` extend third-party shapes without forking).
3. **Risks and guardrails** (uncontrolled augmentation leaks globally; prefer scoped module augmentation and lint for duplicate `interface` names).

### [2.3. Type queries on objects keyof indexed access and typeof capture](<./sections/2. Composition and Declaration Merging/2.3. Type queries on objects keyof indexed access and typeof capture.md>)

1. **`keyof` and `T[K]` on object types** (`keyof {a:number,b:string}` → `"a"|"b"`; `T[keyof T]` as ad-hoc value union).
2. **`typeof` value capture** (`const cfg = { host: "localhost" } as const; type Cfg = typeof cfg` — snapshot the shape without duplicating it).
3. **Why queries erase** (like every type operator, they leave no emit — bridging value and type spaces with zero runtime cost).

---

## 3. Advanced Object Types

### [3.1. Recursive object types and self-referential structures](<./sections/3. Advanced Object Types/3.1. Recursive object types and self-referential structures.md>)

1. **Self-reference** (`type Tree = { value: number; children: Tree[] }` — how the checker handles recursion and where it gives up).
2. **Mutual recursion** (two types naming each other — `type A = { b: B }` / `type B = { a: A }` — termination and depth limits).
3. **Practical guard** (prefer `interface` for recursive object shapes; keep recursion shallow and expose a depth budget in code review).

### [3.2. Branded and opaque object patterns for domain safety](<./sections/3. Advanced Object Types/3.2. Branded and opaque object patterns for domain safety.md>)

1. **Why object branding matters** (two `{ id: string }` shapes that must not mix — `User` vs `Order` — structural typing alone conflates them).
2. **Object-level branding** (`type User = { id: string } & { __brand: "User" }`; branded factories hide the assertion; `unique symbol` key variant).
3. **Cost vs safety** (every branded value needs a validated factory; over-branding fractures composition — brand at module boundaries, not every leaf).

### [3.3. satisfies assertions and narrowing on object shapes](<./sections/3. Advanced Object Types/3.3. satisfies assertions and narrowing on object shapes.md>)

1. **`satisfies` vs `as` on objects** (`satisfies` checks shape while *preserving* literal narrowness; `as` widens and silences).
2. **`as const` on objects** (deep `readonly` + literal types for config/theme/route tables — when to use over `satisfies`).
3. **Narrowing object unions** (`in`, `typeof` on discriminant, `hasOwnProperty` — the narrowing tools that pair with object types; full discriminated-union treatment in 07).

---

## 4. Important points to remember (objects, interfaces, type aliases)

### [4.1. Objects interfaces checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Objects interfaces checklist mental models mentors insist on.md>)

1. **Shape not name governs assignability** (freshness is the exception — know its two triggers and two escapes).
2. **Optionality has three spellings** (`?:`, `| undefined`, both — `exactOptionalPropertyTypes` changes the matrix).
3. **Compose with the lightest operator** (`extends` for nominal chains, `&` for set-like composition — read the error message to decide).
4. **Brand at boundaries, not every leaf** (factories prove the brand once; callers carry it without re-asserting).

---

## 5. Common pitfalls → production bugs (objects, interfaces, type aliases)

### [5.1. Real production bugs caused by object type misunderstandings](<./sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by object type misunderstandings.md>)

1. **Freshness escape via `as`** (excess property smuggled into a narrower target and surfacing three calls later).
2. **`readonly` without `freeze`** (`readonly` silenced a write at compile time but the runtime mutation still landed).
3. **Index signature widens exactness** (a dictionary type accepted `unknown` keys and bypassed discriminant checks).
4. **Merged interface collision** (ambient augmentation added an optional property that made a required property effectively optional across the app).

---

## 6. Interview questions and answers (objects, interfaces, type aliases)

### [6.1. Common interview QA — objects interfaces and type aliases](<./sections/6. Interview questions and answers/6.1. Common interview QA objects interfaces and type aliases.md>)

1. **`interface` vs `type` — when does it matter?** (merging, unions, mapped/conditional, primitives — the decision table).
2. **Why does `{ a: 1, b: 2, extra: 3 }` error when passed directly but not via a variable?** (freshness, not structural failure).
3. **`extends` vs `&` — are they the same?** (error deltas, conflicting members, optional overrides — senior answer).
4. **How do you model a branded `UserId` object?** (intersection + factory vs class private field).
5. **`satisfies` vs `as` on an object literal** (preserved literal vs widened and silenced).

---

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries — what is covered elsewhere](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **JavaScript runtime mechanics** (descriptors, prototype, enumeration) — [JavaScript 06 Objects in Depth](<../../JavaScript/06 Objects in Depth/README.md>).
2. **Unions, intersections, and narrowing** (type-level composition, `in`/`is` guards, discriminant unions) — [07 Unions, Intersections and Narrowing](<../07 Unions Intersections and Narrowing/README.md>) (textual forward until that domain lands; this domain only reaches `&`/`extends` on object shapes).
3. **Functions and classes** (callable signatures, methods, accessors) — [05 Functions and Callable Types](<../05 Functions and Callable Types/README.md>) + [06 Classes and Object-Oriented Types](<../06 Classes and Object-Oriented Types/README.md>) (textual).
4. **Generics / utility-type transformations** (mapped, conditional, `infer`, template literals building object shapes) — [08 Generics Deep Dive](<../08 Generics Deep Dive/README.md>) + [09 Utility Types and Type Transformations](<../09 Utility Types and Type Transformations/README.md>) (textual).
5. **Configuration deep dive** (`exactOptionalPropertyTypes`, `strictNullChecks`, `erasableSyntaxOnly`) — [13 Configuration and Compiler Options](<../13 Configuration and Compiler Options/README.md>) (textual).

[← Back to track](<../README.md>)
