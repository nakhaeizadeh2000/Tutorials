# TypeScript review addendum — revision 7

This report adds N18–N22 from [04/1.2 modifiers and dictionaries](<04 Objects Interfaces and Type Aliases/sections/1. Object Type Fundamentals/1.2. Optional readonly and index signatures.md>) and [04/7.1 boundaries](<04 Objects Interfaces and Type Aliases/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>). Both lessons and their domain index were read completely (an initially truncated boundary passage was reread). These new repairs remain pending. Original [revision 1](<DOCUMENTATION_REVIEW_2026-10-12_1.md>) P1–P7 remains approved; [revision 3](<DOCUMENTATION_REVIEW_2026-10-13_3.md>) N05–N07 remains approved and repaired. No lesson changed in this report unit.

Sixteen actual commands ran with TypeScript 7.0.2 / Node 20.20.2 on 2026-10-13. Complete observations are retained in `/tmp/typescript-repairs/A007/results.json`; reproducible inputs and outcomes appear below. An initial scratch Python syntax error ran no probes; the corrected harness completed all sixteen. This is a partial review, not certification of the whole Objects domain or track.

## N18 — Blocker: nullable optionality table omits the exact-option condition

Affected: 04/1.2 line 17, the `prop?: T | null` row's unconditional “via ?” undefined permission.

An optional string-or-null property does not accept an explicitly undefined value under exactOptionalPropertyTypes unless undefined is also in the declared value union. This row contradicts the neighboring explanation and can lead the learner to choose a rejected spelling.

**Proposed repair:** show missing/undefined/null as separate dimensions for both flag states and verify the assignments. Keep runtime serialization a separate question.

```typescript
type Maybe = { prop?: string | null };
const present: Maybe = { prop: undefined };
```

