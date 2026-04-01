## 1. Overview and mental model (what “conversion” really means)

### [1.1. What type conversion is in C# (and where it happens)](<./sections/1. Overview and mental model/1.1. What type conversion is in CSharp (and where it happens).md>)

1. **Compile-time vs runtime conversions** (implicit conversions, explicit casts, boxing/unboxing)
2. **“Representation” vs “interpretation”** (numeric widening/narrowing vs parsing text)
3. **Failure modes** (overflow, format errors, invalid casts, null handling)
4. **Performance framing** (exceptions, allocations, culture/format cost, hot paths)
5. **API design lens** (when conversions should live in your domain vs at boundaries)

### [1.2. Categories of conversions you’ll use in real code](<./sections/1. Overview and mental model/1.2. Categories of conversions you will use in real code.md>)

1. **Numeric conversions** (integral/floating/decimal; checked/unchecked)
2. **Reference conversions** (upcast/downcast, interface casts, pattern-based casting)
3. **Nullable conversions** (`T` ↔ `T?`, lifting, null coalescing strategies)
4. **Text conversions** (`Parse`, `TryParse`, formatting symmetry)
5. **Framework conversions** (`Convert.*`, `TypeConverter`, serialization-focused conversions)

## 2. Implicit conversions (safe by design — but still learn the edges)

### [2.1. Implicit numeric conversions and why they’re allowed](<./sections/2. Implicit conversions/2.1. Implicit numeric conversions and why they are allowed.md>)

1. **Widening vs narrowing** and what “no information loss” means in practice
2. **Integral promotions** (why `byte + byte` becomes `int`)
3. **`char` conversions** (UTF-16 code unit; not “a letter”)
4. **`nint`/`nuint` and platform width** (portability and interop)
5. **When “implicit” still surprises** (floating point precision, `decimal` rules)

### [2.2. Reference conversions (upcast) and variance basics](<./sections/2. Implicit conversions/2.2. Reference conversions upcast and variance basics.md>)

1. **Upcasting to base types/interfaces** (safe, common, and cheap)
2. **Array covariance** (why it exists, why it can throw at runtime)
3. **Generic variance** (`out`/`in` on interfaces and delegates; safe substitutability)
4. **Nullability and reference conversions** (nullable annotations vs runtime behavior)
5. **Performance notes** (virtual dispatch vs devirtualization, interface calls)

## 3. Explicit conversions and casts (powerful, easy to misuse)

### [3.1. Explicit numeric casts and overflow behavior](<./sections/3. Explicit conversions and casts/3.1. Explicit numeric casts and overflow behavior.md>)

1. **Truncation and rounding** (float → int; toward zero; `Math` alternatives)
2. **Overflow** and why it’s usually silent in `unchecked`
3. **`checked` in modern code** (correctness-first arithmetic; where to apply it)
4. **Bit-level intent** (casts are not bit reinterpretation; use the right APIs)
5. **Branch-friendly range checks** (patterns like `(uint)x <= max` for non-negative ranges)

### [3.2. Downcasts and safe casting patterns (`is`, pattern matching, `as`)](<./sections/3. Explicit conversions and casts/3.2. Downcasts and safe casting patterns is pattern matching as.md>)

1. **Prefer pattern matching** (`if (x is Foo foo)`) over raw casts
2. **When `as` is appropriate** (nullable refs; follow with null check)
3. **Avoid double casts** (use one check + one typed variable)
4. **InvalidCastException in hot paths** (exceptions are expensive under load)
5. **Design smell** (if you need many downcasts, reconsider polymorphism or data shape)

### [3.3. Boxing/unboxing and hidden allocations](<./sections/3. Explicit conversions and casts/3.3. Boxing unboxing and hidden allocations.md>)

1. **What boxes** (value types to `object`/interfaces; closures can amplify)
2. **When unboxing fails** (type identity matters; `int` vs `long`)
3. **Performance impact** (heap allocation + GC + indirection)
4. **Avoiding boxing** (generic constraints, `Span<T>`, avoiding non-generic APIs)
5. **Common traps** (string concatenation with `object`, params arrays, non-generic collections)

## 4. Parsing text to values (`Parse`, `TryParse`, and modern fast parsing)

### [4.1. `Parse` vs `TryParse` (correctness, performance, and API shape)](<./sections/4. Parsing text to values/4.1. Parse vs TryParse correctness performance and API shape.md>)

1. **Exceptions are not control flow** (especially in loops / high-volume ingestion)
2. **Try-pattern shape** (return bool + `out` value; predictable and branch-friendly)
3. **Defaulting strategy** (don’t silently coerce invalid input unless the domain demands it)
4. **Validation boundaries** (parse at the edges, keep domain types strong)
5. **Testing strategy** (table-driven tests for formats, ranges, and cultures)

### [4.2. Culture, `IFormatProvider`, and deterministic parsing](<./sections/4. Parsing text to values/4.2. Culture IFormatProvider and deterministic parsing.md>)

1. **CurrentCulture vs InvariantCulture** (correctness and “works on my machine” failures)
2. **NumberStyles / DateTimeStyles** (accept only what you mean to accept)
3. **Round-trip formats** (`"O"` for DateTime/DateTimeOffset; stable serialization)
4. **User input vs wire formats** (different rules; don’t mix them)
5. **Performance notes** (culture lookups and format parsing costs in tight loops)

