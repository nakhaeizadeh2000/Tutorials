# Infrastructure Cloud and Delivery

Understand where software runs, who operates each layer and how infrastructure
and delivery claims connect to responsibilities and evidence. Build on earlier
operating-system, network, design, release and security vocabulary. No provider
account or orchestration knowledge is assumed. Static examples introduce their
own context before implementation-specific study.

This domain is complete: all 14 approved lessons are available.

## 1. Hosting and responsibility

### [1.1. On-premises hosted public private hybrid and multicloud](<sections/1. Hosting and responsibility/1.1. On-premises hosted public private hybrid and multicloud.md>)

1. **Separate a machine’s location from ownership and operation:** Interpret on-premises off-premises hosting colocation and data-center terms without assuming one operator or cloud model.
2. **Read cloud deployment labels through their defined scope:** Distinguish cloud capabilities public private community hybrid and multicloud usage from data permissions provider diversity and verified portability.
3. **Classify concrete arrangements without inventing guarantees:** Compare five original hosting descriptions and revise only the affected access or deployment conclusion when facts change.

### [1.2. IaaS PaaS SaaS managed services and shared responsibility](<sections/1. Hosting and responsibility/1.2. IaaS PaaS SaaS managed services and shared responsibility.md>)

1. **Distinguish infrastructure platform and application capabilities:** Explain IaaS PaaS and SaaS through the capability supplied and the consumer control boundary.
2. **Name managed tasks and shared responsibilities precisely:** Separate operating a component choosing its policy and checking its outcome; identify the scope of a managed service or MSP.
3. **Read a responsibility packet and expose unassigned work:** Classify three arrangements inspect backup and permission duties and revise component-specific assignments when a management contract changes.

## 2. Isolation and packaging

### [2.1. Bare metal virtual machines hypervisors and containers](<sections/2. Isolation and packaging/2.1. Bare metal virtual machines hypervisors and containers.md>)

1. **Locate hardware guests and the virtualization boundary:** Distinguish bare metal hardware VMs hypervisors hosts guests and virtual CPU counts from language-execution VMs.
2. **Distinguish process containers from separate guest kernels:** Explain Linux namespaces resource controls and container runtimes while identifying VM/container combinations and configuration-dependent isolation.
3. **Trace a mixed arrangement and vary one boundary:** Map workloads to kernels and hardware then distinguish a changed placement or memory limit from verified security availability and performance.

### [2.2. Images layers registries tags and digests](<sections/2. Isolation and packaging/2.2. Images layers registries tags and digests.md>)

1. **Separate packaged images from instances and filesystem layers:** Distinguish container images base layers instance writes and build inputs without equating an artifact with running behavior.
2. **Read registry references and identify the hashed object:** Interpret registry repositories tags digests manifests and multi-platform indexes while preserving content and trust boundaries.
3. **Trace a moving tag and a running instance separately:** Analyze a fictional tag reassignment fixed-content selection and missing runtime inventory; explain deliberate updates and changing external inputs.

## 3. Orchestration and platforms

### [3.1. Clusters nodes pods workloads services and orchestration](<sections/3. Orchestration and platforms/3.1. Clusters nodes pods workloads services and orchestration.md>)

1. **Map orchestration responsibilities to clusters nodes and Pods:** Identify Kubernetes control-plane scheduling node-agent and Pod grouping roles without equating logical units with physical hosts.
2. **Separate desired workloads from observed instances and network access:** Distinguish controllers workload resources replicas readiness and Service endpoints while keeping replacement and data guarantees scoped.
3. **Read a placement and endpoint packet without inventing availability:** Compare hardware nodes desired Pods and eligible endpoints; revise readiness or causal conclusions only when supplied evidence supports them.

### [3.2. Ingress egress service discovery sidecars and service meshes](<sections/3. Orchestration and platforms/3.2. Ingress egress service discovery sidecars and service meshes.md>)

1. **Identify traffic direction and distinguish route intent from implementation:** Interpret ingress egress north-south and east-west boundaries; distinguish Kubernetes Ingress Gateway API and their implementing components.
2. **Separate discovery helper placement and mesh traffic roles:** Explain service discovery sidecar lifecycle support and mesh control/data planes including sidecar and ambient arrangements.
3. **Trace a request across boundaries and vary the evidence:** Classify a fictional routing packet without inferring a working entry path mesh authorization or delivery from configuration names.

## 4. Resource placement and scaling

### [4.1. Regions zones edge serverless and functions](<sections/4. Resource placement and scaling/4.1. Regions zones edge serverless and functions.md>)

1. **Locate regions zones and edge work without inferring complete coverage:** Distinguish provider-defined placement scopes distributed edge work and retained dependency paths from demonstrated recovery or data-location guarantees.
2. **Separate server management from application execution and responsibility:** Explain hosted serverless FaaS BaaS function invocations and execution-environment reuse while distinguishing SQLite terminology and retained application duties.
3. **Read a mixed placement and function packet:** Trace multi-zone regional and edge dependencies; diagnose process-local counting and separate handler success from an external completed effect.

