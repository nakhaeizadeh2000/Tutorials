# Decorators and Metadata

Decorators attach reusable behavior to class declarations and members. This domain explains the value/context model implemented by TypeScript 7.0.2, the separately configured legacy model, and runtime metadata producers and consumers. Choose the model required by the consuming tool or framework; support in a compiler does not establish finalized ECMAScript syntax or native runtime parsing. [06 Classes](<../06 Classes and Object-Oriented Types/README.md>) owns class composition, and [05 Functions](<../05 Functions and Callable Types/README.md>) owns general callable contracts.

## 0. Prerequisites

[01 Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) — [2.1. Type erasure](<../01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.1. Type erasure what survives compilation.md>) (decorators are the rare *emitting* annotation — runtime functions, not erased types). [06 Classes and Object-Oriented Types](<../06 Classes and Object-Oriented Types/README.md>) — [1.1. Class duality](<../06 Classes and Object-Oriented Types/sections/1. Class Type Fundamentals/1.1. Class as type and value duality instance vs constructor.md>) (what decorators receive: constructor values + instance shapes) and [3.2. Mixins](<../06 Classes and Object-Oriented Types/sections/3. Advanced Class Patterns/3.2. Mixins and class composition without inheritance.md>) (composition alternative this domain contrasts). [13 Configuration and Compiler Options](<../13 Configuration and Compiler Options/README.md>) — [2.1. isolatedModules](<../13 Configuration and Compiler Options/sections/2. Erasable and Isolated Toolchain/2.1. isolatedModules single-file transpilation.md>) (decorator emit vs single-file transpilers) — check the selected emitter's decorator model and metadata support; per-file acceptance does not prove native parsing or agreement between emitters.

## 1. Standard Decorators

### [1.1. TC39 standard decorators classes methods fields](<./sections/1. Standard Decorators/1.1. TC39 standard decorators classes methods fields.md>)

1. **Value/context contracts:** choose the correct class, method, field or auto-accessor signature and configured model.
2. **Class replacement:** observe constructor identity and the limits of compatible replacement types.
3. **Member execution:** forward a receiver/result and trace declared field values, transformations and extra hooks.
4. **Policy boundaries:** distinguish initial-value transformation from later writes and expose freezing during derived construction.

### [1.2. Decorator evaluation and application order](<./sections/1. Standard Decorators/1.2. Decorator evaluation and application order.md>)

1. **Three phases:** trace factory evaluation, reverse decorator application and nested wrapper entry/exit, including throws.
2. **Field composition:** run both returned transformers and distinguish their order from extra-hook registration order.
3. **Initialization boundaries:** compare static/class hooks with repeated instance hooks and predict an order-changing exercise.

### [1.3. Practical class decorators registration and mixins](<./sections/1. Standard Decorators/1.3. Practical class decorators registration and mixins.md>)

1. **Registration contract:** import a module, register its final replacement constructor, check missing keys and reject collisions.
2. **Composition and types:** compare decorator-added runtime state with an inferred mixin result and directional ancestry.
3. **Integrity boundaries:** observe sealing of constructor/prototype objects and shallow instance freezing, including permitted writes.

---

## 2. Legacy and Metadata

### [2.1. Legacy experimental decorators compared](<./sections/2. Legacy and Metadata/2.1. Legacy experimental decorators compared.md>)

1. **Signature contracts:** implement standard value/context and legacy descriptor wrappers with actual receiver/result/failure checks.
2. **Program configuration:** build each model separately, reject incompatible flags and consume the emitted artifacts.
3. **Order and migration:** observe evaluation/application/wrapper order under both models and state the tested limits.
4. **Compatibility decisions:** test a deliberately overlapping class decorator and identify metadata/consumer requirements before migration.

### [2.2. emitDecoratorMetadata and design types](<./sections/2. Legacy and Metadata/2.2. emitDecoratorMetadata and design types.md>)

1. **Actual design metadata:** compile a legacy project, bootstrap reflect-metadata and read constructor/member keys from their real stores.
2. **Consumer limits:** compare preserved constructors with lossy union/interface/tuple/generic representations and assemble an explicit typed dependency.
3. **Failure boundaries:** distinguish missing recording from missing APIs, demonstrate late bootstrap and repair a forward-reference runtime failure.

### [2.3. Symbol.metadata and the metadata proposal](<./sections/2. Legacy and Metadata/2.3. Symbol.metadata and the metadata proposal.md>)

