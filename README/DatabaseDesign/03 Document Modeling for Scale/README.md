## 1. Aggregates and access

### [1.1. Aggregates the unit of document modeling](<./sections/1. Aggregates and access/1.1. Aggregates the unit of document modeling.md>)

1. **Boundaries are consistency decisions** (what must change atomically belongs in one document — invariants draw the lines)
2. **Lifecycle tests the boundary** (created together, archived together, never shared — one aggregate)
3. **Reference across aggregates** (links between consistency units, never nesting across them)

---

### [1.2. Access patterns drive document shape](<./sections/1. Aggregates and access/1.2. Access patterns drive document shape.md>)

1. **List queries before drawing shapes** (frequency, shape, and freshness per query — the workload is the spec)
2. **One screen one fetch** (the dominant read path decides nesting — rare paths accept assembly)
3. **Write paths veto reads** (hot writers split what readers would nest — contention outranks locality)

---

## 2. Embed or reference

### [2.1. Embed when together](<./sections/2. Embed or reference/2.1. Embed when together.md>)

1. **Contained lifecycle embeds** (lives and dies with the parent — line items, addresses, preferences)
2. **Bounded small and slow-growing** (tens of elements, known ceiling — growth math before production)
3. **Snapshot semantics intended** (point-in-time copy is correct — history must not update)

---

### [2.2. Reference when apart](<./sections/2. Embed or reference/2.2. Reference when apart.md>)

1. **Shared truth links** (one catalog, many readers — updates propagate by reading current)
2. **Unbounded or independently hot** (streams, threads, counters — growth without ceiling or writers without pause)
3. **Extended reference for the middle** (copy small stable fields, link the rest — locality without staleness risk)

---

## 3. Patterns and change

### [3.1. Schema patterns that scale](<./sections/3. Patterns and change/3.1. Schema patterns that scale.md>)

1. **Bucket the unbounded** (fixed-size time/count buckets turn streams into bounded documents)
2. **Subset the working set** (hot fields in the parent, full body referenced — the 90% fetch)
3. **Compute once read many** (precomputed rollups for expensive aggregations — with stated refresh)

---

### [3.2. Versioning and shape migration](<./sections/3. Patterns and change/3.2. Versioning and shape migration.md>)

1. **Every document carries its version** (a schemaVersion field turns implicit shapes into explicit contracts)
2. **Migrate lazily or eagerly — priced** (read-time adaptation vs batch rewrite, chosen by numbers)
3. **Polymorphism needs a discriminator** (one collection, several shapes — the type field is the schema)

---

## 4. Mentor checklist

### [4.1. Document modeling checklist mentors insist on](<./sections/4. Mentor checklist/4.1. Document modeling checklist mentors insist on.md>)

1. **Draw boundaries before documents** (invariants and lifecycles first — JSON second)
2. **Show the query catalog** (no shape without its reads listed, counted, and freshness-stated)
3. **Price every nest and link** (growth math and contention story per boundary — written, dated)

---

## 5. Interview QA

### [5.1. Common interview QA document modeling](<./sections/5. Interview QA/5.1. Common interview QA document modeling.md>)

1. **Design a document schema live** (access-first narration — queries, then shapes, then trade-offs)
2. **Embed versus reference under pressure** (the rule stack that shows judgment, not fashion)
3. **Scale the schema tenfold** (buckets, subsets, and versioning as scale answers)

---

## 6. Boundaries

### [6.1. Boundaries what is covered elsewhere](<./sections/6. Boundaries/6.1. Boundaries what is covered elsewhere.md>)

1. **Relational discipline lives in Domains 01–02** (entities, keys, normal forms — the lenses documents bend)
2. **Mechanics live in Databases 03** (query syntax, ceiling math, write units — linked, not repeated)
3. **Code mapping lives outside this track** (ODMs and repositories consume shapes — they do not define them)

---

[← Back to Database Design track](<../README.md>)
