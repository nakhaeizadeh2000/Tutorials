# Performance, Project References and Scaling

How TypeScript *scales* — check-time performance (measuring with `--extendedDiagnostics`/`--generateTrace`, budgeting instantiations, carving out `TS2589` hot spots), project-references architecture (composite partitioning, `tsc -b` orchestration, incremental `.tsbuildinfo` discipline), and scaling patterns (codebase partitioning, type-only boundaries at scale, editor performance budgets). Flag *configuration* lives in [13 Configuration](<../13 Configuration and Compiler Options/README.md>) ([3.2. declaration composite](<../13 Configuration and Compiler Options/sections/3. Modules Emit and Projects/3.2. declaration composite project references.md>)); tsserver *debugging* lives in [16 Tooling](<../16 Tooling Language Server and Ecosystem/README.md>) ([3.1. Debugging tsserver](<../16 Tooling Language Server and Ecosystem/sections/3. Debugging and Ecosystem/3.1. Debugging tsserver logs and responsiveness.md>)) — this domain owns scale *engineering*: measuring, partitioning, and budgeting so large programs stay fast.

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

1. **Mapped-type cost control** (homomorphic vs fresh mapping — key-count multiplication, modifier arithmetic per 09/1.2).
2. **Union-size discipline** (large-union distribution costs — splitting, indexing, caching strategies per 07/09).
3. **Hover-budget readability** (expanded-type costs — display types vs computation types, `NoInfer`-adjacent restraint).

---

## 2. Project References and Builds

### [2.1. Composite partitioning and references architecture](<./sections/2. Project References and Builds/2.1. Composite partitioning and references architecture.md>)

1. **Partitioning by change-rate** (stable leaves vs churning apps — references following dependency direction, never cycles).
2. **`composite` + `declaration` mechanics at scale** (emit once, check against declarations — downstream speed from upstream emit).
3. **Reference-graph hygiene** (DAG enforcement, layer rules, barrel discipline — architecture reviewable in `tsconfig` files).

### [2.2. Incremental builds and tsbuildinfo discipline](<./sections/2. Project References and Builds/2.2. Incremental builds and tsbuildinfo discipline.md>)

1. **`.tsbuildinfo` contracts** (what invalidates — version changes, config edits, affected-file graphs — staleness poisoning per 16/3.1).
2. **Incremental vs watch vs build modes** (`--incremental`, `--watch`, `tsc -b` — which mode per workflow, cache locations per CI).
3. **Cache poisoning prevention** (clean-build verification schedules, content-hash keys, `.tsbuildinfo` in `.gitignore` + CI caching).

### [2.3. Solution builds and CI orchestration with tsc b](<./sections/2. Project References and Builds/2.3. Solution builds and CI orchestration with tsc b.md>)

1. **`tsc -b` orchestration** (topological builds, `--force`/`--dry` semantics, solution `tsconfig` files referencing projects).
2. **CI job topology** (per-project jobs vs solution builds — caching per partition, failure localization per reference).
3. **Affected-only verification** (changed-project testing — type tests scoped per reference, full-suite schedules).

---

## 3. Scaling Patterns

### [3.1. Codebase partitioning boundaries layers and barrels](<./sections/3. Scaling Patterns/3.1. Codebase partitioning boundaries layers and barrels.md>)

1. **Layered boundaries** (domain/app/infra layering — imports flowing inward, `tsconfig` paths enforcing, tests per layer).
2. **Barrel discipline at scale** (cycle-surface control per 12/1.1 — curated barrels vs deep imports, cycle detection in CI).
3. **API-layer typing** (public contracts per partition — surface probes per 17/3.2 scoped per reference).

### [3.2. Type-only boundaries import type bulk and erasable scale](<./sections/3. Scaling Patterns/3.2. Type-only boundaries import type bulk and erasable scale.md>)

1. **`import type` bulk conversion** (type-traffic stating per 12/1.2 — emit independence at scale, transpile-per-file safety).
2. **Erasable-syntax enforcement** (trio standard per 13/2.3 — isolated transpilers per partition, no cross-file type dependencies).
3. **Type-only packages** (`.d.ts`-only partitions — contract packages with zero runtime, versioned independently).

### [3.3. Editor performance at scale budgets and tuning](<./sections/3. Scaling Patterns/3.3. Editor performance at scale budgets and tuning.md>)

1. **Program-size budgets** (file/symbol ceilings per editor project — `maxNodeModuleJsDepth`, include scoping per 16/3.1).
2. **`disableSourceOfProjectReferenceRedirect` triage** (declaration-redirect tradeoffs — navigation vs responsiveness per project).
3. **Multi-project editor setup** (per-partition tsservers — VS Code multi-root, solution-aware loading, restart runbooks).

---

## 4. Important points to remember (performance and scaling)

### [4.1. Performance checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Performance checklist mental models mentors insist on.md>)

1. **Measure before cutting** (diagnostics + traces first — numbers routing effort, folklore ignored).
2. **Partition by change-rate** (stable leaves, churning apps — references as architecture, not paperwork).
3. **Budget instantiations and program size** (ceilings enforced in CI — growth loud, drift blocked).
4. **Cache honestly, verify cleanly** (incremental for speed, clean schedules for truth — both, never either-or).

---

## 5. Common pitfalls → production bugs (performance and scaling)

### [5.1. Real production bugs caused by scaling misunderstandings](<./sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by scaling misunderstandings.md>)

1. **Unbudgeted mapped type took CI from 4 to 47 minutes** (key-count multiplication unmeasured — carve-out fix, budget gate added).
2. **Cyclic project references deadlocked `tsc -b` on release day** (cycle unnoticed without graph checks — DAG enforcement added).
3. **Stale `.tsbuildinfo` shipped week-old declarations downstream** (incremental-only CI — clean-build schedule added, poisoning ended).
4. **Barrel-cycle crash at startup after a "harmless" re-export** (cycle surface grown silently — barrel lint + deep-import rule added).

---

## 6. Interview questions and answers (performance and scaling)

### [6.1. Common interview QA — performance project references and scaling](<./sections/6. Interview questions and answers/6.1. Common interview QA performance project references and scaling.md>)

1. **How do you find what's slow in `tsc` — and what do you do about it?** (diagnostics → traces → hot files → carve-outs/budgets).
2. **When do project references pay off — and what breaks without them?** (partitioning thresholds, DAG rules, downstream speed).
3. **Incremental vs clean builds — when do you trust each, and how do you verify?** (cache contracts, poisoning, schedules).
4. **How do you keep editors fast on huge repos — in what order?** (scoping, redirect triage, multi-project, budgets).
5. **What belongs in a type-only package — and why separate it?** (contracts versioned independently, zero-runtime partitions).

---

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries — what is covered elsewhere](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **Configuration and measurement:** establish the intended checking/emitting program before comparing costs.
2. **Tool and editor boundaries:** separate CLI/API compatibility, tool operation and observed editor symptoms.
3. **Semantic preservation:** evaluate caps and alternative type representations against actual accepted/rejected contracts.
4. **Graphs and consumers:** distinguish source imports, project references, declaration providers and consumed artifacts.
5. **Release evidence:** integrate measured scaling results with published upgrade and consumer gates.

[← Back to track](<../README.md>)
