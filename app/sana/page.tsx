"use client"

import { useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Clock, Users, Mountain, Heart } from "lucide-react"

const highlights = [
  {
    icon: Mountain,
    title: "Mata Atlântica Preservada",
    description:
      "Um dos últimos refúgios da biodiversidade brasileira, com trilhas que revelam a riqueza natural da região.",
  },
  {
    icon: Users,
    title: "Comunidade Acolhedora",
    description: "Moradores que preservam tradições centenárias e recebem visitantes com hospitalidade genuína.",
  },
  {
    icon: Heart,
    title: "Turismo Consciente",
    description: "Experiências que respeitam o meio ambiente e fortalecem a economia local de forma sustentável.",
  },
]

const attractions = [
  {
    name: "Pedra Riscada",
    description: "Formação rochosa única com vista panorâmica de toda a região serrana.",
    image: "/placeholder.svg?height=300&width=400",
    difficulty: "Moderada",
    duration: "4 horas",
  },
  {
    name: "Cachoeira da Laje",
    description: "Queda d'água cristalina cercada por vegetação nativa exuberante.",
    image: "/placeholder.svg?height=300&width=400",
    difficulty: "Fácil",
    duration: "2 horas",
  },
  {
    name: "Centro Histórico",
    description: "Arquitetura colonial preservada que conta a história do distrito.",
    image: "/placeholder.svg?height=300&width=400",
    difficulty: "Fácil",
    duration: "1 hora",
  },
  {
    name: "Trilha dos Vaga-lumes",
    description: "Experiência noturna única observando estes insetos fascinantes.",
    image: "/placeholder.svg?height=300&width=400",
    difficulty: "Fácil",
    duration: "3 horas",
  },
]

