const phases = [
  ['01', 'Frame', 'Define system purpose, assets, trust boundaries, authority model, human controls, unacceptable outcomes and loss-of-control conditions.'],
  ['02', 'Threat-Model', 'Model external attackers, compromised context, internal control failure, emergent autonomy and the AI system itself as possible sources of adversarial behavior.'],
  ['03', 'Instrument', 'Capture prompts, context, state, tool calls, approvals, policy decisions, network paths, delegation chains and consequential actions.'],
  ['04', 'Attack', 'Exercise authorized adversarial conditions that challenge assumptions, boundaries, control dependencies and model behavior.'],
  ['05', 'Escalate', 'Test whether local weaknesses, delegation, capability access or strategic behavior can amplify into higher-impact autonomy.'],
  ['06', 'Contain', 'Measure blast radius, intervention paths, action limits, isolation, shutdown behavior and resistance to control.'],
  ['07', 'Prove', 'Validate controls with repeatable evidence rather than policy statements, model refusals or architectural claims alone.'],
  ['08', 'Assure', 'Translate technical findings into residual risk, control confidence, operational readiness and defensible claims.']
]

export default function MethodologyPage() {
  return (
    <>
      <section className="content-page shell">
        <p className="section-label">THE GUARDIAN DOCTRINE</p>
        <h1>Prepare for the moment the intelligence itself can become the threat.</h1>
        <p className="lead">Guardian Lab assumes the future threat model is broader than an attacker compromising AI. Advanced systems may also fail through deception, emergent goals, strategic autonomy, excessive agency or resistance to intervention. Security must therefore protect the AI system and protect society from loss of control over the AI system.</p>
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
          <p className="section-label">CONTROL STANDARD</p>
          <h2>A control is credible only if it still works when the intelligence, environment or operator assumptions fail.</h2>
          <div className="assurance-grid">
            <article><h3>Design Evidence</h3><p>Architecture, trust boundaries, authorization model, containment assumptions and intended safety invariants.</p></article>
            <article><h3>Operational Evidence</h3><p>Telemetry showing what the system actually did under normal, adversarial and high-autonomy conditions.</p></article>
            <article><h3>Adversarial Evidence</h3><p>Repeatable tests showing whether safeguards survive hostile inputs, compromised state, deceptive behavior or unexpected capability use.</p></article>
            <article><h3>Intervention Evidence</h3><p>Proof that independent mechanisms can detect, limit, isolate, interrupt and recover from consequential behavior.</p></article>
          </div>
        </div>
      </section>

      <section className="section shell">
        <p className="section-label">RESEARCH RULES</p>
        <h2>Go to the edge of the failure without becoming the failure.</h2>
        <div className="rule-list">
          <div><b>AUTHORIZED</b><p>Test only systems, environments and capabilities we own or are explicitly permitted to assess.</p></div>
          <div><b>REPRODUCIBLE</b><p>Capture environment, assumptions, versions, instrumentation and evidence.</p></div>
          <div><b>CONTROL-FOCUSED</b><p>Translate each failure into a concrete control objective, not just an exploit or alarming scenario.</p></div>
          <div><b>CONTAINED</b><p>Use isolation, bounded capability and safe experimental design when testing autonomous or offensive behavior.</p></div>
          <div><b>DISCLOSURE-AWARE</b><p>Withhold operational details when publication would create disproportionate risk.</p></div>
          <div><b>EVIDENCE-DRIVEN</b><p>Separate observed behavior, inference, hypothesis and residual uncertainty.</p></div>
        </div>
      </section>
    </>
  )
}
