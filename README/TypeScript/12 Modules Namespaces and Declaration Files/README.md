# Modules, Namespaces and Declaration Files

How TypeScript organizes code across files — ES modules (`import`/`export`) as the default system, `import type` for erasable type-only traffic, namespaces for the legacy cases that still need them, and declaration files (`.d.ts`, `declare module`, `declare global`) for typing the untyped world. Declaration *merging* mechanics live in [04 Objects](<../04 Objects Interfaces and Type Aliases/README.md>) ([2.2. Declaration merging](<../04 Objects Interfaces and Type Aliases/sections/2. Composition and Declaration Merging/2.2. Declaration merging and module augmentation.md>)); erasable-syntax rules live in [01 Fundamentals](<../01 Fundamentals and Mental Model/README.md>) ([3.3. Choosing erasable syntax](<../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>)) — this domain owns *file-scale organization*: module forms, namespace judgment, ambient contexts, `.d.ts` authoring, and publishing types.

## 0. Prerequisites

[01 Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) — [2.1. Type erasure](<../01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.1. Type erasure what survives compilation.md>) (imports of types erase; value imports persist) and [3.3. Choosing erasable syntax](<../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>) (`import type` + `verbatimModuleSyntax` as the erasable-import discipline). [02 The Type System Core](<../02 The Type System Core/README.md>) — [2.2. Declaration spaces](<../02 The Type System Core/sections/2. The type vs value separation/2.2. Declaration spaces type value and namespace.md>) (why `import type` and value imports live in different universes). [04 Objects, Interfaces and Type Aliases](<../04 Objects Interfaces and Type Aliases/README.md>) — [2.2. Declaration merging](<../04 Objects Interfaces and Type Aliases/sections/2. Composition and Declaration Merging/2.2. Declaration merging and module augmentation.md>) (merging mechanics + augmentation examples this domain applies at file scale). [06 Classes and Object-Oriented Types](<../06 Classes and Object-Oriented Types/README.md>) — [1.1. Class duality](<../06 Classes and Object-Oriented Types/sections/1. Class Type Fundamentals/1.1. Class as type and value duality instance vs constructor.md>) (dual type/value exports that modules re-export).

## 1. ES Modules

### [1.1. import and export forms named default star re-export](<./sections/1. ES Modules/1.1. import and export forms named default star re-export.md>)

1. **Import views:** run named, default and namespace forms, aliases and legal dual function exports in a real emitted ESM graph.
2. **Public barrels:** diagnose conflicting star bindings, explicitly select public names and forward defaults deliberately.
3. **Binding behavior:** distinguish live aliases, captured default expressions, destructured locals and object mutation.
4. **Deferred evaluation:** verify preserved syntax, unsupported native parsing, a pinned CommonJS transform and the asynchronous dynamic-import alternative.

### [1.2. import type and verbatimModuleSyntax erasable imports](<./sections/1. ES Modules/1.2. import type and verbatimModuleSyntax erasable imports.md>)

1. **Type-only traffic:** distinguish whole-statement erasure, mixed specifiers and inline-only imports by observing module evaluation.
2. **Verbatim checking:** reproduce TS1484 and compare compiler elision with native source execution under declared versions.
3. **Import strategy:** run the same relative-source graph from `.mts` and emitted `.mjs`, and diagnose a checker-accepted source resolution failure.

### [1.3. export equals and interop with CommonJS](<./sections/1. ES Modules/1.3. export equals and interop with CommonJS.md>)

1. **Whole CommonJS values:** run callable exports with merged properties and generated declarations; compare typed require, default and namespace consumers.
2. **Actual loader boundaries:** distinguish transformed helpers, native ESM default wrapping, heuristic CommonJS named exports and double-default shapes.
3. **Supported interop contracts:** observe current compiler-option/gate restrictions and typed synchronous require of ESM versus top-level-await failure and dynamic import.

---

## 2. Namespaces and Ambient Contexts

### [2.1. Namespaces organization and when to avoid](<./sections/2. Namespaces and Ambient Contexts/2.1. Namespaces organization and when to avoid.md>)

1. **Scope and emitted grouping:** compare module-local namespace identities, nested members and a direct module namespace view without assuming equivalent object behavior.
2. **Actual shared-script assembly:** execute global namespace fragments in one declared context and distinguish reference inclusion from runtime loading/order.
3. **Erased descriptions and design choice:** run type-only erasure and a real ambient provider/preload, then choose grouping from the consumer contract and migration tests.

### [2.2. declare global and global augmentation](<./sections/2. Namespaces and Ambient Contexts/2.2. declare global and global augmentation.md>)

1. **Program inclusion and providers:** distinguish module augmentation placement, declaration visibility, actual preload execution and validated configuration inputs.
2. **Host and binding shape:** run Node's missing-window case and a real browser Window/var/const/let provider to separate lexical globals from globalThis properties.
3. **Honest global contracts:** test missing providers, invalid values and snapshots while keeping shared-state cleanup and ownership explicit.

