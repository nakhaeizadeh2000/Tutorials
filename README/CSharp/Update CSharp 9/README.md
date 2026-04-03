## Update C# 9 (feature map + where it lives in this repo)

This domain is an **index** for C# 9-era language features. Deep explanations live in the linked topical domains below; this file only routes you there.

## 1. Program entry point and project ergonomics

### [1.1. Top-level statements (what the compiler generates, trade-offs)](<../CSharp language basics/sections/1. Getting started/1.2. Creating your first app (Console + top-level statements).md>)

1. **Why it exists** (reduces ceremony for small programs, samples, tools)
2. **Production guidance** (prefer explicit `Main` once you need clear startup orchestration/testing hooks)
3. **Perf note** (no runtime magic; costs come from what your startup does, not the syntax)

### [1.2. Command line arguments (`args`), `Environment`, exit codes, parsing](<../CSharp language basics/sections/1. Getting started/1.3. Command line arguments args Environment exit codes parsing.md>)

1. **`string[] args`** semantics; shell quoting; **`Environment`** for paths and env vars
2. **Exit codes** for scripts/CI; **parsers** when the CLI grows
3. **Perf**: parse once at startup into an immutable options object

## 2. Namespaces and imports (modern defaults)

### [2.1. File-scoped namespaces (`namespace X;`)](<../Namespaces/sections/2. Creating namespaces/2.2. File-scoped namespaces modern default.md>)

1. **Why it matters**: less indentation and cleaner diffs in large codebases
2. **Rule**: one file-scoped namespace per file; don’t mix with block-scoped in the same file
3. **Team guidance**: standardize with formatters/analyzers to avoid style churn

### [2.2. Global using (project-wide imports)](<../Namespaces/sections/4. Importing namespaces/4.2. Global using project wide imports.md>)

1. **Use it for**: stable, ubiquitous BCL namespaces and boring, cross-cutting imports
2. **Avoid**: “spooky action at a distance” dependencies and extension-method utility soup
3. **Perf reality**: runtime unaffected; but compile-time + maintainability can be affected

## 3. Null safety (correctness + reliability first)

### [3.1. Nullable reference types (NRT)](<../Handling Null/sections/2. Nullable reference types/2.1. Enabling NRT and reading annotations.md>)

1. **Modern default**: enable NRT at project level; treat warnings as design feedback
2. **Migration strategy**: annotate boundaries first; don’t “turn on + suppress”
3. **Perf note**: NRT is compile-time; runtime perf impact is indirect via fewer null checks/bugs

### [3.2. Null-forgiving operator (`!`) — last resort](<../Handling Null/sections/4. Operators and constructs/4.3. Null-forgiving operator last resort.md>)

1. **Meaning**: suppresses warnings only; it does not “make it non-null”
2. **Use only when**: you can prove safety but flow analysis can’t
3. **Anti-pattern**: sprinkling `!` to silence warnings (keeps NREs alive)

## 4. Type inference and construction syntax

### [4.1. Target-typed `new` (`new()`) and constructor inference](<../Extension Methods and others/sections/4. Implicitly typed variables var/4.3. Target-typed new constructor inference.md>)

1. **Use when**: LHS already communicates the type and the RHS would be redundant
2. **Avoid when**: the constructed type is non-obvious or important to read at the call site
3. **Perf reality**: no direct benefit; it’s a readability/maintainability choice

## 5. Pattern matching (readability + exhaustiveness + fewer bugs)

### [5.1. `switch` statements and `switch` expressions (modern C#)](<../CSharp language basics/sections/5. Branching and decision making/5.3. switch and switch expressions modern CSharp.md>)

1. **Why to use it**: more explicit intent, fewer missed cases, easier refactoring
2. **Best practice**: prefer expression forms for value-producing decisions; keep patterns readable
3. **Perf note**: usually “fast enough”; biggest wins are correctness and maintainability

### [5.2. Pattern matching — type pattern (and safe casts)](<../Type Conversion/sections/3. Explicit conversions and casts/3.2. Downcasts and safe casting patterns is pattern matching as.md>)

