# Metaprogramming Symbols Proxy Reflect

How JavaScript lets objects control their own semantics — what well-known symbols hook (`@@iterator`/`@@asyncIterator`/`@@hasInstance`/`@@isConcatSpreadable`/`@@toStringTag`/`@@toPrimitive`/`@@species`/`@@unscopables`/`@@match` family and `@@toStringTag`), how `Symbol` creation vs the global registry vs `description` and hidden-key enumeration work, what `Proxy` traps really intercept (the 13 traps, forwarding to target, and `receiver`), what invariants the engine enforces on non-configurable/non-extensible targets, how `Reflect.*` mirrors operators with a consistent return-value contract and correct `receiver` forwarding, and how the trio composes into membranes, revocable proxies, validation, observability, and built-in subclassing (`@@species`) — with the checklist and production bugs mentors screen for.

## 0. Prerequisites

[Values Types and Coercion](<../03 Values Types and Coercion/README.md>) for [the exotic primitives `Symbol` unique keys](<../03 Values Types and Coercion/sections/5. The exotic primitives Symbol and BigInt/5.1. Symbol unique property keys beyond strings.md>) and [the `@@toPrimitive` dance](<../03 Values Types and Coercion/sections/2. The conversion algorithms/2.3. ToPrimitive and the valueOf toString and Symbol.toPrimitive dance.md>) and [boxing](<../03 Values Types and Coercion/sections/4. Boxing and wrapper objects/4.1. Wrapper objects vs primitives boxing demystified.md>); [Objects in Depth](<../06 Objects in Depth/README.md>) for [data vs accessor descriptors and attribute defaults](<../06 Objects in Depth/sections/2. Properties and descriptors/2.1. Data vs accessor descriptors and attribute defaults.md>) and [defining observing configuring properties](<../06 Objects in Depth/sections/2. Properties and descriptors/2.2. Defining observing and configuring properties.md>) and [enumerability enumeration order and `Reflect.ownKeys`](<../06 Objects in Depth/sections/2. Properties and descriptors/2.3. Enumerability enumeration order and for-in mechanics.md>) and [the prototype chain `getPrototypeOf`/`setPrototypeOf`](<../06 Objects in Depth/sections/3. Prototype linkage intro/3.1. The prototype chain getPrototypeOf setPrototypeOf and Object.create.md>); [Prototypes and Classes](<../07 Prototypes and Classes/README.md>) for [delegation mechanics](<../07 Prototypes and Classes/sections/1. Prototype delegation/1.1. Delegation mechanics lookup shadowing and dynamic updates.md>) and [class basics and `extends`/`super`](<../07 Prototypes and Classes/sections/3. Class syntax/3.1. Class basics declarations hoisting methods accessors and fields.md>) and [private fields and brand checks](<../07 Prototypes and Classes/sections/3. Class syntax/3.3. Private fields and methods brand checks and encapsulation.md>) and [type checks `instanceof` and `Symbol.hasInstance`](<../07 Prototypes and Classes/sections/5. Type checks and reflection/5.1. instanceof isPrototypeOf Symbol.hasInstance and cross-realm failures.md>); [Arrays](<../08 Arrays/README.md>) for [array exotic and `isConcatSpreadable`](<../08 Arrays/sections/4. Searching slicing and joining/4.2. Slicing concatenating and joining slice concat join at with.md>) and [holes and `Reflect.ownKeys` on sparse](<../08 Arrays/sections/2. Holes sparsity and length/2.1. Holes vs undefined sparse arrays and empty slots.md>); [Iterables Generators and Async Iteration](<../10 Iterables Generators and Async Iteration/README.md>) for [iterable vs iterator and `Symbol.iterator`](<../10 Iterables Generators and Async Iteration/sections/1. Iterable and iterator protocols/1.1. Iterable vs iterator vs array-like and Symbol.iterator.md>) and [async iterables `Symbol.asyncIterator`](<../10 Iterables Generators and Async Iteration/sections/4. Async iteration/4.1. Async iterables Symbol.asyncIterator and for await...of.md>); [Strings and Regular Expressions](<../11 Strings and Regular Expressions/README.md>) for [RegExp `@@match` family](<../11 Strings and Regular Expressions/sections/5. Advanced RegExp/5.1. Groups named groups backreferences hasIndices and replacement patterns.md>); [Error Handling and Debugging](<../15 Error Handling and Debugging/README.md>) for [built-in Error taxonomy](<../15 Error Handling and Debugging/sections/1. Error taxonomy/1.1. Built-in Error types and when engines throw them.md>).

