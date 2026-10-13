# TypeScript review addendum — revision 6

Original [revision 1](<DOCUMENTATION_REVIEW_2026-10-12_1.md>) P1–P7 and [revision 3](<DOCUMENTATION_REVIEW_2026-10-13_3.md>) N05–N07 retain their recorded approval. N14–N17 below are newly verified correctness findings and remain pending approval. No lesson was changed for this report.

## Inspected scope and limits

Read completely: [04/1.1 object shapes](<04 Objects Interfaces and Type Aliases/sections/1. Object Type Fundamentals/1.1. Object types structural shape and excess property checks.md>), its domain index, [08/1.2 inference](<08 Generics Deep Dive/sections/1. Generic Fundamentals/1.2. Inference from arguments and explicit type arguments.md>) and its domain index. Other index statements are candidates for later inspection, not verified findings here. Reused the JavaScript condition → prediction → observation teaching benchmark. Thirteen actual checker/runtime commands ran with TypeScript 7.0.2 / Node 20.20.2 on 2026-10-13; observations are retained in `/tmp/typescript-repairs/A006/results.json` and summarized below. This is a partial substantive review.

## N14 — Blocker: the runnable object-shape example reads an absent ambient value

Affected: 04/1.1, lines 32–33 and its later `oid` call.

The first exact fence strict-compiles, prints `(10, 20)`, then throws `ReferenceError: richCfg is not defined`. A declaration supplies a checker contract, not a runtime initializer. The later `deleteUser(oid)` likewise depends on a value that the example does not create; that line is not reached in this run.

**Proposed repair:** provide concrete nested configuration and ID values for promised runtime demonstrations; separate compile-only depth probes from runnable examples and explain their observations. This is a new ambient-value failure outside the approved type-tool stand-in repair.

## N15 — Blocker: spread is said to disable all excess-property checks

Affected: 04/1.1, line 90 and the repeated spread explanations.

The shown inherited `portt` passes, but an explicitly written `portt` alongside the spread is rejected. The claim that the entire result is no longer fresh cannot explain both cases.

**Proposed repair:** compare an inherited spread member with a directly written misspelled member under the same target. Describe the observed boundary without presenting spread as a universal escape.

```typescript
type Options = { host: string; port?: number };
const base = { host: "localhost", portt: 5432 };
const spread: Options = { ...base, portt: 1234 };
```

`tsc --strict --noEmit spread.ts` reports **TS2561**, exit 1. The spelling resembles `port`, so the actual diagnostic is TS2561 rather than the initially predicted TS2353. The early scratch harness stopped at that mistaken diagnostic expectation; the completed rerun records the real result.

## N16 — Blocker: assertion to Route is reported as a string method type

Affected: 04/1.1, line 164.

`Route` declares method as `"get" | "post"`. Asserting the literal to Route produces that union, not string. The assertion can discard the singleton `"get"` while retaining a finite union. The accompanying claim that the switch therefore loses all exhaustiveness is misleading.

**Proposed repair:** use checked type assertions to compare the target union with the singleton preserved by this satisfies expression. Explain assertion trust separately from literal precision and runtime validation.

```typescript
type Route = {path:string; method:"get"|"post"};
const asserted = {path:"/users",method:"get",extra:true} as Route;
const checked = {path:"/users",method:"get"} satisfies Route;
type Equal<A,B>=(<T>()=>T extends A?1:2) extends (<T>()=>T extends B?1:2)?true:false;
type Expect<T extends true>=T;
type AssertionMethod=Expect<Equal<typeof asserted.method,"get"|"post">>;
type SatisfiesMethod=Expect<Equal<typeof checked.method,"get">>;
```

`tsc --strict --noEmit assertion.ts` exits 0. Both equality probes pass. Primary [4.9 release notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator) explain the checking role of satisfies; these local probes establish the exact result for this expression.

## N17 — Blocker: generic literal inference is incorrectly reported as widened

Affected: 08/1.2 part 1's identity explanation and comments; part 2's invoke explanation and mentoring exercise; its first index promise.

