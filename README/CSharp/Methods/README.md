## 1. Method fundamentals (what a method really is)

### [1.1. Understanding methods: signature, body, and invocation](<./sections/1. Method fundamentals/1.1. Understanding methods signature body invocation.md>)

1. **Method signature** (name + parameters + return type; generic methods; accessibility and modifiers)
2. **Call semantics** (compile-time overload resolution vs runtime dispatch; extension methods as syntax)
3. **Performance framing** (inlining, virtual dispatch, allocations from lambdas/closures, and exception costs)

### [1.2. Encapsulation with methods: invariants live at method boundaries](<./sections/1. Method fundamentals/1.2. Encapsulation with methods invariants boundaries.md>)

1. **Encapsulation** (state stays private; methods/properties enforce valid transitions)
2. **Design rules** (small public surface; intention-revealing method names; avoid “do everything” methods)
3. **Correctness + perf** (validate once at boundaries; avoid repeated expensive checks inside hot loops)

## 2. Locals, parameters, and `this` (how data moves in and out)

### [2.1. Local variables and parameters: scope, lifetime, and definite assignment](<./sections/2. Locals parameters and this/2.1. Local variables and parameters scope lifetime definite assignment.md>)

1. **Scope** (small scopes reduce bugs; shadowing rules; pattern variables)
2. **Lifetime** (stack locals vs heap captures; when closures extend lifetimes)
3. **Performance notes** (avoid capturing large objects; prefer `ReadOnlySpan<T>` for parsing-heavy code where appropriate)

### [2.2. The `this` keyword: instance context, capturing, and pitfalls](<./sections/2. Locals parameters and this/2.2. this keyword instance context capturing pitfalls.md>)

1. **What `this` means** (current instance reference; not available in static members)
2. **Capturing `this`** (closures, event handlers, async continuations; accidental object lifetime extension)
3. **Best practice** (avoid leaking `this` during construction; keep callbacks short-lived or unsubscribe deterministically)

## 3. Static methods (when behavior does not need an instance)

### [3.1. Static methods: intent, testability, and performance reality](<./sections/3. Static methods/3.1. Static methods intent testability performance.md>)

1. **When static is right** (pure functions, utilities, factory methods, stateless transforms)
2. **API design** (prefer static over singleton mutable state; use dependency injection when behavior has dependencies)
3. **Performance** (often trivially inlineable; avoid hidden global state and contention)

## 4. Passing objects and arguments (reference semantics and call-site features)

### [4.1. Object reference as arguments: aliasing, mutation, and defensive design](<./sections/4. Passing objects and arguments/4.1. Object references as arguments aliasing mutation defensive design.md>)

1. **Reference semantics** (passing a reference copies the reference, not the object; aliasing hazards)
2. **Mutation strategy** (prefer immutable inputs; if mutating, make it explicit in naming and documentation)
3. **Perf + safety** (avoid unnecessary cloning; prefer stable ownership boundaries and clear “who mutates” rules)

### [4.2. Optional parameters (default arguments): versioning and correctness](<./sections/4. Passing objects and arguments/4.2. Optional parameters default arguments versioning correctness.md>)

1. **How defaults work** (baked into the caller at compile time; not “looked up” at runtime)
2. **Versioning rule** (changing defaults is a breaking behavior change for already-compiled consumers)
3. **Best practice** (prefer method overloads for public APIs; use optional parameters mainly within apps/internal code)

### [4.3. Named arguments: readability vs long-term maintainability](<./sections/4. Passing objects and arguments/4.3. Named arguments readability maintainability.md>)

1. **Where it shines** (many optional parameters; boolean “flag” parameters; readability at call sites)
2. **Refactoring caveat** (parameter renames can break call sites that use names)
3. **Mentor rule** (use named args to avoid ambiguity; avoid overusing them as a “poor man’s builder”)

## 5. Overload resolution and method overloading (what the compiler chooses)

### [5.1. Method overloading: rules, ambiguity, and API design](<./sections/5. Overload resolution and overloading/5.1. Method overloading rules ambiguity API design.md>)

1. **Overload resolution basics** (best match, conversions, generics, `params`, optional parameters interactions)
2. **Ambiguity traps** (numeric literals, null, lambdas, method groups, default literals)
3. **API design** (prefer small coherent overload sets; avoid “overload soup”; keep behavior consistent)

## 6. Parameter modifiers and ref-like patterns (control copies and outputs)

### [6.1. Parameter modifiers (default): pass-by-value vs pass-by-reference mental model](<./sections/6. Parameter modifiers and ref-like patterns/6.1. Parameter modifiers default pass-by-value vs pass-by-reference.md>)

1. **Default behavior** (value types copy the value; reference types copy the reference)
2. **Correctness** (mutating a referenced object vs reassigning the parameter are different things)
3. **Performance** (avoid premature `ref`; start with clear code and optimize with measurements)

