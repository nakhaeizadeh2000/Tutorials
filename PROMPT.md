# MASTER PROMPT — Tutorials repository

## 1. Purpose and authority

Write excellent English tutorials that build understanding, practical competence,
and sound judgment. Teach the reader to explain, use, debug, design, evaluate,
and eventually teach the subject. Completeness means a coherent learning path,
not a large file count or a checklist of unexplained terminology.

Read this entire file before project work. Explicit user instructions override
repository defaults; record material deviations in the active log. Ordinary
tutorial work must not edit these rules. A user-requested workflow or policy
maintenance task may revise them and records its work in
[MAINTENANCE_LOG.md](<MAINTENANCE_LOG.md>).

The JavaScript track is the editorial benchmark for scope, concrete explanations,
progression, examples, and mentor depth. Read representative actual leaves using
[the quality guide](<.tutorial/QUALITY.md>) before proposing, authoring, or reviewing.
Do not imitate its punctuation density, preserve outdated technical claims, or
copy its domain count. Current primary evidence establishes technical behavior;
carefully evaluated practitioner sources enrich explanation and coverage (§5).

Both Codex and OpenCode use this policy and the same
[workflow](<.tutorial/WORKFLOW.md>). Their skills and commands are thin entrypoints,
not separate copies of the teaching rules.

## 2. Curriculum and learner progression

Plan from the subject's concepts, prerequisites, practical work and failure modes.
There is **no fixed minimum, maximum, or preferred number of domains**, sections,
leaves, words, examples, or update modules. In particular, never compress a subject
into seven domains or copy JavaScript's count. Split or combine topics according
to cognitive load, coherent boundaries and coverage evidence.

| Stage | Observable learning outcome |
|---|---|
| Junior | Explain the concept plainly and run a small complete example. |
| Mid | Apply idiomatic techniques and debug common mistakes independently. |
| Senior | Justify design, testing, performance and production trade-offs. |
| Master | Integrate concepts to solve substantial, unfamiliar practical problems. |
| Expert | Reason about internals, limitations, edge cases and evidence. |
| Mentor | Teach the reasoning, diagnose misconceptions and review others' designs. |

Cover this progression across the curriculum. Individual leaves introduce only
the depth their topic can support; do not force six labeled stages, runtime
internals or performance claims into every page. Start from the prerequisites
actually taught. Link missing prerequisites or include them in the proposal.
Optional exercises, explained solutions and integrative projects should serve
specific outcomes, not pad the curriculum.

## 3. Structure and navigation

```text
README.md
PROMPT.md
AGENTS.md
README/<Track>/README.md
README/<Track>/LOG.md
README/<Track>/NN Domain Name/README.md
README/<Track>/NN Domain Name/sections/M. Section name/M.k. Leaf topic name.md
```

Use track folder names without spaces, two-digit domain prefixes, and section /
leaf numbers in teaching order. Leaf filenames omit `: , ? & ( )`. Keep existing
paths stable unless approved work requires restructuring. Record old → new paths
and repair inbound links when moving, renaming or deleting.

The root README is the sole list of future tracks. Unbuilt tracks are plain
Planned entries, never links to absent files. Do not recreate deleted track plans
from Git or old handoffs. A track's full proposed/approved curriculum belongs in
its LOG; published indexes link only to existing content and distinguish progress
from completion. Do not create placeholder leaves merely to satisfy an index.

### 3.1. Track index

```markdown
# <Subject> track

Explain the scope, audience and prerequisites briefly. State the verified stable
baseline and verification date; link later incremental updates when they exist.

| # | Module |
|---|--------|
| 1 | [Foundations](<01 Foundations/README.md>) |

[← Back to Tutorials](<../../README.md>)
```

### 3.2. Domain index and leaf promises

```markdown
# <Domain name>

Explain what the reader will learn and needs to know first.

## 1. <Section title>

### [1.1. <Leaf title>](<sections/1. Section title/1.1. Leaf title.md>)

1. **Mental model:** State what the reader will understand.
2. **Application:** State what the reader will be able to do.
3. **Failure modes:** State what the reader will learn to diagnose.
```

Use a few specific promises, usually three to five, without a rigid quota.
Leaf titles and numbers match their index entries. Leaves use matching numbered
`### k) **Label**` parts for their main promises and may add useful synthesis.
Write explanations in connected prose; labels organize reasoning, not replace it.

