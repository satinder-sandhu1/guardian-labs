import chunk1 from './banner-data/chunk1'
import chunk2 from './banner-data/chunk2'
import chunk3 from './banner-data/chunk3'
import chunk4 from './banner-data/chunk4'
import chunk5 from './banner-data/chunk5'

const bannerSrc = `data:image/webp;base64,${chunk1}${chunk2}${chunk3}${chunk4}${chunk5}`

export default function GuardianBanner() {
  return (
    <section className="brand-banner-section" aria-label="Guardian Lab identity">
      <img
        className="brand-banner"
        src={bannerSrc}
        width="2048"
        height="682"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        alt="Guardian Lab — Breaking AI Before It Breaks Free. Adversarial Science for the Control and Assurance of Machine Intelligence."
      />
    </section>
  )
}
