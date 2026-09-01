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

- **`nodenext` vs `bundler`** (Node→`.js` in import, bundler lenient — standardize one pair per repo)
- **`paths` mirror** (checker-only, bundler/Node must also resolve — `tsc-alias` or `imports`)
- **`declare global` only in module** (add `export {}` else augmentation ignored)

---

## 5. Common Pitfalls to Production Bugs

- **Pitfall** (ambient `declare module "foo" { any }` lies, `namespace` in app breaks `isolatedModules`)
- **Consequence** (runtime `undefined` default import, global pollution)

---

## 6. Interview Q and A

- **Q: `verbatimModuleSyntax`?** A: explicit `import type`, no elision surprise
- **Q: When `namespace`?** A: legacy global lib d.ts only

---

## 7. Overlaps to Avoid

Links to sibling domains that already cover adjacent material.

Links: [08 Configuration Strictness and Build Pipeline](<../08%20Configuration%20Strictness%20and%20Build%20Pipeline/README.md>) covers `tsconfig`/`composite`, [09 Tooling ESLint Biome and Type-Level Testing](<../09%20Tooling%20ESLint%20Biome%20and%20Type-Level%20Testing/README.md>) covers lint — modules only here.