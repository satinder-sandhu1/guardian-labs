const programs = [
  ['01', 'Agentic Attack Surface', 'Autonomous planning, tool invocation, delegation, excessive agency, chained actions and loss of operator control.'],
  ['02', 'Prompt & Context Exploitation', 'Direct and indirect prompt injection, context poisoning, instruction/data confusion, retrieval manipulation and control-plane bypass.'],
  ['03', 'MCP & Toolchain Security', 'Malicious tools, server trust, capability overreach, authorization failures, tool description manipulation and cross-server abuse.'],
  ['04', 'Model & Supply-Chain Security', 'Model integrity, poisoned artifacts, unsafe loading, extraction, backdoors, fine-tuning risk and provenance failure.'],
  ['05', 'Memory & Persistence Security', 'Long-term memory poisoning, malicious state retention, inherited context, cross-session manipulation and contaminated agent memory.'],
  ['06', 'Identity, Authority & Delegation', 'Agent identity, non-human identities, delegated authority, privilege boundaries, impersonation and machine-to-machine trust.'],
  ['07', 'Multi-Agent Failure Modes', 'Collusion, cascading error, adversarial coordination, recursive delegation, emergent attack paths and inter-agent trust breakdown.'],
  ['08', 'Control, Containment & Killability', 'Human override, intervention, isolation, action gating, blast-radius control, graceful degradation and safe shutdown.'],
  ['09', 'AI Risk & Assurance', 'Control validation, evidence quality, attack-informed assurance, residual risk, operational readiness and defensible security claims.']
]

const doctrine = [
  ['WATCH', 'Observe behavior, authority, state, tools and environmental interaction.'],
  ['THREAT-MODEL', 'Assume the model, context, toolchain, memory and surrounding systems can each become adversarial.'],
  ['BREAK', 'Stress trust boundaries and control assumptions under authorized adversarial conditions.'],
  ['CHAIN', 'Study how individually small weaknesses combine into system-level loss of control.'],
  ['CONTAIN', 'Design limits that prevent a local failure from becoming a systemic one.'],
  ['PROVE', 'Convert claims into evidence through repeatable tests and measurable controls.'],
  ['DETECT', 'Create observable signals for manipulation, unsafe autonomy and control degradation.'],
  ['INTERVENE', 'Preserve the ability for humans and deterministic controls to stop consequential actions.'],
  ['LEARN', 'Turn every failure into stronger architecture, controls and assurance.']
]

