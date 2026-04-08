import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      title: "Obras Residenciais",
      description:
        "Alto domínio técnico, controle de custos e cronograma, padrão de execução elevado, do planejamento aos acabamentos, com acompanhamento próximo e decisões bem orientadas.",
      image: "/modern-luxury-residential-house-with-pool.jpg",
      link: "/servicos/construcoes-residenciais",
      buttonText: "ENTENDA NOSSO MÉTODO",
    },
    {
      title: "Obras Comerciais",
      description:
        "Obras e reformas comerciais com foco em prazo e operação. Processos de grandes projetos aplicados ao seu negócio, com comunicação objetiva.",
      image: "/commercial-industrial-interior-with-yellow-lighting.jpg",
      link: "/servicos/construcoes-comerciais-industriais",
      buttonText: "VEJA COMO TRABALHAMOS",
    },
    {
      title: "Incorporação",
      description:
        "A PAGV expandiu com uma empresa do grupo voltada à incorporação. Iniciamos a primeira incorporação e estruturamos uma linha dedicada, com governança, rigor técnico e transparência.",
      image: "/large-building-construction-site-with-cranes.jpg",
      link: "/servicos/incorporacao-construcao-edificios",
      buttonText: "SAIBA MAIS",
    },
  ]

  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1e3a52]">Nossos Serviços</h2>
          <div className="w-32 h-1 bg-[#d4af37]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-xl overflow-hidden shadow-elegant hover:shadow-elegant-lg transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="mb-0 overflow-hidden h-64">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-base font-bold text-center mb-4 text-[#1e3a52] tracking-wide leading-tight">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 text-center leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                <div className="flex justify-center">
                  <Link href={service.link}>
                    <Button
                      variant="outline"
                      className="border-2 border-[#1e3a52] text-[#1e3a52] hover:bg-[#1e3a52] hover:text-white px-8 py-2 font-semibold bg-transparent transition-all duration-300"
                    >
                      {service.buttonText}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
