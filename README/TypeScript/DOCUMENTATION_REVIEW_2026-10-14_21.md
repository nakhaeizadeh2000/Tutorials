# TypeScript review addendum — revision 21

This partial review covers complete [05/2.1 overloads](<05 Functions and Callable Types/sections/2. Overloads and Generics/2.1. Function overloads call signatures and implementation compatibility.md>) and [05/2.3 tuple rest](<05 Functions and Callable Types/sections/2. Overloads and Generics/2.3. Rest parameters tuple types and variadic composition.md>), plus the functions index. Revisions18–20 remain pending. Ten completed commands used TypeScript7.0.2/Node20.20.2 on2026-10-14. No lesson/index change in this report.

All build commands below use `tsc --strict --exactOptionalPropertyTypes --erasableSyntaxOnly --target es2022 --module commonjs --lib es2022,dom --outDir dist FILE.ts`. Check-only failures use the same flags with `--noEmit` instead of `--outDir dist`. Run emitted examples with `node dist/FILE.js`.

## N57 — Blocker: implementation return compatibility is given the wrong direction

Affected: 05/2.1 part2 Definition says the implementation's return must be assignable to each overload return. Its own string-or-number return would then fail string and number separately. Actual compatibility accepts that union and even an unknown implementation result when the overload results are string and number. This is a separate overload compatibility relation, not an ordinary assignment of the whole implementation function to every overload.

Save overloads.ts:

```typescript
export {};
function pick(value: string): string;
function pick(value: number): number;
function pick(value: string | number): string | number {
  return typeof value === "string" ? value.toUpperCase() : value * 2;
}
function broad(value: string): string;
function broad(value: number): number;
function broad(value: unknown): unknown { return value; }
console.log(pick("hi"), pick(3), broad("Ada"));
```

