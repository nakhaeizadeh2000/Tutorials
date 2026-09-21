# Events, Networking, and HTTP

How Node programs talk: `EventEmitter` as the notification backbone, TCP sockets and DNS as the network substrate, and bare `node:http` as the request/response layer frameworks compose upon. Streams flowing underneath live in [Domain 03](<../03 Files Streams and Buffers/README.md>); this domain teaches the *conversation* — events emitted, sockets connected, requests answered, all without blocking the loop.

## 0. Prerequisites

[Domain 03: Files, Streams, and Buffers](<../03 Files Streams and Buffers/README.md>) (streams, pipeline, backpressure — sockets *are* streams here; this domain spends its pages on events, sockets, and HTTP semantics, not stream mechanics).

## 1. Events

### [1.1. EventEmitter subscribe and error](<./sections/1. Events/1.1. EventEmitter subscribe and error.md>)

1. **Subscribe, emit, clean up** (`on`/`once`/`off` — the trio; emission synchronous, ordered, in-process).
2. **Errors are terminal events** (unhandled `error` throws — the listener that must always exist).
3. **Leaks warned, not prevented** (`maxListeners` tripwire — growth reviewed, not ignored).

### [1.2. Event patterns beyond basics](<./sections/1. Events/1.2. Event patterns beyond basics.md>)

1. **Once and prepended order** (`once` for single-fire, `prependListener` for ordering — intent in the API call).
2. **Async listeners decoupled** (emit never awaits — async handlers race; errors inside need explicit capture).
3. **Emitters as boundaries** (module-owned emitters — internal events stay internal; public surface documented).

---

## 2. Networking

### [2.1. TCP sockets with net](<./sections/2. Networking/2.1. TCP sockets with net.md>)

1. **Sockets are Duplex streams** (readable + writable — pipeline, backpressure, and destroy all apply unchanged).
2. **Servers accept, clients connect** (`createServer`/`connect` — the two roles; ports bound, addresses resolved).
3. **Half-open and idle discipline** (timeouts set, `allowHalfOpen` chosen, dead sockets reaped — resources bounded).

### [2.2. DNS and connection behavior](<./sections/2. Networking/2.2. DNS and connection behavior.md>)

1. **Lookup before connect** (`dns.lookup` vs `resolve` — OS order vs records; localhost and dual-stack realities).
2. **Retries with backoff, timeouts always** (no unbounded connects — deadlines on every dial; backoff jittered).
3. **Keep-alive and pooling preview** (connection reuse economics — why HTTP agents pool; full treatment rides along in 3.1).

---

## 3. HTTP without frameworks

### [3.1. Bare node:http servers and clients](<./sections/3. HTTP without frameworks/3.1. Bare nodehttp servers and clients.md>)

1. **Server: routes by hand** (`createServer` — method + URL dispatched manually; the mechanics frameworks automate).
2. **Bodies streamed, limits enforced** (request as Readable — size caps before buffering; the upload lesson, applied).
3. **Client: fetch and http compared** (undici `fetch` for convenience — agents for control; timeouts on both).

---

## 4. Important points to remember (conversations)

### [4.1. Conversation checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Conversation checklist habits mentors insist on.md>)

1. **Errors listened, emitters bounded** (every emitter has `error` — every high-volume emitter has a listener budget).
2. **Sockets timed, bodies capped** (no timeless dials — no unbounded buffers; resources priced per connection).
3. **Bare HTTP first, framework second** (one hand-rolled server per career — mechanics felt before automation).

---

## 5. Interview questions and answers (conversations)

### [5.1. Common interview QA: events, sockets, HTTP](<./sections/5. Interview questions and answers/5.1. Common interview QA events sockets HTTP.md>)

1. **"10k connections, one process" — how?** (the C10K screen — loop + non-blocking sockets + bounded per-conn state).
2. **Emitter leak warning: diagnose it** (the listener trace — growth found, ownership named, budget set).
3. **Slow POST, huge body: handle it** (the streaming-receive trace — caps, backpressure, early abort), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Streams and bytes** (pipeline, backpressure, buffers → 03 — sockets assumed streamed here, never re-taught).
2. **Design and testing depth** (Observer pattern → Design Patterns 04/2.1; emitter testing → JavaScript 20/4.1 — this domain owns runtime use).
3. **Frameworks and deeper Node** (Express/Fastify structure → their tracks; processes/workers → 05; debugging/shipping → 06 — each owned there).
