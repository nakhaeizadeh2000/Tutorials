# TypeScript review addendum — revision 29

This partial review read the complete [07/1.1 union fundamentals](<07 Unions Intersections and Narrowing/sections/1. Union Types/1.1. Union fundamentals member access and the common property rule.md>), [07/1.2 discriminated unions](<07 Unions Intersections and Narrowing/sections/1. Union Types/1.2. Discriminated unions the tagged pattern that scales.md>) and their complete domain index. Previously approved N01–N91 are implemented. The original P1–P7 work continues; these new corrections require approval. No union lessons or published indexes change in this report.

Eight completed commands used TypeScript 7.0.2, Node 20.20.2, strict/exact-optional/erasable checking and ES2022/CommonJS output on 2026-10-15. Exact inputs and observations follow. This is not a full-track substantive quality pass.

## N92 — Blocker: a union is incorrectly defined as exclusive

Affected: 07/1.1 part 1 Definition says a value is an A or a B, “never both at the same time in the same check.” Structural union members can overlap. A value containing both required shapes is accepted by A | B; the fresh literal in the probe is accepted too. The runtime membership checks both return true. A union requires membership in at least one alternative, not exactly one. Distinct conflicting tags can make particular alternatives disjoint; exclusivity is a property of the model, not the union operator itself.

**Repair:** explain inclusive membership with a complete overlapping-object example, preserve the common-operation rule and contrast it with genuinely disjoint tagged variants. The [primary everyday-types guide](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types) explains unions of values and the facts available across members. Existing structural assignment/freshness owners supply the prerequisite; do not recast all excess-property behavior as exact-object semantics.

## N93 — Major: the discriminated-union index excludes boolean tags

Affected: 07 index, 1.2 first promise says “why literal, not boolean.” Distinct true and false literal properties discriminate the Result example successfully under strict checking. The 1.2 leaf itself already lists true as a valid literal, and 1.1 already uses ok:true/false. A broad boolean property and distinct boolean-literal branches must not be conflated.

**Repair:** make the index and worked lesson agree: string, numeric and boolean literal tags can identify variants. Contrast actual literal-valued branches with a shared broad string property, whose equality check does not recover the exclusive payload in the wide.ts probe. This is a checking distinction, not a recommendation to use booleans for every multi-state model.

## N94 — Major: every recognized discriminant is required to be a literal in every member

Affected: 07/1.2 part 1 Definition/Common confusion universal “only a literal common property discriminates.” An Error/null discriminator also narrows the accompanying data in the observed non-unit.ts case. The [primary 3.2 release notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-2.html#non-unit-types-as-union-discriminants) explicitly describe this relaxation. A beginner's string-tag example is useful, but its shape is not the complete language rule.

**Repair:** keep simple distinct tags as the main teaching model and add a bounded nullable-error contrast. State its verified conditions rather than implying arbitrary common properties discriminate. Preserve the nested-path limitation: the nested.ts probe still rejects outer payload access. Do not turn one successful example into a guarantee of arbitrary deep correlation.

## Exact reproduction inputs and observed results

Save each program in its own fresh directory without tsconfig.json. Positive command pair: `tsc --strict --exactOptionalPropertyTypes --erasableSyntaxOnly --target es2022 --module commonjs --lib es2022,dom --outDir dist FILE.ts`, then `node dist/FILE.js`. All three pairs exit 0. Rejected examples instead use --noEmit and are not run.

### inclusive.ts

```typescript
export {};
type A = { a: string };
type B = { b: number };
type U = A | B;
const both = { a: "yes", b: 1 };
const assigned: U = both;
const fresh: U = { a: "fresh", b: 2 };
function memberships(value: U): string { return String("a" in value) + "/" + String("b" in value); }
console.log(memberships(assigned), memberships(fresh));
```

Output: `true/true true/true`. Both the assigned object and fresh object meet both shapes while being accepted as U.

### boolean.ts

```typescript
export {};
type Result = { ok: true; value: number } | { ok: false; error: string };
function read(result: Result): string {
 if (result.ok) { const value: number = result.value; return String(value); }
 const error: string = result.error; return error;
}
console.log(read({ ok: true, value: 42 }), read({ ok: false, error: "failed" }));
```

Output: `42 failed`. Both branch-local payload annotations are accepted.

### non-unit.ts

```typescript
export {};
type Result = { error: Error; data: null } | { error: null; data: string };
function read(result: Result): string {
 if (result.error) { const data: null = result.data; return result.error.message + ":" + data; }
 const data: string = result.data; return data.toUpperCase();
}
console.log(read({ error: null, data: "ok" }), read({ error: new Error("failed"), data: null }));
```

Output: `OK failed:null`. The successful branch data is string; the error branch data is null.

### wide.ts

```typescript
export {};
type U = { kind: string; a: number } | { kind: string; b: string };
function read(value: U): number { if (value.kind === "a") return value.a; return 0; }
```

NoEmit reports TS2339, exit 1: the shared broad kind does not establish payload a.

### nested.ts

```typescript
export {};
type U = { meta: { kind: "a" }; a: number } | { meta: { kind: "b" }; b: string };
function read(value: U): number { if (value.meta.kind === "a") return value.a; return 0; }
```

NoEmit reports TS2339, exit 1: testing meta.kind does not narrow the containing union enough for outer a.

## Two additional repair units proposed

1. **A29.1 — 07/1.1 plus domain index:** repair N92 with the already-approved required-section/current-baseline/evidence corrections. Verify overlapping membership, common-property failures, real guarded/asserted reads, nullable paths and exact-optional read/write differences. Replace the currently observationally identical empty-string examples with a case whose outcome demonstrates the intended distinction. Remove unsupported union-size quotas and checker complexity formulas.
2. **A29.2 — 07/1.2 plus domain index:** repair N93–N94 with already-approved required sections and supported performance wording. Verify string/boolean tags, nullable-error correlation, wide/nested rejection boundaries, actual state/reducer branches and missing-case behavior. Explain that a const payload table can preserve literal fixture values rather than silently treating zero-valued samples as general numeric schemas. Link mapped/conditional owners for derivation details; no new domain or framework integration is implied.

Each unit is one leaf/index → actual verification → immediate log → explicit commit after approval. Independent original P4/P7 work can continue at 07/1.3 while these units wait.

Primary union and 3.2 non-unit passages were actually read and compared with the local results. The original CSS-Tricks discriminated-union article was discovered as practitioner teaching input, but opening it returned Internal Error; it was not read or used as factual evidence. The already evaluated primary worked explanations serve as teaching inputs here. Full JavaScript 02/3.5 inspection-operators leaf was read for contrasting typeof/in operations with observable results; its broad undeclared-name guarantee, generalized instanceof advice and speculative historical/performance assertions are not copied. Existing JavaScript condition/prediction/observation calibration also remains applicable. No browser, editor, historical compiler, framework, bundler, external integration or performance benchmark ran. Scratch results: /tmp/typescript-repairs/A029/results.json (eight completed commands).

The R091 track checkpoint found 292 published files, 4,222 local routes with zero navigation issues, and 108/266 leaves passing the required-section structure check; 158 still fail. Every class-domain leaf passes that structural check. These counts do not certify full substantive review. All original P1–P7 obligations remain active, including 11/7.1's remaining overlap repair and the unread substantive scope. N92–N94 are pending approval.
