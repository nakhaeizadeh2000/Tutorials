# IT Vocabulary track log

## [2026-10-18 09:53] Session 1 — Propose the IT Vocabulary curriculum

- Status: PARTIAL
- Context read: complete root PROMPT.md, AGENTS.md, README.md, .tutorial/WORKFLOW.md,
  .tutorial/QUALITY.md and .codex/skills/tutorial/SKILL.md. Read JavaScript's track
  and Fundamentals indexes and the complete Engines runtimes and hosts, Holes vs
  undefined and Promise chaining reference leaves. Also read the TypeScript Type
  System Core index, JavaScript JSON grammar leaf and Performance index for overlap
  boundaries. This is a new track: its prior LOG, track/domain indexes and lessons
  are absent. Initial working tree and staging were clean.
- Plan: Phase: PROPOSAL. Research and record the complete ordered IT Vocabulary
  curriculum revision 1, including outcomes, section/leaf units, dependencies,
  boundaries, source evaluation and assessments. Present it to the user, close
  PARTIAL and await approval. No lesson authorship or published index is authorized.
- Approval: pending; curriculum revision 1. The user selected IT Vocabulary and
  said "lets go" before this proposal existed; this authorizes proposal work.
  The user's section-count question was answered: domains, sections and leaves
  have no fixed count, minimum, maximum or target.
- Done: verified the new-track context; read policy and calibration references;
  researched and recorded curriculum revision 1 with 18 ordered domains, 123
  sections and 191 planned teaching leaves, each with an outcome. Recorded
  prerequisites, progression, practical assessments, ownership boundaries,
  source evaluation, access limitations and the post-approval execution route.
- Decisions: use English, assume a reader who can use a computer and read simple
  English but has no networking, Linux, Git, database or framework prerequisites.
  Teach meaning, distinctions, context and communication; implementation mastery
  remains with the subject tracks. Used no delegation. Domain section counts
  range from 5 to 9 because of their teaching boundaries; those counts establish
  no minimum, maximum or preferred shape for this or another track. Source map
  and complete curriculum are recorded below as the durable approval reference.
- Files touched: created README/ITVocabulary/LOG.md only.
- Links fixed / added: 12 relative reference/ownership links added in this log;
  all targets exist. Root IT Vocabulary entry remains Planned; no track/domain
  README or lesson was authored before curriculum approval.
- Verification: git rev-parse --show-toplevel confirmed the repository; git status
  --short and git diff --cached --name-only produced no entries; absence check
  confirmed README/ITVocabulary did not exist. A Python proposal-structure check
  initially failed to launch because `python` is absent (exit 127); reran using
  `python3` successfully (exit 0). It checked contiguous D01–D18 domain IDs,
  contiguous section/leaf IDs, no duplicate leaf IDs, at least one leaf in every
  section, an ending Overlaps to avoid section in every domain, all 12 local
  links, pending approval metadata and LOG.md as the track's sole file. Totals:
  18 domains, 123 sections, 191 leaves. `git diff --check` passed; scope inspection
  found only this LOG modified and no staged unrelated changes. Root/policy diffs
  were empty. Read-only research and proposal checks are not lesson verification;
  no lesson examples have been authored or run. Opening commit: d02432b2.
- Next steps: Phase: PROPOSAL, curriculum revision 1, awaiting user approval or
  requested edits to the complete plan below. Present the domain/section list and
  durable leaf-level plan. After explicit approval, open a new execution session
  carrying this revision and approval evidence, then implement the whole approved
  scope with the per-unit verification/logging/commit loop. Do not infer approval
  from the earlier "lets go" or begin lessons while this gate remains pending.

### Curriculum revision 1 — proposal pending approval

This is the complete proposed scope, not a list of published lessons. Stable unit
IDs below identify the approved work if the user accepts this revision. These
unchecked proposal boxes are a snapshot; this block becomes immutable when closed.
New execution entries record verified completion using these IDs. Section numbers
restart within each domain; leaf numbers
restart within each section. For example, D05.S02.L01 becomes section 2, leaf 2.1
in domain 05. Exact sanitized filenames follow the repository convention at
implementation time; these identifiers preserve scope if wording is refined.

#### Audience, scope and baseline

The reader can use a computer and read simple English. Prior JavaScript or
TypeScript study is helpful but not required; this track introduces the minimum
context for its own examples. It prepares developers, support engineers and
technical collaborators to understand documentation and discussions and ask
precise questions. Its advanced outcome is accurate interpretation and judgment
about terminology and claims, rather than mastery of every named technology.

Teach definitions through situations, contrasts, artifacts and consequences.
Expand an unfamiliar acronym, explain what its expansion means, show its use in a
sentence and distinguish neighboring terms. Explain pronunciation only where it
helps communication, identifying regional/team variation. An acronym's expansion
alone is never the lesson. Workplace slang is taught for recognition with clear
alternatives; the track does not encourage insulting or exclusionary language.

Verification date: **2026-10-18**, using the user's Asia/Tehran date. Vocabulary has
no single runtime or release baseline. Named reference baselines consulted include
BCP 14's RFC 8174 (2017), HTTP semantics RFC 9110 (2022), Semantic Versioning 2.0.0,
Scrum Guide 2020, ISTQB CTFL syllabus 4.0.1 (2024-09-15), OWASP Top 10:2025 and
PostgreSQL's retrieved version 18 Concepts page. These establish scoped terminology,
not a claim that all publications or tools share a 2026 edition. NIST SP 800-145
(2011) supplies foundational cloud terminology; current CNCF material adds later
usage. Product-specific terms are labeled. Draft/proposed features and marketing
claims are distinguished from standardized, implemented behavior. Recheck changing
sources at each approved section; use current stable tools for any executable
example and record the actual versions and runs then.

All relevant established terminology, including HTTP/3, modern identity language,
software supply chain terminology and generative AI, is integrated in its topic.
Future publication updates use focused delta domains only when needed. No old
baseline is intentionally taught first for a later catch-up module.

#### Progression, assessments and boundaries

| Stage | Main route | Observable evidence |
|---|---|---|
| Junior | D01–D04, then D05–D07 | Explain a term plainly; classify a file, tool or message; annotate a small request without unexplained acronyms. |
| Mid | D05–D08 and D11–D12 | Distinguish similar terms, follow a request/data path and write a reproducible issue with useful context. |
| Senior | D09–D16 | Replace vague design, security, delivery and reliability claims with scoped statements and appropriate evidence questions. |
| Master | D18 scenarios using D01–D17 | Integrate vocabulary across an unfamiliar architecture proposal, change/release note and incident narrative. |
| Expert | Source interpretation throughout; D10, D13, D15, D17–D18 | Separate normative meanings from conventions; identify limitations, overloaded words and claims not established by the artifact. |
| Mentor | Topic-specific Mentor notes throughout; D16 and D18 | Diagnose another reader's misconception, offer a clear explanation and review a shared glossary without rewarding acronym memorization. |

The stage rows overlap deliberately. A label is evidence of a learning outcome,
not a claim that knowing a term qualifies someone as an expert engineer.

Practical work includes annotated screenshots/text artifacts, small file/byte
observations, simple numerical examples, request/response transcripts, configuration
excerpts, issue reports, pull-request discussions, dashboards and design proposals.
Constructed examples are labeled; fabricated incidents are never described as
observed production events. Every exercise supplies an explained solution or
assessment criteria. Runnable examples declare dependencies, files, commands and
observed outcomes. Static reading exercises need no paid cloud account, deployed
backend or unexplained installation. Introduce any required command before use.

Full language semantics stay in JavaScript and TypeScript. Full Git workflows,
algorithm implementations, database administration/modeling, API implementation,
framework mechanics, system design, operating systems, deployment and security
engineering stay in their owner tracks. Planned tracks may be named as future
study but never linked as existing content. This vocabulary track must remain
understandable before those tracks; it explains a term's minimum conceptual model
instead of sending a beginner to an unavailable prerequisite.

Each domain closes with a substantive **Overlaps to avoid** leaf. Each teaching
leaf, including synthesis and overlaps, includes distinct numbered **Common
confusion**, **Performance note** and **Mentor note** sections in that order,
followed by **Cross-links** when useful. A communication-only topic explains its
lack of direct runtime effect and its relevant indirect consequences. Meaningful
interview reasoning appears in applied/synthesis leaves where it tests explanation
and diagnosis; there is no repeated interview template or fixed section count.

#### JavaScript calibration and initial ownership map

Read the complete reference leaves before this proposal:

- [Engines runtimes and hosts](<../JavaScript/01 Fundamentals and Mental Model/sections/1. What JavaScript is/1.2. Engines runtimes and hosts V8 SpiderMonkey JavaScriptCore Node Deno Bun.md>): transfer neighboring-term contrasts and attribution questions to D03.
- [Holes vs undefined](<../JavaScript/08 Arrays/sections/2. Holes sparsity and length/2.1. Holes vs undefined sparse arrays and empty slots.md>): transfer small distinguishing observations and comparison tables, without copying engine/performance claims.
- [Promise chaining](<../JavaScript/13 Async Event Loop and Promises/sections/3. Promises core/3.2. Chaining then catch finally and error propagation.md>): transfer step-by-step artifact tracing and failure diagnosis to D07, D10 and D12; do not reuse its legacy unhandled-rejection advice.
- [JSON grammar](<../JavaScript/16 JSON Serialization and Data Exchange/sections/1. JSON as a format/1.1. JSON grammar vs JavaScript literals history and the JSON superset.md>): D02/D07 explain representation and payload terminology; this existing owner retains JavaScript parsing/stringification mechanics. Its historical/specification claims require independent verification before reuse.

Also read JavaScript's track, Fundamentals and Performance indexes and TypeScript's
Type System Core index. An initial broad repository `rg` query produced more
matches than useful and truncated output; narrow discovery identified the owners
above. No claim is made to have reviewed every matched lesson. Repeat focused
repository searches and read relevant matches before each approved section.

| Concept introduced here | Existing detailed owner and intended boundary |
|---|---|
| Language, engine and runtime | Engines runtimes and hosts linked above; D03 adds cross-platform terminology, not a second JavaScript engine lesson. |
| Source, module and package | [JavaScript modules](<../JavaScript/14 Modules and Code Organization/README.md>); D03/D11 explain tool and artifact boundaries without repeating module resolution. |
| Static/dynamic types and structural typing | [TypeScript core](<../TypeScript/02 The Type System Core/README.md>); D03 identifies checking time and terminology without reproducing variance/assignability instruction. |
| Concurrency and asynchronous execution | [JavaScript async](<../JavaScript/13 Async Event Loop and Promises/README.md>); D10 owns general vocabulary, while language scheduling details stay there. |
| Serialization and JSON | [JavaScript serialization](<../JavaScript/16 JSON Serialization and Data Exchange/README.md>); D07 teaches format versus transport and schema meanings. |
| Allocation, GC and memory leaks | [JavaScript memory](<../JavaScript/18 Memory Management and GC/README.md>); D04 supplies general process/resource vocabulary. |
| Benchmark and profile terminology | [JavaScript performance](<../JavaScript/19 Performance and JIT Mindset/README.md>); D15 adds service-level measurements, not copied V8 optimization guidance. |
| Errors, assertions and test vocabulary | [JavaScript errors](<../JavaScript/15 Error Handling and Debugging/README.md>) and [testing](<../JavaScript/20 Testing and Tooling Essentials/README.md>); D12 distinguishes scope/evidence and issue-report language. |

#### Consulted source map and evaluation

The entries below record actual consulted content: course/topic structures,
selected explanatory sections and focused excerpts. They do not claim full-book,
full-site or full-syllabus review. All were consulted on 2026-10-18. Discovery
searches were topic-based and unrestricted across publishers; a publication's
platform or ranking was not treated as authority. Sources serve different roles.
Technical semantics are checked against relevant primary evidence during authorship.

