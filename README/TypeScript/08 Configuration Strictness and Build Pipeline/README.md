## 0. Prerequisites and version map

- **Prereq** (requires `README/JavaScript` fundamentals — types build on JS runtime)
- **Era** (TypeScript 5.6, roadmap.sh TypeScript)
- **Overlap** (see § Overlaps to avoid at end)

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

### [2.2. IsolatedModules, TranspileOnly and SWC/esbuild](<./sections/2. Project References and Build/2.2. IsolatedModules, TranspileOnly and SWC/esbuild.md>)

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

- `07` covers declaration files, `09` covers lint — not duplicated

---
