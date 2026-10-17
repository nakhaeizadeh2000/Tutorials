# Strictness, Errors and Validation

This domain applies TypeScript contracts to runtime validation and failure handling. Assertions communicate successful continuation, Result values describe modeled failures, and parsers check incoming values. Runtime guarantees depend on the executed implementation and its ownership assumptions; a signature alone does not prove a validator correct. Predicate/assertion mechanics live in [05 Functions](<../05 Functions and Callable Types/README.md>) and [07 Unions](<../07 Unions Intersections and Narrowing/README.md>), while compiler strictness options live in [13 Configuration](<../13 Configuration and Compiler Options/README.md>). Here the focus is consumer behavior, error policy and boundary evidence.

The [hand-written parser](<./sections/3. Schema Validation in Practice/3.1. Hand-rolled schemas parse validate narrow.md>) and [pinned schema example](<./sections/3. Schema Validation in Practice/3.2. Schema objects and inferred types.md>) deliberately use different inheritance, accessor and optional-key policies. Compare their observed outcomes before adopting either contract. Local parser, reporting and fatal-process examples establish their stated behavior; a real HTTP, storage or worker boundary still needs its own integration checks.

## 0. Prerequisites

[03 Basic Types and Annotations](<../03 Basic Types and Annotations/README.md>) — [2.2. unknown the type-safe top type](<../03 Basic Types and Annotations/sections/2. The Special Types/2.2. unknown the type-safe top type.md>) (unknown ingestion that validation discharges) and [2.3. never and void](<../03 Basic Types and Annotations/sections/2. The Special Types/2.3. never and void bottom vs deliberate nothing.md>) (never-returning assertion failures). [05 Functions and Callable Types](<../05 Functions and Callable Types/README.md>) — [3.3. Type guards](<../05 Functions and Callable Types/sections/3. Advanced Callable Patterns/3.3. Type guards predicates asserts and satisfies on functions.md>) (predicate/assert mechanics on callables). [07 Unions, Intersections and Narrowing](<../07 Unions Intersections and Narrowing/README.md>) — [3.2. Exhaustiveness](<../07 Unions Intersections and Narrowing/sections/3. Control Flow Narrowing/3.2. Exhaustiveness never and switch narrowing.md>) (never-sink coverage) and [3.3. Custom narrowers](<../07 Unions Intersections and Narrowing/sections/3. Control Flow Narrowing/3.3. Custom narrowers predicates asserts and type guards on unions.md>) (predicate/assert mechanics on unions). [13 Configuration and Compiler Options](<../13 Configuration and Compiler Options/README.md>) — [1.1. strict](<../13 Configuration and Compiler Options/sections/1. Strictness Family/1.1. strict and strictNullChecks the nullability contract.md>) (flags enabling the precision this domain practices).

## 1. Assertion Functions

### [1.1. Assertion signatures asserts condition and asserts x is T](<./sections/1. Assertion Functions/1.1. Assertion signatures asserts condition and asserts x is T.md>)

1. **Precise continuation:** distinguish an asserted condition from nullish checks using active union inputs.
2. **Honest shape enforcement:** run a shared Config assertion and caller with actual valid/malformed outcomes and an explicit throw policy.
3. **Library trust and lifetime:** expose a lying helper, mutation after a valid check and the runtime limit of a never sink.

### [1.2. Type predicates vs assertions caller vs thrower](<./sections/1. Assertion Functions/1.2. Type predicates vs assertions caller vs thrower.md>)

1. **Caller evidence:** compare explicit/inferred predicate filters with a boolean-only contract on a trusted discriminated union.
2. **False-branch correctness:** expose an empty-string exclusion lie and use a boolean for a narrower selection criterion.
3. **Failure policy:** run recoverable and required-service callers, distinguish caught assertion failures from process crashes and test a throwing predicate.

### [1.3. satisfies as a validation gate](<./sections/1. Assertion Functions/1.3. satisfies as a validation gate.md>)

1. **Source compatibility and context:** compare a checked literal snapshot, contextual inference and an intentionally broader annotated value.
2. **Key contracts:** test finite required keys, open dictionaries and fresh versus nonfresh extra properties.
3. **Runtime boundary:** expose unchecked JSON passing satisfies and repair it with an actual unknown-input reader.

---

## 2. Error Values and Hierarchies

### [2.1. Error as value Result Ok Err patterns](<./sections/2. Error Values and Hierarchies/2.1. Error as value Result Ok Err patterns.md>)

1. **Modeled return contract:** narrow Result success/failure payloads without claiming compiler-enforced consumption or exception freedom.
2. **Actual composition:** run heterogeneous error unions, short-circuit counters and eager versus lazy defaults.
3. **Boundary ownership:** distinguish returned errors from callback exceptions and choose handling or propagation for the consumer's protocol.

