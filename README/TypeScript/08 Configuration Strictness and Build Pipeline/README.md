## 0. Prerequisites and version map

- **Prereq** (requires [JavaScript track](<../../JavaScript/README.md>) fundamentals — types build on JS runtime; see [JS 01 Fundamentals](<../../JavaScript/01%20Fundamentals%20and%20Mental%20Model/README.md>))
- **Era** (TypeScript 5.6 era, August 2026 — [Handbook](<https://www.typescriptlang.org/docs/>) + [roadmap.sh TypeScript](<https://roadmap.sh/typescript>))
- **Overlap** (see §7 Overlaps to avoid at end)

## 1. tsconfig Foundations

### [1.1. Target, Module, Lib and Emit](<./sections/1. tsconfig Foundations/1.1. Target Module Lib and Emit.md>)

1. **Definition** (target)
2. **Example** (es2022)
3. **Tradeoff** (emit vs type-only)

---

### [1.2. Strict Family (strict, noImplicitAny, strictNullChecks)](<./sections/1. tsconfig Foundations/1.2. Strict Family strict noImplicitAny strictNullChecks.md>)

1. **Definition** (strict)
2. **Bad** (non-strict at scale)
3. **Mentor** (enable strict early)

---

## 2. Project References and Build

### [2.1. Project References and Composite](<./sections/2. Project References and Build/2.1. Project References and Composite.md>)

1. **Definition** (composite)
2. **Example** (monorepo refs)
3. **Link** (to Unified)

---

### [2.2. IsolatedModules, TranspileOnly and SWC/esbuild](<./sections/2. Project References and Build/2.2. IsolatedModules TranspileOnly and SWC esbuild.md>)

1. **Definition** (isolatedModules)
2. **Example** (SWC)
3. **Bad** (const enum without isolation)

---

## 3. Publishing and Versioning

### [3.1. Declaration Maps, Source Maps and Publishing](<./sections/3. Publishing and Versioning/3.1. Declaration Maps Source Maps and Publishing.md>)

1. **Config** (declarationMap)
2. **Example** (npm publish)
3. **Pitfall** (missing .d.ts)

---

## 4. Important Points and Mentor Checklist

### [4.1. 4.1. tsconfig and Build Checklist](<./sections/4. Important Points and Mentor Checklist/4.1. 4.1. tsconfig and Build Checklist.md>)

1. **Definition** (target vs lib, strict+noUnchecked, composite+isolated)
2. **Checklist** (PR gate: target es2022, strict + noUnchecked, isolatedModules)
3. **Mentor** (demo target helper bloat)

---

## 5. Common Pitfalls to Production Bugs

### [5.1. 5.1. Target and Isolated Pitfalls](<./sections/5. Common Pitfalls to Production Bugs/5.1. 5.1. Target and Isolated Pitfalls.md>)

1. **Pitfall** (target es5 bloat, allowJs false misses JS)
2. **Consequence** (bundle size, silent JS bugs)
3. **Guard** (baseline via browserslist, allowJs true during migration)

---

## 6. Interview Q and A

### [6.1. 6.1. Interview Config and Build](<./sections/6. Interview Q and A/6.1. 6.1. Interview Config and Build.md>)

1. **Q: isolatedModules?** (single-file transpile)
2. **Q: lib polyfills?** (no, types only)
3. **Q: composite?** (refs incremental)

---

## 7. Overlaps to Avoid

### [7.1. 7.1. Boundaries What Is Covered Elsewhere](<./sections/7. Overlaps to Avoid/7.1. 7.1. Boundaries What Is Covered Elsewhere.md>)

1. **Definition** (where stops — config only, not modules/lint)
2. **Comparison** (07 for d.ts, 09 for lint)
3. **Link** (how to use)

---
