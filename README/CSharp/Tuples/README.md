## 1. Tuples in C# 15 (multi-value without a new type)

### [1.1. Tuple types overview: `System.Tuple` vs Value Tuples (`(T1,T2)`)](<./sections/1. Tuples fundamentals/1.1 Tuple types overview SystemTuple vs ValueTuples.md>)

1. **Two tuple "families" exist**: `System.Tuple<...>` (reference type) vs Value Tuples from syntax like `(T1, T2)` / `(a, b)` (value type).
2. **Default choice in modern C#**: prefer Value Tuples for lightweight multi-values because they commonly avoid extra heap allocations (when they don't get boxed or escape).
3. **Interop/legacy**: `System.Tuple<...>` still shows up in older APIs, some reflection scenarios, and APIs that predate Value Tuples.
4. **Mental model**: tuples are *structural carriers* (positional items + optional element names) rather than "domain entities" with identity.
5. **Generic/runtime access**: both families support runtime element enumeration via `System.Runtime.CompilerServices.ITuple`, which is handy for generic formatting/logging.

### [1.2. Tuple shape, element names, and what affects type compatibility](<./sections/1. Tuples fundamentals/1.2 Tuple shape element names and type compatibility.md>)

1. **Value tuple element names are source-level metadata**: they improve readability in tooling and deconstruction, but the underlying runtime representation is positional.
2. **Type shape matters**: element types and arity define the tuple type; names are primarily for readability and developer experience.
3. **Names can be reassigned**: you can often assign between tuples with the same element types even if names differ, and the target's names flow to the variable's view.
4. **When you care about readability**: use names at tuple creation, especially for return values and deconstruction at call sites.

## 2. Tuple Class (`System.Tuple`)

### [2.1. Reference tuple fundamentals (`Tuple<T1,T2,...>` + `Item1` properties)](<./sections/2. Tuple Class/System.Tuple fundamentals/2.1 Tuple class reference tuple fundamentals Item1 properties.md>)

1. **It's a reference type**: `System.Tuple<...>` instances live on the heap and are immutable after construction.
2. **Members are positional properties**: `Item1`, `Item2`, ... (not fields).
3. **Creation patterns**: `new Tuple<T1,T2>(a, b)` and `Tuple.Create(a, b)` both produce the same tuple shape.
4. **Arity limit**: `System.Tuple` supports up to 8 elements directly; larger shapes require nesting or alternative modeling.

### [2.2. Performance and allocation implications of `System.Tuple`](<./sections/2. Tuple Class/System.Tuple fundamentals/2.2 Performance and allocation implications of SystemTuple.md>)

1. **Always allocates**: because it's a class, producing a `Tuple` generally allocates at least once on the managed heap.
2. **Garbage collector impact**: high-frequency tuple creation can increase GC pressure (especially in loops and LINQ-heavy code).
3. **Use cases that still make sense**: when interop/legacy API contracts require `System.Tuple`, or when reference semantics are desirable.

### [2.3. Equality, hashing, and dictionary usage](<./sections/2. Tuple Class/System.Tuple fundamentals/2.3 Equality hashing and dictionary usage.md>)

1. **Structural equality**: `System.Tuple` equality compares each item (using the default equality comparers).
2. **Hashing follows structure**: `GetHashCode()` composes item hashes; the same shape + values give the same hash behavior.
3. **Practical guidance**: tuples can be dictionary keys when their element types have correct, stable equality semantics.

## 3. Value Tuples (`System.ValueTuple`)

### [3.1. Value tuple fundamentals (struct, `Item1` fields, and syntax)](<./sections/3. Value Tuples/3.1 Value tuple fundamentals struct Item1 fields and syntax.md>)

1. **It's a struct**: `System.ValueTuple<...>` is a value type and is designed to be cheap for temporary multi-values.
2. **Members are public fields**: `Item1`, `Item2`, ... (fields, not properties).
3. **Modern syntax**: `(a, b)` creates a Value Tuple, and `(T1 t1, T2 t2)` gives tuple element names for readability.
4. **`var` deconstruction friendliness**: Value Tuples pair naturally with deconstruction assignments at call sites.
5. **Mutability contrast**: `System.Tuple` exposes get-only properties, but `ValueTuple` exposes fields, so you can mutate `Item1`/named elements when the tuple variable itself isn't readonly.

### [3.2. Performance model: allocations, boxing, and copying](<./sections/3. Value Tuples/3.2 Performance model allocations boxing and copying.md>)

