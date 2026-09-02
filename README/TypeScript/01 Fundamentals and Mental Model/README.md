# Fundamentals and Mental Model

The map before the territory: what TypeScript actually is, how its type system relates to JavaScript, how compilation and type erasure work, and how to run TypeScript today. Everything later in this track builds on these mental models. Assumes you can already read and write JavaScript — for language fundamentals see the [JavaScript track](<../JavaScript/README.md>).

## 0. Prerequisites

JavaScript fundamentals (values, scope, closures, prototypes, async) — covered in [JavaScript 01 Fundamentals](<../JavaScript/01 Fundamentals and Mental Model/README.md>) through [JavaScript 05 Functions Deep Dive](<../JavaScript/05 Functions Deep Dive/README.md>). No prior TypeScript knowledge required.

## 1. What TypeScript is

### [1.1. From JavaScript to TypeScript — history, superset claim, and why it exists](<./sections/1. What TypeScript is/1.1. From JavaScript to TypeScript history superset claim and why it exists.md>)

1. **Superset in syntax only** (every JavaScript program is syntactically valid TypeScript — but not every JavaScript idiom is *well-typed* TypeScript).
2. **History in one paragraph** (2012 Microsoft, Anders Hejlsberg; 1.0 → 2.0 strictNullChecks → 3.0 project references → 4.x template literals → 5.x erasableSyntaxOnly/isolatedDeclarations).
3. **Why teams adopt it** (scale: larger codebases, faster refactoring, self-documenting contracts — at the cost of build complexity).

### [1.2. Design goals and non-goals — what TypeScript intentionally does not do](<./sections/1. What TypeScript is/1.2. Design goals and non-goals what TypeScript intentionally does not do.md>)

