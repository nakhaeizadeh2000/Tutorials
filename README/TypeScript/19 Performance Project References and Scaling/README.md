# Performance, Project References and Scaling

This domain investigates compiler costs, configured project boundaries and the artifacts consumers actually use. Its examples generate native diagnostics/traces, compare recursion contracts, extend a reference graph, exercise retained build state and run a small task collector. Additional fixtures check a real import rule, a named-export runtime cycle, an installed declarations-only package and imported files excluded from root discovery. Configuration semantics belong to [Configuration](<../13 Configuration and Compiler Options/README.md>); provider/request diagnosis belongs to [Tooling](<../16 Tooling Language Server and Ecosystem/README.md>). Each observation has a declared scope: smaller counters, green build status and fewer roots do not by themselves prove preserved behavior or faster editing.

## 0. Prerequisites

[08 Generics Deep Dive](<../08 Generics Deep Dive/README.md>) — [3.2. Recursive generics](<../08 Generics Deep Dive/sections/3. Variance and Advanced Generic Patterns/3.2. Recursive generic types and self-referential patterns.md>) (depth budgets this domain measures). [09 Utility Types and Type Transformations](<../09 Utility Types and Type Transformations/README.md>) — [3.1. Deep transforms](<../09 Utility Types and Type Transformations/sections/3. Transformations in Practice/3.1. Deep transforms DeepPartial DeepReadonly and the budget.md>) (carve-out patterns budgeted here). [13 Configuration and Compiler Options](<../13 Configuration and Compiler Options/README.md>) — [3.2. declaration composite](<../13 Configuration and Compiler Options/sections/3. Modules Emit and Projects/3.2. declaration composite project references.md>) (flags this domain architects with). [16 Tooling, Language Server and Ecosystem](<../16 Tooling Language Server and Ecosystem/README.md>) — [3.1. Debugging tsserver](<../16 Tooling Language Server and Ecosystem/sections/3. Debugging and Ecosystem/3.1. Debugging tsserver logs and responsiveness.md>) (responsiveness triage this domain budgets for).

## 1. Check-Time Performance

### [1.1. Measuring with extendedDiagnostics and traces](<./sections/1. Check-Time Performance/1.1. Measuring with extendedDiagnostics and traces.md>)

1. **Actual diagnostic fields:** establish program membership and successful checking before interpreting whole-program counters or phase times.
2. **Native trace inspection:** generate and analyze real events, map checker-specific type files and distinguish native pprof artifacts from legacy CPU profiles.
3. **Comparable measurements:** collect separate successful elapsed runs, preserve contracts and route fuller cache/version/watch comparisons to their worked owner.

### [1.2. Instantiation budgets and TS2589 carve-outs](<./sections/1. Check-Time Performance/1.2. Instantiation budgets and TS2589 carve-outs.md>)

1. **Measured instantiations:** Read a pinned fixture's counters and distinguish completed checking from early failure.
2. **TS2589 remedies:** Compare recursive shapes, verify a bounded transform's changed contract, and avoid unsupported flags.
3. **Package budgets:** Run a real counter gate, observe passing and failing thresholds, and preserve compiler correctness as a prerequisite.

### [1.3. Hot-spot discipline mapped conditional and union cost](<./sections/1. Check-Time Performance/1.3. Hot-spot discipline mapped conditional and union cost.md>)

1. **Contract-preserving candidates:** compare modifier inheritance and fresh required keys before claiming a mapped-form optimization.
2. **Explicit variant relationships:** verify selected union-filter and event-table results without inventing checker complexity or cache formulas.
3. **Named public contracts:** inspect emitted declarations, distinguish hover presentation from semantics and route NoInfer to inference control.

---

## 2. Project References and Builds

### [2.1. Composite partitioning and references architecture](<./sections/2. Project References and Builds/2.1. Composite partitioning and references architecture.md>)

1. **Purposeful boundaries:** extend the configured graph with a second consumer and choose projects from dependencies, hosts, outputs and measured needs.
2. **Artifact and behavior observations:** inspect both consumer programs, composite constraints and changed runtime behavior behind stable declarations.
3. **Finite graph diagnostics:** reproduce circular references, distinguish dry planning from type checking and separate references from import policy.

### [2.2. Incremental builds and tsbuildinfo discipline](<./sections/2. Project References and Builds/2.2. Incremental builds and tsbuildinfo discipline.md>)

1. **State versus artifacts:** reproduce a missing runtime output with retained build information and repeated cached diagnostics after a source error.
2. **Honest rebuilding:** distinguish force, known-output clean and a fresh owned-output rebuild using actual sentinels and consumer checks.
3. **Purposeful reuse:** distinguish incremental, watch and solution orchestration while defining isolated writers, inputs and artifact-set cache policy.