1. **Avoid allocations in the common case**: producing/returning a Value Tuple typically does not allocate when it stays in registers/stack or inside another struct/object.
2. **Boxing can happen**: if you cast a Value Tuple to `object`, use it in non-generic APIs that treat it as `object`, or store it in collections of `object`, it can box.
3. **Copy semantics are real**: assigning/copying a Value Tuple copies all fields (fine for small tuples; can be expensive for large element payloads).
4. **Interop boundary warning**: using Value Tuples across APIs that erase types can trigger boxing or extra conversion work.

### [3.3. Nesting and "more than 7 elements"](<./sections/3. Value Tuples/3.3 Nesting and more than 7 elements.md>)

1. **Direct arity limit**: Value Tuples support up to 7 elements directly; beyond that, the representation uses nested Value Tuples (the "rest" element).
2. **Deconstruction can flatten**: when deconstructing, C# can map nested shapes into multiple variables ergonomically.
3. **Readability guideline**: if you need many elements, consider a named type (record/struct) for clearer contracts and easier evolution.

### [3.4. Default and nullability behavior](<./sections/3. Value Tuples/3.4 Default and nullability behavior.md>)

1. **`default(ValueTuple<...>)` is "all defaults"**: numbers become `0`, reference types become `null`, and nested rests become their defaults recursively.
2. **Be careful with "default means valid"**: prefer explicit success/failure patterns (e.g., `bool ok` + tuple) when "default" could be ambiguous.
3. **Nullability annotations**: named elements and nullability (`T?`) carry through the tuple type, so the compiler can help you stay safe.

## 4. Deconstructing tuples

### [4.1. Basic deconstruction assignment](<./sections/4. Deconstructing/4.1 Basic deconstruction assignment.md>)

1. **Syntax**: `var (a, b) = (1, 2);` assigns tuple elements into local variables.
2. **Explicit types**: you can use explicit variable types in deconstruction to make conversions and intent obvious.
3. **Nested deconstruction**: you can deconstruct nested tuples into multiple locals in a single statement (shape must match).
4. **Deconstruction is compile-time binding**: the compiler generates extraction code for each element; it's not "reflection-based" by default.
5. **Shallow extraction**: deconstruction copies element values; reference-type elements are copied as references (no deep copy).

### [4.2. Deconstructing into existing variables](<./sections/4. Deconstructing/4.2 Deconstructing into existing variables.md>)

1. **Reassignment**: `(x, y) = tuple;` can update already-declared variables (including properties/fields that are assignable).
2. **Conversions happen as needed**: element types are converted to the destination variables' types when possible.
3. **Performance note**: deconstruction typically avoids allocating a new tuple; it extracts element values into locals.

### [4.3. Deconstructing + pattern matching (tuple patterns)](<./sections/4. Deconstructing/4.3 Deconstructing plus pattern matching tuple patterns.md>)

1. **Pattern syntax reuses tuple shape**: `if (t is (0, var x)) { ... }` can match and bind tuple elements.
2. **Use patterns for branching**: pattern matching expresses both *shape* and *conditions* in one place.
3. **Don't confuse "match" with "destructure"**: pattern matching is a control-flow construct; deconstruction is assignment-like extraction.

## 5. Discards for tuple elements

### [5.1. Using `_` to ignore tuple elements](<./sections/5. Discards/5.1 Using discards to ignore tuple elements.md>)

1. **Discard syntax**: `var (x, _) = (1, 2);` ignores the second element.
2. **Nested discards**: you can discard sub-elements when deconstructing nested tuples.
3. **Readability**: discards document intent ("I don't care about this value") without introducing extra variables.
4. **No storage created**: `_` is not a local variable; you can't read from it and you don't get to pass it elsewhere.

### [5.2. Discards and side effects](<./sections/5. Discards/5.2 Discards and side effects.md>)

1. **Discard doesn't remove evaluation**: the tuple expression is still evaluated to produce the values.
2. **Only the storage/binding is skipped**: the compiler omits assigning to a variable, but any computation that produces the tuple still runs.
3. **Avoid unused-variable noise**: discards are cleaner than introducing dummy variables that you never read.

## 6. IMP points to remember about Tuples

### [6.1. Tuples checklist (correctness + performance + API design)](<./sections/6. IMP points/6.1 Tuples checklist correctness performance API design.md>)

