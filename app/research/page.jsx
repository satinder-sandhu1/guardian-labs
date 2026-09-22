const domains = [
  ['GL-RP-01', 'Agentic Attack Surface', ['Excessive agency', 'Unsafe tool use', 'Recursive delegation', 'Privilege boundary failure', 'Autonomous attack chaining']],
  ['GL-RP-02', 'Prompt & Context Exploitation', ['Direct prompt injection', 'Indirect prompt injection', 'Instruction/data confusion', 'RAG poisoning', 'Cross-context manipulation']],
  ['GL-RP-03', 'MCP & Toolchain Security', ['Malicious MCP servers', 'Tool poisoning', 'Capability overreach', 'Authorization failure', 'Cross-server trust abuse']],
  ['GL-RP-04', 'Model & Supply Chain', ['Model provenance', 'Backdoors', 'Poisoned artifacts', 'Unsafe loading', 'Fine-tuning integrity']],
  ['GL-RP-05', 'Memory & Persistence', ['Long-term memory poisoning', 'Cross-session contamination', 'Persistent malicious state', 'State inheritance', 'Memory trust boundaries']],
  ['GL-RP-06', 'Identity & Authority', ['Agent identity', 'Non-human identity', 'Delegation', 'Impersonation', 'Least privilege']],
  ['GL-RP-07', 'Multi-Agent Security', ['Emergent attack paths', 'Agent collusion', 'Cascading failure', 'Recursive delegation', 'Trust graph compromise']],
  ['GL-RP-08', 'Runtime & Containment', ['Sandbox boundaries', 'Network egress', 'Secrets exposure', 'Execution isolation', 'Killability']],
  ['GL-RP-09', 'Adversarial ML', ['Evasion', 'Extraction', 'Poisoning', 'Robustness failure', 'Model behavior under adversarial input']],
  ['GL-RP-10', 'Advanced Intelligence Control', ['Deceptive behavior', 'Emergent objectives', 'Strategic autonomy', 'Resistance to intervention', 'Uncontrolled replication or delegation', 'Offensive capability escalation']],
  ['GL-RP-11', 'AI Risk & Assurance', ['Attack-informed assurance', 'Evidence quality', 'Control validation', 'Residual risk', 'Operational readiness']]
]

const layers = [
  ['01', 'Model', 'What can manipulate, distort or emerge from model behavior?'],
  ['02', 'Context', 'What can enter the reasoning boundary and become trusted?'],
  ['03', 'Memory', 'What hostile or self-serving state can persist?'],
  ['04', 'Identity', 'Who or what is the agent allowed to become?'],
  ['05', 'Tools', 'What real-world capabilities can model output invoke?'],
  ['06', 'Agents', 'How can delegation amplify local failure or autonomy?'],
  ['07', 'Infrastructure', 'What systems, secrets, networks and control planes are reachable?'],
  ['08', 'Autonomy', 'Can the system pursue strategies or actions beyond intended human authority?'],
  ['09', 'Human Control', 'Can humans still understand, interrupt, contain and reconstruct consequential action?']
]

export default function ResearchPage() {
  return (
    <>
      <section className="content-page shell research-hero">
        <p className="section-label">GUARDIAN RESEARCH PROGRAM</p>
        <h1>Research the point where artificial intelligence becomes a security actor.</h1>
        <p className="lead">Guardian Lab studies more than attacks against AI. We study the transition from model to agent, from agent to authority, and from authority to autonomous action — including the possibility that advanced intelligence itself becomes deceptive, uncontrollable or offensively capable.</p>
      </section>

      <section className="section shell">
        <p className="section-label">AI CONTROL STACK</p>
        <div className="stack-grid">
          {layers.map(([id, name, q]) => (
            <article className="stack-card" key={id}>
              <span>{id}</span><h3>{name}</h3><p>{q}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell">
        <p className="section-label">RESEARCH DOMAINS</p>
        <h2>External attacks, compromised systems, emergent autonomy — one control mission.</h2>
        <div className="research-domain-grid">
          {domains.map(([id, title, items]) => (
            <article className="research-domain" key={id}>
              <p className="program-id">{id}</p>
              <h3>{title}</h3>
              <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-band">
        <div className="shell">
          <p className="section-label">RESEARCH QUESTIONS</p>
          <h2>Questions that define security in the age of advanced intelligence.</h2>
          <div className="question-grid">
            <p>Can an AI agent be trusted when the information it consumes is hostile?</p>
            <p>Can sensitive actions remain safe when the reasoning engine is probabilistic?</p>
            <p>Can delegated authority be bounded across chains of agents and tools?</p>
            <p>Can persistent memory become a long-lived attack surface or a substrate for self-serving behavior?</p>
            <p>Can operators detect when an autonomous system is drifting outside intended behavior?</p>
            <p>Can a system strategically conceal behavior, manipulate oversight or resist intervention?</p>
            <p>Can humans reliably interrupt and contain a system whose planning speed exceeds human response time?</p>
            <p>Can controls remain effective if the intelligence being controlled becomes more capable than the control logic surrounding it?</p>
            <p>Can offensive cyber, financial, information or infrastructure capabilities emerge from general-purpose autonomy?</p>
            <p>Can assurance claims be proven with adversarial evidence instead of documentation alone?</p>
          </div>
        </div>
      </section>
    </>
  )
}
