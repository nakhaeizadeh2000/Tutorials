## 0. Prerequisites and version map

- **Prereq** (requires [JavaScript track](<../../JavaScript/README.md>) fundamentals — types build on JS runtime; see [JS 01 Fundamentals](<../../JavaScript/01%20Fundamentals%20and%20Mental%20Model/README.md>))
- **Era** (TypeScript 5.6 era, August 2026 — [Handbook](<https://www.typescriptlang.org/docs/>) + [roadmap.sh TypeScript](<https://roadmap.sh/typescript>))
- **Overlap** (see §7 Overlaps to avoid at end)

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

- **Biome for speed, `typescript-eslint` for depth** (`no-floating-promises` needs `projectService`)
- **`biome check --write` single pass** (lint+format+sort, `organizeImports` on)
- **`tsc --noEmit` gate** (required CI check, cache `.tsbuildinfo`)

---

## 5. Common Pitfalls to Production Bugs

- **Pitfall** (no type-aware lint → floating promise `load()` unhandled, `await 42` missed)
- **Consequence** (unhandled rejection in prod)

---

## 6. Interview Q and A

- **Q: Does `biome` replace `tsc`?** A: no, checker partial — `tsc --noEmit` still required
- **Q: `projectService`?** A: auto-discovery for refs, faster than `project`

---

## 7. Overlaps to Avoid

Links to sibling domains that already cover adjacent material.

Links: [08 Configuration Strictness and Build Pipeline](<../08%20Configuration%20Strictness%20and%20Build%20Pipeline/README.md>) covers build, [10 Migration Interop and Runtime Gaps](<../10%20Migration%20Interop%20and%20Runtime%20Gaps/README.md>) covers migration — lint/type-tests only here.