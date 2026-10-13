# TypeScript review addendum — revision 11

Approved N25–N28 have now been implemented in separate verified units R040/R041. This addendum records four new correctness findings from the complete [04/2.2 declaration-merging lesson](<04 Objects Interfaces and Type Aliases/sections/2. Composition and Declaration Merging/2.2. Declaration merging and module augmentation.md>) and its index, read during the original P4/P7 pass. No reviewed lesson or published index changed for these findings. Five completed noEmit probes used TypeScript 7.0.2 on 2026-10-13. This is a partial substantive review, not a full-track pass.

## N29 — Blocker: the advertised ambient example is syntactically invalid and lacks a reproducible project

Affected: 04/2.2 part 2, particularly line 225. The third exact fence contains `with { "resolution-mode": "import" }?` on an ordinary value import. Checking that fence reports TS1005 at the trailing question mark, exit 1, before module resolution can establish anything. Its comment says to ignore resolution, while its prose promises a runnable strict example. Several package imports and multiple conceptual files are also combined without their dependencies/providers. Removing a punctuation error alone would not make this a complete demonstration.

**Repair:** replace this fence with a complete bounded local module/global augmentation project, explicit source/declaration files, inclusion settings, a real runtime provider and actual positive/negative checks. Link package-specific integration to its owner rather than imply Express/Hono was executed. Preserve the NestJS/Fastify application teaching boundary.

## N30 — Blocker: merging is said to silently make a required property optional

Affected: part 3 line 299, line 363 and the index's augmentation-risk context. These declarations reject in both optional modes:

```typescript
export {};
interface Contract { title: string }
interface Contract { title?: string }
```

`tsc --strict --target es2022 --module commonjs --lib es2022,dom --noEmit required.ts` reports TS2687 twice and TS2717, exit 1. Add --exactOptionalPropertyTypes: the same diagnostics remain. Interface merging requires matching modifiers/types for this member; it does not silently soften title. A newly added optional property is different from redeclaring an existing required property as optional. The [primary merge reference](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces) documents compatible non-function members.

**Repair:** demonstrate the rejected merge, distinguish adding a new optional property from weakening an existing required one, and use a locally narrowed contract when presence is established by runtime evidence. Retain a real scope/inclusion risk without the invented optionality mechanism.

## N31 — Blocker: adding a narrow overload is presented as restricting an existing broad method

Affected: part 2 line 255's claim that the merged json overload supplies a narrower check. The original broad signature remains callable:

```typescript
export {};
interface Response { json(body: any): this }
interface Response { json(body: { ok: true; data: unknown } | { ok: false; error: string }): this }
declare const response: Response;
response.json({ completelyDifferent: 123 });
```

`tsc --strict --target es2022 --module commonjs --lib es2022,dom --noEmit overload.ts` exits 0. The unrelated body still matches the original any overload. The primary merge reference describes overloads being accumulated; this compile-only probe corroborates the consequence. It does not test a particular Express release or server integration.

**Repair:** teach additive overloads honestly, demonstrate this accepted broad call and an explicitly restricted wrapper or separate contract with a meaningful rejected input. Do not claim augmentation removes an existing callable signature.

## N32 — Blocker: a typed global property typo is claimed to be silent

Affected: part 3 line 325. This typo is diagnosed:

```typescript
export {};
declare global { interface Window { __AUTH_TOKEN__?: string } }
window.__AUTH_TOKKEN__;
```

`tsc --strict --target es2022 --module commonjs --lib es2022,dom --noEmit typo.ts` reports TS2551, exit 1, suggesting __AUTH_TOKEN__. Property access checking is distinct from fresh object-literal excess-property checking. This is compile-only; no browser runtime was executed.

**Repair:** retain the scope concern while showing the actual diagnostic for an undeclared property. Distinguish declaration visibility from runtime presence and creation-site excess checks.

## Accepted repetitions, exact failing input and limitations

The all-same-named-alias table and unconditional namespace-emission claims repeat approved F06; the fresh ambient alias prohibition repeats approved N26; the final weak user predicate repeats approved F01. These corrections can share the eventual leaf unit, but the four new findings above remain gated. Unsupported cost/latency thresholds and missing required sections are already within approved F10/F14.

The exact third-fence input for N29 follows, retained so its observed parser failure does not depend on scratch survival:

