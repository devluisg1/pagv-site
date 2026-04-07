import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function About() {
  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a52] leading-tight text-balance">
              CONHEÇA MAIS SOBRE A PAGV CONSTRUÇÃO
            </h2>

            <div className="space-y-4 sm:space-y-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              <p>
                A PAGV® nasceu da parceria entre os engenheiros Plinio Alves e Glauco Vilena, com mais de 20 anos de experiência em gestão de projetos. Atuamos na gestão completa de obras de alto luxo — residenciais e comerciais — com um atendimento próximo e altamente personalizado.
              </p>

              <p>
                Aplicamos processos e ferramentas de grandes empreendimentos para trazer previsibilidade, organização e controle à obra. O cliente acompanha os custos com transparência, enquanto a PAGV coordena prazos, fornecedores, qualidade e decisões técnicas, do planejamento à entrega.
              </p>
            </div>

            <Link href="/#contato">
              <Button
                size="lg"
                className="mt-6 sm:mt-8 bg-[#d4af37] hover:bg-[#c4a037] text-[#1e3a52] font-semibold px-8 sm:px-10 py-5 sm:py-6 text-sm sm:text-base rounded-lg shadow-elegant hover:shadow-elegant-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Entender como funciona
              </Button>
            </Link>
          </div>

          <div className="relative h-[400px] sm:h-[500px] md:h-[650px] rounded-2xl overflow-hidden shadow-elegant-lg group order-first md:order-last">
            <img
              src="/modern-construction-building-facade-with-pagv-logo.jpg"
              alt="Fachada da PAGV Construção"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