### [2.2. Custom error classes cause and stacks](<./sections/2. Error Values and Hierarchies/2.2. Custom error classes cause and stacks.md>)

1. **Local identity and payloads:** construct an Error family and keep domain facts separate from a local transport mapper.
2. **Stack and cause evidence:** observe unthrown construction, same-object rethrowing, separate wrapper stacks and unknown causes.
3. **Boundary limits:** run bounded cycle-aware diagnostics and distinguish open class families, foreign identities and JSON wire data.

### [2.3. Never-throw boundaries and error budgets](<./sections/2. Error Values and Hierarchies/2.3. Never-throw boundaries and error budgets.md>)

1. **Explicit containment:** distinguish sync callback exceptions, awaited rejections and signatures that permit throwing.
2. **Owned completion:** preserve operation and reporter outcomes, test failure injection and identify detached or hanging work.
3. **Host and reliability limits:** observe fatal Node diagnostics in isolated processes and separate boundary policy from measured service error budgets.

---

## 3. Schema Validation in Practice

### [3.1. Hand-rolled schemas parse validate narrow](<./sections/3. Schema Validation in Practice/3.1. Hand-rolled schemas parse validate narrow.md>)

1. **Honest parser contracts:** distinguish tagged success/failure, unknown inputs, application constraints and transformed outputs.
2. **Worked composition:** run primitive, own-data object, dense-array and JSON parsers with located errors and nested-array success.
3. **Consumer evidence:** narrow results, observe copied output and explain which invariants ordinary TypeScript types do not preserve.

### [3.2. Schema objects and inferred types](<./sections/3. Schema Validation in Practice/3.2. Schema objects and inferred types.md>)

1. **Executed schema inference:** define a pinned runtime schema, derive distinct input/output types and test schema evolution.
2. **Actual combinator behavior:** run object/array/union policies, optional versus absent-only keys and ordered overlapping alternatives.
3. **Trust and adoption:** expose callback exceptions, dishonest custom checks and reflective-input limits before evaluating library trade-offs.

### [3.3. Parse, don't validate — at boundaries](<./sections/3. Schema Validation in Practice/3.3. Parse do not validate at boundaries.md>)

1. **Evidence before effects:** run a complete-batch parser/consumer and reject malformed input before local actions.
2. **Validity lifetime:** expose mutable aliases, flat owned snapshots, structural construction and fresh cache boundaries.
3. **Boundary inventory:** identify producer/parser/failure owners and distinguish shape guarantees from changing business policy and actual integration tests.

---

## 4. Important points to remember (strictness and validation)

### [4.1. Validation checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Validation checklist mental models mentors insist on.md>)

1. **Review the actual contract:** identify accepted input, returned evidence, failure consumer and validity lifetime.
2. **Work a disputed claim:** distinguish ignored Results, reporter completion and mutable parsed data using the verified owners.
3. **Choose falsifying evidence:** match compiler probes, malformed-input runs and host integration checks to the guarantee being reviewed.

---

## 5. Common pitfalls → production bugs (strictness and validation)

### [5.1. Real production bugs caused by validation misunderstandings](<./sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by validation misunderstandings.md>)

1. **Observed payload failures:** compare wrong JSON shape and invalid syntax with the complete parser consumer.
2. **Reporting and recovery:** expose a rejecting catch callback, preserve both failure channels and apply a specified fallback policy.
3. **Freshness assumptions:** reproduce an ID-only stale verdict and a tracked local invalidation protocol without claiming a deployed authorization system.

---

## 6. Interview questions and answers (strictness and validation)

### [6.1. Common interview QA — strictness errors and validation](<./sections/6. Interview questions and answers/6.1. Common interview QA strictness errors and validation.md>)

1. **Predicates and assertions:** explain caller information, false-branch correctness and implementation trust.
2. **Result and exceptions:** identify returned alternatives, unconsumed values, callback throws and consumer policy.
3. **Evidence lifetime:** explain representation refinement, mutable aliases and justified later checks.
4. **Catch and reporting policy:** distinguish specified recovery, propagated failures and reporter completion.
5. **Unknown-input verification:** connect actual parsers/schema inference, malformed-input tests and host integration evidence.

---

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries — what is covered elsewhere](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **Narrowing and failure choices:** locate signature/control-flow mechanics before selecting predicate, assertion or parser behavior.
2. **Checked program:** separate strictness/precision settings and syntax gates from executed validation.
3. **Types and failure values:** route unknown/any/never, absence, serialization and Result/error contracts.
4. **Registration and tests:** distinguish decorator metadata, actual validation, substitution and runtime/type-test evidence.
5. **Async ownership:** identify who observes completion/rejection and test the host's promised behavior.

[← Back to track](<../README.md>)
