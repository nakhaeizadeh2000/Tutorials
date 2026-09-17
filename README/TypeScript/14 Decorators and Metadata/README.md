# Decorators and Metadata

How TypeScript annotates classes and members with reusable behavior — TC39 standard decorators (`@logged` on classes, methods, fields — no flag since TS 5.0) as the default, legacy experimental decorators for existing frameworks (Angular/NestJS-era code), and metadata (`emitDecoratorMetadata`, `Symbol.metadata`) for type-driven runtime patterns like dependency injection and validation. Mixin *composition* without decorators lives in [06 Classes](<../06 Classes and Object-Oriented Types/README.md>) ([3.2. Mixins](<../06 Classes and Object-Oriented Types/sections/3. Advanced Class Patterns/3.2. Mixins and class composition without inheritance.md>)); higher-order function wrappers live in [05 Functions](<../05 Functions and Callable Types/README.md>) — this domain owns *declarative annotation*: what `@` means, which standard applies, and where metadata flows.

## 0. Prerequisites

[01 Fundamentals and Mental Model](<../01 Fundamentals and Mental Model/README.md>) — [2.1. Type erasure](<../01 Fundamentals and Mental Model/sections/2. How TypeScript doesnt execute/2.1. Type erasure what survives compilation.md>) (decorators are the rare *emitting* annotation — runtime functions, not erased types). [06 Classes and Object-Oriented Types](<../06 Classes and Object-Oriented Types/README.md>) — [1.1. Class duality](<../06 Classes and Object-Oriented Types/sections/1. Class Type Fundamentals/1.1. Class as type and value duality instance vs constructor.md>) (what decorators receive: constructor values + instance shapes) and [3.2. Mixins](<../06 Classes and Object-Oriented Types/sections/3. Advanced Class Patterns/3.2. Mixins and class composition without inheritance.md>) (composition alternative this domain contrasts). [13 Configuration and Compiler Options](<../13 Configuration and Compiler Options/README.md>) — [2.1. isolatedModules](<../13 Configuration and Compiler Options/sections/2. Erasable and Isolated Toolchain/2.1. isolatedModules single-file transpilation.md>) (decorator emit vs single-file transpilers) — standard decorators transpile per-file safely; legacy + metadata need whole-program emit.

## 1. Standard Decorators

### [1.1. TC39 standard decorators classes methods fields](<./sections/1. Standard Decorators/1.1. TC39 standard decorators classes methods fields.md>)

1. **What `@dec` means in TS 5.0+** (functions receiving the decorated target + context — classes, methods, getters, fields, accessors each get a precise signature).
2. **Class decorators** (wrapping/subclassing constructors — registration, sealing, metadata attachment at definition time).
3. **Method and field decorators** (wrapping functions, transforming field initializers — logging, validation, observation per member).

### [1.2. Decorator evaluation and application order](<./sections/1. Standard Decorators/1.2. Decorator evaluation and application order.md>)

1. **Evaluation vs application** (expressions evaluate top-down; application runs bottom-up — the two-phase rule predicting every stacking outcome).
2. **Multiple decorators per member** (composition order — `@a @b` applies `b` first; factories (`@a(x)`) evaluate per use).
3. **Field initialization timing** (field decorators run at class-definition time; initializers run per instance — the timing split that surprises).

### [1.3. Practical class decorators registration and mixins](<./sections/1. Standard Decorators/1.3. Practical class decorators registration and mixins.md>)

