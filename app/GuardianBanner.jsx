export default function GuardianBanner() {
  return (
    <section className="brand-banner-section" aria-label="Guardian Lab identity">
      <img
        className="brand-banner"
        src="/guardian-lab-logo.png?v=20260922-final"
        width="2048"
        height="682"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        alt="Guardian Lab — Breaking AI Before It Breaks Free™ — Adversarial Science for the Control and Assurance of Machine Intelligence"
      />
    </section>
  )
}
