# String and DateTime and Math

## 1. String fundamentals

### [1.1. String as an immutable value (reference type with value semantics)](<./sections/1. String fundamentals/1.1. String as an immutable value reference type with value semantics.md>)

1. **Immutability**: `string` instances never change; most “modifying” APIs return a new `string`.
2. **Value semantics**: equality and hashing are based on string contents (not identity), unless you explicitly choose reference checks.
3. **UTF-16 reality**: indexing is by code units, not by “user-perceived characters”; surrogate pairs matter for some symbols.
4. **Allocation framing**: concatenation, substring copies, and formatting typically allocate; plan hot paths accordingly.

### [1.2. Encoding and Unicode basics (what a `string` really contains)](<./sections/1. String fundamentals/1.2. Encoding and Unicode basics what a string really contains.md>)

1. **`string` stores UTF-16 code units**; it is not “bytes” and not “text encoding” by itself.
2. **Normalization**: visually identical text can compare differently unless you normalize to a chosen form.
3. **Grapheme clusters**: emoji/combined characters can span multiple `char` indices; avoid assuming `Length` equals “characters”.
4. **Comparers**: prefer `StringComparison.Ordinal` for protocol/data comparisons; use culture-aware comparisons only when the UI/linguistic semantics require it.

### [1.3. String interning and equality checks (reference vs value)](<./sections/1. String fundamentals/1.3. String interning and equality checks reference vs value.md>)

1. **Interning idea**: literals may be interned; you should not rely on interning for correctness.
2. **`==` and `Equals`**: compare content using value semantics for most common cases.
3. **Reference equality**: use `object.ReferenceEquals` when you truly mean identity (usually rare for strings).
4. **Hashing**: string hash codes are content-based; stable hashing is essential for hash-based collections.

## 2. How String Objects are Created

### [2.1. String literals and compile-time creation](<./sections/2. How String Objects are Created/2.1. String literals and compile time creation.md>)

1. **Literal forms**: normal string literals, verbatim literals (`@`), and escape sequences.
2. **Escape sequences**: `\n`, `\t`, `\\`, `\"`, and how they affect the resulting `string`.
3. **Interpolated string literals**: compile-time weaving into a call that can reduce allocations via handlers.
4. **Verbatim vs non-verbatim**: differences in escape processing and backslash behavior.

### [2.2. Runtime creation (constructing strings from data)](<./sections/2. How String Objects are Created/2.2. Runtime creation constructing strings from data.md>)

1. **Concatenation and joins**: `+`, `string.Concat`, `string.Join` and their allocation behavior.
2. **Replacing/modifying APIs**: methods like `Replace`, `Trim`, `Remove` typically allocate new strings.
3. **Copying data into strings**: `new string(char[])`, `new string(ReadOnlySpan<char>)` (as available), and conversion utilities.
4. **`string.Empty`**: a shared singleton; prefer it over creating new empty strings.

### [2.3. `char`-based and slice-based creation (Span-friendly thinking)](<./sections/2. How String Objects are Created/2.3. char based and slice based creation span friendly thinking.md>)

1. **Creating from spans**: prefer `string.Create` and span-based overloads when you can compute length up front.
2. **Avoiding intermediate allocations**: parse/format/slice into spans first, then create the final string once.
3. **Indexing correctness**: verify assumptions with surrogate pairs and combining marks when slicing by index.
4. **Hot-path rule**: if you do repeated small concatenations, treat allocations as the bottleneck and redesign.

## 3. Converting Strings

### [3.1. Value-to-string conversion (formatting pipelines)](<./sections/3. Converting Strings/3.1. Value to string conversion formatting pipelines.md>)

