import Link from "next/link"
import GlassCard from "./glass-card"

export default function ExperienceCreationSection() {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding bg-[#040C04] relative py-[40vh]">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8 text-lg text-areia/90 leading-relaxed mb-12">
            <p>
              No NatureXplore, acreditamos que cada viajante é único, assim como deve ser sua experiência. Nossa
              ferramenta de montagem personalizada permite que você combine trilhas, hospedagens, experiências culturais
              e gastronômicas de acordo com seus interesses e ritmo.
            </p>

            <p>
              Seja você um aventureiro em busca de trilhas desafiadoras, uma família procurando momentos de conexão, ou
              um viajante contemplativo em busca de paz e introspecção, criamos a jornada perfeita para você. Cada
              elemento é cuidadosamente selecionado para garantir autenticidade e impacto positivo na comunidade local.
            </p>
          </div>

          {/* Card 2 - Chamada para ação */}
          <GlassCard className="p-8 flex flex-col justify-center items-center text-center bg-white/10 backdrop-blur-md border border-areia/20 max-w-2xl mx-auto">
            <h3 className="font-title text-3xl md:text-4xl font-bold text-areia mb-8 leading-tight">
              "Cada jornada conta uma história única. Qual será a sua?"
            </h3>

            <Link
              href="/jornada"
              className="bg-areia text-[#040C04] px-8 py-4 rounded-lg font-medium text-lg hover:bg-verde hover:text-terra hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Monte sua experiência personalizada
            </Link>
          </GlassCard>
        </div>
      </div>

      {/* Smooth transition gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#B6F442] to-transparent" />
    </section>
  )
}
