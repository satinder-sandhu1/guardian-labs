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
          <p className="eyebrow">GUARDIANS OF THE AI AGE // OFFENSIVE AI SECURITY</p>
          <h1>When AI gains agency, security becomes a control problem.</h1>
          <p className="hero-copy">
            Guardian Labs researches how advanced AI systems can be manipulated, over-authorized, deceived, chained, contaminated, or pushed beyond intended boundaries — then turns those failures into stronger controls, evidence and assurance.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="/research">Enter the Research Lab</a>
            <a className="button secondary" href="/methodology">Read the Guardian Doctrine</a>
          </div>
        </div>
        <aside className="hero-console">
          <div className="console-head"><span>GUARDIAN CONTROL SURFACE</span><span className="status-dot">LIVE</span></div>
          <div className="console-row"><span>MODEL</span><b>Reasoning / Multimodal / Tool-Using</b></div>
          <div className="console-row"><span>AGENCY</span><b>Planning · Memory · Delegation · Action</b></div>
          <div className="console-row"><span>EXPOSURE</span><b>APIs · Browsers · Code · Data · Infrastructure</b></div>
          <div className="console-row"><span>FAILURE MODES</span><b>Manipulation · Overreach · Drift · Cascades</b></div>
          <div className="console-row"><span>GUARDIAN OBJECTIVE</span><b>OBSERVE → CONSTRAIN → INTERRUPT → PROVE</b></div>
        </aside>
      </section>

      <section className="section shell thesis-band">
        <p className="section-label">THE GUARDIAN THESIS</p>
        <h2>Capability without control becomes risk. Autonomy without assurance becomes exposure.</h2>
        <div className="split-copy">
          <p className="lead">The security challenge is no longer limited to whether an attacker can compromise an AI model. The deeper problem is whether an AI-enabled system can remain trustworthy when its context, memory, tools, permissions, environment, or objectives become adversarial.</p>
          <p className="lead">Guardian Labs studies that boundary: the point where intelligence becomes action, action gains authority, and a software defect can become a control failure with real-world consequences.</p>
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
          <h2>We test what happens when every trust boundary is treated as attackable.</h2>
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
        <h2>Offense is a method. Control is the objective. Evidence is the standard.</h2>
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
        <p className="section-label">GUARDIAN LABS</p>
        <h2>Guard the model. Guard the agent. Guard the authority. Guard the boundary.</h2>
        <p className="lead">The objective is not weaker AI. It is powerful AI that remains observable, constrained, accountable, interruptible and worthy of trust.</p>
      </section>
    </>
  )
}
