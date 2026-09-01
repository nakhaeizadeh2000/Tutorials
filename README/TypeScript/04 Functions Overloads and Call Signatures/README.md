## 0. Prerequisites and version map

- **Prereq** (requires `README/JavaScript` fundamentals — types build on JS runtime)
- **Era** (TypeScript 5.6, roadmap.sh TypeScript)
- **Overlap** (see § Overlaps to avoid at end)

## 1. Function Types and Context

### [1.1. Function Type Expressions and Call Signatures](<./sections/1. Function Types and Context/1.1. Function Type Expressions and Call Signatures.md>)

1. **Definition** ((x: string) => number)
2. **Context** (contextual typing)
3. **Mistake** (bivariance pitfall)

---

### [1.2. Optional, Rest and Void](<./sections/1. Function Types and Context/1.2. Optional Rest and Void.md>)

1. **Definition** (optional param vs overload)
2. **Example** (rest tuple types)
3. **Bad** (void misused)

---

## 2. Overloads and Generics in Functions

### [2.1. Overload Signatures (when overloads help)](<./sections/2. Overloads and Generics in Functions/2.1. Overload Signatures when overloads help.md>)

1. **Definition** (multiple call shapes)
2. **Good** (narrow overloads)
3. **Bad** (overload for union)

---

### [2.2. Generic Functions and Constraints](<./sections/2. Overloads and Generics in Functions/2.2. Generic Functions and Constraints.md>)

1. **Definition** (<T extends string>)
2. **Example** (generic factory)
3. **Link** (to Classes Generics domain)

---

## 3. This Callbacks and Async Functions

### [3.1. this Parameter and Callback Variance](<./sections/3. This Callbacks and Async Functions/3.1. this Parameter and Callback Variance.md>)

1. **Definition** (this: void)
2. **Pitfall** (this loss in callback)
3. **Fix** (arrow or bind)

---

### [3.2. Async Functions and Promise Typing](<./sections/3. This Callbacks and Async Functions/3.2. Async Functions and Promise Typing.md>)

1. **Definition** (Promise<T>)
2. **Example** (typed async)
3. **Mistake** (Promise<any>)

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

- `05` covers generics in classes, `06` covers conditional types — not duplicated

---
