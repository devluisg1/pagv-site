import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#1e3a52] text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <Image
              src="/logo-pagv.png"
              alt="PAGV Logo"
              width={120}
              height={50}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Não é sobre construção é sobre solução.
            </p>
            <div className="flex gap-3 sm:gap-4 pt-4">
              
              <a
                href="https://www.instagram.com/pagvconstrucao"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#4a5d70] flex items-center justify-center hover:bg-[#a8a9ad] transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#4a5d70] flex items-center justify-center hover:bg-[#d4af37] transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-[#d4af37]">Links Rápidos</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#sobre"
                  className="text-gray-300 hover:text-[#d4af37] transition-colors duration-300 text-sm sm:text-base"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-gray-300 hover:text-[#d4af37] transition-colors duration-300 text-sm sm:text-base"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-300 hover:text-[#d4af37] transition-colors duration-300 text-sm sm:text-base"
                >
                  Obras Realizadas
                </a>
              </li>
              <li>
                <a
                  href="#qualidade"
                  className="text-gray-300 hover:text-[#d4af37] transition-colors duration-300 text-sm sm:text-base"
                >
                  Política de Qualidade
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-gray-300 hover:text-[#d4af37] transition-colors duration-300 text-sm sm:text-base"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-[#d4af37]">Nossos Serviços</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="/servicos/gerenciamento-de-obras"
                  className="text-gray-300 hover:text-[#d4af37] transition-colors duration-300 text-sm sm:text-base"
                >
                  Gerenciamento de Obras
                </a>
              </li>
              <li>
                <a
                  href="/servicos/construcoes-residenciais"
                  className="text-gray-300 hover:text-[#d4af37] transition-colors duration-300 text-sm sm:text-base"
                >
                  Construções Residenciais
                </a>
              </li>
              <li>
                <a
                  href="/servicos/construcoes-comerciais-industriais"
                  className="text-gray-300 hover:text-[#d4af37] transition-colors duration-300 text-sm sm:text-base"
                >
                  Construções Comerciais
                </a>
              </li>
              <li>
                <a
                  href="/servicos/incorporacao-construcao-edificios"
                  className="text-gray-300 hover:text-[#d4af37] transition-colors duration-300 text-sm sm:text-base"
                >
                  Incorporação de Edifícios
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-[#d4af37]">Contato</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4af37] flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-sm sm:text-base">
                  R. Dona Carolina Prado Penteado, 45
                  <br />
                  Nova Campinas, Campinas - SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4af37] flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">(19) 3291-8859</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4af37] flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">pagv@pagv.com.br</span>
              </li>
              <li className="text-gray-300 text-xs sm:text-sm pt-2">CNPJ: 27.950.943/0001-31</li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-[#4a5d70] mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © {new Date().getFullYear()} PAGV Construção. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
              <a
                href="/politica-privacidade"
                className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300"
              >
                Política de Privacidade
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
