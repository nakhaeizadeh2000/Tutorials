# Classes and Object-Oriented Types

How TypeScript types the only *blueprint* that is both a value and a type — classes: instance vs static sides, constructors, access modifiers, inheritance (`extends`/`implements`), `abstract` and `override`, polymorphic `this`, generics on classes, static blocks, and composition via mixins. Runtime processing depends on the chosen syntax and pipeline; class annotations do not validate inputs. Runtime prototype mechanics live in [JavaScript 07 Prototypes and Classes](<../../JavaScript/07 Prototypes and Classes/README.md>).

## 0. Prerequisites

[01 Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) — especially [2.1. Type erasure](<../01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.1. Type erasure what survives compilation.md>) (all class-type syntax erases) and [3.3. Choosing erasable syntax](<../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>) (`class` modifiers erase under `--erasableSyntaxOnly`). [02 The Type System Core](<../02 The Type System Core/README.md>) — [1.1. Structural assignability](<../02 The Type System Core/sections/1. Structural typing/1.1. Structural assignability shape not name.md>) (classes are structural), [1.3. Branding](<../02 The Type System Core/sections/1. Structural typing/1.3. Nominal typing techniques branding and opaque types.md>) (private brand) and [3.1. Covariance/contravariance](<../02 The Type System Core/sections/3. Soundness and variance/3.1. Covariance contravariance and invariance who varies which way.md>) (method bivariance). [03 Basic Types and Annotations](<../03 Basic Types and Annotations/README.md>) — [3.1. Annotation syntax](<../03 Basic Types and Annotations/sections/3. Annotations Inference and Literals/3.1. Annotation syntax where types appear.md>) (`readonly`/`satisfies`). [04 Objects, Interfaces and Type Aliases](<../04 Objects Interfaces and Type Aliases/README.md>) — [1.1. Object types](<../04 Objects Interfaces and Type Aliases/sections/1. Object Type Fundamentals/1.1. Object types structural shape and excess property checks.md>) (class instance is an object type) and [1.3. Interfaces vs type aliases](<../04 Objects Interfaces and Type Aliases/sections/1. Object Type Fundamentals/1.3. Interfaces vs type aliases when to use which.md>) (when `implements` uses which). [05 Functions and Callable Types](<../05 Functions and Callable Types/README.md>) — [3.1. this parameter](<../05 Functions and Callable Types/sections/3. Advanced Callable Patterns/3.1. this parameter explicit typing and arrow vs function capture.md>) (methods are functions with an implicit `this`) and [3.2. Callback variance](<../05 Functions and Callable Types/sections/3. Advanced Callable Patterns/3.2. Callback variance strictFunctionTypes and bivariance pitfalls.md>) (strictFunctionTypes on methods).

## 1. Class Type Fundamentals

### [1.1. Class as type and value duality instance vs constructor](<./sections/1. Class Type Fundamentals/1.1. Class as type and value duality instance vs constructor.md>)

1. **Dual declaration** (one `class User` creates two things — an instance type `User` and a constructor value `typeof User` — which lives in which declaration space).
2. **Instance side vs static side** (instance members on `User`, static members and `new` on `typeof User` — `InstanceType<typeof User>` bridges them).
3. **Construct signatures** (writing `new (x: string) => User` and `abstract new` — why `instanceof` narrows but assignment checks shape).

### [1.2. Constructors parameter properties and instance creation](<./sections/1. Class Type Fundamentals/1.2. Constructors parameter properties and instance creation.md>)

1. **Constructor and member syntax:** verify result-annotation restrictions, parameter-property generation and a manual erasable equivalent.
2. **Initialization evidence:** contrast constructor/field producers, optional absence and a trusted definite assertion with observed first-use behavior.
3. **Construction and lifetime:** separate private constructor access, factory validation, builder state and the first cached singleton instance.

### [1.3. Access modifiers and encapsulation public private protected readonly](<./sections/1. Class Type Fundamentals/1.3. Access modifiers and encapsulation public private protected readonly.md>)

1. **Visibility and private names:** verify ordinary keys, lexical private access, same-origin compatibility and native/ES2015 emission.
2. **Mutation mechanisms:** distinguish readonly views, writable aliases, inherited getter-only writes and shallow runtime freeze.
3. **Encapsulation ownership:** observe protected subclass access and deliberate public/private serialization/extension boundaries.

---

## 2. Inheritance and Polymorphism

### [2.1. Extends implements and structural class compatibility](<./sections/2. Inheritance and Polymorphism/2.1. Extends implements and structural class compatibility.md>)

1. **Inheritance and contract checking:** observe inherited runtime behavior, a public class target and declaration-versus-use-site missing members.
2. **Class compatibility:** compare matching public shapes, shared protected origins, unrelated private/protected declarations and assertion limits.
3. **Legal heritage contracts:** verify comma lists, named intersections and fixed mapped shapes against parser and union-target failures.

### [2.2. Abstract classes and members when abstract beats interface](<./sections/2. Inheritance and Polymorphism/2.2. Abstract classes and members when abstract beats interface.md>)

