# Update TypeScript 7.0

This incremental domain takes returning readers from the published 5.x/6.x material to TypeScript 7.0. Examples use 7.0.2, checked 2026-10-12; each lesson declares its runtime and older comparison versions. Start with [configuration](<../13 Configuration and Compiler Options/README.md>) and [migration practice](<../20 Production Checklist Migration and Interoperability/README.md>). The [7.0 release announcement](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/) establishes the native release; runtime support is checked separately.

## 1. Configuration Migration

### [1.1. Configuration defaults and removed options](<sections/1. Configuration Migration/1.1. Configuration defaults and removed options.md>)

1. **Transition model:** distinguish inherited 6.0 defaults from options removed in 7.0.
2. **Application:** migrate a complete Node fixture while preserving its output entry point and global declarations.
3. **Failure diagnosis:** observe check-only versus emitting builds, TS5011/TS2591/TS5108, and actual built-consumer results.
4. **Review judgment:** justify compatibility evidence and the limits of deprecation suppression/configuration automation.

## 2. Editor and Tool Compatibility

### [2.1. Editor and tool API compatibility](<sections/2. Editor and Tool Compatibility/2.1. Editor and tool API compatibility.md>)

1. **Interface model:** distinguish native CLI/LSP services from tools that import the older compiler API.
2. **Application:** install and test native checking with typed ESLint using the explicit compatibility alias.
3. **Failure diagnosis:** separate compiler diagnostics, typed lint violations and missing old API functions.
4. **Editor review:** configure the documented native route and identify the UI checks still needed for the chosen integration.

## 3. Native Build and Watch

### [3.1. Native builds watch and measurement](<sections/3. Native Build and Watch/3.1. Native builds watch and measurement.md>)

1. **Comparison model:** distinguish fresh, unchanged incremental and edited builds before interpreting performance.
2. **Application:** reproduce a pinned 201-source-file comparison with emitted-consumer checks and external wall/RSS measurements.
3. **Failure diagnosis:** observe a finite watch error-and-recovery cycle and identify cache, artifact and process-measurement mistakes.
4. **Review judgment:** separate local observations from production predictions and unmeasured editor/watch behavior.

## 4. Unicode Inference

### [4.1. Unicode code points in template literal inference](<sections/4. Unicode Inference/4.1. Unicode code points in template literal inference.md>)

1. **Transition model:** distinguish the 6.0 surrogate split from 7.0 code-point inference and from grapheme segmentation.
2. **Application:** run pinned old/new type assertions and compare them with actual JavaScript string counts.
3. **Failure diagnosis:** identify versioned assertion failures and runtime implementations that still index code units.
4. **Review judgment:** choose the intended string unit before migrating a counter or public return contract.

## 5. Migration Assessment

### [5.1. Assess a complete native compiler migration](<sections/5. Migration Assessment/5.1. Assess a complete native compiler migration.md>)

1. **Evidence model:** assign compiler, API, lint, artifact and runtime promises to separate checks.
2. **Application:** build a pinned native/compatibility library and test consumers of its actual tarball.
3. **Failure diagnosis:** reproduce a lint-only failure and a declaration packaging failure despite green source checking.
4. **Review judgment:** classify the Unicode delta, emission fallback and unresolved integration checks before promoting an upgrade.

## 6. Overlaps and Update Route

### [6.1. Overlaps and the current learning route](<sections/6. Overlaps and Update Route/6.1. Overlaps and the current learning route.md>)

1. **Ownership model:** separate unchanged topical mechanics from the native compiler's version delta.
2. **Learning route:** choose an appropriate sequence for returning readers and new learners with explicit prerequisites.
3. **Failure routing:** identify the next diagnostic check for output, API, Unicode, package and boundary problems.

All six approved update lessons are published. The earlier topical material's review repairs remain in progress; each worked example identifies its tested environment.

[← Back to track](<../README.md>)
