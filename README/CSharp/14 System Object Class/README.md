## 0. Language version maps (C# 9-15)

These **indexes** list what shipped when and point into topical domains. Deep dives are in the sections below. [Update C# 9](<../30 Update CSharp 9/README.md>) · [10](<../31 Update CSharp 10/README.md>) · [11](<../32 Update CSharp 11/README.md>) · [12](<../33 Update CSharp 12/README.md>) · [13](<../34 Update CSharp 13/README.md>) · [14](<../35 Update CSharp 14/README.md>) · [15](<../36 Update CSharp 15/README.md>).
## 1. System.Object overview (the root of all reference types)

### [1.1. What `System.Object` is (and what it is not)](<./sections/1. System.Object overview/1.1. What System.Object is and is not.md>)

1. **The “top” of the type system** (every type ultimately relates to `object`, but value types take a different path via boxing)
2. **`object` keyword vs `System.Object` type** (aliasing, readability, and API intent)
3. **Why this matters in real systems** (API surfaces, reflection/diagnostics, logging, equality in collections)

### [1.2. The actual contract of `object` (what you inherit, always)](<./sections/1. System.Object overview/1.2. The actual contract of object.md>)

1. **The 4 methods you must understand** (`Equals`, `GetHashCode`, `ToString`, `GetType`)
2. **The identity helpers** (`ReferenceEquals`) and cloning primitive (`MemberwiseClone`)
3. **A mentor mental model** (identity vs value; representation vs meaning; “default” behaviors are rarely what you want in domain code)

## 2. Understanding the built-in methods (and when you should override)

### [2.1. `GetType()` and runtime type identity](<./sections/2. Understanding built-in methods/2.1. GetType and runtime type identity.md>)

1. **Exact runtime type** (what it returns, why it’s not virtual, and what that implies)
2. **Avoiding type-check chains** (prefer polymorphism, pattern matching, or data-driven dispatch)
3. **Performance notes** (reflection can be expensive; cache where it’s a real hotspot, not by habit)

### [2.2. `ToString()` as a debugging contract (not a serialization format)](<./sections/2. Understanding built-in methods/2.2. ToString as debugging contract not serialization.md>)

1. **What good `ToString()` means** (stable, readable, non-throwing; safe around nulls/partially-built state)
2. **Avoiding accidental allocations** (hot-path logging; structured logging; avoid building strings you won’t emit)
3. **Modern guidance** (`ISpanFormattable`, `TryFormat`, interpolated string handlers, and when not to use them)

### [2.3. `Equals(object?)` vs `==` (and why they often mean different things)](<./sections/2. Understanding built-in methods/2.3. Equals vs operator equality.md>)

1. **Reference equality vs value equality** (what default `object.Equals` does and what `==` does by default)
2. **Operator overloading rules** (consistency requirements: if you overload `==`, also implement `Equals`/`GetHashCode`)
3. **Nullability and correctness** (`object?`, `T?`, and avoiding NullReferenceException in equality code)

### [2.4. `GetHashCode()` and hash-based collections (the “don’t break dictionaries” rule)](<./sections/2. Understanding built-in methods/2.4. GetHashCode and hash-based collections.md>)

1. **Stability requirement** (hash codes must not change while an object is a key in a hash-based collection)
2. **Good composition** (`HashCode` helper; avoid home-grown mixing unless you have a proven need)
3. **Performance reality** (poor hash distribution destroys performance; a correct hash is a throughput feature)

### [2.5. `ReferenceEquals` and identity checks (when identity is the bug)](<./sections/2. Understanding built-in methods/2.5. ReferenceEquals and identity checks.md>)

1. **Why it exists** (bypass overloaded equality and compare identity)
2. **When you actually use it** (defensive checks in `Equals`, cycles, caches, flyweights, interning scenarios)
3. **Pitfalls** (boxing changes identity for value types; don’t use it as a general “equals” substitute)

### [2.6. `MemberwiseClone` and copying (shallow copy, sharp edges)](<./sections/2. Understanding built-in methods/2.6. MemberwiseClone shallow copy sharp edges.md>)

1. **What it does** (shallow copy of fields; reference fields still alias the same objects)
2. **Why “clone” is rarely a great public API** (versioning, invariants, identity, deep-copy ambiguity)
3. **Modern alternatives** (immutability, copy constructors, record `with`, explicit snapshot types)

## 3. Overriding correctly (so your type behaves well everywhere)

### [3.1. Value equality on classes: the full checklist](<./sections/3. Overriding correctly/3.1. Value equality on classes checklist.md>)

1. **Implement `IEquatable<T>` for performance and correctness**
2. **Respect the equality laws** (reflexive, symmetric, transitive; consistent with hash code)
3. **Avoiding common production bugs** (mutable keys, floating-point edge cases, string comparer choices)

### [3.2. Inheritance + equality: the hardest corner](<./sections/3. Overriding correctly/3.2. Inheritance and equality hard corner.md>)

1. **Why it’s hard** (Liskov + substitutability + transitivity break easily)
2. **Design guidance** (prefer sealed value objects; prefer composition; be explicit about base/derived equality strategy)
3. **Type checks** (`GetType()` vs `is` in equality) and the trade-offs

### [3.3. Records, record structs, and “generated” equality (C# 15 era)](<./sections/3. Overriding correctly/3.3. Records and generated equality.md>)

1. **What you get by default** (value-ish equality for records; how positional members participate)
2. **When defaults are wrong** (identity-based entities; ignoring fields; normalization/canonicalization)
3. **Performance and API design** (immutability vs allocations; careful with large graphs and deep comparisons)

## 4. `object` in APIs (and how it impacts performance)

### [4.1. Boxing and unboxing: why `object` can allocate](<./sections/4. object in APIs/4.1. Boxing and unboxing why object can allocate.md>)

1. **What boxing is** (value type → object: allocation + copy + type handle)
2. **Unboxing rules** (exact type match; invalid casts; null unboxing behavior)
3. **Hot path rule** (boxing is an allocation; allocations become GC work under load)

### [4.2. Avoiding boxing in modern C# (without “micro-optimizing”)](<./sections/4. object in APIs/4.2. Avoid boxing in modern CSharp.md>)

1. **Prefer generic APIs** (avoid `object` parameters for value-typed data paths)
2. **Avoid non-generic collections and non-generic interfaces in hot paths**
3. **Formatting/logging pitfalls** (`params object[]`, string interpolation, and “hidden” boxing; prefer structured logging)

### [4.3. Pattern matching with `object` (modern casting, safer branching)](<./sections/4. object in APIs/4.3. Pattern matching with object.md>)

1. **`is` patterns** (type patterns, property patterns, relational patterns for guards)
2. **Avoiding double work** (one match → one strongly typed variable)
3. **Maintainability** (pattern matching is great for boundaries; avoid turning core logic into a big `switch` on types)

## 5. Important points mentors insist you remember (production-grade checklist)

### [5.1. Checklist: correctness and performance for `System.Object` behaviors](<./sections/5. Important points/5.1. Checklist correctness performance for System.Object behaviors.md>)

1. **If you override equality, you must override hashing** (and keep it stable)
2. **Never use mutable objects as dictionary keys** (unless you *prove* the key fields never change)
3. **Don’t treat `ToString()` as data** (logging/debug only; define explicit serialization formats elsewhere)
4. **Avoid `object`-typed “catch-all” APIs in hot paths** (they invite boxing, type checks, and runtime failures)
5. **Measure before “optimizing”** (but treat broken hash/equality as correctness *and* performance bugs)

### [5.2. Common struct/value-type pitfalls that show up as `object` bugs](<./sections/5. Important points/5.2. Common value-type pitfalls that show up as object bugs.md>)

1. **Boxing changes identity** (two boxes of the same value are different objects)
2. **Interface calls can box** (non-generic interfaces + structs)
3. **Accidental boxing in logging/formatting** (especially with `params` and object-based APIs)

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere in this repo](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **General equality and hashing fundamentals in domain modeling** are covered in `CSharp Basic Object Oriented Programming`
2. **Boxing/unboxing and conversion categories** are covered deeply in `Type Conversion`
3. **Struct-specific boxing/interface pitfalls** are covered in `Structures`
4. **Virtual/override mechanics (language rules)** are covered in `Inheritance and Hiding and Overriding`
5. **Runtime/GC/JIT big picture** is covered in `Fundamental Theories`

## 7. Interview questions and answers (System.Object, modern C#)

### [7.1. Interview Q&A: System.Object methods, equality, and boxing](<./sections/7. Interview Q and A/7.1. Interview questions about System.Object.md>)

1. **What methods does every .NET type have?** (and what the defaults do)
2. **Explain `Equals` vs `==` vs `ReferenceEquals`** (with real examples and pitfalls)
3. **Why must `GetHashCode` align with `Equals`?** (and what breaks when it doesn’t)
4. **What is boxing/unboxing and why does it matter for performance?**
5. **How do records change equality design?** (and when you should not use record equality)

