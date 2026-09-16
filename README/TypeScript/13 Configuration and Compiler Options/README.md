# Configuration and Compiler Options

How TypeScript is *configured* — `tsconfig.json` as the project's type contract: the `strict` family (what each flag proves), the erasable trio (`isolatedModules`, `verbatimModuleSyntax`, `erasableSyntaxOnly`), module/resolution pairing, emit/declaration/project options, and the migration discipline for enabling it all. Every prior domain cited flag *effects* (`strictNullChecks` in [03 Basic Types](<../03 Basic Types and Annotations/README.md>), `noImplicitOverride` in [06 Classes](<../06 Classes and Object-Oriented Types/README.md>), `erasableSyntaxOnly` in [01 Fundamentals](<../01 Fundamentals and Mental Model/README.md>) + [11 Enums](<../11 Enums and Literal Types/README.md>), `noUncheckedIndexedAccess` in [10 Arrays](<../10 Arrays Tuples and Collections/README.md>)) — this domain owns *configuration*: what to enable, where, how flags interact, and how to migrate.

## 0. Prerequisites

[01 Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) — [3.3. Choosing erasable syntax](<../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>) (erasable inventory the flags enforce) and [3.2. Executing TypeScript](<../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.2. Executing TypeScript tsc plus node tsx ts-node and native Node stripping.md>) (pipelines the flags serve). [03 Basic Types and Annotations](<../03 Basic Types and Annotations/README.md>) — [1.3. null and undefined](<../03 Basic Types and Annotations/sections/1. The Primitive Family/1.3. null and undefined strictNullChecks and optionality.md>) (`strictNullChecks` behavior this domain configures). [12 Modules, Namespaces and Declaration Files](<../12 Modules Namespaces and Declaration Files/README.md>) — [1.2. import type](<../12 Modules Namespaces and Declaration Files/sections/1. ES Modules/1.2. import type and verbatimModuleSyntax erasable imports.md>) (verbatim behavior) + [1.3. export equals](<../12 Modules Namespaces and Declaration Files/sections/1. ES Modules/1.3. export equals and interop with CommonJS.md>) (interop defaults incl. tsc-7 changes).

## 1. Strictness Family

### [1.1. strict and strictNullChecks the nullability contract](<./sections/1. Strictness Family/1.1. strict and strictNullChecks the nullability contract.md>)

1. **What `strict: true` enables** (the family bundle: null checks, implicit-any bans, function variance, property initialization — one flag, one contract).
2. **`strictNullChecks` mechanics** (`T` excludes `null`/`undefined`; `T | null` forces narrowing — the 03/1.3 behavior, configured here).
3. **Enabling `strict` on existing code** (error-triage order: nullability first, implicit-any second, variance last — the migration sequence).

### [1.2. noImplicitAny and useUnknownInCatchVariables](<./sections/1. Strictness Family/1.2. noImplicitAny and useUnknownInCatchVariables.md>)

1. **`noImplicitAny` coverage** (unannotated parameters, evolving arrays, empty objects — every silent `any` becomes an error with a fix site).
2. **`useUnknownInCatchVariables`** (catch bindings type `unknown` — narrowing before use; the `any`-shaped `catch (e)` it replaces).
3. **Explicit-`any` policy** (declared `any` stays legal under strict — when explicit beats precise, and how to fence it).

### [1.3. strictFunctionTypes strictPropertyInitialization noImplicitOverride](<./sections/1. Strictness Family/1.3. strictFunctionTypes strictPropertyInitialization noImplicitOverride.md>)

1. **`strictFunctionTypes` contravariance** (function-type positions check strictly; methods stay bivariant — the 02/3.2 + 05/3.2 rule, configured here).
2. **`strictPropertyInitialization`** (class fields definitely assigned — constructor, initializer, or `!` with justification).
3. **`noImplicitOverride`** (overrides declared explicitly — rename-refactors break loudly instead of silently orphaning).

---

## 2. Erasable and Isolated Toolchain

### [2.1. isolatedModules single-file transpilation](<./sections/2. Erasable and Isolated Toolchain/2.1. isolatedModules single-file transpilation.md>)

1. **What isolation requires** (each file transpilable alone — no cross-file value knowledge; `const enum` imports and unmarked type re-exports fail).
2. **Errors as architecture documentation** (TS2748/TS1205 point at designs assuming whole-program knowledge — fix the design, not the flag).
3. **Who needs it on** (esbuild/swc/Babel/Vite/Node-stripping consumers — on for libraries, on for apps with per-file pipelines).

### [2.2. verbatimModuleSyntax predictable emit](<./sections/2. Erasable and Isolated Toolchain/2.2. verbatimModuleSyntax predictable emit.md>)

1. **No guessing, only stating** (type traffic via `import type` or TS1484 — elision heuristics disabled project-wide).
2. **Emit preservation semantics** (import statements survive verbatim — bundlers/strippers see exactly what authors wrote).
3. **Adoption path** (enable + triage TS1484s as the erasability audit — convert to `import type`, never value-use to silence).

### [2.3. erasableSyntaxOnly and the trio standard](<./sections/2. Erasable and Isolated Toolchain/2.3. erasableSyntaxOnly and the trio standard.md>)

1. **Deletion-only syntax gate** (TS1294 bans enums/namespaces — the 11/2.2 inventory, configured here with migration pointers).
2. **The trio as project standard** (`isolatedModules` + `verbatimModuleSyntax` + `erasableSyntaxOnly` — per-file processability guaranteed repo-wide).
3. **Adopting per directory** (new code trio-clean, legacy dated-TODOs — compounding quarterly instead of flag-day rewrites).