---

## 1. Symbols deep

### [1.1. Well-known symbols the protocol hook table](<./sections/1. Symbols deep/1.1. Well-known symbols the protocol hook table.md>)

1. **Well-known vs ordinary — shared registry behind `Symbol.*`** (what "well-known" means: single `Symbol.for`–like slot per realm; ordinary symbols are fresh each call).
2. **The hook table — which syntax looks up which symbol** (`for...of`→`@@iterator`, `for await...of`→`@@asyncIterator`, `instanceof`→`@@hasInstance`, `concat`→`@@isConcatSpreadable`, `Object.prototype.toString`→`@@toStringTag`, `+`/`String()`/`Number()`→`@@toPrimitive`, `Array` methods→`@@species`, `with`→`@@unscopables`, `String.prototype.match*`→`@@match`/`@@replace`/`@@search`/`@@split`).
3. **Lookup rules — string fallback vs symbol slot** (coercion falls back to `valueOf`/`toString` only when `@@toPrimitive` absent; `@@iterator` searched on the object itself, not coerced string key).
4. **Modern guidance** (use the named `Symbol.*` constant, never `Symbol.for("Symbol.hasInstance")`; well-known symbols are not on `Object.keys` — only `Reflect.ownKeys`/`getOwnPropertySymbols` reveal them).

### [1.2. Symbol creation description global registry and hidden keys](<./sections/1. Symbols deep/1.2. Symbol creation description global registry and hidden keys.md>)

1. **Three ways to get a symbol — `Symbol()`, `Symbol("desc")`, `Symbol.for("key")` and their identity contracts** (fresh vs shared; `description` is debug-only, stored via `Symbol.prototype.description`).
2. **Hidden-key mechanics — non-enumerable by `Object.keys`/`for...in` but own via `getOwnPropertySymbols`/`Reflect.ownKeys`** (why `JSON.stringify` skips symbols; `Object.assign` copies enumerable symbols; `for...in` skips entirely).
3. **`Symbol.keyFor` vs `description` — global registry round-trip** (`Symbol.for` string→symbol; `Symbol.keyFor` symbol→string only for global registry; local symbols return `undefined`).
4. **Enumeration order revisited — integers → strings → symbols in insertion order** (symbols sort after strings; insertion order preserved among symbols themselves; `Reflect.ownKeys` is the truthful listing).

---

## 2. Proxy core

### [2.1. Proxy handler the 13 trap table and forwarding](<./sections/2. Proxy core/2.1. Proxy handler the 13 trap table and forwarding.md>)

1. **What `new Proxy(target, handler)` creates — an exotic object forwarding internal methods** (no observable target mutation until a trap runs; `Proxy` vs `Object.create` delegation).
2. **The 13 traps — table with operator → trap → `Reflect.*` twin** (`get`/`set`/`has`/`deleteProperty`/`ownKeys`/`getOwnPropertyDescriptor`/`defineProperty`/`getPrototypeOf`/`setPrototypeOf`/`isExtensible`/`preventExtensions`/`apply`/`construct`).
3. **Forwarding pattern — `Reflect.get(target, prop, receiver)` preserves `this` through the prototype chain** (why bare `target[prop]` breaks receiver-sensitive getters/setters).
4. **Trap absence means default — missing trap forwards identically** (empty handler `{}` is transparent; `null` handler is not allowed — must be object).

### [2.2. Proxy invariants non-configurable non-extensible and exotic constraints](<./sections/2. Proxy core/2.2. Proxy invariants non-configurable non-extensible and exotic constraints.md>)

