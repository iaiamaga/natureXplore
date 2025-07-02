import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ExperienceBlocks from "@/components/experience-blocks"
import ManifestoSection from "@/components/manifesto-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ExperienceBlocks />
      <ManifestoSection />
      <Footer />
    </main>
  )
}