```typescript
// ── Good: declare global — augment Window from a module file ──
// file: src/types/window.d.ts (module because of export {})
export {}; // makes file a module — required for declare global to be valid
declare global {
  interface Window {
    __APP_VERSION__?: string;
    __FEATURE_FLAGS__?: { darkMode: boolean };
  }
}
// Now any file in the program can use the augmented Window without casting:
declare const window: Window;
if (window.__APP_VERSION__) {
  console.log(window.__APP_VERSION__.toUpperCase()); // ok — string | undefined narrowed
}
console.log(window.__FEATURE_FLAGS__?.darkMode); // ok — optional chain

// bad — augmenting Window from a module WITHOUT declare global (module-local shadow)
// file: src/bad-window.ts
export {}; // module
interface Window { // this Window is LOCAL to this module — does NOT augment the global Window
  __LOCAL_ONLY__: string;
}
// declare const win2: Window;
// win2.__LOCAL_ONLY__ // this ref sees LOCAL Window, but global `window` does not — reviewer confusion
// fix — wrap in declare global { interface Window { __LOCAL_ONLY__: string } }

// ── Good: declare module — augment a third-party interface (Express-style example) ──
// file: src/types/express.d.ts
// This file augments the interface that `import { Request } from "express"` exposes.
// The real module that owns Request is "express-serve-static-core" — not "express" itself.
import "express-serve-static-core"; // marker so TS knows which module we augment
declare module "express-serve-static-core" {
  interface Request {
    user?: { id: string; role: "admin" | "user" };
    traceId?: string;
  }
}
// Now any handler that imports Request sees the extra members without changing its signature:
import type { Request as ExpressRequest } from "express-serve-static-core";
function handle(req: ExpressRequest): void {
  console.log(req.user?.id, req.traceId); // ok — augmented members available
}
handle({ user: { id: "1", role: "admin" } } as ExpressRequest);

// bad — augmenting the wrong specifier (no effect, no error)
// file: src/types/bad-express.d.ts
// declare module "express" { // wrong specifier — Request lives in "express-serve-static-core"
//   interface Request { user: unknown; }
// }
// fix — check node_modules/@types/express/index.d.ts re-export line to find the owning specifier.

// ── Good: ambient module declaration for an untyped JS package — add types without forking ──
// file: src/types/untyped-pkg.d.ts
// Suppose "untyped-pkg" is a JS library with no @types. Provide a minimal ambient declaration:
declare module "untyped-pkg" {
  export function greet(name: string): string;
  export interface Config { host: string; port: number; }
}
// Now imports type-check:
import { greet as pkgGreet } from "untyped-pkg" with { "resolution-mode": "import" }? // ignore resolution for demo
// Practical use — after declaration above, this would type-check:
// import { greet } from "untyped-pkg";
// console.log(greet("Ada")); // ok — returns string

// ── Good: .d.ts augmentation file is included by tsconfig ──
// tsconfig.json snippet (comment, not code):
// {
//   "compilerOptions": { "strict": true, "erasableSyntaxOnly": true },
//   "include": ["src/**/*", "src/types/**/*"] // ensures src/types/*.d.ts is part of the program
// }
// If the .d.ts is not included, augmentation silently disappears — no error, just missing members.

// bad — ambient augmentation in a script file via declare global (illegal)
// file: script-env.d.ts — NO export/import → script
// declare global { // error TS1231: 'declare global' is only valid inside a module — scripts are already global
//   interface Window { bad: string; }
// }
// fix — either make file a script and use bare interface Window, or make it a module with export {}:
// (script approach) bare augmentation:
// // interface Window { bad: string; } // ok in script file — merges globally
// (module approach):
// // export {}; declare global { interface Window { bad: string; } }

// good — module augmentation that adds overloads, not just properties
declare module "express-serve-static-core" {
  interface Response {
    json(body: { ok: true; data: unknown } | { ok: false; error: string }): this;
  }
}
// Now res.json({ ok: true, data: {} }) has a narrower check — no cast at call site.

// All above augmentation blocks are erasable — npx tsc --strict --erasableSyntaxOnly --noEmit → ok (no TS1294)
```

The five completed commands and full observed outputs are retained in `/tmp/typescript-repairs/A011/results.json`. Initial harness expected TS1109 for the parser error, but observed TS1005; its expectation was corrected and all five probes completed before this report. Ambient probes are not runtime checks. No live HTTP, browser, framework, lint or performance integration was run.

JavaScript's holes/undefined benchmark supplies the teaching method: vary one condition, predict the outcome and compare with actual observation. Primary merging and current compiler behavior establish the facts; original capability-first interface/alias teaching from R040 is reused with its historical limits. Existing 02 declaration-space, 04 shape/modifier and 12 file-scale owners retain their boundaries.

## One additional repair unit

**A11.1 — 04/2.2 plus index:** repair N29–N32, integrate the approved direct repetitions and required sections, and verify a complete local project, modifier conflicts, additive overloads and typo rejection. One leaf/index → actual verification → immediate log → one commit. Further newly discovered material issues remain separate.

The complete original P1–P7 work continues independently. While this additional unit awaits acceptance, original 04/2.3 and the remaining feature-owner work remain available. No new curriculum is proposed.
