## 0. Prerequisites and version map

- **Prereq** (requires `README/JavaScript` fundamentals — types build on JS runtime)
- **Era** (TypeScript 5.6, roadmap.sh TypeScript)
- **Overlap** (see § Overlaps to avoid at end)

## 1. What TypeScript Is and Why It Exists

### [1.1. What TypeScript Is vs JavaScript (erasable types)](<./sections/1. What TypeScript Is and Why It Exists/1.1. What TypeScript Is vs JavaScript erasable types.md>)

1. **Definition** (TS is JS plus static types erased at emit)
2. **Problem** (why JS alone fails at scale)
3. **Modern** (TS 5.6 era, handbook view)

---

### [1.2. Why Types Matter (correctness, docs, refactoring)](<./sections/1. What TypeScript Is and Why It Exists/1.2. Why Types Matter correctness docs refactoring.md>)

1. **Tradeoff** (strictness vs velocity)
2. **Bad practice** (any everywhere hides bugs)
3. **Mentor** (how to sell types to teams)

---

### [1.3. History and 5.6 Era (what is stable now)](<./sections/1. What TypeScript Is and Why It Exists/1.3. History and 5.6 Era what is stable now.md>)

1. **Version** (5.6 as of Aug 2026)
2. **Comparison** (roadmap.sh vs Handbook)
3. **Link** (to JS track for JS fundamentals)

---

## 2. Mental Model — Structural Types and Erasure

### [2.1. Structural Typing vs Nominal (duck typing at type level)](<./sections/2. Mental Model — Structural Types and Erasure/2.1. Structural Typing vs Nominal duck typing at type level.md>)

1. **Definition** (shape compatibility)
2. **Example** (branded types for nominal)
3. **Mistake** (expecting nominal by default)

---

### [2.2. Erasure and Emit (no runtime types)](<./sections/2. Mental Model — Structural Types and Erasure/2.2. Erasure and Emit no runtime types.md>)

1. **Definition** (types erased, no reflection)
2. **Problem** (trying to check types at runtime)
3. **Good** (use discriminant or codec like Zod)

---

## 3. Toolchain First Look

### [3.1. tsc, tsx and ts-node Overview (when to use which)](<./sections/3. Toolchain First Look/3.1. tsc tsx and ts-node Overview when to use which.md>)

1. **Choice** (tsc for build, tsx for dev)
2. **Bad** (ts-node without isolatedModules)
3. **Link** (to TSNode track for deep dive)

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

- `02` covers primitives/literals, `07` covers modules — not re-taught here

---
