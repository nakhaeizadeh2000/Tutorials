# Performance Observability and Reliability

Learn to interpret service measurements, operational evidence and reliability claims. Build on units, network and data vocabulary, distributed behavior, quality evidence and delivery boundaries. Examples declare their observation scopes; no deployed service or monitoring platform is assumed.

This domain is in progress: 10 of 13 approved lessons are available.

## 1. Measuring behavior

### [1.1. Latency response time throughput utilization and saturation](<sections/1. Measuring behavior/1.1. Latency response time throughput utilization and saturation.md>)

1. **State which time and work rate a report measures:** Distinguish response and service boundaries arrival and completion rates outstanding counts and successful business throughput.
2. **Separate resource use from excess waiting work:** Interpret time and capacity utilization denominators saturation and snapshot versus interval scope without diagnosing from one percentage.
3. **Calculate rates and preserve the unresolved cause:** Analyze a synthetic request CPU and pool packet then explain why more completed timeout responses do not improve successful registrations.

### [1.2. Means medians percentiles distributions and tail latency](<sections/1. Measuring behavior/1.2. Means medians percentiles distributions and tail latency.md>)

1. **Distinguish a center from a distribution and its tail:** Explain mean median spread histogram buckets and slow observations without treating a favorable center as complete user evidence.
2. **Read a percentile with its calculation and aggregation limits:** Interpret percentile quantile and finite-sample methods while distinguishing pooled ranks from averaged worker summaries.
3. **Calculate a sample and expose a misleading worker summary:** Run exact nearest-rank calculations compare p99 with the maximum and explain how excluded requests change the report population.

## 2. Finding and comparing costs

### [2.1. Benchmarks baselines profiles bottlenecks and capacity](<sections/2. Finding and comparing costs/2.1. Benchmarks baselines profiles bottlenecks and capacity.md>)

1. **Define the comparison before interpreting a benchmark score:** State the workload reference configuration behavior and measurement boundary for a meaningful comparison.
2. **Use profiles to investigate a limiting path:** Distinguish sampled CPU or other activity hotspots and bottlenecks from full response time using a serial cost model.
3. **Read a capacity report against its workload and criteria:** Identify tested acceptable operating points and reject unsupported comparisons across workload and failure conditions.

### [2.2. Cold starts warmups caches hits misses TTLs and eviction](<sections/2. Finding and comparing costs/2.2. Cold starts warmups caches hits misses TTLs and eviction.md>)

1. **Identify which execution state is cold or warm:** Distinguish startup preparation code warmup cache population and reused state without attributing a changed duration to one unverified cause.
2. **Distinguish a usable cache result from a current source fact:** Explain hit miss refill ratio TTL invalidation and stampede while retaining the existing general expiration and eviction owner.
3. **Trace freshness lifetime and cost through explicit policies:** Analyze a fixed-expiry source-change timeline early eviction and serial cache costs then revise a claim when only warm-process evidence remains.

## 3. Telemetry and investigation

### [3.1. Monitoring observability instrumentation and telemetry](<sections/3. Telemetry and investigation/3.1. Monitoring observability instrumentation and telemetry.md>)

1. **Separate an activity a capability and the data supporting it:** Distinguish monitoring observability and telemetry through the questions supported rather than tool or data-type labels.
2. **Trace instrumentation collection and interpretation separately:** Explain observation points automatic instrumentation exporters collectors and backends while identifying support retention transport and query limits.
3. **Answer a business question from a limited telemetry packet:** Distinguish HTTP acceptance from a worker commit and update a claim only with correctly scoped delivered outcome evidence.

### [3.2. Logs metrics traces spans correlation and cardinality](<sections/3. Telemetry and investigation/3.2. Logs metrics traces spans correlation and cardinality.md>)

1. **Choose the artifact from the observation needed:** Distinguish event records numerical instruments and related operation spans including trace request and stack identities.
2. **Correlate recorded operations without inventing missing ones:** Associate a simplified log with overlapping client spans and identify missing coverage remote outcomes or propagation.
3. **Account for dimensions and cardinality before adding identifiers:** Calculate distinct metric label combinations and distinguish investigative attributes from unconstrained series growth or overflow detail loss.

## 4. Service-level language

### [4.1. SLIs SLOs SLAs error budgets and burn rates](<sections/4. Service-level language/4.1. SLIs SLOs SLAs error budgets and burn rates.md>)

1. **Separate an indicator a target and an agreement:** State SLI measurement scope SLO target window and SLA consequences while identifying implementation coverage.
2. **Calculate allowed bad outcomes and the rate of spending them:** Explain event-based error budgets policies and normalized burn rates without converting unlike denominators or predicting unsupported exhaustion times.
3. **Read a passing window with a concerning short-window rate:** Calculate observed service level remaining allowance and short-window burn then detect a query that drops correctness from the good-event rule.

## 5. Surviving and recovering

### [5.1. Availability reliability durability resilience and fault tolerance](<sections/5. Surviving and recovering/5.1. Availability reliability durability resilience and fault tolerance.md>)

1. **Identify the property and the service boundary:** Distinguish usable service continuity and retained accepted data while preserving formal and everyday reliability meanings.
2. **Distinguish continuing through faults from recovering and adapting:** Explain scoped fault tolerance resilience graceful degradation and operational mean-time conventions without universal guarantees.
3. **Classify failure evidence without expanding its scope:** Evaluate five independent arrangements and revise a fault-tolerance claim when the acceptable response-time requirement changes.

### [5.2. Redundancy failover disaster recovery RTO and RPO](<sections/5. Surviving and recovering/5.2. Redundancy failover disaster recovery RTO and RPO.md>)

1. **Distinguish extra components from a working recovery path:** Explain redundancy failover failback active-passive and active-active arrangements and recovery readiness without guaranteed outcomes.
2. **Define recovery time and data-point objectives separately:** State RTO start and usable-service finish alongside RPO history age and distinguish objectives from performed recovery evidence.
3. **Compare a recovery timeline with both objectives:** Calculate workflow recovery and recovered-history gaps then revise only the data-point conclusion when later committed history becomes recoverable.

## 6. Incident operations

### [6.1. Alerts incidents severity priority mitigation and remediation](<sections/6. Incident operations/6.1. Alerts incidents severity priority mitigation and remediation.md>)

1. **Separate a detection signal from an impact and response record:** Distinguish alerts notification acknowledgment triage on-call response and coordinated operational incidents.
2. **Distinguish impact urgency relief and correction:** Interpret local severity priority mitigation remediation and resolution meanings without equating response labels with corrected causes.
3. **Read a response timeline and preserve its unknowns:** Trace signal impact diversion and checked restoration then withdraw an outcome claim when verification evidence is removed.

[← Back to IT Vocabulary](<../README.md>)
