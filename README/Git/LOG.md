# Git and GitHub track log

This is a new track proposal. No curriculum is approved and no lessons or
published indexes exist. Session timestamps use Asia/Tehran.

## [2026-10-21 16:07] Session 1 — Propose the complete Git and GitHub track

- Status: PARTIAL
- Context read: Complete `PROMPT.md`, `AGENTS.md`, `.tutorial/WORKFLOW.md`,
  `.tutorial/QUALITY.md`, `.codex/skills/tutorial/SKILL.md` and root `README.md`.
  The requested `git` resolves to root row 4, Git & GitHub; use `README/Git`.
  This directory, its LOG, track README, domain indexes and lessons were absent.
  No deleted-track history was used to recover or invent a curriculum.
  Read JavaScript's track index, Fundamentals index and the three calibration
  leaves listed below. Read IT Vocabulary's version-control domain index,
  repository/staging leaf, integration/review leaf and boundary leaf.
- Plan: Phase: PROPOSAL. Research and record curriculum revision 1 for the full
  track, with ordered domains, sections, unit outcomes, prerequisites, canonical
  owners, assessments and source evaluation. Present the complete domain/section
  overview with this detailed log; close PARTIAL at the curriculum approval gate.
- Approval: pending; curriculum revision 1. The user's `$tutorial git` invocation
  authorizes proposal work, not implementation of an unseen curriculum.
- Done: Verified the starting working tree and staging area were clean and the
  track absent; completed repository overlap research and JavaScript calibration.
  Opened and committed this log in `da01e4cd`. Recorded the complete researched
  revision 1 proposal: 15 justified domains and 143 ordered leaf outcomes, plus
  prerequisites, assessments, boundaries, source evaluation and execution checks.
  No implementation units are complete.
- Decisions: Current official install page reports Git 2.56.0 on 2026-10-21.
  Installed Git is 2.53.0; reading 2.56 documentation does not constitute running
  it. The complete source map and ordered plan follow below. No delegation,
  lessons, published indexes or external service mutations. Approval remains pending.
- Files touched: Created `README/Git/LOG.md` as the track's first file.
- Links fixed / added: Five precise existing relative navigation links in this
  log plus selected external research links; root row 4 remains Planned.
- Verification: `git rev-parse --show-toplevel` returned
  `/home/kartal/privateProjects/Tutorials`; `git status --short` and
  `git diff --cached --name-only` returned no changes before opening this log.
  `git --version` returned `git version 2.53.0`. `rg` identified existing Git
  vocabulary coverage; there is no existing procedural Git track. A Python
  structural check passed: all 143 unit IDs unique and in contiguous section/leaf
  order, all 15 domains end with Overlaps to avoid, all five relative links resolve,
  `README/Git` contains only this log and root row 4 remains Planned.
  `git diff --check` passed. Read the proposal against the quality guide for
  prerequisites, current-topic integration, separate advanced subjects, practical
  assessment and reuse boundaries. No lesson examples or hosted integrations have
  been run; those checks are execution work after approval.
- Next steps: Phase PROPOSAL, revision 1, awaiting explicit user approval or edits.
  Present the complete ordered domain/section overview and detailed log, commit
  this PARTIAL checkpoint, and wait. All 143 implementation units remain pending;
  do not author lessons, publish indexes or register a live root link yet.

### JavaScript calibration read in full

- `README/JavaScript/01 Fundamentals and Mental Model/README.md`: sequence
  prerequisites and daily use before internals; give concrete learning promises.
- `README/JavaScript/01 Fundamentals and Mental Model/sections/1. What JavaScript is/1.2. Engines runtimes and hosts V8 SpiderMonkey JavaScriptCore Node Deno Bun.md`:
  distinguish neighboring concepts through observable examples; transfer to
  Git versus hosting and repository versus working tree.
- `README/JavaScript/08 Arrays/sections/2. Holes sparsity and length/2.1. Holes vs undefined sparse arrays and empty slots.md`:
  vary one condition and compare results; transfer to staged versus unstaged
  contents and reset modes. Do not copy self-corrections or stale performance claims.
- `README/JavaScript/13 Async Event Loop and Promises/sections/3. Promises core/3.2. Chaining then catch finally and error propagation.md`:
  trace state transitions and failure propagation; transfer to merge, rebase,
  interrupted operations and recovery. Do not copy historical runtime claims.

### Curriculum revision 1 — pending approval

**Scope and audience.** Build Git and GitHub competence from a first local
repository to maintaining, investigating and teaching substantial collaborative
projects. A reader needs basic computer/file familiarity, not prior Git expertise,
a programming language or an account for the local lessons. Domain 01 teaches the
small command-line prerequisite rather than requiring the unbuilt Linux track.
Use ordinary text projects initially; later examples supply complete tiny programs
and test commands when program behavior matters. This is the full-track proposal.

**Baseline.** Git 2.56.0, verified against the official install page and tagged
release notes on 2026-10-21. GitHub.com documentation is a service snapshot on that
date, not a Git release number. Git LFS's official site currently lists 3.8.0;
verify its exact installed version and current release again at its teaching unit.
GitHub CLI, filter-repo, shell and signing-tool versions likewise need explicit
verification at use. The current Linux workspace has Git 2.53.0. No 2.56 example
has been run during proposal work. At execution, obtain a separate current Git
binary for version-specific demonstrations without replacing the system binary;
record the actual test matrix and any unsupported platform or service checks.

**Teaching vehicle.** Commands run in newly created disposable repositories
outside this tutorial checkout. Basic examples use Bash on Linux and macOS, with
Git Bash as the documented Windows route and explicit notes for filesystem,
permission, editor, credential and line-ending differences. Do not imply Bash
commands are native PowerShell. Use repository-local synthetic identities and
temporary configuration for labs. Two clones plus a local bare remote make
distributed races reproducible without GitHub. Hosted exercises use a learner's
disposable repository; authorship does not authorize changing this user's live
repositories, permissions, credentials, rules or releases.

**Current features belong in their owners.** Integrate contemporary configuration
and data-model guidance from the outset. Cover conflict staging with `add
--resolved`, merged-branch cleanup, current bisect reset options, the `refs`
toolbox, configured hooks, worktree-aware configuration, partial clone and
maintenance in their topical lessons with version labels. GitHub rulesets, merge
queues and immutable releases belong in governance, automation and releases.
`git history` remains experimental in the 2.56 release notes and is excluded from
stable workflows; explain that status only if it helps a reader assess the tool.
There is no catch-up domain for features already stable at initial publication.

