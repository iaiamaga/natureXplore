import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import NaturexplorePresentation from "@/components/naturexplore-presentation"
import SanaSection from "@/components/sana-section"
import ExperienceCreationSection from "@/components/experience-creation-section"
import DiarySection from "@/components/diary-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <NaturexplorePresentation />
      <SanaSection />
      <ExperienceCreationSection />
      <DiarySection />
      <Footer />
    </main>
  )
}
