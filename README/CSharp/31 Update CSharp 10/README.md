## Update C# 10 (feature map + where it lives in this repo)

This domain is an **index** for C# 10-era language features. Deep dives live in the linked domains; this file routes you there.

## 1. Namespaces and usings (biggest day-to-day impact)

### [1.1. File-scoped namespaces (`namespace X;`)](<../11 Namespaces/sections/2. Creating namespaces/2.2. File-scoped namespaces modern default.md>)

1. **Default modern style** for “one namespace per file”
2. **Tooling synergy**: formatters/analyzers make this painless across a solution
3. **Diff hygiene**: less indentation means smaller, clearer diffs

### [1.2. Global using (project-wide imports)](<../11 Namespaces/sections/4. Importing namespaces/4.2. Global using project wide imports.md>)

1. **Use sparingly**: keep global usings “small and boring”
2. **Correctness hazard**: extension method candidate-set drift (binding changes)
3. **Team policy**: review global usings like public API surface (they affect every file)

### [1.3. Global using aliases (project-wide `using` aliases + hygiene)](<../11 Namespaces/sections/5. Using aliases/5.2. Global using aliases and hygiene.md>)

1. **Use for**: resolving collisions and improving clarity at large scale
2. **Avoid**: building a private DSL of aliases that harms grep/searchability
3. **Versioning**: alias changes ripple across compile errors; keep them stable
4. **Overlap guardrail**: **“alias any type”** (broader alias forms) is indexed under [Update C# 12](<../33 Update CSharp 12/README.md>) so this C# 10 map stays focused on **global usings + alias hygiene**.

## 2. Records and struct shapes

### [2.1. Records and record structs (where value semantics are correct)](<../07 Constructors/sections/2. Constructor kinds/2.3. Records and constructor-generated members.md>)

1. **Use for**: value objects, DTO-like shapes, discriminated modeling patterns
2. **Perf note**: `record struct` avoids allocation for the container but increases copying risk for large values
3. **Versioning**: adding/removing components changes equality/hash—treat as a breaking contract

## 3. Interpolated strings (performance-oriented improvements)

### [3.1. Interpolated strings: modern formatting guidance](<../26 String and DateTime and Math/sections/5. Formatting Strings/5.1. Composite formatting vs interpolated strings and modern handler guidance.md>)

1. **Prefer interpolated strings** for readability; **handlers** (`DefaultInterpolatedStringHandler`, etc.) reduce allocations when used intentionally
2. **Culture correctness**: be explicit with `InvariantCulture` when output is protocol/data
3. **Constant holes**: [constant interpolated strings](<../26 String and DateTime and Math/sections/5. Formatting Strings/5.5. Constant interpolated strings compile time const contexts.md>) (C# 10+)

## 4. “Other stuff new in version 10”

### 4.1. C# 10 feature pointers (index)

1. **File-scoped namespaces**, **global usings**, **global using aliases**: [Update C# 9](<../30 Update CSharp 9/README.md>) §2 and [Namespaces](<../11 Namespaces/README.md>); **records / record structs**: [Constructors 2.3](<../07 Constructors/sections/2. Constructor kinds/2.3. Records and constructor generated members.md>)
2. **Extended property patterns**, **relational patterns**: [pattern catalog](<../02 CSharp language basics/sections/5. Branching and decision making/5.4. Pattern matching catalog type relational property list slice var (CSharp 9 through 15).md>) (also C# 9+)
3. **Rule**: prefer linking into topical domains; **perf**: watch allocation/dispatch on hot paths

## 5. Overlaps to avoid

1. **Namespace/import rules** live in `Namespaces` (this is just the C# 10 index).
2. **String formatting details** live in `String and DateTime and Math`.
3. **Records/equality details** live in `Constructors` + `System Object Class`.
