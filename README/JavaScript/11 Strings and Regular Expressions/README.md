# Strings and Regular Expressions

Strings as immutable UTF-16 sequences — code units vs code points vs grapheme clusters — and the regular expressions that search, match, and rewrite them: every `String.prototype` method by contract, template-literal tagging, `RegExp` creation and stateful flags, matching/matching-all, groups/named groups/hasIndices, lookaround/boundaries, and the unicode `u`/`v`/`s`/`y`/`m` discipline — with the checklist and production bugs mentors screen for.

## 0. Prerequisites

[Values, Types, and Coercion](<../03 Values Types and Coercion/README.md>) for [primitive string type vs objects and boxing](<../03 Values Types and Coercion/sections/1. The value model/1.1. Eight types two families primitives vs objects.md>) and [ToString and ToPrimitive](<../03 Values Types and Coercion/sections/2. The conversion algorithms/2.2. ToString and ToNumber the exact conversion tables.md>); [Arrays](<../08 Arrays/README.md>) for [array exotic vs string exotic and `Array.from` on strings](<../08 Arrays/sections/1. Arrays are exotic objects/1.2. Creating arrays literals the Array constructor trap Array.of and Array.from.md>) and [mutating vs copy discipline](<../08 Arrays/sections/3. Mutation and its copy-era alternative/3.1. Core mutating methods push pop shift unshift splice fill and copyWithin.md>); [Iterables, Generators, and Async Iteration](<../10 Iterables Generators and Async Iteration/README.md>) for [iterable vs array-like and string code-point iteration](<../10 Iterables Generators and Async Iteration/sections/1. Iterable and iterator protocols/1.1. Iterable vs iterator vs array-like and Symbol.iterator.md>) and [spread/`Array.from` consumers](<../10 Iterables Generators and Async Iteration/sections/2. Consumption for-of spread and interop/2.2. Spread Array.from destructuring and interop with Map Set generators strings.md>).

---

## 1. String model

### [1.1. String primitives immutability UTF-16 and well-formedness](<./sections/1. String model/1.1. String primitives immutability UTF-16 and well-formedness.md>)

1. **Primitive strings are immutable UTF-16 code-unit sequences** (value semantics, no mutation — reassignment creates a new string).
2. **Surrogates, lone surrogates, and well-formedness** (`isWellFormed`/`toWellFormed` ES2024, `encodeURI` throw on lone surrogates, replacement character).
3. **Boxing, `String()` vs `new String()`, and `valueOf`** (auto-boxing on reads, `new String` object truthy trap).

### [1.2. Indexing length and iteration — code units vs code points vs graphemes](<./sections/1. String model/1.2. Indexing length and iteration code units vs code points vs graphemes.md>)

1. **`length` counts code units, not characters** (BMP vs astral, emoji `length` lies, `charAt`/`charCodeAt` vs `codePointAt`).
2. **Code-point iteration via `Symbol.iterator` and `for-of`** (spread/`Array.from` count code points; `split("")` counts units).
3. **Grapheme clusters, normalization, and `Intl.Segmenter`** (`NFC`/`NFD`/`NFKC`/`NFKD`, `normalize`, grapheme vs code point vs unit — `"👩‍🚀"` is 5 units / 3 code points / 1 grapheme).

---

## 2. Core operations

### [2.1. Searching and testing — includes startsWith endsWith indexOf lastIndexOf search](<./sections/2. Core operations/2.1. Searching and testing includes startsWith endsWith indexOf lastIndexOf search.md>)

1. **Substring existence — `includes`, `startsWith`, `endsWith` with position** (no regex, no `lastIndex` state, position semantics).
2. **Index search — `indexOf`/`lastIndexOf` forward/backward with position clamping** (return `-1` vs `0` ambiguity, empty-string edge).
3. **`search` delegates to a RegExp** (when to use string methods vs regex; `search` ignores `g`/`lastIndex`).

### [2.2. Slicing and extracting — slice substring substr at with charAt and friends](<./sections/2. Core operations/2.2. Slicing and extracting slice substring substr at with and friends.md>)

1. **`slice` vs `substring` vs legacy `substr` — signatures and negative-index handling** (`slice` is the modern primitive; `substr` deprecated; `substring` swaps).
2. **Indexed access — `charAt`/`charCodeAt`/`codePointAt`/`at`/`with` and bracket `str[i]`** (unit vs point, negative `at`, out-of-range).
3. **`substring`/`slice` vs `split("")` vs spread on lone surrogates** (well-formedness interaction).

### [2.3. Transforming — trim pad repeat case locale split and normalize](<./sections/2. Core operations/2.3. Transforming trim pad repeat case locale split and normalize.md>)

1. **Trimming and padding — `trim`/`trimStart`/`trimEnd` and `padStart`/`padEnd`** (whitespace definition, truncation silence).
2. **Repeating and casing — `repeat`, `toUpperCase`/`toLowerCase` vs `toLocaleUpperCase`/`toLocaleLowerCase`** (Turkish `i`, `Intl` fallback).
3. **`split`/`join` round-trip and `normalize` placement** (separator/ limit, empty string split, NFC vs NFD equality; `Array.prototype.join` mirror).

---

## 3. Template literals

### [3.1. Template literals interpolation tagged templates String.raw and escaping](<./sections/3. Template literals/3.1. Template literals interpolation tagged templates String.raw and escaping.md>)

1. **Interpolation and multiline without `+`** (expression coercion via `ToString`, newline preservation, nesting).
2. **Tagged templates — `tag(strings, ...values)` and `strings.raw`** (escaping, DSLs, `String.raw` tag vs function, call-site caching).
3. **When templates replace `replace`/`concat` and when they don't** (SQL/HTML injection: templates don't escape — `RegExp.escape` / `escape` discipline).

