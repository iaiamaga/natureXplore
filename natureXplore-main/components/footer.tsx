import Link from "next/link"
import { Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#344E27] text-areia py-16 section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-[#B6F442] rounded-full flex items-center justify-center">
                <span className="text-[#344E27] font-title font-bold text-xl">N</span>
              </div>
              <span className="font-title text-2xl font-bold text-[#B6F442]">NatureXplore</span>
            </div>
            <p className="text-areia/90 leading-relaxed mb-6 max-w-md">
              Conectando viajantes à natureza e comunidade do Sana de forma ética, estética e transformadora. Explorar é
              pertencer.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/naturexplore_sana?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#B6F442] rounded-full flex items-center justify-center hover:bg-verde transition-colors duration-300"
              >
                <Instagram size={20} className="text-[#344E27]" />
              </a>
              <a
                href="mailto:naturexploradores@gmail.com"
                className="w-10 h-10 bg-[#B6F442] rounded-full flex items-center justify-center hover:bg-verde transition-colors duration-300"
              >
                <Mail size={20} className="text-[#344E27]" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-title text-xl font-bold mb-6 text-[#B6F442]">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin size={16} className="text-[#B6F442] flex-shrink-0" />
                <span className="text-areia/90 text-sm">Sana, Macaé - RJ. Sana. 27995-000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-[#B6F442] flex-shrink-0" />
                <span className="text-areia/90 text-sm">(22) 98126-1825</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-[#B6F442] flex-shrink-0" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=naturexploradores@gmail.com&su=Quero+Montar+minha+Jornada&body=Olá%2C+quero+personalizar+uma+experiência+em+Sana%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-areia/90 text-sm hover:text-[#B6F442] transition-colors duration-300"
                >
                  naturexploradores@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-areia/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-areia/70 text-sm mb-4 md:mb-0">
            © {currentYear} NatureXplore. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacidade" className="text-areia/70 hover:text-[#B6F442] transition-colors duration-300">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="text-areia/70 hover:text-[#B6F442] transition-colors duration-300">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
