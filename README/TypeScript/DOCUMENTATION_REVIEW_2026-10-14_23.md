# TypeScript review addendum — revision 23

This partial review covers complete [05/3.3 callable guards/assertions/satisfies](<05 Functions and Callable Types/sections/3. Advanced Callable Patterns/3.3. Type guards predicates asserts and satisfies on functions.md>) and the functions index. Eight completed commands used TypeScript7.0.2/Node20.20.2 on2026-10-14. Revisions18–22 remain pending. No lesson/index change in this report.

All builds use `tsc --strict --exactOptionalPropertyTypes --erasableSyntaxOnly --target es2022 --module commonjs --lib es2022,dom --outDir dist FILE.ts`, followed by `node dist/FILE.js`. Negative checks replace --outDir dist with --noEmit.

## N66 — Blocker: a boolean-expression helper is assumed to lose narrowing unless is is written explicitly

Affected: part1 history/common-confusion/predicate guidance. The explicitly annotated boolean helper in its runnable fence does lose narrowing. The surrounding blanket explanation also covers an unannotated arrow, which can infer a predicate on the current baseline. Distinguish a runtime boolean result from a function's explicit or inferred predicate signature.

Save predicate.ts:

```typescript
export {};
type Dog = { kind: "dog"; bark(): void };
type Cat = { kind: "cat"; meow(): void };
type Animal = Dog | Cat;
const isDog = (animal: Animal) => animal.kind === "dog";
const predicate: (animal: Animal) => animal is Dog = isDog;
function handle(animal: Animal): void {
  if (isDog(animal)) animal.bark();
  else animal.meow();
}
handle({ kind: "dog", bark() { console.log("bark"); } });
handle({ kind: "cat", meow() { console.log("meow"); } });
```

Build/run exit0; the inferred function is accepted as an explicit predicate signature, both branches permit their variant member, and output is bark then meow. The [primary5.5 notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-5.html#inferred-type-predicates), written by the feature implementer, describe inference conditions and true/false semantics. This is not a claim that every boolean expression infers a predicate.

Save boolean.ts:

```typescript
export {};
type Animal = { kind: "dog"; bark(): void } | { kind: "cat"; meow(): void };
function isDog(animal: Animal): boolean { return animal.kind === "dog"; }
function handle(animal: Animal): void { if (isDog(animal)) animal.bark(); }
```

Check reports TS2339, exit1. The explicit boolean annotation prevents the inferred-predicate behavior in this contrast. Do not turn the old correct explicit-boolean example into a claim about all unannotated helpers.

**Repair:** compare an explicit predicate, the inferred predicate and an explicit boolean return. Verify true and false branches and the actual body conditions. Preserve the already-approved warning that explicit predicate signatures are trusted rather than automatically proven.

## N67 — Blocker: asserts condition is said not to refine a discriminated union after asserting its discriminant

Affected: part2 useCondition comment, bad-practice label and confusion paragraph. The exact `assert(a.kind === "dog")` condition does narrow a to Dog after the call. The condition's truth implies the variant; it is not limited to a non-null check or an isolated truthy bit.

Save assert.ts:

```typescript
export {};
type Animal = { kind: "dog"; bark(): void } | { kind: "cat"; meow(): void };
function assert(condition: unknown): asserts condition { if (!condition) throw new Error("failed"); }
function handle(animal: Animal): void {
  assert(animal.kind === "dog");
  animal.bark();
}
handle({ kind: "dog", bark() { console.log("bark"); } });
try { handle({ kind: "cat", meow() {} }); } catch (error: unknown) { console.log(error instanceof Error ? error.message : "other"); }
```

Build/run exit0; a.bark is accepted after asserting the discriminant. The valid call prints bark and the Cat fixture produces a caught failed error. The [primary3.7 assertion-signature explanation](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions) explains that the asserted condition holds after normal return and shows refining a string variable through a typeof condition.

**Repair:** show condition-based and variable-based assertion signatures beside an ordinary void helper, with successful narrowing and controlled failure. A signature alone does not force a dishonest implementation to throw; test the body and both relevant paths.

## N68 — Blocker: the asserted callable example claims its arrow parameter lacks context

Affected: part3 hBad comment and the as-versus-satisfies causal explanation. For the shown `((req) => ...req.id) as Handler`, the Handler assertion context supplies the parameter's object type. It is not an implicit-any parameter in this example. Assertions remain capable of bypassing an outer compatibility check, but that does not erase all contextual checking of the source body.

Save context.ts:

```typescript
export {};
type Equal<A,B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Expect<T extends true> = T;
type Handler = (request: { id: string }) => string;
const asserted = ((request) => `hi ${request.id}`) as Handler;
const checked = ((request) => `hi ${request.id}`) satisfies Handler;
type A = Expect<Equal<Parameters<typeof asserted>, [request: { id: string }]>>;
type B = Expect<Equal<Parameters<typeof checked>, [request: { id: string }]>>;
console.log(asserted({ id: "u1" }), checked({ id: "u2" }));
```

Build/run exit0; two active Equal assertions confirm the request tuples, and Node prints `hi u1 hi u2`.

Save property.ts:

```typescript
export {};
type Handler = (request: { id: string }) => string;
const asserted = ((request) => request.missing) as Handler;
```

Check reports TS2339, exit1, for missing on the contextually typed request. The [primary contextual-typing guide](https://www.typescriptlang.org/docs/handbook/type-inference.html#contextual-typing) explicitly includes type assertions among contextual positions. The body still receives useful checking information.

**Repair:** distinguish source expression context, outer assertion compatibility and the variable's published view. Use live parameter/return probes and a genuine mismatched callable to show what satisfies rejects and an assertion can conceal. Keep the previously approved N16 reminder that context and a target view can affect inference; do not promise exact arity equality for every assignable callback.

## One additional unit and limits

**A23.1 — 05/3.3 plus functions index:** repair N66–N68 with approved F10/F14/P6, trusted-predicate/assertion warning F01 and contextual N16 reminders. Verify inferred/explicit/boolean helpers, both assertion signatures versus ordinary void helper, false trusted claims and callable source/context/view contrasts. One leaf/index → actual verification → immediate log → one commit.

Eight completed commands are retained in `/tmp/typescript-repairs/A023/results.json`; all five complete inputs are above. Relevant5.5 predicate-inference,3.7 assertion and contextual-type passages were actually read. The5.5 implementer's explanation is primary teaching input for inference conditions and both branches; older numerical/runtime claims are not transferred. Existing JavaScript prediction/observation calibration is reused. No old compiler, editor, lint, bundler, network or performance benchmark ran. OriginalP1–P7 remains active, and revisions18–22 stay separate pending gates. NewN66–N68 needs explicit acceptance; no standing-correction override inferred.
