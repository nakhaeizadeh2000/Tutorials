## 0. Prerequisites and version map

- **Prereq** (requires [JavaScript track](<../../JavaScript/README.md>) fundamentals — types build on JS runtime; see [JS 01 Fundamentals](<../../JavaScript/01%20Fundamentals%20and%20Mental%20Model/README.md>))
- **Era** (TypeScript 5.6 era, August 2026 — [Handbook](<https://www.typescriptlang.org/docs/>) + [roadmap.sh TypeScript](<https://roadmap.sh/typescript>))
- **Overlap** (see §7 Overlaps to avoid at end)

## 1. Modules and Resolution

### [1.1. ESM vs CommonJS and Module Resolution (node16, bundler)](<./sections/1. Modules and Resolution/1.1. ESM vs CommonJS and Module Resolution node16 bundler.md>)

1. **Definition** (ESM emit)
2. **Config** (moduleResolution)
3. **Mistake** (mixed import)

---

### [1.2. Paths, BaseUrl and Monorepo Aliases](<./sections/1. Modules and Resolution/1.2. Paths BaseUrl and Monorepo Aliases.md>)

1. **Config** (paths)
2. **Example** (@/* alias)
3. **Link** (to Unified Architecture)

---

## 2. Declaration Files and Ambient

### [2.1. d.ts, DefinitelyTyped and lib](<./sections/2. Declaration Files and Ambient/2.1. d.ts DefinitelyTyped and lib.md>)

1. **Definition** (declaration emit)
2. **Example** (declare module)
3. **Bad** (manual any d.ts)

---

### [2.2. Ambient Modules and Augmentation](<./sections/2. Declaration Files and Ambient/2.2. Ambient Modules and Augmentation.md>)

1. **Definition** (declare global)
2. **Example** (window patch)
3. **Pitfall** (pollution)

---

## 3. Namespaces and Legacy

### [3.1. Namespace vs Module (when namespace is legacy)](<./sections/3. Namespaces and Legacy/3.1. Namespace vs Module when namespace is legacy.md>)

1. **History** (namespace = IIFE)
2. **Modern** (prefer module)
3. **Bad** (namespace in new code)

---

## 4. Important Points and Mentor Checklist

### [4.1. Modules and Ambient Checklist](<./sections/4. Important Points and Mentor Checklist/4.1. Modules and Ambient Checklist.md>)

1. **Definition** (nodenext vs bundler, paths mirror, declare global module-only)
2. **Checklist** (PR gate: .js extension, paths mirror in bundler, export {})
3. **Mentor** (standardize one pair per repo)

---

## 5. Common Pitfalls to Production Bugs

### [5.1. Resolution and Pollution Pitfalls](<./sections/5. Common Pitfalls to Production Bugs/5.1. Resolution and Pollution Pitfalls.md>)

1. **Pitfall** (ambient any d.ts lies, namespace in app)
2. **Consequence** (undefined default, global pollution)
3. **Guard** (skipLibCheck, no-namespace lint)

---

## 6. Interview Q and A

### [6.1. Interview Modules and Ambient](<./sections/6. Interview Q and A/6.1. Interview Modules and Ambient.md>)

1. **Q: verbatimModuleSyntax?** (explicit import type)
2. **Q: When namespace?** (legacy global d.ts only)
3. **Q: esModuleInterop?** (helper for default)

---

## 7. Overlaps to Avoid

### [7.1. Boundaries What Is Covered Elsewhere](<./sections/7. Overlaps to Avoid/7.1. Boundaries What Is Covered Elsewhere.md>)

1. **Definition** (where stops — modules only, not tsconfig/build)
2. **Comparison** (08 for tsconfig, 09 for lint)
3. **Link** (how to use)

---
