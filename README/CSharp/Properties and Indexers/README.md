## 0. Language version maps (C# 9-15)

These **indexes** list what shipped when and point into topical domains. Deep dives are in the sections below. [Update C# 9](<../Update CSharp 9/README.md>) · [10](<../Update CSharp 10/README.md>) · [11](<../Update CSharp 11/README.md>) · [12](<../Update CSharp 12/README.md>) · [13](<../Update CSharp 13/README.md>) · [14](<../Update CSharp 14/README.md>) · [15](<../Update CSharp 15/README.md>).

## 1. Properties fundamentals (what a property really is)

### [1.1. Properties vs fields: contract vs storage (boundary, not overlap)](<./sections/1. Properties fundamentals/1.1. Properties vs fields contract vs storage.md>)

1. **What a property represents** (an API surface and contract; not "just a field with syntax")
2. **Why properties exist** (encapsulation, invariants, versioning, binding/serialization friendliness)
3. **Performance reality** (JIT inlines trivial accessors; correctness and API evolution matter more than micro-optimizing)

### [1.2. Accessors and semantics: `get`, `set`, `init`, and expression-bodied members](<./sections/1. Properties fundamentals/1.2. Accessors semantics get set init expression-bodied.md>)

1. **Accessor meaning** (`get` reads state, `set` mutates state, `init` is construction-time assignment)
2. **Expression-bodied accessors** (clarity vs debugging; when to avoid "clever" one-liners)
3. **Modern guidance (C# 15 era)** (prefer explicit contracts; avoid magic side effects in getters)

### [1.3. Property invariants: where validation belongs (and what not to do)](<./sections/1. Properties fundamentals/1.3. Property invariants validation and anti-patterns.md>)

1. **Validation strategy** (validate at boundaries; keep objects valid at all times)
2. **Anti-patterns** (throwing from getters for "normal" control flow; expensive work in accessors)
3. **Thread-safety framing** (properties don't make state thread-safe; synchronization belongs in design)

## 2. Creating properties (manual, auto, and "backing field" patterns)

### [2.1. Manual properties with backing fields: when you actually need them](<./sections/2. Creating properties/2.1. Manual properties with backing fields.md>)

1. **When manual is required** (validation, lazy initialization, caching, raising events, atomic updates)
2. **Correctness** (avoid recursion; preserve invariants; keep setter logic centralized)
3. **Performance** (avoid repeated expensive computations; consider caching vs staleness and memory growth)

### [2.2. Auto-properties: default choice for most code](<./sections/2. Creating properties/2.2. Auto-properties default choice.md>)

1. **Why auto-properties** (less boilerplate; fewer bugs; cleaner refactors)
2. **Guidance** (start with auto; switch to manual when a real requirement appears)
3. **Versioning** (you can evolve from auto-property to manual without breaking callers)

### [2.3. The `field` keyword (synthesized backing fields; C# 13 preview / C# 14+)](<./sections/2. Creating properties/2.3. field keyword backing fields property accessors CSharp 13 14.md>)

1. **Less boilerplate** when one accessor needs validation or logic
2. **Naming collisions** (`field` vs member named `field`) - disambiguation rules
3. **Deep dive**: `Fields` domain for storage model; this section is **accessor-centric**

## 3. Read-only and write-only properties (and the modern alternatives)

### [3.1. Read-only properties: `get`-only, `private set`, and "immutability by API"](<./sections/3. Read-only and write-only properties/3.1. Read-only properties get-only private set immutability.md>)

1. **Get-only vs private-set** (observable immutability vs internal mutation; invariants and testing impact)
2. **`init` vs `set`** (construction-time assignment for DTO/config vs runtime mutation)
3. **Domain guidance** (prefer immutability for value-like state; keep mutation explicit and controlled)

### [3.2. Write-only properties: why they're usually a bad API](<./sections/3. Read-only and write-only properties/3.2. Write-only properties why usually bad.md>)

1. **Design smell** (callers can't observe state; debugging and correctness suffer)
2. **Better alternatives** (methods that express intent; command-style APIs; "Try" patterns where failures are expected)
3. **When they exist** (rare integration/binding scenarios; keep them narrow and documented)

## 4. Auto-properties with accessor accessibility (API shaping without leaking mutability)

### [4.1. Asymmetric accessibility: `public get; private set;` and friends](<./sections/4. Auto-properties with accessor accessibility/4.1. Asymmetric accessibility patterns.md>)

1. **What's allowed** (different access levels on `get`/`set`/`init` within language rules)
2. **Common shapes** (`public get; private set;`, `public get; internal set;`, `public get; private init;`)
3. **API design rule** (make the safe thing easy; keep mutation close to invariant logic)

### [4.2. `init` accessors + `required`: initialization contracts and correctness](<./sections/4. Auto-properties with accessor accessibility/4.2. init required initialization contracts.md>)

1. **`required` for completeness** (compile-time enforcement of presence; still validate for untrusted inputs)
2. **DTO vs domain** (use `required`/`init` heavily in DTO/config; keep domain invariants strong)
3. **Interop realities** (serializers/ORMs; when to use constructors/factories vs `init`)

### [4.3. Implicit index access with `^` in object initializers (C# 13+)](<./sections/4. Auto-properties with accessor accessibility/4.3. Implicit index access from end in object initializers CSharp 13.md>)

1. **Tail initialization** of single-dimension collection properties without forward-index math
2. **Correctness**: collection must exist and be sized; bounds still apply
3. **Pairs with**: `Arrays/1.5` (`^` and `Range` mental model)

## 5. Auto-implemented property initializers (defaults, nullability, and initialization order)

### [5.1. Property initializers: deterministic defaults without constructors](<./sections/5. Auto-implemented property initializers/5.1. Property initializers deterministic defaults.md>)

1. **Where they shine** (simple defaults, collections, option objects, immutable-ish models)
2. **Nullability** (avoid "null until set"; prefer non-null defaults or required initialization)
3. **Order and pitfalls** (initializer runs before constructor body; avoid referencing `this` in unsafe ways)

### [5.2. Collection and reference defaults: avoid shared mutable state bugs](<./sections/5. Auto-implemented property initializers/5.2. Collection defaults avoid shared state bugs.md>)

1. **Per-instance allocation** (don't accidentally share a mutable instance across objects)
2. **Read-only exposure** (return safe views; avoid representation leaks)
3. **Performance** (allocate only when needed; consider lazy init where it's measurable)

## 6. Indexers (properties with parameters) and their design constraints

### [6.1. Indexer fundamentals: syntax, semantics, and typical uses](<./sections/6. Indexers/6.1. Indexer fundamentals syntax semantics uses.md>)

1. **What an indexer is** (parameterized property; often models a lookup/collection-like view)
2. **Typical patterns** (dictionary-style lookup, matrix/2D access, cache facade, span-like element access)
3. **Correctness** (argument validation; exception vs Try-pattern; predictable behavior)

### [6.2. Indexer performance: bounds checks, allocations, and ref returns (advanced)](<./sections/6. Indexers/6.2. Indexer performance bounds checks allocations ref returns.md>)

1. **Avoiding hidden allocations** (boxing, string churn, LINQ, iterator allocations inside indexers)
2. **Exception strategy** (don't throw for expected misses on hot paths; offer `TryGetValue`-style APIs)
3. **Advanced shapes** (ref returns for high-performance scenarios; keep them low-level and safe)

## 7. Important points to remember about properties and indexers (mentor-grade checklist)

### [7.1. Checklist: correctness, performance, and maintainability](<./sections/7. Important points/7.1. Checklist correctness performance maintainability.md>)

1. **Keep getters cheap and predictable** (no I/O; no locks unless you must; no surprising side effects)
2. **Enforce invariants** (validate at the boundary; keep objects valid after every mutation)
3. **Avoid representation leaks** (don't expose mutable internals; prefer read-only views)
4. **Be explicit about thread-safety** (document it; synchronize or confine state; properties don't "make it safe")
5. **Prefer modern constructs** (`init`, `required`, immutability patterns) where they improve correctness

### [7.2. Common pitfalls that show up in production](<./sections/7. Important points/7.2. Common pitfalls that show up in production.md>)

1. **Throwing from getters under normal conditions** (breaks debugging, logging, binding/serialization expectations)
2. **Expensive computed properties** (accidental \(O(n)\) per call; cache carefully and invalidate correctly)
3. **"Write-only" APIs** (hard to test and reason about; replace with intention-revealing methods)

## 8. Overlaps to avoid (where this domain stops)

### [8.1. Boundaries: what is covered elsewhere in this repo](<./sections/8. Overlaps to avoid/8.1. Boundaries what is covered elsewhere.md>)

1. **Fields vs properties deep dive** (covered in `Fields` ? "Fields vs properties" + readonly/static/memory model)
2. **Method-level API design & overloads** (covered in `Methods` ? parameter modifiers, ref returns, Try-patterns)
3. **Object initialization and `required` strategy** (covered in `Constructors` ? initialization contracts, object initializers)
4. **Threading & synchronization** (covered in `Cuncurrent & Parallel`)
5. **OOP encapsulation and invariants (big picture)** (covered in `CSharp Basic Object Oriented Programming`)

## 9. Interview questions and answers (properties & indexers, C# 15 era)

### [9.1. Common interview questions: properties, `init`, `required`, and API design](<./sections/9. Interview Q and A/9.1. Interview questions about properties and indexers.md>)

1. **Explain properties vs fields** (encapsulation, versioning, invariants, performance reality)
2. **Explain `get`-only vs `private set` vs `init`** (immutability trade-offs; correctness and frameworks)
3. **Accessor accessibility** (how to shape an API; `public get; private set;` patterns)
4. **Indexers vs methods** (when an indexer is appropriate; when it hides intent)
5. **Performance questions** (computed properties, caching, exceptions vs Try-pattern; allocations in accessors)