**Boundaries.** Teach portable Git first, then GitHub as the principal hosted
collaboration example. GitLab/Bitbucket differences may clarify portable versus
host-specific behavior, but full alternative-host courses, GUI product manuals,
Git implementation in C, complete server deployment, enterprise identity setup,
cloud deployment, package-manager internals and a general CI/CD platform course
are outside this proposal. GitHub Pages, project planning, licenses and supply-chain
evidence receive the bounded treatment needed by a repository maintainer, with
precise routes to existing owners. Paid or organization-only capabilities require
eligibility notes and supplied evidence packets when live access is unavailable.

**Order and units.** The identifiers below are stable proposal unit IDs. A row is
one teaching leaf, implemented and committed independently with affected ancestor
indexes. Domain prefixes are proposed folder names; section titles and leaf titles
give the full intended ordering. Leaf filenames receive their `M.k.` prefix and
`.md` extension. Main numbered promises will be expanded from these outcomes at
implementation. Every row, including synthesis and boundaries, must contain the
required Common confusion, Performance note and Mentor note sections in order,
followed by Cross-links where useful. These rows are plans, not links to absent
lessons. Do not manufacture placeholder files or register the root link now.

#### 01 Foundations and a Reproducible Git Environment

Purpose: establish an observable local workflow before collaboration. The
boundary keeps account setup and advanced storage details out of a beginner's
first successful commit. Prerequisites: computer/file familiarity only.

| Unit | Section | Planned leaf and observable outcome |
|---|---|---|
| G01-1.1 | 1. Tools and environment | Git and hosting in the development workflow — distinguish recording, sharing, review and deployment through a small project; reuse existing vocabulary. |
| G01-1.2 | 1. Tools and environment | Install Git and verify the environment — identify the executable/version, open help and configure a usable editor and pager on each documented platform. |
| G01-1.3 | 1. Tools and environment | Command-line essentials for isolated Git labs — create and inspect text files, quote paths, read exit status and keep exercises outside real work. |
| G01-2.1 | 2. Repository setup | Initialize and inspect a repository — choose an explicit initial branch, locate repository metadata through Git and distinguish a normal checkout from a bare repository. |
| G01-2.2 | 2. Repository setup | Configuration scopes identity and effective settings — inspect origins and precedence, use local identity and separate author metadata from authentication. |
| G01-3.1 | 3. First complete workflow | Record inspect and change a first snapshot — run status, add, commit, diff and show; explain precisely which contents were recorded using the existing three-state vocabulary. |
| G01-3.2 | 3. First complete workflow | Explain and reproduce a local change — solve a staged-then-edited file task, diagnose missing identity/editor failures and justify the next command. |
| G01-4.1 | 4. Overlaps to avoid | Boundaries of setup and the local mental model — route definitions to IT Vocabulary, deliberate staging to 02, branch operations to 03 and object storage to 12. |

#### 02 Deliberate Changes and Reviewable Commits

Purpose: turn edited files into intentional, inspectable changes. Prerequisite:
01. This domain owns day-to-day file selection and snapshot preparation; later
history analysis asks different questions about already recorded work.

| Unit | Section | Planned leaf and observable outcome |
|---|---|---|
| G02-1.1 | 1. Selecting project contents | Tracked untracked ignored and removed paths — add/remove/rename deliberately, explain directory tracking and distinguish Git pathspecs from shell expansion. |
| G02-1.2 | 1. Selecting project contents | Ignore rules and troubleshooting — use repository, local and global exclusions, negation and check-ignore; stop tracking a generated file without claiming its past is erased. |
| G02-2.1 | 2. Preparing the index | Whole-file and partial staging — select hunks, split a mixed edit and inspect the staged result without unintentionally including other work. |
| G02-2.2 | 2. Preparing the index | File content edge cases during staging — handle deletion, executable-bit changes, symlinks and intent-to-add; recognize when content filters need domain 10. |
| G02-3.1 | 3. Reviewing and recording | Compare working index and committed contents — read diff endpoints, context, binary indicators and whitespace checks; explain an empty comparison correctly. |
| G02-3.2 | 3. Reviewing and recording | Commit scope messages and metadata — build coherent commits, explain why and limitations, use trailers and distinguish author from committer without treating a convention as a Git requirement. |
| G02-3.3 | 3. Reviewing and recording | Inspect the result with log show and basic graph views — verify recorded files and parent relationships and avoid relying on terminal colors or fixed object IDs. |
| G02-4.1 | 4. Applied synthesis | Review a mixed working tree before committing — produce two justified commits and an evidence-based handoff; diagnose accidental generated files and staged-but-untested contents. |
| G02-5.1 | 5. Overlaps to avoid | Boundaries of snapshot preparation — distinguish local selection from recovery in 04, shared updates in 05 and detailed historical queries in 07. |

#### 03 Branches Merges Conflicts and Worktrees

Purpose: manage simultaneous lines of work and verify their integration. Requires
01–02. Worktrees are introduced as an application of branch state; their storage
layout is deferred to 12.

| Unit | Section | Planned leaf and observable outcome |
|---|---|---|
| G03-1.1 | 1. Branch state | Create switch rename and delete branches — predict which reference moves, handle dirty-tree refusal and check merged status before cleanup, including current cleanup options. |
| G03-1.2 | 1. Branch state | Detached and unborn HEAD in practice — inspect earlier work, preserve a new detached commit and distinguish an uncreated branch from a missing commit. |
| G03-2.1 | 2. Integrating histories | Fast-forward and merge commits — construct both graph shapes, select an integration policy and inspect parents and combined contents. |
| G03-2.2 | 2. Integrating histories | Resolve content and path conflicts — inspect base/ours/theirs, handle modify-delete and rename cases, stage intended paths including add --resolved where supported, continue or abort. |
| G03-2.3 | 2. Integrating histories | Verify semantic integration and reuse resolutions — expose a clean text merge that fails behavior; use rerere with review and explain strategy versus strategy-option consequences. |
| G03-3.1 | 3. Concurrent checkouts | Worktree lifecycle and shared state — add/list/move/lock/remove worktrees, identify shared references and separate indexes, and explain same-branch checkout restrictions. |
| G03-3.2 | 3. Concurrent checkouts | Worktree configuration and interruption workflow — isolate a hotfix without stashing unfinished work, inspect effective worktree settings and clean up safely. |
| G03-4.1 | 4. Applied synthesis | Integrate a feature while delivering a hotfix — resolve a meaningful conflict, preserve unfinished changes and justify merge checks through a review/interview scenario. |
| G03-5.1 | 5. Overlaps to avoid | Boundaries of branches and integration — route undo decisions to 04, replay to 06, team policies to 09 and repository layout to 12. |

#### 04 Undo Recovery and Interrupted Work

Purpose: choose a repair from the state that must be preserved. Requires 01–03.
Teach before pushing or rewriting shared history; distinguish recovery of recorded
objects from preservation of never-recorded files.

