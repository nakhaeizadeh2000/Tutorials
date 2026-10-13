# TypeScript review addendum — revision 9

All previously approved N01–N24 units are repaired. During the original P4/P7 pass, the complete [04/1.3 interfaces and aliases lesson](<04 Objects Interfaces and Type Aliases/sections/1. Object Type Fundamentals/1.3. Interfaces vs type aliases when to use which.md>) and its index were read. Two new correctness findings below need approval; its ambient runtime failure also repeats the already approved missing-value problem. No lesson/index changed for this report. TypeScript 7.0.2 / Node 20.20.2 probes ran on 2026-10-13; this is a partial substantive review.

## N25 — Blocker: identical object-shape assignability is stated without the index-signature exception

Affected: 04/1.3 line 9 and its first index promise. The positive mutual assignments are valid, but the unconditional claim that both spellings have identical assignability is false for the following dictionary target.

```typescript
export {};
interface ShapeI { name: string }
type ShapeT = { name: string };
const i: ShapeI = { name: "Ada" };
const t: ShapeT = { name: "Ada" };
function dictionary(value: Record<string, string>): void {}
dictionary(t);
dictionary(i);
```

`tsc --strict --noEmit compatibility.ts` reports TS2345 for dictionary(i), while dictionary(t) is accepted. The diagnostic says ShapeI lacks the string index signature. The original [TypeScript maintainer discussion 15300](https://github.com/microsoft/TypeScript/issues/15300) explains the implicit-index distinction and augmentation motivation; its 2017 explanation is corroborated by the actual current compiler. The [2.0 implicit-index release context](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#implicit-index-signatures) is historical introduction evidence, not a claim that every object type receives an implicit index.

**Proposed repair:** retain the useful ordinary structural interchangeability example, add this verified qualified difference, and choose the dictionary contract deliberately. Describe interface extends as structural rather than nominal (also misleading in lines 87–95), without treating the spelling as a runtime brand. This compile-only probe succeeds:

```typescript
export {};
interface Base { x: number }
interface Derived extends Base {}
const value: Derived = { x: 1 };
```

`tsc --strict --noEmit interface.ts` exits 0. It does not require a constructor, nominal declaration identity or a runtime object beyond the ordinary literal.

## N26 — Blocker: fresh ambient type declarations are prohibited as though every ambient declaration were a merge

Affected: 04/1.3 line 212's instruction to reject every declare-global/module type alias and line 225's blanket restriction. Existing aliases cannot merge, but a fresh alias can introduce a global type name. This is a different operation from reopening an existing interface.

```typescript
export {};
declare global { type TutorialFreshLabel = string; }
const label: TutorialFreshLabel = "Ada";
```

`tsc --strict --noEmit global-alias.ts` exits 0. The primary [declaration-file deep dive](https://www.typescriptlang.org/docs/handbook/declaration-files/deep-dive.html) distinguishes introducing type names from adding interface members. This probe verifies the narrow fresh-global case; it does not permit redeclaring every existing alias or adding arbitrary exports to every module augmentation.

**Proposed repair:** explain fresh declarations versus merging/augmentation, remove the blanket interface-only review rule, and verify an accepted fresh alias alongside a rejected same-scope alias redeclaration. Retain interface merging as a legitimate reason to choose interface.

## Accepted-defect runtime repetition and verification limits

The first exact fence reads ambient raw at lines 60–62. It strict-compiles then prints Ada, Grace, 1 2 and localhost before throwing ReferenceError:raw is not defined. This repeats the missing-runtime-value mechanism already established in approved N14; it remains untouched while N25–N26's combined lesson repair is pending. The complete tested input follows:

```typescript
// good — interface spelling for a plain object shape
interface UserI {
  id: string;
  name: string;
  nickname?: string;
  readonly createdAt: number;
}
const u1: UserI = { id: "1", name: "Ada", createdAt: Date.now() };
console.log(u1.name); // Ada

// good — type spelling for the same shape — checker treats them identically
type UserT = {
  id: string;
  name: string;
  nickname?: string;
  readonly createdAt: number;
};
const u2: UserT = { id: "2", name: "Grace", createdAt: Date.now() };
console.log(u2.name); // Grace

// good — structural assignability ignores the spelling — interoperable
const fromI: UserT = u1; // ok — UserI ≤ UserT (shape, not name)
const fromT: UserI = u2; // ok — UserT ≤ UserI
console.log(fromI.id, fromT.id); // 1 2

// good — both support optional / readonly / call signatures in the same way
interface ServiceI {
  host: string;
  connect(port?: number): void;
}
type ServiceT = {
  host: string;
  connect(port?: number): void;
};
const svcI: ServiceI = { host: "localhost", connect() {} };
const svcT: ServiceT = svcI; // ok — interchangeable
console.log(svcT.host); // localhost

// good — both erase — no emit, safe under --erasableSyntaxOnly
// npx tsc --strict --erasableSyntaxOnly --noEmit → ok (no TS1294)
// npx tsc --emitDeclarationOnly → both produce .d.ts, .js contains only: const u1 = { ... }

// bad — assuming one spelling changes assignability or runtime
type BrandedId = string;
// interface BrandedId2 { value: string } // different shape — not comparable to string
function deleteUser(id: BrandedId): void { console.log(id); }
declare let raw: string;
// deleteUser(raw as unknown as { value: string }); // error — shape mismatch, not spelling
deleteUser(raw); // ok — alias is still string; spelling didn't add nominal protection
// for true nominal separation use branding (see 3.2), not interface-vs-type
```

Commands: `tsc --strict --target es2022 --module commonjs --lib es2022,dom --outDir out fence1.ts` exits 0; `node out/fence1.js` exits 1 with the ReferenceError above. Together with the three noEmit probes, five actual commands ran; results are retained in `/tmp/typescript-repairs/A009/results.json`. No editor, lint, performance, framework or full-domain verification is claimed.

## One additional repair unit

**A9.1 — 04/1.3 plus its index:** repair N25–N26, apply the approved ambient-value correction, retain truthful merge/composition decisions and verify complete examples/meaningful rejections. Combine with already-approved required sections, supported cost guidance and current baseline. One leaf/index → actual checks → immediate log → one commit.

The full original P1–P7 plan continues independently. While this unit awaits approval, the next original structural-manifest unit is 04/2.1. This addendum does not authorize other new findings or a new curriculum.
