"use client"

import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import PortfolioCarousel from "./portfolio-carousel"

export default function Portfolio() {
  const [residencialSlide, setResidencialSlide] = useState(0)
  const [comercialSlide, setComercialSlide] = useState(0)

  const projects = [
    {
      id: 1,
      image: "/portfolio/luxury-residential-with-pool-evening.jpg",
      alt: "Residência RL - Campinas",
      title: "Residência RL",
      category: "Residencial",
      location: "Campinas - SP",
      area: "663,34m²",
      terreno: "1.000m²",
      architect: "Padovani Arquitetos",
      interior: "Lenina",
      photographer: "Miro Martins",
      description: "Residência Minimalista de Design Assinado",
      detailedDescription: "Em um lote de 1.000m², esta residência de 700m² de área construída pela PAGV personifica a arquitetura minimalista com elegância e inovação. A estrutura mista, que combina concreto, madeira e elementos metálicos, foi estrategicamente concebida para conferir leveza visual e máxima eficiência construtiva ao projeto. O destaque da obra reside nos painéis ripados metálicos, um elemento desenvolvido em colaboração com a equipe de arquitetura, que se integra perfeitamente à volumetria da fachada, criando um jogo de texturas e luz. Internamente, o uso de forros de madeira e pedras naturais selecionadas acentua o alto nível de sofisticação e o bom gosto, transformando cada ambiente em uma expressão de Arte e Design contemporâneo.",
      services: ["Construção Completa", "Gerenciamento de Obras", "Acabamentos Premium"],
      gallery: [
        "/portfolio/luxury-residential-with-pool-evening.jpg",
        "/portfolio/modern-residential-house-with-palms.jpg",
        "/portfolio/modern-entrance-with-pool.jpg",
        "/portfolio/modern-house-palms.jpg",
        "/portfolio/leisure-area-pool-landscape.jpg",
        "/portfolio/luxury-residential-with-pool-evening.jpg",
        "/portfolio/modern-residential-house-with-palms.jpg",
        "/portfolio/modern-entrance-with-pool.jpg",
      ],
    },
    {
      id: 2,
      image: "/portfolio/leisure-area-pool-landscape.jpg",
      alt: "Residência LB - Valinhos",
      title: "Residência LB",
      category: "Residencial",
      location: "Valinhos - SP",
      area: "663,34m²",
      terreno: "2.400m²",
      architect: "Arquitetura 4",
      interior: "Priscila Alves Arquitetura",
      photographer: "Pólen Producer",
      description: "Assessoria Completa e Residência Integrada",
      detailedDescription: "Este projeto singular é um testemunho da Parceria e Gestão abrangente oferecida pela PAGV. Por um ano e meio, assessoramos o cliente desde a criteriosa escolha do lote de 2.400m², estendendo-se à indicação dos arquitetos e profissionais que deram vida a esta residência. Com mais de 600m² de área construída em um pavimento térreo, a casa se destaca por seu paisagismo impressionante e pela concepção de todos os espaços para um ótimo convívio. O resultado é um lar que oferece funcionalidade, bem-estar e um Valor excepcional, cuidadosamente planejado para a vida em família.",
      services: ["Assessoria Completa", "Gerenciamento de Projeto", "Coordenação Arquitetônica"],
      gallery: [
        "/portfolio/leisure-area-pool-landscape.jpg",
        "/portfolio/modern-house-palms.jpg",
        "/portfolio/luxury-residential-with-pool-evening.jpg",
        "/portfolio/modern-residential-house-with-palms.jpg",
        "/portfolio/modern-entrance-with-pool.jpg",
        "/portfolio/leisure-area-pool-landscape.jpg",
        "/portfolio/modern-house-palms.jpg",
        "/portfolio/luxury-residential-with-pool-evening.jpg",
      ],
    },
    {
      id: 3,
      image: "/portfolio/modern-residential-house-with-palms.jpg",
      alt: "Residência MG - Vinhedo",
      title: "Residência MG",
      category: "Residencial",
      location: "Vinhedo - SP",
      area: "332,20m²",
      terreno: "Não informado",
      architect: "Priscila Alves",
      interior: "Priscila Alves",
      photographer: "Pólen Producer",
      description: "Elegância e Acolhimento",
      detailedDescription: "Nesta residência, a PAGV concebeu uma obra-prima onde a elegância contemporânea se funde perfeitamente com o conforto acolhedor. A Arte de projetar é evidente no uso estratégico de materiais naturais – como a pedra bruta e a madeira – que conferem textura, calor e sofisticação inigualáveis ao conjunto. Destacam-se a convidativa cozinha gourmet, com seu charmoso fogão à lenha e integração fluida com a área externa, aproveitando a iluminação natural e a ventilação cruzada. A imponente lareira em pedra, protagonista do ambiente, é emoldurada por amplos panos de vidro que conectam o interior ao jardim exuberante, criando um cenário de puro aconchego. Este projeto expressa o compromisso da PAGV em entregar Valor através de materiais nobres, funcionalidade e bem-estar, unindo técnica apurada e estética refinada em cada detalhe.",
      services: ["Construção Completa", "Acabamentos Nobres", "Integração Paisagística"],
      gallery: [
        "/portfolio/modern-residential-house-with-palms.jpg",
        "/portfolio/modern-entrance-with-pool.jpg",
        "/portfolio/leisure-area-pool-landscape.jpg",
        "/portfolio/modern-house-palms.jpg",
        "/portfolio/luxury-residential-with-pool-evening.jpg",
        "/portfolio/modern-residential-house-with-palms.jpg",
        "/portfolio/modern-entrance-with-pool.jpg",
        "/portfolio/leisure-area-pool-landscape.jpg",
      ],
    },
    {
      id: 4,
      image: "/portfolio/modern-entrance-with-pool.jpg",
      alt: "Residência LM - Campinas",
      title: "Residência LM",
      category: "Residencial",
      location: "Campinas - SP",
      area: "~1.000m²",
      terreno: "2.600m²",
      architect: "Não informado",
      interior: "Elaine Carvalho",
      photographer: "Miro Martins",
      description: "Elegante e Atemporal",
      detailedDescription: "Esta residência foi executada em um terreno de 2.600m², com 1.000m² de área construída. O projeto apresenta uma implantação precisa e harmoniosa, integrando-se naturalmente à paisagem e ao exuberante jardim existente. A utilização de materiais de altíssimo padrão e bom gosto resultou em uma fachada imponente, marcada pela elegância e proporção. O principal desafio deste empreendimento foi atender ao prazo reduzido solicitado pelo cliente, o que exigiu uma execução ágil e rigorosamente planejada, sem qualquer concessão quanto à qualidade e ao nível de acabamento.",
      services: ["Gerenciamento de Obras", "Construção Completa", "Cronograma Crítico"],
      gallery: [
        "/portfolio/modern-entrance-with-pool.jpg",
        "/portfolio/modern-house-palms.jpg",
        "/portfolio/luxury-residential-with-pool-evening.jpg",
        "/portfolio/modern-residential-house-with-palms.jpg",
        "/portfolio/leisure-area-pool-landscape.jpg",
        "/portfolio/modern-entrance-with-pool.jpg",
        "/portfolio/modern-house-palms.jpg",
        "/portfolio/luxury-residential-with-pool-evening.jpg",
      ],
    },
    {
      id: 5,
      image: "/portfolio/modern-house-palms.jpg",
      alt: "Residência BM - Paulínia",
      title: "Residência BM",
      category: "Residencial",
      location: "Paulínia - SP",
      area: "255,48m²",
      terreno: "Não informado",
      architect: "Não informado",
      interior: "Carol Conter Arquitetura",
      photographer: "Pólen Producer",
      description: "Modernidade e Funcionalidade",
      detailedDescription: "Desenvolvida para um jovem casal, esta residência da PAGV materializa um conceito que eleva os espaços de convivência a um novo patamar. Ambientes como a adega, o sofisticado espaço gourmet e a piscina foram habilmente integrados, promovendo uma fluidez impecável para o uso diário e momentos de lazer. O resultado é um lar que harmoniza acolhimento, funcionalidade e sofisticação. Cada detalhe reflete a Arte da PAGV em criar projetos que agregam Valor genuíno, entregando um refúgio ideal para a celebração da vida familiar e social.",
      services: ["Construção Residencial", "Espaços Gourmet", "Integração de Ambientes"],
      gallery: [
        "/portfolio/modern-house-palms.jpg",
        "/portfolio/leisure-area-pool-landscape.jpg",
        "/portfolio/modern-residential-house-with-palms.jpg",
        "/portfolio/luxury-residential-with-pool-evening.jpg",
        "/portfolio/modern-entrance-with-pool.jpg",
        "/portfolio/modern-house-palms.jpg",
        "/portfolio/leisure-area-pool-landscape.jpg",
        "/portfolio/modern-residential-house-with-palms.jpg",
      ],
    },
  ]



  return (
    <>
      <section id="portfolio" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-normal text-gray-800 mb-2">Obras Realizadas</h2>
          <div className="w-full h-px bg-gray-300 mb-8 md:mb-12" />

          {/* Seção Residencial */}
          {projects.filter((p) => p.category === "Residencial").length > 0 && (
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#1e3a52]">Residencial</h3>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>
              <PortfolioCarousel
                projects={projects.filter((p) => p.category === "Residencial")}
                currentSlide={residencialSlide}
                onSlideChange={setResidencialSlide}
              />
            </div>
          )}

          {/* Seção Comercial */}
          {projects.filter((p) => p.category === "Comercial").length > 0 && (
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#1e3a52]">Comercial</h3>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>
              <PortfolioCarousel
                projects={projects.filter((p) => p.category === "Comercial")}
                currentSlide={comercialSlide}
                onSlideChange={setComercialSlide}
              />
            </div>
          )}
        </div>
      </section>
    </>
  )
}