| Unit | Section | Planned leaf and observable outcome |
|---|---|---|
| G04-1.1 | 1. Working-tree corrections | Restore and unstage selected contents — choose source and destination explicitly, recover a tracked file and preserve unrelated staged/unstaged changes. |
| G04-1.2 | 1. Working-tree corrections | Preview cleanup and protect untracked work — distinguish clean from restore, inspect ignored files and demonstrate deletion only in disposable fixtures. |
| G04-2.1 | 2. Recorded-history corrections | Reset modes and their preservation boundaries — compare soft, mixed and hard results, path-limited reset and ORIG_HEAD through measured state tables. |
| G04-2.2 | 2. Recorded-history corrections | Revert commits and merge results — create a compensating change, choose merge mainline deliberately and explain why future merges can surprise after a merge revert. |
| G04-3.1 | 3. Finding and preserving work | Recover commits through reflogs and rescue references — inspect a lost tip before creating a rescue branch; explain local logging, expiry, reachability and recovery limits. |
| G04-3.2 | 3. Finding and preserving work | Stash selected work and recover conflicts — compare apply/pop, staged and untracked options, stash inspection and when a temporary branch is clearer. |
| G04-3.3 | 3. Finding and preserving work | Diagnose an interrupted operation — identify merge/rebase/cherry-pick state, use continue/abort/quit appropriately and avoid compounding an unknown state. |
| G04-4.1 | 4. Recovery assessment | Recover a damaged checkout without losing new edits — select a repair from evidence, explain irrecoverable inputs and reject a blind hard-reset alias in a mentor review. |
| G04-5.1 | 5. Overlaps to avoid | Boundaries of local recovery — distinguish shared ref repair in 05–06, repository corruption/backups in 14 and service/data rollback outside Git. |

#### 05 Remotes Authentication and Distributed Collaboration

Purpose: reason about several repositories and update races without a hosting UI.
Requires 01–04. Basic authentication belongs here; account governance belongs in
08 and automation token policy in 11.

| Unit | Section | Planned leaf and observable outcome |
|---|---|---|
| G05-1.1 | 1. Repository relationships | Clone remote URLs and tracking configuration — build two clones and a bare remote, inspect remotes and distinguish a remote name from branch upstream configuration. |
| G05-1.2 | 1. Repository relationships | Fetch refspecs and stale remote-tracking references — predict which local names change, inspect FETCH_HEAD, prune deliberately and handle remote default-branch changes. |
| G05-1.3 | 1. Repository relationships | Multiple remotes forks and triangular workflows — choose fetch and push destinations explicitly and synchronize a contributor clone without confusing origin and upstream. |
| G05-2.1 | 2. Exchanging work | Push destinations and non-fast-forward rejection — publish a branch, read rejection output and preserve another clone's update instead of forcing past it. |
| G05-2.2 | 2. Exchanging work | Pull as an explicit integration choice — compare fetch plus merge/rebase and fast-forward-only policy, including divergent and dirty-state cases. |
| G05-2.3 | 2. Exchanging work | Coordinated rewritten updates and explicit leases — simulate two writers and background fetch; check expected remote IDs, explain lease limits and recover rejected updates. |
| G05-3.1 | 3. Access and diagnosis | HTTPS SSH credential helpers and identity — distinguish commit metadata from account access, verify the intended host, manage keys/tokens without embedding secrets and diagnose permission failures. |
| G05-3.2 | 3. Access and diagnosis | Transport and remote failures — separate network, authentication, authorization, branch policy and missing-object problems with scoped diagnostic evidence. |
| G05-4.1 | 4. Collaboration assessment | Resolve a two-clone integration race — preserve both developers' intended changes, verify graph/content and explain why stale ahead/behind counts are insufficient. |
| G05-5.1 | 5. Overlaps to avoid | Boundaries of remote collaboration — separate transport from GitHub review in 08, protocol internals in 12 and credential incidents in 14. |

#### 06 History Editing and Patch Workflows

Purpose: revise a change series deliberately after recovery and remote update
rules are understood. Requires 01–05. Reuse the recovery owner rather than
reprinting reset/reflog instructions in every example.

| Unit | Section | Planned leaf and observable outcome |
|---|---|---|
| G06-1.1 | 1. Replay and relocation | Rebase selected changes onto a new base — trace old/new commits, handle conflicts and skipped or empty changes and explain ours/theirs during replay. |
| G06-1.2 | 1. Replay and relocation | Rebase onto and preserve graph intent — choose the correct range with --onto, assess --rebase-merges and --update-refs and avoid relocating unrelated commits. |
| G06-2.1 | 2. Preparing a change series | Amend and interactive rebase — reword/reorder/drop/edit with a rescue reference and verify the resulting series before sharing. |
| G06-2.2 | 2. Preparing a change series | Split squash fixup and autosquash — separate a mixed commit, retain necessary explanation and run meaningful checks at revised boundaries. |
| G06-2.3 | 2. Preparing a change series | Review revised series with range-diff — compare versions, identify unintended semantic changes and explain why equal final trees do not settle review intent. |
| G06-3.1 | 3. Transferring changes | Cherry-pick and backport individual changes — handle dependencies, conflict/empty cases and provenance trailers without assuming the selected patch is independently correct. |
| G06-3.2 | 3. Transferring changes | Apply patches and preserve commit metadata with am — compare diff/apply with format-patch/am, inspect a patch series and rehearse contribution without sending real mail. |
| G06-4.1 | 4. History-editing assessment | Rework a reviewed feature and backport a fix — preserve behavior, document commit mappings and justify rewriting versus adding a follow-up commit. |
| G06-5.1 | 5. Overlaps to avoid | Boundaries of history editing — route local rescue to 04, publication races to 05, release policy to 09 and repository-wide filtering to 14. |

#### 07 History Investigation and Regression Diagnosis

Purpose: turn history into testable explanations. Requires 01–06. This is the
owner of historical query semantics; 02 owns basic pre-commit inspection.

