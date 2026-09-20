# Behavioral Patterns: Distribution and Interpretation

Behaviors spread across objects: uniform iterators, mediating hubs, state snapshots, handler chains, and operations visiting stable structures. Command-and-control lives in [Domain 04](<../04 Behavioral Patterns Command and Control/README.md>); this domain spends it on *distribution* — every pattern here answers "how do many objects share behavior?" while control stays put.

## 0. Prerequisites

[Domain 04: Behavioral Patterns Command and Control](<../04 Behavioral Patterns Command and Control/README.md>) (strategy/state/observer/command/template — interaction vocabulary assumed) and [Domain 03: Structural Patterns](<../03 Structural Patterns/README.md>) (composition/delegation mechanics — behaviors distribute through structures). This domain assumes both and spends its pages on distribution, not syntax.

## 1. Distribution

### [1.1. Iterator: uniform traversal](<./sections/1. Distribution/1.1. Iterator uniform traversal.md>)

1. **One protocol for all collections** (verified `3,4,5,6` — `Symbol.iterator` hides internals, clients loop uniformly).
2. **Lazy generators traverse free** (yield-based iteration — infinite sequences, early termination, `O(1)`-ish memory).
3. **External iteration beats internal** (caller-controlled pulls — pause/resume/zip/merge impossible with callbacks).

### [1.2. Mediator: peers coordinate through hubs](<./sections/1. Distribution/1.2. Mediator peers coordinate through hubs.md>)

1. **Colleagues never address each other** (verified routed/lost/inbox — hub owns topology, peers own behavior).
2. **N×M wiring collapses to N×1** (each peer knows the hub — onboarding one colleague touches one file).
3. **Hubs stay thin or rot** (routing only — business logic in colleagues; god-mediators re-centralize).

---

## 2. Capture and chains

### [2.1. Memento: snapshots without exposure](<./sections/2. Capture and chains/2.1. Memento snapshots without exposure.md>)

1. **State captured opaquely** (verified `hello!!!` → restore → `hello` — caretaker holds tokens, never contents).
2. **Encapsulation survives saving** (originator owns format — externalized state stays private by construction).
3. **Memento vs command-undo split** (snapshots restore *state* — commands invert *actions*; size/composability decide).

### [2.2. Chain of Responsibility: pass until handled](<./sections/2. Capture and chains/2.2. Chain of Responsibility pass until handled.md>)

1. **Handlers decide locally** (verified neg/zero/pos — first-match wins, unhandled falls through to default).
2. **Senders stay ignorant** (no handler addresses — new handlers insert without touching senders or siblings).
3. **Chains need termination contracts** (default handler or explicit miss — silent drops are the signature bug).

---

## 3. Interpretation

### [3.1. Visitor and Interpreter: operations on structures](<./sections/3. Interpretation/3.1. Visitor and Interpreter operations on structures.md>)

1. **Visitors add operations without modifying** (double dispatch — new operations land in new visitors, structures closed).
2. **Interpreters evaluate small languages** (expression trees + recursive evaluation — DSLs without parser generators).
3. **Cyclic-visit discipline required** (acyclic visitor graphs assumed — cycles need visited-sets, stated upfront).

---

## 4. Important points to remember (behavioral II)

### [4.1. Distribution checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Distribution checklist habits mentors insist on.md>)

1. **Traverse uniformly, coordinate centrally** (iterators hide internals; mediators own topology — each at its post).
2. **Capture opaquely, chain explicitly** (mementos private by construction; handlers ordered with defaults).
3. **Visit without modifying** (operations as visitors — structures closed, behaviors open).

---

## 5. Interview questions and answers (behavioral II)

### [5.1. Common interview QA: iterator, mediator, memento, chain, visitor](<./sections/5. Interview questions and answers/5.1. Common interview QA iterator mediator memento chain visitor.md>)

1. **Iterator vs Observer — both decouple?** (the decoupling screen — traversal vs notification, pull vs push).
2. **Middleware pipeline: chain or decorator?** (the layering screen — pass-along vs wrap-around, termination vs stacking).
3. **Undo: memento or command?** (the reversal screen — state snapshots vs action inverses), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Command/control underneath** (strategies/states/observers/commands → 04; this domain distributes further).
2. **Modern wiring and mastery** (DI/middleware/event-sourcing → 06; interview synthesis → 07).
3. **Language mechanics** (generators, symbols → JS/TS tracks; this track owns pattern judgment).
