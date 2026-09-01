## 0. Prerequisites and version map

- **Prereq** (requires `README/JavaScript` fundamentals — types build on JS runtime)
- **Era** (TypeScript 5.6, roadmap.sh TypeScript)
- **Overlap** (see § Overlaps to avoid at end)

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

### [2.2. CJS/ESM Interop and Typing External Libs](<./sections/2. Interop and Boundaries/2.2. CJS/ESM Interop and Typing External Libs.md>)

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

- **Checklist** (what senior must enforce)
- **Mentor** (how to teach and review)

---

## 5. Common Pitfalls to Production Bugs

- **Pitfall** (any, non-null assertion, enum)
- **Consequence** (runtime bug despite compile)

---

## 6. Interview Q and A

- **Q/A** (type challenge, tradeoff)

---

## 7. Overlaps to Avoid

Links to sibling domains that already cover adjacent material.

- `01` covers fundamentals, `08` covers emit — migration is bridge

---
