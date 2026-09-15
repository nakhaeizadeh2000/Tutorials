# Enums and Literal Types

How TypeScript names *finite value sets* — enums (`enum Direction { Up, Down }`) as the value-carrying legacy choice with real emit, and literal types (`"up" | "down"`) as the erasable modern default. Literal basics live in [03 Basic Types](<../03 Basic Types and Annotations/README.md>) ([3.3. Literal types](<../03 Basic Types and Annotations/sections/3. Annotations Inference and Literals/3.3. Literal types and const assertions.md>)); the union-vs-enum preview lives in [07 Unions](<../07 Unions Intersections and Narrowing/README.md>) ([1.3. Literal unions](<../07 Unions Intersections and Narrowing/sections/1. Union Types/1.3. Literal unions enums vs unions and exhaustiveness preview.md>)); the erasable-syntax inventory lives in [01 Fundamentals](<../01 Fundamentals and Mental Model/README.md>) ([3.3. Choosing erasable syntax](<../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>)) — this domain owns *enums fully* (numeric, string, heterogeneous, ambient, `const`), the *migration decision* (when unions replace enums and how), and the *literal patterns enums can't express* (`const` type parameters, enum-member exhaustiveness, nominal branding choices).

## 0. Prerequisites

[01 Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) — [2.1. Type erasure](<../01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.1. Type erasure what survives compilation.md>) (enums are the famous *exception* — they emit) and [3.3. Choosing erasable syntax](<../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>) (the `--erasableSyntaxOnly` enum ban this domain resolves). [03 Basic Types and Annotations](<../03 Basic Types and Annotations/README.md>) — [3.3. Literal types](<../03 Basic Types and Annotations/sections/3. Annotations Inference and Literals/3.3. Literal types and const assertions.md>) (literal basics unions build on). [07 Unions, Intersections and Narrowing](<../07 Unions Intersections and Narrowing/README.md>) — [1.3. Literal unions](<../07 Unions Intersections and Narrowing/sections/1. Union Types/1.3. Literal unions enums vs unions and exhaustiveness preview.md>) (union-vs-enum preview completed here) and [3.2. Exhaustiveness](<../07 Unions Intersections and Narrowing/sections/3. Control Flow Narrowing/3.2. Exhaustiveness never and switch narrowing.md>) (never-sink mechanics enum switches inherit). [08 Generics Deep Dive](<../08 Generics Deep Dive/README.md>) — [1.2. Inference](<../08 Generics Deep Dive/sections/1. Generic Fundamentals/1.2. Inference from arguments and explicit type arguments.md>) (widening behavior `const` type parameters override).

## 1. Enum Mechanics

### [1.1. Numeric enums auto values and reverse mapping](<./sections/1. Enum Mechanics/1.1. Numeric enums auto values and reverse mapping.md>)

1. **Auto-incremented values** (`Up` = 0, `Down` = 1 — declaration order becomes data; inserting a member renumbers followers).
2. **Reverse mapping** (`Direction[0]` → `"Up"` — the emitted lookup table maps both directions; strings and `const` enums lack it).
3. **Numeric enums as bit flags** (`Read = 1 << 0` — combinable members with `|`; the one numeric-enum pattern that survives migration pressure).

### [1.2. String enums intent and no reverse mapping](<./sections/1. Enum Mechanics/1.2. String enums intent and no reverse mapping.md>)

1. **Explicit string values** (`Up = "UP"` — self-describing at runtime; logged values readable without a lookup table).
2. **No reverse mapping** (string enums emit one direction only — `Direction["UP"]` is not a thing; debuggability differs from numeric).
3. **String enums vs string unions at runtime** (the enum *value* exists (`Direction.Up`); the union exists only in types — when the value matters).

### [1.3. Heterogeneous ambient and computed members](<./sections/1. Enum Mechanics/1.3. Heterogeneous ambient and computed members.md>)

1. **Heterogeneous members** (mixed string/number in one enum — legal, discouraged; readability and narrowing costs).
2. **Computed members** (`Len = "a".length` — evaluable expressions as values; const-ness requirements per position).
3. **Ambient enums** (`declare enum` — describing foreign enums without emitting; the `.d.ts` interop shape).

---

## 2. Enums vs Erasable Alternatives

### [2.1. const enum inlining and isolatedModules danger](<./sections/2. Enums vs Erasable Alternatives/2.1. const enum inlining and isolatedModules danger.md>)

1. **Compile-time inlining** (`const enum` members substituted as literals at use sites — zero object emit, fastest reads).
2. **`isolatedModules` breakage** (single-file transpilers cannot inline cross-file `const enum` — the value vanishes; `isolatedModules` errors by default).
3. **When inlining pays vs burns** (self-contained numeric tables → pays; shared libraries, Babel/esbuild pipelines → burns).

### [2.2. erasableSyntaxOnly the enum ban and migration](<./sections/2. Enums vs Erasable Alternatives/2.2. erasableSyntaxOnly the enum ban and migration.md>)

