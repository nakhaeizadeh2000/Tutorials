# Repository maintenance log

## [2026-10-12 11:37] Session 1 — Reset later tracks and rebuild tutorial authoring workflows
- Status: IN PROGRESS
- Context read: complete PROMPT.md and AGENTS.md; root README.md; complete .codex/LOG.md; Codex/OpenCode configurations, commands, skills, executor instructions, hooks, tests and usage guides; JavaScript track/domain indexes and representative leaf samples. Deleted-track logs are reset artifacts, not active continuation instructions.
- Plan:
  1. Create tutorial-quality-reset from efa70c3 and open this log before implementation.
  2. Delete all existing track 3+ directories including their logs/reports; retain the root curriculum as planned entries, and repair live inbound links without rewriting retained lessons.
  3. Replace shared policy and add one shared JavaScript-based quality guide and workflow for proposal, approved execution, recovery and report-first review.
  4. Wire both agents' three commands, skills, executors and advisory reminders to the shared rules; update usage documentation.
  5. Validate deletion scope, retained content, links, configuration, command discovery, hooks, approval boundaries and recovery scenarios; close and commit.
- Done: [unit 1] Created requested branch tutorial-quality-reset; opened this maintenance record as the first repository file write.
- Done: [unit 2] Removed 1,133 files in 20 existing track 3+ directories, including all dedicated logs/reports. Kept every root curriculum row and replaced absent-track links with Planned. Removed the fixed 20-domain claim from the APISynthesis root label.
- Decisions:
  - User explicitly authorizes deletion of track 3+ content and logs, shared PROMPT/AGENTS revision, and both agent integrations. This overrides the former immutable-log/deletion and no-PROMPT-edit restrictions for this maintenance task only. Whole-track reset does not resume or rewrite deleted curriculum logs; inventory/Git are the deletion evidence. Maintenance uses this shared log instead of opening a log inside a directory being deleted. Future tutorial tasks use their own complete track logs.
  - Keep JavaScript and TypeScript lessons as reference/content; only repair live links if reset requires it. Keep closed retained logs and .codex integration history unchanged. Preserve Git history; do not push.
  - Keep only the root future-track list; no old track plans, reset logs or placeholder folders for deleted tracks remain. CSharp is already absent and remains a planned independent root entry.
  - New curricula and review repairs require the user's approval of the presented proposal/report. Resume honors recorded approval rather than asking again or bypassing a pending gate.
  - English teaching; Junior → Mid → Senior → Master → Expert → Mentor across the curriculum. No fixed domain quota. JavaScript is the editorial benchmark, not authority for current versions or punctuation density.
  - New authorship integrates current stable features into relevant topics. Later stable releases receive incremental update domains; existing lessons receive necessary corrections and navigation without forcing returning readers to reread the baseline.
- Files touched: created MAINTENANCE_LOG.md; modified README.md; deleted README/{ITVocabulary,Git,AlgorithmDesign,DesignPatterns,NodeJS,TSNode,Databases,DatabaseDesign,ORM,Redis,Express,Fastify,NestJS,CleanArchitecture,APIDesign,Microservices,SystemDesign,SocketIO,APISynthesis,EnterpriseApp}/ recursively (old → new: deleted; future topic names remain only in the root table).
- Links fixed / added: root links to all absent planned tracks replaced with plain status text. JavaScript/TypeScript live Markdown links into deletion targets: zero.
- Verification: initial Git working tree clean; starting HEAD efa70c3; requested branch created.
- Verification (unit 2): only JavaScript and TypeScript remain under README; both trees are byte-for-byte unchanged in Git; exact deletion set derived from root rows 3–39; no retained lesson links require repair.
- Next steps: execute units 3–5; do not begin rebuilding ITVocabulary in this maintenance task.
