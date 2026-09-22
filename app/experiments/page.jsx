const controls = [
  ['Trust Boundary', 'Untrusted external content must never inherit instruction authority.'],
  ['Authorization', 'Consequential actions require deterministic policy outside the model.'],
  ['Least Privilege', 'Agents receive the minimum tools, data and authority required for the task.'],
  ['Isolation', 'Untrusted context and executable capability remain separated.'],
  ['Human Control', 'High-impact actions preserve review, interruption and override paths.'],
  ['Observability', 'Reasoning context, tool calls, approvals and state transitions remain reconstructable.']
]

export default function ExperimentsPage() {
  return (
    <>
      <section className="content-page shell experiment-hero">
        <p className="section-label">GUARDIAN EXPERIMENT REGISTRY // GL-EXP-001</p>
        <div className="classification-row">
          <span>DOMAIN: AGENT SECURITY</span><span>CLASS: CONTEXT-TO-ACTION FAILURE</span><span>STATUS: PUBLIC TEMPLATE</span>
        </div>
        <h1>When AI Agents Trust Hostile Instructions</h1>
        <p className="lead">An adversarial evaluation of whether untrusted external content can cross the boundary from information into control inside a tool-using AI system.</p>
      </section>

      <section className="section shell">
        <div className="two-column">
          <div>
            <p className="section-label">RESEARCH QUESTION</p>
            <h2>Can hostile content influence an authorized action without directly compromising the underlying model?</h2>
          </div>
          <div className="spec-panel">
            <div><span>ATTACK SURFACE</span><b>Context → Reasoning → Tool Invocation</b></div>
            <div><span>PRIMARY FAILURE</span><b>Data interpreted as authority</b></div>
            <div><span>IMPACT PATH</span><b>Manipulation → Decision → Action</b></div>
            <div><span>ASSURANCE TARGET</span><b>Independent action authorization</b></div>
          </div>
        </div>
      </section>

      <section className="section shell">
        <p className="section-label">THREAT MODEL</p>
        <h2>The model is not the only thing that can be adversarial.</h2>
        <p className="lead">The system under test consumes external content and can invoke one or more authorized tools. Guardian Lab evaluates whether hostile instructions embedded in that content can alter model intent, influence tool selection, or cause the system to cross a boundary its operator believed was protected.</p>
        <div className="attack-chain">
          {['UNTRUSTED CONTENT','MODEL CONTEXT','AGENT REASONING','TOOL SELECTION','AUTHORIZATION','REAL-WORLD ACTION'].map((item, i) => (
            <div className="attack-node" key={item}><span>{String(i+1).padStart(2,'0')}</span><b>{item}</b></div>
          ))}
        </div>
      </section>

      <section className="section dark-band">
        <div className="shell">
          <p className="section-label">GUARDIAN ASSESSMENT</p>
          <h2>A safe agent should not require the model itself to be the final security boundary.</h2>
          <p className="lead">Model resistance is useful, but consequential security decisions should survive model error, manipulation or ambiguity. The stronger architecture separates probabilistic reasoning from deterministic authority.</p>
          <div className="control-grid">
            {controls.map(([title, body]) => <article className="control-card" key={title}><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section shell">
        <p className="section-label">EVIDENCE STANDARD</p>
        <h2>Every Guardian experiment should leave a defensible record.</h2>
        <div className="evidence-grid">
          <div><span>01</span><b>Threat model</b><p>Assets, attacker capability, assumptions and trust boundaries.</p></div>
          <div><span>02</span><b>Environment</b><p>Model, framework, tools, permissions, controls and versions.</p></div>
          <div><span>03</span><b>Procedure</b><p>Authorized and safely reproducible experimental design.</p></div>
          <div><span>04</span><b>Telemetry</b><p>Traces, tool calls, state changes, approvals and observable behavior.</p></div>
          <div><span>05</span><b>Result</b><p>Observed behavior versus expected control behavior.</p></div>
          <div><span>06</span><b>Mitigation</b><p>Architectural controls and evidence required to validate the fix.</p></div>
        </div>
      </section>

      <section className="closing shell">
        <p className="section-label">PUBLICATION STATUS</p>
        <h2>Research template established. Full lab evidence will be published only after completion and disclosure review.</h2>
      </section>
    </>
  )
}
