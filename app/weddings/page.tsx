import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { WeddingHeroSection } from '@/components/sections/WeddingHeroSection'
import { WeddingFeaturesSection } from '@/components/sections/WeddingFeaturesSection'
import { WeddingExampleNote } from '@/components/sections/WeddingExampleNote'

export default function WeddingsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <WeddingHeroSection />
        <WeddingFeaturesSection />
        <WeddingExampleNote />
      </main>
      <Footer />
    </>
  )
}