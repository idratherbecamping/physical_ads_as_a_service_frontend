import type { Metadata } from 'next'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { InsuranceHeroSection } from '@/components/sections/insurance/InsuranceHeroSection'
import { InsuranceHowItWorks } from '@/components/sections/insurance/InsuranceHowItWorks'
import { InsuranceExampleNote } from '@/components/sections/insurance/InsuranceExampleNote'
import { InsuranceFit } from '@/components/sections/insurance/InsuranceFit'
import { InsurancePricing } from '@/components/sections/insurance/InsurancePricing'
import { InsuranceCTA } from '@/components/sections/insurance/InsuranceCTA'

export const metadata: Metadata = {
  title: 'Handwritten Notes to New Homeowners | For Independent Insurance Agencies',
  description:
    'Farm your zip codes with handwritten notes to new homeowners. The opening is the 30-90 day review of the policy they signed at closing, and the auto that comes with it. $249 for 50 notes, then $297/mo.',
  keywords:
    'independent insurance agency marketing, new homeowner mailers, personal lines P&C, handwritten notes, coverage review, home and auto bundle',
  openGraph: {
    title: 'Handwritten Notes to New Homeowners - For Independent Agencies',
    description:
      'Handwritten notes mailed to every new homeowner in your zip codes, offering a review of the homeowners policy written at closing.',
    type: 'website'
  }
}

export default function InsurancePage() {
  return (
    <>
      <Navigation />
      <main className="pt-16 bg-white">
        <InsuranceHeroSection />
        <InsuranceHowItWorks />
        <InsuranceExampleNote />
        <InsuranceFit />
        <InsurancePricing />
        <InsuranceCTA />
      </main>
      <Footer />
    </>
  )
}