| Unit | Section | Planned leaf and observable outcome |
|---|---|---|
| G07-1.1 | 1. Selecting history | Revision expressions ancestry and merge bases — resolve parent selectors and names, verify selected commits and distinguish first-parent from all-parent traversal. |
| G07-1.2 | 1. Selecting history | Two-dot and three-dot for log and diff — draw selected commit sets, compare endpoints versus merge-base differences and interpret a GitHub PR comparison. |
| G07-1.3 | 1. Selecting history | Path history renames and simplification — investigate a moved file with log --follow and full-history options; explain rename inference and absent-looking history. |
| G07-2.1 | 2. Locating a cause | Search history with grep pickaxe and blame — find a behavior change, inspect context, handle ignored formatting revisions and avoid using blame as fault attribution. |
| G07-2.2 | 2. Locating a cause | Manual and automated bisect — declare good/bad observations, implement a deterministic predicate, use skip correctly and restore state including current reset options. |
| G07-2.3 | 2. Locating a cause | Bisect limits and semantic regression — diagnose flaky tests, unbuildable commits, non-monotonic behavior and merge-sensitive regressions without declaring the first reported commit a complete explanation. |
| G07-3.1 | 3. Historical evidence | Diff algorithms context and review limits — compare whitespace/move views and merge diffs, inspect raw contents and explain what a convenient view hides. |
| G07-3.2 | 3. Historical evidence | Explain a regression through an evidence packet — connect selected commits, tests, release ranges and remaining uncertainty; distinguish correlation from the causal defect. |
| G07-4.1 | 4. Investigation assessment | Find and explain a seeded regression — reproduce a failure, automate the search, verify a repair and give a reasoned interview answer beyond naming bisect. |
| G07-5.1 | 5. Overlaps to avoid | Boundaries of history investigation — separate provenance interpretation from workflow records in 09, performance measurement in 13 and non-Git runtime debugging owners. |

#### 08 GitHub Contributions Review and Governance

Purpose: perform and review hosted collaboration while retaining the underlying
Git model. Requires 01–07. Hosted instructions name date, account/role conditions
and feature eligibility instead of presenting every capability as universally free.

| Unit | Section | Planned leaf and observable outcome |
|---|---|---|
| G08-1.1 | 1. Hosting and access | Repository creation visibility and collaborator access — choose an appropriate sandbox, connect a local project and inspect personal versus organization permission boundaries. |
| G08-1.2 | 1. Hosting and access | GitHub CLI and web workflows — authenticate with appropriate scope, inspect repositories/issues/PRs and explain which operations mutate a hosted resource. |
| G08-2.1 | 2. Contributor workflow | Issues branches forks and a first pull request — choose base/head correctly, produce a focused proposal and synchronize a fork without conflating PR creation with Git pull. |
| G08-2.2 | 2. Contributor workflow | Review a pull request and respond to feedback — inspect current-head changes and tests, distinguish comments from blocking requests and update the review after new commits. |
| G08-2.3 | 2. Contributor workflow | Merge squash rebase and update-branch choices — predict resulting history and effects on later contributions, close/revert a proposal and verify which revision was integrated. |
| G08-3.1 | 3. Governance and enforcement | Branch protections rulesets and bypass policy — reason about layered rules, force-push restrictions and eligibility; inspect enforcement evidence rather than assuming configuration proves it. |
| G08-3.2 | 3. Governance and enforcement | CODEOWNERS required reviews and status checks — configure ownership/review expectations, handle stale approval and required-check mistakes and distinguish routing from enforcement. |
| G08-3.3 | 3. Governance and enforcement | Merge queues and combined-change checks — explain why individually green PRs can fail together, follow queued revisions and connect required checks to the merge_group event owner in 11. |
| G08-4.1 | 4. Project communication | README contribution guides templates and repository community — write reproducible reports, document local checks and place license/security/conduct policy with appropriate owners. |
| G08-4.2 | 4. Project communication | Issues projects discussions and documentation publishing — choose a bounded planning/documentation workflow, connect issues to changes and explain Pages/Wiki visibility and publication boundaries. |
| G08-5.1 | 5. Review assessment | Review and integrate a realistic contributor change — diagnose base/head, missing checks and stale feedback; supply constructive comments and a justified merge decision. |
| G08-6.1 | 6. Overlaps to avoid | Boundaries of hosted collaboration — keep Git mechanics in 03–07, release decisions in 09, workflow execution in 11 and organizational project management outside this track. |

#### 09 Team History Policies and Release Maintenance

Purpose: choose workflows from delivery and maintenance needs, then maintain
release records. Requires 01–08. This is the owner of release-branch policy and
Git/GitHub release mechanics; compatibility vocabulary stays in IT Vocabulary.

| Unit | Section | Planned leaf and observable outcome |
|---|---|---|
| G09-1.1 | 1. Team policy | Trunk-based feature-branch and release-branch workflows — compare feedback speed, supported versions and integration risk; justify a policy rather than prescribe one universal graph. |
| G09-1.2 | 1. Team policy | Backport and hotfix maintenance across versions — track dependency and conflict differences, select supported targets and prevent duplicate or missing fixes. |
| G09-2.1 | 2. Version records | Lightweight annotated and signed tags — create/inspect/push/verify deliberately, explain mutable Git names and coordinate mistakes without silently moving a published version. |
| G09-2.2 | 2. Version records | Commit and tag signing trust decisions — use a declared SSH or GPG setup, verify signer expectations and distinguish cryptographic validity, platform badges and review quality. |
| G09-2.3 | 2. Version records | Describe versions and assemble release notes — select the correct range, use describe and changelog evidence, and reuse SemVer explanations while documenting project-specific compatibility policy. |
| G09-3.1 | 3. Published releases | GitHub releases assets and immutable releases — stage a draft, distinguish tag/source archive/build asset and inspect publication/attestation constraints without equating them to deployment. |
| G09-3.2 | 3. Published releases | Correct a bad release and communicate recovery — assess revert, replacement release and withdrawn artifact options; preserve consumer evidence and separate source recovery from external data rollback. |
| G09-4.1 | 4. Release assessment | Maintain two supported versions through a hotfix — justify policy, backport with tests, prepare a release packet and critique a misleading rollback claim. |
| G09-5.1 | 5. Overlaps to avoid | Boundaries of release maintenance — separate Git state, compatibility definitions, artifact verification, package publication and operational deployment responsibilities. |

#### 10 Repository Composition Portability and Large Assets

Purpose: manage project contents that exceed ordinary text editing. Requires
01–09. Monorepo application architecture belongs to the later Unified Architecture
track; this domain owns Git-level composition and byte transformations.

| Unit | Section | Planned leaf and observable outcome |
|---|---|---|
| G10-1.1 | 1. Portable contents | Attributes line endings encodings and normalization — choose repository policy, inspect effective attributes and avoid accidental mass rewrites across Windows/macOS/Linux. |
| G10-1.2 | 1. Portable contents | Case sensitivity permissions symlinks and filenames — reproduce platform-sensitive checkouts and distinguish what Git records from filesystem behavior. |
| G10-1.3 | 1. Portable contents | Diff merge and clean-smudge filters — trace stored versus checked-out contents, assess custom driver trust and diagnose a non-idempotent transformation. |
| G10-2.1 | 2. Repository composition | Submodules gitlinks and pinned dependencies — clone/init/update recursively, distinguish superproject and nested commits and verify required commits are obtainable. |
| G10-2.2 | 2. Repository composition | Change synchronize and remove submodules — update URLs/branches deliberately, handle nested dirty state and resolve a submodule pointer conflict with both repository histories. |
| G10-2.3 | 2. Repository composition | Compare submodules subtrees vendoring and one repository — select a composition policy, preserve attribution/history needs and explain operational trade-offs through a small integration. |
| G10-3.1 | 3. Binary and large-file workflows | Git LFS pointers content and retrieval — configure declared file types, commit attributes, inspect missing content and distinguish LFS availability from Git object availability. |
| G10-3.2 | 3. Binary and large-file workflows | LFS migration locking and storage trade-offs — rehearse migration, inspect binary collaboration/locking limits and plan hosting/storage costs without making unmeasured speed promises. |
| G10-4.1 | 4. Composition assessment | Repair a cross-platform repository onboarding failure — diagnose normalized text, a pinned submodule and an LFS pointer, then prove a fresh checkout can run the supplied project. |
| G10-5.1 | 5. Overlaps to avoid | Boundaries of repository composition — separate partial/sparse checkout in 13, repository history extraction in 14 and package/workspace/application architecture owners. |

