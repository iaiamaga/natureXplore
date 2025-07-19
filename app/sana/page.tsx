"use client"

import { useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function SanaPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen">
      <Header />

      <section className="min-h-[140vh] flex items-center justify-center section-padding relative">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-title text-5xl md:text-6xl font-bold text-terra mb-8">Conhecendo o Sana</h1>
            <p className="text-xl text-pedra leading-relaxed">
              Descubra a história, geografia e cultura deste distrito único da Mata Atlântica
            </p>
          </div>
        </div>
        {/* Smooth transition gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-areia to-transparent" />
      </section>

      <section className="py-16 section-padding bg-areia">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-pedra">
              <h2 className="font-title text-3xl font-bold text-terra mb-6">História</h2>
              <p className="mb-8">
                O Sana tem suas raízes no século XIX, quando famílias pioneiras se estabeleceram nesta região serrana em
                busca de terras férteis e clima ameno. O distrito desenvolveu-se como um importante centro de produção
                agrícola, mantendo até hoje suas características rurais e tradições centenárias.
              </p>

              <h2 className="font-title text-3xl font-bold text-terra mb-6">Geografia</h2>
              <p className="mb-8">
                Localizado na região serrana de Macaé, o Sana está inserido no bioma da Mata Atlântica, um dos mais
                ricos e ameaçados do mundo. Com altitude média de 600 metros, oferece clima tropical de altitude, com
                temperaturas amenas e alta biodiversidade.
              </p>

              <h2 className="font-title text-3xl font-bold text-terra mb-6">Cultura</h2>
              <p>
                A cultura local é uma rica mistura de tradições rurais, saberes ancestrais e hospitalidade genuína. Os
                moradores preservam técnicas artesanais, culinária típica e um modo de vida sustentável que serve de
                inspiração para o turismo consciente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
