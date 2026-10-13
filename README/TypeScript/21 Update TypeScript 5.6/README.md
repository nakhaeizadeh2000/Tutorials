## Update TypeScript 5.6 (feature map + where it lives in this repo)

This domain is an **index** for TypeScript 5.6-era changes (stable 2024-09-09). Deep explanations live in the linked topical domains below; this file only routes you there. No concept is re-taught here; every entry is a one-line mention + link per the anti-boilerplate law (§5).

> Scope: TypeScript 5.6 added five change groups — **disallowed always-truthy/nullish checks**, **Iterator helpers + `IteratorObject`** (renamed from `BuiltinIterator`, with `ArrayIterator`/`MapIterator`/`SetIterator` subtypes), **the `--strictBuiltinIteratorReturn` flag**, **emit/build/import flags** (`--noCheck`, `--stopBuildOnErrors`, `--noUncheckedSideEffectImports`, arbitrary module identifiers), and **editor responsiveness** (region-prioritized diagnostics, commit characters, auto-import exclude patterns). All claims labeled "TS 5.6 era" below.

## 1. Disallowed always-truthy and nullish checks

### [1.1. Built-in narrowers — the checks 5.6 now rejects as statically dead](<../07 Unions Intersections and Narrowing/sections/3. Control Flow Narrowing/3.1. Built-in narrowers typeof instanceof in and equality.md>)

1. **Why it exists** (a truthiness test the compiler can prove constant — `if ({} || fallback)` — is almost always a logic error or dead code; 5.6 turns the silent pass into an error so the bug is caught at author time)
2. **Production guidance** (only syntactically decidable cases error — `true`, `false`, `0`, `1` stay allowed because `while (true)` and debug-gated `if (true || ...)` are idiomatic; fix by deleting the dead branch or by narrowing the type so the check means something)
3. **Where the flag lives** (unconditional check, not behind `--strict` — but the migration that surfaces it is the strictness wave in [strict and strictNullChecks](<../13 Configuration and Compiler Options/sections/1. Strictness Family/1.1. strict and strictNullChecks the nullability contract.md>); the throw-side counterpart is [assertion signatures](<../15 Strictness Errors and Validation/sections/1. Assertion Functions/1.1. Assertion signatures asserts condition and asserts x is T.md>))

---

## 2. Iterator helpers and `IteratorObject`

### [2.1. Collection iterators — worked helpers and IteratorObject typing](<../10 Arrays Tuples and Collections/sections/3. Collections and Selection/3.1. Map and Set typing generics over collections.md>)

1. **Typed helper surface:** distinguish the general next protocol from IteratorObject and collection subtypes. The owner runs map/filter/take/toArray and Iterator.from adaptation with TypeScript 7.0.2/Node 22.18.0; the tested Node 20.20.2 lacks native helpers. Library declarations do not implement the methods.
2. **Consumption policy:** observe lazy callback counts, consumed-iterator reuse and a take before versus after filter. Synchronous helpers do not supply an async-helper implementation; [async generators](<../18 Async Types and Standard Library/sections/3. Standard Library in Practice/3.2. AsyncIterable generators and for-await.md>) owns that distinct protocol.
3. **Strict completion:** the 5.6 strictBuiltinIteratorReturn change makes built-in completion values optional under strict checking. Check done and, when necessary, an undefined element separately. [Library selection](<../18 Async Types and Standard Library/sections/3. Standard Library in Practice/3.1. lib settings and built-in async types.md>) owns declaration configuration; [the real 5.5→5.6 upgrade](<../20 Production Checklist Migration and Interoperability/sections/2. Migration Playbooks/2.2. TypeScript version upgrades without flag-days.md>) demonstrates the compatibility change.

---

## 3. Emit, build, and side-effect-import flags

### [3.1. Single-file transpilation — the skip-checking family `noCheck` belongs to](<../13 Configuration and Compiler Options/sections/2. Erasable and Isolated Toolchain/2.1. isolatedModules single-file transpilation.md>)

1. **Why it exists** (`--noCheck` separates emission from a full checking pass; declaration emission can still need type computation, as qualified below. `--stopBuildOnErrors` skips downstream projects when an upstream project has errors)
2. **Production guidance** (`--noCheck` pairs with `--emitDeclarationOnly` for contract-package pipelines — see [solution builds and CI orchestration](<../19 Performance Project References and Scaling/sections/2. Project References and Builds/2.3. Solution builds and CI orchestration with tsc b.md>); without `--isolatedDeclarations` the compiler may still check what declaration emit needs — see [declaration, composite, project references](<../13 Configuration and Compiler Options/sections/3. Modules Emit and Projects/3.2. declaration composite project references.md>))
3. **Side-effect imports** (`--noUncheckedSideEffectImports` errors when a bare `import "./polyfill"` resolves to no source file — catching typos that previously masked missing setup; the import forms themselves are catalogued in [import and export forms](<../12 Modules Namespaces and Declaration Files/sections/1. ES Modules/1.1. import and export forms named default star re-export.md>))

