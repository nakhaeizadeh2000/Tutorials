## 1. Namespace fundamentals (what a namespace is and what it is not)

### [1.1. Namespaces vs folders vs assemblies: compile-time names vs deployment units](<./sections/1. Namespace fundamentals/1.1. Namespaces vs folders vs assemblies.md>)

1. **What a namespace actually is** (a logical name for types; no runtime “namespace object”)
2. **What a namespace is not** (not a folder; not an assembly; not an access boundary by itself)
3. **Mentor rules** (use namespaces to communicate architecture; avoid mega-namespaces; keep public namespaces stable)

### [1.2. Namespace declaration styles: block-scoped vs file-scoped (modern default)](<./sections/1. Namespace fundamentals/1.2. Namespace declaration styles block vs file-scoped.md>)

1. **Block-scoped namespaces** (`namespace A { ... }`) (legacy default, still valid)
2. **File-scoped namespaces** (`namespace A;`) (modern default: less indentation, fewer merge conflicts)
3. **Practical guidance** (one namespace per file; avoid mixing namespace styles in a codebase)

## 2. Creating namespaces (syntax, naming, and organizing code)

### [2.1. Creating namespaces: naming conventions and organization strategies](<./sections/2. Creating namespaces/2.1. Creating namespaces naming conventions and organization.md>)

1. **Naming conventions** (company/product/module layers; avoid abbreviations; avoid “Utils” dumping grounds)
2. **Project structure alignment** (folders can mirror namespaces, but don’t force it; avoid unnecessary nesting)
3. **API design + versioning** (public namespace names are part of your API; avoid churn)

### [2.2. Nested namespaces: when they help vs when they hide complexity](<./sections/2. Creating namespaces/2.2. Nested namespaces when they help vs hide complexity.md>)

1. **Nested namespace meaning** (`A.B` is just a name, not a hierarchy with inheritance)
2. **When nesting helps** (clear module boundaries, avoiding type-name collisions, discoverability)
3. **When nesting hurts** (deep trees, repetitive names, friction at call sites; “namespace pollution”)

## 3. Importing namespaces (`using`) (how name resolution works in real code)

### [3.1. Importing namespaces: `using` directives and name lookup rules](<./sections/3. Importing namespaces/3.1. Importing namespaces using directives and name lookup.md>)

1. **How name resolution works** (current namespace, usings, global usings, fully qualified names)
2. **Ambiguity + collisions** (same type name in multiple namespaces; how the compiler chooses / when it errors)
3. **Guidance** (prefer clear names; use aliases sparingly; fully qualify for clarity in rare cases)

### [3.2. Global usings and implicit usings (modern defaults in SDK-style projects)](<./sections/3. Importing namespaces/3.2. Global usings and implicit usings.md>)

1. **Global using directives** (project-wide imports; how they affect build and readability)
2. **Implicit usings** (SDK-generated defaults; when to disable or customize)
3. **Best practices** (keep global usings minimal; avoid “mystery types”; favor explicitness in libraries)

## 4. `using` alias and `using static` (power tools; avoid turning them into footguns)

### [4.1. Using alias: resolve collisions and improve clarity deliberately](<./sections/4. Aliases and using static/4.1. Using alias resolve collisions improve clarity.md>)

1. **Namespace/type aliases** (`using IO = System.IO;`, `using Json = System.Text.Json.JsonSerializer;`)
2. **Collision resolution** (two `Logger` types; alias vs fully-qualify)
3. **Maintainability** (avoid over-aliasing; prefer renaming your own types over aliasing everything)

### [4.2. `using static`: when it improves readability vs when it obscures code](<./sections/4. Aliases and using static/4.2. using static readability vs obscurity.md>)

1. **What it does** (import static members so you can call `Sqrt(x)` instead of `Math.Sqrt(x)`)
2. **Good uses** (well-known math/constants; narrow scopes; test assertions; DSL-like code with discipline)
3. **Risks** (hidden origins, collisions, readability loss; prefer explicit qualification in shared code)

## 5. Important points to remember (mentor-grade checklist)

### [5.1. Correctness + maintainability checklist: clarity, collisions, and stable public surface](<./sections/5. Important points/5.1. Correctness maintainability checklist.md>)

1. **Keep namespaces stable** (public namespaces are part of your API; avoid churn)
2. **Avoid collisions** (don’t reuse common type names across modules; use aliases only when necessary)
3. **Consistency rules** (file-scoped namespaces as default; global usings kept minimal and reviewed)

### [5.2. Performance and build-time notes: compilation, analyzers, and source generators](<./sections/5. Important points/5.2. Performance and build-time notes.md>)

1. **Runtime performance reality** (namespaces don’t exist at runtime; costs are compile-time / maintenance)
2. **Build-time and tooling** (analyzers, source generators, global usings can affect IDE/build experiences)
3. **AOT/trimming note** (namespace choices don’t affect trimming; reflection and type discovery do)

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere in this repo](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Assemblies and deployment** are covered in `Fundamental Theories` (assemblies, loader, deployment model)
2. **API surface design (bigger picture)** is covered in `Fundamental Theories` (namespace/assembly boundaries, public API thinking)
3. **General language basics** are covered in `CSharp language basics`

## 7. Interview questions and answers (namespaces, usings, aliases — C# 15 era)

### [7.1. Interview Q&A: namespaces, `using`, aliases, global usings, and file-scoped namespaces](<./sections/7. Interview Q and A/7.1. Interview questions about namespaces.md>)

1. **Namespace vs folder vs assembly** (what the compiler/runtime cares about)
2. **File-scoped vs block-scoped namespaces** (differences, migration strategy, style consistency)
3. **Global usings and implicit usings** (what they are, pros/cons, when to avoid)
4. **Using alias and collision resolution** (how to fix ambiguous type names cleanly)
5. **`using static`** (when it’s acceptable; when it harms readability)
