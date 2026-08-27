# JSON Serialization and Data Exchange

How the text format `JSON` relates to JavaScript literals (RFC 8259 vs ECMA-262, the JSON superset, and why `JSON` is not JavaScript), what `JSON.stringify` really serializes (enumerable string own keys only, `undefined`/`function`/`symbol` omission, `Infinity`/`NaN` → `null`, `-0` → `0`, `BigInt` throws, circular `TypeError`, and hole handling), how `replacer` and `space` shape deterministic output, how `toJSON` lets any object customize its wire form, how `JSON.parse` enforces strict grammar and surfaces `SyntaxError`, how `reviver` rebuilds dates/`BigInt`s safely (and filters prototype-pollution keys), where JSON silently loses information (truncation past `MAX_SAFE_INTEGER`, sparse arrays, `Map`/`Set`/`Date` shapes), and how `structuredClone` and broader data-exchange patterns (APIs, NDJSON, binary + `base64`) complement JSON — with the checklist and production bugs mentors screen for.

## 0. Prerequisites

[Values Types and Coercion](<../03 Values Types and Coercion/README.md>) for [primitive vs object and `BigInt`/`Symbol` identity](<../03 Values Types and Coercion/sections/1. The value model/1.1. Eight types two families primitives vs objects.md>) and [the `BigInt` JSON throw](<../03 Values Types and Coercion/sections/5. The exotic primitives Symbol and BigInt/5.2. BigInt integers beyond MAX_SAFE_INTEGER.md>); [Objects in Depth](<../06 Objects in Depth/README.md>) for [enumerability and enumeration order](<../06 Objects in Depth/sections/2. Properties and descriptors/2.3. Enumerability enumeration order and for-in mechanics.md>) and [data vs accessor descriptors](<../06 Objects in Depth/sections/2. Properties and descriptors/2.1. Data vs accessor descriptors and attribute defaults.md>) and [prototype pollution via `__proto__`](<../06 Objects in Depth/sections/1. Object creation and literals/1.2. Creation patterns literal Object create and constructors.md>); [Arrays](<../08 Arrays/README.md>) for [holes vs `undefined` and sparse arrays](<../08 Arrays/sections/2. Holes sparsity and length/2.1. Holes vs undefined sparse arrays and empty slots.md>) and [ArrayBuffer and TypedArray](<../08 Arrays/sections/5. Transforming ordering and typed preview/5.3. ArrayBuffer TypedArray and DataView how they differ from Array.md>); [Numbers Dates Math and Temporal](<../12 Numbers Dates Math and Temporal/README.md>) for [IEEE-754 `NaN`/`Infinity`/`-0` and `MAX_SAFE_INTEGER` collapse](<../12 Numbers Dates Math and Temporal/sections/1. Number model/1.1. Number primitives IEEE-754 NaN Infinity and negative zero.md>) and [safe-integer `BigInt` boundary](<../12 Numbers Dates Math and Temporal/sections/1. Number model/1.2. Safe integers BigInt boundary epsilon and precision.md>); [Strings and Regular Expressions](<../11 Strings and Regular Expressions/README.md>) for [string primitives and well-formedness](<../11 Strings and Regular Expressions/sections/1. String model/1.1. String primitives immutability UTF-16 and well-formedness.md>); [Modules and Code Organization](<../14 Modules and Code Organization/README.md>) for [JSON modules `with {type:"json"}`](<../14 Modules and Code Organization/sections/4. Dynamic import and meta/4.2. import.meta import attributes and JSON modules.md>); [Error Handling and Debugging](<../15 Error Handling and Debugging/README.md>) for [parse `SyntaxError` and how `cause` preserves context](<../15 Error Handling and Debugging/sections/1. Error taxonomy/1.1. Built-in Error types and when engines throw them.md>).

---

## 1. JSON as a format

### [1.1. JSON grammar vs JavaScript literals history and the JSON superset](<./sections/1. JSON as a format/1.1. JSON grammar vs JavaScript literals history and the JSON superset.md>)

