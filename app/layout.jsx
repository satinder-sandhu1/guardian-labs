import './globals.css'

export const metadata = {
  title: {
    default: 'Guardian Labs',
    template: '%s | Guardian Labs'
  },
  description:
    'Guardian Labs is a frontier AI offensive security, control, risk and assurance research organization focused on keeping increasingly autonomous AI secure, bounded, observable and under meaningful human control.'
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
            <a className="brand" href="/">
              <span className="brand-mark">G</span>
              <span>GUARDIAN LABS</span>
            </a>
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
              <div className="brand footer-brand"><span className="brand-mark">G</span><span>GUARDIAN LABS</span></div>
              <p>Guardians of the AI Age.</p>
            </div>
            <div>
              <p className="footer-kicker">MISSION</p>
              <p>Keep increasingly capable AI secure, bounded, observable, interruptible and under meaningful human control.</p>
            </div>
            <div>
              <p className="footer-kicker">OPERATING PRINCIPLE</p>
              <p>Offensive by method. Defensive by mission. Evidence before assurance.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
