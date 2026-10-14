# TypeScript review addendum — revision 24

This partial review covers the complete [06/1.1 class duality lesson](<06 Classes and Object-Oriented Types/sections/1. Class Type Fundamentals/1.1. Class as type and value duality instance vs constructor.md>) and complete class-domain index. Eight completed probes used TypeScript 7.0.2 / Node 20.20.2 on 2026-10-14. Revisions20–23 are repaired; revisions18–19 remain pending. No reviewed lesson or published index changes in this report.

Save each named file in a fresh directory without tsconfig.json. Builds use `tsc --strict --erasableSyntaxOnly --target es2022 --module commonjs --lib es2022,dom --outDir dist FILE.ts`, followed by `node dist/FILE.js`. Negative checks replace --outDir dist with --noEmit. These probes use ordinary field/constructor assignments, avoiding parameter properties so the erasable gate can be tested honestly.

## N69 — Blocker: abstract is treated as runtime construction enforcement

Affected: 06/1.1 part3 adopt cast/comment and abstract-constructor guidance. The forced abstract-to-concrete assertion permits passing the abstract base and emitting a normal class. Construction succeeds; its missing abstract method fails only when used. The cast therefore conceals the factory's insufficient contract, rather than arranging a runtime abstract-class check.

Save abstract.ts:

```typescript
export {};
abstract class Animal {
  name: string;
  constructor(name: string) { this.name = name; }
  abstract speak(): string;
}
class Dog extends Animal { speak(): string { return "woof"; } }
type AbstractCtor = abstract new (name: string) => Animal;
function forced(Ctor: AbstractCtor, name: string): Animal { return new (Ctor as new (name: string) => Animal)(name); }
const base = forced(Animal, "base");
console.log("constructed:", base.name, base instanceof Animal, typeof base.speak);
try { base.speak(); } catch (error: unknown) { console.log(error instanceof TypeError ? "TypeError" : "other"); }
console.log(forced(Dog, "Rex").speak());
```

Build/run each exit0. Output is `constructed: base true undefined`, `TypeError` and `woof`. The base instance was constructed before its missing speak operation threw. Emitted JavaScript contains the normal Animal class with no abstract keyword or abstract speak implementation.

Save abstract-check.ts:

```typescript
export {};
abstract class Animal { abstract speak(): string; }
const direct = new Animal();
function build(Ctor: abstract new () => Animal): Animal { return new Ctor(); }
```

NoEmit rejects with two TS2511 diagnostics, exit1: direct construction and construction through an abstract new contract are checker errors. The [primary abstract constructor guide](https://www.typescriptlang.org/docs/handbook/2/classes.html#abstract-construct-signatures) distinguishes a concrete new signature for an instantiating factory. A broader abstract new type can accept abstract constructor values for non-instantiating uses; it does not authorize blindly casting and constructing them.

**Repair:** use a concrete construct signature for a factory that calls new, and reserve abstract new for a non-instantiating inspection/registration/query example. Show the rejected abstract input, the emitted erasure boundary and controlled forced-construction/missing-member contrast. Do not promise that emitted JavaScript enforces abstract declarations.

## N70 — Blocker: static methods are said to receive no this without an explicit annotation

Affected: 06/1.1 part2 Modern guidance. A static method called through the constructor receives that constructor as its runtime receiver, and its body can infer the constructor-side type. An annotation can describe an explicit requirement; it is not what creates runtime this.

Save static.ts:

```typescript
export {};
class Base {
  static label = "base";
  static who(): string { return this.label; }
}
class Derived extends Base { static label = "derived"; }
console.log(Base.who(), Derived.who());
const detached = Base.who;
try { detached(); } catch (error: unknown) { console.log(error instanceof TypeError ? "TypeError" : "other"); }
```

Build/run each exit0; output `base derived`, then a caught `TypeError` for detached invocation. The inherited call uses Derived's label. Save static-check.ts:

```typescript
export {};
class Base { static label = "base"; static who(): string { return this.missing; } }
```

NoEmit rejects TS2339, exit1, saying missing does not exist on typeof Base. That observes the inferred static-side body view. [Primary static members](https://www.typescriptlang.org/docs/handbook/2/classes.html#static-members) establishes constructor-side storage/inheritance; the actual local call/body probes establish this specific receiver contrast.

**Repair:** distinguish instance and constructor receiver views, inferred bodies versus explicit call requirements and actual inherited/detached/bound invocation. Link the repaired callable receiver owner for the full mechanism. Do not say static methods are receiverless merely because their state lives on the constructor.

## N71 — Blocker: instanceof is equated with one direct prototype comparison

Affected: 06/1.1 part3 Common confusion and blanket prototype/performance guidance. Ordinary instanceof considers the relevant prototype along the chain, not just Object.getPrototypeOf(value). A custom Symbol.hasInstance can define another relation. Structural assignment is a separate checker operation.

Save instance.ts:

```typescript
export {};
class Base { value = 1; }
class Derived extends Base {}
class Similar { value = 1; }
const child = new Derived();
const structural: Base = new Similar();
console.log(child instanceof Base, Object.getPrototypeOf(child) === Base.prototype);
console.log(structural instanceof Base);
class Sentinel {
  static [Symbol.hasInstance](value: unknown): boolean { return value === "sentinel"; }
}
const marker: unknown = "sentinel";
console.log(marker instanceof Sentinel);
```

Build/run each exit0; output `true false`, `false`, `true`. A Derived instance passes Base's ordinary instanceof check even though its immediate prototype is Derived.prototype. A Similar instance satisfies Base's public shape but fails Base's instanceof relation. Sentinel's custom hook accepts the primitive marker.

The [2026 OrdinaryHasInstance algorithm](https://tc39.es/ecma262/2026/multipage/abstract-operations.html#sec-ordinaryhasinstance) repeats prototype traversal. The [2026 InstanceofOperator algorithm](https://tc39.es/ecma262/2026/multipage/ecmascript-language-expressions.html#sec-instanceofoperator) consults Symbol.hasInstance. Relevant algorithm passages were actually read; an initial current-draft page and table-of-contents output were not treated as the algorithm evidence.

**Repair:** teach structural assignment versus the default chain relation with an inherited instance and initialized similar value. Qualify custom hooks and avoid treating instanceof as universal object validation or a direct-prototype equality. Link JavaScript's runtime owner, with no invented typical-depth or lookup-speed guarantee.

## Proposed additional unit and verification limits

**A24.1 — 06/1.1 plus class-domain index:** repair N69–N71 with approved F10/F14/P6 and existing F05/erasure/N14 ambient-read reminders. Preserve the dual declaration, instance/static and construct-signature outcomes, with real initialized objects, concrete factory, non-instantiating abstract constructor use, static receiver and chain/shape contrasts. Verify missing/wrong constructor and member errors, abstract enforcement versus emitted behavior, static call/detachment and inherited instanceof. One leaf/index → actual verification → immediate log → one commit.

The JavaScript static-member/field-order leaf was fully read for its observable constructor-versus-instance contrast; its universal allocation/performance claims and unrelated private-field advice are not copied. Primary class and specification passages plus local execution establish the reported behavior. Scratch `/tmp/typescript-repairs/A024/results.json` retains all eight commands/results. No native-source run, old compiler, editor, lint, framework, network or benchmark was executed. Original P1–P7 remains active. N69–N71 requires explicit acceptance; previously approved independent units can continue.
