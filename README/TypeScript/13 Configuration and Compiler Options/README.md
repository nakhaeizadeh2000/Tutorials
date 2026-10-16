# Configuration and Compiler Options

This domain selects and verifies compiler settings for actual programs. It owns the strictness family, bounded syntax/import checks, module and resolution choices, declarations, project builds and staged configuration changes. Earlier domains demonstrate individual flag effects; this domain explains their configuration, dependencies and limits. A successful check does not install a runtime provider, validate external data or certify a loader. Inspect effective settings, included files and emitted artifacts, then test the supported execution paths. The [TypeScript 7 configuration update](<../25 Update TypeScript 7.0/sections/1. Configuration Migration/1.1. Configuration defaults and removed options.md>) records current defaults and removed options; explicit experiments below name their compiler and runtime versions.

## 0. Prerequisites

[01 Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) — [3.3. Choosing erasable syntax](<../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>) (erasable inventory the flags enforce) and [3.2. Executing TypeScript](<../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.2. Executing TypeScript tsc plus node tsx ts-node and native Node stripping.md>) (pipelines the flags serve). [03 Basic Types and Annotations](<../03 Basic Types and Annotations/README.md>) — [1.3. null and undefined](<../03 Basic Types and Annotations/sections/1. The Primitive Family/1.3. null and undefined strictNullChecks and optionality.md>) (`strictNullChecks` behavior this domain configures). [12 Modules, Namespaces and Declaration Files](<../12 Modules Namespaces and Declaration Files/README.md>) — [1.2. import type](<../12 Modules Namespaces and Declaration Files/sections/1. ES Modules/1.2. import type and verbatimModuleSyntax erasable imports.md>) (verbatim behavior) + [1.3. export equals](<../12 Modules Namespaces and Declaration Files/sections/1. ES Modules/1.3. export equals and interop with CommonJS.md>) (interop defaults incl. tsc-7 changes).

## 1. Strictness Family

### [1.1. strict and strictNullChecks the nullability contract](<./sections/1. Strictness Family/1.1. strict and strictNullChecks the nullability contract.md>)

1. **Versioned strictness family:** inspect configuration and compare null-only, implicit-any-only and full strict checks, including separate flag choices.
2. **Behavior and limits:** repair absence handling and reproduce accepted assertions, unchecked array reads and built-in iterator return differences.
3. **Migration and artifacts:** inspect strict script/declaration emit and choose staged changes from observed program boundaries and errors.

### [1.2. noImplicitAny and useUnknownInCatchVariables](<./sections/1. Strictness Family/1.2. noImplicitAny and useUnknownInCatchVariables.md>)

1. **Inference-site boundaries:** compare uncovered parameters, contextual callbacks, evolving locals, closed objects and any supplied by declared APIs.
2. **Catch-clause checking:** run unknown/any flag variants and handle controlled primitive and Error throws without assuming conversion cannot fail.
3. **Separate rejection callbacks and policy:** type Promise.catch parameters deliberately and contain unverified data without mistaking lint choices for compiler guarantees.

### [1.3. strictFunctionTypes strictPropertyInitialization noImplicitOverride](<./sections/1. Strictness Family/1.3. strictFunctionTypes strictPropertyInitialization noImplicitOverride.md>)

1. **Callback configuration:** compare strict and weakened assignment checks, verify the safe substitution direction and reproduce the method-signature exception.
2. **Initialization contracts:** execute missing, asserted, constructor-established and optional field cases while separating checker evidence from runtime lifecycle.
3. **Override scope:** test concrete method/field markers, accepted abstract implementations and base-renaming errors with the option on and off.

---

## 2. Erasable and Isolated Toolchain

### [2.1. isolatedModules single-file transpilation](<./sections/2. Erasable and Isolated Toolchain/2.1. isolatedModules single-file transpilation.md>)

1. **Bounded JavaScript isolation:** check type-only re-exports while retaining whole-program checking and distinguish independent type-import diagnostics.
2. **Observed emit and providers:** compare source-defined cross-file const enums, retained objects, ambient member restrictions and namespace module classification.
3. **Separate processing contracts:** reproduce native source rejection, declaration-isolation annotation errors and a successful transform of code rejected by the checker.

### [2.2. verbatimModuleSyntax predictable emit](<./sections/2. Erasable and Isolated Toolchain/2.2. verbatimModuleSyntax predictable emit.md>)

1. **Effective inherited configuration:** compare retained class imports, valid mixed specifiers and erased whole-statement type imports in fresh processes.
2. **Preservation boundaries:** inspect extension rewriting and flag-off elision, then run the declared native source graph.
3. **Format-aware adoption:** diagnose CommonJS value-syntax errors and choose an explicit transform, import assignment or ESM contract using actual project checks.

### [2.3. erasableSyntaxOnly and the trio standard](<./sections/2. Erasable and Isolated Toolchain/2.3. erasableSyntaxOnly and the trio standard.md>)

