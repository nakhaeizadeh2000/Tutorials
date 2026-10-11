# Codex integration — work log

## [2026-10-11 08:44] Session 1 — Add an isolated Codex tutorial workflow
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
  - [unit 2] Added .codex/config.toml with Codex-only routing, current-web research, high reasoning, OpenCode-equivalent local permission settings, and persistent workflow reminders; added .codex/agents/tutorial_executor.toml for the optional serial one-unit worker. The selected model is inherited.
  - [unit 3] Added .codex/skills/tutorial/SKILL.md, .codex/skills/tutorial-continue/SKILL.md, shared tutorial/references/unit-loop.md, and both skills' agents/openai.yaml metadata. Ported creation, extension, refresh, recovery, full-track scope, research/DRY, NestJS-first examples, per-unit verification/logging/commits, compaction, and closeout. Closed PARTIAL blocks remain immutable; DONE handoffs can advance to the next eligible domain/track.
- Decisions:
  - This request configures an agent, not a tutorial track. Scope adaptation to PROMPT.md sections 6–7: use .codex/LOG.md instead of appending to README/<Track>/LOG.md. No target track/domain exists for this task, so track/domain context and ancestor-index changes do not apply. This preserves OpenCode's tutorial recovery points, as requested. Future tutorial work still uses the normal track logs.
  - Keep AGENTS.md, PROMPT.md, README.md, opencode.json, and .opencode/** unchanged. Use shared policies as the source of truth and put Codex-specific adaptations under .codex/**. Do not change user-level configuration or credentials.
  - Preserve the user-selected model. Local Codex permission defaults match opencode.json permission=allow (approval_policy=never, sandbox_mode=danger-full-access); host policies and explicit overrides still prevail. Native Codex skill invocation must be documented accurately; an OpenCode command file is not a Codex slash-command registration.
  - Installed Codex 0.160.0 actually discovers .codex/skills automatically (confirmed in its rendered skill catalog). Use this Codex-specific supported compatibility location instead of shared .agents/skills to avoid changing another agent's discovery surface. Keep a config-level direct file route as fallback.
  - Resolve the OpenCode command's ambiguous instruction to resume PARTIAL blocks in favor of PROMPT.md's immutable closed-history rule: append a new block. Do not revive superseded historical PARTIAL records. These clarifications apply only to Codex.
- Files touched: created .codex/LOG.md, .codex/config.toml, .codex/agents/tutorial_executor.toml, .codex/skills/tutorial/SKILL.md, .codex/skills/tutorial/references/unit-loop.md, .codex/skills/tutorial/agents/openai.yaml, .codex/skills/tutorial-continue/SKILL.md, .codex/skills/tutorial-continue/agents/openai.yaml.
- Links fixed / added: skill entrypoints → shared root policies; continuation → shared unit loop; tutorial → continuation recovery. All 8 concrete relative Markdown links resolve.
- Research notes:
  - https://learn.chatgpt.com/docs/config-file/config-advanced — trusted project .codex/config.toml layers, relative paths, agent roles, and hooks.
  - https://learn.chatgpt.com/docs/config-file/config-reference — developer_instructions, skill configuration, web_search, and role configuration.
  - https://learn.chatgpt.com/docs/build-skills — native $skill invocation and /skills selection; current documentation prefers .agents/skills, so Codex-only discovery must be verified before choosing the final location.
- Verification: initial git status clean; installed codex-cli 0.160.0; no existing .codex files. Initial HEAD ad763df. Unit 2: both TOML files parse; codex debug prompt-input confirms the Codex routing instructions, shared AGENTS.md, and tutorial_executor are model-visible; codex app-server --strict-config starts/exits successfully. CLI debug does not accept --strict-config, so strict validation used app-server instead. No model inference or tutorial continuation executed.
- Verification (unit 3): both skills pass the bundled quick_validate.py; actual Codex debug prompt-input lists tutorial and tutorial-continue from .codex/skills. All 8 concrete relative links resolve after excluding literal Markdown examples inside code. No model inference or tutorial continuation executed.
- Next steps: implement unit 4 reminders and usage documentation, then unit 5 final checks and closeout.
