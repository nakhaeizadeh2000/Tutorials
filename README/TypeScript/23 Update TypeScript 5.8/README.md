## Update TypeScript 5.8 (feature map + where it lives in this repo)

This domain is an **index** for TypeScript 5.8-era changes (stable 2025-02-28). Deep explanations live in the linked topical domains below; this file only routes you there. No concept is re-taught here; every entry is a one-line mention + link per the anti-boilerplate law (§5).

> Scope: TypeScript 5.8 added five change groups — **`--erasableSyntaxOnly`** (the enum/namespace/parameter-property ban), **granular return-branch checks** (each `?:` branch checked against the declared return type), **Node module modernization** (`require()` of ESM under `nodenext`, stable `--module node18`), **declaration-fidelity fixes** (computed names preserved in `.d.ts`, `--libReplacement`), and **compiler/editor performance** (allocation-free path normalization, skipped option revalidation). All claims labeled "TS 5.8 era" below.

## 1. `erasableSyntaxOnly` and the trio standard

### [1.1. `erasableSyntaxOnly` and the trio standard — the flag and its two companions](<../13 Configuration and Compiler Options/sections/2. Erasable and Isolated Toolchain/2.3. erasableSyntaxOnly and the trio standard.md>)

1. **Why it exists** (Node 23.6 unflagged `--experimental-strip-types`, which only supports syntax that erases to valid JS — the flag moves that failure from runtime ("it ran nowhere") to author time by erroring on `enum`s, runtime `namespace`s, parameter properties, `import =`/`export =`, and `<T>` assertions)
2. **Production guidance** (adopt the trio — `erasableSyntaxOnly` + `isolatedModules` + `verbatimModuleSyntax` — per directory, newest code first; the banned-construct inventory and per-kind migration map are in [choosing erasable syntax](<../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>); enum exits specifically route through [the enum ban and migration](<../11 Enums and Literal Types/sections/2. Enums vs Erasable Alternatives/2.2. erasableSyntaxOnly the enum ban and migration.md>))
3. **What it does not cover** (erasable code can still fail under stripping for module-syntax reasons — `import type` hygiene stays in [import type and `verbatimModuleSyntax`](<../12 Modules Namespaces and Declaration Files/sections/1. ES Modules/1.2. import type and verbatimModuleSyntax erasable imports.md>))

---

## 2. Granular return-branch checks

### [2.1. Return types — the declared contract each branch is now checked against](<../05 Functions and Callable Types/sections/1. Function Type Fundamentals/1.3. Return types void never and contextual inference.md>)

1. **Why it exists** (`return cache.has(k) ? cache.get(k) : k` with an `any`-typed cache silently returned the unconverted input where a `URL` was promised — 5.8 checks each conditional branch against the declared return type, so the forgotten `new URL(k)` errors instead of shipping)
2. **Production guidance** (annotate public return types — without a declared type there is no contract to check branches against; keep one branch one responsibility so the error points at the guilty branch; the `never`-sink form of the same discipline is [exhaustiveness and switch narrowing](<../07 Unions Intersections and Narrowing/sections/3. Control Flow Narrowing/3.2. Exhaustiveness never and switch narrowing.md>))
3. **Fix pattern** (narrow the value before returning or construct the promised type in the branch — when the branch genuinely cannot happen, the [assertion-signature](<../15 Strictness Errors and Validation/sections/1. Assertion Functions/1.1. Assertion signatures asserts condition and asserts x is T.md>) form documents impossibility instead of casting past it)

---

## 3. Node module modernization (`require(ESM)`, `node18`)

### [3.1. `module` and `moduleResolution` pairing — where the new stable point docks](<../13 Configuration and Compiler Options/sections/3. Modules Emit and Projects/3.1. module and moduleResolution pairing.md>)

