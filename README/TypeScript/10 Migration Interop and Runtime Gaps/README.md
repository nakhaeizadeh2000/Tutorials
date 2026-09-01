## 0. Prerequisites and version map

- **Prereq** (requires [JavaScript track](<../../JavaScript/README.md>) fundamentals — types build on JS runtime; see [JS 01 Fundamentals](<../../JavaScript/01%20Fundamentals%20and%20Mental%20Model/README.md>))
- **Era** (TypeScript 5.6 era, August 2026 — [Handbook](<https://www.typescriptlang.org/docs/>) + [roadmap.sh TypeScript](<https://roadmap.sh/typescript>))
- **Overlap** (see §7 Overlaps to avoid at end)

## 1. Migrating JS to TS

### [1.1. allowJs, checkJs and JSDoc Migration](<./sections/1. Migrating JS to TS/1.1. allowJs checkJs and JSDoc Migration.md>)

1. **Path** (JS → JSDoc → TS)
2. **Example** (// @ts-check)
3. **Bad** (big-bang rewrite)

---

### [1.2. any, unknown and Gradual Typing](<./sections/1. Migrating JS to TS/1.2. any unknown and Gradual Typing.md>)

1. **Definition** (unknown)
2. **Example** (unknown guard)
3. **Mistake** (any as escape hatch)

---

## 2. Interop and Boundaries

### [2.1. Zod, Valibot and Runtime Validation (TS erasure bridge)](<./sections/2. Interop and Boundaries/2.1. Zod Valibot and Runtime Validation TS erasure bridge.md>)

1. **Problem** (no runtime)
2. **Solution** (Zod schema)
3. **Example** (z.infer)

---

### [2.2. CJS/ESM Interop and Typing External Libs](<./sections/2. Interop and Boundaries/2.2. CJS ESM Interop and Typing External Libs.md>)

1. **Problem** (interop)
2. **Fix** (esModuleInterop)
3. **Link** (to TSNode track)

---

## 3. Performance and Emit Gaps

### [3.1. Const Enum, Erased Types and Perf Traps](<./sections/3. Performance and Emit Gaps/3.1. Const Enum Erased Types and Perf Traps.md>)

1. **Trap** (const enum cross-module)
2. **Alternative** (union)
3. **Expert** (isolatedModules perf)

---

## 4. Important Points and Mentor Checklist

- **`allowJs`+`checkJs`+`// @ts-check`** (incremental JSDoc → rename file-by-file, no big-bang)
- **`unknown` as safe `any`** (ban `any` via `no-explicit-any`, guard before use)
- **Validator at every unknown boundary** (Zod/Valibot `parse` + `z.infer`, `esModuleInterop` for CJS)

---

## 5. Common Pitfalls to Production Bugs

- **Pitfall** (`JSON.parse(s) as User` lies, `const enum` breaks `isolatedModules`, `any[]` hides)
- **Consequence** (runtime `undefined` field, deploy-time emit mismatch)

---

## 6. Interview Q and A

- **Q: `unknown` vs `any`?** A: `unknown` checked top, must narrow
- **Q: How to bridge erasure?** A: codec — schema `parse` then `infer`

---

## 7. Overlaps to Avoid

Links to sibling domains that already cover adjacent material.

Links: [01 TypeScript Fundamentals and Mental Model](<../01%20TypeScript%20Fundamentals%20and%20Mental%20Model/README.md>) covers erasure, [08 Configuration Strictness and Build Pipeline](<../08%20Configuration%20Strictness%20and%20Build%20Pipeline/README.md>) covers `allowJs`/`target` — bridge only here.