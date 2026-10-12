/** Advisory only: no file/tool rewriting, approval decisions or compliance claims.
 * @type {import('@opencode-ai/plugin').Plugin}
 */
export default async ({ client }) => ({
  "tool.execute.before": async (input) => {
    if (!["edit", "write", "apply_patch"].includes(input.tool)) return;
    try {
      await client.app.log({ body: {
        service: "tutorial-workflow",
        level: "info",
        message: "Tutorial writes require the shared PROMPT/QUALITY/WORKFLOW context and an open log. New curricula and review repairs wait for user approval. Approved units require actual verification, immediate logging and a unit commit. This reminder does not establish compliance.",
      } });
    } catch {
      // Logging availability must not mutate or block the user's operation.
    }
  },
  "experimental.session.compacting": async (_input, output) => {
    output.context.push(
      "Tutorial recovery: preserve the selected track, phase, proposal/report revision, approval evidence, complete remaining plan and partial unit. Recover from the complete README/<Track>/LOG.md and Git/disk. Pending approval stays pending; approved scope continues without per-unit reapproval. Read PROMPT.md, AGENTS.md, .tutorial/WORKFLOW.md and .tutorial/QUALITY.md. Do not resume maintenance history, deleted curricula or automatically start the next track."
    );
  },
});
