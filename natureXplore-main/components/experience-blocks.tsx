import Image from "next/image"
import Link from "next/link"
import { Mountain, Home, Users, Utensils } from "lucide-react"

const experiences = [
  {
    id: "trilhas",
    title: "Trilhas",
    description: "Caminhos que conectam você à essência da Mata Atlântica",
    icon: Mountain,
    image: "/placeholder.svg?height=400&width=600",
    href: "/jornada#trilhas",
  },
  {
    id: "hospedagem",
    title: "Hospedagem",
    description: "Acolhimento autêntico em meio à natureza preservada",
    icon: Home,
    image: "/placeholder.svg?height=400&width=600",
    href: "/jornada#hospedagem",
  },
  {
    id: "cultura",
    title: "Cultura",
    description: "Vivências que celebram a tradição e sabedoria local",
    icon: Users,
    image: "/placeholder.svg?height=400&width=600",
    href: "/jornada#cultura",
  },
  {
    id: "sabores",
    title: "Sabores",
    description: "Gastronomia que conta a história do território",
    icon: Utensils,
    image: "/placeholder.svg?height=400&width=600",
    href: "/jornada#gastronomia",
  },
]

export default function ExperienceBlocks() {
  return (
    <section className="py-20 section-padding">
      <div className="container-max">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-title text-4xl md:text-5xl font-bold text-terra mb-6">Descubra o Sana</h2>
          <p className="text-xl text-pedra max-w-3xl mx-auto leading-relaxed">
            Cada experiência é cuidadosamente curada para conectar você à autenticidade e beleza natural desta região
            única da Mata Atlântica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {experiences.map((experience, index) => (
            <Link
              key={experience.id}
              href={experience.href}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-80 lg:h-96">
                <Image
                  src={experience.image || "/placeholder.svg"}
                  alt={experience.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-terra/80 via-terra/20 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-verde/90 rounded-full flex items-center justify-center group-hover:bg-verde transition-colors duration-300">
                      <experience.icon size={24} className="text-terra" />
                    </div>
                    <h3 className="font-title text-3xl font-bold text-areia">{experience.title}</h3>
                  </div>
                  <p className="text-areia/90 text-lg leading-relaxed">{experience.description}</p>

                  {/* Hover indicator */}
                  <div className="mt-4 flex items-center text-verde group-hover:text-areia transition-colors duration-300">
                    <span className="font-medium">Explorar</span>
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