| Domain or question | Source URL | Contribution and evaluation | Version/date and corroboration or limit |
|---|---|---|---|
| Overall prerequisite coverage | https://cs50.harvard.edu/x/ | Original course topic sequence flags abstraction, representation, algorithms, memory, data and web as distinct learning contexts. | Retrieved CS50x 2026 page; curriculum input, not a syllabus to copy or require. |
| Breadth cross-check | https://roadmap.sh/pdfs/roadmaps/computer-science.pdf | Read the map's topic inventory; identifies OS/networking/security and complexity gaps in a web-only glossary. | Retrieved map; discovery input only; no implementation depth imported wholesale. |
| Web vocabulary discovery | https://developer.mozilla.org/en-US/docs/Glossary | Read its scope/index description; use it to discover neighboring web terms. | Page modified 2025-07-11; specific definitions still need their own reading and primary corroboration. |
| D01 and D16 abbreviations | https://developers.google.com/style/abbreviations | Audience-sensitive expansion and pronunciation-based articles; spelling out letters is not sufficient explanation. | Retrieved living guide; editorial guidance, not universal pronunciation law. |
| D01 and D16 jargon | https://developers.google.com/style/jargon | Concrete ambiguity examples and criteria for defining/replacing jargon. | Page updated 2025-06-25; adapt to reader comprehension rather than copying every Google house-style rule. |
| D01 standards language | https://www.rfc-editor.org/rfc/rfc8174.html | Read capitalization clarification and scope of BCP 14 keyword interpretation. | May 2017; not every ordinary English “must” invokes normative RFC semantics. Read RFC 2119 definitions alongside it when implementing that unit. |
| Context-dependent definitions | https://csrc.nist.gov/glossary | Read glossary caveat: definitions depend on their source publication and can vary. | Retrieved glossary reports 2026-08-26 terms update; use originating NIST documents for actual definitions. |
| D05 practical learning sequence | https://jvns.ca/blog/2018/03/05/things-ive-learned-networking/ | First-person account connects packets, DNS, HTTP, TLS and small diagnostic questions. | 2018 original article; pedagogical experience, not a current command/security prescription. RFC/manual evidence anchors behavior. |
| D07 protocols and messages | https://www.rfc-editor.org/rfc/rfc9110.html | Read scope and terminology structure for resources, representations, clients, servers, intermediaries and messages. | June 2022; HTTP shared semantics, not HTTP/3 wire implementation or a REST definition. |
| D08 relational vocabulary | https://www.postgresql.org/docs/current/tutorial-concepts.html | Read table/row/column and relational DBMS explanation as a concrete data-model example. | Retrieved version 18; SQL/vendor usage distinguished from every database product. |
| D04 and D10 processes/threads | https://man7.org/linux/man-pages/man7/pthreads.7.html | Read DESCRIPTION and thread/process resource distinctions. | Retrieved Linux/POSIX manual; historical LinuxThreads exceptions are not current universal behavior. |
| D06 accessibility | https://www.w3.org/WAI/fundamentals/accessibility-intro/ | Read definition and affected user contexts; ensures accessibility is not reduced to visual polish. | Living WAI educational source; specific conformance claims require actual WCAG criteria later. |
| D09 and D16 shared terms | https://martinfowler.com/bliki/UbiquitousLanguage.html | Original practitioner explanation of evolving a rigorous shared language with domain experts. | 2006-10-31; conceptual teaching input; not a full DDD course or universally mandated vocabulary. |
| D11 version language | https://semver.org/spec/v2.0.0.html | Read summary/public API requirements; distinguishes compatibility promises from arbitrary version labels. | SemVer 2.0.0; only applies when a project adopts that contract. |
| D11 licensing vocabulary | https://opensource.org/osd | Read definition criteria, especially source visibility versus rights to redistribute and derive. | Page modified 2024-02-16; vocabulary scope only, not personalized license/compliance advice. |
| D12 testing distinctions | https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf | Read topic structure and test level/type/confirmation/regression excerpts, including pp. 28–30. | 4.0.1, 2024-09-15; terminology input, not exam prep; team naming differences remain explicit. |
| D13 security awareness | https://top10.owasp.org/2025/ | Read release/introduction and category inventory; adds supply-chain, access-control and exceptional-condition terminology. | Top 10:2025; awareness taxonomy, not an exhaustive security standard or implementation checklist. |
| D13 confusion discovery | https://stackoverflow.com/questions/6556522/authentication-versus-authorization/6556548 | Read original question asking whether “auth” means authentication or authorization; useful evidence of ambiguity. | Original 2011 discussion, question edited 2023; do not use accepted answer or votes as technical authority. Primary identity sources are required during authorship. |
| D14 cloud categories | https://csrc.nist.gov/pubs/sp/800/145/final | Read publication abstract and keywords to distinguish service/deployment models. | SP 800-145 final, September 2011; foundational taxonomy, not a modern vendor feature catalog. |
| D14 cloud-native coverage | https://glossary.cncf.io/ | Read purpose and term inventory; discover containers, orchestration, IaC, services and platform terms in vendor-neutral contexts. | Living community project; individual entries need evaluation, not automatic endorsement. |
| D14 CD ambiguity | https://glossary.cncf.io/continuous-delivery/ and https://glossary.cncf.io/continuous-deployment/ | Read both explanations; same abbreviation denotes different practices. | Entries modified 2024-02-09 and 2023-11-30. The delivery entry's acceptance-environment/automation framing is narrower than Fowler's deployability framing; do not teach it as a universal requirement. |
| D14 CD corroboration | https://martinfowler.com/bliki/ContinuousDelivery.html | Consulted discussion contrasting delivery capability and deployment, including real user-feedback context. | Original practitioner account with Jez Humble's input; refine distinction against its complete relevant passage before lesson authorship. |
| D15 service-level vocabulary | https://sre.google/sre-book/service-level-objectives/ | Read SLI/SLO/SLA and measurement aggregation examples; separates an observation, objective and agreement. | Original SRE book, 2016; experience-based guidance, measurement scope remains essential. |
| D15 telemetry | https://opentelemetry.io/docs/concepts/signals/ | Read signal descriptions, trace/metric/log categories and development-status caveats. | Page modified 2026-03-10; concept names do not imply equal implementation stability across signals/languages. |
| D16 work process language | https://agilemanifesto.org/ and https://scrumguides.org/scrum-guide.html | Read manifesto values and selected Scrum role/Done passages; distinguish values from framework terms. | Manifesto 2001; Scrum Guide 2020; team conventions are not universal job definitions. |
| D17 AI vocabulary | https://developers.google.com/machine-learning/glossary/generative | Read selected entries and scope for agents, tuning, context and evaluation; distinguish meanings across AI subfields. | Living glossary; avoid anthropomorphic language and unqualified generalizations. Source names neither establish model capability nor guarantee accuracy. |
| D01 learner experience | https://dev.to/michael/spell-it-out-spelling-out-tech-acronyms-abbreviations-and-word-shortenings-4j41 | Read author's first-person reason for creating an acronym resource and selected suggestions; supports low-friction lookup and question asking. | 2018-01-11; original experience, not a complete/current technical glossary. Corroborated editorially with Google's guide. |