1. **Abstract hooks and helpers:** contrast declaration-time obligations, inherited behavior and a concrete throwing stub.
2. **Independent design choices:** compare shape contracts, ordinary constructor access, runtime mixins and behavior-sensitive base evolution.
3. **Constructor evidence:** use concrete signatures for construction and abstract signatures for inspection, with a controlled assertion failure.

### [2.3. Override and polymorphic this typing](<./sections/2. Inheritance and Polymorphism/2.3. Override and polymorphic this typing.md>)

1. **Override checking:** distinguish concrete replacements, abstract hook implementations and renamed-base failures.
2. **Self returns and copying:** preserve a fluent receiver while testing varied constructor state and explicit copy obligations.
3. **Static factories:** contrast the invalid static self return with a generic constructor receiver and required-argument rejection.
4. **Class callbacks:** observe implicit detachment, explicit invocation requirements, captured fields and binding remedies.

---

## 3. Advanced Class Patterns

### [3.1. Static members generics and static blocks](<./sections/3. Advanced Class Patterns/3.1. Static members generics and static blocks.md>)

1. **Constructor and instance contracts:** verify member-side failures, shared generic-class state and independently generic static methods.
2. **Generic class evidence:** check constructor/map inference, intentional union contracts and minimal repository constraints.
3. **Static initialization:** trace interleaved fields/blocks, super property access, inherited state and explicit error handling.

### [3.2. Mixins and class composition without inheritance](<./sections/3. Advanced Class Patterns/3.2. Mixins and class composition without inheritance.md>)

1. **Mixin as class expression** (`function Timestamped<B extends Constructor>(Base: B)` — generic constraint that returns an anonymous class extending `Base`).
2. **Intersection on the instance** (stacking mixins `Timestamped(Loggable(User))` is `&` on the instance side and `extends` on the constructor side).
3. **When mixins beat `extends`** (cross-cutting concerns without diamond inheritance — trade-off is longer hover types and duplicate declaration emitted).

### [3.3. Class type queries InstanceType and constructor signatures](<./sections/3. Advanced Class Patterns/3.3. Class type queries InstanceType and constructor signatures.md>)

1. **Querying the two sides** (`InstanceType<typeof User>` recovers the instance; `ConstructorParameters<typeof User>` peels the `new` signature).
2. **Abstract construct queries** (`abstract new` vs `new` — why a factory for abstract classes must use `abstract new` construct sig).
3. **Zero-emit erasure** (every query and utility on classes erases — like object type queries, no runtime cost).

---

## 4. Important points to remember (classes, object-oriented types)

### [4.1. Classes checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Classes checklist mental models mentors insist on.md>)

1. **Class is both type and value** (the name lives in two declaration spaces — instance type vs constructor value).
2. **`extends` is inheritance; `implements` is a check** (structural assignability survives either — only `private`/`#private` adds nominal separation).
3. **`abstract` ships, `interface` describes** (choose by whether subclasses should share runtime logic and construction control).
4. **`override` + `this` preserve the chain** (`override` proves polymorphism; `this` return keeps subclass identity without re-casting).

---

## 5. Common pitfalls → production bugs (classes, object-oriented types)

### [5.1. Real production bugs caused by class type misunderstandings](<./sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by class type misunderstandings.md>)

1. **Structural class leak** (a `Dog` instance passed where a `Cat` was expected — same shape, no `private` brand — mutated missing field at runtime).
2. **`private` vs `#private` runtime leak** (`private` hid at compile time but was readable via `obj["field"]` at runtime — `#private` would have thrown).
3. **`readonly` without freeze** (`readonly` silenced a write but a shared `DEFAULTS` instance was still mutated through an alias).
4. **Missing `override` hid a rename** (base method renamed; subclass silently became an overload instead of an override — no error until runtime dispatch missed).

---

## 6. Interview questions and answers (classes, object-oriented types)

### [6.1. Common interview QA — classes and object-oriented types](<./sections/6. Interview questions and answers/6.1. Common interview QA classes and object-oriented types.md>)

1. **What does one `class` declaration put in each declaration space?** (type vs value vs namespace — and how `typeof Class` reaches the constructor).
2. **`extends` vs `implements` — is removing `implements` a breaking change?** (no for assignability; yes for the check — the structural nuance).
3. **When does `abstract class` beat `interface`?** (shared runtime + construction control vs shape-only contracts).
4. **Why does `override` exist and what does it catch?** (base rename/misspelling — the "forgot-override" bug).
5. **`private` vs `#private` — which has runtime cost?** (checker-only erasure vs `WeakMap` field — performance vs hard privacy).

---

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries — what is covered elsewhere](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **Runtime and static views:** route constructor/field/prototype behavior separately from class types and declared processing pipelines.
2. **Object boundaries:** locate ordinary shapes, modifiers, composition and merging before applying class-specific contracts.
3. **Callable boundaries:** distinguish receiver invocation, callback substitution and class-specific override/generic relationships.
4. **Narrowing and evidence:** choose control-flow or runtime parser owners from the failing operation.
5. **Decorator and framework boundaries:** use actual configured decorator/metadata/lifecycle owners and preserve the planned backend prerequisites.

[← Back to track](<../README.md>)
