## Update TypeScript 5.7 (feature map + where it lives in this repo)

This domain is an **index** for TypeScript 5.7-era changes (stable 2024-11-22). Deep explanations live in the linked topical domains below; this file only routes you there. No concept is re-taught here; every entry is a one-line mention + link per the anti-boilerplate law (§5).

> Scope: TypeScript 5.7 added five change groups — **never-initialized variable checks**, **`--rewriteRelativeImportExtensions`** (run-from-source imports), **`--target`/`--lib` `es2024`** (`Object.groupBy`/`Map.groupBy`, `Promise.withResolvers`, resizable `ArrayBuffer`/`SharedArrayBuffer`, generic `TypedArray`s), **faster startup via V8 compile caching**, and **computed non-literal class method names gaining index signatures** (plus `nodenext` JSON-import rules). All claims labeled "TS 5.7 era" below.

## 1. Never-initialized variable checks

### [1.1. Definite assignment — the `strictPropertyInitialization` contract this check extends](<../13 Configuration and Compiler Options/sections/1. Strictness Family/1.3. strictFunctionTypes strictPropertyInitialization noImplicitOverride.md>)

1. **Why it exists** (the old use-before-assignment analysis stayed optimistic when the variable was captured across function boundaries — 5.7 reports the provable case, variables never assigned on any path, while staying lenient on possibly-initialized ones)
2. **Production guidance** (treat the error as a missing-initialization bug, not a lint nit — initialize at declaration or assign on every path before first read; constructor-assigned fields follow the [constructor and instance-creation discipline](<../06 Classes and Object-Oriented Types/sections/1. Class Type Fundamentals/1.2. Constructors parameter properties and instance creation.md>))
3. **Narrowing interplay** (assignment is the other half of narrowing — the control-flow rules are catalogued in [exhaustiveness, `never`, and switch narrowing](<../07 Unions Intersections and Narrowing/sections/3. Control Flow Narrowing/3.2. Exhaustiveness never and switch narrowing.md>))

---

## 2. `rewriteRelativeImportExtensions` (run TypeScript in place)

### [2.1. Import and export forms — the specifiers this flag rewrites](<../12 Modules Namespaces and Declaration Files/sections/1. ES Modules/1.1. import and export forms named default star re-export.md>)

