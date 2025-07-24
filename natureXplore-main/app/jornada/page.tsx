"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock } from "lucide-react"
import { useMochilaStore } from "@/lib/store"

const categories = [
  { id: "trilhas", label: "Trilhas" },
  { id: "passeios", label: "Passeios" },
  { id: "hospedagem", label: "Hospedagem" },
  { id: "eventos locais", label: "Eventos Locais" },
]

const experiences = [
  {
    id: 1,
    title: "Trilha da Pedra Riscada",
    category: "trilhas",
    image: "/placeholder.svg?height=300&width=400",
    price: 85,
    duration: "4h",
    difficulty: "Moderada",
    description: "Uma jornada através da mata atlântica até uma formação rochosa única",
    highlights: ["Vista panorâmica", "Cachoeira escondida", "Guia local especializado"],
    location: "Sana Centro",
  },
  {
    id: 2,
    title: "Pousada Vale Verde",
    category: "hospedagem",
    image: "/placeholder.svg?height=300&width=400",
    price: 180,
    duration: "1 noite",
    difficulty: "Confortável",
    description: "Acomodação sustentável com vista para as montanhas",
    highlights: ["Café da manhã orgânico", "Energia solar", "Horta própria"],
    location: "Sana Alto",
  },
  {
    id: 3,
    title: "Oficina de Cerâmica",
    category: "eventos locais",
    image: "/placeholder.svg?height=300&width=400",
    price: 120,
    duration: "3h",
    difficulty: "Iniciante",
    description: "Aprenda técnicas tradicionais com artesãos locais",
    highlights: ["Material incluído", "Peça para levar", "História da cerâmica local"],
    location: "Ateliê Sana",
  },
  {
    id: 4,
    title: "Degustação de Cachaças Artesanais",
    category: "eventos locais",
    image: "/placeholder.svg?height=300&width=400",
    price: 95,
    duration: "2h",
    difficulty: "Adultos",
    description: "Conheça o processo artesanal e sabores únicos da região",
    highlights: ["5 cachaças diferentes", "Harmonização", "Visita ao alambique"],
    location: "Alambique Tradição",
  },
  {
    id: 5,
    title: "Trilha Noturna dos Vaga-lumes",
    category: "trilhas",
    image: "/placeholder.svg?height=300&width=400",
    price: 110,
    duration: "3h",
    difficulty: "Fácil",
    description: "Experiência mágica observando vaga-lumes em seu habitat natural",
    highlights: ["Fenômeno natural raro", "Guia especializado", "Lanche noturno"],
    location: "Mata do Sana",
  },
  {
    id: 6,
    title: "Casa da Árvore Sustentável",
    category: "hospedagem",
    image: "/placeholder.svg?height=300&width=400",
    price: 220,
    duration: "1 noite",
    difficulty: "Aventura",
    description: "Durma entre as copas das árvores em estrutura ecológica",
    highlights: ["Vista única", "Construção sustentável", "Experiência imersiva"],
    location: "Reserva Sana",
  },
  {
    id: 7,
    title: "Cachoeira da Laje",
    category: "passeios",
    image: "/placeholder.svg?height=300&width=400",
    price: 220,
    duration: "1 dia",
    difficulty: "Aventura",
    description: "Passeio de 4x4 para uma cachoeira longínqua",
    highlights: ["Vista única", "Cachoeira", "Experiência imersiva"],
    location: "Reserva Sana",
  },
]

