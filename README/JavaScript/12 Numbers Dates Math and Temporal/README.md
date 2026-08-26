# Numbers Dates Math and Temporal

Numbers as IEEE-754 doubles — `NaN`, infinities, `-0`, safe integers, `EPSILON`, precision traps — how parsing (`Number`, `parseInt`/`parseFloat`, radix) differs from coercion, how formatting (`toString(radix)`, `toFixed`/`toPrecision`/`toExponential`, `Intl.NumberFormat`) round-trips, what `Math` gives you (and what `Math.random` does not), why legacy `Date` is mutable/UTC-confused/DST-broken, and how `Temporal` (`Instant`, `PlainDate`/`PlainTime`/`PlainDateTime`, `ZonedDateTime`, `Duration`, calendars) replaces it — with the checklist and production bugs mentors screen for.

## 0. Prerequisites

[Values, Types, and Coercion](<../03 Values Types and Coercion/README.md>) for [primitive number type and the two families](<../03 Values Types and Coercion/sections/1. The value model/1.1. Eight types two families primitives vs objects.md>) and [ToNumber and ToString conversion tables](<../03 Values Types and Coercion/sections/2. The conversion algorithms/2.2. ToString and ToNumber the exact conversion tables.md>) and [explicit conversion toolbox `Number`/`parseInt`/`parseFloat`/unary `+`](<../03 Values Types and Coercion/sections/2. The conversion algorithms/2.1. Explicit conversion toolbox Number String Boolean parseInt parseFloat and unary plus.md>) and [BigInt beyond `MAX_SAFE_INTEGER`](<../03 Values Types and Coercion/sections/5. The exotic primitives Symbol and BigInt/5.2. BigInt integers beyond MAX_SAFE_INTEGER.md>); [Strings and Regular Expressions](<../11 Strings and Regular Expressions/README.md>) for [string well-formedness and `isWellFormed`](<../11 Strings and Regular Expressions/sections/1. String model/1.1. String primitives immutability UTF-16 and well-formedness.md>) and [locale casing vs `Intl`](<../11 Strings and Regular Expressions/sections/2. Core operations/2.3. Transforming trim pad repeat case locale split and normalize.md>); [Arrays](<../08 Arrays/README.md>) for [TypedArray wrapping vs clamping](<../08 Arrays/sections/5. Transforming ordering and typed preview/5.3. ArrayBuffer TypedArray and DataView how they differ from Array.md>).

---

## 1. Number model

### [1.1. Number primitives IEEE-754 NaN Infinity and negative zero](<./sections/1. Number model/1.1. Number primitives IEEE-754 NaN Infinity and negative zero.md>)

1. **IEEE-754 double — 64-bit layout and the three special values** (`NaN`, `+Infinity`, `-Infinity`; one `NaN` that is never equal to itself).
2. **Negative zero — where `0` and `-0` diverge** (`Object.is` vs `===`, `1/-0`, `Map`/`Set` SameValueZero, `JSON.stringify`).
3. **Detection — `Number.isNaN` vs global `isNaN`, `Number.isFinite` vs global `isFinite`, `Object.is` for `-0`** (coercion-free checks).

### [1.2. Safe integers BigInt boundary epsilon and precision](<./sections/1. Number model/1.2. Safe integers BigInt boundary epsilon and precision.md>)

1. **Safe integers — `MAX_SAFE_INTEGER` and why `9007199254740992 === 9007199254740993`** (53-bit mantissa, holes beyond `2^53-1`).
2. **`EPSILON` and floating-point comparison — never `===` on computed floats** (`Math.abs(a-b) < EPSILON` pattern, scaled epsilon for magnitude).
3. **When to reach for `BigInt` vs staying in `Number`** (integer beyond 53 bits, `n` suffix, mixing throws, `Math` does not accept `BigInt`).

---

## 2. Parsing and formatting

### [2.1. Parsing numbers Number vs parseInt parseFloat and radix pitfalls](<./sections/2. Parsing and formatting/2.1. Parsing numbers Number vs parseInt parseFloat and radix pitfalls.md>)

1. **Strict vs lenient parsing — `Number(str)`/`+str` (entire string must be numeric) vs `parseInt`/`parseFloat` (prefix until first non-numeric)** (`""→0` vs `NaN`, whitespace, `0x`/`0b`/`0o` prefixes).
2. **`parseInt` radix — always pass it, and the legacy octal trap** (`parseInt("08")` history, `Number.parseInt` mirrors global, `0x10` base-guessing).
3. **Non-string coercion paths and the `Symbol`/`BigInt` throws** (`Number(Symbol())` throws, `Number(10n)` ok vs `+"10n"` throws, `null→0` vs `undefined→NaN`).

