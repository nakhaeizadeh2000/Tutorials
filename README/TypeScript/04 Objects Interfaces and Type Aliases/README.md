# Objects, Interfaces and Type Aliases

How TypeScript models *object shapes* statically: structural object types, optional and `readonly` members, index signatures, when an `interface` differs from a `type` alias, how composition via `&`/`extends` builds larger shapes, and how declaration merging powers ambient augmentation. This domain owns the static object-type model — runtime object mechanics live in [JavaScript 06 Objects in Depth](<../../JavaScript/06 Objects in Depth/README.md>).

## 0. Prerequisites

[01 Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) — especially [2.1. Type erasure](<../01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.1. Type erasure what survives compilation.md>) (all object-type syntax erases) and [3.3. Choosing erasable syntax](<../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>) (both `interface` and `type` are erasable). [02 The Type System Core](<../02 The Type System Core/README.md>) — [1.1. Structural assignability](<../02 The Type System Core/sections/1. Structural typing/1.1. Structural assignability shape not name.md>) (why extra members are ok), [1.2. Excess property checks](<../02 The Type System Core/sections/1. Structural typing/1.2. Excess property checks and freshness.md>) (freshness), [1.3. Branding](<../02 The Type System Core/sections/1. Structural typing/1.3. Nominal typing techniques branding and opaque types.md>) and [2.3. Type queries](<../02 The Type System Core/sections/2. The type vs value separation/2.3. Type queries typeof keyof and indexed access.md>) (`keyof`/`T[K]`). [03 Basic Types and Annotations](<../03 Basic Types and Annotations/README.md>) — [1.3. null and undefined](<../03 Basic Types and Annotations/sections/1. The Primitive Family/1.3. null and undefined strictNullChecks and optionality.md>) (optionality) and [3.1. Annotation syntax](<../03 Basic Types and Annotations/sections/3. Annotations Inference and Literals/3.1. Annotation syntax where types appear.md>) (`satisfies` vs `as`).

## 1. Object Type Fundamentals

### [1.1. Object types structural shape and excess property checks](<./sections/1. Object Type Fundamentals/1.1. Object types structural shape and excess property checks.md>)

1. **Structural shape:** run initialized width/depth examples, compare object identity and diagnose a mismatched nested member.
2. **Creation-site checks:** compare a variable, an inherited spread member and a directly written typo under the same contract.
3. **Contract choice:** check annotation/assertion/satisfies precision with live type probes and choose a broader contract only when the consumer uses it.

### [1.2. Optional readonly and index signatures](<./sections/1. Object Type Fundamentals/1.2. Optional readonly and index signatures.md>)

1. **Optional members:** compare both exact-optional modes and distinguish assignment, runtime presence and JSON output.
2. **Readonly:** reject a typed write, observe a mutable alias, and contrast the view with shallow runtime freeze.
3. **Dictionary contracts:** check missing lookups, compatible named members, finite keys and numeric indexes.
4. **Runtime representation:** distinguish inherited/own properties and observe ordinary, null-prototype and Map key behavior.

### [1.3. Interfaces vs type aliases when to use which](<./sections/1. Object Type Fundamentals/1.3. Interfaces vs type aliases when to use which.md>)

1. **Shared behavior:** verify ordinary structural interchangeability and qualify it with the implicit-index dictionary difference.
2. **Declaration capabilities:** compare interface merging, closed alias composition and fresh ambient type declarations with actual rejections.
3. **Design choice:** select intended extension points and type expressions before applying a team convention; explain structural heritage and runtime erasure.

---

## 2. Composition and Declaration Merging

### [2.1. Intersection vs extends composing object types](<./sections/2. Composition and Declaration Merging/2.1. Intersection vs extends composing object types.md>)

1. **Legal composition:** compare compatible heritage/intersection contracts, extend a concrete utility result and diagnose invalid direct intersection syntax.
2. **Conflict behavior:** observe declaration-versus-construction failures and separate optional presence, present values and reads in both exact-optional modes.
3. **Design and review:** add requirements to union branches, choose compatible refinements or distinct keys, and explain the operator's intent without unmeasured hover/cost rules.

