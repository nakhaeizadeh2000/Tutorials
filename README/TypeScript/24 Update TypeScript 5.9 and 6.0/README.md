## Update TypeScript 5.9 and 6.0 (feature map + where it lives in this repo)

This domain is an **index** for the TypeScript 5.9-era (stable 2025) and 6.0-era (stable 2026-03-23, last JavaScript-codebase release, bridge to the Go-based 7.0/tsgo) changes. Deep explanations live in the linked topical domains below; this file only routes you there. No concept is re-taught here; every entry is a one-line mention + link per the anti-boilerplate law (§5).

> Scope: 5.9 added **`import defer`** (deferred module evaluation), **expandable hovers + configurable hover length**, and **minimal `tsc --init`** output. 6.0 added **`es2025` `target`/`lib`** (`RegExp.escape`, `Promise.try`, Iterator/Set methods; separate `esnext` declarations for `Temporal` and `Map` upsert), **`#/` subpath imports**, **`this`-less function inference priority**, **`stableTypeOrdering`**, folded `dom.iterable`/`dom.asynciterable` into `dom`, and the **7.0 deprecation sweep** (gated by `ignoreDeprecations: 6.0`). All claims labeled "TS 5.9–6.0 era" below.

## 1. `import defer` (5.9, deferred module evaluation)

### [1.1. Import and export forms — the only syntax `defer` permits](<../12 Modules Namespaces and Declaration Files/sections/1. ES Modules/1.1. import and export forms named default star re-export.md>)

1. **Evaluation timing:** the owner now compares eager, deferred, unused and dynamic-import entries with observed output. The proposal was Stage 3 on 2026-10-15; compiler support is not a portable-runtime guarantee.
2. **Execution support:** TypeScript 7.0.2 preserves namespace-only defer syntax. Tested Node 20.20.2 and 22.18.0 reject the native output; the lesson separately verifies a pinned Babel CommonJS transform. Unsupported syntax fails parsing. The transform example does not certify native graph loading or every proposal edge case.
3. **Import boundaries:** use the owner's explicit dynamic-import alternative when an asynchronous API fits. Deferred imports remain runtime dependencies; [type-only imports](<../12 Modules Namespaces and Declaration Files/sections/1. ES Modules/1.2. import type and verbatimModuleSyntax erasable imports.md>) erase under their separate contract.

---

## 2. Expandable hovers and hover length (5.9, editor)

### [2.1. Inlay hints, hover, and signature help — where hover verbosity docks](<../16 Tooling Language Server and Ecosystem/sections/1. Language Server in Practice/1.3. Inlay hints hover and signature help.md>)

1. **Why it exists** (deep instantiations rendered as one-line walls — 5.9 previews `+`/`-` hover expansion plus a larger default `js/ts.hover.maximumLength`, so a reviewer drills into the type instead of copying it to a scratch file)
2. **Production guidance** (expand to diagnose, then fix the source — a hover that needs three expansions is a display-type smell; the [navigation-first comprehension](<../16 Tooling Language Server and Ecosystem/sections/1. Language Server in Practice/1.1. Navigation go to definition find references.md>) flow still starts at go-to-definition, hover second)
3. **Type-design feedback** (chronic unreadable hovers mean missing display types — the [hot-spot discipline](<../19 Performance Project References and Scaling/sections/1. Check-Time Performance/1.3. Hot-spot discipline mapped conditional and union cost.md>) covers hover-budget display aliases that keep both checker and human fast)

---

## 3. Minimal `tsc --init` (5.9, project scaffolding)

### [3.1. `strict` and `strictNullChecks` — the impactful core `--init` now emits](<../13 Configuration and Compiler Options/sections/1. Strictness Family/1.1. strict and strictNullChecks the nullability contract.md>)

1. **Why it exists** (the old 100-line commented-options wall taught nothing — the minimal template emits only the options that change outcomes, so new projects start from a readable contract instead of a museum)
2. **Production guidance** (new projects start strict — the sequencing that gets existing codebases there incrementally is [loose-to-strict](<../20 Production Checklist Migration and Interoperability/sections/2. Migration Playbooks/2.3. Loose to strict sequencing.md>); every further flag still earns its place through the [version-upgrade playbook](<../16 Tooling Language Server and Ecosystem/sections/3. Debugging and Ecosystem/3.3. Version management and upgrade playbooks.md>) — pin, trial, measure)
3. **What `--init` does not do** (it scaffolds, never migrates — adopted options pair per runtime via [module and moduleResolution pairing](<../13 Configuration and Compiler Options/sections/3. Modules Emit and Projects/3.1. module and moduleResolution pairing.md>))

---

## 4. The 6.0 bridge: deprecations and `ignoreDeprecations`

### [4.1. Version upgrades without flag-days — the rollout this sweep is designed for](<../20 Production Checklist Migration and Interoperability/sections/2. Migration Playbooks/2.2. TypeScript version upgrades without flag-days.md>)

1. **Why it exists** (6.0 is the last JS-codebase release before the Go-native 7.0 — legacy surface (`module` where `namespace` was meant, `node10` resolution, and other decade-old options) is hard-deprecated now so 7.0 ships without it; `"ignoreDeprecations": "6.0"` buys one release of runway, not a permanent exemption)
2. **Production guidance** (run the codemod-able adjustments immediately, calendar the rest against the 7.0 trial — the dual-pipeline window pattern in the leaf above is built for exactly this; `module`-vs-`namespace` cleanups route through [declaration merging](<../04 Objects Interfaces and Type Aliases/sections/2. Composition and Declaration Merging/2.2. Declaration merging and module augmentation.md>), resolution cleanups through [module pairing](<../13 Configuration and Compiler Options/sections/3. Modules Emit and Projects/3.1. module and moduleResolution pairing.md>))
3. **Diagnostic aid** (`stableTypeOrdering` exists only to diff 6.0-vs-7.0 behavior during migration — enable it while trialing the native preview per the [upgrade playbook](<../16 Tooling Language Server and Ecosystem/sections/3. Debugging and Ecosystem/3.3. Version management and upgrade playbooks.md>), never as a permanent flag)

