# Modules and Code Organization

How JavaScript scales from one file to many — the module systems that grew up around the language (classic scripts, IIFEs, CommonJS, ESM), what `import`/`export` really mean (static structure, live bindings, re-exports/aggregators), when modules run (single evaluation, depth-first order, circular binding timing and TDZ), how `import()` / `import.meta` / import attributes load code and JSON, how CommonJS `require`/`module.exports` and ESM interoperate (dual packages, `type`/`exports` maps, migration), and how specifiers resolve (`package.json` exports/imports, import maps, barrel files, tree-shaking and side effects) — with the checklist and production bugs mentors screen for.

## 0. Prerequisites

[Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) for [browser script tags and module scripts](<../01 Fundamentals and Mental Model/sections/3. Running JavaScript today/3.1. Browser script tags DevTools console and module scripts.md>) and [Node.js essentials and type detection](<../01 Fundamentals and Mental Model/sections/3. Running JavaScript today/3.2. Node.js essentials running files REPL and version discipline.md>) and [strict mode](<../01 Fundamentals and Mental Model/sections/3. Running JavaScript today/3.3. Strict mode sloppy mode and modern defaults.md>); [Variables Scope and Closures](<../04 Variables Scope and Closures/README.md>) for [script vs module top level](<../04 Variables Scope and Closures/sections/4. Top level scopes scripts modules and eval/4.1. Script vs module top level globalThis and the declarative record.md>) and [hoisting reality](<../04 Variables Scope and Closures/sections/2. Scope and lookup/2.2. Hoisting the reality creation phase not magic.md>) and [closures](<../04 Variables Scope and Closures/sections/3. Closures/3.1. Closures functions that remember their birth environment.md>); [Functions Deep Dive](<../05 Functions Deep Dive/README.md>) for [IIFE module ancestry](<../05 Functions Deep Dive/sections/4. First-class and execution patterns/4.2. IIFE module ancestry and modern replacements.md>) and [function forms and hoisting](<../05 Functions Deep Dive/sections/1. Function forms and the function object/1.1. Function declarations expressions and hoisting.md>); [Async Event Loop and Promises](<../13 Async Event Loop and Promises/README.md>) for [top-level await blocking](<../13 Async Event Loop and Promises/sections/5. Async functions concurrency and migration/5.2. Concurrency patterns sequential vs parallel vs race and top-level await.md>) and [Promise states](<../13 Async Event Loop and Promises/sections/3. Promises core/3.1. Promise states executor thenable assimilation and the job queue.md>).

---

## 1. Module foundations and static imports

### [1.1. Script vs module and the evolution from IIFEs to ESM](<./sections/1. Module foundations and static imports/1.1. Script vs module and the evolution from IIFEs to ESM.md>)

1. **Script vs module contracts — strict, scoped, evaluated once** (file type detection `.js`+`type` vs `.mjs`/`.cjs`; why modules are always strict and have their own top-level scope).
2. **The ancestry — IIFE → CommonJS/AMD → ESM** (how bundling history explains `require` wrapping, UMD, and why ESM won).
3. **What ESM fixed — static structure enables tree-shaking and cycles** (static `import`/`export` vs runtime `require`; why specifiers and bindings must be analyzable without running code).

### [1.2. Static import forms and restrictions](<./sections/1. Module foundations and static imports/1.2. Static import forms and restrictions.md>)

1. **The six import shapes — side-effect, default, named, renamed, namespace, mixed** (`import "x"`, `import def from`, `import {a}`, `import {a as b}`, `import * as ns`, `import def, {a}` and combinators).
2. **Static means static — top-level only, string-literal specifiers, hoisted like declarations** (why `if(cond) import` is a SyntaxError; how `import` is hoisted above other code for cycle wiring).
3. **Bindings not values — importing creates a live read-only view** (imported names cannot be assigned; namespace object is exotic-sealed; why `import {x} = await import("x")` needs dynamic form).

---

## 2. Exports and live bindings

### [2.1. Export forms re-exports and aggregators](<./sections/2. Exports and live bindings/2.1. Export forms re-exports and aggregators.md>)

1. **Export declaration forms — named, declaration, `default`, and list re-exports** (`export const`, `export function`, `export {a}`, `export {a as b}`, `export default expr/class/fn`).
2. **Re-export aggregators — `export * from`, `export * as ns from`, `export {a} from`** (barrel anatomy; why `export *` skips `default` and how `export * as ns` makes namespaces).
3. **Default export quirks — one per module, syntactic sugar, anonymous default hoisting** (`export default 1` is `export {default}`; anonymous `export default class {}` hoisted; named `export default` vs separate `export`).