#### 11 Git Automation and GitHub Actions

Purpose: automate repository decisions with explicit inputs, failure semantics and
trust boundaries. Requires 01–10. Teach the shell/YAML fragments used here in place;
this does not require the future DevOps or Linux tracks.

| Unit | Section | Planned leaf and observable outcome |
|---|---|---|
| G11-1.1 | 1. Reliable local automation | Script Git with stable output and explicit revisions — use porcelain/NUL output, quoting, exit status and verified refs; avoid parsing human-oriented log/status text. |
| G11-1.2 | 1. Reliable local automation | Hooks configuration invocation and enforcement limits — compare hook directories and configured hooks, inspect effective events and parallelism restrictions, and test a rejection without bypassing policy. |
| G11-1.3 | 1. Reliable local automation | Aliases templates and reproducible repository checks — build understandable helpers, distinguish shell aliases from Git commands and test the staged snapshot rather than unrelated working files. |
| G11-2.1 | 2. Actions execution model | Workflows events jobs steps and runners — create a complete minimal check, explain YAML/context syntax and identify the actual event revision and checked-out contents. |
| G11-2.2 | 2. Actions execution model | Pull-request push and merge-group checks — configure appropriate triggers, inspect required-check names and reproduce missing, skipped or wrongly scoped checks. |
| G11-2.3 | 2. Actions execution model | Matrices dependencies concurrency and reusable workflows — control fan-out and cancellation, share a bounded workflow and diagnose a failure without hiding it behind retries. |
| G11-3.1 | 3. Data and trust boundaries | Checkout depth caches artifacts and retention — fetch enough history/tags for the operation, distinguish a reusable cache from evidence and diagnose a version calculation from shallow history. |
| G11-3.2 | 3. Data and trust boundaries | Tokens secrets permissions and untrusted contributions — constrain credentials, avoid context/shell injection and privileged execution of untrusted PR contents, and pin external actions appropriately. |
| G11-3.3 | 3. Data and trust boundaries | Runners environments and release automation boundaries — compare hosted/self-hosted trust, reusable-workflow permissions and protected release steps; explain short-lived identity without implementing a cloud deployment. |
| G11-4.1 | 4. Hosted integrations | GitHub API pagination rate limits and webhooks — write a scoped read-only CLI/API report, handle failure/retry deliberately and validate a signed webhook against local fixtures. |
| G11-5.1 | 5. Automation assessment | Build and review a repository change gate — prove a failing change is rejected, identify the revision tested and critique an unsafe fork workflow using local and hosted evidence separately. |
| G11-6.1 | 6. Overlaps to avoid | Boundaries of repository automation — distinguish developer convenience from enforced rules, GitHub execution from general CI/CD architecture and workflow artifacts from release evidence in 09. |

#### 12 Git Objects References and Protocols

Purpose: explain mechanisms after their observable workflows are familiar.
Requires 01–11. Domain 01's model is only the orientation; this is the owner of
physical storage, plumbing and protocol reasoning.

| Unit | Section | Planned leaf and observable outcome |
|---|---|---|
| G12-1.1 | 1. Object storage | Blobs trees commits and annotated-tag objects — inspect and construct a tiny history with plumbing, explain content addressing and verify what does and does not contribute to an object ID. |
| G12-1.2 | 1. Object storage | Loose objects packs deltas and reachability — inspect an actual pack and distinguish logical snapshots from storage compression and graph reachability. |
| G12-1.3 | 1. Object storage | Object formats and interoperability — inspect SHA-1/SHA-256 repositories, avoid fixed ID-length assumptions and verify client/host format compatibility rather than infer it from hashing support. |
| G12-2.1 | 2. References and checkout state | Reference namespaces symbolic refs and transactions — inspect/update refs through supported APIs, use current refs commands and expected-old-value checks and avoid hand-editing storage files. |
| G12-2.2 | 2. References and checkout state | Ref storage files packed refs and reftable — compare storage approaches and supported migration/verification tools, including concurrency/worktree limits. |
| G12-2.3 | 2. References and checkout state | Index stages stat data and linked-worktree layout — inspect conflict entries and per-worktree metadata, distinguish cached filesystem information from committed objects and explain a .git file. |
| G12-3.1 | 3. Exchanging objects | Fetch and push negotiation over Git protocols — trace advertised refs, wanted/have objects and pack transfer in a local lab and distinguish transport authentication from object exchange. |
| G12-3.2 | 3. Exchanging objects | Shallow boundaries and promisor objects — explain missing ancestry versus deferred object retrieval and the server capabilities needed before applying the workflows in 13. |
| G12-4.1 | 4. Mechanism assessment | Construct and explain a commit without porcelain — inspect the resulting snapshot and graph, explain duplicate-content reuse and answer internals questions with observed objects. |
| G12-5.1 | 5. Overlaps to avoid | Boundaries of Git internals — route user workflows to their earlier owners, scale measurements to 13 and corruption/backup actions to 14; exclude implementing Git itself. |

#### 13 Repository Scale Performance and Maintenance

Purpose: select an optimization from measured repository costs. Requires 01–12.
Separate smaller working trees, smaller transfers and shorter history; none is a
universal substitute for the others.

