import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { WineryHeroSection } from '@/components/sections/WineryHeroSection'
import { StatsBar } from '@/components/sections/StatsBar'
import { WineryMomentsSection } from '@/components/sections/WineryMomentsSection'
import { WineryExampleNote } from '@/components/sections/WineryExampleNote'
import { ScienceSection } from '@/components/sections/ScienceSection'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { WaitlistSection } from '@/components/sections/WaitlistSection'

export default function WineriesPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <WineryHeroSection />
        <StatsBar />
        <WineryMomentsSection />
        <WineryExampleNote />
        <ScienceSection />
        <HowItWorks />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  )
}