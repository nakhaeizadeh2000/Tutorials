# JavaScript language basics

The grammar of the language: program structure, control flow, and operators — including the exact rules that turn "it looks right" into "it is right".

## 1. Program structure and syntax

### [1.1. Statements, expressions, and semicolons (ASI reality)](<./sections/1. Program structure and syntax/1.1. Statements expressions and semicolons ASI reality.md>)

1. **Statements act; expressions produce values** (expression-oriented style falls out naturally once you see it).
2. **ASI has precise rules** (newline-terminated statements get semicolons *except* when the next line can continue them — a handful of risky patterns cover all real bugs).
3. **Mechanical consistency beats personal taste** (formatter-enforced policy makes the ASI debate moot).

### [1.2. Identifiers, keywords, and naming conventions](<./sections/1. Program structure and syntax/1.2. Identifiers keywords and naming conventions.md>)

1. **Identifier rules** (letters/`$`/`_` start, Unicode allowed, reserved words banned as variables but fine as property names).
2. **Conventions carry meaning** (`camelCase` locals, `PascalCase` types/constructors, `SCREAMING_SNAKE` module constants).
3. **Names are API design** (intention-revealing names survive refactors; clever abbreviations don't).

---

## 2. Control flow

### [2.1. Conditionals: if, switch, ternary (fall-through traps included)](<./sections/2. Control flow/2.1. Conditionals if switch ternary and fallthrough traps.md>)

1. **switch matches one value with strict equality** (ranges and compound conditions need if-chains or lookup maps).
2. **Fall-through is a loaded weapon** (missing `break` silently executes the next case's body).
3. **Ternary produces values, not actions** (nesting beyond one level destroys readability).

### [2.2. Classic loops: while, do-while, for (break, continue, labels)](<./sections/2. Control flow/2.2. Classic loops while do while for break continue and labels.md>)

1. **for when the count is known** (init/test/update in one line; off-by-one discipline lives here).
2. **while/do-while when only the condition matters** (`do-while` runs at least once — retries, menus).
3. **break/continue/labels** (labeled statements rescue nested-loop control flow; heavy use signals refactor).

### [2.3. for-of vs for-in (iteration semantics and traps)](<./sections/2. Control flow/2.3. for-of vs for-in iteration semantics and traps.md>)

1. **for-of iterates values of iterables** (arrays, strings, Map/Set, generators — the data-loop default).
2. **for-in iterates string keys of enumerable properties, including inherited ones** (object inspection, not array traversal).
3. **Guard rails replace raw for-in** (`Object.keys/values/entries` + for-of covers ~every legitimate use safely).

---

## 3. Operators

### [3.1. Arithmetic, precedence, associativity (coercion side effects)](<./sections/3. Operators/3.1. Arithmetic operators precedence associativity and coercion side effects.md>)

1. **Precedence then associativity decide order** (`**` binds right-to-left; parentheses are free documentation).
2. **Arithmetic coerces operands to numbers** (`"3" * "4"` → 12) — but `+` concatenates when either side is a string.
3. **NaN poisons, Infinity saturates** (`%` is remainder with dividend's sign, not true modulo).

### [3.2. Equality: loose vs strict (and when either is safe)](<./sections/3. Operators/3.2. Equality loose vs strict and when either is safe.md>)

1. **=== compares type AND value without conversion** (`NaN !== NaN`; use `Object.is` for special cases).
2. **== coerces first** (the abstract equality algorithm is memorization-hostile; two sanctioned uses exist).
3. **Default to strict everywhere** (lint rule `eqeqeq`, exceptions documented).

### [3.3. Logical operators: short-circuit, nullish, compound assignment](<./sections/3. Operators/3.3. Logical operators short circuit nullish and compound assignment.md>)

1. **&& and || return operands, not booleans** (short-circuiting makes them control-flow tools).
2. **?? treats only null/undefined as missing** (fixes the `||` default bug for valid falsy values like `0` or `""`).
3. **Compound logical assignment** (`||=`, `&&=`, `??=` combine test+set; each checks different emptiness).

### [3.4. Property access: dot, brackets, optional chaining](<./sections/3. Operators/3.4. Property access dot brackets and optional chaining.md>)

1. **Dot for identifier-safe names, brackets for everything else** (computed keys, numeric access, dynamic names).
2. **?. short-circuits the whole chain on null/undefined** (also guards calls `a.b?.()` and indexing `a?.[i]`).
3. **?. is null-guarding, not error-proofing** (it won't catch calling a non-function or earlier throws).

### [3.5. Inspection and structural operators: typeof, instanceof, in, delete, void, spread/rest](<./sections/3. Operators/3.5. Inspection operators typeof instanceof in delete void spread rest.md>)

1. **typeof answers a narrow question** (eight strings; `typeof null === "object"` is a frozen bug).
2. **instanceof walks prototypes** (unreliable across realms and useless for primitives).
3. **in tests keys, delete mutates objects, void forces undefined, spread/rest copy/collect enumerables shallowly**.

---

## 4. Important points to remember (basics)

### [4.1. Basics checklist (correctness traps mentors screen for)](<./sections/4. Important points to remember/4.1. Basics checklist correctness traps mentors screen for.md>)

1. **The ASI risk list**, **for-in vs for-of**, **== coercion traps**, **|| vs ??** — each compressed to a decision rule.
2. **Operator precedence table habits** and when to just add parentheses.

---

## 5. Interview questions and answers (language basics)

### [5.1. Common interview Q&A: syntax, control flow, and operators](<./sections/5. Interview questions and answers/5.1. Common interview QA syntax control flow and operators.md>)

1. **for-in on arrays**, **== vs ===**, **short-circuit return values**, **typeof null**, **delete on arrays** and more — model answers plus what interviewers actually probe for.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Coercion algorithms in depth** — Values, Types, and Coercion domain.
2. **Iterators/generators protocol internals** — Iterables, Generators domain; here only loop-level behavior.
3. **Object property descriptors/deletion semantics deep dive** — Objects in Depth domain.

---

[← Back to JavaScript track](<../README.md>)
