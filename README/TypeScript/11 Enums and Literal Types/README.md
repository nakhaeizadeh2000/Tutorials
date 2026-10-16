# Enums and Literal Types

How TypeScript names *finite value sets* — enums (`enum Direction { Up, Down }`) as the value-carrying legacy choice with real emit, and literal types (`"up" | "down"`) as the erasable modern default. Literal basics live in [03 Basic Types](<../03 Basic Types and Annotations/README.md>) ([3.3. Literal types](<../03 Basic Types and Annotations/sections/3. Annotations Inference and Literals/3.3. Literal types and const assertions.md>)); the union-vs-enum preview lives in [07 Unions](<../07 Unions Intersections and Narrowing/README.md>) ([1.3. Literal unions](<../07 Unions Intersections and Narrowing/sections/1. Union Types/1.3. Literal unions enums vs unions and exhaustiveness preview.md>)); the erasable-syntax inventory lives in [01 Fundamentals](<../01 Fundamentals and Mental Model/README.md>) ([3.3. Choosing erasable syntax](<../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>)) — this domain owns *enums fully* (numeric, string, heterogeneous, ambient, `const`), the *migration decision* (when unions replace enums and how), and the *literal patterns enums can't express* (`const` type parameters, enum-member exhaustiveness, nominal branding choices).

## 0. Prerequisites

[01 Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) — [2.1. Type erasure](<../01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.1. Type erasure what survives compilation.md>) (enums are the famous *exception* — they emit) and [3.3. Choosing erasable syntax](<../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>) (the `--erasableSyntaxOnly` enum ban this domain resolves). [03 Basic Types and Annotations](<../03 Basic Types and Annotations/README.md>) — [3.3. Literal types](<../03 Basic Types and Annotations/sections/3. Annotations Inference and Literals/3.3. Literal types and const assertions.md>) (literal basics unions build on). [07 Unions, Intersections and Narrowing](<../07 Unions Intersections and Narrowing/README.md>) — [1.3. Literal unions](<../07 Unions Intersections and Narrowing/sections/1. Union Types/1.3. Literal unions enums vs unions and exhaustiveness preview.md>) (union-vs-enum preview completed here) and [3.2. Exhaustiveness](<../07 Unions Intersections and Narrowing/sections/3. Control Flow Narrowing/3.2. Exhaustiveness never and switch narrowing.md>) (never-sink mechanics enum switches inherit). [08 Generics Deep Dive](<../08 Generics Deep Dive/README.md>) — [1.2. Inference](<../08 Generics Deep Dive/sections/1. Generic Fundamentals/1.2. Inference from arguments and explicit type arguments.md>) (widening behavior `const` type parameters override).

## 1. Enum Mechanics

### [1.1. Numeric enums auto values and reverse mapping](<./sections/1. Enum Mechanics/1.1. Numeric enums auto values and reverse mapping.md>)

1. **Numbering and stable codes:** observe automatic sequences, explicit anchors and simulated old/new decoding; separate broad numeric acceptance from validation.
2. **Runtime reverse entries:** inspect emitted mappings, duplicate aliases, named type keys and missing reads under the index option.
3. **Bit-mask contracts:** test all/any/empty masks, signed 32-bit limits and a bounded runtime parser; compare an erasable constant-object alternative.

### [1.2. String enums intent and no reverse mapping](<./sections/1. Enum Mechanics/1.2. String enums intent and no reverse mapping.md>)

1. **Explicit values and member contracts:** verify stable initializer values, raw-literal rejection and member-to-literal compatibility without treating enums as parsers.
2. **Forward tables and inverse policy:** observe key/value coincidences, missing reads and duplicate-value collisions; implement an actual unknown-value parser.
3. **Runtime alternatives:** use a retained const default, a literal union and a named const object for defaults, computed keys and iteration; compare their toolchain/API contracts.

### [1.3. Heterogeneous ambient and computed members](<./sections/1. Enum Mechanics/1.3. Heterogeneous ambient and computed members.md>)

1. **Mixed value domains:** observe heterogeneous forward/reverse entries and compare an equivalent union without claiming it removes numeric/string reasoning.
2. **Computed initialization:** distinguish folded constants, retained runtime expressions and current computed member types; observe call counts and rejected followers.
3. **Ambient provider contracts:** run a complete declaration/JavaScript/consumer fixture, diagnose missing implementations and test a real declaration/provider version mismatch.

---

## 2. Enums vs Erasable Alternatives

### [2.1. const enum inlining and isolatedModules danger](<./sections/2. Enums vs Erasable Alternatives/2.1. const enum inlining and isolatedModules danger.md>)

