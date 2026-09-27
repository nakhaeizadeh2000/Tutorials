# Production Data Use and Interview Mastery

The capstone: production judgment across all six domains (capacity under constraints, growth without panic), reviewing data code and contracts, tracing one write through every layer, and interview mastery. No new mechanics here — every leaf synthesizes receipts from Domains 01–06 into judgment, method, and narrative. Fluency assumed; wisdom taught.

## 0. Prerequisites

Domains [01](<../01 Database Foundations and Mental Model/README.md>)–[06](<../06 Performance Backup and Operations/README.md>) (foundations, Postgres, MongoDB, access, integrity, operations — the vocabulary every leaf here speaks; this domain spends its pages on judgment and synthesis, not mechanics).

## 1. Production judgment

### [1.1. Capacity judgment under constraints](<./sections/1. Production judgment/1.1. Capacity judgment under constraints.md>)

1. **Constraints first, stores second** (traffic shape, team size, SLOs — the inputs; Postgres/MongoDB/replicas — outputs of the tree, never defaults).
2. **Boring wins ties** (fewest moving parts meeting SLOs — novelty budgeted, not assumed; every store justified).
3. **Capacity from numbers** (per-query budgets × traffic — connections, sizes, headroom derived; measured, never hoped).

### [1.2. Growth planning without panic](<./sections/1. Production judgment/1.2. Growth planning without panic.md>)

1. **Thresholds trigger, vibes don't** (row counts, dead ratios, connection share — dated numbers firing planned responses).
2. **Scale reads first, writes deliberately** (replicas for read fan-out — routine; sharding for write walls — evidenced, never anticipated).
3. **Migrations under growth stay phased** (expand/contract at scale — backfills batched, contracts dated, rollbacks rereleases).

---

## 2. Review and design

### [2.1. Reviewing data code](<./sections/2. Review and design/2.1. Reviewing data code.md>)

1. **Gates before taste** (unbound parameters, unwitnessed writes, unversioned DDL — mechanical findings first; style after).
2. **Ask for the evidence** (plans attached, counts witnessed, receipts committed — unpriced claims challenged).
3. **Approve the failure paths** (constraint violations routed, rollbacks planned, restores proven — happy paths necessary, insufficient).

### [2.2. Data API contracts](<./sections/2. Review and design/2.2. Data API contracts.md>)

1. **Shapes versioned, never broken silently** (additive evolution — expand first, contract dated; breaking changes announced).
2. **Pagination where lists grow** (keyset over offset — stable pages under concurrent writes, bounded transfers).
3. **Errors name data remedies** (constraint codes surfaced as actionable errors — retryable flagged, limits quoted).

---

## 3. Full-system synthesis

### [3.1. One write, every layer](<./sections/3. Full-system synthesis/3.1. One write every layer.md>)

1. **Trace cradle to grave** (flag → pool → checkout → constraint → WAL → map → log — each layer named with its domain).
2. **Budgets per layer** (time and bytes accounted — slowest layer optimized; totals reconciled).
3. **Narrate it cold** (whiteboard the trace — interviewers hire narrators; incidents obey narrators).

---

## 4. Important points to remember (mastery)

### [4.1. Mastery checklist (habits mentors insist on)](<./sections/4. Important points to remember/4.1. Mastery checklist habits mentors insist on.md>)

1. **Six domains, one engineer** (foundations, Postgres, MongoDB, access, integrity, operations — fluent in all, expert in several).
2. **Receipts over opinions** (measured before claimed — gates green, profiles attached, counts quoted; judgment priced).
3. **Teach to retain** (narrate stores cold — review juniors kindly; mastery demonstrated by transfer).

---

## 5. Interview questions and answers (mastery)

### [5.1. Common interview QA: judgment and synthesis](<./sections/5. Interview questions and answers/5.1. Common interview QA judgment synthesis.md>)

1. **Design a reviews service, data edition** (the systems screen — stores, shapes, gates, growth, narrated).
2. **"Writes doubled overnight" — scale it live** (the incident screen — signals read, levers priced, receipts attached).
3. **Teach transactions in five minutes** (the mentoring screen — lifecycle, levels, snapshots, one demo), plus rapid-fire drills.

---

## 6. Overlaps to avoid (where this track stops)

### [6.1. Boundaries: what is covered elsewhere](<./sections/6. Overlaps to avoid/6.1. Boundaries what is covered elsewhere.md>)

1. **Mechanics in 01–06** (every technique here references its owning domain — this domain judges and assembles, never re-teaches).
2. **Frameworks and platform** (service frameworks → their tracks; clouds, vendors → platform docs).
3. **Words and careers** (meeting vocabulary → IT Vocabulary; growth beyond data → mentor paths elsewhere).
