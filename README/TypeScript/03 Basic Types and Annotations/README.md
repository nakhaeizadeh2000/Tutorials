# Basic Types and Annotations

The inventory every TypeScript file starts with: the primitive types that never need an import (`string`, `number`, `boolean`, `bigint`, `symbol`, `null`, `undefined`), the special types that model absence and ignorance (`any`, `unknown`, `never`, `void`), and the rules that decide when you write a type and when you let the checker infer it. This domain owns literal types and `const` assertions — later domains add objects, functions, and generics on top.

## 0. Prerequisites

[01 Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) — especially [2.1. Type erasure](<../01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.1. Type erasure what survives compilation.md>) (erasure) and [1.3. Superset, soundness](<../01 Fundamentals and Mental Model/sections/1. What TypeScript is/1.3. Superset soundness and the type system flavor.md>) (gradual typing). [02 The Type System Core](<../02 The Type System Core/README.md>) — [2.1. Type space vs value space](<../02 The Type System Core/sections/2. The type vs value separation/2.1. Type space vs value space two parallel universes.md>) (where types live) and [1.1. Structural assignability](<../02 The Type System Core/sections/1. Structural typing/1.1. Structural assignability shape not name.md>) (why extra members are ok). JavaScript values from [JavaScript 03 Values, Types, and Coercion](<../../JavaScript/03 Values Types and Coercion/README.md>) (runtime `typeof` vs static types).

## 1. The Primitive Family

### [1.1. string number boolean and the wrapper pitfall](<./sections/1. The Primitive Family/1.1. string number boolean and the wrapper pitfall.md>)

1. **The three workhorses** (what `string`, `number`, `boolean` mean statically and how they erase — no runtime wrapper).
2. **Primitives vs wrappers** (`string` vs `String`, `number` vs `Number` — the boxed object types exist but are almost never what you want).
3. **When widening bites** (`let` widens a literal to its primitive; `const` keeps the literal — the first taste of inference).

### [1.2. bigint and symbol the ES-era primitives](<./sections/1. The Primitive Family/1.2. bigint and symbol the ES-era primitives.md>)

1. **bigint is its own lane** (`123n` is not `number` — arithmetic, `target`/`lib`, and JSON serialization consequences).
2. **symbol and unique symbol** (`symbol` vs `unique symbol` — the only literal-like primitive that needs `typeof` bridging).
3. **Why they stay rare** (API cost vs benefit — most domains reach for `string`/`number` first).

### [1.3. null and undefined strictNullChecks and optionality](<./sections/1. The Primitive Family/1.3. null and undefined strictNullChecks and optionality.md>)

1. **Two absences, different intent** (`undefined` means "not yet assigned / not present"; `null` means "intentionally empty" — TypeScript makes both explicit under `--strict`).
2. **strictNullChecks is the divider** (without it `null`/`undefined` are assignable to everything; with it they are separate members — the single most impactful flag).
3. **Optionality vs union** (`prop?: string` vs `prop: string | undefined` vs `prop: string | null` — assignability and `--exactOptionalPropertyTypes`).

---

## 2. The Special Types

### [2.1. any the unchecked escape hatch](<./sections/2. The Special Types/2.1. any the unchecked escape hatch.md>)

1. **What any disables** (every check: assignability, property access, calls — `any` is compatible with everything and everything is compatible with `any`).
2. **How it leaks** (one `any` in a return type infects callers; `any[]` vs `unknown[]` downstream consequences).
3. **Budgeting, not banning** (migration escape valve with `// @ts-ignore` vs disciplined alternative `unknown` + narrowing).

### [2.2. unknown the type-safe top type](<./sections/2. The Special Types/2.2. unknown the type-safe top type.md>)

1. **Top type that forces a check** (assignable *from* everything, assignable *to* nothing without narrowing — the safe counterpart to `any`).
2. **Narrowing unknown** (`typeof`, `instanceof`, `in`, predicates, `zod`/`valibot` — the only ways to leave `unknown` legally).
3. **Where unknown belongs** (boundaries: network, file, `JSON.parse`, `catch` variables since TS 4.4 `useUnknownInCatchVariables`).

### [2.3. never and void bottom vs deliberate nothing](<./sections/2. The Special Types/2.3. never and void bottom vs deliberate nothing.md>)

1. **never is the empty set** (no value inhabits `never` — exhaustiveness, unreachable branches, conditional filtering).
2. **void is deliberate nothing** (a function returning `void` may return `undefined` implicitly — `void` is not `undefined`, and callers must not depend on the value).
3. **never vs void in signatures** (`() => void` vs `() => never` vs `() => undefined` — assignability, callback variance, and `strict` interactions).