### [2.2. Live bindings why imports are not copies](<./sections/2. Exports and live bindings/2.2. Live bindings why imports are not copies.md>)

1. **The live window — imported bindings track the exporter's variable, not its snapshot** (`export let count = 0; count++` visible as `import {count}` increments; pulling via getter vs copying at link time).
2. **Mutability surface — `let`/`var` exports are mutable by the exporter only** (importer assigning throws; `const` still live but never changes; object exports give shared mutable handles).
3. **The `default` mutable trap — `export default obj` shares the object but rebinding `obj = {}` does not propagate** (why APIs that rebind `default` are surprising; prefer named exports for live counters).

---

## 3. Evaluation and circular dependencies

### [3.1. Evaluation order single evaluation and hoisting](<./sections/3. Evaluation and circular dependencies/3.1. Evaluation order single evaluation and hoisting.md>)

1. **Depth-first post-order — leaves evaluate before parents, then `import` hoisting wires bindings first** (linking pass before evaluation; why parent bodies see child side-effects; ESM's two-phase model).
2. **Single evaluation — every module runs once even if imported many times, including diamonds** (`A → B, C → D` evaluates `D` once; the module map as canonical cache keyed by resolved specifier).
3. **Hoisting and TDZ across modules — exported functions declared after `import` still work** (declaration hoisting within evaluation + cross-module binding availability timing).

### [3.2. Circular dependencies and temporal dead zone across cycles](<./sections/3. Evaluation and circular dependencies/3.2. Circular dependencies and temporal dead zone across cycles.md>)

1. **Why cycles can still work — live bindings wire before bodies finish** (`a.js` imports `b.js` which imports `a.js` back; partially-initialized bindings seen through getters).
2. **The TDZ across a cycle — reading a `let`/`const`/`class` before its initializer throws** (the exact `ReferenceError` pattern on cycle entry; why function declarations survive but `let`/`class` do not).
3. **Designing cycles that survive — export functions/classes not raw values, avoid top-level reads of cyclic bindings** (refactor to lazy access or third shared module; detection via `madge`/`eslint`).

---

## 4. Dynamic import and meta

### [4.1. Dynamic import async loading and code splitting](<./sections/4. Dynamic import and meta/4.1. Dynamic import async loading and code splitting.md>)

1. **The `import(specifier)` operator — async function-like, returns a Promise of the namespace** (any expression specifier; microtask to module job; how bundlers turn it into a chunk).
2. **Code splitting patterns — route-level lazy, conditional heavy dep, parallel `Promise.all([import()])`** (await inside `async`, top-level wrapper in CJS, preloading via `import()` warming).
3. **Error and caching — failed dynamic import rejects (catch it); successful loads share the module map** (retry discipline; deduplicated fetch even for concurrent `import()` calls).

### [4.2. import.meta import attributes and JSON modules](<./sections/4. Dynamic import and meta/4.2. import.meta import attributes and JSON modules.md>)

1. **`import.meta` — the module's own metadata (`url`, resolve helpers, env injection)** (`import.meta.url` + `new URL(..., import.meta.url)` for sibling assets; bundler/host extras vs standard).
2. **Import attributes/assertions — `with { type: "json" }` vs deprecated `assert`** (`import data from "./d.json" with {type:"json"}` in Node 17.5+; `with` supersedes `assert` since ES2025 stage).
3. **Non-JS modules — CSS, WASM, workers via import attributes/bundler loaders** (what Node natively handles — JSON only — vs what bundlers/plug-ins compile).

---

## 5. CommonJS interop and resolution

### [5.1. CommonJS require exports and the module cache](<./sections/5. CommonJS interop and resolution/5.1. CommonJS require exports and the module cache.md>)

1. **The CJS wrapper — every file is `(exports, require, module, __filename, __dirname) => {}`** (how `module.exports =` vs `exports.x =` alias; `require` is synchronous and returns the cached `module.exports`).
2. **The require cache — `require.cache` keyed by resolved filename; circular `require` returns a partially-filled object** (live-object-but-not-live-binding; assignment after cycle miss vs mutation seen).
3. **Globals absent in ESM — no `require`/`__dirname`/`__filename` by default (`createRequire`/`import.meta.url` replacements)** (why `require is not defined` in `.mjs`).

### [5.2. ESM and CJS interop dual packages and migration](<./sections/5. CommonJS interop and resolution/5.2. ESM and CJS interop dual packages and migration.md>)

1. **Importing CJS from ESM — `import pkg from "cjs-pkg"` gets the `module.exports` as `default`** (named imports from CJS are unreliable without ESM shim; `import {readFile} from "fs"` works via Node built-in ESM facade).
2. **Requiring ESM from CJS — `require("./esm.mjs")` throws `ERR_REQUIRE_ESM`** (bridge via dynamic `import()` inside CJS; top-level `await` in CJS not allowed).
3. **Dual packages — `type`, `.mjs`/`.cjs`, `"exports"` conditional, and state-duplication hazard** (why shipping two formats can duplicate singletons; `esm` shim vs pure ESM migration path).

### [5.3. Specifiers package.json exports import maps and organization](<./sections/5. CommonJS interop and resolution/5.3. Specifiers package.json exports import maps and organization.md>)

1. **Specifier taxonomy — relative (`./`), absolute, bare, and subpath imports (`#utils`)** (why ESM requires full file + extension; `node:fs` prefix; bare → `node_modules`/`exports` map).
2. **`package.json` `exports`/`imports` and `type` — the public surface contract** (`"exports": {".": ..., "./feature": ...}` caps bare, `"imports": {"#x": "./src/x.js"}` internal alias; subpath patterns `*`).
3. **Import maps and organization — browser/deno `importmap`, barrel files vs direct, `sideEffects` and tree-shaking** (why bare specifiers need maps in browsers; barrel re-export cost vs deep import; `sideEffects: false`).

---

## 6. Important points to remember (modules)

### [6.1. Module checklist reflex rules mentors screen for](<./sections/6. Important points to remember/6.1. Module checklist reflex rules mentors screen for.md>)

1. **Three detections before any module claim — ESM vs CJS, `type`/extension, and resolved specifier map key** (which loader, which wrapper, which cache entry).
2. **The five reflexes — static structure, single evaluation, live vs object-share, default binding trap, `with` vs `assert`** (when each reflex fires).
3. **The review grep list** (`require` in ESM, missing `with {type:"json"}`, bare specifier without map, `export default` rebind, cyclic top-level read, barrel-only import).

---

## 7. Common pitfalls → production bugs

### [7.1. Real production bugs caused by module mistakes](<./sections/7. Common pitfalls to production bugs/7.1. Real production bugs caused by module mistakes.md>)

1. **Dual-package singleton split — two `EventEmitter` instances where one was expected** (CJS `require("pkg")` vs ESM `import "pkg"` each gets its own stateful instance).
2. **Live-binding illusion vs object-share — `export default obj; obj = {}` does not propagate** (config reload silently lost; prefer mutating vs rebinding).
3. **Cycle TDZ crash — `ReferenceError: Cannot access 'X' before initialization` in production only on cold start** (circular `const` read before initializer; heisenbug on `import` order).
4. **Bare specifier deploy break — `import "pkg/fea" ` works locally via `exports` fallback but fails in browser without import map** (deep import vs public subpath).

---

## 8. Interview questions and answers (modules)

### [8.1. Common interview Q&A modules and organization](<./sections/8. Interview questions and answers/8.1. Common interview QA modules and organization.md>)

1. **The classics with mechanism-level answers** (live binding vs copy, `default` vs named, `require` cache vs ESM map, cycle TDZ, `import()` chunk, `type`/`exports`).
2. **What interviewers actually probe for** (narrating linking → evaluation vs reciting `import` is hoisted).
3. **Grading guidance** (junior/mid/senior signals, red flags like "`export` makes a copy" or "`require` works in ESM").

---

## 9. Overlaps to avoid (where this domain stops)

### [9.1. Boundaries what is covered elsewhere](<./sections/9. Overlaps to avoid/9.1. Boundaries what is covered elsewhere.md>)

1. **Scope hoisting and top-level `this` — Variables Scope and Closures; `this` binding rules — Functions Deep Dive.**
2. **Top-level `await` blocking and Promise scheduling — Async Event Loop and Promises; async iteration backpressure — Iterables Generators and Async Iteration.**
3. **JSON stringify/parse replacer/reviver contracts — JSON Serialization domain (when it lands); `Temporal`/`Intl` and `Math` — Numbers Dates Math and Temporal.**
4. **Bundler tree-shaking/minification internals and `WeakRef`/`FinalizationRegistry` GC — Memory/Tooling domains (when they land).**

---

[← Back to JavaScript track](<../README.md>)
