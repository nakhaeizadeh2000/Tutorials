## 1. Namespaces fundamentals (what they are and why they exist)

### [1.1. What a namespace is (scope + name, not a runtime container)](<./sections/1. Namespaces fundamentals/1.1. What a namespace is scope not runtime container.md>)

1. **Mental model** (namespaces are compile-time naming scopes; they don’t “contain” types at runtime)
2. **Why they matter** (avoid naming collisions; communicate API intent; scale codebases)
3. **Performance reality** (namespace choice doesn’t affect runtime speed directly; it affects design, build, and tooling ergonomics)

### [1.2. Namespace vs folder vs project vs assembly (quick map)](<./sections/1. Namespaces fundamentals/1.2. Namespace vs folder project assembly quick map.md>)

1. **Folders ≠ namespaces** (conventions help, but the compiler doesn’t care about directories)
2. **Projects/assemblies ≠ namespaces** (assemblies ship; namespaces name; keep them aligned but not coupled)
3. **Practical rule** (stable public namespaces, flexible internal folders)

## 2. Creating namespaces (block-scoped and file-scoped)

### [2.1. Block-scoped namespaces: `namespace X { ... }`](<./sections/2. Creating namespaces/2.1. Block-scoped namespaces syntax and rules.md>)

1. **Syntax rules** (where it can appear; nesting types; multiple namespaces per file)
2. **Readability guidance** (limit indentation; don’t mix unrelated namespaces in one file)
3. **When to keep block-scoped** (generated code; files with multiple namespaces; special layout needs)

### [2.2. File-scoped namespaces: `namespace X;` (modern default)](<./sections/2. Creating namespaces/2.2. File-scoped namespaces modern default.md>)

1. **What it changes** (removes one indentation level; applies to the whole file)
2. **Rules and limitations** (exactly one file-scoped namespace per file; cannot be combined with block-scoped in the same file)
3. **When it helps** (large codebases; analyzers/formatters; consistent style)

## 3. Nested namespaces (structure, naming, and stability)

### [3.1. Nested namespaces: `A.B.C` vs nested blocks](<./sections/3. Nested namespaces/3.1. Nested namespaces dotted vs nested blocks.md>)

1. **Equivalence** (`namespace A.B.C` vs `namespace A { namespace B { namespace C { ... }}}`)
2. **Naming guidance** (domain-based; keep it shallow; avoid “junk drawers” like `.Helpers`)
3. **API evolution** (moving public types between namespaces is a breaking change for consumers)

### [3.2. Namespace design as API design (public surface and versioning)](<./sections/3. Nested namespaces/3.2. Namespace design as API design public surface versioning.md>)

1. **Public namespace stability** (treat public namespaces like public method signatures)
2. **Layering** (e.g., `.Abstractions`, `.Internal`, `.Implementation`; keep contracts separate from concrete types)
3. **Tooling and discoverability** (IntelliSense search paths; consistent naming reduces cognitive load)

## 4. Importing namespaces (`using` directives and scope)

### [4.1. `using` directives: file scope, namespace scope, and ordering](<./sections/4. Importing namespaces/4.1. Using directives scope ordering and rules.md>)

1. **Where `using` applies** (top-of-file; inside `namespace {}`; `global using` for project-wide)
2. **Style guidance** (consistent ordering; minimize noise; prefer analyzer-enforced formatting)
3. **Correctness gotchas** (ambiguous type names; extension method selection changes)

### [4.2. `global using` (project-wide imports) and when to use it](<./sections/4. Importing namespaces/4.2. Global using project wide imports.md>)

1. **Why it exists** (reduce repetition across many files)
2. **Best practice** (keep global usings small and boring; avoid “magic” imports that hide dependencies)
3. **Build and maintenance** (global usings affect compilation; be intentional in libraries)

## 5. Using aliases (`using Foo = ...;`) for clarity and conflict resolution

### [5.1. Alias a namespace or a type](<./sections/5. Using aliases/5.1. Using alias namespace or type.md>)