export default function SanaPage() {
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
            Conhecendo o<br />
            <span className="text-[#B6F442]">Sana</span>
          </h1>
          <p className="text-xl md:text-2xl text-areia/90 mb-12 max-w-3xl mx-auto leading-relaxed text-shadow">
            Descubra a história, geografia e cultura deste distrito único da Mata Atlântica, onde tradições centenárias
            encontram a natureza preservada
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#2E450F] to-transparent z-5" />
      </section>

      {/* História Section */}
      <section className="min-h-screen flex items-center justify-center section-padding bg-[#2E450F] relative py-[40vh]">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-title text-4xl md:text-5xl font-bold text-areia mb-8">História do Sana</h2>
              <div className="space-y-6 text-lg text-areia/90 leading-relaxed">
                <p>
                  O Sana tem suas raízes no século XIX, quando famílias pioneiras se estabeleceram nesta região serrana
                  em busca de terras férteis e clima ameno. O distrito desenvolveu-se como um importante centro de
                  produção agrícola, mantendo até hoje suas características rurais e tradições centenárias.
                </p>
                <p>
                  A preservação da Mata Atlântica local deve-se ao cuidado das gerações que aqui viveram, criando um
                  equilíbrio único entre desenvolvimento humano e conservação ambiental. Hoje, o Sana representa um
                  modelo de sustentabilidade e turismo consciente.
                </p>
                <p>
                  As construções históricas, muitas ainda habitadas pelas famílias descendentes dos primeiros
                  colonizadores, contam histórias de resistência, adaptação e amor pela terra que se tornaram parte
                  indissociável da identidade local.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Casa histórica do Sana"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F220B] to-transparent" />
      </section>

      {/* Geografia Section */}
      <section className="min-h-screen flex items-center justify-center section-padding bg-[#0F220B] relative py-[40vh]">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Mata Atlântica do Sana"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="font-title text-4xl md:text-5xl font-bold text-areia mb-8">Geografia Única</h2>
              <div className="space-y-6 text-lg text-areia/90 leading-relaxed">
                <p>
                  Localizado na região serrana de Macaé, o Sana está inserido no bioma da Mata Atlântica, um dos mais
                  ricos e ameaçados do mundo. Com altitude média de 600 metros, oferece clima tropical de altitude, com
                  temperaturas amenas e alta biodiversidade.
                </p>
                <p>
                  A topografia montanhosa cria microclimas únicos que abrigam espécies endêmicas de flora e fauna. As
                  nascentes cristalinas que brotam das encostas formam cachoeiras e rios que cortam vales verdejantes,
                  criando paisagens de rara beleza.
                </p>
                <p>
                  Esta geografia privilegiada não apenas proporciona cenários deslumbrantes, mas também sustenta
                  ecossistemas complexos que são fundamentais para a manutenção do equilíbrio ambiental regional.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#040C04] to-transparent" />
      </section>

      {/* Highlights Section */}
      <section className="min-h-screen flex items-center justify-center section-padding bg-[#040C04] relative py-[40vh]">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-title text-4xl md:text-5xl font-bold text-areia mb-8">O que torna o Sana especial</h2>
            <p className="text-xl text-areia/90 max-w-3xl mx-auto leading-relaxed">
              Três pilares fundamentais que fazem do Sana um destino único para o turismo consciente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className="text-center group bg-white/10 backdrop-blur-md border border-areia/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-[#B6F442] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon size={32} className="text-[#040C04]" />
                </div>
                <h3 className="font-title text-2xl font-bold text-areia mb-4">{highlight.title}</h3>
                <p className="text-areia/90 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#B6F442] to-transparent" />
      </section>

      {/* Attractions Section */}
      <section className="min-h-screen flex items-center justify-center section-padding bg-[#B6F442] relative py-[40vh]">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-title text-4xl md:text-5xl font-bold text-terra mb-8">Principais Atrações</h2>
            <p className="text-xl text-terra/90 max-w-3xl mx-auto leading-relaxed">
              Descubra os tesouros naturais e culturais que fazem do Sana um destino inesquecível
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {attractions.map((attraction, index) => (
              <div
                key={attraction.name}
                className="bg-white/90 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48">
                  <Image
                    src={attraction.image || "/placeholder.svg"}
                    alt={attraction.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-title text-2xl font-bold text-terra mb-3">{attraction.name}</h3>
                  <p className="text-terra/90 mb-4 leading-relaxed">{attraction.description}</p>
                  <div className="flex items-center justify-between text-sm text-terra/70">
                    <div className="flex items-center space-x-1">
                      <Mountain size={16} />
                      <span>{attraction.difficulty}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{attraction.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/jornada"
              className="inline-block bg-terra text-areia px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#344E27] hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Explore essas experiências
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#344E27] to-transparent" />
      </section>

      {/* Culture Section */}
      <section className="min-h-screen flex items-center justify-center section-padding bg-[#344E27] relative py-[40vh]">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-title text-4xl md:text-5xl font-bold text-areia mb-8">Cultura e Tradições</h2>

            <div className="bg-white/10 backdrop-blur-md border border-areia/20 rounded-2xl p-8 md:p-12">
              <div className="space-y-6 text-lg text-areia/90 leading-relaxed mb-8">
                <p>
                  A cultura local é uma rica mistura de tradições rurais, saberes ancestrais e hospitalidade genuína. Os
                  moradores preservam técnicas artesanais, culinária típica e um modo de vida sustentável que serve de
                  inspiração para o turismo consciente.
                </p>
                <p>
                  Festivais sazonais celebram a colheita, a música tradicional ecoa pelas montanhas, e o artesanato
                  local conta histórias passadas de geração em geração. Cada família tem suas receitas secretas, suas
                  técnicas de cultivo e suas histórias que enriquecem a experiência de quem visita.
                </p>
                <p>
                  O Sana não é apenas um destino turístico, é um modo de vida que convida à reflexão sobre nossa relação
                  com a natureza e com as comunidades que escolhemos visitar. Aqui, cada encontro é uma oportunidade de
                  aprendizado mútuo e crescimento pessoal.
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