1. **Goals** (add static types to JavaScript, preserve JS runtime behavior, remain erasable, support tooling).
2. **Non-goals** (no runtime type system, no performance optimization of emitted JS, no breaking JS semantics, no new runtime primitives).
3. **Consequence for learners** (if you expect types to affect runtime behavior, you will be surprised — they don't).

### [1.3. Superset, soundness, and the type system flavor](<./sections/1. What TypeScript is/1.3. Superset soundness and the type system flavor.md>)

1. **Structural vs nominal** (TypeScript is structural: compatibility is by shape, not by name — with a few nominal exceptions).
2. **Sound vs useful** (TypeScript is intentionally unsound in places for usability — e.g., bivariant function parameters, `any` escape hatch).
3. **Gradual typing** (you can add types file-by-file; `any` and `// @ts-ignore` are pragmatic but should be budgeted, not habitual).

---

## 2. How TypeScript (doesn't) execute

### [2.1. Type erasure — what survives compilation](<./sections/2. How TypeScript doesnt execute/2.1. Type erasure what survives compilation.md>)

1. **All type syntax disappears** (annotations, interfaces, type aliases, generics leave no trace in emitted JavaScript).
2. **Only value-level constructs survive** (values, function bodies, `enum` caveat — the one non-erasable feature from the early era).
3. **Erasable syntax rule** (modern guidance: every construct you write should be removable by stripping types alone — see `erasableSyntaxOnly`).

### [2.2. Static checking vs runtime reality — trust but verify](<./sections/2. How TypeScript doesnt execute/2.2. Static checking vs runtime reality trust but verify.md>)

1. **The checker is a proof assistant, not a runtime guard** (it proves your program *could be* consistent, assuming inputs honor their declared types).
2. **Boundary validation is mandatory** (any data from outside the type system — network, file, user input — must be validated at runtime).
3. **Soundness holes are documented, not accidental** (bivariance, array covariance, type assertions are trade-offs for ergonomics).

### [2.3. The language server — editor superpowers that justify TypeScript](<./sections/2. How TypeScript doesnt execute/2.3. The language server editor superpowers that justify TypeScript.md>)

1. **tsserver powers the IDE** (autocompletion, go-to-definition, rename, hover types, quick fixes — all from the same type graph).
2. **Project references and incremental builds** (the language server understands your monorepo graph and only rechecks what changed).
3. **Types as documentation** (hover shows the *computed* type, not just the annotation — learn to read it).

---

## 3. Running TypeScript today

### [3.1. The compilation pipeline — tsc, emit, declarations, and source maps](<./sections/3. Running TypeScript today/3.1. The compilation pipeline tsc emit declarations and source maps.md>)

1. **`tsc` is a type checker and an emitter** (two jobs: validate the program, then rewrite `.ts` → `.js` + `.d.ts` + `.js.map`).
2. **`noEmit` separates checking from building** (CI often runs `tsc --noEmit` and lets esbuild/SWC/Vite do the actual emit).
3. **Configurations are composable** (base `tsconfig.json` + `extends` + project references keep large repos tractable).

### [3.2. Executing TypeScript — tsc plus node, tsx, ts-node, and native Node stripping](<./sections/3. Running TypeScript today/3.2. Executing TypeScript tsc plus node tsx ts-node and native Node stripping.md>)

1. **The classic path** (`tsc` → `node dist/app.js` — two steps, most faithful to production).
2. **Just-in-time execution** (`tsx` / `ts-node` — transpile on import; great for scripts, hidden cost in startup latency).
3. **Native type stripping** (Node.js 22.12+ can run `.ts` directly by erasing types — zero transform, but only erasable syntax allowed).

### [3.3. Choosing erasable syntax — the zero-cost interop rule](<./sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>)

1. **Erasable** (type annotations, interfaces, `type` aliases, generics, `as` assertions, `satisfies` — all vanish cleanly).
2. **Non-erasable legacy** (`enum`, `namespace` IIFE emit, `parameter properties` — require a transform, break stripping).
3. **Modern default** (`--erasableSyntaxOnly` catches non-erasable constructs at compile time; `--isolatedDeclarations` requires explicit return types for parallel `.d.ts` generation).

---

## 4. Important points to remember (fundamentals)

### [4.1. Fundamentals checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Fundamentals checklist mental models mentors insist on.md>)

1. **Types don't exist at runtime** (erasure is the single most important fact).
2. **Superset means syntax-compatible, not semantics-identical** (well-typed ≠ bug-free; unsound holes remain).
3. **Validation at the boundary** (parse, don't assert: `unknown` → validated → typed).
4. **Tooling is the payoff** (rename, navigation, and refactoring confidence justify the cost).

---

## 5. Common pitfalls → production bugs (fundamentals)

### [5.1. Real production bugs caused by misunderstanding fundamentals](<./sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by misunderstanding fundamentals.md>)

1. **Assuming types guard at runtime** (the "but it typed correctly" incident — missing boundary validation).
2. **Using `enum` then hitting native stripping** (deploys break under `--experimental-strip-types`).
3. **Treating `any` as "I don't know yet"** (it silences the checker forever and leaks into downstream types).

---

## 6. Interview questions and answers (fundamentals)

### [6.1. Common interview Q&A — fundamentals of TypeScript](<./sections/6. Interview questions and answers/6.1. Common interview QA fundamentals of TypeScript.md>)

1. **Is TypeScript a different language?** (superset vs separate language, why it matters).
2. **Where do types live?** (compile time only — erasure consequences).
3. **Structural vs nominal** (why `class Dog { name: string }` is assignable to `{ name: string }`).
4. **Soundness trade-offs** (examples interviewers probe for: bivariance, `any`, narrowing).

---

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries — what is covered elsewhere](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **JavaScript language mechanics** (values, scope, closures, prototypes, async) — [JavaScript track](<../JavaScript/README.md>).
2. **Deep type system mechanics** (structural typing details, variance, conditional types) — [02 The Type System Core](<../02 The Type System Core/README.md>).
3. **Configuration deep dive** (`tsconfig` flags, project references) — [13 Configuration and Compiler Options](../13%20Configuration%20and%20Compiler%20Options/README.md) (textual forward reference until that domain lands).
4. **Decorators and metadata** — [14 Decorators and Metadata](../14%20Decorators%20and%20Metadata/README.md) (textual).