1. **Prefer**: `x is SomeType t` over `as` + null checks when you need the typed value
2. **Avoid**: deep nesting; extract helpers for complex matching
3. **Perf note**: avoids repeated casts; still measure if it’s hot-path

### [5.3. Pattern matching — null patterns and flow analysis helpers](<../Handling Null/sections/2. Nullable reference types/2.2. Flow analysis what the compiler can prove.md>)

1. **Use**: `is null` / `is not null` for clarity and to help the compiler
2. **Prefer**: guard clauses; keep control flow simple to help analysis
3. **Link**: this is where “pattern matching helps null-safety” fits best

### [5.4. Pattern matching — tuple pattern](<../Tuples/sections/4. Deconstructing/4.3 Deconstructing plus pattern matching tuple patterns.md>)

1. **Use when**: you’re matching a small fixed product shape (pair/triple) with clear names
2. **Prefer named elements**: `(status: ..., code: ...)` improves readability
3. **Perf note**: tuple allocations depend on shape; value tuples are structs but copying still matters

### [5.5–5.6. Pattern matching — relational, logical, property, positional, list, slice, `var` (catalog)](<../CSharp language basics/sections/5. Branching and decision making/5.4. Pattern matching catalog type relational property list slice var (CSharp 9 through 15).md>)