Access limitations: Julia Evans's networking-zine PDF could not be fetched by the
web reader because it exceeded its content limit; it was not read. The original
networking article above was used instead. The Pivotal Glossary on Medium
(https://medium.com/built-to-adapt/the-pivotal-glossary-93b8be9de916) returned an
internal retrieval error; no content from its search snippet is treated as read
evidence. Fowler and the original Agile/Scrum documents provide accessible
alternatives for shared work language. No source is included merely to satisfy a
publisher quota. New questions, specific standards and implementation-sensitive
claims require renewed domain/section research during the approved execution.

### Complete ordered domain and unit plan

All units below are pending. A domain's prerequisites refer to concepts introduced
earlier in this track; external subject tracks are deeper-study destinations.

### D01 — Reading and Using Technical Language

Purpose: give the reader a way to understand unfamiliar vocabulary without
pretending that memorized expansions prove understanding. No technical prerequisites.

#### D01.S01 — Words in context

- [ ] D01.S01.L01 **Terms jargon abbreviations and acronyms** — distinguish a term, expansion and usable explanation with realistic sentences.
- [ ] D01.S01.L02 **Overloaded words and ambiguous abbreviations** — disambiguate client, service, host, environment, CD and token from surrounding evidence.
#### D01.S02 — Reading technical documents

- [ ] D01.S02.L01 **Guides references specifications and release notes** — choose the right document and separate examples, requirements and commentary.
- [ ] D01.S02.L02 **Requirements guarantees defaults and support status** — interpret MUST/SHOULD/MAY, optional, deprecated, obsolete, preview and stable with scope.
#### D01.S03 — Speaking and asking precisely

- [ ] D01.S03.L01 **Pronunciation naming and useful clarification questions** — expand unfamiliar terms, handle pronunciation variation and ask for the relevant meaning.
#### D01.S04 — Applied reading and review

- [ ] D01.S04.L01 **Turn a jargon-heavy message into a testable statement** — rewrite vague claims while preserving conditions and uncertainty; include explained interview reasoning.
#### D01.S05 — Overlaps to avoid

- [ ] D01.S05.L01 **Boundaries and a personal vocabulary record** — maintain meaning/context/source notes and route deeper concepts to their owners.

### D02 — Computers Data Representation and Units

Purpose: connect abstract numbers and hardware labels to the resources they
describe. Depends on D01; avoids hardware procurement and numerical internals courses.

#### D02.S01 — Physical and logical components

- [ ] D02.S01.L01 **Hardware software firmware and drivers** — identify what changes at boot, installation and device access.
- [ ] D02.S01.L02 **CPU cores GPU RAM and persistent storage** — interpret resource descriptions without equating clock rate or capacity with overall speed.
#### D02.S02 — Data representation

- [ ] D02.S02.L01 **Bits bytes binary hexadecimal and machine words** — read common representations and explain that a bit pattern needs an interpretation.
- [ ] D02.S02.L02 **Text characters Unicode and encodings** — distinguish a visible character, code point, code unit and encoded byte through a small observation.
#### D02.S03 — Measuring quantities

- [ ] D02.S03.L01 **Decimal and binary units rates and durations** — calculate B/b, MB/MiB, Mbps/MB per second and ms/us/ns in stated conditions.
#### D02.S04 — Representing and preserving information

- [ ] D02.S04.L01 **Formats compression checksums and metadata** — distinguish representation, size reduction and accidental-corruption detection without promising security.
#### D02.S05 — Applied interpretation

- [ ] D02.S05.L01 **Read a machine specification and transfer estimate** — separate capacity, speed, rate and bottleneck assumptions; diagnose misleading comparisons.
#### D02.S06 — Overlaps to avoid

- [ ] D02.S06.L01 **Boundaries of hardware and representation vocabulary** — route numerical algorithms, JS string mechanics and cryptography to their detailed owners.

### D03 — Software Execution and Developer Tools

Purpose: explain what each tool does and what its output proves. Depends on D01–D02.

#### D03.S01 — Software categories

- [ ] D03.S01.L01 **Programs applications libraries frameworks and SDKs** — classify responsibilities and identify where control and APIs come from.
- [ ] D03.S01.L02 **Source code executables bytecode and artifacts** — trace input/output forms without calling every artifact a runnable binary.
#### D03.S02 — From source to execution

- [ ] D03.S02.L01 **Compiling interpreting transpiling and JIT** — compare execution stages and avoid treating implementation techniques as mutually exclusive language categories.
- [ ] D03.S02.L02 **Languages engines runtimes hosts and virtual machines** — locate capabilities in the correct layer, linking existing JavaScript mechanics.
#### D03.S03 — Tools and interfaces

- [ ] D03.S03.L01 **Editors IDEs terminals shells CLIs and REPLs** — distinguish interfaces from the programs and sessions they expose.
- [ ] D03.S03.L02 **Packages modules dependencies and package managers** — identify distribution and reuse boundaries; leave version/workflow details to D11.
#### D03.S04 — Checking and transforming code

- [ ] D03.S04.L01 **Static analysis types linting formatting and builds** — explain what each check can establish and what remains a runtime question.
#### D03.S05 — Applied diagnosis

- [ ] D03.S05.L01 **Read a toolchain diagram and classify a failure** — trace edit/check/build/run stages and ask which version and environment produced the result.
#### D03.S06 — Overlaps to avoid

- [ ] D03.S06.L01 **Boundaries of toolchain and language vocabulary** — link JavaScript/TypeScript owners without duplicating compiler options or framework setup.

### D04 — Operating Systems Files and Environments

Purpose: make local execution and deployment descriptions intelligible. Depends on D02–D03.

#### D04.S01 — Operating system responsibilities

- [ ] D04.S01.L01 **Operating systems kernels user space and system calls** — identify resource and privilege boundaries in a simple execution path.
- [ ] D04.S01.L02 **Processes threads tasks and services** — distinguish a running program, execution unit and managed background service; qualify platform terminology.
#### D04.S02 — Files and locations

- [ ] D04.S02.L01 **Files directories paths links and mounts** — interpret absolute/relative paths, working directories and filesystem views.
#### D04.S03 — Configuration and access

- [ ] D04.S03.L01 **Users groups permissions privileges and ownership** — explain why access depends on identity and permissions rather than file names.
- [ ] D04.S03.L02 **Environment variables configuration and secrets** — distinguish process environment from deployment environment and identify unsafe disclosure in examples.
#### D04.S04 — Resources and process outcomes

- [ ] D04.S04.L01 **Memory allocation stack heap virtual memory and swap** — distinguish resource concepts without promising a universal memory layout.
- [ ] D04.S04.L02 **Standard streams pipes exit codes and signals** — read success/failure and data-flow descriptions without an unexplained shell course.
#### D04.S05 — Applied diagnosis

- [ ] D04.S05.L01 **Explain works-on-my-machine and resource failures** — identify versions, paths, permissions, configuration and limits as separate evidence questions.
#### D04.S06 — Overlaps to avoid

- [ ] D04.S06.L01 **Boundaries of operating system vocabulary** — route system administration and OS internals separately from the minimum execution model here.

### D05 — Networks and the Internet

Purpose: separate naming, addressing, transport and application problems. Depends on D01–D04.

#### D05.S01 — Connections and network scope

- [ ] D05.S01.L01 **Networks internet intranets LAN WAN and interfaces** — locate endpoints and links; distinguish Wi-Fi access from internet reachability.
#### D05.S02 — Moving and addressing data

- [ ] D05.S02.L01 **Packets frames protocols and network layers** — interpret layered diagrams without implying every model is a literal implementation stack.
- [ ] D05.S02.L02 **IP addresses subnets routing gateways and NAT** — read address/reachability descriptions and distinguish public, private and loopback scopes.
#### D05.S03 — Naming

- [ ] D05.S03.L01 **Domains hostnames DNS resolvers and records** — trace a naming question and distinguish registration, resolution and hosting.
- [ ] D05.S03.L02 **Email addresses mail servers SMTP IMAP and DNS mail records** — distinguish sending, mailbox access and MX/SPF/DKIM/DMARC roles without teaching mail-server administration.
#### D05.S04 — Transport and endpoints

- [ ] D05.S04.L01 **Ports sockets connections and listeners** — explain which process endpoint is meant and distinguish an address from a service.
- [ ] D05.S04.L02 **TCP UDP QUIC and protocol guarantees** — compare the questions these names answer without attributing application guarantees to transport alone.
#### D05.S05 — Intermediaries and protected connections

- [ ] D05.S05.L01 **Proxies reverse proxies VPNs firewalls and load balancers** — classify an intermediary by its role rather than assuming one device has one role.
- [ ] D05.S05.L02 **TLS certificates HTTPS and historical SSL wording** — identify protected transport and server-identity concepts; identity protocols remain in D13.
#### D05.S06 — Network measurements and failures

- [ ] D05.S06.L01 **Latency bandwidth throughput jitter and packet loss** — interpret network measurements and avoid treating link capacity as observed application throughput.
#### D05.S07 — Applied diagnosis

- [ ] D05.S07.L01 **Describe a name connection or timeout failure** — annotate a request path and ask targeted questions instead of saying the network is down.
#### D05.S08 — Overlaps to avoid

- [ ] D05.S08.L01 **Boundaries of network vocabulary** — distinguish protocol orientation here from network administration, HTTP semantics and infrastructure setup.

### D06 — Web Interfaces Clients and User Experience

Purpose: identify client artifacts and user-facing qualities before API and
backend terminology. Depends on D03 and D05; no framework prerequisite.

#### D06.S01 — Client and server responsibilities

- [ ] D06.S01.L01 **Websites web apps frontend backend and full stack** — classify responsibilities and distinguish a development role from a deployment boundary.
#### D06.S02 — Browser building blocks

- [ ] D06.S02.L01 **HTML CSS DOM JavaScript and browser APIs** — identify structure, presentation, document representation and behavior without teaching a second language course.
- [ ] D06.S02.L02 **Rendering navigation CSR SSR SSG and hydration** — explain where content is produced and when client behavior starts; avoid framework-specific guarantees.
#### D06.S03 — Client platforms and state

- [ ] D06.S03.L01 **Web native hybrid desktop mobile and PWA** — interpret distribution/runtime labels without assuming universal capability parity.
- [ ] D06.S03.L02 **Cookies browser storage sessions and local state** — distinguish storage location, lifetime and session meaning; authentication rules belong to D13.
#### D06.S04 — Experience and inclusion

- [ ] D06.S04.L01 **UI UX usability accessibility and responsive design** — distinguish visual design, task success, access barriers and layout adaptation using concrete examples.
- [ ] D06.S04.L02 **Internationalization localization locale and time zones** — interpret i18n/l10n, language, region and time displays without confusing translation with the whole problem.
#### D06.S05 — Applied interpretation

- [ ] D06.S05.L01 **Read a client bug report and rendering claim** — locate platform assumptions and distinguish an accessible workflow from a responsive screenshot.
#### D06.S06 — Overlaps to avoid

- [ ] D06.S06.L01 **Boundaries of client and experience vocabulary** — route detailed UI implementation and platform mechanics to future subject tracks.

### D07 — APIs Protocols and Integration

Purpose: read contracts and message exchanges accurately. Depends on D03, D05 and D06.

#### D07.S01 — Interfaces and contracts

- [ ] D07.S01.L01 **APIs endpoints routes operations and contracts** — distinguish an interface from its implementation, address and documentation.
- [ ] D07.S01.L02 **Resources representations URIs URLs and origins** — parse a location and identify resource/representation and origin/site distinctions.
#### D07.S02 — Reading HTTP

- [ ] D07.S02.L01 **Requests responses methods headers status codes and bodies** — annotate an exchange; separate transport success from application outcome.
- [ ] D07.S02.L02 **HTTP versions caching validators and content negotiation** — recognize HTTP/1.1, HTTP/2 and HTTP/3, freshness and validation without a wire-protocol course.
#### D07.S03 — Styles formats and schemas

- [ ] D07.S03.L01 **REST RPC GraphQL gRPC and SOAP** — distinguish architectural style, interaction model, query language and concrete protocol/framework names.
- [ ] D07.S03.L02 **Payloads JSON XML YAML Protobuf and schemas** — separate data format, serialization, validation and transport; link existing JSON mechanics.
#### D07.S04 — Interaction patterns

- [ ] D07.S04.L01 **Polling webhooks SSE and WebSocket** — identify who initiates communication and how updates arrive; distinguish WebSocket from Socket.IO.
#### D07.S05 — Contract behavior and integration risks

- [ ] D07.S05.L01 **Safe idempotent paginated and rate-limited operations** — state the relevant operation, retry scope and limit; implementation policy remains with API/system tracks.
- [ ] D07.S05.L02 **Same-origin policy CORS credentials and API boundaries** — distinguish browser enforcement from authentication and server-side authorization.
#### D07.S06 — Applied contract reading

- [ ] D07.S06.L01 **Translate an API specification and failed integration** — trace request/response evidence, compatibility assumptions and the missing guarantee in a vague contract.
#### D07.S07 — Overlaps to avoid

- [ ] D07.S07.L01 **Boundaries of API vocabulary** — separate contract interpretation from implementation, identity mechanisms and deeper distributed guarantees.

### D08 — Databases Storage and Data Pipelines

Purpose: distinguish how data is modeled, accessed, protected and moved. Depends on D02–D04 and D07.

#### D08.S01 — Databases and models

- [ ] D08.S01.L01 **Data datasets databases and database management systems** — distinguish stored information, its organization and the software managing it.
- [ ] D08.S01.L02 **Relational document key-value graph and time-series models** — interpret model labels without reducing NoSQL to one set of guarantees.
#### D08.S02 — Relational and document language

- [ ] D08.S02.L01 **Tables rows columns documents fields keys and relationships** — read a small model and distinguish identifiers, attributes and associations.
- [ ] D08.S02.L02 **Schemas constraints normalization and migrations** — identify structure, rules, model changes and duplicated information without doing a modeling course.
#### D08.S03 — Access and abstraction

- [ ] D08.S03.L01 **Queries joins indexes views and query plans** — identify the question, access aid and execution description; do not equate an index with a guaranteed speedup.
- [ ] D08.S03.L02 **SQL CRUD ORMs query builders and drivers** — distinguish operation vocabulary, language and access layers.
#### D08.S04 — Transactional behavior

- [ ] D08.S04.L01 **Transactions ACID isolation locks and deadlocks** — explain each guarantee's scope and distinguish a transaction from a single request.
#### D08.S05 — Storage and copies

- [ ] D08.S05.L01 **Files block storage object storage caches and durability** — identify access models and whether a copy is temporary or authoritative.
- [ ] D08.S05.L02 **Backups snapshots replication sharding and restores** — distinguish recovery copies, availability copies and partitioned datasets; use D10 for distributed guarantees.
#### D08.S06 — Moving and analyzing data

- [ ] D08.S06.L01 **OLTP OLAP warehouses lakes ETL ELT and CDC** — trace operational versus analytical data paths and distinguish transformation from capture.
#### D08.S07 — Applied interpretation

- [ ] D08.S07.L01 **Read a data design and recovery claim** — expose missing scope in transactional, schemaless, backed-up and durable claims.
#### D08.S08 — Overlaps to avoid

- [ ] D08.S08.L01 **Boundaries of data vocabulary** — route schema design, query tuning, administration, caching policy and distributed consistency to their owners.

### D09 — Programming Design and Architecture Language

Purpose: understand design discussions without mistaking a pattern name for a
justification. Depends on D03, D07 and D08; introduced vocabulary stands alone.

#### D09.S01 — Reasoning about programs

- [ ] D09.S01.L01 **Algorithms data structures complexity and invariants** — explain what a named algorithm/structure and Big O claim does and does not tell a reader.
- [ ] D09.S01.L02 **Imperative declarative functional and object-oriented styles** — distinguish programming styles without assuming a language enforces only one.
#### D09.S02 — Managing dependencies

- [ ] D09.S02.L01 **Abstraction encapsulation interfaces coupling and cohesion** — compare a concrete change's boundaries and avoid using abstraction as a synonym for indirection.
- [ ] D09.S02.L02 **Dependency injection inversion of control and dependency inversion** — distinguish a technique, control relationship and design principle in one small diagram/text example.
#### D09.S03 — Principles and refactoring

- [ ] D09.S03.L01 **SOLID DRY KISS YAGNI patterns and antipatterns** — expand and contextualize principles, explain conflicting trade-offs and reject slogan-only reviews.
- [ ] D09.S03.L02 **Refactoring rewrites technical debt and legacy systems** — separate behavior-preserving change, replacement and future cost without treating old code as inherently bad.
#### D09.S04 — Architectural boundaries

- [ ] D09.S04.L01 **Layers tiers modules components monoliths and microservices** — separate logical organization, deployment and service boundaries.
- [ ] D09.S04.L02 **Clean hexagonal DDD CQRS and event sourcing** — identify what each name addresses; distinguish separating read/write models from storing events.
#### D09.S05 — Models and representations

- [ ] D09.S05.L01 **Domains entities value objects aggregates and architecture diagrams** — interpret model nouns and UML/C4 views without claiming a diagram proves the design.
#### D09.S06 — Applied design review

- [ ] D09.S06.L01 **Review a proposal that hides decisions behind pattern names** — ask for boundaries, requirements, examples and trade-offs; include explained interview reasoning.
#### D09.S07 — Overlaps to avoid

- [ ] D09.S07.L01 **Boundaries of design vocabulary** — route algorithm, pattern, architecture and framework implementation depth to their dedicated tracks.

### D10 — Concurrency Messaging and Distributed Systems

Purpose: state what happens across time, workers and machines precisely. Depends
on D04, D05, D07–D09; explain minimum mechanisms without algorithm implementation.

#### D10.S01 — Work and time

- [ ] D10.S01.L01 **Synchronous asynchronous blocking and non-blocking** — classify who waits and what can proceed; distinguish interface behavior from its implementation.
- [ ] D10.S01.L02 **Concurrency parallelism scheduling and event loops** — distinguish overlapping progress from simultaneous execution; link JavaScript scheduling detail.
#### D10.S02 — Coordination and hazards

- [ ] D10.S02.L01 **Shared state atomicity races locks and deadlocks** — trace a small interleaving and identify the unit claimed to be atomic.
#### D10.S03 — Messages and streams

- [ ] D10.S03.L01 **Commands events messages queues brokers and pub-sub** — identify intent, fact, transport and subscription boundaries.
- [ ] D10.S03.L02 **Streams batches consumers acknowledgments and dead-letter queues** — read a message lifecycle and distinguish receipt, processing and recovery evidence.
#### D10.S04 — Failure and flow control

- [ ] D10.S04.L01 **Timeouts retries backoff jitter and circuit breakers** — distinguish observation, repetition and load protection; recognize duplicate-side-effect risks.
- [ ] D10.S04.L02 **Backpressure buffering throttling and load shedding** — identify where work waits, is slowed or is rejected under load.
#### D10.S05 — Distributed guarantees

- [ ] D10.S05.L01 **Replication consistency availability partitions and consensus** — ask which object, operation and failure model a guarantee applies to; reject casual CAP slogans.
- [ ] D10.S05.L02 **Delivery semantics ordering deduplication and exactly-once claims** — distinguish delivery, processing and external effects with an explicit scope.
#### D10.S06 — Applied reasoning

- [ ] D10.S06.L01 **Explain an ambiguous distributed-system promise** — annotate a failure timeline, identify missing assumptions and justify a clearer contract.
#### D10.S07 — Overlaps to avoid

- [ ] D10.S07.L01 **Boundaries of concurrency and distributed vocabulary** — route runtime internals, consensus algorithms and production resilience implementations to their owners.

### D11 — Version Control Releases and Dependencies

Purpose: follow collaboration and change histories before learning command
workflows. Depends on D03, D04 and D07; no prior Git course required.

#### D11.S01 — Change records

- [ ] D11.S01.L01 **Repositories working trees staging commits and diffs** — distinguish files being edited, proposed snapshot and recorded history.
- [ ] D11.S01.L02 **Branches tags remotes forks and clones** — identify moving references, labels, copies and hosting relationships without conflating Git with GitHub.
#### D11.S02 — Combining and reviewing work

- [ ] D11.S02.L01 **Merges rebases conflicts and pull requests** — interpret a collaboration discussion, including upstream/downstream and reviewer terminology.
#### D11.S03 — Versions and compatibility

- [ ] D11.S03.L01 **SemVer compatibility breaking changes and deprecation** — interpret an explicitly adopted version contract and distinguish supported from available.
- [ ] D11.S03.L02 **Alpha beta release candidates stable LTS and EOL** — read support/release labels as project-specific policies and ask for the actual dates and guarantees.
#### D11.S04 — Dependencies provenance and licensing

- [ ] D11.S04.L01 **Direct transitive peer dependencies manifests and lockfiles** — identify declared, resolved and installed dependency information.
- [ ] D11.S04.L02 **Artifacts registries checksums signatures provenance and SBOMs** — distinguish identity/integrity evidence from claims that a dependency is safe.
- [ ] D11.S04.L03 **Open source source-available proprietary and commercial software** — distinguish access, rights, price and business models; identify where actual license review is needed.
#### D11.S05 — Applied change reading

- [ ] D11.S05.L01 **Read a pull request release note and dependency update** — identify changed behavior, compatibility expectations and unsupported inferences from version numbers.
#### D11.S06 — Overlaps to avoid

- [ ] D11.S06.L01 **Boundaries of collaboration and release vocabulary** — route full Git workflows, package resolution, deployment and security risk decisions to their owners.

### D12 — Testing Debugging and Quality Evidence

Purpose: understand what a quality claim proves and write actionable failure
descriptions. Depends on D03, D07 and D11; examples do not require a test framework.

#### D12.S01 — Faults and evidence

- [ ] D12.S01.L01 **Errors defects bugs failures exceptions and regressions** — distinguish a mistake, observable behavior and runtime mechanism; identify naming variation.
- [ ] D12.S01.L02 **Verification validation QA QC and acceptance** — distinguish conformance to a requirement from meeting a user's need.
#### D12.S02 — Test scope and intent

- [ ] D12.S02.L01 **Unit component integration system end-to-end and contract tests** — state the boundary and dependencies exercised instead of assuming universal team labels.
- [ ] D12.S02.L02 **Functional non-functional regression smoke and exploratory testing** — distinguish test objective/type from level, automation and execution frequency.
#### D12.S03 — Test arrangements and limits

- [ ] D12.S03.L01 **Assertions fixtures test doubles mocks stubs spies and fakes** — interpret a test setup and identify which real behavior was replaced.
- [ ] D12.S03.L02 **Coverage flaky tests false positives and false negatives** — explain measurement denominators and why passing checks do not prove correctness.
#### D12.S04 — Investigation language

- [ ] D12.S04.L01 **Reproduction hypotheses stack traces breakpoints and root causes** — separate a symptom, evidence and proposed explanation in a debugging narrative.
#### D12.S05 — Applied reporting and review

- [ ] D12.S05.L01 **Write a reproducible issue with expected and actual behavior** — include environment, minimal steps and observation without presenting guesses as facts.
- [ ] D12.S05.L02 **Challenge a tested-and-production-ready claim** — ask what ran, what was simulated and which outcomes remain unverified; include reasoned interview answers.
#### D12.S06 — Overlaps to avoid

- [ ] D12.S06.L01 **Boundaries of testing and debugging vocabulary** — link language error/test owners and leave full automation methodology to the Testing track.

### D13 — Security Identity and Privacy

Purpose: make security discussions intelligible while keeping claims scoped and
evidence-based. Depends on D04–D08 and D11–D12. This is terminology education,
not exploit practice or a personalized legal/compliance decision.

#### D13.S01 — Assets and threats

- [ ] D13.S01.L01 **Confidentiality integrity availability assets threats and risk** — distinguish a security property, unwanted event and risk assessment context.
- [ ] D13.S01.L02 **Vulnerabilities exploits attacks incidents and attack surface** — distinguish a weakness, its use and evidence of an event without equating severity with business risk.
#### D13.S02 — Identity and access

- [ ] D13.S02.L01 **Identification authentication authorization and accounting** — distinguish identity evidence, access decisions and activity records, including why “auth” needs clarification.
- [ ] D13.S02.L02 **Principals credentials sessions tokens roles and permissions** — trace which actor and authority an access decision refers to.
#### D13.S03 — Identity protocols and factors

- [ ] D13.S03.L01 **OAuth OIDC SAML SSO and federation** — identify protocol roles and distinguish delegated authorization from an authentication layer.
- [ ] D13.S03.L02 **Passwords MFA passkeys API keys and service identities** — distinguish credential types, factors and human/machine contexts without promising universal resistance to attacks.
#### D13.S04 — Cryptographic vocabulary

- [ ] D13.S04.L01 **Encoding hashing encryption and digital signatures** — classify the goal and key relationship, exposing why Base64 and an ordinary checksum do not secure a secret.
- [ ] D13.S04.L02 **Symmetric asymmetric keys certificates trust and key management** — connect identity/trust terms to D05's transport orientation without a cryptography implementation course.
#### D13.S05 — Access control and defense

- [ ] D13.S05.L01 **Least privilege RBAC ABAC defense in depth and zero trust** — ask which subject, resource, policy and verification boundary each design actually uses.
#### D13.S06 — Application and supply chain risks

- [ ] D13.S06.L01 **Injection XSS CSRF SSRF and broken access control** — distinguish failure categories with safe constructed artifacts; avoid teaching attack execution.
- [ ] D13.S06.L02 **CVE CWE CVSS advisories patching and supply chain failures** — distinguish identifiers, weakness classes, scoring and actual exposure.
#### D13.S07 — Privacy and governance language

- [ ] D13.S07.L01 **Personal data privacy consent retention and data minimization** — distinguish processing purposes and privacy concepts; require jurisdiction/context for legal conclusions.
- [ ] D13.S07.L02 **Policies controls audits compliance and assurance** — separate a rule, implementation, assessment and evidence; avoid treating certification as proof of no risk.
#### D13.S08 — Applied claim review

- [ ] D13.S08.L01 **Read a security finding and identity diagram** — separate mechanism from outcome and identify missing authorization, trust and data-scope assumptions.
#### D13.S09 — Overlaps to avoid

- [ ] D13.S09.L01 **Boundaries of security identity and privacy vocabulary** — route implementation, security operations and specialist/legal assessment beyond this vocabulary scope.

### D14 — Infrastructure Cloud and Delivery

Purpose: distinguish where software runs, who manages it and how changes reach
users. Depends on D04–D05, D09–D11 and D13; no cloud account required.

#### D14.S01 — Hosting and responsibility

- [ ] D14.S01.L01 **On-premises hosted public private hybrid and multicloud** — separate location, ownership and deployment-model claims.
- [ ] D14.S01.L02 **IaaS PaaS SaaS managed services and shared responsibility** — identify which party operates which layer without assuming a service label resolves every obligation.
#### D14.S02 — Isolation and packaging

- [ ] D14.S02.L01 **Bare metal virtual machines hypervisors and containers** — distinguish resource/isolation boundaries and avoid calling a container a small VM.
- [ ] D14.S02.L02 **Images layers registries tags and digests** — distinguish packaged content from a running instance and a movable name from content identity.
#### D14.S03 — Orchestration and platforms

- [ ] D14.S03.L01 **Clusters nodes pods workloads services and orchestration** — read a Kubernetes-oriented diagram while labeling product-specific nouns.
- [ ] D14.S03.L02 **Ingress egress service discovery sidecars and service meshes** — locate traffic roles without implying every application needs those components.
#### D14.S04 — Resource placement and scaling

- [ ] D14.S04.L01 **Regions zones edge serverless and functions** — interpret placement and execution labels without assuming serverless means no servers or zero operations.
- [ ] D14.S04.L02 **Horizontal vertical scaling autoscaling and elasticity** — distinguish capacity changes, mechanisms and the conditions that enable them.
#### D14.S05 — Delivery and operational practices

- [ ] D14.S05.L01 **DevOps SRE platform engineering DevSecOps and GitOps** — distinguish goals/practices from team names and individual job titles.
- [ ] D14.S05.L02 **Infrastructure as code configuration management and drift** — identify desired state, actual state and change records.
#### D14.S06 — Change pipelines and exposure

- [ ] D14.S06.L01 **CI continuous delivery continuous deployment and environments** — trace checks, deployability and production deployment; expand ambiguous CD explicitly.
- [ ] D14.S06.L02 **Builds releases deployments rollouts rollbacks and feature flags** — distinguish making an artifact, placing it and exposing behavior; compare canary and blue-green wording.
#### D14.S07 — Applied delivery review

- [ ] D14.S07.L01 **Read a platform diagram and release plan** — identify responsibility, failure domains and unsupported automation/availability assumptions.
#### D14.S08 — Overlaps to avoid

- [ ] D14.S08.L01 **Boundaries of infrastructure and delivery vocabulary** — route provisioning, orchestration and CI/CD implementation to the dedicated tracks.

### D15 — Performance Observability and Reliability

Purpose: replace fast, scalable and reliable slogans with measurable questions.
Depends on D02, D05, D08, D10, D12 and D14.

#### D15.S01 — Measuring behavior

- [ ] D15.S01.L01 **Latency response time throughput utilization and saturation** — identify the measured operation, units and observation boundary.
- [ ] D15.S01.L02 **Means medians percentiles distributions and tail latency** — interpret a small dataset without treating p99 as a maximum or averaging percentiles incorrectly.
#### D15.S02 — Finding and comparing costs

- [ ] D15.S02.L01 **Benchmarks baselines profiles bottlenecks and capacity** — separate a measurement method, explanation and planning estimate; link existing language profiling detail.
- [ ] D15.S02.L02 **Cold starts warmups caches hits misses TTLs and eviction** — interpret state-dependent measurements and distinguish caching policy from a guaranteed speedup.
#### D15.S03 — Telemetry and investigation

- [ ] D15.S03.L01 **Monitoring observability instrumentation and telemetry** — distinguish collected evidence from the ability to answer a particular diagnostic question.
- [ ] D15.S03.L02 **Logs metrics traces spans correlation and cardinality** — identify what each artifact records and why correlation and measurement costs depend on scope.
#### D15.S04 — Service-level language

- [ ] D15.S04.L01 **SLIs SLOs SLAs error budgets and burn rates** — state indicator, target, time window and consequences separately; make a small stated-assumption calculation.
#### D15.S05 — Surviving and recovering

- [ ] D15.S05.L01 **Availability reliability durability resilience and fault tolerance** — distinguish failure/loss properties and avoid inferring one from another.
- [ ] D15.S05.L02 **Redundancy failover disaster recovery RTO and RPO** — distinguish recovery-time and data-loss objectives from measured recovery evidence.
#### D15.S06 — Incident operations

- [ ] D15.S06.L01 **Alerts incidents severity priority mitigation and remediation** — distinguish detection, user impact, immediate response and durable correction; label local SEV conventions.
- [ ] D15.S06.L02 **Runbooks playbooks postmortems and contributing factors** — interpret operational instructions and incident learning without inventing one universal root cause.
#### D15.S07 — Applied service review

- [ ] D15.S07.L01 **Read a dashboard and challenge a reliability claim** — expose missing denominators, excluded traffic, time windows and recovery assumptions.
#### D15.S08 — Overlaps to avoid

- [ ] D15.S08.L01 **Boundaries of performance and reliability vocabulary** — separate measurement literacy from system tuning, SRE implementation and network/language mechanics.

### D16 — Teams Product Work and Professional Communication

Purpose: help the reader participate in real work without assuming that one
company's titles and process labels are universal. Depends on D01 and the prior
technical contexts; some D01 communication habits recur only as linked reminders.

#### D16.S01 — People and responsibility

- [ ] D16.S01.L01 **Stakeholders users customers and technical roles** — distinguish whose needs, authority and work a discussion concerns; interpret PM, PO, QA, SRE, TL, EM and IC in context.
- [ ] D16.S01.L02 **Ownership accountability DRI RACI and escalation** — ask who decides, implements and follows up without treating a responsibility table as executable policy.
#### D16.S02 — Requirements and product scope

- [ ] D16.S02.L01 **Requirements constraints acceptance criteria and quality attributes** — distinguish desired outcomes, boundaries and observable acceptance evidence.
- [ ] D16.S02.L02 **Roadmaps backlogs epics stories tasks MVPs and prototypes** — separate plans, work decomposition and learning artifacts; distinguish prototype, proof of concept and production deliverable.
#### D16.S03 — Work methods

- [ ] D16.S03.L01 **Agile Scrum Kanban Lean iterations and sprints** — distinguish values, frameworks and flow concepts without reducing agility to ceremonies.
#### D16.S04 — Planning and progress

- [ ] D16.S04.L01 **Estimates forecasts deadlines effort capacity and velocity** — identify units and uncertainty; avoid equating story points with universal hours or comparing teams by velocity.
- [ ] D16.S04.L02 **Dependencies blockers scope creep Definition of Done and handoffs** — read status statements and distinguish completed activity from accepted outcome.
#### D16.S05 — Documents and decisions

- [ ] D16.S05.L01 **PRDs RFCs ADRs proposals specifications and decision records** — distinguish document purposes, noting that an internal RFC is not automatically an IETF standard.
- [ ] D16.S05.L02 **Review feedback trade-offs assumptions and action items** — write a concrete concern and decision rationale without hiding uncertainty in jargon.
#### D16.S06 — Support and service work

- [ ] D16.S06.L01 **Tickets requests incidents problems changes and support tiers** — distinguish work types, triage, reproduction and escalation; identify organization-specific definitions.
#### D16.S07 — Business and service context

- [ ] D16.S07.L01 **B2B B2C tenants KPIs OKRs ROI TCO CapEx and OpEx** — interpret who is served, how an outcome is measured and what a cost statement includes, without accounting advice.
#### D16.S08 — Applied professional communication

- [ ] D16.S08.L01 **Rewrite a status update and disagreement for two audiences** — preserve evidence, uncertainty, ownership and next actions for a technical teammate and a stakeholder.
#### D16.S09 — Overlaps to avoid

- [ ] D16.S09.L01 **Boundaries of team product and business vocabulary** — route specific project management, organization policy and business decisions outside terminology instruction.

### D17 — AI Machine Learning and Model Terminology

Purpose: understand current AI discussions without inferring capability from a
label. Depends on D02, D07–D08, D12–D13 and D15; no statistics or ML course assumed.

#### D17.S01 — Models tasks and data

- [ ] D17.S01.L01 **AI machine learning deep learning models and algorithms** — distinguish broad fields, techniques and fitted artifacts; identify task labels such as NLP and computer vision.
- [ ] D17.S01.L02 **Features labels datasets training validation and inference** — trace how data is used and distinguish predicting from learning parameters.
#### D17.S02 — Statistical and evaluation language

- [ ] D17.S02.L01 **Accuracy precision recall overfitting bias and data leakage** — interpret a small labeled example and ask about population, split and error costs.
- [ ] D17.S02.L02 **Correlation causation confidence and uncertainty in model claims** — distinguish observed association, uncertainty and causal evidence without a statistics implementation course.
#### D17.S03 — Generative systems

- [ ] D17.S03.L01 **Foundation models LLMs tokens prompts context windows and embeddings** — distinguish representation, input limits and model/application layers.
- [ ] D17.S03.L02 **Retrieval RAG grounding fine-tuning and quantization** — identify what changes in information access, parameters and representation, and what remains unproven.
#### D17.S04 — Applications and limitations

- [ ] D17.S04.L01 **Agents workflows tool calling and model context protocols** — distinguish a model, control loop, external tool and integration protocol without assuming autonomy or reliability from a product label.
- [ ] D17.S04.L02 **Hallucinations evaluations benchmarks guardrails and prompt injection** — separate output plausibility, task evidence and protective mechanisms; link security owners.
#### D17.S05 — Applied claim reading

- [ ] D17.S05.L01 **Review an AI feature proposal without capability hype** — ask what was measured, on which data and with which human/system responsibilities.
#### D17.S06 — Overlaps to avoid

- [ ] D17.S06.L01 **Boundaries of AI and model vocabulary** — route full model training, statistics and AI application/security implementation to specialist study.

### D18 — Integration Expert Reading and Mentor Practice

Purpose: demonstrate independent use and teaching of the vocabulary across an
unfamiliar scenario. Depends on D01–D17. This is synthesis, not repeated definitions.

#### D18.S01 — Cross-domain artifact reading

- [ ] D18.S01.L01 **Annotate an unfamiliar architecture proposal** — trace user request, identity, compute, data and operational boundaries and separate facts from missing assumptions.
- [ ] D18.S01.L02 **Explain a change request and release narrative** — connect requirements, dependencies, compatibility, checks, rollout and responsibility without building an application.
#### D18.S02 — Failure interpretation

- [ ] D18.S02.L01 **Reconstruct an incident from conflicting messages** — align naming, transport, application, data and telemetry evidence; distinguish observation and hypothesis.
#### D18.S03 — Expert source reading

- [ ] D18.S03.L01 **Compare a specification vendor document and marketing claim** — justify which meaning and guarantee each source supports, with dates, versions and unresolved questions.
#### D18.S04 — Teaching and assessment

- [ ] D18.S04.L01 **Diagnose misconceptions in a technical interview or review** — supply model reasoning and a rubric that rewards explanation and evidence over memorized acronyms.
- [ ] D18.S04.L02 **Build and teach a team glossary with canonical owners** — resolve competing meanings, write audience-appropriate explanations and give constructive feedback on a junior's explanation.
#### D18.S05 — Overlaps to avoid

- [ ] D18.S05.L01 **Boundaries and continuing learning after this track** — identify which next subject fits a demonstrated gap and explain why vocabulary competence alone does not establish implementation mastery.

### Execution order and navigation plan after approval

1. Open a new execution session carrying this revision and the user's actual
   approval evidence; commit the log opening. Closed proposal history is immutable.
2. Initial coherent navigation unit: create the track README and an implemented-
   content-only navigation structure; register the root link only once that README
   exists. Keep all future unit details here, without placeholder lesson links.
3. Implement D01 through D18 in the section/leaf order above. Research/DRY, read a
   comparable reference, author one leaf with affected ancestor indexes, verify,
   immediately update this log, inspect staging and commit explicit unit paths.
   No concurrent writers and no batched lesson commits. The initial track index
   states progress accurately and only links existing domain indexes.
4. Maintain an alphabetical **term lookup table in the track README**, adding
   only implemented terms with precise canonical leaf links. Include expansions,
   aliases and context-dependent meanings where useful. This is navigation, not
   duplicate teaching or a separate placeholder dictionary. Each leaf's unit owns
   its lookup additions; a final coherent navigation repair may close omissions.
5. Check all approved outcomes, section/leaf ordering, term ownership, examples,
   required leaf sections and navigation. Record actual checks and unresolved
   limits. Close DONE only when the full approved scope passes; never start Git
   or another root track automatically.

### Known uncertainties and research to refine during execution

- Organization-specific meanings, pronunciation and slang need explicit context;
  do not invent one universal definition. Keep distinctions useful rather than
  turning every obscure abbreviation into another lesson.
- Deep mechanisms remain bounded by the vocabulary outcomes. If an implementation
  is needed to make a distinction observable, use the smallest complete example
  and link its owner. A substantial new implementation course needs a new proposal.
- Specific identity protocols, security mechanisms, email protocols, AI evaluation
  terminology, cloud product nouns and standards status need focused primary-source
  reading at their sections. Planning has checked coverage and selected anchors;
  it has not pre-verified every future lesson claim or executed future examples.
- The CNCF continuous-delivery wording and some broad/anthropomorphic AI glossary
  wording need care. Compare originating evidence and explain limitations rather
  than copying confident universal statements.
- Current JavaScript samples include known editorial/technical imperfections.
  Their teaching moves are the benchmark; their claims are not independent proof.
- The number of sections and leaves varies by topic. Routine splits/wording
  refinements may preserve approved outcomes; material expansion or reordering
  that changes prerequisites requires a logged revised proposal and approval.


## [2026-10-18 10:33] Session 2 — Execute approved IT Vocabulary revision 1

- Status: IN PROGRESS
- Context read: complete 802-line track LOG in sequential overlapping chunks;
  root README, PROMPT.md, AGENTS.md, .tutorial/WORKFLOW.md, .tutorial/QUALITY.md
  and tutorial SKILL.md; JavaScript calibration from this conversation, with the
  complete Engines runtimes and hosts reference reread for neighboring-term
  explanation. Track/domain indexes and leaves are absent. Verified initial
  working tree/staging clean and proposal commit d9a21231 present.
- Plan: Phase: APPROVED_EXECUTION. Implement the entire immutable curriculum
  revision 1 recorded in Session 1, D01–D18, all 123 sections and 191 teaching
  leaves with the outcomes, boundaries and assessments above. First commit a
  coherent track/root navigation unit; then each leaf plus affected domain/track
  indexes and alphabetical lookup, in the recorded order. Verify, immediately
  log evidence and commit explicit unit paths before proceeding. Final navigation
  and coverage verification remain part of this approved scope.
- Approval: approved; curriculum revision 1. Evidence: the user replied
  **"approved"** directly to the presented revision 1 proposal in this chat on
  2026-10-18. Approval covers all 18 domains and 191 lessons; no per-unit approval
  is pending. Closed Session 1 and its unchecked proposal snapshot remain immutable.
- Done: approval recovered and Git/disk reconciled; no implementation units yet.
- Decisions: preserve the researched scope and vocabulary/implementation boundary;
  direct execution, no delegation. Reuse evaluated sources only where applicable
  and refine sources/DRY discovery for each section. All required leaf sections
  and actual-example verification apply throughout.
- Files touched: README/ITVocabulary/LOG.md (new execution entry only).
- Links fixed / added: none yet.
- Verification: git status --short and git diff --cached --name-only empty;
  full proposal inventory parsed as 191 unique leaf IDs. Existing track contains
  LOG.md only. No lesson execution or checks are claimed.
- Next steps: initial navigation unit, then D01.S01.L01; continue every remaining
  approved unit across D01–D18. Finish final coverage/navigation checks before
  closing DONE. Exact pending scope is the unit ledger below, minus subsequently
  verified completion entries in this open session.

### Approved unit ledger at execution opening

The full ordered titles, outcomes and dependencies remain in Session 1's complete
curriculum above. This ledger carries every stable ID, not a reduced first-domain
plan. Each later completion entry identifies one of these IDs and its evidence.

- D01 (7 leaves): D01.S01.L01, D01.S01.L02, D01.S02.L01, D01.S02.L02, D01.S03.L01, D01.S04.L01, D01.S05.L01.
- D02 (8 leaves): D02.S01.L01, D02.S01.L02, D02.S02.L01, D02.S02.L02, D02.S03.L01, D02.S04.L01, D02.S05.L01, D02.S06.L01.
- D03 (9 leaves): D03.S01.L01, D03.S01.L02, D03.S02.L01, D03.S02.L02, D03.S03.L01, D03.S03.L02, D03.S04.L01, D03.S05.L01, D03.S06.L01.
- D04 (9 leaves): D04.S01.L01, D04.S01.L02, D04.S02.L01, D04.S03.L01, D04.S03.L02, D04.S04.L01, D04.S04.L02, D04.S05.L01, D04.S06.L01.
- D05 (12 leaves): D05.S01.L01, D05.S02.L01, D05.S02.L02, D05.S03.L01, D05.S03.L02, D05.S04.L01, D05.S04.L02, D05.S05.L01, D05.S05.L02, D05.S06.L01, D05.S07.L01, D05.S08.L01.
- D06 (9 leaves): D06.S01.L01, D06.S02.L01, D06.S02.L02, D06.S03.L01, D06.S03.L02, D06.S04.L01, D06.S04.L02, D06.S05.L01, D06.S06.L01.
- D07 (11 leaves): D07.S01.L01, D07.S01.L02, D07.S02.L01, D07.S02.L02, D07.S03.L01, D07.S03.L02, D07.S04.L01, D07.S05.L01, D07.S05.L02, D07.S06.L01, D07.S07.L01.
- D08 (12 leaves): D08.S01.L01, D08.S01.L02, D08.S02.L01, D08.S02.L02, D08.S03.L01, D08.S03.L02, D08.S04.L01, D08.S05.L01, D08.S05.L02, D08.S06.L01, D08.S07.L01, D08.S08.L01.
- D09 (11 leaves): D09.S01.L01, D09.S01.L02, D09.S02.L01, D09.S02.L02, D09.S03.L01, D09.S03.L02, D09.S04.L01, D09.S04.L02, D09.S05.L01, D09.S06.L01, D09.S07.L01.
- D10 (11 leaves): D10.S01.L01, D10.S01.L02, D10.S02.L01, D10.S03.L01, D10.S03.L02, D10.S04.L01, D10.S04.L02, D10.S05.L01, D10.S05.L02, D10.S06.L01, D10.S07.L01.
- D11 (10 leaves): D11.S01.L01, D11.S01.L02, D11.S02.L01, D11.S03.L01, D11.S03.L02, D11.S04.L01, D11.S04.L02, D11.S04.L03, D11.S05.L01, D11.S06.L01.
- D12 (10 leaves): D12.S01.L01, D12.S01.L02, D12.S02.L01, D12.S02.L02, D12.S03.L01, D12.S03.L02, D12.S04.L01, D12.S05.L01, D12.S05.L02, D12.S06.L01.
- D13 (15 leaves): D13.S01.L01, D13.S01.L02, D13.S02.L01, D13.S02.L02, D13.S03.L01, D13.S03.L02, D13.S04.L01, D13.S04.L02, D13.S05.L01, D13.S06.L01, D13.S06.L02, D13.S07.L01, D13.S07.L02, D13.S08.L01, D13.S09.L01.
- D14 (14 leaves): D14.S01.L01, D14.S01.L02, D14.S02.L01, D14.S02.L02, D14.S03.L01, D14.S03.L02, D14.S04.L01, D14.S04.L02, D14.S05.L01, D14.S05.L02, D14.S06.L01, D14.S06.L02, D14.S07.L01, D14.S08.L01.
- D15 (13 leaves): D15.S01.L01, D15.S01.L02, D15.S02.L01, D15.S02.L02, D15.S03.L01, D15.S03.L02, D15.S04.L01, D15.S05.L01, D15.S05.L02, D15.S06.L01, D15.S06.L02, D15.S07.L01, D15.S08.L01.
- D16 (13 leaves): D16.S01.L01, D16.S01.L02, D16.S02.L01, D16.S02.L02, D16.S03.L01, D16.S04.L01, D16.S04.L02, D16.S05.L01, D16.S05.L02, D16.S06.L01, D16.S07.L01, D16.S08.L01, D16.S09.L01.
- D17 (10 leaves): D17.S01.L01, D17.S01.L02, D17.S02.L01, D17.S02.L02, D17.S03.L01, D17.S03.L02, D17.S04.L01, D17.S04.L02, D17.S05.L01, D17.S06.L01.
- D18 (7 leaves): D18.S01.L01, D18.S01.L02, D18.S02.L01, D18.S03.L01, D18.S04.L01, D18.S04.L02, D18.S05.L01.

### NAV01 — Initial track navigation — verified

- Done: NAV01; created the track entry point and registered the root link only
  after its target existed. Progress states 0/191; no future lesson/domain links.
- Files touched: root README.md; README/ITVocabulary/README.md; this LOG.
- Links fixed / added: root → track; track → LOG and root.
- Verification: python3 /tmp/it-vocabulary-verify.py passed (0 teaching leaves,
  resolving local links and byte-for-byte preservation of the closed proposal).
  Read the resulting track/root index change; no runnable examples in this unit.
- Next steps: D01.S01.L01, followed by every remaining approved unit.

### D01.S01.L01 — Terms jargon abbreviations and acronyms — verified

- Done: D01.S01.L01; taught terminology categories, expansion versus explanation,
  audience-sensitive wording and a constructed first-day message with a worked
  answer. Vocabulary lookup registers six fully explained language terms.
- Files touched: new 01 Reading and Using Technical Language/README.md and
  sections/1. Words in context/1.1. Terms jargon abbreviations and acronyms.md;
  track README.md progress/module/lookup; this LOG.
- Links fixed / added: track → domain and six lookup targets; domain → leaf;
  leaf → domain/track. No unbuilt specialist owner is linked as published.
- Research / Decisions: section-wide repository heading search for jargon,
  abbreviation, acronym and overloaded words found no existing teaching owner.
  Reused JavaScript Engines runtimes and hosts for concrete neighboring-term
  contrasts. Consulted Google style abbreviations (updated 2025-12-01) and jargon
  (2025-06-25): https://developers.google.com/style/abbreviations and
  https://developers.google.com/style/jargon. Used selected explanations and
  audience guidance, not every house-style rule. Prior evaluated Michael Lee
  first-person dev.to account supplies learner-context motivation, not technical
  semantics. NIST/Fowler context sources also reopened for the next distinction.
- Verification: python3 /tmp/it-vocabulary-verify.py passed: 1 leaf, contiguous
  headings and required sections, filename/domain registration, 31 resolving
  local links and unchanged closed proposal. Editorial check matched all three
  index promises, defined scenario terms and checked the worked reading answer.
  This is a static interpretation exercise, not code; no runtime test claimed.
- Next steps: D01.S01.L02; remaining approved scope is all later ledger IDs.

### D01.S01.L02 — Overloaded words and ambiguous abbreviations — verified

- Done: D01.S01.L02; context comparisons for client/service/host/environment/token,
  a request-report refinement, delivery/deployment ambiguity and a solved reading
  exercise that separates interpretation from unsupported diagnosis.
- Files touched: new sections/1. Words in context/1.2. Overloaded words and
  ambiguous abbreviations.md; domain README; track README; this LOG.
- Links fixed / added: domain registration, two lookup terms, prior-lesson link
  and existing JavaScript host owner. Corrected an initially over-deep relative
  JavaScript link detected by the verifier before committing.
- Research / Decisions: reused section-wide DRY search; additional context/overload
  heading search found TypeScript function overloads and execution-context owners,
  distinct from word ambiguity. No claim to review every unrelated result.
  Reconsulted NIST glossary usage caveat (2026-08-26 terms update), Fowler's
  UbiquitousLanguage (2006) and ContinuousDelivery (2013), at URLs in Session 1.
  These support scoped definitions and named CD distinctions, not a full delivery
  lesson. Reused JavaScript host reference as the comparison benchmark.
- Verification: final python3 /tmp/it-vocabulary-verify.py passed (2 leaves,
  required numbered sections/domain registrations and all local links; closed
  proposal preserved). Initial link-check failure was repaired before completion.
  Editorially checked each index promise, example actors and the stated unknowns;
  static reading/answer inspection only, no runtime/integration execution claimed.
- Next steps: D01.S02.L01; every later approved ledger ID remains in scope.

### D01.S02.L01 — Guides references specifications and release notes — verified

- Done: D01.S02.L01; document selection, example/requirement distinction and
  version-matched evidence through a fictional setting and explained exercise.
- Files touched: new sections/2. Reading technical documents/2.1. Guides references
  specifications and release notes.md; domain/track README files; this LOG.
- Links fixed / added: domain registration, ten lookup terms and two prior leaves.
- Research / Decisions: repo heading search located the JavaScript TC39/document
  reading leaf; read it completely as a benchmark for documentation selection,
  not as current TC39-stage evidence. Consulted https://diataxis.fr/ for original
  tutorial/how-to/reference/explanation roles; https://www.ietf.org/process/rfcs/
  for RFC status and update metadata. RFC Editor /about/ timed out, so no content
  was claimed from it; the IETF overview provided accessible primary evidence.
  Section research also read RFC 2119 and RFC 8174 for the following unit, and
  opened current Node stability/MDN status guidance for focused reading next.
- Verification: python3 /tmp/it-vocabulary-verify.py passed (3 leaves and resolving
  links, numbered required sections, registrations and unchanged closed proposal).
  Editorial comparison checked all three promises, the zero-value inference gap
  and old/new-version distinction. Fictional text exercise only; no runnable
  configuration or performance experiment is asserted.
- Next steps: D01.S02.L02, then all subsequent approved ledger units.

### D01.S02.L02 — Requirements guarantees defaults and support status — verified

- Done: D01.S02.L02; scoped requirement levels, conditional guarantees, effective
  configuration versus defaults and lifecycle/support interpretation, with two
  explained textual exercises and contrasting overclaims.
- Files touched: new sections/2. Reading technical documents/2.2. Requirements
  guarantees defaults and support status.md; domain/track README files; this LOG.
- Links fixed / added: leaf registration, twelve lookup entries and existing
  document/context leaves. Lookup records vocabulary ownership, not future API links.
- Research / Decisions: reused this section's documented DRY and JavaScript
  document-selection calibration. Read RFC 2119 (1997) and RFC 8174 (2017) primary
  definitions/capitalization clarification. Read focused Node documentation
  Stability index (retrieved v26.12.0) and MDN status-convention sections at
  https://nodejs.org/api/documentation.html#stability-index and
  https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete.
  Explicitly scoped legacy/deprecated to Node and historical obsolete to MDN;
  no universal numeric stability scale or removal date invented.
- Verification: python3 /tmp/it-vocabulary-verify.py passed (4 teaching leaves,
  numbered required sections, registrations, all local links and preserved closed
  proposal). Editorial check traced the hypothetical clauses' actor/condition/
  obligation and confirmed invalid-input behavior/removal dates stay unspecified.
  Static interpretation only; no program execution claimed.
- Next steps: D01.S03.L01; continue all subsequent approved units.

### D01.S03.L01 — Pronunciation naming and useful clarification questions — verified

- Done: D01.S03.L01; pronunciation variation, sound-based articles, exact-name
  preservation and focused clarification with a worked answer and mentoring role-play.
- Files touched: new sections/3. Speaking and asking precisely/3.1. Pronunciation
  naming and useful clarification questions.md; domain/track README files; this LOG.
- Links fixed / added: domain registration, two lookup terms and three owner leaves.
- Research / Decisions: repo heading search for pronunciation/clarification found
  no existing owner. Reused Google abbreviation article (audience/pronunciation;
  no house pronunciation imposed) and read Julia Evans's original 2016 and 2021
  question-asking articles: https://jvns.ca/blog/good-questions/ and
  https://jvns.ca/blog/2021/10/21/how-to-get-useful-answers-to-your-questions/.
  Selected factual questions/current-understanding tactics, rejecting any
  implication that beginners must qualify for help. These are first-hand
  educational experience, not runtime claims. Engines runtimes and hosts remains
  the comparison for distinguishing identities and meanings with concrete examples.
- Verification: python3 /tmp/it-vocabulary-verify.py passed (5 leaves, required
  numbered sections, registrations, links and preserved closed proposal).
  Editorial check matched three promises, checked sound/spelling distinctions
  and confirmed the task does not expose credentials or invent approved versions.
  Static written practice only; no audio or software execution claimed.
- Next steps: D01.S04.L01; all subsequent approved ledger IDs remain authorized.

### D01.S04.L01 — Turn a jargon-heavy message into a testable statement — verified

- Done: D01.S04.L01; integrated evidence-card exercise with two audience-specific
  answers, failure contrasts, performance-claim gap and interview/mentor criteria.
- Files touched: new sections/4. Applied reading and review/4.1. Turn a jargon-heavy
  message into a testable statement.md; domain/track README files; this LOG.
- Links fixed / added: domain registration, one lookup term and three owner leaves.
- Research / Decisions: repo heading search for testable/jargon-heavy/vague/readiness
  topics found no competing owner. Read the JavaScript Fundamentals checklist in
  full for synthesis and owner routing, not its outdated or absolute claims.
  Read NASA Systems Engineering Handbook Appendix C focused C.2–C.4 material:
  https://www.nasa.gov/reference/appendix-c-how-to-write-a-good-requirement/
  (page updated 2023-07-26). Selected clarity, assumptions and verification-criteria
  guidance; its agency-specific wording/process is not universalized. Reused
  prior question/source research and linked rather than retaught D01 distinctions.
- Verification: python3 /tmp/it-vocabulary-verify.py passed (6 leaves, numbered
  required sections, registration, resolving links and unchanged closed proposal).
  Editorially traced every worked-answer factual clause to its evidence-card row,
  checked that unperformed cases remain unverified and that no invented timing or
  release outcome appears. The entire scenario is explicitly constructed; no
  application test run, benchmark or production observation is claimed.
- Next steps: D01.S05.L01, then D02 and all later approved domains.

### D01.S05.L01 — Boundaries and a personal vocabulary record — verified

- Done: D01.S05.L01; ownership routing, worked contextual vocabulary record,
  update discipline and explained stable-status practice. D01 now contains all
  seven approved leaves; track progress is 7/191, not full-track completion.
- Files touched: new sections/5. Overlaps to avoid/5.1. Boundaries and a personal
  vocabulary record.md; domain/track README files; this LOG.
- Links fixed / added: domain registration, vocabulary-record lookup, existing
  JavaScript runtime/promise owners and precise D01 navigation. D01 marked complete;
  track remains in progress. No placeholder links to D02 or future subject tracks.
- Research / Decisions: repository personal-vocabulary/glossary heading search
  found no competing owner. Read the complete JavaScript Fundamentals overlap
  leaf for routing structure, while avoiding its historical planned-track labels.
  Reused evaluated Julia Evans 2016 personal-dictionary account and this domain's
  source/owner map; new content is record maintenance, not repeated definitions.
- Verification: python3 /tmp/it-vocabulary-verify.py passed (7 leaves, required
  numbered sections, registration, all resolving local links, unchanged proposal).
  Editorial check matched the three promises and verified practice-card claims
  stay fictional/scoped; stable example rejects unsupported universal guarantees.
  Static writing exercise only; no runtime or integration test claimed.
- Next steps: D02.S01.L01, then all remaining 184 approved leaves across D02–D18.

### D02.S01.L01 — Hardware software firmware and drivers — verified

- Done: D02.S01.L01; physical/software categories, firmware/driver roles,
  boot/update interpretation and a solved constructed camera-version report.
  D02 index now exists; track progress is 8/191.
- Files touched: new 02 Computers Data Representation and Units/README.md and
  sections/1. Physical and logical components/1.1. Hardware software firmware and
  drivers.md; track README progress/modules/lookup; this LOG.
- Links fixed / added: track → D02, D02 → D01 prerequisite/leaf/track, seven lookup
  terms and leaf links to the existing D01 evidence and vocabulary-record owners.
- Research / Decisions: broad RAM substring search produced irrelevant program/
  grammar matches; repeated word-boundary hardware/firmware/driver/resource
  heading search found no existing subject owner. Reused Holes vs undefined
  calibration for distinctions/contrasting observations and Engines runtimes and
  hosts for layer attribution; not their legacy internals/performance claims.
  Consulted Microsoft What is a driver (updated 2025-10-31), Plugable's original
  product-support article (2025-05-21), Raspberry Pi rpi-eeprom README update/
  supported-board material and OpenStax 6.2 device-driver excerpts:
  https://learn.microsoft.com/en-us/windows-hardware/drivers/gettingstarted/what-is-a-driver-
  https://plugable.com/blogs/news/hardware-software-drivers-and-firmware-explained
  https://github.com/raspberrypi/rpi-eeprom
  https://openstax.org/books/introduction-computer-science/pages/6-2-fundamental-os-concepts
  Manufacturer/platform sources anchor roles; teaching sources supply comparison
  and failure questions. Did not copy the board-game analogy or universalize a
  one-driver/one-device picture. No firmware update procedure is instructed.
- Verification: python3 /tmp/it-vocabulary-verify.py passed (8 leaves, numbered
  required sections, registrations and local links, closed proposal unchanged).
  Editorially checked all three promises, subset/category relationships, separate
  version numbers and absence of an unsupported hardware diagnosis. Static device
  report exercise; no hardware test, firmware flash or runtime benchmark claimed.
- Next steps: D02.S01.L02; continue every subsequent approved unit through D18.

### D02.S01.L02 — CPU cores GPU RAM and persistent storage — verified

- Done: D02.S01.L02; processor/core/logical/GPU distinctions, document lifecycle
  through RAM/storage, capacity/frequency limits and a complete metadata observation.
- Files touched: new sections/1. Physical and logical components/1.2. CPU cores
  GPU RAM and persistent storage.md; domain/track README files; this LOG.
- Links fixed / added: domain registration, nine lookup terms, prior hardware
  leaf and existing D01 observation owner. Progress is 9/191.
- Research / Decisions: reused section word-boundary DRY search and distinction
  benchmarks. Consulted Intel clock-speed article (cycle/instruction caveat),
  OpenStax 5.1 systems-organization excerpts, Kingston memory/storage (Oct 2020),
  NVIDIA CPU/GPU comparison (original 2009, later updated) and Python 3.14 os CPU
  count reference (retrieved 3.14.8 docs):
  https://www.intel.com/content/www/us/en/gaming/resources/cpu-clock-speed.html
  https://openstax.org/books/introduction-computer-science/pages/5-1-computer-systems-organization
  https://www.kingston.com/en/blog/pc-performance/difference-between-memory-storage
  https://blogs.nvidia.com/blog/whats-the-difference-between-a-cpu-and-a-gpu/
  https://docs.python.org/3.14/library/os.html#os.cpu_count
  Manufacturer generalizations are limited by workload and failure conditions.
  Rejected any universal GPU speedup, CPU/GPU core equivalence or indestructible
  storage claim. OpenStax's imprecise megabyte wording was not reused; units get
  primary definition checks in S03. Crucial article retrieval was rejected; no
  content was claimed from it and Kingston supplied the accessible alternative.
- Verification: extracted the exact Python fence to temporary hardware_report.py
  and ran its declared command using Python 3.14.4, Linux x86_64, exit 0. Observed
  system logical CPUs 6 and process-usable logical CPUs 6; checked output format
  and positive-or-None counts. This is read-only runtime metadata execution, not
  a physical-core inventory or performance benchmark. Structural/link verification
  passed: 9 leaves and 112 resolving local links; closed proposal unchanged.
  Editorial check matched all three promises and explained equality of the counts.
- Next steps: D02.S02.L01, then all remaining approved units across D02–D18.

### D02.S02.L01 — Bits bytes binary hexadecimal and machine words — verified

- Done: D02.S02.L01; bit-pattern interpretation, base notation, width/signedness,
  byte order and a complete successful/intentional-failure example. Progress 10/191.
- Files touched: new sections/2. Data representation/2.1. Bits bytes binary
  hexadecimal and machine words.md; domain/track README files; this LOG.
- Links fixed / added: domain registration, eight lookup terms, prior resources
  leaf and precise JavaScript byte/view owner.
- Research / Decisions: section-wide repo binary/hex/encoding/Unicode heading
  search found JavaScript typed-array and string owners. Read the complete
  ArrayBuffer TypedArray and DataView leaf for shared-bytes/different-view teaching
  and ownership, without copying its fixed-buffer/history/performance claims.
  Primary behavior: Python 3.14 integer from_bytes/to_bytes and format references
  https://docs.python.org/3.14/library/stdtypes.html#int.from_bytes and
  https://docs.python.org/3.14/library/functions.html#format.
  Read Microsoft WORD definition (2024-11-07 page) at
  https://learn.microsoft.com/en-us/windows/win32/winprog/windows-data-types
  as a counterexample to inferring type width from host labels. Unicode FAQ was
  opened for the following text unit. OpenStax representation coverage helped
  identify beginner questions; mathematical place values are verified directly.
- Verification: extracted exact Python fence into temporary byte_patterns.py and
  ran python3 byte_patterns.py on Python 3.14.4/Linux x86_64, exit 0. Full output
  exactly matched the leaf: 65, 01000001, 41, 258/513, 255/-1 and caught overflow.
  Executed exercise assertions for 01 00 yielding 256 big-endian and 1 little-endian.
  Structural/link verification passed (10 leaves, 123 local links, closed proposal
  preserved). Editorial check matched promises and distinguished padding from width.
- Next steps: D02.S02.L02, followed by all remaining approved ledger units.

### D02.S02.L02 — Text characters Unicode and encodings — verified

- Done: D02.S02.L02; code point/unit/byte/grapheme distinctions, UTF/ASCII,
  normalization policy and a complete observed text-count/decoding example.
- Files touched: new sections/2. Data representation/2.2. Text characters Unicode
  and encodings.md; domain/track README files; this LOG. Progress 11/191.
- Links fixed / added: domain registration, twelve lookup entries, prior byte
  leaf and precise JavaScript string-unit/point/grapheme owner.
- Research / Decisions: reused section-wide DRY; read the full JavaScript indexing/
  length leaf for comparative examples and ownership, not its blanket normalization
  recommendation or unsupported performance claims. Primary Unicode FAQ, UAX29
  segmentation and UAX15 normalization excerpts define representations/equivalence;
  Python Unicode HOWTO anchors the executed API behavior:
  https://www.unicode.org/faq/utf_bom.html
  https://www.unicode.org/reports/tr29/
  https://www.unicode.org/reports/tr15/
  https://docs.python.org/3.14/howto/unicode.html
  Compared approachable explanation with the standard's user-perceived-character
  approximation caveat; did not equate a grapheme with one universal human character
  or prescribe normalization of byte-exact signed content. Retrieved standard
  pages are current references; tested runtime explicitly uses Unicode 16.0.0.
- Verification: exact Python fence extracted to temporary text_counts.py and run
  as declared on Python 3.14.4/Linux x86_64, exit 0. Full output matched: A 1/1/1,
  precomposed e-acute 1/2/1, decomposed 2/3/2, emoji 1/4/2 (points/UTF8 bytes/UTF16
  units); raw equality False, NFC equality True, invalid UTF8 caught. No font or
  grapheme-segmentation execution claimed. Structural/link check passed (11 leaves,
  138 local links, required sections and immutable closed proposal).
- Next steps: D02.S03.L01; all remaining approved ledger IDs continue in scope.

### D02.S03.L01 — Decimal and binary units rates and durations — verified

- Done: D02.S03.L01; decimal/binary quantity distinctions, bit/byte rates, duration
  prefixes, dimensional estimates and a complete checked calculation. Progress 12/191.
- Files touched: new sections/3. Measuring quantities/3.1. Decimal and binary units
  rates and durations.md; domain/track README files; this LOG.
- Links fixed / added: domain registration, eight lookup entries and three owner leaves.
- Research / Decisions: repository units/duration heading search found calendar
  Duration material, a different owner from scalar duration-unit conversion here.
  Reused byte-pattern and distinction calibration. Consulted primary NIST binary
  prefix table and BIPM SI prefix table:
  https://physics.nist.gov/cuu/Units/binary.html
  https://www.bipm.org/en/measurement-units/si-prefixes
  NIST's historical original IEEE megabyte-confusion account supplies a practical
  mismatch case, not a current claim about every manufacturer/tool. BIPM includes
  the 2022 prefix extensions; only relevant common positive/negative factors are
  taught here rather than an unexplained prefix inventory. Network rate caveats
  distinguish mathematical payload assumptions from an observed connection.
- Verification: exact Python fence extracted to temporary unit_conversions.py and
  executed on Python 3.14.4/Linux x86_64, exit 0; full output matched including
  100000000/104857600 bytes, 12.5 MB/s, 8.000000/8.388608 seconds and 2500 us.
  Executed exercise equality and approximate GB/GiB assertions. No network test
  claimed. Structural/link verifier passed (12 leaves, 150 local links, closed
  proposal preserved); editorial check matched promises and stated assumptions.
- Next steps: D02.S04.L01, then all remaining approved units across D02–D18.

### D02.S04.L01 — Formats compression checksums and metadata — verified

- Done: D02.S04.L01; format/name/metadata distinctions, lossless and lossy goals,
  size overhead, byte-scoped digests and their authentication limits. Progress 13/191.
- Files touched: new sections/4. Representing and preserving information/4.1.
  Formats compression checksums and metadata.md; D02/track README files; this LOG.
- Links fixed / added: domain registration, ten lookup entries and four precise
  existing byte/text/unit/JavaScript exchange owners.
- Research / Decisions: recovered complete 1185-line log against clean Git and
  12 committed leaves after compaction; full policy/skill context recovered.
  Repo format/compression/checksum/metadata heading search found context-specific
  JS/TS metadata, not a competing general file-representation owner. Read full
  JavaScript data-exchange patterns leaf for representation comparisons and
  ownership; avoided its blanket JSON validation/performance claims. Read focused
  primary gzip/header/CRC, Python gzip/hashlib and PNG lossless passages:
  https://www.rfc-editor.org/rfc/rfc1952.html (1996 format, not security guidance)
  https://docs.python.org/3.14/library/gzip.html
  https://docs.python.org/3.14/library/hashlib.html
  https://www.w3.org/TR/png-3/ (definition only; no PNG encoder behavior inferred).
  Python docs retrieved 3.14.8; actual example uses 3.14.4. The tiny-input result
  resolves the beginner misconception that compression always reduces size;
  prior source research supplies representation teaching context, not copied code.
- Verification: exact fence extracted to temporary representations.py and run
  on Python 3.14.4/Linux x86_64, exit 0; entire stdout matched. Initial fence run
  caught an escaped-newline authoring error; repaired and reran successfully before
  completion. Observed 1100→41
  and 1→21 bytes, exact recovery True, two digest comparisons False, and caught
  BadGzipFile for the chosen invalid header. No security or throughput test
  claimed. Structural/link verifier passed (13 leaves, 165 resolving local links,
  numbered required sections, registrations and unchanged closed proposal).
  Editorial check matched the three promises and scoped identity/byte comparisons.
- Next steps: D02.S05.L01; all subsequent approved ledger IDs remain authorized.

### D02.S05.L01 — Read a machine specification and transfer estimate — verified

- Done: D02.S05.L01; constructed specification/evidence cards, overlapping versus
  sequential estimates, bottleneck reasoning and explained interview diagnosis.
  Track progress 14/191; no machine purchase or network tuning lesson added.
- Files touched: new sections/5. Applied interpretation/5.1. Read a machine
  specification and transfer estimate.md; D02/track README files; this LOG.
- Links fixed / added: registration, one lookup entry and four precise prior owners.
- Research / Decisions: focused repository transfer/hardware/bottleneck heading
  search found existing D02 owners and unrelated ArrayBuffer transfer. A broader
  checklist discovery output was noisy; narrowed rather than claiming full review.
  Initial guessed reference path was absent; found the correct JS Fundamentals
  checklist with rg --files and read it completely. Transferred applying a
  checklist through review questions, avoiding stale runtime/scheduling advice.
  Reconsulted Intel clock-speed primary explanation (URL in D02.S01.L02); selected
  cycles/instructions/workload limits, not blanket marketing comparisons. Searched
  transfer diagnosis and followed ESnet's overview beyond its listing page:
  https://fasterdata.es.net/performance-testing/troubleshooting/overview/
  (Dec 5/6 2025). Original operator guidance supports scoping endpoints, tool and
  target before diagnosis; specialist test commands are not prescribed or run.
- Verification: executed Python exact Fraction assertions for 629145600 bytes,
  individual 7.86432/6.291456/12.582912-second stage times, overlapping limiting
  rate and 26.738688-second sequential sum; exit 0. This verifies arithmetic only,
  not the fictional transfer. Structural/link verifier passed (14 leaves, 171
  resolving links, required headings/registration and unchanged proposal).
  Editorial check matched promises and verified consistent byte/completion scopes,
  optimistic-model qualification, and that the 40-second report remains fictional.
- Next steps: D02.S06.L01, then D03 through all subsequent approved domains.

### D02.S06.L01 — Boundaries of hardware and representation vocabulary — verified

- Done: D02.S06.L01; general/language-specific ownership table, implementation
  and protection boundaries and a solved three-claim handoff. All eight D02 units
  are implemented; track progress 15/191, with D03–D18 still authorized and pending.
- Files touched: new sections/6. Overlaps to avoid/6.1. Boundaries of hardware and
  representation vocabulary.md; D02/track README progress; this LOG.
- Links fixed / added: registration, precise byte/string/number language owners,
  prior hardware/format/transfer/record owners; D02 status complete. No future links.
- Research / Decisions: repository numeric/encoding/cryptography/overlap discovery
  and actual JS Numbers index read confirmed existing owners. A guessed strings
  folder did not exist; rg --files supplied the real domain and exact leaf path.
  Reread the complete JS Fundamentals overlap leaf as routing calibration; retained
  its explicit boundaries, not outdated planned-track labels. Reused this domain's
  evaluated primary sources and examples, adding no new platform/security claims.
  Named later approved domains as future study without publishing their paths.
- Verification: structural/link checker passed (15 leaves, 182 resolving links,
  required numbered sections/registration and preserved closed proposal).
  Editorial check traced the handoff to prior explanations and confirmed all
  eight D02 approved outcomes have real leaves and specific promises. Static
  interpretation exercise only; no new runtime/benchmark/security test claimed.
- Next steps: D03.S01.L01; continue all remaining 176 approved leaves across D03–D18.

### D03.S01.L01 — Programs applications libraries frameworks and SDKs — verified

- Done: D03.S01.L01; program/application/library/API roles, framework coordination
  and SDK composition with a complete local calculation and constructed role note.
  Created D03 index; track progress 16/191.
- Files touched: new D03 README and sections/1. Software categories/1.1. Programs
  applications libraries frameworks and SDKs.md; track README; this LOG.
- Links fixed / added: D03 prerequisite/track/leaf navigation, six lookup terms
  and existing D01/D02 owners. No unbuilt later design or API leaves linked.
- Research / Decisions: repo library/framework/SDK/toolchain heading search found
  JavaScript runtime/pipeline and TypeScript tooling/module owners, not an existing
  general software-category lesson. Reread full JS Engines runtimes and hosts for
  neighboring-term attribution, not its universal conformance/performance claims.
  Read original Fowler InversionOfControl (June 26 2005) relevant control-flow
  explanation, current Android component list and Python 3.14 math.isqrt contract:
  https://martinfowler.com/bliki/InversionOfControl.html
  https://developer.android.com/tools
  https://docs.python.org/3.14/library/math.html#math.isqrt
  Fowler supplies conceptual reasoning, platform docs anchor concrete kit/API
  roles. Rejected the overgeneralization that every callback makes a framework;
  no old Ruby/Tk examples or Android installation instructions were copied.
- Verification: exact square_report.py fence executed on Python 3.14.4/Linux
  x86_64, exit 0; stdout exactly matches Squares 81 and Whole-number side 9.
  Structural/link verification passed (16 leaves, 195 resolving links, required
  headings/registration, unchanged closed proposal). Editorial check matched
  three promises, introduced module/API before use and separated build/run roles.
  No real framework/SDK installation or performance test claimed.
- Next steps: D03.S01.L02; every later approved unit remains in scope.

### D03.S01.L02 — Source code executables bytecode and artifacts — verified

- Done: D03.S01.L02; source/machine/bytecode/executable distinctions, preparation
  versus execution and artifact-consumer evidence with a complete observed example.
  Track progress 17/191.
- Files touched: new sections/1. Software categories/1.2. Source code executables
  bytecode and artifacts.md; D03/track README files; this LOG.
- Links fixed / added: registration, six lookup entries and exact TypeScript
  declaration, prior category/format/evidence owners.
- Research / Decisions: reused D03 section-wide discovery; read full JS pipeline
  leaf for transformation/observation order, not its universal JIT, threading or
  shape-performance claims. Read full TypeScript d.ts public API surface leaf
  for declaration/runtime separation and precise ownership. Primary sources:
  https://docs.python.org/3.14/library/dis.html (implementation/version caveat)
  https://docs.python.org/3.14/builtins/functions.html#compile (compile/exec behavior)
  https://docs.github.com/en/actions/concepts/workflows-and-actions/workflow-artifacts
  (actual product artifact definition/examples). Retrieved Python 3.14.8 reference;
  tested CPython 3.14.4. GitHub's broad attestation language was not adopted as a
  security guarantee. Practitioner/compiler searches found no additional useful
  accessible original explanation for this bounded artifact distinction; retained
  already evaluated control/layer teaching and concrete primary examples instead
  of treating unrelated search results as read material.
- Verification: exact code_forms.py fence executed on CPython 3.14.4/Linux x86_64,
  exit 0; entire stdout matched types str/code and ordered Before/Result42/After.
  No executable or persisted bytecode file is claimed. Structural/link check
  passed (17 leaves, 206 resolving links, required headings and unchanged proposal).
  Editorial check matched promises and separated produced/accepted/executed evidence.
- Next steps: D03.S02.L01, then all subsequent approved ledger units.

### D03.S02.L01 — Compiling interpreting transpiling and JIT — verified

- Done: D03.S02.L01; transformation versus execution techniques, AOT/JIT timing,
  source transforms versus runtime capabilities and actual caught failure stages.
  Track progress 18/191.
- Files touched: new sections/2. From source to execution/2.1. Compiling interpreting
  transpiling and JIT.md; D03/track README files; this LOG.
- Links fixed / added: registration, seven lookup terms and precise JS transform/
  pipeline and prior code/artifact owners.
- Research / Decisions: focused repo transform/polyfill/JIT search confirmed JS
  and TS detailed owners. Read full JS Transpilation polyfills and baseline strategy
  for syntax/API contrast and target questions, rejecting its blanket safe-transform,
  always-slower-output and never-transpile-server advice. Primary sources read:
  https://docs.python.org/3.14/glossary.html#term-bytecode
  https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html#erased-types
  https://v8.dev/blog/jitless (original V8 engineer article, March 13 2019, V8 7.4).
  Python docs provide coexistence and compatibility evidence; TypeScript docs
  establish type erasure without runtime validation. V8 is a historical concrete
  configuration/measurement counterexample, not current defaults or benchmark
  evidence for this environment. Reused evaluated compile/eval primary contract.
- Verification: exact failure_stages.py fence executed on CPython 3.14.4/Linux
  x86_64, exit 0; full stdout matched caught SyntaxError during preparation and
  ZeroDivisionError during execution of a successfully prepared expression.
  No JIT, TypeScript transform or speed experiment claimed. Structural/link check
  passed (18 leaves, 218 resolving links, required headings and unchanged proposal).
  Editorial check matched promises and scoped language-dependent failure semantics.
- Next steps: D03.S02.L02; continue all subsequent approved units.

### D03.S02.L02 — Languages engines runtimes hosts and virtual machines — verified

- Done: D03.S02.L02; language/implementation/engine roles, runtime component/phase,
  contextual host and VM meanings, plus an actual identity-metadata observation.
  Progress 19/191.
- Files touched: new sections/2. From source to execution/2.2. Languages engines
  runtimes hosts and virtual machines.md; D03/track README files; this LOG.
- Links fixed / added: registration, six lookup entries and precise JS/prior owners.
- Research / Decisions: focused repo VM/runtime/host search confirmed JS detailed
  owner and TS portable-code destinations; reused full Engines runtimes and hosts
  calibration already reread this domain. Consulted primary sources:
  https://v8.dev/docs/embed (embedding introduction and application extension roles)
  https://nodejs.org/en/about (runtime self-description only)
  https://docs.oracle.com/javase/specs/jvms/se25/html/jvms-1.html#jvms-1.2
  https://docs.python.org/3.14/library/sys.html#sys.implementation
  JVM SE25 is an explicitly versioned conceptual source, not a latest-Java claim;
  no JVM installation or class-version compatibility table taught. V8 sample's
  old build/segfault caveat and Node overview's sweeping no-blocking/no-deadlock
  wording were not adopted. Read Python implementation fields and experimental
  JIT caveat; no experimental capability is presented as a stable default.
- Verification: exact execution_identity.py fence executed on CPython 3.14.4/Linux
  x86_64, exit 0; full stdout matched 3.14.4/cpython/linux. This is metadata, not
  permissions, capability, portability or performance verification. Structural/link
  checker passed (19 leaves, 228 resolving links, required headings, unchanged
  closed proposal). Editorial check matched three promises and avoided universal
  packaging equations or unqualified VM-security promises.
- Next steps: D03.S03.L01; all remaining approved ledger units remain authorized.

### D03.S03.L01 — Editors IDEs terminals shells CLIs and REPLs — verified

- Done: D03.S03.L01; editor/IDE/terminal/shell/CLI/REPL roles, current input
  receiver, actual interactive observation and explained wrong-prompt diagnosis.
  Track progress 20/191.
- Files touched: new sections/3. Tools and interfaces/3.1. Editors IDEs terminals
  shells CLIs and REPLs.md; D03/track README files; this LOG.
- Links fixed / added: registration, six lookup entries, prior environment and
  exact JS Node REPL owner.
- Research / Decisions: focused repo interface/package discovery located JS Node
  essentials and TS editor/type-server owners. Read complete Node essentials for
  file/REPL contrast and version identity habit, not its legacy release/default-
  module assertions. Consulted current VS Code terminal introduction, Python3.14
  interpreter tutorial and original Julia Evans July20 2022 input investigation:
  https://code.visualstudio.com/docs/terminal/getting-started
  https://docs.python.org/3.14/tutorial/interpreter.html
  https://jvns.ca/blog/2022/07/20/pseudoterminals/
  Selected terminal/program boundary and observed exploration; did not import
  unsure escape-code details or instruct deployment of its insecure demo server.
  GNU What is a shell and What is Bash pages failed retrieval/timeouts; no snippet
  claimed as reading. VS Code supplies accessible first-party shell/terminal roles.
- Verification: launched actual interactive python3 -q through PTY with
  PYTHON_BASIC_REPL=1, CPython3.14.4/Linux x86_64. Entered value=6, value*7, exit();
  observed prompt/state behavior, 42 and exit 0. bash --version reported5.3.9.
  This is actual REPL execution, not a simulated text transcript. Enhanced-REPL
  presentation is explicitly outside that run. Structural/link check passed
  (20 leaves,237 resolving links, required headings and preserved closed proposal).
  Editorial check matched promises, prompt-copy guidance and independent sessions.
- Next steps: D03.S03.L02; every subsequent approved ledger unit remains in scope.

### D03.S03.L02 — Packages modules dependencies and package managers — verified

- Done: D03.S03.L02; module/distribution/import-package boundaries, dependency
  stages, manager/registry roles and exact two-file success/missing-module example.
  Track progress 21/191.
- Files touched: new sections/3. Tools and interfaces/3.2. Packages modules
  dependencies and package managers.md; D03/track README files; this LOG.
- Links fixed / added: registration, seven lookup terms and existing category,
  environment and JS module owners; no future D11 links.
- Research / Decisions: reused section discovery and read full JS module index
  and Static import forms and restrictions leaf. Transferred explicit provider/
  consumer distinctions; avoided simulated namespace/live-binding examples and
  unsupported import-form/performance claims. Primary teaching sources read:
  https://packaging.python.org/en/latest/discussions/distribution-package-vs-import-package/
  (updated Oct12 2026; clear distribution/import-name mismatch and owner warning)
  https://docs.python.org/3.14/tutorial/modules.html (file reuse/import behavior)
  https://docs.npmjs.com/about-packages-and-modules/ (Jan5 2026; package metadata
  context only). Compared ecosystems; did not adopt npm's narrow node_modules
  module definition as a universal rule or duplicate JS resolver mechanics.
  PyPA's practical mismatch question drives the new diagnosis and original example.