1. **`Symbol.metadata` essentials** (runtime symbol initialization, compiler setup and a verified attach/read path).
2. **Class-level metadata patterns** (typed consumers, inherited configuration and copying before mutation).
3. **Metadata vs `reflect-metadata`** (separate stores and a real standard-first transition reader with explicit dependencies).

---

## 3. Patterns in Practice

### [3.1. Validation decorators field rules](<./sections/3. Patterns in Practice/3.1. Validation decorators field rules.md>)

1. **Actual registration and enforcement:** record range/nonempty rules and run a complete flat own-property validator.
2. **Failure and inheritance policies:** reject missing schemas, malformed values and unsupported properties while isolating parent, child and unrelated rules.
3. **Consumer choice:** compare an explicit rule object with decorators and state the limits of error lists, plain-input support and framework compatibility.

### [3.2. Logging timing and memoization decorators](<./sections/3. Patterns in Practice/3.2. Logging timing and memoization decorators.md>)

1. **Observation boundaries:** execute synchronous return/throw timing, sink-failure policy and separate promise-settlement instrumentation.
2. **Cache policy:** demonstrate receiver isolation, undefined hits, FIFO capacity, real clearing and state staleness with exact call counts.
3. **Application choice:** use one typed wrapper through annotation or an explicit call, and expose promise identity and JSON-key limitations.

### [3.3. Dependency injection with decorators](<./sections/3. Patterns in Practice/3.3. Dependency injection with decorators.md>)

1. **Bindings and lifecycle:** run typed factories with actual singleton/transient identity, state, missing-token and undefined-cache observations.
2. **Decorator registration:** register a zero-argument class and assemble constructor dependencies through an explicit factory.
3. **Substitution and ownership:** replace a repository for future resolutions, preserve existing-reference semantics and locate the NestJS/Fastify application boundary.
4. **Lifecycle verification:** expose a cache-bypass regression and explain why compiler acceptance does not prove reuse.

---

## 4. Important points to remember (decorators and metadata)

### [4.1. Decorators checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Decorators checklist mental models mentors insist on.md>)

1. **Configured model and artifact:** identify program settings, consumer requirements and executed output before accepting a migration.
2. **Observable contract:** review receiver, identity, errors, field evaluation and initialization beyond replacement-type compatibility.
3. **Metadata evidence:** locate the producer, runtime store and checked reader, including missing-data and inheritance policies.
4. **Policy ownership:** choose composition, cache invalidation and dependency lifetimes from actual tested behavior.

---

## 5. Common pitfalls → production bugs (decorators and metadata)

### [5.1. Real production bugs caused by decorator misunderstandings](<./sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by decorator misunderstandings.md>)

1. **Legacy/standard decorator mix silently double-wrapped methods** (migrated file kept one legacy import; timing logged twice, memo cache keyed inconsistently).
2. **`emitDecoratorMetadata` `Object` fallback injected the wrong service** (union-typed constructor param recorded as `Object`; container resolved a garbage dependency at boot).
3. **Field decorator ordering ran validation before initialization** (definition-time vs instance-time confusion; rules evaluated against `undefined` fields).
4. **Unbound method passed as callback lost `this` through decoration** (wrapped function detached from instance; `this` undefined at call time).

---

## 6. Interview questions and answers (decorators and metadata)

### [6.1. Common interview QA — decorators and metadata](<./sections/6. Interview questions and answers/6.1. Common interview QA decorators and metadata.md>)

1. **What does a standard method decorator receive — and what may it return?** (value + context; same-kind replacement or void).
2. **Legacy vs standard decorators — how do signatures differ, and how do you migrate?** (`target/key/descriptor` vs `value/context`; one decorator at a time).
3. **What does `emitDecoratorMetadata` emit — and why does a union param record `Object`?** (design-type facts; erased unions degrade).
4. **In what order do stacked decorators evaluate and apply — and why two phases?** (top-down evaluation, bottom-up application).
5. **When would you choose a decorator over a higher-order function or mixin?** (declarative annotation at definition vs explicit composition at use).

---

## 7. Overlaps to avoid (where this domain stops)

### [7.1. Boundaries — what is covered elsewhere](<./sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>)

1. **Class and decorator behavior:** separate initialization/composition from decorator inputs and returned values.
2. **Callable contracts:** diagnose wrapper signatures, receiver invocation and bounded forwarding.
3. **Programs and stores:** choose configured standard/legacy processing and trace runtime metadata producers/readers.
4. **Validation and lifecycle evidence:** locate actual checks, typed doubles and tested container reuse/substitution.
5. **Framework ownership:** preserve the planned NestJS/Fastify application path and state the language examples' integration limits.

[← Back to track](<../README.md>)
