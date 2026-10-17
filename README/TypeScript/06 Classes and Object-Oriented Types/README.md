# Classes and Object-Oriented Types

How TypeScript types classes as constructor values and instance contracts: instance vs static sides, constructors, access modifiers, inheritance (`extends`/`implements`), `abstract` and `override`, polymorphic `this`, generics on classes, static blocks, and composition via mixins. Runtime processing depends on the chosen syntax and pipeline; class annotations do not validate inputs. Runtime prototype mechanics live in [JavaScript 07 Prototypes and Classes](<../../JavaScript/07 Prototypes and Classes/README.md>).

## 0. Prerequisites

[01 Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) — especially [2.1. Type erasure](<../01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.1. Type erasure what survives compilation.md>) (type annotations erase while class construction and fields remain) and [3.3. Choosing erasable syntax](<../01 Fundamentals and Mental Model/sections/3. Running TypeScript today/3.3. Choosing erasable syntax the zero-cost interop rule.md>) (syntax-specific restrictions, including parameter properties that require transformation). [02 The Type System Core](<../02 The Type System Core/README.md>) — [1.1. Structural assignability](<../02 The Type System Core/sections/1. Structural typing/1.1. Structural assignability shape not name.md>) (public shape comparison and private/protected origin rules), [1.3. Branding](<../02 The Type System Core/sections/1. Structural typing/1.3. Nominal typing techniques branding and opaque types.md>) (private brand) and [3.1. Covariance/contravariance](<../02 The Type System Core/sections/3. Soundness and variance/3.1. Covariance contravariance and invariance who varies which way.md>) (method bivariance). [03 Basic Types and Annotations](<../03 Basic Types and Annotations/README.md>) — [3.1. Annotation syntax](<../03 Basic Types and Annotations/sections/3. Annotations Inference and Literals/3.1. Annotation syntax where types appear.md>) (`readonly`/`satisfies`). [04 Objects, Interfaces and Type Aliases](<../04 Objects Interfaces and Type Aliases/README.md>) — [1.1. Object types](<../04 Objects Interfaces and Type Aliases/sections/1. Object Type Fundamentals/1.1. Object types structural shape and excess property checks.md>) (class instance is an object type) and [1.3. Interfaces vs type aliases](<../04 Objects Interfaces and Type Aliases/sections/1. Object Type Fundamentals/1.3. Interfaces vs type aliases when to use which.md>) (when `implements` uses which). [05 Functions and Callable Types](<../05 Functions and Callable Types/README.md>) — [3.1. this parameter](<../05 Functions and Callable Types/sections/3. Advanced Callable Patterns/3.1. this parameter explicit typing and arrow vs function capture.md>) (methods are functions with an implicit `this`) and [3.2. Callback variance](<../05 Functions and Callable Types/sections/3. Advanced Callable Patterns/3.2. Callback variance strictFunctionTypes and bivariance pitfalls.md>) (method-origin exceptions and stricter function-property contracts).

## 1. Class Type Fundamentals

### [1.1. Class as type and value duality instance vs constructor](<./sections/1. Class Type Fundamentals/1.1. Class as type and value duality instance vs constructor.md>)

1. **Class views:** distinguish instance annotations, constructor values, type-position typeof and retained runtime operations.
2. **Constructor receivers:** verify inferred static bodies, inherited calls, detachment and explicit receiver requirements.
3. **Construction and relations:** require concrete factories and contrast abstract erasure, structural assignment, inherited instanceof and custom hooks.

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

1. **Concrete subclass factories:** preserve inferred base arguments/statics and observe actual ancestry and generated identity.
2. **Abstract composition:** retain abstract hooks until a final concrete subclass implements them.
3. **Design and cost boundaries:** compare an explicit collaborator, runtime decorators and emitted definitions versus generated class allocation.

### [3.3. Class type queries InstanceType and constructor signatures](<./sections/3. Advanced Class Patterns/3.3. Class type queries InstanceType and constructor signatures.md>)

1. **Derived constructor contracts:** recover instance/argument types from a constructor value and check a concrete wrapper.
2. **Abstract queries and concrete invocation:** distinguish accepted utility types from safe factory/registry construction and forced missing-hook failures.
3. **Emission evidence:** inspect actual JavaScript, declaration-only output and the erasable-syntax gate separately.

---

## 4. Important points to remember (classes, object-oriented types)

### [4.1. Classes checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Classes checklist mental models mentors insist on.md>)

1. **Views and operations:** distinguish instance contracts, constructor values and type-position queries in one checked job API.
2. **Behavior and compatibility:** separate inherited dispatch, implements checking, public adapters and private/protected origins.
3. **Abstract obligations:** require concrete factory inputs and inspect which class operations survive emission.
4. **Override and self returns:** diagnose abstract/concrete marker rules and distinguish preserving a receiver from constructing a copy.

---

## 5. Common pitfalls → production bugs (classes, object-oriented types)

### [5.1. Real production bugs caused by class type misunderstandings](<./sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by class type misunderstandings.md>)

1. **Domain confusion:** reproduce a wrong local-store operation, then distinguish a complete branded contract, assertion bypass and public projection.
2. **Serialization exposure:** compare checker-private fields and native private names through reflection, JSON and spread.
3. **Mutation boundaries:** observe writable aliases, shallow freeze and strict getter-only write failures.
4. **Rename drift:** trace the consumer's inherited call and distinguish stale-name checking from behavioral repair.

---

## 6. Interview questions and answers (classes, object-oriented types)

### [6.1. Common interview QA — classes and object-oriented types](<./sections/6. Interview questions and answers/6.1. Common interview QA classes and object-oriented types.md>)

1. **Which class view does an operation need?** Explain instance annotations, constructor values, queries and concrete construction evidence.
2. **What do implements and extends change?** Predict declaration checks, structural calls and actual inheritance separately.
3. **When is an abstract base useful?** Compare inherited helpers, capability adapters and behavioral evolution limits.
4. **What does override prove?** Distinguish concrete marker requirements, abstract hooks and rename drift.
5. **What survives privacy annotations?** Observe same-class reads, ordinary keys and native versus transformed private-field output.

---

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries — what is covered elsewhere](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **Runtime and static views:** route constructor/field/prototype behavior separately from class types and declared processing pipelines.
2. **Object boundaries:** locate ordinary shapes, modifiers, composition and merging before applying class-specific contracts.
3. **Callable boundaries:** distinguish receiver invocation, callback substitution and class-specific override/generic relationships.
4. **Narrowing and evidence:** choose control-flow or runtime parser owners from the failing operation.
5. **Decorator and framework boundaries:** use actual configured decorator/metadata/lifecycle owners and preserve the planned backend prerequisites.

[← Back to track](<../README.md>)
