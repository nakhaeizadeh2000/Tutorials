## 0. Language version maps (C# 9-15)

These **indexes** list what shipped when and point into topical domains. Deep dives are in the sections below. [Update C# 9](<../30 Update CSharp 9/README.md>) · [10](<../31 Update CSharp 10/README.md>) · [11](<../32 Update CSharp 11/README.md>) · [12](<../33 Update CSharp 12/README.md>) · [13](<../34 Update CSharp 13/README.md>) · [14](<../35 Update CSharp 14/README.md>) · [15](<../36 Update CSharp 15/README.md>).

### The `field` contextual keyword (C# 13+)

The **`field`** keyword is used **inside property accessors** to refer to the compiler-generated backing field for auto-properties. Full treatment (including C# 14 refinements) lives under **Properties and Indexers**: [2.3. `field` keyword](<../08 Properties and Indexers/sections/2. Creating properties/2.3. field keyword backing fields property accessors CSharp 13 14.md>). This **Fields** domain covers declared fields, `readonly`, initialization, and semantics, not the accessor-only `field` syntax.

## 1. Field fundamentals (what a field really is in C#)

### [1.1. Understanding fields: storage, lifetime, and defaults](<./sections/1. Field fundamentals/1.1. Understanding fields storage lifetime and defaults.md>)

1. **What a field is** (a storage slot on an instance or a type; not an API surface)
2. **Where it lives** (instance fields in objects; static fields in type storage; stack locals are not fields)
3. **Defaults and initialization** (default(T), nullable context, initialization timing, and why "uninitialized" is a bug)

### [1.2. Field initialization and execution order (instance vs static)](<./sections/1. Field fundamentals/1.2. Field initialization and execution order.md>)

1. **Instance initialization order** (field initializers "base ctor" derived ctor; avoid calling virtuals)
2. **Static initialization order** (type initializer semantics, beforefieldinit, and first-touch costs)
3. **Failure modes** (type initialization exceptions, partial initialization, and how to keep startup predictable)

### [1.3. Fields vs properties: boundary and intent (no overlap, just the rule)](<./sections/1. Field fundamentals/1.3. Fields vs properties boundary and intent.md>)

1. **Rule of thumb** (fields are implementation detail; properties are the public contract)
2. **Versioning** (public fields are a future-breaking promise; properties preserve evolution)
3. **Performance reality** (JIT inlines simple properties; "field vs property" is rarely the bottleneck)

## 2. Accessibility and encapsulation for fields (access modifiers done right)

### [2.1. Access modifiers of fields: what's allowed and what it means](<./sections/2. Accessibility and encapsulation for fields/2.1. Access modifiers of fields.md>)

1. **Visibility matrix** (`private`, `protected`, `internal`, `public`, and combinations like `protected internal`)
2. **Encapsulation** (keep mutable fields private; expose behavior and stable read-only views)
3. **Library hygiene** (prefer `internal` + tests, `InternalsVisibleTo`, and minimal public surface)

### [2.2. Read-only exposure patterns (without leaking mutable state)](<./sections/2. Accessibility and encapsulation for fields/2.2. Read-only exposure patterns.md>)

1. **Safe shapes** (`IReadOnlyList<T>`, `IReadOnlyCollection<T>`, `ReadOnlySpan<T>` where appropriate)
2. **Avoiding representation leaks** (don't expose arrays/lists that callers can mutate)
3. **Perf notes** (avoid per-call copies; make allocations explicit when you need snapshots)

## 3. Playing with fields across multiple objects (reference semantics, aliasing, and correctness)

### [3.1. Instance fields: each object gets its own state](<./sections/3. Multiple objects and field semantics/3.1. Instance fields each object gets its own state.md>)

1. **Per-instance independence** (two objects ? two sets of instance fields)
2. **Copying references vs copying objects** (assignment copies references for classes; values for structs)
3. **Debugging mental model** (object identity, aliasing, and "why changing A changed B")

### [3.2. Sharing state intentionally: references, immutability, and defensive copying](<./sections/3. Multiple objects and field semantics/3.2. Sharing state intentionally.md>)

1. **When sharing is fine** (immutable objects, interned strings, shared caches with clear ownership)
2. **When sharing bites** (mutable shared objects ? accidental coupling, race conditions, and spooky action)
3. **Safer strategies** (immutability, copy-on-write, or explicit "owner" object that mediates mutation)

## 4. Static fields (global state, type lifetime, and concurrency)

### [4.1. Static fields: when they're appropriate (and when they're a trap)](<./sections/4. Static fields/4.1. Static fields when appropriate and when a trap.md>)

1. **Valid uses** (constants, caches with bounded growth, shared immutable singletons, counters/metrics)
2. **Hidden costs** (test coupling, order dependence, multi-tenant bugs, memory retention until process exit)
3. **Best practice** (prefer DI for dependencies; avoid static mutable state in libraries)

### [4.2. Static initialization: type constructors, Lazy, and thread-safety](<./sections/4. Static fields/4.2. Static initialization type constructors Lazy thread-safety.md>)

1. **Static ctor semantics** (runs once; thread-safe; can deadlock if you block on async or take locks badly)
2. **Lazy patterns** (`Lazy<T>`, `LazyInitializer`, and simple static readonly initialization)
3. **Perf guidance** (keep static initialization cheap; avoid heavy I/O; prefer explicit initialization in apps)

### [4.3. Static fields in concurrent code: memory model basics you must know](<./sections/4. Static fields/4.3. Static fields in concurrent code memory model basics.md>)

1. **Visibility** (writes aren't magically visible across threads without synchronization)
2. **Tools** (`lock`, `Interlocked`, `Volatile`, and immutable publication patterns)
3. **Common pitfall** (double-checked locking and "looks safe" patterns that aren't)

## 5. `const` fields and local constants (compile-time constants and inlining)

### [5.1. Constant fields (`const`): compile-time constants and inlining risks](<./sections/5. Const fields and local const/5.1. Constant fields const compile-time constants and inlining risks.md>)

1. **What `const` means** (compile-time substitution; no storage slot at runtime in most cases)
2. **Versioning trap** (changing a public const requires consumers to recompile; otherwise they keep the old value)
3. **What can be const** (primitives, enums, string, null; why most "config" should not be const)

### [5.2. Local constants (`const` locals): scope, clarity, and performance](<./sections/5. Const fields and local const/5.2. Local constants const locals scope clarity performance.md>)

1. **When it helps** (naming magic numbers, making intent explicit, keeping expressions readable)
2. **Scope discipline** (smallest possible scope beats "constants at top of file")
3. **Perf reality** (compile-time substitution; choose for readability/maintainability first)

## 6. `readonly` fields (immutability, safety, and performance)

### [6.1. `readonly` instance fields: immutability and invariants](<./sections/6. Readonly fields/6.1. Readonly instance fields immutability and invariants.md>)

1. **What it guarantees** (assignment only in declaration or constructors; supports "valid states only")
2. **What it does NOT guarantee** (the referenced object can still be mutable; readonly is not deep immutability)
3. **Design guidance** (prefer immutable value objects; expose behavior, not mutability)

### [6.2. `static readonly`: the "runtime constant" pattern](<./sections/6. Readonly fields/6.2. static readonly runtime constant pattern.md>)

1. **Why it exists** (values not allowed in const: `Guid`, `DateTime`, complex objects, arrays)
2. **Initialization** (static initializer or static ctor; thread-safe publication semantics)
3. **Performance** (one-time allocation; beware large graphs retained for process lifetime)

### [6.3. Readonly and structs: `readonly struct`, defensive copies, and `in` parameters](<./sections/6. Readonly fields/6.3. Readonly and structs defensive copies and in parameters.md>)

1. **Why readonly matters for structs** (prevents hidden defensive copies and accidental mutation)
2. **`in` trade-offs** (can help for larger structs; can hurt if it forces ?measure)
3. **Hot path rules** (avoid large mutable structs; prefer small immutable structs; watch boxing)

## 7. Important points to remember about fields (mentor-grade "gotchas")

### [7.1. Field "gotchas" checklist (correctness + performance)](<./sections/7. Important points about fields/7.1. Field gotchas checklist correctness performance.md>)

1. **Avoid public mutable fields** (invariants, testability, and API evolution)
2. **Be explicit about thread-safety** (static mutable state needs synchronization or confinement)
3. **Understand const vs readonly** (compile-time inlining vs runtime initialization; versioning implications)

### [7.2. Patterns that look fine but fail in production](<./sections/7. Important points about fields/7.2. Patterns that look fine but fail in production.md>)

1. **Unbounded static caches** (memory leaks by design; require eviction/limits)
2. **Lazy init without synchronization** (races, double initialization, torn reads)
3. **"Readonly reference means immutable" fallacy** (it only freezes the reference, not the object)

## 8. Interview questions and answers (fields-focused, C# 15 era)

### [8.1. Common interview questions: const vs readonly vs static vs instance](<./sections/8. Interview Q and A/8.1. Interview questions const readonly static instance.md>)

1. **Explain differences** (meaning, runtime behavior, and where values are stored)
2. **Versioning and API design** (public const in libs, why it's risky)
3. **Thread-safety framing** (static mutable fields, memory visibility, and safe publication)

### [8.2. Scenario questions: fix a bug caused by shared field state](<./sections/8. Interview Q and A/8.2. Scenario questions fix a bug caused by shared field state.md>)

1. **Aliasing bug** (two objects unexpectedly share the same mutable reference)
2. **Race condition** (static counter, cache, or singleton mutated concurrently)
3. **Good answer shape** (explain invariants, propose safe design, and mention perf trade-offs)


