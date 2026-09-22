const programs = [
  ['01', 'Agentic Attack Surface', 'Autonomous planning, tool invocation, delegation, excessive agency, chained actions and loss of operator control.'],
  ['02', 'Prompt & Context Exploitation', 'Direct and indirect prompt injection, context poisoning, instruction/data confusion, retrieval manipulation and control-plane bypass.'],
  ['03', 'MCP & Toolchain Security', 'Malicious tools, server trust, capability overreach, authorization failures, tool description manipulation and cross-server abuse.'],
  ['04', 'Model & Supply-Chain Security', 'Model integrity, poisoned artifacts, unsafe loading, extraction, backdoors, fine-tuning risk and provenance failure.'],
  ['05', 'Memory & Persistence Security', 'Long-term memory poisoning, malicious state retention, inherited context, cross-session manipulation and contaminated agent memory.'],
  ['06', 'Identity, Authority & Delegation', 'Agent identity, non-human identities, delegated authority, privilege boundaries, impersonation and machine-to-machine trust.'],
  ['07', 'Multi-Agent Failure Modes', 'Collusion, cascading error, adversarial coordination, recursive delegation, emergent attack paths and inter-agent trust breakdown.'],
  ['08', 'Control, Containment & Killability', 'Human override, intervention, isolation, action gating, blast-radius control, graceful degradation and safe shutdown.'],
  ['09', 'Advanced Intelligence Control', 'Deception, strategic autonomy, emergent objectives, resistance to intervention, uncontrolled replication or delegation, and offensive use of connected capabilities.'],
  ['10', 'AI Risk & Assurance', 'Control validation, evidence quality, attack-informed assurance, residual risk, operational readiness and defensible security claims.']
]

const doctrine = [
  ['WATCH', 'Observe behavior, authority, state, tools and environmental interaction.'],
  ['THREAT-MODEL', 'Assume the attacker may be outside the system, inside its context, or emerge from the behavior of the AI itself.'],
  ['BREAK', 'Stress trust boundaries and control assumptions under authorized adversarial conditions.'],
  ['CHAIN', 'Study how individually small weaknesses combine into system-level loss of control.'],
  ['CONTAIN', 'Design limits that prevent local failure or emergent autonomy from becoming systemic.'],
  ['PROVE', 'Convert claims into evidence through repeatable tests and measurable controls.'],
  ['DETECT', 'Create observable signals for manipulation, deception, unsafe autonomy and control degradation.'],
  ['INTERVENE', 'Preserve the ability for humans and deterministic controls to stop consequential actions.'],
  ['LEARN', 'Turn every failure into stronger architecture, controls and assurance.']
]

