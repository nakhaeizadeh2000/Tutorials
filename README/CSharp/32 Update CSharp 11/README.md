## Update C# 11 (feature map + where it lives in this repo)

This domain is an **index** for C# 11-era language features. Deep dives are in the linked sections below.

## 1. Strings

### [1.1. Raw string literals (`""" ... """`)](<../26 String and DateTime and Math/sections/2. How String Objects are Created/2.4. Raw string literals CSharp 11 triple quotes.md>)

1. **Escaping**, **dedent** rules, JSON/regex/embed scenarios
2. **Correctness**: accidental whitespace changes in protocol payloads
3. **Perf**: same UTF-16 string materialization as ordinary literals once compiled

## 2. Pattern matching (new patterns)

### [2.1. List patterns / slice patterns / `var` patterns](<../02 CSharp language basics/sections/5. Branching and decision making/5.4. Pattern matching catalog type relational property list slice var (CSharp 9 through 15).md>)

1. **Single catalog** for list/slice/`var` patterns and later extensions
2. **Perf**: patterns are cheap; materializing new collections from matches is not
3. **Also**: [Update C# 9](<../30 Update CSharp 9/README.md>) §5 for foundational patterns

## 3. Type visibility and encapsulation

### [3.1. File-local types (C# 11) vs nested types](<../17 Extension Methods and others/sections/6. Nested types/6.4. File-local types vs nested types.md>)

1. **Use for**: hiding implementation details without nesting complexity
2. **Maintainability**: reduces surface area and avoids “mega-type” nesting
3. **Team guidance**: pick a convention (file-local vs nested) for internal helpers

## 4. Initialization contracts

### [4.1. `required` members (and how they relate to constructors)](<../07 Constructors/sections/2. Constructor kinds/2.2. Primary constructors and required members.md>)

1. **What it gives you**: compile-time completeness for object initialization
2. **Still validate**: runtime validation remains necessary at untrusted boundaries
3. **API design**: avoid mixing too many competing initialization mechanisms per type

## 5. Struct and low-level features

### [5.1. Auto-default structs (`default(T)` vs parameterless ctor)](<../13 Structures/sections/1. Structures fundamentals/1.4. Auto default structs default T vs parameterless constructors.md>)

1. **`default(T)`** remains all-bits-zero; parameterless struct ctors do not run for `default`
2. **Design**: do not rely on non-zero defaults for correctness unless you control every creation path
3. **Perf**: default init is cheap; wrong assumptions about initialization are expensive

### [5.2. `ref` fields + `scoped` (C# 11+)](<../13 Structures/sections/4. Readonly structs/4.3. ref fields scoped ref safety and CSharp 11.md>)

1. **`ref` fields** in `ref struct`; **`scoped`** for ref safety
2. **Perf**: enables span-like types without extra indirection—review-heavy code
3. **Also**: `Fundamental Theories` / stack-only types as your theory anchor

## 6. “Other stuff new in version 11”

### 6.1. C# 11 feature pointers (index)

1. **UTF-8 string literals**, **generic math** (`static` abstract in interfaces): see [Abstract Classes 3.3](<../10 Abstract Classes and Interfaces/sections/3. Interfaces/3.3. Static abstract members in interfaces generic math.md>)
2. **Required members**: [Constructors 2.2](<../07 Constructors/sections/2. Constructor kinds/2.2. Primary constructors and required members.md>); **file-local types**: [Extension Methods 6.4](<../17 Extension Methods and others/sections/6. Nested types/6.4. File-local types vs nested types.md>)
3. **Rule**: keep this file as a map; deep content stays in topical domains

## 7. Overlaps to avoid

1. **Pattern matching deep dive** belongs in `CSharp language basics`.
2. **Encapsulation mechanisms** belong in `Extension Methods and others` (nested/file-local) and OOP domains.
3. **Initialization contracts** belong in `Constructors` + `Properties and Indexers`.
