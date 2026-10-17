# The Type System Core

The type system underneath the syntax: structural assignability, the separation of type and value spaces, declaration spaces, type queries, and the soundness/variance decisions that explain every "why does this assign?" question. This domain owns the core model; later domains add features on top of it (see Overlaps for boundaries).

## 0. Prerequisites

[01 Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) — especially [2.1. Type erasure](<../01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.1. Type erasure what survives compilation.md>) (erasure) and [1.3. Superset, soundness](<../01 Fundamentals and Mental Model/sections/1. What TypeScript is/1.3. Superset soundness and the type system flavor.md>) (structural, sound vs useful). JavaScript object model from [JavaScript 06 Objects in Depth](<../../JavaScript/06 Objects in Depth/README.md>).

## 1. Structural typing

### [1.1. Structural assignability — shape, not name](<./sections/1. Structural typing/1.1. Structural assignability shape not name.md>)

1. **Assignability by shape:** compare required members without relying on shared declaration names.
2. **Width and identity:** execute a narrower view and observe retained properties and object identity.
3. **Nested compatibility:** reject missing or incompatible members and distinguish static checks from runtime inheritance.

### [1.2. Excess property checks and freshness](<./sections/1. Structural typing/1.2. Excess property checks and freshness.md>)

1. **Literal-site checking:** explain why an unexpected property can be rejected at construction.
2. **Variable, spread and generic flow:** run accepted extra properties, then reject an explicitly written typo beside a spread.
3. **Diagnosis and repair:** distinguish excess, weak-type and missing-member errors; use a checked construction without claiming runtime validation.

### [1.3. Nominal typing techniques — branding and opaque types](<./sections/1. Structural typing/1.3. Nominal typing techniques branding and opaque types.md>)

1. **Domain distinction:** demonstrate equal-representation aliases accepting the wrong identifier.
2. **Checked scalar brands:** execute parsers, distinguish symbol declarations and reject accidental cross-domain flow.
3. **Trade-offs and limits:** identify construction evidence, assertion bypasses and the difference between syntax and authorization.

---

## 2. The type vs value separation

### [2.1. Type space vs value space — two parallel universes](<./sections/2. The type vs value separation/2.1. Type space vs value space two parallel universes.md>)

1. **Two meanings:** identify type/value uses, legal same-name pairs and the role of scope.
2. **Dual declarations:** run a complete class/status example and distinguish type-only from value-bearing namespace emission.
3. **Type queries and errors:** compare static and runtime typeof, then reproduce incorrect-space diagnostics.

### [2.2. Declaration spaces — type, value, and namespace](<./sections/2. The type vs value separation/2.2. Declaration spaces type value and namespace.md>)

1. **Three declaration spaces:** Distinguish type names, runtime values and qualified namespace names; predict which declarations emit code.
2. **Merging rules:** Run accepted interface/namespace examples and reject a same-scope alias/interface collision.
3. **Scope and augmentation:** Build a complete global augmentation project, identify the runtime provider, and diagnose a misplaced `declare global`.

### [2.3. Type queries — typeof, keyof, and indexed access](<./sections/2. The type vs value separation/2.3. Type queries typeof keyof and indexed access.md>)

1. **Two typeof operations:** distinguish executed runtime evidence from an erased query of the current static type.
2. **Key and member types:** compare literal keys, index signatures and indexed access without claiming runtime enumeration.
3. **Synthesis:** execute a captured configuration and validate inferred results with compiler assertions and negative probes.

---

## 3. Soundness and variance

### [3.1. Covariance, contravariance, and invariance — who varies which way](<./sections/3. Soundness and variance/3.1. Covariance contravariance and invariance who varies which way.md>)

1. **Substitution direction:** justify producer covariance and consumer contravariance from actual supplied values and operations.
2. **Checking versus desired safety:** reject strict function-property cell substitutions and reproduce accepted mutable-field/method alias failures.
3. **Optional annotations:** verify the 4.7 introduction, accepted input/output contracts and property diagnostic versus method exception.

### [3.2. Function variance and strictFunctionTypes](<./sections/3. Soundness and variance/3.2. Function variance and strictFunctionTypes.md>)

1. **Flag and substitution:** justify the accepted wider-capable handler and reject the unsafe direction.
2. **Method exception:** execute an accepted substitution that throws and distinguish its origin from ignored callback arguments.
3. **Stricter callback contracts:** compare function properties, narrow forEach callbacks and disabling the flag.

### [3.3. Unsound by design spots — budgeted risks](<./sections/3. Soundness and variance/3.3. Unsound by design spots budgeted risks.md>)

1. **Mutable aliases:** reproduce array corruption and explain the limited protection of a readonly view.
2. **Unchecked assumptions:** distinguish any, assertions and unknown using actual failures and diagnostics.
3. **Predicate evidence:** reject malformed input with the required field check and locate other unsound boundaries.

---

## 4. Important points to remember (type system core)

### [4.1. Type system core checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Type system core checklist mental models mentors insist on.md>)

1. **Shape, not name, governs assignability** (freshness is the exception — know when it triggers).
2. **Type and value are parallel spaces** (same name, different meaning; `typeof` is context-dependent).
3. **Variance is directional** (`return` covariant, `parameter` contravariant — method bivariance is the legacy exception).
4. **Branding records a reviewed construction decision** (erased distinctions, assertion sites and explicit domain validation).

---

## 5. Common pitfalls → production bugs (type system core)

### [5.1. Real production bugs caused by type system misunderstandings](<./sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by type system misunderstandings.md>)

1. **Freshness:** observe the missing port through variable flow, then reject a typo at the literal.
2. **Mutable covariance:** reproduce alias mutation, reject readonly-to-mutable assignment, and distinguish a reader view from a frozen snapshot.
3. **Predicate evidence:** compare an incomplete object check with the required email-field check.
4. **Type versus value change:** keep the initializer constant, then demonstrate a real mutation and a finite host contract.

---

## 6. Interview questions and answers (type system core)

### [6.1. Common interview Q&A — the type system core](<./sections/6. Interview questions and answers/6.1. Common interview QA the type system core.md>)

1. **Structural vs nominal:** check namespace-qualified compatibility and private-member rejection.
2. **Freshness:** compare direct-literal diagnostics with the same object's variable flow and runtime properties.
3. **Variance:** verify producer/consumer direction and the method versus function-property annotation check.
4. **Special types:** distinguish unknown evidence from never's impossible-case assignment direction.
5. **Class duality:** identify the constructor value, instance type and constructor type query.
6. **Runtime versus query:** execute typeof narrowing and explain what deriving a type does and does not do.

---

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries — what is covered elsewhere](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **Runtime ownership:** locate values, closures and object/prototype behavior in JavaScript.
2. **Type inventory:** use the basic-types owner for primitive/special operations and annotation forms.
3. **Transformation ownership:** distinguish primitive queries here from generic inference and mapped/conditional composition.
4. **Configuration ownership:** locate the published flag catalog and current compiler/tool route.
5. **Routing practice:** explain why assignment direction, wrappers and competing inference need different owners.
