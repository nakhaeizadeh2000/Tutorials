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

- **Erasable mental model** (demo .ts→.js emit, require discriminant/Zod at every unknown boundary)
- **Strict-first** (enable `strict` + `noUncheckedIndexedAccess` from day one, teach `unknown` vs `any`)
- **Toolchain split** (tsx for run, `tsc --noEmit` for check — two processes, never conflate)

---

## 5. Common Pitfalls to Production Bugs

- **Pitfall** (`as` at boundary lies, `any` everywhere hides bugs) — still compiles but crashes at `email.toLowerCase()`
- **Consequence** (runtime TypeError despite zero type errors) — validate once at edge, trust inside
- **Guard** (ban `any`/`!`/`as` at PR, require `Zod`/`isUser` guard)

---

## 6. Interview Q and A

- **Q: Why does `typeof null === "object"` still affect TS?** A: JS runtime quirk preserved; TS types `object` correctly rejects `null` via `strictNullChecks`
- **Q: Erasable types cost?** A: Zero runtime, checker cost only — measure `tsc --extendedDiagnostics`
- **Q: When to use `any`?** A: Never in app code; `unknown` + narrow

---

## 7. Overlaps to Avoid

Links to sibling domains that already cover adjacent material.

Links to sibling domains: [02 Primitive Literal and Union Types](<../02%20Primitive%20Literal%20and%20Union%20Types/README.md>) covers primitives/literals, [07 Modules Namespaces and Declaration Files](<../07%20Modules%20Namespaces%20and%20Declaration%20Files/README.md>) covers module resolution — not re-taught here.