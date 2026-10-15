# Arrays, Tuples and Collections

How TypeScript types *ordered* and *keyed* groups — arrays (`T[]`) for same-type lists, tuples (`[string, number]`) for fixed-arity heterogeneous slots, and collection typings (`Map<K, V>`, `Set<T>`, `Record<K, V>`, `ReadonlyArray`) for choosing the right container. Function-level rest/tuple mechanics live in [05 Functions](<../05 Functions and Callable Types/README.md>) ([2.3. Rest and tuples](<../05 Functions and Callable Types/sections/2. Overloads and Generics/2.3. Rest parameters tuple types and variadic composition.md>)); generic forwarding over tuples lives in [08 Generics](<../08 Generics Deep Dive/README.md>) ([3.3. Variadic tuples](<../08 Generics Deep Dive/sections/3. Variance and Advanced Generic Patterns/3.3. Variadic tuple generics pipe concat and rest capture.md>)) — this domain owns the *types themselves*: syntax, arity, labels, readonly, method precision, and the selection rules between containers.

## 0. Prerequisites

[01 Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) — [2.1. Type erasure](<../01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.1. Type erasure what survives compilation.md>) (all collection syntax erases) and [3.3. Choosing erasable syntax](<../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>) (array/tuple syntax stays safe under `--erasableSyntaxOnly`). [03 Basic Types and Annotations](<../03 Basic Types and Annotations/README.md>) — [3.2. Inference and widening](<../03 Basic Types and Annotations/sections/3. Annotations Inference and Literals/3.2. Type inference widening and contextual typing.md>) (context-sensitive empty arrays, evolving locals and intended invariants) and [3.3. Literal types](<../03 Basic Types and Annotations/sections/3. Annotations Inference and Literals/3.3. Literal types and const assertions.md>) (literal tuples). [04 Objects, Interfaces and Type Aliases](<../04 Objects Interfaces and Type Aliases/README.md>) — [1.2. Optional readonly](<../04 Objects Interfaces and Type Aliases/sections/1. Object Type Fundamentals/1.2. Optional readonly and index signatures.md>) (index signatures vs `Record` vs `Map` first contact). [05 Functions](<../05 Functions and Callable Types/README.md>) — [2.3. Rest and tuples](<../05 Functions and Callable Types/sections/2. Overloads and Generics/2.3. Rest parameters tuple types and variadic composition.md>) (tuple rest on signatures, the function-side half).

## 1. Array Types

### [1.1. Array type syntax and element checking](<./sections/1. Array Types/1.1. Array type syntax and element checking.md>)

1. **Equivalent spellings and semantic parentheses:** compare array aliases, union element positions and arrays of callbacks without confusing syntax with copying.
2. **Element contracts and dynamic evidence:** reject wrong writes, narrow union/unknown values and trace a caught any-driven failure.
3. **Empty contexts and actual slots:** distinguish property inference, contextual state and empty readonly tuples; observe constructor holes and explicit initialization.

### [1.2. Readonly arrays and mutable vs frozen arrays](<./sections/1. Array Types/1.2. Readonly arrays and mutable vs frozen arrays.md>)

1. **Readonly views:** reject ordinary writes through a parameter while observing source aliases, mutable elements and callback effects.
2. **Assignment and independence:** accept mutable/readonly inputs for reads, reject the reverse assignment and test shallow copies plus unsafe mutable widening.
3. **Runtime integrity:** compare const assertions, frozen outer arrays, old aliases and mutable children; build a frozen projected snapshot when those requirements apply.

### [1.3. Array methods map filter reduce typed precisely](<./sections/1. Array Types/1.3. Array methods map filter reduce typed precisely.md>)

1. **Callback contracts and selection:** compare inferred/explicit predicates, boolean and truthiness callbacks; preserve intended falsy values and handle missing finds.
2. **Accumulator and empty-case policy:** verify initialized and unseeded reductions, empty seed inference, finite record totals and sparse input behavior.
3. **Mutation, results and availability:** observe sort/push/splice returns and copying methods; distinguish target syntax, library declarations and actual runtime support.

---

## 2. Tuple Types

### [2.1. Fixed arity tuples labels and optional elements](<./sections/2. Tuple Types/2.1. Fixed arity tuples labels and optional elements.md>)

1. **Positional contracts and mutation limits:** reject malformed construction and literal indexes while observing accepted mutable push/pop operations and readonly restrictions.
2. **Labels as documentation:** compare differently labeled and mixed-labeled tuples, same-typed swaps and runtime properties without assuming labels enforce meaning.
3. **Variable shapes:** verify optional length/presence under exactness, open and middle rests, legal ordering and correlated tuple alternatives.

### [2.2. as const tuples literal inference and readonly](<./sections/2. Tuple Types/2.2. as const tuples literal inference and readonly.md>)

1. **Literal tuple inference:** compare open, literal and annotated positional contracts, including nested literal versus referenced mutable values.
2. **Membership and coverage:** derive a union, validate unknown values against a stable runtime table and require every handler explicitly; distinguish tuple order/duplicates from union membership.
3. **Reader and draft contracts:** admit readonly inputs for reads, retain or deliberately widen copied elements, and check source literals against an independent domain contract.

