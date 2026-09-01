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

- **`target` vs `lib`** (`lib` types, `target` emit — `lib` can be newer but needs polyfill)
- **`strict`+`noUncheckedIndexedAccess`** (enable both day one; `exactOptionalPropertyTypes` stricter)
- **`composite`+`isolatedModules`** (refs for monorepo, `verbatimModuleSyntax` for single-file transpile parity)

---

## 5. Common Pitfalls to Production Bugs

- **Pitfall** (`target es5` emits helpers bloat, `allowJs:false` misses JS during migration)
- **Consequence** (bundle size + parse cost, silent JS bugs)

---

## 6. Interview Q and A

- **Q: `isolatedModules`?** A: each file transpilable alone — bans `const enum` cross-file
- **Q: `lib` polyfills runtime?** A: no, types only

---

## 7. Overlaps to Avoid

Links to sibling domains that already cover adjacent material.

Links: [07 Modules Namespaces and Declaration Files](<../07%20Modules%20Namespaces%20and%20Declaration%20Files/README.md>) covers `d.ts` emit, [09 Tooling ESLint Biome and Type-Level Testing](<../09%20Tooling%20ESLint%20Biome%20and%20Type-Level%20Testing/README.md>) covers typecheck CI — config only here.