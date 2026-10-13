# TypeScript review addendum — revision 16

This partial review covers the complete [04/3.3 object checks and narrowing lesson](<04 Objects Interfaces and Type Aliases/sections/3. Advanced Object Types/3.3. satisfies assertions and narrowing on object shapes.md>) and its index during the original P4/P7 pass. All reported N01–N44 are approved and implemented through R047. Five completed commands used TypeScript 7.0.2 / Node 20.20.2 on 2026-10-13. No lesson or published index changes in this report.

## N45 — Blocker: own-property booleans are presented as automatic union narrowers, with assertions hiding a wrong classification

Affected: introduction, part 3 definition/history/guidance, describeOwn, inherited-object example and Common confusion. The lesson claims Object.hasOwn and hasOwnProperty refine the object union, including unsupported 5.5/5.9 behavior claims. Both calls leave the displayed Entity union unchanged. Removing the assertions exposes TS2339 for email and totalCents; the equivalent in guard is accepted.

The installed current compiler declarations return boolean: lib.es2022.object.d.ts has `hasOwn(o: object, v: PropertyKey): boolean`, and lib.es5.d.ts has `hasOwnProperty(v: PropertyKey): boolean`. They do not declare the claimed predicates. Local probes establish actual control-flow behavior rather than relying on that signature alone.

The second defect is semantic: absence of an own email does not prove Order. An initialized User with a prototype getter has email but no own email. The original describeOwn assertions route it to `own order undefinedc`. An own-property check and validation of an object's domain shape are different contracts.

**Repair:** separate runtime own/inherited presence from compiler narrowing. Demonstrate the actual accepted in/discriminant guard and rejected own-boolean accesses. For unknown input, use checked field evidence or an explicitly justified predicate; do not add an unconditional helper predicate that merely asserts the whole User/Order shape. Do not classify missing own email as Order without checking that branch's requirements.

## N46 — Major: discriminant narrowing is given a false prerequisite on const/satisfies features

Affected: part 3 history says literal discriminant narrowing was blocked until satisfies/as const could preserve kind. The [primary 2.0 tagged-union notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#tagged-union-types) already demonstrate literal-valued interface members, a union, switch narrowing and equality guards. Those mechanisms do not require the later 3.4 const assertion or 4.9 satisfies operator.

**Repair:** explain that a declared union with a common literal property supplies the discriminant. Literal capture can help construct a value with that contract; it is a separate inference problem. Correct the prerequisite and history without expanding the union curriculum here; link its existing owner.

## Completed reproductions

Save these as separate files in a directory without tsconfig.json. Common checking flags: `tsc --strict --target es2022 --module commonjs --lib es2022,dom`.

### Object.hasOwn

```typescript
export {};
type Entity = { id: string; email: string } | { id: string; totalCents: number };
function describe(e: Entity): string {
 if (Object.hasOwn(e, "email")) return e.email;
 return String(e.totalCents);
}
```

Check with `--noEmit own.ts`: TS2339 for both accesses, exit 1.

### hasOwnProperty

```typescript
export {};
type Entity = { id: string; email: string } | { id: string; totalCents: number };
function describe(e: Entity): string {
 if (e.hasOwnProperty("email")) return e.email;
 return String(e.totalCents);
}
```

Check with `--noEmit method.ts`: TS2339 for both accesses, exit 1.

### Accepted in contrast

```typescript
export {};
type Entity = { id: string; email: string } | { id: string; totalCents: number };
function describe(e: Entity): string {
 if ("email" in e) return e.email;
 return String(e.totalCents);
}
```

Check with `--noEmit in.ts`: exit 0.

### Misclassification with a real inherited User

```typescript
export {};
type UserObj = { id: string; email: string };
type OrderObj = { id: string; totalCents: number };
type Entity = UserObj | OrderObj;
function describeOwn(e: Entity): string {
 if (Object.hasOwn(e, "email")) return `own user ${(e as UserObj).email}`;
 return `own order ${(e as OrderObj).totalCents}c`;
}
class InheritedUser { id = "u_1"; get email(): string { return "a@b.co"; } }
const user: UserObj = new InheritedUser();
console.log("email" in user, Object.hasOwn(user, "email"));
console.log(describeOwn(user));
```

Build with `--outDir dist inherited.ts` and run `node dist/inherited.js`: both exit 0; outputs `true false` and `own order undefinedc`.

## One additional unit and verification limits

**A16.1 — 04/3.3 plus index:** repair N45–N46 with complete object-check/narrowing contrasts; combine previously approved N16 assertion/literal reminders, N18 exact-optional distinctions, F10 required sections, F11/F14 editorial and unsupported cost corrections, and current baseline. Verify actual inference with live type probes, runtime presence and meaningful rejection cases. One leaf/index → actual checks → immediate log → one commit.

Full lesson/index reads and JavaScript's observable-case calibration support the review. The five completed command/results are retained in `/tmp/typescript-repairs/A016/results.json`; all input bodies are above. A mistaken system-library path failed; the actual native package library was then located and inspected. No 5.5/5.9 compiler, editor, lint, framework, whole-track benchmark or external service ran. N46's historical evidence is the primary release text, not a claimed execution of compiler 2.0.

Original P1–P7 and its remaining iterator/defer ownership continue independently. N45–N46 require approval before the additional lesson repair; no future standing authorization or new curriculum is inferred.