---

## 4. RegExp essentials

### [4.1. RegExp creation literals vs constructor flags and lastIndex state](<./sections/4. RegExp essentials/4.1. RegExp creation literals vs constructor flags and lastIndex state.md>)

1. **Literal `/pattern/flags` vs `new RegExp(pattern, flags)` and escaping** (`RegExp.escape` ES2025; `\\` discipline for dynamic patterns).
2. **Flags `g` `i` `m` `s` `u` `v` `y` `d` — what each enables** (global, ignoreCase, multiline `^$`, dotAll `.`, unicode/unicodeSets, sticky, hasIndices).
3. **`lastIndex` is mutable state — `g`/`y` advance it, others ignore it** (shared instance hazard; `RegExp` literal semantics; cloning via `flags`).

### [4.2. Searching and matching — match matchAll exec test search split replace](<./sections/4. RegExp essentials/4.2. Searching and matching match matchAll exec test search split replace.md>)

1. **Match families — `String.prototype.match` vs `matchAll` vs `RegExp.prototype.exec` vs `test`** (`g` changes `match` return; `matchAll` requires `g` and returns iterator of full results).
2. **`search`/`split`/`replace`/`replaceAll` delegation** (`split` limit and capturing groups; `replaceAll` requires `g` on regex).
3. **`exec` loop vs `matchAll` iteration — `lastIndex` advancing and zero-length matches** (infinite-loop guard, manual loop shape).

---

## 5. Advanced RegExp

### [5.1. Groups named groups backreferences hasIndices and replacement patterns](<./sections/5. Advanced RegExp/5.1. Groups named groups backreferences hasIndices and replacement patterns.md>)

1. **Capturing `()`, non-capturing `(?:)`, named `(?<name>)`, and numbered backreference `\1`** (nesting, numbering, `groups` object).
2. **`hasIndices` `d` flag and `indices`/`indices.groups`** (start/end tuples per group for source mapping; `String` methods copy `indices`).
3. **Replacement patterns — `$&` `$1` `$<name>` `$$` and replacer function `(match, ...groups, offset, str, groups)`** (`replace` vs `replaceAll`, function vs string).

### [5.2. Assertions lookaround boundaries and unicode flags](<./sections/5. Advanced RegExp/5.2. Assertions lookaround boundaries and unicode flags.md>)

1. **Anchors and `m` multiline, word boundary `\b`** (`^`/`$` line vs string, `\b` word definition).
2. **Lookahead `(?=)`/`(?!` and lookbehind `(?<=)`/`(?<!` with variable length** (fixed pre-ES2018, variable since ES2018; unicode interaction).
3. **`u` vs `v` unicode sets, `s` dotAll, `y` sticky, `i` case folding, and inline modifiers `(?i:...)`** (`v` string properties + set notation `--`/`&&`, `y` anchored at `lastIndex`, `s` `.` includes `\n`).

---

## 6. Important points to remember (strings and regex)

### [6.1. String and RegExp checklist — reflex rules mentors screen for](<./sections/6. Important points to remember/6.1. String and RegExp checklist reflex rules mentors screen for.md>)

1. **Units vs points vs graphemes — three counts before any "length" claim** (and `normalize` + `Intl.Segmenter` before any "equal" claim).
2. **`g`/`y` state, `lastIndex` reset, and `replaceAll` requiring `g`** (the three review flags that catch most regex bugs).
3. **The review grep list** (`split("")` on emoji, `substr` legacy, `search` vs `includes`, `lastIndex` reuse, `RegExp` constructor without `RegExp.escape`).

---

## 7. Common pitfalls → production bugs

### [7.1. Real production bugs caused by string and RegExp mistakes](<./sections/7. Common pitfalls to production bugs/7.1. Real production bugs caused by string and RegExp mistakes.md>)

1. **`split("")` breaking emoji and `length` off-by-one for astral text** (grapheme vs unit confusion ships truncations).
2. **Shared global RegExp with stale `lastIndex` — alternating pass/fail validates** (auth/code lookup that flips per request).
3. **`replace` without `g` replaces only first occurrence — and `replaceAll` without `g` throws** (sanitization that leaves payload behind).

---

## 8. Interview questions and answers (strings and regex)

### [8.1. Common interview Q&A strings encoding and regular expressions](<./sections/8. Interview questions and answers/8.1. Common interview QA strings encoding and regular expressions.md>)

1. **The classics with mechanism-level answers** (units vs points vs graphemes, `slice` vs `substring`, `match` `g` shape change, `lastIndex`, `v` vs `u`, lookbehind).
2. **What interviewers actually probe for** (narrating UTF-16 storage + `isWellFormed` and `v`-sets vs reciting flag names).
3. **Grading guidance** (junior/mid/senior signals, red flags like "`length` is characters" or "`split('')` is unicode-safe").

---

## 9. Overlaps to avoid (where this domain stops)

### [9.1. Boundaries what is covered elsewhere](<./sections/9. Overlaps to avoid/9.1. Boundaries what is covered elsewhere.md>)

1. **Coercion and boxing — Values, Types, and Coercion; array exotic vs string iteration — Arrays / Iterables.**
2. **Number formatting and `Intl.NumberFormat`/`Intl.DateTimeFormat`/`Temporal` — [Numbers, Dates, Math, Temporal](<../12 Numbers Dates Math and Temporal/README.md>).**
3. **JSON stringification and `structuredClone` — JSON Serialization domain; `Structured` search via collections.**

---

[← Back to JavaScript track](<../README.md>)
