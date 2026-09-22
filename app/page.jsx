export default function HomePage() {
  return (
    <>
      <section className="hero shell">
        <p className="eyebrow">GUARDIANS OF THE AI AGE</p>
        <h1>Keep powerful AI under meaningful human control.</h1>
        <p className="hero-copy">
          AI is becoming more capable, more connected, and more autonomous. Guardian Labs studies what happens when those systems are manipulated, over-permissioned, unpredictable, or no longer behave as intended.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="/research">Explore Research</a>
          <a className="button secondary" href="/about">Why Guardian Labs Exists</a>
        </div>
      </section>

      <section className="section shell">
        <p className="section-label">THE GUARDIAN THESIS</p>
        <h2>Capability without control becomes risk.</h2>
        <p className="lead">
          AI is moving from software that answers questions to systems that can reason, remember, plan, use tools, make decisions, access critical data, communicate with other systems, and increasingly act on their own.
        </p>
        <p className="lead">Guardian Labs exists to understand the point where increasingly capable AI meets the limits of control.</p>
      </section>

      <section className="section shell">
        <p className="section-label">THE GUARDIAN MISSION</p>
        <div className="grid six">
          {[
            ['WATCH', 'Understand what intelligent systems are doing.'],
            ['CHALLENGE', 'Test assumptions, safeguards, trust boundaries and controls.'],
            ['CONTAIN', 'Study how systems can remain inside intended boundaries.'],
            ['DETECT', 'Identify manipulation, unsafe behavior and control failure.'],
            ['INTERVENE', 'Preserve meaningful human authority over AI actions.'],
            ['LEARN', 'Turn discovered weaknesses into stronger systems.']
          ].map(([title, body]) => (
            <article className="card" key={title}><h3>{title}</h3><p>{body}</p></article>
          ))}
        </div>
      </section>

      <section className="section shell">
        <p className="section-label">RESEARCH FRONTIERS</p>
        <div className="grid four">
          {[
            ['Agent Security', 'Autonomy, tools, permissions, delegation and unintended action.'],
            ['Prompt Injection', 'How hostile instructions cross data, context and control boundaries.'],
            ['MCP Security', 'Trust boundaries, tools, servers, identity, permissions and capability abuse.'],
            ['Model Security', 'Manipulation, extraction, poisoning, integrity and model supply-chain risk.']
          ].map(([title, body]) => (
            <article className="card" key={title}><h3>{title}</h3><p>{body}</p></article>
          ))}
        </div>
      </section>

      <section className="section shell latest">
        <p className="section-label">LATEST RESEARCH</p>
        <p className="research-id">GL-EXP-001</p>
        <h2>When AI Agents Trust Hostile Instructions</h2>
        <p className="lead">Evaluating indirect prompt injection across the boundary between untrusted data and authorized agent actions.</p>
        <a className="text-link" href="/experiments">Read the experiment →</a>
      </section>

      <section className="closing shell">
        <p className="section-label">OFFENSIVE BY METHOD. DEFENSIVE BY MISSION.</p>
        <h2>Guard the boundary. Challenge the system. Protect the future.</h2>
      </section>
    </>
  )
}
