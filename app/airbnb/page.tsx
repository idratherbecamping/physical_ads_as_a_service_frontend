import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { AirbnbHeroSection } from '@/components/sections/AirbnbHeroSection'
import { StatsBar } from '@/components/sections/StatsBar'
import { AirbnbCleanerPainPoints } from '@/components/sections/AirbnbCleanerPainPoints'
import { AirbnbExampleNote } from '@/components/sections/AirbnbExampleNote'
import { ScienceSection } from '@/components/sections/ScienceSection'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { WaitlistSection } from '@/components/sections/WaitlistSection'

export default function AirbnbPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <AirbnbHeroSection />
        <StatsBar />
        <AirbnbCleanerPainPoints />
        <HowItWorks />
        <AirbnbExampleNote />
        <ScienceSection />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  )
}