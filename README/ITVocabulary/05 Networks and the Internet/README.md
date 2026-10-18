# Networks and the Internet

Learn to separate local connectivity, addressing, naming, transport and application outcomes. Read the preceding computing, tool and OS domains first. This domain explains network vocabulary through bounded observations and constructed artifacts; it does not require router administration, paid services or packet capture of other people's traffic.

This domain is complete: all 12 approved lessons are available.

## 1. Connections and network scope

### [1.1. Networks internet intranets LAN WAN and interfaces](<sections/1. Connections and network scope/1.1. Networks internet intranets LAN WAN and interfaces.md>)

1. **Describe the communicating participants and the network scope:** distinguish a network, the Internet, an intranet, LAN and WAN without treating scope as a security guarantee.
2. **Locate the interface and connection role before judging reachability:** separate wired/wireless access, OS interfaces and interconnected-network roles.
3. **Interpret local success without claiming universal connectivity:** solve a constructed office-network report and state the next destination-specific question.

## 2. Moving and addressing data

### [2.1. Packets frames protocols and network layers](<sections/2. Moving and addressing data/2.1. Packets frames protocols and network layers.md>)

1. **Separate a protocol rule from the unit carrying data:** identify packets, datagrams, frames, headers and payloads in their stated protocol context.
2. **Use layers as a map of responsibilities:** read Internet-suite and OSI shorthand without expecting a separate program or header for every conceptual layer.
3. **Trace an encapsulated packet across a forwarding step:** distinguish link-local delivery metadata from the carried IP packet and explain the limits of a constructed trace.

### [2.2. IP addresses subnets routing gateways and NAT](<sections/2. Moving and addressing data/2.2. IP addresses subnets routing gateways and NAT.md>)

1. **Read an address together with its version prefix and scope:** distinguish IPv4/IPv6, address/prefix, private/public, loopback and assignment terminology.
2. **Observe subnet membership without pretending to test a network:** run a complete offline prefix example and separate numerical inclusion from actual connectivity.
3. **Separate route selection from address translation:** read a simple route card, identify a next-hop gateway and explain what NAT does and does not establish.

## 3. Naming

### [3.1. Domains hostnames DNS resolvers and records](<sections/3. Naming/3.1. Domains hostnames DNS resolvers and records.md>)

1. **Separate a hierarchical name from registration and hosting:** interpret domain labels, subdomains, hostnames, FQDNs and zones in context.
2. **Follow a naming question through resolver and authority roles:** distinguish client/stub, recursive resolution, referrals and cached answers without assuming every lookup repeats the whole path.
3. **Read record types and a cache discrepancy as scoped evidence:** interpret address/alias/server records and explain why a DNS answer does not prove application reachability.

### [3.2. Email addresses mail servers SMTP IMAP and DNS mail records](<sections/3. Naming/3.2. Email addresses mail servers SMTP IMAP and DNS mail records.md>)

1. **Separate an email address from the identities used in transit:** distinguish local part, domain, display name, message From and SMTP envelope.
2. **Trace submission relay and mailbox access as different tasks:** identify SMTP, IMAP and MX responsibilities without assuming one success proves the whole mail path.
3. **Read domain validation claims without promising safe content:** distinguish SPF, DKIM and current DMARC alignment/policy roles using a constructed evidence card.

## 4. Transport and endpoints

### [4.1. Ports sockets connections and listeners](<sections/4. Transport and endpoints/4.1. Ports sockets connections and listeners.md>)

1. **Identify an endpoint with its protocol address and port context:** distinguish a transport port, socket, connection and local socket family.
2. **Observe a listener and its accepted connection separately:** run one bounded loopback exchange and compare the accepted socket with the listening port.
3. **Read listening and connection claims without inferring service health:** distinguish local binding, remote reachability and successful application behavior in a report.

### [4.2. TCP UDP QUIC and protocol guarantees](<sections/4. Transport and endpoints/4.2. TCP UDP QUIC and protocol guarantees.md>)

1. **Read TCP reliability at the byte-stream boundary:** distinguish ordered delivery, retransmission and application message framing from business completion.
2. **Interpret UDP without assuming every application above it is unreliable:** separate datagram delivery limits from added application or transport mechanisms.
3. **Locate QUIC streams and datagrams above UDP:** recognize protected multiplexed transport, stream-specific ordering and negotiated datagram support.
4. **Challenge a guarantee using a concrete failure timeline:** identify what an acknowledgement establishes and what remains an application-level question.

## 5. Intermediaries and protected connections

### [5.1. Proxies reverse proxies VPNs firewalls and load balancers](<sections/5. Intermediaries and protected connections/5.1. Proxies reverse proxies VPNs firewalls and load balancers.md>)

1. **Classify a proxy by the side and protocol it serves:** distinguish client-selected forwarding, reverse proxying and load distribution without assuming separate devices.
2. **Separate private connectivity from traffic policy:** identify VPN tunnel scope and firewall decisions without inferring universal protection or application permission.
3. **Trace the failed hop and the evidence behind a health claim:** interpret a constructed multi-role edge and recognize the limited scope of a connection probe.

### [5.2. TLS certificates HTTPS and historical SSL wording](<sections/5. Intermediaries and protected connections/5.2. TLS certificates HTTPS and historical SSL wording.md>)

1. **Identify the channel and protocol behind protected-connection language:** distinguish TLS, HTTPS, handshake and historical SSL labels with explicit version scope.
2. **Separate a certificate binding from successful service identity verification:** interpret CA, trust chain, subject alternative names and a constructed name mismatch without disabling checks.
3. **Mark protection boundaries across an intermediary:** distinguish TLS termination, separate backend protection and application trust in a path diagram.

## 6. Network measurements and failures

### [6.1. Latency bandwidth throughput jitter and packet loss](<sections/6. Network measurements and failures/6.1. Latency bandwidth throughput jitter and packet loss.md>)

1. **Separate elapsed delay from capacity and observed rate:** interpret one-way delay, round-trip time, bandwidth and throughput with explicit units and boundaries.
2. **Specify how variation and loss were counted:** distinguish delay-variation metrics and missing-by-threshold observations from universal network diagnoses.
3. **Calculate a scoped report from synthetic observations:** run complete rate/loss/variation arithmetic and state the live measurements it does not establish.

## 7. Applied diagnosis

### [7.1. Describe a name connection or timeout failure](<sections/7. Applied diagnosis/7.1. Describe a name connection or timeout failure.md>)

1. **Record the attempted path and the last established outcome:** separate name resolution, connection, service verification and application response evidence.
2. **Compare four failure cards without inventing a root cause:** interpret NXDOMAIN, refusal, identity mismatch and a scoped timeout with targeted next questions.
3. **Write a useful handoff and justify the next observation:** preserve uncertainty, request correlation and intended policy while avoiding blind retries or broad changes.

## 8. Overlaps to avoid

### [8.1. Boundaries of network vocabulary](<sections/8. Overlaps to avoid/8.1. Boundaries of network vocabulary.md>)

1. **Route a networking question by the missing competence:** separate interpreting protocols and observations from administering or implementing the network.
2. **Keep application contracts security and reliability with their owners:** identify where the network model ends without repeating format, identity or distributed-system lessons.
3. **Prepare a scoped next-study handoff:** solve a mixed network claim and state evidence and implementation work that remain.

[← Back to IT Vocabulary](<../README.md>)
