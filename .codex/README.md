# Codex tutorial integration

## 1. Three entrypoints

Use `$tutorial`, `$tutorial-continue`, or `$tutorial-review` in a new Codex session
opened in this repository. See the shared [command table](<../CODEX_USAGE.md>)
for examples and the corresponding OpenCode commands.

| Codex skill | Shared workflow mode |
|---|---|
| [tutorial](<skills/tutorial/SKILL.md>) | Propose a complete curriculum, wait for approval, then author it. |
| [tutorial-continue](<skills/tutorial-continue/SKILL.md>) | Recover phase, approval and progress from complete logs plus Git/disk. |
| [tutorial-review](<skills/tutorial-review/SKILL.md>) | Report findings first, wait for approval, then complete accepted repairs. |

All modes load [PROMPT.md](<../PROMPT.md>), [AGENTS.md](<../AGENTS.md>),
[WORKFLOW.md](<../.tutorial/WORKFLOW.md>) and [QUALITY.md](<../.tutorial/QUALITY.md>).
These shared files own teaching and approval policy for both agents. There is no
separate Codex syllabus or punctuation rule. The old
[unit-loop reference](<skills/tutorial/references/unit-loop.md>) forwards to them.

## 2. Loading and execution

Repository skills use `.codex/skills/`, discovered by the installed Codex CLI.
Use native `$skill` invocation or the client's skill selector. An OpenCode slash
command is not automatically a Codex slash-menu registration; the project routes
it only if the client delivers it as ordinary prompt text.

The [launchers](<bin/tutorial>) invoke one interactive Codex process with the repo
root and literal prompt arguments. They do not run a restart loop. Launchers for
[continue](<bin/tutorial-continue>) and [review](<bin/tutorial-review>) use the same
contract. If skill discovery is unavailable, explicitly ask the agent to read
PROMPT.md, AGENTS.md and the exact `.codex/skills/<name>/SKILL.md` file.

[Project configuration](<config.toml>) preserves the selected model/provider and
uses high reasoning and live search. Existing local permissions remain unchanged;
host policies still apply. Project trust is managed by the client, not these files.
[Hooks](<hooks.json>) only add advisory context where supported; they never prove
approval, block a tool, modify arguments or certify verification. The workflow
works through policy and skills even when local hooks are unavailable.

The optional [executor](<agents/tutorial_executor.toml>) accepts one assigned,
approved unit and returns evidence. The coordinator owns the log and commit.
Do not run concurrent writers in one track/worktree. Delegation is optional and
requires authorization under the active host instructions.

## 3. Durable state and validation

Tutorial state lives only in `README/<Track>/LOG.md` and verified Git/files.
Pending approval is checkpointed PARTIAL; approved execution resumes without
asking again. Maintenance lives in [MAINTENANCE_LOG.md](<../MAINTENANCE_LOG.md>).
The older [integration log](<LOG.md>) is preserved history, never a tutorial handoff.

Run offline wiring/behavior checks:

```bash
python3 .codex/tests/test_integration.py
```

The tests check loading-related structure, links, literal launcher arguments and
advisory-hook behavior. They cannot certify a model's future teaching quality.
Use real client discovery checks when configuration changes. Review quality with
actual lessons and the evidence-based rubric, not token or punctuation counts.

Official references for integration maintenance:
[Codex skills](<https://learn.chatgpt.com/docs/build-skills>),
[Codex configuration](<https://learn.chatgpt.com/docs/config-file/config-reference>),
[OpenCode commands](<https://opencode.ai/docs/commands/>), and
[OpenCode plugins](<https://opencode.ai/docs/plugins/>).
