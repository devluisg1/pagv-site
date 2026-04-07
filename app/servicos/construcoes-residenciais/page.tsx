"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect } from "react"
import { CheckCircle2, Home, ChevronRight } from "lucide-react"

export default function ConstrucoesResidenciais() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const deliverables = [
    {
      title: "Planejamento executivo da obra",
      description: "Escopo, marcos, sequência e frentes de trabalho",
    },
    {
      title: "Orçamento detalhado",
      description: "Controle de custos ao longo da execução",
    },
    {
      title: "Cronograma com atualizações",
      description: "Alinhamento contínuo com as decisões do cliente",
    },
    {
      title: "Coordenação completa",
      description: "Fornecedores, equipes e especialidades (do \"cinza\" aos acabamentos)",
    },
    {
      title: "Controle de qualidade",
      description: "Por etapa, com foco em durabilidade e acabamento refinado",
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
              <span className="text-[#d4af37]">Construções Residenciais</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e3a52]">Obras residenciais de alto luxo com gestão completa</h1>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              Alto domínio técnico, controle de custos e cronograma, e padrão de execução elevado — do planejamento aos acabamentos, com acompanhamento próximo e decisões bem orientadas.
            </p>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
          </div>

          <div className="flex flex-col gap-12 mb-16">
            <div className="overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 w-full">
              <img
                src="/modern-luxury-residential-house-with-pool.jpg"
                alt="Construções Residenciais"
                className="w-full h-auto object-cover max-h-96"
              />
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#1e3a52] mb-4">O que fazemos</h2>
                <p className="text-gray-700 leading-relaxed text-justify text-lg">
                  A PAGV realiza a gestão completa de obras residenciais de alto luxo, conduzindo o projeto com método, organização e acompanhamento próximo. Atuamos do planejamento inicial até a entrega, com foco em execução precisa e acabamento refinado.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1e3a52] mb-4">O que entregamos</h2>
                <ul className="space-y-3">
                  {deliverables.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3 group">
                      <CheckCircle2 className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                      <div>
                        <span className="font-bold text-[#1e3a52]">{item.title}</span>{" "}
                        <span className="text-gray-700">— {item.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#f0f4f8] rounded-xl p-6 border-l-4 border-[#d4af37]">
                <h3 className="text-xl font-bold text-[#1e3a52] mb-3">Nosso diferencial técnico em alto luxo</h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Em obras de alto luxo, decisões tardias de interiores, paisagismo e sistemas são comuns. Por isso, a gestão precisa ser dinâmica e tecnicamente segura. A PAGV atua com rigor na compatibilização de projetos, orientação de soluções e prevenção de retrabalhos, mantendo previsibilidade e padrão elevado.
                </p>
              </div>

              <div className="bg-[#f0f4f8] rounded-xl p-6 border-l-4 border-[#1e3a52]">
                <h3 className="text-xl font-bold text-[#1e3a52] mb-3">Como funciona o modelo por administração</h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  No modelo por administração, os custos da obra são pagos pelo cliente (materiais, mão de obra e terceiros), e a PAGV atua na gestão completa, com organização, coordenação e controle. Esse formato favorece transparência, tomada de decisão e rastreabilidade financeira durante a obra.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link href="/#contato">
              <Button className="bg-[#d4af37] hover:bg-[#c49d2e] text-black font-bold px-12 py-6 text-lg rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                Agendar uma conversa
              </Button>
            </Link>
            <Link href="/#contato">
              <Button variant="outline" className="border-2 border-[#1e3a52] text-[#1e3a52] hover:bg-[#1e3a52] hover:text-white font-bold px-12 py-6 text-lg rounded-lg transition-all duration-300">
                Entender o modelo por administração
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
