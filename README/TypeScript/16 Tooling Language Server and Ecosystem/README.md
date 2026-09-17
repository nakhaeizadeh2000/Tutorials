# Tooling, Language Server and Ecosystem

How TypeScript *works you* — the language server (navigation, renames, refactors, inlay hints) as a daily instrument, lint/format pipelines (typescript-eslint, Prettier/dprint) as enforced conventions, package-health checks (publint, attw/are-the-types-wrong) as release gates, and debugging plus ecosystem practices (tsserver logs, playground/twoslash docs, version upgrades). The *why* of editor superpowers lives in [01 Fundamentals](<../01 Fundamentals and Mental Model/README.md>) ([2.3. Language server](<../01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.3. The language server editor superpowers that justify TypeScript.md>)); flag configuration lives in [13 Configuration](<../13 Configuration and Compiler Options/README.md>) — this domain owns *tooling practice*: using, tuning, debugging, and gating the ecosystem around the compiler.

## 0. Prerequisites

[01 Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) — [2.3. Language server](<../01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.3. The language server editor superpowers that justify TypeScript.md>) (why the server justifies TypeScript — motivation this domain operationalizes) and [3.1. Compilation pipeline](<../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.1. The compilation pipeline tsc emit declarations and source maps.md>) (tsc stages the server reuses). [12 Modules, Namespaces and Declaration Files](<../12 Modules Namespaces and Declaration Files/README.md>) — [3.3. Publishing types](<../12 Modules Namespaces and Declaration Files/sections/3. Declaration Files in Practice/3.3. Publishing types exports map and typesVersions.md>) (publishing gates this domain verifies with publint/attw). [13 Configuration and Compiler Options](<../13 Configuration and Compiler Options/README.md>) — [4.1. Configuration checklist](<../13 Configuration and Compiler Options/sections/4. Important points to remember/4.1. Configuration checklist mental models mentors insist on.md>) (flag discipline the tooling assumes).

## 1. Language Server in Practice

### [1.1. Navigation go to definition find references](<./sections/1. Language Server in Practice/1.1. Navigation go to definition find references.md>)

1. **Go-to-definition across layers** (sources vs declarations vs `node_modules` — where jumps land and what that reveals about emit).
2. **Find-all-references audits** (rename impact, dead-code detection, API-surface enumeration — references as codebase queries).
3. **Workspace symbols and peek flows** (fuzzy symbol search, peek-definition without losing context — navigation without disorientation).

### [1.2. Rename refactorings and code actions](<./sections/1. Language Server in Practice/1.2. Rename refactorings and code actions.md>)

1. **Rename-symbol mechanics** (occurrence rewriting across files — what renames safely vs what needs codemods).
2. **Quick fixes and refactors** (fix-alls, convert-to-`import type`, extract-to-function/constant — intention actions that encode team conventions).
3. **Organize-imports and sort discipline** (auto-organized import blocks — elision-safe ordering, review-noise reduction).

### [1.3. Inlay hints hover and signature help](<./sections/1. Language Server in Practice/1.3. Inlay hints hover and signature help.md>)

1. **Inlay hints as inline documentation** (parameter names, inferred return types, variable annotations — types visible without hovering).
2. **Hover reading discipline** (expanded types, JSDoc rendering, `go to type definition` — the diagnostic skill from 07–09 generalized).
3. **Signature help at call sites** (overload navigation, active-parameter tracking — calling correctly without memorizing).

---

## 2. Lint, Format and Checks

### [2.1. typescript-eslint rules and type-aware linting](<./sections/2. Lint Format and Checks/2.1. typescript-eslint rules and type-aware linting.md>)

1. **Recommended sets** (`recommended` vs `recommended-type-checked` vs `strict` — what each tier costs in setup and check time).
2. **Type-aware rules that matter** (`no-floating-promises`, `no-misused-promises`, `no-unnecessary-condition` — checker-backed rules plain ESLint cannot express).
3. **Rule triage and exemptions** (warn-vs-error policy, per-line disables with justification, baseline files for legacy adoption).

### [2.2. Prettier dprint and formatting discipline](<./sections/2. Lint Format and Checks/2.2. Prettier dprint and formatting discipline.md>)

1. **Formatter choice** (Prettier ubiquity vs dprint speed — what each optimizes, when speed matters in CI).
2. **Format-on-save + CI check** (local formatting instant, CI `check` blocking — style debates deleted structurally).
3. **What formatters don't do** (import organization, naming, architecture — formatter boundaries vs lint/ownership).

### [2.3. publint attw and package health checks](<./sections/2. Lint Format and Checks/2.3. publint attw and package health checks.md>)

1. **`publint` packaging lint** (exports/types conditions, file inclusion, dual-shape hazards — packaging bugs as lint errors pre-publish).
2. **`attw` (are-the-types-wrong) resolution checks** (subpath types resolution per importer kind — consumer-equivalent verification in CI).
3. **Health-gate composition** (publint + attw + smoke imports — the 12/3.3 release gates tooled, automated, blocking).

