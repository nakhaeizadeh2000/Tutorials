# AGENTS — Shared tutorial agent instructions

## 1. Read and route

Read the complete [PROMPT.md](<PROMPT.md>) before project work. It is the shared
content, approval, versioning, logging and Git contract for Codex and OpenCode.
Explicit user instructions take precedence; log material exceptions. Policy
maintenance may change these files when requested; tutorial authorship may not.

| Intent | Codex entrypoint | OpenCode entrypoint |
|---|---|---|
| New track or substantial expansion | `$tutorial` | `/tutorial` |
| Continue approved work | `$tutorial-continue` | `/tutorial-continue` |
| Quality review, then approved repair | `$tutorial-review` | `/tutorial-review` |

Use the matching native skill/command and read
[the shared workflow](<.tutorial/WORKFLOW.md>) and
[quality guide](<.tutorial/QUALITY.md>). Do not start tutorial generation when
commands are merely quoted, explained or configured.

## 2. Teaching priorities

Write clear English. Use JavaScript's explanations, practical examples, broad
coverage and progression as the benchmark. Follow the quality guide's reference
selection; do not treat historical facts or every surface feature as ideal.
No domain quota, punctuation quota or mandatory six-stage leaf template exists.
Cover Junior → Mid → Senior → Master → Expert → Mentor across the curriculum.
Use parentheses and em dashes when they improve comprehension; keep the main
explanation in connected prose. New content integrates current stable features;
subsequent releases use incremental update domains with necessary corrections
and navigation in existing lessons. Read PROMPT section 5 for the full contract.

Apply that research contract to both agents: search and evaluate sources for each
track/domain/section, including strong original articles, specialist sites,
Medium, dev.to and Stack Overflow where relevant. Use several kinds of curriculum
input, not roadmap.sh alone. Validate factual claims against primary evidence.
Teach reasoned good/bad practices and practical pitfalls. Repeated concepts get
only a brief contextual reminder plus a precise link to their full explanation.

## 3. Approval, persistence and recovery

Present a new curriculum before writing its lessons. Present review findings and
a concrete repair plan before changing reviewed lessons. Wait for the user's
approval in both cases, then complete that approved scope without per-unit
confirmation. Continue never bypasses a pending approval gate or starts another
track just because it is next in the root table.

Read the selected track's complete LOG and verify claims against disk/Git. Recover
the same phase, approval and plan after compaction. Open the log first; implement
one unit with ancestor indexes; verify; update the log immediately; commit only
that unit; then advance. Preserve closed logs and unrelated changes. Close the
active entry before returning. Neither hooks nor a worker's claim prove checks
passed. Never report mental execution as a test run.

Shared workflow maintenance uses MAINTENANCE_LOG.md. The historical .codex/LOG.md
is not a tutorial handoff. Deleted tracks' historical Git logs do not authorize
restoring their old curricula.

## 4. Backend teaching context

Keep the user's NestJS-first decision for CleanArchitecture, Microservices,
SocketIO, RxJS, APISynthesis, EnterpriseApp and subsequent application-oriented
backend tracks. Use NestJS with the **Fastify adapter** as the default vehicle.
Link framework mechanics to their owner; mention Express-adapter differences
briefly only when they change behavior.

Foundational tracks whose subject is Node.js, Express or Fastify teach that
subject directly; do not require a later framework as an unexplained prerequisite.
Other exceptions require an explicit user instruction and a logged reason.
Retain the root curriculum order: APISynthesis builds on the preceding backend
tracks; EnterpriseApp follows it. This is prerequisite guidance, not automatic
permission to author those tracks or a fixed internal domain count.

## 5. Delegation

Direct execution is sufficient. Use subagents only when the user or applicable
instructions authorize delegation. If used, an executor owns exactly one assigned
unit and its specified indexes; it does not own logs, Git commits or another unit.
The coordinator checks evidence, updates the log and commits before the next
writer starts. Do not run concurrent writers in the same track/worktree. Never
let a worker bypass curriculum/review approval or inherit an unverified assumption
that approval occurred.