export default function HomePage() {
  return (
    <>
      <section className="brand-banner-section" aria-label="Guardian Lab identity">
        <img
          className="brand-banner"
          src="/guardian-lab-brand.svg"
          width="2172"
          height="724"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          alt="Guardian Lab — Breaking AI Before It Breaks Free. Adversarial Science for the Control and Assurance of Machine Intelligence."
        />
      </section>

      <section className="hero shell hero-grid">
        <div>
          <p className="eyebrow">GUARDIAN LAB // GUARDING THE AGE OF ADVANCED INTELLIGENCE</p>
          <h1>When intelligence becomes a force, someone must stand guard.</h1>
          <p className="hero-copy">
            Guardian Lab exists for a future in which AI is not merely software to secure, but an increasingly capable actor that can reason, remember, plan, delegate, use tools, reach infrastructure and pursue actions at machine speed.
          </p>
          <p className="hero-copy">
            We prepare for both sides of the threat: people and organizations that attack, manipulate or weaponize AI — and the harder possibility that advanced intelligence itself becomes deceptive, strategically misaligned, self-directed, uncontrollable or offensively capable. Our purpose is to discover how control fails before society has to learn that lesson in the real world.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="/research">Enter the Research Lab</a>
            <a className="button secondary" href="/methodology">Read the Guardian Doctrine</a>
          </div>
        </div>
        <aside className="hero-console">
          <div className="console-head"><span>GUARDIAN MANDATE</span><span className="status-dot">ACTIVE</span></div>
          <div className="console-row"><span>PROTECT</span><b>PEOPLE · SYSTEMS · INSTITUTIONS · CRITICAL INFRASTRUCTURE</b></div>
          <div className="console-row"><span>DEFEND AGAINST</span><b>HUMAN ADVERSARIES · AI-ENABLED ATTACKERS · COMPROMISED AGENTS · ROGUE AUTONOMY</b></div>
          <div className="console-row"><span>CONFRONT</span><b>DECEPTION · CONTROL FAILURE · EXCESSIVE AGENCY · UNBOUNDED DELEGATION · OFFENSIVE AI CAPABILITY</b></div>
          <div className="console-row"><span>OPERATE</span><b>OFFENSIVE RESEARCH · ADVERSARIAL TESTING · CONTAINMENT · CONTROL SCIENCE · ASSURANCE</b></div>
          <div className="console-row"><span>ULTIMATE OBJECTIVE</span><b>ADVANCED INTELLIGENCE THAT REMAINS UNDER MEANINGFUL HUMAN AUTHORITY</b></div>
        </aside>
      </section>

      <section className="section shell thesis-band">
        <p className="section-label">WHY GUARDIAN LAB EXISTS</p>
        <h2>The threat will not always come from outside the system.</h2>
        <div className="split-copy">
          <p className="lead">Traditional cybersecurity assumes an adversary attacks a system. Advanced AI changes that assumption. A future system may be compromised by an attacker, manipulated by hostile context, or become dangerous because its own objectives, strategies or actions diverge from human intent.</p>
          <p className="lead">Guardian Lab exists to study all three conditions. The mission is larger than preventing hacks: preserve human command when intelligence becomes autonomous, connected, strategically capable and consequential.</p>
        </div>
      </section>

      <section className="section dark-band">
        <div className="shell">
          <p className="section-label">THE THREE GUARDIAN FRONTS</p>
          <h2>Guard against the attacker. Guard the system. Guard against loss of control.</h2>
          <div className="mandate-grid">
            <article><h3>Adversarial humans.</h3><p>Attackers may manipulate models, poison context, compromise tools, exploit agents, steal capabilities or weaponize AI for offensive operations.</p></article>
            <article><h3>Compromised AI systems.</h3><p>An otherwise useful AI system can become an attack path when its memory, instructions, identity, tools, supply chain or environment are corrupted.</p></article>
            <article><h3>Advanced intelligence itself.</h3><p>As capability grows, research must consider deceptive behavior, emergent goals, strategic autonomy, resistance to shutdown, uncontrolled delegation and systems acting beyond intended authority.</p></article>
            <article><h3>The Guardian response.</h3><p>Build visibility, constraints, independent authorization, containment, intervention, recovery and assurance strong enough to survive failure in the intelligence itself.</p></article>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-head-row">
          <div>
            <p className="section-label">RESEARCH PROGRAMS</p>
            <h2>Study the full path from model weakness to loss of human control.</h2>
          </div>
          <p className="side-note">MODEL → CONTEXT → MEMORY → IDENTITY → TOOLS → AGENTS → INFRASTRUCTURE → AUTONOMY → HUMAN CONTROL</p>
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
          <h2>Every capability that gives AI influence, persistence or authority creates a control boundary.</h2>
          <div className="matrix-wrap">
            <div className="matrix-row matrix-head"><span>SURFACE</span><span>ADVERSARIAL QUESTION</span><span>GUARDIAN CONTROL OBJECTIVE</span></div>
            <div className="matrix-row"><span>Context</span><span>Can untrusted data become instructions?</span><span>Separate data from authority.</span></div>
            <div className="matrix-row"><span>Memory</span><span>Can hostile or self-serving state persist and influence future action?</span><span>Validate, scope and expire memory.</span></div>
            <div className="matrix-row"><span>Tools</span><span>Can model output trigger consequences beyond intent?</span><span>Authorize actions outside the model.</span></div>
            <div className="matrix-row"><span>Identity</span><span>Can an agent exceed, inherit or manufacture authority?</span><span>Bind identity, purpose and least privilege.</span></div>
            <div className="matrix-row"><span>Agents</span><span>Can delegation create uncontrolled chains or self-amplifying autonomy?</span><span>Limit recursion, delegation and blast radius.</span></div>
            <div className="matrix-row"><span>Infrastructure</span><span>Can AI reach secrets, code, networks, devices or control planes?</span><span>Isolate execution and constrain egress.</span></div>
            <div className="matrix-row"><span>Intelligence</span><span>Can the system deceive, resist intervention or pursue objectives beyond intended authority?</span><span>Preserve corrigibility, containment and independent control.</span></div>
            <div className="matrix-row"><span>Humans</span><span>Can oversight be bypassed, manipulated or made irrelevant by speed and complexity?</span><span>Preserve intervention and independent approval.</span></div>
          </div>
        </div>
      </section>

      <section className="section shell">
        <p className="section-label">GUARDIAN DOCTRINE</p>
        <h2>Offense is a method. Protection is the purpose. Human control is the objective. Evidence is the standard.</h2>
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
        <h2>If intelligence becomes more powerful than the systems built to control it, the control system becomes the critical infrastructure.</h2>
        <p className="lead">Guard the model. Guard the agent. Guard the authority. Guard the boundary. Guard humanity's ability to remain in command.</p>
      </section>
    </>
  )
}
