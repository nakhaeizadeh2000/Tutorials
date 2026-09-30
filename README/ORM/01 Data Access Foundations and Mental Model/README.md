## 1. Why data-access layers

### [1.1. What problem data-access layers solve and create](<./sections/1. Why data-access layers/1.1. What problem data-access layers solve and create.md>)

1. **Mapping is the problem** (objects and rows structure differently — the layer translates, priced per translation)
2. **What layers buy** (type safety, migration discipline, connection management — each benefit itemized)
3. **What layers cost** (abstraction leaks, N+1, magic — each cost named with its detector)

---

### [1.2. Query builders versus ORMs versus raw drivers](<./sections/1. Why data-access layers/1.2. Query builders versus ORMs versus raw drivers.md>)

1. **Raw drivers are the truth** (node-postgres: full control, zero abstraction — the baseline everything prices against)
2. **Builders compose SQL** (Drizzle/Kysely flavor: SQL-shaped code — control retained, tedium removed)
3. **ORMs map graphs** (Prisma/TypeORM flavor: objects with relations — convenience priced in queries)

---

## 2. Mapping patterns

### [2.1. ActiveRecord versus DataMapper](<./sections/2. Mapping patterns/2.1. ActiveRecord versus DataMapper.md>)

1. **ActiveRecord carries itself** (records save themselves — simple, coupled, Rails-shaped)
2. **DataMapper separates concerns** (entities ignorant, mappers responsible — testable, explicit)
3. **This track's tools placed** (Prisma client, TypeORM both flavors, Drizzle tables — each mapped honestly)

---

### [2.2. The repository seam](<./sections/2. Mapping patterns/2.2. The repository seam.md>)

1. **Pattern lives in DesignPatterns 06** (collection-like persistence — linked, not repeated)
2. **Repositories bound ORM leakage** (domain code depends on interfaces — mappers swappable behind them)
3. **Test doubles need the seam** (in-memory fakes honor repository contracts — tests without databases)

---

## 3. First contact

### [3.1. Hello database three ways](<./sections/3. First contact/3.1. Hello database three ways.md>)

1. **Prisma: schema-first client** (models declared, client generated — version 7 stable, v8 RC noted)
2. **TypeORM: decorated classes** (entities as classes — 1.x stable, decorator mechanics linked)
3. **Drizzle: code-first tables** (schema as code, SQL-shaped queries — 0.45 stable)

---

## 4. Mentor checklist

### [4.1. Data-access checklist mentors insist on](<./sections/4. Mentor checklist/4.1. Data-access checklist mentors insist on.md>)

1. **Name the layer per feature** (raw, builder, or ORM — chosen, not drifted into)
2. **Count the queries** (N+1 detector on every list — measured, never hoped)
3. **Migrations are reviewed like code** (expand-compatible, witnessed, reversible — same discipline as DDL)

---

## 5. Interview QA

### [5.1. Common interview QA data-access foundations](<./sections/5. Interview QA/5.1. Common interview QA data-access foundations.md>)

1. **ORM versus raw under pressure** (the trade-off answer — control, safety, and cost priced)
2. **N+1 on a whiteboard** (spot it, fix it, prevent it — the three-beat answer)
3. **Which tool when** (Prisma/TypeORM/Drizzle placed by workload — judgment, not fashion)

---

## 6. Boundaries

### [6.1. Boundaries what is covered elsewhere](<./sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md>)

1. **Mechanics live in Databases 04** (drivers, pooling, migration execution — linked, not repeated)
2. **Design lives in Database Design** (entities, forms, relationships — the shapes layers map)
3. **Patterns live in DesignPatterns 06** (repository seam, unit of work — outside this track)

---

[← Back to ORM track](<../README.md>)
