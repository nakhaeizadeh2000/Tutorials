## 1. Generics fundamentals (why they exist and what problem they solve)

### [1.1. What generics are (type parameters, closed vs open constructed types, and “compile-time types”)](<./sections/1. Generics fundamentals/1.1. What generics are type parameters closed vs open types.md>)

1. **The core promise** (type safety + reuse without `object` casts)
2. **Open vs closed generics** (`List<T>` vs `List<int>`; where runtime types exist)
3. **How the CLR sees generics** (metadata, instantiations, and why this is not “templates”)

### [1.2. Generic type inference and overload resolution (what the compiler decides)](<./sections/1. Generics fundamentals/1.2. Type inference and overload resolution.md>)

1. **Inference rules** (when `T` can be inferred and when you must specify it)
2. **Ambiguity traps** (null/default literals, lambdas, method groups, overload sets)
3. **Mentor rule** (design APIs so the obvious call is also the correct one)

### [1.3. Invariance, covariance, contravariance (high-level mental model)](<./sections/1. Generics fundamentals/1.3. Invariance covariance contravariance mental model.md>)

1. **Why most generic types are invariant** (read/write roles make substitution unsafe)
2. **Where variance is allowed** (interfaces and delegates only; `out`/`in` rules)
3. **Practical API design** (producer vs consumer abstractions)

> Note: a deeper variance treatment already exists in `Type Conversion/2.2` in this repo; this domain focuses on generics design + constraints + performance.

---

## 2. Generic classes and generic type design (idiomatic, production-grade)

### [2.1. Designing generic classes (API honesty, naming, and ergonomics)](<./sections/2. Generic classes and type design/2.1. Designing generic classes API honesty and naming.md>)

1. **Choosing abstractions** (`IReadOnlyList<T>` vs `IEnumerable<T>` vs concrete types)
2. **Naming type parameters** (`T`, `TKey`, `TValue`, `TOptions`, `TResult`; when *not* to invent names)
3. **Versioning** (how adding constraints/type parameters becomes a breaking change)

### [2.2. Generic types and nullability (T, T?, and API contracts)](<./sections/2. Generic classes and type design/2.2. Generic types and nullability T and T question mark.md>)

1. **The hard truth** (`T` can be reference or value; “nullable” depends on the constraint story)
2. **When to use constraints** (`where T : class` / `struct` / `notnull`)
3. **Correctness rule** (don’t pretend you can always return non-null for unconstrained `T`)

### [2.3. Collections and generic composition patterns (real-world shapes)](<./sections/2. Generic classes and type design/2.3. Collections and generic composition patterns.md>)

1. **Expose minimal capabilities** (prefer read-only views; avoid leaking mutability)
2. **Avoid “generic wrapper soup”** (too many `Wrapper<Wrapper<T>>` layers kill readability)
3. **Performance framing** (iteration costs, allocations, and enumeration patterns)

---

## 3. Multiple generic parameters (power without creating chaos)

### [3.1. Two+ type parameters: when it’s right (and when it’s overengineering)](<./sections/3. Multiple generic parameters/3.1. Multiple type parameters when to use.md>)

1. **Clear use cases** (`Dictionary<TKey, TValue>`, `Result<TValue, TError>`, `IMapper<TIn, TOut>`)
2. **API readability** (type parameter order; call-site clarity; avoiding `T1/T2` APIs)
3. **Maintenance** (type explosions and constraints that become hard to satisfy)

### [3.2. Higher-order generics and “type constructor” workarounds (what C# can and cannot express)](<./sections/3. Multiple generic parameters/3.2. Higher-order generics limits and workarounds.md>)

1. **What’s missing** (no higher-kinded types; impacts on generic FP-style libraries)
2. **Common patterns** (interfaces/abstract factories; source generators; partial specialization workarounds)
3. **Mentor note** (prefer clarity over cleverness; don’t emulate HKT unless you truly need it)

---

## 4. Generic constraints (correctness and performance knobs)

### [4.1. Constraint taxonomy (what each constraint actually buys you)](<./sections/4. Generic constraints/4.1. Constraint taxonomy and meaning.md>)

1. **Reference/value constraints** (`class`, `struct`, `unmanaged`, `notnull`)
2. **Construction/type constraints** (`new()`, base class, interface constraints)
3. **Member constraints** (static abstract interface members and generic math patterns)

### [4.2. Constraints and performance (boxing, virtual dispatch, and “constrained calls”)](<./sections/4. Generic constraints/4.2. Constraints and performance boxing dispatch constrained calls.md>)

1. **Boxing avoidance** (keep pipelines generic; avoid `object` and non-generic interfaces in hot paths)
2. **Interface calls vs devirtualization** (what the JIT can often optimize; what it cannot)
3. **`EqualityComparer<T>.Default` and friends** (why they exist; when custom comparers matter)

### [4.3. Constraints and API usability (don’t make your users suffer)](<./sections/4. Generic constraints/4.3. Constraints and API usability.md>)

1. **Constraint minimalism** (add only what you truly need; constraints are part of your public contract)
2. **Error message quality** (constraints shape diagnostics; better constraints = clearer compiler errors)
3. **Alternative designs** (strategy objects, delegates, pattern matching, or overloads instead of constraints)

