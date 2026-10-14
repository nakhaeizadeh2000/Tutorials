# TypeScript review addendum — revision 25

This partial review covers complete [06/1.2 constructors](<06 Classes and Object-Oriented Types/sections/1. Class Type Fundamentals/1.2. Constructors parameter properties and instance creation.md>) and [06/1.3 access modifiers](<06 Classes and Object-Oriented Types/sections/1. Class Type Fundamentals/1.3. Access modifiers and encapsulation public private protected readonly.md>), with the complete class-domain index. Thirteen completed commands used TypeScript 7.0.2 / Node 20.20.2 on 2026-10-14. These lessons and the published index are unchanged; revisions18/19/24 remain pending while original approved work continues.

Commands use `tsc --strict --target es2022 --module commonjs --lib es2022,dom --outDir dist FILE.ts`, then `node dist/FILE.js`, in a fresh directory without tsconfig.json. Negative checks replace --outDir dist with --noEmit. Parameter-property examples require transformation and are separately rejected by erasableSyntaxOnly. The private-field/getter examples use ordinary assignments and pass that gate.

## N72 — Blocker: constructor declaration annotation and parameter-property diagnostics misteach the syntax

Affected: 06/1.2 part1 Definition/Common confusion and method-private error comment. The explanation says a constructor return annotation is unnecessary/rarely correct. An annotation on the constructor declaration is prohibited, including void. A construct signature describes the result of new; it is not a return annotation allowed on the constructor body declaration. The method-private diagnostic is also TS2369 rather than the printed TS1270.

Save annotations.ts:

```typescript
export {};
class Value { constructor(): Value {} }
class Nothing { constructor(): void {} }
```

NoEmit reports TS1093 twice, exit1. Save parameter-location.ts:

```typescript
export {};
class Holder { method(private value: string): string { return value; } }
```

