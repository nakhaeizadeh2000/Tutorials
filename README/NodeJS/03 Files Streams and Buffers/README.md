# Files, Streams, and Buffers

How Node handles data at rest and in motion: files and paths (`fs`, `path`), streams as the uniform I/O abstraction (readable, writable, transform, pipeline), and buffers for binary truth (encodings, binary protocols). The pool executing this work lives in [Domain 01](<../01 Runtime Fundamentals and Mental Model/README.md>); packaging around it lives in [Domain 02](<../02 Packages Scripts and Project Layout/README.md>); this domain teaches the *data path* — bytes from disk to program and back, never blocking the loop.

## 0. Prerequisites

[Domain 01: Runtime Fundamentals and Mental Model](<../01 Runtime Fundamentals and Mental Model/README.md>) (three-box model, pool-vs-loop diagnosis, phase-aware scheduling — assumed; this domain spends its pages on `fs`/`stream`/`buffer` APIs, not execution theory).

## 1. Files and paths

### [1.1. Reading and writing files without blocking](<./sections/1. Files and paths/1.1. Reading and writing files without blocking.md>)

1. **Promises first, sync almost never** (`fs/promises` as default — pool-executed, loop-free; sync reserved for boot-only config loads).
2. **Flags and modes are contracts** (`r`/`w`/`a`/`wx` — intent declared; `wx` exclusivity preventing overwrite races).
3. **Big files stream, small files read** (size decides the API — whole-read convenience vs chunked constant memory).

### [1.2. Paths, metadata, and watching](<./sections/1. Files and paths/1.2. Paths metadata and watching.md>)

1. **Paths joined, never concatenated** (`path.join`/`resolve` — separators and traversal handled per OS).
2. **Metadata before reads** (`stat` for size/type/existence — decisions before bytes).
3. **Watching is notification, not truth** (`fs.watch` events coalesce — poll or checksum where correctness demands).

---

## 2. Streams and pipelines

### [2.1. Readable, writable, and transform](<./sections/2. Streams and pipelines/2.1. Readable writable and transform.md>)

1. **Streams are uniform I/O** (files, sockets, stdin — one interface: chunks in, chunks out, events/errors alike).
2. **Pipeline over pipe** (`stream/promises.pipeline` — errors propagated, cleanup automatic; bare `.pipe` leaks on failure).
3. **Transform in the middle** (compress/parse/encrypt as stages — composable data factories).

### [2.2. Backpressure and stream errors](<./sections/2. Streams and pipelines/2.2. Backpressure and stream errors.md>)

1. **Backpressure is the contract** (fast producer, slow consumer — `write()` returns false, `drain` resumes; memory bounded by protocol).
2. **Errors destroy, then clean** (`destroy()` on failure — pipeline tears down every stage; unhandled `error` events throw).
3. **Flowing vs paused, chosen** (pause by default — `data` listeners flip to flowing; `for await` consumes with backpressure built in).

---

## 3. Binary data

### [3.1. Buffers, encodings, and binary truth](<./sections/3. Binary data/3.1. Buffers encodings and binary truth.md>)

1. **Bytes before strings** (`Buffer` holds octets — strings are an encoding *view*; `utf8`/`hex`/`base64` convert explicitly).
2. **Alloc shapes compared** (`alloc` zeroed-safe, `allocUnsafe` fast-pooled, `from` copying — safety priced per call).
3. **Binary protocols parsed, not guessed** (offsets, endianness, length-prefixes — wire formats read by spec).

---

## 4. Important points to remember (data path)

### [4.1. Data-path checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Data-path checklist habits mentors insist on.md>)

1. **Async files, pipelined streams** (no sync I/O past boot — no bare `.pipe` without error handling).
2. **Backpressure honored, errors destroyed** (bounded memory by protocol — teardown on every failure path).
3. **Bytes explicit, encodings named** (no implicit string coercion — binary truth at every boundary).

---

## 5. Interview questions and answers (data path)

### [5.1. Common interview QA: files, streams, buffers](<./sections/5. Interview questions and answers/5.1. Common interview QA files streams buffers.md>)

1. **"10 GB file, 512 MB RAM" — design it** (the streaming screen — chunks, pipeline, constant memory narrated).
2. **Backpressure: what breaks without it?** (the memory judgment — unbounded buffering, OOM under load, priced per producer).
3. **`readFile` vs stream vs sync: which and when?** (the API-selection trace — size and context decide), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Execution and packaging** (pool/loop/phases → 01; manifests/installs → 02 — this domain assumes both, teaches neither).
2. **Language iteration mechanics** (AsyncIterable protocol, for-await grammar → TypeScript 18/3.2 and JavaScript iteration domains — this domain owns Node's stream *objects*, not the protocol).
3. **Deeper Node topics** (networking/HTTP → 04; processes/workers → 05; debugging/shipping → 06 — each owned there).