### [2.2. Formatting numbers toString toFixed toPrecision toExponential and Intl.NumberFormat](<./sections/2. Parsing and formatting/2.2. Formatting numbers toString toFixed toPrecision toExponential and Intl.NumberFormat.md>)

1. **`toString(radix)` and `toFixed`/`toPrecision`/`toExponential` contracts** (radix 2–36, rounding ties, `0.1+0.2` formatting surprise).
2. **`Intl.NumberFormat` — locale-aware grouping, currency, rounding modes** (`en-US` `1,234.56` vs `de-DE` `1.234,56`, `maximumFractionDigits`, `useGrouping`).
3. **Round-trip and loss — `parseFloat(num.toString())` and `JSON` precision loss beyond 53 bits** (when to keep as string/`BigInt`).

---

## 3. Math

### [3.1. Math object constants trigonometry logs and rounding](<./sections/3. Math/3.1. Math object constants trigonometry logs and rounding.md>)

1. **`Math` is not a constructor — constants `PI`/`E`/`LN2` and the pure-function surface** (`pow`/`sqrt`/`cbrt`/`hypot`, `log`/`exp`/`log2`/`log10`, `abs`/`sign`/`clz32`).
2. **Trigonometry in radians and the `Math` vs `Intl` split** (`sin`/`cos`/`tan`/`atan2`, degree↔radian, no built-in degree helper).
3. **Rounding — `round`/`floor`/`ceil`/`trunc`/`fround` and the `0.5` tie rule** (`Math.round(-0.5)` → `-0`, `fround` float32 quantization).

### [3.2. Randomness Math.random pitfalls and crypto.getRandomValues](<./sections/3. Math/3.2. Randomness Math.random pitfalls and crypto.getRandomValues.md>)

1. **`Math.random` — uniform `[0,1)`, not crypto-secure, not seedable** (distribution bias on `Math.floor(random()*n)` when `n` not power-of-two? actually fine for small `n`; modulo bias with `crypto` bytes).
2. **`crypto.getRandomValues` / `crypto.randomUUID` and `node:crypto.randomInt`** (CSPRNG, `TypedArray` fill, `randomInt` unbiased range).
3. **When reviewers block `Math.random` — tokens, shuffling, and deterministic replay** (Fisher–Yates with CSPRNG, seedable PRNG for tests).

---

## 4. Legacy Date

### [4.1. Legacy Date creation mutability and parsing pitfalls](<./sections/4. Legacy Date/4.1. Legacy Date creation mutability and parsing pitfalls.md>)

1. **`new Date` is mutable and month-indexed — the two oldest footguns** (`getMonth()` 0–11, `setMonth` mutates same instance, `Date.now()` vs `new Date()`).
2. **`Date.parse` / `new Date(string)` — only ISO-8601 `YYYY-MM-DDTHH:mm:ss.sssZ` is reliably portable** (slash `MM/DD/YYYY` is implementation-dependent, `2026-01-02` UTC vs local midnight).
3. **`getTime` is milliseconds since epoch UTC — the only safe arithmetic base for legacy `Date`** (avoid `getDate`+`setDate` across DST; prefer timestamp math).

### [4.2. Date timezones UTC vs local DST and arithmetic traps](<./sections/4. Legacy Date/4.2. Date timezones UTC vs local DST and arithmetic traps.md>)

1. **Internal UTC vs local accessors — `getHours` vs `getUTCHours` and the host timezone trap** (server UTC vs user local, `toISOString` always UTC).
2. **DST gaps and repeats — why `setHours`/`setDate` break on transition days** (spring-forward missing hour, fall-back duplicate hour, `getTimezoneOffset` flips).
3. **Duration math with `Date` — don't add `24*60*60*1000` for "next day"** (use noon-anchoring or migrate to `Temporal`; `Intl.DateTimeFormat` for display, `Date` not for calendaring).

---

## 5. Temporal

### [5.1. Temporal overview Instant PlainDate PlainTime PlainDateTime](<./sections/5. Temporal/5.1. Temporal overview Instant PlainDate PlainTime PlainDateTime.md>)