NoEmit reports TS2369, exit1: parameter properties belong to constructor implementations. The [primary constructor guide](https://www.typescriptlang.org/docs/handbook/2/classes.html#constructors) and [parameter-property guide](https://www.typescriptlang.org/docs/handbook/2/classes.html#parameter-properties) establish their distinct syntax roles; actual7.0.2 diagnostics corroborate.

**Repair:** separate constructor body declarations, class construct signatures and parameter-property field/assignment generation. Show the actual prohibited forms and printed diagnostics, with a manually assigned equivalent for erasable consumers.

## N73 — Blocker: a private parameter property is offered as a way to force factory construction

Affected: 06/1.2 part3 Modern guidance. Private on a constructor parameter controls the resulting field, not the constructor's accessibility. It does not force callers through create and does not validate their supplied value.

Save private-parameter.ts:

```typescript
export {};
class RawUser { constructor(private email: string) {} }
const user = new RawUser("bad");
console.log("constructed:", user instanceof RawUser, JSON.stringify(user));
class Controlled {
  private constructor(private email: string) {}
  static create(email: string): Controlled { return new Controlled(email); }
}
console.log(Controlled.create("example") instanceof Controlled);
```

Build/run each exit0; output `constructed: true {"email":"bad"}` and `true`. RawUser's ordinary constructor remains callable. Controlled's factory can invoke its private constructor inside the class. Save private-constructor.ts:

```typescript
export {};
class Controlled { private constructor() {} }
new Controlled();
```

NoEmit reports TS2673, exit1. Adding --erasableSyntaxOnly to private-parameter.ts rejects TS1294 for both parameter properties. This is the already-approved syntax-gate reminder, not evidence that a private constructor itself requires transformed syntax.

**Repair:** put the constructor restriction on the constructor declaration, validate the actual factory input and explain the field's separate accessibility. Keep runtime privacy, creation authority and serialization behavior distinct. Use a bounded validation example rather than claiming a basic email substring check establishes every email/domain invariant.

## N74 — Blocker: ordinary string lookup is confused with private-name syntax and one emit representation is universalized

Affected: 06/1.3 part1 Definition/Common confusion and index private-field promise. Looking up the ordinary key "#value" does not access the private name; it can return undefined without a syntax error. A literal counter.#value outside its lexical declaration is a different operation. ES2022 emit retains native private fields; the observed ES2015 emit uses WeakMap support.

Save private-field.ts:

```typescript
export {};
class Counter {
  #value = 1;
  read(): number { return this.#value; }
}
const counter = new Counter();
console.log(Reflect.get(counter, "#value"), Object.keys(counter).length, counter.read());
try { eval("counter.#value"); } catch (error: unknown) { console.log(error instanceof SyntaxError ? "SyntaxError" : "other"); }
```

ES2022 build/run each exit0; output `undefined 0 1` then caught `SyntaxError` from eval parsing the invalid private-name access. The ordinary Reflect.get succeeds with undefined, and the public read method accesses the actual private field. Emit contains native #value and no WeakMap helper.

Compile the same file with --target es2015 and --outDir legacy, then run `node legacy/private-field.js`: both exit0 with the same two output lines. That output contains `new WeakMap` and private-access helpers. A separate --erasableSyntaxOnly noEmit check of private-field.ts and getter.ts succeeds. The [primary privacy caveats](https://www.typescriptlang.org/docs/handbook/2/classes.html#caveats) distinguish ordinary property access from private fields; actual target-specific artifacts establish the representation here.

**Repair:** contrast ordinary string keys, lexical private names and both tested emit targets, without engine memory constants or a universal private-field speed ranking. Retain the owned checker-private versus runtime-private/serialization distinction and gate qualifications.

## N75 — Blocker: assigning to the inherited getter-only id is claimed to create a new property

Affected: 06/1.3 part2 UserHard write comment and readonly/freeze causal guidance. In the declared strict emitted environment, this assignment fails at the inherited accessor without a setter. It does not create an own id property or replace the private backing value. Reflect.set reports false without throwing.

Save getter.ts:

```typescript
export {};
class UserHard {
  #id: string;
  constructor(id: string) { this.#id = id; }
  get id(): string { return this.#id; }
}
const user = new UserHard("u1");
try { (user as unknown as { id: string }).id = "hacked"; }
catch (error: unknown) { console.log(error instanceof TypeError ? "TypeError" : "other"); }
console.log(user.id, Object.hasOwn(user, "id"), Reflect.set(user, "id", "other"));
```

Build/run each exit0; output `TypeError` and `u1 false false`. The backing value remains u1, no own id appeared, and Reflect.set returns false. The [2026 OrdinarySetWithOwnDescriptor algorithm](https://tc39.es/ecma262/2026/multipage/ordinary-and-exotic-objects-behaviours.html#sec-ordinarysetwithowndescriptor) rejects an accessor write when its setter is absent; the [primary class accessor guide](https://www.typescriptlang.org/docs/handbook/2/classes.html#getters--setters) also describes the getter-only checked view.

**Repair:** contrast a writable data property with a getter-only public view and an actual shallow freeze. State the tested strict-assignment/Reflect.set outcomes separately. Do not infer complete object immutability or a blanket property-creation guarantee from private backing state.

## Two proposed additional units and limits

1. **A25.1 — 06/1.2 plus class index:** repair N72/N73 with approved F05/F10/F14/P6, preserving parameter-property/manual contrast, initialized/optional/asserted fields and factory/builder/singleton outcomes. Verify syntax/gate diagnostics, initialization failures and real creation/validation/identity behavior. One leaf/index/check/log/commit.
2. **A25.2 — 06/1.3 plus class index:** repair N74/N75 with approved readonly/serialization/class-private reminders, F10/F14/P6. Verify ordinary keys versus private syntax, target-specific emit, same-origin private compatibility, readonly alias writes, getter-only assignment and shallow freeze. Separate leaf/index/check/log/commit. No universal engine cost, incident percentage or mandatory privacy policy.

Scratch `/tmp/typescript-repairs/A025/results.json` retains all thirteen commands/results. Relevant primary class/parameter/accessor/privacy and2026 setter passages were read; emitted native/ES2015 artifacts were inspected. Full JavaScript static-member/field-order lesson supplied observable initializer/call/constructor contrasts; earlier object-freeze calibration remains applicable. No native-source run, framework/ORM/schema-library integration, editor, lint, old compiler or benchmark ran. OriginalP1–P7 persists; N72–N75 requires explicit acceptance. Previously approved independent units continue.