| Unit | Section | Planned leaf and observable outcome |
|---|---|---|
| G13-1.1 | 1. Diagnose before optimizing | Measure repository shape and command cost — use size/object counts and Trace2, declare dataset/cache/platform conditions and locate filesystem, graph, transfer or server bottlenecks. |
| G13-1.2 | 1. Diagnose before optimizing | Read cloning and indexing case studies critically — reproduce a bounded comparison and explain why historical client/server timings are not universal present-day guarantees. |
| G13-2.1 | 2. Reduce the work requested | Sparse checkout cone mode and sparse index — configure a focused checkout, verify materialized/index contents and diagnose commands or tools that expand the working set. |
| G13-2.2 | 2. Reduce the work requested | Partial shallow and full clone trade-offs — measure initial and later work, test offline/history limitations and choose independently for developers and CI. |
| G13-2.3 | 2. Reduce the work requested | Filesystem monitor untracked cache and index tuning — inspect platform support, compare measured status cost and verify cache correctness assumptions and invalidation. |
| G13-3.1 | 3. Maintain repository structures | Commit graphs Bloom filters bitmaps and multi-pack indexes — connect each structure to the query it can accelerate and validate on a declared repository rather than enable everything blindly. |
| G13-3.2 | 3. Maintain repository structures | Scheduled maintenance garbage collection and pruning — inspect tasks and retention, distinguish repacking from deleting unreachable data and avoid racing writers or destroying recovery evidence. |
| G13-4.1 | 4. Scale assessment | Optimize a slow repository with a reproducible report — establish a baseline, change one cause, record cold/warm and later-fetch costs and justify remaining limitations. |
| G13-5.1 | 5. Overlaps to avoid | Boundaries of repository performance — distinguish Git tooling cost from application runtime, storage-policy decisions in 10 and incident recovery in 14. |

#### 14 Repository Security Backups and Migration

Purpose: operate on the repository's integrity and custody rather than only its
current checkout. Requires 01–13. Security topics here are Git/repository-specific;
application security and enterprise infrastructure remain outside the track.

| Unit | Section | Planned leaf and observable outcome |
|---|---|---|
| G14-1.1 | 1. Trust and exposure | Repository trust configuration and executable surfaces — inspect hooks, filters, ownership/safe.directory and submodule URLs; avoid broad trust overrides and separate downloaded content from approved execution. |
| G14-1.2 | 1. Trust and exposure | Credential exposure and history-removal decisions — revoke/rotate first, inventory forks/clones/caches and distinguish removing text from revoking access or proving all copies erased. |
| G14-2.1 | 2. Integrity and recovery copies | Verify object integrity and diagnose missing data — use fsck and healthy copies in a disposable corruption lab, preserve evidence and distinguish missing promisor content from repository damage. |
| G14-2.2 | 2. Integrity and recovery copies | Bundles mirrors backups and restore drills — specify what each copy includes, preserve configuration/untracked/LFS/submodule needs separately and prove a fresh restore works. |
| G14-3.1 | 3. History and repository migration | Plan and verify a filter-repo rewrite — analyze first, rehearse on a fresh disposable clone, map changed IDs/refs and inspect removed and retained content; explain why filter-branch is a poor default. |
| G14-3.2 | 3. History and repository migration | Split combine and move repositories — extract a bounded component history, preserve relevant branches/tags and coordinate remotes, access, pull-request records and consumers after a host move. |
| G14-3.3 | 3. History and repository migration | Coordinate cutover without reintroducing old history — choose freeze/rollback criteria, reconcile collaborators and verify both source refs and external content stores after migration. |
| G14-4.1 | 4. Operations assessment | Rehearse a leaked dummy credential and repository cutover — preserve a restorable copy, perform a scoped rewrite, verify fresh clones and write an honest incident/migration handoff. |
| G14-5.1 | 5. Overlaps to avoid | Boundaries of repository operations — route everyday recovery to 04, transport identity to 05, releases to 09 and organization-wide incident response to its actual owner. |

#### 15 Integration Expert Judgment and Mentor Practice

Purpose: assess substantial unfamiliar work and teach the reasoning. Requires
01–14. These leaves integrate existing owners rather than introduce another
collection of unrelated commands. Each project supplies a setup, acceptance
criteria, explained solution and review rubric.

| Unit | Section | Planned leaf and observable outcome |
|---|---|---|
| G15-1.1 | 1. Master projects | Integrate independent changes under an urgent release — solve a multi-clone/worktree feature-and-hotfix scenario with a semantic conflict, a backport and verified release contents. |
| G15-1.2 | 1. Master projects | Reproduce and repair a failing contributor pipeline — investigate stale refs, shallow history and an unsafe event choice, then deliver a justified change gate and evidence packet. |
| G15-1.3 | 1. Master projects | Migrate a growing repository without losing reproducibility — select a composition/asset/scale strategy, rehearse cutover and validate source and required external contents from a fresh environment. |
| G15-2.1 | 2. Expert judgment | Defend a team Git policy from constraints — compare integration, review, support and recovery alternatives; respond to changed constraints and identify when evidence cannot settle a preference. |
| G15-2.2 | 2. Expert judgment | Investigate an unfamiliar history and challenge claims — explain a graph, missing object, signature/review statement and performance claim using direct evidence and explicit limits. |
| G15-3.1 | 3. Mentoring and assessment | Teach state transitions and diagnose misconceptions — run a predict-observe-explain session, respond constructively to a learner's wrong model and design a targeted recovery exercise. |
| G15-3.2 | 3. Mentoring and assessment | Review repository practices and conduct a practical interview — assess real reasoning, provide actionable feedback and use worked answers/rubrics instead of command trivia. |
| G15-4.1 | 4. Overlaps to avoid | A continuing learning and ownership map — navigate precise canonical lessons, distinguish portable Git from service policy and plan later version deltas without duplicating the baseline. |

### Progression and assessment map

| Stage | Evidence required from this curriculum |
|---|---|
| Junior | 01–02: reproduce a first workflow, predict committed contents and explain file selection using actual comparisons. |
| Mid | 03–06: independently resolve an integration/recovery problem and exchange or revise a change without losing another writer's work. |
| Senior | 07–11: justify investigation, review, workflow, release and content-management choices with relevant tests and security/maintenance constraints. |
| Master | 15.1 projects: integrate several taught skills in unfamiliar scenarios; satisfy acceptance criteria and explain decisions and unsuccessful approaches. |
| Expert | 12–14 plus 15.2: reason from objects, refs, protocols, measurements and retention/custody limits; reject conclusions stronger than the evidence. |
| Mentor | Topic-specific Mentor notes throughout and 15.3: diagnose another person's model, adapt an exercise and provide review feedback that improves their next decision. |

The baseline reading order is domains 01 through 15, then section and leaf order
within each domain. Master projects deliberately follow the mechanisms and
operations domains because a complete solution can depend on those skills.
Every applied synthesis is a substantive lesson with explained criteria, likely
mistakes and reasoning, not an empty checklist. Interview reasoning appears in
the relevant assessments and the final practical interview; it is not a substitute
for executable work. All domains conclude with a real Overlaps to avoid leaf.

### Existing ownership and overlap decisions

The entire `README` tree was searched using `rg` for Git/review/recovery terms.
Broad `github` matches were mostly citations to language/tool repositories; a
second concept-focused search identified the existing vocabulary owner below.
No Git track, plan or lesson files were present before opening this log.