### [2.3. Ambient modules declare module wildcards](<./sections/2. Namespaces and Ambient Contexts/2.3. Ambient modules declare module wildcards.md>)

1. **Ambient declaration versus resolved API:** run a local package with bundled types, an incorrect included shim and a clean consumer; distinguish declaration context from a fixed lookup-priority story.
2. **Augmentation and implementation:** retain existing overloads through an external-module augmentation, then test the actual provider before and after a deliberate API extension.
3. **Wildcard loader contracts:** execute pinned text/CSS-module bundling, expose missing-file and wrong-shape failures and distinguish shorthand any from an explicit empty module.

---

## 3. Declaration Files in Practice

### [3.1. Authoring d.ts public API surface](<./sections/3. Declaration Files in Practice/3.1. Authoring d.ts public API surface.md>)

1. **Inspect the real declaration surface:** generate supporting non-exported types, helper signatures, private markers, literal constants and a declaration map from source.
2. **Verify consumers and runtime agreement:** check a consumer against built declarations, expose an asserted runtime lie and distinguish declaration-only output from a provider.
3. **Maintain an intentional boundary:** validate handwritten declaration syntax and observe public API additions, private supporting-name changes and stale artifact behavior.

### [3.2. Module augmentation at file scale](<./sections/3. Declaration Files in Practice/3.2. Module augmentation at file scale.md>)

1. **Program-wide augmentation:** compare a neighboring consumer checked alone and with a module-scoped feature declaration; distinguish context from file-local visibility.
2. **Runtime loading obligations:** execute a missing class patch, an explicit boot graph and a wrapper alternative with actual package implementations.
3. **Compatibility and handoff:** test required additions, conflicting properties and a simulated matching upstream declaration before removing a redundant patch.

### [3.3. Publishing types exports map and typesVersions](<./sections/3. Declaration Files in Practice/3.3. Publishing types exports map and typesVersions.md>)

1. **`types` + `exports` map** (`package.json` wiring: `types` entry, `exports` per-subpath types — what resolvers read in which order).
2. **`typesVersions` for multi-version support** (serving different declarations per TS version — when needed, how structured, sunset discipline).
3. **Publishing checklist** (declarations generated, exports mapped, smoke-imported under tsc + bundler + Node stripping before release).

---

## 4. Important points to remember (modules and declarations)

### [4.1. Modules checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Modules checklist mental models mentors insist on.md>)

1. **ES modules by default, namespaces almost never** (modules for code; namespaces for ambient/generated corners only).
2. **Type traffic travels `import type`** (`verbatimModuleSyntax` enforced — stripping-safe, cycle-safe, weight-free).
3. **Ambient declarations describe foreign truth** (mirror exactly, trust explicitly, delete when real types land).
4. **Publish generated declarations, tested on three pipelines** (tsc + bundler + stripping — the universality proof before release).

---

## 5. Common pitfalls → production bugs (modules and declarations)

### [5.1. Real production bugs caused by module misunderstandings](<./sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by module misunderstandings.md>)

1. **Barrel re-export cycle crashed at import time** (`export *` ping-pong between two barrels; `undefined` class extended at module load).
2. **Stripped type import executed a side effect that never ran** (value import elided as type-only; registration code silently skipped in production).
3. **Ambient shim hid a real breaking update** (`declare module "pkg"` pinned v1 shapes; v2 runtime arrived with v1 types — every call unchecked).
4. **Missing `exports` types entry resolved to `any` for consumers** (untyped subpath import; downstream `any`-infection across the consumer's codebase).

---

## 6. Interview questions and answers (modules and declarations)

### [6.1. Common interview QA — modules namespaces and declaration files](<./sections/6. Interview questions and answers/6.1. Common interview QA modules namespaces and declaration files.md>)

1. **Named vs default vs `import *` — which to prefer, and what does each cost?** (explicitness, single-default, namespace-object weight).
2. **What does `import type` guarantee that plain `import` doesn't — and what enforces it?** (full erasure; `verbatimModuleSyntax`).
3. **When is a namespace still the right tool — and what replaces it elsewhere?** (ambient/generated corners; modules otherwise).
4. **`declare module "pkg"` vs real `.d.ts` — which wins, and when do you delete the shim?** (resolution order; arrival of upstream types).
5. **What must a published package wire for types — and how do you verify it?** (`types` + `exports` + smoke imports on three pipelines).

---

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries — what is covered elsewhere](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **Merging and placement:** distinguish declaration compatibility, program inclusion and the runtime provider.
2. **Erasure and execution:** route syntax/import questions through the actual source or emitted graph.
3. **Meaning and transport:** classify checker types, runtime bindings and class queries before choosing import forms.
4. **Imported generic contracts:** locate inference, constraints, extraction and variance owners without copying signatures.
5. **Configuration and package proof:** choose module settings, inspect artifacts and separate compiler/tool/consumer evidence.

[← Back to track](<../README.md>)
