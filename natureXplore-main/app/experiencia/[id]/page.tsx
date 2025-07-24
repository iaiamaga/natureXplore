"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useMochilaStore } from "@/lib/store"
import { MapPin, Clock, User, Mail, MessageCircle } from "lucide-react"

// Mock data expandido para as experiências individuais
const experienceDetails: { [key: string]: any } = {
  "1": {
    id: "1",
    name: "Trilha da Pedra Riscada",
    category: "trilhas",
    image: "/placeholder.svg?height=300&width=400",
    shortDescription: "Uma jornada através da mata atlântica até uma formação rochosa única",
    fullDescription:
      "A Trilha da Pedra Riscada é uma das experiências mais marcantes do Sana. Com dificuldade moderada, o percurso de 4 horas leva você através da exuberante Mata Atlântica até uma formação rochosa única que oferece vista panorâmica de toda a região. Durante o caminho, você descobrirá cachoeiras escondidas, aprenderá sobre a flora e fauna local com nossos guias especializados, e viverá momentos de conexão profunda com a natureza. A trilha é adequada para pessoas com condicionamento físico regular e oferece paradas estratégicas para descanso e contemplação.",
    basePrice: 85,
    duration: "4 horas",
    location: "Sana Centro",
    coordinates: { lat: -22.3456, lng: -42.1234 },
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    provider: {
      name: "Guias do Sana",
      contact: {
        whatsapp: "+5522777777777",
        email: "trilhas@guiasdosana.com",
      },
    },
  },
  "2": {
    id: "2",
    name: "Pousada Vale Verde",
    category: "hospedagem",
    image: "/placeholder.svg?height=300&width=400",
    shortDescription: "Acomodação sustentável com vista para as montanhas",
    fullDescription:
      "A Pousada Vale Verde oferece uma experiência de hospedagem única no Sana, combinando conforto e sustentabilidade. Localizada no Sana Alto, proporciona vistas deslumbrantes das montanhas e um ambiente de paz total. Todos os quartos são equipados com energia solar, a pousada possui horta própria que abastece o café da manhã orgânico, e a construção utiliza materiais locais e técnicas sustentáveis. Os hóspedes podem participar de atividades como colheita na horta, observação de aves e meditação ao nascer do sol.",
    basePrice: 180,
    duration: "1 noite",
    location: "Sana Alto",
    coordinates: { lat: -22.3456, lng: -42.1234 },
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    provider: {
      name: "Maria Silva",
      contact: {
        whatsapp: "+5522999999999",
        email: "contato@pousadavaleverde.com",
      },
    },
  },
  "3": {
    id: "3",
    name: "Oficina de Cerâmica",
    category: "cultura",
    image: "/placeholder.svg?height=300&width=400",
    shortDescription: "Aprenda técnicas tradicionais com artesãos locais",
    fullDescription:
      "Nossa oficina de cerâmica é uma imersão na tradição artesanal do Sana. Durante 3 horas, você aprenderá técnicas milenares de modelagem e decoração com mestres ceramistas locais. A experiência inclui todo o material necessário, e você levará para casa uma peça única criada por suas próprias mãos. Além da prática, você conhecerá a história da cerâmica na região, os tipos de argila local e os métodos tradicionais de queima. É uma oportunidade única de conectar-se com a cultura local através da arte.",
    basePrice: 120,
    duration: "3 horas",
    location: "Ateliê Sana",
    coordinates: { lat: -22.3456, lng: -42.1234 },
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    provider: {
      name: "Ana Costa",
      contact: {
        whatsapp: "+5522666666666",
        email: "ana@ceramicasana.com",
      },
    },
  },
  "4": {
    id: "4",
    name: "Degustação de Cachaças Artesanais",
    category: "gastronomia",
    image: "/placeholder.svg?height=300&width=400",
    shortDescription: "Conheça o processo artesanal e sabores únicos da região",
    fullDescription:
      "Uma experiência sensorial completa no mundo da cachaça artesanal do Sana. Durante 2 horas, você degustará 5 diferentes cachaças produzidas localmente, cada uma com características únicas que refletem o terroir da região. A experiência inclui visita ao alambique tradicional, explicação detalhada do processo de produção, harmonização com petiscos locais e conversa com o mestre alambiqueiro. Você aprenderá sobre a história da cachaça no Brasil, técnicas de degustação e os segredos que tornam cada cachaça especial.",
    basePrice: 95,
    duration: "2 horas",
    location: "Alambique Tradição",
    coordinates: { lat: -22.3456, lng: -42.1234 },
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    provider: {
      name: "Alambique Tradição",
      contact: {
        whatsapp: "+5522555555555",
        email: "eventos@alambiquetradição.com",
      },
    },
  },
  "5": {
    id: "5",
    name: "Trilha Noturna dos Vaga-lumes",
    category: "trilhas",
    image: "/placeholder.svg?height=300&width=400",
    shortDescription: "Experiência mágica observando vaga-lumes em seu habitat natural",
    fullDescription:
      "Uma das experiências mais mágicas que o Sana pode oferecer. Esta trilha noturna de 3 horas leva você a um dos poucos locais do mundo onde ainda é possível observar vaga-lumes em grande quantidade. Com dificuldade fácil, a trilha é adequada para toda a família. Nossos guias especializados em fauna noturna explicarão sobre o ciclo de vida destes insetos fascinantes e a importância da preservação de seu habitat. A experiência inclui lanche noturno e equipamentos de segurança. É um momento de conexão profunda com a natureza e contemplação de um dos fenômenos mais belos do reino animal.",
    basePrice: 110,
    duration: "3 horas",
    location: "Mata do Sana",
    coordinates: { lat: -22.3456, lng: -42.1234 },
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    provider: {
      name: "Guias Noturnos Sana",
      contact: {
        whatsapp: "+5522444444444",
        email: "noturno@guiasdosana.com",
      },
    },
  },
  "6": {
    id: "6",
    name: "Casa da Árvore Sustentável",
    category: "hospedagem",
    image: "/placeholder.svg?height=300&width=400",
    shortDescription: "Durma entre as copas das árvores em estrutura ecológica",
    fullDescription:
      "Uma experiência de hospedagem verdadeiramente única na Reserva Sana. Nossa casa da árvore sustentável foi construída a 8 metros de altura, utilizando apenas materiais locais e técnicas de baixo impacto ambiental. O quarto oferece vista 360° da floresta e é equipado com cama confortável, mosquiteiro e sistema de energia solar. Durante a noite, você ouvirá os sons da floresta e poderá observar a vida noturna da Mata Atlântica. A experiência inclui café da manhã servido na própria árvore e atividades de observação da fauna. É perfeita para quem busca uma conexão profunda com a natureza e uma aventura inesquecível.",
    basePrice: 220,
    duration: "1 noite",
    location: "Reserva Sana",
    coordinates: { lat: -22.3456, lng: -42.1234 },
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    provider: {
      name: "Reserva Ecológica Sana",
      contact: {
        whatsapp: "+5522333333333",
        email: "reserva@ecologicasana.com",
      },
    },
  },
}

