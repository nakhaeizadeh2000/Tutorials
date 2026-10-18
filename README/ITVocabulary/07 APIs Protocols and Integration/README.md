# APIs Protocols and Integration

Read interfaces, message exchanges and integration claims with explicit contracts and evidence. Software Execution and Developer Tools, Networks and the Internet, and Web Interfaces Clients and User Experience supply the prerequisites. This domain teaches interpretation and vocabulary; it does not require an API server, framework or cloud account. The OpenAPI reference baseline is 3.2.1, checked 2026-10-18; individual protocol lessons state their own source baselines.

This domain is in progress: 7 of 11 approved lessons are available.

## 1. Interfaces and contracts

### [1.1. APIs endpoints routes operations and contracts](<sections/1. Interfaces and contracts/1.1. APIs endpoints routes operations and contracts.md>)

1. **Distinguish an interface from its implementation and consumers:** apply the general API meaning to communicating applications without equating every API with a web address.
2. **Identify the address operation and routing rule:** interpret endpoints, methods, paths, handlers and overloaded route language with the relevant boundary stated.
3. **Read the contract beyond a successful example:** trace a constructed pending result, identify missing guarantees and separate an OpenAPI description from actual implementation evidence.

### [1.2. Resources representations URIs URLs and origins](<sections/1. Interfaces and contracts/1.2. Resources representations URIs URLs and origins.md>)

1. **Separate the resource its identifier and its representation:** interpret HTTP targets, transmitted state, URI/URL terminology and relative references without assuming a disk-file mapping.
2. **Read an address by components without making a request:** run an offline split and distinguish scheme, authority, path, query, fragment and percent-encoding from reachability or validation.
3. **Compare origins and sites using their intended boundaries:** classify explicit scheme/host/port and registrable-domain examples without inferring browser permission or organizational trust.

## 2. Reading HTTP

### [2.1. Requests responses methods headers status codes and bodies](<sections/2. Reading HTTP/2.1. Requests responses methods headers status codes and bodies.md>)

1. **Annotate the two messages in an exchange:** locate action, target, status, metadata and content in constructed HTTP/1.1 views while distinguishing other versions’ framing.
2. **Read the method as intent rather than a CRUD nickname:** recognize common methods including standardized QUERY and identify where the resource/format/support contract is still needed.
3. **Interpret status content and missing responses separately:** distinguish pending business state, acceptance, no-content success and absence of an HTTP result without guessing completion or blame.

### [2.2. HTTP versions caching validators and content negotiation](<sections/2. Reading HTTP/2.2. HTTP versions caching validators and content negotiation.md>)

1. **Recognize shared semantics across different HTTP versions:** distinguish message encoding and transport from business API versions and identify the observed hop.
2. **Read cache storage freshness and reuse as separate decisions:** interpret cache locations and directives through a timeline without equating fresh with latest origin content.
3. **Trace validators and negotiated representations:** explain conditional retrieval, stored-body reuse and variant matching without treating metadata as an access guarantee.

## 3. Styles formats and schemas

### [3.1. REST RPC GraphQL gRPC and SOAP](<sections/3. Styles formats and schemas/3.1. REST RPC GraphQL gRPC and SOAP.md>)

1. **Separate architectural style interaction model and concrete technology:** classify REST, RPC, GraphQL, gRPC and SOAP without reducing the comparison to transport or format labels.
2. **Recognize the contract artifacts behind GraphQL gRPC and SOAP:** interpret field selection, remote service definitions, call shapes and messaging envelopes with explicit limits.
3. **Compare interfaces without inventing guarantees:** use constructed descriptions to identify supported conclusions and the next evidence needed.

### [3.2. Payloads JSON XML YAML Protobuf and schemas](<sections/3. Styles formats and schemas/3.2. Payloads JSON XML YAML Protobuf and schemas.md>)

1. **Follow data from a value to a transmitted representation:** separate payload boundaries, serialization, parsing, text encoding and transport.
2. **Recognize formats without confusing their data and definition files:** interpret JSON, XML, YAML and Protobuf artifacts with scoped version and schema assumptions.
3. **Distinguish parsing schema checks and business acceptance:** run an offline example contrasting syntax, type and range failures without claiming inventory or authorization evidence.

## 4. Interaction patterns

### [4.1. Polling webhooks SSE and WebSocket](<sections/4. Interaction patterns/4.1. Polling webhooks SSE and WebSocket.md>)

1. **Identify who initiates each exchange and where updates arrive:** compare polling, callbacks, receive streams and two-way channels with explicit participants.
2. **Read event framing and distinguish a library from its transport:** interpret an SSE block, last-event identity and Socket.IO versus WebSocket without inventing recovery guarantees.
3. **Diagnose delivery and freshness claims from a timeline:** separate provider delivery, receiver processing and browser observation and ask for the relevant retry/replay contract.

[← Back to IT Vocabulary](<../README.md>)