1. **Resolve collisions** (two `JsonSerializer`, two `Task`, etc.)
2. **Clarify intent** (make domain types explicit without long fully-qualified names)
3. **Maintainability** (aliases are local contracts; keep them short and meaningful)

### [5.2. `global using` aliases and “API surface hygiene”](<./sections/5. Using aliases/5.2. Global using aliases and hygiene.md>)

1. **When it’s appropriate** (shared cross-cutting types; common BCL aliases are usually unnecessary)
2. **Avoid abuse** (don’t create a mini-DSL of aliases that new engineers can’t grep for)
3. **Interop benefit** (bridge legacy namespaces while migrating)

## 6. `using static` (power tool, sharp edges)

### [6.1. `using static` fundamentals and safe usage](<./sections/6. Using static/6.1. Using static fundamentals and safe usage.md>)

1. **Typical use** (`Math`, `Decimal`, `Array`, well-scoped helper classes)
2. **Readability trade-off** (implicit origins; can harm code search and onboarding)
3. **Recommendation** (use sparingly; prefer explicit qualification in libraries and shared code)

### [6.2. Static imports vs extension methods vs local functions](<./sections/6. Using static/6.2. Static imports vs extension methods vs local functions.md>)

1. **Choose the right abstraction** (extension methods for fluent APIs; local functions for internal helpers; static imports for narrow math-like utilities)
2. **Correctness and ambiguity** (name clashes; overload resolution surprises)
3. **Performance note** (static import is syntax-only; performance is determined by the called method, allocations, and inlining)

## 7. Important points to remember about namespaces (mentor-grade checklist)

### [7.1. Checklist: correctness, maintainability, and performance-adjacent concerns](<./sections/7. Important points/7.1. Checklist correctness maintainability performance-adjacent.md>)

1. **Keep public namespaces stable** (moving types breaks consumers; plan your “package shape”)
2. **Avoid hidden dependencies** (don’t overuse `global using`; make key dependencies obvious)
3. **Minimize ambiguity** (collisions cost time; use aliases or fully-qualified names deliberately)
4. **Keep namespaces coherent** (each namespace should “tell a story”; avoid grab-bag namespaces)
5. **Tooling alignment** (formatters/analyzers + consistent conventions are a scalability multiplier)

### [7.2. Common pitfalls that show up in production](<./sections/7. Important points/7.2. Common pitfalls ambiguous names extension method surprises.md>)

1. **Ambiguous type names after adding a package** (sudden compile errors; fix with aliases/qualification)
2. **Extension method selection changes** (adding a `using` can change which extension method binds)
3. **Overusing `using static`** (readability + debugging/searchability regressions)
4. **Global usings becoming “spooky action at a distance”** (hard-to-explain dependencies; review discipline needed)

## 8. Overlaps to avoid (where this domain stops)

### [8.1. Boundaries: what is covered elsewhere in this repo](<./sections/8. Overlaps to avoid/8.1. Boundaries what is covered elsewhere.md>)

1. **Namespaces vs assemblies and packaging boundaries** (covered in `Fundamental Theories` → “Namespaces vs folders vs assemblies”)
2. **Access modifiers and API exposure (`public`, `internal`, `private`, etc.)** (covered in `Fundamental Theories` and OOP domains)
3. **Project references, NuGet, and dependency graphs** (covered in `Fundamental Theories` → tooling/deployment topics)

## 9. Interview questions and answers (namespaces, `using`, and modern codebase conventions)

### [9.1. Common interview questions: namespaces, file-scoped namespaces, global usings, aliases](<./sections/9. Interview Q and A/9.1. Interview questions about namespaces and using.md>)

1. **Explain namespace purpose and mechanics** (compile-time scope; collisions; API discoverability)
2. **Block-scoped vs file-scoped namespaces** (rules, benefits, and when not to use file-scoped)
3. **`using` vs fully-qualified names vs aliases** (trade-offs, collisions, readability)
4. **`global using` and large solution strategy** (where to put them; how to avoid hidden deps)
5. **`using static`** (when it’s acceptable; why it can be a readability trap)
