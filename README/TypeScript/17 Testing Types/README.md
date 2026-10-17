# Testing Types

How TypeScript *proves* types stay correct — type-level assertions (`Expect<Equal<A, B>>`) that fail compilation on drift, negative tests (`@ts-expect-error`) that lock rejected shapes out, typed test doubles (mocks/spies/fakes carrying full signatures) that keep refactors honest, and CI gates that run type tests alongside unit tests. Assertion *mechanics* live in [15 Strictness, Errors and Validation](<../15 Strictness Errors and Validation/README.md>) ([1.1. Assertion signatures](<../15 Strictness Errors and Validation/sections/1. Assertion Functions/1.1. Assertion signatures asserts condition and asserts x is T.md>)); test *execution* (runners, coverage, e2e) lives in the future Testing track — this domain owns *type testing*: checking the static surface and providing the bounded tool/runtime fixtures needed to verify its examples.

## 0. Prerequisites

[08 Generics Deep Dive](<../08 Generics Deep Dive/README.md>) — [2.3. infer pipelines](<../08 Generics Deep Dive/sections/2. Constraints Defaults and Inference Control/2.3. infer conditional inference and distributive preview.md>) (conditional/infer shapes type tests pin down). [09 Utility Types and Type Transformations](<../09 Utility Types and Type Transformations/README.md>) — [2.2. Exclude Extract NonNullable Pick Omit](<../09 Utility Types and Type Transformations/sections/2. Conditional Types/2.2. Exclude Extract NonNullable Pick Omit under the hood.md>) (stdlib transforms type tests enumerate). [15 Strictness, Errors and Validation](<../15 Strictness Errors and Validation/README.md>) — [1.1. Assertion signatures](<../15 Strictness Errors and Validation/sections/1. Assertion Functions/1.1. Assertion signatures asserts condition and asserts x is T.md>) (throwing assertions vs compile-time assertions contrasted).

## 1. Type Assertions in Tests

### [1.1. Expect Equal and compile-time type assertions](<./sections/1. Type Assertions in Tests/1.1. Expect Equal and compile-time type assertions.md>)

1. **Chosen type relation:** compare directional assignability with a representation-sensitive equality helper and its limits.
2. **Actual constraint gates:** run a selected compile-only suite, observe contract drift and separate checking from emission.
3. **Runtime boundary:** inspect a retained ambient call and test instantiation-expression constraints without claiming value expressions erase.

### [1.2. tsd expect-type and type-testing libraries](<./sections/1. Type Assertions in Tests/1.2. tsd expect-type and type-testing libraries.md>)

1. **`tsd` test files** (a real built declaration package, positive/negative assertions and an observed failing-then-passing contract change).
2. **`expect-type` fluent assertions** (actual imports, explicit Vitest type checking and runtime/static failure contrasts).
3. **Library vs hand-rolled choice** (select by contract, compiler integration and dependency cost; label compile-only probes honestly).

### [1.3. Negative type tests with ts-expect-error](<./sections/1. Type Assertions in Tests/1.3. Negative type tests with ts-expect-error.md>)

1. **Active rejection tests:** run selected negative calls and observe unused-directive failures after widening.
2. **Diagnostic and runtime boundaries:** expose a typo false positive, compare ignore semantics and test numeric range behavior separately.
3. **Exhaustiveness versus input admission:** grow a union, diagnose its never sink and update the independent outsider test intentionally.

---

## 2. Typed Test Doubles

### [2.1. Mocking functions with full type safety](<./sections/2. Typed Test Doubles/2.1. Mocking functions with full type safety.md>)

1. **Actual typed mocks:** run Vitest with explicit and inferred signatures, checked arguments and configured replies.
2. **Replacement boundaries:** compare direct injection with a checked module factory and its hoisting conditions.
3. **Compatibility limits:** show a correctly typed wrong answer and an any-hidden shape failure with separate checking and runtime commands.

### [2.2. Spies stubs and fakes over generics](<./sections/2. Typed Test Doubles/2.2. Spies stubs and fakes over generics.md>)

1. **Spy lifecycle:** execute real call-through, replacement, history clearing and method restoration.
2. **Programmed answers:** distinguish complete finite Record tables from partial Map entries and explicit fallbacks.
3. **Generic fake contracts:** preserve present undefined, test state through the interface and expose a typed implementation that violates behavior.

