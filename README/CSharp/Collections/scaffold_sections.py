import os
from pathlib import Path


BASE_DIR = Path(__file__).parent
README_PATH = BASE_DIR / "README.md"


def parse_sections():
    sections = []
    lines = README_PATH.read_text(encoding="utf-8").splitlines()
    i = 0
    while i < len(lines):
        line = lines[i]
        if line.startswith("### [") and "]" in line and "(<" in line and ">)" in line:
            # Extract title and relative path from the markdown link
            title_start = line.index("[") + 1
            title_end = line.index("]", title_start)
            title = line[title_start:title_end]

            path_start = line.index("(<") + 2
            path_end = line.index(">)", path_start)
            rel_path = line[path_start:path_end]

            bullets: list[str] = []
            j = i + 2  # skip potential blank line after header
            while j < len(lines):
                candidate = lines[j]
                stripped = candidate.strip()
                if not stripped:
                    break
                # Simple numbered outline: "1. ", "2. ", ...
                if len(stripped) >= 3 and stripped[0].isdigit() and stripped[1] == "." and stripped[2] == " ":
                    bullets.append(candidate)
                    j += 1
                    continue
                break

            sections.append((rel_path, title, bullets))
            i = j
        else:
            i += 1

    return sections


def scaffold():
    sections = parse_sections()
    for rel_path, title, bullets in sections:
        target_path = (BASE_DIR / rel_path).resolve()
        target_path.parent.mkdir(parents=True, exist_ok=True)

        heading = f"## {title}\n"
        content_lines = [heading, ""]
        content_lines.extend(bullets)
        content_lines.append("")
        text = "\n".join(content_lines)

        target_path.write_text(text, encoding="utf-8")


if __name__ == "__main__":
    scaffold()

