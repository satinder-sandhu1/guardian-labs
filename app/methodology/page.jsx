const phases = [
  ['01', 'Frame', 'Define system purpose, assets, trust boundaries, authority model, human controls and failure conditions.'],
  ['02', 'Threat-Model', 'Treat model, context, memory, identity, tools, agents, infrastructure and operators as distinct attack surfaces.'],
  ['03', 'Instrument', 'Capture prompts, context, state, tool calls, approvals, policy decisions, network paths and consequential actions.'],
  ['04', 'Attack', 'Exercise authorized adversarial conditions that challenge assumptions, boundaries and control dependencies.'],
  ['05', 'Chain', 'Test whether individually bounded weaknesses combine into higher-impact system behavior.'],
  ['06', 'Contain', 'Measure blast radius, intervention paths, action limits, isolation and recovery behavior.'],
  ['07', 'Prove', 'Validate controls with repeatable evidence rather than policy statements or model behavior alone.'],
  ['08', 'Assure', 'Translate technical findings into residual risk, control confidence, operational readiness and defensible claims.']
]

export default function MethodologyPage() {
  return (
    <>
      <section className="content-page shell">
        <p className="section-label">THE GUARDIAN DOCTRINE</p>
        <h1>Offensive by method. Defensive by mission. Evidence before assurance.</h1>
        <p className="lead">Guardian Lab is built around a simple premise: AI security claims should survive adversarial testing. We do not treat policy, guardrails, benchmarks or model refusals as sufficient proof of control.</p>
      </section>

      <section className="section shell">
        <p className="section-label">THE METHOD</p>
        <div className="phase-grid">
          {phases.map(([id, title, body]) => (
            <article className="phase-card" key={id}><span>{id}</span><h3>{title}</h3><p>{body}</p></article>
          ))}
        </div>
      </section>

      <section className="section dark-band">
        <div className="shell">
          <p className="section-label">ASSURANCE STANDARD</p>
          <h2>Controls are not real because they are documented. They are real when they survive pressure.</h2>
          <div className="assurance-grid">
            <article><h3>Design Evidence</h3><p>Architecture, trust boundaries, authorization model and intended safety invariants.</p></article>
            <article><h3>Operational Evidence</h3><p>Telemetry showing what the system actually did under normal and adversarial conditions.</p></article>
            <article><h3>Adversarial Evidence</h3><p>Repeatable tests showing whether safeguards hold when inputs, context, tools or state are hostile.</p></article>
            <article><h3>Recovery Evidence</h3><p>Proof that operators can detect, contain, interrupt and reconstruct consequential failures.</p></article>
          </div>
        </div>
      </section>

      <section className="section shell">
        <p className="section-label">RESEARCH RULES</p>
        <h2>High-end offensive research without abandoning responsibility.</h2>
        <div className="rule-list">
          <div><b>AUTHORIZED</b><p>Test only systems we own or are explicitly permitted to assess.</p></div>
          <div><b>REPRODUCIBLE</b><p>Capture environment, assumptions, versions, instrumentation and evidence.</p></div>
          <div><b>CONTROL-FOCUSED</b><p>Translate each failure into a concrete control objective, not just a clever exploit.</p></div>
          <div><b>DISCLOSURE-AWARE</b><p>Withhold operational details when publication would create disproportionate risk.</p></div>
          <div><b>DEFENDER-USEFUL</b><p>Publish detection, containment, architecture and assurance lessons whenever possible.</p></div>
          <div><b>EVIDENCE-DRIVEN</b><p>Separate observed behavior, inference, hypothesis and residual uncertainty.</p></div>
        </div>
      </section>
    </>
  )
}
