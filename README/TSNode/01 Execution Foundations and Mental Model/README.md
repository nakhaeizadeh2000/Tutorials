# Execution Foundations and Mental Model

What ts-node is and how TypeScript files come to run on Node.js: the hook-not-runtime mental model, installing and running a first `.ts` file, the transpile-only versus typecheck split, the tsconfig that executes faithfully, and how loading behaves under CJS and ESM. The pipeline comparison lives in the [TypeScript track](<../../TypeScript/01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.2. Executing TypeScript tsc plus node tsx ts-node and native Node stripping.md>); this domain teaches the *operation of ts-node itself* — installing it, pointing it at code, and knowing what it does on every import.

## 0. Prerequisites

[Executing TypeScript — pipeline survey](<../../TypeScript/01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.2. Executing TypeScript tsc plus node tsx ts-node and native Node stripping.md>) (tsc vs tsx vs ts-node vs native stripping compared — assumed, never re-compared here). [NodeJS 01: process and module model](<../../NodeJS/01 Runtime Fundamentals and Mental Model/README.md>) (CJS/ESM resolution in Node — assumed, priced in ts-node terms here). This domain assumes a working Node.js install and spends its pages on ts-node's hooks, modes, and configuration, not language or runtime mechanics.

## 1. Execution identity and setup

### [1.1. What ts-node is and is not](<./sections/1. Execution identity and setup/1.1. What ts-node is and is not.md>)

1. **A hook, not a runtime** (ts-node registers a compiler on Node's loader — V8 still runs plain JS after the hook fires).
2. **Transpile on import, optionally check** (each `.ts` import compiles at load time — speed versus safety decided per flag).
3. **One runner among several** (tsc-emit, tsx, native stripping — where ts-node wins and where it loses, priced honestly).

### [1.2. Installing and running your first TypeScript file](<./sections/1. Execution identity and setup/1.2. Installing and running your first TypeScript file.md>)

1. **Install once, pin with the project** (typescript plus ts-node as dev dependencies — versions locked, never global).
2. **Run three ways, know which you used** (CLI, register hook, programmatic — the invocation that owns each use case).
3. **Verify the run teaches the hook** (`-e`/`-p` probes plus a script run — execution claims checked, never assumed).

---

## 2. Modes and configuration

### [2.1. Transpile-only versus full typechecking](<./sections/2. Modes and configuration/2.1. Transpile-only versus full typechecking.md>)

1. **Two modes, one default to question** (full check blocks the import; transpile-only strips and defers — latency priced per file).
2. **Separate checking from running** (`tsc --noEmit` in CI plus fast execution locally — each concern on its own track).
3. **SWC when the compiler is the bottleneck** (third-party transpilers trade checking integration for startup speed — measured, not guessed).

### [2.2. The tsconfig that executes](<./sections/2. Modes and configuration/2.2. The tsconfig that executes.md>)

1. **ts-node reads your tsconfig** (automatic parsing with Node-version defaults — flags live in one file, not the command line).
2. **Module and target pairs that run** (CommonJS-first pairs versus ESM pairs — the combination that matches your loader).
3. **Strictness that survives execution** (erasable-friendly flags so stripping-era Node accepts the same sources — one tree, every runner).

---

## 3. Loading model

### [3.1. Loading TypeScript under CJS and ESM](<./sections/3. Loading model/3.1. Loading TypeScript under CJS and ESM.md>)

1. **CJS via require hook** (`-r ts-node/register` extends what `require` understands — synchronous, cached, familiar).
2. **ESM via loader hook** (`--loader ts-node/esm` teaches the ESM pipeline — explicit entry, parallel-friendly).
3. **Extension and specifier rules still apply** (Node's resolution decides CJS-vs-ESM before ts-node compiles — mismatches diagnosed at the boundary).

---

## 4. Important points to remember (execution)

### [4.1. Execution checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Execution checklist habits mentors insist on.md>)

1. **Pin it, scope it, probe it** (versions locked, files scoped, first run verified — execution assumptions checked in code).
2. **Never ship the hook unmeasured** (dev runner versus production artifact — the boundary reviewed like correctness).
3. **Checking runs on its own schedule** (type errors gate CI, not the dev loop — fast feedback with no silent drift).

---

## 5. Interview questions and answers (execution)

### [5.1. Common interview QA: execution foundations](<./sections/5. Interview questions and answers/5.1. Common interview QA execution foundations.md>)

1. **"How does ts-node run TypeScript?" — answer in layers** (hook vs runtime vs checker — the precision screen).
2. **Transpile-only versus typecheck: which and why?** (the latency judgment question — startup cost vs error timing, priced per environment).
3. **ts-node vs tsx vs native stripping** (the runner judgment question — trade-offs read live), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Language and pipeline theory** (erasable inventory, pipeline survey, config flags as grammar — TypeScript track owns the *what*; this domain owns the *running*).
2. **Deeper execution topics** (tsconfig mastery → 02; loader internals → 03; watch/REPL/editors → 04; debugging/sourcemaps → 05; shipping → 06 — each owned there).
3. **Runtime mechanics** (event loop, processes, workers — Node.js track owns the engine room; this track owns the TypeScript on-ramp).
