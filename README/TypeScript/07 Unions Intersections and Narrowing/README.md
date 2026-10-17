# Unions, Intersections and Narrowing

Unions describe alternatives and intersections impose simultaneous requirements. This domain develops the operations each contract permits, the control-flow evidence needed for narrower uses, and finite-variant exhaustiveness. Tagged data and class-based behavior serve different design needs. A satisfies expression checks compatibility; it is not itself a runtime guard or an exhaustive switch.

## 0. Prerequisites

[01 Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) — [2.1. Type erasure](<../01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.1. Type erasure what survives compilation.md>) (all `|`/`&` syntax erases) and [3.3. Choosing erasable syntax](<../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>) (erased type operators versus the complete source runner contract). [02 The Type System Core](<../02 The Type System Core/README.md>) — [1.1. Structural assignability](<../02 The Type System Core/sections/1. Structural typing/1.1. Structural assignability shape not name.md>) + [1.2. Freshness](<../02 The Type System Core/sections/1. Structural typing/1.2. Excess property checks and freshness.md>) (required-member compatibility and additional literal-site checks), [3.1. Variance](<../02 The Type System Core/sections/3. Soundness and variance/3.1. Covariance contravariance and invariance who varies which way.md>) (how unions behave in positions). [03 Basic Types and Annotations](<../03 Basic Types and Annotations/README.md>) — [2.3. never and void](<../03 Basic Types and Annotations/sections/2. The Special Types/2.3. never and void bottom vs deliberate nothing.md>) (`never` as empty union / exhaustive marker), [3.3. Literal types](<../03 Basic Types and Annotations/sections/3. Annotations Inference and Literals/3.3. Literal types and const assertions.md>) (literal unions) and [1.3. null and undefined](<../03 Basic Types and Annotations/sections/1. The Primitive Family/1.3. null and undefined strictNullChecks and optionality.md>) (`T | null` vs optional). [04 Objects, Interfaces and Type Aliases](<../04 Objects Interfaces and Type Aliases/README.md>) — [2.1. Intersection vs extends](<../04 Objects Interfaces and Type Aliases/sections/2. Composition and Declaration Merging/2.1. Intersection vs extends composing object types.md>) (object composition) and [3.3. satisfies](<../04 Objects Interfaces and Type Aliases/sections/3. Advanced Object Types/3.3. satisfies assertions and narrowing on object shapes.md>) (contextual checking and exposed views). [05 Functions and Callable Types](<../05 Functions and Callable Types/README.md>) — [3.3. Type guards](<../05 Functions and Callable Types/sections/3. Advanced Callable Patterns/3.3. Type guards predicates asserts and satisfies on functions.md>) (predicate vs assert shoulders; this domain extends them to union narrowing). [06 Classes and Object-Oriented Types](<../06 Classes and Object-Oriented Types/README.md>) — [1.1. Duality](<../06 Classes and Object-Oriented Types/sections/1. Class Type Fundamentals/1.1. Class as type and value duality instance vs constructor.md>) (static instance shapes versus actual prototype checks and custom hooks) and [2.3. Override](<../06 Classes and Object-Oriented Types/sections/2. Inheritance and Polymorphism/2.3. Override and polymorphic this typing.md>) (class behavior and receiver contracts as a separate modeling choice).

## 1. Union Types

### [1.1. Union fundamentals member access and the common property rule](<./sections/1. Union Types/1.1. Union fundamentals member access and the common property rule.md>)

1. **Inclusive membership:** show values satisfying one or both structural alternatives and distinguish allowed inputs from guaranteed operations.
2. **Member access:** compare common reads, equality/in guards, rejected exclusive reads and an accepted assertion's runtime consequence.
3. **Nullish contracts:** observe absence, valid empty strings and exact-optional read/write differences under declared flags.

### [1.2. Discriminated unions the tagged pattern that scales](<./sections/1. Union Types/1.2. Discriminated unions the tagged pattern that scales.md>)

1. **Discriminant evidence:** compare string/boolean literal tags, nullable-error correlation and rejected wide/nested payload reads.
2. **State evolution:** execute deterministic transitions, stale-response policy, missing-case checks and literal-fixture boundaries.
3. **Representation choice:** justify tags or existing primitive/property distinctions from the intended API, including overlapping inputs.

### [1.3. Literal unions enums vs unions and exhaustiveness preview](<./sections/1. Union Types/1.3. Literal unions enums vs unions and exhaustiveness preview.md>)

1. **Finite inputs:** derive a literal set and execute a runtime membership/parser check without confusing annotations with validation.
2. **Enum comparison:** verify valid filtering/interpolation, numeric assignment boundaries, emitted constants and the separate erasable gate.
3. **Exhaustiveness preview:** observe missing-member checking, retained declarations and deliberate runtime fallback/throw behavior.

---

## 2. Intersection Types

### [2.1. Intersection fundamentals merging object shapes](<./sections/2. Intersection Types/2.1. Intersection fundamentals merging object shapes.md>)

1. **Simultaneous requirements:** observe one value satisfying both object contracts and compatible member refinement.
2. **Conflict diagnosis:** distinguish ordinary impossible properties from whole-type discriminant reduction using live probes.
3. **Runtime composition:** reproduce generic spread overwrites and a bounded implementation with an explicit timestamp policy.
4. **Heritage choices:** compare declaration-site interface errors with intersection value/access failures and link the full composition owner.