interface ExperiencePageProps {
  params: {
    id: string
  }
}

export default function ExperiencePage({ params }: ExperiencePageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const experience = experienceDetails[params.id]
  const { addItem, items } = useMochilaStore()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!experience) {
    return (
      <main className="min-h-screen">
        <Header />
        <section className="pt-32 pb-16 section-padding">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-title text-5xl font-bold text-terra mb-6">Experiência não encontrada</h1>
              <Link href="/jornada" className="btn-primary">
                Voltar às experiências
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  const isInMochila = items.some((item) => item.id === experience.id)

  const handleAddToMochila = () => {
    if (!isInMochila) {
      addItem(experience)
    }
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-8 section-padding">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/jornada"
              className="inline-flex items-center text-folha hover:text-terra transition-colors duration-300 mb-6"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar às experiências
            </Link>

            <h1 className="font-title text-4xl md:text-5xl font-bold text-terra mb-4">{experience.name}</h1>

            <div className="flex flex-wrap items-center gap-6 text-pedra mb-8">
              <div className="flex items-center">
                <MapPin size={20} className="mr-2" />
                <span>{experience.location}</span>
              </div>
              <div className="flex items-center">
                <Clock size={20} className="mr-2" />
                <span>{experience.duration}</span>
              </div>
              <div className="flex items-center">
                <User size={20} className="mr-2" />
                <span>{experience.provider.name}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-8 section-padding">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2">
                <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                  <Image
                    src={experience.gallery[currentImageIndex] || "/placeholder.svg"}
                    alt={experience.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4">
                {experience.gallery.slice(1).map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index + 1)}
                    className="relative w-full h-32 rounded-lg overflow-hidden hover:opacity-80 transition-opacity duration-300"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${experience.name} - ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 section-padding">
        <div className="container-max">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-title text-3xl font-bold text-terra mb-4">Sobre a Experiência</h2>
                <p className="text-pedra leading-relaxed text-lg">{experience.fullDescription}</p>
              </div>

              {/* Map Placeholder */}
              <div>
                <h3 className="font-title text-2xl font-bold text-terra mb-4">Localização</h3>
                <div className="bg-folha/10 rounded-2xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} className="text-folha mx-auto mb-2" />
                    <p className="text-pedra">Mapa interativo em desenvolvimento</p>
                    <p className="text-sm text-pedra">{experience.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Price Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-terra mb-2">R$ {experience.basePrice}</div>
                  <div className="text-pedra">por pessoa</div>
                </div>

                <button
                  onClick={handleAddToMochila}
                  disabled={isInMochila}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 mb-4 ${
                    isInMochila
                      ? "bg-verde text-terra cursor-not-allowed"
                      : "bg-terra text-areia hover:bg-folha hover:shadow-lg transform hover:-translate-y-1"
                  }`}
                >
                  {isInMochila ? "Já está na Mochila" : "Adicionar à Mochila"}
                </button>

                <Link
                  href="/mochila"
                  className="block w-full py-3 px-6 border-2 border-terra text-terra text-center rounded-lg font-medium hover:bg-terra hover:text-areia transition-all duration-300"
                >
                  Ver Mochila ({items.length})
                </Link>
              </div>

              {/* Provider Contact */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-title text-xl font-bold text-terra mb-4">Contato do Fornecedor</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <User size={20} className="text-folha mr-3" />
                    <span className="text-pedra">{experience.provider.name}</span>
                  </div>

                  {experience.provider.contact.whatsapp && (
                    <a
                      href={`https://wa.me/5522981261825`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-folha hover:text-terra transition-colors duration-300"
                    >
                      <MessageCircle size={20} className="mr-3" />
                      <span>WhatsApp</span>
                    </a>
                  )}

                  {experience.provider.contact.email && (
                    <a
                      href={`mailto:naturexploradores@gmail.com`}
                      className="flex items-center text-folha hover:text-terra transition-colors duration-300"
                    >
                      <Mail size={20} className="mr-3" />
                      <span>E-mail</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
