"use client"

import { Target, Shield, Heart, Users, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function QualityPolicy() {
  const policies = [
    {
      title: "Excelência em Cada Etapa",
      description:
        "Buscamos a excelência continuamente, desde o planejamento até a entrega final, com foco em inovação e melhoria constante.",
      icon: Target,
    },
    {
      title: "Conformidade com Normas e Regulamentos",
      description:
        "Garantimos que todos os nossos projetos e processos estejam em total conformidade com as normas vigentes e com as melhores práticas do setor da construção civil.",
      icon: Shield,
    },
    {
      title: "Foco na Satisfação do Cliente",
      description:
        "A satisfação dos nossos clientes é prioridade. Entendemos suas necessidades e superamos expectativas com soluções personalizadas e de alta qualidade.",
      icon: Heart,
    },
    {
      title: "Gestão Rigorosa de Fornecedores e Subcontratados",
      description:
        "Adotamos altos padrões de qualidade na seleção e monitoramento de fornecedores e parceiros, assegurando que cumpram nossos critérios de excelência.",
      icon: Users,
    },
    {
      title: "Avaliação e Monitoramento Contínuos",
      description:
        "Contamos com um sistema estruturado de auditorias internas e externas para garantir o alinhamento com nossos padrões de qualidade, promovendo melhorias constantes e reforçando nosso compromisso com a excelência.",
      icon: TrendingUp,
    },
  ]

  return (
    <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#1e3a52] via-[#2a4a62] to-[#1e3a52] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4af37] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#6b7a8f] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <div className="h-1 w-16 sm:w-20 bg-[#d4af37] mx-auto mb-4 sm:mb-6"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-balance px-2">
            Política de Qualidade da PAGV
          </h2>

          <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 text-gray-200 max-w-4xl mx-auto leading-relaxed px-2">
            Temos o compromisso de entregar serviços que não apenas atendam, mas superem as expectativas dos nossos
            clientes e parceiros.
          </p>

          <p className="text-base sm:text-lg text-gray-300 font-semibold">Para isso, atuamos com foco em:</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {policies.map((policy, index) => {
            const IconComponent = policy.icon
            return (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 hover:bg-white/15 transition-all duration-500 border border-white/20 hover:border-[#d4af37]/50 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="mb-4 sm:mb-6 inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#d4af37]/20 border-2 border-[#d4af37] group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-[#d4af37]" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-[#d4af37] transition-colors duration-300">
                  {policy.title}
                </h3>

                <div className="w-12 sm:w-16 h-0.5 bg-[#d4af37] mb-3 sm:mb-4 group-hover:w-20 sm:group-hover:w-24 transition-all duration-300"></div>

                <p className="text-gray-200 text-base sm:text-lg leading-relaxed">{policy.description}</p>
              </div>
            )
          })}
        </div>

        <div className="flex justify-center mt-12 sm:mt-16">
          <Link href="/#contato">
            <button
              className="relative group bg-[#a8a9ad] hover:bg-[#98999c] text-[#1e3a52] font-bold px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-xl text-base sm:text-lg transition-all duration-300 shadow-2xl hover:scale-105 overflow-hidden w-full sm:w-auto max-w-md sm:max-w-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
              <span className="relative">GARANTIR QUALIDADE NO MEU PROJETO</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
