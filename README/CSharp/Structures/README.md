## 1. Structures fundamentals (value types done intentionally)

### [1.1. What a `struct` is in .NET (value semantics, storage, and defaults)](<./sections/1. Structures fundamentals/1.1. What a struct is value semantics storage defaults.md>)

1. **Value semantics** (copies, aliasing differences vs classes, and what “assignment” really does)
2. **Where it lives** (inline in arrays/fields; stack vs heap is an implementation detail—focus on *ownership and copying*)
3. **`default(T)` / zero-initialization** (why it exists, and why “default is valid” is a design choice you must make explicit)

### [1.2. Creating structures: declarations, members, and idiomatic shapes](<./sections/1. Structures fundamentals/1.2. Creating structures declarations members idiomatic shapes.md>)

1. **Declaration forms** (`struct`, `readonly struct`, `record struct`; when each is appropriate)
2. **What belongs in a struct** (small, cohesive value; stable equality; minimal mutation surface)
3. **What usually does *not* belong** (large mutable state, long-lived identity, heavy inheritance-like design)

### [1.3. Primitive types as structures (what that implies for performance and APIs)](<./sections/1. Structures fundamentals/1.3. Primitive types as structures implications.md>)

1. **Why “primitives are structs” matters** (copying, boxing, interface calls, generic constraints)
2. **`string` is the exception** (reference type but immutable; how that changes “value-like” reasoning)
3. **Real-world impact** (collections, APIs that take `object`, and “hidden allocations” when values box)

## 2. Constructors in structs (and how modern C# thinks about initialization)

### [2.1. Struct constructors: parameterless, parameterized, and initialization rules](<./sections/2. Constructors in structs/2.1. Struct constructors rules.md>)

