## 0. Language version maps (C# 9-15)

These **indexes** list what shipped when and point into topical domains. Deep dives are in the sections below. [Update C# 9](<../Update CSharp 9/README.md>) · [10](<../Update CSharp 10/README.md>) · [11](<../Update CSharp 11/README.md>) · [12](<../Update CSharp 12/README.md>) · [13](<../Update CSharp 13/README.md>) · [14](<../Update CSharp 14/README.md>) · [15](<../Update CSharp 15/README.md>).
## 1. Big picture: collections in modern .NET (C# 15 mindset)

### [1.1. Why collections matter: performance, design, and correctness](<./sections/1. Big picture collections/1.1. Why collections matter performance design correctness.md>)

1. **Role of collections (data shape → API shape; latency vs throughput; memory vs CPU trade-offs)**
2. **Choosing the right abstraction (array vs `List<T>` vs `Span<T>` vs streaming APIs like `IEnumerable<T>`/`IAsyncEnumerable<T>`)**
3. **Designing for growth and change (big-O thinking; avoiding premature generalization; minimizing allocations on hot paths)**

### [1.2. Collection families and namespaces overview](<./sections/1. Big picture collections/1.2. Collection families and namespaces overview.md>)

1. **Core namespaces (`System.Collections`, `System.Collections.Generic`, `System.Collections.Concurrent`, `System.Collections.ObjectModel`)**
2. **Generic vs non-generic collections (type safety, boxing, GC pressure, and API ergonomics)**
3. **High-level guidance: prefer generic and immutable/readonly views where possible; legacy types only when interop forces them**

### [1.3. Collections vs objects, relations, and aggregates](<./sections/1. Big picture collections/1.3. Collections vs objects relations and aggregates.md>)

1. **Objects and their relationships (one-to-one, one-to-many, many-to-many) modeled through collections**
2. **Aggregates and invariants (DDD-style thinking; keeping related data consistent within collection boundaries)**
3. **When a collection is an implementation detail vs part of your public API surface**

## 2. Collection interfaces and hierarchy (IEnumerable, ICollection, IList, IDictionary…)

### [2.1. Core enumeration contracts: IEnumerable and IEnumerator](<./sections/2. Collection interfaces and hierarchy/2.1. IEnumerable and IEnumerator contracts.md>)

1. **`IEnumerable` vs `IEnumerable<T>` (non-generic vs generic; boxing, type safety, and LINQ integration)**
2. **`IEnumerator` / `IEnumerator<T>` lifecycle (MoveNext/Current/Reset; disposal; pitfalls with manual enumeration)**
3. **Deferred execution and streaming scenarios vs materialized collections (latency, memory, and backpressure considerations)**

### [2.2. ICollection, IReadOnlyCollection, and sizing/containment semantics](<./sections/2. Collection interfaces and hierarchy/2.2. ICollection and IReadOnlyCollection semantics.md>)

1. **`ICollection<T>` responsibilities (Count, Add/Remove/Clear, Contains, CopyTo; mutability and thread-safety expectations)**
2. **`IReadOnlyCollection<T>` and read-only views (API design when you want to prevent mutation without copying)**
3. **Performance notes: O(1) `Count` expectations, avoiding unnecessary `Count()` LINQ calls, and implications for big collections**

### [2.3. IList, IReadOnlyList, and index-based access](<./sections/2. Collection interfaces and hierarchy/2.3. IList and IReadOnlyList index-based access.md>)

1. **`IList<T>` vs `IReadOnlyList<T>` (indexing semantics, mutability, and usage in public APIs)**
2. **Random-access vs sequential-access collections (arrays, `List<T>` vs linked lists/streams)**
3. **Indexing costs and bounds checking; when `Span<T>`/`ReadOnlySpan<T>` can help on hot paths**

### [2.4. IDictionary, IReadOnlyDictionary, and key-based lookup](<./sections/2. Collection interfaces and hierarchy/2.4. IDictionary and IReadOnlyDictionary key-based lookup.md>)

1. **Dictionary contracts (key uniqueness, ContainsKey/TryGetValue, iteration order expectations)**
2. **`IDictionary<TKey,TValue>` vs `IReadOnlyDictionary<TKey,TValue>` (mutability boundaries and API design)**
3. **Hash-based vs sorted maps (lookup complexity, memory overhead, and use cases for each)**

### [2.5. Collection hierarchy diagram and mental model](<./sections/2. Collection interfaces and hierarchy/2.5. Collection hierarchy diagram and mental model.md>)

1. **Visualizing the main interfaces (`IEnumerable<T>` → `ICollection<T>` → `IList<T>` / `IDictionary<TKey,TValue>`)**
2. **How concrete types (arrays, `List<T>`, `Dictionary<TKey,TValue>`, `Queue<T>`, `Stack<T>`, etc.) plug into the hierarchy**
3. **Guidance: depend on the lowest sufficient interface in public APIs; implement the minimal correct surface internally**

## 3. List<T> deep dive: usage, APIs, and performance

### [3.1. Introduction to List\<T\> and its internal model](<./sections/3. ListT deep dive/3.1. Introduction to ListT internal model.md>)

1. **Dynamic array semantics (backing array, capacity vs Count, amortized O(1) append)**
2. **Growth strategy and reallocation costs (what happens on Add; minimizing copying and GC pressure)**
3. **When `List<T>` is a good fit vs array, `LinkedList<T>`, `ImmutableArray<T>`, or streaming abstractions**

### [3.2. Adding elements: Add and AddRange](<./sections/3. ListT deep dive/3.2. Add and AddRange.md>)

1. **`Add` behavior and big-O (amortized vs worst-case; pre-sizing with Capacity / constructor)**
2. **`AddRange` and bulk operations (reducing reallocations; sourcing from `IEnumerable<T>` efficiently)**
3. **Perf tips: minimize per-item overhead in tight loops; avoid repeated `ToList()`; careful with LINQ chains feeding AddRange**

### [3.3. Inserting elements: Insert and InsertRange](<./sections/3. ListT deep dive/3.3. Insert and InsertRange.md>)

1. **Cost model of insert at arbitrary index (array shift, O(n) behavior, cache effects)**
2. **Common patterns: append vs prepend vs middle insert; when a different data structure is more appropriate**
3. **InsertRange and batching changes vs many single inserts; impact on large lists and CPU cache locality**

### [3.4. Removing elements: Remove, RemoveAt, RemoveRange, RemoveAll, Clear](<./sections/3. ListT deep dive/3.4. Remove operations and Clear.md>)

1. **`Remove`/`RemoveAt` vs `RemoveRange` vs `RemoveAll` (behavior, complexity, and typical use cases)**
2. **Clear semantics (zeroing references, releasing vs keeping capacity; memory and GC implications)**
3. **Patterns for high-throughput removal (swap-with-last, compaction strategies, using `Span<T>`/manual loops where needed)**

### [3.5. Searching and membership: IndexOf, BinarySearch, Contains](<./sections/3. ListT deep dive/3.5. IndexOf BinarySearch Contains.md>)

1. **Linear vs binary search (requirements for sortedness, complexity trade-offs, and practical guidance)**
2. **`IndexOf` vs `Contains` vs `BinarySearch` (when to use which; equality comparers; handling duplicates)**
3. **Alternative strategies (dictionaries/sets for frequent lookups; maintaining sorted lists for ordered workloads)**

### [3.6. Ordering and transformations: Sort, Reverse, ToArray, ForEach](<./sections/3. ListT deep dive/3.6. Sort Reverse ToArray ForEach.md>)

1. **`Sort` internals and complexity (comparers, stability expectations, allocation patterns)**
2. **`Reverse`, in-place algorithms vs LINQ `OrderBy`/`Reverse` (allocations; temporary structures; readability vs perf)**
3. **`ToArray` and `ForEach` (materialization costs; when `foreach` + LINQ/loops is preferable; signaling allocations in API design)**

### [3.7. Predicates and searching: Exists, Find*, and FindAll](<./sections/3. ListT deep dive/3.7. Exists Find FindIndex FindLast FindAll.md>)

1. **`Exists`, `Find`, `FindIndex`, `FindLast`, `FindLastIndex`, and `FindAll` semantics (first vs all matches, indices vs values)**
2. **Perf considerations (delegate allocations, capturing lambdas, repeated scans; how to keep hot paths simple)**
3. **When to refactor to dictionary/set or pre-indexing structures instead of many repeated searches**

### [3.8. Converting and mapping: ConvertAll and projections](<./sections/3. ListT deep dive/3.8. ConvertAll and projections.md>)

1. **`ConvertAll` vs LINQ `Select().ToList()` (allocation profiles, readability, and API familiarity)**
2. **Mapping between DTOs, domain objects, and view models; when to centralize mapping logic**
3. **Avoiding over-mapping (map only required data; streaming transforms vs bulk conversions on huge collections)**

## 4. Dictionaries and key-based collections

### [4.1. Dictionary\<TKey,TValue\> basics and performance model](<./sections/4. Dictionaries and key-based collections/4.1. DictionaryTKeyTValue basics and performance.md>)

1. **Hash table internals (buckets, collisions, resizing; O(1) expected vs worst-case behaviors)**
2. **Choosing key types (immutable, stable hashing; avoiding mutable keys; value vs reference types)** 
3. **Perf and memory notes (capacity management, load factor, avoiding repeated ContainsKey+indexer patterns via TryGetValue)**

### [4.2. SortedList, SortedDictionary, and ordering trade-offs](<./sections/4. Dictionaries and key-based collections/4.2. SortedList SortedDictionary ordering trade-offs.md>)

1. **`SortedList<TKey,TValue>` vs `SortedDictionary<TKey,TValue>` (backing structures, insertion/removal/search characteristics)**
2. **When sorted key order matters (range queries, predictable iteration, UI binding, reporting)**
3. **Comparer selection (`IComparer<TKey>`; culture-aware vs ordinal comparisons; stability and correctness concerns)**

### [4.3. HashSet, lookup structures, and membership-focused collections](<./sections/4. Dictionaries and key-based collections/4.3. HashSet and membership-focused collections.md>)

1. **`HashSet<T>` and `ISet<T>` semantics (uniqueness, set operations like Union/Intersect/Except)**
2. **Membership-heavy workloads vs key-value workloads (when set-like collections are more appropriate than dictionaries)** 
3. **Equality semantics and custom comparers (`IEqualityComparer<T>` for case-insensitive or composite keys)** 

### [4.4. Legacy non-generic maps: Hashtable and friends](<./sections/4. Dictionaries and key-based collections/4.4. Hashtable and legacy non-generic maps.md>)

1. **`Hashtable` and other non-generic maps (boxing, casting, runtime errors, perf costs)**
2. **Interop scenarios where legacy types appear (old APIs, COM, configuration/story around migration)**
3. **Migration guidance: moving from `Hashtable` to `Dictionary<TKey,TValue>` safely and incrementally**

## 5. Sequences, stacks, queues, and other core collection types

### [5.1. Array vs ArrayList vs List\<T\>](<./sections/5. Sequences stacks queues and others/5.1. Array vs ArrayList vs ListT.md>)

1. **Fixed-size arrays vs growable lists (memory layout, copy costs, and cache-friendliness)**
2. **Why `ArrayList` is legacy (non-generic, boxing, fragile casting) and when it still appears in older code** 
3. **Migration and best practices: prefer `T[]` or `List<T>`; use `Span<T>`/`Memory<T>` where low-level perf is critical**

### [5.2. Queue\<T\> and Stack\<T\> usage patterns](<./sections/5. Sequences stacks queues and others/5.2. QueueT and StackT usage patterns.md>)

1. **LIFO vs FIFO semantics (Stack vs Queue) and typical scenarios (backtracking, undo stacks, pipelines, buffers)** 
2. **Complexity, allocation patterns, and internal representation (array-based ring buffers; growth behavior)** 
3. **When concurrent variants (`ConcurrentQueue<T>`, `ConcurrentStack<T>`) from the concurrency domain are more appropriate**

### [5.3. LinkedList\<T\> and insertion-heavy collections](<./sections/5. Sequences stacks queues and others/5.3. LinkedListT insertion-heavy collections.md>)

1. **When linked lists make sense (frequent inserts/removes in the middle; known node references; stable iterators)** 
2. **Costs: extra memory per node, poor locality, and GC pressure compared to array-backed lists** 
3. **Practical advice: prefer `List<T>` unless profiling shows clear benefit from linked structure semantics**

### [5.4. Read-only and observable collection wrappers](<./sections/5. Sequences stacks queues and others/5.4. Read-only and observable collections.md>)

1. **`ReadOnlyCollection<T>`, `ReadOnlyDictionary<TKey,TValue>`, and read-only wrappers around mutable collections** 
2. **`ObservableCollection<T>` basics (change notifications, UI binding scenarios; perf considerations)** 
3. **Patterns for exposing immutable views while retaining internal mutability for performance reasons**

## 6. Enumerables, iterators, and yield return

### [6.1. Iterator methods and yield return semantics](<./sections/6. Enumerables iterators and yield/6.1. Iterator methods and yield return semantics.md>)

1. **How compiler-generated iterator types work (state machines, MoveNext, captured variables)** 
2. **Deferred execution and multi-enumeration pitfalls (side effects, expensive computations, resource lifetime)** 
3. **When `yield return` is a good fit vs materializing a list vs returning async/streaming alternatives**

### [6.2. Custom IEnumerable and IEnumerator implementations](<./sections/6. Enumerables iterators and yield/6.2. Custom IEnumerable and IEnumerator implementations.md>)

1. **Manually implementing `IEnumerable<T>`/`IEnumerator<T>` vs using iterator blocks (`yield`)** 
2. **Complex custom iteration patterns (multi-dimensional, windowed, or filtered views) and how to design them** 
3. **Perf considerations (allocations per enumerator, boxing, value-type enumerators, and `foreach` lowering behavior)** 

### [6.3. IEnumerable vs IQueryable vs IAsyncEnumerable](<./sections/6. Enumerables iterators and yield/6.3. IEnumerable vs IQueryable vs IAsyncEnumerable.md>)

1. **In-memory enumeration vs remote-query representation (`IQueryable`) vs async streaming (`IAsyncEnumerable<T>`)** 
2. **Where each belongs (domain collections vs persistence/query APIs vs I/O-heavy streaming)** 
3. **Avoiding mixing abstractions accidentally (enumerating `IQueryable` in-memory; sync-over-async on async streams)**

## 7. Custom collections and implementing collection interfaces

### [7.1. Designing custom collections: when and why](<./sections/7. Custom collections and implementations/7.1. When and why to create custom collections.md>)

1. **Use cases: domain-specific invariants, memory layouts, caching, or performance-critical scenarios** 
2. **Cost of custom collections (maintenance, correctness, testing) vs benefits over tuning built-ins** 
3. **Choosing which interfaces to implement (`IEnumerable<T>`, `ICollection<T>`, `IList<T>`, `IDictionary<TKey,TValue>`, etc.)**

### [7.2. Custom IEnumerable and custom generic IEnumerable](<./sections/7. Custom collections and implementations/7.2. Custom IEnumerable and generic IEnumerable.md>)

1. **Implementing non-generic and generic `IEnumerable` side by side (legacy compatibility vs simplicity)** 
2. **Patterns for value-type enumerators to reduce allocations (struct enumerators, `GetEnumerator` patterns)** 
3. **Testing and validating custom enumerators (edge cases, multiple enumeration, disposal, and thread-safety assumptions)** 

### [7.3. Custom collections with ICollection and IList](<./sections/7. Custom collections and implementations/7.3. Custom ICollection and IList implementations.md>)

1. **Implementing `ICollection<T>` correctly (Count consistency, mutation methods, sync root legacy members)** 
2. **`IList<T>` implementations (indexing semantics, insert/remove constraints, read-only flags)** 
3. **Error semantics and contracts (ArgumentOutOfRangeException, InvalidOperationException; consistent behavior with BCL types)** 

### [7.4. Custom dictionaries and key/value collections](<./sections/7. Custom collections and implementations/7.4. Custom dictionary and key-value collections.md>)

1. **Specialized dictionaries (e.g., composite keys, multi-value dictionaries, partitioned/sharded dictionaries)** 
2. **Implementing `IDictionary<TKey,TValue>` and/or read-only variants; iteration order considerations** 
3. **Perf-aware design (avoiding unnecessary allocations; careful with locking/contention in shared dictionaries)** 

## 8. Equality, ordering, and comparers

### [8.1. IEquatable, IEqualityComparer, and value semantics](<./sections/8. Equality ordering and comparers/8.1. IEquatable and IEqualityComparer value semantics.md>)

1. **`IEquatable<T>` vs `Equals(object?)` vs reference equality (what collections actually call and when)** 
2. **Custom `IEqualityComparer<T>` for dictionaries/sets (case-insensitivity, composite keys, normalized forms)** 
3. **Correctness + perf: stable equality semantics across app lifetime; avoiding expensive equality logic in hot paths** 

### [8.2. IComparable, IComparer, and sorting semantics](<./sections/8. Equality ordering and comparers/8.2. IComparable and IComparer sorting semantics.md>)

1. **`IComparable<T>` and natural ordering vs pluggable `IComparer<T>`** 
2. **Consistency requirements (transitivity, antisymmetry, and total vs partial ordering)** 
3. **Perf considerations: avoiding heavy comparisons; caching derived keys; culture/locale-aware vs ordinal comparisons** 

### [8.3. Collection correctness with equality and ordering](<./sections/8. Equality ordering and comparers/8.3. Collection correctness with equality and ordering.md>)

1. **Impact of equality and ordering on dictionaries, sets, and sorted collections (key uniqueness, lookup correctness)** 
2. **Mutating keys/values that affect equality or ordering after insertion (why it’s dangerous)** 
3. **Strategies: immutable value objects, defensive copying, and validation in custom collection implementations** 

## 9. Variance, generics, and collection APIs

### [9.1. Covariance and contravariance basics](<./sections/9. Variance generics and collections/9.1. Covariance and contravariance basics.md>)

1. **What covariance and contravariance mean in C# type system (assignment compatibility, `out` and `in` type parameters)** 
2. **Why arrays are covariant and the runtime risks that come with it (ArrayTypeMismatchException)** 
3. **Generics vs arrays vs interfaces in terms of variance and type safety** 

### [9.2. Variance in collection-related interfaces](<./sections/9. Variance generics and collections/9.2. Variance in collection-related interfaces.md>)

1. **Variance on delegates and interfaces that relate to collections (`IEnumerable<out T>`, `IComparer<in T>`, etc.)** 
2. **How variance enables flexible APIs without unsafe casts, and where it’s disallowed (mutable collections)** 
3. **Guidance: design read-only outputs as covariant, input-only parameters as contravariant where it makes sense** 

### [9.3. Generic constraints and collection design](<./sections/9. Variance generics and collections/9.3. Generic constraints and collection design.md>)

1. **Using constraints (`where T : struct`, `class`, `Enum`, `unmanaged`, interfaces) to shape valid collection element types** 
2. **Impact on performance (boxing, layout, inlining opportunities, and span-like patterns)** 
3. **Balancing API generality vs performance and correctness guarantees in generic collection designs** 

## 10. Working with collections of objects and object graphs

### [10.1. Collections of entities, value objects, and aggregates](<./sections/10. Collections of objects and graphs/10.1. Collections of entities and value objects.md>)

1. **Modeling domain relationships with collections (child collections, navigation properties, owning aggregates)** 
2. **Avoiding anemic collections (pushing behavior into aggregate roots and collection types where appropriate)** 
3. **Serialization, ORM, and mapping considerations with object graphs (EF Core collections, lazy loading vs explicit loading)** 

### [10.2. Navigation, traversal, and graph algorithms](<./sections/10. Collections of objects and graphs/10.2. Navigation traversal graph algorithms.md>)

1. **Traversing object graphs (BFS/DFS patterns, recursion vs explicit stacks/queues)** 
2. **Detecting cycles, shared references, and identity vs equality in object graphs** 
3. **Perf notes: avoiding repeated traversals, caching expensive graph computations, incremental updates** 

### [10.3. Collections as boundaries and invariants](<./sections/10. Collections of objects and graphs/10.3. Collections as boundaries and invariants.md>)

1. **Encapsulating collections behind methods/properties that enforce invariants (no duplicates, sorted order, size limits)** 
2. **Exposing safe views vs raw mutable collections (read-only wrappers, defensive copies when truly needed)** 
3. **Thread-safety and concurrency considerations when collections cross thread or async boundaries** 

## 11. Important points, pitfalls, and best practices for collections

### [11.1. Performance-focused guidelines for collections](<./sections/11. Important points pitfalls best practices/11.1. Performance-focused guidelines for collections.md>)

1. **Minimize allocations: reuse collections where appropriate, pre-size with Capacity, avoid needless ToList/ToArray** 
2. **Pick appropriate data structures based on access patterns (indexing vs lookup vs range queries vs streaming)** 
3. **Measure and profile: use benchmarks and profilers instead of guessing; validate micro-optimizations against real workloads** 

### [11.2. Common mistakes and anti-patterns](<./sections/11. Important points pitfalls best practices/11.2. Common mistakes and anti-patterns.md>)

1. **Using non-generic collections in new code, or exposing mutable collections directly from public APIs** 
2. **Mixing UI and background thread access to collections without synchronization (race conditions, InvalidOperationException)** 
3. **Overusing LINQ in hot paths (`ToList`/`ToArray` churn, complex query chains) instead of straightforward loops where critical** 

### [11.3. Interview-style questions and discussion topics](<./sections/11. Important points pitfalls best practices/11.3. Interview questions and discussion topics.md>)

1. **Explain differences and trade-offs between array, `List<T>`, `LinkedList<T>`, `Dictionary<TKey,TValue>`, `HashSet<T>`, `Queue<T>`, `Stack<T>`** 
2. **Describe how `Dictionary<TKey,TValue>` and `List<T>` manage growth and what that means for big-O and memory** 
3. **Discuss designing a custom collection for a specific scenario (constraints, interfaces implemented, perf and correctness concerns)** 

