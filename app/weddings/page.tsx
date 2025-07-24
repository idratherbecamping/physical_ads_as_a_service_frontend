import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { WeddingHeroSection } from '@/components/sections/WeddingHeroSection'
import { StatsBar } from '@/components/sections/StatsBar'
import { WeddingFeaturesSection } from '@/components/sections/WeddingFeaturesSection'
import { WeddingExampleNote } from '@/components/sections/WeddingExampleNote'
import { ScienceSection } from '@/components/sections/ScienceSection'

export default function WeddingsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <WeddingHeroSection />
        <StatsBar />
        <WeddingFeaturesSection />
        <WeddingExampleNote />
        <ScienceSection />
      </main>
      <Footer />
    </>
  )
}