---

## 5. `es2025` `lib`, `Temporal`, upsert, and `#/` imports (6.0, stdlib)

### [5.1. `lib` settings — where the new built-in shapes land](<../18 Async Types and Standard Library/sections/3. Standard Library in Practice/3.1. lib settings and built-in async types.md>)

1. **Library versions:** `es2025` supplies `RegExp.escape`, `Promise.try` and Iterator/Set declarations. TypeScript 6.0 added separate `esnext` declarations for `Temporal` and upsert; do not infer that every API listed in this section belongs to `es2025` or exists in your runtime. The [6.0 release notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-6-0.html) distinguish these groups. `#/` package-internal aliases remain a resolution concern for the [exports-map owner](<../12 Modules Namespaces and Declaration Files/sections/3. Declaration Files in Practice/3.3. Publishing types exports map and typesVersions.md>).
2. **Upsert signatures and support:** `map.getOrInsert(key, fresh())` receives a value, so `fresh()` runs even if the key is present. `map.getOrInsertComputed(key, () => fresh())` calls its factory only for an absent key. For `Map<string, number>`, supplying the factory to `getOrInsert` is a type error. An existing entry whose value is `undefined` is still present. These methods simplify get-or-insert logic; they provide no general asynchronous locking guarantee. The [current TC39 repository](https://github.com/tc39/proposal-upsert) reports Stage 4 as checked on 2026-10-12; its linked [HTML draft](https://tc39.es/proposal-upsert/) retains a Stage 2.7 heading, so that draft's label is not the current status evidence. The methods were absent natively on tested Node 20.20.2 and 22.18.0. TypeScript 7.0.2 accepted the correct signatures with `esnext.collection`; actual execution used `core-js@3.45.1`'s `actual/map/get-or-insert` and `actual/map/get-or-insert-computed` modules loaded before use. A `lib` option supplies declarations, not a polyfill. The existing [Map and Set owner](<../10 Arrays Tuples and Collections/sections/3. Collections and Selection/3.1. Map and Set typing generics over collections.md>) now contains the complete worked value/factory, presence, failure and support examples.
3. **Worked synchronous iterator helpers:** the [collection owner](<../10 Arrays Tuples and Collections/sections/3. Collections and Selection/3.1. Map and Set typing generics over collections.md>) now verifies map/filter/take/toArray, Iterator.from, completion types and lazy consumption with the current es2025 declarations and a separately tested runtime.
4. **DOM consolidation** (`dom.iterable`/`dom.asynciterable` are now empty files folded into `dom` — keep them in `lib` arrays harmlessly or drop them; either way the setting is the same leaf above)

---

## 6. `this`-less function inference priority (6.0, checker)

### [6.1. Explicit `this` typing — the functions this change stops penalizing](<../05 Functions and Callable Types/sections/3. Advanced Callable Patterns/3.1. this parameter explicit typing and arrow vs function capture.md>)

1. **Why it exists** (functions that never use `this` were treated as context-sensitive and lost inference priority — 6.0 stops counting unused `this`, so plain callbacks win inference (including inside generic JSX calls) instead of degrading to inference-site `any`s)
2. **Production guidance** (no code change required — but callbacks that silently widened under 5.9 may now infer narrower types and surface latent mismatches; triage those as the checker telling the truth, per the [generic-function inference](<../05 Functions and Callable Types/sections/2. Overloads and Generics/2.2. Generic functions inference constraints defaults and scope.md>) rules)
3. **Variance context** (explicit-`this` signatures keep their variance meaning — the [callback-variance](<../05 Functions and Callable Types/sections/3. Advanced Callable Patterns/3.2. Callback variance strictFunctionTypes and bivariance pitfalls.md>) contract is unchanged; only the priority of `this`-less candidates moved)

---

## 7. Overlaps to avoid (keep the repo navigable)

1. **Module forms, resolution pairing, and publishing** belong in [Modules, Namespaces and Declaration Files](<../12 Modules Namespaces and Declaration Files/README.md>) (here only `import defer` shape, `#/` aliases, and the `dom.iterable` fold note).
2. **Flag semantics, `lib`/`target` selection, and scaffolding** belong in [Configuration and Compiler Options](<../13 Configuration and Compiler Options/README.md>) (here only minimal `--init`, `es2025`, `ignoreDeprecations`, `stableTypeOrdering`).
3. **Promises, timers, and stdlib shapes** belong in [Async Types and Standard Library](<../18 Async Types and Standard Library/README.md>) (here only `Promise.try`, `Temporal`, upsert, `RegExp.escape` as version deltas).
4. **Editor operation and upgrade playbooks** belong in [Tooling, Language Server and Ecosystem](<../16 Tooling Language Server and Ecosystem/README.md>) (here only expandable hovers and the 6.0 trial path).
5. **Migration waves, gates, and the 7.0 horizon** belong in [Production Checklist, Migration and Interoperability](<../20 Production Checklist Migration and Interoperability/README.md>) (here only the deprecation-sweep rollout and the bridge-release status).

[← Back to TypeScript track](<../README.md>)