1. **Why it exists** (Node's type-stripping runs `.ts` files directly but resolves `./foo.ts` while emitted `.js` needs `./foo.js` — the flag rewrites relative `.ts`/`.tsx`/`.mts`/`.cts` to their JS counterparts at emit, so one source tree both runs in place and compiles cleanly)
2. **Production guidance** (write `./foo.ts` extensions in source and let the flag produce `./foo.js` — never hand-maintain both spellings; dynamic `import(getPath())` strings are not rewritten, so keep computed paths behind static re-export barrels; keep the [module and moduleResolution pairing](<../13 Configuration and Compiler Options/sections/3. Modules Emit and Projects/3.1. module and moduleResolution pairing.md>) matched to the runtime that executes the tree)
3. **Execution context** (the in-place runtimes themselves — `tsx`, `ts-node`, Node `--experimental-strip-types` — are compared in [executing TypeScript](<../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.2. Executing TypeScript tsc plus node tsx ts-node and native Node stripping.md>); `nodenext` JSON-import enforcement tightened in the same release — same import-forms leaf above)

---

## 3. `target`/`lib` `es2024`

### [3.1. `lib` settings — where the new built-in shapes land](<../18 Async Types and Standard Library/sections/3. Standard Library in Practice/3.1. lib settings and built-in async types.md>)

1. **Why it exists** (`es2024` unlocks `Object.groupBy`/`Map.groupBy` (group-then-act without hand-rolled reducers), `Promise.withResolvers` (deferred capability without the executor dance), resizable `ArrayBuffer`/`SharedArrayBuffer` with `grow`, and `TypedArray`s becoming generic over their backing buffer so `Uint8Array<SharedArrayBuffer>` keeps its identity)
2. **Production guidance** (group into `Map` when keys are dynamic or non-string — the [Map and Set typing](<../10 Arrays Tuples and Collections/sections/3. Collections and Selection/3.1. Map and Set typing generics over collections.md>) rules still decide `Record` vs `Map`; `withResolvers` still needs settle-path discipline — the [Promise states and anatomy](<../18 Async Types and Standard Library/sections/1. Promise Types/1.1. Promise states and the Promise type anatomy.md>) contract is unchanged, only construction got shorter)
3. **Target discipline** (bump `target`/`lib` together per runtime support — the pairing table is in [module and moduleResolution pairing](<../13 Configuration and Compiler Options/sections/3. Modules Emit and Projects/3.1. module and moduleResolution pairing.md>); `Atomics.waitAsync` moved from `es2022` to `es2024` lib, so multi-threaded code re-verifies its lib floor)

---

## 4. Faster startup via V8 compile caching

### [4.1. Incremental builds — the cache-discipline family this belongs to](<../19 Performance Project References and Scaling/sections/2. Project References and Builds/2.2. Incremental builds and tsbuildinfo discipline.md>)

1. **Why it exists** (5.7 leverages Node 22's `module.enableCompileCache()` so `tsc` reuses parse/compile work across runs — same cold-start physics as `tsbuildinfo`, applied to the compiler's own startup rather than your program)
2. **Production guidance** (a faster compiler does not fix a slow program — if check times still dominate CI, partition first per the [solution-build orchestration](<../19 Performance Project References and Scaling/sections/2. Project References and Builds/2.3. Solution builds and CI orchestration with tsc b.md>) and measure with [extendedDiagnostics and traces](<../19 Performance Project References and Scaling/sections/1. Check-Time Performance/1.1. Measuring with extendedDiagnostics and traces.md>))
3. **Upgrade path** (adopt with the [version-management and upgrade playbook](<../16 Tooling Language Server and Ecosystem/sections/3. Debugging and Ecosystem/3.3. Version management and upgrade playbooks.md>) — pin, try in one pipeline, compare wall-clock before rolling out)

---

## 5. Computed non-literal method names gain index signatures

### [5.1. Optional, `readonly`, and index signatures — what the class now contributes](<../04 Objects Interfaces and Type Aliases/sections/1. Object Type Fundamentals/1.2. Optional readonly and index signatures.md>)

1. **Why it exists** (`class A { [symbolMethodName]() { return 1 } }` previously contributed nothing to `A`'s type — 5.7 reads it as an index signature (`[x: symbol]: () => number`), matching how object literals already behaved, so symbol-keyed methods are visible to the checker instead of silently absent)
2. **Production guidance** (prefer explicit method or mapped-type declarations over relying on inferred index signatures — inferred `[x: symbol]` widens every symbol key, which weakens the [structural-shape contract](<../04 Objects Interfaces and Type Aliases/sections/1. Object Type Fundamentals/1.1. Object types structural shape and excess property checks.md>); when the choice is nominal, the [interfaces-vs-type-aliases rule](<../04 Objects Interfaces and Type Aliases/sections/1. Object Type Fundamentals/1.3. Interfaces vs type aliases when to use which.md>) still decides the container)
3. **Declaration parity** (object-literal behavior was already consistent — this change only closes the class gap; merging semantics are unchanged — see [declaration merging and augmentation](<../04 Objects Interfaces and Type Aliases/sections/2. Composition and Declaration Merging/2.2. Declaration merging and module augmentation.md>))

---

## 6. Overlaps to avoid (keep the repo navigable)

1. **Definite assignment, variance, and the `strict` family** belong in [Configuration and Compiler Options](<../13 Configuration and Compiler Options/README.md>) (here only the 5.7 never-initialized check and where it docks).
2. **Module forms, resolution pairing, and execution runtimes** belong in [Modules, Namespaces and Declaration Files](<../12 Modules Namespaces and Declaration Files/README.md>) / [Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) (here only `rewriteRelativeImportExtensions` and the `nodenext` JSON rule).
3. **`lib`/`target` selection, promises, and collection typing** belong in [Async Types and Standard Library](<../18 Async Types and Standard Library/README.md>) / [Arrays, Tuples and Collections](<../10 Arrays Tuples and Collections/README.md>) (here only the `es2024` surface: `groupBy`, `withResolvers`, resizable buffers, generic `TypedArray`s).
4. **Build orchestration, caching, and measurement** belong in [Performance, Project References and Scaling](<../19 Performance Project References and Scaling/README.md>) (here only V8 compile-cache adoption).
5. **Object-type modeling (index signatures, structural shape, merging)** belongs in [Objects, Interfaces and Type Aliases](<../04 Objects Interfaces and Type Aliases/README.md>) (here only the computed-method-name index-signature change).

[← Back to TypeScript track](<../README.md>)
