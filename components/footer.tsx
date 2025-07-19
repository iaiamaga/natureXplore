import Link from "next/link"
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-terra text-areia py-16 section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-verde rounded-full flex items-center justify-center">
                <span className="text-terra font-title font-bold text-xl">N</span>
              </div>
              <span className="font-title text-2xl font-bold">NatureXplore</span>
            </div>
            <p className="text-areia/80 leading-relaxed mb-6 max-w-md">
              Conectando viajantes à natureza e comunidade do Sana de forma ética, estética e transformadora. Explorar é
              pertencer.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-folha rounded-full flex items-center justify-center hover:bg-verde transition-colors duration-300"
              >
                <Instagram size={20} className="text-areia" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-folha rounded-full flex items-center justify-center hover:bg-verde transition-colors duration-300"
              >
                <Facebook size={20} className="text-areia" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-folha rounded-full flex items-center justify-center hover:bg-verde transition-colors duration-300"
              >
                <Mail size={20} className="text-areia" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-title text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin size={16} className="text-verde flex-shrink-0" />
                <span className="text-areia/80 text-sm">Sana, Macaé - RJ</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-verde flex-shrink-0" />
                <span className="text-areia/80 text-sm">(22) 99999-9999</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-verde flex-shrink-0" />
                <span className="text-areia/80 text-sm">contato@naturexplore.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-areia/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-areia/60 text-sm mb-4 md:mb-0">
            © {currentYear} NatureXplore. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacidade" className="text-areia/60 hover:text-verde transition-colors duration-300">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="text-areia/60 hover:text-verde transition-colors duration-300">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