### [2.2. The never trap conflicting intersections and impossible states](<./sections/2. Intersection Types/2.2. The never trap conflicting intersections and impossible states.md>)

1. **Conflicting property trap:** distinguish whole-type discriminant reduction, ordinary impossible fields and the direction of never assignment.
2. **Impossible-state modeling:** compare tagged structural assignments with optional forbidden keys and verify both exact-optional modes.
3. **Detecting the trap early:** run whole/property assertions, rejected fixtures and controlled examples of empty helpers and retained ambient reads.

### [2.3. Unions and intersections distributive behavior and primitive intersections](<./sections/2. Intersection Types/2.3. Unions and intersections distributive behavior and primitive intersections.md>)

1. **Distributivity:** preserve correlated variants through augmentation, compare compact/expanded contracts and construct a two-union product.
2. **Primitive intersections:** verify overlap and non-nullish reductions, and observe why an assertion cannot attach a field to a primitive.
3. **Filtering semantics:** distinguish Extract/Exclude selection from intersection refinement using finite literals, broad strings and object members.

---

## 3. Control Flow Narrowing

### [3.1. Built-in narrowers typeof instanceof in and equality](<./sections/3. Control Flow Narrowing/3.1. Built-in narrowers typeof instanceof in and equality.md>)

1. **Primitive and prototype checks:** observe typeof narrowing/null handling and the limit of instanceof for structurally accepted plain objects.
2. **Presence evidence:** compare inherited/own keys, optional alternatives on both paths and value checks after unlisted-property narrowing.
3. **Equality and truthiness:** preserve empty strings and zero intentionally, test equality overlap and distinguish nullish checks from finite-number validation.

### [3.2. Exhaustiveness never and switch narrowing](<./sections/3. Control Flow Narrowing/3.2. Exhaustiveness never and switch narrowing.md>)

1. **Static coverage and runtime fallback:** add a union member, observe never-sink errors and compare retained assignment-only versus throwing paths.
2. **Control-flow evidence:** compare switch/if returns, breaks and grouped cases; distinguish handler-table key coverage from payload correlation.
3. **Behavior policy:** reproduce a stale reducer fallback, repair all actions and explain when ignored events or parsed external inputs need separate handling.

### [3.3. Custom narrowers predicates asserts and type guards on unions](<./sections/3. Control Flow Narrowing/3.3. Custom narrowers predicates asserts and type guards on unions.md>)

1. **Predicate contracts:** compare explicit/inferred/boolean filter results and expose false-branch exclusion errors from partial business checks.
2. **Assertion continuation:** execute discriminant-condition and argument assertions, their rejected inputs and a dishonest empty assertion.
3. **Literal contracts:** verify as Shape versus satisfies/const views, exhaustive use, readonly versus runtime mutation and checked table keys.

---

## 4. Important points to remember (unions, intersections, narrowing)

### [4.1. Unions intersections narrowing checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Unions intersections narrowing checklist mental models mentors insist on.md>)

1. **Input contract:** explain accepted alternatives, extra structural data and when tags connect required payloads.
2. **Operation evidence:** identify safe common reads and control-flow evidence before exclusive operations.
3. **Composition requirements:** require audit metadata on each alternative without confusing types with runtime merging.
4. **Extension policy:** run a cache-command review drill and observe the checks that fail when an unhandled command is added.

---

## 5. Common pitfalls → production bugs (unions, intersections, narrowing)

### [5.1. Real production bugs caused by union and narrowing misunderstandings](<./sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by union and narrowing misunderstandings.md>)

1. **Wrong mutation:** reproduce a shared-key/cast bypass and repair it while preserving unrelated modal data; distinguish condition and object aliases.
2. **Impossible input:** reject conflicting-tag construction/access and observe why a forced value can still execute a handler.
3. **Misleading fallback:** execute a retry status labeled success and use a missing-case check to require explicit behavior.
4. **Published guard contract:** compare honest boolean, explicit predicate and inferred predicate filters without claiming every boolean is a bug.

---

## 6. Interview questions and answers (unions, intersections, narrowing)

### [6.1. Common interview QA — unions, intersections and narrowing](<./sections/6. Interview questions and answers/6.1. Common interview QA unions intersections and narrowing.md>)

1. **Common operations:** explain rejected exclusive/optional-chain reads and accepted structural overlap.
2. **Conflicting intersections:** compare whole-type versus property never and identify meaningful construction/access evidence.
3. **Exhaustiveness:** predict extension diagnostics and distinguish static coverage from emitted fallback behavior.
4. **Built-in versus reusable guards:** justify the condition and predicate contract, including current inference and false-case meaning.
5. **Presence predicates and assertions:** compare branch refinement, own/inherited presence and successful versus rejected continuation.

---

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries — what is covered elsewhere](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **Object-type composition details:** distinguish initializer/member contracts, merging, queries and the use of both/either requirements.
2. **Function-level variance and callable overloads:** route signature/receiver questions separately from value narrowing and runtime evidence.
3. **Class hierarchies as union alternatives:** choose from constructor/behavior needs or explicit data variants and branch handling.
4. **Generics and transformations over unions:** distinguish type-argument selection, type filtering and live control-flow checks.
5. **Compiler strictness and diagnosis:** select an option or behavior owner from the failed operation and justify the next check.

[← Back to track](<../README.md>)
