# Data Databases and AI Vocabulary

What teams mean when they talk about data at rest, data in motion, and the models that learn from it: from raw bytes to queryable stores to the AI words every standup now assumes.

## 0. Prerequisites

[Domain 01 Core IT Concepts](<../01 Core IT Concepts and Professional Jargon/README.md>) — units and encoding ([2.2](<../01 Core IT Concepts and Professional Jargon/sections/2. Core computing concepts/2.2. Data units bit byte and encoding basics.md>)) — data is measured in those units and decoded with those encodings; [Domain 02](<../02 Hardware Infrastructure and Platforms/README.md>) storage hardware ([1.1](<../02 Hardware Infrastructure and Platforms/sections/1. Inside the machine/1.1. CPU RAM and storage the working trio.md>)) — where data physically lives.

## 1. Data words

### [1.1. Data vs information, structured vs unstructured](<./sections/1. Data words/1.1. Data vs information structured vs unstructured.md>)

1. **Data is raw, information is answered** (logged events vs the dashboard that explains them — processing adds the meaning).
2. **Structured vs unstructured** (rows and schemas vs text, images, audio — the split that decides your tooling).
3. **Dataset, sample, and label in one line each** (the collection, one member, and its answer-key — ML's three nouns).

### [1.2. Database, table, query, and index](<./sections/1. Data words/1.2. Database table query and index.md>)

1. **Database stores, table organizes, query asks** (the system, the grid, the question — three roles, one sentence).
2. **SQL vs NoSQL is a shape choice** (relational tables vs documents/key-values — consistency against flexibility).
3. **Index buys read speed with write cost** (the book's back pages — every index accelerates lookup and taxes every write).

---

## 2. AI words

### [2.1. Model, token, and prompt](<./sections/2. AI words/2.1. Model token and prompt.md>)

1. **Model is frozen learning** (weights from training + architecture — a function shaped by data).
2. **Token is the billing atom** (word-pieces in, word-pieces out — context windows and invoices both count tokens).
3. **Prompt is programming in prose** (instructions + examples + context — the interface skill of the AI era).

### [2.2. Training vs inference, hallucination](<./sections/2. AI words/2.2. Training vs inference and hallucination.md>)

1. **Training learns once, inference answers always** (expensive batch past vs cheap per-question present).
2. **Hallucination is fluent fabrication** (confident, grammatical, wrong — the failure mode you must design around).
3. **Grounding and evals manage the risk** (retrieval-augmented answers + measured quality — trust with instruments).

---

## 4. Important points to remember (data)

### [4.1. Data vocabulary checklist (mental models mentors insist on)](<./sections/4. Important points to remember/4.1. Data vocabulary checklist mental models mentors insist on.md>)

1. **Name the shape** (structured vs unstructured — before picking any tool).
2. **Name the question** (what query, what answer — before touching the store).
3. **Name the cost** (tokens, index writes, inference latency — data is never free).

---

## 5. Interview questions and answers (data and AI)

### [5.1. Common interview QA: data and AI vocabulary](<./sections/5. Interview questions and answers/5.1. Common interview QA data and AI vocabulary.md>)

1. **SQL vs NoSQL** (the shape-choice answer with a trade-off sentence).
2. **What is a token** (billing atom + context window — the two implications).
3. **Training vs inference** (past learning vs present answering), plus rapid-fire drills (index, prompt, hallucination).

---

## 6. Overlaps to avoid (where this domain stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Query mechanics** (writing SQL, schema design, ORMs) — future Databases/DatabaseDesign/ORM tracks, not here.
2. **ML internals** (architectures, loss functions, fine-tuning how-to) — future AI topics; words stay here, math lives there.
3. **Data engineering practice** (pipelines, ETL, warehousing ops) — Domain 06 and future tracks; the nouns are planted here.
