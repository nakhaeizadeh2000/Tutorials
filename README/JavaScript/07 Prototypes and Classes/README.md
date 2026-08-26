# Prototypes and Classes

From delegation to `class`: how prototype chains delegate, how `new` and constructors wire `[[Prototype]]`, how `class`/`extends`/`super` sugar that wiring, how private `#fields` create brand-checked encapsulation, and how `instanceof` really tests a chain — with the composition alternatives and checklist mentors insist on.

## 0. Prerequisites

[Objects in Depth](<../06 Objects in Depth/README.md>) for [property descriptors](<../06 Objects in Depth/sections/2. Properties and descriptors/2.1. Data vs accessor descriptors and attribute defaults.md>), [prototype linkage intro](<../06 Objects in Depth/sections/3. Prototype linkage intro/3.1. The prototype chain getPrototypeOf setPrototypeOf and Object.create.md>), [creation patterns](<../06 Objects in Depth/sections/1. Object creation and literals/1.2. Creation patterns literal Object create and constructors.md>), and [enumerability](<../06 Objects in Depth/sections/2. Properties and descriptors/2.3. Enumerability enumeration order and for-in mechanics.md>); [Functions Deep Dive](<../05 Functions Deep Dive/README.md>) for [methods and `super` in concise methods](<../05 Functions Deep Dive/sections/1. Function forms and the function object/1.3. Methods getters setters and the function object.md>) and [this binding + new](<../05 Functions Deep Dive/sections/3. this binding/3.1. Call-site rules default implicit explicit new and strict mode.md>); [Variables, Scope, and Closures](<../04 Variables Scope and Closures/README.md>) for [lexical scope](<../04 Variables Scope and Closures/sections/2. Scope and lookup/2.1. Lexical scope and the scope chain how name lookup works.md>).

---

## 1. Prototype delegation

### [1.1. Delegation mechanics: lookup, shadowing, and dynamic updates](<./sections/1. Prototype delegation/1.1. Delegation mechanics lookup shadowing and dynamic updates.md>)

1. **Lookup walks `[[Prototype]]` until `null`** (own misses delegate live — prototype additions after birth are visible instantly).
2. **Shadowing creates an own slot that hides the prototype** (own data shadows prototype data; own accessor shadows prototype accessor — assignment triggers differently).
3. **Delegation is sharing, not copying** (methods live once on the prototype; `this` still points to the receiver).

### [1.2. Creation, mutation, and performance costs](<./sections/1. Prototype delegation/1.2. Creation mutation and performance costs.md>)

1. **Birth sets the link; mutation deoptimizes** (`Object.create`, literal `__proto__`, `new`+`prototype` are fast; `setPrototypeOf`/`__proto__=` is slow).
2. **`Object.prototype` is the root of most chains** (`null`-prototype dictionaries opt out for pollution safety).
3. **Hidden classes key on prototype** (mutating the link per instance forces megamorphic lookups — measure, don't guess).

---

## 2. Constructors and new

### [2.1. The new operator: prototype property, new.target, and return override](<./sections/2. Constructors and new/2.1. The new operator prototype property new.target and return override.md>)

1. **`new F()` allocates, links, calls, then chooses the return** (empty object with `[[Prototype]] = F.prototype`, `this` bound, result is `this` unless constructor returns an object).
2. **`.prototype` is the template, not the function's own prototype** (`F.prototype` vs `Object.getPrototypeOf(F)` — classic confusion, measurable with `instanceof`).
3. **`new.target` reveals the actual constructor called** (enables abstract-base checks and correct subclassing without `instanceof`).

### [2.2. Constructor discipline vs factories](<./sections/2. Constructors and new/2.2. Constructor discipline vs factory trade offs.md>)

1. **Constructors share methods; factories close over state** (prototype sharing vs per-instance closure — memory and `instanceof` trade-offs).
2. **Forgetting `new` is a bug in sloppy mode and a TypeError in class land** (capital naming, `new.target` guard, or factory wrapper).
3. **When to pick which** (data bags → literals; shared behavior + `instanceof` → constructors/classes; true privacy without `#` → factories).

---

## 3. Class syntax

### [3.1. Class basics: declarations, hoisting, methods, accessors, and fields](<./sections/3. Class syntax/3.1. Class basics declarations hoisting methods accessors and fields.md>)

1. **`class` is sugar over constructor + prototype — with real differences** (always strict, non-enumerable methods, TDZ like `let`, must be called with `new`).
2. **Instance fields, accessors, and computed names** (per-instance `field = value` runs after `super()`; accessors remain accessors on `prototype`).
3. **Common misread: class hoisting** (like `let`, not like `function` — early use throws `ReferenceError`).

### [3.2. Extends and super: chain wiring and obligations](<./sections/3. Class syntax/3.2. Extends and super chain wiring and obligations.md>)

1. **`extends` wires two chains** (instance `[[Prototype]]` via `Child.prototype.__proto__ = Parent.prototype`, and constructor chain `Child.__proto__ = Parent` for static inheritance).
2. **`super()` must run before `this` in derived constructors** (brand and allocation happen in parent; touching `this` early throws).
3. **`super.prop` inside methods follows the home object's prototype** (not the receiver's chain — static vs instance `super` resolve differently).

