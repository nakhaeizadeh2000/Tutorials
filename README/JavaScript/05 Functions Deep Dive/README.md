# Functions Deep Dive

Functions as values: how the four declaration forms differ, parameter mechanics (defaults, destructuring, rest, `arguments`), the complete `this` binding model (call-site rules, arrow lexical capture, explicit binding), and first-class/execution patterns (callbacks, HOFs, IIFE ancestry, recursion) — with the bugs and checklist mentors screen for.

## 0. Prerequisites

[Variables, Scope, and Closures](<../04 Variables Scope and Closures/README.md>) for lexical scope, closures, and TDZ (especially [TDZ](<../04 Variables Scope and Closures/sections/1. Declarations and bindings/1.2. Temporal dead zone why early access throws.md>) and [closures](<../04 Variables Scope and Closures/sections/3. Closures/3.1. Closures functions that remember their birth environment.md>)); [Values, Types, and Coercion](<../03 Values Types and Coercion/README.md>) for `this` boxing and [ToPrimitive](<../03 Values Types and Coercion/sections/2. The conversion algorithms/2.3. ToPrimitive and the valueOf toString and Symbol.toPrimitive dance.md>) edge cases; [Language Basics](<../02 Language Basics/README.md>) for [ASI statement vs expression](<../02 Language Basics/sections/1. Program structure and syntax/1.1. Statements expressions and semicolons ASI reality.md>) and basic loop/control flow.

---

## 1. Function forms and the function object

### [1.1. Function declarations, expressions, and hoisting](<./sections/1. Function forms and the function object/1.1. Function declarations expressions and hoisting.md>)

1. **Declarations vs expressions vs named function expressions** (what each creates, when the binding exists, and what `name` captures).
2. **Hoisting reality for functions** (declarations fully hoisted, expressions follow variable rules, block-declared functions are mode-dependent).
3. **When each form is the right tool** (top-level API declarations, conditional definition via expressions, self-reference via NFE name).

### [1.2. Arrow functions: syntax, what they lack, and when to use each](<./sections/1. Function forms and the function object/1.2. Arrow functions syntax what they lack and when to use each.md>)

1. **Concise vs block bodies and single-param sugar** (implicit return, object-literal gotcha, `async` arrow shape).
2. **What arrows don't have** (no `this`, no `arguments`, no `prototype`, no `super`, not constructible — all one design decision).
3. **Choosing arrow vs function** (callback lexical capture vs method/constructors needing dynamic `this`).

### [1.3. Methods, getters, setters, and the function object](<./sections/1. Function forms and the function object/1.3. Methods getters setters and the function object.md>)

1. **Method definitions vs function properties** (concise methods, computed names, `super` in concise methods only).
2. **`name`, `length`, `prototype`, and `Function` constructor** (what each property really measures — and why `new Function` is `eval` in disguise).
3. **Getters/setters are accessor descriptors, not methods** (invocation on access, not call).

---

## 2. Parameters and arguments

### [2.1. Defaults, destructuring, rest, and the arguments object](<./sections/2. Parameters and arguments/2.1. Defaults destructuring rest and the arguments object.md>)

1. **Defaults are per-call expressions with their own scope** (evaluation order, TDZ between params, `undefined` vs missing).
2. **Destructuring and rest in parameter lists** (nested patterns, required-field throws, `...rest` must be last and collects truly).
3. **`arguments` vs rest: the legacy exotic object** (array-like but not array, link to params in sloppy mode, absent on arrows).

### [2.2. Arity, length, and edge cases](<./sections/2. Parameters and arguments/2.2. Arity length and edge cases.md>)

1. **`length` counts params before first default/rest** (plain destructuring counts; `= {}` or `= 1` stops the count — arity vs argument count).
2. **TDZ and evaluation quirks in defaults** (later defaults see earlier params, not vice versa; self-reference traps).
3. **Strict vs sloppy parameter realities** (duplicate params, `arguments` linkage, `caller`/`callee` restrictions).

---

## 3. this binding

### [3.1. Call-site rules: default, implicit, explicit, new — and strict mode](<./sections/3. this binding/3.1. Call-site rules default implicit explicit new and strict mode.md>)

1. **Four rules and their precedence** (default → implicit → explicit → `new` — narrated with a single `this` parameter mental model).
2. **Strict vs sloppy default divergence** (`undefined` vs `globalThis`, and why boxing of primitives matters).
3. **Common "lost `this`" sites** (detached method, callback, nested function) and the fix taxonomy.

### [3.2. Arrow lexical this and why callbacks break or heal](<./sections/3. this binding/3.2. Arrow lexical this and why callbacks break or heal.md>)

