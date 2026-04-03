## 0. Language version maps (C# 9-15)

These **indexes** list what shipped when and point into topical domains. Deep dives are in the sections below. [Update C# 9](<../Update CSharp 9/README.md>) ? [10](<../Update CSharp 10/README.md>) ? [11](<../Update CSharp 11/README.md>) ? [12](<../Update CSharp 12/README.md>) ? [13](<../Update CSharp 13/README.md>) ? [14](<../Update CSharp 14/README.md>) ? [15](<../Update CSharp 15/README.md>).

## 1. Partial types (why they exist and how to use them safely)

### [1.1. Partial classes: the real purpose (code generation + separation of concerns)](<./sections/1. Partial types/1.1. Partial classes purpose codegen separation.md>)

1. **What `partial` actually means** (one logical type split across files; compiled as one)
2. **Best uses** (source generators, designer code, interop/auto-generated code, large type partitioning)
3. **Costs** (discoverability, "type is everywhere", review difficulty, and accidental coupling)

### [1.2. Rules and constraints for partial classes (what must match across parts)](<./sections/1. Partial types/1.2. Partial type rules constraints.md>)

1. **What must agree** (namespace, type name, kind, generic parameters, accessibility)
2. **What can differ** (members per file; attributes on parts; docs and analyzers)
3. **Common compiler errors** (mismatched constraints/modifiers; duplicate members; inconsistent accessibility)

### [1.3. Partial types beyond classes: structs, records, and interfaces (C# 15 era)](<./sections/1. Partial types/1.3. Partial structs records interfaces.md>)

1. **Partial structs and records** (when it helps; pitfalls with invariants and generated members)
2. **Partial interfaces** (rare but useful with generated members / incremental augmentation)
3. **Modern guidance** (keep one "owner" file; isolate generated code; keep public surface obvious)

### [1.4. Partial properties and partial indexers (C# 13+)](<./sections/1. Partial types/1.4. Partial properties and indexers CSharp 13.md>)

1. **Declaring vs implementing** parts (source generators, codegen boundaries)
2. **Design rule** (keep the public surface discoverable; avoid scattering logic)
3. **Performance** (no extra runtime dispatch; still avoid expensive accessors)

## 2. Partial methods (compile-time composition and source generator patterns)

### [2.1. Partial methods fundamentals: declaration vs implementation (no runtime dispatch)](<./sections/2. Partial methods/2.1. Partial methods fundamentals declaration implementation.md>)

1. **Why they exist** (optional hooks for generated code without reflection or virtual dispatch)
2. **Semantics** (compile-time binding; how calls behave when no implementation exists)
3. **Design guidance** (use for narrow hooks; avoid using as "events" or public extensibility)

### [2.2. Partial methods in modern C#: accessibility, return values, and attributes](<./sections/2. Partial methods/2.2. Partial methods modern rules accessibility return attributes.md>)

1. **What modern C# allows** (non-void returns, accessibility, attributes, generics?when paired correctly)
2. **Source generator patterns** (compile-time augmentation; analyzability; avoiding reflection)
3. **Performance framing** (no allocations by default; avoid capturing/closures in hot hooks)

## 3. Static classes (type-level design, correctness, and performance)

### [3.1. Static class basics: what a `static class` guarantees (and what it doesn't)](<./sections/3. Static classes/3.1. Static class guarantees and limits.md>)

1. **Rules** (no instances; only static members; sealed + abstract under the hood)
2. **Good use cases** (pure functions, cohesive helpers, extension method containers)
3. **Bad use cases** (hidden global state, "service locator", static mutable dependencies)

### [3.2. Static classes vs alternatives: instance services, modules, and extension methods](<./sections/3. Static classes/3.2. Static classes vs alternatives DI extension methods.md>)

1. **Static vs DI** (testability, lifetimes, substitutability, composition roots)
2. **Static vs singleton** (global state and contention; why singleton is not a "pattern" in most modern apps)
3. **Extension method hygiene** (namespace placement, discoverability, and ambiguity management)

### [3.3. Static initialization and static state: keep it predictable and safe](<./sections/3. Static classes/3.3. Static initialization and shared state.md>)

1. **Initialization costs** (cold start p99; type initializer exceptions; "first touch" latency spikes)
2. **Thread-safety** (publication, `Lazy<T>`, `Interlocked`, and avoiding lock contention)
3. **Memory pressure** (static caches retain memory for process lifetime; bounded caches and eviction)

### [3.4. Module initializers (`[ModuleInitializer]`) - assembly load hooks](<./sections/3. Static classes/3.4. Module initializers ModuleInitializer attribute trimming and AOT.md>)

1. **When** (rare: registration, early wiring); **avoid** heavy I/O and ambiguous ordering
2. **Reliability** (exceptions poison load); **trimming/AOT** constraints
3. **Prefer** explicit app startup for most production systems

## 4. Enumerations (enums) as a domain modeling tool

### [4.1. Enum fundamentals: underlying types, default values, and versioning](<./sections/4. Enumerations/4.1. Enum fundamentals underlying type defaults versioning.md>)

1. **Underlying storage** (`byte`/`int`/`long` etc.; interop and memory layout realities)
2. **Default value trap** (`default(TEnum)` is \(0\); why "0 means Unknown" is a design choice)
3. **Public API versioning** (adding values, removing values, renaming, and serialization compatibility)

### [4.2. Flags enums (`[Flags]`): bitwise semantics done correctly](<./sections/4. Enumerations/4.2. Flags enums bitwise semantics.md>)

1. **Correct patterns** (power-of-two values; `None = 0`; combining and testing flags)
2. **Common mistakes** (non-unique bits; mixing "set" and "mode"; broken ToString/serialization expectations)
3. **Performance notes** (bit ops are cheap; the real cost is parsing/formatting/allocations)

### [4.3. Enums vs better models: when to use enum, when to use types (C# 15 era)](<./sections/4. Enumerations/4.3. Enum vs discriminated union patterns.md>)

1. **When enums are perfect** (closed set, stable list, low ceremony, interop)
2. **When enums hurt** (open sets, attached data, evolving variants, invalid combinations)
3. **Modern alternatives** (polymorphism, records, "smart enum" patterns, union-like modeling with pattern matching)

## 5. Important points to remember (mentor-grade checklist)

### [5.1. Checklist: correctness, maintainability, performance](<./sections/5. Important points/5.1. Checklist correctness maintainability performance.md>)

1. **Partial types** (avoid scattering; keep an "entry" file; isolate generated code)
2. **Static classes** (pure is safe; mutable static is shared state?treat as concurrency + lifetime problem)
3. **Enums** (treat as a public contract; plan `Unknown = 0`; define serialization/versioning strategy)

### [5.2. Production pitfalls you'll actually hit](<./sections/5. Important points/5.2. Production pitfalls and anti-patterns.md>)

1. **Static global state** (tests become order-dependent; memory leaks by design; multi-tenant bugs)
2. **Enum versioning and serialization** (deserializing unknown values; forwards/backwards compatibility)
3. **Partial misuse** (merge conflicts, "hidden" members, and onboarding/debugging friction)

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere in this repo](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Static fields + memory model + safe publication** are covered deeply in `Fields` and `Cuncurrent & Parallel`
2. **Static methods and pure function design** are covered in `Methods`
3. **Namespaces and `using static` / extension method placement** are covered in `Namespaces`
4. **General type system basics (value vs reference, pattern matching)** are covered across `Fundamental Theories` and `CSharp language basics`

## 7. Interview questions and answers (partial, static, enums ? C# 15 era)

### [7.1. Interview Q&A: partial classes/methods, static classes, and enums](<./sections/7. Interview Q and A/7.1. Interview questions partial static enums.md>)

1. **When to use partial types** (generated code boundaries; separation; why "just to split a big file" is usually a smell)
2. **Partial methods semantics** (what happens if there is no implementation; how source generators use them)
3. **Static class vs singleton vs DI** (testability, lifetimes, concurrency, hidden dependencies)
4. **Enum design** (`Unknown = 0`, underlying types, `[Flags]` correctness, and versioning/serialization)
5. **Performance questions** (static initialization costs, contention, allocations in enum parsing/formatting)