1. **Registration pattern** (decorators adding classes to registries — plugin systems, route tables, test collectors without central lists).
2. **Decorator-driven mixins** (returning extended subclasses from decorators — composition via annotation vs 06/3.2's function form).
3. **Sealing and freezing via decorators** (preventing extension/mutation declaratively — when annotation beats explicit calls).

---

## 2. Legacy and Metadata

### [2.1. Legacy experimental decorators compared](<./sections/2. Legacy and Metadata/2.1. Legacy experimental decorators compared.md>)

1. **Legacy vs standard signatures** (`(target, key, descriptor)` vs `(value, context)` — different parameters, different return contracts).
2. **`experimentalDecorators` flag and migration** (legacy needs the flag; standard needs none — migrating NestJS/Angular-era code one decorator at a time).
3. **When legacy stays** (frameworks requiring legacy emit — Angular, NestJS, TypeORM-era stacks; version-pinned interop, not preference).

### [2.2. emitDecoratorMetadata and design types](<./sections/2. Legacy and Metadata/2.2. emitDecoratorMetadata and design types.md>)

1. **What the flag emits** (`design:type`, `design:paramtypes`, `design:returntype` — compiler-recorded type facts as runtime metadata).
2. **How DI containers consume it** (constructor-param types resolved at runtime — NestJS-style injection without manual tokens).
3. **Limits and staleness** (metadata reflects *declared* types (erased unions become `Object`); `emitDecoratorMetadata` needs legacy decorators + `reflect-metadata`).

### [2.3. Symbol.metadata and the metadata proposal](<./sections/2. Legacy and Metadata/2.3. Symbol.metadata and the metadata proposal.md>)

1. **`Symbol.metadata` essentials** (standard-decorator metadata channel — `context.metadata` objects merged per class, read via `Class[Symbol.metadata]`).
2. **Class-level metadata patterns** (route paths, validation schemas, ORM table names — data attached at definition, consumed by frameworks).
3. **Metadata vs `reflect-metadata`** (standard channel vs legacy library — interop status, migration direction, ecosystem state as of 2026).

---

## 3. Patterns in Practice

### [3.1. Validation decorators field rules](<./sections/3. Patterns in Practice/3.1. Validation decorators field rules.md>)

1. **Rule registration per field** (`@Min(0)`, `@IsEmail` — constraints collected into a schema at class-definition time).
2. **Running validation** (schema + instance → error list — the validate function frameworks provide, hand-rolled here for teaching).
3. **Decorators vs schema objects** (annotation-colocated rules vs central schemas (Zod-style) — locality vs explicitness trade).

### [3.2. Logging timing and memoization decorators](<./sections/3. Patterns in Practice/3.2. Logging timing and memoization decorators.md>)

1. **Method wrapping** (logging entry/exit, timing spans — around-advice via function replacement in standard signature).
2. **Memoization decorators** (caching per arguments — `Map`-keyed method results with invalidation notes).
3. **Wrapping vs composing functions** (decorator syntax vs higher-order calls — when `@` earns its indirection over plain composition).

### [3.3. Dependency injection with decorators](<./sections/3. Patterns in Practice/3.3. Dependency injection with decorators.md>)

1. **Token-based registration** (`@Inject(TOKEN)` / `@Singleton` — container maps tokens to constructors, decorators mark participation).
2. **Constructor injection without metadata emit** (explicit tokens over `design:paramtypes` magic — portable across standard/legacy).
3. **When DI frameworks pay** (large object graphs with test doubles — container vs manual wiring vs parameter passing).

---

## 4. Important points to remember (decorators and metadata)

### [4.1. Decorators checklist — mental models mentors insist on](<./sections/4. Important points to remember/4.1. Decorators checklist mental models mentors insist on.md>)

1. **Standard by default, legacy by framework requirement** (TS 5.0+ signature needs no flag; legacy needs `experimentalDecorators` + a recorded framework reason).
2. **Decorators observe and wrap — never silently change contracts** (additive behavior only; signature-preserving wrappers).
3. **Metadata serves frameworks, not application logic** (attach data for consumers; keep business rules in explicit code).
4. **Prefer explicit composition where annotation hides control flow** (HOF calls and mixins where `@` obscures — readability over decoration).

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

1. **Class mechanics and mixin composition** (duality, constructors, `extends`/`implements`, function-form mixins) — [06 Classes and Object-Oriented Types](<../06 Classes and Object-Oriented Types/README.md>).
2. **Higher-order functions and callable patterns** (wrappers, overloads, `this` typing, variance on callables) — [05 Functions and Callable Types](<../05 Functions and Callable Types/README.md>).
3. **Compiler flags for emit behavior** (`experimentalDecorators`, `emitDecoratorMetadata`, `isolatedModules` interplay) — [13 Configuration and Compiler Options](<../13 Configuration and Compiler Options/README.md>).
4. **Validation at boundaries and testing decorated code** (schemas, assertion functions, test doubles for decorated classes) — [15 Strictness, Errors and Validation](<../15 Strictness Errors and Validation/README.md>) + [17 Testing Types](<../17 Testing Types/README.md>).
5. **NestJS-style framework mastery** (full DI containers, module systems, production wiring) — [15 NestJS track](<../NestJS/README.md>) (textual forward; track does not exist yet — forward recorded for curriculum order).

[← Back to track](<../README.md>)
