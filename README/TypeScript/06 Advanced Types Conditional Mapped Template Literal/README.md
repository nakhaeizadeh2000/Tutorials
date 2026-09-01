## 0. Prerequisites and version map

- **Prereq** (requires `README/JavaScript` fundamentals — types build on JS runtime)
- **Era** (TypeScript 5.6, roadmap.sh TypeScript)
- **Overlap** (see § Overlaps to avoid at end)

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

## 2. Mapped, Template Literal and Key Remapping

### [2.1. Mapped Types and Modifiers (-readonly, -?)](<./sections/2. Mapped, Template Literal and Key Remapping/2.1. Mapped Types and Modifiers -readonly -.md>)

1. **Definition** ({[K in keyof T]: ...})
2. **Example** (Partial impl)
3. **Use** (homomorphic)

---

### [2.2. Template Literal Types and Intrinsic](<./sections/2. Mapped, Template Literal and Key Remapping/2.2. Template Literal Types and Intrinsic.md>)

1. **Definition** (`on${Cap}`)
2. **Example** (event names)
3. **Link** (to string domain)

---

### [2.3. Key Remapping via as and Filter](<./sections/2. Mapped, Template Literal and Key Remapping/2.3. Key Remapping via as and Filter.md>)

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

- `02`/`03` cover basic unions/objects — this domain is advanced only

---
