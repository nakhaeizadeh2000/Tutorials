## 0. Prerequisites and version map

- **Prereq** (requires [JavaScript track](<../../JavaScript/README.md>) fundamentals — types build on JS runtime; see [JS 01 Fundamentals](<../../JavaScript/01%20Fundamentals%20and%20Mental%20Model/README.md>))
- **Era** (TypeScript 5.6 era, August 2026 — [Handbook](<https://www.typescriptlang.org/docs/>) + [roadmap.sh TypeScript](<https://roadmap.sh/typescript>))
- **Overlap** (see §7 Overlaps to avoid at end)

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

### [4.1. 4.1. Overloads and Generics Checklist](<./sections/4. Important Points and Mentor Checklist/4.1. 4.1. Overloads and Generics Checklist.md>)

1. **Definition** (what senior must enforce — overload vs union, void semantics, this: void)
2. **Checklist** (PR gate: overload when return changes, void ignore, this arrow/bind)
3. **Mentor** (demo void assignable, this loss live)

---

## 5. Common Pitfalls to Production Bugs

### [5.1. 5.1. Void and This Pitfalls](<./sections/5. Common Pitfalls to Production Bugs/5.1. 5.1. Void and This Pitfalls.md>)

1. **Pitfall** (floating promise, this loss, void param misuse)
2. **Consequence** (unhandled rejection, undefined this)
3. **Guard** (no-floating-promises lint, this: void, arrow)

---

## 6. Interview Q and A

### [6.1. 6.1. Interview Overloads and Async](<./sections/6. Interview Q and A/6.1. 6.1. Interview Overloads and Async.md>)

1. **Q: Why () => 42 assignable to () => void?** (void means ignore)
2. **Q: Overload vs generic?** (per-input return vs preserve caller type)
3. **Q: this: void?** (forbid this)

---

## 7. Overlaps to Avoid

### [7.1. 7.1. Boundaries What Is Covered Elsewhere](<./sections/7. Overlaps to Avoid/7.1. 7.1. Boundaries What Is Covered Elsewhere.md>)

1. **Definition** (where stops — function types only, not class generics)
2. **Comparison** (sibling 05 for class generics, 06 for infer)
3. **Link** (how to use)

---