- Verification: extracted both exact Python fences to temporary lesson_math.py
  and report.py; CPython3.14.4/Linux x86_64, declared command exit0 with full stdout
  Report result42. Copied report alone to a second empty folder; fresh process
  with PYTHONPATH removed exited1 with exact stated ModuleNotFoundError. No network
  installation/registry integration claimed. Structural/link verifier passed
  (21 leaves,248 resolving links, required headings, unchanged closed proposal).
  Editorial check matched promises and scoped the missing-module failure conditions.
- Next steps: D03.S04.L01, then every subsequent approved unit through D18.

### D03.S04.L01 — Static analysis types linting formatting and builds — verified

- Done: D03.S04.L01; static/runtime checking, types/annotations, lint/format/build
  scope, actual non-enforcement observation and a constructed evidence-card answer.
  Track progress 22/191.
- Files touched: new sections/4. Checking and transforming code/4.1. Static analysis
  types linting formatting and builds.md; D03/track README files; this LOG.
- Links fixed / added: registration, eight lookup entries and precise existing
  TypeScript checked-contract and JavaScript tooling owners plus prior stage links.
- Research / Decisions: focused repo check/lint/format/build heading search found
  canonical JS/TS tooling owners. Read full JS Linting formatting static analysis
  leaf for separate-gate reasoning, not its unexecuted simulations, fixed four-gate
  policy, stale plugin identifiers or blanket installation/performance claims.
  Read full TS Static checking vs runtime reality owner for real evidence-boundary
  comparison. Primary Python typing, ESLint core concepts and Prettier introduction:
  https://docs.python.org/3.14/library/typing.html
  https://eslint.org/docs/latest/use/core-concepts/
  https://prettier.io/docs/
  Read actual annotation caveat, configurable rule roles, and source reprinting;
  included overloaded report-formatter meaning. Living docs establish roles, not
  tool-version configuration instructions. Earlier practitioner/source research
  informs the evidence questions; no tool installation is needed for the outcome.
