export default function AboutPage() {
  return (
    <>
      <section className="content-page shell">
        <p className="section-label">ABOUT GUARDIAN LABS</p>
        <h1>Guardians of the AI Age.</h1>
        <p className="lead">Guardian Labs is an independent frontier AI security, risk and assurance research organization focused on one question: how do we keep increasingly capable, connected and autonomous AI under meaningful human control?</p>
      </section>

      <section className="section shell">
        <p className="section-label">WHY WE EXIST</p>
        <h2>AI is becoming less like passive software and more like an actor inside complex systems.</h2>
        <div className="split-copy">
          <p className="lead">Models can reason, remember, call tools, access data, write code, interact with infrastructure, delegate tasks and influence other systems. As capability expands, the failure modes expand with it.</p>
          <p className="lead">The central security question is no longer simply whether the model can be hacked. It is whether the entire AI-enabled system remains observable, constrained, accountable, interruptible and safe when assumptions fail.</p>
        </div>
      </section>

      <section className="section dark-band">
        <div className="shell">
          <p className="section-label">THE GUARDIAN MANDATE</p>
          <h2>Stand between uncontrolled capability and the systems society depends on.</h2>
          <div className="mandate-grid">
            <article><h3>See what others miss.</h3><p>Study failure modes at the intersection of models, agents, memory, tools, infrastructure and human authority.</p></article>
            <article><h3>Challenge what others assume.</h3><p>Attack trust boundaries, safety claims and control designs under authorized adversarial conditions.</p></article>
            <article><h3>Prove what actually works.</h3><p>Turn defensive claims into measurable evidence through repeatable technical validation.</p></article>
            <article><h3>Keep humans in command.</h3><p>Preserve visibility, override, containment, accountability and intervention as AI gains autonomy.</p></article>
          </div>
        </div>
      </section>

      <section className="section shell">
        <p className="section-label">THE GUARDIAN PRINCIPLE</p>
        <h2>Capability without control becomes risk.</h2>
        <p className="lead">Our objective is not to make AI weaker. It is to make powerful AI worthy of trust — with strong boundaries, controlled authority, measurable resilience and credible evidence that humans can remain in control when conditions become adversarial.</p>
      </section>

      <section className="section shell">
        <p className="section-label">PUBLICATION MODEL</p>
        <div className="publication-flow">
          <div><span>01</span><b>PRIVATE RESEARCH</b><p>Raw experiments, tooling, sensitive evidence and early findings.</p></div>
          <div><span>02</span><b>DISCLOSURE PENDING</b><p>Validated findings requiring remediation or coordinated release.</p></div>
          <div><span>03</span><b>PUBLIC</b><p>Sanitized research, defender guidance, evidence and assurance lessons.</p></div>
        </div>
      </section>
    </>
  )
}
