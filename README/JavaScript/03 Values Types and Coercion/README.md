# Values, Types, and Coercion

The value model underneath every line of JavaScript: what values exist, how they behave (identity, immutability, boxing), and the exact conversion algorithms that run when types mix — the machinery that explains the "weird" results other tutorials just laugh at.

## 0. Prerequisites

[Dynamic typing and late binding](<../01 Fundamentals and Mental Model/sections/2. How JavaScript executes/2.2. Dynamic typing late binding and their consequences.md>) for the "types live on values" mental model; [operators](<../02 Language Basics/README.md>) for where conversions show up syntactically.

---

## 1. The value model

### [1.1. Eight types, two families: primitives vs objects](<./sections/1. The value model/1.1. Eight types two families primitives vs objects.md>)

1. **Seven primitive kinds plus object** (undefined, null, boolean, string, symbol, number, bigint are primitives; arrays, dates, functions — everything else — is object).
2. **`typeof` reads the tag, imperfectly** (`typeof null === "object"` is a frozen bug; functions get their own result).
3. **Two families behave differently in three ways** (copying, mutation, identity comparison — see 1.2).

### [1.2. Immutability, identity, and copying: how primitives and objects differ](<./sections/1. The value model/1.2. Immutability identity and copying how primitives and objects differ.md>)

1. **Primitives are immutable** ("modifying" a string always produces a new one).
2. **Variables hold references to objects, copies of primitives** (assignment semantics explain aliasing bugs).
3. **Equality follows family lines** (value identity for primitives, reference identity for objects; `Object.is` for the edge cases).

---

## 2. The conversion algorithms

### [2.1. Explicit conversion toolbox: Number(), String(), Boolean(), parseInt(), parseFloat(), unary +](<./sections/2. The conversion algorithms/2.1. Explicit conversion toolbox Number String Boolean parseInt parseFloat and unary plus.md>)

1. **`Number()` parses whole strings or fails** (`"42px"` → NaN; whitespace-only → 0).
2. **`parseInt`/`parseFloat` scan prefixes** (`"42px"` → 42) — different contract, different bug class.
3. **`String()`/`Boolean()` never throw on ordinary values** (but `String(sym)` is allowed while `${sym}` throws).

### [2.2. ToString and ToNumber: the exact conversion tables](<./sections/2. The conversion algorithms/2.2. ToString and ToNumber the exact conversion tables.md>)

1. **ToNumber's asymmetric null/undefined row** (`null → 0`, `undefined → NaN` — memorize once, debug forever).
2. **String parsing accepts full numeric literals only** (hex/octal/binary prefixes yes, underscores no, anything else NaN).
3. **ToString has surprises too** (arrays join with commas, symbols throw, `-0` prints `"0"`).

### [2.3. ToPrimitive and the valueOf/toString/Symbol.toPrimitive dance](<./sections/2. The conversion algorithms/2.3. ToPrimitive and the valueOf toString and Symbol.toPrimitive dance.md>)

1. **Objects convert via a hint-driven method search** (`valueOf()` first for number/default hints, `toString()` first for string hints).
2. **`Symbol.toPrimitive` overrides everything** (and `Date` uses it to concatenate as string but subtract as number).
3. **This algorithm is why `[] + {}` works** (`"" + "[object Object]"` — narrated step by step).

### [2.4. ToBoolean: the complete falsy list](<./sections/2. The conversion algorithms/2.4. ToBoolean the complete falsy list.md>)

1. **Eight falsy values, nothing else** (`false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN` — so `"0"`, `[]`, `{}` are truthy).
2. **Boolean contexts never coerce objects** (except the browser-legacy `document.all` oddity).
3. **Loose equality does NOT use ToBoolean** (`x == false` converts *x* to number — a classic misread).

---

## 3. Coercion at work

### [3.1. Loose equality: the abstract equality algorithm walkthrough](<./sections/3. Coercion at work/3.1. Loose equality the abstract equality algorithm walkthrough.md>)

1. **Same types reduce to strict equality immediately** (the coercion branches only fire across families).
2. **Four cross-type rules cover every case** (null/undefined pair, boolean→number, string→number, object→primitive).
3. **Worked examples build the reflex** (`[] == ![]`, `[null] == 0`, `1n == 1` — each narrated through the algorithm).

