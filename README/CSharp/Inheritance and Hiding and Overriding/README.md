## 1. Inheritance fundamentals (what it is in C# and what it costs)

### [1.1. Inheritance in C#: is-a vs implementation reuse (and why composition often wins)](<./sections/1. Inheritance fundamentals/1.1. Inheritance is-a vs reuse composition.md>)

1. **What inheritance actually provides** (substitutability + virtual dispatch + shared base implementation) vs “just code sharing”
2. **When inheritance is appropriate** (stable base contract, real is-a relationship, framework extension points)
3. **Costs and risks** (fragile base class, virtual dispatch limits devirtualization, initialization order hazards, versioning traps)

### [1.2. Runtime dispatch model: non-virtual, virtual/override, interface calls (high level)](<./sections/1. Inheritance fundamentals/1.2. Dispatch model non-virtual virtual interface.md>)

1. **Compile-time binding vs runtime dispatch** (overload resolution vs virtual dispatch)
2. **Virtual dispatch + performance reality** (often “fast enough”; can matter in hot loops; JIT can devirtualize sometimes)
3. **Design guidance** (make extension points explicit; keep inheritance shallow; prefer sealed where appropriate)

## 2. Creating inheritance (syntax, semantics, and legality)

### [2.1. Creating a derived class: `:` syntax, accessibility, and member visibility](<./sections/2. Creating inheritance/2.1. Creating a derived class syntax accessibility.md>)

1. **Basic mechanics** (single class inheritance, multiple interface implementation)
2. **Access rules** (`public/protected/internal/private`; `protected internal` vs `private protected`)
3. **What you inherit** (instance members) vs what you don’t (constructors; private members are not accessible)

### [2.2. Types of inheritance in C#: single inheritance + interfaces + “multiple inheritance of behavior” patterns](<./sections/2. Creating inheritance/2.2. Types of inheritance single + interfaces + patterns.md>)

