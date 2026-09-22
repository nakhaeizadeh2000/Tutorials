# Runtime Fundamentals and Mental Model

What the Node.js runtime is and how programs live inside it: the V8-plus-libuv mental model, installed and pinned versions, the process lifecycle with its globals, Node's two module systems, and the event-loop phases as they behave in production. Language mechanics live in the [JavaScript track](<../../JavaScript/README.md>); this domain teaches the *runtime around the language* — how code is loaded, scheduled, and retired by Node, not syntax itself.

## 0. Prerequisites

[JavaScript 13: Async Event Loop and Promises](<../../JavaScript/13 Async Event Loop and Promises/README.md>) (microtasks, promise combinators — language mechanics assumed, priced in runtime terms here). This domain assumes working async JavaScript and spends its pages on Node's process, loader, and scheduler, not promise syntax.

## 1. Runtime identity and setup

### [1.1. What Node.js is and is not](<./sections/1. Runtime identity and setup/1.1. What Node.js is and is not.md>)

1. **V8 plus libuv plus bindings** (one thread runs JS, a pool does I/O — the three-piece model every diagnosis starts from).
2. **Server-side JS without the browser** (no DOM, but files, sockets, processes — the API swap that defines backend work).
3. **Node is not a framework** (Express/Fastify/NestJS live above — the runtime owns scheduling and I/O, frameworks own structure).

### [1.2. Installing, managing, and pinning versions](<./sections/1. Runtime identity and setup/1.2. Installing managing and pinning versions.md>)

1. **One Node per project, pinned** (nvm/fnm plus `.nvmrc` and `engines` — version drift ends at the repo boundary).
2. **LTS lines, not latest hype** (Active vs Maintenance vs Current — production rides LTS, experiments ride Current).
3. **Verify the install teaches the runtime** (`node --version`, `process.versions`, `node -e` probes — version claims checked, never assumed).

---

## 2. Process and modules

### [2.1. The process model, globals, and lifecycle](<./sections/2. Process and modules/2.1. The process model globals and lifecycle.md>)

1. **One process, owned explicitly** (`process.argv`, `process.env`, `process.exitCode` — inputs, configuration, and exit contracts).
2. **Globals are runtime services** (`__dirname` vs `process.cwd()`, `setTimeout`, `Buffer` — what Node injects and why each exists).
3. **Lifecycle ends on purpose** (event-loop drain vs forced exit — `exit` codes and signal handlers as production contracts).

### [2.2. Modules in Node: CJS and ESM interop](<./sections/2. Process and modules/2.2. Modules in Node CJS and ESM interop.md>)

1. **Two systems, one resolver** (`require` is synchronous and cached; `import` is asynchronous and static — the trade Node inherits).
2. **File-to-module mapping rules** (extensions, `package.json` `type`, nearest-parent lookup — why a file loads as it does).
3. **Interop without surprises** (default-export traps, `createRequire`, `.mjs`/`.cjs` escape hatches — boundaries crossed deliberately).

---

## 3. Execution model

### [3.1. The Node event loop phases in practice](<./sections/3. Execution model/3.1. The Node event loop phases in practice.md>)

1. **Phases order real callbacks** (timers → pending → poll → check → close — where each callback waits and why order matters).
2. **`process.nextTick` vs `setImmediate`** (starvation vs phase-yield — the scheduling choice that decides latency and liveness).
3. **The pool behind the loop** (libuv threads for fs/DNS/crypto — blocking the loop vs queueing the pool, measured not guessed).

### [3.2. Timers handles, ref unref, and process lifetime](<./sections/3. Execution model/3.2. Timers handles ref unref and process lifetime.md>)

1. **Handles are lifetime votes** (ref'd holds the loop, unref'd witnesses — the exit rule priced in seconds).
2. **refresh, close, and clear without realloc** (idle timeouts refreshed in place — reactivation guarded, churn avoided).
3. **Shutdown interplay** (housekeeping unref'd out of the drain, foreground sleeps signal-cancelled — SIGTERM to exit 0).

---

## 4. Important points to remember (runtime)

### [4.1. Runtime checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Runtime checklist habits mentors insist on.md>)

1. **Pin it, print it, probe it** (version pinned, `process.versions` asserted, event-loop assumptions verified in code).
2. **Exit codes are API** (zero means clean, nonzero names the failure — supervisors and CI read what you return).
3. **Schedule with phase awareness** (defer with `setImmediate`, never starve with `nextTick` loops — liveness reviewed like correctness).

---

## 5. Interview questions and answers (runtime)

### [5.1. Common interview QA: runtime fundamentals](<./sections/5. Interview questions and answers/5.1. Common interview QA runtime fundamentals.md>)

1. **"Is Node single-threaded?" — answer in layers** (JS thread vs pool vs workers — the precision screen).
2. **CJS vs ESM: which and why?** (the interop judgment question — sync legacy vs static future, priced per boundary).
3. **Order this program's output** (the phases-and-queues trace — timers, immediates, nextTicks read live), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Language mechanics** (promises, syntax, module keywords as grammar — JavaScript track owns the *how*; this domain owns the *runtime behavior*).
2. **Deeper runtime topics** (packages → 02; files/streams → 03; networking/HTTP → 04; processes/workers → 05; debugging/shipping → 06 — each owned there).
3. **Frameworks and vocabulary** (Express/Fastify structure → their tracks; meeting words → IT Vocabulary; this track owns the engine room).
