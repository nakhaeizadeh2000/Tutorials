# TypeScript review addendum — revision 26

This partial review covers the complete [inheritance lesson](<06 Classes and Object-Oriented Types/sections/2. Inheritance and Polymorphism/2.1. Extends implements and structural class compatibility.md>), [abstract-class lesson](<06 Classes and Object-Oriented Types/sections/2. Inheritance and Polymorphism/2.2. Abstract classes and members when abstract beats interface.md>) and class-domain index. Sixteen completed commands used TypeScript 7.0.2 / Node 20.20.2 on 2026-10-14. Existing revisions18,19,24 remain pending; revision25 is repaired. No reviewed lesson or published index changes in this report.

Save the files below in a fresh directory without tsconfig.json. Build each positive input with `tsc --strict --erasableSyntaxOnly --target es2022 --module commonjs --lib es2022,dom --outDir dist FILE.ts`, then run `node dist/FILE.js`. For negative inputs replace --outDir dist with --noEmit. Activate the named commented NEG line(s) in a separate copy. All positive build/runtime commands exit0; stated negative checks exit1.

## N76 — Blocker: protected origins omitted from class compatibility

Affected: 06/2.1 part2 definition, heading, Common confusion and matching index promise. Saying only private/#private separates class types misses protected-member origin requirements. Identical public/protected spellings in unrelated declarations can still reject; sibling subclasses inheriting the same protected declaration can remain compatible. The [primary compatibility guide](https://www.typescriptlang.org/docs/handbook/type-compatibility.html#private-and-protected-members-in-classes) explicitly covers both private and protected origins.

**Repair:** compare same public shape, same inherited protected origin and unrelated protected origins. Explain which declaration matters instead of counting hidden members. Preserve approved private/#private examples with actual initialized values; correct the already-approved assertion-bypass and ambient-runtime repetitions.

## N77 — Blocker: class types falsely excluded from implements

Affected: 06/2.1 part1 Bad example comment claiming BaseRepo is a value and therefore unusable. A class also names an instance type. A public-only class can be implemented without extending it; the protected member in BaseRepo is a separate compatibility constraint. The reported example incorrectly attributes the failure to declaration space.

