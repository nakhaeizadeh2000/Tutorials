# Arrays

## 0. Language version maps (C# 9-15)

These **indexes** list what shipped when and point into topical domains. Deep dives are in the sections below. [Update C# 9](<../30 Update CSharp 9/README.md>) - [10](<../31 Update CSharp 10/README.md>) - [11](<../32 Update CSharp 11/README.md>) - [12](<../33 Update CSharp 12/README.md>) - [13](<../34 Update CSharp 13/README.md>) - [14](<../35 Update CSharp 14/README.md>) - [15](<../36 Update CSharp 15/README.md>).

## 1. Arrays fundamentals (shape, type safety, and runtime behavior)

### [1.1. What an array is in C# (fixed size, reference semantics, metadata)](<./sections/1. Arrays fundamentals/1.1. What an array is in CSharp fixed size reference semantics metadata.md>)

1. **Arrays are fixed-size containers** (`T[]`, `T[,]`, `T[][]`): you can mutate elements, but you can't change the array's length in-place.
2. **Array variables are references**: assigning `T[] a = b;` aliases the same storage (so mutations through either name are visible).
3. **Runtime metadata matters**: rank, dimension lengths, and element type drive indexing, bounds checks, and certain safety checks.

### [1.2. `Length` vs `LongLength` and indexing rules (correctness first)](<./sections/1. Arrays fundamentals/1.2. Length vs LongLength and indexing rules correctness first.md>)

1. **`Length` is `int`**; **`LongLength` is `long`** for very large arrays (rare, but important for correctness).
2. **Zero-based indexing**: all arrays use `0..Length-1` (and `0..GetLength(d)-1` for multidimensional arrays).
3. **Bounds checks**: out-of-range access throws `IndexOutOfRangeException`.

### [1.3. Array type safety and variance (covariance traps)](<./sections/1. Arrays fundamentals/1.3. Array type safety and variance covariance traps.md>)

1. **Covariant arrays for reference types**: you can assign `string[]` to `object[]`.
2. **Runtime enforcement**: invalid writes fail with `ArrayTypeMismatchException` (not compile-time errors) because the runtime needs to preserve type safety.
3. **Performance implication**: covariance doesn't change algorithmic complexity, but it can push you toward `object[]`, which can introduce boxing and extra indirections.

### [1.4. Memory & performance model (locality, LOH pressure, bounds checks)](<./sections/1. Arrays fundamentals/1.4. Memory and performance model locality LOH pressure bounds checks.md>)

1. **Contiguous storage for `T[]` and `T[,]`**: good cache locality for sequential access.
2. **LOH (Large Object Heap) reality**: very large arrays allocate on LOH; you may see different GC behavior; measure under load.
3. **Bounds checks and JIT**: simple patterns (`for` with stable `Length`/`span`) often allow bounds-check elimination more easily than complex control flow.

### [1.5. Index-from-end (`^`), `Range` (`..`), and slicing with `Span` / `ReadOnlySpan`](<./sections/1. Arrays fundamentals/1.5. Index from end Range and slicing with Span.md>)

1. **`^` and `Range`**: readable tail slices and sub-ranges (`System.Index`, `System.Range`)
2. **Spans**: prefer `ReadOnlySpan<T>` / `Span<T>` in hot paths to avoid extra allocations where possible
3. **Object initializers**: `^` in initializer indexing is covered under `Properties and Indexers` (C# 13)

## 2. Creating Arrays

### [2.1. Creating arrays (initialization forms including modern collection expressions)](<./sections/2. Creating Arrays/2.1. Creating arrays initialization forms including modern collection expressions.md>)

1. **Classic construction**: `new T[length]` and `new T[length]{ ... }` (and multidimensional: `new T[d1, d2]`).
2. **Array initializers**: `var a = new[] { 1, 2, 3 };` (type inferred).
3. **Modern C# collection expressions** (when supported by your toolchain): `int[] a = [1, 2, 3];` and `T[] a = [.. source];` to spread from another sequence.
4. **Jagged arrays** are "arrays of arrays": `T[][] j = [[1,2],[3]];` (or explicit `new T[...][...]` plus inner allocations).

### [2.2. Default values, null arrays vs empty arrays, and initialization pitfalls](<./sections/2. Creating Arrays/2.2. Default values null arrays vs empty arrays initialization pitfalls.md>)

1. **`new T[n]` zero-initializes**: value types get `default(T)`, reference types get `null`.
2. **Null array** is different from empty array: `T[]? a = null;` vs `T[] a = Array.Empty<T>();` (avoid `NullReferenceException`).
3. **Prefer `Array.Empty<T>()`** for "no elements" instead of allocating `new T[0]`.

## 3. Arrays with `for` loop

### [3.1. Iterating with `for` (fast index-based traversal)](<./sections/3. Arrays with for loop/3.1. Iterating with for fast index based traversal.md>)

1. **Index-based access** is natural for arrays: `for (int i = 0; i < a.Length; i++) { ... }`.
2. **Bounds-check elimination often works** with simple loops and predictable indexing; keep the loop body simple.
3. **Length caching pattern**: if you compute `Length` repeatedly in complex code paths, store it in a local?don't micro-optimize blindly, but keep loops readable.

### [3.2. `for`-loop correctness patterns (off-by-one, LongLength, and unsafe mixing)](<./sections/3. Arrays with for loop/3.2. for-loop correctness patterns off by one LongLength and unsafe mixing.md>)

1. Use `int` indices with `T[]` unless you truly require `LongLength` correctness for extreme sizes.
2. Don't mix `checked/unchecked` semantics around index math without a reason?overflow can turn "rare edge cases" into production bugs.
3. Avoid capturing the loop variable in closures inside hot paths; prefer patterns that don't allocate closures.

## 4. Arrays with `foreach` loop

### [4.1. Iterating with `foreach` (and when it's effectively "as fast as for")](<./sections/4. Arrays with foreach loop/4.1. Iterating with foreach and when it is effectively as fast as for.md>)

1. `foreach` over `T[]` is typically efficient: the compiler uses array-friendly iteration (no per-iteration enumerator allocation in normal cases).
2. `foreach` improves readability when you don't need the index.
3. If you need the index, `for` is usually clearer and avoids extra work.

### [4.2. Modifying while iterating (what's safe vs what breaks intent)](<./sections/4. Arrays with foreach loop/4.2. Modifying while iterating what is safe vs what breaks intent.md>)

1. Modifying **element values** during `foreach` is fine for arrays (unlike some custom collection enumerators).
2. Resizing the underlying storage while iterating is impossible for fixed arrays?so that whole class of invalidation issues doesn't exist for `T[]`.
3. For **jagged arrays**, "modifying inner arrays" can be safe but can surprise readers; prefer clarity and avoid structural changes mid-iteration.

## 5. Overview of `System.Array` class

### [5.1. `System.Array` overview (non-generic APIs, overloads, and trade-offs)](<./sections/5. Overview of SystemArray/5.1. SystemArray overview non generic APIs overloads and trade offs.md>)

1. `System.Array` is the abstract-ish base that provides common operations (search, sort, reverse, copy, clear, resize).
2. Many APIs are **generic-friendly** via `Array.Sort<T>(T[], ...)`, but `System.Array` also supports non-generic patterns for legacy/interoperability.
3. Prefer `T[]` typed APIs whenever possible; non-generic calls can push you into slower paths or extra casts.

## 6. Searching arrays

### [6.1. `System.Array.IndexOf` (overloads, equality semantics, and ranges)](<./sections/6. Searching arrays/6.1. SystemArray IndexOf overloads equality semantics and ranges.md>)

1. `Array.IndexOf(array, value)` returns the first index where `value` matches using the element's equality semantics.
2. Overloads with `startIndex`/`count` restrict the search range?use them to avoid scanning the entire array when you know the window.
3. For performance and clarity, avoid boxing in `IndexOf` by not using `object[]` unless you truly need heterogeneity.

### [6.2. `System.Array.BinarySearch` (sorted requirement, comparers, and pitfalls)](<./sections/6. Searching arrays/6.2. SystemArray BinarySearch sorted requirement comparers and pitfalls.md>)

1. **Precondition**: the array segment must be sorted using the *same comparer/order*.
2. `BinarySearch` returns either the found index or a bitwise-complement insertion point (depending on overload); interpret it correctly in code.
3. If the array isn't sorted (or sorting uses a different comparer), results are undefined from your perspective?treat it as correctness-critical.

## 7. Clearing and resizing

### [7.1. `System.Array.Clear` (set to default fast, and why it matters)](<./sections/7. Clearing and resizing/7.1. SystemArray Clear set to default fast and why it matters.md>)

1. `Array.Clear(a, index, length)` sets elements to `default(T)` for the specified range.
2. Use it to **release references early** (helps GC reclaim memory for objects referenced by arrays).
3. Complexity is linear in the cleared range; prefer it over manual loops when it improves clarity or uses optimized runtime paths.

### [7.2. `System.Array.Resize` (allocates + copies; avoid in tight loops)](<./sections/7. Clearing and resizing/7.2. SystemArray Resize allocates and copies avoid in tight loops.md>)

1. `Array.Resize(ref T[] array, int newSize)` creates a new array and copies the overlap (old values copied to the new storage).
2. It's convenient, but it **allocates**?so don't call it repeatedly in an incremental growth loop; prefer `List<T>` or pre-size.
3. If you must grow arrays, use an amortization strategy (grow by factor, not by +1 each time).

## 8. Sorting and reversing

### [8.1. `System.Array.Sort` (in-place, comparer overloads, and stability)](<./sections/8. Sorting and reversing/8.1. SystemArray Sort in place comparer overloads and stability.md>)

1. `Array.Sort` sorts **in-place** and uses introspective algorithms (performance depends on type and comparer).
2. **Stability**: `Array.Sort` is not guaranteed stable across all cases?don't rely on preserving relative order of equal keys unless documented by your exact approach.
3. For strings/chars, choose the correct comparer (`StringComparer.Ordinal` vs culture-aware) to avoid accidental slow paths and correctness bugs.

### [8.2. `System.Array.Reverse` (in-place reversal and when it's correct)](<./sections/8. Sorting and reversing/8.2. SystemArray Reverse in place reversal and when it is correct.md>)

1. `Array.Reverse` reverses elements **in-place**.
2. Use it when you need descending order and have already sorted ascending (often cheaper than re-sorting with a different comparer).
3. Beware: reversing changes order globally?verify assumptions if downstream logic depends on ordering.

## 9. Multi-dimensional arrays (rectangular arrays)

### [9.1. Multidimensional arrays `T[,]` (rank vs dimensions, indexing)](<./sections/9. Multi dimensional arrays/9.1. Multidimensional arrays T[,] rank vs dimensions indexing.md>)

1. `T[,]` is a rectangular array with a fixed rank known at compile time (commonly 2D).
2. Access pattern: `a[row, col]` and retrieval via `GetLength(dimensionIndex)`.
3. Index calculations are a bit more complex than flat `T[]`, so keep hot-path indexing simple and cache dimensions if you iterate heavily.

### [9.2. Iteration/performance considerations for `T[,]`](<./sections/9. Multi dimensional arrays/9.2. Iteration performance considerations for T[,].md>)

1. Prefer nested loops for readability: outer loop for rows, inner loop for columns.
2. For algorithmic performance, consider whether a flat `T[]` + manual index mapping is more cache-friendly in your specific scenario.
3. Interop and APIs sometimes prefer `T[,]` for rectangular data; choose based on correctness and integration needs.

## 10. Jagged arrays

### [10.1. Jagged arrays `T[][]` (structure: multiple arrays, multiple allocations)](<./sections/10. Jagged arrays/10.1. Jagged arrays T[][] structure multiple arrays multiple allocations.md>)

1. `T[][]` is an "array of arrays": outer array holds references to inner `T[]`.
2. Each inner array is separately allocated; jagged arrays can have different lengths per row.
3. Iteration is two-level: loop outer array, then loop each inner array.

### [10.2. Jagged vs multidimensional trade-offs (locality, bounds, ease)](<./sections/10. Jagged arrays/10.2. Jagged vs multidimensional trade offs locality bounds ease.md>)

1. `T[]` / jagged can be more cache-friendly for row-major traversals than some `T[,]` access patterns (depends on iteration order and JIT).
2. `T[,]` has one allocation for the array itself, but indexing math is different; jagged has multiple allocations but simpler per-row lengths.
3. Choose jagged when inner lengths vary; choose `T[,]` when the shape is naturally rectangular and fixed.

## 11. Array of Objects

### [11.1. `object[]` and boxing costs (heterogeneity vs performance)](<./sections/11. Array of Objects/11.1. object[] and boxing costs heterogeneity vs performance.md>)

1. `object[]` can hold mixed runtime types, including value types?but **value types will be boxed** (allocations + indirections).
2. Accessing boxed values requires unboxing/casts, which adds CPU cost and can introduce invalid cast bugs.
3. Prefer `T[]`/generics when the type is known; use `object[]` only when heterogeneity is genuinely required.

### [11.2. Array covariance and invalid writes (`ArrayTypeMismatchException`)](<./sections/11. Array of Objects/11.2. Array covariance and invalid writes ArrayTypeMismatchException.md>)

1. Covariance allows `string[]` to be seen as `object[]`, but runtime checks prevent inserting non-`string` values.
2. This trap is a common interview topic because it demonstrates "compile-time vs runtime type safety" for arrays.
3. If you need safe polymorphism, consider using `IReadOnlyList<T>` or separate typed collections rather than relying on array covariance for mutation.

## 12. CopyTo and Clone, plus Deep Copy

### [12.1. `Array.CopyTo` (and related copying APIs) (when to use what)](<./sections/12. CopyTo and Clone plus Deep Copy/12.1. Array CopyTo and related copying APIs when to use what.md>)

1. `Array.CopyTo(destinationArray, index)` copies elements into another array.
2. `Array.Copy(source, destination, length)` is often clearer and widely used for array-to-array copying with explicit length.
3. For byte-level operations, `Buffer.BlockCopy` can be appropriate (but keep type semantics in mind).

### [12.2. `Array.Clone` (shallow copy semantics)](<./sections/12. CopyTo and Clone plus Deep Copy/12.2. Array Clone shallow copy semantics.md>)

1. `array.Clone()` creates a **new array instance**, but it does not deep-clone referenced elements.
2. For `T[]` where `T` is a reference type, both arrays will reference the same underlying objects (shallow copy).
3. `Clone()` returns `object` for the non-generic view; cast to the correct `T[]` type when needed.

### [12.3. Deep Copy strategies for arrays (including `object[]`)](<./sections/12. CopyTo and Clone plus Deep Copy/12.3. Deep copy strategies for arrays including object[].md>)

1. **Rule of thumb**: deep copy means *also cloning each referenced element*, not just the array container.
2. For `T[]` of immutable types, a "shallow copy" is effectively deep enough because element instances can be shared safely.
3. For mutable reference elements, deep copy requires either:
   - a custom copy constructor / factory per element type, or
   - a well-defined `DeepCopy()` method on your domain types.
4. Serialization-based cloning works but is often slow and can break correctness for graphs with cycles or custom invariants; it's typically interview-acceptable but production-expensive.

## 13. IMP points to remember about Arrays

### [13.1. Arrays checklist (mentor-grade: correctness + performance + safety)](<./sections/13. IMP points to remember about Arrays/13.1. Arrays checklist mentor-grade correctness performance safety.md>)

1. **Arrays are fixed-size**: `Resize`/new allocations are required for size changes.
2. **Aliasing matters**: assigning `a = b` shares storage; use copying APIs when isolation is needed.
3. **Iteration choice**: `for` is great when you need indices; `foreach` is typically fine for readability on arrays.
4. **Sorting/searching preconditions**: `BinarySearch` requires a properly sorted segment.
5. **Shallow vs deep copy**: `Clone` (and most container copies) do not clone referenced objects.
6. **Prefer releasing references**: `Array.Clear` helps GC by removing references in ranges you no longer need.
7. **Be careful with `object[]`**: boxing + casts can dominate CPU/allocations.
8. **Covariance is safe for reads, risky for writes**: the runtime enforces correctness via exceptions.

## 14. Questions and answers for interviews (Arrays, C# 15 era)

### [14.1. Common interview Q&A: Arrays](<./sections/14. Interview questions and answers Arrays/14.1. Common interview Q&A Arrays.md>)

1. **Q: Difference between `T[]`, `T[,]`, and `T[][]`?**  
   **A:** `T[]` is a 1D fixed-size container, `T[,]` is rectangular fixed rank (one allocation for the array object), and `T[][]` is an array of arrays (inner lengths can differ, but it's multiple allocations).
2. **Q: Why can `string[]` be assigned to `object[]`?**  
   **A:** Arrays of reference types are covariant; the runtime prevents unsafe writes by throwing `ArrayTypeMismatchException` if the element type check fails.
3. **Q: Is `foreach` slower than `for` on arrays?**  
   **A:** Often not meaningfully slower on arrays; `foreach` is optimized for arrays. Pick based on readability and whether you need indices.
4. **Q: When should you use `Array.BinarySearch`?**  
   **A:** Only when the target segment is sorted according to the same comparer/order you pass (otherwise results are incorrect).
5. **Q: What does `Array.Clear` do?**  
   **A:** It sets elements to `default(T)` for a range, which can both "reset" values and release references for GC.
6. **Q: What is the complexity of `Array.Resize`?**  
   **A:** It allocates a new array and copies the overlap, so it's O(min(oldSize, newSize)) plus the allocation cost.
7. **Q: Does `Array.Clone` deep-copy elements?**  
   **A:** No. It creates a new array container but performs a shallow copy of elements (referenced objects are shared).
8. **Q: How do you deep-copy an array of objects?**  
   **A:** Create a new array and deep-clone each element (e.g., call a `DeepCopy()`/copy constructor per element type). If elements are immutable, shallow copy is often sufficient.
9. **Q: Is `Array.Sort` stable?**  
   **A:** Don't assume stability; treat it as sorting that may reorder equal elements unless you have a documented stable alternative.
10. **Q: What's a common bug with `Array.IndexOf`?**  
    **A:** Searching only a sub-range incorrectly (wrong `startIndex`/`count`) or relying on reference equality when you intended value equality for custom types.
11. **Q: Should you avoid `object[]` in performance-critical code?**  
    **A:** Typically yes?boxing for value types and casts can create allocations and CPU overhead. Prefer strongly typed arrays and generics.
12. **Q: How can array copying affect performance and memory?**  
    **A:** Copying allocates new arrays (or new containers) and moves references/values. Prefer reusing buffers when possible (and measure rather than guess).

## 15. Overlaps to avoid (where this domain stops)

### [15.1. Boundaries: what is covered elsewhere in this repo](<./sections/15. Overlaps to avoid/15.1. Boundaries what is covered elsewhere.md>)

1. **GC internals, LOH deep dive, and generational allocation behavior** live in `Fundamental Theories` and `GC and Destructors and IDisposable`.
2. **Concurrency and async models** live in `Cuncurrent & Parallel` (this domain focuses on arrays, not parallelism).
3. **General iteration syntax (`for` vs `foreach`) beyond arrays** lives in `CSharp language basics`.
4. **General copying patterns, collections, and choosing between `List<T>`/`ArrayPool<T>`** are handled in their respective domains; here we focus on array-specific correctness + APIs.

