## 1. Entities and relations

### [1.1. Entities and decorators that mean something](<./sections/1. Entities and relations/1.1. Entities and decorators that mean something.md>)

1. **Entities declare tables in classes** (Entity/Table names, columns with types, ids — reviewed like schema)
2. **Decorators carry mapping intent** (Column options, uniques, defaults, enums — constraints beside fields)
3. **reflect-metadata is load-bearing** (import once at entry — silent failure without it, linted always)

---

### [1.2. Relations the TypeORM way](<./sections/1. Entities and relations/1.2. Relations the TypeORM way.md>)

1. **Four decorators, four cardinalities** (OneToOne/OneToMany/ManyToOne/ManyToMany — both sides where traversed)
2. **JoinColumn owns the FK side** (owner side holds the key — actions stated per relation)
3. **Join tables explicit when growing** (many-to-many tables with attributes — @JoinTable defaults vs entity junctions)

---

## 2. Flavors and migrations

### [2.1. Both flavors operated](<./sections/2. Flavors and migrations/2.1. Both flavors operated.md>)

1. **ActiveRecord for trivial lifecycles** (BaseEntity save/remove/find — chosen with exit triggers recorded)
2. **Repositories for growing domains** (getRepository + custom repositories — seam explicit, fakes faithful)
3. **Mix deliberately, never accidentally** (flavor per bounded context — documented boundaries between them)

---

### [2.2. Migrations generated and governed](<./sections/2. Flavors and migrations/2.2. Migrations generated and governed.md>)

1. **Generate, never hand-write first** (migration:generate diffs the metadata — SQL reviewed fully before running)
2. **Run pending, revert deliberately** (migration:run/show/revert — history replayed, repairs recorded)
3. **synchronize stays in development** (auto-sync forbidden past dev — linted, never hoped)

---

## 3. Loading and performance

### [3.1. Loading strategies and N+1](<./sections/3. Loading and performance/3.1. Loading strategies and N+1.md>)

1. **Eager vs lazy decided per relation** (eager loads always — priced; lazy loads on access — proxied, N+1-prone)
2. **Relations option batches reads** (find with relations — explicit per query, counted per test)
3. **QueryBuilder for the unmappable** (composed SQL with types — escape fenced, logged like all SQL)

---

## 4. Mentor checklist

### [4.1. TypeORM checklist mentors insist on](<./sections/4. Mentor checklist/4.1. TypeORM checklist mentors insist on.md>)

1. **Decorators reviewed like schema** (entities, columns, relations — every decorator earning its place)
2. **Migrations witnessed end to end** (generate, review, run — no step skipped, synchronize never prod)
3. **Loading strategies stated** (eager/lazy per relation decided — N+1 counted, magic inventoried)

---

## 5. Interview QA

### [5.1. Common interview QA TypeORM](<./sections/5. Interview QA/5.1. Common interview QA TypeORM.md>)

1. **Entities live** (decorated classes on a whiteboard — TypeORM syntax, modeling judgment)
2. **Flavors under questioning** (ActiveRecord vs Repository — the jurisdiction answer)
3. **Migrations and N+1 live** (generate/run discipline, counted loads — operations answers)

---

## 6. Boundaries

### [6.1. Boundaries what is covered elsewhere](<./sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md>)

1. **Foundations live in Domain 01** (patterns, seam, cost ledgers — the judgments TypeORM inherits)
2. **Prisma and Drizzle live in Domains 02/04** (sibling tools — compared in Domain 05, never re-taught)
3. **Mechanics live in Databases and TypeScript** (drivers/transactions, decorator internals — linked, not repeated)

---

[← Back to ORM track](<../README.md>)
