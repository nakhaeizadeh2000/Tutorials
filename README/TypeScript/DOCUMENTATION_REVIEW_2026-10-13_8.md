# TypeScript review addendum — revision 8

The user has approved revisions2/4/5/6/7 N01–N04 andN08–N22. This report adds two separately verified correctness findings from [02/6.1 interview answers](<02 The Type System Core/sections/6. Interview questions and answers/6.1. Common interview QA the type system core.md>). The complete leaf/index was read; two compile-only probes ran with TypeScript7.0.2 on2026-10-13. This is a partial review. No lesson was changed for N23–N24; the already-approved N10 variance repair remains authorized, but a complete correctness repair of this interview leaf additionally needs these findings accepted.

## N23 — Blocker: never's assignment direction is reversed

Affected: 02/6.1 part4, line33.

The answer describes never as “rejected by every assignment.” A value typed never can be assigned to string, number or boolean. The useful restriction is the other direction: ordinary values cannot satisfy a never target. Describing never as another “I don't know” type also obscures its role as an impossible case.

**Proposed repair:** show both assignment directions in clearly labeled compile-only probes, explain no inhabited runtime value is being created, and retain precise links to the never/exhaustiveness owner. Integrate this answer with the approved variance interview repair and required sections.

```typescript
export {};
declare const impossible: never;
const text: string = impossible;
const count: number = impossible;
const flag: boolean = impossible;

```

`tsc --strict --noEmit never.ts` exits0; allthreeassignments are accepted. `declare` here is compile-only and the emitted program is not executed. Primary [never reference](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type) establishes that never is assignable to every type while other types cannot be assigned to never (apart from never itself).

## N24 — Blocker: namespaces are offered as nominal type identity

Affected: 02/6.1 part1, line7.

The nominal-exceptions answer lists namespace uniqueness. A namespace qualifies names but does not make identically shaped interfaces inside different namespaces incompatible. The example below assigns between two such interfaces without branding or private members. Legitimate class-private/brand distinctions should be explained with their actual distinguishing members rather than attributed to namespace names.

**Proposed repair:** distinguish qualification from nominal-like constraints with a checked structural assignment and a meaningful private-member or brand rejection. Keep namespace/declaration mechanics in their existing owner.

```typescript
export {};
namespace First { export interface Point { x: number } }
namespace Second { export interface Point { x: number } }
const first: First.Point = { x: 1 };
const second: Second.Point = first;

```

`tsc --strict --noEmit namespace.ts` exits0. Primary [type compatibility](https://www.typescriptlang.org/docs/handbook/type-compatibility.html) supports structural member comparison and the class-private/protected qualification; the namespace probe was checked directly.

## Concrete additional unit and limits

**A8.1 — 02/6.1 and its index:** repair N23–N24 alongside already-approved A4.2/N10. Verify the structural/private and never direction probes, accurate method/property variance diagnostics and interview reasoning; consolidate the required topic-specific sections and update affected promises. Preserve report4 as N10's approval reference and this report as the added scope reference.

Only two noEmit commands ran here; no runtime, editor, framework or performance test is claimed. Existing JavaScript prediction/observation calibration guided the probes. The remaining approved units continue independently, starting with03/4.1; new approval is not required for those units. Full original P1–P7 review scope remains outstanding.
