# Production Checklist, Migration and Interoperability

How TypeScript *ships and survives* — production checklists (release gates composed: statics, surfaces, packaging, baselines), migration playbooks (JS→TS file-by-file, version upgrades, loose→strict sequencing), and interop (untyped-JS consumption via `allowJs`/`checkJs`/JSDoc, environment-portable code, declaration-first trust boundaries). Flag *mechanics* live in [13 Configuration](<../13 Configuration and Compiler Options/README.md>); version *playbooks* live in [16 Tooling](<../16 Tooling Language Server and Ecosystem/README.md>) ([3.3. Version management](<../16 Tooling Language Server and Ecosystem/sections/3. Debugging and Ecosystem/3.3. Version management and upgrade playbooks.md>)); gate *composition* lives in [17 Testing Types](<../17 Testing Types/README.md>) ([3.3. CI gates](<../17 Testing Types/sections/3. Type Tests in Practice/3.3. CI gates running type tests with unit tests.md>)) — this domain owns release *practice*: proving shippability, migrating safely, interoperating honestly.

## 0. Prerequisites

[12 Modules, Namespaces and Declaration Files](<../12 Modules Namespaces and Declaration Files/README.md>) — [3.3. Publishing types](<../12 Modules Namespaces and Declaration Files/sections/3. Declaration Files in Practice/3.3. Publishing types exports map and typesVersions.md>) (packaging wiring checklists verify). [13 Configuration and Compiler Options](<../13 Configuration and Compiler Options/README.md>) — [4.1. Configuration checklist](<../13 Configuration and Compiler Options/sections/4. Important points to remember/4.1. Configuration checklist mental models mentors insist on.md>) (flag discipline checklists audit). [16 Tooling, Language Server and Ecosystem](<../16 Tooling Language Server and Ecosystem/README.md>) — [3.3. Version management](<../16 Tooling Language Server and Ecosystem/sections/3. Debugging and Ecosystem/3.3. Version management and upgrade playbooks.md>) (upgrade playbooks this domain applies). [17 Testing Types](<../17 Testing Types/README.md>) — [3.3. CI gates](<../17 Testing Types/sections/3. Type Tests in Practice/3.3. CI gates running type tests with unit tests.md>) (three-gate suite checklists compose).

## 1. Production Checklist

### [1.1. Pre-release type gates all green](<./sections/1. Production Checklist/1.1. Pre-release type gates all green.md>)

1. **Contract-driven gates:** choose actual source, artifact, type-consumer and behavior checks with preserved failures.
2. **One identified artifact:** execute health tools and fresh ESM/CommonJS consumers against an explicit local tarball and retain its report.
3. **Deliberate release evidence:** reproduce layout and semantic failures, distinguish old artifact success from changed source and review baseline compatibility.

### [1.2. Strictness and configuration audits](<./sections/1. Production Checklist/1.2. Strictness and configuration audits.md>)

1. **Effective contracts:** inspect actual strict-family overrides, selected inputs and intentional check/emit differences.
2. **Inherited-config failures:** reproduce a nullability override and a green child config that omits an incorrect type probe.
3. **Exception judgment:** distinguish runtime invariants, negative type tests and accepted debt without treating counts or comments as proof.

### [1.3. Observability hooks error reporting and health](<./sections/1. Production Checklist/1.3. Observability hooks error reporting and health.md>)

1. **Explicit reporting projection:** test serialized fixed fields without inferring redaction, sampling or remote delivery from a type.
2. **Readiness decisions:** model three local states and separate them from liveness, live dependencies and orchestration transport policy.
3. **Actual lifecycle evidence:** send SIGTERM with owned work pending, reject new admission, verify completion and distinguish deadline failure.

---

## 2. Migration Playbooks

### [2.1. JavaScript to TypeScript file by file](<./sections/2. Migration Playbooks/2.1. JavaScript to TypeScript file by file.md>)

1. **Real mixed inputs:** build and execute a TypeScript consumer of JavaScript, inspect inferred declarations and identify an unchecked boundary.
2. **Verified conversion:** add checked JSDoc, reproduce rename errors, introduce TypeScript annotations and preserve selected runtime cases.
3. **Migration judgment:** choose coherent review units, distinguish static improvement from validation and evaluate automation or maintained typed JavaScript.

### [2.2. TypeScript version upgrades without flag-days](<./sections/2. Migration Playbooks/2.2. TypeScript version upgrades without flag-days.md>)

1. **Changelog-triaged upgrades:** reproduce a real 5.5-to-5.6 library-type change, diagnose empty iterator completion, and verify the fix on old, candidate and current compilers.
2. **Dual-pipeline verification:** build isolated artifacts, review declaration and behavior changes, and test an installed tarball consumer.
3. **Ecosystem lag gating:** distinguish CLI and imported API support, promote each tested interface deliberately, and rehearse a bounded fallback.
4. **Migration judgment:** explain the evidence, assert the installed empty-input contract and identify application integrations that remain unverified.

### [2.3. Loose to strict sequencing](<./sections/2. Migration Playbooks/2.3. Loose to strict sequencing.md>)

1. **Evidence-based sequencing:** run independent flag contrasts and distinguish policy order from the initialization/null-check dependency.
2. **Complete target contracts:** repair input, absence, callback, constructor and override behavior, then check and execute the full strict target.
3. **Rollout boundaries:** review API changes, exception identities and selected scope without treating category counts or codemods as proof.

---

## 3. Interop and Portable Code

### [3.1. allowJs checkJs and JSDoc-typed JavaScript](<./sections/3. Interop and Portable Code/3.1. allowJs checkJs and JSDoc-typed JavaScript.md>)

1. **Actual checking controls:** distinguish JavaScript participation, body reporting, per-file directives and types consumed by a real TypeScript caller.
2. **Executable JSDoc:** use imports, generics, shapes, satisfies and a mapped alias in JavaScript; inspect actual generated declarations.
3. **Maintenance judgment:** reproduce a false provider annotation, static readonly/value failures and runtime limits without fixed conversion thresholds.

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

1. **Configuration and decisions:** connect program/output settings to migration and release evidence.
2. **Tool interfaces:** locate supported compiler/API pairings and actual tool-operation checks.
3. **Tests and consumers:** distinguish type tests, runtime behavior and consumed declaration artifacts.
4. **Completion and scaling:** route application lifecycle observations separately from compiler measurements.
5. **Published update routes:** use historical feature indexes and the current six-lesson 7.0 assessment without duplicating catalogs.

[← Back to track](<../README.md>)
