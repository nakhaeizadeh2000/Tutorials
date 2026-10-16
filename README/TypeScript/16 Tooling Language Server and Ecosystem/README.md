# Tooling, Language Server and Ecosystem

How TypeScript *works you* — the language server (navigation, renames, refactors, inlay hints) as a daily instrument, lint/format pipelines (typescript-eslint, Prettier/dprint) as enforced conventions, package-health checks (publint, attw/are-the-types-wrong) as release gates, and debugging plus ecosystem practices (tsserver logs, playground/twoslash docs, version upgrades). The *why* of editor superpowers lives in [01 Fundamentals](<../01 Fundamentals and Mental Model/README.md>) ([2.3. Language server](<../01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.3. The language server editor superpowers that justify TypeScript.md>)); flag configuration lives in [13 Configuration](<../13 Configuration and Compiler Options/README.md>) — this domain owns *tooling practice*: using, tuning, debugging, and gating the ecosystem around the compiler.

## 0. Prerequisites

[01 Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) — [2.3. Language server](<../01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.3. The language server editor superpowers that justify TypeScript.md>) (why the server justifies TypeScript — motivation this domain operationalizes) and [3.1. Compilation pipeline](<../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.1. The compilation pipeline tsc emit declarations and source maps.md>) (batch checking and emitted artifacts). [12 Modules, Namespaces and Declaration Files](<../12 Modules Namespaces and Declaration Files/README.md>) — [3.3. Publishing types](<../12 Modules Namespaces and Declaration Files/sections/3. Declaration Files in Practice/3.3. Publishing types exports map and typesVersions.md>) (publishing gates this domain verifies with publint/attw). [13 Configuration and Compiler Options](<../13 Configuration and Compiler Options/README.md>) — [4.1. Configuration checklist](<../13 Configuration and Compiler Options/sections/4. Important points to remember/4.1. Configuration checklist mental models mentors insist on.md>) (flag discipline the tooling assumes).

## 1. Language Server in Practice

### [1.1. Navigation go to definition find references](<./sections/1. Language Server in Practice/1.1. Navigation go to definition find references.md>)

1. **Loaded project and targets:** distinguish native-server queries, source declarations and erased type-only contracts.
2. **Reference scope:** observe aliases, unrelated same-name bindings, strings and an additionally opened file before assessing impact.
3. **Search and peek:** use symbol candidates and editor previews while stating which server, runtime and UI behavior was actually verified.

### [1.2. Rename refactorings and code actions](<./sections/1. Language Server in Practice/1.2. Rename refactorings and code actions.md>)

1. **Binding-specific edits:** compare an exported rename with a local-alias rename and review unmodified strings/outside consumers.
2. **Action evidence:** distinguish diagnostics, offered quick fixes, explicit repairs and actual applied server edits.
3. **Module effects:** reproduce lost registration after unused-import removal and preserve an intentional side-effect dependency.

### [1.3. Inlay hints hover and signature help](<./sections/1. Language Server in Practice/1.3. Inlay hints hover and signature help.md>)

1. **Inference versus display:** contrast constant, let, mutable property and const-asserted property types with actual compiler/hover evidence.
2. **Configured hints and documentation:** read provider responses without treating omitted hints, alias formatting or JSDoc as runtime proof.
3. **Signature help and checking:** inspect overload candidates, active indexes and inferred results while verifying forbidden calls independently.

---

## 2. Lint, Format and Checks

### [2.1. typescript-eslint rules and type-aware linting](<./sections/2. Lint Format and Checks/2.1. typescript-eslint rules and type-aware linting.md>)

1. **Preset relationships:** distinguish recommended, strict, typed and stylistic configurations and their version behavior.
2. **Executed rules:** run a complete typed-lint project with a compatible API dependency and separate native compiler check.
3. **Handling and adoption:** compare Promise policies, overlapping diagnostics, justified exceptions and warning-count limits.

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

1. **Interfaces and editor work:** distinguish interactive operations, compiler commands and older API consumers.
2. **Configuration and rule gates:** attribute diagnostics to the program, lint rule or formatting operation that produced them.
3. **Consumer artifacts:** inspect imports, declaration surfaces, packed files and entry points.
4. **Testing evidence:** separate type/runtime tests, async completion and configured reproductions.
5. **Measurement and migration:** compare the relevant process/cache conditions and preserve artifact/tool checks across versions.

[← Back to track](<../README.md>)
