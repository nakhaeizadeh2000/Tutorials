## 0. Prerequisites and version map

- **Prereq** (requires `README/JavaScript` fundamentals — types build on JS runtime)
- **Era** (TypeScript 5.6, roadmap.sh TypeScript)
- **Overlap** (see § Overlaps to avoid at end)

## 1. Objects, Interfaces and Type Aliases

### [1.1. object vs Object vs {}](<./sections/1. Objects, Interfaces and Type Aliases/1.1. object vs Object vs {}.md>)

1. **Distinction** (object is useful)
2. **Bad** (Object/{} accept too much)
3. **Fix** (use object or Record)

---

### [1.2. Interface vs Type Alias (when to use which)](<./sections/1. Objects, Interfaces and Type Aliases/1.2. Interface vs Type Alias when to use which.md>)

1. **Comparison** (declaration merging vs alias)
2. **Good** (interface for public API)
3. **Bad** (interface for unions)

---

## 2. Properties, Optionality and Readonly

### [2.1. Optional, readonly and Index Signatures](<./sections/2. Properties, Optionality and Readonly/2.1. Optional readonly and Index Signatures.md>)

1. **Definition** (?: , readonly)
2. **Example** (readonly props)
3. **Mistake** (optional vs | undefined)

---

### [2.2. Excess Property Checks and Freshness](<./sections/2. Properties, Optionality and Readonly/2.2. Excess Property Checks and Freshness.md>)

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

- `02` covers unions, `06` covers mapped types — see there

---
