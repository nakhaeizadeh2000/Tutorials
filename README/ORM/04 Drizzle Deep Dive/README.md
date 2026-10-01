## 1. Schema as code

### [1.1. Schema as code](<./sections/1. Schema as code/1.1. Schema as code.md>)

1. **Tables are values** (pgTable definitions importable, composable, testable as TypeScript)
2. **Columns chosen deliberately** (types, modes, constraints — parsing semantics decided per column)
3. **Indexes declared beside tables** (index() in table config — hot predicates indexed at birth)

---

### [1.2. Relations declared beside tables](<./sections/1. Schema as code/1.2. Relations declared beside tables.md>)

1. **relations() maps associations** (one/many per side — navigability declared, not hoped)
2. **References stay explicit** (fields + references options — FK columns named, actions stated)
3. **Graph queries via db.query** (with: per relation — explicit per read, same N+1 discipline)

---

## 2. Composition and migration

### [2.1. Queries composed, not concatenated](<./sections/2. Composition and migration/2.1. Queries composed, not concatenated.md>)

1. **Selects build incrementally** (dynamic filters as $dynamic() — branches composed, never interpolated)
2. **Joins explicit per query** (leftJoin with on-conditions — assembly visible, transfer intentional)
3. **Aggregates compose too** (groupBy/having/orderBy — analytics without leaving the builder)

---

### [2.2. Migrations via drizzle-kit](<./sections/2. Composition and migration/2.2. Migrations via drizzle-kit.md>)

1. **Generate diffs from code** (kit generate renders SQL — reviewed fully before applying)
2. **Push for prototypes, migrate for teams** (push: direct sync for disposable DBs; migrate: versioned history for shared)
3. **Check drift scheduledly** (kit check/diff surfacing divergence — history true throughout)

---

## 3. Relational discipline

### [3.1. Relational queries and N+1](<./sections/3. Relational discipline/3.1. Relational queries and N+1.md>)

1. **with: batches relations** (relational queries per path — constant statements, counted per test)
2. **Partial selects trim transfer** (columns() projections — wide rows narrowed deliberately)
3. **Counted like all lists** (statement bounds per test — N+1 fails builds, same detector)

---

## 4. Mentor checklist

### [4.1. Drizzle checklist mentors insist on](<./sections/4. Mentor checklist/4.1. Drizzle checklist mentors insist on.md>)

1. **Schema reviewed as code** (tables, columns, relations — every definition earning its place)
2. **Migrations witnessed end to end** (generate, review, apply — no step skipped, push never prod)
3. **Composition over concatenation** (dynamic queries built — string branches rejected on sight)

---

## 5. Interview QA

### [5.1. Common interview QA Drizzle](<./sections/5. Interview QA/5.1. Common interview QA Drizzle.md>)

1. **Tables live** (schema-as-code on a whiteboard — Drizzle syntax, modeling judgment)
2. **Composition under questioning** (dynamic filters built live — branches composed, never interpolated)
3. **Relations and N+1 live** (with: batching, counts asserted — operations answers)

---

## 6. Boundaries

### [6.1. Boundaries what is covered elsewhere](<./sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md>)

1. **Foundations live in Domain 01** (builders, patterns, cost ledgers — the judgments Drizzle inherits)
2. **Prisma and TypeORM live in Domains 02–03** (sibling tools — compared in Domain 05, never re-taught)
3. **Mechanics live in Databases** (drivers, SQL planning, migration execution — linked, not repeated)

---

[← Back to ORM track](<../README.md>)
