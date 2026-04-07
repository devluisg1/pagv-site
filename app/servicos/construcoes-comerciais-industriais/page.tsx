"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect } from "react"
import { CheckCircle2, Home, ChevronRight } from "lucide-react"

export default function ConstrucoesComerciaisIndustriais() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
              <span className="text-[#d4af37]">Construções Comerciais e Industriais</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e3a52]">Obras e reformas comerciais com foco em prazo e operação</h1>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              Processos de grandes projetos aplicados ao seu negócio: prazos, custos e qualidade sob controle, com comunicação objetiva e execução organizada até a entrega.
            </p>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
          </div>

          <div className="flex flex-col gap-12 mb-16">
            <div className="overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 w-full">
              <img
                src="/modern-commercial-restaurant-interior.jpg"
                alt="Construções Comerciais e Industriais"
                className="w-full h-auto object-cover max-h-96"
              />
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#1e3a52] mb-4">O que fazemos</h2>
                <p className="text-gray-700 leading-relaxed text-justify text-lg">
                  Apoiamos empresas em obras e reformas comerciais com gestão organizada do início ao fim, priorizando prazo, previsibilidade e execução bem coordenada para reduzir interferências na rotina do negócio.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1e3a52] mb-4">O que entregamos</h2>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3 group">
                    <CheckCircle2 className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <div className="text-gray-700">
                      <span className="font-semibold text-[#1e3a52]">Planejamento de execução com foco em prazos e interferências na operação</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3 group">
                    <CheckCircle2 className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <div className="text-gray-700">
                      <span className="font-semibold text-[#1e3a52]">Orçamento e controle de custos com gestão organizada de fornecedores</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3 group">
                    <CheckCircle2 className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <div className="text-gray-700">
                      <span className="font-semibold text-[#1e3a52]">Coordenação de cronograma, equipes e frentes de obra</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3 group">
                    <CheckCircle2 className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <div className="text-gray-700">
                      <span className="font-semibold text-[#1e3a52]">Acompanhamento técnico e controle de qualidade na execução</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3 group">
                    <CheckCircle2 className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <div className="text-gray-700">
                      <span className="font-semibold text-[#1e3a52]">Comunicação objetiva com registros e alinhamentos frequentes</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-[#f0f4f8] rounded-xl p-6 border-l-4 border-[#d4af37]">
                <h3 className="text-xl font-bold text-[#1e3a52] mb-3">Como reduzimos riscos e retrabalhos</h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Aplicamos método e governança típicos de projetos complexos: definição clara de escopo, alinhamento técnico, sequência de execução bem planejada e controle de qualidade por etapa. Isso reduz mudanças improvisadas, retrabalho e atrasos — especialmente em ambientes com operação ativa.
                </p>
              </div>

              <div className="bg-[#f0f4f8] rounded-xl p-6 border-l-4 border-[#1e3a52]">
                <h3 className="text-xl font-bold text-[#1e3a52] mb-3">Tipos de demanda atendidos</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Adequações e modernizações com prazos críticos</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Obras com múltiplos fornecedores e interfaces técnicas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link href="/#contato">
              <Button className="bg-[#d4af37] hover:bg-[#c49d2e] text-black font-bold px-12 py-6 text-lg rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                Solicitar avaliação do escopo
              </Button>
            </Link>
            <Link href="/#contato">
              <Button variant="outline" className="border-2 border-[#1e3a52] text-[#1e3a52] hover:bg-[#1e3a52] hover:text-white font-bold px-12 py-6 text-lg rounded-lg transition-all duration-300">
                Falar com um engenheiro
              </Button>
            </Link>
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/#contato">
              <Button className="bg-[#1e3a52] hover:bg-[#0f2438] text-white font-bold px-12 py-6 text-lg rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl">
                Agendar uma conversa sobre a obra comercial
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
