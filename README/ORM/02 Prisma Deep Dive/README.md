## 1. Schema authoring

### [1.1. Models fields and attributes](<./sections/1. Schema authoring/1.1. Models fields and attributes.md>)

1. **Models are tables declared once** (fields with scalar types, ids, defaults — the schema file as source of truth)
2. **Attributes carry intent** (unique, default, native types, enums — constraints declared beside fields)
3. **Schema diffs are reviewed** (generated migrations read fully — tooling authors, humans approve)

---

### [1.2. Relations in schema](<./sections/1. Schema authoring/1.2. Relations in schema.md>)

1. **Relations declared both sides** (one-to-many with back-references — referential actions stated per relation)
2. **Many-to-many explicit beats implicit** (implicit join tables for simple links, explicit models when links grow attributes)
3. **Relation load strategy decided per query** (include/select at read time — schema declares, queries strategize)

---

## 2. Migrations and client

### [2.1. Migrate tooling that stays honest](<./sections/2. Migrations and client/2.1. Migrate tooling that stays honest.md>)

1. **Dev flow generates reviewable SQL** (migrate dev creates versioned SQL — read fully, never blind-applied)
2. **Deploy applies, never improvises** (migrate deploy runs pending only — production executes history, not wishes)
3. **Baselines and drift handled explicitly** (resolve for baselines and repairs — brownfield adopted honestly)

---

### [2.2. Client queries and relations](<./sections/2. Migrations and client/2.2. Client queries and relations.md>)

1. **Find APIs compose precisely** (findMany/findUnique with where/orderBy/take — filters typed end-to-end)
2. **Include and select shape reads** (relations loaded explicitly per query — N+1 prevented by strategy stated)
3. **Nested writes transact graphs** (create/update with nested connects — one call, one transaction, priced)

---

## 3. Performance discipline

### [3.1. N+1 strategies and raw escapes](<./sections/3. Performance discipline/3.1. N+1 strategies and raw escapes.md>)

1. **Count statements per render** (logging + assertions — N+1 fails builds, never pages)
2. **Batch with include, paginate with cursor** (relations batched per query — constant statements regardless of N)
3. **Escape to raw deliberately** (queryRaw for the unmappable — typed via generics, logged like all SQL)

---

## 4. Mentor checklist

### [4.1. Prisma checklist mentors insist on](<./sections/4. Mentor checklist/4.1. Prisma checklist mentors insist on.md>)

1. **Schema reviewed like code** (models, relations, attributes — every line earning its place)
2. **Migrations witnessed end to end** (dev generates, review approves, deploy executes — no step skipped)
3. **Client queries logged and bounded** (strategies stated, counts asserted — magic inventoried per major)

---

## 5. Interview QA

### [5.1. Common interview QA Prisma](<./sections/5. Interview QA/5.1. Common interview QA Prisma.md>)

1. **Schema design live** (models + relations on a whiteboard — Prisma syntax, modeling judgment)
2. **Migration safety under questioning** (dev vs deploy, baselines, drift — the operations answers)
3. **N+1 with includes** (spot, fix with strategy, prevent with assertions — the three-beat answer)

---

## 6. Boundaries

### [6.1. Boundaries what is covered elsewhere](<./sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md>)

1. **Foundations live in Domain 01** (layers, patterns, seam — the judgments Prisma inherits)
2. **TypeORM and Drizzle live in Domains 03–04** (sibling tools — compared in Domain 05, never re-taught)
3. **Mechanics live in Databases** (drivers, transactions, migration execution — linked, not repeated)

---

[← Back to ORM track](<../README.md>)
