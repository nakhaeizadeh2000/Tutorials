# Testing Types

How TypeScript *proves* types stay correct — type-level assertions (`Expect<Equal<A, B>>`) that fail compilation on drift, negative tests (`@ts-expect-error`) that lock rejected shapes out, typed test doubles (mocks/spies/fakes carrying full signatures) that keep refactors honest, and CI gates that run type tests alongside unit tests. Assertion *mechanics* live in [15 Strictness, Errors and Validation](<../15 Strictness Errors and Validation/README.md>) ([1.1. Assertion signatures](<../15 Strictness Errors and Validation/sections/1. Assertion Functions/1.1. Assertion signatures asserts condition and asserts x is T.md>)); test *execution* (runners, coverage, e2e) lives in the future Testing track — this domain owns *type testing*: proving the static surface itself, not executing behavior.

## 0. Prerequisites

[08 Generics Deep Dive](<../08 Generics Deep Dive/README.md>) — [2.3. infer pipelines](<../08 Generics Deep Dive/sections/2. Constraints Defaults and Inference Control/2.3. infer conditional inference and distributive preview.md>) (conditional/infer shapes type tests pin down). [09 Utility Types and Type Transformations](<../09 Utility Types and Type Transformations/README.md>) — [2.2. Exclude Extract NonNullable Pick Omit](<../09 Utility Types and Type Transformations/sections/2. Conditional Types/2.2. Exclude Extract NonNullable Pick Omit under the hood.md>) (stdlib transforms type tests enumerate). [15 Strictness, Errors and Validation](<../15 Strictness Errors and Validation/README.md>) — [1.1. Assertion signatures](<../15 Strictness Errors and Validation/sections/1. Assertion Functions/1.1. Assertion signatures asserts condition and asserts x is T.md>) (throwing assertions vs compile-time assertions contrasted).

## 1. Type Assertions in Tests

### [1.1. Expect Equal and compile-time type assertions](<./sections/1. Type Assertions in Tests/1.1. Expect Equal and compile-time type assertions.md>)

1. **`Equal<A, B>` identity check** (conditional-identity trick — exact equality, not mere assignability).
2. **`Expect<T extends true>` gate** (assertion positions that error on drift — declaration-file probes).
3. **Where assertions live** (colocated `*.test-d.ts` vs inline probes — visibility vs noise).

### [1.2. tsd expect-type and type-testing libraries](<./sections/1. Type Assertions in Tests/1.2. tsd expect-type and type-testing libraries.md>)

1. **`tsd` test files** (`test-d/` + `expectType`/`expectError` — library-surface testing without a runner).
2. **`expect-type` fluent assertions** (`expectTypeOf(x).toEqualTypeOf<Y>()` — IDE-readable failure messages).
3. **Library vs hand-rolled choice** (hand-rolled `Equal` for apps; `tsd`/`expect-type` for published packages).

### [1.3. Negative type tests with ts-expect-error](<./sections/1. Type Assertions in Tests/1.3. Negative type tests with ts-expect-error.md>)

1. **`@ts-expect-error` as a lock** (rejected shapes pinned — removing the error breaks the test, as intended).
2. **`@ts-ignore` vs `@ts-expect-error` discipline** (unused-ignore errors vs silent suppression — why only one is testable).
3. **Exhaustiveness probes** (never-sink + error-line assertions — 07/3.2 mechanics applied as regression tests).

---

## 2. Typed Test Doubles

### [2.1. Mocking functions with full type safety](<./sections/2. Typed Test Doubles/2.1. Mocking functions with full type safety.md>)

1. **Signature-preserving mocks** (`vi.fn<T>()` generics — arity/return enforced, not `any`-cast).
2. **Mocked modules vs injected fakes** (module-mock rewiring vs constructor injection — blast radius compared).
3. **Untyped-mock infection** (one `any` double silencing a whole call chain — the 03/2.1 hazard in tests).

### [2.2. Spies stubs and fakes over generics](<./sections/2. Typed Test Doubles/2.2. Spies stubs and fakes over generics.md>)

1. **Spies observing without replacing** (`vi.spyOn(obj, "m")` — implementation kept, calls recorded with types).
2. **Stubs with programmed answers** (per-case return tables typed as `Map<Input, Output>` — exhaustive answer coverage).
3. **Fakes carrying generic state** (`FakeRepo<T>` in-memory doubles — contract-proving substitutes for databases/queues).