1. **Arrows close over `this` like any lexical variable** (no call-site rebinding — ever).
2. **Where arrow this heals** (timers, iterators, promise handlers inside methods).
3. **Where arrow this hurts** (object-literal methods, prototype methods, event handlers needing dynamic `this`).

### [3.3. call, apply, bind, and bound functions](<./sections/3. this binding/3.3. call apply bind and bound functions.md>)

1. **`call`/`apply` invoke with explicit this** (spread vs array argument, `null`/`undefined` handling and boxing).
2. **`bind` creates a bound function exotic object** (permanent `this`, partial application, `length` adjustment, `new` still works but ignores bound `this`).
3. **Choosing between three tools** (one-shot `call`, dynamic-arity `apply`, reusable `bind` — and when to avoid all three).

---

## 4. First-class and execution patterns

### [4.1. First-class functions: callbacks, higher-order functions, and composition](<./sections/4. First-class and execution patterns/4.1. First-class functions callbacks higher-order functions and composition.md>)

1. **Functions as values** (passing, returning, storing — the trait that enables callbacks/HOFs).
2. **Higher-order functions in the stdlib** (`map`/`filter`/`reduce` contracts; predicate vs mapper shape).
3. **Composition and partial application** (hand-rolled `compose`/`pipe`, currying vs `bind`-partial trade-offs).

### [4.2. IIFE, module ancestry, and modern replacements](<./sections/4. First-class and execution patterns/4.2. IIFE module ancestry and modern replacements.md>)

1. **Why IIFE existed** (pre-block-scope privacy, loop-capture fix, library namespace before ESM).
2. **IIFE forms and the semicolon hazard** (`(function(){})()` vs `!function(){}()` and the leading-`(` ASI trap).
3. **Modern replacements** (block + `let`/`const`, ESM, and when an IIFE still earns its keep).

### [4.3. Recursion, stacks, and tail-call reality](<./sections/4. First-class and execution patterns/4.3. Recursion stacks and tail-call reality.md>)

1. **Recursion shape: base case + progress** (inductive correctness check, stack-depth cost).
2. **JavaScript stack limits and trampolines** (call-stack size, mutual recursion, iterative rewrites).
3. **Tail calls: spec promise vs engine reality** (ES2015 proper tail calls exist only in Safari/JavaScriptCore in practice — don't rely elsewhere).

---

## 5. Important points to remember (functions)

### [5.1. Function checklist: reflex rules mentors screen for](<./sections/5. Important points to remember/5.1. Function checklist reflex rules mentors screen for.md>)

1. **Defaults before body, `this` at call site, arrows capture** (three reflexes that explain most function bugs).
2. **The review grep list** (detached method references, `function` inside methods that should be arrows, `bind` in hot paths).
3. **When to prefer which form** (declaration for top-level, arrow for lexical capture, `function` for constructible/method `this`).

---

## 6. Common pitfalls → production bugs

### [6.1. Real production bugs caused by function mistakes](<./sections/6. Common pitfalls to production bugs/6.1. Real production bugs caused by function mistakes.md>)

1. **Lost `this` in callbacks breaks method calls** (event handler, `setTimeout`, `Array` callbacks with `thisArg`).
2. **Defaults and destructuring silently throw at call time** (required fields, `null` vs `undefined` divergence).
3. **Rest/arguments confusion and prototype misuse** (variadic APIs that mishandle arity, attempt to `new` an arrow).

---

## 7. Interview questions and answers (functions)

### [7.1. Common interview Q&A: functions, this, and binding](<./sections/7. Interview questions and answers/7.1. Common interview QA functions this and binding.md>)

1. **The classics with mechanism-level answers** (`this` tracing, arrow vs function, `bind` after `bind`, NFE scope, `arguments` leakage).
2. **What interviewers actually probe for** (call-site reasoning vs outcome memorization; explaining *precedence* among the four rules).
3. **Grading guidance** (junior/mid/senior signals, red flags like "arrow `this` is null" or "bind mutates the original").

---

## 8. Overlaps to avoid (where this domain stops)

### [8.1. Boundaries: what is covered elsewhere](<./sections/8. Overlaps to avoid/8.1. Boundaries what is covered elsewhere.md>)

1. **Lexical scope and closure mechanics** — Variables, Scope, and Closures domain.
2. **Prototype, class, private fields, and `new` internals** — Prototypes and Classes domain.
3. **Generators, async functions, and iterables** — Iterables/Async domains; modules/imports — Modules domain.

---

[← Back to JavaScript track](<../README.md>)
