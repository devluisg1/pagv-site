"use client"

import Link from "next/link"
import { Target, Eye, Heart } from "lucide-react"

export default function MissionVisionValues() {
  return (
    <section id="missao-visao-valores" className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32">
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {/* Missão e Visão - Primeira linha */}
          <div className="grid sm:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {/* Missão */}
            <div className="group bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#1e3a52] to-[#4a5d70] flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Target className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a52] tracking-wide">MISSÃO</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  {"Oferecer uma experiência exclusiva em construção de alto luxo, comética, transparência, segurança e excelência, do planejamento à entrega, garantindo a máxima valorização do patrimônio e a satisfação plena dos nossos clientes."}
                </p>
              </div>
            </div>

            {/* Visão */}
            <div className="group bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#1e3a52] to-[#4a5d70] flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Eye className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a52] tracking-wide">VISÃO</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  {"Ser referência em construção de alto luxo, oferecendo exclusividade, inovação e confiança, sendo parceira de clientes que valorizam excelência, transparência e sofisticação em cada detalhe de sua obra."}
                </p>
              </div>
            </div>
          </div>

          {/* Valores - Segunda linha com full-width */}
          <div className="group bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 w-full">
            <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#1e3a52] to-[#4a5d70] flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a52] tracking-wide">VALORES</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
              <ul className="text-gray-600 leading-relaxed space-y-3 sm:space-y-4 text-left text-base sm:text-lg w-full">
                <li className="flex items-start group/item">
                  <span className="text-[#d4af37] mr-3 text-xl sm:text-2xl font-bold group-hover/item:scale-125 transition-transform duration-300 flex-shrink-0">
                    •
                  </span>
                  <span><strong>Ética e Transparência</strong> – Atuamos com clareza e integridade em todas as etapas, conquistando a confiança de clientes e parceiros.</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-[#d4af37] mr-3 text-xl sm:text-2xl font-bold group-hover/item:scale-125 transition-transform duration-300 flex-shrink-0">
                    •
                  </span>
                  <span><strong>Excelência e Sofisticação</strong> – Entregamos o mais alto padrão em construção, com atenção a cada detalhe que transforma obras em experiências únicas.</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-[#d4af37] mr-3 text-xl sm:text-2xl font-bold group-hover/item:scale-125 transition-transform duration-300 flex-shrink-0">
                    •
                  </span>
                  <span><strong>Exclusividade e Personalização</strong> – Cada projeto é tratado de forma única, refletindo o estilo de vida e os desejos de nossos clientes.</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-[#d4af37] mr-3 text-xl sm:text-2xl font-bold group-hover/item:scale-125 transition-transform duration-300 flex-shrink-0">
                    •
                  </span>
                  <span><strong>Inovação e Modernidade</strong> – Incorporamos soluções e tecnologias que elevam a qualidade, a sustentabilidade e a valorização do patrimônio.</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-[#d4af37] mr-3 text-xl sm:text-2xl font-bold group-hover/item:scale-125 transition-transform duration-300 flex-shrink-0">
                    •
                  </span>
                  <span><strong>Relacionamento Premium</strong> – Valorizamos o cliente em primeiro lugar, com atendimento diferenciado e compromisso em superar expectativas.</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-[#d4af37] mr-3 text-xl sm:text-2xl font-bold group-hover/item:scale-125 transition-transform duration-300 flex-shrink-0">
                    •
                  </span>
                  <span><strong>Compromisso com a Segurança e Qualidade</strong> – Garantimos processos seguros, obras duradouras e resultados que preservam nosso padrão de confiança.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative h-[400px] sm:h-[500px] md:h-[600px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 82, 0.75), rgba(30, 58, 82, 0.75)), url('/mission-vision-background.jpg')`,
        }}
      >
        <div className="text-center text-white z-10 px-4 sm:px-6 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light mb-8 sm:mb-10 md:mb-12 tracking-[0.2em] sm:tracking-[0.3em] text-balance leading-tight">
            VIVA O EXTRAORDINÁRIO
          </h2>
          <Link
            href="#contato"
            className="inline-block bg-[#d4af37] text-[#1e3a52] px-8 sm:px-10 md:px-12 py-4 sm:py-5 hover:bg-white transition-all duration-300 tracking-wider sm:tracking-widest text-xs sm:text-sm font-bold rounded-lg shadow-2xl hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            ENTRAR EM CONTATO
          </Link>
        </div>
      </div>
    </section>
  )
}