---

## 5. Generic methods (the “sharp tool” for reusable algorithms)

### [5.1. Generic methods vs generic classes (choosing the smallest abstraction)](<./sections/5. Generic methods/5.1. Generic methods vs generic classes.md>)

1. **Locality** (keep genericity where it’s needed; don’t generalize entire types prematurely)
2. **Inference ergonomics** (design signatures that infer well)
3. **Testability** (generic methods are easy to unit-test if they’re pure and deterministic)

### [5.2. Common generic method patterns (Try-pattern, comparers, projections)](<./sections/5. Generic methods/5.2. Common generic method patterns Try comparers projections.md>)

1. **Try-patterns** (`TryParse`, `TryGetValue`, `Try…` with `out` + no exceptions for expected control flow)
2. **Comparer/equality injection** (`IComparer<T>`, `IEqualityComparer<T>`, `Comparison<T>`)
3. **Projection and mapping** (`Func<TIn, TOut>`; avoid allocations/captures in hot paths)

### [5.3. Generic methods and spans (allocation-free slicing when it fits)](<./sections/5. Generic methods/5.3. Generic methods and spans allocation-free.md>)

1. **Why `Span<T>` exists** (slicing without allocations; stack-only safety constraints)
2. **API shapes** (`ReadOnlySpan<T>` inputs; avoid returning spans unless lifetime is crystal clear)
3. **Boundaries** (don’t force spans everywhere; use them where measurement shows wins)

---

## 6. Runtime behavior of generics (what the JIT does and why it matters)

### [6.1. Code generation model (shared generics, specialization, and AOT considerations)](<./sections/6. Runtime behavior/6.1. Code generation model shared vs specialized AOT.md>)

1. **Reference-type instantiation sharing** (why many `List<T>` instantiations share code)
2. **Value-type instantiations** (often require specialized code; impacts size/startup)
3. **AOT/trimming caution** (reflection-heavy generic activation; linkability constraints)

### [6.2. Generic virtual methods and interface dispatch (correctness + perf realities)](<./sections/6. Runtime behavior/6.2. Generic virtual methods and interface dispatch.md>)

1. **Virtual dispatch** (what gets inlined, what stays virtual, and why polymorphism has a cost)
2. **Interfaces over structs** (where boxing can reappear if you store structs as interfaces)
3. **Practical rule** (prefer clear design first; optimize when profiling shows it matters)

---

## 7. Important points mentors insist you remember about generics (checklist)

### [7.1. Generics checklist: correctness, API design, and performance](<./sections/7. Important points/7.1. Generics checklist correctness API design performance.md>)

1. **Keep APIs generic, not “objecty”** (type safety and perf; avoid hidden boxing)
2. **Constraints are contracts** (they affect callers, diagnostics, versioning, and performance)
3. **Avoid ambiguous overload sets** (inference failures and confusing call sites are real production costs)
4. **Pick honest abstractions** (`IEnumerable<T>` is not a collection; it’s a sequence)
5. **Avoid cleverness** (prefer readable generics; don’t emulate missing language features unless necessary)

---

## 8. Common generic pitfalls that turn into production bugs

### [8.1. Pitfalls: where generic code surprises even experienced devs](<./sections/8. Common pitfalls production bugs/8.1. Common generics pitfalls production bugs.md>)

1. **Assuming `default(T)` means “null”** (it’s zero/null/empty depending on `T`)
2. **Wrong equality** (`==` doesn’t work for unconstrained `T`; use `EqualityComparer<T>.Default`)
3. **Boxing through interfaces/logging** (structs + non-generic interfaces + `params object[]`)
4. **Reusing generic types with incompatible nullability contracts** (unconstrained `T` is tricky)
5. **Leaking allocations** (LINQ, captures, enumerator boxing in edge cases; measure hot paths)

---

## 9. Interview questions and answers (Generics, modern C# 15 framing)

### [9.1. Interview Q&A: generics, constraints, and performance](<./sections/9. Interview Q and A/9.1. Interview questions about generics.md>)

1. **Explain “generic type” vs “generic method”** (and when to prefer each)
2. **Explain constraints** (what each constraint enables; why constraints affect both correctness and perf)
3. **Explain variance** (producer/consumer model; why classes are invariant)
4. **Why `EqualityComparer<T>.Default` matters** (correctness + perf; avoids boxing and virtual dispatch patterns)
5. **Common perf pitfalls** (boxing, `object` APIs, `params object[]`, interface dispatch in hot paths)

---

## 10. Overlaps to avoid (where this domain stops)

### [10.1. Boundaries: what is covered elsewhere in this repo](<./sections/10. Overlaps to avoid/10.1. Boundaries what is covered elsewhere.md>)

1. **Variance basics** are already covered in `Type Conversion/2.2. Reference conversions (upcast) and variance basics`
2. **Boxing deep dives** live in `System Object Class/4. object in APIs` and `Structures/3.3. Boxing, interfaces, and generics`
3. **Method overload resolution in depth** is in `Methods/5. Overload resolution and method overloading`
4. **CLR/JIT/GC fundamentals** are in `Fundamental Theories` (use that for runtime-level deep theory)
