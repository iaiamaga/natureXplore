import Link from "next/link"
import GlassCard from "./glass-card"

export default function ExperienceCreationSection() {
  return (
    <section className="py-20 section-padding bg-gradient-to-br from-verde/10 to-folha/20">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1 - Texto explicativo */}
          <GlassCard className="p-8">
            <h3 className="font-title text-2xl md:text-3xl font-bold text-terra mb-6">Sua Jornada, Sua Essência</h3>

            <div className="space-y-4 text-pedra leading-relaxed">
              <p>
                No NatureXplore, acreditamos que cada viajante é único, assim como deve ser sua experiência. Nossa
                ferramenta de montagem personalizada permite que você combine trilhas, hospedagens, experiências
                culturais e gastronômicas de acordo com seus interesses e ritmo.
              </p>

              <p>
                Seja você um aventureiro em busca de trilhas desafiadoras, uma família procurando momentos de conexão,
                ou um viajante contemplativo em busca de paz e introspecção, criamos a jornada perfeita para você. Cada
                elemento é cuidadosamente selecionado para garantir autenticidade e impacto positivo na comunidade
                local.
              </p>
            </div>
          </GlassCard>

          {/* Card 2 - Chamada para ação */}
          <GlassCard className="p-8 flex flex-col justify-center items-center text-center">
            <h3 className="font-title text-3xl md:text-4xl font-bold text-terra mb-8 leading-tight">
              "Cada jornada conta uma história única. Qual será a sua?"
            </h3>

            <Link
              href="/montagem"
              className="bg-terra text-areia px-8 py-4 rounded-lg font-medium text-lg hover:bg-folha hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Monte sua experiência personalizada
            </Link>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