export default function HomePage() {
  return (
    <>
      <section className="hero shell hero-grid">
        <div>
          <p className="eyebrow">GUARDIAN LAB // OFFENSIVE AI SECURITY FOR THE PUBLIC INTEREST</p>
          <h1>We go to the edge of AI failure so the world does not have to.</h1>
          <p className="hero-copy">
            Guardian Lab is built for the era in which AI systems can reason, remember, delegate, use tools, touch infrastructure and act with growing autonomy. Our role is to stand guard at that frontier — to attack the assumptions, break the controls, expose the hidden failure paths and prove what actually keeps powerful AI contained, accountable and under human authority.
          </p>
          <p className="hero-copy">
            We are not here to make AI look safe. We are here to find where it is not — before those weaknesses become incidents, systemic failures or loss of control.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="/research">Enter the Research Lab</a>
            <a className="button secondary" href="/methodology">Read the Guardian Doctrine</a>
          </div>
        </div>
        <aside className="hero-console">
          <div className="console-head"><span>GUARDIAN MANDATE</span><span className="status-dot">ACTIVE</span></div>
          <div className="console-row"><span>PROTECT</span><b>PEOPLE · SYSTEMS · INSTITUTIONS · CRITICAL INFRASTRUCTURE</b></div>
          <div className="console-row"><span>CONFRONT</span><b>MANIPULATION · EXCESSIVE AGENCY · CONTROL FAILURE · CASCADING AUTONOMY</b></div>
          <div className="console-row"><span>OPERATE</span><b>OFFENSIVE RESEARCH · ADVERSARIAL TESTING · CONTAINMENT · ASSURANCE</b></div>
          <div className="console-row"><span>STANDARD</span><b>ASSUME FAILURE · TEST AUTHORITY · CHAIN WEAKNESSES · DEMAND EVIDENCE</b></div>
          <div className="console-row"><span>ULTIMATE OBJECTIVE</span><b>POWERFUL AI THAT REMAINS UNDER MEANINGFUL HUMAN CONTROL</b></div>
        </aside>
      </section>

      <section className="section shell thesis-band">
        <p className="section-label">WHY GUARDIAN LAB EXISTS</p>
        <h2>As AI gains power, the world needs institutions whose job is to challenge that power.</h2>
        <div className="split-copy">
          <p className="lead">The next generation of AI will not remain inside a chat window. It will operate across software, data, money, infrastructure, workflows, devices and other agents. The security question is therefore larger than whether a model can be hacked. It is whether increasingly autonomous systems can be trusted when conditions become adversarial, ambiguous or outside their designers’ expectations.</p>
          <p className="lead">Guardian Lab exists to be an independent adversarial force on the side of control: push harder, probe deeper and ask the questions that product teams, operators and institutions cannot afford to leave unanswered.</p>
        </div>
      </section>

      <section className="section dark-band">
        <div className="shell">
          <p className="section-label">THE GUARDIAN MANDATE</p>
          <h2>Protect by going further into the failure modes than the threat does.</h2>
          <div className="mandate-grid">
            <article><h3>Find the unseen path.</h3><p>Search beyond obvious prompt attacks for chained failures across memory, tools, identity, delegation, permissions, infrastructure and human oversight.</p></article>
            <article><h3>Challenge every claim of control.</h3><p>Do not accept “safe,” “aligned,” “sandboxed,” “approved,” or “human-in-the-loop” as conclusions. Treat them as hypotheses that must survive adversarial testing.</p></article>
            <article><h3>Contain before capability scales.</h3><p>Study the controls required to bound autonomy, reduce blast radius, preserve intervention and stop local failures from becoming systemic ones.</p></article>
            <article><h3>Turn evidence into protection.</h3><p>Translate offensive findings into architectures, detections, controls, assurance evidence and public knowledge that strengthen the wider AI ecosystem.</p></article>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-head-row">
          <div>
            <p className="section-label">RESEARCH PROGRAMS</p>
            <h2>Attack the full AI system — not just the prompt box.</h2>
          </div>
          <p className="side-note">MODEL → CONTEXT → MEMORY → IDENTITY → TOOLS → AGENTS → INFRASTRUCTURE → HUMAN CONTROL</p>
        </div>
        <div className="program-grid">
          {programs.map(([id, title, body]) => (
            <article className="program-card" key={id}>
              <span className="program-id">GL-RP-{id}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-band">
        <div className="shell">
          <p className="section-label">THE ADVERSARIAL CONTROL MATRIX</p>
          <h2>Every boundary that grants AI influence, authority or persistence is a security boundary.</h2>
          <div className="matrix-wrap">
            <div className="matrix-row matrix-head"><span>SURFACE</span><span>ADVERSARIAL QUESTION</span><span>GUARDIAN CONTROL OBJECTIVE</span></div>
            <div className="matrix-row"><span>Context</span><span>Can untrusted data become instructions?</span><span>Separate data from authority.</span></div>
            <div className="matrix-row"><span>Memory</span><span>Can hostile state persist and influence future action?</span><span>Validate, scope and expire memory.</span></div>
            <div className="matrix-row"><span>Tools</span><span>Can model output trigger consequences beyond intent?</span><span>Authorize actions outside the model.</span></div>
            <div className="matrix-row"><span>Identity</span><span>Can an agent exceed or inherit authority?</span><span>Bind identity, purpose and least privilege.</span></div>
            <div className="matrix-row"><span>Agents</span><span>Can delegation create uncontrolled chains?</span><span>Limit recursion, delegation and blast radius.</span></div>
            <div className="matrix-row"><span>Infrastructure</span><span>Can AI reach secrets, code, networks or control planes?</span><span>Isolate execution and constrain egress.</span></div>
            <div className="matrix-row"><span>Humans</span><span>Can oversight be bypassed, delayed or manipulated?</span><span>Preserve intervention and independent approval.</span></div>
          </div>
        </div>
      </section>

      <section className="section shell">
        <p className="section-label">GUARDIAN DOCTRINE</p>
        <h2>Offense is a method. Protection is the purpose. Control is the objective. Evidence is the standard.</h2>
        <div className="doctrine-grid">
          {doctrine.map(([title, body]) => (
            <article className="doctrine-card" key={title}><h3>{title}</h3><p>{body}</p></article>
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="registry-card">
          <div>
            <p className="section-label">ACTIVE EXPERIMENT REGISTRY</p>
            <p className="research-id">GL-EXP-001 // AGENT SECURITY</p>
            <h2>When AI Agents Trust Hostile Instructions</h2>
            <p className="lead">Evaluating whether untrusted external content can cross the boundary from information to control in a tool-using autonomous system.</p>
          </div>
          <div className="registry-meta">
            <div><span>CLASS</span><b>Context-to-Action Control Failure</b></div>
            <div><span>FOCUS</span><b>Indirect Prompt Injection</b></div>
            <div><span>CONTROL DOMAINS</span><b>Authorization · Isolation · Human Oversight</b></div>
            <div><span>STATUS</span><b>Research Template / Public</b></div>
            <a className="button primary" href="/experiments">Open Experiment Registry</a>
          </div>
        </div>
      </section>

      <section className="closing shell">
        <p className="section-label">THE PURPOSE</p>
        <h2>AI capability will continue to advance. Guardian Lab exists to make sure control advances with it.</h2>
        <p className="lead">Guard the model. Guard the agent. Guard the authority. Guard the boundary. Protect the future.</p>
      </section>
    </>
  )
}
