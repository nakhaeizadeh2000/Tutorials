# Databases Storage and Data Pipelines

Learn how data is organized, accessed, protected and moved, and ask what a data guarantee actually covers. The preceding representation, software, operating-system and API domains supply the prerequisites. This is vocabulary and evidence reading, rather than database administration or a full SQL course. PostgreSQL 18 supplies scoped relational examples, checked 2026-10-18; individual lessons identify their other sources.

This domain is in progress: 7 of 12 approved lessons are available.

## 1. Databases and models

### [1.1. Data datasets databases and database management systems](<sections/1. Databases and models/1.1. Data datasets databases and database management systems.md>)

1. **Separate information collections and management software:** distinguish data, datasets, databases, DBMS products and export representations through a reservation example.
2. **Identify the client engine and server roles:** compare PostgreSQL client/server and SQLite embedded arrangements without imposing one packaging model on every database.
3. **Read a data report without blaming the wrong object:** trace a constructed old-export report, preserve uncertainty and identify which component and source need investigation.

### [1.2. Relational document key-value graph and time-series models](<sections/1. Databases and models/1.2. Relational document key-value graph and time-series models.md>)

1. **Recognize what each model makes explicit:** compare relational, document, key-value, graph and time-series organization through workshop information.
2. **Separate model labels from product guarantees:** interpret NoSQL, overlapping capabilities and schema/transaction claims without inventing universal behavior.
3. **Translate a workload into questions before choosing labels:** analyze four constructed access needs and challenge unsupported performance or recovery conclusions.

## 2. Relational and document language

### [2.1. Tables rows columns documents fields keys and relationships](<sections/2. Relational and document language/2.1. Tables rows columns documents fields keys and relationships.md>)

1. **Read records attributes and nested documents:** interpret two tables and a JSON-shaped booking without confusing a record, field and collection.
2. **Distinguish identifiers keys and enforced references:** explain primary/composite/foreign keys, referential integrity and embedding versus references with explicit scope.
3. **Explain relationship counts and diagnose a broken model claim:** interpret one-to-one, one-to-many and many-to-many associations and challenge rules inferred only from names.

### [2.2. Schemas constraints normalization and migrations](<sections/2. Relational and document language/2.2. Schemas constraints normalization and migrations.md>)

1. **Identify structure rules and their enforcement boundary:** distinguish schema descriptions, PostgreSQL namespaces, constraints, defaults and document validation settings.
2. **Explain duplicated facts through their change consequences:** diagnose update/insert/delete anomalies and separate current-fact redundancy from intentional history.
3. **Read a migration as a change with preconditions and evidence:** interpret schema/data changes, backfills, consumer compatibility and rollback limits through a constructed field rename.

## 3. Access and abstraction

### [3.1. Queries joins indexes views and query plans](<sections/3. Access and abstraction/3.1. Queries joins indexes views and query plans.md>)

1. **Separate a query its matching rule and its result:** distinguish retrieval and row combinations, including the consequence of omitting an identity match.
2. **Observe an index and a named query in a complete local example:** run SQLite tables, joins, before/after plans and a view after a source change in an in-memory database.
3. **Interpret a plan as evidence about a specific execution strategy:** separate access paths, estimates, actual execution and measured duration without treating an index as a universal speedup.

### [3.2. SQL CRUD ORMs query builders and drivers](<sections/3. Access and abstraction/3.2. SQL CRUD ORMs query builders and drivers.md>)

1. **Distinguish an operation category from the SQL language:** interpret CRUD, SQL statement groups and actual zero-row versus delete outcomes in a complete local example.
2. **Locate mapping construction and communication responsibilities:** explain ORM, query-builder, driver and parameterization roles without treating labels as guarantees.
3. **Review an access-layer claim with concrete outcome evidence:** separate typed descriptions, affected records, rules and constructed N+1 request counts.

## 4. Transactional behavior

### [4.1. Transactions ACID isolation locks and deadlocks](<sections/4. Transactional behavior/4.1. Transactions ACID isolation locks and deadlocks.md>)

1. **State the transaction boundary and the four ACID properties:** explain accepted database work, rules, concurrency and persistence without extending guarantees to external effects.
2. **Observe discarded and committed changes in a bounded example:** run a complete local SQLite transaction and distinguish own pending changes from rolled-back and committed state.
3. **Distinguish visibility lock waiting and deadlock recovery:** interpret isolation phenomena, scoped product behavior and a constructed dependency cycle without inferring an outcome from a timeout.

[← Back to IT Vocabulary](<../README.md>)
