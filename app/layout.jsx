import './globals.css'

export const metadata = {
  title: {
    default: 'Guardian Labs',
    template: '%s | Guardian Labs'
  },
  description:
    'Guardians of the AI Age. Independent AI security research focused on keeping increasingly autonomous AI secure, bounded, observable, and under meaningful human control.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="shell nav-wrap">
            <a className="brand" href="/">GUARDIAN LABS</a>
            <nav className="nav-links">
              <a href="/research">Research</a>
              <a href="/experiments">Experiments</a>
              <a href="/methodology">Methodology</a>
              <a href="/about">About</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="shell footer-wrap">
            <span>Guardian Labs</span>
            <span>Guardians of the AI Age.</span>
          </div>
        </footer>
      </body>
    </html>
  )
}
