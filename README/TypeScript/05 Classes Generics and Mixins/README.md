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

- **Class as type+value** (private `private` vs `#private` — TS-private erased, `#` hard)
- **Variance `in out`** (readonly `out` covariant, setter `in` contravariant, mutable invariant)
- **Mixin limit** (chain ≤2, beyond use `type &` + functions)

---

## 5. Common Pitfalls to Production Bugs

- **Pitfall** (`private` not runtime secret, deep mixin chain opaque hover `A&B&C&D`)
- **Consequence** (Nominal leak, hard-to-debug instantiation errors)

---

## 6. Interview Q and A

- **Q: `private` vs `#private`?** A: TS `private` is checker-only structural trick, `#` is WeakMap-backed
- **Q: When `abstract` vs composition?** A: abstract only for shared state + `instanceof`

---

## 7. Overlaps to Avoid

Links to sibling domains that already cover adjacent material.

Links: [04 Functions Overloads and Call Signatures](<../04%20Functions%20Overloads%20and%20Call%20Signatures/README.md>) covers function generics, [06 Advanced Types Conditional Mapped Template Literal](<../06%20Advanced%20Types%20Conditional%20Mapped%20Template%20Literal/README.md>) covers `infer` — class/generic basics here.