### [2.3. Solution builds and CI orchestration with tsc b](<./sections/2. Project References and Builds/2.3. Solution builds and CI orchestration with tsc b.md>)

1. **Actual orchestration:** run one dependency build and preserve its status before tests that consume emitted artifacts.
2. **Explicit task selection:** compute a fixture-specific reverse-reference closure and map projects to actual runtime contracts.
3. **Coverage and job limits:** reproduce a missing-edge false green, compare full selection and reason about isolated job workspaces and shared prerequisites.

---

## 3. Scaling Patterns

### [3.1. Codebase partitioning boundaries layers and barrels](<./sections/3. Scaling Patterns/3.1. Codebase partitioning boundaries layers and barrels.md>)

1. **Actual dependency policy:** execute a static-import restriction, show that paths is not an allow-list and expose the dynamic-import coverage limit.
2. **Surface versus graph:** curate public names while reproducing a named-re-export cycle that passes checking and fails on initialization.
3. **Consumer contract evidence:** distinguish local shape checks, actual behavior, fake contracts and installed package exports.

### [3.2. Type-only boundaries import type bulk and erasable scale](<./sections/3. Scaling Patterns/3.2. Type-only boundaries import type bulk and erasable scale.md>)

1. **Behavior-preserving conversion:** distinguish erased imports from retained initialization and review actual emitted entry points.
2. **Bounded syntax gates:** separate erasable syntax from loader, implementation, host and toolchain compatibility.
3. **Installed type-only contracts:** pack a real declaration package, execute an erased consumer and reproduce a retained empty-import failure.

### [3.3. Editor performance at scale budgets and tuning](<./sections/3. Scaling Patterns/3.3. Editor performance at scale budgets and tuning.md>)

1. **Actual membership:** inspect roots and dependency closure, including imported files excluded from root discovery.
2. **Redirect evidence:** separate declaration-boundary settings and available maps from observed provider navigation and latency.
3. **Operational diagnosis:** distinguish configured projects from processes and compare named requests before changing budgets or restarting services.

---

## 4. Important points to remember (performance and scaling)

### [4.1. Performance checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Performance checklist mental models mentors insist on.md>)

1. **Equivalent measurements:** establish successful checking and preserved contracts before comparing counters or timings.
2. **Purposeful projects:** distinguish dependency, output and consumer boundaries from fixed partition thresholds.
3. **Investigation budgets:** interpret measured growth without inventing per-key costs or rejecting legitimate features automatically.
4. **Separate verification contracts:** check state, complete artifacts and task coverage without treating force or a schedule as completeness proof.

---

## 5. Common pitfalls → production bugs (performance and scaling)

### [5.1. Real production bugs caused by scaling misunderstandings](<./sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by scaling misunderstandings.md>)

1. **Incomplete checking:** diagnose lower counts from failed recursion and preserve semantic contracts before claiming an optimization.
2. **Different cycle failures:** distinguish finite reference-cycle diagnostics from runtime initialization errors and dry-run coverage.
3. **Incomplete artifacts:** reproduce missing and obsolete outputs without inferring cache corruption from every green/red difference.
4. **Curated-cycle limits:** trace an actual named-re-export failure and identify what static lint and entry tests cover.

---

## 6. Interview questions and answers (performance and scaling)

### [6.1. Common interview QA — performance project references and scaling](<./sections/6. Interview questions and answers/6.1. Common interview QA performance project references and scaling.md>)

1. **Investigating costs:** reason from completed checks, measured workloads and preserved semantic contracts.
2. **Reference boundaries:** justify splits without fixed thresholds and explain behavior changes behind stable declarations.
3. **Build trust:** distinguish invocation status, artifacts, cleanup and selected task coverage.
4. **Editor diagnosis:** compare actual providers, document state, dependency membership and specific requests.
5. **Declaration packages:** explain erased versus retained imports and implementation requirements using the installed consumer.

---

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries — what is covered elsewhere](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **Configuration and measurement:** establish the intended checking/emitting program before comparing costs.
2. **Tool and editor boundaries:** separate CLI/API compatibility, tool operation and observed editor symptoms.
3. **Semantic preservation:** evaluate caps and alternative type representations against actual accepted/rejected contracts.
4. **Graphs and consumers:** distinguish source imports, project references, declaration providers and consumed artifacts.
5. **Release evidence:** integrate measured scaling results with published upgrade and consumer gates.

[← Back to track](<../README.md>)
