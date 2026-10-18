# Operating Systems Files and Environments

Explain how programs receive resources, locate files and configuration, and report outcomes. Read [Software Execution and Developer Tools](<../03 Software Execution and Developer Tools/README.md>) first. The general vocabulary is cross-platform; concrete Linux and Python observations declare their environment and do not require administration of a server.

This domain is in progress: 3 of 9 approved lessons are available.

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

[← Back to IT Vocabulary](<../README.md>)
