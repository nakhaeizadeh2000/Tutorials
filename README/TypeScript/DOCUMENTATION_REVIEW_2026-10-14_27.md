# TypeScript review addendum — revision 27

Complete reads: [override/self-type lesson](<06 Classes and Object-Oriented Types/sections/2. Inheritance and Polymorphism/2.3. Override and polymorphic this typing.md>), [static/generic lesson](<06 Classes and Object-Oriented Types/sections/3. Advanced Class Patterns/3.1. Static members generics and static blocks.md>) and class-domain index. This is a partial track review. Ten actual commands used TypeScript7.0.2 / Node20.20.2 on2026-10-14. Revisions18/19/24/26 remain pending. No lessons or published indexes change in this report.

Save each input below in a fresh directory without tsconfig.json. Positive builds use `tsc --strict --noImplicitOverride --erasableSyntaxOnly --target es2022 --module commonjs --lib es2022,dom --outDir dist FILE.ts`, then `node dist/FILE.js`. Negative inputs use --noEmit instead of --outDir dist. All stated positive commands exit0; negative commands exit1.

## N81 — Blocker: noImplicitOverride described without abstract-hook exception

Affected:06/2.3 part1 definition says every overriding member must carry override. Under the tested flag, implementing an abstract hook without override passes; replacing a concrete method without override rejectsTS4114. The [primary flag reference](https://www.typescriptlang.org/tsconfig/noImplicitOverride.html) motivates catching concrete implementation drift; the current local contrast supplies the exception omitted here.

**Repair:** show both cases and a genuine base rename/misspelling failure. Distinguish a separate same-named method after rename from an overload declaration. Keep override checking separate from runtime dispatch and behavior preservation.

## N82 — Blocker: self-return annotation used to justify arbitrary constructor cloning

Affected:06/2.3 part2 clone code and unconditional preservation guidance. The base casts this.constructor to a one-argument constructor returning this, although subclasses may require additional arguments or invariants. The asserted inherited clone returns a Dog instance with its required collar undefined and its next method throws. Constructor identity is insufficient to prove constructor-argument compatibility.

**Repair:** use returning the actual receiver for fluent self types. Keep copying explicit for known construction contracts, with an abstract copy hook or subclass-owned factory when construction varies; test additional required state. Include the controlled assertion failure rather than presenting the cast as a universally valid clone.

## N83 — Blocker: static return this type recommended despite TS2526

Affected:06/2.3 part2 Modern guidance recommending static create():this. A static member cannot use the special instance self type directly in that return position. The separate generic static receiver example is legal and should be taught as that different contract.

**Repair:** isolate invalid static create():this and contrast a generic static function with `this: new () => T`. Keep instance self return, runtime constructor receiver and explicit constructor requirement distinct. The [primary this-type guide](https://www.typescriptlang.org/docs/handbook/2/classes.html#this-types) introduces the instance case; actual TS2526 and the generic execution establish this contrast.

## N84 — Blocker: static block super access and ordering misstated

Affected:06/3.1 part3 Definition/Common confusion and ordering comment. Static fields and blocks execute interleaved in declaration order; a block need not follow every field. A static block can use super.property to access inherited static behavior, despite the claim that super is unavailable. That differs from a super() constructor call.

**Repair:** trace first-field→block-with-super→last-field and repeat instance construction to show that blocks run at class evaluation. Contrast constructor-side access with instance members; test unsupported instance-generic use and clarify initializer exceptions need actual handling. Preserve the generic/statics outcomes with ordinary assignments or explicitly declared parameter-property pipeline restrictions.

## Executed inputs and results

### abstract-override.ts

```typescript
export {};
abstract class Base { abstract run(): string; }
class Concrete extends Base { run(): string { return "done"; } }
console.log(new Concrete().run());
```

Build/runtime0 prints done without override on the abstract-hook implementation.

### concrete-override.ts

```typescript
export {};
class Base { run(): string { return "base"; } }
class Child extends Base { run(): string { return "child"; } }
```

NoEmit rejectsTS4114 for the overriding concrete method; no runtime run.

### clone.ts

```typescript
export {};
class Animal {
  name: string;
  constructor(name: string) { this.name = name; }
  clone(): this {
    const Ctor = this.constructor as new (name: string) => this;
    return new Ctor(this.name);
  }
}
class Dog extends Animal {
  collar: string;
  constructor(name: string, collar: string) { super(name); this.collar = collar; }
  describe(): string { return this.collar.toUpperCase(); }
}
const copy = new Dog("Rex", "red").clone();
console.log(copy instanceof Dog, copy.name, copy.collar);
try { console.log(copy.describe()); } catch (e: unknown) { console.log(e instanceof TypeError ? "TypeError" : "other"); }
```

Build/runtime0 prints true Rex undefined and catches TypeError from the collar method.

### static-this.ts

```typescript
export {};
class Model { static create(): this { return new this(); } }
```

NoEmit rejectsTS2526: this type only available in a non-static member; no runtime run.

### static-generic.ts

```typescript
export {};
class Model { static create<T extends Model>(this: new () => T): T { return new this(); } }
class User extends Model { user = "u"; }
console.log(User.create().user);
```

Build/runtime0 prints u from the actual User result.

### blocks.ts

```typescript
export {};
const order: string[] = [];
class Base { static get label(): string { return "base"; } }
class Child extends Base {
  static first = (order.push("first"), 1);
  static { order.push("block:" + super.label); }
  static last = (order.push("last"), 2);
}
new Child(); new Child();
console.log(order.join(","));
console.log(Child.first, Child.last);
```

Build/runtime0 prints first,block:base,last then 1 2. Two new Child calls add no further initialization entries.

## Ordered repair plan and limits

**A27.1 — 06/2.3 plus class-domain index:** repairN81–N83 with previously approved receiver/variance/assertion repetitions, distinct required sections and bounded performance/current-baseline guidance. Verify concrete/abstract override cases, renamed/missing base, receiver-preserving fluent calls, varied constructor-copy failure/remedy, instance/static return distinctions and explicit versus implicit callback invocation. Correct method/property variance by linking the repaired callable owner; do not promise this:void proves purity.

**A27.2 — 06/3.1 plus class-domain index:** repairN84 with approved generic-evidence/gate reminders, real generic class/static factories and declaration-ordered initialization. Verify instance/static member failures, class-T rejection in static members, class argument inference and actual inherited static state/order. No artificial cache complexity, runtime lifetime or universal performance claims.

Each leaf/index uses a separate verify→immediate log→commit cycle. Existing originalP1–P7 continues independently. FullJS07/3.2 and previously read JS07/3.4 provide observable chain/order contrasts; their inaccurate super/arrow and unmeasured engine claims are not copied. Primary Classes self-type/static passages, noImplicitOverride and historical4.3 migration motivation were consulted; local current probes provide exact claims above. The static-block proposal was discovered as primary historical grammar context, not treated as runtime support evidence. Ten commands/results remain in `/tmp/typescript-repairs/A027/results.json`. No old compiler/native-source/editor/lint/framework/network/benchmark was run. Repair requires explicit approval of these two units.
