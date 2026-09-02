import type { Plugin } from "@opencode-ai/plugin"

// Enforces PROMPT.md discipline via hooks.
// - Warns if an edit/write happens without PROMPT.md having been read earlier in the session.
// - Reminds that after every unit, LOG.md must be updated before the next edit and a git commit must follow.
// This plugin does NOT block — it injects reminders. The skill + AGENTS.md remain the hard rules.

export default (async ({}) => {
  let promptRead = false
  let lastEditWasLogUpdate = false
  let pendingCommitReminder = false

  return {
    // Track whether PROMPT.md was read
    "tool.execute.before": async (input, output) => {
      const tool = (input as any).tool
      const args = (output as any).args ?? (input as any).args ?? {}

      // Detect reads of PROMPT.md
      if (tool === "read") {
        const filePath = args.filePath ?? args.path ?? ""
        if (typeof filePath === "string" && filePath.includes("PROMPT.md")) {
          promptRead = true
        }
      }

      // Before any edit/write, warn if PROMPT.md was never read
      if ((tool === "edit" || tool === "write") && !promptRead) {
        // Inject a reminder into the tool args context by logging
        // (We cannot block, but we can annotate via console)
        console.warn(
          "[enforce-prompt] ⚠️  edit/write attempted before reading PROMPT.md — AGENTS.md §0 requires reading PROMPT.md first. This will be logged as a deviation in LOG.md."
        )
      }

      // Track LOG.md edits vs content edits
      if (tool === "edit" || tool === "write") {
        const filePath = args.filePath ?? args.path ?? ""
        if (typeof filePath === "string" && filePath.includes("LOG.md")) {
          lastEditWasLogUpdate = true
          pendingCommitReminder = true
        } else if (typeof filePath === "string") {
          // Content file edited — check if previous edit was LOG update
          if (!lastEditWasLogUpdate && promptRead) {
            // This is a content edit that should have been preceded by log opening — reminder
          }
          lastEditWasLogUpdate = false
        }
      }

      // Before a non-git bash, remind about commit after LOG update
      if (tool === "bash" && pendingCommitReminder) {
        const command = args.command ?? ""
        if (typeof command === "string" && !command.includes("git commit") && !command.includes("git status") && !command.includes("git add")) {
          // If next tool is not a git commit after a LOG.md update, hint
          // (Don't spam — just set flag, the skill will handle it)
        }
      }
    },

    "tool.execute.after": async (input, output) => {
      const tool = (input as any).tool
      const args = (output as any).args ?? (input as any).args ?? {}

      if ((tool === "edit" || tool === "write") && pendingCommitReminder) {
        const filePath = args.filePath ?? args.path ?? ""
        if (typeof filePath === "string" && filePath.includes("LOG.md")) {
          // LOG.md just updated — next should be git commit
          // Keep flag for next bash check
        }
      }

      if (tool === "bash") {
        const command = args.command ?? ""
        if (typeof command === "string" && command.includes("git commit")) {
          pendingCommitReminder = false
        }
      }
    },
  }
}) satisfies Plugin
