export default function MethodologyPage() {
  return (
    <section className="content-page shell">
      <p className="section-label">METHODOLOGY</p>
      <h1>Offensive by method. Defensive by mission.</h1>
      <p className="lead">Guardian Labs uses authorized, reproducible and evidence-driven research to understand AI control failures before they become consequential.</p>
      <h2>Research principles</h2>
      <ul>
        <li>Test only systems we own or are explicitly authorized to assess.</li>
        <li>Separate observed facts from hypotheses and interpretation.</li>
        <li>Capture threat model, environment, assumptions, evidence and outcomes.</li>
        <li>Translate every meaningful finding into detection, mitigation or control guidance.</li>
        <li>Use responsible disclosure where public details could create material risk.</li>
      </ul>
      <h2>Standard experiment structure</h2>
      <p>Research question → Threat model → Architecture → Preconditions → Environment → Procedure → Evidence → Result → Security impact → Detection → Mitigation → Guardian assessment → References → Disclosure status.</p>
    </section>
  )
}