1. **Why `default` exists** (you can always get a zeroed struct; your API must tolerate it or block it intentionally)
2. **Parameterless constructors** (what modern C# allows; when to use them; why they don’t remove `default(T)`)
3. **Field/property initialization rules** (ensuring all fields are definitely assigned; avoiding “half-initialized” designs)

### [2.2. Structs with constructors: invariants, factories, and “valid states only”](<./sections/2. Constructors in structs/2.2. Struct invariants factories valid states.md>)

1. **Invariant strategy** (decide whether `default` is valid; if not, design an explicit “uninitialized” sentinel you can detect)
2. **Factories vs constructors** (when creation can fail, needs parsing/validation, or needs caching)
3. **Interop/serialization realities** (frameworks may create `default`; validate at boundaries, not deep inside hot loops)

### [2.3. `readonly struct` and initialization patterns that avoid defensive copies](<./sections/2. Constructors in structs/2.3. readonly struct initialization defensive copies.md>)

1. **Why readonly affects performance** (prevents hidden copies on member access in some cases)
2. **Immutability boundary** (readonly fields vs deep immutability; keep mutation explicit and localized)
3. **Design rule** (if a struct represents a value, make it *actually* behave like a value)

## 3. Struct vs class (practical decision-making, not ideology)

### [3.1. Choosing `struct` vs `class`: a decision checklist](<./sections/3. Struct vs class/3.1. Choosing struct vs class checklist.md>)

1. **Semantics first** (identity vs value; aliasing risks; mutation expectations)
2. **Performance second** (copy costs vs allocation/GC; caching and locality; avoid “struct for speed” cargo culting)
3. **Versioning and API design** (public shape is a contract; changing a struct’s size/copy behavior can be a breaking change in performance-sensitive code)

### [3.2. The “big struct” problem: copying, passing, and hidden costs](<./sections/3. Struct vs class/3.2. Big struct problem copying passing hidden costs.md>)

1. **Copy amplification** (loops, foreach, LINQ, async state machines, and accidental temporaries)
2. **`in` parameters** (when they help; when they hurt by forcing copies/temporaries—measure)
3. **Guidance** (prefer small structs; if it’s big and mutable, a class may be the safer and faster *overall* design)

### [3.3. Boxing, interfaces, and generics (where structs silently allocate)](<./sections/3. Struct vs class/3.3. Boxing interfaces generics.md>)

1. **Boxing triggers** (to `object`, to non-generic interfaces, to `System.ValueType`, and some `params`/formatting paths)
2. **Avoiding boxing** (generic APIs, `IEquatable<T>`, avoiding non-generic collections, careful logging/formatting)
3. **Hot path rule** (if it boxes, it allocates; if it allocates, it can dominate CPU via GC under load)

## 4. Readonly structs (immutability + performance that’s easy to reason about)

### [4.1. `readonly struct`: what it guarantees (and what it doesn’t)](<./sections/4. Readonly structs/4.1. readonly struct guarantees and limits.md>)

1. **What it prevents** (mutating instance fields through instance members)
2. **Defensive copies** (why they happen; how readonly can reduce them; how `readonly` members help)
3. **API hygiene** (prefer `readonly` members; avoid exposing setters that undermine value semantics)

### [4.2. `ref struct` and stack-only types (Span-like patterns)](<./sections/4. Readonly structs/4.2. ref struct and stack-only types.md>)

1. **What `ref struct` means** (stack-only, cannot be boxed, cannot cross async/iterator boundaries)
2. **When to care** (`Span<T>`, `ReadOnlySpan<T>`, high-performance parsing, slicing without allocations)
3. **Design constraints** (lifetime safety; avoiding capturing; designing APIs that make misuse impossible)

## 5. Important points mentors insist you remember (struct “gotchas” checklist)

### [5.1. Checklist: correctness, performance, and maintainability for structs](<./sections/5. Important points/5.1. Struct checklist correctness performance maintainability.md>)

1. **Avoid mutable structs as public API** (mutation + copying leads to bugs that look impossible)
2. **Don’t use structs to “avoid allocations” by default** (copying/boxing can be worse; measure)
3. **Be explicit about equality and hashing** (`IEquatable<T>`; stable hash codes; never mutate dictionary keys)
4. **Avoid large structs** (keep them small; pass by `in` only when proven)
5. **Watch for boxing** (interfaces/object/logging; it can erase all perf wins)
6. **Make `default` behavior intentional** (either valid, or detectably “uninitialized”)

### [5.2. Common pitfalls that cause production bugs](<./sections/5. Important points/5.2. Common struct pitfalls production bugs.md>)

1. **Mutable struct properties** (e.g., `list[i].X++` patterns and “mutating a copy” surprises)
2. **Foreach over structs** (iteration variable copies; mutation doesn’t mutate the underlying collection)
3. **Async and iterators** (capturing copies into state machines; unintended copies from closures)
4. **Interlocked/volatile misconceptions** (atomicity and tearing; when struct reads/writes are not atomic)

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere in this repo](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **General OOP concepts and “type shape choice” overview** are introduced in `CSharp Basic Object Oriented Programming`
2. **`readonly` fields, static initialization, and memory model basics** are covered in `Fields`
3. **Boxing/unboxing and conversions** are covered deeply in `Type Conversion`
4. **Threading + memory model deep dive** is in `Cuncurrent & Parallel`
5. **CLR/JIT/GC big picture** is in `Fundamental Theories`

## 7. Interview questions and answers (Structures, modern C#)

### [7.1. Interview Q&A: structs, readonly structs, and value semantics pitfalls](<./sections/7. Interview Q and A/7.1. Interview questions about structs.md>)

1. **Struct vs class** (semantics first; perf second; examples of real bugs with mutable structs)
2. **What is boxing and when do structs box?** (hot-path consequences; how to avoid)
3. **What does `readonly struct` change?** (defensive copies; API design)
4. **Why `default(T)` is always possible** (invariant strategy; detecting “uninitialized”)
5. **Why “struct for performance” can backfire** (copy amplification; interface calls; GC vs copying trade-offs)

