# TypeScript review addendum — revision 10

The user has explicitly accepted addendum9 N25–N26. This report adds two independently reproduced correctness findings from the complete [04/2.1 composition lesson](<04 Objects Interfaces and Type Aliases/sections/2. Composition and Declaration Merging/2.1. Intersection vs extends composing object types.md>), read during the original approved P4/P7 pass. No lesson or index changed for these findings. Four compile-only probes ran with TypeScript7.0.2 on2026-10-13; this is a partial review.

## N27 — Blocker: valid utility heritage is denied while invalid direct intersection heritage is presented as valid

Affected: 04/2.1 part3's PublicUser example and comparison table.

The lesson says a PublicUser combining Omit and displayName can only use intersection because heritage cannot spell Omit. This is accepted:

```typescript
export {};
type User = { id: string; name: string; password: string };
interface PublicUser extends Omit<User, "password"> { displayName: string }
const user: PublicUser = { id: "1", name: "Ada", displayName: "adal" };
```

`tsc --strict --noEmit heritage.ts` exits0. Heritage can use this computed object type whose members are statically known. It remains unsuitable for a union or a primitive parent; that is a different restriction. Conversely, the table's direct `interface C extends A&B` spelling is not valid syntax:

```typescript
export {};
type A = { x: number };
type B = { y: number };
interface Combined extends A & B {}
```

`tsc --strict --noEmit direct-intersection.ts` reportsTS1005twice, exit1.

**Proposed repair:** give a verified heritage-versus-intersection comparison, explain the parent-type restriction, and remove the unsupported syntax row. Use a named intersection alias or a comma-separated heritage list when appropriate. Preserve meaningful conflict timing and use actual diagnostics rather than categorical utility bans. The primary [Object Types reference](https://www.typescriptlang.org/docs/handbook/2/objects.html#interface-extension-vs-intersection) supports comparing the operators; these exact syntax/utility cases were checked directly.

## N28 — Blocker: conflicting optional properties are taught as an unconditional never result

Affected: 04/2.1 part2's optional matrix, mentoring answer and part3's debug-conflict comments.

An intersection of optional string and optional number allows omission. With exactOptionalPropertyTypes off, it also accepts an explicitly undefined value. Reading the property yields undefined in the following live equality probe; it is not the same required-property never case.

```typescript
export {};
type Conflict = { nickname?: string } & { nickname?: number };
const empty: Conflict = {};
const undefinedValue: Conflict = { nickname: undefined };
type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2) ? true : false;
type Expect<T extends true> = T;
type ReadResult = Expect<Equal<Conflict["nickname"], undefined>>;
```

`tsc --strict --noEmit optional.ts` exits0. Add `--exactOptionalPropertyTypes` and only the explicit undefined assignment fails withTS2375, exit1; omission and the read-type assertion remain accepted. The distinction matches the primary [exact-optional reference](https://www.typescriptlang.org/tsconfig/exactOptionalPropertyTypes.html), with the intersection result established by this actual probe.

**Proposed repair:** compare required conflicts with optional conflicts under both flag modes. Explain missing keys, allowed present values and read results separately; update the composition exercise and its answer. Integrate the already-approved unsupported performance/required-section/current-baseline work in this same leaf.

## One additional unit and limits

**A10.1 — 04/2.1 plus index:** repairN27–N28; run legal heritage, actual syntax rejection, conflict diagnostics and both optional modes. Consolidate required sections and align the three composition promises. One leaf/index→verification→immediateLOG→commit.

Four noEmit commands ran, retained in `/tmp/typescript-repairs/A010/results.json`. No runtime/editor/performance/framework integration was executed. JavaScript's prediction/observation teaching pattern was reused without copying its historical claims. New findings require acceptance; previously approved work continues, returning to the now-approved04/1.3 addendum9 unit.
