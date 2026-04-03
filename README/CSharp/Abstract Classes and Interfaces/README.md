## 0. Language version maps (C# 9-15)

These **indexes** list what shipped when and point into topical domains. Deep dives are in the sections below. [Update C# 9](<../Update CSharp 9/README.md>) · [10](<../Update CSharp 10/README.md>) · [11](<../Update CSharp 11/README.md>) · [12](<../Update CSharp 12/README.md>) · [13](<../Update CSharp 13/README.md>) · [14](<../Update CSharp 14/README.md>) · [15](<../Update CSharp 15/README.md>).

## 1. Abstraction (the concept, not the keyword)

### [1.1. Abstraction vs encapsulation vs polymorphism (C#-specific mental model)](<./sections/1. Abstraction/1.1. Abstraction vs encapsulation vs polymorphism.md>)

1. **Abstraction = limiting what callers can rely on** (stable contract, fewer coupling points, easier refactors)
2. **Encapsulation = hiding representation/invariants** (private state; "valid states only" enforcement)
3. **Polymorphism = multiple implementations behind one contract** (runtime dispatch trade-offs; testability vs overhead)

### [1.2. "Contract" thinking: behavioral guarantees, invariants, and versioning](<./sections/1. Abstraction/1.2. Contract thinking behavioral guarantees invariants versioning.md>)

1. **Behavioral contract** (preconditions/postconditions; exceptions and cancellation semantics)
2. **Representation independence** (don't leak concrete types/collections; expose capabilities, not data)
3. **Versioning mindset** (public APIs are promises; design for extension without breaking callers)

## 2. Abstract classes (why they exist and when they're the right tool)

### [2.1. Abstract class fundamentals: what "abstract" means in C#](<./sections/2. Abstract classes/2.1. Abstract class fundamentals.md>)

1. **Non-instantiable base type** (shared implementation + shared state option)
2. **Abstract vs virtual vs non-virtual** (required override vs optional customization vs sealed behavior)
3. **Accessibility and inheritance constraints** (`protected` members; protected constructors; base initialization rules)

### [2.2. Abstract methods and abstract members: designing required overrides safely](<./sections/2. Abstract classes/2.2. Abstract methods and members required overrides.md>)

1. **Abstract methods** (derived must implement; define the minimal required surface)
2. **Template Method pattern (carefully)** (base orchestration + derived hooks; keep invariants in base)
3. **Constructor/initialization hazards** (never call virtual/abstract members from constructors; avoid "leaking `this`")

### [2.3. Abstract base classes as shared implementation: power and pitfalls](<./sections/2. Abstract classes/2.3. Abstract bases shared implementation pitfalls.md>)

1. **When shared code is worth it** (stable common behavior, cross-cutting invariants, internal frameworks)
2. **Fragile base class problem** (coupling, accidental overriding dependencies, versioning break risks)
3. **Performance reality** (virtual dispatch in hot paths; devirtualization limits; keep polymorphism off tight loops)

## 3. Interfaces (contract-first design in modern C#)

### [3.1. Creating interfaces: syntax, intent, and what to put in an interface](<./sections/3. Interfaces/3.1. Creating interfaces syntax intent.md>)

1. **Interfaces as capability contracts** (small, cohesive, name by responsibility: `IStreamSerializer`, `IClock`)
2. **Interface surface rules** (avoid "fat" interfaces; prefer role interfaces; keep them stable)
3. **Nullability + async semantics** (annotate correctly; be explicit about cancellation and concurrency expectations)

### [3.2. Default interface members (DIM): when to use and when to avoid](<./sections/3. Interfaces/3.2. Default interface members DIM.md>)

1. **Why DIM exists** (versioning: add members without breaking implementations)
2. **Costs/risks** (surprising behavior, dispatch complexity, testing ambiguity, trimming/AOT considerations)
3. **Guidance** (use for carefully designed "traits" / versioning; avoid as a "mixin replacement" in typical apps)

### [3.3. Static abstract members in interfaces (modern generic math / type class style)](<./sections/3. Interfaces/3.3. Static abstract members in interfaces generic math.md>)

1. **What problem it solves** (generic algorithms needing operators or factory members)
2. **Where it fits** (numeric/geometry/units libraries; high-performance generic code)
3. **Trade-offs** (complexity, constraints, API ergonomics; keep it library-level, not domain-level by default)

### [3.4. Interface member forms: `private` helpers, `static`, DIM overrides (overview)](<./sections/3. Interfaces/3.4. Interface member forms private static abstract sealed DIM overview.md>)

1. **Private interface methods** factor default implementations without widening API
2. **Static abstract** for generic math patterns ([3.3](<./sections/3. Interfaces/3.3. Static abstract members in interfaces generic math.md>))
3. **Perf**: interface dispatch in hot loops - measure

## 4. Dynamic polymorphism with interfaces (dispatch, testing, and runtime behavior)

### [4.1. Interface-based polymorphism: runtime dispatch and substitutability](<./sections/4. Polymorphism with interfaces/4.1. Interface polymorphism dispatch substitutability.md>)

1. **Substitutability (LSP framing)** (don't strengthen preconditions or weaken postconditions in implementations)
2. **Runtime dispatch** (interface calls vs virtual calls; what the JIT can/can't optimize)
3. **Testability and design** (mocking vs fakes; prefer composition; keep contracts precise)

### [4.2. Performance traps with interfaces: boxing, allocations, and hot loops](<./sections/4. Polymorphism with interfaces/4.2. Interface performance traps boxing allocations hot loops.md>)

1. **Boxing via interfaces** (value types implementing interfaces; accidental allocations; how to spot it)
2. **Generics as a performance tool** (avoid interface dispatch in tight loops; consider generic constraints)
3. **Collections and enumerators** (`IEnumerable<T>`/`IEnumerator<T>` patterns; avoid unnecessary materialization in hot paths)

## 5. Multiple inheritance with interfaces (what you can do in C# and what you can't)

### [5.1. Multiple interface implementation: modeling multiple roles safely](<./sections/5. Multiple inheritance with interfaces/5.1. Multiple interface implementation modeling roles.md>)

1. **Multiple roles, one type** (capabilities vs identity; keep responsibilities separated)
2. **Ambiguity management** (member name collisions; avoid same member names with different meaning)
3. **Design heuristics** (prefer composition if "implements everything"; use adapters/decorators to keep types focused)

### [5.2. Avoiding the "diamond of death" in C# (and how DIM changes the discussion)](<./sections/5. Multiple inheritance with interfaces/5.2. Diamond problem and DIM.md>)

1. **Why multiple base classes are forbidden** (shared state ambiguity; constructor order; base invariants)
2. **What interfaces avoid** (no shared state by default; explicit composition)
3. **DIM caution** (default implementations can re-introduce ambiguity; be deliberate and document resolution)

## 6. Interface inheritance (interface hierarchies that don't rot)

### [6.1. Interface inheritance fundamentals: is-a vs capability refinement](<./sections/6. Interface inheritance/6.1. Interface inheritance fundamentals.md>)

1. **Refinement** (a derived interface adds guarantees/capabilities, not unrelated responsibilities)
2. **Avoid deep hierarchies** (prefer small role interfaces; keep composition simple)
3. **Versioning** (interface inheritance multiplies break risk; use DIM only when it's a clear win)

### [6.2. Marker interfaces and "semantic" interfaces: when they help and when they hurt](<./sections/6. Interface inheritance/6.2. Marker interfaces semantic interfaces.md>)

1. **Marker interfaces** (rarely necessary; often better as attributes or explicit registration)
2. **Semantic interfaces** (communicate intent; can guide DI/dispatch; document what the marker means)
3. **Alternatives** (attributes, generic constraints, discriminated unions/closed type sets, explicit capability properties)

## 7. Explicit interface implementation (precision, collisions, and API hygiene)

### [7.1. Explicit interface implementation fundamentals: syntax and semantics](<./sections/7. Explicit interface implementation/7.1. Explicit interface implementation fundamentals.md>)

1. **Why it exists** (member name collisions; hide "plumbing" members from the public surface)
2. **Dispatch behavior** (explicit members accessible only via interface-typed reference)
3. **API design** (keep explicit implementations small; avoid surprising behavior differences between class and interface view)

### [7.2. Explicit implementation patterns: adapters, capability gating, and versioning](<./sections/7. Explicit interface implementation/7.2. Explicit implementation patterns adapters gating versioning.md>)

1. **Capability gating** (expose advanced operations only through a specific interface)
2. **Adapter/Decorator friendly designs** (wrap an implementation; forward members intentionally)
3. **Versioning and binary compatibility** (changing interface members; adding members with DIM vs breaking changes)

## 8. Important points to remember (mentor-grade checklist)

### [8.1. Correctness checklist: contracts, invariants, and substitution](<./sections/8. Important points/8.1. Correctness checklist contracts invariants substitution.md>)

1. **Keep contracts explicit** (nullability, exceptions, cancellation, thread-safety assumptions)
2. **Protect invariants** (abstract bases: keep invariant enforcement in non-virtual code where possible)
3. **Avoid "action at a distance"** (no virtual calls in constructors; avoid hidden side effects in interface defaults)

### [8.2. Performance checklist: dispatch costs, allocations, and scalability](<./sections/8. Important points/8.2. Performance checklist dispatch allocations scalability.md>)

1. **Prefer non-polymorphic fast paths in hot code** (generics, sealed types, specialization where it matters)
2. **Watch for boxing** (value types to interface; iterator allocations; delegate captures in default implementations)
3. **Keep interfaces small** (smaller surfaces are easier for humans and often easier for optimizers to reason about)

### [8.3. Maintainability checklist: SOLID without cargo-culting](<./sections/8. Important points/8.3. Maintainability checklist SOLID without cargo cult.md>)

1. **Prefer composition over inheritance by default** (inheritance only for true stable is-a + shared behavior)
2. **Don't over-abstract** (avoid interfaces with a single implementation unless it buys testability/substitution/versioning)
3. **Name and package by responsibilities** (interfaces live near the consumers; avoid "Contracts" mega-projects)

## 9. Overlaps to avoid (where this domain stops)

### [9.1. Boundaries: what is covered elsewhere in this repo](<./sections/9. Overlaps to avoid/9.1. Boundaries what is covered elsewhere.md>)

1. **OOP big picture (pillars, composition vs inheritance, basic interface usage)** is covered in `CSharp Basic Object Oriented Programming`
2. **Inheritance mechanics (construction order, hiding vs overriding, sealed types, dispatch overview)** is covered in `Inheritance and Hiding and Overriding`
3. **General method design (overloads, ref/out/in, generics basics, Try-patterns)** is covered in `Methods`
4. **Runtime/JIT/GC fundamentals** are covered in `Fundamental Theories`
5. **Threading, async, and the memory model** are covered in `Cuncurrent & Parallel`

## 10. Interview questions and answers (abstract classes & interfaces, C# 15 era)

### [10.1. Interview Q&A: abstract class vs interface, polymorphism, and explicit implementation](<./sections/10. Interview Q and A/10.1. Interview questions about abstract classes and interfaces.md>)

1. **Abstract class vs interface** (state, shared implementation, versioning, testing, and performance framing)
2. **When to use explicit interface implementation** (collision resolution, API hygiene, capability gating)
3. **Multiple inheritance with interfaces** (why C# forbids multiple base classes; how to design around it)
4. **Default interface members** (why they exist; when to avoid; versioning strategy)
5. **Performance questions** (interface dispatch vs virtual; boxing; avoiding polymorphism in tight loops; generics as an optimization)

