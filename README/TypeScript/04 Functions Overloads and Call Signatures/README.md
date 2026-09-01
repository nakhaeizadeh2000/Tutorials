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

- **Overload vs union** (overload when return changes per input, union when return same)
- **Void semantics** (`void` = caller ignores return, not `undefined`; `() => void` accepts `() => number`)
- **`this: void`** (type callbacks with `this: void` to forbid `this`, fix loss with arrow/bind)

---

## 5. Common Pitfalls to Production Bugs

- **Pitfall** (floating promise without `no-floating-promises`, `this` loss passing method as callback)
- **Consequence** (unhandled rejection, `this` is `undefined` at call)

---

## 6. Interview Q and A

- **Q: Why is `() => 42` assignable to `() => void`?** A: `void` means caller ignores
- **Q: When overload over generic?** A: overload for per-input return narrowing, generic for preserving caller type

---

## 7. Overlaps to Avoid

Links to sibling domains that already cover adjacent material.

Links: [05 Classes Generics and Mixins](<../05%20Classes%20Generics%20and%20Mixins/README.md>) covers class generics, [06 Advanced Types Conditional Mapped Template Literal](<../06%20Advanced%20Types%20Conditional%20Mapped%20Template%20Literal/README.md>) covers `infer` — function basics only.