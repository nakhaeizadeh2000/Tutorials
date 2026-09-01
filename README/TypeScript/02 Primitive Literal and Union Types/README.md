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

- **Literal vs wrapper** (enforce `string` not `String` via `no-wrapper-object-types`, use `as const` for literals)
- **Exhaustiveness** (discriminant `kind` + `never` check — adding variant is compile error)
- **Tuple readonly** (default to `readonly [A,B]` — prevents `push` length-violation)

---

## 5. Common Pitfalls to Production Bugs

- **Pitfall** (`const enum` without `isolatedModules`, `let x = "hi"` widening to `string`) — typo not caught
- **Consequence** (runtime `undefined`/`never` from impossible intersection, floating `any` from `Object`)

---

## 6. Interview Q and A

- **Q: Union `A|B` vs intersection `A&B`?** A: union = or, intersection = and — Venn
- **Q: Why does `ToArray<string|number>` become `string[]|number[]`?** A: distributive naked `T`

---

## 7. Overlaps to Avoid

Links to sibling domains that already cover adjacent material.

Links: [03 Objects Interfaces and Type Aliases](<../03%20Objects%20Interfaces%20and%20Type%20Aliases/README.md>) covers object shapes and excess checks, [06 Advanced Types Conditional Mapped Template Literal](<../06%20Advanced%20Types%20Conditional%20Mapped%20Template%20Literal/README.md>) covers advanced utilities — this domain is primitives/unions only.