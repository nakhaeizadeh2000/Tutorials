## Update TypeScript 5.7 (feature map + where it lives in this repo)

This historical TypeScript 5.7 change map routes to implemented topical owners. The current checked compiler baseline is 7.0.2; runtime and tool support remain example-specific. Use the [current learning route](<../25 Update TypeScript 7.0/sections/6. Overlaps and Update Route/6.1. Overlaps and the current learning route.md>) for the native migration.

## 1. Never-initialized variable checks

### [1.1. Definite assignment — the `strictPropertyInitialization` contract this check extends](<../13 Configuration and Compiler Options/sections/1. Strictness Family/1.3. strictFunctionTypes strictPropertyInitialization noImplicitOverride.md>)

1. **Initialization evidence:** 5.7 added checks for certain never-initialized captured variables. This is related to definite assignment, but is not identical to class-property initialization.
2. **Repair:** initialize the value or redesign its producer/consumer ordering; a definite-assignment assertion supplies no runtime value.
3. **Scope:** the owner names the relevant flag and input shape. Do not infer that all closure timing or every possible initialization path is proven.

## 2. `rewriteRelativeImportExtensions` (run TypeScript in place)

### [2.1. Import and export forms — the specifiers this flag rewrites](<../12 Modules Namespaces and Declaration Files/sections/1. ES Modules/1.1. import and export forms named default star re-export.md>)

1. **Source and output graphs:** rewriteRelativeImportExtensions rewrites supported relative TypeScript extensions during emit. The complete source/emitted project is in the linked owner.
2. **Limits:** package aliases, computed paths and runtime resolution require their own analysis. Passing the option does not certify every source runner or imported dependency.
3. **Choice:** emitted-only imports and source-running imports can use different valid strategies. Choose the graph and runtime first rather than mandating one spelling for all projects.

## 3. `target`/`lib` `es2024`

### [3.1. `lib` settings — where the new built-in shapes land](<../18 Async Types and Standard Library/sections/3. Standard Library in Practice/3.1. lib settings and built-in async types.md>)

1. **Library surface:** 5.7 added ES2024 declarations including grouping and promise capabilities; its typed-array declarations also track backing-buffer types.
2. **Runtime evidence:** an API declaration does not implement grouping, buffer resizing or promise operations. The standard-library owner separates selected declarations from tested hosts.
3. **Independent options:** target controls emit choices and default libraries; an explicit lib selection can differ. Select both deliberately rather than requiring them to move together.

## 4. Faster startup via V8 compile caching

### [4.1. Incremental builds — the cache-discipline family this belongs to](<../19 Performance Project References and Scaling/sections/2. Project References and Builds/2.2. Incremental builds and tsbuildinfo discipline.md>)

1. **Historical startup cache:** the JavaScript compiler used Node’s V8 compile-cache API to reuse parsing/compilation of the compiler’s own JavaScript.
2. **Different caches:** that startup cache is distinct from tsbuildinfo’s project information and from outputs. The native 7.0 compiler is also a different implementation; the historical Node optimization is not its startup model.
3. **Measurement:** compare the actual compiler process and cache conditions. Measure before deciding whether partitioning, cache policy or another change addresses the bottleneck. The [5.7 notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-7.html#support-for-v8-compile-caching-in-nodejs) describe their historical measurement, not a speed guarantee here.

## 5. Computed non-literal method names gain index signatures

### [5.1. Optional, `readonly`, and index signatures — what the class now contributes](<../04 Objects Interfaces and Type Aliases/sections/1. Object Type Fundamentals/1.2. Optional readonly and index signatures.md>)

1. **Computed names:** certain non-literal computed class method names contribute index signatures, as documented in the [5.7 behavioral change](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-7.html#creating-index-signatures-from-non-literal-method-names-in-classes).
2. **Key contract:** distinguish a broad symbol or string domain from one literal or unique-symbol key. An inferred index signature does not establish runtime presence at every key.
3. **Design:** use an explicit contract when it communicates the intended key/value relationship. Interface versus alias choice alone does not supply nominal identity.

## Ownership and verification

The linked leaves own the complete explanation, commands, examples and observed limits. This page is navigation, not an additional executable project or a promise that a historical release optimization applies to the current compiler.

[← Back to TypeScript track](<../README.md>)
