# Behavioral Patterns: Command and Control

Objects telling each other what to do: interchangeable strategies, notifying observers, encapsulated commands with undo, state-driven behavior, and template skeletons with hooks. Structural composition lives in [Domain 03](<../03 Structural Patterns/README.md>); this domain spends it on *interaction* — every pattern here answers "who decides what happens next?" while structure stays put.

## 0. Prerequisites

[Domain 01: SOLID Principles and Design Foundations](<../01 SOLID Principles and Design Foundations/README.md>) (OCP seams, DIP injection, composition default — behavioral patterns *are* these principles interacting) and [Domain 03: Structural Patterns](<../03 Structural Patterns/README.md>) (composition/delegation mechanics — behaviors compose through structures). This domain assumes both and spends its pages on interaction, not syntax.

## 1. Switching behavior

### [1.1. Strategy: interchangeable algorithms](<./sections/1. Switching behavior/1.1. Strategy interchangeable algorithms.md>)

1. **Family behind one interface** (verified ascending/descending swap — algorithms selected at runtime, not compile time).
2. **Composition over conditional** (strategy injection kills switch-on-kind — leaf: Domain 01 §1.2's tax retired).
3. **Runtime swapping is the signature** (strategy changes mid-life — verified `use()` swap; unchanging choices need no pattern).

### [1.2. State: behavior follows condition](<./sections/1. Switching behavior/1.2. State behavior follows condition.md>)

1. **States as strategy holders** (TCP states, order lifecycles — transitions move the strategy, behavior follows).
2. **Transitions explicit, not scattered** (state table over `if` chains — legal moves visible, illegal unrepresentable).
3. **State vs strategy split** (who switches? client/state-machine vs context — ownership decides the pattern).

---

## 2. Requests and notifications

### [2.1. Observer: subscribe and notify](<./sections/2. Requests and notifications/2.1. Observer subscribe and notify.md>)

1. **One-to-many without coupling** (verified 2 notified — subjects never name observers, observers never poll).
2. **Order-independence required** (notified in subscription order is incidental — observers must tolerate any sequence).
3. **Leak discipline mandatory** (unsubscribe on teardown — lapsed-listener leaks are observer's signature incident).

### [2.2. Command: requests as objects](<./sections/2. Requests and notifications/2.2. Command requests as objects.md>)

1. **Encapsulate invocation** (verified do/undo 2→1 — receivers, actions, and arguments frozen as values).
2. **Undo/redo/queue/log fall out** (history stacks, macro commands, transactional journals — one pattern, four dividends).
3. **Commands vs callbacks split** (reifiable requests with lifecycle vs fire-and-forget functions — undo needs objects).

---

## 3. Skeletons

### [3.1. Template Method: skeleton with hooks](<./sections/3. Skeletons/3.1. Template Method skeleton with hooks.md>)

1. **Invariant skeleton, variant steps** (base owns the sequence — subclasses fill documented hooks, never reorder).
2. **Hooks documented as API** (abstract steps required, hook defaults optional — self-call contract from Domain 01 §3.1).
3. **Hollywood Principle named** ("don't call us, we'll call you" — inversion of control at method level).

---

## 4. Important points to remember (behavioral I)

### [4.1. Behavioral checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Behavioral checklist habits mentors insist on.md>)

1. **Behavior selected, not branched** (strategies/states over conditionals — runtime choice beats compile-time taxonomy).
2. **Notifications decoupled, lifecycle managed** (subscribe/unsubscribe paired — observers never leak, commands always undoable).
3. **Skeletons documented, hooks explicit** (template contracts stated — subclasses fill blanks, never rewrite sequences).

---

## 5. Interview questions and answers (behavioral I)

### [5.1. Common interview QA: strategy, observer, command, state](<./sections/5. Interview questions and answers/5.1. Common interview QA strategy observer command state.md>)

1. **Strategy vs State — same code?** (the ownership screen — who switches decides the pattern).
2. **Observer without leaks?** (the lifecycle screen — subscribe/unsubscribe pairing under pressure).
3. **Undo architecture?** (the command screen — history stacks, macro composition, redo), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Principles and structure underneath** (seams/composition → 01; wrapping/delegation → 03; this domain composes both).
2. **Distributed behavior and modern use** (iterators/mediators/visitors → 05; middleware/routers → 06).
3. **Language mechanics** (callbacks, EventEmitter → platform/JS docs; this track owns pattern judgment).
