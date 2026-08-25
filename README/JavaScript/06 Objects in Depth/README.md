# Objects in Depth

Objects as the core data structure: how literals and creation patterns work, what property descriptors really control, how prototype linkage is wired at birth, which `Object.*` utilities copy/inspect/safely reflect, and how immutability primitives behave (and where they stop) — with the checklist and production bugs mentors screen for.

## 0. Prerequisites

[Values, Types, and Coercion](<../03 Values Types and Coercion/README.md>) for the primitive vs object split and [ToPrimitive](<../03 Values Types and Coercion/sections/2. The conversion algorithms/2.3. ToPrimitive and the valueOf toString and Symbol.toPrimitive dance.md>) that runs on property keys; [Language Basics](<../02 Language Basics/README.md>) for [property access and optional chaining](<../02 Language Basics/sections/3. Operators/3.4. Property access dot brackets and optional chaining.md>) and [spread/rest/delete/in](<../02 Language Basics/sections/3. Operators/3.5. Inspection operators typeof instanceof in delete void spread rest.md>); [Variables, Scope, and Closures](<../04 Variables Scope and Closures/README.md>) for [lexical environments](<../04 Variables Scope and Closures/sections/2. Scope and lookup/2.1. Lexical scope and the scope chain how name lookup works.md>); [Functions Deep Dive](<../05 Functions Deep Dive/README.md>) for [methods vs function properties](<../05 Functions Deep Dive/sections/1. Function forms and the function object/1.3. Methods getters setters and the function object.md>) and [this as receiver](<../05 Functions Deep Dive/sections/3. this binding/3.1. Call-site rules default implicit explicit new and strict mode.md>).

---

## 1. Object creation and literals

### [1.1. Object literals: shorthand, computed properties, concise methods, and spread](<./sections/1. Object creation and literals/1.1. Object literals shorthand computed properties and spread.md>)

1. **Shorthand and computed keys** (when `{ x }` equals `{ x: x }` and when `[{expr}]` runs at creation time).
2. **Concise methods vs function properties** (super, name, enumerability, and why `get`/`set` need the literal form).
3. **Spread in literals is shallow copy with late-wins overwrite** (what it copies, what it skips, and where it throws).

### [1.2. Creation patterns: literal vs Object, Object.create, and constructor intro](<./sections/1. Object creation and literals/1.2. Creation patterns literal Object create and constructors.md>)

1. **`{}` vs `new Object()` vs `Object.create` — same idea, different prototype and intent** (including `null`-prototype dictionaries).
2. **Factory vs constructor — why both still exist** (closures vs `new`+`prototype`; class syntax preview without teaching it).
3. **Choosing the creation site** (literal for data, `Object.create(null)` for maps, constructor/class for shared behavior — full prototype story in Prototypes and Classes).

---

## 2. Properties and descriptors

### [2.1. Data vs accessor descriptors and attribute defaults](<./sections/2. Properties and descriptors/2.1. Data vs accessor descriptors and attribute defaults.md>)

1. **Two descriptor families, one slot** (data: `value`/`writable`; accessor: `get`/`set`; shared: `enumerable`/`configurable`).
2. **Literal vs `defineProperty` defaults diverge** (literals make `writable/enumerable/configurable: true`; `defineProperty` defaults to `false` — the top bug class).
3. **Reading the descriptor is the source of truth** (`getOwnPropertyDescriptor` shows what syntax actually installed).

### [2.2. Defining, observing, and configuring properties](<./sections/2. Properties and descriptors/2.2. Defining observing and configuring properties.md>)

1. **`defineProperty` / `defineProperties` — surgical installation** (adding non-enumerable, non-writable, non-configurable, or accessor properties after birth).
2. **`getOwnPropertyDescriptor` / `getOwnPropertyDescriptors` — inspection without invocation** (accessor `get` does NOT run).
3. **Configurability is one-way** (once `configurable: false`, delete/retype/attribute-flip are permanently locked — seal/freeze build on this).

### [2.3. Enumerability, enumeration order, and for-in mechanics](<./sections/2. Properties and descriptors/2.3. Enumerability enumeration order and for-in mechanics.md>)

1. **`enumerable` gates `for-in`, `Object.keys`, and spread** (but not `getOwnPropertyNames` / `getOwnPropertySymbols`).
2. **Own-property order is specified since ES2015** (integer indices ascending → string keys insertion order → symbols insertion order).
3. **`for-in` walks the chain and skips symbols** (and why `Object.keys` + `for-of` replaced it for data loops).

---

## 3. Prototype linkage intro

### [3.1. The prototype chain: getPrototypeOf, setPrototypeOf, Object.create, and __proto__](<./sections/3. Prototype linkage intro/3.1. The prototype chain getPrototypeOf setPrototypeOf and Object.create.md>)

1. **Every object has an internal `[[Prototype]]` — or `null`** (lookup walks the chain; `__proto__` is a legacy accessor, not the mechanism).
2. **Creation fixes the link** (`__proto__` in literals, second arg of `Object.create`, `new`+`prototype`; mutating later with `setPrototypeOf` deoptimizes — avoid in hot paths).
3. **Prototype vs `prototype` property** (objects *have* `[[Prototype]]`; functions *have* a `prototype` object used by `new` — conflating them is the classic confusion).