### [3.2. Solution builds — stop downstream builds after an upstream error](<../19 Performance Project References and Scaling/sections/2. Project References and Builds/2.3. Solution builds and CI orchestration with tsc b.md>)

1. **Default behavior:** Build mode from 5.6 can continue through intermediate errors and produce best-effort output. An unsuccessful build is still unsuccessful even when output exists.
2. **Failing dependencies:** In a referenced project, `tsc -b --stopBuildOnErrors` prevents a dependent project from building after its dependency fails. It does not promise to remove old output or prevent every failing project's own emit; output suppression is a separate policy.
3. **Verified spelling:** The supported option was checked on TypeScript 5.6.3 and 7.0.2. A clean two-project fixture reported both projects' errors without the option, and only the upstream error with the option; the dependent output was absent in the second case. Restoring valid inputs passed the build and its Node consumer. The [option reference](https://www.typescriptlang.org/tsconfig/stopBuildOnErrors.html) uses this executable spelling; the [historical release page](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-6.html) currently spells it differently, so verify commands with the pinned compiler's build help.

---

## 4. Arbitrary module identifiers

### [4.1. Import and export forms — where non-identifier specifiers dock](<../12 Modules Namespaces and Declaration Files/sections/1. ES Modules/1.1. import and export forms named default star re-export.md>)

1. **Why it exists** (generated code and bundler-injected modules need specifiers that are not valid identifiers — 5.6 allows them as arbitrary string-literal module names instead of forcing identifier-safe renames)
2. **Production guidance** (reached for by code generators like esbuild inject, not hand-written imports — if a hand-written import needs it, the module boundary is probably wrong; untyped generated shims still follow the [ambient wildcard discipline](<../12 Modules Namespaces and Declaration Files/sections/2. Namespaces and Ambient Contexts/2.3. Ambient modules declare module wildcards.md>))
3. **Resolution pairing** (specifier shape interacts with `--moduleResolution` — keep the [module and moduleResolution pairing](<../13 Configuration and Compiler Options/sections/3. Modules Emit and Projects/3.1. module and moduleResolution pairing.md>) matched per runtime)

---

## 5. Editor responsiveness and auto-imports

### [5.1. Debugging `tsserver` — the region-prioritized diagnostics pipeline](<../16 Tooling Language Server and Ecosystem/sections/3. Debugging and Ecosystem/3.1. Debugging tsserver logs and responsiveness.md>)

1. **Why it exists** (diagnostics for the visible region first — large files stop blocking the editor on full-file checks; commit characters accept completions without leaving the keyboard; `exclude` patterns keep auto-imports from suggesting vendored or generated copies)
2. **Production guidance** (configure auto-import exclude for generated/barrel-duplicate paths at the repo root so every contributor inherits it — the [rename and code-action discipline](<../16 Tooling Language Server and Ecosystem/sections/1. Language Server in Practice/1.2. Rename refactorings and code actions.md>) assumes imports resolve to canonical paths; hover/completion behavior is tuned via [inlay hints, hover, and signature help](<../16 Tooling Language Server and Ecosystem/sections/1. Language Server in Practice/1.3. Inlay hints hover and signature help.md>))
3. **When it is not enough** (region-prioritized checking masks slow programs rather than fixing them — if diagnostics lag everywhere, measure with [extendedDiagnostics and traces](<../19 Performance Project References and Scaling/sections/1. Check-Time Performance/1.1. Measuring with extendedDiagnostics and traces.md>) instead of waiting)

---

## 6. Overlaps to avoid (keep the repo navigable)

1. **Narrowing mechanics (`typeof`/`in`/`instanceof`, discriminants, exhaustiveness)** belong in [Unions, Intersections and Narrowing](<../07 Unions Intersections and Narrowing/README.md>) — this index only notes the 5.6 always-truthy rejection and links there.
2. **`lib`/`target` selection, async iteration, and timers** belong in [Async Types and Standard Library](<../18 Async Types and Standard Library/README.md>) (here only the `IteratorObject` rename and helper-method surface).
3. **Flag semantics (`strict` family, emit, module pairing, project references)** belong in [Configuration and Compiler Options](<../13 Configuration and Compiler Options/README.md>) (here only what 5.6 added: `strictBuiltinIteratorReturn`, `noCheck`, `stopBuildOnErrors`, `noUncheckedSideEffectImports`).
4. **Module forms, ambient shims, and publishing** belong in [Modules, Namespaces and Declaration Files](<../12 Modules Namespaces and Declaration Files/README.md>) (here only arbitrary identifiers and side-effect-import checking).
5. **Editor operation, lint gates, and upgrade playbooks** belong in [Tooling, Language Server and Ecosystem](<../16 Tooling Language Server and Ecosystem/README.md>) (here only region-prioritized diagnostics, commit characters, auto-import excludes).

[← Back to TypeScript track](<../README.md>)