- Verification: exact annotation_observation.py fence executed on CPython3.14.4/
  Linux x86_64, exit0; full stdout matched Integer input42 and String inputgogo.
  No type checker, linter, formatter or actual delivery build was run or claimed.
  Structural/link check passed (22 leaves,261 resolving links, required headings,
  unchanged closed proposal). Editorial check matched promises and carefully
  separated the actual Python observation from the fictional build result card.
- Next steps: D03.S05.L01; continue every later approved unit through D18.

### D03.S05.L01 — Read a toolchain diagram and classify a failure — verified

- Done: D03.S05.L01; toolchain/pipeline/gate vocabulary, dependency diagram,
  constructed missing-helper diagnosis, stale-output counterexample and evidence
  handoff/interview reasoning. Track progress 23/191.
- Files touched: new sections/5. Applied diagnosis/5.1. Read a toolchain diagram
  and classify a failure.md; D03/track README files; this LOG.
- Links fixed / added: registration, three lookup entries and four precise prior owners.
- Research / Decisions: repository toolchain/pipeline/artifact-freshness search
  located TS compiler/pitfall owners and JS engine/tooling paths; no duplicate
  general artifact-reading exercise. Reread complete JS Promise chaining leaf
  as a tracing/failure-propagation benchmark, not its legacy unhandled-rejection,
  allocation or all-order claims. Reused primary Python modules/compile contracts
  and actual D03 examples, plus evaluated useful-question practitioner guidance
  from D01. New work synthesizes those meanings rather than adding new API claims
  or duplicating compiler configuration. Deep TS pipeline remains its owner.
