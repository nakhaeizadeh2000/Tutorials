# Version Control Releases and Dependencies

Read change history, collaboration and dependency discussions with explicit record and compatibility boundaries. Start with the earlier tool, file and API vocabulary. Small local observations teach what a version-control artifact proves; complete Git workflows, package resolution and deployment remain deeper study.

This domain is complete: all 10 approved lessons are available.

## 1. Change records

### [1.1. Repositories working trees staging commits and diffs](<sections/1. Change records/1.1. Repositories working trees staging commits and diffs.md>)

1. **Separate recorded history from editable and proposed contents:** Distinguish a Git repository, working tree, index and immutable commit snapshot with its parent relationships.
2. **Observe three versions of one file:** Run a local staging example, explain both status columns and predict how later staging changes the proposed snapshot.
3. **Name both sides of a diff and the evidence still missing:** Interpret staged versus unstaged comparisons, line summaries and tracked or ignored state without assuming sharing or deployment.

### [1.2. Branches tags remotes forks and clones](<sections/1. Change records/1.2. Branches tags remotes forks and clones.md>)

1. **Distinguish moving branch names from labeled versions:** Interpret branch tips, attached or detached HEAD and lightweight or annotated tags without treating names as immutable deployment evidence.
2. **Separate another repository from your local record of it:** Trace clone, remote, fetch, push and remote-tracking references through a stale-reference packet.
3. **Distinguish a hosted fork from a branch and a local clone:** Identify repository and permission boundaries and review source-sharing claims separately from integration and deployment.

## 2. Combining and reviewing work

### [2.1. Merges rebases conflicts and pull requests](<sections/2. Combining and reviewing work/2.1. Merges rebases conflicts and pull requests.md>)

1. **Distinguish joining histories from replaying changes on a new base:** Read merge, fast-forward, rebase and pull outcomes with explicit commit relationships and collaboration trade-offs.
2. **Separate unresolved text from incorrect combined behavior:** Interpret conflict resolution and diagnose a clean text integration that breaks an interface contract.
3. **Read the review artifact and its integration direction:** Identify PR base and head, author and reviewer roles, upstream/downstream meanings and approval versus current-head verification.

## 3. Versions and compatibility

### [3.1. SemVer compatibility breaking changes and deprecation](<sections/3. Versions and compatibility/3.1. SemVer compatibility breaking changes and deprecation.md>)

1. **Read the version scheme and its declared interface:** Interpret SemVer core components, precedence, pre-release/build labels and major-zero scope as an adopted contract.
2. **Judge compatibility from a consumer’s required behavior:** Classify constructed releases and distinguish backward or forward compatibility, intended promises and actual consumer outcomes.
3. **Separate deprecation and support from actual removal:** Read migration and breaking-change notices without inventing removal dates, support periods or verified upgrade results.

### [3.2. Alpha beta release candidates stable LTS and EOL](<sections/3. Versions and compatibility/3.2. Alpha beta release candidates stable LTS and EOL.md>)

1. **Read release readiness from the publisher’s own criteria:** Interpret alpha, beta, RC, final, GA and release channels without assuming universal feature or defect guarantees.
2. **Separate a release line’s maintenance from an installed patch:** Read LTS, maintenance and EOL policies with a publisher, date and exact artifact, using current Node.js and Python examples.
3. **Interpret a release matrix without inventing a recommendation:** Compare fictional channels, maintenance windows and missing patch or integration evidence and revise only supported conclusions.

## 4. Dependencies provenance and licensing

### [4.1. Direct transitive peer dependencies manifests and lockfiles](<sections/4. Dependencies provenance and licensing/4.1. Direct transitive peer dependencies manifests and lockfiles.md>)

1. **Read dependency roles relative to a particular project:** Distinguish direct, transitive, development, peer and optional requirements in an explicit application and host graph.
2. **Separate requested constraints from resolved and installed versions:** Read manifests, version ranges, pins, lockfiles and installed trees as different evidence with manager-specific policy.
3. **Diagnose a disagreement without inventing its cause:** Interpret a constructed manifest/lock/installation mismatch and ask for the inputs and observations needed to explain it.

### [4.2. Artifacts registries checksums signatures provenance and SBOMs](<sections/4. Dependencies provenance and licensing/4.2. Artifacts registries checksums signatures provenance and SBOMs.md>)

1. **Connect a distribution name to the actual artifact:** Separate source, packaged contents, registry, mirror and cache records from byte-integrity and publisher claims.
2. **Separate a verified signature from an accepted build claim:** Interpret signatures, attestations, build provenance and SLSA verification with explicit subject, identity and policy boundaries.
3. **Read a component inventory and apply each evidence boundary:** Distinguish an SBOM from a lockfile or safety result and diagnose an inventory for a different artifact.

### [4.3. Open source source-available proprietary and commercial software](<sections/4. Dependencies provenance and licensing/4.3. Open source source-available proprietary and commercial software.md>)

1. **Separate source access and license rights from price:** Classify open source, source-available, proprietary, commercial and free software without treating them as one exclusive list.
2. **Read license conditions without replacing them with a slogan:** Distinguish permissive and copyleft usage, actual license terms, notices, attribution and context-specific compatibility.
3. **Classify a release packet and identify the missing review:** Interpret four fictional offerings and assemble exact component, version and intended-use evidence for a real license question.

## 5. Applied change reading

### [5.1. Read a pull request release note and dependency update](<sections/5. Applied change reading/5.1. Read a pull request release note and dependency update.md>)

1. **Align the proposal and release notes with the relevant versions:** Identify public behavior changes, PR direction and the state covered by review and tests in a constructed change packet.
2. **Trace selected contents and supporting evidence through the update:** Connect manifest, lock, installation, provenance, inventory, licensing and support records without treating one result as another.
3. **Write a review handoff that preserves what is known and unknown:** Explain missing current-head evidence to technical and product audiences and revise the conclusion when relevant results are added.

## 6. Overlaps to avoid

### [6.1. Boundaries of collaboration and release vocabulary](<sections/6. Overlaps to avoid/6.1. Boundaries of collaboration and release vocabulary.md>)

1. **Return to the precise owner of a collaboration or release question:** Route history, integration, compatibility, support, dependency, artifact and licensing questions to their existing conceptual lessons.
2. **Choose implementation study from the operation and evidence needed:** Separate vocabulary competence from Git recovery, package resolution, runtime loading, deployment and specialist risk or rights decisions.
3. **Turn a mixed rollback request into separate answerable questions:** Preserve a recovery goal while identifying source, dependency, artifact, service and data evidence and the limits of a rehearsal.

[← Back to IT Vocabulary](<../README.md>)
