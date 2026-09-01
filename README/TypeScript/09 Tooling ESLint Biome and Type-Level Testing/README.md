## 0. Prerequisites and version map

- **Prereq** (requires `README/JavaScript` fundamentals — types build on JS runtime)
- **Era** (TypeScript 5.6, roadmap.sh TypeScript)
- **Overlap** (see § Overlaps to avoid at end)

## 1. Lint and Format

### [1.1. ESLint + typescript-eslint vs Biome](<./sections/1. Lint and Format/1.1. ESLint + typescript-eslint vs Biome.md>)

1. **Comparison** (Biome speed)
2. **Config** (typed lint)
3. **Bad** (no type-aware lint)

---

### [1.2. Consistent Code and Import Sort](<./sections/1. Lint and Format/1.2. Consistent Code and Import Sort.md>)

1. **Rule** (import sort)
2. **Example** (biome check)
3. **Link** (to Production Toolchain)

---

## 2. Type-Level Testing and CI

### [2.1. tsd, expect-type and dtslint](<./sections/2. Type-Level Testing and CI/2.1. tsd expect-type and dtslint.md>)

1. **Definition** (expectType)
2. **Example** (tsd test)
3. **Bad** (only runtime tests)

---

### [2.2. tsc --noEmit in CI and Pre-commit](<./sections/2. Type-Level Testing and CI/2.2. tsc --noEmit in CI and Pre-commit.md>)

1. **Pipeline** (typecheck)
2. **Example** (husky)
3. **Mistake** (skip typecheck)

---

## 3. Editor and DX

### [3.1. Editor Integration and Auto-Types](<./sections/3. Editor and DX/3.1. Editor Integration and Auto-Types.md>)

1. **Feature** (auto import)
2. **Example** (VS Code)
3. **Mentor** (onboarding DX)

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

- `08` covers build, `10` covers migration — lint is focus here

---
