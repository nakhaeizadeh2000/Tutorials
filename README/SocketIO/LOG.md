# SocketIO — work log

## [2026-10-12 15:00] Session 1 — Create track + Domain 01 Realtime Foundations (Domains 02–07 next)
- Status: IN PROGRESS
- Context read: PROMPT.md (binding §§1–8 — full reads S1–S7 SystemDesign on file; git log confirms PROMPT.md/root README.md untouched since 49a1003/f26c54e, both predate CA-S1 — change-checked, no deltas to re-read); root README.md (full Categories 1–39 — Socket.IO #20 listed, link target missing until this session); README/SystemDesign/LOG.md (7 DONE blocks verified — S7 closeout 76ecce7 on top, TRACK COMPLETE 7/7, Next steps names this track); README/SystemDesign/README.md (Template A reference, October 2026 era); README/Microservices/01 Microservices Foundations and Mental Model/README.md (Template B reference + neighbor tone — read in prior track starts, shape on file). Recovery: repo-wide grep for live `^- Status: IN PROGRESS` — none (SystemDesign-S7 closed DONE TRACK COMPLETE = this recovery point; AlgorithmDesign/Databases/NodeJS/TSNode PARTIAL hits are closed-session history superseded by their DONE TRACK COMPLETE closeouts, immutable per PROMPT.md:165). Disk verified — `ls README/` shows 21 dirs, no SocketIO dir (created empty this session before this write); git tree clean (HEAD 76ecce7). No discrepancies; trust log + disk, nothing to redo. Fresh Session 1 block. Handoff unambiguous (SystemDesign-S7 Next steps names #20 explicitly, no gates) → proceed directly, no user question needed. No scope override in request → Mode 1 new track, Domain 01 only (02–07 future sessions, per convention).
- Plan (Mode 1 new track; Domain 01 fully implemented this session, domains 02–07 next in order):
  1. Unit 1 — open this entry (this write)
  2. Unit 2 — research (websocket/socket.io/rooms/namespaces DRY grep, versions, neighbor shapes) + record + prepare scratch
  3. Unit 3 — create track README.md (Template A, lists Domain 01) + `01 Realtime Foundations and Mental Model/README.md` (Template B, sections 1–6) + 6 section folders (root README row #20 resolves, no root edit needed)
  4. Unit 4 — leaf 1.1. Handshakes upgrading HTTP
  5. Unit 5 — leaf 1.2. Frames streaming messages
  6. Unit 6 — leaf 2.1. Events naming messages
  7. Unit 7 — leaf 2.2. Rooms scoping audiences
  8. Unit 8 — leaf 3.1. Reconnects surviving drops
  9. Unit 9 — leaf 4.1. Realtime checklist mentors insist on
  10. Unit 10 — leaf 5.1. Common interview QA realtime foundations
  11. Unit 11 — leaf 6.1. Boundaries what is covered elsewhere
  12. Final verification (DoD + links + DRY) + close entry DONE/PARTIAL
- Full planned curriculum (future domains, in order): 02 NestJS Gateways and Lifecycle, 03 Rooms Namespaces and Presence, 04 Scaling Out with Adapters, 05 Reliability Backpressure and Security, 06 Delivery and Evolution, 07 Production Mastery and Interview Synthesis. Only Domain 01 is guaranteed in this session; later sessions append domains 02–07.
- Done:
  - [unit 1] Opened this Session 1 entry (first write on disk)
  - [unit 2] Research recorded (versions pinned live via npm view: socket.io 4.8.4 + socket.io-client 4.8.4, @nestjs/websockets 12.1.2 + @nestjs/platform-socket.io 12.1.2, ws 8.22.0, node v20.20.2, tsc 5.9.3; DRY grep — EventEmitter MECHANICS owned by NodeJS-04/1.1 + DESIGN by DP-04/2.1 (linked), TCP sockets by NodeJS-04/2.1 + bare HTTP by NodeJS-04/3.1 + DNS by NodeJS-04/2.2 (linked), Observer fan-out by DP-04/2.1 (linked); ZERO taught websocket handshake/frames/gateway/room/namespace/adapter coverage anywhere (NestJS track has no gateway domain — Socket.IO track owns gateway teaching via NestJS vehicle); ITVocabulary has no websocket word files (protocol terms defined in-place, not jargon); Domain 01 owns REALTIME FOUNDATIONS (upgrade handshake, frame streaming, event naming, room scoping, reconnect survival); scratch sio-s1 prepared + verified)
  - [unit 3] Created `README/SocketIO/README.md` (Template A track index, lists Domain 01, NestJS-vehicle orientation with sibling links) + `README/SocketIO/01 Realtime Foundations and Mental Model/README.md` (Template B domain index, sections 1–6 with back-link) + 6 section folders — root README row #20 now resolves, no root edit needed; track index 1/1 + LOG link resolve, domain index 1/9 (8 leaf forwards resolve as units land; vehicle probe `probe-gw.ts` compiled + ran live in sio-s1 pre-commit then removed — gateway-direct-instantiation pattern confirmed, zero ports bound)
- Decisions:
  - NestJS-first vehicle per AGENTS.md §9 (Socket.IO is listed track #20): every GOOD example is a NestJS gateway slice (`@WebSocketGateway` + `@SubscribeMessage`, socket.io driver) — never bare `ws`, never bare Express/Fastify. HTTP adapter stays the track default (Fastify, per user decision); gateways are adapter-agnostic so no Express side notes needed unless a behavioral difference surfaces (none in Domain 01).
  - Verification posture (mirrors clean-s1/nestjs-s2): gateway classes instantiated directly + handlers invoked as plain methods with mock servers — zero listening ports throughout; socket.io-client only with `autoConnect: false` (config shapes, never dials). Per-fence tsc flags carry `--experimentalDecorators --emitDecoratorMetadata --esModuleInterop` (gateway fences) + default-lib collision avoidance (no `name`/`status`/`event`/`closed` identifiers).
- Files touched:
- Links fixed / added:
- Verification:
- Next steps:
