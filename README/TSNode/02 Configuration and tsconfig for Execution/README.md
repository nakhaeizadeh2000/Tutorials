# Configuration and tsconfig for Execution

How ts-node finds, merges, and obeys `tsconfig.json` — base-and-delta architectures, monorepo scoping, the module-pair matrix, the `allowImportingTsExtensions` trap, and the `paths` checker/runtime gap with its bridge. Config parsing itself lives in [01/2.2. The tsconfig that executes](<../01 Execution Foundations and Mental Model/sections/2. Modes and configuration/2.2. The tsconfig that executes.md>); this domain teaches the *architecture*: many files, many packages, one truth per entry point.

## 0. Prerequisites

[01/2.2. The tsconfig that executes](<../01 Execution Foundations and Mental Model/sections/2. Modes and configuration/2.2. The tsconfig that executes.md>) (config parse, module/target pairs, erasable strictness — assumed, priced in multi-file terms here). [TypeScript 13: Configuration and Compiler Options](<../../TypeScript/13 Configuration and Compiler Options/README.md>) (what each flag *means* — assumed, never redefined here). This domain assumes a running ts-node install and spends its pages on config *structure*, not flag semantics.

## 1. Config architecture

### [1.1. Base and delta tsconfigs](<./sections/1. Config architecture/1.1. Base and delta tsconfigs.md>)

1. **One base, deltas per consumer** (`extends` chains — flags written once, environments override without copying).
2. **The ts-node object inside the config** (`transpileOnly`/`files`/ts-node-only `compilerOptions` — runner options where CLI flags cannot reach).
3. **`--showConfig` ends arguments** (effective merged config printed — diagnosis from evidence, never memory).

### [1.2. Monorepo configs and project scoping](<./sections/1. Config architecture/1.2. Monorepo configs and project scoping.md>)

1. **Upward search starts at the entry** (tsc rules — wrong-package inheritance is the default monorepo failure).
2. **Scope explicitly per package** (`--project`/`TS_NODE_PROJECT` — each entry governed by its own pair).
3. **Defaults are a bet, not a promise** (missing config inherits newest `@tsconfig/bases` — know what you inherit).

---

## 2. Module pairs and specifiers

### [2.1. The module pair matrix for execution](<./sections/2. Module pairs and specifiers/2.1. The module pair matrix for execution.md>)

1. **Name the door, the pair follows** (`commonjs`/require vs `NodeNext`/loader — a lookup table, not memory).
2. **Half-pairs fail loudly or worse** (`TS5109` vs silent wrong-file — complete the pair or inherit the default's bet).
3. **ESM output needs the loader door** (`esnext` through the require hook dies `Unknown file extension` — verified).

### [2.2. allowImportingTsExtensions and extension rewriting](<./sections/2. Module pairs and specifiers/2.2. allowImportingTsExtensions and extension rewriting.md>)

1. **Write `.ts`, ship `.js`** (the 5.0/5.7 pair — checker accepts, emitter rewrites, ts-node runs unrewritten).
2. **The flag name is the trap** (`allowImportingTsExtensions`, never `allowImportingTs` — the wrong name dies `TS5023`, verified).
3. **Pair or perish** (accept without rewrite crashes every runner but the checker — both flags in the same config the runner reads).

---

## 3. Paths runtime

### [3.1. paths and baseUrl that run](<./sections/3. Paths runtime/3.1. paths and baseUrl that run.md>)

1. **Checker maps, runtime doesn't** (`paths` accepted by `tsc`, refused by Node — the typechecks-green-crashes-red shape, verified).
2. **Bridge with tsconfig-paths** (`-r tsconfig-paths/register` — the verified one-line fix).
3. **Or erase the need** (relative specifiers where aliases buy nothing — fewer moving parts, zero bridge).

---

## 4. Important points to remember (configuration)

### [4.1. Config checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Config checklist habits mentors insist on.md>)

1. **Show the config before theorizing** (`--showConfig` in every bug report — evidence over memory).
2. **Scope proven per entry** (each package entry names its project — inheritance assumed guilty).
3. **Pairs complete, paths bridged** (matrix lookup plus runtime maps verified in CI — the gate from 01 extended).

---

## 5. Interview questions and answers (configuration)

### [5.1. Common interview QA: configuration](<./sections/5. Interview questions and answers/5.1. Common interview QA configuration.md>)

1. **"TS5109 on boot" — autopsy it** (the half-pair diagnosis — option, cause, fix in thirty seconds).
2. **"Typechecks but crashes on import" — autopsy it** (the `paths` gap — checker vs runtime, bridge vs rewrite).
3. **"Unknown option allowImportingTs" — autopsy it** (the rename that never happened — exact flag, exact pair), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Flag semantics and release history** (what each option means, when it shipped — TypeScript 13/22 own the *meaning*; this domain owns the *wiring*).
2. **Deeper execution topics** (loader recipes → 03; watch/REPL/editors → 04; debugging/sourcemaps → 05; shipping → 06 — each owned there).
3. **Runtime mechanics** (resolution inside Node, processes, workers — Node.js track owns the engine room; this track owns the TypeScript on-ramp).
