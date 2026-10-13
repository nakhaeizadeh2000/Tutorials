# TypeScript review addendum — revision 15

This partial review covers the complete [04/3.2 branded-object lesson](<04 Objects Interfaces and Type Aliases/sections/3. Advanced Object Types/3.2. Branded and opaque object patterns for domain safety.md>) and its index, read during the original P4/P7 pass. Six completed commands used TypeScript 7.0.2 / Node 20.20.2 and 22.18.0 on 2026-10-13. No lesson/index changed. Approved N01–N36 are implemented; revision 14 N37–N40 remains pending.

## N41 — Blocker: an asserted conversion between different required shapes is presented as unprotected structural interchangeability

Affected: part 1's first example and “No error today” explanation. User requires email and Order requires totalCents; the unasserted call is already rejected:

```typescript
export {};
type User = { id: string; email: string };
type Order = { id: string; totalCents: number };
function shipOrder(order: Order): void {}
const user: User = { id: "u_42", email: "alice@example.com" };
shipOrder(user);
```

`tsc --strict --target es2022 --module commonjs --lib es2022,dom --noEmit shape.ts` reports TS2741, exit 1: totalCents is missing. The original forced `as unknown as Order` bypasses that existing check. This is a different mechanism from two genuinely identical `{ id: string }` domain types being interchangeable. The [primary compatibility reference](https://www.typescriptlang.org/docs/handbook/type-compatibility.html) explains required-member comparison.

**Repair:** demonstrate a real equal-shape collision with initialized values, keep the missing-required-member rejection as a contrasting case, then show what the brand adds. Distinguish structural compatibility from deliberate assertions that bypass it.

## N42 — Blocker: a function boundary is said to erase a spread-preserved phantom brand without an explicit return annotation

Affected: part 2's clone/spread example and prose. This inferred return preserves the static brand:

```typescript
export {};
type User = { id: string } & { readonly __brand: "User" };
const user = { id: "u_1" } as User;
function clone(value: User) { return { ...value }; }
const copy: User = clone(user);
console.log(copy.id, Object.hasOwn(copy, "__brand"));
```

Build with the same flags plus `--outDir out spread.ts`: exit 0. `node out/spread.js` prints `u_1 false`, exit 0. The copy is statically assignable to User even though no runtime brand property exists. The inference/shape determines the result, rather than merely crossing a function boundary.

**Repair:** compare a whole spread with an explicit projection or an intentionally unbranded return contract. Show exactly which operation preserves or omits the brand and distinguish its static phantom from actual own properties.

## N43 — Blocker: Pick is claimed to retain an unselected aggregate brand

Affected: part 3's OverPick comment. The selected field retains its own Id brand, but the aggregate __brand key is omitted:

```typescript
export {};
type Id = string & { readonly __brand: "Id" };
type OverUser = { id: Id; email: string } & { readonly __brand: "OverUser" };
type OverPick = Pick<OverUser, "id">;
type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2) ? true : false;
type Expect<T extends true> = T;
type Keys = Expect<Equal<keyof OverPick, "id">>;
type FieldBrand = Expect<Equal<OverPick["id"], Id>>;
```

`tsc --strict --target es2022 --module commonjs --lib es2022,dom --noEmit pick.ts` exits 0 with both live equality assertions. OverPick has only id; its field is still Id. The original comment incorrectly includes the aggregate __brand in the projection. This changes the explanation of which protection remains.

**Repair:** distinguish field brands from aggregate brands and verify selected keys/retained field types. Do not equate every projection with losing all brands or requiring another assertion.

## N44 — Blocker: a private-field class is declared unsuitable for erasable source execution

Affected: part 1's class-private guidance and repeated class-versus-brand rationale. This class is accepted by erasableSyntaxOnly and executes natively in the tested runtime:

```typescript
export {};
class User { private __brand!: void; id = "u_1"; }
const user = new User();
console.log(user.id);
```

`tsc --strict --target es2022 --module commonjs --lib es2022,dom --erasableSyntaxOnly --noEmit private.ts` exits 0. `npm exec --yes --package=node@22.18.0 -- node private.ts` prints `u_1`, exit 0. The [primary syntax gate](https://www.typescriptlang.org/tsconfig/erasableSyntaxOnly.html) excludes parameter properties and other transforming syntax, rather than all ordinary classes/private modifiers. A class remains a runtime construct; that is separate from whether its TypeScript-specific syntax can be stripped.

**Repair:** compare phantom data branding with class construction/identity on accurate grounds, qualify parameter-property restrictions and use the existing runner/flag owners. Do not use a false syntax ban to justify the data-brand convention.

## One additional unit and limits

**A15.1 — 04/3.2 plus index:** repair N41–N44; combine approved N14 ambient-runtime repetitions, F10 required sections, F14 unsupported brand quotas/cost claims and current baseline. Verify real factories and malformed inputs, equal-shape and missing-member contrasts, spread/projection behavior and the private-class syntax case. Preserve primitive-brand and validation ownership. One leaf/index → actual verification → immediate log → one commit.

Six completed commands/results are retained in `/tmp/typescript-repairs/A015/results.json`; complete inputs are above. Initial expected call diagnostic TS2345 was corrected to actual TS2741 before all six checks completed. Primitive/aggregate branding teaching from the evaluated Learning TypeScript article is considered alongside primary compatibility/utility/syntax behavior; source examples are not copied as runnable ambient code. Existing JavaScript observable-case calibration is reused. No editor, lint, framework, production incident or performance benchmark was executed.

Previously approved P1–P7 continues independently. Revision 14 and this revision require separate acceptance; neither authorizes future corrections or another curriculum.
