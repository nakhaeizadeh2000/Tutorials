# Structural Patterns

Shape-shifting without behavior change: adapting legacy interfaces, simplifying facades, stacking decorators, standing-in proxies, composing part-whole trees, bridging abstractions from implementations, and sharing flyweights. SOLID foundations live in [Domain 01](<../01 SOLID Principles and Design Foundations/README.md>); this domain spends them on structure — every pattern here answers "how do objects fit together?" while behavior stays put.

## 0. Prerequisites

[Domain 01: SOLID Principles and Design Foundations](<../01 SOLID Principles and Design Foundations/README.md>) (composition-over-inheritance, OCP seams, ISP small interfaces — structural patterns *are* these principles composed) plus TypeScript object/interface mechanics ([TypeScript 04](<../../TypeScript/04 Objects Interfaces and Type Aliases/README.md>)). This domain assumes both and spends its pages on patterns, not syntax.

## 1. Adapters and facades

### [1.1. Adapter: making interfaces fit](<./sections/1. Adapters and facades/1.1. Adapter making interfaces fit.md>)

1. **Translate at the boundary** (legacy XML behind a JSON port — verified `{"id":"a1"}` — callers never see the old shape).
2. **Object adapters over class adapters** (composition-based wrapping — no multiple-inheritance demands, swappable anytime).
3. **Adapters are temporary by design** (migration scaffolding with removal dates — permanent adapters fossilize workarounds).

### [1.2. Facade: simplifying the front](<./sections/1. Adapters and facades/1.2. Facade simplifying the front.md>)

1. **One call orchestrates subsystems** (video pipeline: decode + filter + encode behind `convert()` — callers learn one method).
2. **Facades simplify, never hide** (subsystems stay accessible — escape hatches for power users, no lock-in).
3. **Facade vs mediator split** (unidirectional simplification here; multidirectional coordination → Domain 05).

---

## 2. Decorators and proxies

### [2.1. Decorator: stacking behavior](<./sections/2. Decorators and proxies/2.1. Decorator stacking behavior.md>)

1. **Wrap to extend, order matters** (verified `<b><i>hi</i></b>` vs `<i><b>hi</b></i>` — composition sequence *is* semantics).
2. **Decorator pattern vs decorator syntax** (runtime wrapping here; `@annotation` in TypeScript 14 — related words, different mechanics).
3. **Subclass explosion alternative** (Bold × Italic × Underline = 8 classes flattened to 3 wrappers + composition).

### [2.2. Proxy: standing in](<./sections/2. Decorators and proxies/2.2. Proxy standing in.md>)

1. **Same interface, controlled access** (virtual/lazy, protection, remote, logging proxies — construction deferred or guarded).
2. **Lazy loads on first use** (heavy resources behind stand-ins — startup fast, cost paid once on demand).
3. **Proxy vs decorator split** (same interface, different intent — control access vs add behavior; identical structure, opposite purpose).

---

## 3. Sharing structure

### [3.1. Composite: part-whole trees](<./sections/3. Sharing structure/3.1. Composite part-whole trees.md>)

1. **Uniform treatment of leaves and groups** (verified size 15 — files and directories answer `size()` identically).
2. **Recursion does the work** (operations traverse — clients never branch on node kind).
3. **Transparency vs safety trade** (uniform interface risks meaningless ops on leaves — child-management on files).

### [3.2. Bridge and Flyweight: decouple and share](<./sections/3. Sharing structure/3.2. Bridge and Flyweight decouple and share.md>)

1. **Bridge splits abstraction from implementation** (renderers × platforms vary independently — `M×N` matrix flattened to `M+N`).
2. **Flyweight shares intrinsic state** (glyph objects per character-shape, positions extrinsic — memory collapses with sharing).
3. **Sharing demands immutability** (shared state mutated is shared corruption — flyweights frozen, extrinsic carried).

---

## 4. Important points to remember (structural)

### [4.1. Structural checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Structural checklist habits mentors insist on.md>)

1. **Wrap for fit, simplify for use** (adapters translate, facades orchestrate — each at its boundary, never both jobs).
2. **Stack behavior, guard access** (decorators add, proxies control — identical structure distinguished by intent).
3. **Share structure deliberately** (composite uniformity, bridge independence, flyweight immutability — each priced).

---

## 5. Interview questions and answers (structural)

### [5.1. Common interview QA: structural patterns](<./sections/5. Interview questions and answers/5.1. Common interview QA structural patterns.md>)

1. **Decorator vs inheritance vs composition?** (the extension screen — stacking, taxonomy, delegation compared).
2. **Proxy vs decorator — same code?** (the intent screen — identical structure, opposite purpose, examples each).
3. **Design a file system API** (the composition screen — composite with transparency/safety stated), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Principles underneath** (composition, OCP, ISP → Domain 01; this domain applies, never re-derives).
2. **Creational/behavioral/modern** (factories → 02; strategies/observers → 04–05; middleware → 06).
3. **Language mechanics** (interfaces, decorators syntax → TypeScript track; this track owns pattern judgment).
