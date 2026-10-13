# TypeScript review addendum — revision 19

This partial review covers the complete [05/1.1 callable-types lesson](<05 Functions and Callable Types/sections/1. Function Type Fundamentals/1.1. Function type syntax call signatures and callable objects.md>) and its index during the original P4/P7 pass. All N01–N47 are implemented; revision 18 N48–N50 remains pending. Five completed commands used TypeScript 7.0.2 / Node 20.20.2 on 2026-10-13. No lesson/index changes in this report.

## N51 — Blocker: a function carrying extra properties is said to be incompatible with a plain function type

Affected: part 1 Mentor note's A-versus-B exercise. A decorated function satisfies both the plain call signature and the richer callable-object shape. The plain view does not expose debug for member access, but that is not rejection of the value. Distinguish required members, assignment and what a narrower view permits a consumer to read.

Save `views.ts`:

```typescript
export {};
type Plain = (x: number) => string;
interface Tagged { (x: number): string; debug: boolean }
const decorated = Object.assign((x: number) => String(x), { debug: true });
const plain: Plain = decorated;
const tagged: Tagged = decorated;
console.log(plain(2), tagged.debug);
```

`tsc --strict --target es2022 --module commonjs --lib es2022,dom --outDir dist views.ts` exits 0. `node dist/views.js` prints `2 true`, exit 0. Both assignments are accepted. Copy it to access.ts and append `console.log(plain.debug);`: the same check with --noEmit reports TS2339, exit 1. The actual runtime function still carries the member; only the declared Plain view omits it.

**Repair:** teach call-signature compatibility separately from property access through the chosen contract. Correct the exercise's answer and provide the two accepted assignments plus rejected read.

## N52 — Blocker: direct property assignments are said to lose a function's inferred callable-object shape

Affected: part 2 Modern guidance says direct property additions after a plain arrow assignment widen it away from the callable-object type. The explicit `const fnPlain: PlainFn` example correctly omits members from its declared view; an unannotated const function can infer those added members. The [primary 3.1 property-declaration notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-1.html#properties-declarations-on-functions) describe function declarations and const functions with same-scope property assignments.

Save `expando.ts`:

```typescript
export {};
const fn = (x: number) => x + 1;
fn.calls = 0;
fn.clear = () => { fn.calls = 0; };
type Counted = { (x: number): number; calls: number; clear(): void };
const counted: Counted = fn;
counted.calls++;
console.log(counted(2), counted.calls);
counted.clear();
console.log(counted.calls);
```

Build with the same flags and --outDir dist: exit 0. `node dist/expando.js` prints `3 1` then `0`, exit 0. The inferred function satisfies Counted without an assertion or Object.assign.

**Repair:** contrast same-scope inferred properties with a deliberately plain annotated view. A factory or Object.assign can be useful to publish a complete shape, but neither is universally necessary for inference. Keep the actual construction and runtime state observable.

## One additional unit and limits

**A19.1 — 05/1.1 plus index:** repair N51–N52; combine approved F10 required sections, F14 unsupported cost/cold-start claims, F03/F05 runner/flag repetitions and N16 inference reminders. Verify plain/callable/construct contracts, property inference versus view, controlled Function misuse and real callable state. One leaf/index → actual checks → immediate log → one commit.

Five complete command/results are retained in `/tmp/typescript-repairs/A019/results.json`; complete inputs are above and access.ts differs by the stated one appended line. Primary property-declaration guidance was read for the actual applicable passage; no historical compiler 3.1 execution is claimed. Existing JavaScript callable/observable-case calibration is reused. No JSX/React, editor, lint, bundler, service or performance benchmark ran.

Previously approved P1–P7 remains active. N51–N52 require additional approval and do not authorize future corrections or another curriculum. Revision 18's pending module/defer unit remains separate. Independent approved work can continue in the next original numeric unit.