### [4.2. Horizontal vertical scaling autoscaling and elasticity](<sections/4. Resource placement and scaling/4.2. Horizontal vertical scaling autoscaling and elasticity.md>)

1. **Distinguish changing instance size from changing instance count:** Explain vertical up/down and horizontal out/in changes while separating resource allocations from demonstrated scalability.
2. **Separate automatic adjustments from elastic application behavior:** Distinguish autoscaling inputs targets and delays from elasticity; explain Kubernetes workload versus node scaling and safe scale-in duties.
3. **Compare requested resources with a bounded capacity model:** Calculate an explicit synthetic worker/storage ceiling and revise it only with ready-instance or capacity evidence.

## 5. Delivery and operational practices

### [5.1. DevOps SRE platform engineering DevSecOps and GitOps](<sections/5. Delivery and operational practices/5.1. DevOps SRE platform engineering DevSecOps and GitOps.md>)

1. **Distinguish shared delivery practices from reliability engineering:** Explain DevOps and SRE through cooperative work operational engineering and scoped targets rather than universal job titles.
2. **Identify platform products security integration and GitOps control loops:** Distinguish internal self-service offerings DevSecOps activities and the four OpenGitOps principles while preserving actual-state evidence.
3. **Classify work records and ask for the missing outcome:** Map five fictional records to practices and revise GitOps or self-service claims when continuous agents or automatic capability delivery are absent.

### [5.2. Infrastructure as code configuration management and drift](<sections/5. Delivery and operational practices/5.2. Infrastructure as code configuration management and drift.md>)

1. **Distinguish infrastructure definitions from configuration activities:** Explain IaC provisioning configuration management and imperative/declarative definitions while scoping idempotent operation claims.
2. **Separate desired state tool state plans and drift:** Distinguish reference configuration live observations Terraform records refresh plan and apply; identify scope and sensitive artifact limits.
3. **Reconcile an emergency-change packet before selecting a correction:** Compare authorized live changes with older definitions and records then distinguish refresh-only knowledge from resource or intent changes.

## 6. Change pipelines and exposure

### [6.1. CI continuous delivery continuous deployment and environments](<sections/6. Change pipelines and exposure/6.1. CI continuous delivery continuous deployment and environments.md>)

1. **Distinguish integration practice from an automation service:** Explain frequent shared integration CI services runners jobs and pipeline dependencies without treating a green badge as production deployment.
2. **Separate deployability from automatic production deployment:** Expand ambiguous CD and distinguish common environment roles parity and artifact promotion under actual configuration and dependency evidence.
3. **Trace checks deployability and a production action separately:** Classify three flows and inspect candidate-specific test staging and production records including simulated dependencies and old-revision badges.

### [6.2. Builds releases deployments rollouts rollbacks and feature flags](<sections/6. Change pipelines and exposure/6.2. Builds releases deployments rollouts rollbacks and feature flags.md>)

1. **Separate artifact preparation placement and user exposure:** Distinguish builds deployments release meanings flags and cohorts while identifying effective configuration and access boundaries.
2. **Compare rollout strategies and scope recovery actions:** Explain rolling updates canary evaluation blue-green traffic switching rollback and roll forward without assuming compatible data or complete recovery.
3. **Read an exposure timeline without inventing a recovery result:** Trace running images flag evaluations and account exposure then revise conclusions when adoption evidence is removed.

## 7. Applied delivery review

### [7.1. Read a platform diagram and release plan](<sections/7. Applied delivery review/7.1. Read a platform diagram and release plan.md>)

1. **Recover scope placement and responsibility from the diagram packet:** Trace a required registration flow through shared hardware database and recovery duties without inferring independence from box counts.
2. **Compare the release plan with current artifacts and outcomes:** Separate requested capacity backup location candidate-specific checks planned exposure and missing compatibility evidence.
3. **Write a review handoff and update it when evidence changes:** Explain the requirement conflict and evidence gaps to technical and product audiences then revise only supported conclusions after a node moves.

## 8. Overlaps to avoid

### [8.1. Boundaries of infrastructure and delivery vocabulary](<sections/8. Overlaps to avoid/8.1. Boundaries of infrastructure and delivery vocabulary.md>)

1. **Return each infrastructure question to its conceptual owner:** Select precise existing hosting runtime orchestration scaling and delivery explanations while clarifying overloaded labels.
2. **Choose deeper study from the implementation task:** Separate infrastructure and pipeline implementation from published language portability data recovery security and later reliability study.
3. **Turn a mixed portability and recovery request into useful handoffs:** Identify missing host application-lifetime exposure and data evidence and limit a new adapter result to the behavior it checked.

[← Back to IT Vocabulary](<../README.md>)
