# Strictness, Errors and Validation

This domain applies TypeScript contracts to runtime validation and failure handling. Assertions communicate successful continuation, Result values describe modeled failures, and parsers check incoming values. Runtime guarantees depend on the executed implementation and its ownership assumptions; a signature alone does not prove a validator correct. Predicate/assertion mechanics live in [05 Functions](<../05 Functions and Callable Types/README.md>) and [07 Unions](<../07 Unions Intersections and Narrowing/README.md>), while compiler strictness options live in [13 Configuration](<../13 Configuration and Compiler Options/README.md>). Here the focus is consumer behavior, error policy and boundary evidence.

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

1. **Never-throw function contracts** (pure computation + event handlers that must not propagate — catch-and-report внутри).
2. **Error budgets per boundary** (which throws cross ( programmer bugs → crash reporting), which convert to values (expected failures → Results)).
3. **Top-level handling architecture** (one uncaught handler per runtime — logging, reporting, graceful degradation in one place).

---

## 3. Schema Validation in Practice

### [3.1. Hand-rolled schemas parse validate narrow](<./sections/3. Schema Validation in Practice/3.1. Hand-rolled schemas parse validate narrow.md>)

1. **Parse functions returning unions** (`parseUser(raw): User | ParseError[]` — validation discharging `unknown` honestly).
2. **Composing small parsers** (field parsers → object parsers → array parsers — bottom-up construction, tested per unit).
3. **Narrowing after parse** (parsed values flow un-asserted — no `as` downstream of a real parser, ever).

### [3.2. Schema objects and inferred types](<./sections/3. Schema Validation in Practice/3.2. Schema objects and inferred types.md>)

1. **Schema-first typing** (define validators, derive types via indexed access — single source, no drift between schema and type).
2. **Object, array, union, optional combinators** (hand-rolled combinator kit mirroring Zod's shape — `string()`, `object()`, `array()`, `union()`, `optional()`).
3. **When to adopt a library** (hand-rolled for few shapes; Zod/Valibot past complexity thresholds — error messages, ecosystems, performance).

### [3.3. Parse do not validate at boundaries](<./sections/3. Schema Validation in Practice/3.3. Parse do not validate at boundaries.md>)

1. **Parse vs validate distinction** (parsing *produces* typed values from unknown; validating *checks* typed values — different inputs, different guarantees).
2. **Boundary inventory** (network, storage, env, CLI, workers — every unknown-entry enumerated and parsed, none assumed).
3. **Parse-once architecture** (unknown crosses inward exactly once — parsed values flow trusted downstream; re-validation is a bug smell).

---

## 4. Important points to remember (strictness and validation)

### [4.1. Validation checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Validation checklist mental models mentors insist on.md>)

1. **Narrow with predicates, enforce with assertions** (recoverable → `is`; invariant → `asserts` — the call-site decision rule).
2. **Return expected failures, throw programmer errors** (Results for the predictable; throws for the bugs — never mixed).
3. **Parse unknown once at every boundary** (unknown in, proven types out — single crossing, trusted downstream).
4. **No `as` downstream of real validation** (parsed values flow un-asserted — casts after parsing prove the parser lied).

---

## 5. Common pitfalls → production bugs (strictness and validation)

### [5.1. Real production bugs caused by validation misunderstandings](<./sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by validation misunderstandings.md>)

1. **Blind `as User` on fetch results crashed on malformed payloads** (assertion without evidence; `toError`-adjacent lesson applied to data).
2. **Swallowed async errors in fire-and-forget handlers crashed the process** (floating promises with no rejection handling — unhandledrejection at 3am).
3. **Over-broad catch narrowed nothing and masked a bug for months** (`catch { return default }` swallowing programmer errors alongside expected ones).
4. **Validated-once cached verdict served stale permissions after role change** (correctness caching — verdicts depend on mutable values, never cached).

---

## 6. Interview questions and answers (strictness and validation)

### [6.1. Common interview QA — strictness errors and validation](<./sections/6. Interview questions and answers/6.1. Common interview QA strictness errors and validation.md>)

1. **`x is T` vs `asserts x is T` — which narrows, for whom, and what happens on failure?** (caller-narrowing vs thrower-narrowing).
2. **When do you return `Result` vs throw — and how do callers handle each?** (expected failures vs programmer bugs).
3. **Parse vs validate — what's the difference, and where does each run?** (unknown→typed production vs typed→checked verification).
4. **Why is `catch { return default }` dangerous — and what belongs in catch blocks?** (swallowing vs narrowing+handling).
5. **How do you type an `unknown` API response with zero `as` casts?** (parse pipeline: unknown → guard → narrowed → flowing).

---

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries — what is covered elsewhere](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **Narrowing and failure choices:** locate signature/control-flow mechanics before selecting predicate, assertion or parser behavior.
2. **Checked program:** separate strictness/precision settings and syntax gates from executed validation.
3. **Types and failure values:** route unknown/any/never, absence, serialization and Result/error contracts.
4. **Registration and tests:** distinguish decorator metadata, actual validation, substitution and runtime/type-test evidence.
5. **Async ownership:** identify who observes completion/rejection and test the host's promised behavior.

[← Back to track](<../README.md>)