export default function JornadaPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const { addItem, items } = useMochilaStore()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filteredExperiences =
    selectedCategory === "all" ? experiences : experiences.filter((exp) => exp.category === selectedCategory)

  const addToMochila = (experience: any) => {
    const experienceData = {
      id: experience.id.toString(),
      name: experience.title,
      category: experience.category as any,
      image: experience.image,
      shortDescription: experience.description,
      fullDescription: experience.description,
      basePrice: experience.price,
      duration: experience.duration,
      location: experience.location,
      coordinates: { lat: -22.3456, lng: -42.1234 },
      gallery: [experience.image, experience.image, experience.image],
      provider: {
        name: "Fornecedor Local",
        contact: {
          whatsapp: "+5522981261825",
          email: "naturexploradores@gmail.com",
        },
      },
    }

    if (!items.find((item) => item.id === experienceData.id)) {
      addItem(experienceData)
    }
  }

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
            Monte sua
            <br />
            <span className="text-[#B6F442]">Jornada</span>
          </h1>
          <p className="text-xl md:text-2xl text-areia/90 mb-12 max-w-3xl mx-auto leading-relaxed text-shadow">
            Crie uma experiência única combinando trilhas, hospedagem, cultura e sabores do Sana. Cada escolha contribui
            diretamente com a comunidade local.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#2E450F] to-transparent z-5" />
      </section>

      {/* Filters Section */}
      <section className="min-h-[140vh] flex items-center justify-center section-padding bg-[#2E450F] relative py-[40vh]">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-title text-4xl md:text-5xl font-bold text-areia mb-8">Escolha suas Experiências</h2>
            <p className="text-xl text-areia/90 max-w-3xl mx-auto leading-relaxed mb-12">
              Filtre por categoria e descubra as experiências que mais combinam com seu estilo de viagem
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mb-16">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 ${
                  selectedCategory === "all"
                    ? "bg-[#B6F442] text-terra shadow-lg transform -translate-y-1"
                    : "bg-white/20 text-areia border border-areia/30 hover:border-[#B6F442] hover:text-[#B6F442] backdrop-blur-md"
                }`}
              >
                Todas as Experiências
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-[#B6F442] text-terra shadow-lg transform -translate-y-1"
                      : "bg-white/20 text-areia border border-areia/30 hover:border-[#B6F442] hover:text-[#B6F442] backdrop-blur-md"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F220B] to-transparent" />
      </section>

      {/* Experiences Grid Section */}
      <section className="min-h-screen flex items-center justify-center section-padding bg-[#0F220B] relative py-[40vh]">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredExperiences.map((experience) => (
              <div
                key={experience.id}
                className="bg-white/10 backdrop-blur-md border border-areia/20 rounded-2xl overflow-hidden hover:bg-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative">
                  <Image
                    src={experience.image || "/placeholder.svg"}
                    alt={experience.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#B6F442]/90 text-terra px-3 py-1 rounded-full text-sm font-medium">
                      {experience.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-title text-xl font-bold text-areia">{experience.title}</h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#B6F442]">R$ {experience.price}</div>
                      <div className="text-sm text-areia/70">por pessoa</div>
                    </div>
                  </div>

                  <p className="text-areia/90 mb-4 line-clamp-2">{experience.description}</p>

                  <div className="flex items-center space-x-4 mb-4 text-sm text-areia/70">
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-areia/70 bg-[#B6F442]/20 px-3 py-1 rounded-full">
                      {experience.difficulty}
                    </span>
                  </div>

                  <div className="flex space-x-3">
                    <Link
                      href={`/experiencia/${experience.id}`}
                      className="flex-1 bg-white/20 text-areia text-center py-3 px-4 rounded-lg font-medium hover:bg-white/30 transition-all duration-300"
                    >
                      Ver Detalhes
                    </Link>
                    <button
                      onClick={() => addToMochila(experience)}
                      disabled={items.some((item) => item.id === experience.id.toString())}
                      className={`flex-1 text-sm py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                        items.some((item) => item.id === experience.id.toString())
                          ? "bg-[#B6F442] text-terra cursor-not-allowed"
                          : "bg-terra text-areia hover:bg-[#B6F442] hover:text-terra"
                      }`}
                    >
                      {items.some((item) => item.id === experience.id.toString()) ? "Adicionado" : "Adicionar"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredExperiences.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="font-title text-2xl font-bold text-areia mb-4">Nenhuma experiência encontrada</h3>
              <p className="text-areia/70">Tente selecionar uma categoria diferente</p>
            </div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#040C04] to-transparent" />
      </section>

      {/* Call to Action Section */}
      <section className="min-h-screen flex items-center justify-center section-padding bg-[#040C04] relative py-[40vh]">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-8 md:p-12 bg-white/10 backdrop-blur-md border border-areia/20 rounded-2xl">
              <h2 className="font-title text-4xl md:text-5xl font-bold text-areia mb-8">Pronto para sua Aventura?</h2>

              <div className="space-y-6 text-lg text-areia/90 leading-relaxed mb-8">
                <p>
                  Cada experiência selecionada é uma oportunidade de conexão autêntica com o Sana. Nossa equipe trabalha
                  diretamente com a comunidade local para garantir que sua jornada seja transformadora tanto para você
                  quanto para o destino.
                </p>
                <p>
                  Adicione suas experiências favoritas à mochila e crie uma jornada personalizada que respeita a
                  natureza e fortalece a economia local.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/mochila"
                  className="bg-[#B6F442] text-terra px-8 py-4 rounded-lg font-medium text-lg hover:bg-areia hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Ver Minha Mochila ({items.length})
                </Link>
                <Link
                  href="/sobre"
                  className="bg-white/20 text-areia px-8 py-4 rounded-lg font-medium text-lg hover:bg-white/30 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Conheça Nossa História
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#B6F442] to-transparent" />
      </section>

      {/* Final Section */}
      <section className="min-h-screen flex items-center justify-center section-padding bg-[#B6F442] relative py-[40vh]">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-title text-4xl md:text-5xl font-bold text-terra mb-8">"Explorar é Pertencer"</h2>

            <div className="space-y-6 text-lg text-terra/90 leading-relaxed mb-8">
              <p>
                No NatureXplore, acreditamos que cada viagem é uma oportunidade de crescimento pessoal e contribuição
                social. Quando você escolhe nossas experiências, está investindo em um futuro mais sustentável para o
                Sana e suas comunidades.
              </p>
              <p>
                Junte-se a nós nesta jornada de descoberta, respeito e transformação. O Sana está esperando por você.
              </p>
            </div>

            <Link
              href="/"
              className="inline-block bg-terra text-areia px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#344E27] hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Voltar ao Início
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#344E27] to-transparent" />
      </section>

      <Footer />
    </main>
  )
}
