# ESM CJS and Loader Hooks Deep Dive

How Node's module customization hooks actually work — the resolve/load pipeline, chain order, the three registrations, authoring both hook types, and the runtime `paths` recipe that closes the checker gap without extra packages. Hook *operation* lives in [01/3.1. Loading TypeScript under CJS and ESM](<../01 Execution Foundations and Mental Model/sections/3. Loading model/3.1. Loading TypeScript under CJS and ESM.md>); this domain teaches hook *authorship* — writing the links in the chain yourself.

## 0. Prerequisites

[01/3.1. Loading TypeScript under CJS and ESM](<../01 Execution Foundations and Mental Model/sections/3. Loading model/3.1. Loading TypeScript under CJS and ESM.md>) (require/loader doors, resolve-before-compile, config scoping — assumed, priced in authorship terms here). [02/3.1. paths and baseUrl that run](<../02 Configuration and tsconfig for Execution/sections/3. Paths runtime/3.1. paths and baseUrl that run.md>) (checker/runtime gap, bridge, erasure — assumed; this domain implements the third closing: the custom recipe). This domain assumes a working ts-node ESM setup and spends its pages on the hook chain itself, not invocation basics.

## 1. Hook pipeline

### [1.1. resolve and load: the two-stage pipeline](<./sections/1. Hook pipeline/1.1. resolve and load the two-stage pipeline.md>)

1. **resolve names the URL, load fetches the source** (two stages, two jobs — order proven by an isolated failure).
2. **Chains nest last-in-first-out** (each link delegates via `nextResolve`/`nextLoad` or ends with `shortCircuit`).
3. **Position matters when links resolve eagerly** (mapper before compiler — both orders verified, one fails).

### [1.2. register() versus loader flags versus registerHooks](<./sections/1. Hook pipeline/1.2. register versus loader flags versus registerHooks.md>)

1. **Three registrations, one chain** (`--loader`/`--import` flags, programmatic `register()`, sync `registerHooks` — availability per Node major).
2. **Async hooks pay the thread tax** (loader-thread caveats: no shared globals, CJS gaps — sync recommended where available).
3. **Deprecation moves beneath you** (`register()` Stability 0 as of v25.9, runtime DEP0205 in v26 — write `registerHooks`-first with async fallback).

---

## 2. Custom hooks

### [2.1. Authoring a resolve hook](<./sections/2. Custom hooks/2.1. Authoring a resolve hook.md>)

1. **Match, map, delegate-or-end** (specifier in, URL out — `nextResolve` or `shortCircuit: true`, never neither).
2. **Never break the chain by accident** (missing `shortCircuit` throws by design — the guardrail that catches typos).
3. **Log the mapping, not the world** (targeted `[hook:resolve]` trace lines — full resolve logging drowns).

### [2.2. Authoring a load hook](<./sections/2. Custom hooks/2.2. Authoring a load hook.md>)

1. **Source arrives in many shapes** (`string` vs `Buffer` vs `TypedArray` — decode before touching, verified on v20).
2. **Transform the text, keep the envelope** (`...result` spread — format passthrough unless you mean to change it).
3. **Compile-stage transforms live in ts-node options** (transpilers/transformers documented — hooks transform text, the compiler transforms ASTs).

---

## 3. Runtime recipes

### [3.1. The runtime paths recipe](<./sections/3. Runtime recipes/3.1. The runtime paths recipe.md>)

1. **Checker mapping in, hook mapping out** (explicit-extension `paths` for ESM checkers plus a resolve hook with `shortCircuit`).
2. **Mapper before compiler on the command line** (verified order pair — reversed flags fail `Cannot find package`).
3. **One recipe, every aliased entry** (shared hooks file per repo — aliases converge on one implementation).

---

## 4. Important points to remember (hooks)

### [4.1. Hooks checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Hooks checklist habits mentors insist on.md>)

1. **Trace proves the mapping** (`[hook:resolve]` line per alias in bug reports — evidence over memory).
2. **Order pinned on every command** (mapper flags before compiler flags — reviewable in diffs).
3. **Async tax acknowledged** (no shared state assumed across the loader thread — design for messages, not globals).

---

## 5. Interview questions and answers (hooks)

### [5.1. Common interview QA: hooks](<./sections/5. Interview questions and answers/5.1. Common interview QA hooks.md>)

1. **"Alias resolves in tsc but not at runtime" — autopsy it** (checker vs runtime, bridge vs recipe vs erasure — all three closings priced).
2. **"Reversed loader flags break it" — explain the chain** (eager resolution vs delegation — position as semantics).
3. **"`register()` vs `registerHooks()`" — which and why** (thread tax vs in-thread, deprecation status, version floor), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Hook API semantics and stability** (signatures, formats, deprecations — Node.js `node:module` docs own the *contract*; this domain owns the *authorship*).
2. **Deeper execution topics** (watch/REPL/editors → 04; debugging/sourcemaps → 05; shipping → 06 — each owned there).
3. **Config and runtime mechanics** (pairs/scoping/bridges → 01–02; resolution inside Node, workers → Node.js track; this domain owns the chain between them).