### [3.2. Hidden coercion sites: relational operators, templates, and property keys](<./sections/3. Coercion at work/3.2. Hidden coercion sites relational operators templates and property keys.md>)

1. **Relational operators always take the numeric path** — unless both operands end up strings (`"10" < "9"` is true!).
2. **Property access stringifies keys** (`obj[1] === obj["1"]`; symbols are the exempt key type).
3. **Template interpolation calls ToString** (which throws on symbols — the one place explicit `String()` differs).

---

## 4. Boxing and wrapper objects

### [4.1. Wrapper objects vs primitives: boxing demystified](<./sections/4. Boxing and wrapper objects/4.1. Wrapper objects vs primitives boxing demystified.md>)

1. **Primitives have no methods, yet `"abc".toUpperCase()` works** (engines create a transient wrapper per property access).
2. **`new String("a")` creates an object — almost always a bug** (`new Boolean(false)` is truthy!).
3. **Writes through wrappers silently vanish** (strict mode turns them into TypeErrors).

---

## 5. The exotic primitives: Symbol and BigInt

### [5.1. Symbol: unique property keys beyond strings](<./sections/5. The exotic primitives Symbol and BigInt/5.1. Symbol unique property keys beyond strings.md>)

1. **Every symbol is unique; descriptions are labels, not identities** (`Symbol("id") !== Symbol("id")`).
2. **Symbols hide from the usual key listings** (`Object.keys`, `for-in`, JSON skip them; `Object.getOwnPropertySymbols` finds them).
3. **They refuse string contexts** (`"" + sym` throws — coercion can't leak them into strings by accident).

### [5.2. BigInt: integers beyond Number.MAX_SAFE_INTEGER](<./sections/5. The exotic primitives Symbol and BigInt/5.2. BigInt integers beyond MAX_SAFE_INTEGER.md>)

1. **Arbitrary-precision integer math with literal suffix `n`** (no rounding past 2^53 − 1 — the motivation).
2. **Never mixes with Number implicitly** (arithmetic throws; comparisons mostly work — learn exactly which).
3. **JSON and Math reject it** (serialize via replacer, compute via BigInt-native ops).

---

## 6. Important points to remember (values and coercion)

### [6.1. Coercion checklist: reflex rules mentors screen for](<./sections/6. Important points to remember/6.1. Coercion checklist reflex rules mentors screen for.md>)

1. **Convert at boundaries, compute inside** (`Number(input)` at the edge beats coercion archaeology later).
2. **The five reflex answers** (falsy list, null/undefined asymmetry, `+` overload, NaN checks via `Number.isNaN`, `==` only for `x == null`).
3. **Review checklist items** (what to grep for in code review before coercion bugs ship).

---

## 7. Common pitfalls → production bugs

### [7.1. Real production bugs caused by coercion](<./sections/7. Common pitfalls to production bugs/7.1. Real production bugs caused by coercion.md>)

1. **Form input arithmetic** (`"10" + 5` shipping cost bugs; boundary validation fixes it).
2. **Falsy-value defaults** (`||` eating legitimate `0`/`""` from config and API payloads).
3. **NaN propagation and sort surprises** (silent failures that surface days later in reports).

---

## 8. Interview questions and answers (values, types, and coercion)

### [8.1. Common interview Q&A: values, types, and coercion](<./sections/8. Interview questions and answers/8.1. Common interview QA values types and coercion.md>)

1. **The classics with mechanism-level answers** (`typeof null`, `0.1 + 0.2`, `[] == ![]`, NaN identity, MAX_SAFE_INTEGER off-by-one).
2. **What interviewers actually probe for** (narrating coercion chains vs outcome-memorization).
3. **Grading guidance** (how to calibrate junior/mid/senior signals).

---

## 9. Overlaps to avoid (where this domain stops)

### [9.1. Boundaries: what is covered elsewhere](<./sections/9. Overlaps to avoid/9.1. Boundaries what is covered elsewhere.md>)

1. **Operator syntax, precedence, and practical guidance** — Language Basics domain.
2. **Number precision strategies, formatting, decimal money math** — Numbers, Dates, Math, Temporal domain.
3. **Protocol/metaprogramming deep dives** (`Symbol.iterator`, Proxy/Reflect hooks) — Iterables and Metaprogramming domains.

---

[← Back to JavaScript track](<../README.md>)
