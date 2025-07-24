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
    <main className="min-h-screen bg-areia">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/placeholder.svg?height=800&width=1200')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F220B]/60 via-[#0F220B]/40 to-[#2E450F]/80" />
        </div>

        <div className="relative z-10 text-center section-padding max-w-6xl mx-auto py-[40vh]">
          <h1 className="font-title text-5xl md:text-7xl font-bold text-areia mb-8 text-shadow leading-tight">
            Nossa
            <br />
            <span className="text-[#B6F442]">História</span>
          </h1>
          <p className="text-xl md:text-2xl text-areia/90 mb-12 max-w-3xl mx-auto leading-relaxed text-shadow">
            Somos mais que uma plataforma de turismo. Somos facilitadores de conexões autênticas entre pessoas, natureza
            e cultura no coração da Mata Atlântica.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#2E450F] to-transparent z-5" />
      </section>

      {/* Story Section */}
      <section className="min-h-screen flex items-center justify-center section-padding bg-[#2E450F] relative py-[40vh]">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-title text-4xl md:text-5xl font-bold text-areia mb-8">Como Tudo Começou</h2>
              <div className="space-y-6 text-lg text-areia/90 leading-relaxed">
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
            <div className="order-1 lg:order-2">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Paisagem do Sana"
                  width={600}
                  height={500}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F220B] to-transparent" />
      </section>

      {/* Values Section */}
      <section className="min-h-screen flex items-center justify-center section-padding bg-[#0F220B] relative py-[40vh]">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-title text-4xl md:text-5xl font-bold text-areia mb-8">Nossos Valores</h2>
            <p className="text-xl text-areia/90 max-w-3xl mx-auto leading-relaxed">
              Cada decisão que tomamos é guiada por princípios que acreditamos serem fundamentais para um turismo
              verdadeiramente transformador.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group bg-white/10 backdrop-blur-md border border-areia/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="w-20 h-20 bg-[#B6F442] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart size={32} className="text-[#0F220B]" />
              </div>
              <h3 className="font-title text-xl font-bold text-areia mb-4">Ética</h3>
              <p className="text-areia/90">Transparência e respeito em todas as relações</p>
            </div>

            <div className="text-center group bg-white/10 backdrop-blur-md border border-areia/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="w-20 h-20 bg-[#B6F442] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Leaf size={32} className="text-[#0F220B]" />
              </div>
              <h3 className="font-title text-xl font-bold text-areia mb-4">Escuta</h3>
              <p className="text-areia/90">Ouvimos a terra, as pessoas e suas histórias</p>
            </div>

            <div className="text-center group bg-white/10 backdrop-blur-md border border-areia/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="w-20 h-20 bg-[#B6F442] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users size={32} className="text-[#0F220B]" />
              </div>
              <h3 className="font-title text-xl font-bold text-areia mb-4">Solidariedade</h3>
              <p className="text-areia/90">Fortalecemos laços e criamos impacto positivo</p>
            </div>

            <div className="text-center group bg-white/10 backdrop-blur-md border border-areia/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="w-20 h-20 bg-[#B6F442] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award size={32} className="text-[#0F220B]" />
              </div>
              <h3 className="font-title text-xl font-bold text-areia mb-4">Excelência</h3>
              <p className="text-areia/90">Qualidade em cada detalhe da experiência</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#040C04] to-transparent" />
      </section>

      {/* Team Section */}
      <section className="min-h-screen flex items-center justify-center section-padding bg-[#040C04] relative py-[40vh]">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-title text-4xl md:text-5xl font-bold text-areia mb-8">Nossa Equipe</h2>
            <p className="text-xl text-areia/90 max-w-3xl mx-auto leading-relaxed">
              Pessoas apaixonadas pelo Sana que dedicam suas vidas a compartilhar a beleza e sabedoria desta região
              única.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="text-center group bg-white/10 backdrop-blur-md border border-areia/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
              >
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-title text-2xl font-bold text-areia mb-2">{member.name}</h3>
                <p className="text-[#B6F442] font-medium mb-4">{member.role}</p>
                <p className="text-areia/90">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#B6F442] to-transparent" />
      </section>

      {/* Timeline Section */}
      <section className="min-h-screen flex items-center justify-center section-padding bg-[#B6F442] relative py-[40vh]">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-title text-4xl md:text-5xl font-bold text-terra mb-8">Nossa Jornada</h2>
            <p className="text-xl text-terra/90 max-w-3xl mx-auto leading-relaxed">
              Cada marco representa um passo em direção ao nosso sonho de turismo verdadeiramente consciente e
              transformador.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white/20 backdrop-blur-md border border-terra/30 rounded-2xl p-8 md:p-12">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <span className="font-title text-2xl font-bold text-terra">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-terra rounded-full mt-2 mr-8 relative">
                  {index < milestones.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-terra/30" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-title text-xl font-bold text-terra mb-2">{milestone.title}</h3>
                  <p className="text-terra/90">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/jornada"
              className="inline-block bg-terra text-areia px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#344E27] hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Comece sua Jornada
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#344E27] to-transparent" />
      </section>

      {/* Final Section */}
      <section className="min-h-screen flex items-center justify-center section-padding bg-[#344E27] relative py-[40vh]">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-8 md:p-12 bg-white/10 backdrop-blur-md border border-areia/20 rounded-2xl">
              <h2 className="font-title text-4xl md:text-5xl font-bold text-areia mb-8">"Explorar é Pertencer"</h2>

              <div className="space-y-6 text-lg text-areia/90 leading-relaxed mb-8">
                <p>
                  Esta é mais que nossa filosofia - é nosso compromisso com cada viajante que escolhe o NatureXplore.
                  Acreditamos que quando você explora com consciência, você não apenas visita um lugar, você se torna
                  parte de sua história.
                </p>
                <p>
                  Junte-se a nós nesta missão de transformar o turismo em uma força positiva para as comunidades e o
                  meio ambiente. O Sana está esperando para recebê-lo como parte da família.
                </p>
              </div>

              <a
                href="https://www.instagram.com/naturexplore_sana?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#B6F442] text-terra px-8 py-4 rounded-lg font-medium text-lg hover:bg-areia hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Veja a vista pelos olhares do naturexplore e dos naturexploradores no nosso perfil do instagram!
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
