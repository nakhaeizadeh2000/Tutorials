## Update TypeScript 5.8 (feature map + where it lives in this repo)

This historical TypeScript 5.8 change map routes to implemented topical owners. The current checked compiler baseline is 7.0.2; runtime and tool support remain example-specific. Use the [current learning route](<../25 Update TypeScript 7.0/sections/6. Overlaps and Update Route/6.1. Overlaps and the current learning route.md>) for the native migration.

## 1. `erasableSyntaxOnly` and the trio standard

### [1.1. `erasableSyntaxOnly` and the trio standard — the flag and its two companions](<../13 Configuration and Compiler Options/sections/2. Erasable and Isolated Toolchain/2.3. erasableSyntaxOnly and the trio standard.md>)

1. **Bounded syntax gate:** erasableSyntaxOnly reports unsupported syntax; it does not configure the host, module resolver or dependency graph. The owner supplies the full tested inventory.
2. **Current observation:** 7.0.2 rejects the tested angle-bracket assertion under this gate with TS1294, and Node 22.18.0 rejects that source syntax. Keep the exact compiler/runtime distinction rather than assuming every earlier implementation behaves identically.
3. **Migration:** choose syntax and representation changes deliberately. The linked complete project tests source and emitted execution; three flags alone do not guarantee parity.

## 2. Granular return-branch checks

### [2.1. Return types — the declared contract each branch is now checked against](<../05 Functions and Callable Types/sections/1. Function Type Fundamentals/1.3. Return types void never and contextual inference.md>)

1. **Branch contracts:** 5.8 made selected return-expression checks more granular against a known return contract. This does not prove arbitrary any values correct.
2. **Annotation judgment:** an explicit return can state the intended API; contextual or inferred results have their own useful roles. The owner verifies both.
3. **Repair:** construct or validate the promised result. An assertion signature is a trusted claim, not automatic evidence that an allegedly impossible path cannot occur.

## 3. Node module modernization (`require(ESM)`, `node18`)

### [3.1. `module` and `moduleResolution` pairing — where the new stable point docks](<../13 Configuration and Compiler Options/sections/3. Modules Emit and Projects/3.1. module and moduleResolution pairing.md>)

1. **Compiler model:** node18 offers a fixed module-mode baseline, while nodenext evolves. Choose from the supported deployment contract rather than always selecting the moving mode.
2. **Runtime boundary:** compiler acceptance of require(ESM) does not guarantee that every host/version or top-level-await graph supports the call.
3. **Consumers:** the linked configuration/module owners execute ESM and CommonJS consumers and distinguish import attributes, resolution and package entry conditions.

## 4. Declaration fidelity (computed names, `libReplacement`)

### [4.1. Authoring `.d.ts` — the public surface these fixes protect](<../12 Modules Namespaces and Declaration Files/sections/3. Declaration Files in Practice/3.1. Authoring d.ts public API surface.md>)

1. **Declaration fidelity:** 5.8 preserves supported computed names in emitted declarations. This is not a promise that each non-literal key becomes one statically named property.
2. **Library replacement:** libReplacement false disables replacement-package lookup. A project relying on a replacement must preserve that lookup deliberately; setting false is not how it selects its custom DOM package. See the [5.8 option explanation](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-8.html#the-libreplacement-flag).
3. **Verification:** inspect declaration output and exercise consumers. A generated diff alone does not validate behavior or every older compiler’s compatibility.

## 5. Compiler and editor performance

### [5.1. Measuring with `extendedDiagnostics` — proving the upgrade helped](<../19 Performance Project References and Scaling/sections/1. Check-Time Performance/1.1. Measuring with extendedDiagnostics and traces.md>)

1. **Historical optimizations:** 5.8 changed some path-normalization and option-revalidation work. A release-specific improvement is not a fixed speedup for every program or later implementation.
2. **Measurement:** use the owner’s actual-process, input and cache discipline for a before/after comparison.
3. **Limits:** compiler implementation limits are not public per-project instantiation-budget controls. Diagnose an observed TS2589 before selecting a semantics-preserving remedy.

## Ownership and verification

The linked leaves own the complete explanation, commands, examples and observed limits. This page is navigation, not an additional executable project or a promise that a historical release optimization applies to the current compiler.

[← Back to TypeScript track](<../README.md>)
