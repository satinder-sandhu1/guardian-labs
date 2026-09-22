import './globals.css'

export const metadata = {
  title: {
    default: 'Guardian Labs',
    template: '%s | Guardian Labs'
  },
  description:
    'Guardian Labs is an independent frontier AI security research organization dedicated to protecting society by stress-testing, breaking, containing and assuring increasingly autonomous AI systems.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="signal-bar">
          <div className="shell signal-inner">
            <span>GUARDIAN LABS // FRONTIER AI SECURITY RESEARCH</span>
            <span>OFFENSIVE SECURITY · CONTROL · RISK · ASSURANCE</span>
          </div>
        </div>
        <header className="site-header">
          <div className="shell nav-wrap">
            <a className="brand" href="/">GUARDIAN LABS</a>
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
              <div className="brand footer-brand">GUARDIAN LABS</div>
              <p>Guardians of the AI Age.</p>
              <p><a href="mailto:contact@securityassured.ca">contact@securityassured.ca</a></p>
            </div>
            <div>
              <p className="footer-kicker">MISSION</p>
              <p>Stand guard at the boundary between powerful AI capability and the systems, people and institutions that depend on it.</p>
            </div>
            <div>
              <p className="footer-kicker">OPERATING PRINCIPLE</p>
              <p>Go further into the failure modes than attackers will — so defenders, operators and society do not have to learn first in production.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
