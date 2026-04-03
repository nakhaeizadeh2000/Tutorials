## Update C# 14 (feature map + where it lives in this repo)

This domain is an **index** for C# 14-era features. Keep it as a **navigation map**: link into topical domains for deep explanations, and avoid duplicating content.

## 1. C# 14 language features (repo pointers)

### 1.1. Extension members (`extension` blocks)

1. **What**: static extension types with instance-like syntax for extensions (language-level extension story evolves alongside classic extension methods)
2. **Where in repo**: [Extension Methods and others](<../Extension Methods and others/README.md>) when a dedicated section exists; otherwise Microsoft Learn “Extension members” / “What’s new in C# 14”
3. **Perf / design**: same guidance as extensions—keep discovery predictable; watch overload resolution and trimming/AOT

### [1.2. `field` keyword refinements (property accessors)](<../Properties and Indexers/sections/2. Creating properties/2.3. field keyword backing fields property accessors CSharp 13 14.md>)

1. **C# 14** extends `field` usage patterns; see the linked file for accessor-level detail
2. **Overlap**: [Update C# 13](<../Update CSharp 13/README.md>) §3.1

### 1.3. Null-conditional assignment (`?.` / `?[]` on the left)

1. **What**: conditional write only when receiver/indexer is non-null
2. **Where**: add or extend a short note under `CSharp language basics` (expressions) or `Handling Null` when authored; until then: Microsoft Learn
3. **Correctness**: still not a substitute for full object invariants

### 1.4. `nameof` with unbound generic types

1. **What**: `nameof(List<>)` style unbound generic in `nameof`
2. **Where**: [Attributes](<../Attributes/README.md>) / metadata strings as your use case; language reference on Microsoft Learn

### 1.5. Partial members: events and constructors

1. **What**: `partial` events and `partial` constructors split across files
2. **Where**: [Partial and Static Classes, Enumerations](<../Partial and Static Classes, Enumerations/README.md>) §1; [Constructors](<../Constructors/README.md>) when a constructor-specific section is added

### [1.6. Lambda modifiers without explicit parameter types (C# 14)](<../Delegates and Events/sections/7. Anonymous methods and lambdas/7.5. Lambda explicit return type default parameters modifiers (CSharp 10 through 15).md>)

1. **`async` / `static`** on lambdas where parameter types are inferred from context
2. **Pair with**: [Update C# 12](<../Update CSharp 12/README.md>) §3 (defaults)

### 1.7. Simple lambda parameters (`x =>` with inferred parameter)

1. **What**: parameter name without type when target delegate is known
2. **Where**: same [7.5](<../Delegates and Events/sections/7. Anonymous methods and lambdas/7.5. Lambda explicit return type default parameters modifiers (CSharp 10 through 15).md>) file; overlaps “lambda ergonomics” cluster

### 1.8. Span conversions and `ReadOnlySpan` interop

1. **What**: additional span-friendly conversions (see release notes for exact rules)
2. **Where**: [Arrays 1.5](<../Arrays/sections/1. Arrays fundamentals/1.5. Index from end Range and slicing with Span.md>); deeper memory model in `Fundamental Theories` as you expand it

### 1.9. `ref struct` interface implementation + allowed stackalloc in `async`

1. **What**: `ref struct` types implementing interfaces under constraints; stackalloc in async contexts per language updates
2. **Where**: `Structures` + `Concurrent Collection Asynchronous Programming` + Microsoft Learn for exact rules

### 1.10. `System.Threading.Lock` (`lock` type pattern)

1. **What**: prefer `Lock` type for new code where appropriate (API + threading)
2. **Where**: [Concurrent Collection Asynchronous Programming](<../Concurrent Collection Asynchronous Programming/README.md>) or threading domain when a section exists

### 1.11. File-based programs / top-level entry ergonomics

1. **What**: file-based app model refinements (SDK/language alignment—see docs)
2. **Where**: [CSharp language basics — getting started](<../CSharp language basics/README.md>)

## 2. Overlaps to avoid

1. **Language fundamentals** belong in `CSharp language basics` (this domain is only an index).
2. **Performance theory** belongs in `Fundamental Theories` (this domain should link, not re-explain).
3. **Domain-specific mechanics** belong in the relevant topical domain (`Methods`, `Properties and Indexers`, `Structures`, etc.).