1. **`Temporal.Instant` — exact UTC time as nanoseconds since epoch (immutable, no timezone)** (vs `Date` milliseconds; `epochNanoseconds`/`epochMilliseconds`).
2. **`PlainDate`/`PlainTime`/`PlainDateTime` — wall-clock without timezone or offset** (calendar-aware, immutable, no DST — `2026-03-08` is just a date).
3. **Feature detection — `typeof Temporal === "undefined"` on Node 22 and the polyfill path** (`@js-temporal/polyfill`, `Temporal.Now.*`, `Intl` calendar integration).

### [5.2. Temporal ZonedDateTime Duration calendar and migration](<./sections/5. Temporal/5.2. Temporal ZonedDateTime Duration calendar and migration.md>)

1. **`ZonedDateTime` — instant + `timeZone` + `calendar` with DST-correct arithmetic** (`add({days:1})` vs `add({hours:24})` semantics, `withTimeZone` vs `withPlainDate`).
2. **`Duration` and calendar systems — ISO-8601 durations, `compare`/`round`/`total`, non-Gregorian calendars** (`P1Y2M3DT4H`, `months` vs `days` variable length).
3. **Migrating from `Date` — mapping table (`new Date()`→`Instant.fromEpochMilliseconds`, `getHours`→`ZonedDateTime.hour`, `toISOString`→`toString`)** (incremental adoption, `Temporal` + `Intl.DateTimeFormat` display).

---

## 6. Important points to remember (numbers and time)

### [6.1. Number-Date checklist reflex rules mentors screen for](<./sections/6. Important points to remember/6.1. Number-Date checklist reflex rules mentors screen for.md>)

1. **The five reflexes before any `Number` claim — `NaN`/`±0`/`±Infinity`/`>MAX_SAFE_INTEGER`/`0.1+0.2`** (table + safe-compare pattern).
2. **`Date` is UTC-stamped milliseconds but local-accessed — and DST breaks day arithmetic** (the two review gates for time code).
3. **The review grep list** (`parseInt` without radix, global `isNaN`/`isFinite`, `Math.random` for security, `new Date(string)` non-ISO, `getMonth()+1` missing, `24h` day-add).

---

## 7. Common pitfalls → production bugs

### [7.1. Real production bugs caused by number and date mistakes](<./sections/7. Common pitfalls to production bugs/7.1. Real production bugs caused by number and date mistakes.md>)

1. **Silent ID truncation past `MAX_SAFE_INTEGER` — JSON round-trip collapses `9007199254740993` to `9007199254740992`** (DB 64-bit id → JS `Number` → collisions).
2. **`parseInt("08")` without radix and `Number("") → 0` poisoning reducers** (empty CSV field becomes `0` not `NaN`, ledger off-by-sum).
3. **`Math.random` for tokens/shuffles that attackers predict** (session id brute-force, biased shuffle via `sort(()=>Math.random()-0.5)`).
4. **Legacy `Date` DST trap — `setDate(getDate()+1)` skips or repeats a day on transition** (billing cycle off-by-one, cron double-fire).

---

## 8. Interview questions and answers (numbers and time)

### [8.1. Common interview Q&A numbers dates and Temporal](<./sections/8. Interview questions and answers/8.1. Common interview QA numbers dates and Temporal.md>)

1. **The classics with mechanism-level answers** (`NaN !== NaN`/`0 vs -0`/`EPSILON`/`MAX_SAFE_INTEGER`/`parseInt` radix/`Math.random` vs `crypto`/`Date` UTC vs `Temporal`).
2. **What interviewers actually probe for** (narrating IEEE-754 storage + `SameValueZero` vs reciting `isNaN`).
3. **Grading guidance** (junior/mid/senior signals, red flags like "`parseInt` guesses radix correctly" or "`Date` handles DST").

---

## 9. Overlaps to avoid (where this domain stops)

### [9.1. Boundaries what is covered elsewhere](<./sections/9. Overlaps to avoid/9.1. Boundaries what is covered elsewhere.md>)

1. **Coercion algorithms and boxing — Values, Types, and Coercion; BigInt deep dive — same domain §5.2 but `Number`↔`BigInt` mixing rules here are boundary.**
2. **String well-formedness and `Intl.Segmenter` — Strings and Regular Expressions; `TypedArray` wrapping/clamping — Arrays.**
3. **JSON `BigInt` serialization strategy and `structuredClone` — JSON Serialization domain (when it lands).**

---

[← Back to JavaScript track](<../README.md>)
