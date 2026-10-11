# Codex tutorial workflow

## 1. Start and continue

Open this repository in Codex and start a **new session** after installing these
files. For Codex CLI/IDE, invoke the skills explicitly:

```text
$tutorial-continue
$tutorial-continue SystemDesign
$tutorial-continue SystemDesign — complete all remaining domains and sections
$tutorial lets add a new tutorial for Python
$tutorial extend TypeScript domain 03 with the requested section
```

You can also select **Tutorial** or **Tutorial Continue** through `/skills`.
The installed Codex CLI 0.160.0 was verified to discover both skills directly
from this repository's `.codex/skills/` compatibility location. No user-level
installation or shared `.agents/skills/` directory is needed for that version.

OpenCode's `/tutorial-continue` is a custom OpenCode slash command. These files
do **not** register an identical slash-menu command in Codex. If a Codex client
accepts that string as ordinary prompt text, the project instructions route it
to the same skill. If it rejects unknown slash commands, use
`$tutorial-continue` or `/skills`; those are the native Codex entrypoints.

From a terminal at the repository root:

```bash
./.codex/bin/tutorial-continue
./.codex/bin/tutorial-continue SystemDesign "complete all remaining domains"
./.codex/bin/tutorial "extend TypeScript domain 03"
```

These wrappers start one interactive Codex session with the repository root and
the skill prompt. They preserve arguments as prompt text; they do not run an
external restart loop or call OpenCode. For non-interactive automation:

```bash
codex exec '$tutorial-continue SystemDesign — complete all remaining domains'
```

Launch that command from this repository, or use Codex's `-C` option with the
repository path. Quote `$tutorial-continue` in shell commands so the shell does
not interpret it as a variable.

## 2. Configuration and isolation

| Existing OpenCode mechanism | Codex equivalent |
|---|---|
| `opencode.json` | [config.toml](<config.toml>) |
| Shared `AGENTS.md` and `PROMPT.md` | Same files, read unchanged; Codex also receives project routing instructions |
| `.opencode/command/tutorial.md` | [tutorial skill](<skills/tutorial/SKILL.md>) and [terminal launcher](<bin/tutorial>) |
| `.opencode/command/tutorial-continue.md` | [continuation skill](<skills/tutorial-continue/SKILL.md>) and [terminal launcher](<bin/tutorial-continue>) |
| `.opencode/skills/tutorial-builder/SKILL.md` | [shared unit loop](<skills/tutorial/references/unit-loop.md>) |
| `.opencode/agent/tutorial-executor.md` | [tutorial_executor role](<agents/tutorial_executor.toml>) |
| `.opencode/plugin/enforce-prompt.ts` reminders | [hooks.json](<hooks.json>) and [advisory hook](<hooks/tutorial_reminder.py>) |
| Track recovery logs | The same `README/<Track>/LOG.md` and Git history |

All integration files are under `.codex/`. Setup does not modify `.opencode/`,
`opencode.json`, root `AGENTS.md`, root `PROMPT.md`, tutorial content, or tutorial
logs. No global Git hooks, shell aliases, symlinks, credential/provider changes,
or user-level Codex configuration are installed. Integration maintenance is
recorded in [LOG.md](<LOG.md>), which tutorial discovery explicitly excludes.

Actual tutorial runs intentionally write the shared tutorial files/logs and
commit each unit. That lets OpenCode and Codex resume each other's work. Run
only one tutorial writer per track/worktree at a time.

## 3. Defaults and client requirements

- **Model** (inherited): keep the model chosen in Codex; project reasoning is
  `high`. Sol 6.1 high is the suggested everyday choice, with Astra high for
  difficult research/review. Use the model picker or CLI overrides to change it.
- **Research** (live): `web_search = "live"` supports current official-source
  verification and roadmap.sh checks; no external search account is configured.
- **Local permissions** (OpenCode parity): `approval_policy = "never"` and
  `sandbox_mode = "danger-full-access"` match this repository's existing
  OpenCode `permission: allow`. Higher-priority host/organization policies and
  explicit launch settings still govern the effective permissions.
- **Project trust** (Codex requirement): local project config loads only for a
  trusted project. Codex may require its normal project/hook trust review on
  first use. This setup does not bypass trust or change global trust settings.
- **Hooks** (advisory): startup/compaction, direct command submission, and
  relevant tool calls receive reminders. The hook never writes files, edits
  arguments, grants permissions, blocks actions, or proves compliance. Core
  instructions and skills work without it. Local command hooks are not supported
  by cloud orchestration, even when tools run on the local machine.
- **Delegation** (optional): a coordinator can use `tutorial_executor` when
  requested/authorized. One worker owns one assigned unit; the coordinator owns
  logs and commits. Direct execution follows the same contract.

If a different client does not discover `.codex/skills`, use the direct fallback
prompt below. It needs no global installation and also works when project
settings have not been loaded by the host:

```text
Read PROMPT.md, AGENTS.md, and .codex/skills/tutorial-continue/SKILL.md in full.
Follow that skill to continue the current tutorial from verified LOG.md and disk state.
```

## 4. Preserved workflow

The skills carry the existing sequence: complete context → verified recovery →
LOG FIRST → research/DRY search → one unit with indexes → actual verification →
immediate LOG update → one Git commit → next unit → final verification/closeout.
They preserve Templates A/B, leaf anatomy and audience depth, good/bad examples,
stable-version labels, link/filename rules, real late-section leaves,
NestJS/Fastify defaults, explicit exceptions, and the gated future curricula.

Scope is taken from the request and latest relevant handoff. “All remaining”
finishes the selected track across domain boundaries. Ordinary continuation
follows Next steps, including a DONE session that names the next domain.
Closed PARTIAL/DONE/BLOCKED entries stay immutable; a fresh session references
them. An interrupted IN PROGRESS block is verified before resuming. Ordinary
compaction recovers and continues the existing plan; true limits/blockers get an
honest checkpoint. No finite model context or prompt can guarantee an unlimited
unattended run.

## 5. Verification and references

Run the local integration checks with Python 3.11+ without model inference or
tutorial changes (the runtime reminder hook itself needs only Python 3):

```bash
python3 .codex/tests/test_integration.py
```

The checks cover config structure, Markdown link targets, hook behavior,
launcher quoting, root selection, and the absence of execution side effects in
hook inputs and launcher arguments. Codex's `debug prompt-input` can additionally show
the actual loaded instructions/skill catalog, and the strict app-server loader
can validate the config. These checks establish loading and wiring; they do not
prove a future model will follow every workflow step.

Verified against Codex CLI 0.160.0 and official documentation on 2026-10-11:
[project configuration](<https://learn.chatgpt.com/docs/config-file/config-advanced>),
[configuration reference](<https://learn.chatgpt.com/docs/config-file/config-reference>),
[skills](<https://learn.chatgpt.com/docs/build-skills>),
[custom agents](<https://learn.chatgpt.com/docs/agent-configuration/subagents>), and
[hooks](<https://learn.chatgpt.com/docs/hooks>).