---

## 3. Debugging and Ecosystem

### [3.1. Debugging tsserver logs and responsiveness](<./sections/3. Debugging and Ecosystem/3.1. Debugging tsserver logs and responsiveness.md>)

1. **tsserver log anatomy** (`TSServer log` channel — request/response shapes, error codes, project-loading traces).
2. **Responsiveness triage** (large-program slowdowns: `disableSourceOfProjectReferenceRedirect`, watch-program tuning, `maxNodeModuleJsDepth`).
3. **Project-loading failures** (version mismatches, tsconfig extends chains, corrupted `.tsbuildinfo` — diagnosis order).

### [3.2. Playground twoslash and documentation snippets](<./sections/3. Debugging and Ecosystem/3.2. Playground twoslash and documentation snippets.md>)

1. **Playground as a verification tool** (isolated reproductions, version switching, shareable links — bug reports with runnable proof).
2. **Twoslash documentation** (hover-annotated snippets in docs — `// @filename`, `// ---cut---`, query comments keeping examples honest).
3. **This track's verification pattern** (isolated `/tmp` snippets per fence — the same discipline this tutorial uses to check every example).

### [3.3. Version management and upgrade playbooks](<./sections/3. Debugging and Ecosystem/3.3. Version management and upgrade playbooks.md>)

1. **Pinning vs ranging TypeScript** (exact pins for apps, ranges for libraries — what each choice costs at upgrade time).
2. **Upgrade playbook** (changelog triage, `tsc` on a branch, error-class-ordered fixes, dual-pipeline verification — the 13/4.1 migration discipline applied to the compiler itself).
3. **Ecosystem lag management** (framework/editor/linter support windows — upgrading past what the ecosystem supports, staged).

---

## 4. Important points to remember (tooling and ecosystem)

### [4.1. Tooling checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Tooling checklist mental models mentors insist on.md>)

1. **Navigate before reading** (go-to-definition, references, peek flows — understand via jumps, not file scans).
2. **Lint what compilers can't** (type-aware rules, import discipline, boundary conventions — checker-backed automation).
3. **Verify packages like consumers** (publint + attw + smoke — release gates proving consumer outcomes).
4. **Debug tooling with tooling** (logs, traces, playground reproductions — evidence per symptom, never folklore).

---

## 5. Common pitfalls → production bugs (tooling and ecosystem)

### [5.1. Real production bugs caused by tooling misunderstandings](<./sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by tooling misunderstandings.md>)

1. **Rename-symbol missed stringly references and broke runtime routing** (type-level rename complete; string-keyed dispatch table stale).
2. **Disabled lint rule hid an `await` in a loop that serialized 10k requests** (no-await-in-loop off "for velocity"; p99 latency incident).
3. **Unpublished `types` condition shipped `any` to every consumer** (exports mapped JS only; downstream `any`-infection at scale).
4. **Stale `.tsbuildinfo` served week-old declarations to downstream builds** (incremental cache poisoning; clean-build-only CI green, incremental red).

---

## 6. Interview questions and answers (tooling and ecosystem)

### [6.1. Common interview QA — tooling language server and ecosystem](<./sections/6. Interview questions and answers/6.1. Common interview QA tooling language server and ecosystem.md>)

1. **What does the language server do that `tsc` doesn't — and when do you run each?** (interactive queries vs batch verification).
2. **Which typescript-eslint rules actually need type information — and why are they worth the cost?** (checker-backed rules vs syntax rules).
3. **What do publint and attw check that `tsc` can't — and when do they run?** (packaging + consumer-resolution vs program checking).
4. **How do you debug a slow or broken tsserver — in what order?** (logs → project loading → tuning knobs → bisection).
5. **How do you upgrade TypeScript across a monorepo — without a flag-day?** (changelog triage, branch builds, error-class order, dual verification).

---

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries — what is covered elsewhere](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **Editor motivation and compilation stages** (why the server justifies TS, tsc pipeline, execution runtimes) — [01 Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>).
2. **Compiler flags and project configuration** (strict family, trio, pairing, declaration/composite, migration sequencing) — [13 Configuration and Compiler Options](<../13 Configuration and Compiler Options/README.md>).
3. **Module organization and publishing mechanics** (import/export forms, declaration authoring, exports maps, augmentation) — [12 Modules, Namespaces and Declaration Files](<../12 Modules Namespaces and Declaration Files/README.md>).
4. **Testing practice and async runtimes** (test doubles, suites, floating promises, backstops) — [17 Testing Types](<../17 Testing Types/README.md>) + [18 Async Types and Standard Library](<../18 Async Types and Standard Library/README.md>).
5. **Performance engineering at scale** (references architecture, check-time profiling, instantiation budgets) — [19 Performance, Project References and Scaling](<../19 Performance Project References and Scaling/README.md>).

[← Back to track](<../README.md>)
