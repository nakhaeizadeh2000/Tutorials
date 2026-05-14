## 0. Language version maps (C# 9-15)

These **indexes** list what shipped when and point into topical domains. Deep dives are in the sections below. [Update C# 9](<../30 Update CSharp 9/README.md>) · [10](<../31 Update CSharp 10/README.md>) · [11](<../32 Update CSharp 11/README.md>) · [12](<../33 Update CSharp 12/README.md>) · [13](<../34 Update CSharp 13/README.md>) · [14](<../35 Update CSharp 14/README.md>) · [15](<../36 Update CSharp 15/README.md>).
## 1. Understanding Object-Oriented Programming (OOP) in C# (the mindset)

### [1.1. What OOP is (and what it is not) in modern C#](<./sections/1. Understanding OOP/1.1. What OOP is and is not in modern CSharp.md>)

1. **OOP goals** (modeling, encapsulation, local reasoning, change isolation) vs “just using classes”
2. **OOP vs data-oriented design** (when object graphs help vs when they fight performance/cache locality)
3. **Modern C# reality** (OOP + generics + functional-ish features + async; you choose the right tool per layer)

### [1.2. Core OOP terms (class, object, instance, member, state, behavior)](<./sections/1. Understanding OOP/1.2. Core OOP terms class object instance member state behavior.md>)

1. **Type vs instance** (compile-time shape vs runtime object)
2. **State vs behavior** (invariants + methods; keep state private and behavior explicit)
3. **Identity** (reference identity vs value equality; why this matters for bugs and collections)

### [1.3. The 4 pillars: encapsulation, abstraction, inheritance, polymorphism (C#-specific)](<./sections/1. Understanding OOP/1.3. The 4 pillars in CSharp.md>)

1. **Encapsulation** (private fields + public methods/properties; invariants live here)
2. **Abstraction** (interfaces and small public surfaces; “tell, don’t ask” trade-offs)
3. **Inheritance & polymorphism** (when to use; how virtual dispatch affects extensibility and performance)

## 2. Creating classes and objects (the mechanics you must be fluent in)

### [2.1. Defining a class: fields vs properties vs methods (and why it matters)](<./sections/2. Creating classes and objects/2.1. Defining a class fields vs properties vs methods.md>)

1. **Fields vs properties** (encapsulation, versioning, validation, binary compatibility)
2. **Auto-properties** (including `init`), backing fields, and computed properties
3. **Performance notes** (avoid “property does heavy work”; avoid accidental allocations in getters)

### [2.2. Constructors: initialization, invariants, and modern alternatives](<./sections/2. Creating classes and objects/2.2. Constructors initialization invariants and modern alternatives.md>)

1. **Constructor responsibilities** (establish valid state; no hidden expensive work)
2. **Primary constructors and `required` members (C# 15 era)** (intent-revealing initialization)
3. **Factories vs constructors** (async creation, caching, validation failures, and testability)

### [2.3. Object creation & lifetime: `new`, GC, and deterministic cleanup](<./sections/2. Creating classes and objects/2.3. Object creation lifetime GC and deterministic cleanup.md>)

1. **Allocation basics** (Gen0 allocations are cheap; too many allocations are not)
2. **Ownership and disposal** (`IDisposable`, `using`, `IAsyncDisposable`, `await using`)
3. **Avoiding leaks** (events, timers, static caches, long-lived graphs; finalizers are a last resort)

### [2.4. Choosing the right type shape: class vs struct vs record vs record struct](<./sections/2. Creating classes and objects/2.4. Choosing class vs struct vs record vs record struct.md>)

1. **Reference vs value semantics** (copying cost, aliasing bugs, mutation semantics)
2. **Equality** (reference equality, value equality, custom `Equals`/`GetHashCode` constraints)
3. **Performance guidance** (avoid large mutable structs; consider `readonly struct`; understand boxing)

## 3. Important points about objects (things that bite people in real code)

### [3.1. Reference semantics: aliasing, mutation, and defensive design](<./sections/3. Important points about objects/3.1. Reference semantics aliasing mutation defensive design.md>)

1. **Aliasing hazards** (two references → same object; unexpected cross-effects)
2. **Immutability strategies** (records, readonly fields, private setters, copy-on-write patterns)
3. **Performance trade-offs** (immutability can allocate; measure hot paths; avoid unnecessary copying)

### [3.2. Equality, hashing, and identity in collections](<./sections/3. Important points about objects/3.2. Equality hashing and identity in collections.md>)

1. **When to override `Equals`/`GetHashCode`** (value objects; stable keys)
2. **Pitfalls** (mutable keys in dictionaries, reference cycles, floating-point equality)
3. **Best practices** (`IEquatable<T>`, consistent equality rules, use `StringComparer` explicitly)

### [3.3. Encapsulation and invariants: “valid states only”](<./sections/3. Important points about objects/3.3. Encapsulation and invariants valid states only.md>)

1. **Invariants** (rules that must always be true; enforce at boundaries)
2. **Validation strategy** (constructor vs factory vs method-level; exceptions vs Try-pattern)
3. **API design** (avoid “set anything anytime”; prefer intention-revealing methods)

### [3.4. Copying and cloning: shallow vs deep copies (and when you need neither)](<./sections/3. Important points about objects/3.4. Copying and cloning shallow vs deep.md>)

1. **Shallow copy meaning** (references copied, not the object graph)
2. **Deep copy hazards** (cycles, shared references, identity loss, performance)
3. **Better options** (immutability, with-expressions for records, explicit copy constructors)

### [3.5. Virtual dispatch, interface calls, and performance basics](<./sections/3. Important points about objects/3.5. Virtual dispatch interface calls and performance basics.md>)

1. **Why virtual exists** (extension points) and its costs (devirtualization limits)
2. **Prefer composition** (inject strategies via interfaces; keep inheritance shallow)
3. **Hot path guidance** (avoid polymorphism in tight loops; prefer generics when appropriate)

## 4. Basic OOP design (keep it simple, testable, and fast enough)

### [4.1. Composition over inheritance (practical rules of thumb)](<./sections/4. Basic OOP design/4.1. Composition over inheritance practical rules of thumb.md>)

1. **When inheritance is OK** (true is-a, stable base contract, framework patterns)
2. **When composition wins** (behavior mix-and-match, test doubles, avoiding fragile base class problems)
3. **Performance** (composition is usually “fast enough”; design for clarity first, then measure)

### [4.2. Interfaces and dependency injection (without overengineering)](<./sections/4. Basic OOP design/4.2. Interfaces and dependency injection without overengineering.md>)

1. **Interfaces as contracts** (small, cohesive, stable)
2. **Constructor injection** (composition root; avoid service locator)
3. **Allocation/lifetime awareness** (transient vs scoped vs singleton; capture pitfalls)

### [4.3. Visibility, API boundaries, and “what to make public”](<./sections/4. Basic OOP design/4.3. Visibility API boundaries and what to make public.md>)

1. **Use the narrowest visibility** (`private`, `internal`, `protected` with intent)
2. **Avoid exposing mutable internals** (return read-only views; avoid leaking collections)
3. **Versioning mindset** (public APIs are promises; properties beat fields for evolution)

## 5. Interview questions (basic) + mentor-grade answers

### [5.1. Common OOP interview questions and answers (C#-focused)](<./sections/5. Interview Q and A/5.1. Common OOP interview questions and answers CSharp-focused.md>)

1. **Explain OOP and the 4 pillars** (with correct C# examples and caveats)
2. **Class vs object vs reference vs value type** (plus real pitfalls like boxing and mutable keys)
3. **Interface vs abstract class vs base class** (design + testability + versioning + perf framing)

### [5.2. Scenario questions: design a small model (and defend the trade-offs)](<./sections/5. Interview Q and A/5.2. Scenario questions design a small model and defend tradeoffs.md>)

1. **Model a domain object** (invariants, encapsulation, nullability)
2. **Extensibility without inheritance** (strategies, composition, DI)
3. **Performance-aware answers** (avoid excess allocations, stable equality, correct lifetimes)

