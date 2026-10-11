# Codex command reference

Send these commands in a Codex session opened in this repository.

| What you want | What to send in Codex |
| --- | --- |
| Resume the current handoff | [$tutorial-continue](<.codex/skills/tutorial-continue/SKILL.md>) |
| Resume a particular track | `$tutorial-continue SystemDesign` |
| Finish the remaining track | `$tutorial-continue SystemDesign — complete all remaining domains and sections` |
| Create a track | `$tutorial add a new tutorial for Python` |
| Extend existing material | `$tutorial extend TypeScript domain 03 with a section about …` |
| Refresh outdated content | `$tutorial refresh Microservices domain 05 against current stable documentation` |
| Choose a skill interactively | `/skills` |
| Inspect and trust hooks in the CLI | `/hooks` |

See the [full Codex workflow guide](<.codex/README.md>) for configuration, hooks, terminal launchers, and recovery details.