1. **Option-dependent output:** compare default inlining, preserveConstEnums tables and isolated source enum references without claiming every mode erases the object.
2. **Actual transform compatibility:** execute local and exported cross-file const enums under pinned esbuild/Babel modes and inspect the differing output contracts.
3. **Ambient publication boundaries:** reproduce stale inlined values and a missing runtime object, then repair the declaration/provider pair with a supported value contract.

### [2.2. erasableSyntaxOnly the enum ban and migration](<./sections/2. Enums vs Erasable Alternatives/2.2. erasableSyntaxOnly the enum ban and migration.md>)

1. **Exact syntax boundary:** distinguish runtime enums from ambient descriptions and type-only namespaces; separate stripping from supported transforms.
2. **Observed migration contracts:** run enum, bridge and final string programs and preserve an explicit numeric label policy while exposing changed reflection and input admission.
3. **Actual execution and rollout:** check the final gate, compare emitted JavaScript with Node 22.18 native stripping and define migration boundaries through real compiler programs.

### [2.3. Literal unions as enums the decision rule](<./sections/2. Enums vs Erasable Alternatives/2.3. Literal unions as enums the decision rule.md>)

1. **Separate runtime data from accepted values:** compare literal unions, const objects and enums by defaults, iteration, API compatibility and the actual processing pipeline.
2. **Verify composition and identity:** filter enum members directly, interpolate values and observe raw-literal versus separately named enum admission.
3. **Review a demonstrated requirement:** use object-backed bit masks and finite-handler extensions to test claimed enum-only needs without imposing comment or declaration-count policy.

---

## 3. Literals and Nominal Patterns

### [3.1. const type parameters and literal preservation](<./sections/3. Literals and Nominal Patterns/3.1. const type parameters and literal preservation.md>)

1. **Actual inference contrast:** compare already-preserved primitive literals with fresh aggregate const inference and caller-side const assertions.
2. **Boundaries and constraints:** observe prebound mutable arrays, shared references, explicit arguments and mutable versus readonly constraints without assuming freezing.
3. **Published return contracts:** distinguish template relationships from explicit string returns and extend a finite registry derived from an inferred literal tuple.

### [3.2. Exhaustive switches over enums and unions](<./sections/3. Literals and Nominal Patterns/3.2. Exhaustive switches over enums and unions.md>)

1. **Enum and union coverage:** observe matching never-sink failures after an addition, retained runtime throws and semantically wrong fallbacks that still compile.
2. **Reverse names and numeric boundaries:** distinguish open reverse lookup types, inherited property keys and a parser that actually admits recognized values.
3. **Independent extension obligations:** update a member handler and parser separately, then test runtime acceptance rather than treating a successful build as completeness.

### [3.3. Nominal enum patterns branding vs enums](<./sections/3. Literals and Nominal Patterns/3.3. Nominal enum patterns branding vs enums.md>)

1. **Domain distinction and representation:** compare checked branded id callers with actual validation, assertion bypass and unchanged primitive serialization.
2. **Tables are independent data:** combine a branded numeric code with Map lookup and compare enum-generated reverse entries without claiming exclusive ownership of lookup behavior.
3. **Class identity and private state:** distinguish static private-member compatibility, prototype-based instanceof and actual private-field possession; test an intentional serialization change.

---

## 4. Important points to remember (enums and literals)

### [4.1. Enums checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Enums checklist mental models mentors insist on.md>)

1. **Review a complete finite-action boundary:** run explicit wire codes, a literal action tuple, finite callbacks, actual input parsing and member-based labels together.
2. **Locate each guarantee:** distinguish source representation, stable values, static coverage, runtime validation and deployment support using observed evidence.
3. **Extend independent contracts:** add an action and a status, expose a stale parser and a type-correct wrong callback, then verify the combined behavior.

---

## 5. Common pitfalls → production bugs (enums and literals)

### [5.1. Enum failure modes reproduced locally](<./sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by enum misunderstandings.md>)

1. **Stored-code meaning:** reproduce old/new decoding locally, preserve explicit legacy values and observe an initializer edit that passes checking but fails a runtime contract check.
2. **Actual publication diagnosis:** distinguish supported source enum transforms, stale ambient constants, missing runtime objects and native stripping through the canonical executed fixtures.
3. **Coverage and semantics:** execute a missing open-registry handler and a complete but incorrect finite callback, then separate parser completeness from member-switch coverage.

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
5. **Compiler strictness flags** (`strict`, `isolatedModules`, `--erasableSyntaxOnly` configuration) — [13 Configuration and Compiler Options](<../13 Configuration and Compiler Options/README.md>).

[← Back to track](<../README.md>)