1. **Why invariants exist — the engine relies on `[[GetOwnProperty]]` truthfulness** (a proxy cannot lie about non-configurable/non-writable/non-extensible reality).
2. **The classic `TypeError` traps — `ownKeys` must include non-configurable keys; `getOwnPropertyDescriptor` must report them; `isExtensible` must track target; `setPrototypeOf` must agree** (failures throw even if handler returns a value).
3. **`apply` and `construct` belong only to callable/constructable targets** (non-callable target + `apply` trap still throws at construction time).
4. **Modern guidance** (never fake non-configurability via proxy alone — combine with `Object.freeze` on target; keep `ownKeys`+`getOwnPropertyDescriptor` consistent).

---

## 3. Reflect core

### [3.1. Reflect API vs operator and Object equivalents](<./sections/3. Reflect core/3.1. Reflect API vs operator and Object equivalents.md>)

1. **One API, two contracts — `Reflect.*` returns `boolean`/`value` where operators throw** (`Reflect.defineProperty` returns `false` vs `Object.defineProperty` throws; `Reflect.set`/`deleteProperty` return boolean for trap-friendly composition).
2. **The twin table — operator/`Object.*` vs `Reflect.*`** (`obj[k]`↔`Reflect.get`, `obj[k]=v`↔`Reflect.set`, `k in obj`↔`Reflect.has`, `delete obj[k]`↔`Reflect.deleteProperty`, `Object.getOwnPropertyDescriptor`↔`Reflect.getOwnPropertyDescriptor`, etc.).
3. **`Reflect.ownKeys` is the truthful listing — strings + symbols + non-enumerable** (unlike `Object.keys` which is enumerable strings only; `Reflect.ownKeys` order: integers → strings → symbols insertion).
4. **Construction twin — `Reflect.construct` and `Reflect.apply` forward `new.target`/`thisArg` correctly** (where `Function.prototype.apply`/`call` lose `new.target`).

### [3.2. Receiver forwarding and correct this](<./sections/3. Reflect core/3.2. Receiver forwarding and correct this.md>)

1. **Why `receiver` exists — accessor `this` must be the proxy, not the target** (internal `[[Get]]`/`[[Set]]` pass `Receiver`; `Reflect.get(target, key, receiver)` threads it through).
2. **The broken pattern — `target[key]` inside `get` loses proxy `this` and breaks setters on the proxy chain** (demo via `get _x()` returning `this.x` through two proxies).
3. **Writing with receiver — `Reflect.set(target, key, value, receiver)` respects setter `this` and returns `boolean`** (vs target assignment that mutates the wrong object in memoized proxies).
4. **Mechanism link — `[[Get]]`/`[[Set]]` on ordinary objects call `Receiver`–based `Get`/`Set` steps; proxy traps receive that same `receiver`** (ECMA-262 §§10.1–10.4).

### [3.3. Reflect and Proxy trap correspondence table](<./sections/3. Reflect core/3.3. Reflect and Proxy trap correspondence table.md>)

1. **One row per internal method — trap name, signature, `Reflect` twin, default forwarding** (13 rows; `apply: (target, thisArg, args)` ↔ `Reflect.apply`, `construct: (target, args, newTarget)` ↔ `Reflect.construct`, etc.).
2. **Arity and return contracts — what each trap must return** (boolean for `set`/`deleteProperty`/`defineProperty`/`setPrototypeOf`/`isExtensible`/`preventExtensions`; descriptor or `undefined` for `getOwnPropertyDescriptor`; string/symbol array for `ownKeys`).
3. **Common confusion — `Object.keys` is not a trap** (`ownKeys` is; `Object.keys` post-filters `ownKeys` for enumerable strings; `for...in` additionally walks the prototype chain).
4. **Checklist — every handler you write should answer: "does this trap need `receiver`/`newTarget`/`desc` forwarding via `Reflect.*`?"** (copy-paste forwarding template per trap).

---

## 4. Metaprogramming customization

### [4.1. Customizing coercion toPrimitive toStringTag hasInstance and match hooks](<./sections/4. Metaprogramming customization/4.1. Customizing coercion toPrimitive toStringTag hasInstance and match hooks.md>)