---

## 3. Modules Emit and Projects

### [3.1. module and moduleResolution pairing](<./sections/3. Modules Emit and Projects/3.1. module and moduleResolution pairing.md>)

1. **Pairing rules** (`nodenext`↔`nodenext`, `bundler`↔`bundler`, `node16`+CJS scope — matched pairs resolve identically at check and run time).
2. **tsc-7 removals** (`node10` resolution gone, `esModuleInterop: false` gone — defaults discovered in units 61/67, configured here).
3. **Choosing per runtime** (Node ESM → nodenext; bundlers → bundler; libraries → clean ESM emit with dual conditions).

### [3.2. declaration composite project references](<./sections/3. Modules Emit and Projects/3.2. declaration composite project references.md>)

1. **`declaration` + `declarationMap`** (consumers check signatures; maps restore go-to-source — the 12/3.1 practice, configured here).
2. **`composite` + project references** (monorepo builds: per-package programs, incremental emit, reference-ordered builds).
3. **`emitDeclarationOnly` for type packages** (types-only publishing without JS emit — the declaration-package shape).

### [3.3. noUncheckedIndexedAccess and exactOptionalPropertyTypes](<./sections/3. Modules Emit and Projects/3.3. noUncheckedIndexedAccess and exactOptionalPropertyTypes.md>)

1. **`noUncheckedIndexedAccess` honesty** (open index reads gain `| undefined` — the 10/5.1 incident class, configured here).
2. **`exactOptionalPropertyTypes` precision** (`prop?: T` vs `prop: T | undefined` distinguished — assignment intent enforced).
3. **Enabling both on existing code** (triage as latent-incident backlog — narrowing fixes only, mass-`!`/widening banned).

---

## 4. Important points to remember (configuration)

### [4.1. Configuration checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Configuration checklist mental models mentors insist on.md>)

1. **Strict trio first, everything else after** (`strict` + `isolatedModules` + `verbatimModuleSyntax` — the foundation all other flags assume).
2. **Erasable by default, recorded where not** (trio-clean new code; legacy exemptions dated; survivors documented like 11's enum stamp).
3. **Pair module settings, generate declarations, map exports** (resolution matches runtime; consumers check signatures; surfaces mapped).
4. **Migrate flags with triage, never flag-days** (per-directory adoption, error-class-ordered triage, CI gates per flag).

---

## 5. Common pitfalls → production bugs (configuration)

### [5.1. Real production bugs caused by configuration misunderstandings](<./sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by configuration misunderstandings.md>)

1. **`strict: false` shipped `undefined` is not an object across checkout** (unstrict nullability; crash class `strictNullChecks` deletes).
2. **Mismatched module/resolution pair bundled CJS as ESM and crashed** (`module: nodenext` + `moduleResolution: node` legacy — interop divergence at customer load).
3. **Elided side-effect import skipped plugin registration in prod only** (heuristics vs bundlers — the 12/5.1 class, fixed by verbatim discipline).
4. **`skipLibCheck: false` on generated declarations timed out CI** (checking 50k-line codegen `.d.ts` — scope the flag per path, not globally).

---

## 6. Interview questions and answers (configuration)

### [6.1. Common interview QA — configuration and compiler options](<./sections/6. Interview questions and answers/6.1. Common interview QA configuration and compiler options.md>)

1. **What does `strict: true` enable — and in what order do you triage enabling it?** (family bundle + nullability-first migration sequence).
2. **`isolatedModules` vs `verbatimModuleSyntax` vs `erasableSyntaxOnly` — what does each guarantee?** (single-file, predictable-emit, deletion-only — the trio distinguished).
3. **Which `module`/`moduleResolution` pair for Node ESM vs bundlers — and what breaks when mismatched?** (pairing rules + interop divergence).
4. **When does `noUncheckedIndexedAccess` pay — and what breaks on first enable?** (index honesty + latent-crash backlog triage).
5. **How do you migrate a legacy tsconfig to strict — without a flag-day?** (per-directory, error-class-ordered, CI-gated migration).

---

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries — what is covered elsewhere](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **Nullability mechanics and type-space behavior** (unions with `null`, narrowing, `unknown` catch — behavior, not configuration) — [03 Basic Types and Annotations](<../03 Basic Types and Annotations/README.md>).
2. **Variance theory and generic mechanics** (contravariance rules, `infer`, `in`/`out` — theory applied by flags) — [02 The Type System Core](<../02 The Type System Core/README.md>) + [08 Generics Deep Dive](<../08 Generics Deep Dive/README.md>).
3. **Erasable inventory, pipelines, and module organization** (what erases, running TS, import/export forms, namespaces, declarations) — [01 Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) + [12 Modules, Namespaces and Declaration Files](<../12 Modules Namespaces and Declaration Files/README.md>).
4. **Strictness as validation practice** (exhaustiveness, assertion functions, validation at boundaries — using strictness, not configuring it) — [15 Strictness, Errors and Validation](<../15 Strictness Errors and Validation/README.md>) (textual forward).
5. **Performance engineering and tooling** (project references at scale, language-server tuning, build profiling) — [19 Performance, Project References and Scaling](<../19 Performance Project References and Scaling/README.md>) + [16 Tooling, Language Server and Ecosystem](<../16 Tooling Language Server and Ecosystem/README.md>) (textual forwards).

[← Back to track](<../README.md>)
