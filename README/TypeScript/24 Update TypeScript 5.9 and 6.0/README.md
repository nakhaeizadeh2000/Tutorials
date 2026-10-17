## Update TypeScript 5.9 and 6.0 (feature map + where it lives in this repo)

This historical TypeScript 5.9 and 6.0 change map routes to implemented topical owners. The current checked compiler baseline is 7.0.2; runtime and tool support remain example-specific. Use the [current learning route](<../25 Update TypeScript 7.0/sections/6. Overlaps and Update Route/6.1. Overlaps and the current learning route.md>) for the native migration.

## 1. `import defer` (5.9, deferred module evaluation)

### [1.1. Import and export forms — the only syntax `defer` permits](<../12 Modules Namespaces and Declaration Files/sections/1. ES Modules/1.1. import and export forms named default star re-export.md>)

1. **Evaluation:** the owner compares eager, deferred, unused and dynamic-import entries with observed output. Deferred evaluation is distinct from asynchronous dynamic import.
2. **Support:** the proposal was Stage 3 when checked on 2026-10-15. Native defer output is rejected by tested Node 20.20.2/22.18.0; a separate pinned Babel transform is exercised. Compiler acceptance is not a portable-host guarantee.
3. **Dependencies:** deferred imports remain runtime dependencies. The owner separates their loading/evaluation contract from erased type-only imports.

## 2. Expandable hovers and hover length (5.9, editor)

### [2.1. Inlay hints, hover, and signature help — where hover verbosity docks](<../16 Tooling Language Server and Ecosystem/sections/1. Language Server in Practice/1.3. Inlay hints hover and signature help.md>)

1. **Display tools:** expandable hovers and configurable display length are editor/provider features, separate from the semantic type contract.
2. **Design judgment:** the number of expansions is not a correctness threshold, and an alias is not a demonstrated checker optimization. Inspect the question and actual inferred type.
3. **Current route:** the owner verifies native query responses and distinguishes them from UI rendering and legacy provider behavior.

## 3. Minimal `tsc --init` (5.9, project scaffolding)

### [3.1. `strict` and `strictNullChecks` — the impactful core `--init` now emits](<../13 Configuration and Compiler Options/sections/1. Strictness Family/1.1. strict and strictNullChecks the nullability contract.md>)

1. **Scaffolding:** 5.9 reduced the generated starter configuration. A starter lists selected defaults and recommendations; it does not contain only options that alter the program.
2. **Adoption:** inspect the exact generated configuration and effective project inputs for the pinned compiler. Existing migrations need a deliberate sequence.
3. **Limits:** init creates a starting file, not runtime compatibility, dependency installation or a verified migration.

## 4. The 6.0 bridge: deprecations and `ignoreDeprecations`

### [4.1. Version upgrades without flag-days — the rollout this sweep is designed for](<../20 Production Checklist Migration and Interoperability/sections/2. Migration Playbooks/2.2. TypeScript version upgrades without flag-days.md>)

1. **Historical bridge:** 6.0 is the JavaScript-implementation bridge to released native 7.0. Deprecation suppression in 6.0 does not restore a removed option in a later compiler.
2. **Migration evidence:** the linked package exercise compares real compilers and consumers, and checks tool API compatibility separately.
3. **Ordering aid:** stableTypeOrdering was introduced to help compare 6.0 and 7.0 declaration/type ordering. It is a diagnostic aid rather than a required permanent migration setting. The [6.0 explanation](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-6-0.html#the-stabletypeordering-flag) supplies its purpose and limits; no local slowdown factor is inferred.

## 5. `es2025` `lib`, `Temporal`, upsert, and `#/` imports (6.0, stdlib)

### [5.1. `lib` settings — where the new built-in shapes land](<../18 Async Types and Standard Library/sections/3. Standard Library in Practice/3.1. lib settings and built-in async types.md>)

1. **Declaration groups:** ES2025 includes RegExp.escape, Promise.try and Iterator/Set methods. The separate esnext Temporal/upsert declarations and package-internal #/ aliases have their own library or resolution contracts.
2. **Upsert:** getOrInsert receives a value; getOrInsertComputed receives a factory for an absent key. The collection owner executes value/factory/presence/failure cases with explicit runtime/polyfill support; neither API provides general asynchronous locking.
3. **Runtime and DOM:** declarations do not implement APIs. The library owner distinguishes actual support, selected lib files and the 6.0 consolidation of DOM iterable declarations.

## 6. `this`-less function inference priority (6.0, checker)

### [6.1. Explicit `this` typing — the functions this change stops penalizing](<../05 Functions and Callable Types/sections/3. Advanced Callable Patterns/3.1. this parameter explicit typing and arrow vs function capture.md>)

1. **Inference context:** 6.0 changed context-sensitivity for some functions that do not use this. The effect depends on the actual generic inference sites, not a rule that all plain callbacks become better typed.
2. **Review:** inspect the inferred input/result relationship and check affected callers before changing annotations.
3. **Separate receiver contract:** this annotations, lexical capture, invocation receivers and parameter variance remain distinct mechanisms in the linked callable owners.

## Ownership and verification

The linked leaves own the complete explanation, commands, examples and observed limits. This page is navigation, not an additional executable project or a promise that a historical release optimization applies to the current compiler.

[← Back to TypeScript track](<../README.md>)
