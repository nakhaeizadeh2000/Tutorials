# Tutorial commands for Codex and OpenCode

Open this repository and start a new agent session after configuration changes.
Both agents use the same [policy](<PROMPT.md>),
[quality guide](<.tutorial/QUALITY.md>) and [workflow](<.tutorial/WORKFLOW.md>).

| Goal | Codex | OpenCode | What happens |
|---|---|---|---|
| Start a track | `$tutorial ITVocabulary` | `/tutorial ITVocabulary` | Research and show the complete curriculum; wait for your approval or edits; then finish the approved track. |
| Resume | `$tutorial-continue ITVocabulary` | `/tutorial-continue ITVocabulary` | Recover the exact phase and approved scope from the complete log and actual files. |
| Finish approved remaining work | `$tutorial-continue ITVocabulary all remaining` | `/tutorial-continue ITVocabulary all remaining` | Continue through all remaining approved domains; pending approval still must be resolved. |
| Review quality | `$tutorial-review TypeScript` | `/tutorial-review TypeScript` | Report clarity, coverage, progression, technical and example issues; wait for approval; then complete accepted repairs. |
| Review one domain | `$tutorial-review TypeScript domain 03` | `/tutorial-review TypeScript domain 03` | Apply the same report-first workflow to the specified scope. |
| Request a report only | `$tutorial-review TypeScript report only` | `/tutorial-review TypeScript report only` | Return findings without repairing lessons. |

Reply to a presented proposal/report with approval or specific changes. Approval
is recorded with its revision and scope, so another session or the other agent
can continue without asking again. “Continue” does not silently approve an unseen
plan. Starting a deleted track always produces a fresh proposal.

Curricula follow the JavaScript editorial benchmark and current stable sources.
There is no fixed domain count. New teaching integrates stable features in their
natural topics; releases after publication get incremental update lessons and
necessary corrections/navigation in the original material.

Codex terminal launchers are `./.codex/bin/tutorial`,
`./.codex/bin/tutorial-continue` and `./.codex/bin/tutorial-review`.
For example: `./.codex/bin/tutorial-review TypeScript "domain 03"`.
Quote `$tutorial...` if passing it directly through a shell to avoid expansion.
OpenCode slash commands are distinct from Codex native `$skill` invocation.
See [Codex integration details](<.codex/README.md>) for loading and validation.