1. **Single map** for pattern forms across versions (relational/logical, property/positional, list/slice, `var`)
2. **Best practice**: shallow patterns; extract helpers when logic becomes a paragraph
3. **Also see**: [5.3 `switch` expressions](<../CSharp language basics/sections/5. Branching and decision making/5.3. switch and switch expressions modern CSharp.md>), `Handling Null`, `Tuples`, [Update C# 11](<../Update CSharp 11/README.md>) for list/slice patterns

## 6. Immutability as a design tool (correctness + concurrency + versioning)

### [6.0. Need of immutability + immutable classes (reasoning + API design)](<../CSharp Basic Object Oriented Programming/sections/3. Important points about objects/3.1. Reference semantics aliasing mutation defensive design.md>)

1. **Why**: shared mutable state is the root of many concurrency and reasoning bugs; immutability narrows the state space you must reason about
2. **Immutable classes in practice**: prefer explicit contracts (`init`, factories, records) over “mutable DTO soup”
3. **Perf reality**: immutability can add allocations; measure and choose shapes (`record`, `readonly struct`) intentionally
4. **Also read**: [choosing class vs struct vs record vs record struct](<../CSharp Basic Object Oriented Programming/sections/2. Creating classes and objects/2.4. Choosing class vs struct vs record vs record struct.md>) (immutability-friendly shapes)

### [6.1. `init` / `required` and “make illegal states unrepresentable”](<../Constructors/sections/4. Object initialization styles/4.2. init required and illegal states unrepresentable.md>)

1. **Goal**: express initialization contracts at compile time
2. **Best practice**: still validate at runtime at untrusted boundaries (deserialization, I/O)
3. **Perf note**: immutability often reduces synchronization needs and “defensive copy” churn

### [6.2. Readonly fields (immutability foundations)](<../Fields/sections/6. Readonly fields/6.1. Readonly instance fields immutability and invariants.md>)

1. **Use for invariants**: a `readonly` field is a strong “can’t change later” signal
2. **Avoid**: mutable object graphs hidden behind readonly references (not truly immutable)
3. **Perf note**: fewer mutations often improves reasoning and reduces locking

### [6.3. Read-only properties + `init` (immutability ergonomics)](<../Properties and Indexers/sections/3. Read-only and write-only properties/3.1. Read-only properties get-only private set immutability.md>)

1. **Prefer**: get-only or `init` for externally immutable models
2. **Use `required`** when completeness matters more than “optional with defaults”
3. **API guidance**: choose one dominant init style per type (ctor vs init/required)

## 7. Struct shapes and value semantics (performance + correctness)

### [7.1. Readonly structs (guarantees, defensive copies)](<../Structures/sections/4. Readonly structs/4.1. readonly struct guarantees and limits.md>)

1. **Why**: prevents accidental mutation and reduces defensive copying surprises
2. **Best practice**: prefer immutable structs for public APIs
3. **Perf note**: beware large structs (copying costs); measure + consider `in`/ref-like patterns

### [7.2. Parameterless struct constructors + `default(T)` (modern rules)](<../Structures/sections/2. Constructors in structs/2.1. Struct constructors rules.md>)

1. **Parameterless struct ctors** do not remove **`default(T)`**—design for both paths
2. **Also read**: [auto-default / contract framing](<../Structures/sections/1. Structures fundamentals/1.4. Auto default structs default T vs parameterless constructors.md>)
3. **Guidance**: never assume “every instance ran your ctor” unless you control all creation sites

## 8. Records (value objects + generated members + versioning)

### [8.1. Records: generated behaviors, equality, `with`, printing](<../Constructors/sections/2. Constructor kinds/2.3. Records and constructor generated members.md>)

1. **Why**: concise, correct-by-default value semantics for many domain “value objects”
2. **Versioning caution**: record equality touches all components—adding a field changes equality/hash
3. **Perf note**: prefer `record struct` / `readonly record struct` for high-frequency payloads when value semantics are correct

### [8.2. Records and equality details (`Equals`, `GetHashCode`, `ToString`)](<../System Object Class/sections/3. Overriding correctly/3.3. Records and generated equality.md>)

1. **Correctness**: understand what’s generated; don’t fight it with inconsistent overrides
2. **Perf**: hashing/equality on large value graphs can be expensive; keep records small or customize carefully
3. **Debuggability**: `ToString()` is for diagnostics, not stable serialization

### 8.3. Records — nested records / inheritance / sealed `ToString()` / record structs

1. **Core behavior + `with`**: [Constructors — records](<../Constructors/sections/2. Constructor kinds/2.3. Records and constructor generated members.md>)
2. **Equality / `ToString`**: [System.Object — records](<../System Object Class/sections/3. Overriding correctly/3.3. Records and generated equality.md>)
3. **Shapes**: [class vs struct vs record](<../CSharp Basic Object Oriented Programming/sections/2. Creating classes and objects/2.4. Choosing class vs struct vs record vs record struct.md>); inheritance/`sealed` follow normal type rules—keep record hierarchies shallow

## 9. Partial methods and advanced compilation hooks

### [9.1. Partial methods: return values, accessibility, attributes](<../Partial and Static Classes, Enumerations/sections/2. Partial methods/2.2. Partial methods modern rules accessibility return attributes.md>)

1. **Why**: source-generator and compile-time composition patterns without runtime dispatch
2. **Perf**: calls can be compiled away when unimplemented; avoid captures in hot hooks
3. **Best practice**: keep hooks narrow; don’t use as a public extensibility mechanism

### [9.2. Module initializers (`[ModuleInitializer]`)](<../Partial and Static Classes, Enumerations/sections/3. Static classes/3.4. Module initializers ModuleInitializer attribute trimming and AOT.md>)

1. **Rare hook** for early registration; **order** is not a portable contract between multiple initializers
2. **Reliability**: throwing poisons load; **trimming/AOT**: fragile reflection-based registration
3. **Prefer** explicit host/DI startup for most apps

## 10. Lambdas and performance-related syntax

### [10.1. `static` lambdas (avoid captures/closures)](<../Delegates and Events/sections/7. Anonymous methods and lambdas/7.4. static lambdas prevent captures.md>)

1. **Why**: prevents accidental capture → fewer allocations and clearer lifetime
2. **Best practice**: default to `static` when you don’t need captures (especially in hot paths)
3. **Perf note**: captures allocate; measure in server/high-throughput code

### [10.2. Lambda return type, defaults, modifiers (C# 10+)](<../Delegates and Events/sections/7. Anonymous methods and lambdas/7.5. Lambda explicit return type default parameters modifiers (CSharp 10 through 15).md>)

1. **Explicit return types** and target typing at API boundaries
2. **Default parameters** on lambdas (C# 12+); **modifiers without types** on lambdas (C# 14+)
3. **Perf**: `static` lambdas; fewer per-iteration delegate allocations

## 11. Strings and interpolation improvements

### [11.1. Interpolated strings (modern formatting guidance)](<../String and DateTime and Math/sections/5. Formatting Strings/5.1. Composite formatting vs interpolated strings and modern handler guidance.md>)

1. **Correctness**: pick culture/formatting intentionally (`InvariantCulture` vs current culture)
2. **Perf**: avoid allocation-heavy concatenation in loops; prefer builders/handlers when appropriate
3. **Modern guidance**: understand handler-based patterns for high-performance formatting

### [11.2. Constant interpolated strings (C# 10+)](<../String and DateTime and Math/sections/5. Formatting Strings/5.5. Constant interpolated strings compile time const contexts.md>)

1. **`const string`** when all holes are compile-time constant-compatible
2. **Not** runtime formatting—no culture at compile time
3. **See also**: [Update C# 10](<../Update CSharp 10/README.md>)

## 12. Interfaces (default implementations and modern capabilities)

### [12.1. Default interface methods (DIM) — when they compete with extensions](<../Extension Methods and others/sections/1. Extension methods language rules/1.5. Extension methods vs default interface methods.md>)

1. **Design trade-off**: DIM evolves the abstraction; extensions evolve externally
2. **Versioning**: DIM can be a compatibility tool but can also create diamond/override complexity
3. **Perf note**: interface dispatch costs matter in hot loops; measure (don’t guess)

### [12.2. Default interface members (DIM) — language semantics and pitfalls](<../Abstract Classes and Interfaces/sections/3. Interfaces/3.2. Default interface members DIM.md>)

1. **Why DIM exists**: add members without breaking implementers (versioning story)
2. **Risks**: surprising dispatch, diamond discussions, testing/trimming/AOT angles
3. **Guidance**: use deliberately on library-style contracts; avoid “fat interfaces” via defaults

### [12.3. Static abstract members in interfaces (generic math / type-class style)](<../Abstract Classes and Interfaces/sections/3. Interfaces/3.3. Static abstract members in interfaces generic math.md>)

1. **Use for**: high-performance generic algorithms that need operators or factories on `T`
2. **Trade-offs**: complexity and constraint noise—keep it library-level unless justified
3. **Perf note**: can avoid boxing/dynamic dispatch patterns when modeled well

### [12.4. Private interface methods and interface member forms (overview)](<../Abstract Classes and Interfaces/sections/3. Interfaces/3.4. Interface member forms private static abstract sealed DIM overview.md>)

1. **Private helpers** on interfaces factor default implementations without widening API
2. **Static abstract**, DIM, overrides: see [3.2](<../Abstract Classes and Interfaces/sections/3. Interfaces/3.2. Default interface members DIM.md>) / [3.3](<../Abstract Classes and Interfaces/sections/3. Interfaces/3.3. Static abstract members in interfaces generic math.md>)
3. **Perf**: interface dispatch in hot loops—measure

## 13. Indexing and slicing primitives

### [13.1–13.2. Index-from-end (`^`), `Range` (`..`), `Span` / `ReadOnlySpan`](<../Arrays/sections/1. Arrays fundamentals/1.5. Index from end Range and slicing with Span.md>)

1. **`^` / `Range`**: tail slices and sub-ranges; half-open interval rules
2. **Spans**: prefer non-allocating views in hot paths; watch lifetime rules
3. **Collections**: indexing semantics differ by type—see `Collections` when not using arrays/spans

## 14. Other C# 9 items (catch-all)

### 14.1. “Other stuff new in version 9”

1. **Policy**: add entries here only when they do not map cleanly to a single domain above
2. **Upstream reference**: Microsoft Learn “What’s new in C# 9” for the full official list
3. **This repo**: prefer extending the linked topical sections over growing this catch-all

## 15. Overlaps to avoid (keep the repo navigable)

1. **Deep pattern matching catalogs** belong in `CSharp language basics` (index here, link there).
2. **Records deep dives** belong in `Constructors` + `System Object Class` (index here, link there).
3. **Null-safety** belongs in `Handling Null` (index here, link there).
4. **Namespace/import mechanics** belong in `Namespaces` (index here, link there).