### [2.2. Declaration merging and module augmentation](<./sections/2. Composition and Declaration Merging/2.2. Declaration merging and module augmentation.md>)

1. **Legal merging:** verify compatible members, rejected modifier/type conflicts, separate declaration spaces and additive overload behavior.
2. **Complete augmentation:** build a local module/global project with explicit inclusion, legal markers and a real provider.
3. **Diagnosis and scope:** distinguish lost declarations, absent runtime values and typed property errors; choose a local contract when shared augmentation is unnecessary.

### [2.3. Type queries on objects keyof indexed access and typeof capture](<./sections/2. Composition and Declaration Merging/2.3. Type queries on objects keyof indexed access and typeof capture.md>)

1. **Keys and correlated reads:** verify literal/index key unions and distinguish static prototype members from own runtime enumeration.
2. **Value derivation:** compare indexed value unions with actual Object.values overloads and optional reads.
3. **Captured precision:** check widened and literal/readonly object contracts with live type assertions.
4. **Runtime boundary:** run own-key validation against a real table and inspect what queries erase versus what still executes.

---

## 3. Advanced Object Types

### [3.1. Recursive object types and self-referential structures](<./sections/3. Advanced Object Types/3.1. Recursive object types and self-referential structures.md>)

1. **Self-reference:** construct tree/list/JSON and recursive-array values; distinguish legal structure from direct circular aliases.
2. **Mutual recursion and cycles:** classify dependency edges and build finite self/mutual graphs with an explicit traversal policy.
3. **Separate limits:** verify a readonly transform's stop boundary and contrast it with runtime node/depth limits, without universal checker thresholds.

### [3.2. Branded and opaque object patterns for domain safety](<./sections/3. Advanced Object Types/3.2. Branded and opaque object patterns for domain safety.md>)

1. **Structural need:** distinguish a real equal-shape domain collision from a missing-required-member error and an assertion bypass.
2. **Checked construction:** run branded factories against malformed inputs and compare string and type-only symbol markers.
3. **Transformation contracts:** verify spread inference and field/aggregate projections before choosing where to brand.
4. **Design choice:** compare class-private identity with phantom data brands using actual erasable/native execution evidence.

### [3.3. satisfies assertions and narrowing on object shapes](<./sections/3. Advanced Object Types/3.3. satisfies assertions and narrowing on object shapes.md>)

1. **`satisfies` vs `as` on objects** (`satisfies` checks shape while *preserving* literal narrowness; `as` widens and silences).
2. **`as const` on objects** (deep `readonly` + literal types for config/theme/route tables — when to use over `satisfies`).
3. **Narrowing object unions** (`in`, `typeof` on discriminant, `hasOwnProperty` — the narrowing tools that pair with object types; full discriminated-union treatment in 07).

---

## 4. Important points to remember (objects, interfaces, type aliases)

### [4.1. Objects interfaces checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Objects interfaces checklist mental models mentors insist on.md>)

1. **Shape and checking site:** explain structural acceptance, fresh-literal errors and written versus inherited spread members.
2. **Optional and wire contracts:** compare both optional modes and observe why a required undefined-valued key can disappear in JSON.
3. **Composition result:** verify legal utility heritage, conflict diagnostics and the actual resulting member type.
4. **Branded synthesis:** run checked construction, derived-table probes and meaningful negative cases; trace evidence rather than assertion quotas.

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

1. **Runtime ownership:** locate descriptor/prototype/integrity mechanics while retaining this domain's typed view.
2. **Union ownership:** distinguish object composition from branch narrowing and exhaustiveness.
3. **Callable/class ownership:** reproduce receiver loss independently of the function-property type spelling.
4. **Query/utility ownership:** derive a table contract and construct a real Pick-shaped value.
5. **Configuration ownership:** locate program flags and current compiler/tool migration routes.
6. **Debugging route:** choose an owner from the failing operation and explain the immediate evidence needed.

[← Back to track](<../README.md>)
