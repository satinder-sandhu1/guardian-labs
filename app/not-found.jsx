export default function NotFound() {
  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '6rem 1.5rem' }}>
      <p style={{ letterSpacing: '.14em', fontSize: '.75rem', opacity: .6, fontWeight: 700 }}>
        GUARDIAN LABS · 404
      </p>
      <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1, margin: '1rem 0' }}>
        This boundary does not exist.
      </h1>
      <p style={{ fontSize: '1.05rem', lineHeight: 1.7, opacity: .75 }}>
        The page you requested could not be found.
      </p>
      <p style={{ marginTop: '1.5rem' }}>
        <a href="/">Return to Guardian Labs</a>
      </p>
    </main>
  )
}
