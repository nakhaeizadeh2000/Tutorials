# Variables, Scope, and Closures

Where values live: declaration forms and their contracts, how name lookup walks the scope chain, what "hoisting" actually is, closures as captured environments (patterns, loops, garbage collection), and the top-level scope rules that differ between scripts and modules.

## 0. Prerequisites

[The value model](<../03 Values Types and Coercion/sections/1. The value model/1.1. Eight types two families primitives vs objects.md>) for what bindings hold; [strict mode](<../01 Fundamentals and Mental Model/sections/3. Running JavaScript today/3.3. Strict mode sloppy mode and modern defaults.md>) for the sloppy behaviors this domain explains.

---

## 1. Declarations and bindings

### [1.1. var, let, const: mechanics and when each is still defensible](<./sections/1. Declarations and bindings/1.1. var let const mechanics and when each is still defensible.md>)

1. **Three declarators, three contracts** (`var` function-scoped and re-declarable; `let` block-scoped and single-bind; `const` = `let` plus mandatory initializer and frozen binding).
2. **`const` freezes the binding, never the value** (`const x = {}` still lets `x.y = 1`; only reassignment throws).
3. **Modern default is `const`, escalate to `let` on need** (`var` survives in legacy code — and one deliberate niche).

### [1.2. Temporal dead zone: why early access throws](<./sections/1. Declarations and bindings/1.2. Temporal dead zone why early access throws.md>)

1. **`let`/`const`/`class` exist from scope entry but stay uninitialized until their line runs** (any read/write before it → `ReferenceError`).
2. **Even `typeof` throws inside a TDZ** (the undeclared-identifier safety net does not apply to declared-but-early names).
3. **The TDZ is a fail-fast feature** (it converts silent `undefined` propagation into an immediate, located error).

---

## 2. Scope and lookup

### [2.1. Lexical scope and the scope chain: how name lookup works](<./sections/2. Scope and lookup/2.1. Lexical scope and the scope chain how name lookup works.md>)

1. **Scope is decided by where code is written, not where it runs** (lexical nesting fixed at parse time — JavaScript has no dynamic scope).
2. **Lookup walks outward and stops at the first match** (inner declarations shadow outer ones; missing everywhere → `ReferenceError`).
3. **The global level has two layers** (`var`/function declarations land on `globalThis`; `let`/`const` live in a separate declarative record).

### [2.2. Hoisting: the reality — creation phase, not magic](<./sections/2. Scope and lookup/2.2. Hoisting the reality creation phase not magic.md>)

1. **Nothing moves; initialization timing differs per declarator** (functions usable immediately, `var` starts `undefined`, `let`/`const`/`class` start in TDZ).
2. **Function expressions follow variable rules** (only the *variable* hoists; the function value exists after its line evaluates).
3. **Function declarations inside blocks are mode-dependent minefields** (block-scoped under strict mode, Annex-B web-compat behavior otherwise — avoid entirely).

---

## 3. Closures

### [3.1. Closures: functions that remember their birth environment](<./sections/3. Closures/3.1. Closures functions that remember their birth environment.md>)

1. **A closure = function + the variable environment it was created in** (it keeps working after the outer function has returned).
2. **Captured variables are live bindings, not snapshots** (writes through any holder are visible to all holders).
3. **Closures capture variables — never call-time state** (`this` of regular functions comes from the call site; arrow functions close over the surrounding one — full story in the Functions domain).

### [3.2. Loops and closures: var, let, and per-iteration capture](<./sections/3. Closures/3.2. Loops and closures var let and per iteration capture.md>)

1. **The classic bug: `var i` gives every callback the SAME binding** (`setTimeout` fan-out prints the final index five times).
2. **`let` in a loop head creates a fresh binding per iteration** (each callback captures its own copy — guaranteed by spec, not luck).
3. **Which loops copy, exactly** (`for`, `for-of`, `for-in` heads do; a binding declared *before* any loop does not — know the line).

### [3.3. Closure patterns: privacy, factories, memoization](<./sections/3. Closures/3.3. Closure patterns privacy factories memoization.md>)

1. **Private state without classes** (counters, sessions, connection holders hidden behind a returned interface).
2. **Factories configure behavior at creation time** (return small functions pre-loaded with their settings).
3. **Memoize/once wrap computation in a cache closure** (and each instance owns its cache — no shared state by accident).

### [3.4. Closures and garbage collection: what stays alive](<./sections/3. Closures/3.4. Closures and garbage collection what stays alive.md>)

1. **An environment lives as long as any function that can reach it** (closures extend object lifetimes past their creator's return).
2. **Timers and listeners pin closures until cleared** (forgotten intervals/listeners are the top real-world retention source).
3. **Retention is not a leak until it grows without bound** (bounded caches fine, unbounded accumulation OOM — with heap-snapshot debugging pointers).

---

## 4. Top-level scopes: scripts, modules, and eval

### [4.1. Script vs module top level: globalThis and the declarative record](<./sections/4. Top level scopes scripts modules and eval/4.1. Script vs module top level globalThis and the declarative record.md>)

1. **Classic scripts share one global stage** (`var`/function declarations become `globalThis` properties; every later script sees them).
2. **Modules get their own top-level scope, always strict** (exports are the interface; nothing leaks between modules).
3. **Top-level `this`: object vs undefined** (`this === globalThis` in scripts, `undefined` in modules — a reliable environment sniff).

---

## 5. Important points to remember (variables, scope, closures)

### [5.1. Scope checklist: reflex rules mentors screen for](<./sections/5. Important points to remember/5.1. Scope checklist reflex rules mentors screen for.md>)

1. **Default `const`; narrowest scope; declare before use** (three defaults that eliminate most scoping bugs before they exist).
2. **The reflex answers** (loop-head capture, TDZ on refactor, implicit-global smell, timer/listener cleanup, shadowing review).
3. **What to grep for in code review** (`var`, undeclared assignments, bare `setInterval`, module-scope mutable state).

---

## 6. Common pitfalls → production bugs

### [6.1. Real production bugs caused by scoping mistakes](<./sections/6. Common pitfalls to production bugs/6.1. Real production bugs caused by scoping mistakes.md>)

1. **Implicit globals corrupt shared state** (one missing `let` in sloppy mode turns a local into a cross-request global on Node).
2. **Async fan-out ships wrong data** (the `var i` capture bug sending user 5's data to everyone).
3. **Module-level caches and pinned closures eat memory** (unbounded Maps and forgotten timers → RSS climbs for days).

---

## 7. Interview questions and answers (scope and closures)

### [7.1. Common interview Q&A: variables, scope, and closures](<./sections/7. Interview questions and answers/7.1. Common interview QA variables scope and closures.md>)

1. **The classics with mechanism-level answers** (what is a closure, loop + `setTimeout` output, var/let/const table, TDZ purpose, hoisting demystified).
2. **What interviewers actually probe for** (live-binding understanding vs outcome memorization; leak reasoning).
3. **Grading guidance** (calibrating junior/mid/senior signals on tracing questions).

---

## 8. Overlaps to avoid (where this domain stops)

### [8.1. Boundaries: what is covered elsewhere](<./sections/8. Overlaps to avoid/8.1. Boundaries what is covered elsewhere.md>)

1. **Declaration syntax and loop grammar** — Language Basics domain.
2. **`this` binding rules and arrow-function details** — Functions Deep Dive domain.
3. **import/export mechanics, circular imports, live-binding exports** — Modules domain; deep GC internals — Memory domain.

---

[← Back to JavaScript track](<../README.md>)