Build exits0; Node prints `HI 6 Ada`, exit0. Both union and unknown implementation-result annotations are accepted. The [primary overload compatibility guide](https://www.typescriptlang.org/docs/handbook/2/functions.html#overload-signatures-and-the-implementation-signature) provides actual compatible/incompatible cases; it does not establish the false one-way rule.

Save narrow.ts:

```typescript
export {};
function bad(value: string): string;
function bad(value: number): string;
function bad(value: string): string { return value; }
```

The noEmit check reports TS2394, exit1. The old comment instead calls this TS2391. Repair the compatibility explanation and report the actual diagnostic. Verify overload body branches at runtime: acceptance alone is not proof of every input/return correlation.

## N58 — Blocker: a broad callable alias is shown as an accepted way to expose the hidden implementation

Affected: 05/2.1 part2's commented aliased assignment claims it accepts a string-or-number parameter and merely loses precision. Under the declared strict configuration, the overload set lacks a callable union-input signature and is not assignable to that broad target.

Save alias.ts:

```typescript
export {};
function format(value: string): string;
function format(value: number): string;
function format(value: string | number): string { return String(value); }
const aliased: (value: string | number) => string | number = format;
```

The noEmit check reports TS2322, exit1. Repair by distinguishing an alias preserving the overload set, a compatible narrower callable view, a wrapper with its own union-input body and an explicit union-input overload. Do not imply that a variable annotation exposes the hidden implementation.

## N59 — Blocker: the shown dynamic-key call is claimed to have no matching overload despite an exposed catch-all

Affected: 05/2.1 part3 load example includes `load(path: string): unknown[]` as a public overload, yet claims the users-or-posts call fails. It succeeds via that catch-all and returns unknown[].

Save dynamic.ts:

```typescript
export {};
type Equal<A,B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Expect<T extends true> = T;
function load(path: "users"): { id: string }[];
function load(path: "posts"): { title: string }[];
function load(path: string): unknown[];
function load(path: string): unknown[] { return []; }
const dynamic = load(Math.random() > 0.5 ? "users" : "posts");
type Dynamic = Expect<Equal<typeof dynamic, unknown[]>>;
console.log(dynamic.length);
```

Build and runtime exit0, active result Equal check passes, Node prints0. A different overload set without a catch-all can reject a union input. Show both sets before discussing a generic indexed lookup; provide an actual Store value rather than the original `null as unknown as Store[K]` (an accepted unsafe-boundary/assertion repetition).

## N60 — Blocker: overload selection is reduced to an unconditional first textual match

Affected: 05/2.1 part1 Definition and common-confusion claim. A later single-string-literal overload can be selected over an earlier string overload. A blanket first-match rule predicts the wrong return type.

Save order.ts:

```typescript
export {};
type Equal<A,B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Expect<T extends true> = T;
function select(value: string): "general";
function select(value: "special"): "special";
function select(value: string): "general" | "special" { return value === "special" ? "special" : "general"; }
const selected = select("special");
type Selected = Expect<Equal<typeof selected, "special">>;
console.log(selected);
```

Build/runtime exit0; the active Equal assertion proves the selected result is the later `"special"` signature, and Node prints special. The [primary merging reference](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces) also discusses specialized string-literal ordering for merged lists; that merged-list explanation is context, not a claim that it specifies the entire standalone resolution algorithm. Teach the observed specialized case and contrast genuinely ambiguous nonspecialized overloads; do not invent a universal sorting algorithm.

## N61 — Blocker: spreading a readonly array into mutable rest is said to reject it

Affected: 05/2.3 part1's mutable rest comment and readonly recommendation. Readonly source-array assignment to a mutable array variable differs from spreading its elements into a function call. Rest gathers a new argument array, so mutating that rest array need not mutate the caller's array.

Save spread.ts:

```typescript
export {};
const readonlyParts: readonly string[] = ["a", "b"];
function mutableRest(...parts: string[]): string { parts.push("c"); return parts.join("/"); }
console.log(mutableRest(...readonlyParts), readonlyParts.join("/"));
function set(tag: string, ...rest: [value: number, unit: string]): string { return `${tag} ${rest[0]}${rest[1]}`; }
console.log(set("temp", "hi" as unknown as number, "C"));
```

Build/runtime exit0; Node prints `a/b/c a/b` then `temp hiC`. The readonly source remains a/b even though mutable rest pushes c. The second call also confirms the already-approved assertion warning: `"hi" as unknown as number` bypasses the checker, contrary to the old rest comment claiming rejection. For a genuine bad element diagnostic, remove the assertion and test the string input directly. The [primary rest/spread explanation](https://www.typescriptlang.org/docs/handbook/2/functions.html#rest-arguments) distinguishes spread calls from tuple arity checking.

**Repair:** contrast mutable/readonly rest's body permissions with source-array assignability, demonstrate that spread checks element/arity contracts and preserves caller identity, and retain the real tuple composition/forwarding examples. Bound wrapper claims to their shown signatures; arbitrary overloaded/generic callables do not automatically have every original signature reconstructed by Parameters/ReturnType.

## Two additional units and limits

1. **A21.1 — 05/2.1 plus functions index:** repair N57–N60, combine approved F10/F14/P6 and accepted assertion/runtime-provider repetitions. Execute compatible/incompatible implementation checks, aliases/wrappers, catch-all versus no catch-all, specialized versus ambiguous selection, and real indexed lookup. One leaf/index → verification/log → one commit.
2. **A21.2 — 05/2.3 plus functions index:** repair N61 and accepted forced-assertion repetition with F10/F14/P6. Execute tuple arity/type failures, readonly spread identity/body mutations, complete two-step composition and bounded generic rest capture. One separate leaf/index commit.

Ten completed commands/results are in `/tmp/typescript-repairs/A021/results.json`; all six complete inputs are above. Functions overload compatibility/rest and merging specialized-signature passages were actually read; current compiler/runtime probes corroborate the findings. JavaScript05/2.1 and05/4.1 complete leaves supplied observable parameter/callback teaching calibration; universal cost claims were not transferred. No editor, lint, network integration, old compiler or performance benchmark ran. Original P1–P7 continues; new N57–N61 requires explicit acceptance, and no standing-correction override is inferred.
