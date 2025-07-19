"use client"

import { useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Heart, Users, Leaf, Award } from "lucide-react"

const team = [
  {
    name: "Maria Silva",
    role: "Fundadora & Guia Local",
    image: "/placeholder.svg?height=300&width=300",
    description: "Nascida no Sana, Maria conhece cada trilha e história da região.",
  },
  {
    name: "João Santos",
    role: "Especialista em Ecoturismo",
    image: "/placeholder.svg?height=300&width=300",
    description: "Biólogo apaixonado pela preservação da Mata Atlântica.",
  },
  {
    name: "Ana Costa",
    role: "Coordenadora Cultural",
    image: "/placeholder.svg?height=300&width=300",
    description: "Conecta visitantes às tradições e saberes da comunidade.",
  },
]

const milestones = [
  {
    year: "2020",
    title: "Início da Jornada",
    description: "Nascimento da ideia de turismo consciente no Sana",
  },
  {
    year: "2021",
    title: "Primeiras Parcerias",
    description: "Colaboração com produtores e artesãos locais",
  },
  {
    year: "2022",
    title: "Reconhecimento",
    description: "Certificação em turismo sustentável",
  },
  {
    year: "2023",
    title: "Expansão Consciente",
    description: "Ampliação das experiências mantendo a essência",
  },
]

export default function SobrePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="min-h-[140vh] flex items-center justify-center section-padding relative">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="font-title text-5xl md:text-6xl font-bold text-terra mb-8">Nossa História</h1>
            <p className="text-xl text-pedra leading-relaxed">
              Somos mais que uma plataforma de turismo. Somos facilitadores de conexões autênticas entre pessoas,
              natureza e cultura no coração da Mata Atlântica.
            </p>
          </div>
        </div>
        {/* Smooth transition gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-folha/5 to-transparent" />
      </section>

      {/* Story Section */}
      <section className="py-20 bg-folha/5 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-title text-4xl font-bold text-terra mb-8">Como Tudo Começou</h2>
              <div className="space-y-6 text-pedra leading-relaxed">
                <p>
                  O NatureXplore nasceu do amor profundo pelo Sana e da necessidade de preservar sua essência única.
                  Vimos como o turismo tradicional pode impactar negativamente comunidades locais e decidimos criar uma
                  alternativa.
                </p>
                <p>
                  Nossa abordagem é simples: conectar viajantes conscientes com experiências autênticas, sempre
                  respeitando e fortalecendo a comunidade local. Cada jornada é uma oportunidade de aprendizado mútuo e
                  crescimento sustentável.
                </p>
                <p>
                  Trabalhamos diretamente com moradores, produtores, artesãos e guias locais, garantindo que o turismo
                  seja uma ferramenta de desenvolvimento e preservação cultural e ambiental.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Paisagem do Sana"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 section-padding bg-areia">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-title text-4xl font-bold text-terra mb-6">Nossos Valores</h2>
            <p className="text-xl text-pedra max-w-3xl mx-auto">
              Cada decisão que tomamos é guiada por princípios que acreditamos serem fundamentais para um turismo
              verdadeiramente transformador.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-terra rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-folha transition-colors duration-300">
                <Heart size={32} className="text-areia" />
              </div>
              <h3 className="font-title text-xl font-bold text-terra mb-4">Ética</h3>
              <p className="text-pedra">Transparência e respeito em todas as relações</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-terra rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-folha transition-colors duration-300">
                <Leaf size={32} className="text-areia" />
              </div>
              <h3 className="font-title text-xl font-bold text-terra mb-4">Escuta</h3>
              <p className="text-pedra">Ouvimos a terra, as pessoas e suas histórias</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-terra rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-folha transition-colors duration-300">
                <Users size={32} className="text-areia" />
              </div>
              <h3 className="font-title text-xl font-bold text-terra mb-4">Solidariedade</h3>
              <p className="text-pedra">Fortalecemos laços e criamos impacto positivo</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-terra rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-folha transition-colors duration-300">
                <Award size={32} className="text-areia" />
              </div>
              <h3 className="font-title text-xl font-bold text-terra mb-4">Excelência</h3>
              <p className="text-pedra">Qualidade em cada detalhe da experiência</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-folha/5 section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-title text-4xl font-bold text-terra mb-6">Nossa Equipe</h2>
            <p className="text-xl text-pedra max-w-3xl mx-auto">
              Pessoas apaixonadas pelo Sana que dedicam suas vidas a compartilhar a beleza e sabedoria desta região
              única.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={member.name} className="text-center group">
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-title text-2xl font-bold text-terra mb-2">{member.name}</h3>
                <p className="text-folha font-medium mb-4">{member.role}</p>
                <p className="text-pedra">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 section-padding bg-areia">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-title text-4xl font-bold text-terra mb-6">Nossa Jornada</h2>
            <p className="text-xl text-pedra max-w-3xl mx-auto">
              Cada marco representa um passo em direção ao nosso sonho de turismo verdadeiramente consciente e
              transformador.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <span className="font-title text-2xl font-bold text-folha">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-terra rounded-full mt-2 mr-8 relative">
                  {index < milestones.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-pedra/30" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-title text-xl font-bold text-terra mb-2">{milestone.title}</h3>
                  <p className="text-pedra">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
