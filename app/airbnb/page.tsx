import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { AirbnbHeroSection } from '@/components/sections/AirbnbHeroSection'
import { StatsBar } from '@/components/sections/StatsBar'
import { AirbnbCleanerPainPoints } from '@/components/sections/AirbnbCleanerPainPoints'
import { AirbnbExampleNote } from '@/components/sections/AirbnbExampleNote'
import { ScienceSection } from '@/components/sections/ScienceSection'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { GetStartedSection } from '@/components/sections/GetStartedSection'

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
        <GetStartedSection />
      </main>
      <Footer />
    </>
  )
}