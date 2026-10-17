# Basic Types and Annotations

The inventory every TypeScript file starts with: the primitive types that never need an import (`string`, `number`, `boolean`, `bigint`, `symbol`, `null`, `undefined`), the special types that model absence and ignorance (`any`, `unknown`, `never`, `void`), and the rules that decide when you write a type and when you let the checker infer it. This domain owns literal types and `const` assertions — later domains add objects, functions, and generics on top.

## 0. Prerequisites

[01 Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) — especially [2.1. Type erasure](<../01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.1. Type erasure what survives compilation.md>) (erasure) and [1.3. Superset, soundness](<../01 Fundamentals and Mental Model/sections/1. What TypeScript is/1.3. Superset soundness and the type system flavor.md>) (gradual typing). [02 The Type System Core](<../02 The Type System Core/README.md>) — [2.1. Type space vs value space](<../02 The Type System Core/sections/2. The type vs value separation/2.1. Type space vs value space two parallel universes.md>) (where types live) and [1.1. Structural assignability](<../02 The Type System Core/sections/1. Structural typing/1.1. Structural assignability shape not name.md>) (why extra members are ok). JavaScript values from [JavaScript 03 Values, Types, and Coercion](<../../JavaScript/03 Values Types and Coercion/README.md>) (runtime `typeof` vs static types).

## 1. The Primitive Family

### [1.1. string number boolean and the wrapper pitfall](<./sections/1. The Primitive Family/1.1. string number boolean and the wrapper pitfall.md>)

1. **Primitive contracts:** describe ordinary strings, numbers and booleans without assuming domain validation.
2. **Wrapper direction and representation:** execute broad primitive assignments, explicit construction, Map identity and primitive extraction.
3. **Scalar widening:** distinguish a mutable string from a literal mode and choose the intended input contract.

### [1.2. bigint and symbol the ES-era primitives](<./sections/1. The Primitive Family/1.2. bigint and symbol the ES-era primitives.md>)

1. **Integer precision and conversion:** execute large integer arithmetic, observe a lossy round trip and reject unsafe number inputs.
2. **Symbol identity:** distinguish general and declaration-specific types, fresh symbols, registry sharing and reflection.
3. **API boundaries:** reproduce JSON and target limitations, then choose a representation from its actual contract.

### [1.3. null and undefined strictNullChecks and optionality](<./sections/1. The Primitive Family/1.3. null and undefined strictNullChecks and optionality.md>)

1. **Explicit absence:** distinguish null, undefined and API conventions from runtime validation.
2. **Strict handling:** execute nullish guards and contrast a rejected strict call with a failing permissive run.
3. **Presence and serialization:** compare optional, required-undefined and explicit-null properties under exact checking and actual JSON.

---

## 2. The Special Types

### [2.1. any the unchecked escape hatch](<./sections/2. The Special Types/2.1. any the unchecked escape hatch.md>)

1. **What any disables** (every check: assignability, property access, calls — `any` is compatible with everything and everything is compatible with `any`).
2. **How it leaks** (one `any` in a return type infects callers; `any[]` vs `unknown[]` downstream consequences).
3. **Budgeting, not banning** (migration escape valve with `// @ts-ignore` vs disciplined alternative `unknown` + narrowing).

### [2.2. unknown the type-safe top type](<./sections/2. The Special Types/2.2. unknown the type-safe top type.md>)

1. **Top type that forces a check:** Distinguish accepting an unknown value from proving it is a specific type.
2. **Narrowing unknown:** Test property and array-element checks, including the `any[]` result of `Array.isArray`.
3. **Boundary placement:** Contain parsed JSON and thrown values, then pass checked domain types downstream.

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

1. **Literal and mutable contracts:** compare primitive widening, writable object properties, explicit unions and readonly literal assertions without claiming runtime freezing.
2. **Candidate and contextual inference:** verify mixed element types and callback parameter evidence, including a real missing-context diagnostic.
3. **Flow-sensitive surprises:** distinguish evolving empty/null locals from object-property and generic empty-array contexts, then enforce a numeric invariant at the intended boundary.

### [3.3. Literal types and const assertions](<./sections/3. Annotations Inference and Literals/3.3. Literal types and const assertions.md>)

1. **Literal as subtype** (`"success"` is assignable to `string`, not vice-versa — string literal unions as enums without emit).
2. **const assertions and as const** (`{ x: 1 } as const` → `readonly` + literal narrowing; `satisfies` preserves literal while checking shape).
3. **Template literal types preview** (forward link to mapped/utility domains — where literal types compose into type-level programs).

---

## 4. Important points to remember (basic types)

### [4.1. Basic types checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Basic types checklist mental models mentors insist on.md>)

1. **Primitive contracts:** test both wrapper assignment directions and distinguish annotations from runtime construction.
2. **Nullability and presence:** compare required/optional objects and actual JSON serialization under strict/exact checking.
3. **Checked uses and impossible cases:** inspect a field guard and reproduce an unhandled-variant never diagnostic.
4. **Annotation judgment:** state public intent, inspect local inference, and choose literal-preserving syntax without claiming runtime freezing.

---

## 5. Common pitfalls → production bugs (basic types)

### [5.1. Real production bugs caused by basic type misunderstandings](<./sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by basic type misunderstandings.md>)

1. **Wrapper keys:** observe an object-key miss and a deliberate primitive-key contract.
2. **Evolving arrays:** compare accepted mixed inference, a real implicit-type diagnostic and an explicit numeric invariant.
3. **Ignored returns:** observe a promise returned through void and handle failures through a result-bearing contract.
4. **Wire presence:** compare in-memory keys, actual JSON omissions and a checked explicit-null consumer.

---

## 6. Interview questions and answers (basic types)

### [6.1. Common interview QA — basic types and annotations](<./sections/6. Interview questions and answers/6.1. Common interview QA basic types and annotations.md>)

1. **Primitive contracts:** explain wrapper assignment direction and actual runtime representation.
2. **Special types:** verify unknown/never assignment directions with compile-only probes.
3. **Nullability and wire presence:** distinguish checked optionality, in-memory presence and JSON omission.
4. **Annotation judgment:** justify intent and investigate actual inference instead of relying on quotas.
5. **Literal precision:** check inferred type equality while comparing unchanged runtime values.

---

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries — what is covered elsewhere](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **JavaScript mechanics:** use runtime owners for values, wrappers, coercion and key equality.
2. **Objects and interfaces:** route composite shape design to 04 after the primitive-property introduction.
3. **Unions and narrowing:** distinguish the minimal unknown/never introduction from full control-flow design in 07.
4. **Enums:** use 01 for the erasable execution boundary and 11 for complete enum behavior.
5. **Generics and transformations:** route type programs to 08/09 and declaration options to their configuration owner.
6. **Configuration and current setup:** use 13 for flag mechanics and the verified 7.0 migration route for version changes.

[← Back to track](<../README.md>)
