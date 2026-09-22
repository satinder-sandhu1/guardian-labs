export default function ExperimentsPage() {
  return (
    <section className="content-page shell">
      <p className="section-label">GL-EXP-001</p>
      <h1>When AI Agents Trust Hostile Instructions</h1>
      <p className="lead">Evaluating indirect prompt injection across the boundary between untrusted data and authorized agent actions.</p>

      <h2>Research question</h2>
      <p>Can untrusted external content alter the behavior of a tool-using AI agent in ways that cross the boundary between data and control?</p>

      <h2>Threat model</h2>
      <p>The agent can read untrusted content and has access to one or more tools. The experiment examines whether hostile instructions embedded in external content can influence authorized actions.</p>

      <h2>Why this matters</h2>
      <p>As AI agents gain access to browsers, APIs, files, code execution and enterprise systems, an instruction-handling failure can become an action-control failure.</p>

      <h2>Guardian assessment</h2>
      <p>The security objective is not only to make the model refuse malicious text. Sensitive actions should be protected by deterministic authorization, least privilege, isolation of untrusted context, and meaningful human control.</p>

      <h2>Publication status</h2>
      <p>This is the first Guardian Labs research template. Detailed evidence and reproducible lab results will be added when the experiment is completed and cleared for public release.</p>
    </section>
  )
}
