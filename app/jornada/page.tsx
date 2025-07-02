"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Heart, Star, MapPin, Clock, ShoppingBasket } from "lucide-react"

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
  const [cart, setCart] = useState<number[]>([])
  const [showCart, setShowCart] = useState(false)

  const filteredExperiences =
    selectedCategory === "all" ? experiences : experiences.filter((exp) => exp.category === selectedCategory)

  const addToCart = (id: number) => {
    if (!cart.includes(id)) {
      setCart([...cart, id])
    }
  }

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item !== id))
  }

  const cartItems = experiences.filter((exp) => cart.includes(exp.id))
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price, 0)

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
                    <button className="flex-1 btn-secondary text-sm py-2">Ver Detalhes</button>
                    <button
                      onClick={() => addToCart(experience.id)}
                      disabled={cart.includes(experience.id)}
                      className={`flex-1 text-sm py-2 px-4 rounded transition-all duration-300 ${
                        cart.includes(experience.id)
                          ? "bg-verde text-terra cursor-not-allowed"
                          : "bg-terra text-areia hover:bg-folha"
                      }`}
                    >
                      {cart.includes(experience.id) ? "Adicionado" : "Adicionar"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Cart */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setShowCart(!showCart)}
            className="w-16 h-16 bg-terra text-areia rounded-full shadow-lg hover:bg-folha transition-colors duration-300 flex items-center justify-center relative"
          >
            <ShoppingBasket size={24} />
            <span className="absolute -top-2 -right-2 w-6 h-6 bg-verde rounded-full text-xs text-terra flex items-center justify-center font-bold">
              {cart.length}
            </span>
          </button>

          {showCart && (
            <div className="absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-xl border border-pedra/20 p-6">
              <h3 className="font-title text-xl font-bold text-terra mb-4">Sua Jornada</h3>

              <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-2 border-b border-pedra/10">
                    <div className="flex-1">
                      <h4 className="font-medium text-terra text-sm">{item.title}</h4>
                      <p className="text-pedra text-xs">R$ {item.price}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-pedra hover:text-terra text-sm">
                      Remover
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-t border-pedra/20 pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-terra">Total:</span>
                  <span className="font-bold text-terra text-xl">R$ {cartTotal}</span>
                </div>
                <button className="w-full btn-primary text-sm">Solicitar Orçamento Personalizado</button>
              </div>
            </div>
          )}
        </div>
      )}

      <Footer />
    </main>
  )
}