1. **Deletion-only syntax gate** (the full restricted-form inventory, observed diagnostics and compatibility-aware migration).
2. **The trio as project standard** (bounded flag guarantees plus a source/emitted ESM graph with explicit import-extension rewriting).
3. **Adopting per directory** (scope configuration and diagnostics, verify runtime assumptions and review migration trade-offs).

---

## 3. Modules Emit and Projects

### [3.1. module and moduleResolution pairing](<./sections/3. Modules Emit and Projects/3.1. module and moduleResolution pairing.md>)

1. **Supported settings and defaults:** distinguish output format from resolution mode, legal combinations, compiler errors and inferred NodeNext resolution.
2. **Host-specific evidence:** reproduce an extensionless bundler success/native failure and align a local package's browser/node/fallback conditions explicitly.
3. **Migration and publication limits:** verify removed-option diagnostics and choose actual library formats and declarations rather than assuming metadata creates implementations.

### [3.2. declaration composite project references](<./sections/3. Modules Emit and Projects/3.2. declaration composite project references.md>)

1. **Real project outputs:** configure core/app composite programs, build dependencies in order and inspect declarations, maps and actual consumer inputs.
2. **Build-state limits:** compare unchanged, implementation and signature edits; test unreferenced built imports and force-versus-clean behavior.
3. **Separate emit responsibilities:** produce declarations for runtime APIs, add a pinned JavaScript emitter and distinguish that workflow from genuinely type-only consumption.

### [3.3. noUncheckedIndexedAccess and exactOptionalPropertyTypes](<./sections/3. Modules Emit and Projects/3.3. noUncheckedIndexedAccess and exactOptionalPropertyTypes.md>)

1. **Indexed-read evidence:** compare unchecked lookup failures with declared properties, tracked writes, optional tuple positions and loop guard limits.
2. **Optional assignment contracts:** verify absent versus present-undefined rules, required union properties and an unsafe spread accepted with exactness off.
3. **Update and migration policy:** implement own-property clearing, observe JSON representation and choose flag adoption from actual caller behavior.

---

## 4. Important points to remember (configuration)

### [4.1. Configuration checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Configuration checklist mental models mentors insist on.md>)

1. **Strict trio first, everything else after** (`strict` + `isolatedModules` + `verbatimModuleSyntax` — the foundation all other flags assume).
2. **Erasable by default, recorded where not** (trio-clean new code; legacy exemptions dated; survivors documented like 11's enum stamp).
3. **Pair module settings, generate declarations, map exports** (resolution matches runtime; consumers check signatures; surfaces mapped).
4. **Migrate flags with triage, never flag-days** (per-directory adoption, error-class-ordered triage, CI gates per flag).

---

## 5. Common pitfalls → production bugs (configuration)

### [5.1. Real production bugs caused by configuration misunderstandings](<./sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by configuration misunderstandings.md>)

1. **`strict: false` shipped `undefined` is not an object across checkout** (unstrict nullability; crash class `strictNullChecks` deletes).
2. **Mismatched module/resolution pair bundled CJS as ESM and crashed** (`module: nodenext` + `moduleResolution: node` legacy — interop divergence at customer load).
3. **Elided side-effect import skipped plugin registration in prod only** (heuristics vs bundlers — the 12/5.1 class, fixed by verbatim discipline).
4. **`skipLibCheck: false` on generated declarations timed out CI** (checking 50k-line codegen `.d.ts` — scope the flag per path, not globally).

---

## 6. Interview questions and answers (configuration)

### [6.1. Common interview QA — configuration and compiler options](<./sections/6. Interview questions and answers/6.1. Common interview QA configuration and compiler options.md>)

1. **What does `strict: true` enable — and in what order do you triage enabling it?** (family bundle + nullability-first migration sequence).
2. **`isolatedModules` vs `verbatimModuleSyntax` vs `erasableSyntaxOnly` — what does each guarantee?** (single-file, predictable-emit, deletion-only — the trio distinguished).
3. **Which `module`/`moduleResolution` pair for Node ESM vs bundlers — and what breaks when mismatched?** (pairing rules + interop divergence).
4. **When does `noUncheckedIndexedAccess` pay — and what breaks on first enable?** (index honesty + latent-crash backlog triage).
5. **How do you migrate a legacy tsconfig to strict — without a flag-day?** (per-directory, error-class-ordered, CI-gated migration).

---

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries — what is covered elsewhere](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **Behavior and options:** distinguish nullability, unknown data and object absence from the configuration that checks them.
2. **Callable and generic contracts:** route substitution, scope, constraints and inference to their evidence owners.
3. **Syntax and consumed artifacts:** separate syntax gates, import resolution, checking and emission.
4. **Runtime evidence:** choose boundary parsing, predicates/assertions and static exhaustiveness from the required operation.
5. **Measurement and interfaces:** investigate compiler/editor work and verify the tool interface that actually consumes the compiler.

[← Back to track](<../README.md>)
