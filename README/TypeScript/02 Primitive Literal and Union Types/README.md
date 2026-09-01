## 0. Prerequisites and version map

- **Prereq** (requires [JavaScript track](<../../JavaScript/README.md>) fundamentals — types build on JS runtime; see [JS 01 Fundamentals](<../../JavaScript/01%20Fundamentals%20and%20Mental%20Model/README.md>))
- **Era** (TypeScript 5.6 era, August 2026 — [Handbook](<https://www.typescriptlang.org/docs/>) + [roadmap.sh TypeScript](<https://roadmap.sh/typescript>))
- **Overlap** (see §7 Overlaps to avoid at end)

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

## 2. Unions Intersections and Narrowing

### [2.1. Union Types and Discriminants](<./sections/2. Unions Intersections and Narrowing/2.1. Union Types and Discriminants.md>)

1. **Definition** (A | B)
2. **Good** (discriminant property)
3. **Bad** (non-discriminated unions)

---

### [2.2. Intersection and Never](<./sections/2. Unions Intersections and Narrowing/2.2. Intersection and Never.md>)

1. **Definition** (A & B)
2. **Use** (mixins)
3. **Pitfall** (never from impossible)

---

### [2.3. Control-Flow Narrowing (if, in, typeof)](<./sections/2. Unions Intersections and Narrowing/2.3. Control-Flow Narrowing if in typeof.md>)

1. **Mechanism** (control flow analysis)
2. **Example** (typeof guard)
3. **Expert** (assertion functions)

---

## 3. Enums Tuples and Special Primitives

### [3.1. Enums vs Union Literals (when enums hurt)](<./sections/3. Enums Tuples and Special Primitives/3.1. Enums vs Union Literals when enums hurt.md>)

1. **Tradeoff** (enum emit vs union)
2. **Bad** (ambient enums)
3. **Mentor** (prefer union literals)

---

### [3.2. Tuples, readonly and Labels](<./sections/3. Enums Tuples and Special Primitives/3.2. Tuples readonly and Labels.md>)

1. **Definition** (fixed-length arrays)
2. **Example** (labeled tuples)
3. **Link** (to Collections domain)

---

## 4. Important Points and Mentor Checklist

### [4.1. Literal Union and Tuple Checklist](<./sections/4. Important Points and Mentor Checklist/4.1. Literal Union and Tuple Checklist.md>)

1. **Definition** (what senior must enforce — literals, unions, tuples)
2. **Checklist** (PR gate: as const, discriminant, readonly)
3. **Mentor** (how to teach widening)

---

## 5. Common Pitfalls to Production Bugs

### [5.1. Wrapper and Widening Pitfalls](<./sections/5. Common Pitfalls to Production Bugs/5.1. Wrapper and Widening Pitfalls.md>)

1. **Pitfall** (wrapper types and widening)
2. **Consequence** (runtime wrong branch, any hiding)
3. **Guard** (lint + as const)

---

## 6. Interview Q and A

### [6.1. Interview Questions Unions and Literals](<./sections/6. Interview Q and A/6.1. Interview Questions Unions and Literals.md>)

1. **Q: Union A|B vs intersection A&B?** (or vs and)
2. **Q: Why does ToArray distribute?** (naked T)
3. **Q: When enum vs union literal?** (union preferred)

---

## 7. Overlaps to Avoid

### [7.1. Boundaries What Is Covered Elsewhere](<./sections/7. Overlaps to Avoid/7.1. Boundaries What Is Covered Elsewhere.md>)

1. **Definition** (where this domain stops)
2. **Comparison** (sibling domains)
3. **Link** (how to use)