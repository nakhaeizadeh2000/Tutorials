---
description: Build or extend a tutorial track/domain/leaf following PROMPT.md with LOG.md + git commit per unit loop.
agent: build
---

Read `PROMPT.md` and follow it exactly. Task: $ARGUMENTS

Follow the `tutorial-builder` skill workflow strictly:

1. Load context: `PROMPT.md` + root `README.md` + `README/<Track>/README.md` + `README/<Track>/LOG.md` + domain `README.md`.
2. Open `LOG.md` with `Status: IN PROGRESS` and full Plan BEFORE any other write.
   - If $ARGUMENTS contains `rest of`, `till finishing completely`, `all remaining`, `complete the track`, `until the end` → Plan = ALL remaining domains/sections/leaves for that track (compare implemented vs full curriculum from LOG.md). Loop must NOT stop after one domain.
   - Else Plan = minimal set for the request.
3. Loop per unit WITHOUT stopping: a) implement leaf/index b) update ancestor indexes c) verify (DoD + links + runnable examples + DRY grep) d) update LOG.md in place e) `git add && git commit -m "feat(<track>): add <unit>"` → next unit, next domain, until Plan exhausted.
4. After all units: final verification + close LOG entry to DONE/PARTIAL with Next steps + commit LOG close.

Never skip PROMPT.md, never batch commits, never leave IN PROGRESS on normal exit. When Plan is full-track, do not pause after one domain — continue automatically to the last domain.

User request: $ARGUMENTS