1. **`@@toPrimitive(hint)` — the string/number/default dispatch** (called with `'string'`/`'number'`/`'default'`; `Date` legacy maps `default`→`string`; return non-object or throw).
2. **`@@toStringTag` — the `Object.prototype.toString` brand string** (`"[object " + tag + "]"`; non-string tags ignored; own vs prototype placement; `Array`/`Map`/`Promise` each set it).
3. **`@@hasInstance` — rewriting `instanceof`** (`a instanceof C` ≡ `C[Symbol.hasInstance](a)` when present; `C` need not be a constructor; primitives still test as `false` for ordinary functions).
4. **`@@match`/`@@replace`/`@@search`/`@@split` — customizing `String` pattern dispatch** (RegExp delegates `str.match(re)` → `re[@@match](str)`; override to build non-RegExp patterns like glob matchers).

### [4.2. Species unscopables isConcatSpreadable and subclassing built-ins](<./sections/4. Metaprogramming customization/4.2. Species unscopables isConcatSpreadable and subclassing built-ins.md>)

1. **`@@species` — which constructor built-ins use for derived objects** (`Array.prototype.map` consults `this.constructor[Symbol.species]`; default is `this.constructor`; `null`/non-constructor falls back to `Array`).
2. **Subclassing `Array`/`Promise`/`RegExp` — when species matters** (`class MyArr extends Array { static get [Symbol.species]() { return Array; } }` keeps `map` plain; `Promise` species controls `then` chaining).
3. **`@@unscopables` — hiding from `with` (legacy) and why it still ships** (Array sets `copyWithin, entries, fill, find, flat, includes` as `true` to hide from `with` bindings).
4. **`@@isConcatSpreadable` — opt-in/out of `Array.prototype.concat` flattening** (object with `length` + `isConcatSpreadable: true` spreads; `Array` with `false` appends as one element).

---

## 5. Security patterns membranes and revocables

### [5.1. Validation observability membranes and private branding](<./sections/5. Security patterns membranes and revocables/5.1. Validation observability membranes and private branding.md>)

1. **Validation proxies — intercept `set`/`defineProperty` to enforce schemas and freeze invariants** (range checks, required fields, immutability; return `false`/throw on violation).
2. **Observability — `get`/`set`/`has`/`apply` as non-invasive logging without changing target shape** (event counters, lazy materialization; why `get` must still report non-configurable keys truthfully).
3. **Membranes — wrapping an entire object graph so every crossing returns a wrapped proxy** (handling `get` returns objects → cache `WeakMap` target→proxy; `ownKeys`/`getPrototypeOf` must wrap).
4. **Private branding without `#private` — `WeakMap` or `WeakSet` + proxy brand vs `Symbol.hasInstance` trap** (trade-off vs class `#` fields in [Prototypes 3.3](<../07 Prototypes and Classes/sections/3. Class syntax/3.3. Private fields and methods brand checks and encapsulation.md>)).

### [5.2. Revocable proxies and security boundaries](<./sections/5. Security patterns membranes and revocables/5.2. Revocable proxies and security boundaries.md>)

1. **`Proxy.revocable(target, handler) → {proxy, revoke}` — temporally scoped capability** (all traps throw `TypeError: revoked` after `revoke()`; target remains reachable directly).
2. **Use cases — sandboxing untrusted code, one-shot capabilities, test isolation, timeout-guarded APIs** (revoke on `finally`; membrane + revocable composes to revocable membrane).
3. **Composition gotchas — revoking an inner proxy does not revoke its membrane wrapper; revoking a prototype proxy still leaves `target.__proto__` reachable** (design revoke graph explicitly).
4. **Performance and correctness — revocable is not free; `revoke()` is idempotent; `Proxy` is not `Object.seal` — invariants still hold via target** (when to prefer `Object.freeze`/`WeakMap` branding instead).

---

## 6. Important points to remember (metaprogramming)

### [6.1. Metaprogramming checklist reflex rules mentors screen for](<./sections/6. Important points to remember/6.1. Metaprogramming checklist reflex rules mentors screen for.md>)

