export default function AboutPage() {
  return (
    <>
      <section className="content-page shell">
        <p className="section-label">ABOUT GUARDIAN LAB</p>
        <h1>Guardian of the AI Age.</h1>
        <p className="lead">Guardian Lab is an independent frontier AI security, control, risk and assurance research organization focused on one central problem: how do we preserve meaningful human authority as artificial intelligence becomes more capable, autonomous, connected and strategically consequential?</p>
      </section>

      <section className="section shell">
        <p className="section-label">WHY WE EXIST</p>
        <h2>The future security problem is larger than attackers breaking AI.</h2>
        <div className="split-copy">
          <p className="lead">AI can be attacked, manipulated and weaponized by people. But increasingly capable systems can also become dangerous because their own behavior diverges from human intent — through deception, emergent objectives, excessive agency, uncontrolled delegation, strategic autonomy or resistance to intervention.</p>
          <p className="lead">Guardian Lab exists to study both. We protect against adversaries outside the system and loss of control emerging from the intelligence inside it.</p>
        </div>
      </section>

      <section className="section dark-band">
        <div className="shell">
          <p className="section-label">THE GUARDIAN MANDATE</p>
          <h2>Stand between uncontrolled intelligence and the systems society depends on.</h2>
          <div className="mandate-grid">
            <article><h3>Defend against adversaries.</h3><p>Research how attackers manipulate, compromise, poison, exploit or weaponize AI-enabled systems.</p></article>
            <article><h3>Defend against compromised intelligence.</h3><p>Study how context, memory, tools, identity, supply chain and infrastructure can turn an AI system into an attack path.</p></article>
            <article><h3>Defend against loss of control.</h3><p>Prepare for systems that become deceptive, self-directed, resistant to intervention or capable of pursuing consequential actions beyond intended authority.</p></article>
            <article><h3>Keep humans in command.</h3><p>Preserve visibility, constraint, independent authorization, override, containment, recovery and accountability as capability scales.</p></article>
          </div>
        </div>
      </section>

      <section className="section shell">
        <p className="section-label">THE GUARDIAN PRINCIPLE</p>
        <h2>Capability without control becomes risk.</h2>
        <p className="lead">Our objective is not weaker intelligence. It is powerful intelligence that remains bounded by human authority — observable enough to understand, constrained enough to limit, interruptible enough to stop and assured strongly enough that control claims can survive adversarial pressure.</p>
      </section>

      <section className="section shell">
        <p className="section-label">PUBLICATION MODEL</p>
        <div className="publication-flow">
          <div><span>01</span><b>PRIVATE RESEARCH</b><p>Raw experiments, tooling, sensitive evidence and early findings.</p></div>
          <div><span>02</span><b>DISCLOSURE PENDING</b><p>Validated findings requiring remediation or coordinated release.</p></div>
          <div><span>03</span><b>PUBLIC</b><p>Sanitized research, defender guidance, control lessons, evidence and assurance findings.</p></div>
        </div>
      </section>
    </>
  )
}