### [4.3. `ReadOnlySpan<char>` overloads (avoid allocations, parse slices)](<./sections/4. Parsing text to values/4.3. ReadOnlySpan char overloads avoid allocations parse slices.md>)

1. **Why spans help** (parse substrings without creating new strings)
2. **When you actually get spans** (slicing buffers, `String.AsSpan`, parsers/tokenizers)
3. **TryParse span overloads** (numeric types, `Guid`, etc. — where available)
4. **Avoiding intermediate allocations** (no `Split` + parse loops in hot paths)
5. **Practical patterns** (scan → slice span → `TryParse` with explicit culture)

## 5. Conversion helper APIs (`Convert`, `System.*` methods, and framework patterns)

### [5.1. `Convert.*` vs casting vs parsing (choose the right tool)](<./sections/5. Conversion helper APIs/5.1. Convert vs casting vs parsing choose the right tool.md>)

1. **What `Convert` is for** (object-based conversions; null handling; IConvertible)
2. **Why it’s not a parsing API** (it often delegates; still format/culture concerns)
3. **When a cast is better** (compile-time guarantees; clarity)
4. **When `TryParse` is better** (expected failures; avoid exceptions)
5. **Performance pitfalls** (boxing, exceptions, and “objecty” call sites)

### [5.2. `ToString`/formatting symmetry and round-trippable representations](<./sections/5. Conversion helper APIs/5.2. ToString formatting symmetry and round trippable representations.md>)

1. **Round-trip principle** (format then parse should recover the same value)
2. **Stable formats** (InvariantCulture for protocol/storage; CurrentCulture for UI)
3. **Avoid “pretty” strings as data** (logging/display vs storage/wire)
4. **`ISpanFormattable` and `TryFormat`** (where it helps, when it’s overkill)
5. **Allocation control** (format into spans/handlers in hot paths)

### [5.3. `TypeConverter` and “design-time” conversions (configs, binding, serialization)](<./sections/5. Conversion helper APIs/5.3. TypeConverter and design time conversions configs binding serialization.md>)

1. **What it’s good for** (config binding, component models, tooling)
2. **When not to use it** (core domain invariants; ambiguous global conversions)
3. **Alternatives** (explicit parsing + validation; custom JSON converters; source generators)
4. **Correctness guidance** (culture handling and error reporting)
5. **Maintainability** (discoverability and surprise conversions)

## 6. User-defined conversions and domain modeling (make illegal states unrepresentable)

### [6.1. User-defined implicit/explicit operators: when they help vs harm](<./sections/6. User defined conversions and domain modeling/6.1. User defined implicit explicit operators when they help vs harm.md>)

1. **Design rule** (implicit only if truly lossless and unsurprising)
2. **Prefer explicit for “might fail / might lose info”**
3. **Keep conversions near the type** (discoverability; prevents scattered helpers)
4. **Don’t smuggle parsing into operators** (operators can’t be Try-pattern; exceptions leak)
5. **Performance and JIT** (inlining, method call overhead is usually negligible vs clarity)

### [6.2. Boundary types: parse once, validate once, carry a strong type](<./sections/6. User defined conversions and domain modeling/6.2. Boundary types parse once validate once carry a strong type.md>)

1. **Examples** (Port, Email, Money, Percentage, TenantId, etc.)
2. **TryCreate / Parse patterns** (result types vs Try-pattern; choose intentionally)
3. **Nullability and default values** (avoid “0 means missing” unless domain says so)
4. **Serialization strategy** (explicit converters, stable formats)
5. **Performance notes** (avoid repeated parsing and repeated allocations)

## 7. Important points and common pitfalls (mentor checklist)

### [7.1. Type conversion checklist: correctness, performance, and maintainability](<./sections/7. Important points and common pitfalls/7.1. Type conversion checklist correctness performance maintainability.md>)

1. **Never use exceptions for expected input validation**
2. **Be explicit about culture and styles for parsing/formatting**
3. **Avoid silent lossy conversions in business logic**
4. **Watch for hidden allocations** (boxing, string slicing/copies, `Split`)
5. **Prefer conversions at boundaries** (UI/API/IO) not deep in the domain model

### [7.2. Overlaps to avoid (where this domain stops)](<./sections/7. Important points and common pitfalls/7.2. Overlaps to avoid where this domain stops.md>)

1. **Try-pattern mechanics** (covered in `Methods` → `out` and Try APIs)
2. **Basic primitive type definitions** (covered in `CSharp language basics`)
3. **General .NET runtime performance** (covered in `Fundamental Theories`)
4. **Serialization deep dives** (belongs in a dedicated Serialization/JSON domain later)
5. **Interop marshaling** (belongs in an Interop/PInvoke domain later)

## 8. Interview questions and answers (Type Conversion)

### [8.1. Interview Q&A: casting, parsing, culture, and pitfalls](<./sections/8. Interview Q and A/8.1. Interview questions about type conversion.md>)

1. **Implicit vs explicit conversions** (what the compiler allows and why)
2. **`Parse` vs `TryParse`** (exceptions, performance, and correctness)
3. **Boxing/unboxing and `object` conversions** (how to spot hidden allocations)
4. **Culture pitfalls** (why parsing fails in production across locales)
5. **Design questions** (when to create strong types; when conversions belong at boundaries)

