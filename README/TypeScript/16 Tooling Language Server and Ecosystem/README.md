# Tooling, Language Server and Ecosystem

Use and investigate the tools around a TypeScript program: native language-server queries and edits, typed lint policies, formatting, package-health checks, documentation verification and compiler upgrades. Worked fixtures distinguish requested operations, actual results and their limits. Native compiler examples use TypeScript 7.0.2; API-dependent tools explicitly name their compatible compiler dependency. Runtime and tool versions are stated with each fixture.

[Fundamentals](<../01 Fundamentals and Mental Model/README.md>) explains why checking and editor queries are useful. [Configuration](<../13 Configuration and Compiler Options/README.md>) owns compiler options, and [publishing](<../12 Modules Namespaces and Declaration Files/sections/3. Declaration Files in Practice/3.3. Publishing types exports map and typesVersions.md>) owns package metadata and consumer contracts. This domain adds actual tooling operations and failure diagnosis to those foundations.

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

1. **Reproducible choice:** select versions, plugins, supported config files and an explicit file set.
2. **Actual CLI sequence:** reproduce dirty/check/write/check outcomes and repeat stability with compiler/runtime comparisons.
3. **Enforcement boundaries:** distinguish local editing, CI selection, directive/import effects and formatted type errors.

### [2.3. publint attw and package health checks](<./sections/2. Lint Format and Checks/2.3. publint attw and package health checks.md>)

1. **Artifact inputs:** run pinned publint and attw on the canonical package's actual local tarball.
2. **Matrix scope:** interpret supported entry points, profiles and static analysis alongside actual compiler/runtime consumers.
3. **Contrasting defects:** reproduce omitted declarations and a semantic error that health checks cannot detect.

---

## 3. Debugging and Ecosystem

### [3.1. Debugging tsserver logs and responsiveness](<./sections/3. Debugging and Ecosystem/3.1. Debugging tsserver logs and responsiveness.md>)

1. **Provider and message layers:** distinguish native LSP, legacy tsserver logs, source diagnostics and protocol failures.
2. **Document state:** compare effective config/disk compilation with actual native diagnostics for an unsaved edit.
3. **Controlled investigation:** reproduce missing config failures and use measurements without cache or tuning folklore.

### [3.2. Playground twoslash and documentation snippets](<./sections/3. Debugging and Ecosystem/3.2. Playground twoslash and documentation snippets.md>)

1. **Reproduction scope:** select versions/options and distinguish browser execution from local integration.
2. **Actual Twoslash:** run a pinned API fixture with literal queries, hidden setup, expected errors and virtual files.
3. **Evidence limits:** separate validation policies, explicit assertions, rendering and native compiler/runtime checks.

### [3.3. Version management and upgrade playbooks](<./sections/3. Debugging and Ecosystem/3.3. Version management and upgrade playbooks.md>)

1. **Tool and consumer contracts:** distinguish development pins, resolved graphs, API peers and published declaration support.
2. **Executed upgrade:** observe manifest/lock mismatch, a deliberate 6→7 update and restoration of both inputs.
3. **Interface-specific adoption:** retain compatibility tools and test the supported compiler/runtime consumers.

---

## 4. Important points to remember (tooling and ecosystem)

### [4.1. Tooling checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Tooling checklist mental models mentors insist on.md>)

1. **Evidence map:** connect each tool result to its selected inputs and the conclusion it supports.
2. **Behavior review:** inspect binding scope, Promise handling, import effects and formatting boundaries.
3. **Meaningful gates:** use the worked negative cases to test package, documentation and upgrade claims.

---

## 5. Common pitfalls → production bugs (tooling and ecosystem)

### [5.1. Real production bugs caused by tooling misunderstandings](<./sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by tooling misunderstandings.md>)

1. **Internal names and wire keys:** reproduce a stable command key and an invalid assumption about automatic rename propagation.
2. **Loop policy:** run the actual batch-await lint finding, justify a scoped exception and validate the scheduling limit.
3. **Packed declarations:** diagnose the observed source-green/consumer-red artifact failure.
4. **Build state:** distinguish forced rebuilding, obsolete outputs and evidence for an actual cache problem.

---

## 6. Interview questions and answers (tooling and ecosystem)

### [6.1. Common interview QA — tooling language server and ecosystem](<./sections/6. Interview questions and answers/6.1. Common interview QA tooling language server and ecosystem.md>)

1. **Compiler versus editor:** explain native/legacy interfaces and state-dependent diagnostics.
2. **Typed lint:** identify type-information requirements, overlapping diagnostics and actual Promise handling.
3. **Package artifacts:** interpret health results alongside strict consumers and behavioral assertions.
4. **Investigation:** choose operation-specific evidence and test one hypothesis without fixed tuning rules.
5. **Upgrade decisions:** preserve interface/consumer checks and complete rollback inputs.

---

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries — what is covered elsewhere](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **Interfaces and editor work:** distinguish interactive operations, compiler commands and older API consumers.
2. **Configuration and rule gates:** attribute diagnostics to the program, lint rule or formatting operation that produced them.
3. **Consumer artifacts:** inspect imports, declaration surfaces, packed files and entry points.
4. **Testing evidence:** separate type/runtime tests, async completion and configured reproductions.
5. **Measurement and migration:** compare the relevant process/cache conditions and preserve artifact/tool checks across versions.

[← Back to track](<../README.md>)
