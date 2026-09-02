---
description: Continue the last IN PROGRESS or PARTIAL tutorial session from LOG.md Next steps following PROMPT.md recovery rules.
agent: build
---

Read `PROMPT.md` and follow it exactly. Task: continue the last tutorial session from its LOG.md recovery point.

Steps:

1. Read `PROMPT.md` + root `README.md` + the track's `README/<Track>/LOG.md` (full) + `README/<Track>/README.md`.
2. Find the last entry with `Status: IN PROGRESS` or `Status: PARTIAL`.
3. Verify each `Done:` bullet against disk — trust disk over log. Report discrepancies.
4. Either resume inside that block (continue appending Done bullets) OR close it as PARTIAL and open a fresh block per `PROMPT.md:165`.
5. Continue the loop: one unit → update LOG.md in place → git commit → next unit.
6. Close to DONE/PARTIAL with precise Next steps.

Additional context if provided: $ARGUMENTS