1. **Grammar in one table** (which literals map: `object`/`array`/`string`/`number`/`true`/`false`/`null` only; no comments/trailing commas/`undefined`/functions)
2. **History that matters** (Douglas Crockford → RFC 4627/8259 vs ECMA-262; `JSON` added ES5.1 as a single `JSON` object; superset ES2019 fixing `U+2028`/`U+2029` line terminators)
3. **Why the strictness is the feature** (interoperability across languages, single-pass parsing, no code execution)
4. **Modern guidance** (never `eval` JSON; MIME `application/json`; `JSON` vs JS literal diff snap-quiz)

### [1.2. JSON values documents and streaming limits](<./sections/1. JSON as a format/1.2. JSON values documents and streaming limits.md>)

1. **Document rules** (RFC top-level: one value; some parsers allow streaming NDJSON — newline-delimited JSON not valid JSON but ecosystem)
2. **Value limits** (UTF-8/UTF-16 requirement, string escape table `\" \\ \/ \b \f \n \r \t \uXXXX`, lossless `\uXXXX` round-trip)
3. **Size and shape trade-offs** (text vs binary, compression, streaming need vs buffering whole doc)
4. **When JSON is not enough** (binary blobs, graphs, circular, 64-bit ints — forward to §5)

---

## 2. Stringifying and serialization

### [2.1. What JSON.stringify serializes and what it drops](<./sections/2. Stringifying and serialization/2.1. What JSON.stringify serializes and what it drops.md>)

1. **The enumerable-string-own filter** (only enumerable own string keys; symbols/inherited/non-enumerable skipped; `null` prototype data)
2. **Omission vs nullification** (in objects `undefined`/`function`/`symbol` omitted; in arrays `undefined`→`null`; `Infinity`/`NaN`→`null`; `-0`→`"0"`)
3. **Hard fails** (`BigInt` throws `TypeError`; circular throws `TypeError`; TypedArray boxed as plain object surprise)
4. **Hole semantics** (sparse array hole → `null` in stringify vs `undefined` in JS — same as array `undefined` slot)

### [2.2. Replacer and space deterministic output and performance](<./sections/2. Stringifying and serialization/2.2. Replacer and space deterministic output and performance.md>)

1. **Replacer array vs function** (array allowlist filters keys before stringify; function `(k,v)` transforms values including the `""` wrapper root)
2. **Determinism illusion** (enumeration order guarantees + `replacer` ordering; `space` indentation; `JSON.stringify` without replacer already respects ES2015 order)
3. **Common transforms** (strip private keys, coerce `BigInt`→`string`, shorten long strings; never use replacer to do reviver work)
4. **Performance note** (replacer called per node — O(n); `space` pretty-print for debugging only)

### [2.3. toJSON protocol custom serialization and recursion](<./sections/2. Stringifying and serialization/2.3. toJSON protocol custom serialization and recursion.md>)

1. **The protocol** (`obj.toJSON(key)` called with holding key if present; return value gets serialized instead of the object)
2. **Built-ins that use it** (`Date.prototype.toJSON` → `toISOString()`; `BigInt` deliberately has none — throws)
3. **Custom shapes** (expose a stable wire form, hide internal slots; `toJSON` inside replacer runs first — ordering pitfall)
4. **Recursion guard** (return value can still contain cycles; `toJSON` that returns `this` with cycle still throws)

---

## 3. Parsing and revival

### [3.1. JSON.parse strictness errors and safe parsing](<./sections/3. Parsing and revival/3.1. JSON.parse strictness errors and safe parsing.md>)

1. **Strict grammar enforced** (trailing commas, comments, single quotes, lone `\u` all `SyntaxError`; `JSON.parse` is not `eval`)
2. **Error shape** (`SyntaxError` with engine-specific message; always wrap in `try/catch` at boundary; attach `cause` for context)
3. **Text first** (`parse` expects `string`; `JSON.parse(null)` → `SyntaxError` via `ToString`; coerce at call-site)
4. **One-pass safety** (no code execution; but payload can still pollute via `__proto__` keys — reviver must filter)

