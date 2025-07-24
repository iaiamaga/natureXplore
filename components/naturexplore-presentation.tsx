import { Instagram, MessageCircle, Mail } from "lucide-react"
import Image from "next/image"

export default function NaturexplorePresentation() {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding bg-[#2E450F] relative py-[40vh]">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Mobile Only */}
          <div className="md:hidden mb-8">
            <div className="flex justify-center">
              <div className="relative w-20 h-20">
                <Image src="/logo-naturexplore.png" alt="NatureXplore Logo" fill className="object-contain" priority />
              </div>
            </div>
          </div>

          <h2 className="font-title text-4xl md:text-5xl font-bold text-areia mb-12">Bem-vindos ao NatureXplore</h2>

          <div className="space-y-8 text-lg text-areia/90 leading-relaxed mb-12">
            <p>
              Somos mais que uma plataforma de turismo. Somos facilitadores de conexões autênticas entre pessoas,
              natureza e cultura no coração da Mata Atlântica. Cada experiência é cuidadosamente curada para respeitar e
              fortalecer a comunidade local do Sana.
            </p>

            <p>
              Nossa missão é transformar a forma como você viaja, criando jornadas que nutrem tanto o viajante quanto o
              destino. Acreditamos que explorar é mais do que conhecer lugares — é sobre pertencer temporariamente a um
              território, respeitando sua essência e contribuindo para sua preservação.
            </p>

            <p>
              Trabalhamos diretamente com moradores, produtores, artesãos e guias locais, garantindo que cada real
              investido em sua jornada retorne para a comunidade, fortalecendo a economia local e preservando as
              tradições que fazem do Sana um lugar único no mundo.
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/naturexplore_sana?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-areia rounded-full flex items-center justify-center hover:bg-verde transition-colors duration-300 group"
            >
              <Instagram size={24} className="text-[#2E450F] group-hover:scale-110 transition-transform duration-300" />
            </a>

            <a
              href="https://wa.me/5522981261825"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-areia rounded-full flex items-center justify-center hover:bg-verde transition-colors duration-300 group"
            >
              <MessageCircle
                size={24}
                className="text-[#2E450F] group-hover:scale-110 transition-transform duration-300"
              />
            </a>

            <a
              href="mailto:naturexploradores@gmail.com"
              className="w-14 h-14 bg-areia rounded-full flex items-center justify-center hover:bg-verde transition-colors duration-300 group"
            >
              <Mail size={24} className="text-[#2E450F] group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Smooth transition gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F220B] to-transparent" />
    </section>
  )
}
