# IO and Serialization and Encoding

## 1. Number Systems (and why they matter for bytes)

### [1.1. Introduction to Number System](<./sections/1. Number Systems (and why they matter for bytes)/1.1. Introduction to Number System.md>)

1. **Why number systems show up in .NET IO**: files/networks are bytes; humans think in decimal/binary/hex; conversions are glue code.
2. **Place value + base math**: understanding base `b` makes parsing/formatting predictable and prevents off-by-radix bugs.
3. **Separating “numeric value” vs “text representation”**: conversions should be explicit about encoding/radix, not inferred.

### [1.2. Binary Number System](<./sections/1. Number Systems (and why they matter for bytes)/1.2. Binary Number System.md>)

1. **Bits vs bytes**: 8 bits = 1 byte; binary strings often represent bytes, not arbitrary integers.
2. **C# binary literals for readability**: `0b_1010` (great for masks/flags, not for runtime parsing).
3. **Parsing/formatting at runtime**: use `Convert.ToInt32(text, 2)` / `Convert.ToString(value, 2)` and validate input length/characters.

### [1.3. Octal Number System](<./sections/1. Number Systems (and why they matter for bytes)/1.3. Octal Number System.md>)

1. **Octal is mostly a legacy/compat base**: still useful for permissions-like conventions and legacy encodings.
2. **C# literal support**: C# directly supports `0b` and `0x` for literals; for octal, rely on runtime parsing/formatting (radix conversions).
3. **Parsing/formatting at runtime**: use `Convert.ToInt32(text, 8)` / `Convert.ToString(value, 8)` and keep validation strict.

### [1.4. Hexadecimal Number System](<./sections/1. Number Systems (and why they matter for bytes)/1.4. Hexadecimal Number System.md>)

1. **Hex as a byte-friendly view**: 2 hex digits = 1 byte; common when debugging encodings and binary protocols.
2. **Parsing/formatting**: use `Convert.ToInt32(hex, 16)` for numbers, and prefer byte-level hex parsing helpers for buffers.
3. **Formatting conventions**: be explicit about leading zeros (e.g., fixed-width hex) when comparing or signing data.

### [1.5. Base conversions in real code](<./sections/1. Number Systems (and why they matter for bytes)/1.5. Base conversions in real code.md>)

1. **Validate before converting**: check allowed characters and radix-aligned length to avoid partial parses.
2. **Prefer spans for performance**: for hot paths, avoid allocations when converting substrings (use `Span<char>` patterns where applicable).
3. **Avoid culture surprises**: conversions should use radix parsing (`Convert`) rather than culture-dependent numeric parsing.

## 2. Character Encoding Fundamentals

### [2.1. Introduction to Character Encoding](<./sections/2. Character Encoding Fundamentals/2.1. Introduction to Character Encoding.md>)

1. **Text flow is two steps**: characters (Unicode code points) -> bytes (an encoding) -> storage/transport.
2. **Encoding is not just charset**: encoding includes mapping rules (and possibly stateful behavior), not only a name.
3. **Correctness comes from boundaries**: encoding bugs often appear at chunk boundaries (stream reads) unless you use the right APIs (`StreamReader`/`StreamWriter`).

### [2.2. Ascii Character Encoding](<./sections/2. Character Encoding Fundamentals/2.2. Ascii Character Encoding.md>)

1. **ASCII is a subset**: 0..127 map directly; values above 127 are undefined or replaced depending on decoder policy.
2. **Use ASCII for “restricted” protocols**: but for general text interchange, ASCII alone is not enough.
3. **Watch for replacement characters**: decode failures should be surfaced (or explicitly handled), not silently ignored.

### [2.3. Unicode Character Encoding](<./sections/2. Character Encoding Fundamentals/2.3. Unicode Character Encoding.md>)

1. **Unicode vs UTF-8/UTF-16/UTF-32**: Unicode is the repertoire; UTF encodings are concrete byte encodings.
2. **UTF-16 is code-unit based**: a `char` is a UTF-16 code unit; supplementary code points require surrogate pairs.
3. **Prefer `System.Text.Rune` for code points**: it helps you handle characters without manually juggling surrogate pairs.

### [2.4. Practical encodings in .NET (`System.Text.Encoding`)](<./sections/2. Character Encoding Fundamentals/2.4. Practical encodings in .NET (System.Text.Encoding).md>)

1. **Common encodings**: `Encoding.ASCII`, `Encoding.UTF8`, `Encoding.Unicode` (UTF-16 LE), `Encoding.UTF32`.
2. **BOM realities**: BOM presence/absence affects interoperability; `StreamReader` can detect BOM when configured.
3. **UTF-8 with/without BOM**: choose deliberately for interoperability; be consistent across producers/consumers.
4. **Decoder/encoder behavior on invalid bytes**: define fallback strategy (replacement vs exception) for correctness.