**Repair:** run a public class target with a separately implemented body, then contrast a protected target and the actual diagnostic. Distinguish checking a class instance contract from inheriting its implementation. The [primary class guide](https://www.typescriptlang.org/docs/handbook/2/classes.html#implements-clauses) documents implements as a check; local probes establish these exact class-target cases.

## N78 — Blocker: illegal intersection syntax and mapped-type exclusion

Affected: 06/2.1 part3 guidance and mentor exercise. `implements A & B` produces parser errors, rather than equivalent assignability with noisier member diagnostics. A named concrete intersection or comma-separated contracts is legal. A mapped type with fixed known keys is also legal, contrary to the broad union/mapped exclusion. This includes the class-specific repetition of accepted N27 legal-heritage guidance.

**Repair:** compare legal comma/named-intersection/fixed-mapped targets and an isolated TS1005 negative. Keep unions, unresolved generic shapes and syntax distinct; remove unsupported interface-only error-quality rules. Link the repaired object-composition owner for full intersection/optional-conflict reasoning.

## N79 — Blocker: ordinary classes excluded from construction control

Affected: 06/2.2 part2 definition and Entity comment. Private/protected constructor control does not require abstract. A normal class can expose a factory around a private constructor; another normal class can have a protected constructor and concrete subclass.

**Repair:** compare ordinary restricted construction with abstract hooks and shared runtime helpers. Link the already-repaired constructor owner rather than reteaching its full factory catalog. The [primary constructor-access example](https://www.typescriptlang.org/docs/handbook/classes.html#understanding-protected) and actual current diagnostics establish the distinction; the old Handbook is historical context, not a current baseline assertion.

## N80 — Blocker: mixin implementation falsely said to erase

Affected: 06/2.2 part2 statement that all interface/abstract/mixin alternatives erase except abstract helpers. A class-expression mixin is a runtime function returning a class and its implementation survives emission. Its type annotations erase. The [primary mixin guide](https://www.typescriptlang.org/docs/handbook/mixins.html#how-does-a-mixin-work) gives this function/class pattern; the emitted fixture was inspected.

**Repair:** distinguish erased contracts from actual class/function implementations, with a small executable composition contrast and precise existing mixin owner. Do not claim shared-helper defaults automatically preserve behavior: a zero perimeter inherited by Circle is a semantic decision, not proof of nonbreaking evolution.

## Executable evidence

### protected.ts

```typescript
export {};
class Base { protected marker = 0; value = 1; }
class Left extends Base {}
class Right extends Base {}
const shared: Left = new Right();
console.log(shared.value);
class Other { protected marker = 0; value = 1; }
// NEG: const unrelated: Left = new Other();
```

Build/runtime0 prints `1`; activate NEG and noEmit rejects TS2322: Other is not derived from the protected member’s Base origin.

### class-target.ts

```typescript
export {};
class PublicBase { query(): string { return "base"; } }
class Adapter implements PublicBase { query(): string { return "adapter"; } }
const value: PublicBase = new Adapter();
console.log(value.query(), value instanceof PublicBase);
class ProtectedBase { protected marker = 0; query(): string { return "base"; } }
// NEG: class Unrelated implements ProtectedBase { protected marker = 0; query(): string { return "adapter"; } }
```

Build/runtime0 prints `adapter false`; activate NEG and noEmit rejects TS2720, identifying the protected origin rather than denying class types in implements.

### heritage.ts

```typescript
export {};
interface A { a: string; }
interface B { b: number; }
type Both = A & B;
type Mapped = { [K in "a" | "b"]: string };
class Named implements Both { a = "a"; b = 1; }
class Comma implements A, B { a = "a"; b = 1; }
class MappedClass implements Mapped { a = "a"; b = "b"; }
console.log(new Named().b, new Comma().b, new MappedClass().b);
```

Build/runtime0 prints `1 1 b`, accepting named intersection, comma list and fixed-key mapped target.

### bad-syntax.ts

```typescript
export {};
interface A { a: string; }
interface B { b: number; }
class Bad implements A & B { a = "a"; b = 1; }
```

NoEmit rejects two TS1005 parser diagnostics. Do not run this rejected source.

### construction.ts

```typescript
export {};
class FactoryOnly {
  private constructor() {}
  static create(): FactoryOnly { return new FactoryOnly(); }
}
class ExtendOnly { protected constructor() {} }
class ConcreteChild extends ExtendOnly { constructor() { super(); } }
console.log(FactoryOnly.create() instanceof FactoryOnly, new ConcreteChild() instanceof ExtendOnly);
// NEG_PRIVATE: new FactoryOnly();
// NEG_PROTECTED: new ExtendOnly();
```

Build/runtime0 prints `true true`; activate both NEG lines and noEmit rejects TS2673 private constructor and TS2674 protected constructor.

### mixin.ts

```typescript
export {};
interface Named { name: string; }
class Base { name = "Ada"; }
function described(BaseClass: new () => Named) {
  return class extends BaseClass { describe(): string { return "name=" + this.name; } };
}
const Described = described(Base);
const value = new Described();
console.log(value.describe(), value instanceof Base);
```

Build/runtime0 prints `name=Ada true`; emitted function described and returned class extends BaseClass remain, while Named and constructor annotation disappear.

### abstract.ts

```typescript
export {};
abstract class Animal { abstract speak(): string; }
class Dog extends Animal { speak(): string { return "woof"; } }
function forced(Ctor: abstract new () => Animal): Animal { return new (Ctor as new () => Animal)(); }
console.log(forced(Dog).speak());
const base = forced(Animal);
console.log(base instanceof Animal, typeof base.speak);
try { base.speak(); } catch (e: unknown) { console.log(e instanceof TypeError ? "TypeError" : "other"); }
```

Build/runtime0 prints `woof`, `true undefined`, `TypeError`. This reproduces pending N69 in a second owner: the forced factory accepts the abstract base, constructs it and only later fails on its missing method.

## Ordered additional repair plan and limits

**A26.1 — 06/2.1 plus class-domain index:** repair N76–N78 with the approved required-section/editorial/current-baseline outcomes and accepted private/assertion/ambient reminders. Verify runtime inheritance versus implements, class-target acceptance, missing-member failure, protected/private origins and legal/illegal heritage forms.

**A26.2 — 06/2.2 plus class-domain index:** repair N79–N80 and this explicitly identified N69 repetition. Acceptance of this unit authorizes the abstract-owner correction even if the separate 06/1.1 revision24 unit remains pending. Use concrete new for instantiating factories, abstract new for non-instantiating inspection/queries, checked missing abstract members, actual shared helpers and controlled forced-construction failure. Verify ordinary constructor access and runtime mixin emission. Keep default-implementation evolution conditional on both source compatibility and behavior.

Each leaf/index gets its own actual verification, immediate log update and commit. Original P1–P7 continues independently; no new track or wholesale curriculum expansion. The JavaScript extends/super leaf was fully read for concrete two-chain and invocation predictions. Its inaccurate super/arrow explanations and unmeasured engine claims are not copied. Primary class/compatibility/mixin passages and local execution support this report. Relevant source discovery searched constructor/implements learner questions; snippets and ranking were not used as factual evidence. Scratch `/tmp/typescript-repairs/A026/results.json` retains all sixteen results. Initial protected-negative also triggered a class-before-declaration error; moved the declaration before the use and reran all sixteen commands to isolate TS2322. No old compiler, native source, editor, lint, framework, network or performance benchmark was executed.