### [2.3. Testing async and error paths with types](<./sections/2. Typed Test Doubles/2.3. Testing async and error paths with types.md>)

1. **Actual outcome assertions:** distinguish runtime rejection checks from Result narrowing and Promise's fulfilled type.
2. **Completion ownership:** run the pinned runner's unawaited-assertion failure and connect separate lint configuration to test files.
3. **Timer and abort behavior:** drive real Vitest fake timers, test pre-abort and in-flight cancellation, and expose missing cleanup.

---

## 3. Type Tests in Practice

### [3.1. Testing generics and conditional types](<./sections/3. Type Tests in Practice/3.1. Testing generics and conditional types.md>)

1. **Selected regression matrices:** run alias-only distribution and readonly-tuple probes and observe implementation changes fail.
2. **Actual boundary results:** check never, unknown and any where relevant, including constraint rejection and nonempty tuples versus arrays.
3. **Intentional evidence:** distinguish compatibility, representation-sensitive comparison and displayed documentation text.

### [3.2. Testing declaration files and public API surface](<./sections/3. Type Tests in Practice/3.2. Testing declaration files and public API surface.md>)

1. **Installed declaration probes:** check actual root/subpath ESM and CommonJS imports, hidden names and strict signature assertions.
2. **Artifact and runtime boundaries:** execute installed behavior, expose an intentionally blocked subpath and interpret health checks within their scope.
3. **Compatibility decisions:** compare parameter-label and optional-parameter changes without treating every assertion failure as a release-version verdict.

### [3.3. CI gates running type tests with unit tests](<./sections/3. Type Tests in Practice/3.3. CI gates running type tests with unit tests.md>)

1. **Actual command gates:** run a selected type probe and runtime suite through a collector that preserves both exit statuses.
2. **Failure evidence:** reproduce static-only, behavior-only and combined failures, plus a false green from excluding the probe.
3. **Adoption boundaries:** distinguish diagnostic identity from counts, define omitted scope and separate local checks from hosted enforcement.

---

## 4. Important points to remember (testing types)

### [4.1. Type-testing checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Type-testing checklist mental models mentors insist on.md>)

1. **Chosen relation and active gate:** explain the direction, assertion helper and selected project rather than requiring identity everywhere.
2. **Rejection boundaries:** connect active static negatives with separate runtime validation and diagnostic-cause checks.
3. **Substitute evidence:** preserve useful signatures while testing the bounded behavior a double supplies.
4. **Command responsibilities:** review selection, actual tool/artifact inputs, failure propagation and the limits of a green result.

---

## 5. Common pitfalls → production bugs (testing types)

### [5.1. Real production bugs caused by type-testing misunderstandings](<./sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by type-testing misunderstandings.md>)

1. **Changed expectations:** diagnose how either text updates or edited type assertions can approve unintended widening.
2. **Malformed mock replies:** compare checker protection, any escapes and actual runtime failures.
3. **Branded construction:** run distinct static admission and runtime factory tests and break each responsibility independently.
4. **Omitted probes:** reproduce a false green from selection and preserve separate installed-artifact evidence.

These are labeled synthetic failure cases; no company incident history is claimed.

---

## 6. Interview questions and answers (testing types)

### [6.1. Common interview QA — testing types](<./sections/6. Interview questions and answers/6.1. Common interview QA testing types.md>)

1. **`Equal` vs assignability — what does each prove, and which catches drift?** (identity vs compatibility).
2. **`@ts-expect-error` vs `@ts-ignore` — which is testable, and why?** (used-error enforcement vs silent suppression).
3. **How do you mock a generic function without losing its signature?** (explicit type arguments on doubles).
4. **Where do type tests run in CI — and what does each gate catch?** (noEmit vs tsd vs unit triage).
5. **When do hand-rolled assertions beat `tsd`/`expect-type` — and when don't they?** (app vs published-package thresholds).

---

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries — what is covered elsewhere](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **Contracts and evidence:** separate validator design, compile-only probes and actual tool/runtime assertions.
2. **Generic probe design:** link inference/transform semantics and test meaningful inputs and stopping boundaries.
3. **Runner ownership:** reproduce bounded type-test commands while preserving the planned Playwright Testing curriculum.
4. **Async seams:** identify completion/rejection ownership and the behavior a typed substitute actually supplies.
5. **Consumer surfaces:** test resolved declarations, packed files and entry points under the promised configuration.

[← Back to track](<../README.md>)
