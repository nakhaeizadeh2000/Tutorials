## 1. Fields fundamentals (what they are and what they are not)

### [1.1. Understanding fields (storage, lifetime, and where they live)](<./sections/1. Fields fundamentals/1.1. Understanding fields storage lifetime and where they live.md>)

1. **Fields vs locals vs properties (semantics, invariants, and API design)**
2. **Instance fields vs static fields (per-object vs per-type storage)**
3. **Performance framing (layout, caching, false sharing, and avoiding accidental allocations)**

### [1.2. Access modifiers for fields (encapsulation and API surface)](<./sections/1. Fields fundamentals/1.2. Access modifiers for fields encapsulation and API surface.md>)

1. **`private`, `protected`, `internal`, `protected internal`, `private protected`, `public`**
2. **When a field should never be public (versioning, invariants, binary compatibility)**
3. **Prefer properties for public APIs (and when a field is still fine inside a type)**

### [1.3. Instance fields across multiple objects (identity, aliasing, and mutation)](<./sections/1. Fields fundamentals/1.3. Instance fields across multiple objects identity aliasing and mutation.md>)

1. **Each object has its own instance field values (identity and state)**
2. **Reference-type fields: aliasing and shared mutable state pitfalls**
3. **Value-type fields: copying costs, defensive copies, and `readonly struct` interactions**

## 2. Field kinds in C# (static, const, readonly, and friends)

### [2.1. Static fields (shared state, initialization, and thread-safety)](<./sections/2. Field kinds in CSharp/2.1. Static fields shared state initialization and thread-safety.md>)

1. **Static lifetime (per type, AppDomain-like boundaries no longer apply in modern .NET)**
2. **Initialization semantics (type initializers, beforefieldinit, and ordering traps)**
3. **Concurrency concerns (locks, `Interlocked`, immutability, and avoiding global mutable state)**

### [2.2. Constant fields: `const` (compile-time constants and versioning)](<./sections/2. Field kinds in CSharp/2.2. Constant fields const compile-time constants and versioning.md>)

1. **What `const` really means (embedded at compile time, not read at runtime)**
2. **When `const` is safe (primitive literals, `string`, `null`, well-known values)**
3. **When `const` is a trap (public APIs, library versioning, changing values)**

### [2.3. Readonly fields: `readonly` (immutability, correctness, and perf)](<./sections/2. Field kinds in CSharp/2.3. Readonly fields readonly immutability correctness and perf.md>)

1. **Read-only after construction (instance vs static readonly)**
2. **Read-only references vs read-only objects (reference-type nuance)**
3. **Design guidance (immutability, thread-safety by construction, and defensive copying)**

### [2.4. Local constants (scope and intent)](<./sections/2. Field kinds in CSharp/2.4. Local constants scope and intent.md>)

1. **Local `const` vs field `const` (scope and versioning implications)**
2. **Prefer smallest scope (readability, maintainability, and fewer accidental dependencies)**
3. **Patterns (domain constants, magic numbers, and naming that communicates meaning)**

## 3. Important points to remember about fields (mentor notes)

### [3.1. Core rules and common pitfalls (correctness + maintainability)](<./sections/3. Important points to remember about fields/3.1. Core rules and common pitfalls correctness and maintainability.md>)

1. **Encapsulation: fields are implementation details (public fields lock you in)**
2. **Mutable shared state is the #1 field-related bug source (especially with `static`)**
3. **Don’t confuse “readonly” with “deeply immutable”**

### [3.2. Performance notes for fields (layout, cache, and allocation pressure)](<./sections/3. Important points to remember about fields/3.2. Performance notes for fields layout cache and allocation pressure.md>)

1. **Field layout and locality (size matters; fewer indirections; avoid “object graphs” when hot)**
2. **Boxing and interface-typed fields (hidden allocations and virtual dispatch)**
3. **Threading and false sharing (hot static/instance counters and cache lines)**

### [3.3. Modern C# guidance (C# 15 mindset)](<./sections/3. Important points to remember about fields/3.3. Modern CSharp guidance CSharp 15 mindset.md>)

1. **Prefer expressive type design (records/required members/primary constructors) over “bags of fields”**
2. **Use immutability as a default (readonly fields + immutable types)**
3. **Avoid reflection-heavy patterns; prefer source-generated/compile-time approaches when relevant**

## 4. Interview questions and answers (fields)

### [4.1. Interview Q&A: fields, const, readonly, and static](<./sections/4. Interview questions and answers/4.1. Interview Q&A fields const readonly and static.md>)

1. **`const` vs `static readonly` (differences, IL/runtime behavior, versioning)**
2. **Field vs property (why public fields are discouraged; when backing fields matter)**
3. **Static initialization order and thread safety (common traps and fixes)**
4. **Readonly with reference types (what it does and doesn’t guarantee)**
5. **Mutation, aliasing, and defensive copying (why bugs happen)**
