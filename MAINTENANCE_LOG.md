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
- Done: [unit 3] Rebuilt PROMPT.md and AGENTS.md; added .tutorial/QUALITY.md and .tutorial/WORKFLOW.md as shared editorial and execution policy. Defined proposal/review approval checkpoints, six-stage outcomes, unrestricted curriculum sizing, calibrated JavaScript references, current-stable baseline and incremental later updates.
- Done: [unit 4] Wired three Codex skills/launchers and three OpenCode commands/skills to shared policy; updated both executors, Codex routing/hooks, OpenCode advisory plugin, root command table and usage guides. Replaced duplicated legacy loop with a compatibility link to the shared loop.
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
- Verification (unit 3): all concrete policy/reference links resolve; reviewed phases against user decisions including approval recovery and scope preservation. The first checker incorrectly treated inline `[text](<path>)` as a live link and aborted before the log update; shell continued to commit. Corrected the checker, recorded this discrepancy immediately, and amended the same unit commit with this log before starting any next unit.
- Files touched (unit 3): modified PROMPT.md, AGENTS.md; created .tutorial/QUALITY.md, .tutorial/WORKFLOW.md.
- Links fixed / added (unit 3): shared policy → workflow/quality and quality → four JavaScript references.
- Files touched (unit 4): modified README.md, CODEX_USAGE.md, .codex/{README.md,config.toml,agents/tutorial_executor.toml,hooks/tutorial_reminder.py,skills/tutorial/**,skills/tutorial-continue/**}, .opencode/{agent/tutorial-executor.md,command/tutorial.md,command/tutorial-continue.md,skills/tutorial-builder/SKILL.md}; created .codex/{skills/tutorial-review/**,bin/tutorial-review}, .opencode/{command/tutorial-review.md,skills/tutorial-continue/SKILL.md,skills/tutorial-review/SKILL.md,plugin/enforce-prompt.js}; removed old plugin/enforce-prompt.ts. Existing two launcher bodies preserved.
- Links fixed / added (unit 4): all adapters point to shared policy/quality/workflow; root and command guide expose all three modes.
- Verification (unit 4): JSON/TOML parse; concrete integration Markdown links resolve; all three launchers pass bash -n. Installed clients: Codex 0.160.0, OpenCode 1.18.35. Actual discovery and behavioral checks follow in unit 5.
- Research sources: https://learn.chatgpt.com/docs/build-skills ; https://opencode.ai/docs/commands/ ; https://opencode.ai/docs/plugins/ — retrieved 2026-10-12. OpenCode uses supported tool.execute.before/client.app.log and experimental.session.compacting; no inferred read/commit state remains.
- Next steps: execute unit 5; do not begin rebuilding ITVocabulary in this maintenance task.
