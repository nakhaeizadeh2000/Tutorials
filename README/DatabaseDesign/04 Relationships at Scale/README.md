## 1. Foreign keys at volume

### [1.1. Foreign keys that survive traffic](<./sections/1. Foreign keys at volume/1.1. Foreign keys that survive traffic.md>)

1. **Index every foreign key** (PostgreSQL does not auto-index FKs — unindexed FKs lock whole tables on parent writes)
2. **Delete policy is a business rule** (CASCADE, RESTRICT, and SET NULL narrate the domain — at volume they also narrate the blast radius)
3. **FK write cost is priced, not feared** (one indexed lookup per write — keep FKs unless online-schema-change operability forces otherwise)

---

### [1.2. Self-references and hierarchies](<./sections/1. Foreign keys at volume/1.2. Self-references and hierarchies.md>)

1. **Adjacency lists for shallow trees** (parent_id self-FK — trivial writes, recursive reads, fine under five levels)
2. **Closure tables for deep queries** (ancestor/descendant pairs materialized — subtree reads without recursion)
3. **Match the shape to the depth** (path strings and nested sets have their niches — choose by read/write ratio, not fashion)

---

## 2. Many-to-many and polymorphism

### [2.1. Junction tables at scale](<./sections/2. Many-to-many and polymorphism/2.1. Junction tables at scale.md>)

1. **Index both directions** (composite PK serves one traversal — the reverse needs its own index)
2. **Junctions grow attributes** (enrolled_on today, status tomorrow — design the junction as a future entity)
3. **Hot pairs skew everything** (celebrity memberships unbalance partitions and caches — plan the skew)

---

### [2.2. Polymorphic associations done honestly](<./sections/2. Many-to-many and polymorphism/2.2. Polymorphic associations done honestly.md>)

1. **Nullable-FK exclusive arcs** (one FK per target, CHECK exactly-one-set — integrity without magic)
2. **Supertype tables for shared identity** (one id space, subtype tables for specifics — queries unite honestly)
3. **Never the type-plus-id string pair** (unconstrainable, unjoinable — the design that defeats the database)

---

## 3. Skew and hot relationships

### [3.1. Hot keys and skew](<./sections/3. Skew and hot relationships/3.1. Hot keys and skew.md>)

1. **Celebrity rows break averages** (one key with millions of children — partitions, caches, and replicas feel it first)
2. **Fan-out multiplies reads** (joining two independent one-to-many children explodes rows — split the queries)
3. **Mitigate by shape, not hope** (counter splits, read replicas for hot rows, async fan-out — priced per case)

---

## 4. Mentor checklist

### [4.1. Relationship review checklist mentors insist on](<./sections/4. Mentor checklist/4.1. Relationship review checklist mentors insist on.md>)

1. **Every FK earns its index and policy** (no bare foreign keys — index plus delete rule, stated)
2. **Every junction is traversed both ways** (both directions indexed and narrated before approval)
3. **Every hot relationship is named** (skew identified, mitigation priced, revisit dated)

---

## 5. Interview QA

### [5.1. Common interview QA relationships at scale](<./sections/5. Interview QA/5.1. Common interview QA relationships at scale.md>)

1. **Model followers or friends live** (the social-graph whiteboard — junctions, direction, and scale narration)
2. **Hierarchies under questioning** (adjacency vs closure vs nested — the trade-off answer)
3. **What breaks at ten million rows** (FK locks, junction growth, skew — ordered failure prediction)

---

## 6. Boundaries

### [6.1. Boundaries what is covered elsewhere](<./sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md>)

1. **Cardinality basics live in Domain 01** (one-to-many as constraint choice — the foundation this domain loads)
2. **Junction mechanics live in Domains 01–02** (composite keys, dependency purity — the rules scale inherits)
3. **Locking and index mechanics live in Databases** (FK lock behavior, B-tree internals — linked, not repeated)

---

[← Back to Database Design track](<../README.md>)
