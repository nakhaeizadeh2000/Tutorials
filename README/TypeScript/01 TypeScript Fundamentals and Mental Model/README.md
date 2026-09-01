## 0. Prerequisites and version map

- **Prereq** (requires [JavaScript track](<../../JavaScript/README.md>) fundamentals — types build on JS runtime; see [JS 01 Fundamentals](<../../JavaScript/01%20Fundamentals%20and%20Mental%20Model/README.md>))
- **Era** (TypeScript 5.6 era, August 2026 — [Handbook](<https://www.typescriptlang.org/docs/>) + [roadmap.sh TypeScript](<https://roadmap.sh/typescript>))
- **Overlap** (see §7 Overlaps to avoid at end)

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

### [4.1. Erasable Mental Model and Strict-First Checklist](<./sections/4. Important Points and Mentor Checklist/4.1. Erasable Mental Model and Strict-First Checklist.md>)

1. **Definition** (what senior must enforce — erasure, strict, toolchain split)
2. **Checklist** (PR gate: strict, no any/!/as, Zod at boundary)
3. **Mentor** (how to teach erasure live)

---

## 5. Common Pitfalls to Production Bugs

### [5.1. Boundary Assertion Pitfalls](<./sections/5. Common Pitfalls to Production Bugs/5.1. Boundary Assertion Pitfalls.md>)

1. **Pitfall** (as at boundary lies, any hides bugs)
2. **Consequence** (runtime TypeError despite zero type errors)
3. **Guard** (ban any/!/as at PR, require Zod/isUser)

---

## 6. Interview Q and A

### [6.1. Interview Questions Erasure and Toolchain](<./sections/6. Interview Q and A/6.1. Interview Questions Erasure and Toolchain.md>)

1. **Q: Why does typeof null affect TS?** (quirk preserved, strictNullChecks)
2. **Q: Erasable types cost?** (zero runtime, checker only)
3. **Q: When to use any?** (never in app, unknown + narrow)

---

## 7. Overlaps to Avoid

### [7.1. Boundaries What Is Covered Elsewhere](<./sections/7. Overlaps to Avoid/7.1. Boundaries What Is Covered Elsewhere.md>)

1. **Definition** (where this domain stops — erasure/toolchain only)
2. **Comparison** (sibling domains for primitives, objects, modules, config)
3. **Link** (how to use this domain in track order)