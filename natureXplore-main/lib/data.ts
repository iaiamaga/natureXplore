export interface Experience {
  id: string
  name: string
  category: "hospedagens" | "passeios" | "trilhas" | "comercios" | "eventos"
  image: string
  shortDescription: string
  fullDescription: string
  basePrice: number
  duration: string
  location: string
  coordinates: { lat: number; lng: number }
  gallery: string[]
  provider: {
    name: string
    contact: {
      whatsapp?: string
      email?: string
      phone?: string
    }
  }
}

export const mockExperiences: Experience[] = [
  // Hospedagens
  {
    id: "hosp-1",
    name: "Pousada Vale Verde",
    category: "hospedagens",
    image: "/placeholder.svg?height=300&width=400",
    shortDescription: "Acomodação sustentável com vista para as montanhas",
    fullDescription:
      "Uma pousada ecológica situada no coração do Sana, oferecendo quartos confortáveis com vista panorâmica das montanhas. Construída com materiais locais e energia solar, proporciona uma experiência autêntica de conexão com a natureza.",
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
        whatsapp: "+5522981261825",
        email: "naturexploradores@gmail.com",
      },
    },
  },
  // Passeios
  {
    id: "pass-1",
    name: "Tour Cultural pela Vila",
    category: "passeios",
    image: "/placeholder.svg?height=300&width=400",
    shortDescription: "Conheça a história e tradições locais com guias nativos",
    fullDescription:
      "Um passeio imersivo pela vila do Sana, visitando casas históricas, ateliês de artesãos locais e pontos culturais importantes. Inclui degustação de produtos locais e conversa com moradores antigos.",
    basePrice: 85,
    duration: "3 horas",
    location: "Centro do Sana",
    coordinates: { lat: -22.3456, lng: -42.1234 },
    gallery: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    provider: {
      name: "João Santos",
      contact: {
        whatsapp: "+5522981261825",
        email: "naturexploradores@gmail.com",
      },
    },
  },
  // Trilhas
  {
    id: "trilha-1",
    name: "Trilha da Pedra Riscada",
    category: "trilhas",
    image: "/placeholder.svg?height=300&width=400",
    shortDescription: "Uma jornada através da mata atlântica até formação rochosa única",
    fullDescription:
      "Trilha de dificuldade moderada que leva até a famosa Pedra Riscada, uma formação rochosa com vista panorâmica da região. O percurso passa por cachoeiras escondidas e rica biodiversidade da Mata Atlântica.",
    basePrice: 95,
    duration: "4 horas",
    location: "Mata do Sana",
    coordinates: { lat: -22.3456, lng: -42.1234 },
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    provider: {
      name: "Guias do Sana",
      contact: {
        whatsapp: "+5522981261825",
        email: "naturexploradores@gmail.com",
      },
    },
  },
  // Comércios
  {
    id: "com-1",
    name: "Ateliê Cerâmica Sana",
    category: "comercios",
    image: "/placeholder.svg?height=300&width=400",
    shortDescription: "Peças artesanais únicas feitas por ceramistas locais",
    fullDescription:
      "Ateliê de cerâmica tradicional onde você pode adquirir peças únicas feitas à mão por artesãos locais. Também oferece oficinas para aprender as técnicas tradicionais de modelagem e queima.",
    basePrice: 45,
    duration: "Livre",
    location: "Vila do Sana",
    coordinates: { lat: -22.3456, lng: -42.1234 },
    gallery: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    provider: {
      name: "Ana Costa",
      contact: {
        whatsapp: "+5522981261825",
        email: "naturexploradores@gmail.com",
      },
    },
  },
  // Eventos
  {
    id: "event-1",
    name: "Festival da Cachaça Artesanal",
    category: "eventos",
    image: "/placeholder.svg?height=300&width=400",
    shortDescription: "Degustação de cachaças artesanais com produtores locais",
    fullDescription:
      "Evento mensal que reúne os melhores produtores de cachaça artesanal da região. Inclui degustação guiada, harmonização com petiscos locais e visita aos alambiques tradicionais.",
    basePrice: 120,
    duration: "4 horas",
    location: "Alambique Tradição",
    coordinates: { lat: -22.3456, lng: -42.1234 },
    gallery: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    provider: {
      name: "Alambique Tradição",
      contact: {
        whatsapp: "+5522981261825",
        email: "naturexploradores@gmail.com",
      },
    },
  },
]

export const categories = [
  {
    id: "hospedagens",
    name: "Hospedagens Locais",
    description: "Acomodações autênticas e sustentáveis",
    icon: "🏠",
  },
  {
    id: "passeios",
    name: "Passeios",
    description: "Experiências culturais e naturais guiadas",
    icon: "🚶",
  },
  {
    id: "trilhas",
    name: "Trilhas",
    description: "Aventuras pela Mata Atlântica",
    icon: "🥾",
  },
  {
    id: "comercios",
    name: "Comércios Locais",
    description: "Artesanato e produtos da região",
    icon: "🛍️",
  },
  {
    id: "eventos",
    name: "Eventos",
    description: "Festivais e celebrações locais",
    icon: "🎉",
  },
]