| Existing owner | Treatment in the proposed track |
|---|---|
| [Repository working-tree staging and commit vocabulary](<../ITVocabulary/11 Version Control Releases and Dependencies/sections/1. Change records/1.1. Repositories working trees staging commits and diffs.md>) | Read in full. Keep its definitions and small three-state illustration canonical. 01 gives only the contextual reminder needed for its first complete workflow; 02 adds deliberate selection, staged verification and reproducible mistakes. |
| [Integration and pull-request vocabulary](<../ITVocabulary/11 Version Control Releases and Dependencies/sections/2. Combining and reviewing work/2.1. Merges rebases conflicts and pull requests.md>) | Read in full. Reuse the distinction among graph operations, semantic conflicts, review and delivery. 03/06/08 teach actual operation lifecycles and policy choices. |
| [Version-control vocabulary boundaries](<../ITVocabulary/11 Version Control Releases and Dependencies/sections/6. Overlaps to avoid/6.1. Boundaries of collaboration and release vocabulary.md>) | Read in full. Preserve its distinction between source recovery and application/data rollback; do not rewrite this lesson during Git authorship. |
| [Version-control releases and dependencies index](<../ITVocabulary/11 Version Control Releases and Dependencies/README.md>) | Read in full. Provides precise conceptual owners for branch/remote, SemVer, support, dependency, signing/provenance and licensing vocabulary. Read those actual leaves before the corresponding implementation sections. |
| [JavaScript modules index](<../JavaScript/14 Modules and Code Organization/README.md>) | Existing navigation target discovered, not read as a prerequisite during proposal. Package loading and module semantics stay there; Git composition only manages repository content and references. |

Read additional relevant actual leaves before each section, including identity,
cryptographic vocabulary, artifact evidence and CI/delivery boundaries. A future
track may be mentioned as an ownership boundary, but never linked as an existing
prerequisite. No changes to JavaScript, TypeScript or IT Vocabulary are proposed.

### Research and compact source map

Consulted 2026-10-21. Entries describe the actual pages/excerpts inspected, not
a claim to have read whole books, every manual or an entire course. Primary
reference semantics take precedence over older teaching examples. Per-section
research, reproducible examples and current platform checks remain required at
implementation; the initial bibliography does not waive that work.

