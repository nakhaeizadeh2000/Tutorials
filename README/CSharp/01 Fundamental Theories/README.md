## 0. Language version maps (C# 9-15)

These **indexes** list what shipped when and point into topical domains. Deep dives are in the sections below. [Update C# 9](<../30 Update CSharp 9/README.md>) · [10](<../31 Update CSharp 10/README.md>) · [11](<../32 Update CSharp 11/README.md>) · [12](<../33 Update CSharp 12/README.md>) · [13](<../34 Update CSharp 13/README.md>) · [14](<../35 Update CSharp 14/README.md>) · [15](<../36 Update CSharp 15/README.md>).

## 1. .NET and C# fundamentals & history (big picture)

### [1.1. What ".NET" means: runtime vs libraries vs tooling](<./sections/1. .NET and CSharp fundamentals & history/1.1. What .NET means runtime vs libraries vs tooling.md>)

1. **Runtime vs BCL vs SDK (CLR/CoreCLR, `System.*`, `dotnet` CLI/SDK workflow)**
2. **App model (console/web/worker/desktop; framework-dependent vs self-contained; x64/arm64 + OS targets)**
3. **Performance framing (CPU vs runtime services; allocations/LOH; fewer sync points and syscalls)**

### [1.2. CLI / CTS / CLS and standardization](<./sections/1. .NET and CSharp fundamentals & history/1.2. CLI CTS CLS and standardization.md>)

1. **What CLI standardizes (CTS, metadata, IL/CIL, execution model)**
2. **Language interoperability (CLS rules; public API constraints; common interop breakers)**
3. **Why it matters (reflection/trimming/analyzers; a standard describes behavior, not bit-for-bit performance across runtimes)**

### [1.3. CLR/CoreCLR: what it really does](<./sections/1. .NET and CSharp fundamentals & history/1.3. CLR CoreCLR responsibilities.md>)

1. **Execution (JIT + tiering, inlining/devirtualization; AOT trade-offs; exceptions costs)**
2. **Memory management (generational GC; server vs workstation; LOH/pinning; allocation model)**
3. **Concurrency plumbing (ThreadPool; async I/O integration; sync costs: contention/context switches/cache lines)**

### [1.4. .NET product evolution: Framework to Core to unified .NET](<./sections/1. .NET and CSharp fundamentals & history/1.4. NET evolution Framework Core unified.md>)

1. **Why .NET Framework is legacy now (Windows-only, GAC, servicing model; AppDomains context)**
2. **What .NET Core changed (cross-platform, side-by-side runtimes, modern hosting + dependency model, `dotnet` tooling)**
3. **Unified .NET (workloads; publish-time features like trimming/single-file/R2R/AOT; upgrade-driven perf gains)**

## 2. .NET architecture (assembly, IL, JIT/AOT, GC, deployment)

### [2.1. Assemblies, references, and the loader](<./sections/2. NET architecture/2.1. Assemblies references loader.md>)

1. **Assembly basics (`.dll`/`.exe`, manifest/metadata/resources, strong naming, satellite assemblies)**
2. **Dependency resolution (`deps.json`; NuGet vs runtime assemblies; redirects vs modern resolution)**
3. **Practical guidance (shallow dependency graphs; reflection vs trimming/AOT; explicit versioning strategy)**

### [2.2. IL, JIT, tiered compilation, and (native) AOT](<./sections/2. NET architecture/2.2. IL JIT tiered compilation AOT.md>)

1. **JIT in production (tiered compilation; PGO where applicable; micro-benchmark pitfalls)**
2. **AOT options (ReadyToRun vs native AOT; startup/throughput/size trade-offs; feature constraints)**
3. **Performance guardrails (optimize allocations first; separate cold-start vs steady-state; avoid anti-JIT patterns)**

### [2.3. GC basics for application developers](<./sections/2. NET architecture/2.3. GC basics for app developers.md>)

1. **Generations and pauses (Gen0/1/2; server vs workstation GC; latency modes)**
2. **Allocation patterns (LINQ/closures/boxing/string churn; `ArrayPool<T>`; LOH/pinning/fragmentation)**
3. **Best practices (`Span<T>` where it helps; avoid premature pooling; prefer streaming over materializing)**

### [2.4. Deployment and versioning model (modern .NET)](<./sections/2. NET architecture/2.4. Deployment and versioning model.md>)

1. **Deployment modes (framework-dependent vs self-contained vs single-file: meaning + limits)**
2. **Servicing and upgrades (security/perf patches; LTS vs STS cadence; upgrade planning)**
3. **Practical advice (repeatable builds; clear deployable units; publish settings as measurable knobs)**

## 3. Visual Studio + tooling fundamentals (modern workflow)

### [3.1. Visual Studio: projects, solutions, and debugging model](<./sections/3. Visual Studio and tooling/3.1. Visual Studio projects solutions debugging.md>)

1. **Solutions and projects (`.sln` vs SDK-style `.csproj`; multi-targeting; build configurations)**
2. **Debugging essentials (breakpoints; exception settings; CPU/memory/async profilers)**
3. **Mentor notes (debug vs prod behavior; reproducible perf tests; IDE + `dotnet` CLI proficiency)**

### [3.2. dotnet CLI + SDK: restore/build/test/run/publish](<./sections/3. Visual Studio and tooling/3.2. dotnet CLI and SDK basics.md>)

1. **Build pipeline (`restore`, `build`, `test`; `run` vs `publish`; Debug vs Release pitfalls)**
2. **Package management (central package mgmt; lock files; vulnerability scanning/supply-chain hygiene)**
3. **Performance-first guidance (fast inner loop; trimming/AOT only when it fits; publish settings as hypotheses)**

## 4. C# fundamentals (objects, classes, members, and composition)

### [4.1. C# program structure: types, members, and visibility](<./sections/4. CSharp fundamentals/4.1. Types members visibility.md>)

1. **Classes vs structs vs records (semantics; copy costs; runtime/interop constraints)**
2. **Members (fields vs properties; methods vs local functions; events/callback lifetimes)**
3. **Performance notes (avoid public fields in libs; prefer `readonly` where it helps; know common allocation sources)**

### [4.2. Object lifetime and resource management](<./sections/4. CSharp fundamentals/4.2. Object lifetime and resource management.md>)

1. **GC vs deterministic cleanup (GC does not close handles; `IDisposable`/`using`; `IAsyncDisposable`/`await using`)**
2. **Ownership boundaries (who creates/disposes; shared mutable state strategy; composition root/DI patterns)**
3. **Good to know (finalizers as last resort; pools/caches pressure; timeouts + cancellation as lifetime concerns)**

## 5. Namespaces, assemblies, and API surface design

### [5.1. Namespaces vs folders vs assemblies](<./sections/5. Namespaces and assemblies/5.1. Namespaces vs folders vs assemblies.md>)

1. **Namespace rules (avoid leaking internals; keep namespaces stable; avoid mega-namespaces)**
2. **Assembly boundaries (split vs single project; versioning blast radius; internals visibility/testing)**
3. **Mentor notes (maintainability first; small coherent public API; explicit deps and no cycles)**

## 6. C# lexical basics: tokens and what the compiler sees

### [6.1. Language tokens and syntax categories](<./sections/6. CSharp language tokens/6.1. Language tokens.md>)

1. **Tokens (identifiers/keywords/literals/operators; trivia; contextual keywords)**
2. **Literals (numeric readability + overflow; string literal forms; interpolation + allocations)**
3. **Good to know (parsing vs execution; compiler-generated constructs; clarity over token golf)**

## 7. C# versions (through C# 15): how to think about language evolution

### [7.1. Versioning model: language vs runtime vs libraries](<./sections/7. CSharp versions/7.1. Language vs runtime vs libraries versioning.md>)

1. **Language version (compiler features; generators/analyzers; feature availability vs TFMs)**
2. **Runtime version (JIT/GC/threading changes; hosting/diagnostics; AOT/trimming maturity)**
3. **Library/API version (new BCL APIs; "prefer new API" patterns; obsolete vs not-preferred)**

### [7.2. Feature strategy: learn what changes how you design](<./sections/7. CSharp versions/7.2. Feature strategy for modern CSharp.md>)

1. **Correctness and expressiveness (nullability; pattern matching; records/required members/immutability)**
2. **Performance and control (`Span<T>` + ref safety; async streams/primitives; source generation vs reflection)**
3. **Maintainability (file-scoped namespaces; modern/global `using` patterns; analyzers/formatting for consistency)**

### 7.3. Per-version feature indexes (C# 9-15)

These **Update** domains list what shipped when and point into topical sections in this repo: [Update C# 9](<../30 Update CSharp 9/README.md>) · [10](<../31 Update CSharp 10/README.md>) · [11](<../32 Update CSharp 11/README.md>) · [12](<../33 Update CSharp 12/README.md>) · [13](<../34 Update CSharp 13/README.md>) · [14](<../35 Update CSharp 14/README.md>) · [15](<../36 Update CSharp 15/README.md>). Use them after sections **7.1** and **7.2** when you need a **feature-by-version** map rather than theory-only framing.

## 8. C# naming conventions (modern, idiomatic, API-friendly)

### [8.1. Naming that scales: readability, API design, and tooling](<./sections/8. CSharp naming conventions/8.1. Naming conventions.md>)

1. **Identifiers (`PascalCase` for types/public; `camelCase` for locals/params; meaningful names over abbreviations)**
2. **APIs and architecture (names reveal sync/async intent; `*Async` conventions; avoid catch-all "Manager/Helper/Util")**
3. **Performance-aware naming (signal allocations like `ToArray`; prefer Try-pattern; analyzer-driven consistency)**

