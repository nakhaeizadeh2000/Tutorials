## 1. Field fundamentals (what a field really is)

### [1.1. Understanding fields: state, storage, and identity](<./sections/1. Field fundamentals/1.1. Understanding fields state storage and identity.md>)

1. **What a field is (storage) vs what a property is (API)** (and why this matters for versioning and invariants)
2. **Instance fields vs static fields** (per-object state vs shared state)
3. **Reference vs value fields** (aliasing, copying, and where bugs come from)

### [1.2. Fields vs properties: choose the right member (and avoid common traps)](<./sections/1. Field fundamentals/1.2. Fields vs properties choose the right member.md>)

1. **When a field is OK** (private backing fields, performance-critical internals, interop/serialization edge cases)
2. **When a property is the correct default** (encapsulation, validation, binary compatibility, tooling support)
3. **Performance reality** (JIT inlines trivial properties; measure before “optimizing” into public fields)

## 2. Access modifiers & visibility (make state hard to misuse)

### [2.1. Access modifiers for fields in C# (what you can actually express)](<./sections/2. Access modifiers and visibility/2.1. Access modifiers for fields in CSharp.md>)

1. **`private`, `protected`, `internal`, `public`** (and why `public` fields are almost always a design debt)
2. **Combinations (`protected internal`, `private protected`)** (which assembly + inheritance scenarios they fit)
3. **API design guideline** (narrowest visibility; expose behavior, not mutable state)

### [2.2. Immutability and “safe exposure” patterns around fields](<./sections/2. Access modifiers and visibility/2.2. Immutability and safe exposure patterns around fields.md>)

1. **Encapsulation patterns** (private field + public property/method; enforce invariants at the boundary)
2. **Avoid leaking mutability** (read-only views, copies vs views, and why returning internal collections is risky)
3. **Thread-safety framing** (shared fields are shared state; don’t rely on “it usually works”)

## 3. Multiple objects & field interactions (aliasing, copying, and surprises)

### [3.1. Playing with fields across multiple objects: reference semantics and aliasing](<./sections/3. Multiple objects and field interactions/3.1. Fields across multiple objects reference semantics and aliasing.md>)

1. **Two objects, one shared reference field** (how mutations “teleport” across owners)
2. **Shallow copy vs deep copy of field graphs** (where bugs and perf cliffs come from)
3. **Defensive strategies** (immutability, copy-on-write, explicit cloning, and “don’t share ownership”)

### [3.2. Equality, hashing, and fields: how state affects identity in collections](<./sections/3. Multiple objects and field interactions/3.2. Equality hashing and fields in collections.md>)

1. **Which fields participate in equality** (value objects vs entities; stable keys)
2. **The mutable-field-in-dictionary bug** (why changing a key field breaks lookups)
3. **Guidance** (`IEquatable<T>`, stable hash codes, and explicit comparers like `StringComparer`)

## 4. Static fields (shared state, lifetimes, and performance trade-offs)

### [4.1. Static fields: shared state, lifetime, and initialization semantics](<./sections/4. Static fields/4.1. Static fields shared state lifetime initialization.md>)

1. **Lifetime and GC roots** (why statics can become “accidental memory leaks”)
2. **Initialization rules** (type initialization, static constructors, and lazy patterns)
3. **Performance + correctness** (avoid per-call recomputation, but don’t create unbounded global caches)

### [4.2. Thread safety for static fields (modern patterns)](<./sections/4. Static fields/4.2. Thread safety for static fields modern patterns.md>)

1. **Safe initialization** (`static` initialization guarantees, `Lazy<T>`, and what is actually thread-safe)
2. **Updates and synchronization** (`Interlocked`, `Volatile`, `lock`, and when each is appropriate)
3. **Avoiding contention** (reduce shared writes; prefer immutable snapshots; measure hot locks)

## 5. Constants and read-only state (what “immutable” really means)

### [5.1. `const` fields: compile-time constants and versioning implications](<./sections/5. Constants and readonly/5.1. const fields compile-time constants and versioning.md>)

1. **What `const` means** (inlined at compile time; not “a runtime read-only variable”)
2. **What you should and should not make `const`** (primitives, enums vs strings in public APIs)
3. **Versioning pitfall** (changing a public `const` requires recompilation of consumers)

### [5.2. `readonly` fields: runtime immutability boundaries (and where it stops)](<./sections/5. Constants and readonly/5.2. readonly fields runtime immutability boundaries.md>)

1. **Initialization points** (constructor/field initializer; why that’s powerful for invariants)
2. **Readonly reference != immutable object** (you can’t reassign the reference, but the object may still mutate)
3. **Performance notes** (helps reasoning; avoid defensive copying when not needed; be careful with large structs)

### [5.3. Local constants: `const` locals, scope, and readability](<./sections/5. Constants and readonly/5.3. Local constants const locals scope readability.md>)

1. **When local `const` helps** (naming a magic number; avoiding repeated literal)
2. **When it hurts** (over-abstracting simple literals; reducing readability)
3. **Alternatives** (private constants vs `static readonly` for non-const values like `TimeSpan`)

## 6. Field-related best practices (mentor-grade rules of thumb)

### [6.1. Important points to remember about fields (C# 15, modern .NET)](<./sections/6. Field best practices/6.1. Important points to remember about fields.md>)

1. **Default to private fields + public APIs** (properties/methods); avoid public mutable state
2. **Prefer immutability** (`readonly`, immutable types, defensive design) especially in concurrent code
3. **Think in costs** (allocations, copying large structs, contention on static/shared fields)

### [6.2. Common field pitfalls and how to avoid them](<./sections/6. Field best practices/6.2. Common field pitfalls and how to avoid them.md>)

1. **Leaking internals** (mutable collections, exposing arrays, returning internal references)
2. **Static caches gone wrong** (unbounded growth, key explosion, app lifetime leaks)
3. **Incorrect assumptions** (readonly reference vs immutable data; const versioning; thread-safety myths)

## 7. Interview Q&A (fields-focused, practical answers)

### [7.1. Interview questions and answers about fields (with best-practice framing)](<./sections/7. Interview Q and A/7.1. Interview questions and answers about fields.md>)

1. **Fields vs properties** (encapsulation + versioning + JIT inlining)
2. **`const` vs `readonly` vs `static readonly`** (compile-time vs runtime; versioning and allocation details)
3. **Static field thread-safety** (initialization guarantees, safe publication, and synchronization choices)

