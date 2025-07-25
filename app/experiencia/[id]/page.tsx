import ExperiencePageClient from "./ExperiencePageClient"

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
  "7": {
    id: "7",
    name: "Cachoeira da Laje",
    category: "passeios",
    image: "/placeholder.svg?height=300&width=400",
    shortDescription: "Passeio de 4x4 para uma cachoeira longínqua",
    fullDescription:
      "Um passeio aventureiro de dia inteiro até a deslumbrante Cachoeira da Laje. O trajeto de 4x4 pela mata oferece vistas espetaculares e a oportunidade de observar a fauna local. A cachoeira, com suas águas cristalinas e piscina natural, é perfeita para um banho revigorante. Inclui almoço típico da região e guia especializado.",
    basePrice: 220,
    duration: "1 dia",
    location: "Reserva Sana",
    coordinates: { lat: -22.3456, lng: -42.1234 },
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    provider: {
      name: "Aventuras Sana",
      contact: {
        whatsapp: "+5522981261825",
        email: "naturexploradores@gmail.com",
      },
    },
  },
}

// Função necessária para exportação estática
export async function generateStaticParams() {
  // Retorna todos os IDs das experiências disponíveis
  return Object.keys(experienceDetails).map((id) => ({
    id: id,
  }))
}

interface ExperiencePageProps {
  params: {
    id: string
  }
}

export default function ExperiencePage({ params }: ExperiencePageProps) {
  return <ExperiencePageClient params={params} />
}
