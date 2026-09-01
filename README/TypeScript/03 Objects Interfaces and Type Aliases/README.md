## 0. Prerequisites and version map

- **Prereq** (requires [JavaScript track](<../../JavaScript/README.md>) fundamentals — types build on JS runtime; see [JS 01 Fundamentals](<../../JavaScript/01%20Fundamentals%20and%20Mental%20Model/README.md>))
- **Era** (TypeScript 5.6 era, August 2026 — [Handbook](<https://www.typescriptlang.org/docs/>) + [roadmap.sh TypeScript](<https://roadmap.sh/typescript>))
- **Overlap** (see §7 Overlaps to avoid at end)

## 1. Objects Interfaces and Type Aliases

### [1.1. object vs Object vs {}](<./sections/1. Objects Interfaces and Type Aliases/1.1. object vs Object vs {}.md>)

1. **Distinction** (object is useful)
2. **Bad** (Object/{} accept too much)
3. **Fix** (use object or Record)

---

### [1.2. Interface vs Type Alias (when to use which)](<./sections/1. Objects Interfaces and Type Aliases/1.2. Interface vs Type Alias when to use which.md>)

1. **Comparison** (declaration merging vs alias)
2. **Good** (interface for public API)
3. **Bad** (interface for unions)

---

## 2. Properties Optionality and Readonly

### [2.1. Optional, readonly and Index Signatures](<./sections/2. Properties Optionality and Readonly/2.1. Optional readonly and Index Signatures.md>)

1. **Definition** (?: , readonly)
2. **Example** (readonly props)
3. **Mistake** (optional vs | undefined)

---

### [2.2. Excess Property Checks and Freshness](<./sections/2. Properties Optionality and Readonly/2.2. Excess Property Checks and Freshness.md>)

1. **Mechanism** (fresh object checks)
2. **Example** (extra prop error)
3. **Workaround** (intermediate variable)

---

## 3. Composition and Utility Basics

### [3.1. Composition over Inheritance (intersection for extension)](<./sections/3. Composition and Utility Basics/3.1. Composition over Inheritance intersection for extension.md>)

1. **Pattern** (type = A & B)
2. **Good** (flat types)
3. **Link** (to DesignPatterns track)

---

### [3.2. Utility Picks (Partial, Pick, Record intro)](<./sections/3. Composition and Utility Basics/3.2. Utility Picks Partial Pick Record intro.md>)

1. **Use** (Partial for updates)
2. **Bad** (any for missing props)
3. **Next** (to Advanced Types domain)

---

## 4. Important Points and Mentor Checklist

- **Precise `object` vs `Object` vs `{}`** (ban `Object`/`{}` via `ban-types`, use `object` or `Record<string,unknown>`)
- **Excess freshness** (literal checked strictly, variable structurally — teach typo `retris` demo)
- **Derive, don’t duplicate** (require `Pick`/`Omit` instead of hand-copied subsets)

---

## 5. Common Pitfalls to Production Bugs

- **Pitfall** (`object` accepts array/function, `{}` accepts primitives, `interface` for union impossible)
- **Consequence** (silent structural mix-up — `Customer` where `Product` expected)

---

## 6. Interview Q and A

- **Q: `object` vs `Object`?** A: `object` = non-primitive, `Object` = boxed legacy
- **Q: When `interface` vs `type`?** A: public API → interface (mergeable), composition/union → type

---

## 7. Overlaps to Avoid

Links to sibling domains that already cover adjacent material.

Links: [02 Primitive Literal and Union Types](<../02%20Primitive%20Literal%20and%20Union%20Types/README.md>) covers unions, [06 Advanced Types Conditional Mapped Template Literal](<../06%20Advanced%20Types%20Conditional%20Mapped%20Template%20Literal/README.md>) covers mapped types — object basics only here.