---

## 4. Object utilities and copying

### [4.1. Assign, merging, shallow copy, and fromEntries](<./sections/4. Object utilities and copying/4.1. Assign merging shallow copy and fromEntries.md>)

1. **`Object.assign` copies enumerable own string+symbol properties shallowly** (getters invoke, setters on target invoke, later sources win).
2. **Spread and `assign` share the same shallow-copy contract** (and the same "nested objects stay shared" surprise).
3. **`Object.fromEntries` reverses entries → object** (round-trip `entries` → transform → `fromEntries`; duplicate keys last-wins; symbol keys round-trip).

### [4.2. Keys, values, entries, hasOwn, and reflection APIs](<./sections/4. Object utilities and copying/4.2. Keys values entries hasOwn and reflection APIs.md>)

1. **`keys`/`values`/`entries` — enumerable string keys only** (`getOwnPropertyNames`/`getOwnPropertySymbols` / `Reflect.ownKeys` for the full picture).
2. **`Object.hasOwn` vs `hasOwnProperty` vs `in`** (own vs inherited, string vs symbol, and the `Object.create(null)` pitfall that made `hasOwn` necessary).
3. **`is` vs `===` for object-adjacent checks** (`Object.is(NaN, NaN)` true, `Object.is(-0, 0)` false — and where it matters).

### [4.3. Destructuring, rest, and spread patterns for objects](<./sections/4. Object utilities and copying/4.3. Destructuring rest and spread patterns for objects.md>)

1. **Shorthand destructuring with defaults and renames** (`const { a: x = 1 } = obj` — defaults trigger only on `undefined`).
2. **Rest collects own enumerable leftovers; spread collects into a new object** (both skip non-enumerable and prototype properties).
3. **Nested and computed-pattern destructuring** (when a pattern helps vs when straight access is clearer).

---

## 5. Integrity and immutability

### [5.1. Prevent extensions, seal, freeze — and the shallow reality](<./sections/5. Integrity and immutability/5.1. Prevent extensions seal freeze and shallow immutability.md>)

1. **Three levels: `preventExtensions` < `seal` < `freeze`** (what each locks: adding, deleting/configuring, writing — with descriptor tables).
2. **All three are shallow** (nested objects stay mutable; for deep freeze you must recurse — and decide about cycles/symbols).
3. **Fail-loud in strict mode, fail-silent in sloppy** (assignments/deletes throw `TypeError` strictly, silently return `false`/`value` otherwise — plus `isExtensible`/`isSealed`/`isFrozen` guards).

---

## 6. Important points to remember (objects)

### [6.1. Object checklist: reflex rules mentors screen for](<./sections/6. Important points to remember/6.1. Object checklist reflex rules mentors screen for.md>)

1. **Literal defaults vs `defineProperty` defaults — never mix them by accident** (the one-line review check).
2. **Shallow copy vs deep copy; enumerable vs non-enumerable; own vs inherited** (three dichotomies that explain most object bugs).
3. **The review grep list** (spread on maybe-null, `delete` in hot paths, `__proto__` mutation, `Object.assign` with getter side effects).

---

## 7. Common pitfalls → production bugs

### [7.1. Real production bugs caused by object mistakes](<./sections/7. Common pitfalls to production bugs/7.1. Real production bugs caused by object mistakes.md>)

1. **Shared nested state after shallow clone** (config merge that corrupts the default).
2. **Silent write silently ignored after `freeze` in sloppy mode** (mutation that "succeeded" but didn't).
3. **Prototype pollution via `__proto__` / `constructor.prototype`** (untrusted JSON keys writing the prototype).

---

## 8. Interview questions and answers (objects)

### [8.1. Common interview Q&A: objects, descriptors, prototypes](<./sections/8. Interview questions and answers/8.1. Common interview QA objects descriptors prototypes.md>)

1. **The classics with mechanism-level answers** (descriptor defaults, `assign` vs spread, `keys` vs `getOwnPropertyNames`, `hasOwn` vs `in`, prototype vs `prototype`).
2. **What interviewers actually probe for** (tracing descriptor installation and lookup, not reciting API names).
3. **Grading guidance** (junior/mid/senior signals, red flags like "freeze is deep" or "for-in lists own only").

---

## 9. Overlaps to avoid (where this domain stops)

### [9.1. Boundaries: what is covered elsewhere](<./sections/9. Overlaps to avoid/9.1. Boundaries what is covered elsewhere.md>)

1. **Prototype inheritance, class syntax, private fields, and `super` dispatch** — Prototypes and Classes domain.
2. **Collections, WeakMap/WeakRef lifetime, and iterator protocol** — Collections / Iterables domains.
3. **Serialization, structuredClone, JSON, and module exports** — JSON / Modules domains; coercion mechanics — Values domain.

---

[← Back to JavaScript track](<../README.md>)
