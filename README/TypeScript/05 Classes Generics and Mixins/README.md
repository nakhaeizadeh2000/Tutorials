## 0. Prerequisites and version map

- **Prereq** (requires [JavaScript track](<../../JavaScript/README.md>) fundamentals — types build on JS runtime; see [JS 01 Fundamentals](<../../JavaScript/01%20Fundamentals%20and%20Mental%20Model/README.md>))
- **Era** (TypeScript 5.6 era, August 2026 — [Handbook](<https://www.typescriptlang.org/docs/>) + [roadmap.sh TypeScript](<https://roadmap.sh/typescript>))
- **Overlap** (see §7 Overlaps to avoid at end)

## 1. Classes and Modifiers

### [1.1. Class Types, public private protected](<./sections/1. Classes and Modifiers/1.1. Class Types public private protected.md>)

1. **Definition** (class as type + value)
2. **Modifier** (private vs #private)
3. **Bad** (private for encapsulation only)

---

### [1.2. Abstract, Implements and Constructors](<./sections/1. Classes and Modifiers/1.2. Abstract Implements and Constructors.md>)

1. **Definition** (abstract class vs interface)
2. **Example** (implements)
3. **Tradeoff** (abstract vs composition)

---

## 2. Generics Deep Dive

### [2.1. Type Parameters, Defaults and Constraints](<./sections/2. Generics Deep Dive/2.1. Type Parameters Defaults and Constraints.md>)

1. **Definition** (<T = string>)
2. **Example** (default)
3. **Mistake** (unconstrained any)

---

### [2.2. Variance, In Out and Collections](<./sections/2. Generics Deep Dive/2.2. Variance In Out and Collections.md>)

1. **Concept** (invariance vs covariance)
2. **Example** (ReadonlyArray out)
3. **Expert** (in/out TS 4.7)

---

## 3. Mixins and Decorators

### [3.1. Mixin Pattern (class as function)](<./sections/3. Mixins and Decorators/3.1. Mixin Pattern class as function.md>)

1. **Pattern** (Ctor<T>)
2. **Example** (Timestamped mixin)
3. **Bad** (mixin over inheritance)

---

### [3.2. Decorators 5.0 (stage-3) and Metadata](<./sections/3. Mixins and Decorators/3.2. Decorators 5.0 stage-3 and Metadata.md>)

1. **Definition** (decorator as function)
2. **Modern** (TC39 vs legacy)
3. **Link** (to Tooling for lint)

---

## 4. Important Points and Mentor Checklist

### [4.1. 4.1. Class and Variance Checklist](<./sections/4. Important Points and Mentor Checklist/4.1. 4.1. Class and Variance Checklist.md>)

1. **Definition** (class as type+value, variance in/out, mixin limit)
2. **Checklist** (PR gate: #private for secret, in out, mixin ≤2)
3. **Mentor** (demo private vs #, variance with readonly)

---

## 5. Common Pitfalls to Production Bugs

### [5.1. 5.1. Private and Mixin Pitfalls](<./sections/5. Common Pitfalls to Production Bugs/5.1. 5.1. Private and Mixin Pitfalls.md>)

1. **Pitfall** (private not secret, deep mixin opaque)
2. **Consequence** (leak, unreadable hover)
3. **Guard** (prefer #private, composition)

---

## 6. Interview Q and A

### [6.1. 6.1. Interview Classes and Variance](<./sections/6. Interview Q and A/6.1. 6.1. Interview Classes and Variance.md>)

1. **Q: private vs #private?** (checker vs WeakMap)
2. **Q: Variance?** (Array invariant, ReadonlyArray covariant)
3. **Q: When abstract?** (shared state + instanceof)

---

## 7. Overlaps to Avoid

### [7.1. 7.1. Boundaries What Is Covered Elsewhere](<./sections/7. Overlaps to Avoid/7.1. 7.1. Boundaries What Is Covered Elsewhere.md>)

1. **Definition** (where stops — class/generic only, not advanced infer)
2. **Comparison** (04 for function generics, 06 for infer)
3. **Link** (how to use)

---
