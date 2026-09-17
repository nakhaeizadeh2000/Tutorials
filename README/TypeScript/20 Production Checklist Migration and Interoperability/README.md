# Production Checklist, Migration and Interoperability

How TypeScript *ships and survives* — production checklists (release gates composed: statics, surfaces, packaging, baselines), migration playbooks (JS→TS file-by-file, version upgrades, loose→strict sequencing), and interop (untyped-JS consumption via `allowJs`/`checkJs`/JSDoc, environment-portable code, declaration-first trust boundaries). Flag *mechanics* live in [13 Configuration](<../13 Configuration and Compiler Options/README.md>); version *playbooks* live in [16 Tooling](<../16 Tooling Language Server and Ecosystem/README.md>) ([3.3. Version management](<../16 Tooling Language Server and Ecosystem/sections/3. Debugging and Ecosystem/3.3. Version management and upgrade playbooks.md>)); gate *composition* lives in [17 Testing Types](<../17 Testing Types/README.md>) ([3.3. CI gates](<../17 Testing Types/sections/3. Type Tests in Practice/3.3. CI gates running type tests with unit tests.md>)) — this domain owns release *practice*: proving shippability, migrating safely, interoperating honestly.

## 0. Prerequisites

[12 Modules, Namespaces and Declaration Files](<../12 Modules Namespaces and Declaration Files/README.md>) — [3.3. Publishing types](<../12 Modules Namespaces and Declaration Files/sections/3. Declaration Files in Practice/3.3. Publishing types exports map and typesVersions.md>) (packaging wiring checklists verify). [13 Configuration and Compiler Options](<../13 Configuration and Compiler Options/README.md>) — [4.1. Configuration checklist](<../13 Configuration and Compiler Options/sections/4. Important points to remember/4.1. Configuration checklist mental models mentors insist on.md>) (flag discipline checklists audit). [16 Tooling, Language Server and Ecosystem](<../16 Tooling Language Server and Ecosystem/README.md>) — [3.3. Version management](<../16 Tooling Language Server and Ecosystem/sections/3. Debugging and Ecosystem/3.3. Version management and upgrade playbooks.md>) (upgrade playbooks this domain applies). [17 Testing Types](<../17 Testing Types/README.md>) — [3.3. CI gates](<../17 Testing Types/sections/3. Type Tests in Practice/3.3. CI gates running type tests with unit tests.md>) (three-gate suite checklists compose).

## 1. Production Checklist

### [1.1. Pre-release type gates all green](<./sections/1. Production Checklist/1.1. Pre-release type gates all green.md>)

1. **Three-gate composition at release** (`noEmit` + `tsd`/typecheck + unit — 17/3.3 gates required, none advisory, at the release cut).
2. **Packaging gates on the tarball** (`attw` + `publint` on packed output — 16/2.3 gates proving consumer resolution pre-publish).
3. **Baseline diffs reviewed** (type + perf + API baselines — moves deliberate with evidence, never silent).

### [1.2. Strictness and configuration audits](<./sections/1. Production Checklist/1.2. Strictness and configuration audits.md>)

1. **Flag audit** (strict family on, trio enforced, pairing per runtime — 13/4.1 checklist signed off per release).
2. **Exemption inventory** (`ts-expect-error`/`any`/lint-disable counts — baselines holding-or-shrinking, growth blocked).
3. **Environment parity** (dev/CI/prod configs identical — `tsconfig` inheritance proving parity, drift red).

### [1.3. Observability hooks error reporting and health](<./sections/1. Production Checklist/1.3. Observability hooks error reporting and health.md>)

1. **Typed error reporting** (error taxonomies flowing to reporters — 15/2.2 hierarchies with `cause` chains, sampled not dumped).
2. **Health and readiness types** (dependency checks typed — degraded states modeled, not booleaned).
3. **Graceful-shutdown phases** (stop → drain → exit — 18/3.3 drains exercised, SIGTERM tested per 17/2.3).

---

## 2. Migration Playbooks

### [2.1. JavaScript to TypeScript file by file](<./sections/2. Migration Playbooks/2.1. JavaScript to TypeScript file by file.md>)

1. **`allowJs` bridging phase** (JS compiling alongside TS — mixed programs, boundaries inventoried, no big-bang rewrites).
2. **Rename-and-tighten loops** (`.js` → `.ts` per file — `noImplicitAny` errors fixed per file, tests green throughout).
3. **JSDoc as a halfway house** (typed JS via annotations — value before migration, migration eased after).

### [2.2. TypeScript version upgrades without flag-days](<./sections/2. Migration Playbooks/2.2. TypeScript version upgrades without flag-days.md>)

1. **Changelog-triaged upgrades** (breaking vs feature vs fix — 16/3.3 playbook applied: branch builds, error-class-ordered fixes).
2. **Dual-pipeline verification** (old + new `tsc` in CI during migration — drift caught, rollbacks clean).
3. **Ecosystem lag gating** (framework/editor/linter support windows — upgrading past supported ranges staged, never jumped).

### [2.3. Loose to strict sequencing](<./sections/2. Migration Playbooks/2.3. Loose to strict sequencing.md>)

