import './globals.css'

export const metadata = {
  title: {
    default: 'Guardian Lab',
    template: '%s | Guardian Lab'
  },
  description:
    'Guardian Lab is an independent frontier AI security and control research organization dedicated to protecting society from adversarial misuse, loss of control, and advanced AI systems whose own behavior becomes dangerous or hostile.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="signal-bar">
          <div className="shell signal-inner">
            <span>GUARDIAN LAB // FRONTIER AI SECURITY & CONTROL RESEARCH</span>
            <span>OFFENSIVE SECURITY · AI CONTROL · CONTAINMENT · RISK · ASSURANCE</span>
          </div>
        </div>
        <header className="site-header">
          <div className="shell nav-wrap">
            <a className="brand" href="/">GUARDIAN LAB</a>
            <nav className="nav-links">
              <a href="/research">Research</a>
              <a href="/experiments">Experiments</a>
              <a href="/methodology">Doctrine</a>
              <a href="/about">Mission</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="shell footer-grid">
            <div>
              <div className="brand footer-brand">GUARDIAN LAB</div>
              <p>Guardian of the AI Age.</p>
              <p><a href="mailto:contact@securityassured.ca">contact@securityassured.ca</a></p>
            </div>
            <div>
              <p className="footer-kicker">MISSION</p>
              <p>Protect people, institutions and critical systems from both adversaries who weaponize AI and advanced intelligence that escapes intended human control.</p>
            </div>
            <div>
              <p className="footer-kicker">OPERATING PRINCIPLE</p>
              <p>Prepare for the moment the threat is no longer only outside the AI system — but can emerge from the intelligence, autonomy and capabilities inside it.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
