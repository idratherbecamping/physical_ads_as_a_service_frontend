import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { StatsBar } from '@/components/sections/StatsBar'
import { ExampleNote } from '@/components/sections/ExampleNote'
import { ScienceSection } from '@/components/sections/ScienceSection'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { PricingSection } from '@/components/sections/PricingSection'
import { ROISection } from '@/components/sections/ROISection'
import { WaitlistSection } from '@/components/sections/WaitlistSection'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <StatsBar />
        <HowItWorks />
        <ExampleNote />
        <ScienceSection />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  )
}