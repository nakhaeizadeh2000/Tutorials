## Update C# 15 (feature map + where it lives in this repo)

This domain is an **index** for C# 15-era features. Treat it as a **navigation map** that points to the best topical domains in this repo (and avoids duplicating deep explanations).

## 1. How to think about “C# 15 features” in modern .NET

### [1.1. Feature strategy for modern C# (language vs libraries vs runtime)](<../Fundamental Theories/sections/7. CSharp versions/7.2. Feature strategy for modern CSharp.md>)

1. **Separate concerns**: language syntax vs BCL APIs vs runtime behavior (GC/JIT)
2. **Measure real workloads**: CPU, allocations, thread pool pressure, and tail latency (p99) matter more than micro-benchmark trivia
3. **Prefer modern defaults**: nullable context, analyzers, source generators, and AOT-aware patterns when applicable

## 2. C# 15 language features (repo pointers)

### [2.1. Collection expressions — spread / `with` on collections](<../Arrays/sections/2. Creating Arrays/2.1. Creating arrays initialization forms including modern collection expressions.md>)

1. **What**: collection expression updates including applying `with` to existing collection targets (see Microsoft Learn for exact syntax and supported types)
2. **Perf**: still allocation- and type-dependent—prefer spans/views in hot paths when semantics allow
3. **Overlap**: [Update C# 12](<../Update CSharp 12/README.md>) §2.1 (collection expressions baseline)

### 2.2. Union types / discriminated algebraic data types (experimental / preview-era)

1. **What**: language support for closed sum types (names and rules evolve—follow the current SDK preview docs)
2. **Where in repo**: extend `CSharp language basics` or `Type System` domains when stable; until then use Microsoft Learn “What’s new in C# 15”
3. **Design**: exhaustiveness checking and codegen differ from class hierarchies—prefer for pure domain modeling, not every DTO

### 2.3. Experimental features and SDK switches

1. **What**: some C# 15 items ship behind `/langversion:preview` or experimental flags
2. **Rule**: pin SDK + document flags for teams; do not rely on experimental semantics in shared libraries without a migration plan

### 2.4. Additional C# 15 items

1. **Upstream list**: Microsoft Learn **What’s new in C# 15** is authoritative for the full set (keywords, syntax sugar, library pairings)
2. **This repo**: add topical sections first, then link them here—keep this file as an index only

## 3. Useful “already covered” anchors in this repo (examples)

### [3.1. Primary constructors + `required` members (initialization contracts)](<../Constructors/sections/2. Constructor kinds/2.2. Primary constructors and required members.md>)

1. **Why it matters**: fewer invalid transient states at compile time
2. **Still validate**: runtime validation remains necessary at untrusted boundaries
3. **Perf note**: syntax-only; performance is dominated by initialization work and allocations

### [3.2. Pattern matching catalog (C# 9–15)](<../CSharp language basics/sections/5. Branching and decision making/5.4. Pattern matching catalog type relational property list slice var (CSharp 9 through 15).md>)

1. **Single place** to extend when new pattern forms ship
2. **Cross-version**: pair with [Update C# 9](<../Update CSharp 9/README.md>) §5

## 4. Overlaps to avoid

1. **Deep topical explanations** belong in their natural domains (this folder is only an index).
2. **Runtime/GC/JIT theory** belongs in `Fundamental Theories` (link from here, don’t duplicate).
3. **Library/runtime release notes** (BCL/ASP.NET/etc.) should be indexed separately from *language* features to avoid mixing scopes.
