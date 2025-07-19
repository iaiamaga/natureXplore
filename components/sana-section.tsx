import Link from "next/link"
import GlassCard from "./glass-card"

export default function SanaSection() {
  return (
    <section className="py-20 section-padding bg-gradient-to-br from-folha/20 to-verde/10">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-8 md:p-12">
            <div className="text-center">
              <h2 className="font-title text-3xl md:text-4xl font-bold text-terra mb-8">Conhecendo o Sana</h2>

              <p className="text-lg text-pedra leading-relaxed mb-8">
                Descubra a história fascinante deste distrito único de Macaé, onde a Mata Atlântica preservada encontra
                uma comunidade vibrante e acolhedora. O Sana é um refúgio natural que mantém vivas suas tradições
                centenárias, oferecendo aos visitantes uma experiência autêntica de conexão com a natureza e a cultura
                local. Conheça suas trilhas históricas, cachoeiras cristalinas, arquitetura colonial e os saberes
                ancestrais que fazem deste lugar um verdadeiro tesouro da região serrana fluminense.
              </p>

              <Link
                href="/sana"
                className="inline-block bg-terra text-areia px-8 py-4 rounded-lg font-medium text-lg hover:bg-folha hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Venha saber sobre o Sana
              </Link>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