---

## 3. Annotations Inference and Literals

### [3.1. Annotation syntax where types appear](<./sections/3. Annotations Inference and Literals/3.1. Annotation syntax where types appear.md>)

1. **Where you may annotate** (variable `let x: string`, parameter `(x: string)`, return `(): string`, property `prop: string`, `as` vs `satisfies` at the value site).
2. **Where you must not** (no runtime annotation semantics — annotations erase; `erasableSyntaxOnly` catches non-erasable attempts).
3. **Annotation style in code review** (annotate public contracts and exported signatures; let locals infer — signal vs noise trade-off).

### [3.2. Type inference widening and contextual typing](<./sections/3. Annotations Inference and Literals/3.2. Type inference widening and contextual typing.md>)

1. **Widening defaults** (`let` widens `"hello"` → `string`; `const` keeps `"hello"` — control via annotation or `const` assertion).
2. **Best common type and contextual typing** (how `let x = [1, "a"]` becomes `(string | number)[]` and how arrow parameters infer without annotation).
3. **When inference surprises** (`noImplicitAny`, generic inference from empty arrays, `null`/`undefined` widening under `strictNullChecks`).

### [3.3. Literal types and const assertions](<./sections/3. Annotations Inference and Literals/3.3. Literal types and const assertions.md>)

1. **Literal as subtype** (`"success"` is assignable to `string`, not vice-versa — string literal unions as enums without emit).
2. **const assertions and as const** (`{ x: 1 } as const` → `readonly` + literal narrowing; `satisfies` preserves literal while checking shape).
3. **Template literal types preview** (forward link to mapped/utility domains — where literal types compose into type-level programs).

---

## 4. Important points to remember (basic types)

### [4.1. Basic types checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Basic types checklist mental models mentors insist on.md>)

1. **Primitives are unboxed** (`string` not `String` — wrappers allocate objects and break strict equality).
2. **Nullability is explicit under strict** (`string` excludes `null`/`undefined`; optionality has three spellings with different assignability).
3. **any leaks unknown contains** (default to `unknown` at boundaries; exhaust `never` for completeness).
4. **Annotate contracts infer locals** (review signal: exported types are documented; local types are inferred).

---

## 5. Common pitfalls → production bugs (basic types)

### [5.1. Real production bugs caused by basic type misunderstandings](<./sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by basic type misunderstandings.md>)

1. **String wrapper comparison** (`new String("a") !== "a"` — boxed strings break `Map`/`Set` keys).
2. **Implicit any from empty array** (`let xs = []; xs.push(1); xs.push("oops")` — becomes `any[]` under `noImplicitAny: false`).
3. **Void vs undefined callback misuse** (`forEach` callback returning a value that caller ignores vs depends upon).
4. **Optional vs undefined mismatch** (`{ prop?: string }` passed where `prop: string | undefined` expected — `--exactOptionalPropertyTypes` reveals the gap).

---

## 6. Interview questions and answers (basic types)

### [6.1. Common interview QA — basic types and annotations](<./sections/6. Interview questions and answers/6.1. Common interview QA basic types and annotations.md>)

1. **string vs String** (why the lowercase is correct and when the wrapper type appears in `.d.ts`).
2. **any vs unknown vs never** (three "not sure" flavors — assignability table interviewers probe).
3. **null vs undefined with strictNullChecks** (what changes when the flag flips).
4. **When to annotate** (public API vs local inference — the code-review answer that signals seniority).
5. **Literal types and widening** (why `let x = "hello"` is `string` but `const x = "hello"` is `"hello"`).

---

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries — what is covered elsewhere](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **Objects, interfaces, and type aliases** — [04 Objects, Interfaces and Type Aliases](../04 Objects Interfaces and Type Aliases/README.md) (textual forward until that domain lands).
2. **Unions, intersections, and narrowing** — [07 Unions, Intersections and Narrowing](../07 Unions Intersections and Narrowing/README.md) (textual).
3. **Enums and their non-erasable cost** — [01 Fundamentals 3.3 Choosing erasable syntax](<../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>) + [11 Enums and Literal Types](../11 Enums and Literal Types/README.md) (textual).
4. **Generics and utility-type transformations** — [08 Generics Deep Dive](../08 Generics Deep Dive/README.md) + [09 Utility Types and Type Transformations](../09 Utility Types and Type Transformations/README.md) (textual).
5. **Configuration flags deep dive** (`strict`, `noImplicitAny`, `exactOptionalPropertyTypes`, `useUnknownInCatchVariables`) — [13 Configuration and Compiler Options](../13 Configuration and Compiler Options/README.md) (textual).

[← Back to track](<../README.md>)
