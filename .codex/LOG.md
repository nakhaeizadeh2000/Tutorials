# Codex integration — work log

## [2026-10-11 12:00] Session 1 — Add an isolated Codex tutorial workflow
- Status: IN PROGRESS
- Context read: PROMPT.md (complete); AGENTS.md; root README.md; opencode.json; .opencode/command/tutorial.md; .opencode/command/tutorial-continue.md; .opencode/agent/tutorial-executor.md; .opencode/skills/tutorial-builder/SKILL.md; .opencode/plugin/enforce-prompt.ts; installed Codex CLI 0.160.0 help; official Codex configuration and skills documentation; OpenAI Docs and Skill Creator skills.
- Plan:
  1. Open this integration log before any implementation write and commit it.
  2. Add project-scoped Codex configuration and tutorial executor guidance; validate supported configuration and isolated instruction loading.
  3. Add discoverable Codex tutorial and tutorial-continue skills with the shared unit loop, recovery, research, verification, logging, commit, and NestJS-first contracts.
  4. Add Codex-specific reminders and usage documentation where supported; verify invocation and recovery guidance without generating tutorial content.
  5. Validate configuration, skills, links, and behavioral invariants; confirm all existing OpenCode/shared files are unchanged; close this entry and commit.
- Done:
  - [unit 1] Opened .codex/LOG.md as the first repository write for this setup.
- Decisions:
  - This request configures an agent, not a tutorial track. Scope adaptation to PROMPT.md sections 6–7: use .codex/LOG.md instead of appending to README/<Track>/LOG.md. No target track/domain exists for this task, so track/domain context and ancestor-index changes do not apply. This preserves OpenCode's tutorial recovery points, as requested. Future tutorial work still uses the normal track logs.
  - Keep AGENTS.md, PROMPT.md, README.md, opencode.json, and .opencode/** unchanged. Use shared policies as the source of truth and put Codex-specific adaptations under .codex/**. Do not change user-level configuration or credentials.
  - Preserve user-selected models and host permission policies unless a project setting is required for the requested workflow. Native Codex skill invocation must be documented accurately; an OpenCode command file is not a Codex slash-command registration.
- Files touched: created .codex/LOG.md.
- Links fixed / added: none yet.
- Research notes:
  - https://learn.chatgpt.com/docs/config-file/config-advanced — trusted project .codex/config.toml layers, relative paths, agent roles, and hooks.
  - https://learn.chatgpt.com/docs/config-file/config-reference — developer_instructions, skill configuration, web_search, and role configuration.
  - https://learn.chatgpt.com/docs/build-skills — native $skill invocation and /skills selection; current documentation prefers .agents/skills, so Codex-only discovery must be verified before choosing the final location.
- Verification: initial git status clean; installed codex-cli 0.160.0; no existing .codex files. Initial HEAD ad763df. No model inference or tutorial continuation executed.
- Next steps: implement unit 2, then units 3–5; update and commit this open entry after each unit.