1. **Prefer formatting handlers** for interpolated strings in hot paths (C# 15 era guidance: rely on interpolated string handler APIs).
2. **Deterministic formats** for logs/protocols: explicitly choose formatting patterns and culture/format provider.
3. **`IFormattable`/`TryFormat` mindset**: format into pre-sized buffers when performance matters.
4. **Avoid `ToString()` on objects in tight loops** unless you control the format and allocations.

### [3.2. String-to-bytes and string-to-chars (encoding boundaries)](<./sections/3. Converting Strings/3.2. String to bytes and string to chars encoding boundaries.md>)

1. **`Encoding` is the boundary**: `Encoding.UTF8.GetBytes(string)` converts text to bytes; `GetString(byte[])` converts bytes back to text.
2. **Avoid lossy assumptions**: validate encoding choice at boundaries (wire/files/db) and keep it consistent.
3. **`ToCharArray` vs spans**: `ToCharArray()` allocates; prefer `AsSpan()`/`AsMemory()` when possible.
4. **Length and slicing**: byte length and char length differ in variable-width encodings like UTF-8.

### [3.3. Converting via APIs (Substring/AsSpan/char transforms)](<./sections/3. Converting Strings/3.3. Converting via APIs substring asspan char transforms.md>)

1. **Substring vs span slicing**: `Substring` allocates; use spans to avoid allocations when you only need a view/scan.
2. **`ToUpperInvariant`/`ToLowerInvariant`**: choose invariant transforms for deterministic casing.
3. **Normalization-aware casing**: some scripts can require extra care when you care about canonical equivalence.
4. **Use `string.Create` once** when you need to build the final output from transformed pieces.

## 4. Checking Strings

### [4.1. Null/empty/whitespace checks (contracts first)](<./sections/4. Checking Strings/4.1. Null empty whitespace checks contracts first.md>)

1. **Choose the right check**: `IsNullOrEmpty` vs `IsNullOrWhiteSpace` based on the meaning of “missing”.
2. **Treat whitespace as data vs absence** explicitly; don’t normalize silently unless the domain requires it.
3. **NRT guidance**: use `string?` in APIs when null is a valid state; otherwise validate and keep it non-null.
4. **Performance**: `IsNullOrEmpty` is cheap; whitespace checks are slightly more work.

### [4.2. Equality and ordering checks (Ordinal vs culture)](<./sections/4. Checking Strings/4.2. Equality and ordering checks ordinal vs culture.md>)

1. **`StringComparison.Ordinal`** for data/protocol keys and comparisons.
2. **`StringComparison.OrdinalIgnoreCase`** for case-insensitive matching without culture surprises.
3. **`StringComparison.CurrentCulture`** (or `InvariantCulture`) only when language/collation semantics matter.
4. **Avoid `ToLower()`/`ToUpper()` in comparisons**; comparer APIs avoid extra allocations and mistakes.

### [4.3. Searching patterns (Contains/StartsWith/EndsWith/IndexOf)](<./sections/4. Checking Strings/4.3. Searching patterns contains startswith endswith indexof.md>)

1. **Choose correct overloads** with `StringComparison` to control culture/ordinal behavior.
2. **`IndexOf` + `>= 0`** is often the simplest pattern for “contains”.
3. **Span-based scans**: if you already have a span, scan it directly instead of creating substrings.
4. **Allocation control**: prefer non-allocating operations until you must produce output.

## 5. Formatting Strings

### [5.1. Composite formatting vs interpolated strings (and modern handler guidance)](<./sections/5. Formatting Strings/5.1. Composite formatting vs interpolated strings and modern handler guidance.md>)

1. **Interpolated strings are the default** for readability; rely on handler-based optimization where available.
2. **Composite formatting** works but is easier to mismatch placeholders and types.
3. **Avoid boxing surprises**: interpolating `object` values can cause allocations depending on the runtime type.
4. **Hot path rule**: if formatting happens frequently, avoid “create many intermediate strings”.

### [5.2. Format strings and format specifiers (standard vs custom)](<./sections/5. Formatting Strings/5.2. Format strings and format specifiers standard vs custom.md>)

1. **Standard format patterns** for date/time round-tripping (see `DateTime Formats` section).
2. **Numeric formats**: `N`, `F`, `G`, `E` and their culture sensitivity.
3. **Custom patterns**: use explicit patterns when you must match a wire/storage contract.
4. **`IFormatProvider`**: choose invariant for machine protocols; choose current culture only for UI.

### [5.3. Formatting into buffers (allocation control)](<./sections/5. Formatting Strings/5.3. Formatting into buffers allocation control.md>)

1. **`TryFormat`/span-based formatting** when you already have a `Span<char>` destination.
2. **`string.Create`**: build output once with a single final allocation.
3. **Avoid repeated string concatenation in loops**: prefer `StringBuilder` or a single `string.Create` pipeline.
4. **Prefer “one allocation for the final output”** as a consistent performance goal.

### [5.4. Formatting pitfalls (culture, rounding, and hidden conversions)](<./sections/5. Formatting Strings/5.4. Formatting pitfalls culture rounding and hidden conversions.md>)

1. **Culture mismatch** can break parsing/round-trip; standardize your format contract.
2. **Rounding**: numeric formatting may round according to rules; verify with tests.
3. **`DateTime.Kind` confusion**: display formatting can mislead if you do not choose UTC/local semantics.
4. **Unexpected exceptions**: some format operations can throw for invalid patterns; validate input patterns at boundaries.

## 6. Modifying Strings

### [6.1. Immutable transformation APIs (returns new strings)](<./sections/6. Modifying Strings/6.1. Immutable transformation APIs returns new strings.md>)

1. **Trimming**: `Trim`, `TrimStart`, `TrimEnd` (and choosing which characters to trim).
2. **Replacing**: `Replace` (substring vs char) and its allocation cost.
3. **Removing/inserting/padding**: `Remove`, `Insert`, `PadLeft`, `PadRight`.
4. **Substring slicing**: `Substring(startIndex)` and `Substring(startIndex, length)` allocates.

### [6.2. Efficient slicing without allocation (Span-first)](<./sections/6. Modifying Strings/6.2. Efficient slicing without allocation span first.md>)

1. **`AsSpan` / `ReadOnlySpan<char>`** to avoid `Substring` allocations.
2. **Search within spans** using span-aware APIs rather than creating temporary strings.
3. **Create only at the end**: do transforms as views, then allocate the final output string.
4. **Index correctness**: handle surrogate pairs when slicing by “visual” units is required.

### [6.3. Concatenation and composition (Concat/Join vs `+`)](<./sections/6. Modifying Strings/6.3. Concatenation and composition concat join vs plus.md>)

1. **`string.Concat`** reduces some intermediate allocations compared to naive `+` chains.
2. **`string.Join`** is usually the right choice for joining sequences with separators.
3. **For many small appends**: prefer `StringBuilder` to amortize capacity growth.
4. **Reserve capacity mindset**: pre-sizing helps avoid repeated buffer expansions.

### [6.4. Unicode normalization and canonical equivalence (when it matters)](<./sections/6. Modifying Strings/6.4. Unicode normalization and canonical equivalence when it matters.md>)

1. **Normalization forms**: choose a consistent normalization strategy when comparing or storing text.
2. **Case transforms**: casing alone might not guarantee canonical equivalence.
3. **Indexing vs text semantics**: `Length` is not “number of user characters”.
4. **Test with real-world inputs**: diacritics, ligatures, and emoji are common sources of bugs.

## 7. Strings with for loop

### [7.1. Index-based scanning (fast and predictable)](<./sections/7. Strings with for loop/7.1. Index based scanning fast and predictable.md>)

1. **`for` loops** are ideal when you need indices and tight control.
2. **Cache invariants**: store `Length` and other loop-invariants in locals when it improves clarity/perf.
3. **Avoid per-iteration allocations**: do not create substrings inside hot loops.
4. **Use span views** to scan without copying.

### [7.2. Bounds checks and JIT-friendly patterns](<./sections/7. Strings with for loop/7.2. Bounds checks and JIT friendly patterns.md>)

1. **Stable index patterns** help the JIT eliminate bounds checks in many cases.
2. **Keep loop bodies simple** and avoid complex control flow that inhibits optimizations.
3. **Prefer `ReadOnlySpan<char>`** for scanning and algorithm composition.
4. **Measure**: micro-optimizations are only worth it when profiling shows hot paths.

### [7.3. Building results inside loops (builder vs create once)](<./sections/7. Strings with for loop/7.3. Building results inside loops builder vs create once.md>)

1. **Prefer `StringBuilder`** when the output length is unknown or you append variable amounts.
2. **Prefer `string.Create`** when you can compute the final length up front.
3. **Avoid `+=` in loops**: it creates many intermediate strings and increases GC pressure.
4. **Minimize conversions** inside the loop; convert once per segment if possible.

## 8. StringBuilder

### [8.1. When to use `StringBuilder` (and when not to)](<./sections/8. StringBuilder/8.1. When to use stringbuilder and when not to.md>)

1. **Use it** for many incremental appends, unknown output size, or iterative building.
2. **Avoid it** for one-shot formatting where interpolation or `string.Create` is clearer and often cheaper.
3. **Prefer capacity planning** to reduce buffer expansions.
4. **Remember immutability**: `StringBuilder` is mutable; the produced `string` is immutable.

### [8.2. Capacity and reuse (reduce allocations)](<./sections/8. StringBuilder/8.2. Capacity and reuse reduce allocations.md>)

1. **`Capacity`**: set a reasonable initial capacity when you can estimate the output size.
2. **Reuse**: prefer clearing and reusing a builder to avoid repeated allocations if it fits your lifetime model.
3. **Avoid large transient builders** in tight loops; measure LOH impact for huge buffers.
4. **Keep hot objects in the right scope** to reduce GC pressure.

### [8.3. `StringBuilder` and interpolated strings (handler-based appends)](<./sections/8. StringBuilder/8.3. Stringbuilder and interpolated strings handler based appends.md>)

1. Prefer `StringBuilder.Append(...)` overloads that avoid unnecessary intermediate allocations.
2. Use interpolated string handlers to reduce per-iteration formatting allocations.
3. Avoid formatting to string first, then appending; append directly into the builder.
4. Validate culture/format contract for any human-visible values.

## 9. Methods of StringBuilder

### [9.1. Append family (Append, AppendLine, AppendJoin, AppendFormatted)](<./sections/9. Methods of StringBuilder/9.1. Append family append appendline appendjoin appendformatted.md>)

1. **`Append`**: append primitives/strings efficiently without manual `ToString()` everywhere.
2. **`AppendLine`**: consistent line endings; avoid manual `"\n"` concatenation when readability matters.
3. **`AppendJoin`**: join multiple values with a delimiter directly into the builder.
4. **Formatting**: `AppendFormat` when you need composite-format style formatting.

### [9.2. Insert, Remove, Replace, and modifications](<./sections/9. Methods of StringBuilder/9.2. Insert remove replace and modifications.md>)

1. **`Insert`**: insertion shifts content; use carefully for large builders.
2. **`Remove`**: deletes a range; validate indices.
3. **`Replace`**: replace substrings/characters; remember it may scan and allocate when it has to convert.
4. **`Clear`**: resets length while keeping capacity (great for reuse).

### [9.3. Capacity control and conversion out to string](<./sections/9. Methods of StringBuilder/9.3. Capacity control and conversion out to string.md>)

1. **`EnsureCapacity` / capacity tuning**: reduce growth churn for known workloads.
2. **`ToString()`**: produces the final immutable `string` snapshot; calling it frequently can allocate often.
3. **Avoid repeated `ToString()`** inside loops; defer `ToString()` until the end.
4. **Thread-safety**: `StringBuilder` is not designed for concurrent writers; synchronize at a higher level.

## 10. DateTime

### [10.1. DateTime mental model (ticks, Kind, and immutability)](<./sections/10. DateTime/10.1. DateTime mental model ticks kind and immutability.md>)

1. **Ticks**: `DateTime` stores time as ticks since its epoch; it is a value type.
2. **`DateTimeKind`**: `Unspecified`, `Local`, `Utc` affects conversions and formatting interpretation.
3. **Immutability**: operations produce new `DateTime` values; no in-place mutation.
4. **Prefer explicit time semantics**: decide UTC vs local and stick to it.

### [10.2. Creating DateTime values (constructors and clocks)](<./sections/10. DateTime/10.2. Creating DateTime values constructors and clocks.md>)

1. **`DateTime.Now`** for local current time and UI display scenarios.
2. **`DateTime.UtcNow`** for storage, comparisons, and deterministic ordering.
3. **`DateTime.Today`** for local date-only scenarios (time becomes midnight local).
4. **Constructors**: year/month/day/time constructors; validate ranges and handle calendar assumptions.

### [10.3. Date-only types and time-only types (modern guidance)](<./sections/10. DateTime/10.3. Date only types and time only types modern guidance.md>)

1. Use `DateOnly` and `TimeOnly` when you do not need a full timestamp.
2. Prefer `DateTimeOffset` when you need an offset-aware timestamp for time zone correctness.
3. Keep conversions explicit to avoid silently changing semantics.
4. Use UTC or offset-aware types consistently across boundaries.

## 11. DateTime Formats

### [11.1. Standard format strings (round-trip and ordering)](<./sections/11. DateTime Formats/11.1. Standard format strings round trip and ordering.md>)

1. **`"O"` (round-trip)**: stable formatting for storage or diagnostics where parse symmetry matters.
2. **`"s"` / `"u"`**: ISO-like formats commonly used for readability and interoperability.
3. **`"R"`**: RFC1123 pattern usage notes.
4. **Use invariants** when format is consumed by machines, not humans.

### [11.2. Custom format strings (explicit patterns)](<./sections/11. DateTime Formats/11.2. Custom format strings explicit patterns.md>)

1. `yyyy`, `MM`, `dd`, `HH`, `mm`, `ss` style tokens for deterministic layout.
2. Fractional seconds: choosing precision intentionally (avoid unnecessary digits).
3. Time zone offset formatting with `DateTimeOffset`.
4. Validate format strings with real examples (including edge cases like midnight/DST transitions).

### [11.3. Culture and `IFormatProvider` (deterministic behavior)](<./sections/11. DateTime Formats/11.3. Culture and IFormatProvider deterministic behavior.md>)

1. Choose `CultureInfo.InvariantCulture` for protocols and wire formats.
2. Choose current culture for UI display where it is meaningful.
3. `DateTimeFormatInfo` controls calendar, separators, and localized names.
4. Avoid relying on default formatting for storage/transport contracts.

### [11.4. DateTimeOffset formatting (offset correctness)](<./sections/11. DateTime Formats/11.4. DateTimeOffset formatting offset correctness.md>)

1. Prefer `DateTimeOffset` for “timestamp with an offset” scenarios.
2. Formatting should include the offset when that is part of the contract.
3. Converting to UTC changes displayed clock time; choose the representation explicitly.
4. Test formatting and conversions together to avoid silent semantic drift.

## 12. Date Subtraction

### [12.1. Subtracting two DateTime values (TimeSpan)](<./sections/12. Date Subtraction/12.1. Subtracting two DateTime values timespan.md>)

1. `date2 - date1` yields a `TimeSpan` difference.
2. Use `TimeSpan` properties (`Days`, `Hours`, `TotalDays`, etc.) intentionally.
3. Negative spans are possible; handle sign explicitly.
4. Subtraction is value-based; it does not automatically handle time zone conversions.

### [12.2. DST and time zone correctness (where DateTime can surprise)](<./sections/12. Date Subtraction/12.2. DST and time zone correctness where DateTime can surprise.md>)

1. `DateTime` without explicit time zone can produce misleading differences across DST boundaries.
2. Prefer UTC/`DateTimeOffset` when you need correct elapsed times.
3. If you do local-time arithmetic, define the intended time zone rules explicitly.
4. Validate with real DST dates in tests.

### [12.3. Date vs elapsed time (when to use TimeSpan)](<./sections/12. Date Subtraction/12.3. Date vs elapsed time when to use timespan.md>)

1. Use `TimeSpan` for durations (elapsed time, countdowns).
2. Use `DateOnly` for date-based “difference in days” logic where time-of-day should be ignored.
3. Normalize to midnight (or an agreed boundary) before comparing “calendar days” if that is your goal.
4. Avoid mixing “calendar subtraction” with “duration subtraction” accidentally.

## 13. Date Adding

### [13.1. Adding days/hours/minutes/seconds (Add*, AddYears)](<./sections/13. Date Adding/13.1. Adding days hours minutes seconds add and addyears.md>)

1. `AddDays`, `AddHours`, `AddMinutes`, `AddSeconds`, `AddMilliseconds`, `AddTicks` are common building blocks.
2. Use `AddYears` and `AddMonths` carefully: calendar rules and leap years can change resulting day-of-month.
3. Add operations return new values; they do not mutate the original.
4. Choose types (`DateOnly`, `DateTimeOffset`, UTC) that reflect your semantics.

### [13.2. DST/offset edge cases (make intent explicit)](<./sections/13. Date Adding/13.2. DST offset edge cases make intent explicit.md>)

1. Adding in local time can shift clock times due to DST transitions.
2. For “add elapsed duration” semantics, prefer UTC or offset-aware computations.
3. For “add calendar date” semantics, use `DateOnly` when time-of-day should not change.
4. Test boundary dates (DST start/end, leap day) in unit tests.

## 14. Math

### [14.1. System.Math and MathF (core numeric operations)](<./sections/14. Math/14.1. System.Math and MathF core numeric operations.md>)

1. Use `Math.Abs`, `Min`, `Max`, `Clamp` patterns (where available) for correctness and readability.
2. Rounding APIs: `Round`, `Floor`, `Ceiling`, `Truncate` with explicit midpoint behavior understanding.
3. `MathF` for float-specific operations to avoid unnecessary conversions.
4. Trigonometry/exponentiation basics: use the right precision type (`double` vs `float`).

### [14.2. Integers, overflow, and checked arithmetic](<./sections/14. Math/14.2. Integers overflow and checked arithmetic.md>)

1. Integer overflow rules differ by `checked` vs `unchecked`.
2. Prefer `checked` when overflow is a correctness bug in your domain.
3. Be explicit about conversion boundaries (`int`/`long`/`nint`) to avoid hidden narrowing.
4. Use range checks before casts when that is simpler than exception-driven logic.

### [14.3. Floating-point pitfalls (NaN, Infinity, comparison)](<./sections/14. Math/14.3. Floating point pitfalls nan infinity comparison.md>)

1. `NaN` comparisons are special: `NaN != NaN`; handle it explicitly with `double.IsNaN`.
2. Avoid direct equality for computed floating values; use tolerances when appropriate.
3. Be careful with signed zero (`+0` vs `-0`) if you store/compare exact bit-level behavior.
4. Understand overflow to Infinity and what it means for your algorithm.

### [14.4. BigInteger for arbitrary-precision integers](<./sections/14. Math/14.4. BigInteger for arbitrary precision integers.md>)

1. Use `BigInteger` when built-in integer ranges are not sufficient.
2. Operations include `+`, `-`, `*`, `/` and modular arithmetic patterns.
3. Avoid unnecessary conversions between `BigInteger` and primitive numerics in hot paths.
4. For algorithms like modular exponentiation, use built-in optimized methods when available.

## 15. Regular Expressions

### [15.1. Regex mental model (pattern, engine, and options)](<./sections/15. Regular Expressions/15.1. Regex mental model pattern engine and options.md>)

1. **Pattern language**: understand literals, character classes, quantifiers, and anchors.
2. **Escaping**: raw strings (`""`) can reduce escaping mistakes; still verify the actual pattern.
3. **Options**: `IgnoreCase`, `Multiline`, `Singleline`, and culture/behavior differences.
4. **Timeouts**: always use a bounded timeout when the pattern or input may be untrusted.

### [15.2. Matching and extracting (Match, Matches, groups)](<./sections/15. Regular Expressions/15.2. Matching and extracting match matches groups.md>)

1. Use `IsMatch` for existence checks to avoid extra object creation.
2. Use `Match` when you need the first match; use `Matches` for multiple.
3. Extract groups/captures carefully; validate group indices.
4. Prefer non-backtracking where feasible; design patterns to reduce catastrophic behavior.

### [15.3. Replacing and splitting (Replace, Replace with evaluator, Split)](<./sections/15. Regular Expressions/15.3. Replacing and splitting replace evaluator split.md>)

1. Use `Regex.Replace` for straightforward replacements.
2. Use an evaluator when replacement depends on captured groups.
3. Avoid repeated regex creation; cache regex instances or use source-generated regex where possible.
4. Validate that splitting behavior matches expectations for empty matches and boundaries.

### [15.4. Performance and safety (cache, source gen, ReDoS)](<./sections/15. Regular Expressions/15.4. Performance and safety cache source gen redos.md>)

1. Cache `Regex` instances for repeated usage (including options and culture behavior).
2. Prefer source-generated regex via `RegexGenerator` when patterns are known at compile time.
3. Use timeouts for untrusted input to mitigate ReDoS risks.
4. Profile with representative input sets: regex performance can vary dramatically by pattern/input.

## 16. IMP points to remember

### [16.1. IMP: Strings (performance + correctness checklist)](<./sections/16. IMP points to remember/16.1. IMP strings performance and correctness checklist.md>)

1. Strings are immutable: most “modifications” allocate a new `string`.
2. Avoid `+=` in loops; use `StringBuilder` or `string.Create` for “one allocation at the end”.
3. Prefer `StringComparison.Ordinal` for data/protocol comparisons; avoid culture surprises.
4. Use span-first operations (`AsSpan`, `ReadOnlySpan<char>`) to avoid intermediate allocations.
5. Do not assume `Length` equals number of user-perceived characters (Unicode/graphemes).

### [16.2. IMP: DateTime (semantic correctness checklist)](<./sections/16. IMP points to remember/16.2. IMP datetime semantic correctness checklist.md>)

1. Decide UTC vs local (or use `DateTimeOffset`) and make it explicit.
2. Use stable round-trip formats like `"O"` for storage and parse symmetry.
3. Be careful around DST transitions when doing local-time arithmetic.
4. Prefer `DateOnly`/`TimeOnly` when you need date-only or time-only semantics.

### [16.3. IMP: Math (overflow + floating correctness checklist)](<./sections/16. IMP points to remember/16.3. IMP math overflow and floating correctness checklist.md>)

1. Use `checked` when overflow is a correctness bug.
2. Understand rounding rules; never assume “string formatting rounding matches numeric algorithm rounding”.
3. For floats/doubles, avoid direct equality on computed values; use tolerance.
4. Use `MathF` for float-heavy code to avoid unnecessary conversions.

### [16.4. IMP: Regular Expressions (safety + perf checklist)](<./sections/16. IMP points to remember/16.4. IMP regular expressions safety and perf checklist.md>)

1. Use regex timeouts for untrusted input.
2. Cache regex instances or use source-generated regex for compile-time patterns.
3. Design patterns to avoid catastrophic backtracking.
4. Use `IsMatch` when you only need existence.

## 17. Questions and answers for interviews

### [17.1. Interview Q&A: String, DateTime, Math, Regex (C# 15 era)](<./sections/17. Questions and answers for interviews/17.1. Interview Q and A string datetime math regex.md>)

1. **Q:** Why are strings “immutable”, and what does that mean for performance?
   **A:** Most “modifying” methods return new strings; repeated modifications allocate and increase GC pressure.
2. **Q:** What is the difference between `string` equality and reference equality?
   **A:** `==`/`Equals` compare contents (value semantics), while `ReferenceEquals` compares identity; relying on interning is not correct.
3. **Q:** When should you use `StringBuilder` instead of `string.Concat` or interpolation?
   **A:** When you append many segments incrementally (especially with unknown final size); otherwise one-shot formatting can be simpler.
4. **Q:** How do you avoid allocations when you need substring-like views?
   **A:** Use `AsSpan`/`ReadOnlySpan<char>` and span-aware algorithms; avoid creating intermediate substrings.
5. **Q:** What is the biggest semantic trap with `DateTime` and time zones?
   **A:** `DateTimeKind` + local/UTC interpretation; for correctness across zones, prefer `DateTimeOffset` or UTC consistently.
6. **Q:** Which `DateTime` format string is best for round-trip storage?
   **A:** `"O"` (round-trip / ISO 8601) so parse symmetry is stable.
7. **Q:** What does subtracting two `DateTime` values produce?
   **A:** A `TimeSpan` duration difference; handle sign and DST correctness based on how you represent time.
8. **Q:** What’s the difference between `AddDays` and adding elapsed hours across DST?
   **A:** Calendar-date addition and elapsed-duration addition behave differently in local time; DST can shift the resulting clock time.
9. **Q:** How do you prevent overflow bugs in integer math?
   **A:** Use `checked` or range checks; define overflow behavior explicitly rather than relying on silent `unchecked` defaults.
10. **Q:** Why is direct `double == double` often wrong in algorithms?
   **A:** Floating computations can differ by tiny rounding errors; use tolerances and handle `NaN`/Infinity explicitly.
11. **Q:** When should you use regex, and what are the common safety/perf pitfalls?
   **A:** Use regex for text pattern matching; cache regex instances, use timeouts for untrusted input, and avoid patterns that can trigger catastrophic backtracking.
12. **Q:** What is `RegexGenerator`, and why does it help?
   **A:** It enables source generation for known-at-compile-time patterns to improve startup/perf and avoid repeated runtime compilation overhead.

## 18. Overlaps to avoid (where this domain stops)

### [18.1. Boundaries: what is covered elsewhere in this repo](<./sections/18. Overlaps to avoid/18.1. Boundaries what is covered elsewhere.md>)

1. **Parsing text to values** (including `Parse`, `TryParse`, and date/number parsing mechanics) lives in `Type Conversion`; this domain focuses on `String`/`DateTime` as *text representations* (format strings, `StringBuilder` usage, comparisons/search, and DateTime formatting semantics) plus regex and math API choices.
2. **Console read/write formatting** lives in `CSharp language basics` → `Console I-O`; this domain focuses on formatting APIs themselves, not console-specific I/O adapters.
3. **Nullability modeling and null safety patterns** live in `Handling Null`; this domain assumes you use correct `string?`/`DateTime` contracts.
4. **General iteration syntax and language constructs** live in `CSharp language basics`; this domain focuses on string/date/math API usage and string-specific performance pitfalls.
5. **Generic math via static abstract interface members** lives in `Abstract Classes and Interfaces` → “generic math”; this domain focuses on `System.Math`, `MathF`, and `BigInteger` instead of numeric type-class design.