Domains include substantive synthesis/checklists, production pitfalls and
interview reasoning where appropriate, as real linked leaves rather than empty
README bullets. Avoid repeated generic advice. Each domain ends with a real
**Overlaps to avoid** leaf that explains boundaries and links to existing owners.
Use `[text](<path>)` for relative Markdown links, including paths with spaces.

## 4. Teaching and readability

Lead with the concept and a concrete problem. Introduce terminology before relying
on it. Explain how an example works and what its output means before adding the
next complication. Develop definitions, motivation, guidance, runnable examples,
misconceptions, trade-offs and mentor advice where useful; they are teaching
functions, not an eight-label form repeated under every promise.

Use complete sentences and short, connected paragraphs. A parenthesis can clarify
a term; an em dash can mark a useful aside. Neither is mandatory or forbidden.
If understanding the main point requires deciphering nested asides, slash chains,
unexplained abbreviations or compressed fragments, rewrite it. Keep essential
conditions and causal explanations in the main prose. Prefer a table for real
comparisons, a list for parallel items and a heading for a genuine new topic.
Do not impose punctuation quotas or replace punctuation mechanically.

Best practices, bad practices, common mistakes and important practical points
are substantive teaching, not optional decoration. Every recommendation explains
why and when it applies, including trade-offs and exceptions. Bad practices show
a consequence and a better alternative; avoid repeating generic checklists in
unrelated leaves. Examples declare their environment,
dependencies, imports and run commands; include expected outcomes. Explain safe
ways to observe intentional failures. Pseudocode is explicitly labeled.
Do not add unsupported internals or performance claims to sound advanced.
Use real code-fence languages and comments that teach useful details.

## 5. Research, versions and reuse

Research sources for the actual track, domain and section instead of relying on
a universal website list. Search for the most useful current documentation,
original technical articles, engineering case studies, specialist sites and
community discussions. Consider Medium, dev.to, Stack Overflow, maintainers'
blogs, engineering-team blogs and other relevant publications. These are candidate
sources, not automatic endorsements or a requirement to cite every named site.
Select and use the strongest relevant material after reading and evaluating it.

Official documentation, specifications, release notes and other primary evidence
anchor current stable versions, API semantics and platform support. Original
practitioner articles can contribute worked reasoning, measurements, production
experience, design trade-offs and failure cases. Community Q&A can reveal real
misconceptions and edge cases. Corroborate factual claims with primary evidence
and reproducible examples; popularity, an accepted answer or the hosting site's
name does not establish correctness. Resolve contradictions explicitly and do
not present context-specific advice as universal best practice.

Discover curriculum gaps from multiple kinds of sources: roadmap.sh, official
guide/reference structure, specialist learning paths, strong articles, case
studies and recurring practitioner questions. Roadmap.sh is one input, never the
sole syllabus. Map candidate topics to outcomes and prerequisites rather than
copying any source's table of contents.

Use the source-evaluation procedure in QUALITY.md section 6. Record selected URLs,
their contribution, relevant dates/versions and corroboration in the active log;
cite sources supporting non-obvious claims near the explanation and offer focused
further reading where useful. Write original teaching instead of copying or
stitching together articles. If a source is inaccessible or cannot be checked,
record the limitation and find a suitable alternative; never claim it was read.
Label proposals/experimental features and exclude them from stable defaults.
Do not equate a calendar year, specification edition and runtime availability.

**Initial authorship:** integrate all relevant stable features into their proper
topical domains. Never teach a knowingly old baseline and defer already-stable
features to year-labeled catch-up domains. An optional release-history index may
provide informational navigation without duplicating instruction.

**Updates after publication:** append focused incremental update domains for new
stable changes. Identify the prior/new baseline, affected concepts, migration,
new behavior and practical exercises. Returning readers can study the delta.
Keep unchanged explanations in their original owner. Correct misleading or unsafe
old guidance and add visible links/compatibility notes in affected original pages;
do not silently rewrite the whole baseline or leave it teaching false claims.
New readers must have a clear route to current guidance. Version-sensitive advice
names actual versions and support conditions rather than vague “2026 era” labels.

Before each section, search the entire repo with `rg` for prior coverage and read
relevant matches. Teach a concept fully once in its most fitting owner. Elsewhere
use a short contextual reminder and a precise link, adding the genuinely new
application. DRY must not force a junior reader to follow a chain of links just
to understand the current sentence. Do not duplicate full lessons or link to
unbuilt topics as though they already exist.

## 6. Commands and approval boundaries

