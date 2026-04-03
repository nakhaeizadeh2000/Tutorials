## 1. Advanced constructor design goals (beyond the basics)

### [1.1. When a constructor should *not* do the work](<./sections/1. Advanced constructor design goals/1.1. When a constructor should not do the work.md>)

1. **Hot-path constructors vs “setup objects”** (fast allocation, minimal branching, no I/O or ambient lookups)
2. **Moving work out of constructors** (lazy fields, explicit `Initialize`/`WarmUp` methods, caches/factories)
3. **Performance lens** (tiered JIT, inlining, GC pressure, and how heavy constructors hurt p95/p99 latency)

### [1.2. Designing invariants for long-lived vs short-lived objects](<./sections/1. Advanced constructor design goals/1.2. Designing invariants for long lived vs short lived objects.md>)

1. **“Always-valid” domain objects vs tolerant data-carrier types**
2. **Long-lived objects and memory locality** (constructor choices that affect layout, size, and cache friendliness)
3. **Short-lived objects and allocation strategy** (value-like patterns, pooling, `stackalloc`/`Span<T>`-friendly design)

### [1.3. Choosing between constructors, `required`, and factories (C# 15 era)](<./sections/1. Advanced constructor design goals/1.3. Choosing between constructors required and factories.md>)

1. **When a constructor is the right contract** (simple invariants, cheap init, clear required data)
2. **When `required` + object initializers shine, and when they are a trap**
3. **Factories and static `Create` methods** (versioning, async, caching, and DI-friendly design)

## 2. Constructor chaining and hierarchy design (deep dive)

### [2.1. Chaining within a single type: one core constructor to rule them all](<./sections/2. Constructor chaining and hierarchy design/2.1. Chaining within a single type one core constructor.md>)

1. **Core vs convenience constructors** (`this(...)` to centralize validation and invariant setup)
2. **Avoiding overload soup** (few well-named overloads vs many ambiguous signatures)
3. **Perf-aware chaining** (no duplicated work; avoid allocating intermediate objects in every chain step)

### [2.2. Base and derived constructors in complex hierarchies](<./sections/2. Constructor chaining and hierarchy design/2.2. Base and derived constructors in complex hierarchies.md>)

1. **What base must guarantee vs what derived may assume**
2. **Stabilizing initialization order across deep hierarchies** (no virtual calls; no leaking `this` before fully initialized)
3. **Design alternatives** (prefer composition over deep inheritance when ctor complexity explodes)

### [2.3. Advanced chaining patterns: optional dependencies, feature flags, and defaults](<./sections/2. Constructor chaining and hierarchy design/2.3. Advanced chaining patterns optional dependencies feature flags defaults.md>)

1. **Encoding optional behavior** (named static factories vs boolean/enum parameters vs option objects)
2. **Defaults that age well** (avoiding signature churn; using well-versioned option types)
3. **Handling breaking changes** (obsoleting ctors, soft-deprecating overloads, and migration strategies)

## 3. Non-public constructors: private, protected, and internal

### [3.1. Private constructors and controlled instantiation](<./sections/3. Non public constructors/3.1. Private constructors and controlled instantiation.md>)

1. **Limiting creation to factories and static `Create` methods**
2. **Singleton-like patterns (and better modern alternatives)** (DI singletons, `Lazy<T>`, and avoiding global state)
3. **Testing and extensibility trade-offs** (private vs internal, test-only helpers, and source generators)

### [3.2. Protected constructors and inheritance boundaries](<./sections/3. Non public constructors/3.2. Protected constructors and inheritance boundaries.md>)

1. **Shaping extensible base types** (what initialization responsibility is pushed to derived classes)
2. **Sealing constructors vs sealing types** (when to allow derivation; when to force composition)
3. **Versioning base types safely** (adding parameters, overloads, or `protected` helpers without breaking consumers)

### [3.3. Internal constructors, friends, and encapsulation across assemblies](<./sections/3. Non public constructors/3.3. Internal constructors and encapsulation across assemblies.md>)

1. **Internal-only construction for framework/core types** (public read-only surfaces, internal mutability)
2. **`InternalsVisibleTo` and its risks** (test-only vs product cross-assembly dependencies)
3. **API design guidelines** (public minimal surface, richer internal construction options)

## 4. Constructors with DI, frameworks, and source generators (advanced usage)

### [4.1. Constructor design for DI containers](<./sections/4. Constructors with DI frameworks and source generators/4.1. Constructor design for DI containers.md>)

