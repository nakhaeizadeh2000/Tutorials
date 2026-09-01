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

### [4.1. Migration and Validation Checklist](<./sections/4. Important Points and Mentor Checklist/4.1. Migration and Validation Checklist.md>)

1. **Definition** (allowJs→JSDoc→TS, unknown safe, validator at boundary)
2. **Checklist** (PR gate: allowJs+checkJs, unknown+guard, Zod at fetch, esModuleInterop)
3. **Mentor** (pick hottest module after outage)

---

## 5. Common Pitfalls to Production Bugs

### [5.1. Any and Const Enum Pitfalls](<./sections/5. Common Pitfalls to Production Bugs/5.1. Any and Const Enum Pitfalls.md>)

1. **Pitfall** (as User lies, const enum breaks isolated, any[] hides)
2. **Consequence** (undefined field, deploy mismatch)
3. **Guard** (validate once at edge, no-const-enum lint)

---

## 6. Interview Q and A

### [6.1. Interview Migration and Gaps](<./sections/6. Interview Q and A/6.1. Interview Migration and Gaps.md>)

1. **Q: unknown vs any?** (checked top)
2. **Q: Bridge erasure?** (codec parse then infer)
3. **Q: esModuleInterop helper?** (default wrapper)

---

## 7. Overlaps to Avoid

### [7.1. Boundaries What Is Covered Elsewhere](<./sections/7. Overlaps to Avoid/7.1. Boundaries What Is Covered Elsewhere.md>)

1. **Definition** (where stops — bridge only, not fundamentals/build)
2. **Comparison** (01 for erasure, 08 for allowJs/target)
3. **Link** (how to use)

---
