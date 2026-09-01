## 2.2. IsolatedModules, TranspileOnly and SWC/esbuild

### 1) **Definition** (isolatedModules)

**Definition** — `isolatedModules: true` forces each file to be transpilable *alone* (single-file emit). Required when transpilation uses `swc`/`esbuild`/`tsx` (no cross-file type info). It bans features that need whole-program analysis:

- `const enum` cross-file inlining.
- Legacy `namespace` merging across files.
- Type-only imports needing elision consistency (hence `verbatimModuleSyntax`/`isolatedModules` require explicit `import type`).

```jsonc
{
  "compilerOptions": { "isolatedModules": true, "verbatimModuleSyntax": true, "esModuleInterop": true }
}
```

```typescript
// with isolatedModules, this must use import type for type-only
import type { User } from "./user.js"; // correct — erased
import { greet } from "./greet.js";     // value — preserved

// bad under isolatedModules:
import { User } from "./user.js"; // if User is purely type, checker with isolatedModules errors — use import type
```

### 2) **Example** (SWC)

```typescript
// bundler config uses swc/esbuild transpilation — checker still tsc --noEmit
// example package.json: { "scripts": { "build": "tsc --noEmit && swc src -d dist" } }

// good: erasable patterns
export type Color = "red" | "blue"; // erased — ok
export const getColor = (c: Color): string => c;

// bad: const enum in isolation
export const enum Status { Ready, Pending } // error with isolatedModules if imported across files
// fix: union literal
export type Status2 = "ready" | "pending";
export const Status2 = { Ready: "ready", Pending: "pending" } as const;

// swc/esbuild emit example: they transpile TS→JS without checking, so error in tsc --noEmit won't block emit — must run tsc --noEmit in CI
```

### 3) **Bad** (const enum without isolation)

**Bad — not enabling `isolatedModules`:**

- Code passes `tsc` whole-program but fails with `swc`/`esbuild`/`tsx` per-file transpile (runtime `Status.Ready` is object, not inlined number).
- `transpileOnly: true` in `ts-loader` without separate `tsc --noEmit` misses errors.
- Mixing `verbatimModuleSyntax: false` with `isolatedModules` causes silent import elision differing between `tsc` and `esbuild`.

```typescript
// bad: transpileOnly without typecheck
// webpack: ts-loader + transpileOnly:true → fast but never runs tsc check; CI misses errors unless extra step
// good: split: esbuild/swc for emit + tsc --noEmit for check (two processes — see 01 3.1)

// bad const enum example already above
// also bad: re-exporting type as value
export { type MyType } from "./a.js"; // with verbatimModuleSyntax, must be export type { MyType }
```

**Cross-links:** const enum trap deeper → [10 3.1 Perf Traps](<../../../10%20Migration%20Interop%20and%20Runtime%20Gaps/sections/3.%20Performance%20and%20Emit%20Gaps/3.1.%20Const%20Enum%20Erased%20Types%20and%20Perf%20Traps.md>); toolchain split → [01 3.1 tsc/tsx](<../../../01%20TypeScript%20Fundamentals%20and%20Mental%20Model/sections/3.%20Toolchain%20First%20Look/3.1.%20tsc%20tsx%20and%20ts-node%20Overview%20when%20to%20use%20which.md>).

### Mentor note

Enable `isolatedModules` + `verbatimModuleSyntax` on day one for any repo using bundler. The explicit `import type` verbosity prevents a class of deploy-time emit mismatch bugs.

### Performance note

`swc`/`esbuild` transpile 10–50× faster than `tsc` emit. Pairing them with `tsc --noEmit` (check only) gives best both worlds — measure CI time vs `tsc --build`.

### Common confusion

- "`isolatedModules` makes checking stricter" — only concerning emit-coupled patterns; it doesn't add null checks.
