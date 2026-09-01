## 0. Prerequisites and version map

- **Prereq** (requires `README/JavaScript` fundamentals — types build on JS runtime)
- **Era** (TypeScript 5.6, roadmap.sh TypeScript)
- **Overlap** (see § Overlaps to avoid at end)

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

- `08` covers tsconfig/build — not re-taught

---
