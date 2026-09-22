import 'nextra-theme-docs/style.css'
import './globals.css'
import { Layout, Navbar, Footer } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'

export const metadata = {
  title: {
    default: 'Guardian Labs',
    template: '%s | Guardian Labs'
  },
  description:
    'Guardians of the AI Age. Independent AI security research focused on keeping increasingly autonomous AI secure, bounded, observable, and under meaningful human control.'
}

const banner = (
  <Banner storageKey="guardian-v1-banner">
    Guardian Labs · V1 Research Platform
  </Banner>
)

const navbar = (
  <Navbar
    logo={<span className="brand">GUARDIAN LABS</span>}
    projectLink="https://github.com/satinder-sandhu1/guardian-labs"
  />
)

const footer = (
  <Footer>
    <span>Guardian Labs · Guardians of the AI Age.</span>
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/satinder-sandhu1/guardian-labs/tree/main"
          footer={footer}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          toc={{ backToTop: true }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
