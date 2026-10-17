## Update TypeScript 5.6 (feature map + where it lives in this repo)

This historical TypeScript 5.6 change map routes to implemented topical owners. The current checked compiler baseline is 7.0.2; runtime and tool support remain example-specific. Use the [current learning route](<../25 Update TypeScript 7.0/sections/6. Overlaps and Update Route/6.1. Overlaps and the current learning route.md>) for the native migration.

## 1. Disallowed always-truthy and nullish checks

### [1.1. Built-in narrowers — the checks 5.6 now rejects as statically dead](<../07 Unions Intersections and Narrowing/sections/3. Control Flow Narrowing/3.1. Built-in narrowers typeof instanceof in and equality.md>)

1. **Syntactic checks:** 5.6 rejects selected always-truthy or nullish conditions. Fix the intended runtime test; narrowing a type does not repair an unchanged constant expression.
2. **Limits:** these checks are not a proof that every condition is meaningful. The owner distinguishes nullish, truthiness and finite-value evidence.
3. **Configuration:** do not attribute the unconditional syntax checks to strictNullChecks alone. Keep the selected compiler version explicit.

## 2. Iterator helpers and `IteratorObject`

### [2.1. Collection iterators — worked helpers and IteratorObject typing](<../10 Arrays Tuples and Collections/sections/3. Collections and Selection/3.1. Map and Set typing generics over collections.md>)

1. **Helpers and protocol:** the owner executes map/filter/take/toArray and Iterator.from, distinguishing IteratorObject from a plain next protocol.
2. **Runtime support:** the tested Node 22.18.0 supports these helpers; Node 20.20.2 does not. Library selection supplies declarations, not implementations.
3. **Completion:** strictBuiltinIteratorReturn changes built-in iterator completion typing. The linked owner checks done and element absence separately and routes the real 5.5-to-5.6 migration exercise.

## 3. Emit, build, and side-effect-import flags

### [3.1. Single-file transpilation — the skip-checking family `noCheck` belongs to](<../13 Configuration and Compiler Options/sections/2. Erasable and Isolated Toolchain/2.1. isolatedModules single-file transpilation.md>)

1. **Emission:** noCheck separates emission from a full semantic check; declaration generation can still require type computation. It is not a replacement for a checking gate.
2. **Declaration context:** isolatedDeclarations imposes bounded export restrictions. The owner distinguishes these from isolatedModules and from actual parallel execution.
3. **Side-effect imports:** noUncheckedSideEffectImports catches unresolved bare imports, while ambient asset declarations can still describe imports without supplying runtime assets.

### [3.2. Solution builds — stop downstream builds after an upstream error](<../19 Performance Project References and Scaling/sections/2. Project References and Builds/2.3. Solution builds and CI orchestration with tsc b.md>)

1. **Build behavior:** build mode can continue after intermediate errors and leave best-effort output. Output existence does not turn a failed build into success.
2. **Dependency policy:** stopBuildOnErrors skips dependents after an upstream failure; it neither cleans stale output nor universally suppresses the failing project’s emit.
3. **Evidence:** the owner uses a real project graph. The option spelling was checked on 5.6.3 and 7.0.2; use pinned build help when historical release wording differs.

## 4. Arbitrary module identifiers

### [4.1. Import and export forms — where non-identifier specifiers dock](<../12 Modules Namespaces and Declaration Files/sections/1. ES Modules/1.1. import and export forms named default star re-export.md>)

1. **Binding names:** arbitrary module identifiers are string-literal exported/imported names, such as an export named "not-an-identifier" aliased to a legal local name. They are not arbitrary module-path syntax.
2. **Interop:** this can support generated or cross-language bindings, and can also be a deliberate handwritten interop boundary. It is not evidence that the module design is wrong.
3. **Resolution:** the source module specifier still has its ordinary resolution and runtime requirements. The [5.6 reference](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-6.html#support-for-arbitrary-module-identifiers) distinguishes the names from the path.

## 5. Editor responsiveness and auto-imports

### [5.1. Debugging `tsserver` — the region-prioritized diagnostics pipeline](<../16 Tooling Language Server and Ecosystem/sections/3. Debugging and Ecosystem/3.1. Debugging tsserver logs and responsiveness.md>)

1. **Historical editor changes:** region-prioritized diagnostics, commit characters and auto-import exclusion affect particular editor/provider behavior. They do not eliminate full checking or guarantee responsiveness.
2. **Settings and scope:** distinguish editor auto-import preferences from tsconfig exclude and from actual project membership. Configure the provider/version being used.
3. **Diagnosis:** the owner distinguishes the native language server from legacy tsserver logs and uses bounded evidence. Measure a demonstrated delay before changing project architecture.

## Ownership and verification

The linked leaves own the complete explanation, commands, examples and observed limits. This page is navigation, not an additional executable project or a promise that a historical release optimization applies to the current compiler.

[← Back to TypeScript track](<../README.md>)