### [6.2. `ref` parameters: when mutation of the caller’s variable is intended](<./sections/6. Parameter modifiers and ref-like patterns/6.2. ref parameters when to use.md>)

1. **Meaning** (callee can reassign the caller’s variable; caller must pass an initialized variable)
2. **Good uses** (performance-sensitive code with large structs; low-level algorithms; Try-pattern optimizations)
3. **Risks** (aliasing, surprising side effects, harder reasoning/testing; avoid in “regular” business code)

### [6.3. `out` parameters: multiple returns and Try-pattern APIs](<./sections/6. Parameter modifiers and ref-like patterns/6.3. out parameters multiple returns Try patterns.md>)

1. **Meaning** (callee must assign before returning; caller variable does not need to be initialized)
2. **Best practice** (use for Try-pattern APIs like `TryParse`; prefer tuples/records for multi-values in app code)
3. **Performance** (can avoid allocations vs returning objects; keep API shape consistent)

### [6.4. `out` variable declaration: modern call-site ergonomics](<./sections/6. Parameter modifiers and ref-like patterns/6.4. out declaration modern call-site ergonomics.md>)

1. **Inline declarations** (`if (TryX(..., out var value))`) reduce scope and bugs
2. **Pattern synergy** (combine with guard clauses and early returns for clean code)
3. **Mentor rule** (keep the declared variable scope minimal; don’t leak it across large blocks)

### [6.5. `in` parameters: read-only by-ref and the “defensive copy” story](<./sections/6. Parameter modifiers and ref-like patterns/6.5. in parameters read-only by-ref defensive copies.md>)

1. **Intent** (read-only reference to caller data; useful for large structs)
2. **Reality** (`in` can still create temporaries/defensive copies in some cases—measure in hot paths)
3. **Guidance** (prefer `readonly struct` first; use `in` selectively where it actually helps)

### [6.6. Ref returns: returning by reference safely](<./sections/6. Parameter modifiers and ref-like patterns/6.6. ref returns returning by reference safely.md>)

1. **Use case** (indexers and high-performance APIs where you want to mutate an element without copying)
2. **Safety rules** (never return refs to locals/temporaries; understand ref escape rules)
3. **Design** (keep ref-returning APIs low-level and well-documented; prefer normal returns for general code)

### [6.7. `params` parameters: variable argument lists without overload explosion](<./sections/6. Parameter modifiers and ref-like patterns/6.7. params parameters variable argument lists.md>)

1. **Ergonomics** (nice call sites; reduces overload count)
2. **Allocation note** (`params` can allocate an array; avoid in hot loops or provide span-based alternatives)
3. **API guidance** (consider `ReadOnlySpan<T>` overloads for high-performance libraries)

## 7. Local functions, recursion, and structuring complex methods

### [7.1. Local functions: structure, scoping, and avoiding delegate allocations](<./sections/7. Local functions and recursion/7.1. Local functions structure scoping avoiding allocations.md>)

1. **Why local functions** (keep helpers near usage; tighter scope; clearer invariants)
2. **Perf** (can avoid allocations compared to lambdas in some scenarios; still beware captures)
3. **Testing/design** (extract to private methods when reuse/testing matters)

### [7.2. Static local functions: opt out of capturing by design](<./sections/7. Local functions and recursion/7.2. Static local functions opt out of capturing.md>)

1. **Guarantee** (cannot capture locals/`this`; prevents accidental closure allocations)
2. **When to use** (hot paths, callbacks, or any helper where capturing would be a bug)
3. **Rule of thumb** (default to `static` local functions when you don’t need captures)

### [7.3. Recursion: clarity vs stack depth and performance trade-offs](<./sections/7. Local functions and recursion/7.3. Recursion clarity stack depth performance trade-offs.md>)

1. **When it’s great** (tree traversal, divide-and-conquer, parsers)
2. **Risks** (stack overflow; repeated allocations; non-tail recursion; exception-heavy control flow)
3. **Alternatives** (explicit stack/queue; iterative loops; memoization when appropriate)

## 8. Important points to remember about methods (mentor-grade checklist)

### [8.1. Method design checklist: correctness, readability, and performance](<./sections/8. Important points about methods/8.1. Method design checklist correctness readability performance.md>)

1. **Clarity first** (single responsibility; explicit names; small scopes; predictable side effects)
2. **Perf-aware habits** (avoid hidden allocations; avoid exceptions for expected control flow; validate at boundaries)
3. **API hygiene** (avoid optional parameters in public libraries; consistent async naming; keep overload sets coherent)

## 9. Interview questions and answers (methods-focused, C# 15 era)

### [9.1. Common interview questions and answers about methods](<./sections/9. Interview Q and A/9.1. Interview questions about methods.md>)

1. **Explain pass-by-value vs pass-by-reference** (including reference types vs value types)
2. **Explain `ref`, `out`, and `in`** (correctness + performance trade-offs; when to avoid each)
3. **Explain overload resolution** (common ambiguity cases and how to design safe overload sets)

