"use client"

import { useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function DiarioPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-title text-5xl md:text-6xl font-bold text-terra mb-8">Diário do Explorador</h1>
            <p className="text-xl text-pedra leading-relaxed mb-8">
              Blog com relatos de viajantes, histórias, vídeos e fotos da região
            </p>
            <div className="bg-folha/10 rounded-2xl p-12">
              <p className="text-lg text-pedra">
                Em breve: Histórias inspiradoras e relatos autênticos de exploradores do Sana.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
