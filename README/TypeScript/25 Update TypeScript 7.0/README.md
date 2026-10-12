# Update TypeScript 7.0

This incremental domain takes returning readers from the published 5.x/6.x material to TypeScript 7.0. Examples use 7.0.2, checked 2026-10-12; each lesson declares its runtime and older comparison versions. Start with [configuration](<../13 Configuration and Compiler Options/README.md>) and [migration practice](<../20 Production Checklist Migration and Interoperability/README.md>). The [7.0 release announcement](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/) establishes the native release; runtime support is checked separately.

## 1. Configuration Migration

### [1.1. Configuration defaults and removed options](<sections/1. Configuration Migration/1.1. Configuration defaults and removed options.md>)

1. **Transition model:** distinguish inherited 6.0 defaults from options removed in 7.0.
2. **Application:** migrate a complete Node fixture while preserving its output entry point and global declarations.
3. **Failure diagnosis:** observe check-only versus emitting builds, TS5011/TS2591/TS5108, and actual built-consumer results.
4. **Review judgment:** justify compatibility evidence and the limits of deprecation suppression/configuration automation.

## Publication progress

The approved curriculum also covers editor/tool API compatibility, native build/watch measurement, Unicode inference, an integrated migration assessment and an overlap/update route. These five lessons are pending publication; their full outcomes are in the [approved repair log](<../LOG.md>). This index links only to published lessons.

[← Back to track](<../README.md>)
