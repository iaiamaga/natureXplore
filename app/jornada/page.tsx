"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Heart, Star, MapPin, Clock } from "lucide-react"
import { useMochilaStore } from "@/lib/store"

const categories = [
  { id: "all", label: "Todas", count: 24 },
  { id: "trilhas", label: "Trilhas", count: 8 },
  { id: "hospedagem", label: "Hospedagem", count: 6 },
  { id: "gastronomia", label: "Gastronomia", count: 5 },
  { id: "cultura", label: "Cultura", count: 5 },
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
    rating: 4.9,
    reviews: 23,
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
    rating: 4.8,
    reviews: 15,
    description: "Acomodação sustentável com vista para as montanhas",
    highlights: ["Café da manhã orgânico", "Energia solar", "Horta própria"],
    location: "Sana Alto",
  },
  {
    id: 3,
    title: "Oficina de Cerâmica",
    category: "cultura",
    image: "/placeholder.svg?height=300&width=400",
    price: 120,
    duration: "3h",
    difficulty: "Iniciante",
    rating: 4.7,
    reviews: 18,
    description: "Aprenda técnicas tradicionais com artesãos locais",
    highlights: ["Material incluído", "Peça para levar", "História da cerâmica local"],
    location: "Ateliê Sana",
  },
  {
    id: 4,
    title: "Degustação de Cachaças Artesanais",
    category: "gastronomia",
    image: "/placeholder.svg?height=300&width=400",
    price: 95,
    duration: "2h",
    difficulty: "Adultos",
    rating: 4.9,
    reviews: 31,
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
    rating: 5.0,
    reviews: 12,
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
    rating: 4.8,
    reviews: 9,
    description: "Durma entre as copas das árvores em estrutura ecológica",
    highlights: ["Vista única", "Construção sustentável", "Experiência imersiva"],
    location: "Reserva Sana",
  },
]

export default function JornadaPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const { addItem, items } = useMochilaStore()

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
          whatsapp: "+5522999999999",
          email: "contato@exemplo.com",
        },
      },
    }

    if (!items.find((item) => item.id === experienceData.id)) {
      addItem(experienceData)
    }
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 section-padding bg-gradient-to-br from-folha/10 to-verde/5">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-title text-5xl md:text-6xl font-bold text-terra mb-6">Monte sua Jornada</h1>
            <p className="text-xl text-pedra leading-relaxed mb-8">
              Crie uma experiência única combinando trilhas, hospedagem, cultura e sabores do Sana. Cada escolha
              contribui diretamente com a comunidade local.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 section-padding border-b border-pedra/20">
        <div className="container-max">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-terra text-areia shadow-lg"
                    : "bg-white text-pedra border border-pedra/30 hover:border-folha hover:text-folha"
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-12 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredExperiences.map((experience) => (
              <div
                key={experience.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <Image
                    src={experience.image || "/placeholder.svg"}
                    alt={experience.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300">
                      <Heart size={20} className="text-pedra hover:text-terra" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-verde/90 text-terra px-3 py-1 rounded-full text-sm font-medium">
                      {experience.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-title text-xl font-bold text-terra">{experience.title}</h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-terra">R$ {experience.price}</div>
                      <div className="text-sm text-pedra">por pessoa</div>
                    </div>
                  </div>

                  <p className="text-pedra mb-4 line-clamp-2">{experience.description}</p>

                  <div className="flex items-center space-x-4 mb-4 text-sm text-pedra">
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
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Star size={16} className="text-yellow-500 fill-current" />
                        <span className="font-medium">{experience.rating}</span>
                      </div>
                      <span className="text-pedra text-sm">({experience.reviews} avaliações)</span>
                    </div>
                    <span className="text-sm text-pedra bg-folha/20 px-2 py-1 rounded">{experience.difficulty}</span>
                  </div>

                  <div className="flex space-x-3">
                    <Link
                      href={`/experiencia/${experience.id}`}
                      className="flex-1 btn-secondary text-sm py-2 text-center"
                    >
                      Ver Detalhes
                    </Link>
                    <button
                      onClick={() => addToMochila(experience)}
                      disabled={items.some((item) => item.id === experience.id.toString())}
                      className={`flex-1 text-sm py-2 px-4 rounded transition-all duration-300 ${
                        items.some((item) => item.id === experience.id.toString())
                          ? "bg-verde text-terra cursor-not-allowed"
                          : "bg-terra text-areia hover:bg-folha"
                      }`}
                    >
                      {items.some((item) => item.id === experience.id.toString()) ? "Adicionado" : "Adicionar"}
                    </button>
                  </div>
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
