## 0. Prerequisites and version map

- **Prereq** (requires `README/JavaScript` fundamentals — types build on JS runtime)
- **Era** (TypeScript 5.6, roadmap.sh TypeScript)
- **Overlap** (see § Overlaps to avoid at end)

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

- `04` covers function generics, `06` covers infer — not duplicated

---