1. **Preferred patterns** (single “main” ctor, explicit lifetimes, avoiding optional service parameters)
2. **Avoiding service locator and hidden dependencies** (no `IServiceProvider` or `GetService` in ctors)
3. **Perf-sensitive DI scenarios** (constructor selection, activation cost, and trim-friendly choices)

### [4.2. Constructors with serializers, ORMs, and mappers](<./sections/4. Constructors with DI frameworks and source generators/4.2. Constructors with serializers ORMs and mappers.md>)

1. **Balancing invariants with framework requirements** (private/protected parameterless ctors, factory patterns)
2. **Using parameterized ctors for deserialization** (source-generated serializers, nullability, and validation)
3. **Persisted models vs domain models** (mapping strategies that avoid weakening constructor contracts)

### [4.3. Source generators and compile-time construction helpers](<./sections/4. Constructors with DI frameworks and source generators/4.3. Source generators and compile time construction helpers.md>)

1. **Generator-assisted factories and builders** (strongly-typed configuration, options binding)
2. **Reducing reflection costs** (generated activators vs `Activator.CreateInstance`, trimming/AOT friendliness)
3. **Designing ctors that are generator-friendly** (simple signatures, clear attributes, no ambient state)

## 5. Advanced points to remember about constructors (correctness + performance)

### [5.1. Constructor performance checklist (C# 15, modern .NET)](<./sections/5. Advanced points to remember/5.1. Constructor performance checklist.md>)

1. **No sync-over-async, no blocking I/O, no expensive reflection in hot-path ctors**
2. **Minimize allocations and indirections** (avoid LINQ, `params` arrays, hidden closures in ctors)
3. **Understand first-touch costs** (static initialization, JIT, caches; warm-up vs steady state)

### [5.2. Thread-safety, publication, and immutability](<./sections/5. Advanced points to remember/5.2. Thread safety publication and immutability.md>)

1. **Safe publication patterns** (fully constructed before sharing; immutable state to reduce locks)
2. **Avoiding data races on partially constructed objects** (no `this` leaks, no virtual calls)
3. **Where to learn more** (`Cuncurrent & Parallel` and `Fields` domains for deep memory-model details)

### [5.3. Versioning constructors and public APIs over time](<./sections/5. Advanced points to remember/5.3. Versioning constructors and public APIs over time.md>)

1. **Adding vs changing constructors** (never break existing required parameters without a migration story)
2. **Obsoleting ctors with guidance** (`[Obsolete]` messages that point to new patterns: factories, options types)
3. **Library vs app constraints** (semantic versioning, binary compatibility, and serializer/ORM integration)

## 6. Interview questions and answers (advanced constructors focus)

### [6.1. Interview Q&A: advanced constructor chaining and initialization order](<./sections/6. Interview questions and answers/6.1. Interview QA advanced chaining and initialization order.md>)

1. **Explain complex chaining with `this(...)` and `base(...)` and how invariants are centralized**
2. **Discuss why virtual calls in constructors are dangerous and how to refactor away from them**
3. **Walk through safe publication and thread-safety considerations during object construction**

### [6.2. Interview Q&A: non-public constructors, DI, and frameworks](<./sections/6. Interview questions and answers/6.2. Interview QA non public constructors DI and frameworks.md>)

1. **When to use private/protected/internal constructors and how they interact with DI and serializers**
2. **Compare constructors vs factories vs `required` members in modern C# (through C# 15)**
3. **Discuss performance trade-offs in DI-heavy codebases and how constructor design can help**

### [6.3. Interview Q&A: performance, memory, and versioning](<./sections/6. Interview questions and answers/6.3. Interview QA performance memory and versioning.md>)

1. **Identify performance anti-patterns in constructor-heavy code (huge graphs, I/O, sync-over-async)**
2. **Explain how constructor design affects GC behavior, allocation rate, and cache locality**
3. **Describe how you would evolve a widely-used constructor signature without breaking consumers**

## 7. Overlaps to avoid (how this domain relates to existing ones)

### [7.1. Boundaries: what is covered elsewhere in this repo](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **Core constructor semantics, basic kinds, and introductory patterns** (covered in `Constructors` → fundamentals and kinds)
2. **General OOP, encapsulation, and inheritance basics** (covered in `CSharp Basic Object Oriented Programming` and `Inheritance and Hiding and Overriding`)
3. **Method overload resolution and optional parameters in general** (covered in `Methods`)
4. **Deep concurrency, memory model, and publication theory** (covered in `Cuncurrent & Parallel` and `Fields`)
5. **Runtime/GC/JIT big picture and language evolution** (covered in `Fundamental Theories` and `CSharp language basics`)