- Verification: structural/link checker passed (23 leaves,269 resolving links,
  required numbered sections, registrations and unchanged closed proposal).
  Inspected diagram's intended source/check/emission/package/run edges, including
  both package prerequisites. No Mermaid rendering or deployment run claimed.
  Editorial check traced each worked diagnosis to a card row and verified that
  removing inspection evidence reduces certainty. Static artifact exercise only;
  cited earlier real two-file execution is distinguished from this fictional card.
- Next steps: D03.S06.L01, then all approved D04–D18 units remain in scope.

### D03.S06.L01 — Boundaries of toolchain and language vocabulary — verified

- Done: D03.S06.L01; detailed owner routing, workflow/framework boundaries and
  solved mixed SDK/editor/build/declaration/host claim. All nine D03 units complete;
  progress 24/191 with every D04–D18 unit still approved and pending.
- Files touched: new sections/6. Overlaps to avoid/6.1. Boundaries of toolchain and
  language vocabulary.md; D03/track README progress/status; this LOG.
- Links fixed / added: registration and exact JS/TS/prior owners; D03 marked complete.
  No later unpublished lesson links or unrelated policy/content edits.
- Research / Decisions: reused D03 ownership searches; read TS Tooling index
  selected entries and the complete Tooling boundary leaf (reread separately after
  combined output truncated). Reused full JS Fundamentals boundary calibration
  and previously read execution/module/declaration owners. Kept implementation
  evidence with those owners; no new API semantics or fixed tool-version guidance
  introduced. Later approved dependencies/OS/framework topics remain future routes,
  not unexplained prerequisites or placeholder content.