1. **Pick Value Tuples for modern C#** when you need lightweight multi-values that stay local and avoid heap allocations.
2. **Pick `System.Tuple` when you must** for legacy API contracts or where reference semantics are expected by surrounding code.
3. **Mind boxing**: Value Tuples can box when converted to `object` or used in type-erased scenarios.
4. **Copy semantics matter**: Value Tuples are structs; large payload tuples are more expensive to copy.
5. **Deconstructing is structural**: the tuple shape (arity + element order/types) must match the deconstruction target.
6. **Discards are about binding, not computation**: `_` prevents variable binding; it doesn't prevent the tuple from being produced.
7. **Equality is structural**: both tuple families compare items structurally; this is useful for dictionary keys and tests, but ensure element equality is correct.
8. **When it's more than "a few values"**: if you repeatedly pass around many tuple elements, move to a named `record`/`record struct` for maintainability and safer evolution.
9. **Prefer names for readability at boundaries**: element names can make tuple returns far easier to consume and review in PRs.
10. **Know the `ITuple` escape hatch**: when you must treat tuples generically (logging/formatting), `ITuple` lets you enumerate elements without bespoke generic overloads.

## 7. Questions and answers for interviews (Tuples)

### [7.1. Common interview Q&A: tuples](<./sections/7. Interview Q and A/7.1 Interview Q&A tuples.md>)

1. **Q: Difference between `System.Tuple` and a Value Tuple (`(T1, T2)`) in C#?**  
   **A:** `System.Tuple` is a reference type (heap allocation, immutable), while Value Tuples are `struct`s (often cheaper; boxing can happen when type-erased).
2. **Q: Why do people prefer Value Tuples in modern code?**  
   **A:** They're designed for low-overhead temporary multi-values and commonly avoid heap allocations in common flows.
3. **Q: How do you create a tuple in C# using modern syntax?**  
   **A:** Use tuple literals like `(a, b)` or named elements like `(x: a, y: b)`.
4. **Q: How do you deconstruct a tuple?**  
   **A:** Use deconstruction assignment like `var (a, b) = GetPair();`.
5. **Q: What are discards and when should you use `_`?**  
   **A:** Discards (`_`) intentionally ignore specific tuple elements during deconstruction/pattern matching to improve clarity.
6. **Q: Does discarding a tuple element stop it from being computed?**  
   **A:** No. `_` only skips variable binding; the tuple-producing expression is still evaluated.
7. **Q: What's the element limit for `System.Tuple` and Value Tuples?**  
   **A:** `System.Tuple` supports up to 8 elements directly; Value Tuples support up to 7 directly and represent extra elements via nesting.
8. **Q: Are tuple comparisons structural or reference-based?**  
   **A:** Tuple equality is structural (items are compared), assuming each element type's equality behaves correctly.
9. **Q: Can you use tuples as dictionary keys?**  
   **A:** Yes, as long as all element types have correct and stable equality/hash semantics.
10. **Q: When can Value Tuples box?**  
   **A:** When they are treated as `object` or stored/returned in type-erased APIs/collections that force boxing.
11. **Q: How do named tuple elements help?**  
   **A:** They improve readability in deconstruction and at call sites, and they document intent (even though runtime representation remains positional).
12. **Q: What should you do if your tuple grows too large?**  
   **A:** Prefer a named type like a `record`/`record struct` to make the contract explicit and evolution safer.
13. **Q: What is `ITuple`, and why would you care?**  
    **A:** `ITuple` is an interface that enables generic/runtime enumeration of tuple elements, useful for formatting/logging/debugging without writing tuple-specific code.
14. **Q: Are tuple elements mutable in `ValueTuple`?**  
    **A:** Yes (fields like `Item1` are writable when the tuple variable isn't readonly). In contrast, `System.Tuple` is immutable with get-only properties.

## 8. Overlaps to avoid (where this domain stops)

### [8.1. Boundaries: what's covered elsewhere in this repo](<./sections/8. Overlaps to avoid/8.1 Boundaries what is covered elsewhere.md>)

1. **"General deconstruction" across features** (records/anonymous types) overlaps with domains about records/anonymous types; this domain focuses on tuples' syntax, Value vs `System.Tuple`, and tuple-specific performance/pitfalls.
2. **Returning tuples as multi-values** overlaps with the `Methods` domain section about "returning a tuple/record for multi-values"; here we cover the tuple language mechanics more deeply.
3. **Pattern matching basics** overlap with language foundations; this domain focuses on tuple shape patterns relevant to tuples.

