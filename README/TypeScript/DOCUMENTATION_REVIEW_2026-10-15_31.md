# TypeScript review addendum — revision 31

This partial review read the complete [07/2.1 intersection fundamentals](<07 Unions Intersections and Narrowing/sections/2. Intersection Types/2.1. Intersection fundamentals merging object shapes.md>) and complete union-domain index. All previously reported N01–N96 are approved and repaired. No intersection lesson or published index changes in this report. Eight completed commands used TypeScript 7.0.2 / Node 20.20.2 on 2026-10-15.

## N97 — Blocker: conflicting literal discriminants are said to leave sibling properties accessible

Affected: 07/2.1 part 2 Common confusion and its repeated conflicting-kind explanations say only kind becomes never while id survives on `{kind:"a"} & {kind:"b"} & {id:string}`. The checked tagged intersection instead equals never as a whole. Accessing id through that type fails TS2339. A non-discriminant string/number property conflict can retain the surrounding object contract, with the value property never and id still string; that is the necessary contrast.

**Repair:** distinguish ordinary conflicting-property intersections from whole-type discriminant reduction. Use live type probes and actual access diagnostics instead of claiming a particular editor hover. The [primary 3.9 notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#intersections-reduced-by-discriminant-properties) explicitly describe whole-type reduction.

## N98 — Blocker: generic spreads are treated as proof of intersection contracts despite overwriting fields

Affected: part 1 withTimestamps<T> and part 2 asserted merge<A,B>, together with the “runtime dual of &” guidance. The generic merge returns 123 at runtime for a field assigned static type never. Assigning that result to a string variable is accepted, and calling a string method then throws. The timestamp helper overwrites an existing createdAt:string with a Date while its T & Timestamped return remains usable through the old string contract; that method call also throws.

**Repair:** state an explicit collision policy, demonstrate the mismatch and give a bounded implementation whose output contract reflects the selected fields. The concrete Post remedy below deliberately replaces timestamps and creates the declared output; it is not an assertion of universal arbitrary-object spread safety. Avoid claiming that removing only the assertion repairs every generic inference case. The [primary 3.2 generic-spread notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-2.html#generic-spread-expressions-in-object-literals) distinguish rightmost property overwrite from intersection treatment of generic operands.

## N99 — Minor: intersection introduction is attributed to the wrong release

Affected: part 1 history says intersections arrived with unions in 1.4. The [primary 1.6 release notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-6.html#intersection-types) identify intersection types as a 1.6 addition. Correct or omit this incidental history; do not copy the old notes' generic helper as a current universal safety proof.

## Complete reproduction inputs

Save each file in a fresh directory without tsconfig.json. Positive build: `tsc --strict --erasableSyntaxOnly --target es2022 --module commonjs --lib es2022,dom --outDir dist FILE.ts`; execution: `node dist/FILE.js`. The three positive pairs exit 0. The two negative files use --noEmit instead and are not executed.

### collapse.ts

```typescript
export {};
type Equal<A,B> = (<T>()=>T extends A?1:2) extends (<T>()=>T extends B?1:2)?true:false;
type Expect<T extends true> = T;
type Tagged = {kind:"a"; id:string} & {kind:"b"};
type TaggedCollapsed = Expect<Equal<Tagged,never>>;
type Plain = {value:string;id:string} & {value:number};
type PlainField = Expect<Equal<Plain["value"],never>>;
type PlainSibling = Expect<Equal<Plain["id"],string>>;
type PlainNotNever = Expect<Equal<[Plain] extends [never]?true:false,false>>;
console.log("checked collapse and surviving ordinary-conflict sibling");
```

Four live type assertions pass. Output: `checked collapse and surviving ordinary-conflict sibling`.

### overwrite.ts

```typescript
export {};
function merge<A extends object,B extends object>(a:A,b:B):A&B{return {...a,...b} as A&B;}
const merged=merge({value:"text"},{value:123});
const impossible:never=merged.value;
const typedString:string=merged.value;
console.log("merged:",impossible,typeof merged.value);
try{typedString.toUpperCase();}catch(error:unknown){console.log(error instanceof TypeError?"wrong static string: TypeError":"unexpected");}
type Timestamped={createdAt:Date;updatedAt:Date};
function stamp<T extends object>(obj:T):T&Timestamped{const now=new Date("2026-10-15T00:00:00Z");return {...obj,createdAt:now,updatedAt:now};}
const stamped=stamp({createdAt:"old",id:"p1"});
const oldContract:string=stamped.createdAt;
console.log("stamp:",stamped.id,Object.prototype.toString.call(stamped.createdAt));
try{oldContract.toUpperCase();}catch(error:unknown){console.log(error instanceof TypeError?"overwritten date: TypeError":"unexpected");}
```

Output: `merged: 123 number`, `wrong static string: TypeError`, `stamp: p1 [object Date]`, `overwritten date: TypeError`. The failures are caught. The helper types do not prevent the observed overwrites.

### remedy.ts

```typescript
export {};
type Post={id:string;title:string;createdAt?:string};
type Timestamped={createdAt:Date;updatedAt:Date};
type Stamped=Omit<Post,keyof Timestamped>&Timestamped;
function stamp(post:Post,now:Date):Stamped{return {id:post.id,title:post.title,createdAt:now,updatedAt:now};}
const post=stamp({id:"p1",title:"Post",createdAt:"old"},new Date("2026-10-15T00:00:00Z"));
console.log(post.id,post.createdAt.toISOString(),post.createdAt===post.updatedAt);
```

Output: `p1 2026-10-15T00:00:00.000Z true`. The bounded output deliberately retains id/title and supplies both real Date fields.

### collapsed-access.ts

```typescript
export {}; type Tagged={kind:"a";id:string}&{kind:"b"}; function read(value:Tagged):string{return value.id;}
```

NoEmit rejects TS2339, exit 1, because Tagged is reduced to never.

### heritage.ts

```typescript
export {}; interface A{value:number} interface B{value:string} interface C extends A,B{}
```

NoEmit rejects TS2320, exit 1, for the incompatible multiple heritage. The existing lesson prints TS2430 for this particular two-parent form; the repair will use the observed diagnostic.

## One additional repair unit proposed

**A31.1 — 07/2.1 plus union-domain index:** repair N97–N99, combining already-approved required sections/current-baseline/unsupported-performance corrections and assertion/branding/optional reminders. Keep a small successful intersection composition, observe compatible overlapping members, contrast ordinary versus discriminant conflicts, and reproduce generic overwrite before a bounded collision-aware remedy. Compare an interface declaration failure with intersection construction/access diagnostics using actual codes. Link full composition, branding, generic and impossible-state owners rather than repeating their catalogs. Verify required/missing fields, inferred property types and resulting runtime values. One leaf/index → actual checks → immediate log → explicit commit after approval.

Eight results are retained in /tmp/typescript-repairs/A031/results.json. An initial exploratory timestamp instanceof observation was rejected because of its incompatible static intersection; it was replaced by neutral Object.prototype.toString reflection, and the complete eight-command run then passed. No failed build is represented as a successful runtime experiment.

Primary 3.9 discriminant-reduction, 3.2 generic-spread and 1.6 intersection-introduction passages were actually read. Source discovery also found the original [generic-spread issue #50559](https://github.com/microsoft/TypeScript/issues/50559); its reporter's code and relevant follow-up discussion were read as a concrete practitioner question about accepted overwrites. Its old-version observations and commenters' proposed language changes are not assumed current; the present probes establish the exact current behavior. A related spread-operator proposal was discovered, not treated as shipped syntax. JavaScript 02/3.5's already-read shallow-copy/inspection contrasts supply the teaching calibration; its broad typeof/instanceof claims are not transferred. No historical compiler, editor, browser, bundler, native-source, framework, external integration or performance benchmark ran.

R094 checkpoint: 292 published files, 4,193 local routes, zero navigation issues; 111/266 leaves pass required-section structure and 155 still fail. These scans are not a full substantive quality certification. Original P1–P7 remains active. A31.1 is pending approval; independent numeric review can continue at 07/2.2 without changing this gated lesson. The remaining 11/7.1 overlap repair and unread scope are not removed from the plan.