### [2.5. Encoding in streams (chunk boundaries)](<./sections/2. Character Encoding Fundamentals/2.5. Encoding in streams (chunk boundaries).md>)

1. **Never assume character boundaries align with byte boundaries**: multi-byte sequences (UTF-8) can be split across reads.
2. **Use `StreamReader`/`StreamWriter`**: they maintain decoder/encoder state across chunks.
3. **When you must use raw bytes**: rely on `Encoder`/`Decoder` and buffer partial sequences correctly.

## 3. Introduction to `System.IO` Namespace

### [3.1. Introduction to System.IO namespace](<./sections/3. Introduction to System.IO Namespace/3.1. Introduction to System.IO namespace.md>)

1. **System.IO is about infrastructure**: paths, files, directories, and streams; it’s the “bytes & storage” layer.
2. **Use streams as the foundation**: prefer stream-based APIs for large data to avoid materializing everything in memory.
3. **Resource lifetime is critical**: files/sockets are OS handles; always dispose (`using` / `await using`).

### [3.2. Paths and filesystem primitives (quick but important)](<./sections/3. Introduction to System.IO Namespace/3.2. Paths and filesystem primitives (quick but important).md>)

1. **Use `System.IO.Path`**: join/normalize safely instead of manual string concatenation.
2. **Understand separators**: Windows paths use `\`, but APIs generally handle normalization; avoid hard-coded separators.
3. **Avoid TOCTOU mistakes**: between “check exists” and “open”, filesystem state can change—handle exceptions as reality.

### [3.3. Sync vs async IO (performance framing)](<./sections/3. Introduction to System.IO Namespace/3.3. Sync vs async IO (performance framing).md>)

1. **Async is not faster by itself**: it improves scalability by freeing threads during IO waits.
2. **Prefer `*Async` for high-latency IO**: especially in servers; for CLI tools, sync may be perfectly fine.
3. **Buffering matters**: pick buffer sizes to balance syscalls and memory footprint.

## 4. File and Directory APIs

### [4.1. 'File' class](<./sections/4. File and Directory APIs/4.1. File class.md>)

1. **Static convenience methods**: good when you can read/write whole content safely.
2. **Memory caution**: `ReadAllText`/`ReadAllBytes` materialize full data; for big files use streams (`FileStream`) instead.
3. **Atomicity expectations**: “write then replace” is not guaranteed unless you implement it (e.g., temp file + move strategy).

### [4.2. 'File' class - Read and Write](<./sections/4. File and Directory APIs/4.2. File class - Read and Write.md>)

1. **Common patterns**: `ReadAllText`/`WriteAllText`, `ReadAllBytes`/`WriteAllBytes`, append variants, and copying/moving/deleting.
2. **Encoding control**: when writing text, explicitly pass `Encoding` to avoid default encoding mismatches.
3. **Async variants**: use `ReadAllTextAsync`/`WriteAllTextAsync` when building scalable IO flows.
4. **Large payload rule**: for large content, prefer stream + `ReadAsync`/`WriteAsync` over all-at-once helpers.

### [4.3. 'FileInfo' class](<./sections/4. File and Directory APIs/4.3. FileInfo class.md>)

1. **Instance-based metadata access**: `FileInfo` wraps a path and exposes file properties and operations.
2. **Better for repeated operations**: if you need multiple file operations/properties, reuse the same `FileInfo`.
3. **Consistency with `FileSystemInfo`**: understand shared base capabilities and property semantics.

### [4.4. 'FileInfo' class - Properties](<./sections/4. File and Directory APIs/4.4. FileInfo class - Properties.md>)

1. **Key properties**: `Exists`, `FullName`, `Name`, `Extension`, `DirectoryName`.
2. **Size and times**: `Length`, `CreationTime`, `LastAccessTime`, `LastWriteTime` and what “time” means on your OS.
3. **Operational safety**: property getters can touch the filesystem; cache if repeated in hot paths.

### [4.5. 'Directory' class](<./sections/4. File and Directory APIs/4.5. Directory class.md>)

1. **Static directory operations**: create/delete/exists and enumerate entries.
2. **Prefer `Enumerate*` over `Get*`**: enumeration streams results (less memory), while `Get*` may materialize collections.
3. **Deletion semantics**: deleting directory trees is destructive; handle permissions and partial failures.

### [4.6. 'DirectoryInfo' class](<./sections/4. File and Directory APIs/4.6. DirectoryInfo class.md>)

1. **Instance-based metadata**: `DirectoryInfo` wraps a path and supports richer operations than the static `Directory` API.
2. **Composition model**: pair `DirectoryInfo` with `FileInfo` for consistent metadata and operations.
3. **Repeated operations**: reuse `DirectoryInfo` to avoid repeated path parsing.

### [4.7. 'DirectoryInfo' class - Properties](<./sections/4. File and Directory APIs/4.7. DirectoryInfo class - Properties.md>)

1. **Key properties**: `Exists`, `FullName`, `Name`, and shared `FileSystemInfo` members.
2. **Enumerations**: `GetFiles/GetDirectories` vs `EnumerateFiles/EnumerateDirectories` differences for memory/perf.
3. **Performance note**: properties and enumerations may hit the filesystem; keep hot-path logic minimal.

### [4.8. 'DriveInfo' class](<./sections/4. File and Directory APIs/4.8. DriveInfo class.md>)

1. **Drive metadata**: `DriveType`, `DriveFormat`, `IsReady`, `TotalSize`, `TotalFreeSpace`.
2. **Reality check**: drive availability changes; handle exceptions and re-check when needed.
3. **Use in tooling**: disk space checks should still handle race conditions and changing free space.

## 5. File Streams, Text Streams, and Binary Streams

### [5.1. 'FileStream' class](<./sections/5. File Streams, Text Streams, and Binary Streams/5.1. FileStream class.md>)

1. **Core constructor knobs**: `FileMode`, `FileAccess`, `FileShare`, buffer size, and options.
2. **Async readiness**: use `FileOptions.Asynchronous` when you will call `ReadAsync/WriteAsync` frequently.
3. **Throughput optimizations**: consider `FileOptions.SequentialScan` or `RandomAccess` depending on access pattern.
4. **Span-friendly IO**: modern APIs accept `Span<byte>/Memory<byte>` in many stream implementations; it reduces allocations.

### [5.2. StreamWriter and StreamReader](<./sections/5. File Streams, Text Streams, and Binary Streams/5.2. StreamWriter and StreamReader.md>)

1. **Text is not bytes**: choose `Encoding` explicitly; don’t rely on defaults in libraries.
2. **Newlines and formatting**: `WriteLine` uses platform newline; if protocol requires fixed newline, manage it explicitly.
3. **Buffer sizes and flushing**: avoid calling `Flush` excessively; it increases syscalls.
4. **Async reads/writes**: use `ReadLineAsync` / `WriteAsync` for scalable IO (especially servers).

### [5.3. BinaryWriter and BinaryReader](<./sections/5. File Streams, Text Streams, and Binary Streams/5.3. BinaryWriter and BinaryReader.md>)

1. **Primitive layout expectations**: understand that they typically use little-endian for numeric primitives.
2. **String encoding inside binary**: `BinaryWriter.Write(string)` includes length + text bytes; be consistent when reading.
3. **Versioning strategy**: design your binary format with headers/version fields to support evolution.
4. **Avoid “magic” schemas**: document field order, sizes, and invariants; otherwise interoperability breaks.

## 6. Serialization

### [6.1. Binary Serialization](<./sections/6. Serialization/6.1. Binary Serialization.md>)

1. **Prefer explicit binary formats**: build on `BinaryWriter/BinaryReader` so schema is defined and safe.
2. **Do not use `BinaryFormatter`**: it is obsolete/insecure; use custom formats or safer serializers.
3. **Performance + correctness**: avoid per-field allocations; use buffered reads/writes and consider `Span<byte>` where you own the format.
4. **Schema evolution**: include version numbers, reserved fields, and strict validation on read.

### [6.2. Json Serialization](<./sections/6. Serialization/6.2. Json Serialization.md>)

1. **Prefer `System.Text.Json`**: it’s the modern default, fast, and integrates well with streaming APIs.
2. **Use `JsonSerializerOptions` deliberately**: casing policies, `DefaultIgnoreCondition`, and number handling should be explicit.
3. **Schema/contract control**: prefer DTOs with clear property names; use attributes only when necessary.
4. **Polymorphism (when needed)**: use the modern derived-type mechanisms (`JsonDerivedType` / type info-based approaches) rather than legacy patterns.
5. **Performance for high volume**: use source-generated context (`JsonSerializerContext` / `JsonTypeInfo`) to reduce reflection overhead.
6. **Streaming large JSON**: use stream-based overloads and/or `Utf8JsonReader/Writer` to avoid materializing huge strings.

### [6.3. Xml Serialization](<./sections/6. Serialization/6.3. Xml Serialization.md>)

1. **Choose the XML serializer**: `XmlSerializer` for attribute-driven object mapping; `DataContractSerializer` for contract-based approaches.
2. **Security concerns**: protect against XXE and billion-laughs style attacks by using secure reader settings and limits.
3. **Performance note**: `XmlSerializer` can be slow to initialize; cache serializer instances for repeated use.
4. **Encoding considerations**: XML can specify encoding; ensure you write/read with the intended `Encoding`.

### [6.4. Serialization safety and reliability](<./sections/6. Serialization/6.4. Serialization safety and reliability.md>)

1. **Treat untrusted input as hostile**: validate after deserialization; enforce size/depth limits to prevent memory/CPU bombs.
2. **Versioning is mandatory**: add “unknown fields” handling and explicit version negotiation for long-lived data.
3. **Avoid silent data loss**: be strict about numeric precision, date/time kinds, and null handling.

## 7. IMP points to remember

### [7.1. IO + encoding + serialization checklist (mentor-grade)](<./sections/7. IMP points to remember/7.1. IO + encoding + serialization checklist (mentor-grade).md>)

1. **Choose the right abstraction**: `File` helpers for small whole-content payloads; `FileStream`/streams for large data and for performance control.
2. **Always control encoding**: pass `Encoding` explicitly for text; use `StreamReader/Writer` to handle chunk boundaries correctly.
3. **Binary format = contract**: define endianness, field order, and versioning; never rely on “implicit” object graphs.
4. **Prefer safe serializers**: use `System.Text.Json` and XML serializers safely; avoid insecure legacy formats (`BinaryFormatter`).
5. **Async for scalability**: use async IO to reduce thread blocking in servers; understand buffering and syscall overhead.
6. **Security limits**: apply size/depth limits and validation to prevent denial-of-service via serialization payloads.
7. **Measure before micro-optimizing**: allocations, buffering, and async choice dominate real-world throughput.

## 8. Questions and answers for interviews

### [8.1. Common interview Q&A: IO, encoding, and serialization (C# 15)](<./sections/8. Questions and answers for interviews/8.1. Common interview Q&A: IO, encoding, and serialization (C# 15).md>)

1. **Q: What’s the difference between reading text and reading bytes?**
   1. **A:** Bytes are raw storage; text requires an encoding to map bytes to characters. Use `StreamReader`/`StreamWriter` with an explicit `Encoding` to handle chunk boundaries correctly.
2. **Q: Why is `File.ReadAllText` risky for very large files?**
   1. **A:** It materializes the entire content in memory. For large data, prefer `FileStream` with stream-based reads.
3. **Q: When should you use `FileStream` instead of `File`?**
   1. **A:** When you need fine-grained control over buffering, access mode, sharing, async behavior, or you must stream large payloads.
4. **Q: Why can binary/hex show up in “text” code?**
   1. **A:** Many protocols display bytes as binary/hex for debugging, and sometimes store them as text. Conversion needs explicit radix and fixed-width rules.
5. **Q: What can go wrong when decoding UTF-8 manually from chunks?**
   1. **A:** Multi-byte sequences can be split across reads; manual decoding can corrupt characters unless you preserve decoder state (use `StreamReader`).
6. **Q: What’s the safest way to do binary serialization today?**
   1. **A:** Use explicit binary formats over `BinaryWriter/BinaryReader` (or custom `Stream` code) and include validation/versioning; avoid insecure legacy serializers.
7. **Q: Why is `BinaryFormatter` discouraged?**
   1. **A:** It’s obsolete/insecure for untrusted input and can enable remote code execution patterns. Prefer safe, contract-based serializers.
8. **Q: How do you improve `System.Text.Json` performance for many calls?**
   1. **A:** Use source generation (`JsonSerializerContext` / `JsonTypeInfo`) to reduce reflection and allocate less during serialization.
9. **Q: What security issue is most important for XML deserialization?**
   1. **A:** XXE and resource exhaustion; use secure XML reader/writer settings and enforce limits.
10. **Q: How do you ensure serialization works across versions?**
   1. **A:** Add versioning fields, keep field contracts stable, handle unknown fields, and validate required data on read.

## 9. Overlaps to avoid (where this domain stops)

### [9.1. Boundary markers (prevent duplicates across your existing domains)](<./sections/9. Overlaps to avoid/9.1. Boundary markers (prevent duplicates across your existing domains).md>)

1. **Console IO formatting**: covered in `CSharp language basics` (don’t duplicate `System.Console` trivia here).
2. **Async/concurrency execution models**: covered in `Cuncurrent & Parallel` (this domain focuses on *IO APIs*, encoding correctness, and serialization formats).
3. **Resource cleanup patterns (`IDisposable`, `using`, `await using`)**: covered in `GC and Destructors and IDisposable`.
4. **Serialization constructor requirements for ORMs**: keep that interview detail in `Constructors` (this domain focuses on IO + serialization format mechanics).
