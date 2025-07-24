import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function SucessoPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-8xl mb-8">🎉</div>
            <h1 className="font-title text-5xl md:text-6xl font-bold text-terra mb-6">Jornada Enviada com Sucesso!</h1>
            <p className="text-xl text-pedra mb-8 leading-relaxed">
              Recebemos sua solicitação de jornada personalizada no Sana. Nossa equipe entrará em contato em breve para
              finalizar os detalhes e tornar sua experiência ainda mais especial.
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 max-w-2xl mx-auto">
              <h2 className="font-title text-2xl font-bold text-terra mb-4">Próximos Passos</h2>
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-verde rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-terra text-sm font-bold">1</span>
                  </div>
                  <p className="text-pedra">Nossa equipe analisará sua jornada personalizada</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-verde rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-terra text-sm font-bold">2</span>
                  </div>
                  <p className="text-pedra">Entraremos em contato para ajustar detalhes e confirmar disponibilidade</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-verde rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-terra text-sm font-bold">3</span>
                  </div>
                  <p className="text-pedra">Você receberá um orçamento detalhado e cronograma da jornada</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn-primary text-lg">
                Voltar ao Início
              </Link>
              <Link href="/experiencia" className="btn-secondary text-lg">
                Explorar Mais Experiências
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
