import Link from "next/link"

export default function DiarySection() {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding bg-[#B6F442] relative py-[40vh]">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 bg-white/20 backdrop-blur-md border border-terra/30 rounded-2xl">
            <div className="text-center">
              <h2 className="font-title text-3xl md:text-4xl font-bold text-terra mb-8">Diário do Explorador</h2>

              <div className="space-y-6 text-lg text-terra/90 leading-relaxed mb-8">
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
                className="inline-block bg-terra text-areia px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#B6F442] hover:text-terra hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Dê uma olhada nas memórias do diário!
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth transition gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#344E27] to-transparent" />
    </section>
  )
}
