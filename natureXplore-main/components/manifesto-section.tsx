import { Heart, Leaf, Users } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Ética",
    description: "Cada experiência é construída com respeito profundo pela natureza e comunidade local",
  },
  {
    icon: Leaf,
    title: "Escuta",
    description: "Ouvimos a terra, as pessoas e as histórias que fazem do Sana um lugar único",
  },
  {
    icon: Users,
    title: "Solidariedade",
    description: "Fortalecemos laços entre visitantes e moradores, criando impacto positivo duradouro",
  },
]

export default function ManifestoSection() {
  return (
    <section className="py-20 bg-folha/10 section-padding">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-title text-4xl md:text-5xl font-bold text-terra mb-8">Nosso Manifesto</h2>
          <div className="prose prose-lg max-w-none text-pedra leading-relaxed">
            <p className="text-xl mb-6">
              Acreditamos que viajar é mais do que conhecer lugares — é sobre
              <strong className="text-terra"> pertencer temporariamente</strong> a um território, respeitando sua
              essência e contribuindo para sua preservação.
            </p>
            <p className="text-lg">
              No Sana, cada trilha conta uma história, cada refeição carrega tradição, cada encontro constrói pontes.
              Somos facilitadores de conexões autênticas entre pessoas, natureza e cultura, sempre guiados pelos
              princípios que nos definem.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-20 h-20 bg-terra rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-folha transition-colors duration-300 transform group-hover:scale-110">
                <value.icon size={32} className="text-areia" />
              </div>
              <h3 className="font-title text-2xl font-bold text-terra mb-4">{value.title}</h3>
              <p className="text-pedra leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://www.instagram.com/naturexplore_sana?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Veja a vista pelos olhares do naturexplore e dos naturexploradores no nosso perfil do instagram!
          </a>
        </div>
      </div>
    </section>
  )
}
