# Operating Systems Files and Environments

Explain how programs receive resources, locate files and configuration, and report outcomes. Read [Software Execution and Developer Tools](<../03 Software Execution and Developer Tools/README.md>) first. The general vocabulary is cross-platform; concrete Linux and Python observations declare their environment and do not require administration of a server.

This domain is in progress: 7 of 9 approved lessons are available.

## 1. Operating system responsibilities

### [1.1. Operating systems kernels user space and system calls](<sections/1. Operating system responsibilities/1.1. Operating systems kernels user space and system calls.md>)

1. **Locate the kernel within the operating-system picture:** separate OS services, privileged kernel responsibilities and user-space execution.
2. **Distinguish an application API from a system-call boundary:** trace a request without assuming one source function equals one kernel entry.
3. **Observe one Linux system call in a bounded example:** run an optional filtered trace and explain what its result and hidden scope establish.

### [1.2. Processes threads tasks and services](<sections/1. Operating system responsibilities/1.2. Processes threads tasks and services.md>)

1. **Separate a program from its running instances and threads:** identify process resources and thread execution without equating them to CPU cores.
2. **Observe the process boundary independently of thread identity:** run a complete thread and child-process comparison with explicit completion.
3. **Read task and service labels in their management context:** distinguish units of work, managed lifecycles and daemon terminology with a restart exercise.

## 2. Files and locations

### [2.1. Files directories paths links and mounts](<sections/2. Files and locations/2.1. Files directories paths links and mounts.md>)

1. **Resolve a location from its starting point and path components:** distinguish files, directories, absolute/relative paths and a process working directory.
2. **Distinguish a second name from a copy or a symbolic target:** observe hard and symbolic links across a rename in an isolated complete example.
3. **Include mounts and the process view in a location claim:** explain why an existing directory or absolute spelling does not identify the expected dataset.

## 3. Configuration and access

### [3.1. Users groups permissions privileges and ownership](<sections/3. Configuration and access/3.1. Users groups permissions privileges and ownership.md>)

1. **Identify the actor and the resource before interpreting access:** separate account, process credentials, user/group ownership, permission and privilege.
2. **Read Unix permission bits without treating them as the whole policy:** interpret rwx and octal modes and observe controlled file metadata.
3. **Diagnose a denied operation without widening access blindly:** solve a stated-assumption access scenario and identify traversal, ACL and identity evidence still needed.

### [3.2. Environment variables configuration and secrets](<sections/3. Configuration and access/3.2. Environment variables configuration and secrets.md>)

1. **Distinguish deployment context from process configuration:** identify variable scope, source precedence and loader-specific configuration files.
2. **Parse named values according to an explicit contract:** observe synthetic child-process settings, text truthiness and a controlled invalid-value failure.
3. **Distinguish secret delivery from secret protection:** recognize secret/configuration boundaries and request redacted diagnostic evidence.

## 4. Resources and process outcomes

### [4.1. Memory allocation stack heap virtual memory and swap](<sections/4. Resources and process outcomes/4.1. Memory allocation stack heap virtual memory and swap.md>)

1. **Separate allocation call state and object lifetime:** explain allocation, deallocation, stack and heap without assigning every value a universal storage location.
2. **Distinguish virtual addresses resident RAM and swap:** identify address-space, residency and backing scopes before interpreting a memory report.
3. **Observe a scoped allocation counter without confusing it with RSS:** run a bounded traced-allocation example and state the physical-memory claims it does not establish.

### [4.2. Standard streams pipes exit codes and signals](<sections/4. Resources and process outcomes/4.2. Standard streams pipes exit codes and signals.md>)

1. **Separate input output and diagnostic channels:** identify stdin/stdout/stderr independently from visible windows and completion status.
2. **Trace data through a pipe without merging the other evidence:** run a bounded shell pipeline and preserve stage and data-format questions.
3. **Distinguish a program exit from signal termination:** inspect separate streams, a deliberate nonzero exit and self-signaled child termination under the stated API.

[← Back to IT Vocabulary](<../README.md>)