- Verification: structural/link checker passed (24 leaves,281 resolving links,
  required numbered sections/registrations and immutable closed proposal).
  Editorial check matched three promises and all nine D03 curriculum outcomes
  against real registered leaves. Worked answer preserves unknown versions and
  unperformed destination tests. Static routing only; no fresh tooling/runtime
  benchmark or integration execution claimed.
- Next steps: D04.S01.L01; continue the remaining 167 approved leaves across D04–D18.

### D04.S01.L01 — Operating systems kernels user space and system calls — verified

- Done: D04.S01.L01; OS/kernel/user-space boundaries, API versus syscall path and
  actual optional Linux trace. Created D04 index; track progress25/191.
- Files touched: new D04 README and sections/1. Operating system responsibilities/
  1.1. Operating systems kernels user space and system calls.md; track README; LOG.
- Links fixed / added: D04 prerequisite/leaf/track navigation, eight lookup entries
  and exact prior hardware/runtime/terminal owners.
- Research / Decisions: repo kernel/user-space/syscall/process/thread heading
  search found no general OS owner. Reused JS role attribution and recently reread
  Promise tracing calibration for request/result explanation, not language-specific
  semantics. Read OpenStax6.2 OS role/application-service excerpts; selected broad
  responsibilities while rejecting universal component layout, thread timing and
  fork-copy simplifications. Primary Linux intro(2), strace option passages and
  Python3.14 os.write anchor the actual boundary and observation:
  https://openstax.org/books/introduction-computer-science/pages/6-2-fundamental-os-concepts
  https://man7.org/linux/man-pages/man2/intro.2.html
  https://man7.org/linux/man-pages/man1/strace.1.html
  https://docs.python.org/3.14/library/os.html#os.write
  Explicit Linux scope; no administrator/trace-policy bypass or universal OS layout.
