"use client"

import { useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, Home, ChevronRight } from "lucide-react"

export default function GerenciamentoDeObras() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const services = [
    {
      title: "Administração de contratos:",
      description: "Gerenciamento eficiente de todos os contratos, assegurando conformidade e cumprimento de termos.",
    },
    {
      title: "Planejamento e controle de obras:",
      description:
        "Desenvolvimento e monitoramento de cronogramas, recursos e atividades para assegurar o progresso conforme planejado.",
    },
    {
      title: "Gerenciamento da construção:",
      description: "Coordenação completa do processo de construção, desde a concepção até a finalização.",
    },
    {
      title: "Gerenciamento de engenharia:",
      description:
        "Supervisão técnica para garantir que todos os aspectos do projeto atendam aos padrões de qualidade e segurança.",
    },
    {
      title: "Orçamentação de obras:",
      description: "Elaboração e controle de orçamentos precisos para assegurar a viabilidade econômica do projeto.",
    },
    {
      title: "Fiscalização técnica de obras:",
      description:
        "Inspeções regulares para garantir que as obras estejam sendo executadas conforme especificações técnicas.",
    },
    {
      title: "Gerenciamento de suprimentos e materiais:",
      description:
        "Planejamento e controle da aquisição e uso de materiais, assegurando eficiência e minimização de desperdícios.",
    },
    {
      title: "Gerenciamento de custos:",
      description:
        "Monitoramento e controle rigoroso dos custos para assegurar a conclusão dentro do orçamento previsto.",
    },
    {
      title: "Gerenciamento de riscos:",
      description: "Identificação, análise e mitigação de riscos associados ao projeto.",
    },
    {
      title: "Gerenciamento de pessoas:",
      description:
        "Coordenação e liderança eficaz das equipes envolvidas no projeto para garantir um ambiente de trabalho produtivo e harmonioso.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <Header />

      <main className="flex-grow pt-20">
        <div className="bg-[#1e3a52] py-4">
          <div className="container mx-auto px-6">
            <nav className="flex items-center space-x-2 text-sm text-white">
              <Link href="/" className="hover:text-[#d4af37] transition-colors flex items-center">
                <Home size={16} className="mr-1" />
                Início
              </Link>
              <ChevronRight size={16} className="text-gray-400" />
              <Link href="/#servicos" className="hover:text-[#d4af37] transition-colors">
                Serviços
              </Link>
              <ChevronRight size={16} className="text-gray-400" />
              <span className="text-[#d4af37]">Gerenciamento de Obras</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e3a52]">GERENCIAMENTO DE OBRAS</h1>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
          </div>

          <div className="flex flex-col gap-12 mb-16">
            <div className="overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 w-full">
              <img
                src="/construction-manager-with-blueprints-at-site.jpg"
                alt="Gerenciamento de Obras"
                className="w-full h-auto object-cover max-h-96"
              />
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <p className="text-gray-700 leading-relaxed text-justify text-lg">
                Para garantir o melhor andamento e segurança das suas obras, a PAGV® conta com uma equipe de
                profissionais especializados e altamente qualificados em gerenciamento de projetos.
              </p>

              <div className="border-l-4 border-[#d4af37] pl-4">
                <p className="text-gray-800 font-semibold text-lg">Oferecemos uma ampla gama de serviços, incluindo:</p>
              </div>

              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start space-x-3 group">
                    <CheckCircle2 className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <span className="font-bold text-[#1e3a52]">{service.title}</span>{" "}
                      <span className="text-gray-700">{service.description}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="bg-gradient-to-r from-[#1e3a52] to-[#4a5d70] rounded-xl p-6 text-white">
                <p className="leading-relaxed text-justify">
                  Na PAGV®, estamos comprometidos com a excelência em cada etapa do seu projeto, garantindo a entrega de
                  resultados superiores com total segurança jurídica e contábil.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Link href="/#contato">
              <Button className="bg-[#d4af37] hover:bg-[#c49d2e] text-black font-bold px-16 py-8 text-xl rounded-full transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:animate-pulse">
                GERENCIAR MEU PROJETO
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
