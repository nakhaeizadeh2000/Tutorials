## 1. Dependencies and atomicity

### [1.1. Functional dependencies the one idea behind every normal form](<./sections/1. Dependencies and atomicity/1.1. Functional dependencies the one idea behind every normal form.md>)

1. **Dependency is determination** (if knowing A always tells you B, A determines B — everything else follows)
2. **Keys are minimal determiners** (a key determines the whole row and nothing smaller does)
3. **Anomalies are dependency symptoms** (update, insert, and delete anomalies all mean one fact lives in two places)

---

### [1.2. First normal form atomic values](<./sections/1. Dependencies and atomicity/1.2. First normal form atomic values.md>)

1. **One cell one fact** (no lists, no comma-strings, no repeating groups hiding in columns)
2. **Atomicity is queryability** (what the database cannot see inside, it cannot index, join, or constrain)
3. **Arrays are the deliberate exception** (PostgreSQL arrays have operators — but they still cost normal-form guarantees)

---

## 2. The core ladder

### [2.1. Second and third normal form](<./sections/2. The core ladder/2.1. Second and third normal form.md>)

1. **2NF kills partial dependency** (no non-key column may depend on part of a composite key)
2. **3NF kills transitive dependency** (no non-key column may depend on another non-key column)
3. **Most production schemas stop here** (3NF is the working default — know what higher forms buy before climbing)

---

### [2.2. BCNF fourth and fifth normal forms](<./sections/2. The core ladder/2.2. BCNF fourth and fifth normal forms.md>)

1. **BCNF closes the 3NF loophole** (every determiner must be a key — the rare overlapping-key case)
2. **4NF kills multivalued dependency** (independent multi-facts about one thing belong in separate tables)
3. **5NF is join dependency** (almost never a modeling decision — know it exists, recognize it once a decade)

---

## 3. Judgment

### [3.1. Deliberate denormalization with priced trade-offs](<./sections/3. Judgment/3.1. Deliberate denormalization with priced trade-offs.md>)

1. **Normalize first, denormalize deliberately** (you cannot price a shortcut you never measured against the rule)
2. **Every shortcut gets a decision record** (what was copied, what breaks on change, who keeps it consistent)
3. **Materialized views are honest denormalization** (the database maintains the copy — the guarantee survives)

---

## 4. Mentor checklist

### [4.1. Normalization review checklist mentors insist on](<./sections/4. Mentor checklist/4.1. Normalization review checklist mentors insist on.md>)

1. **Read every table as dependencies** (list what determines what before approving any schema)
2. **Demand the anomaly story** (for each redundancy: "show me the update path that keeps copies consistent")
3. **Bless each violation in writing** (unnamed denormalization is debt; named denormalization is design)

---

## 5. Interview QA

### [5.1. Common interview QA normalization](<./sections/5. Interview QA/5.1. Common interview QA normalization.md>)

1. **Normalize on a whiteboard** (the dependency-first narration that shows method, not recall)
2. **The denormalization judgment call** ("when would you break 3NF?" — the trade-off answer)
3. **Anomalies as war stories** (update/insert/delete anomalies explained through production consequences)

---

## 6. Boundaries

### [6.1. Boundaries what is covered elsewhere](<./sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md>)

1. **Intuition lives in Domain 01** (entities, keys, cardinality — the questions this domain sharpens)
2. **Documents bend these rules on purpose** (Domain 03 owns embed-versus-normalize for Mongo)
3. **Mechanics live in Databases** (constraint syntax, migration execution — linked, not repeated)

---

[← Back to Database Design track](<../README.md>)
