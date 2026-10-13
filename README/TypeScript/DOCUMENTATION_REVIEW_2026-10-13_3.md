# TypeScript review addendum — revision 3

This addendum records three new correctness findings discovered while continuing the approved revision-1 repair plan. It preserves [revision 1](<DOCUMENTATION_REVIEW_2026-10-12_1.md>) and the separately pending [revision 2](<DOCUMENTATION_REVIEW_2026-10-12_2.md>). The original P1–P7 scope remains approved. N05–N07 are proposed additions, not repaired lessons.

## Scope and evidence limits

Complete prose inspected: Fundamentals [5.1 pitfalls](<01 Fundamentals and Mental Model/sections/5. Common pitfalls to production bugs/5.1. Real production bugs caused by misunderstanding fundamentals.md>), [6.1 interview answers](<01 Fundamentals and Mental Model/sections/6. Interview questions and answers/6.1. Common interview QA fundamentals of TypeScript.md>) and [7.1 boundaries](<01 Fundamentals and Mental Model/sections/7. Overlaps to avoid/7.1. Boundaries what is covered elsewhere.md>), plus the complete domain index. Existing accepted guard/runner/metadata defects and revision-2 malformed links are not counted again. This is not a completed substantive track review.

The new reproductions actually ran on TypeScript 7.0.2 / Node 20.20.2 on 2026-10-13. No network service, deployment or editor integration was exercised. Scratch inputs/results are in `/tmp/typescript-repairs/A002`; essential inputs and observed commands are retained below so evidence does not depend on scratch persistence.

## N05 — Blocker: the string-array validator accepts sparse arrays

Affected: pitfalls 01/5.1, lines 51–56, `processGood`.

The validator returns `string[]` after `Array.isArray` and `every`, but `every` skips missing indices. `{ items: new Array(1) }` therefore passes without checking any element. The returned array has length one, no own index zero and an `undefined` read. Calling `toUpperCase()` on that accepted element throws TypeError. This is a different runtime defect from the already accepted missing-id predicate and the Array.isArray `any[]` explanation.

**Repair proposed:** inspect every visited value through an explicit unknown element view, including holes, or build a checked dense output; declare the chosen presence/mutation contract. Execute dense strings, mixed values, sparse arrays and malformed containers. Add a precise reminder/link to the [JavaScript holes owner](<../JavaScript/08 Arrays/sections/2. Holes sparsity and length/2.1. Holes vs undefined sparse arrays and empty slots.md>) rather than duplicating array semantics.

Primary evidence: [ECMA-262 every](https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.every) conditions callback invocation on property presence. The existing JavaScript prediction/observation lesson supplies editorial calibration; its unmeasured engine claims are not technical evidence.

## N06 — Blocker: a plain tsc error is incorrectly said to block emission

Affected: pitfalls 01/5.1, line 63 and the accompanying check/build remedy.

The incident describes only `build: tsc` and claims a type error prevents emission. The tested default emits JavaScript despite TS2322 and a nonzero compiler exit. With `--noEmitOnError`, emission is suppressed; that explicit configuration can leave an older artifact in place. The page conflates the compiler's exit status, output existence and the pipeline's response to failure.

**Repair proposed:** make the incident's conditions explicit and compare ordinary emission, noEmitOnError and a pipeline that stops on failure. Teach that deployment requires successful gate results and the intended fresh artifact; neither a directory's presence nor a separate command name proves freshness. Execute an actual stale/fresh artifact contrast in a scratch project.

Primary evidence: [noEmitOnError documentation](https://www.typescriptlang.org/tsconfig/noEmitOnError.html) states the default is false. A fresh output directory was used for each reproduced mode so old files could not masquerade as newly emitted output.

## N07 — Blocker: typeof an erased interface is assigned the wrong runtime result

Affected: interview 01/6.1, line 17.

The answer says `console.log(typeof MyInterface)` throws ReferenceError after type erasure. TypeScript rejects the value-space use with TS2693; when the observed default emission is run, the unbound identifier under `typeof` produces the string `undefined`. Directly reading the unbound identifier instead throws ReferenceError. Erasure remains the right principle, but the chosen operator has a special unresolvable-reference rule.

**Repair proposed:** distinguish the TypeScript diagnostic, emitted typeof result and direct-read failure with complete probes. Retain value discriminants as the runtime branching remedy and link the existing type/value and JavaScript typeof owners.

Primary evidence: [ECMA-262 typeof](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-typeof-operator) returns `"undefined"` for an unresolvable reference. This result concerns an unbound name; it is not a claim that typeof suppresses temporal-dead-zone failures.

## Proposed repair units

1. **A2.1 — Fundamentals 01/5.1:** repair N05/N06 together with the already approved missing-field predicate, runner-version corrections and required sections. Update its ancestor promises as needed. Verify malformed/dense/sparse inputs and actual emission/pipeline artifacts.
2. **A2.2 — Fundamentals 01/6.1:** repair N07 alongside already approved runner corrections and required sections; verify checker/typeof/direct-read outcomes and index promises.

Revision-2 N01–N04 remain separately pending. Their repair plan is unchanged. Original independent approved work continues; leaves whose full correctness check depends on these additions remain outstanding.

## Durable reproduction inputs and outcomes

All compiler commands use `--strict --target es2022 --module commonjs --lib es2022,dom`. Each named output directory below begins absent.

The exact original validator body, followed by an added observation harness:

```typescript
function processGood(data: unknown): string[] {
  if (typeof data !== "object" || data === null || !("items" in data)) throw new Error("invalid");
  const rest = (data as Record<string, unknown>).items;
  if (!Array.isArray(rest) || !rest.every(x => typeof x === "string")) throw new Error("invalid");
  return rest;
}
const accepted = processGood({ items: new Array(1) });
console.log(accepted.length, Object.hasOwn(accepted, "0"), accepted[0]);
try { accepted[0].toUpperCase(); } catch (error) {
  console.log(error instanceof TypeError ? "TypeError" : "unexpected");
}
```

`tsc <flags> --outDir sparse sparse.ts` exits 0. `node sparse/sparse.js` exits 0 with the caught failure: `1 false undefined`, then `TypeError`. The actual extracted fence also includes the original `processBad` declaration; it does not affect this observation.

```typescript
interface MyInterface { name: string }
console.log(typeof MyInterface);
```

`tsc <flags> --outDir typeof typeof.ts` reports TS2693, exits 2 and produces `typeof/typeof.js`. `node typeof/typeof.js` prints `undefined`, exit 0. Separately, `node -e 'console.log(MyInterface)'` throws ReferenceError, exit 1.

```typescript
const version: string = 123;
console.log(version);
```

`tsc <flags> --outDir default emit.ts` reports TS2322, exits 2 and creates `default/emit.js`; running it prints `123`, exit 0. `tsc <flags> --noEmitOnError --outDir blocked emit.ts` reports TS2322, exits 1 and creates no `blocked/emit.js`.

An initial harness expected exit 1 for the ordinary emitting diagnostic and stopped on the actual exit 2. The completed rerun records observed exit codes and checks both diagnostic text and artifact presence. Nine commands, including the compiler-version probe, completed with the outcomes stated above. No repair outcome or full-track pass is claimed.
