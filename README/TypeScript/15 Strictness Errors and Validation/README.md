# Strictness, Errors and Validation

How TypeScript *proves* correctness at runtime boundaries — assertion functions (`asserts x is T`) that narrow by throwing, error-as-value patterns (`Result<T, E>`) that type failure into signatures, and schema validation (parse-don't-validate) that converts unknown inputs into proven types. Predicate/assert *mechanics* live in [05 Functions](<../05 Functions and Callable Types/README.md>) ([3.3. Type guards](<../05 Functions and Callable Types/sections/3. Advanced Callable Patterns/3.3. Type guards predicates asserts and satisfies on functions.md>)) and [07 Unions](<../07 Unions Intersections and Narrowing/README.md>) ([3.3. Custom narrowers](<../07 Unions Intersections and Narrowing/sections/3. Control Flow Narrowing/3.3. Custom narrowers predicates asserts and type guards on unions.md>)); strict *flags* live in [13 Configuration](<../13 Configuration and Compiler Options/README.md>) — this domain owns *validation practice*: when to assert vs narrow, how to model errors as values, and how to validate boundaries so thoroughly that `as` casts become unnecessary.

## 0. Prerequisites

[03 Basic Types and Annotations](<../03 Basic Types and Annotations/README.md>) — [2.2. unknown the type-safe top type](<../03 Basic Types and Annotations/sections/2. The Special Types/2.2. unknown the type-safe top type.md>) (unknown ingestion that validation discharges) and [2.3. never and void](<../03 Basic Types and Annotations/sections/2. The Special Types/2.3. never and void bottom vs deliberate nothing.md>) (never-returning assertion failures). [05 Functions and Callable Types](<../05 Functions and Callable Types/README.md>) — [3.3. Type guards](<../05 Functions and Callable Types/sections/3. Advanced Callable Patterns/3.3. Type guards predicates asserts and satisfies on functions.md>) (predicate/assert mechanics on callables). [07 Unions, Intersections and Narrowing](<../07 Unions Intersections and Narrowing/README.md>) — [3.2. Exhaustiveness](<../07 Unions Intersections and Narrowing/sections/3. Control Flow Narrowing/3.2. Exhaustiveness never and switch narrowing.md>) (never-sink coverage) and [3.3. Custom narrowers](<../07 Unions Intersections and Narrowing/sections/3. Control Flow Narrowing/3.3. Custom narrowers predicates asserts and type guards on unions.md>) (predicate/assert mechanics on unions). [13 Configuration and Compiler Options](<../13 Configuration and Compiler Options/README.md>) — [1.1. strict](<../13 Configuration and Compiler Options/sections/1. Strictness Family/1.1. strict and strictNullChecks the nullability contract.md>) (flags enabling the precision this domain practices).

## 1. Assertion Functions

### [1.1. Assertion signatures asserts condition and asserts x is T](<./sections/1. Assertion Functions/1.1. Assertion signatures asserts condition and asserts x is T.md>)

1. **`asserts condition` shape** (throwing guards that narrow truthiness — `assertDefined(x)` proving non-null downstream).
2. **`asserts x is T` shape** (throwing type-guards — narrowing to full types, not just non-null).
3. **Assertion libraries** (shared `assert`/`assertDefined`/`assertNever` per codebase — one narrowing vocabulary, tested once).

### [1.2. Type predicates vs assertions caller vs thrower](<./sections/1. Assertion Functions/1.2. Type predicates vs assertions caller vs thrower.md>)

1. **Predicates narrow callers** (`x is T` returning boolean — `filter`/`find`/`if` consumers narrow without throwing).
2. **Assertions narrow throwers** (`asserts x is T` — failing *throws*; callers proceed unconditionally after).
3. **Choosing per call site** (recoverable filtering → predicates; invariant enforcement → assertions — the decision rule).

### [1.3. satisfies as a validation gate](<./sections/1. Assertion Functions/1.3. satisfies as a validation gate.md>)

1. **`satisfies` checking without widening** (contracts verified, literals preserved — the 04/09 mechanic applied as a gate).
2. **Gating config and tables** (`as const satisfies Contract` — typo-proof narrow tables feeding transforms).
3. **`satisfies` vs `as` vs annotation** (check-and-keep vs override vs widen — three intents, three syntaxes, zero interchange).

---

## 2. Error Values and Hierarchies

### [2.1. Error as value Result Ok Err patterns](<./sections/2. Error Values and Hierarchies/2.1. Error as value Result Ok Err patterns.md>)

1. **`Result<T, E>` shape** (discriminated `{ ok: true; value } | { ok: false; error }` — failure typed into signatures).
2. **Chaining without throwing** (`map`/`andThen`/`unwrapOr` helpers — pipelines over Results that never throw mid-chain).
3. **Throw vs return discipline** (programmer errors throw; expected failures return — the boundary rule deciding per error kind).

### [2.2. Custom error classes cause and stacks](<./sections/2. Error Values and Hierarchies/2.2. Custom error classes cause and stacks.md>)

1. **Extending `Error` correctly** (`name`, `message`, `cause` chaining — `ErrorOptions` support and `instanceof` reliability).
2. **Domain error hierarchies** (`HttpError` → `NotFound`/`ValidationError` — status-carrying classes narrowing via `instanceof`).
3. **`cause` chains for diagnostics** (wrapping low-level errors with context — stack preserved, causality readable).

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

1. **Predicate/assert mechanics and narrowing theory** (signatures, callables, union narrowers, exhaustiveness sinks) — [05 Functions and Callable Types](<../05 Functions and Callable Types/README.md>) + [07 Unions, Intersections and Narrowing](<../07 Unions Intersections and Narrowing/README.md>).
2. **Strict flags and configuration** (family bundle, trio, pairing, migration sequencing) — [13 Configuration and Compiler Options](<../13 Configuration and Compiler Options/README.md>).
3. **Unknown/never/any behavior and nullability intents** (top types, bottom types, escape hatches, null-vs-undefined) — [03 Basic Types and Annotations](<../03 Basic Types and Annotations/README.md>).
4. **Decorator-driven validation and testing decorated code** (rule registration, DI rebinding, order assertions) — [14 Decorators and Metadata](<../14 Decorators and Metadata/README.md>) + [17 Testing Types](<../17 Testing Types/README.md>).
5. **Async error propagation and runtime handling** (rejections, unhandledrejection, top-level architecture per runtime) — [18 Async Types and Standard Library](<../18 Async Types and Standard Library/README.md>).

[← Back to track](<../README.md>)
