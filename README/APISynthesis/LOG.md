# APISynthesis — work log

## [2026-10-08 10:00] Session 1 — Register track skeleton + 20-domain plan (content starts after track 21 RxJS DONE)
- Status: DONE
- Context read: PROMPT.md (binding §§1–8); root README.md (Categories table — rows 22–37 shift to 24–39, this track inserted as 22); README/NestJS/LOG.md (tail — Session 7 DONE, TRACK COMPLETE 7/7, Next steps names this registration). Recovery: repo-wide grep for live `^- Status: IN PROGRESS` — none (all tracks end DONE). Disk verified — `ls README/` shows no APISynthesis dir; git tree clean. No discrepancies; trust log + disk, nothing to redo. Fresh Session 1 block. User requested skeleton-only registration (notes + considerations + goal + metadata), full domains start after track 21 (RxJS) closes DONE.
- Plan (Mode 1 new track — skeleton only this session):
  1. Unit 1 — open this entry (this write) + create track README.md (Template A, planned curriculum as TEXT — no leaf links until domains land, per no-dead-links rule)
  2. Record NestJS-first rule pointer (examples in this track use NestJS Fastify adapter default + Express side notes — rule lives in AGENTS.md §9, always-loaded)
  3. Register root README row 22 (renumber follow-up unit)
  4. Close DONE with gated Next steps (no content units in this session by user scope)
- Full planned curriculum (20 domains, in order — detailed into Template B indexes when the track starts):
  1. `01 HTTP Beneath Frameworks` (sockets, parsing, Node http under adapters)
  2. `02 Runtime and Event Loop at Scale` (loop, workers, backpressure beneath frameworks)
  3. `03 Type Systems Across Tracks` (TypeScript contracts end to end)
  4. `04 Data Modeling Across Stores` (SQL, Mongo, Redis — one modeling mind)
  5. `05 Query Strategy Synthesis` (ORM patterns compared, N+1 everywhere)
  6. `06 Auth Systems End to End` (AT-RT: access + refresh tokens, or better as detected at build time)
  7. `07 Authorization Models` (CASL or better as detected at build time)
  8. `08 Caching Architectures` (layers, invalidation, stampedes)
  9. `09 Realtime Synthesis` (Socket.IO + RxJS streams merged)
  10. `10 Microservices Boundaries and Contracts` (splits, versioning, resilience)
  11. `11 CQRS and Event Sourcing in Practice` (commands, projections, stores)
  12. `12 API Styles United` (REST, GraphQL, gRPC — one design mind)
  13. `13 Testing Strategy Across Layers` (pyramids, contracts, e2e balance)
  14. `14 Observability and Operations Synthesis` (health, logs, traces, alerts)
  15. `15 Performance Engineering` (DB + response delay, beneath framework layers)
  16. `16 Security Hardening End to End` (threats, headers, secrets, audits)
  17. `17 Multi-Client API Design` (web, Electron desktop, React Native + Expo & Capacitor — limits and capabilities per client)
  18. `18 Library Internals and Extension` (beneath frameworks: read source, extend, change behavior safely)
  19. `19 Boilerplate Prevention and Codegen` (generators, scaffolds, shared kernels)
  20. `20 Hiring-Grade Capstone and Interview Synthesis` (Google/OpenAI/Microsoft bar — systems, failures, judgment live)
- Research notes: curriculum derived from root README tracks 01–21 coverage + user considerations (AT-RT auth, CASL-or-better, caching, DB/response optimization, beneath-layer depth, multi-client, hiring bar). No version claims yet (labeled at domain-build time). roadmap.sh cross-check deferred to Domain 01 session.
- Decisions:
  - Goal: API knowledge perfect enough for hire at Google/OpenAI/Microsoft/large companies — depth includes beneath-framework layers, all merged.
  - Examples rule: NestJS (Fastify adapter default, Express side notes) is the primary vehicle in every domain — see AGENTS.md §9.
  - Gate: Domain 01 starts only after track 21 (RxJS) closes DONE; track 23 (EnterpriseApp) starts only after this track closes DONE.
  - Skeleton lists planned domains as TEXT (no links) so every link on the track index resolves from day one.
- Files touched: created `README/APISynthesis/LOG.md`, created `README/APISynthesis/README.md`
- Links fixed / added: root README row 22 → APISynthesis README (follow-up unit)
- Verification: track index resolves (back-link + LOG link); zero dead links (planned curriculum is text, not links); folder name spaceless per §2; no duplication (cross-track synthesis is new — grep shows no such track)
- Next steps: Session 2 (after RxJS DONE) — Domain 01 HTTP Beneath Frameworks (Template B index + 6 sections + leaves + track row), then 02–20 in order per plan above. Standing rules carry over (PROMPT.md + AGENTS.md §§0–9).
