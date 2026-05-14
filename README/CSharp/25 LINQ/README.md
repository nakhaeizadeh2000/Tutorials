## 0. Language version maps (C# 9-15)

These **indexes** list what shipped when and point into topical domains. Deep dives are in the sections below. [Update C# 9](<../30 Update CSharp 9/README.md>) · [10](<../31 Update CSharp 10/README.md>) · [11](<../32 Update CSharp 11/README.md>) · [12](<../33 Update CSharp 12/README.md>) · [13](<../34 Update CSharp 13/README.md>) · [14](<../35 Update CSharp 14/README.md>) · [15](<../36 Update CSharp 15/README.md>).
## 1. LINQ in C# 15: query operator mindset (filter, order, project, aggregate)
### [1.1. LINQ pipeline fundamentals for C# developers (deferred execution + evaluation timing)](<./sections/1. Linq basics/1.1. Linq pipeline fundamentals for csharp developers deferred execution and evaluation timing.md>)
1. **Deferred execution by default**: most LINQ-to-Objects operators build an iterator/pipeline and only run when you enumerate (e.g., `foreach`, `ToList`, `ToArray`, `Count`, etc.).
2. **Exceptions happen at enumeration time**: `First`, `Single`, `Min`, `Max`, etc. throw when iterated, not when the query is composed.
3. **Multiple enumeration re-runs the pipeline**: if the source is expensive or stateful, repeating enumeration repeats CPU work and can repeat side effects.
4. **Operator categories (what to expect)**: filtering/quantifiers (`Where`, `Any`, `All`), ordering (`OrderBy`), element access (`First`, `ElementAt`), projection (`Select`), and aggregation (`Count`, `Sum`, etc.).
5. **`Func` vs `Expression<Func<...>>` mental model**: LINQ operators accept delegates, but query providers (e.g., EF Core) may translate expression trees; side effects in lambdas generally break provider translation.

### [1.2. How nullability affects LINQ results (especially *OrDefault)](<./sections/1. Linq basics/1.2. How nullability affects linq results especially ordefault.md>)
1. **Reference types**: `FirstOrDefault`, `SingleOrDefault`, `ElementAtOrDefault` return `null` when no match exists.
2. **Value types**: the *OrDefault* variants return the *default value* of `T` (e.g., `0` for `int`), which can be ambiguous unless you also model "not found" explicitly.
3. **Nullable value types**: `FirstOrDefault` on `IEnumerable<int?>` still returns `null` when no element exists (because `T` itself is nullable).
4. **Prefer "Try" patterns at APIs**: for reusable library code, consider exposing `TryGet...` wrappers instead of leaking "default means not found" ambiguity.

## 2. OrderBy (and stable multi-key ordering)
### [2.1. OrderBy semantics: buffering, key selector costs, and "stable" behavior](<./sections/2. OrderBy/2.1. OrderBy semantics buffering key selector costs and stable behavior.md>)
1. **Sorting is inherently "buffering"**: `OrderBy` must evaluate all keys and buffer elements to produce globally sorted output (unlike `First`, which can short-circuit).
2. **Time/CPU expectations**: sorting is typically `O(n log n)` comparisons and `O(n)` additional memory for buffered state (plus key selector overhead).
3. **Key selector runs per element**: if your key selector is expensive (e.g., parsing, allocations, database calls in-memory), it directly impacts CPU and allocation rate.
4. **Stability note**: LINQ-to-Objects `OrderBy` is stable for equal keys, but providers may differ; avoid relying on ordering stability for correctness unless you control the implementation.

### [2.2. OrderBy with comparers: correctness beats "looks right"](<./sections/2. OrderBy/2.2. OrderBy with comparers correctness beats looks right.md>)
1. **Default comparer pitfalls**: default `Comparer<T>.Default` can use culture-sensitive comparisons for some types; prefer explicit comparers where you care about correctness.
2. **Strings**: use `StringComparer.Ordinal` (or `OrdinalIgnoreCase` as needed) for predictable ordering and to avoid culture surprises.
3. **Custom comparer correctness**: ensure your comparer is consistent (transitive and stable enough) or you can get confusing ordering behavior.

### [2.3. Multi-key ordering with ThenBy](<./sections/2. OrderBy/2.3. Multi-key ordering with thenby.md>)
1. **ThenBy is evaluated after the primary key**: multi-key sorting composes comparers by key priority.
2. **Avoid redundant key computation**: if multiple keys require the same expensive derivation, compute it once (e.g., project to an intermediate form) and then order by precomputed keys.

## 3. First and FirstOrDefault
### [3.1. First: short-circuiting and exception behavior](<./sections/3. First and FirstOrDefault/3.1. First short-circuiting and exception behavior.md>)
1. **Short-circuit enumeration**: `First` stops at the first matching element, which can be CPU-friendly for "find first" scenarios.
2. **Empty sequence throws**: `First` throws `InvalidOperationException` when there are no elements (or no matching elements for the predicate overload).
3. **Predicate overloads still stream**: `source.First(x => predicate(x))` can stop early once the predicate matches.
4. **Side effects matter**: because evaluation is deferred and short-circuiting, your predicate may run fewer times than you expect (especially in tests or when re-enumerating).

### [3.2. FirstOrDefault: defaulting semantics and null-safety](<./sections/3. First and FirstOrDefault/3.2. Firstordefault defaulting semantics and null-safety.md>)
1. **No match means "default(T)"**: unlike `First`, `FirstOrDefault` does not throw on empty/no-match sequences.
2. **Reference types become null**: common usage is `var x = source.FirstOrDefault(...); if (x is null) ...`.
3. **Value types can be ambiguous**: if `default(T)` is a valid "real" value in your domain, prefer returning `(bool found, T value)` or using a `TryGet...` API wrapper.

## 4. ElementAt and ElementAtOrDefault
### [4.1. ElementAt: index-based access with possible O(n) enumeration](<./sections/4. ElementAt and ElementAtOrDefault/4.1. ElementAt index based access and complexity.md>)
1. **Index access is not always O(1)**: for general `IEnumerable<T>`, LINQ must enumerate from the start until the requested index is reached (CPU `O(index)`).
2. **Special cases may exist**: implementations backed by `IList<T>`/arrays can sometimes use direct indexing; still, assume "enumerate until index" unless your input type guarantees random access.
3. **Use for "small indices" only**: if you frequently request large indices from a non-indexed enumerable, switch to a data structure that supports efficient indexing.

### [4.2. ElementAt vs ElementAtOrDefault: exceptions and bounds](<./sections/4. ElementAt and ElementAtOrDefault/4.2. ElementAt vs elementatordefault exceptions and bounds.md>)
1. **ElementAt throws**: `ElementAt` throws `ArgumentOutOfRangeException` when index is out of bounds (or negative).
2. **ElementAtOrDefault returns default**: `ElementAtOrDefault` returns `default(T)` for out-of-range/negative indices.
3. **Default ambiguity remains**: the same "default means not found" caveat applies to value types.

## 5. Single and SingleOrDefault
### [5.1. Single: enforcing uniqueness with correctness-first behavior](<./sections/5. Single and SingleOrDefault/5.1. Single enforcing uniqueness and correctness first.md>)
1. **Exactly one element required**: `Single` throws if the sequence is empty or if it contains more than one matching element.
2. **Short-circuit on second match**: `Single(x => predicate(x))` typically stops after it can prove there is more than one match, but you still need to design for possible near-full enumeration depending on where the second match occurs.
3. **Use when invariants exist**: `Single` is ideal when your domain guarantees uniqueness (e.g., ID lookups) and you want failures to surface loudly.

### [5.2. SingleOrDefault: "0 or 1" with defaulting](<./sections/5. Single and SingleOrDefault/5.2. Singleordefault zero or one with defaulting.md>)
1. **Empty means default(T)**: `SingleOrDefault` does not throw on "not found", but still throws if more than one element matches.
2. **Value-type ambiguity**: if `default(T)` can be a legitimate value, represent "not found" explicitly instead of relying on `SingleOrDefault`.

## 6. Select
### [6.1. Select: projection shape changes and deferred execution](<./sections/6. Select/6.1. Select projection shape changes and deferred execution.md>)
1. **Select transforms each element**: it maps `TSource -> TResult` (changing the element type of the sequence).
2. **Deferred and streaming**: `Select` itself typically does not buffer; it applies the selector as elements are enumerated.
3. **Allocation/perf awareness**: projection that creates new objects per element increases allocation rate; prefer lightweight projections in hot paths.

### [6.2. Select with index: when position matters](<./sections/6. Select/6.2. Select with index when position matters.md>)
1. **Overload includes index**: `source.Select((item, index) => ...)` lets you derive values based on position.
2. **Avoid relying on "materialized index" timing**: index is based on enumeration order; re-enumerating can produce different indices if the source ordering changes.

### [6.3. Captures and `static` lambdas (performance hygiene)](<./sections/6. Select/6.3. Captures and static lambdas performance hygiene.md>)
1. **Avoid accidental closure allocations**: when a lambda captures outer variables, the compiler generates closure objects; in hot paths prefer `static` lambdas where possible.
2. **Make captured values explicit**: pass needed values via local variables/parameters in a way that avoids capturing the whole surrounding scope.

## 7. Min/Max, Count, Sum, Average (aggregations)
### [7.1. Min and Max: empty sequences and selector overloads](<./sections/7. Aggregations/7.1. Min and Max empty sequences and selector overloads.md>)
1. **Min/Max are aggregations**: they reduce the sequence to a single value and require enumerating the source.
2. **Empty sequence behavior**: `Min`/`Max` throw `InvalidOperationException` when the sequence is empty (or no element matches, for selector/filter compositions).
3. **Selectors and comparers**: you can project keys for `Min/Max` via selectors; choose comparers if ordering/correctness matters (especially for strings).

### [7.2. Count: fast paths vs full enumeration](<./sections/7. Aggregations/7.2. Count fast paths vs full enumeration.md>)
1. **Count without predicate can be O(1)**: if the source implements a sizing interface (`ICollection<T>`, arrays), LINQ can often read `Count` directly.
2. **Count with predicate enumerates**: `Count(x => predicate(x))` must iterate to evaluate the predicate for all elements.
3. **Avoid repeated Count()**: calling `Count()` repeatedly on an `IEnumerable<T>` can re-enumerate and waste CPU; cache into a list/array when appropriate.

### [7.3. Sum: numeric overflow and nullable behavior](<./sections/7. Aggregations/7.3. Sum numeric overflow and nullable behavior.md>)
1. **Sum is a single pass aggregation**: `Sum` enumerates once and computes totals; CPU cost is proportional to sequence length.
2. **Overflow expectations**: for integral types, overflow can throw (e.g., `OverflowException`) depending on numeric type and LINQ implementation details.
3. **Nullable sequences**: `Sum` over nullable numeric types returns `null` when there are no elements (or when the entire input is null, depending on overload), so model your "empty vs 0" semantics intentionally.

### [7.4. Average: return type rules and empty-sequence exceptions](<./sections/7. Aggregations/7.4. Average return type rules and empty sequence exceptions.md>)
1. **Average returns floating-point**: for integer inputs, `Average` produces `double` (or `decimal` for `IEnumerable<decimal>` overloads).
2. **Empty sequence throws**: `Average` throws `InvalidOperationException` on empty sequences.
3. **Selector overload costs**: `Average(x => selector(x))` may allocate if the selector creates objects; keep selector work minimal for performance.

### [7.5. Aggregation composition: don't accidentally enumerate multiple times](<./sections/7. Aggregations/7.5. Aggregation composition avoid multiple enumeration.md>)
1. **Each terminal call enumerates**: `Count()`, then `Sum()`, then `Average()` will enumerate repeatedly unless you materialize results once.
2. **Materialize only when needed**: `ToArray`/`ToList` can trade RAM for fewer CPU passes; the right choice depends on sequence cost and size.

## 8. IMP points to remember about LINQ
### [8.1. LINQ checklist (correctness + performance + API design)](<./sections/8. IMP points/8.1. Linq checklist correctness performance api design.md>)
1. **Know where work happens**: query construction is cheap; the real cost (CPU + allocations + exceptions) happens at enumeration/terminal operators.
2. **Pick operators by evaluation behavior**: `First`/`ElementAt`/`Single` can short-circuit (with caveats), while `OrderBy` must buffer for sorting.
3. **Control allocations**: avoid closure captures in lambdas (use `static` lambdas and explicit parameters), keep projections lightweight, and be careful with materialization (`ToList`/`ToArray`) in hot paths.
4. **Avoid multi-enumeration surprises**: if you enumerate an `IEnumerable<T>` more than once, assume the pipeline re-executes; cache results when correctness/performance requires it.
5. **Understand defaulting vs invariants**: use `OrDefault` variants when "not found" is a valid outcome; use `First`/`Single` when "must exist" or "must be unique" is a correctness invariant.
6. **Prefer explicit comparers for correctness**: for ordering and string comparisons, use `StringComparer.Ordinal` or the correct domain-specific comparer instead of relying on defaults.
7. **Model "not found" explicitly for value types**: `default(T)` ambiguity is common; consider returning tuples `(bool found, T value)` or custom result types in your own APIs.
8. **Be mindful of provider translation**: in LINQ providers, not all .NET methods/lambdas translate; keep query bodies provider-friendly and side-effect-free.
9. **Interview-ready "gotchas"**: exceptions thrown by `First`/`Single`/`Min`/`Max` on empty sequences show up at enumeration time; `OrderBy` is buffered; `ElementAt` on non-indexed enumerables is O(n).

## 9. Questions and answers for interviews (LINQ)
### [9.1. Common interview Q&A: LINQ](<./sections/9. Interview Q and A/9.1. Interview Q and A linq.md>)
1. **Q: What does "deferred execution" mean in LINQ?**  
   **A:** LINQ-to-Objects query composition builds an iterator/pipeline; the sequence is processed only when you iterate or call a terminal operator like `ToList`, `Count`, `Sum`, etc.
2. **Q: Why can LINQ throw exceptions later than you expect?**  
   **A:** Operators like `First`, `Single`, `Min`, and `Max` throw when the query is enumerated, not when it's written.
3. **Q: Difference between `First` and `FirstOrDefault`?**  
   **A:** `First` throws `InvalidOperationException` on empty/no-match; `FirstOrDefault` returns `default(T)` (e.g., `null` for reference types).
4. **Q: What does `ElementAt` do when the index is out of range?**  
   **A:** `ElementAt` throws `ArgumentOutOfRangeException`; `ElementAtOrDefault` returns `default(T)` instead.
5. **Q: What guarantee does `Single` provide?**  
   **A:** `Single` ensures exactly one matching element exists; it throws if none exist or if more than one exists.
6. **Q: Difference between `Single` and `SingleOrDefault`?**  
   **A:** `SingleOrDefault` returns `default(T)` when no element matches, but still throws if more than one element matches.
7. **Q: Is `OrderBy` lazy like `Where`?**  
   **A:** It's deferred in the sense that it builds a pipeline, but to produce sorted output it must buffer and evaluate keys across the entire sequence.
8. **Q: Does `Select` enumerate immediately?**  
   **A:** No; `Select` is deferred and applies the selector as elements are enumerated.
9. **Q: How does LINQ affect performance in hot paths?**  
   **A:** LINQ can add CPU overhead (extra iterator logic, repeated enumeration) and allocations (iterator objects, closure captures, projections); prefer loops for zero-allocation hot paths when measured.
10. **Q: What's the complexity of `ElementAt` on a non-indexed `IEnumerable<T>`?**  
   **A:** It must enumerate from the start up to the index (`O(n)`), so repeated large-index calls are expensive.
11. **Q: When should you materialize with `ToList()` or `ToArray()`?**  
   **A:** When you need multiple passes over the same results, when the source is expensive/stateful, or when you must avoid repeated enumeration; trade CPU savings against RAM usage.
12. **Q: How does `Count()` behave compared to `Count(predicate)`?**  
   **A:** `Count()` can be fast if the source exposes a count; `Count(predicate)` must evaluate the predicate for each element (`O(n)`).
13. **Q: How do `Min` and `Max` behave on empty sequences?**  
   **A:** They throw `InvalidOperationException` if the sequence is empty.
14. **Q: What does `Average` return for integer sequences?**  
   **A:** `Average` returns a floating-point value (`double` for most integer inputs) and throws on empty sequences.
15. **Q: What are common null-safety issues with LINQ "OrDefault" operators?**  
   **A:** For reference types you may get `null`; for value types you may get `default(T)`, which can be ambiguous unless you model "not found" explicitly.
16. **Q: How can you avoid closure allocations in LINQ lambdas?**  
   **A:** Use `static` lambdas where possible and pass required values explicitly rather than capturing the whole outer scope.
17. **Q: Why is comparer choice important for `OrderBy`?**  
   **A:** Default comparisons (especially for strings) can be culture-sensitive or otherwise unexpected; use domain-appropriate comparers like `StringComparer.Ordinal`.
18. **Q: Does LINQ guarantee ordering?**  
   **A:** `OrderBy` defines ordering, but relying on stability across providers/implementations can be risky; treat equal-key ordering guarantees carefully.
19. **Q: What happens if your query has side effects inside lambdas?**  
   **A:** With deferred execution and possible multiple enumeration, side effects can run at unexpected times or multiple times; LINQ should be side-effect-free for predictable behavior.
20. **Q: How do LINQ providers like EF Core differ from LINQ-to-Objects?**  
   **A:** Providers translate expression trees into another representation (e.g., SQL); not all .NET code can translate, so keep query bodies simple and provider-friendly.

## 10. Overlaps to avoid (where this domain stops)
### [10.1. Boundaries: what is covered elsewhere in this repo](<./sections/10. Overlaps to avoid/10.1. Boundaries what is covered elsewhere.md>)
1. **LINQ general iterator/IEnumerable fundamentals** overlap with [21 Collections](<../21 Collections/README.md>) (enumeration, iterator blocks, deferred execution framing); this domain focuses on the operator behaviors you listed (ordering, element access, projection, and aggregations).
2. **Lambda/closure basics** overlap with [19 Delegates and Events](<../19 Delegates and Events/README.md>) and [17 Extension Methods and others](<../17 Extension Methods and others/README.md>); here it's only referenced where it impacts LINQ allocations and correctness.
3. **Projection into anonymous types/tuples** overlaps with [23 Anonymous Types](<../23 Anonymous Types/README.md>) and [24 Tuples](<../24 Tuples/README.md>); this domain treats projection as "shape transformation" but doesn't re-explain those specific language constructs.
