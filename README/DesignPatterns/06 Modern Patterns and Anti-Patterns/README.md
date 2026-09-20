# Modern Patterns and Anti-Patterns

Production-grade wiring and the discipline to avoid its shadow: dependency-injection containers, repository seams, middleware pipelines, publish-subscribe with event sourcing, plus the anti-pattern catalog (god objects revisited, anemic models, shotgun surgery). Classical patterns live in [Domains 02–05](<../02 Creational Patterns/README.md>); this domain spends them at system scale — every pattern here answers "how do applications wire together?" while principles stay put.

## 0. Prerequisites

[Domain 01: SOLID Principles and Design Foundations](<../01 SOLID Principles and Design Foundations/README.md>) (DIP injection, SRP splitting) and [Domain 04: Behavioral Patterns Command and Control](<../04 Behavioral Patterns Command and Control/README.md>) (commands, observers — middleware/queues composed from both). This domain assumes both and spends its pages on wiring, not syntax.

## 1. Wiring and data

### [1.1. Dependency injection containers](<./sections/1. Wiring and data/1.1. Dependency injection containers.md>)

1. **Registrations resolved with wiring** (verified unbound error — bind factories, resolve graphs, fail loud on misses).
2. **Lifetimes managed explicitly** (singleton/scoped/transient per registration — leaf: Domain 02 §5.1's lifetime screen, scaled).
3. **Containers wire, never hide** (composition roots own graphs — injected code stays constructor-explicit).

### [1.2. Repository: collection-like persistence](<./sections/1. Wiring and data/1.2. Repository collection-like persistence.md>)

1. **Domain code sees collections** (verified add/get/count — `byId`/`add`/`find`, never SQL/HTTP in policy).
2. **Persistence ignorance tested** (in-memory fakes honor contracts — swap stores without touching policy).
3. **Queries stay inside** (specifications/criteria objects — query logic owned, never string-scattered).

---

## 2. Pipelines and events

### [2.1. Middleware pipelines](<./sections/2. Pipelines and events/2.1. Middleware pipelines.md>)

1. **Composed request processors** (verified `log[handled:ok]` vs `log[rejected]` — layers decide pass/respond, order matters).
2. **Termination contracted** (defaults at the tail — unhandled requests surface, never vanish silently).
3. **Error lanes separate** (error middleware with distinct arity — failures route, never fall through).

### [2.2. Publish-subscribe and event sourcing](<./sections/2. Pipelines and events/2.2. Publish-subscribe and event sourcing.md>)

1. **Topics decouple at scale** (brokers fan out — producers/consumers evolve independently, schemas versioned).
2. **Event logs are truth** (append-only journals replayed — state derived, never stored primarily).
3. **Idempotence required** (at-least-once delivery assumed — handlers dedupe by event id, side effects guarded).

---

## 3. Knowing better

### [3.1. Anti-pattern catalog: god objects to cargo cults](<./sections/3. Knowing better/3.1. Anti-pattern catalog god objects to cargo cults.md>)

1. **God objects, anemic models, shotgun surgery** (symptoms named — multi-reason classes, logic-free data, scattered changes).
2. **Golden hammers and cargo cults** (one-pattern-for-everything, ceremony-without-cause — familiarity masquerading as judgment).
3. **Premature abstraction and analysis paralysis** (speculative seams, endless modeling — YAGNI with teeth, shipping with judgment).

---

## 4. Important points to remember (modern)

### [4.1. Modern checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Modern checklist habits mentors insist on.md>)

1. **Wire explicitly, persist ignorantly** (containers at roots, repositories at boundaries — policy never touches drivers).
2. **Pipeline with contracts, events with idempotence** (termination stated, delivery assumed-at-least-once, handlers dedupe).
3. **Name smells early, refactor continuously** (catalog as review vocabulary — anti-patterns called out by name, fixed promptly).

---

## 5. Interview questions and answers (modern)

### [5.1. Common interview QA: DI, repos, pipelines, events, smells](<./sections/5. Interview questions and answers/5.1. Common interview QA DI repos pipelines events smells.md>)

1. **DI framework or manual wiring?** (the scale screen — graph size decides, hiding forbidden either way).
2. **Design an event-driven order flow?** (the systems screen — topics, idempotence, sourcing, sagas named).
3. **Review this for smells?** (the judgment screen — catalog applied live to real code), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Classical patterns underneath** (factories/strategies/observers → 02/04/05; this domain wires them at scale).
2. **Mastery and synthesis** (interview method → 07; this domain builds systems, 07 performs them).
3. **Language mechanics** (decorators syntax, classes → TypeScript track; this track owns pattern judgment).
