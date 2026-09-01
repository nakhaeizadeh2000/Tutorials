## 0. Prerequisites and version map

- **Prereq** (requires `README/JavaScript` fundamentals — types build on JS runtime)
- **Era** (TypeScript 5.6, roadmap.sh TypeScript)
- **Overlap** (see § Overlaps to avoid at end)

## 1. Primitives and Literals

### [1.1. Primitives string number boolean bigint symbol](<./sections/1. Primitives and Literals/1.1. Primitives string number boolean bigint symbol.md>)

1. **Definition** (JS primitives mapped to TS)
2. **Literal** ("GET" vs string)
3. **Bad** (Object wrapper types)

---

### [1.2. Literal Types and const Assertions](<./sections/1. Primitives and Literals/1.2. Literal Types and const Assertions.md>)

1. **Definition** (value as type)
2. **Example** (as const narrowing)
3. **Mistake** (widening surprises)

---

## 2. Unions, Intersections and Narrowing

### [2.1. Union Types and Discriminants](<./sections/2. Unions, Intersections and Narrowing/2.1. Union Types and Discriminants.md>)

1. **Definition** (A | B)
2. **Good** (discriminant property)
3. **Bad** (non-discriminated unions)

---

### [2.2. Intersection and Never](<./sections/2. Unions, Intersections and Narrowing/2.2. Intersection and Never.md>)

1. **Definition** (A & B)
2. **Use** (mixins)
3. **Pitfall** (never from impossible)

---

### [2.3. Control-Flow Narrowing (if, in, typeof)](<./sections/2. Unions, Intersections and Narrowing/2.3. Control-Flow Narrowing if in typeof.md>)

1. **Mechanism** (control flow analysis)
2. **Example** (typeof guard)
3. **Expert** (assertion functions)

---

## 3. Enums, Tuples and Special Primitives

### [3.1. Enums vs Union Literals (when enums hurt)](<./sections/3. Enums, Tuples and Special Primitives/3.1. Enums vs Union Literals when enums hurt.md>)

1. **Tradeoff** (enum emit vs union)
2. **Bad** (ambient enums)
3. **Mentor** (prefer union literals)

---

### [3.2. Tuples, readonly and Labels](<./sections/3. Enums, Tuples and Special Primitives/3.2. Tuples readonly and Labels.md>)

1. **Definition** (fixed-length arrays)
2. **Example** (labeled tuples)
3. **Link** (to Collections domain)

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

- `03` covers objects/interfaces, `06` covers utilities — not duplicated

---