1. **Single inheritance for classes** (why C# forbids multiple base classes; diamond problem framing)
2. **Interfaces for multiple contracts** (including default interface members: when to use vs avoid)
3. **Modern alternatives** (composition, strategy, decorators, source generators, static abstract interface members where they fit)

## 3. The `base` keyword (what it means and common uses)

### [3.1. `base` in member calls: calling hidden/overridden base implementations intentionally](<./sections/3. base keyword/3.1. base in member calls.md>)

1. **Calling base implementations** (`base.M()` inside override; choosing base behavior vs replacing it)
2. **Avoiding accidental recursion** (calling your own override vs base implementation)
3. **Mentor rule** (call `base` only when the base contract requires it or it’s a deliberate extension point)

### [3.2. `base(...)` in constructors: selecting base constructor overloads](<./sections/3. base keyword/3.2. base in constructors base(...) selection.md>)

1. **Why it exists** (base must be constructed before derived)
2. **Overload selection** (which base ctor is called, and what happens if you don’t specify one)
3. **API design** (keep base ctors minimal; prefer factories when initialization is complex or async)

## 4. Parent (base) class constructors and initialization order (the stuff that causes real bugs)

### [4.1. Construction order: field initializers + base ctor + derived ctor (and why virtual calls are dangerous)](<./sections/4. Constructors and initialization order/4.1. Construction order and virtual call hazard.md>)

1. **Actual order** (defaults → base field initializers → base ctor → derived field initializers → derived ctor)
2. **The classic hazard** (virtual dispatch during construction + partially initialized derived state)
3. **Safe patterns** (non-virtual initialization, factories, composition; keep constructors cheap and deterministic)

### [4.2. Protected constructors, abstract bases, and framework-oriented inheritance](<./sections/4. Constructors and initialization order/4.2. Protected constructors abstract bases frameworks.md>)

1. **Why protected ctors exist** (prevent invalid “base-only” instantiation while enabling derived types)
2. **Abstract base classes** (shared implementation + enforced overrides; when it’s better than interfaces)
3. **Interop realities** (serializers/ORMs/DI: when a parameterless ctor is required and how to contain the damage)

## 5. Method hiding (`new`) (what it really does)

### [5.1. What method hiding is: “shadowing” a member in the derived type](<./sections/5. Method hiding/5.1. Method hiding new keyword semantics.md>)

1. **Meaning of `new`** (chooses which member is used based on compile-time static type, not runtime type)
2. **What happens without `new`** (compiler warnings; still hiding, but accidentally)
3. **When hiding is acceptable** (rare: interop/versioning constraints; avoid for normal domain modeling)

### [5.2. Hiding pitfalls: confusing APIs, broken expectations, and subtle bugs](<./sections/5. Method hiding/5.2. Hiding pitfalls broken substitutability.md>)

1. **Substitutability breaks** (base-typed reference calls base member, not derived hidden member)
2. **Maintainability cost** (readers can’t predict behavior; refactors become dangerous)
3. **Performance note** (not a speed hack; it’s an API/dispatch choice, usually a design smell)

## 6. Method overriding (`virtual`/`override`) (polymorphism done deliberately)

### [6.1. Virtual members: designing extension points safely](<./sections/6. Method overriding/6.1. virtual members design extension points.md>)

1. **When to make something virtual** (stable contract, expected customization, documented invariants)
2. **Non-virtual by default** (keep base APIs small; seal types/members unless you explicitly need overrides)
3. **Correctness** (document required `base` calls; guard invariants; avoid calling virtuals from constructors)

### [6.2. Overriding rules and modifiers: `override`, `abstract`, `sealed override`, and `new` interactions](<./sections/6. Method overriding/6.2. override abstract sealed override rules.md>)

1. **Legal combinations** (`virtual`→`override`; `abstract`→must override; `sealed override` stops further overrides)
2. **Hiding vs overriding interactions** (what `new` does to a virtual chain; why it’s almost always wrong)
3. **Versioning mindset** (adding virtuals, changing virtual behavior, and binary compatibility concerns in libraries)

## 7. Method hiding vs method overriding (the comparison you must internalize)

### [7.1. The key difference: dispatch depends on static type vs runtime type](<./sections/7. Hiding vs overriding/7.1. Key difference dispatch static vs runtime.md>)

1. **Hiding** (compile-time selection) vs **overriding** (runtime selection)
2. **Correctness consequences** (polymorphism expectations; LSP thinking)
3. **Mentor heuristics** (use overriding for polymorphism; avoid hiding unless forced by legacy constraints)

### [7.2. Real-world scenarios: choose `override`, choose `new`, or avoid inheritance entirely](<./sections/7. Hiding vs overriding/7.2. Scenarios choose override new or composition.md>)

1. **Framework base classes** (override required hooks; understand base contract)
2. **Library design** (prefer interfaces + composition; keep base classes internal when possible)
3. **Hot path considerations** (avoid polymorphism in tight loops; prefer generics/structural approaches when it matters)

## 8. Sealed types and sealed methods (controlling inheritance and enabling optimizations)

### [8.1. Sealed classes: when and why to stop inheritance](<./sections/8. Sealed/8.1. Sealed classes when and why.md>)

1. **Design reasons** (prevent invalid extension, protect invariants, simplify reasoning/testing)
2. **Performance angle** (enables stronger devirtualization; reduces dispatch uncertainty in some cases)
3. **API stability** (sealed public types reduce “you broke my derived type” versioning pain)

### [8.2. `sealed override`: stop further overrides while still inheriting from a base](<./sections/8. Sealed/8.2. sealed override stop further overriding.md>)

1. **When it’s useful** (finalizing behavior at a certain level in a hierarchy)
2. **Correctness** (lock down invariants; avoid extension points you can’t support)
3. **Performance reality** (may help devirtualization; measure before you claim wins)

## 9. Important points to remember about inheritance (mentor-grade checklist)

### [9.1. Correctness checklist: invariants, construction, and substitutability](<./sections/9. Important points/9.1. Inheritance correctness checklist.md>)

1. **LSP framing** (derived must be usable wherever base is expected; don’t strengthen preconditions or weaken postconditions)
2. **Initialization rules** (base constructed first; no virtual calls during construction; never leak partially constructed `this`)
3. **Override contract discipline** (document expectations; keep side effects predictable; avoid surprising exceptions)

### [9.2. Performance and maintainability checklist: dispatch, allocations, and API shape](<./sections/9. Important points/9.2. Inheritance performance maintainability checklist.md>)

1. **Prefer non-virtual by default** (virtual only when it’s an explicit extension point)
2. **Avoid polymorphism in hot loops** (consider generics, data-oriented layouts, or function pointers where appropriate)
3. **Keep hierarchies shallow** (deep hierarchies increase mental load; increase coupling; complicate initialization and testing)

## 10. Overlaps to avoid (where this domain stops)

### [10.1. Boundaries: what is covered elsewhere in this repo](<./sections/10. Overlaps to avoid/10.1. Boundaries what is covered elsewhere.md>)

1. **OOP big picture (pillars, composition vs inheritance)** is covered in `CSharp Basic Object Oriented Programming` (this domain focuses on inheritance mechanics)
2. **Constructor deep dive** (constructor kinds, object initialization contracts, DI/serialization patterns) is covered in `Constructors`
3. **General method design** (parameters, overload resolution, ref-like patterns, `this` capturing) is covered in `Methods`
4. **Runtime/JIT/GC fundamentals** are covered in `Fundamental Theories`
5. **Threading/memory model** details are covered in `Cuncurrent & Parallel`

## 11. Interview questions and answers (inheritance, hiding, overriding — C# 15 era)

### [11.1. Interview Q&A: inheritance semantics, hiding vs overriding, and sealed](<./sections/11. Interview Q and A/11.1. Interview questions about inheritance hiding overriding.md>)

1. **Explain hiding vs overriding** (with a base-typed variable example and the dispatch rule)
2. **Explain virtual/override/abstract/sealed override** (legal combinations and design intent)
3. **Explain constructor order + “no virtual calls in constructors”** (what actually happens and how to design around it)
4. **When to use sealed classes/methods** (design + versioning + performance framing)
5. **Design questions** (inheritance vs interfaces vs composition; defend trade-offs and mention correctness/perf)