`tsc --strict --exactOptionalPropertyTypes --noEmit optional.ts` reports TS2375, exit 1. Primary [exactOptionalPropertyTypes](https://www.typescriptlang.org/tsconfig/exactOptionalPropertyTypes.html) explains the assignability distinction.

Related scope addition: 04/1.2 line 5 and its mentoring exercise repeat pending N13's claim that TypeScript optionality determines whether JSON preserves a key. Revision 5's observed `{}` serialization already refutes that interpretation. This unit must also apply the reported N13 distinction to this direct repetition; N13 remains pending approval.

## N19 — Blocker: an incompatible string-index constraint is offered as a valid intersection remedy

Affected: 04/1.2 line 201.

The proposed `{ name: string } & Record<string, number>` does not make a string-valued name satisfy the numeric dictionary. Every string key still includes name. The later fence correctly permits number|string values; the prose offers a different and incompatible remedy.

**Proposed repair:** demonstrate rejection of the proposed object construction, then use an agreed wider dictionary value or a nested numeric map. Explain that an intersection combines requirements rather than removing one.

```typescript
type NamedScores = { name: string } & Record<string, number>;
const value: NamedScores = { name: "leaderboard", alice: 42 };
```

`tsc --strict --noEmit intersection.ts` reports TS2322, exit 1. The [Object Types reference](https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures) establishes the named-property/index-signature constraint; this construction was checked directly.

## N20 — Blocker: numeric prototype assignment is said to demonstrate pollution

Affected: 04/1.2 line 246 and the associated mentoring suggestion to infer pollution from Object.keys.

The commented assignment writes number 1 to the inherited legacy __proto__ setter. In the tested ordinary object it does not change the prototype and creates no own property. The supplied line cannot demonstrate its stated consequence. Object.keys alone also does not establish which prototype changed.

**Proposed repair:** distinguish inherited lookup, own keys and prototype mutation with direct observations; give a correctly bounded contrast where useful, and link the JavaScript runtime owner. Keep the broader dictionary design advice grounded in the actual input/operation.

```typescript
const dictionary: Record<string, number> = {};
const original = Object.getPrototypeOf(dictionary);
dictionary["__proto__"] = 1;
console.log(Object.getPrototypeOf(dictionary) === original, Object.keys(dictionary));
```

Strict ES2022/CommonJS compile exits 0; `node prototype/prototype.js` prints `true []`, exit 0. Primary [legacy setter algorithm](https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-set-object.prototype.__proto__) returns without mutation for a value that is neither an object nor null. This does not claim every untrusted dictionary operation is safe.

## N21 — Blocker: a function property type is said to provide arrow-function receiver capture

Affected: 04/7.1 line 101 and the related runtime-allocation discussion.

`onClick: (e: Event) => void` is a type signature. It does not choose an arrow implementation or install lexical this capture. A normal method implementation can satisfy a function-valued property type and still fail when detached from its receiver.

**Proposed repair:** distinguish the type spelling and variance rule from the JavaScript implementation and call site. Use a precise link to the this owner rather than attributing runtime capture or per-instance allocation to an erased type.

```typescript
type Service = { name: string; onClick: () => void };
const service: Service = { name: "Ada", onClick() { console.log(this.name); } };
const detached = service.onClick;
detached();
```

Strict ES2022/CommonJS compile exits 0; `node receiver/receiver.js` throws TypeError while reading this.name, exit 1. Primary [function this reference](https://www.typescriptlang.org/docs/handbook/2/functions.html#declaring-this-in-a-function) distinguishes receiver-controlled functions from lexical arrow capture. The probe establishes the specific accepted implementation and failed detached call.

## N22 — Blocker: the runnable utility boundary dereferences null after an assertion

Affected: 04/7.1 line 159, its fourth exact fence.

`(null as unknown as GoodPick).path` remains null.path in emitted JavaScript. The exact fence compiles, prints `get`, then throws TypeError. It cannot print the promised utility demonstration or reach the later output.

**Proposed repair:** create a real Pick-shaped value for any runtime illustration, or label a type-only probe and avoid runtime access. Keep the overlap leaf focused on where to go for the full utility explanation.

Exact failing input:

```typescript
// good — queries owned by this domain (2.3)
const ROUTES = { home: { path: "/", method: "get" }, users: { path: "/users", method: "post" } } as const;
type RouteTable = typeof ROUTES;
type RouteKey = keyof RouteTable; // "home" | "users" — this domain
type MethodOf<K extends RouteKey> = RouteTable[K]["method"]; // "get" | "post" via indexed access — this domain
const m: MethodOf<"home"> = "get";
console.log(m); // get

// bad — hand-rolling Pick/Omit that duplicates 09 utilities
type HandRolledPick<T, K extends keyof T> = { [P in K]: T[P] }; // ok but duplicates Pick<T,K> — use Pick
type GoodPick = Pick<RouteTable["home"], "path">; // prefer standard — owned by 09
console.log((null as unknown as GoodPick).path === undefined ? "pick" : "pick");

// good — transformation owned by 09 (preview — full treatment there)
type PartialRoutes = Partial<RouteTable>; // mapped over object — see 09
console.log(Object.keys(ROUTES).length); // 2

//  conditional + infer owned by 08/09
// type UnwrapPromise<T> = T extends Promise<infer U> ? U : T; // see 08/09
```

`tsc --strict --target es2022 --module commonjs --lib es2022,dom --outDir fence4 fence4.ts` exits 0. `node fence4/fence4.js` exits 1 with TypeError at null.path. This is a new null-dereference example, not approval inferred from the earlier type-tool stand-in repair.

## Proposed repair units

1. **A7.1 — 04/1.2 and its index:** repair N18–N20 and the identified N13 repetition; verify both optionality modes, dictionary constructions and runtime observations. Combine with approved required-section/performance/baseline repairs.
2. **A7.2 — 04/7.1 and its index:** repair N21–N22, distinguish implementation/type ownership, and verify any retained examples. Combine with approved required sections, bounded cost guidance and current learning routes.

The original findings are preserved in their reports. Pending addenda 2, 4, 5, 6 and this report can be approved together without per-unit confirmation; a new curriculum expansion still requires its own gate.

## Complete command inventory and limits

Two noEmit rejection commands above, two compile/runtime pairs for prototype and receiver, and five exact original overlap-fence compile/runtime pairs make sixteen commands. All five original fences compile successfully. Runtime observations: fence1 `a1`, `true`, `9999`, exit 0; fence2 `12.6`, `9`, `circle`, exit 0; fence3 `u_1`, `Ada`, exit 0; fence4 `get` then TypeError, exit 1; fence5 `{}` and `{ title: 'hi' }`, then `hi` and `{}`, exit 0. Compile flags for each emitted probe are strict, target es2022, module commonjs, lib es2022,dom; output paths match the input stem.

Other prose candidates remain for the substantive pass; this report does not declare every untouched claim correct. No performance, browser, framework or production security integration was executed. JavaScript's condition/prediction/observation calibration guided the review, not its historical technical claims.
