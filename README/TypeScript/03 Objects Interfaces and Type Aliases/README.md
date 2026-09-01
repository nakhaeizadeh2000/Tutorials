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

### [4.1. 4.1. Objects and Interfaces Checklist](<./sections/4. Important Points and Mentor Checklist/4.1. 4.1. Objects and Interfaces Checklist.md>)

1. **Definition** (what senior must enforce — object vs Object vs {}, interface vs type, freshness)
2. **Checklist** (PR gate: ban Object/{}, require derive via Pick/Omit, check excess)
3. **Mentor** (how to teach structural vs nominal with demo)

---

## 5. Common Pitfalls to Production Bugs

### [5.1. 5.1. Excess and Wrapper Pitfalls](<./sections/5. Common Pitfalls to Production Bugs/5.1. 5.1. Excess and Wrapper Pitfalls.md>)

1. **Pitfall** (Object accepts primitives, interface for union impossible)
2. **Consequence** (silent structural mix-up, excess typo hidden via staleness)
3. **Guard** (ban-types lint, satisfy vs as, Pick vs manual)

---

## 6. Interview Q and A

### [6.1. 6.1. Interview Objects and Types](<./sections/6. Interview Q and A/6.1. 6.1. Interview Objects and Types.md>)

1. **Q: object vs Object?** (non-primitive vs boxed legacy)
2. **Q: When interface vs type?** (public API interface, union type)
3. **Q: Excess check?** (fresh literal strictly, variable structurally)

---

## 7. Overlaps to Avoid

### [7.1. 7.1. Boundaries What Is Covered Elsewhere](<./sections/7. Overlaps to Avoid/7.1. 7.1. Boundaries What Is Covered Elsewhere.md>)

1. **Definition** (where this domain stops — objects only, not primitives or advanced mapped)
2. **Comparison** (sibling domains for unions, advanced utilities)
3. **Link** (how to use in track order)

---
