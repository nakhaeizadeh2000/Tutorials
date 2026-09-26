# Database Foundations and Mental Model

What databases are and how Node.js programs use them: the store-not-spreadsheet mental model, connecting from Node, first queries against Postgres and MongoDB, and choosing between the two by access pattern. Naming-level vocabulary lives in [IT Vocabulary 05](<../../ITVocabulary/05 Data Databases and AI Vocabulary/README.md>); this domain teaches the *operation* — installing nothing locally (containers), connecting, querying, and deciding.

## 0. Prerequisites

[IT Vocabulary 05: Data Databases and AI Vocabulary](<../../ITVocabulary/05 Data Databases and AI Vocabulary/README.md>) (database/table/query/index as words, SQL-vs-NoSQL as shape choice — assumed, never redefined here). Working Node.js (v20+) and Docker (for the live probes in every leaf). This domain assumes no prior database experience and spends its pages on first contact done right, not theory.

## 1. Database identity and setup

### [1.1. What databases are and are not](<./sections/1. Database identity and setup/1.1. What databases are and are not.md>)

1. **Durable shared queryable state** (survives restarts, serves concurrent clients, answers questions — the three properties files lack).
2. **Postgres vs MongoDB in one paragraph each** (tables with enforced relations vs documents with flexible shape — the shape choice ITV 05 names).
3. **Not spreadsheets, not caches, not queues** (each confused tool named with what it actually guarantees — boundaries before queries).

### [1.2. Connecting from Node](<./sections/1. Database identity and setup/1.2. Connecting from Node.md>)

1. **Connection strings name everything** (protocol, credentials, host, port, database — one URL, five facts, verified live).
2. **Connect, prove, close** (open → `SELECT 1` / `ping` → close — the handshake every script performs first).
3. **Secrets never in source** (env vars and `.env` gitignored — connection strings are credentials, reviewed as such).

---

## 2. First queries

### [2.1. First Postgres queries](<./sections/2. First queries/2.1. First Postgres queries.md>)

1. **Tables, rows, and four statements** (`CREATE TABLE` + `INSERT`/`SELECT`/`UPDATE`/`DELETE` — the complete first hour, verified live).
2. **Parameters, never interpolation** (`$1` placeholders — injection structurally impossible, not carefully avoided).
3. **Read your own results** (row counts and `RETURNING` — every write reports what it did).

### [2.2. First MongoDB operations](<./sections/2. First queries/2.2. First MongoDB operations.md>)

1. **Collections, documents, and four operations** (`insertOne`/`find`/`updateOne`/`deleteOne` — the document twin of 2.1, verified live).
2. **Queries are objects, not strings** (`{ status: "shipped" }` — structure over syntax, injection shaped differently).
3. **The `_id` contract** (automatic unique keys — identity without sequences, referenced everywhere).

---

## 3. Choosing

### [3.1. Choosing Postgres or MongoDB](<./sections/3. Choosing/3.1. Choosing Postgres or MongoDB.md>)

1. **Access pattern decides** (relations + joins → Postgres; shape-shifting records → MongoDB — queries first, hype never).
2. **Relational by default** (data relates until proven otherwise — the industry's relearned lesson, priced).
3. **One store per service to start** (two databases on day one is two failure modes — split on measured pain, not forecast).

---

## 4. Important points to remember (data)

### [4.1. Data checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Data checklist habits mentors insist on.md>)

1. **Prove the store before trusting it** (handshake + throwaway write + read-back — the 30-second rite per environment).
2. **Parameters on every boundary** (all user input bound, both stores — injection classes differ, discipline doesn't).
3. **Know where the data lives** (host, port, database name, backup story — the four facts every on-call engineer recites).

---

## 5. Interview questions and answers (data)

### [5.1. Common interview QA: database foundations](<./sections/5. Interview questions and answers/5.1. Common interview QA database foundations.md>)

1. **"SQL vs NoSQL — which and why?" — answer with access patterns** (the shape-choice screen with priced examples).
2. **"How does your app connect?" — trace the wiring** (string, pool, secrets, handshake — named per repo).
3. **"Show me injection and its fix" — demonstrate live** (concatenated query breaks, parameterized holds), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Naming and patterns** (words → IT Vocabulary 05; repository seams → DesignPatterns 06 — linked, never restated).
2. **Deeper data topics** (Postgres depth → 02; MongoDB depth → 03; drivers/pooling → 04; transactions → 05; performance/ops → 06 — each owned there).
3. **Design and mapping** (modeling → Database Design track; ORMs → ORM track — planned siblings, textual forwards).