- Verification: strace --version reported6.19. Extracted exact Python source to
  temporary os_boundary.py; ran declared strace -e trace=write -o calls.txt python3
  os_boundary.py on CPython3.14.4/Linux x86_64. Exit0, stdout exactly Boundary reached
  plus newline; full trace matched write of17 bytes returning17 and exit0 line.
  Structural/link verifier passed (25 leaves,296 resolving links, required headings,
  unchanged closed proposal). Editorial check matched promises, descriptor1 context,
  filtered scope and no durability/performance inference. Actual syscall observation,
  not an inferred boundary or measured normal-speed benchmark.
- Next steps: D04.S01.L02; all subsequent approved units through D18 remain in scope.

### D04.S01.L02 — Processes threads tasks and services — verified

- Done: D04.S01.L02; process/thread/resource/identity boundaries, actual thread
  and child-process observation, contextual task and managed-service/daemon roles.
  Progress26/191.
- Files touched: new sections/1. Operating system responsibilities/1.2. Processes
  threads tasks and services.md; D04/track README files; this LOG.
- Links fixed / added: registration, seven lookup terms and prior OS/CPU/context owners.
- Research / Decisions: focused repo process/thread/task/service search found
  JS event-loop and TS service-process applications; kept general OS vocabulary
  here and later concurrency detail separate. Reused layer and contrasting-
  observation JS calibration. OpenStax6.2 supplies program/process learner context;
  rejected its universal lighter/faster thread table. Primary contracts read:
  https://man7.org/linux/man-pages/man7/pthreads.7.html (DESCRIPTION resource/ID roles)
  https://docs.python.org/3.14/library/threading.html (start/join/identity/daemon scope)
  https://docs.python.org/3.14/library/subprocess.html#subprocess.check_output
  https://man7.org/linux/man-pages/man5/systemd.service.5.html (description/restart)
  Freedesktop latest service manual retrieval failed; man7's actual systemd manual
  supplied accessible originating documentation. No service configuration changes
  or current systemd-version/default-policy prescriptions taught.
- Verification: exact execution_units.py fence ran CPython3.14.4/Linux x86_64,
  exit0; full stdout matched same-process True, different-thread True and
  different-child-process True. join completes the worker before subprocess work;
  check_output completes the child. No parallel CPU execution or overhead claim.
  Structural/link verifier passed (26 leaves,307 resolving links, required headings,
  unchanged proposal). Editorial check matched promises and service/PID reasoning.
- Next steps: D04.S02.L01; all subsequent approved units remain in scope.

### D04.S02.L01 — Files directories paths links and mounts — verified

- Done: D04.S02.L01; filesystem/path/CWD distinctions, observed hard/symbolic link
  rename behavior and constructed mount-view diagnosis. Progress27/191.
- Files touched: new sections/2. Files and locations/2.1. Files directories paths
  links and mounts.md; D04/track README files; this LOG.
- Links fixed / added: registration, fourteen lookup terms and prior format,
  process and local-module owners.
- Research / Decisions: repo filesystem/path/directory/link/mount heading search
  found memory-retaining paths and type-test error paths, different concepts.
  Reused Holes vs undefined comparison/operation-variation calibration and prior
  source/runtime layer teaching. Read primary pathname, symlink and mount manual
  sections plus Python pathlib operations:
  https://man7.org/linux/man-pages/man7/path_resolution.7.html (Linux man-pages6.19)
  https://man7.org/linux/man-pages/man7/symlink.7.html (identity versus stored path)
  https://man7.org/linux/man-pages/man8/mount.8.html (attachment/hidden prior contents)
  https://docs.python.org/3.14/library/pathlib.html (link/rename/existence APIs)
  Searched original mount/link explanations; attempted Julia Evans mount URL failed
  retrieval, no content claimed. Broad article/security-paper results were not
  needed as factual substitutes for the actual manual and bounded observation;
  retained prior evaluated educational OS context and investigated dangling-link
  misconception directly. No mount administration/security course added.
- Verification: exact file_names.py fence ran CPython3.14.4/Linux x86_64, exit0;
  full stdout matched same-file True/True, link-still-present True, target-exists
  False and retained hard-link text hello. All mutations isolated to an automatically
  cleaned temporary directory. No mount or Windows behavior executed. Structural/
  link check passed (27 leaves,325 resolving links, required headings and preserved
  proposal). Editorial check matched promises, relative-link base, source-dir/CWD
  distinction, no independent-copy claim and scoped constructed mount scenarios.
- Next steps: D04.S03.L01; all subsequent approved units remain in scope.

### D04.S03.L01 — Users groups permissions privileges and ownership — verified

- Done: D04.S03.L01; account/process/resource identities, basic Unix rwx/octal
  modes, directory/ACL limits, controlled metadata observation and explained
  Alice/Bob/Cara scenario with targeted diagnosis. Progress28/191.
- Files touched: new sections/3. Configuration and access/3.1. Users groups
  permissions privileges and ownership.md; D04/track README files; this LOG.
- Links fixed / added: registration, eight lookup terms and prior process/path/
  metadata owners; no unpublished security implementation links.
- Research / Decisions: repo permission/ownership/group search found language
  mutability and regexp groups, not OS-access ownership. Reused comparison/limited-
  evidence JS calibration; distinguished OS rules from application authorization.
  Read focused primary identities, file mode, traversal, ACL and Python stat:
  https://man7.org/linux/man-pages/man7/credentials.7.html (July2 2026 page)
  https://man7.org/linux/man-pages/man7/inode.7.html
  https://man7.org/linux/man-pages/man7/path_resolution.7.html
  https://man7.org/linux/man-pages/man5/acl.5.html
  https://docs.python.org/3.14/library/stat.html
  Initial acl(7) path failed; corrected to actual acl(5), then read its description,
  entries and access-model passages. No unavailable source content claimed. Basic
  Unix model is explicitly conditional; no universal root bypass or ACL configuration
  advice, and no administrative change to the user's files/accounts.
- Verification: exact permission_bits.py fence ran CPython3.14.4/Linux x86_64,
  exit0; full stdout matched 0o640 and True/False/False bits. Only temporary-file
  metadata changed and was cleaned. No multi-account access or denial execution
  claimed. Structural/link verifier passed (28 leaves,337 resolving links, required
  headings and preserved proposal). Editorial check matched promises and modeled
  identities/operation/assumptions separately from the actual metadata observation.
- Next steps: D04.S03.L02; all subsequent approved ledger units remain authorized.
