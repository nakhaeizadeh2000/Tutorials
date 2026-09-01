## 0. Prerequisites and version map

- **Prereq** (requires [JavaScript track](<../../JavaScript/README.md>) fundamentals — types build on JS runtime; see [JS 01 Fundamentals](<../../JavaScript/01%20Fundamentals%20and%20Mental%20Model/README.md>))
- **Era** (TypeScript 5.6 era, August 2026 — [Handbook](<https://www.typescriptlang.org/docs/>) + [roadmap.sh TypeScript](<https://roadmap.sh/typescript>))
- **Overlap** (see §7 Overlaps to avoid at end)

## 1. Conditional and Infer

### [1.1. Conditional Types and Distributivity](<./sections/1. Conditional and Infer/1.1. Conditional Types and Distributivity.md>)

1. **Definition** (T extends U ? X : Y)
2. **Distributive** (naked T distributes)
3. **Mistake** (forgot bracket)

---

### [1.2. Infer and Pattern Matching](<./sections/1. Conditional and Infer/1.2. Infer and Pattern Matching.md>)

1. **Definition** (infer R)
2. **Example** (ReturnType)
3. **Bad** (infer in wrong position)

---

## 2. Mapped Template Literal and Key Remapping

### [2.1. Mapped Types and Modifiers (-readonly, -?)](<./sections/2. Mapped Template Literal and Key Remapping/2.1. Mapped Types and Modifiers -readonly -.md>)

1. **Definition** ({[K in keyof T]: ...})
2. **Example** (Partial impl)
3. **Use** (homomorphic)

---

### [2.2. Template Literal Types and Intrinsic](<./sections/2. Mapped Template Literal and Key Remapping/2.2. Template Literal Types and Intrinsic.md>)

1. **Definition** (`on${Cap}`)
2. **Example** (event names)
3. **Link** (to string domain)

---

### [2.3. Key Remapping via as and Filter](<./sections/2. Mapped Template Literal and Key Remapping/2.3. Key Remapping via as and Filter.md>)

1. **Definition** (as never)
2. **Example** (Omit by pattern)
3. **Expert** (as filter)

---

## 3. Utilities and Branding

### [3.1. Utility Types (Partial, Required, Pick, Omit, etc.)](<./sections/3. Utilities and Branding/3.1. Utility Types Partial Required Pick Omit etc..md>)

1. **Catalog** (built-ins)
2. **Example** (Pick vs Extract)
3. **Bad** (re-implementing badly)

---

### [3.2. Branded and Nominal Types](<./sections/3. Utilities and Branding/3.2. Branded and Nominal Types.md>)

1. **Pattern** (brand property)
2. **Example** (UserId)
3. **Link** (to DesignPatterns)

---

## 4. Important Points and Mentor Checklist

### [4.1. Conditional and Mapped Checklist](<./sections/4. Important Points and Mentor Checklist/4.1. Conditional and Mapped Checklist.md>)

1. **Definition** (distributive, infer, key remapping as never)
2. **Checklist** (PR gate: bracket to control distribute, infer in success branch)
3. **Mentor** (demo ToArray distribute vs [T])

---

## 5. Common Pitfalls to Production Bugs

### [5.1. Distributive and Infer Pitfalls](<./sections/5. Common Pitfalls to Production Bugs/5.1. Distributive and Infer Pitfalls.md>)

1. **Pitfall** (forgot bracket, recursive conditional stack)
2. **Consequence** (never collapse, recursion limit)
3. **Guard** (keep depth shallow, test with expect-type)

---

## 6. Interview Q and A

### [6.1. Interview Advanced Types](<./sections/6. Interview Q and A/6.1. Interview Advanced Types.md>)

1. **Q: Implement Pick?** ({[P in K]: T[P]})
2. **Q: Why distribute?** (naked T loops)
3. **Q: as never?** (filter)

---

## 7. Overlaps to Avoid

### [7.1. Boundaries What Is Covered Elsewhere](<./sections/7. Overlaps to Avoid/7.1. Boundaries What Is Covered Elsewhere.md>)

1. **Definition** (where stops — advanced only, not primitives/objects)
2. **Comparison** (02/03 for basic unions/objects)
3. **Link** (how to use)

---