### [2.3. Destructuring tuples inference and rest elements](<./sections/2. Tuple Types/2.3. Destructuring tuples inference and rest elements.md>)

1. **Bindings and defaults:** infer tuple slots, handle open-array absence and distinguish undefined defaults from nullish fallback and source changes.
2. **Rest results:** verify fresh mutable tuple tails, shared element references and weaker slice/array contracts; separate binding grammar from tuple-type grammar.
3. **Related returns and evolution:** preserve tagged tuple correlation through const bindings and compare compatible prefix extensions with exact old tuple contracts.

---

## 3. Collections and Selection

### [3.1. Map and Set typing generics over collections](<./sections/3. Collections and Selection/3.1. Map and Set typing generics over collections.md>)

1. **Map contracts:** compare explicit, entry-inferred and bare construction; verify key/value rejections and independently narrow missing reads.
2. **Set membership:** observe typed writes, deduplication order, object identity and numeric equality.
3. **Entry conversion:** validate tuple seeds, distinguish snapshots from live values and trace numeric/symbol keys through objects and JSON.
4. **Get-or-insert:** run value/factory methods, test existing undefined entries and failures, and separate declarations from runtime support.
5. **Iterator helpers:** verify IteratorObject/MapIterator typing, lazy transforms, adaptation, completion checks and input-versus-output limits on a supported runtime.

### [3.2. Record vs Map indexed access vs hashed keys](<./sections/3. Collections and Selection/3.2. Record vs Map indexed access vs hashed keys.md>)

1. **Required keys and actual contents:** compare finite Record coverage, fresh excess checks, structural aliases, numeric/symbol keys and JSON omissions.
2. **Property and entry semantics:** observe inherited versus own keys, legacy prototype behavior, a null-prototype dictionary, Map identity and honest missing reads.
3. **Selection and transport policy:** choose from completeness, key semantics, iteration and value contracts; test conversion collisions instead of assuming automatic JSON compatibility.

### [3.3. Choosing Array Tuple ReadonlyArray and readonly tuples](<./sections/3. Collections and Selection/3.3. Choosing Array Tuple ReadonlyArray and readonly tuples.md>)

1. **Meaningful shapes:** choose an open row list and a homogeneous positional range tuple from their actual roles and presence requirements.
2. **Snapshot policy:** build copied scalar rows and explicitly frozen containers; verify source independence, editable drafts, empty ranges and finite-score rejection.
3. **Review decisions:** justify capabilities, aliases, key semantics and runtime integrity separately rather than applying a universal container stamp.

---

## 4. Important points to remember (arrays, tuples, collections)

### [4.1. Collections checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Collections checklist mental models mentors insist on.md>)

1. **Shape and key semantics:** distinguish an open work list, positional items/results, complete finite handlers, observed counts and distinct membership.
2. **Capabilities and coverage:** read readonly inputs, build private results and require handlers explicitly without claiming runtime freezing.
3. **Value flow and absence:** test empty batches/reductions, missing indexes, repeated operations and an arithmetic counterexample.
4. **Evidence in review:** separate type probes and rejection checks from executed semantics, then extend the runner with a genuinely implemented operation.

---

## 5. Common pitfalls → production bugs (arrays, tuples, collections)

### [5.1. Real production bugs caused by collection misunderstandings](<./sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by collection misunderstandings.md>)

1. **Mutable frame overflow:** reproduce accepted tuple pushes, checked readonly construction and actual parsing of unknown fixed-shape input.
2. **Shared sorting:** observe mutation before slicing, preserve source order and distinguish shared rows from copied editable rows.
3. **Guard coverage and decisions:** compare explicit missing-entry policies, finite completeness and a type-correct wrong decision.
4. **Missing indexed reads:** run an asserted empty read, compare index-option behavior and retain known tuple/property contracts without claiming automatic validation.

---

## 6. Interview questions and answers (arrays, tuples, collections)

### [6.1. Common interview QA — arrays, tuples and collections](<./sections/6. Interview questions and answers/6.1. Common interview QA arrays tuples and collections.md>)

1. **Tuple versus union array:** explain positional checking and the accepted mutable-method counterexample.
2. **Readonly assignment:** reason from available operations, shared aliases and deliberate copies without claiming global immutability.
3. **Callback narrowing:** compare inferred predicates, explicit boolean/Boolean callbacks, falsy data and narrowed-but-optional find results.
4. **Keyed selection:** distinguish finite completeness, Map entries, null-prototype dictionaries, key identity and transport limits.
5. **Index-option migration:** identify potentially missing reads, preserve known-property contracts and verify a first-string implementation's type and value policy.

---

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries — what is covered elsewhere](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **Rest and generic forwarding:** distinguish tuple source shapes, callable argument lists and wrapper inference.
2. **Transformations:** route derived element/key contracts separately from runtime collection operations.
3. **Shapes and literals:** inspect element requirements, source precision and mutation/integrity boundaries.
4. **Narrowing and validation:** connect iteration with live branch checks and actual external-data evidence.
5. **Configuration and runtime support:** distinguish index contracts, syntax checks, declarations and available runtime methods.
6. **Worked collection practice:** justify the next observation for missing indexes, Map presence, serialization and helper input/output limits.

[← Back to track](<../README.md>)
