## 0. Language version maps (C# 9-15)

These **indexes** list what shipped when and point into topical domains. Deep dives are in the sections below. [Update C# 9](<../30 Update CSharp 9/README.md>) · [10](<../31 Update CSharp 10/README.md>) · [11](<../32 Update CSharp 11/README.md>) · [12](<../33 Update CSharp 12/README.md>) · [13](<../34 Update CSharp 13/README.md>) · [14](<../35 Update CSharp 14/README.md>) · [15](<../36 Update CSharp 15/README.md>).
## 1. Extension methods (language rules, semantics, and compilation model)

### [1.1. What extension methods are (syntax sugar, `this` parameter, static container)](<./sections/1. Extension methods language rules/1.1. What extension methods are syntax sugar this parameter static container.md>)

1. **IL shape** (static method + `[Extension]` attribute; no real instance member on the extended type)
2. **Accessibility and discovery** (namespace + `using`; the extended type must be in scope)
3. **First mental model** (you are calling a static helper with the receiver as the first argument—design and test accordingly)

### [1.2. Invocation, binding, and precedence (instance vs extension, extension vs extension)](<./sections/1. Extension methods language rules/1.2. Invocation binding precedence instance vs extension.md>)

1. **Instance methods win** (if applicable, instance members reduce extension candidates)
2. **Overload resolution + extension methods** (how the compiler builds the candidate set; “nearest” `using` scope)
3. **Generic extension methods** (type inference interactions; where ambiguity appears)

### [1.3. Extension methods and nullability (nullable receivers, annotations, and honest APIs)](<./sections/1. Extension methods language rules/1.3. Extension methods and nullability nullable receivers.md>)

1. **Nullable reference context** (what callers and implementers should assume about the receiver)
2. **Patterns** (guarding inside extensions; “fluent” chains vs surprise `NullReferenceException`)
3. **API hygiene** (prefer clarity over cute one-liners when null is plausible)

### [1.4. Versioning and evolution (adding instance methods later; changing `using` graphs)](<./sections/1. Extension methods language rules/1.4. Versioning adding instance methods and using graph changes.md>)

1. **Why extensions can silently stop applying** (a new instance method can shadow your extension for the same call shape)
2. **Public API discipline** (extensions as part of your library’s discoverability story; XML docs and namespaces)
3. **Team workflow** (code review rules for extension method additions—collision checks)

### [1.5. Extension methods vs default interface methods (when each is appropriate)](<./sections/1. Extension methods language rules/1.5. Extension methods vs default interface methods.md>)

1. **Capability model** (DIM puts behavior on the abstraction; extensions attach from outside)
2. **Versioning trade-offs** (DIM + override rules vs extension collisions)
3. **Performance and dispatch** (virtual/interface dispatch vs static call sites—think hot paths)

---

## 2. Extension methods — design, ergonomics, and testability

### [2.1. Designing fluent, discoverable extensions (names, namespaces, arity)](<./sections/2. Extension methods design and testability/2.1. Designing fluent discoverable extensions.md>)

1. **Namespace placement** (one feature area per namespace; avoid dumping everything into `Extensions`)
2. **Naming** (method name reads well at call site; avoid abbreviations that obscure side effects)
3. **Parameter design** (optional parameters + extensions + overload sets: keep the matrix small)

### [2.2. Extension methods vs alternatives (instance members, static helpers, local functions)](<./sections/2. Extension methods design and testability/2.2. Extension methods vs alternatives.md>)

1. **When an instance method is the right default** (core domain behavior belongs on the type)
2. **When static helpers win** (pure utilities with no “receiver story”)
3. **When local functions win** (private algorithm chunks; avoid polluting IntelliSense)

### [2.3. Testing, analyzers, and team conventions](<./sections/2. Extension methods design and testability/2.3. Testing analyzers team conventions.md>)

1. **Unit testing extensions** (test like static functions; mind reduced discoverability vs instance APIs)
2. **Roslyn analyzers** (ban patterns: e.g., extensions on `object`, extensions that hide I/O)
3. **Code review checklist** (namespace collisions, nullability contracts, overload traps)

---

## 3. Extension methods — performance, memory, and modern deployment (C# 15 / .NET 9+ framing)

### [3.1. What the JIT sees (static calls, devirtualization, inlining realities)](<./sections/3. Extension methods performance and deployment/3.1. What the JIT sees static calls inlining.md>)

1. **Call site shape** (extensions are static calls; compare to virtual/interface dispatch costs)
2. **Inlining** (small, stable helpers inline well; giant chained pipelines may not)
3. **Measure before “micro-optimizing”** (allocation and algorithm dominate more often than call overhead)

### [3.2. Allocations, captures, and LINQ-like patterns](<./sections/3. Extension methods performance and deployment/3.2. Allocations captures LINQ-like patterns.md>)

1. **Closures** (extensions that take `Func<>`/`Action<>` can allocate if they capture)
2. **Enumerable-heavy chains** (often allocation-heavy; `Span<T>`/`ReadOnlySpan<T>` alternatives where appropriate)
3. **`params` and modern overloads** (`params Span<T>` / `params ReadOnlySpan<T>` where available—reduce array allocations)

### [3.3. Trimming, AOT, and reflection surprises](<./sections/3. Extension methods performance and deployment/3.3. Trimming AOT reflection surprises.md>)

1. **Trimming** (reflection-based discovery of extension methods is fragile; prefer explicit calls)
2. **Native AOT constraints** (dynamic features and some patterns don’t port mechanically)
3. **Practical guidance** (validate publish modes early if extensions are central to your API surface)

---

## 4. Implicitly typed variables (`var`) and modern declaration-site inference

### [4.1. `var` rules (legality, inference, anonymous types, `var` patterns)](<./sections/4. Implicitly typed variables var/4.1. var rules legality inference anonymous types.md>)

1. **What must be inferable** (compiler errors vs “obvious to human” debates)
2. **Anonymous types** (`var` is often mandatory; projection shapes and maintenance)
3. **Pattern integrations** (`var` in patterns/`is`, deconstruction—where readability improves or suffers)

### [4.2. `var` vs explicit types (readability, refactoring, API boundaries)](<./sections/4. Implicitly typed variables var/4.2. var vs explicit types readability refactoring.md>)

1. **Mentor default** (use `var` when the type is obvious from the right-hand side; be explicit at public API edges)
2. **Refactoring safety** (renames and type changes: explicit types sometimes catch mistakes earlier)
3. **Numeric literals** (`var` + numeric literals can surprise—know the inferred type rules)

### [4.3. Target-typed `new` (`new()`) and constructor inference](<./sections/4. Implicitly typed variables var/4.3. Target-typed new constructor inference.md>)

1. **When `new()` improves signal-to-noise** (repeated type names on the left already carry meaning)
2. **When it hurts** (complex initializations where the constructed type should be visible)
3. **Modern style** (pair with clear variable names—names carry more weight when types are elided)

### [4.4. `var` with `ref`, `readonly ref`, `scoped`, and ref safety (C# 11+ / 12+ / 13+ / 14+ / 15)](<./sections/4. Implicitly typed variables var/4.4. var with ref readonly ref scoped ref safety.md>)

1. **Ref locals** (`ref var` patterns; don’t confuse “infer type” with “infer ref-ness”)
2. **Readability in low-level code** (sometimes explicit types improve ref safety reviews)
3. **Mentor rule** (prefer clarity in ref-heavy code; `var` is not a virtue when safety review suffers)

---

## 5. `dynamic` typing (runtime binding, the DLR, and practical limits)

### [5.1. What `dynamic` means in C# (bind at runtime, not “duck typing”)](<./sections/5. Dynamic typing/5.1. What dynamic means bind at runtime.md>)

1. **`dynamic` vs `object`** (late-bound calls vs explicit casts)
2. **Call sites and caching** (DLR rules at a high level; why repeated calls can stabilize)
3. **Interop scenarios** (COM, some dynamic JSON/XML models—know the escape hatches)

### [5.2. `dynamic` vs generics vs reflection vs source generators](<./sections/5. Dynamic typing/5.2. dynamic vs generics vs reflection vs source generators.md>)

1. **Prefer compile-time solutions** when performance and correctness tooling matter
2. **When `dynamic` is still reasonable** (interop boundaries, small surfaces, throwaway tooling)
3. **Modern alternatives** (source generators, `System.Text.Json` polymorphism, interface-based designs)

### [5.3. Performance and memory (CPU, allocations, call-site caches)](<./sections/5. Dynamic typing/5.3. Performance CPU allocations call site caches.md>)

1. **CPU cost model** (late binding, fewer inlining opportunities, harder JIT optimization)
2. **Allocation behavior** (understand hotspots; don’t use `dynamic` in tight loops by default)
3. **Profiling story** (`dynamic` can obscure bottlenecks—use targeted benchmarks)

### [5.4. Reliability and tooling (nullability, analyzers, refactoring)](<./sections/5. Dynamic typing/5.4. Reliability tooling nullability analyzers refactoring.md>)

1. **Analyzer limitations** (fewer compile-time guarantees; tests become more important)
2. **Refactoring hazards** (rename/method changes may fail at runtime)
3. **Mentor boundary** (keep `dynamic` behind narrow interfaces; don’t spread it across the domain layer)

---

## 6. Nested types (nested classes and related nested constructs in C#)

### [6.1. Nested types taxonomy (class, struct, record, interface, enum, delegate)](<./sections/6. Nested types/6.1. Nested types taxonomy class struct record interface enum delegate.md>)

1. **Access rules** (private nested types for implementation hiding; `protected` nesting for advanced scenarios)
2. **Relationship to outer type** (how the outer instance context works for non-static nested classes)
3. **Idioms** (small cohesive helpers that aren’t part of the public surface)

### [6.2. `static` nested classes vs instance nested classes (generics and lifetimes)](<./sections/6. Nested types/6.2. static nested vs instance nested generics lifetimes.md>)

1. **When `static` nested is the default** (pure helpers, builders, stateless factories)
2. **Instance nesting** (tight coupling to outer instance; mind unintentional lifetime extension)
3. **Generic outer types** (nested generic arity and readability; avoid “type soup”)

### [6.3. Compiler-generated nested types ( iterators, async state machines, closures )](<./sections/6. Nested types/6.3. Compiler-generated nested types iterators async closures.md>)

1. **What the compiler generates** (why debugging sometimes shows “weird” nested types)
2. **Performance awareness** (closures allocate; async methods generate state machines)
3. **Mental model** (your source-level “nested type” is not the same as compiler machinery—don’t conflate them in design discussions)

### [6.4. Modern related features (file-local types) and how they differ from nesting](<./sections/6. Nested types/6.4. File-local types vs nested types.md>)

1. **File-local types (C# 11)** (hide implementation details at file scope without nesting)
2. **Choose nesting vs file-local** (team conventions; testability; discoverability)
3. **Overlap guardrail** (don’t duplicate “implementation hiding” lessons across multiple mechanisms unnecessarily)

---

## 7. Important points mentors insist you remember (checklist)

### [7.1. Checklist: extensions, `var`, `dynamic`, nested types](<./sections/7. Important points checklist/7.1. Checklist extensions var dynamic nested types.md>)

1. **Extensions are static** (discovery and versioning rules can bite teams that treat them like instance members)
2. **`var` is not `dynamic`** (inference is compile-time; `dynamic` defers binding)
3. **Prefer explicit types at API boundaries** (public members: make contracts obvious)
4. **Nested types are a visibility tool** (not a license for mega-classes—keep outer types cohesive)
5. **Measure `dynamic` and allocation-heavy extensions** (CPU + allocations + thread pool interactions in server code)

---

## 8. Common pitfalls that turn into production bugs

### [8.1. Pitfalls: binding surprises, nullability holes, and perf traps](<./sections/8. Common pitfalls production bugs/8.1. Pitfalls binding nullability perf.md>)

1. **Adding `using` changes extension resolution** (silent behavior changes across files)
2. **Extension on null** (can run if static call allows it—don’t assume instance method guarantees)
3. **`var` obscuring risky conversions** (especially with conditional expressions and method groups)
4. **`dynamic` leaking outward** (turns large regions into late-bound code)
5. **Nested types holding references to outer instance** (unexpected lifetimes + test pain)

---

## 9. Interview questions and answers (extension methods, `var`, `dynamic`, nested types; C# 15 framing)

### [9.1. Interview Q&A: concepts, resolution rules, and performance trade-offs](<./sections/9. Interview Q and A/9.1. Interview questions extension methods var dynamic nested types.md>)

1. **How are extension methods implemented at the IL level?** (static method + attribute; receiver becomes argument)
2. **Why can an instance method “replace” an extension without changing call sites?** (binding precedence; shadowing story)
3. **When would you choose `var` vs an explicit type?** (readability, obviousness, numeric literals, API edges)
4. **What does `dynamic` defer until runtime?** (member resolution; contrast with compile-time typing)
5. **Nested class vs file-local type—why pick one?** (encapsulation, cohesion, discoverability, team conventions)
6. **How do extensions interact with trimming/AOT?** (reflection/discovery hazards; explicit calling patterns)
7. **CPU vs allocation trade-offs** (static calls vs interface dispatch; `dynamic` call sites; closure allocations)

---

## 10. Overlaps to avoid (where this domain stops)

### [10.1. Boundaries: what is covered elsewhere in this repo](<./sections/10. Overlaps to avoid/10.1. Boundaries what is covered elsewhere.md>)

1. **Basic `var` / declaration forms (intro level)** are already introduced in `CSharp language basics/3.1` (this domain goes deeper on style, ref safety, and modern inference)
2. **Method overload resolution (general rules)** lives in `Methods/5` (this domain focuses on extension-specific binding and precedence)
3. **Namespaces, `using`, and extension discovery surprises** are covered in `Namespaces` (especially static imports vs extensions); this domain assumes that baseline and extends with API/versioning/perf framing
4. **Static classes as extension containers + DI trade-offs** appear in `Partial and Static Classes, Enumerations/3` (this domain focuses on extension mechanics and library design)
5. **Default interface methods vs inheritance** are covered in `Abstract Classes and Interfaces` and `Inheritance and Hiding and Overriding` (this domain only contrasts with extensions where they compete)
6. **Fundamental CLR/JIT/GC theory** stays in `Fundamental Theories` (here: practical consequences for `dynamic`, allocations, and publish modes)