### [3.3. Private fields and methods: brand checks and encapsulation](<./sections/3. Class syntax/3.3. Private fields and methods brand checks and encapsulation.md>)

1. **`#field` is per-instance, name-based, and truly private** (no string reflection, no `Object.keys`, not inherited by name — per class).
2. **Access outside the declaring class always throws — the brand check** (`#field in obj` tests brand without throwing; cross-class access is a SyntaxError/TypeError).
3. **Private is not `WeakMap` and not `enumerable` — performance and serialization consequences** (JSON skips `#fields`; `structuredClone` respects them).

### [3.4. Static members, static blocks, and field evaluation order](<./sections/3. Class syntax/3.4. Static members static blocks and class field order.md>)

1. **Static fields/methods live on the constructor** (not the prototype — `Child` statics inherit via `Child.__proto__ = Parent`).
2. **`static {}` runs once at class evaluation, with access to private names** (initialization that needs `this` or private scope).
3. **Field order matters** (instance fields before constructor body; static fields top-to-bottom; derived class order with `super()`).

---

## 4. Composition and mixins

### [4.1. Mixins and composition patterns](<./sections/4. Composition and mixins/4.1. Mixins and composition patterns.md>)

1. **Mixin as function that returns a subclass** (`const Mixed = Mixin(Base)` — composes chains without multiple inheritance).
2. **Object-level mixins via `Object.assign` on prototypes** (shallow copy of method descriptors — handle non-enumerable/accessors correctly).
3. **Composition vs inheritance decision table** (has-a vs is-a, trait reuse vs taxonomy — why mixins beat deep hierarchies).

---

## 5. Type checks and reflection

### [5.1. instanceof, isPrototypeOf, Symbol.hasInstance, and cross-realm failures](<./sections/5. Type checks and reflection/5.1. instanceof isPrototypeOf Symbol.hasInstance and cross-realm failures.md>)

1. **`instanceof` walks `prototype` at call time** (not the instance's birth `prototype` — reassigned `A.prototype` breaks earlier instances).
2. **Cross-realm and `iframe`/`vm` prototypes fail `instanceof`** (different `Array` copy, different `.prototype` object — use brand checks or `Array.isArray`).
3. **`Symbol.hasInstance` customizes `instanceof`** (and `#field in obj` for private brands vs duck-typing).

---

## 6. Important points to remember (prototypes and classes)

### [6.1. Prototype and class checklist: reflex rules mentors screen for](<./sections/6. Important points to remember/6.1. Prototype and class checklist reflex rules mentors screen for.md>)

1. **`[[Prototype]]` vs `.prototype` vs `__proto__` — never conflate** (slot vs template vs accessor).
2. **`new` + `super()` obligations and field order** (the 3 checks every derived class must pass).
3. **The review grep list** (`delete` on prototype, `setPrototypeOf` in hot paths, `instanceof` across realms, missing `#` brand guard).

---

## 7. Common pitfalls → production bugs

### [7.1. Real production bugs caused by prototype and class mistakes](<./sections/7. Common pitfalls to production bugs/7.1. Real production bugs caused by prototype and class mistakes.md>)

1. **Forgotten `new` / `super()` ordering** (from `undefined` writes to `ReferenceError` in derived constructors).
2. **Shared mutable prototype state** (arrays/objects on prototype become accidental cross-instance globals).
3. **Private field brand confusion and `this` loss in callbacks** (detached method loses receiver and fails brand check — same fix taxonomy as functions).

---

## 8. Interview questions and answers (prototypes and classes)

### [8.1. Common interview Q&A: prototypes, classes, and inheritance](<./sections/8. Interview questions and answers/8.1. Common interview QA prototypes classes and inheritance.md>)

1. **The classics with mechanism-level answers** (`__proto__` vs `.prototype`, `new` steps, `super` wiring, `#field` privacy, `instanceof` vs `isPrototypeOf`).
2. **What interviewers actually probe for** (tracing chain walks, not reciting `class` sugar).
3. **Grading guidance** (junior/mid/senior signals, red flags like "classes are unrelated to prototypes").

---

## 9. Overlaps to avoid (where this domain stops)

### [9.1. Boundaries: what is covered elsewhere](<./sections/9. Overlaps to avoid/9.1. Boundaries what is covered elsewhere.md>)

1. **Property descriptors, `Object.*` utilities, and immutability** — Objects in Depth domain.
2. **`this` binding rules, arrow `this`, and call/apply/bind** — Functions Deep Dive domain.
3. **Collections, iterables, async, and modules** — upcoming data-structure and async domains.

---

[← Back to JavaScript track](<../README.md>)
