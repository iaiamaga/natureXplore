"use client"

import { useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function MontagemPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-title text-5xl md:text-6xl font-bold text-terra mb-8">Monte sua Experiência</h1>
            <p className="text-xl text-pedra leading-relaxed mb-8">
              Ferramenta de criação de pacotes personalizados de viagem
            </p>
            <div className="bg-folha/10 rounded-2xl p-12">
              <p className="text-lg text-pedra">
                Em breve: Ferramenta interativa para personalização completa da sua jornada no Sana.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
