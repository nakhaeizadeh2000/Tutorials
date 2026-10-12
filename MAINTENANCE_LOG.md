# Repository maintenance log

## [2026-10-12 11:37] Session 1 — Reset later tracks and rebuild tutorial authoring workflows
- Status: DONE
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
- Done: [unit 5] Extended and passed 12 offline integration tests; validated all six skills, real client discovery, strict Codex config, deletion scope and unchanged retained content. Completed manual approval/recovery contract review and closed maintenance.
- Decisions:
  - User explicitly authorizes deletion of track 3+ content and logs, shared PROMPT/AGENTS revision, and both agent integrations. This overrides the former immutable-log/deletion and no-PROMPT-edit restrictions for this maintenance task only. Whole-track reset does not resume or rewrite deleted curriculum logs; inventory/Git are the deletion evidence. Maintenance uses this shared log instead of opening a log inside a directory being deleted. Future tutorial tasks use their own complete track logs.
  - Keep JavaScript and TypeScript lessons as reference/content; only repair live links if reset requires it. Keep closed retained logs and .codex integration history unchanged. Preserve Git history; do not push.
  - Keep only the root future-track list; no old track plans, reset logs or placeholder folders for deleted tracks remain. CSharp was initially retained as planned, then concurrently removed by commit b90e06a (remove c# from track list). Preserve that independent user change; final root list has all 39 numbered tracks. During verification, the missing row was briefly restored before recognizing that commit, then only that restoration was undone.
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
- Files touched (unit 5): modified .codex/tests/test_integration.py and MAINTENANCE_LOG.md. README.md restored to its existing committed state after recognizing the concurrent CSharp removal; no additional README change committed.
- Links fixed / added (unit 5): none; concrete links in shared policies and both integration trees verified.
- Verification (unit 5): python3 .codex/tests/test_integration.py passes 12/12, covering all three command routes, near-match/discussion exclusion, literal launcher arguments, advisory hook behavior, nested-directory invocation, configuration parsing and actual Markdown links. OpenCode plugin tests execute its hooks with a mock SDK, preserve tool args/compaction prompt and tolerate log failures. All six SKILL.md files pass the skill-creator quick validator.
- Verification (actual clients): Codex 0.160.0 debug prompt-input includes all three repo skills and shared policy routing; app-server --strict-config initializes and skills/list returns tutorial, tutorial-continue, tutorial-review enabled without errors. OpenCode 1.18.35 debug config loads all three commands on build, the executor and the new JS plugin; debug skill discovers all three OpenCode skills. No model inference or tutorial authorship was launched by these checks.
- Verification (scope): branch tutorial-quality-reset; exactly 1,133 deleted files under the 20 originally existing track 3+ directories; only JavaScript and TypeScript remain under README; both complete trees, their logs, historical .codex/LOG.md and opencode.json unchanged from efa70c3. All 39 numbered root rows retained; independent CSharp removal preserved.
- Verification (manual contract review, not model-driven trials): new-track request stops after proposal; edited proposal gets a new revision; pending proposal/review survives continue; approved full-track work continues across domains; report-only cannot repair; selected-finding approval limits repairs; absent/deleted next track requires a new proposal; compaction preserves phase and approval. Actual teaching quality still requires review of generated lessons; configuration tests do not certify it.
- Next steps: maintenance complete; no tutorial rebuild started. Open a new Codex/OpenCode session to load updated agent configuration. Use $tutorial ITVocabulary or /tutorial ITVocabulary to obtain a fresh curriculum proposal, then approve or revise it. Use the documented review command for a specifically selected existing scope. No push performed.


## [2026-10-12 12:37] Session 2 — Broaden research sources for both tutorial agents
- Status: DONE
- Context read: complete PROMPT.md, AGENTS.md, .tutorial/QUALITY.md, .tutorial/WORKFLOW.md and MAINTENANCE_LOG.md; source-related routing in both agents and executors; current clean Git state.
- Plan: strengthen the shared source-selection and curriculum-discovery policy, apply it to proposal/authoring/review and both executor adapters, retain DRY and reasoned good/bad practices, verify shared wiring and commit this coherent policy unit.
- Approval: user explicitly requests these research and reuse rules for Codex and OpenCode.
- Done: opened and committed this maintenance session before edits; expanded shared research policy and quality rubric; connected proposal/review/execution and both executor adapters to the topic-specific source-selection procedure.
- Decisions: choose relevant high-quality sources per track/domain/section, including original practitioner articles and community discussions; distinguish discovery/explanation from evidence of current technical behavior. No fixed website or citation quota. No tutorial authorship or unrelated configuration changes.
- Files touched: modified PROMPT.md, AGENTS.md, .tutorial/QUALITY.md, .tutorial/WORKFLOW.md, .codex/config.toml, .codex/agents/tutorial_executor.toml, .opencode/agent/tutorial-executor.md and MAINTENANCE_LOG.md.
- Links fixed / added: existing shared-guide links preserved; textual section references now route to QUALITY.md section 6.
- Verification: working tree initially clean on tutorial-quality-reset; python3 .codex/tests/test_integration.py passes 12/12; git diff --check clean. Reviewed both agents' shared-policy routes and executor guidance. This change defines future research behavior; no claim of having researched or ranked articles for an actual tutorial topic.
- Next steps: complete. Both agents use the expanded research procedure in new proposals, approved authorship/continuation and quality reviews; no lesson content changed.


## [2026-10-12 12:40] Session 3 — Make source discovery open-ended and mentor-led
- Status: DONE
- Context read: complete PROMPT.md and MAINTENANCE_LOG.md; current AGENTS teaching priorities; QUALITY source-evaluation procedure; verified clean Git state.
- Plan: clarify that educational resources may be principal teaching sources, all named sites are illustrative rather than an allowlist, and topic questions drive iterative discovery and synthesis; verify the shared rules and commit.
- Approval: user explicitly asks both agents to discover varied resources beyond all named examples and work like a mentor.
- Done: opened/committed this session, clarified open-ended source discovery in PROMPT and AGENTS, and added mentor-led research, source roles and evidence-based stopping guidance to QUALITY section 6.
- Decisions: refine the existing shared source contract without adding a static directory of websites or claiming the supplied links were independently evaluated. No tutorial content or approval workflow changes.
- Files touched: modified PROMPT.md, AGENTS.md, .tutorial/QUALITY.md and MAINTENANCE_LOG.md.
- Links fixed / added: none.
- Verification: initial clean working tree on tutorial-quality-reset; concrete links in changed policies resolve; reviewed the refinement against existing shared research and DRY rules. Both agent entrypoints already load these shared files; no executable code or discovery wiring changed, so no model trial or repeated integration test claimed.
- Next steps: complete; both agents must discover resources beyond all named examples and synthesize topic-specific instruction. No tutorial content authored.


## [2026-10-12 13:29] Session 4 — Require three teaching sections in every leaf
- Status: DONE
- Context read: complete PROMPT.md and MAINTENANCE_LOG.md; AGENTS.md teaching rules; shared QUALITY/WORKFLOW guidance; Codex config and both executor instructions; existing skill routing.
- Plan: require Common confusion, Performance note and Mentor note in every teaching leaf, with Cross-links when needed; align shared policy, review/verification and both agent instructions; verify and commit.
- Approval: explicit user request to update both agent configurations.
- Done: opened/committed this log; added the required three-section leaf contract and conditional Cross-links to PROMPT, AGENTS, quality/review checks, the shared execution loop, Codex project config and both executor instructions.
- Decisions: applies to teaching leaf pages, including synthesis/update leaves; indexes, logs and configuration files are not teaching leaves. Keep sections meaningful and topic-specific; do not invent performance claims. Existing lessons are not rewritten by this configuration task.
- Files touched: modified PROMPT.md, AGENTS.md, .tutorial/QUALITY.md, .tutorial/WORKFLOW.md, .codex/config.toml, .codex/agents/tutorial_executor.toml, .opencode/agent/tutorial-executor.md and MAINTENANCE_LOG.md.
- Links fixed / added: none.
- Verification: 12/12 existing integration tests pass, including configuration parsing and shared Markdown links; git diff --check passes. Verified required vs conditional sections and meaningful no-direct-performance-impact guidance. Concurrent edits under TypeScript domain 17 appeared after initial inspection; they are unrelated and left untouched/unstaged by this task.
- Next steps: complete. Both agents apply this contract to authored leaves and report missing sections during scoped reviews. Existing teaching pages were not retroactively rewritten by this configuration request.