1. **Why enums fail the erasable rule** (only non-erasable namespace feature besides namespaces — emit *is* the feature; TS 5.8 flag bans it).
2. **The migration map** (numeric → union + lookup table; string → union + `as const` object; `const enum` → union + inlined literals).
3. **Migrating incrementally** (alias the union to the enum's shape first, move consumers, delete the enum last — zero-flag-day rewrites).

### [2.3. Literal unions as enums the decision rule](<./sections/2. Enums vs Erasable Alternatives/2.3. Literal unions as enums the decision rule.md>)

1. **The default rule** (new code: literal unions — erasable, composable with `Exclude`/templates, no emit; enums only with a recorded reason).
2. **Legitimate enum survivors** (numeric bit flags with reverse lookup needs, ambient foreign enums, isolated non-erasable codebases).
3. **Review stamp** (new `enum` declarations require a comment justifying why the union form fails — no comment, no enum).

---

## 3. Literals and Nominal Patterns

### [3.1. const type parameters and literal preservation](<./sections/3. Literals and Nominal Patterns/3.1. const type parameters and literal preservation.md>)

1. **What `<const T>` changes** (TS 5.0: inference keeps literals *and* readonly-ness without `as const` at the call — `f("get")` gives `"get"`, `[…]` gives `readonly […]`).
2. **`const` params vs `as const` arguments** (declaration-side default vs call-site assertion — who owns the precision decision).
3. **When `const` params over-narrow** (helpers wanting `string` get `"get"`-specific results — widen the return, not the source).

### [3.2. Exhaustive switches over enums and unions](<./sections/3. Literals and Nominal Patterns/3.2. Exhaustive switches over enums and unions.md>)

1. **Enum-member exhaustiveness** (`switch (dir)` with `never` default — adding a member breaks the build; the 07/3.2 mechanic on enum inputs).
2. **Reverse-mapping widening trap** (`Direction[0]` types `string`, not `"Up"` — numeric reverse lookup escapes literal precision).
3. **Union exhaustiveness parity** (same `never` sink over `"up" | "down"` — proof that unions match enums on safety while winning on erasure).

### [3.3. Nominal enum patterns branding vs enums](<./sections/3. Literals and Nominal Patterns/3.3. Nominal enum patterns branding vs enums.md>)

1. **Branded string unions for domain ids** (`` `user_${string}` `` + brand — nominal-flavored identity without enum emit).
2. **When enum identity wins** (foreign-protocol numeric codes, reverse-lookup debugging, ambient declarations — value-identity needs).
3. **Choosing nominal flavor** (brand vs enum vs opaque class — the identity decision table for domain modeling).

---

## 4. Important points to remember (enums and literals)

### [4.1. Enums checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Enums checklist mental models mentors insist on.md>)

1. **Unions by default, enums by recorded reason** (erasure + composition beat emit unless flags/lookup/interop demand otherwise).
2. **Numeric enums carry two behaviors** (auto-values that renumber + reverse maps that widen — know both before choosing).
3. **`const` contexts preserve literals** (`as const` sources, `<const T>` params, narrow returns — precision at every joint).
4. **Exhaust every finite set with `never`** (enum or union — the sink proves coverage; the next variant must fail).

---

## 5. Common pitfalls → production bugs (enums and literals)

### [5.1. Real production bugs caused by enum misunderstandings](<./sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by enum misunderstandings.md>)

1. **Inserted enum member renumbered persisted order statuses** (auto-values shifted in Postgres; historical rows reinterpreted).
2. **`const enum` vanished under esbuild and crashed at import** (cross-file inlining impossible; `Direction is not defined` in production).
3. **Reverse-mapped lookup widened to `string` and skipped validation** (`Direction[code]` typed `string`; invalid codes flowed into an exhaustive switch's dead branch).
4. **Stringly `Record<string, Handler>` duplicated the enum table and drifted** (parallel registration map missed a new member; unauthenticated path shipped).

---

## 6. Interview questions and answers (enums and literals)

### [6.1. Common interview QA — enums and literal types](<./sections/6. Interview questions and answers/6.1. Common interview QA enums and literal types.md>)

1. **What does a numeric enum emit — and why does `Direction[0]` work while `StringEnum["UP"]` doesn't?** (reverse-mapping tables).
2. **Why does `--erasableSyntaxOnly` ban enums — and what replaces each enum kind?** (emit-is-the-feature + migration map).
3. **When is `const enum` unsafe — and what breaks under `isolatedModules`/esbuild?** (cross-file inlining impossibility).
4. **Union vs enum for a new status field — which by default, and what recorded reason overrides?** (decision rule + survivors).
5. **What does `<const T>` change about `f("get")` — and when does it over-narrow?** (declaration-side literal preservation).

---

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries — what is covered elsewhere](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **Literal basics, widening, and `as const` sources** (literal types, `as const` assertions, widening control) — [03 Basic Types and Annotations](<../03 Basic Types and Annotations/README.md>).
2. **Union algebra, narrowing, and exhaustiveness mechanics** (distributivity, discriminants, `never` sinks, predicates) — [07 Unions, Intersections and Narrowing](<../07 Unions Intersections and Narrowing/README.md>).
3. **Template composition and literal preservation through transforms** (intrinsics, key generation, `satisfies` pairs, return-`M` joints) — [09 Utility Types and Type Transformations](<../09 Utility Types and Type Transformations/README.md>).
4. **Erasable-syntax inventory and execution pipelines** (what erases, `--erasableSyntaxOnly` enforcement, running TS) — [01 Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>).
5. **Compiler strictness flags** (`strict`, `isolatedModules`, `--erasableSyntaxOnly` configuration) — [13 Configuration and Compiler Options](<../13 Configuration and Compiler Options/README.md>) (textual forward).

[← Back to track](<../README.md>)