### [3.2. Reviver post-processing dates BigInts and key filtering](<./sections/3. Parsing and revival/3.2. Reviver post-processing dates BigInts and key filtering.md>)

1. **Reviver bottom-up** (called for every key bottom-up including wrapper `""`; `return undefined` deletes the property)
2. **Canonical rescues** (ISO-8601 → `Date` via regex; numeric strings → `BigInt` with `BigInt()`; keep IDs as strings when beyond safe integer)
3. **Pollution filter** (`k === "__proto__"` or `k === "constructor"` with `"prototype"` → `undefined`; or null-proto target after parse)
4. **Returning the parsed shape** (reviver that forgets `return value` for `""` key returns `undefined` — entire result becomes `undefined`)

---

## 4. Edge cases and lossy conversions

### [4.1. Circular structures sparse arrays and copy pitfalls](<./sections/4. Edge cases and lossy conversions/4.1. Circular structures sparse arrays and copy pitfalls.md>)

1. **Circular `TypeError`** (path `a.b.c` cycle; depth-first `Set` guard pattern vs naive try/catch)
2. **Copy-by-JSON antics** (`JSON.parse(JSON.stringify(x))` omits non-enumerable/`undefined`/function/symbol, collapses `Date`→string, drops `Map`/`Set`, clobbers `undefined` slots as `null`)
3. **Holes vs `null`** (hole stringifies to `null`; round-trip via JSON makes sparse array dense with `null`s)
4. **Alternative first** (use `structuredClone` when you need clone — §5 — not JSON round-trip)

### [4.2. Numbers beyond safe integer Infinity NaN and negative zero](<./sections/4. Edge cases and lossy conversions/4.2. Numbers beyond safe integer Infinity NaN and negative zero.md>)

1. **Special numbers** (`-0` stringifies `"0"`; `NaN`/`Infinity` stringify `null` in values but throw nowhere — lossy by design)
2. **The collapse past 2^53** (`9007199254740993` stored as `"9007199254740992"` before it leaves JS; `JSON` cannot recover digits)
3. **BigInt strategy** (no native support; stringify via replacer `bigint→string`; parse via reviver `string→BigInt`; keep contract string-typed)
4. **Date-as-string trap** (`Date` → ISO string; `reviver` required or `Date` stays string — `typeof` after parse is string, not `Date`)

---

## 5. Beyond JSON structuredClone and data exchange

### [5.1. structuredClone deep cloning and limitations](<./sections/5. Beyond JSON structuredClone and data exchange/5.1. structuredClone deep cloning and limitations.md>)

1. **What `structuredClone` clones** (primitives, plain objects, `Array`, `Map`, `Set`, `Date`, `RegExp`, `ArrayBuffer`/`TypedArray`/`DataView`, `Error`, `Blob` where available — HTML spec algorithm)
2. **What it does not clone** (functions, `WeakMap`/`WeakSet`, non-transferable hosts, descriptors/getters become plain data)
3. **Circles handled** (preserves object identity and cycles — unlike JSON which throws; shared refs stay shared)
4. **When to pick which** (clone → `structuredClone`; wire → `JSON`; transfer large bytes → `postMessage` + transfer list)

### [5.2. Data exchange patterns APIs NDJSON binary and base64](<./sections/5. Beyond JSON structuredClone and data exchange/5.2. Data exchange patterns APIs NDJSON binary and base64.md>)

1. **API contract rules** (IDs as strings, timestamps as ISO, declare `application/json`; snake vs camel is JSON still; schema vs schemaless trade-off)
2. **Streaming JSON** (NDJSON `line\n` JSON + `JSON.parse` per line; large arrays streamed via `JSONStream` — never buffer 100 MB as one `parse`)
3. **Binary supplement** (JSON + `base64`/`ArrayBuffer`/`Uint8Array`; size cost ~33% expand; prefer `Response.arrayBuffer()`/`Blob` for bytes)
4. **Security and hardening** (never trust JSON shape; validate with guard/`zod`/JSON Schema; filter `__proto__` at parse or `Object.create(null)` target)