| Concepts or domains | Consulted source | Contribution and date/version | Corroboration or limitation |
|---|---|---|---|
| Baseline and current topics | [Git install](https://git-scm.com/install/) and [tagged 2.56 release notes](https://raw.githubusercontent.com/git/git/v2.56.0/Documentation/RelNotes/2.56.0.adoc) | Official current release listing; inspected user-facing changes, current stable topic placement and explicit experimental status. | 2.56.0 verified 2026-10-21; system binary is 2.53.0, so no current-version execution claim. |
| Coverage across the track | [Git reference](https://git-scm.com/docs) | Current command/guide categories exposed workflow, administration, patch and plumbing needs. | A reference taxonomy supplies coverage evidence, not a pedagogical order or proof every command needs a leaf. |
| Foundations, changes, release and internals coverage | [Pro Git contents](https://git-scm.com/book/en/v2) | Broad open-book scope across individual use, collaboration, tooling and internals. | Inspected contents, not the whole book. Second-edition origin is 2014 with online contributions; current manuals control release-sensitive behavior. |
| 04 reset mental model | [Pro Git Reset Demystified](https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified) | Inspected the three-state comparison, reset progression and path-specific distinction; useful causal teaching. | Its legacy checkout examples need current restore/switch counterparts; the index is not literally a tree object. Verify all operational cases in disposable repos. |
| 01, 12 and project outcomes | [MIT Missing Semester version control](https://missing.csail.mit.edu/2020/version-control/) | Inspected snapshot/graph explanations and the use of a model to explain commands; first-party course material. | 2020 source is a teaching input, not current platform policy. Do not generalize its SHA-1/branch-name examples or condensed pseudocode to all current formats. |
| Broad coverage cross-check | [roadmap.sh original Git and GitHub map PDF](https://roadmap.sh/pdfs/roadmaps/git-github.pdf) | Read the one-page topic map: local work, review, releases, hooks, hosted automation and advanced tooling. | The HTML page did not expose its diagram; PDF text was available. The map includes filter-branch/force-push topics that need correction and context; do not copy it as a recommended sequence. |
| 01–05, 12 mental model | [Julia Evans Inside .git](https://jvns.ca/blog/2024/01/26/inside-git/) | Original reproducible repository exploration; inspected object, reference, index and stale remote-tracking examples. Published 2024-01-26. | Loose-files illustration is not a universal storage layout; compare packed refs/reftable and current data-model guide. Avoid universal tag-reflog assumptions. |
| 01–07 learner confusion | [Julia Evans Confusing git terminology](https://jvns.ca/blog/2023/11/01/confusing-git-terminology/) | Original learner-question investigation; inspected index/cached wording, reset/revert/restore and remote-status ambiguities. Published 2023-11-01. | Useful for choosing contrasting examples; not authority that similarly named flags behave alike. Current references and experiments decide semantics. |
| 01 and 12 official model | [A data model for Git](https://jvns.ca/blog/2026/01/08/a-data-model-for-git/) and [gitdatamodel](https://git-scm.com/docs/gitdatamodel) | First-hand account of documentation work plus the resulting official object/ref/index/reflog explanation, inspected 2026-10-21. | Prefer the current published manual to the blog's then-future publication expectation. Manual grounds the model; author account explains the teaching gap. |
| 03 worktrees | [git-worktree](https://git-scm.com/docs/git-worktree) | Inspected lifecycle/options and shared versus per-worktree refs/configuration; supports the hotfix-with-unfinished-work scenario. | Operational reference, not evidence that every build tool supports concurrent checkouts. Test actual fixture and settings. |
| 05, 06 shared-history changes | [git-push](https://git-scm.com/docs/git-push) | Inspected explicit expected-value leases, background-fetch caveat and force-if-includes conditions. | Primary semantics anchor the proposed race experiment; a lease is not review or universal loss prevention. |
| 05 real practitioner question | [Stack Overflow force-with-lease defaults discussion](https://stackoverflow.com/questions/30542491/push-force-with-lease-by-default) | Read the question and relevant updated answer/comment excerpts about defaults, editor background fetch and later safeguards; traced the claim to Git documentation. | Community question discovery only. Current push manual, rather than votes/accepted status, validates behavior; an alias alone cannot establish intended remote state. |
| 06 replay and conflicts | [git-rebase](https://git-scm.com/docs/git-rebase) | Inspected replay roles, conflict sides, rerere, strategy distinctions and section structure for range/interactive work. | Explains why everyday ownership words mislead in rebase; verify precise flag combinations in the target binary. |
| 04, 13 recovery limits | [git-reflog](https://git-scm.com/docs/git-reflog) | Inspected local ref logging and distinct configurable reachable/unreachable entry expiration controls. | Defaults are not a guaranteed retention period for every object or checkout edit. Corroborate with current gc behavior in the actual retention unit. |
| 04 misconception candidate rejected | [DEV reflog recovery article](https://dev.to/saboorajat/git-reflog-the-undo-button-you-didnt-know-you-had-5078) | Read recovery examples and alias/retention claims. The immediate regret scenario is a useful exercise prompt. | Reject the blind hard-reset undo alias and fixed-time recovery promise. Reflog reference selection can be wrong and hard reset overwrites new edits; official reflog controls distinguish expiration cases. No technical recommendation is sourced solely to this article. |
| 08 governance | [GitHub rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets) | Inspected rules, layering/bypass concepts and plan/visibility requirements. | Service policy snapshot 2026-10-21; eligibility and configuration must be verified again at authorship, with a labeled packet if no live access. |
| 08, 11 integration gates | [GitHub merge queue](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue) | Inspected queue eligibility, combined revisions and required merge_group-triggered checks. | Does not imply access in a personal sandbox. Keep local integration tests distinct from actual service queue runs. |
| 09 release custody | [GitHub immutable releases](https://docs.github.com/en/code-security/concepts/supply-chain-security/immutable-releases) | Inspected release asset/tag protection and release attestation boundaries. | Service snapshot 2026-10-21; a protected release record still does not prove deployment or program correctness. |
| 10 composition | [gitsubmodules](https://git-scm.com/docs/gitsubmodules) | Inspected gitlink, .gitmodules, independent storage and lifecycle distinctions. | Supports nested repository fixtures; it does not decide whether a project's architecture should use submodules. |
| 10 assets | [Git LFS official site](https://git-lfs.com/) | Inspected 3.8.0 listing, pointer model, tracked attributes and distinction between new tracking policy and conversion of prior history. | Extension and external object store are separate dependencies. Recheck version, hosting eligibility and runnable local/LFS integration before claiming checks pass. |
| 11 hooks | [git-hook](https://git-scm.com/docs/git-hook) | Inspected named hook configuration, event ordering/listing, parallel opt-in and events that remain serial. | Current configured hooks supplement directory hooks; older installed Git does not verify new interface behavior. |
| 11 hosted workflows | [GitHub workflow concepts](https://docs.github.com/en/actions/concepts/workflows-and-actions/workflows) and [secure use reference](https://docs.github.com/en/actions/reference/security/secure-use) | Inspected workflow revision selection, jobs/events, minimum permissions, injection/secret exposure and privileged untrusted-code risks. | Service-specific claims need live runs or explicit inspection-only labels; a YAML parse does not prove a hosted check ran. |
| 12 formats and refs | [git-init](https://git-scm.com/docs/git-init) and [git-refs](https://git-scm.com/docs/git-refs) | Inspected object/ref-format choices, supported ref operations and current migration constraints. | Do not repeat an old experimental label from archived init docs or infer remote format interoperability. Migration needs exclusive control and a rehearsed compatible fixture. |
| 13 scale evidence | [GitHub cloning behavior study](https://github.blog/open-source/git/git-clone-a-data-driven-study-on-cloning-behaviors/) | Inspected declared repositories, clone variants, client/server measurements and later-fetch trade-offs; published 2020-12-22, updated 2021-03-12. | First-hand engineering experiment supplies measurement design, not present-day universal speed multipliers. Current labs must measure their own data and server capabilities. |
| 14 history filtering | [filter-repo project](https://github.com/newren/git-filter-repo) and [Git filter-branch warning](https://git-scm.com/docs/git-filter-branch) | Inspected original tool scope, requirements/example and Git's own safety/performance warning; anchors the choice of filtering vehicle. | External tool version must be pinned/verified at use. Teaching extraction does not authorize rewriting the actual Tutorials history or a live remote. |
| 14 exposed secrets | [GitHub sensitive-data removal](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository) | Inspected revocation/rotation first, coordinated copies and rewrite side effects. | Synthetic dummy material only in labs; neither deleting a line nor rewriting one repository revokes a credential or erases all copies. |

Additional searches considered Medium/dev.to recovery explanations, specialist
learning paths and other engineering case studies. Only material actually opened
and evaluated is selected above; search snippets and inaccessible/full-course
content are not represented as read. The DEV example was read specifically to
evaluate a potential misconception, then rejected as a procedural authority.
The Stack Overflow discussion exposed a real question; primary docs settle its
technical claim. Relevant primary sources, original teaching and first-hand
engineering evidence together justify the domain boundaries and learning order.

### Execution and verification contract after approval

1. Record the actual user approval of revision 1 (or a new revision if changed),
   append an execution session and commit its opening. Do not edit this closed
   proposal session when execution begins.
2. Implement G01-1.1, then remaining rows in order. Include the first track/domain
   indexes and root link only with actual published content. Preserve all stable
   existing track paths. There are no lesson/index changes authorized yet.
3. Before each section, search the entire repository for overlap, read actual
   conceptual owners, select an appropriate JavaScript reference, refine research
   and record source/ownership decisions in the active execution entry.
4. For each leaf, run complete examples including intentional failure and repair
   in declared disposable environments; record versions, exact commands and actual
   outputs. Compare graph/content assertions rather than generated timestamps or
   fixed hashes. Protect the parent repository and unrelated working files.
5. Distinguish executed local Git labs, locally verified shell/program fixtures,
   static YAML/document inspection, and live GitHub/LFS/signing checks. Do not
   report a mocked event as a real service integration. If required access or a
   supported runtime is unavailable, preserve the source, record the precise
   outstanding check and limitation, and do not claim full completion.
6. Review comprehension, promises, prerequisites, realistic good/bad practices,
   correctness, performance limits and mentor depth. Check required numbered
   sections and existing precise cross-links, including synthesis/boundary leaves.
7. Verify numbering, filenames, changed relative links and any affected inbound
   links; update ancestor indexes truthfully. Immediately update the active LOG's
   Done/Files/Links/Verification and commit only that unit before advancing.
8. Final closure audits all approved outcomes, current-baseline navigation and
   per-unit evidence/commit history. No pushing, real mail, actual service release
   publication or unrelated track work is included in authorship authorization.

### Pending work and recovery pointer

- Phase: PROPOSAL; curriculum revision 1 complete as a planning artifact.
- Approval: PENDING. No execution unit, lesson or published index is complete.
- Remaining implementation: every unit G01-1.1 through G15-4.1 in the tables above.
- Next authorized action now: present the complete domain/section overview and
  this log, then await explicit user approval or curriculum edits. A later
  continue request alone cannot bypass this pending gate.
