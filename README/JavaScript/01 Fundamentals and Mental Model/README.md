# Fundamentals and Mental Model

The map before the territory: what JavaScript actually is, where it runs, how engines execute it, and how to run it yourself today. Everything later in this track builds on these mental models.

## 0. Prerequisites

None — this is the entry point of the JavaScript track. If you already ship JavaScript daily, skim sections 2–3 for the vocabulary used across the track, then jump ahead to the next domain.

## 1. What JavaScript is

### [1.1. From LiveScript to ECMAScript (history, editions, and why legacy quirks persist)](<./sections/1. What JavaScript is/1.1. From LiveScript to ECMAScript history editions and legacy quirks.md>)

1. **JavaScript ≠ ECMAScript** (ECMA-262 defines the language; "JavaScript" is the trademarked name under which engines implement it).
2. **Editions matter** (annual cadence since ES2015; this track labels version-sensitive advice as "ES2026 era").
3. **Quirks are contractual** (`typeof null === "object"` and friends are frozen by web compatibility — modern practice avoids them instead of waiting for removal).

### [1.2. Engines, runtimes, and hosts (V8, SpiderMonkey, JavaScriptCore; browsers, Node.js, Deno, Bun)](<./sections/1. What JavaScript is/1.2. Engines runtimes and hosts V8 SpiderMonkey JavaScriptCore Node Deno Bun.md>)

1. **Engine executes the language** (parse/JIT/GC: V8, SpiderMonkey, JavaScriptCore).
2. **Runtime adds the platform** (DOM/fetch in browsers; fs/net/process in Node.js; different pairings in Deno/Bun).
3. **Separate language errors from host errors** (a `ReferenceError` means your JS is wrong; a missing host API means you assumed a platform that isn't there).

### [1.3. The TC39 process and reading documentation (stages 0–4, MDN vs the specification)](<./sections/1. What JavaScript is/1.3. The TC39 process stages and how to read MDN vs the spec.md>)

1. **Five stages gate every feature** (stage 0 strawman → stage 4 finished; stage 4 lands in the next June edition).
2. **Ratified ≠ available** (an edition's approval doesn't mean every engine shipped it — check support tables and feature-detect).
3. **MDN for daily use, spec for truth** (MDN explains with examples and compat tables; ECMA-262 defines exact semantics).

---

## 2. How JavaScript executes

### [2.1. Parse → bytecode → JIT pipeline (and single-threaded execution)](<./sections/2. How JavaScript executes/2.1. Parse bytecode JIT pipeline and single-threaded execution.md>)

1. **Source becomes AST, then bytecode, then optimized machine code** (engines tier up hot code: Ignition/TurboFan in V8 as the canonical example).
2. **One thread runs your code per realm** (concurrency arrives via the event loop and platform-provided APIs, not via parallel JS execution).
3. **Optimization is heuristic** (JIT assumptions can deopt; stable object shapes beat clever tricks — measure, don't guess).

### [2.2. Dynamic typing and late binding (what they cost and buy you)](<./sections/2. How JavaScript executes/2.2. Dynamic typing late binding and their consequences.md>)

1. **Types live on values, not variables** (the same binding can hold a number now and a string next statement).
2. **Late binding defers lookup to call time** (methods resolve through the object at invocation — enables flexible code and whole classes of runtime bugs).
3. **The bill arrives at runtime** (type mistakes surface in production unless tests, linters, and boundary validation compensate).

### [2.3. Event loop overview (tasks, microtasks — scheduling preview)](<./sections/2. How JavaScript executes/2.3. Event loop overview tasks microtasks and scheduling preview.md>)

1. **Run-to-completion tasks** (each task finishes before the next starts; nothing preempts synchronous code).
2. **Microtasks drain after every task** (promise reactions flush before timers/rendering — most ordering surprises live here).
3. **This leaf is orientation only** (full treatment lives in the Async, Event Loop, and Promises domain).

---

## 3. Running JavaScript today

### [3.1. Browser script tags, DevTools console, and module scripts](<./sections/3. Running JavaScript today/3.1. Browser script tags DevTools console and module scripts.md>)

1. **Classic vs module scripts** (plain `<script>` blocks parsing; `defer` delays but orders; `type="module"` gives deferred, strict-mode ESM with its own top-level scope).
2. **DevTools console is a REPL with superpowers** (great for experiments; subtly different context than page scripts).
3. **Placement still matters** (blocking vs defer vs module changes what your code sees when it runs).

### [3.2. Node.js essentials (running files, REPL, watch mode, version discipline)](<./sections/3. Running JavaScript today/3.2. Node.js essentials running files REPL and version discipline.md>)

1. **`node` runs files and a REPL** (`node app.js`, interactive `node`, `node --watch` for fast feedback loops).
2. **Check the runtime before blaming the language** (feature set depends on Node/V8 version — know yours; LTS lines as of August 2026: 24 active, 22 maintenance, 26 current).
3. **Module system is chosen by config/extension** (`.mjs` or `"type": "module"` selects ESM — details in the Modules domain).

### [3.3. Strict mode (sloppy-mode legacy, opt-in rules, and modern defaults)](<./sections/3. Running JavaScript today/3.3. Strict mode sloppy mode and modern defaults.md>)

1. **Strict mode removes footguns** (no implicit globals, silent failures throw, bare-call `this` stays `undefined`).
2. **It's an opt-in pragma — except it isn't** (modules and class bodies are always strict, so modern defaults make most new code strict automatically).
3. **Sloppy mode exists only for legacy pages** (never write new sloppy code; understand it to debug old code).

### [3.4. Transpilation, polyfills, and baseline strategy](<./sections/3. Running JavaScript today/3.4. Transpilation polyfills and baseline strategy.md>)

1. **Transpilers rewrite newer syntax down** (Babel/SWC/esbuild target older engines and emit source maps).
2. **Polyfills add missing built-ins at runtime** (core-js patches globals — powerful but imperfect emulation; prefer shipping less).
3. **Define a support matrix first** (pick explicit targets — e.g., Baseline "widely available" — and transpile only what the matrix demands).

---

## 4. Important points to remember (fundamentals)

### [4.1. Fundamentals checklist (mental models mentors insist on)](<./sections/4. Important points to remember/4.1. Fundamentals checklist mental models mentors insist on.md>)

1. **Language vs platform separation**, engine vs runtime vocabulary.
2. **Editions and availability are two different questions**.
3. **Single-threaded execution + event loop = the concurrency story**.
4. **Dynamic typing pushes errors to runtime** — plan compensating controls.

---

## 5. Interview questions and answers (fundamentals)

### [5.1. Common interview Q&A: fundamentals of the language](<./sections/5. Interview questions and answers/5.1. Common interview QA fundamentals of the language.md>)

1. **Language vs spec naming** (JavaScript / ECMAScript / JScript).
2. **Engines vs runtimes** (V8 vs Node.js — which one implements `fs`?).
3. **Event loop ordering** (sync → microtasks → macrotasks) and more, each with a crisp model answer.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **DOM/browser platform APIs, Node.js host APIs, TypeScript** — future sibling tracks, not here.
2. **Async/promises deep dive** — Async, Event Loop, and Promises domain.
3. **Types and coercion mechanics** — Values, Types, and Coercion domain.
