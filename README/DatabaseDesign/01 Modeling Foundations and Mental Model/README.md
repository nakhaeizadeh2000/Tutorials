## 1. What modeling means

### [1.1. What data modeling is and is not](<./sections/1. What modeling means/1.1. What data modeling is and is not.md>)

1. **Model before mechanism** (a schema is a decision record, not a migration artifact)
2. **Usage versus design** (running queries is a different skill than choosing shapes — and this domain is the second)
3. **The three questions** (what exists, how it relates, what must stay true — everything else is detail)

---

### [1.2. Entities relationships and cardinality](<./sections/1. What modeling means/1.2. Entities relationships and cardinality.md>)

1. **Entities carry identity** (if two rows can be confused, the entity is underspecified)
2. **Relationships carry rules** (one-to-many is a constraint choice, not a drawing convention)
3. **Cardinality is a bet on the future** (today's one-to-one is tomorrow's one-to-many — model the cheaper direction to change)

---

## 2. Identity and keys

### [2.1. Surrogate versus natural keys](<./sections/2. Identity and keys/2.1. Surrogate versus natural keys.md>)

1. **Natural keys describe** (emails and slugs mean something — and meaning changes)
2. **Surrogate keys identify** (a meaningless id survives renames, merges, and regulation)
3. **Default surrogate, justify natural** (the burden of proof runs one way — uniqueness still enforced either way)

---

### [2.2. Identity at scale](<./sections/2. Identity and keys/2.2. Identity at scale.md>)

1. **Sequences bottleneck writers** (a single counter is a single point of contention)
2. **UUIDs distribute generation** (random ids buy insert parallelism at the price of index locality)
3. **Idempotency keys are business identity** (client-supplied keys turn retries into safe no-ops)

---

## 3. First design moves

### [3.1. From requirements to tables](<./sections/3. First design moves/3.1. From requirements to tables.md>)

1. **Nouns become tables** (the requirements paragraph already lists your entities — underline them)
2. **Verbs become relationships** (places, buys, contains — each verb hides a cardinality decision)
3. **Constraints are the design** (NOT NULL, UNIQUE, and FKs are modeling sentences, not decoration)

---

## 4. Mentor checklist

### [4.1. Modeling checklist mentors insist on](<./sections/4. Mentor checklist/4.1. Modeling checklist mentors insist on.md>)

1. **Every table earns its name** (singular nouns, no tbl_ prefixes, junction tables say what they join)
2. **Every relationship is drawn both ways** (if you cannot state the reverse rule, you have not modeled it)
3. **Every key choice is written down** (the next hire should find the why, not re-derive it)

---

## 5. Interview QA

### [5.1. Common interview QA modeling foundations](<./sections/5. Interview QA/5.1. Common interview QA modeling foundations.md>)

1. **Surrogate versus natural under pressure** (the five-minute answer that shows judgment, not recall)
2. **Design a schema on a whiteboard** (the nouns-verbs-constraints method, narrated out loud)
3. **What breaks at ten times the data** (identity, cardinality, and constraint answers that scale)

---

## 6. Boundaries

### [6.1. Boundaries what is covered elsewhere](<./sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md>)

1. **Mechanics live in Databases** (constraints, indexes, migrations, transactions — linked, not repeated)
2. **Normal forms live in Domain 02** (this domain names the questions; the next domain sharpens the answers)
3. **Code mapping lives outside this track** (repositories and ORMs consume models — they do not define them)

---

[← Back to Database Design track](<../README.md>)
