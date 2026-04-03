## 0. Language version maps (C# 9–15)

These **indexes** list what shipped when and point back into topical domains. Deep teaching lives in the sections below. [Update C# 9](<../Update CSharp 9/README.md>) · [10](<../Update CSharp 10/README.md>) · [11](<../Update CSharp 11/README.md>) · [12](<../Update CSharp 12/README.md>) · [13](<../Update CSharp 13/README.md>) · [14](<../Update CSharp 14/README.md>) · [15](<../Update CSharp 15/README.md>).

## 1. Getting started (tooling → first run)

### [1.1. Installing Visual Studio (modern .NET workloads)](<./sections/1. Getting started/1.1. Installing Visual Studio (modern .NET workloads).md>)

1. **What to install (workloads, SDKs, and how they map to app types)**
2. **Project templates you should start with (Console, Web, Worker, Tests)**
3. **Mentor notes (Debug vs Release, x64 vs arm64, “it runs” vs “it deploys”)**

### [1.2. Creating your first app (Console + top-level statements)](<./sections/1. Getting started/1.2. Creating your first app (Console + top-level statements).md>)

1. **Two ways: Visual Studio vs `dotnet new console` (same result, different workflow)**
2. **Top-level statements vs explicit `Main` (what the compiler generates)**
3. **Good defaults (nullable enabled, implicit usings, predictable entry point)**

### [1.3. Command line arguments (`args`), `Environment`, exit codes, parsing](<./sections/1. Getting started/1.3. Command line arguments args Environment exit codes parsing.md>)

1. **`string[] args` semantics** (never null; may be empty; shell quoting pitfalls)
2. **`Environment` vs `args`** (process paths, environment variables, working directory)
3. **CLI design** (exit codes; prefer real parsers when the CLI grows)

## 2. Console I/O: `System.Console` (the basics, done correctly)

### [2.1. The `System.Console` class: input, output, formatting](<./sections/2. Console I-O/2.1. The System.Console class input output formatting.md>)

1. **Write/WriteLine, ReadLine, ReadKey (and when each is appropriate)**
2. **Formatting (interpolation, composite formatting, culture, and performance implications)**
3. **Common pitfalls (null input, blocking reads, encoding, flushing, testing console apps)**

## 3. Variables and primitive types (what you really store in memory)

### [3.1. Variables, identifiers, and assignment fundamentals](<./sections/3. Variables and primitive types/3.1. Variables identifiers and assignment fundamentals.md>)

1. **Declaration forms (`var`, explicit types, `const`, `readonly`)**
2. **Definite assignment + scope (why the compiler “won’t let you”)**
3. **Mentor notes (readability-first `var`, avoid “stringly typed” flags, prefer small scopes)**

### [3.2. Primitive types and literals (and when overflow matters)](<./sections/3. Variables and primitive types/3.2. Primitive types and literals and when overflow matters.md>)

1. **Integral types (`byte`…`long`), floating point (`float`/`double`), and `decimal`**
2. **`char`, `bool`, `string`, `DateTime` vs `DateTimeOffset` (starter guidance)**
3. **Checked vs unchecked arithmetic (correctness first; performance is a second-order effect)**

## 4. Operators and expressions (how C# evaluates code)

### [4.1. Operators: arithmetic, comparison, logical, bitwise](<./sections/4. Operators and expressions/4.1. Operators arithmetic comparison logical bitwise.md>)

1. **Precedence and associativity (when parentheses are worth it)**
2. **Short-circuiting (`&&`/`||`) and side effects (avoid hidden work)**
3. **Good to know (integer division, overflow, floating-point equality, bit flags)**

### [4.2. Assignment operators and expression forms](<./sections/4. Operators and expressions/4.2. Assignment operators and expression forms.md>)

1. **`=`, `+=`, `-=`, `*=`, `/=`, `??=`, and compound assignments**
2. **Increment/decrement (`++x` vs `x++`) and readability**
3. **Mentor notes (avoid cleverness; keep side effects obvious; prefer intent-revealing code)**

## 5. Branching and decision making (write correct control flow)

### [5.1. `if`, `else if`, `else`: patterns, style, and examples](<./sections/5. Branching and decision making/5.1. if else if else patterns style and examples.md>)

1. **Canonical forms (simple `if`, `if-else`, `else if` chains, nested `if`)**
2. **Examples: validation, range checks, and early returns**
3. **Best practices (guard clauses, keep nesting shallow, don’t duplicate expensive conditions)**

### [5.2. Nested `if` (when it’s ok) + refactoring alternatives](<./sections/5. Branching and decision making/5.2. Nested if when its ok and refactoring alternatives.md>)

1. **Examples: multi-step decision trees (and where they go wrong)**
2. **Alternatives: guard clauses, `switch`, and splitting into small functions**
3. **Performance notes (branch predictability is real; clarity usually wins first)**

### [5.3. `switch` and `switch` expressions (modern C#)](<./sections/5. Branching and decision making/5.3. switch and switch expressions modern CSharp.md>)

1. **`switch` statement basics + `default` and fall-through rules**
2. **`switch` expressions for value-producing decisions (and why they reduce bugs)**
3. **Examples: menu handling, mapping codes → messages, and parsing user input safely**

### [5.4. Pattern matching catalog (type, relational, property, list, slice, `var`) — C# 9–C# 15](<./sections/5. Branching and decision making/5.4. Pattern matching catalog type relational property list slice var (CSharp 9 through 15).md>)

1. **Single map** for patterns across versions (see also `Handling Null`, `Tuples`, `Type Conversion`)
2. **Perf**: shallow patterns; extract helpers for complex predicates
3. **Modern**: list/slice patterns (C# 11+): link from catalog to `Update C# 11`

## 6. Loops and iteration (repeat work without repeating code)

### [6.1. `while` and `do/while` loops (sentinel, input loops)](<./sections/6. Loops and iteration/6.1. while and do while loops sentinel input loops.md>)

1. **When to use `while` vs `do/while`**
2. **Input-validation loops (including null/empty handling)**
3. **Common pitfalls (infinite loops, off-by-one, modifying loop conditions incorrectly)**

### [6.2. `for` loops (counting, ranges, performance basics)](<./sections/6. Loops and iteration/6.2. for loops counting ranges performance basics.md>)

1. **Counting loops + inclusive/exclusive bounds**
2. **Loop variables, scope, and mutation**
3. **Mentor notes (prefer `for` when index matters; avoid repeated expensive work inside the condition)**

### [6.3. Nested loops (correctness first, then complexity)](<./sections/6. Loops and iteration/6.3. Nested loops correctness first then complexity.md>)

1. **Examples: grids, tables, and pairwise comparisons**
2. **Big-O intuition (why nested loops can explode)**
3. **Performance notes (break early, reduce allocations, consider better data structures)**

## 7. Jump statements and flow control (be explicit about exits)

### [7.1. `break` and `continue` (clean exits, fewer bugs)](<./sections/7. Jump statements and flow control/7.1. break and continue clean exits fewer bugs.md>)

1. **Using `break` to stop loops early**
2. **Using `continue` to skip work safely**
3. **Best practices (avoid “spaghetti” flow; prefer small helper methods when it gets complex)**

### [7.2. `goto`: why it exists, when it’s acceptable, and safer alternatives](<./sections/7. Jump statements and flow control/7.2. goto why it exists when its acceptable and safer alternatives.md>)

1. **`goto case` in `switch` (the one common legitimate use)**
2. **Why `goto` is usually a maintainability trap**
3. **Alternatives (loops + flags, extracted methods, state machines)**

## 8. Putting it together: beginner patterns that scale

### [8.1. Small, complete examples (menus, calculators, parsers)](<./sections/8. Putting it together/8.1. Small complete examples menus calculators parsers.md>)

1. **Menu-driven console apps with `switch` and loops**
2. **Input parsing with `TryParse` patterns (avoid exceptions for control flow)**
3. **Performance and correctness notes (allocation awareness, avoid repeated parsing, validate once)**

