import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { OpportunityReport } from '@/components/sections/report/OpportunityReport'

export const metadata = {
  title: 'Pen Pal Pro — Your Free Opportunity Report',
  description:
    'See exactly how much new-homeowner revenue is walking past your business — free, instant, real Redfin data for your zip.',
  // Keep this route off search engines; it's a paid-traffic landing page.
  robots: { index: false, follow: false },
}

export default function ReportPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <OpportunityReport />
      </main>
      <Footer />
    </>
  )
}