---

## 6. Important points to remember (JSON)

### [6.1. JSON checklist reflex rules mentors screen for](<./sections/6. Important points to remember/6.1. JSON checklist reflex rules mentors screen for.md>)

1. **Five reflexes** (know what drops, know replacer vs reviver direction, handle `BigInt`/circular, preserve IDs as strings, filter `__proto__`)
2. **The review grep list** (`JSON.parse(JSON.stringify(`, `replacer` forgotten `return`, `__proto__` without filter, `BigInt` without guard, `Date` without reviver)
3. **Boundary table** (stringify at outbound; parse+validate+revive at inbound; `structuredClone` for clone; module JSON via `with {type:"json"}`)

---

## 7. Common pitfalls → production bugs

### [7.1. Real production bugs caused by JSON and serialization mistakes](<./sections/7. Common pitfalls to production bugs/7.1. Real production bugs caused by JSON and serialization mistakes.md>)

1. **ID collapse beyond safe integer** (64-bit DB id round-trips as truncated number → duplicate key join fails)
2. **`JSON.cloneDate` becomes string** (logic that branch on `instanceof Date` breaks after round-trip without reviver)
3. **`BigInt` throw at runtime** (payload with `BigInt` stringifies to uncaught `TypeError` — replacer missed)
4. **Prototype pollution via JSON** (`__proto__` key survives `JSON.parse` → `Object.assign` pollutes — missing reviver/null-proto)
5. **Silent omission of `undefined`/symbol/function** (API drops fields the client treats as required — validation gap)

---

## 8. Interview questions and answers (JSON)

### [8.1. Common interview QA JSON serialization and data exchange](<./sections/8. Interview questions and answers/8.1. Common interview QA JSON serialization and data exchange.md>)

1. **The classics with mechanism-level answers** (what `JSON.stringify` omits and why, replacer vs `toJSON` order, reviver bottom-up, `BigInt`/circular errors)
2. **What interviewers actually probe for** (narrating `toJSON`→replacer→filter chain + `structuredClone` vs JSON clone + NDJSON framing vs recite)
3. **Grading guidance** (junior/mid/senior signals, red flags like "JSON supports comments" or "parse reviver runs top-down")

---

## 9. Overlaps to avoid (where this domain stops)

### [9.1. Boundaries what is covered elsewhere](<./sections/9. Overlaps to avoid/9.1. Boundaries what is covered elsewhere.md>)

1. **Enumerable order, descriptors, and prototype pollution full treatment — [Objects in Depth](<../06 Objects in Depth/README.md>).**
2. **`BigInt`/`Symbol` type gate, `ToPrimitive`, and coercion tables — [Values Types and Coercion](<../03 Values Types and Coercion/README.md>).**
3. **`Array` holes/sparse, length, `TypedArray`/`ArrayBuffer` — [Arrays](<../08 Arrays/README.md>).**
4. **Numbers IEEE-754, `safeInteger`, `Epsilon`, `Temporal`/`Intl` — [Numbers Dates Math and Temporal](<../12 Numbers Dates Math and Temporal/README.md>).**
5. **Strings UTF-16 escapes and template literals — [Strings and Regular Expressions](<../11 Strings and Regular Expressions/README.md>); module JSON `with {type:"json"}` — [Modules and Code Organization](<../14 Modules and Code Organization/README.md>); error stacks/`cause` — [Error Handling and Debugging](<../15 Error Handling and Debugging/README.md>).**
6. **Iterables/generators/streaming async iterables — [Iterables Generators and Async Iteration](<../10 Iterables Generators and Async Iteration/README.md>) / [Async Event Loop and Promises](<../13 Async Event Loop and Promises/README.md>).**

---

[← Back to JavaScript track](<../README.md>)