1. **Why it exists** (dual-package reality: `require()` of ECMAScript modules is now allowed under `nodenext` instead of erroring, while the new stable `--module node18` freezes the pre-change behavior for teams pinned to Node 18 — `require(ESM)` disallowed, import assertions still allowed there but deprecated in favor of attributes under `nodenext`)
2. **Production guidance** (pick `node18` only while actually pinned to Node 18 — otherwise track `nodenext`; the CJS/ESM bridging patterns themselves are unchanged — see [export equals and interop with CommonJS](<../12 Modules Namespaces and Declaration Files/sections/1. ES Modules/1.3. export equals and interop with CommonJS.md>))
3. **Publishing consequence** (dual `require`/`import` consumers need both entry conditions wired — the wiring checklist is [publishing types, exports map, and `typesVersions`](<../12 Modules Namespaces and Declaration Files/sections/3. Declaration Files in Practice/3.3. Publishing types exports map and typesVersions.md>))

---

## 4. Declaration fidelity (computed names, `libReplacement`)

### [4.1. Authoring `.d.ts` — the public surface these fixes protect](<../12 Modules Namespaces and Declaration Files/sections/3. Declaration Files in Practice/3.1. Authoring d.ts public API surface.md>)

1. **Why it exists** (computed property names used to degrade to best-effort index signatures in emitted declarations — 5.8 preserves them, so the published surface matches the source contract; `--libReplacement` lets projects opt out of the automatic `@typescript/lib-dom` lookup and its `node_modules` watching when they pin their own DOM types)
2. **Production guidance** (regenerate declarations in CI and diff them — the [pre-release type gates](<../20 Production Checklist Migration and Interoperability/sections/1. Production Checklist/1.1. Pre-release type gates all green.md>) catch fidelity regressions before publish; custom-DOM projects set `libReplacement: false` deliberately and record why, otherwise the default lookup stays)
3. **`lib` context** (which built-ins exist to reference at all is the [lib-settings decision](<../18 Async Types and Standard Library/sections/3. Standard Library in Practice/3.1. lib settings and built-in async types.md>))

---

## 5. Compiler and editor performance

### [5.1. Measuring with `extendedDiagnostics` — proving the upgrade helped](<../19 Performance Project References and Scaling/sections/1. Check-Time Performance/1.1. Measuring with extendedDiagnostics and traces.md>)

1. **Why it exists** (5.8 removed array allocations from path normalization and skips option revalidation when edits do not change project structure — program-build and watch-update latency drops without any config change)
2. **Production guidance** (measure before/after on your own repo — flag-free speedups still deserve a recorded baseline so the next regression is attributable; editor-side lag triage stays in [debugging `tsserver`](<../16 Tooling Language Server and Ecosystem/sections/3. Debugging and Ecosystem/3.1. Debugging tsserver logs and responsiveness.md>))
3. **Budget discipline** (compiler speedups do not raise type-instantiation budgets — keep the [instantiation budgets and TS2589 carve-outs](<../19 Performance Project References and Scaling/sections/1. Check-Time Performance/1.2. Instantiation budgets and TS2589 carve-outs.md>) enforced in CI regardless of version)

---

## 6. Overlaps to avoid (keep the repo navigable)

1. **Erasable syntax, pipelines, and execution runtimes** belong in [Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) (here only the 5.8 flag and what it bans).
2. **The enum exit path (union-default, const objects, migration)** belongs in [Enums and Literal Types](<../11 Enums and Literal Types/README.md>) (here only the ban pointer).
3. **Flag semantics (trio, pairing, emit, references)** belong in [Configuration and Compiler Options](<../13 Configuration and Compiler Options/README.md>) (here only what 5.8 added: `erasableSyntaxOnly`, `node18`, `libReplacement`).
4. **Return-type contracts and CJS/ESM bridging** belong in [Functions and Callable Types](<../05 Functions and Callable Types/README.md>) / [Modules, Namespaces and Declaration Files](<../12 Modules Namespaces and Declaration Files/README.md>) (here only the branch-check and `require(ESM)` deltas).
5. **Measurement, budgets, and build orchestration** belong in [Performance, Project References and Scaling](<../19 Performance Project References and Scaling/README.md>) (here only the 5.8 allocation/revalidation wins and how to verify them).

[← Back to TypeScript track](<../README.md>)
