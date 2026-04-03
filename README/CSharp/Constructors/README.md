## 0. Language version maps (C# 9-15)

These **indexes** list what shipped when and point into topical domains. Deep dives are in the sections below. [Update C# 9](<../Update CSharp 9/README.md>) · [10](<../Update CSharp 10/README.md>) · [11](<../Update CSharp 11/README.md>) · [12](<../Update CSharp 12/README.md>) · [13](<../Update CSharp 13/README.md>) · [14](<../Update CSharp 14/README.md>) · [15](<../Update CSharp 15/README.md>).
## 1. Constructor fundamentals (what they are and why they exist)

### [1.1. Instance constructors: building a valid object (invariants, lifetime, and costs)](<./sections/1. Constructor fundamentals/1.1. Instance constructors building a valid object.md>)

1. **What “constructing an instance” means** (allocation + initialization; constructor establishes invariants)
2. **What belongs in a constructor** (cheap validation + state setup) vs **what doesn’t** (I/O, background work, blocking on async)
3. **Performance framing** (hot-path allocations, hidden work, object graphs, and “constructor does too much” anti-pattern)

### [1.2. Default constructors, parameterless constructors, and “why did I get one?”](<./sections/1. Constructor fundamentals/1.2. Default constructors parameterless and why you got one.md>)

1. **Compiler-provided default constructors** (when they exist for classes/structs; what “default(T)” means)
2. **Parameterless constructor intent** (framework/serializer/DI expectations vs invariant safety)
3. **Modern guidance** (prefer explicit initialization contracts: parameterized ctors, `required`, primary ctors, factories)

### [1.3. Execution order: field initializers, base constructors, and derived constructors](<./sections/1. Constructor fundamentals/1.3. Execution order fields base derived.md>)

1. **Actual order** (defaults → base field initializers → base ctor → derived field initializers → derived ctor)
2. **Correctness hazard** (virtual dispatch during construction; partially initialized state)
3. **Mentor patterns** (factories, non-virtual init, composition over inheritance when init ordering gets tricky)

## 2. Constructor kinds (instance, static, and the language features around them)

### [2.1. Static constructors (type initializers): semantics, first-touch cost, and failure modes](<./sections/2. Constructor kinds/2.1. Static constructors type initializers semantics pitfalls.md>)

1. **One-time semantics** (thread-safe; runs at most once; `TypeInitializationException` poison)
2. **Latency & reliability** (first-touch p99 spikes; avoid I/O/locks; never block on async)
3. **Alternatives** (`static readonly`, `Lazy<T>`, explicit app startup init for predictable cold start)

### [2.2. Primary constructors and `required` members (C# 15 era initialization contracts)](<./sections/2. Constructor kinds/2.2. Primary constructors and required members.md>)

1. **When primary constructors shine** (small stable types; reducing boilerplate without hiding complexity)
2. **`required` vs constructor parameters** (compile-time enforcement vs runtime validation; object initializer ergonomics)
3. **API design rule** (choose one “main” initialization contract; avoid mixing patterns that create invalid transient states)

### [2.3. Records, record structs, and constructor-generated members (equality, immutability, and versioning)](<./sections/2. Constructor kinds/2.3. Records and constructor generated members.md>)

1. **Generated behaviors** (value-like equality, deconstruction, `with`, printing) and how ctors interact
2. **Immutability strategy** (`init`/`required`/positional records; when mutation is still possible)
3. **Performance reality** (copying costs, allocations, and where records are a net win vs a footgun)

## 3. Overloading, chaining, and designing constructor sets that scale

### [3.1. Constructor overloading rules (and how overload resolution bites)](<./sections/3. Overloading and chaining/3.1. Constructor overloading rules and pitfalls.md>)

1. **Overload resolution pitfalls** (optional parameters, `params`, `null`, numeric literals, ambiguous overloads)
2. **Behavior consistency** (all overloads must establish the same invariants; avoid “half-valid” overloads)
3. **Public API hygiene** (prefer fewer overloads + named factories over overload soup)

### [3.2. Constructor chaining: `this(...)` and `base(...)` (centralize invariants)](<./sections/3. Overloading and chaining/3.2. Constructor chaining this and base.md>)

1. **Single source of truth** (one “core” ctor does validation; other overloads forward)
2. **Base/derived interaction** (what base must guarantee; what derived must not assume)
3. **Performance and clarity** (avoid duplicate work; keep initialization cheap and obvious)

### [3.3. Copy constructors and cloning patterns (safe copying without surprises)](<./sections/3. Overloading and chaining/3.3. Copy constructors and cloning patterns.md>)

1. **Shallow vs deep copy** (what you copy; what you share; why deep copies are dangerous)
2. **Modern alternatives** (immutability, records + `with`, explicit “copy with changes” APIs)
3. **Performance notes** (copying large graphs; defensive copying vs API contracts)

## 4. Object initialization styles (constructors, object initializers, and builders)

### [4.1. Object initializer syntax: power, limits, and invariants](<./sections/4. Object initialization styles/4.1. Object initializer syntax power limits invariants.md>)

1. **What it actually does** (constructor call + property/field assignments; not atomic)
2. **Correctness pitfalls** (transient invalid states; invariants enforced too late; partial initialization)
3. **Where it fits** (DTOs, configuration objects, tests) vs where it doesn’t (core domain invariants)

### [4.2. `init` accessors, `required`, and “make illegal states unrepresentable”](<./sections/4. Object initialization styles/4.2. init required and illegal states unrepresentable.md>)

1. **`init` semantics** (construction-time assignment; still not deep immutability)
2. **`required` enforcement** (compile-time only; still validate at runtime for untrusted inputs)
3. **Good API shapes** (prefer constructor/factory for invariants; use `required` for data-carrier completeness)

### [4.3. Builders and factories vs constructors (when you need names, steps, or async)](<./sections/4. Object initialization styles/4.3. Builders and factories vs constructors.md>)

1. **When constructors can’t express intent** (multiple modes, optional features, versioned defaults)
2. **Async creation** (constructors can’t be `async`; factories can)
3. **Performance** (avoid allocating builder objects in hot paths unless it materially improves correctness/clarity)

## 5. “Important points” mentors insist you remember (correctness + performance)

### [5.1. Constructor checklist: correctness, safety, and maintainability](<./sections/5. Important points/5.1. Constructor checklist correctness safety maintainability.md>)

1. **Never leak `this` during construction** (events, callbacks, virtual calls, async continuations)
2. **Keep initialization deterministic** (no ambient state surprises; avoid static global dependencies)
3. **Versioning mindset** (public ctors are contracts; adding overloads is easier than changing behavior)

### [5.2. Performance and allocation pitfalls during construction](<./sections/5. Important points/5.2. Performance and allocation pitfalls during construction.md>)

1. **Hidden allocations** (capturing lambdas, `params` arrays, LINQ, string churn in ctors)
2. **Static/one-time costs** (type initialization p99 spikes; expensive reflection; huge static graphs)
3. **Hot path rule** (prefer simple construction; move expensive work behind explicit methods and cache intentionally)

### [5.3. Thread-safety and publication: when constructed objects become visible to other threads](<./sections/5. Important points/5.3. Thread-safety and publication.md>)

1. **Safe publication basics** (don’t publish partially constructed objects; avoid races)
2. **Immutability helps** (`readonly`/`init`/records; fewer synchronization needs)
3. **Where to learn more** (deep memory model/synchronization lives in `Cuncurrent & Parallel` and `Fields`)

## 6. Integration realities (DI, serialization, ORMs, and frameworks)

### [6.1. Constructors with Dependency Injection (DI): correct lifetimes and testability](<./sections/6. Integration realities/6.1. Constructors with DI lifetimes testability.md>)

1. **Constructor injection** (preferred; keeps invariants explicit; easy tests)
2. **Lifetime pitfalls** (capturing scoped services in singletons; static state as hidden dependency)
3. **Perf notes** (DI cost is usually not your bottleneck; focus on allocations + I/O + caching)

### [6.2. Serialization and ORMs: when frameworks want parameterless constructors](<./sections/6. Integration realities/6.2. Serialization and ORMs parameterless constructors.md>)

1. **Domain vs DTO separation** (don’t weaken your domain invariants for serializer convenience)
2. **Patterns** (private/protected parameterless ctors where required; explicit mapping; source-generated serializers)
3. **Correctness** (post-deserialization validation; invariants must still hold)

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries: what is covered elsewhere in this repo](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **Static initialization patterns** (covered deeply in `Fields` → static initialization / memory model)
2. **General OOP & invariants** (covered in `CSharp Basic Object Oriented Programming`)
3. **Optional parameters / overload resolution in general** (covered in `Methods`)
4. **Threading and memory model** (covered in `Cuncurrent & Parallel`)
5. **Runtime/GC/JIT big picture** (covered in `Fundamental Theories`)

## 8. Interview questions and answers (Constructors, C# 15 era)

### [8.1. Interview Q&A: constructors, initialization order, and modern initialization contracts](<./sections/8. Interview Q and A/8.1. Interview questions about constructors.md>)

1. **Default vs parameterless vs static constructor** (semantics, timing, failure modes)
2. **Object initializer vs constructor vs `required`** (invariants, transient invalid states, versioning)
3. **Why “no virtual calls in constructors”** (what actually happens; how to design around it)
4. **Factories vs constructors** (async, caching, error handling without exceptions)
5. **Performance questions** (allocations, first-touch static costs, hidden work, p99 framing)