### [2.3. Testing async and error paths with types](<./sections/2. Typed Test Doubles/2.3. Testing async and error paths with types.md>)

1. **Typed rejection tests** (`rejects.toThrow` + `Result` unions — 15/2.1 shapes asserted, not string-matched).
2. **Floating-promise detection in suites** (`no-floating-promises` on test files — 18/async mechanics enforced in CI).
3. **Timeout and abort doubles** (`AbortSignal` fakes, fake timers typed — time as an injectable dependency).

---

## 3. Type Tests in Practice

### [3.1. Testing generics and conditional types](<./sections/3. Type Tests in Practice/3.1. Testing generics and conditional types.md>)

1. **Instantiation spot-checks** (representative `<string>`, `<union>`, `<never>` probes — distribution verified per 08/09).
2. **Boundary instantiations** (`never`/`unknown`/`any` inputs — the three types that break naive conditionals).
3. **Snapshot vs assertion discipline** (hover-snapshots rot; `Equal` assertions specify — intent over text).

### [3.2. Testing declaration files and public API surface](<./sections/3. Type Tests in Practice/3.2. Testing declaration files and public API surface.md>)

1. **Public-surface probes** (import-from-package assertions — what consumers can name, pinned).
2. **`attw`/publint as type tests** (16/2.3 gates re-framed — packaging assertions beside unit assertions).
3. **Breaking-change detection** (assertion diffs in CI — semver-major signals from red type tests).

### [3.3. CI gates running type tests with unit tests](<./sections/3. Type Tests in Practice/3.3. CI gates running type tests with unit tests.md>)

1. **Three-gate suite** (`tsc --noEmit` + `tsd`/vitest-typecheck + unit tests — separate jobs, separate signals).
2. **Failure triage order** (type errors first, behavior second — static drift vs logic bug routing).
3. **Baseline discipline for legacy** (error-count budgets decreasing — 13/4.1 triage applied to test adoption).

---

## 4. Important points to remember (testing types)

### [4.1. Type-testing checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Type-testing checklist mental models mentors insist on.md>)

1. **Assert identity, not assignability** (`Equal`, not extends-checks — drift caught, not hidden).
2. **Lock rejections, not just acceptances** (every public `never` gets a `@ts-expect-error` probe).
3. **Doubles carry signatures** (no `any` mocks — fakes prove contracts they substitute).
4. **Gate statically and behaviorally** (red type test blocks like a red unit test — same severity).

---

## 5. Common pitfalls → production bugs (testing types)

### [5.1. Real production bugs caused by type-testing misunderstandings](<./sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by type-testing misunderstandings.md>)

1. **Snapshot-only type tests approved a widened public return** (hover text updated blindly; downstream exhaustive switches went non-exhaustive).
2. **`any`-cast mock hid a renamed required field across 40 call sites** (double silenced arity; production `undefined` at the boundary).
3. **Missing `@ts-expect-error` probe let a rejected card-number shape back in** (validation bypass reintroduced; fraud-review queue incident).
4. **Type tests excluded from CI passed locally, broke published types** (`tsconfig.include` skipped `test-d/`; broken declarations shipped).

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

1. **Assertion mechanics and error-as-value modeling** (predicates, asserts, Result, schemas, parse discipline) — [15 Strictness, Errors and Validation](<../15 Strictness Errors and Validation/README.md>).
2. **Conditional/infer/utility mechanics under test** (distribution, homomorphic mapping, stdlib sources) — [08 Generics Deep Dive](<../08 Generics Deep Dive/README.md>) + [09 Utility Types and Type Transformations](<../09 Utility Types and Type Transformations/README.md>).
3. **Test execution and runners** (suites, coverage, e2e behavior, Playwright) — future Testing track (this domain proves statics; runners prove behavior).
4. **Async runtime behavior** (event loop, timers, cancellation propagation) — [18 Async Types and Standard Library](<../18 Async Types and Standard Library/README.md>) (textual forward).
5. **Packaging gates and declaration emit** (exports maps, attw/publint operation, d.ts authoring) — [12 Modules, Namespaces and Declaration Files](<../12 Modules Namespaces and Declaration Files/README.md>) + [16 Tooling, Language Server and Ecosystem](<../16 Tooling Language Server and Ecosystem/README.md>).

[← Back to track](<../README.md>)
