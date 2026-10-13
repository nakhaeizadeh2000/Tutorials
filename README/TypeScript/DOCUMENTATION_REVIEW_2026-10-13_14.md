# TypeScript review addendum — revision 14

All approved findings N01–N36 are implemented through R045. This partial review adds correctness findings from the complete [04/3.1 recursive-object lesson](<04 Objects Interfaces and Type Aliases/sections/3. Advanced Object Types/3.1. Recursive object types and self-referential structures.md>) and its index, read during the original P4/P7 pass. Seven completed commands used TypeScript 7.0.2 / Node 20.20.2 on 2026-10-13. No lesson or published index changed.

## N37 — Blocker: valid recursive array aliases are labeled circular-alias errors

Affected: part 1's modern guidance, DirectArray rejection comment and Common confusion. Both of these array patterns are accepted:

```typescript
export {};
type RecursiveArray = RecursiveArray[];
type ArrayOrText = ArrayOrText[] | string;
const empty: RecursiveArray = [];
const nested: RecursiveArray = [[], [[]]];
const text: ArrayOrText = ["leaf", ["nested"]];
console.log(empty.length, nested.length, Array.isArray(text));
```

`tsc --strict --target es2022 --module commonjs --lib es2022,dom --outDir out arrays.ts` exits 0. `node out/arrays.js` prints `0 2 true`, exit 0. The primary [3.7 recursive-alias notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#more-recursive-type-aliases) explicitly describe permitted array/tuple recursion. Bare `type Loop = Loop` remains rejected with TS2456; that separate noEmit probe also ran, exit 1.

**Repair:** distinguish permitted recursive array/object/tuple structures from the rejected direct alias. Retain finite tree/list construction without a false mandatory-property-wrapper rule.

## N38 — Blocker: recursive object contracts without leaf branches are called uninhabitable by finite values

Affected: part 1's NoBase guidance, part 2 Common confusion and mandatory-null review rule. A finite object graph can contain cycles:

```typescript
export {};
type NoBase = { next: NoBase };
class SelfCycle { next: SelfCycle = this }
const self: NoBase = new SelfCycle();
interface NodeA { b: NodeB }
interface NodeB { a: NodeA }
class A implements NodeA { b: B; constructor() { this.b = new B(this); } }
class B implements NodeB { a: A; constructor(a: A) { this.a = a; } }
const pair: NodeA = new A();
console.log(self.next === self, pair.b.a === pair);
```

`tsc --strict --target es2022 --module commonjs --lib es2022,dom --outDir out cycles.ts` exits 0. `node out/cycles.js` prints `true true`, exit 0. One object satisfies NoBase by referring to itself; two objects satisfy the mutual pair. These graphs have finite allocations even though repeated traversal without cycle handling would not terminate.

**Repair:** distinguish terminating trees/lists from finite cyclic graphs, with real construction and safe traversal policy. Null leaves are useful for acyclic chains, but their absence does not by itself prove infinite allocations or TS2589. Runtime traversal limits and type-instantiation limits are separate concerns.

## N39 — Blocker: a property beyond a readonly transform's stop boundary is incorrectly expected to reject writes

Affected: part 2's DeepFreezeMutual example and `frozen.a.b.c.d.e.f` write comment. The exact cap algorithm returns the input unchanged at depth 5:

```typescript
export {};
type Leaf = string | number | boolean | null;
type DeepFreezeMutual<T, D extends unknown[] = []> =
  D["length"] extends 5 ? T :
  T extends Leaf ? T :
  T extends Map<infer K, infer V> ? Map<K, DeepFreezeMutual<V, [...D, unknown]>> :
  T extends (infer E)[] ? DeepFreezeMutual<E, [...D, unknown]>[] :
  T extends object ? { readonly [K in keyof T]: DeepFreezeMutual<T[K], [...D, unknown]> } : T;
type Nested = { a: { b: { c: { d: { e: { f: string } } } } } };
const frozen: DeepFreezeMutual<Nested> = { a: { b: { c: { d: { e: { f: "hi" } } } } } };
frozen.a.b.c.d.e.f = "x";
console.log(frozen.a.b.c.d.e.f);
```

`tsc --strict --target es2022 --module commonjs --lib es2022,dom --outDir out cap.ts` exits 0 with the write active. `node out/cap.js` prints `x`, exit 0. The remaining object containing f is returned unchanged; f is still mutable. This is the semantic boundary of the displayed transform, not evidence that the compiler ignored readonly.

**Repair:** verify a rejected write inside the transformed region and an accepted write beyond it. State what the stop branch returns and avoid equating a transform depth with a runtime payload-depth guarantee. Reuse the already-approved measured-budget owner rather than inventing a universal depth limit or matching type/value caps by fiat.

## N40 — Major: the mentor exercise misclassifies a one-way type dependency as mutual recursion

Affected: part 2 Mentor note. The given Expr references itself; Stmt references Expr and Stmt, but Expr never references Stmt. Therefore both definitions are self-recursive, with a one-way Stmt→Expr dependency. There is no Expr→Stmt edge making that pair mutually recursive. This finding comes from reading the complete definitions, not a claimed compiler test.

**Repair:** draw the actual dependency edges and use a genuine two-way example for mutual recursion. Give an answer that tests the distinction, rather than grading the incorrect classification as correct.

## One additional repair unit and limits

**A14.1 — 04/3.1 plus index:** repair N37–N40, retain coherent self/mutual object modeling, verify array/direct-alias and cyclic-graph contrasts, and show the capped transform's actual semantic boundary. Combine with approved F10/F14 required sections/current baseline/cost corrections and precise generic/runtime owners. One leaf/index → actual checks → immediate log → one commit.

The seven completed commands/results are retained in `/tmp/typescript-repairs/A014/results.json`; complete inputs are above, and the bare probe is `export {}; type Loop = Loop;`. Current compiler/runtime behavior corroborates the primary recursive-alias distinction. JavaScript's observable-case benchmark is reused without copying its historical limits. No editor, lint, framework or performance benchmark ran; broad depth/time assertions remain unsupported findings within the already-approved original scope.

Previously approved P1–P7 work continues independently. Pending N37–N40 do not approve future corrections or another curriculum. Next original object units and remaining iterator/defer ownership remain available while this additional unit awaits acceptance.
