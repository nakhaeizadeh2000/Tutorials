# Modules, Namespaces and Declaration Files

How TypeScript organizes code across files — ES modules (`import`/`export`) as the default system, `import type` for erasable type-only traffic, namespaces for the legacy cases that still need them, and declaration files (`.d.ts`, `declare module`, `declare global`) for typing the untyped world. Declaration *merging* mechanics live in [04 Objects](<../04 Objects Interfaces and Type Aliases/README.md>) ([2.2. Declaration merging](<../04 Objects Interfaces and Type Aliases/sections/2. Composition and Declaration Merging/2.2. Declaration merging and module augmentation.md>)); erasable-syntax rules live in [01 Fundamentals](<../01 Fundamentals and Mental Model/README.md>) ([3.3. Choosing erasable syntax](<../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>)) — this domain owns *file-scale organization*: module forms, namespace judgment, ambient contexts, `.d.ts` authoring, and publishing types.

## 0. Prerequisites

[01 Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) — [2.1. Type erasure](<../01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.1. Type erasure what survives compilation.md>) (imports of types erase; value imports persist) and [3.3. Choosing erasable syntax](<../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>) (`import type` + `verbatimModuleSyntax` as the erasable-import discipline). [02 The Type System Core](<../02 The Type System Core/README.md>) — [2.2. Declaration spaces](<../02 The Type System Core/sections/2. The type vs value separation/2.2. Declaration spaces type value and namespace.md>) (why `import type` and value imports live in different universes). [04 Objects, Interfaces and Type Aliases](<../04 Objects Interfaces and Type Aliases/README.md>) — [2.2. Declaration merging](<../04 Objects Interfaces and Type Aliases/sections/2. Composition and Declaration Merging/2.2. Declaration merging and module augmentation.md>) (merging mechanics + augmentation examples this domain applies at file scale). [06 Classes and Object-Oriented Types](<../06 Classes and Object-Oriented Types/README.md>) — [1.1. Class duality](<../06 Classes and Object-Oriented Types/sections/1. Class Type Fundamentals/1.1. Class as type and value duality instance vs constructor.md>) (dual type/value exports that modules re-export).

## 1. ES Modules

### [1.1. import and export forms named default star re-export](<./sections/1. ES Modules/1.1. import and export forms named default star re-export.md>)

1. **Named vs default vs namespace imports** (`import { a }`, `import d`, `import * as ns` — explicitness, single-default convention, namespace-object costs).
2. **Re-export barrels** (`export { x } from`, `export *` — public-surface curation and the barrel performance/blast-radius trade).
3. **Export forms and live bindings** (declaration exports vs export lists; imported bindings are read-only views, not copies).

### [1.2. import type and verbatimModuleSyntax erasable imports](<./sections/1. ES Modules/1.2. import type and verbatimModuleSyntax erasable imports.md>)

1. **`import type` traffic** (type-only imports erase fully — no runtime dependency, no circular-import risk, no bundler weight).
2. **`verbatimModuleSyntax` enforcement** (TS 5.0 flag: type imports *must* use `import type` — the compiler stops guessing, stripping becomes mechanical).
3. **Erasable import discipline** (`import type` + `verbatimModuleSyntax` + `--erasableSyntaxOnly` as the trio — syntax-only toolchains never miscompile).

### [1.3. export equals and interop with CommonJS](<./sections/1. ES Modules/1.3. export equals and interop with CommonJS.md>)

1. **`export =` for CommonJS equivalence** (single `module.exports =` modeling — the interop form for un-migrated CJS).
2. **`import = require()` pairing** (consuming `export =` from TS — why plain `import` breaks and the sanctioned syntax works).
3. **Interop defaults and `esModuleInterop`** (synthetic defaults for CJS consumers — what the flag changes and when to enable it).

---

## 2. Namespaces and Ambient Contexts

### [2.1. Namespaces organization and when to avoid](<./sections/2. Namespaces and Ambient Contexts/2.1. Namespaces organization and when to avoid.md>)

1. **What namespaces provide** (dot-grouped values + types in one scope — the pre-module organization unit, still emitted as IIFEs).
2. **Nest, merge, and split across files** (nested `A.B`, triple-slash assembly, declaration merging of same-named namespaces).
3. **When to avoid** (modules do everything better in application code — namespaces survive for ambient declarations, generated single-file bundles, and deliberate non-erasable code).

### [2.2. declare global and global augmentation](<./sections/2. Namespaces and Ambient Contexts/2.2. declare global and global augmentation.md>)

1. **`declare global` in modules** (adding to the global scope from inside a module file — the escape hatch with a lint fence around it).
2. **Augmenting `Window`/`globalThis`** (third-party script globals, environment flags — typed once in a `globals.d.ts`, consumed everywhere).
3. **Why globals are a last resort** (implicit coupling, name collisions, test pollution — the review bar for new globals).

### [2.3. Ambient modules declare module wildcards](<./sections/2. Namespaces and Ambient Contexts/2.3. Ambient modules declare module wildcards.md>)

1. **`declare module "name"` for untyped packages** (shimming missing types — minimal honest surface, `any`-shaped only where the package is truly opaque).
2. **Wildcard declarations** (`declare module "*.png"` — asset imports in bundlers; loader contracts typed once per extension).
3. **Ambient module resolution order** (real `.d.ts` beats ambient shim — how the checker picks, and deleting shims when types arrive).

---

## 3. Declaration Files in Practice

### [3.1. Authoring d.ts public API surface](<./sections/3. Declaration Files in Practice/3.1. Authoring d.ts public API surface.md>)

1. **What belongs in `.d.ts`** (public types + signatures only — no implementations, no private helpers, no test-only shapes).
2. **`export` discipline in declarations** (named exports by default; default-export only mirroring a default-exporting implementation).
3. **Keeping declarations in sync** (generate from source with `declaration: true` — hand-written `.d.ts` rots; generated stays exact).

### [3.2. Module augmentation at file scale](<./sections/3. Declaration Files in Practice/3.2. Module augmentation at file scale.md>)

1. **Augmenting shipped packages** (`declare module "pkg"` adding routes/methods the types missed — version-drift discipline).
2. **Ambient vs local augmentation** (global `.d.ts` augmentation vs scoped augmentation — blast radius compared).
3. **When augmentation is wrong** (forking the package, patching upstream, or widening to `any` — the three exits and their costs).

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

1. **Declaration merging mechanics** (interface merging, class/namespace merging rules, augmentation examples) — [04 Objects, Interfaces and Type Aliases](<../04 Objects Interfaces and Type Aliases/README.md>).
2. **Erasable syntax and execution pipelines** (what erases, `--erasableSyntaxOnly`, running TS under tsc/bundlers/Node) — [01 Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>).
3. **Type-vs-value spaces and class duality** (dual universes, dual exports, `typeof` queries) — [02 The Type System Core](<../02 The Type System Core/README.md>) + [06 Classes and Object-Oriented Types](<../06 Classes and Object-Oriented Types/README.md>).
4. **Generic inference over imported types** (constraints, `infer`, variance across module boundaries) — [08 Generics Deep Dive](<../08 Generics Deep Dive/README.md>).
5. **Compiler options and project configuration** (`module`, `moduleResolution`, `isolatedModules`, `declaration` flags) — [13 Configuration and Compiler Options](<../13 Configuration and Compiler Options/README.md>) (textual forward).

[← Back to track](<../README.md>)