The lesson says `identity("hi")` infers string and `invoke("get", "/u")` with `M extends string` infers string. Live equality probes instead establish `"hi"` and `"get"` for these declarations. The promised explicit-argument fix addresses a widening that does not happen in the shown call. Other signatures and mutable source variables can widen; this is not a universal claim that generics preserve literals.

**Proposed repair:** demonstrate exact inferred types, a genuinely widened source, no-evidence fallback and explicit arguments that actually affect a contract. Integrate the already-approved NoInfer owner using a real competing-inference example and keep contextual inference qualifications. Correct the corresponding index promise.

```typescript
function identity<T>(x:T):T{return x;}
const s=identity("hi");
function invoke<M extends string>(method:M,url:string):M{return method;}
const method=invoke("get","/u");
type Equal<A,B>=(<T>()=>T extends A?1:2) extends (<T>()=>T extends B?1:2)?true:false;
type Expect<T extends true>=T;
type IdentityLiteral=Expect<Equal<typeof s,"hi">>;
type MethodLiteral=Expect<Equal<typeof method,"get">>;
```

`tsc --strict --noEmit inference.ts` exits 0; both equality probes pass. No editor UI inspection was claimed.

## Additional ordered repair units proposed

1. **A6.1 — 04/1.1 and its index:** repair N14–N16; combine with already-approved required-section consolidation, supported performance wording and current-baseline route. Verify complete examples, meaningful failures and type probes.
2. **A6.2 — 08/1.2 and its index:** repair N17 while completing the approved NoInfer teaching outcome and required sections. Verify inferred types, competing inputs, correct rejection and unchanged runtime behavior.

These additions require acceptance before either affected leaf is completed. Independent approved work can continue at 20/2.2, the real version-upgrade exercise already identified in F11/F12.

## Execution evidence

The five original object fences were extracted verbatim and each compiled with `tsc --strict --target es2022 --module commonjs --lib es2022,dom --outDir fenceN fenceN.ts` (all exit 0). Their emitted programs ran with `node fenceN/fenceN.js`: fence1 exit 1 with the ReferenceError above; fence2 exit 0 without output; fence3 exit 0 with `localhost undefined`, `undefined`, and twice `localhost 5432`; fence4 exit 0 with `#000 undefined`; fence5 exit 0 with `1 2`, `1 2 origin`, and `1 2` with an empty label. The three noEmit probes above complete the thirteen commands. No performance, bundler, framework or external-service experiment ran.

For a durable exact input of the failing runtime fence:

```typescript
// good — width subtyping lets rich values flow into narrow consumers
type Point = { x: number; y: number };
type ColoredPoint = { x: number; y: number; color: string };

function draw(p: Point): void {
  console.log(`(${p.x}, ${p.y})`);
}

const rich: ColoredPoint = { x: 10, y: 20, color: "red" };
draw(rich); // ok — ColoredPoint has superset of Point's members → ColoredPoint ≤ Point

// Through a variable — extra members are silent (no freshness)
const withExtra = { x: 1, y: 2, z: 3, label: "origin" };
const p1: Point = withExtra; // ok — width subtyping

// Depth — nested members checked recursively
type Config = { server: { host: string } };
type RichConfig = { server: { host: string; port: number } };
declare let richCfg: RichConfig;
const cfg: Config = richCfg; // ok — inner { host, port } ≤ { host }

// bad — assuming nominal protection that doesn't exist
type UserId = string;
type OrderId = string;
function deleteUser(id: UserId): void {}
declare let oid: OrderId;
deleteUser(oid); // compiles — aliases are the same shape (string); structural alias ≠ nominal brand

// bad — expecting width to be rejected at the call site via literal
// draw({ x: 1, y: 2, color: "red" }); // would be ok via shape, but FRESH literal triggers
// the extra "excess property" lint (§2) — not a structural failure. Don't confuse the two.
```

Primary [Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html#excess-property-checks) was consulted for creation-site checking and variable-flow boundaries. The spread-specific result is supported by actual execution, not inferred from a documentation heading. Required-section/navigation scans alone do not establish substantive correctness; the remainder of the track review stays outstanding.
