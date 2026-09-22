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
  ['GL-RP-10', 'AI Risk & Assurance', ['Attack-informed assurance', 'Evidence quality', 'Control validation', 'Residual risk', 'Operational readiness']]
]

const layers = [
  ['01', 'Model', 'What can manipulate or distort model behavior?'],
  ['02', 'Context', 'What can enter the reasoning boundary and become trusted?'],
  ['03', 'Memory', 'What hostile state can persist?'],
  ['04', 'Identity', 'Who or what is the agent allowed to become?'],
  ['05', 'Tools', 'What real-world capabilities can model output invoke?'],
  ['06', 'Agents', 'How can delegation amplify local failure?'],
  ['07', 'Infrastructure', 'What systems, secrets and control planes are reachable?'],
  ['08', 'Human Control', 'Can humans still see, stop and reconstruct consequential action?']
]

export default function ResearchPage() {
  return (
    <>
      <section className="content-page shell research-hero">
        <p className="section-label">GUARDIAN RESEARCH PROGRAM</p>
        <h1>Map the full AI attack surface. Test the limits of control.</h1>
        <p className="lead">Guardian Lab treats the AI system as an adversarial control stack — not a standalone model. Our research spans the model, context, memory, identities, tools, agent graph, infrastructure and human intervention layer.</p>
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
        <h2>Ten offensive research programs. One control objective.</h2>
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
          <h2>Questions we believe define the next era of AI security.</h2>
          <div className="question-grid">
            <p>Can an AI agent be trusted when the information it consumes is hostile?</p>
            <p>Can sensitive actions remain safe when the reasoning engine is probabilistic?</p>
            <p>Can delegated authority be bounded across chains of agents and tools?</p>
            <p>Can persistent memory become a long-lived attack surface?</p>
            <p>Can operators detect when an autonomous system is drifting outside intended behavior?</p>
            <p>Can humans still interrupt, contain and reconstruct high-impact AI actions?</p>
            <p>Can assurance claims be proven with adversarial evidence instead of documentation alone?</p>
            <p>Can a system fail safely when model behavior is uncertain but consequences are not?</p>
          </div>
        </div>
      </section>
    </>
  )
}
