import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative hero-carousel text-white min-h-[100svh] flex items-center pt-16 sm:pt-20 overflow-hidden">
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a52]/70 via-[#2a4a62]/75 to-[#4a5d70]/70" />
      
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-32 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-xs sm:text-sm font-semibold mb-4 sm:mb-6 tracking-[0.2em] sm:tracking-[0.3em] text-[#a8a9ad] uppercase">
            PAGV
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-[1.1] text-balance">
            Gestão completa de obras de alto luxo.
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 leading-relaxed opacity-90 max-w-2xl text-pretty">
            Método, transparência e atendimento premium do planejamento à entrega.
          </p>
          <Link href="/#contato">
            <Button
              size="lg"
              className="bg-[#a8a9ad] hover:bg-[#98999c] text-[#1e3a52] font-semibold px-8 sm:px-10 py-5 sm:py-6 text-sm sm:text-base rounded-lg shadow-elegant-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Agendar uma conversa
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
