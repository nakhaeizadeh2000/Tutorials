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

### [4.1. 4.1. Lint and Type-Test Checklist](<./sections/4. Important Points and Mentor Checklist/4.1. 4.1. Lint and Type-Test Checklist.md>)

1. **Definition** (Biome speed vs typescript-eslint depth, organizeImports, tsc gate)
2. **Checklist** (PR gate: biome check + eslint typed + tsc --noEmit required)
3. **Mentor** (document which rule from which tool)

---

## 5. Common Pitfalls to Production Bugs

### [5.1. 5.1. Type-Aware Lint Pitfalls](<./sections/5. Common Pitfalls to Production Bugs/5.1. 5.1. Type-Aware Lint Pitfalls.md>)

1. **Pitfall** (no type-aware lint → floating promise missed)
2. **Consequence** (unhandled rejection)
3. **Guard** (projectService, no-floating-promises)

---

## 6. Interview Q and A

### [6.1. 6.1. Interview Tooling and CI](<./sections/6. Interview Q and A/6.1. 6.1. Interview Tooling and CI.md>)

1. **Q: Biome replace tsc?** (no, partial)
2. **Q: projectService?** (auto-discovery for refs)
3. **Q: expect-type?** (type-level test via tsc)

---

## 7. Overlaps to Avoid

### [7.1. 7.1. Boundaries What Is Covered Elsewhere](<./sections/7. Overlaps to Avoid/7.1. 7.1. Boundaries What Is Covered Elsewhere.md>)

1. **Definition** (where stops — lint only, not build/migration)
2. **Comparison** (08 for build, 10 for migration)
3. **Link** (how to use)

---