1. **Flag-by-flag ordering** (`strictNullChecks` → `noImplicitAny` → variance/init/override — 13/4.1 sequencing restated as playbook).
2. **Per-class baselines** (error counts per flag — ratchets shrinking, never growing, per 17/3.3).
3. **Team rollout** (pilot partition → codemods → mandate — adoption paced, support staffed, never decreed).

---

## 3. Interop and Portable Code

### [3.1. allowJs checkJs and JSDoc-typed JavaScript](<./sections/3. Interop and Portable Code/3.1. allowJs checkJs and JSDoc-typed JavaScript.md>)

1. **`allowJs` + `checkJs` semantics** (JS in the program — checked loosely or strictly, declarations generatable via `declaration`).
2. **JSDoc type syntax** (`@param`/`@returns`/`@typedef`/`@template` — typed JS without migration, verified by `tsc`).
3. **Graduation criteria** (when JSDoc suffices vs when `.ts` pays — complexity thresholds, contributor ergonomics).

### [3.2. Environment-portable code node browser edge](<./sections/3. Interop and Portable Code/3.2. Environment-portable code node browser edge.md>)

1. **Environment guards** (`typeof process`/`window` narrowing — 07 mechanics selecting implementations per runtime).
2. **Lib-split partitions** (per-runtime `lib` per 18/3.1 — environment mistakes loud, shared code portable).
3. **Portable abstractions** (storage/clock/network seams — 17/2.2 fakes proving portability, interfaces hiding runtimes).

### [3.3. Declaration-first consumption of untyped JavaScript](<./sections/3. Interop and Portable Code/3.3. Declaration-first consumption of untyped JavaScript.md>)

1. **Ambient declarations as trust boundaries** (`declare module "legacy"` — minimal honest shims per 12/2.3, deletion-on-arrival).
2. **Progressive precision** (shim → `any`-with-tests → precise types — trust earned per version, never assumed).
3. **Fork-PR-replace exits** (upstreaming types — DefinitelyTyped PRs, vendored shims sunsetting per 12/3.2).

---

## 4. Important points to remember (production and interop)

### [4.1. Production checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Production checklist mental models mentors insist on.md>)

1. **Gate everything releasable** (statics, surfaces, packaging, baselines — all green, none advisory).
2. **Migrate in files and flags, never in flag-days** (incremental playbooks — velocity with safety, always).
3. **Interop honest, never hopeful** (shims minimal, trust versioned, precision progressive).
4. **Observe what you ship** (errors taxed, health modeled, shutdowns phased — production as proof).

---

## 5. Common pitfalls → production bugs (production and interop)

### [5.1. Real production bugs caused by production misunderstandings](<./sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by production misunderstandings.md>)

1. **Advisory packaging gate shipped `any` to every consumer** (attw warned, release proceeded — warnings promoted to blockers after).
2. **Big-bang JS→TS rewrite stalled for two quarters** (flag-day migration abandoned mid-flight — file-by-file playbook adopted in recovery).
3. **Untyped analytics SDK widened event payloads silently** (hopeful `any` shim — precision progressive discipline adopted after).
4. **SIGTERM-ignorant deploy severed 400 in-flight checkouts** (no drain phases — shutdown runbook added, deploys graceful after).

---

## 6. Interview questions and answers (production and interop)

### [6.1. Common interview QA — production migration and interop](<./sections/6. Interview questions and answers/6.1. Common interview QA production migration and interop.md>)

1. **What gates a TypeScript release — and which are advisory vs blocking?** (three gates + packaging + baselines — none advisory).
2. **How do you migrate a large JS codebase — without stopping feature work?** (allowJs bridge, file loops, JSDoc halfway — velocity with safety).
3. **How do you upgrade TypeScript versions — without a flag-day?** (changelog triage, dual pipelines, ecosystem gating).
4. **How do you consume untyped JS safely — and when do shims graduate?** (minimal shims, progressive precision, fork-PR-replace).
5. **What makes code portable across Node/browser/edge — and how do you prove it?** (guards, lib splits, seams + fakes — portability tested).

---

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries — what is covered elsewhere](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **Flag mechanics and migration sequencing theory** (strict family, trio, pairing, composite config) — [13 Configuration and Compiler Options](<../13 Configuration and Compiler Options/README.md>).
2. **Tooling operation and version playbooks** (tsserver, lint tiers, gates operation, upgrade playbooks) — [16 Tooling, Language Server and Ecosystem](<../16 Tooling Language Server and Ecosystem/README.md>).
3. **Test construction and gate composition** (assertions, doubles, matrices, CI triage) — [17 Testing Types](<../17 Testing Types/README.md>).
4. **Async evaluation and scale engineering** (promises, combinators, budgets, references) — [18 Async Types and Standard Library](<../18 Async Types and Standard Library/README.md>) + [19 Performance, Project References and Scaling](<../19 Performance Project References and Scaling/README.md>).
5. **Version-feature indexes** (what changed per release, mapped to topical domains) — [21 Update TypeScript 5.6](<../21 Update TypeScript 5.6/README.md>) + [22 Update TypeScript 5.7](<../22 Update TypeScript 5.7/README.md>) + [23 Update TypeScript 5.8](<../23 Update TypeScript 5.8/README.md>) + [24 Update TypeScript 5.9 and 6.0](<../24 Update TypeScript 5.9 and 6.0/README.md>) (textual forwards until 21–24 land).

[← Back to track](<../README.md>)
