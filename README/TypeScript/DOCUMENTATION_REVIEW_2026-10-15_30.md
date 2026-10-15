# TypeScript review addendum — revision 30

This partial review read the complete [07/1.3 literal-union/enum comparison](<07 Unions Intersections and Narrowing/sections/1. Union Types/1.3. Literal unions enums vs unions and exhaustiveness preview.md>) and its complete domain index. No lesson/index changes are made here. Reports 29 and 30 require approval independently of the previously approved P1–P7 and N01–N91 repairs.

## N95 — Blocker: enum member types are said not to support Exclude or template-literal composition

Affected: part 2 history, code comment, modern guidance and mentoring exercise claim that these operations work only for the literal rewrite, not enums. The checked string enum supports both Exclude<Theme,Theme.Dark> and `theme:${Theme}`. The numeric enum likewise supports filtering out a member and a string representation union. Both selected assignments compile and execute below.

**Repair:** distinguish runtime enum transformation and member identity/assignment from valid type-level filtering/composition. Use the correct enum member type as the Exclude operand. Keep the erasableSyntaxOnly rejection as a real, separately verified toolchain difference rather than inventing a type-operation limitation. The [primary 5.0 union-enum notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html#all-enums-are-union-enums) explain member types and union enums; [template-literal documentation](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html) describes interpolation over unions. Exact current acceptance is established by the local probe.

## N96 — Major: numeric enum is equated with unrestricted number by an arithmetic example

Affected: part 2 Common confusion says LegacyTheme widens to number and contrasts that with literal unions being “nominally strict.” With Status{Draft,Published}, the shown consume(42) call is rejected with TS2345, whereas a value viewed as number and the arithmetic expression are accepted. The arithmetic observation is real; the general conclusion that any numeric literal is accepted is not. Literal unions also do not become nominal types merely because they are finite.

**Repair:** show named members, a rejected out-of-set literal and the accepted broad-number/arithmetic boundary together. Explain that the checked type still does not validate arbitrary runtime numeric input. Keep the practical enum-versus-erasure comparison conditional on the actual pipeline; link full enum behavior to its existing owner.

## Completed reproductions

Environment: TypeScript 7.0.2, Node 20.20.2, verified 2026-10-15. Save each program separately in a fresh directory without tsconfig.json. Build with `tsc --strict --target es2022 --module commonjs --lib es2022,dom --outDir dist FILE.ts`, then execute `node dist/FILE.js`.

### enum-operations.ts

```typescript
export {};
enum Theme { Light = "light", Dark = "dark" }
type WithoutDark = Exclude<Theme, Theme.Dark>;
type ThemeEvent = `theme:${Theme}`;
const selected: WithoutDark = Theme.Light;
const event: ThemeEvent = "theme:dark";
enum Status { Draft, Published }
type PublishedOnly = Exclude<Status, Status.Draft>;
type StatusText = `${Status}`;
const published: PublishedOnly = Status.Published;
const statusText: StatusText = "1";
console.log(selected, event, published, statusText);
```

Both commands exit 0; output `light theme:dark 1 1`. These assignments demonstrate filtering and interpolation for both enum kinds. A separate noEmit check with --erasableSyntaxOnly rejects the two enums with TS1294, exit 1.

### enum-numbers.ts

```typescript
export {};
enum Status { Draft, Published }
function consume(status: Status): number { return status; }
const external: number = 42;
console.log(consume(Status.Draft), consume(external), consume(Status.Draft + 10));
// NEG: consume(42);
```

Both commands exit 0; output `0 42 10`. In a separate copy activate the NEG call; noEmit rejects TS2345, exit 1. This distinguishes named values, broad number/arithmetic acceptance and the rejected literal.

### sink.ts

```typescript
export {};
type Direction = "up" | "down";
function move(dir: Direction): string {
 switch (dir) {
  case "up": return "y+1";
  case "down": return "y-1";
  default: { const exhaustive: never = dir; throw new Error("Unhandled " + exhaustive); }
 }
}
console.log(move("up"));
try { move("diagonal" as Direction); }
catch (error: unknown) { console.log(error instanceof Error ? error.message : "unexpected"); }
```

Both commands exit 0; output `y+1`, then caught `Unhandled diagonal`. Inspection confirms `const exhaustive = dir;` remains in emitted output: only its annotation erases. This is a repetition of the already-approved emission correction, combined with the repair unit below rather than a new finding.

## One additional repair unit proposed

**A30.1 — 07/1.3 plus domain index:** repair N95–N96 with the already-approved required-section/current-baseline/unsupported-performance corrections and emission/never reminders. Keep the junior literal set and runtime membership validation exercise, compare a derived const object with actual enum filtering/emission, separate accepted type operations from the erasable gate and show the retained exhaustive declaration/default runtime failure. Verify out-of-set values and a newly added missing case. Link enum/template/exhaustiveness owners instead of turning this preview into duplicate full lessons.

Eight commands completed: three positive build/run pairs, out-of-set-literal noEmit rejection and erasable-enum noEmit rejection. Scratch /tmp/typescript-repairs/A030/results.json retains all results. Full exact inputs are above. Primary 5.0 enum section and template interpolation/cross-product passages were actually read; no historical compiler was executed. Existing evaluated JavaScript inspection-operator and condition/prediction/observation calibration is reused for this same section; unmeasured engine/checker complexity and universal quota advice are not transferred. Primary worked explanations and exact local contrasts support the teaching proposal. No browser/editor/native-source/bundler/framework/service integration or performance benchmark ran.

Report 29's A29.1/A29.2 and this A30.1 remain pending approval. Independent original P4/P7 work can continue at 07/2.1. No new domain, policy change, future-finding override or next-track authorship is inferred.