| Purpose | Codex | OpenCode | Required behavior |
|---|---|---|---|
| Start a track / propose substantial expansion | `$tutorial` | `/tutorial` | Research and present the complete curriculum; wait for user approval or edits; then finish the approved scope. |
| Continue | `$tutorial-continue` | `/tutorial-continue` | Recover approval and progress from complete logs plus Git/disk; execute the remaining authorized work. |
| Quality review | `$tutorial-review` | `/tutorial-review` | Inspect and report with evidence and a repair plan; wait for user approval; then finish the approved repairs. |

These gates are the user's explicit workflow requirements. A review invocation
alone does not authorize repairs; a new-track request alone does not approve a
curriculum the user has not seen. Discussion or configuration of a command never
invokes it. Evidence of approval persists across sessions; do not ask again for
unchanged approved work. Material expansion beyond approved outcomes requires a
revised proposal. Routine corrections inside those outcomes do not.

Follow the detailed proposal, review and recovery procedures in
[WORKFLOW.md](<.tutorial/WORKFLOW.md>). Finish only the selected authorized scope;
never automatically start the next root track.

## 7. Logging and Git

Read the root README, selected track README, complete track LOG, target domain
README and relevant reference/neighbor leaves before tutorial work. Note absent
context for a new track. Never substitute a tail or truncated output for the
complete selected log. Maintenance is tracked separately in MAINTENANCE_LOG.md;
`.codex/LOG.md` is historical integration history, not a recovery candidate.

Open the active log **before the first implementation or planning-artifact write**.
Read-only research may precede the log when needed to propose a curriculum or
review. Durable proposal/report artifacts and their logs may be written before
approval; tutorial lessons and published indexes must wait. Commit the log opening.

```markdown
## [YYYY-MM-DD HH:MM] Session N — <goal>
- Status: IN PROGRESS | DONE | PARTIAL | BLOCKED
- Context read: <complete files read; absent context noted>
- Plan: <full scope and ordered units>
- Approval: <pending/approved; proposal or report revision; evidence and scope>
- Done: <verified completed units only>
- Decisions: <research sources; baseline; boundaries; deviations>
- Files touched: <created/modified/deleted paths>
- Links fixed / added: <navigation changes>
- Verification: <commands and actual results; unexecuted checks>
- Next steps: <phase, exact remaining work, approval gate if any>
```

Closed DONE/PARTIAL/BLOCKED blocks are immutable. Update only the current open
block. An interrupted IN PROGRESS record is verified against disk/Git before
resuming or closing PARTIAL. Awaiting approval is a deliberate PARTIAL checkpoint,
not permission to execute and not an unexplained BLOCKED state.

The execution loop is: research/DRY → one leaf plus affected ancestor indexes →
verify → immediately save Done/Files/Links/Verification → check Git status and
staging → commit explicit unit paths → next unit. An index/link repair can be its
own coherent unit. Never batch multiple authored leaves in one commit. Maintenance
may use coherent configuration or deletion batches documented in its own plan.
Preserve unrelated work; never blindly `git add .` or reset the user's changes.

Continue until the approved plan is exhausted, including across domains. Ordinary
compaction means recover the same plan, not stop or restart it. Genuine blockers
or interruption get an honest checkpoint with precise next steps. Close the same
entry DONE/PARTIAL/BLOCKED and commit before normal exit. DONE means the stated
phase/scope passed verification, not that proposed or unimplemented work exists.
Do not push or publish unless requested.

## 8. Definition of done

- The lesson fulfills its promises; a reader can follow the reasoning without
  reconstructing missing explanations, prerequisites or essential asides.
- Quality has been compared with relevant JavaScript reference leaves using
  the shared quality guide; no numeric size quota substitutes for judgment.
- Current stable claims and platform assumptions have primary-source support.
- Topic-specific research considered relevant practitioner material and multiple
  curriculum inputs; selected sources and their contributions are recorded.
- Recommendations explain trade-offs, mistakes explain consequences, and
  examples demonstrate the behavior with observed results.
- Runnable examples were actually executed in a declared environment. Compilation,
  inspection, simulation and live integration are reported separately; mental
  execution never counts as a passed run. Unavailable checks remain outstanding.
- Coverage, progression, overlap boundaries, numbering and all changed/inbound
  links have been checked; indexes truthfully reflect implemented content.
- The active log records evidence and the unit commit contains only its work.

A failed correctness, readability, coverage or verification requirement must be
fixed or reported as unresolved. Passing a link checker cannot certify teaching
quality. Do not claim an entire track was reviewed from a sample.