1. **The five reflexes — "what symbol?", "what trap?", "is it invariant-safe?", "did I forward `receiver`?", "does this cross realms?"** (table of when each reflex fires).
2. **The review grep list** (`Symbol.for` vs `Symbol()`, bare `target[key]` in handler, `ownKeys` without non-configurable inclusion, `get` without `Reflect.get(..., receiver)`, `@@toPrimitive` returning object, missing `revoke()` in `finally`).
3. **Boundary rule — `Proxy`/`Reflect` never paper over broken invariants; fix the target first** (freeze vs proxy-wrapping confusion).

---

## 7. Common pitfalls → production bugs

### [7.1. Real production bugs caused by metaprogramming mistakes](<./sections/7. Common pitfalls to production bugs/7.1. Real production bugs caused by metaprogramming mistakes.md>)

1. **Non-configurable lie — `ownKeys` omitting a non-configurable prop crashes with `TypeError` only on sealed objects** (lazy filter bug invisible until `Object.freeze` in prod).
2. **Lost `receiver` breaking accessor `this` — `get` trap via `target[prop]` mutates the target instead of the proxy chain** (double-wrapped `_value` setter writes to wrong object).
3. **Global registry collision — `Symbol.for("auth")` shared across bundles leaks one plugin's hook to another** (use fresh `Symbol("auth")` for isolation).
4. **`@@toPrimitive` returning non-primitive throws late — coercion inside `Map` key surprises** (`number + obj` via `valueOf` after missed hint).
5. **`@@species` surprise — subclass `map` returns base `Array` when `species` overridden to `Array`, breaking `instanceof` checks downstream** (`Array.isArray` still true, `instanceof MyArr` false).

---

## 8. Interview questions and answers (metaprogramming)

### [8.1. Common interview Q&A metaprogramming Proxy Reflect](<./sections/8. Interview questions and answers/8.1. Common interview QA metaprogramming Proxy Reflect.md>)

1. **The classics with mechanism-level answers** (13 traps, invariants, `Reflect.ownKeys` vs `Object.keys`, well-known symbols, `receiver` forwarding, `@@species`/`@@hasInstance`/`@@toStringTag`).
2. **What interviewers actually probe for** (narrating "trap → `Reflect.*` → invariant" vs reciting symbol names).
3. **Grading guidance** (junior/mid/senior signals, red flags like "`Proxy` mutates the target" or "`Reflect.get` equals `obj[key]`").

---

## 9. Overlaps to avoid (where this domain stops)

### [9.1. Boundaries what is covered elsewhere](<./sections/9. Overlaps to avoid/9.1. Boundaries what is covered elsewhere.md>)

1. **Primitive vs object, `Symbol` as type, `BigInt`, boxing — [Values Types and Coercion](<../03 Values Types and Coercion/README.md>).**
2. **Descriptors, `defineProperty`, enumeration order, `preventExtensions`/`seal`/`freeze`, `Object.assign`/`keys`/`entries` — [Objects in Depth](<../06 Objects in Depth/README.md>).**
3. **Prototype chain, constructors/`new`/`new.target`, `class`/`extends`/`super`, `#private` brand, `static {}` order — [Prototypes and Classes](<../07 Prototypes and Classes/README.md>); `instanceof` deep walk and cross-realm — there and here for `@@hasInstance` only.**
4. **Array length/holes/sort/TypedArray and `isConcatSpreadable` use (here only the hook definition) — [Arrays](<../08 Arrays/README.md>); iterables/`for...of`/generators/`Symbol.iterator`/`Symbol.asyncIterator` — [Iterables Generators and Async Iteration](<../10 Iterables Generators and Async Iteration/README.md>).**
5. **RegExp flags/groups and `@@match` dispatch use — [Strings and Regular Expressions](<../11 Strings and Regular Expressions/README.md>); `JSON`/`structuredClone` vs symbols (symbols skipped) — [JSON Serialization and Data Exchange](<../16 JSON Serialization and Data Exchange/README.md>).**
6. **Modules `import`/`export` live bindings and `Proxy` as capability boundaries — [Modules and Code Organization](<../14 Modules and Code Organization/README.md>); event-loop microtask ordering for promise-capability proxies — [Async Event Loop and Promises](<../13 Async Event Loop and Promises/README.md>).**

---

[← Back to JavaScript track](<../README.md>)
