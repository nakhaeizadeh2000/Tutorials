# TypeScript review addendum — revision 18

This partial review covers the complete [12/1.1 module-forms lesson](<12 Modules Namespaces and Declaration Files/sections/1. ES Modules/1.1. import and export forms named default star re-export.md>) and its index while preparing the already-approved P5 deferred-import owner. All N01–N47 are approved and implemented through R050; R051 delivers worked iterator-helper coverage. Six completed commands used TypeScript 7.0.2 / Node 20.20.2 on 2026-10-13. No lesson/index changes in this report.

## N48 — Blocker: conflicting star exports are claimed to choose the last export silently

Affected: part 2's pub/use example comment and Common confusion. Two distinct modules each export duplicate, and a barrel re-exports both with stars. The current compiler reports TS2308; importing duplicate from the emitted ESM barrel throws a conflicting-star-export SyntaxError. Order does not silently select the later binding. Explicitly re-export the intended binding or assign distinct public names.

The primary [ResolveExport algorithm](https://tc39.es/ecma262/2026/multipage/ecmascript-language-scripts-and-modules.html#sec-source-text-module-records-resolveexport) returns ambiguity when stars resolve a name to distinct module bindings. A star does omit default; that independent rule should be retained.

## N49 — Blocker: every default export form is claimed to track the original local variable

Affected: part 3's all-forms live-binding definition. `export default count` evaluates the expression and exposes that value through the default binding. Later reassignment of the separate local count does not update that captured value. `export { count }` exposes the changing local binding; `export { count as default }` can expose it under the default name. The shown primitive counter starts 1/1 and becomes 2/1 after bump. Explain expression export versus binding export rather than assigning snapshot behavior to all CommonJS or liveness to every ESM spelling.

## N50 — Major: exporting a function under default and named bindings is treated as a collision

Affected: part 1 Common confusion says `export default function Foo` plus `export { Foo }` collide. Both names can export the same function legally. The compiled consumer's default and named values are identical; it prints true/value. A convention may avoid redundant API names, but it should be justified as a convention rather than a language rejection.

## Complete reproduction inputs and observed commands

Create separate files under the given names in a directory without tsconfig.json. Common build command: `tsc --strict --target es2022 --module nodenext --lib es2022,dom --outDir dist ENTRY.mts`. TypeScript resolves the shown mjs specifiers to their mts sources and emits matching ESM output.

### Conflicting star bindings

```typescript
// file: left.mts
export const duplicate = "left";
// file: right.mts
export const duplicate = "right";
// file: barrel.mts
export * from "./left.mjs";
export * from "./right.mjs";
// file: consumer.mts
import { duplicate } from "./barrel.mjs";
console.log(duplicate);
```

Build reports TS2308, exit 2, with output under the default emit policy. `node dist/consumer.mjs` throws a conflicting-star-export SyntaxError, exit 1. This deliberately unsuccessful artifact run observes the failure; it is not a successful build.

### Default expression versus changing local binding

```typescript
// file: counter.mts
let count = 1;
export { count };
export default count;
export function bump() { count++; }
// file: watch.mts
import snapshot, { count, bump } from "./counter.mjs";
console.log(count, snapshot);
bump();
console.log(count, snapshot);
```

Build and `node dist/watch.mjs` each exit 0; output is `1 1` then `2 1`.

### Named and default aliases of the same function

```typescript
// file: dual.mts
export default function Foo() { return "value"; }
export { Foo };
// file: use.mts
import Default, { Foo } from "./dual.mjs";
console.log(Default === Foo, Default());
```

Build and `node dist/use.mjs` each exit 0; output is `true value`.

## One additional repair unit and limits

**A18.1 — 12/1.1 plus indexes:** repair N48–N50 with actual multi-file exports, binding-versus-expression and ambiguity examples. Combine the previously approved P5 bounded deferred-import support/owner outcome and F10/F14 current baseline, required sections and unsupported bundle-cost corrections. Keep general import-type/source-emit mechanics in the already repaired 12/1.2 owner. Verify accepted forms, meaningful compiler/runtime failures, the actual defer support boundary and an explicitly different dynamic-import fallback. One leaf/index → actual checks → immediate log → one commit. The original deferred-import outcome is already approved; acceptance is requested only for these newly found module-form corrections.

Six completed command/results are retained in `/tmp/typescript-repairs/A018/results.json`; full reproduction input bodies are above. Current primary module resolution semantics were consulted and local checking/runtime outputs supply concrete evidence. Original specialist [Jake Archibald's default-expression comparison](https://jakearchibald.com/2021/export-default-thing-vs-thing-as-default/) was discovered for teaching input; relevant content evaluation and the new defer project remain implementation work, not claimed completed tests. Existing JavaScript observable-case calibration is reused. No bundler, editor, framework, external service, performance benchmark or deferred evaluation execution ran for this report.

Original P1–P7 remains active, including the full remaining leaf review. N48–N50 are pending approval and do not authorize future corrections or another curriculum. Independent approved numeric P4/P7 work can continue while this unit awaits acceptance.
