"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect } from "react"
import { Home, ChevronRight } from "lucide-react"

export default function IncorporacaoConstrucaoEdificios() {
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
              <span className="text-[#d4af37]">Incorporação e Construção de Edifícios</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e3a52]">
              INCORPORAÇÃO E CONSTRUÇÃO DE EDIFÍCIOS
            </h1>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
          </div>

          <div className="flex flex-col gap-12 mb-16">
            <a
              href="https://www.residencialaltodasmansoes.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 w-full block"
            >
              <img
                src="/alto-das-mansoes.jpg"
                alt="Alto das Mansões - Incorporação PAGV"
                className="w-full h-auto object-cover max-h-96"
              />
            </a>

            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <p className="text-gray-700 leading-relaxed text-justify text-lg">
                {"A PAGV® está estruturando um novo braço empresarial dedicado exclusivamente à incorporação e construção de edifícios. Esta iniciativa nasce da nossa expertise consolidada em engenharia de alto padrão e representa um passo estratégico para atender este mercado com a mesma excelência que nos define.\n\nEnquanto formalizamos a abertura da nova empresa, todas as operações de incorporação seguem sob a chancela da PAGV®, garantindo continuidade e segurança para nossos parceiros e clientes.\n\nNosso compromisso é transformar visões arquitetônicas em realidade, aplicando a engenharia de precisão que desenvolvemos. Cada projeto será conduzido por uma equipe especializada, assegurando que todos os aspectos, desde a concepção até a entrega final, sejam executados com excelência.\n"} 
              </p>

              

              <div className="bg-gradient-to-r from-[#d4af37] to-[#c49d2e] rounded-xl p-6 text-white">
                <p className="leading-relaxed text-justify font-semibold">
                  {"Para garantir a máxima qualidade e sustentabilidade, estamos em processo de certificação no PBQP-H (Programa Brasileiro da Qualidade e Produtividade do Habitat) e obtenção do Selo Azul, atestando nosso compromisso com o desenvolvimento urbano responsável.\n"}
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#1e3a52] to-[#4a5d70] rounded-xl p-6 text-white">
                <p className="leading-relaxed text-justify">
                  Criamos espaços funcionais e esteticamente agradáveis, sempre atendendo às expectativas de nossos clientes e promovendo um crescimento urbano que valoriza a comunidade e o meio ambiente.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Link href="/#contato">
              <Button className="bg-[#d4af37] hover:bg-[#c49d2e] text-black font-bold px-16 py-8 text-xl rounded-full transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:animate-pulse">
                INVESTIR EM MEU EMPREENDIMENTO
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
