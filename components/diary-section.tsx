import Link from "next/link"
import GlassCard from "./glass-card"

export default function DiarySection() {
  return (
    <section className="py-20 section-padding bg-gradient-to-br from-terra/10 to-pedra/10">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-8 md:p-12">
            <div className="text-center">
              <h2 className="font-title text-3xl md:text-4xl font-bold text-terra mb-8">Diário do Explorador</h2>

              <div className="space-y-6 text-lg text-pedra leading-relaxed mb-8">
                <p>
                  As melhores histórias nascem das experiências vividas. No Diário do Explorador, compartilhamos relatos
                  autênticos de viajantes que se conectaram profundamente com o Sana. São memórias, descobertas,
                  encontros inesperados e momentos de pura magia que acontecem quando nos abrimos para o novo.
                </p>

                <p>
                  Cada entrada do diário é uma janela para as possibilidades que aguardam você. Desde trilhas ao nascer
                  do sol até conversas noturnas com moradores locais, passando por sabores únicos e paisagens que ficam
                  gravadas na alma. Inspire-se com essas histórias e imagine-se protagonizando a próxima.
                </p>
              </div>

              <Link
                href="/diario"
                className="inline-block bg-terra text-areia px-8 py-4 rounded-lg font-medium text-lg hover:bg-folha hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Dê uma olhada nas memórias do diário!
              </Link>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
