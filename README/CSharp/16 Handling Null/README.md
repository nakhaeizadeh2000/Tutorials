## 0. Language version maps (C# 9-15)

These **indexes** list what shipped when and point into topical domains. Deep dives are in the sections below. [Update C# 9](<../30 Update CSharp 9/README.md>) · [10](<../31 Update CSharp 10/README.md>) · [11](<../32 Update CSharp 11/README.md>) · [12](<../33 Update CSharp 12/README.md>) · [13](<../34 Update CSharp 13/README.md>) · [14](<../35 Update CSharp 14/README.md>) · [15](<../36 Update CSharp 15/README.md>).
## 1. Mental model: what “null” means in modern C# (and why it causes bugs)

### [1.1. Null as a value vs null as “absence” (contracts, not just runtime behavior)](<./sections/1. Mental model/1.1. Null as a value vs absence contracts not runtime.md>)

1. **Two different meanings**: “unknown/not provided” vs “not applicable” (don’t overload one `null` for both).
2. **API contract framing**: *who* is allowed to return `null`, *when*, and *what the caller must do*.
3. **Mentor rule**: treat null-handling as **domain modeling + contract design**, not “sprinkle `?.` everywhere”.

### [1.2. Null-related failure modes in production (what actually breaks)](<./sections/1. Mental model/1.2. Null-related failure modes in production.md>)

1. **NRE sources**: unexpected `null` from boundaries (I/O, deserialization, DI, external libs, legacy code).
2. **Silent logic bugs**: incorrect fallbacks (`??`) masking bad states; “defaulting” hides data quality issues.
3. **Correctness vs resiliency**: when to fail fast vs when to recover (and how to make that explicit).

---

## 2. Nullable reference types (NRT): compiler-assisted null correctness (modern default)

### [2.1. Enabling NRT and reading the annotations (`string` vs `string?`)](<./sections/2. Nullable reference types/2.1. Enabling NRT and reading annotations.md>)

1. **Project-level defaults**: `Nullable` context, warnings as errors, and “fix the warnings, don’t suppress them”.
2. **Annotation meaning**: `T` means “non-null by contract”, `T?` means “may be null”.
3. **Migration strategy**: annotate boundaries first; avoid “turn it on and suppress everything”.

### [2.2. Flow analysis: what the compiler can prove (and how to help it)](<./sections/2. Nullable reference types/2.2. Flow analysis what the compiler can prove.md>)

1. **Guard patterns**: `if (x is null) return;` then use `x` confidently.
2. **Pattern matching**: `is null`, `is not null`, property patterns, and `switch` expressions for exhaustive handling.
3. **Helping the compiler**: avoid confusing control flow; prefer small pure helpers; understand when analysis stops.

### [2.3. Nullability attributes for interop and advanced contracts](<./sections/2. Nullable reference types/2.3. Nullability attributes for interop and advanced contracts.md>)

1. **Interop reality**: consuming “oblivious” libraries and legacy APIs safely.
2. **Attributes toolbox**: `[NotNull]`, `[MaybeNull]`, `[AllowNull]`, `[DisallowNull]`, `[NotNullWhen]`, etc.
3. **Mentor note**: attributes are for expressing *truth* the compiler can’t infer—don’t use them to lie.

---

## 3. Nullable value types (`T?` where `T : struct`): precision without boxing

### [3.1. Semantics: `int?` is not “an int that can be null” (it’s `Nullable<int>`)](<./sections/3. Nullable value types/3.1. Nullable value types semantics.md>)

1. **Representation**: `HasValue` + `Value` (and why `Value` can throw).
2. **Lifting rules**: operators and comparisons on nullable value types (and the “null wins” behavior).
3. **Correct defaults**: avoid sentinel values when `T?` models absence more honestly.

### [3.2. `GetValueOrDefault`, `HasValue`, and pattern matching for clarity and speed](<./sections/3. Nullable value types/3.2. Nullable value types usage patterns.md>)

1. **Branching explicitly** beats clever expressions when correctness matters.
2. **Avoid exceptions**: don’t use `.Value` unless you proved `HasValue`.
3. **Performance note**: `T?` avoids allocations; watch for boxing when converting to `object`/interfaces.

---

## 4. Operators and language constructs for handling null (use them intentionally)

### [4.1. Null-conditional operator (`?.`, `?[]`): safe navigation without hiding bugs](<./sections/4. Operators and constructs/4.1. Null-conditional operator safe navigation.md>)

1. **What it does**: short-circuits member/index access when receiver is null.
2. **When it’s correct**: optional object graphs where “missing” is expected.
3. **When it’s dangerous**: hiding invariants that should be enforced (prefer guards + fail fast).

### [4.2. Null-coalescing operators (`??`, `??=`): defaults, caching, and side effects](<./sections/4. Operators and constructs/4.2. Null-coalescing operators defaults caching side effects.md>)

1. **`??`**: choose fallback value when the left side is null (be explicit about semantics).
2. **`??=`**: lazy initialization patterns; be careful with expensive or side-effecting RHS.
3. **Mentor note**: defaulting is a business decision—document it in code via naming and structure.

### [4.3. Null-forgiving operator (`!`): last resort, not a “fix”](<./sections/4. Operators and constructs/4.3. Null-forgiving operator last resort.md>)

1. **What it means**: “I claim this is non-null here” (suppresses warnings only).
2. **When it’s acceptable**: after external validation the compiler can’t see, or in rare interop cases.
3. **Avoid**: sprinkling `!` to make warnings disappear—this is how NREs survive reviews.

---

## 5. Designing APIs that make null harder to misuse (modern, C# 15-friendly style)

### [5.1. Prefer explicit models over “null means many things”](<./sections/5. API design/5.1. Prefer explicit models over null.md>)

1. **Domain types**: represent “optional” and “missing” intentionally (e.g., `Result`, discriminated shapes, dedicated types).
2. **Try-patterns**: `TryParse`, `TryGetValue`, and `out` results instead of returning null for control flow.
3. **Collections**: prefer empty collections over null collections (unless null is part of the contract).

### [5.2. Public API contracts: parameter validation, return guarantees, and versioning](<./sections/5. API design/5.2. Public API contracts parameter validation return guarantees.md>)

1. **Parameters**: accept `T?` only when you truly support null; validate early at boundaries.
2. **Returns**: don’t return null for “not found” if a Try-pattern or result type is clearer.
3. **Versioning**: changing nullability annotations is a breaking-change *signal*—treat it as public contract.

---

## 6. Performance and reliability notes (null-handling can be hot-path code)

### [6.1. Performance pitfalls: allocations, boxing, and exceptions](<./sections/6. Performance and reliability/6.1. Performance pitfalls allocations boxing exceptions.md>)

1. **Exceptions are expensive**: don’t use NREs as control flow; design for “expected absence”.
2. **Boxing traps**: `T?` boxed to `object` can allocate; avoid `params object[]` logging in hot paths.
3. **Branching vs cleverness**: clearer null guards often JIT well and are easier to profile and optimize.

### [6.2. Concurrency + null: publication and visibility issues that look like null bugs](<./sections/6. Performance and reliability/6.2. Concurrency and null publication visibility.md>)

1. **Data races** can present as “sometimes null” (improper publication of references).
2. **Lazy init patterns**: choose safe patterns; don’t invent double-checked locking without deep knowledge.
3. **Mentor note**: if null appears “randomly”, suspect concurrency or lifetime bugs before blaming NRT.

---

## 7. Important points mentors insist you remember about handling null (checklist)

### [7.1. Handling null checklist: correctness, API design, performance](<./sections/7. Important points/7.1. Handling null checklist correctness API design performance.md>)

1. **Make contracts explicit**: `T` vs `T?`, Try-patterns, and domain models beat “magic nulls”.
2. **Prefer guards to chains**: validate once, then write normal code (better readability and debuggability).
3. **Don’t silence warnings**: fix causes; use `!` only when you can prove safety.
4. **Be intentional with defaults**: `??` is a decision; ensure it doesn’t hide corrupt or unexpected inputs.
5. **Measure hot paths**: avoid boxing/logging allocations; avoid exception-driven flows.

---

## 8. Interview questions and answers (Handling Null, modern C# framing)

### [8.1. Interview Q&A: nullability, operators, and API design](<./sections/8. Interview Q and A/8.1. Interview questions handling null.md>)

1. **Explain `string` vs `string?`** and how NRT changes code review expectations.
2. **When would you use `??` vs `?:` vs `if` guards** (and what’s the readability/perf trade-off)?
3. **When is `!` acceptable** and what are the risks?
4. **How do you design “not found” APIs** (null return vs Try-pattern vs result type) and why?
5. **How can concurrency bugs look like null bugs** (publication, races, lifetime)?

---

## 9. Overlaps to avoid (where this domain stops)

### [9.1. Boundaries: what is covered elsewhere in this repo](<./sections/9. Overlaps to avoid/9.1. Boundaries what is covered elsewhere.md>)

1. **Generic `T` nullability and constraints** live in `Generics/2.2` (this domain focuses on *using* nullability, not generic constraint theory).
2. **`??=` basics** are introduced in `CSharp language basics/4.2` (this domain goes deeper into design/perf/contract implications).
3. **Boxing deep dives** (including “null + boxing” scenarios) live in `System Object Class/4.*` and `Structures/3.3`.
4. **Overload resolution and ambiguity traps** (common with `null` literals) live in `Methods/5.1`.

