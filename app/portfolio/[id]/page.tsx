"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

// Mesmo array de projetos do portfolio.tsx - Obras Realizadas
const projects = [
  {
    id: 1,
    image: "/portfolio/luxury-residential-with-pool-evening.jpg",
    alt: "Residência RL - Campinas",
    title: "Residência RL",
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
    ]
  },
  {
    id: 2,
    image: "/portfolio/leisure-area-pool-landscape.jpg",
    alt: "Residência LB - Valinhos",
    title: "Residência LB",
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
    ]
  },
  {
    id: 3,
    image: "/portfolio/modern-residential-house-with-palms.jpg",
    alt: "Residência MG - Vinhedo",
    title: "Residência MG",
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
    ]
  },
  {
    id: 4,
    image: "/portfolio/modern-entrance-with-pool.jpg",
    alt: "Residência LM - Campinas",
    title: "Residência LM",
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
    ]
  },
  {
    id: 5,
    image: "/portfolio/modern-house-palms.jpg",
    alt: "Residência BM - Paulínia",
    title: "Residência BM",
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
    ]
  },
]

interface ProjectDetailProps {
  params: Promise<{ id: string }>
}

function ProjectDetailClient({ project }: { project: typeof projects[0] }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const handlePrevImage = () => {
    if (selectedImageIndex === null) return
    const newIndex = selectedImageIndex === 0 ? project.gallery.length - 1 : selectedImageIndex - 1
    setSelectedImageIndex(newIndex)
  }

  const handleNextImage = () => {
    if (selectedImageIndex === null) return
    const newIndex = selectedImageIndex === project.gallery.length - 1 ? 0 : selectedImageIndex + 1
    setSelectedImageIndex(newIndex)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedImageIndex === null) return
    if (e.key === "ArrowLeft") handlePrevImage()
    if (e.key === "ArrowRight") handleNextImage()
    if (e.key === "Escape") setSelectedImageIndex(null)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Botão voltar */}
      <div className="container mx-auto px-6 py-6">
        <Link href="/#portfolio" className="inline-flex items-center gap-2 text-[#1e3a52] hover:text-[#d4af37] transition-colors">
          <ChevronLeft className="w-5 h-5" />
          Voltar aos projetos
        </Link>
      </div>

      {/* Hero com imagem e informações principais */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Imagem principal */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
            <Image
              src={project.image}
              alt={project.alt}
              fill
              className="object-cover"
            />
          </div>

          {/* Informações principais */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a52] mb-2">{project.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{project.description}</p>
            <div className="w-16 h-1 bg-[#d4af37] mb-6"></div>

            {/* Detalhes em grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-[#1e3a52] text-white p-6 rounded-lg">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Área do Terreno</p>
                <p className="text-2xl font-bold">{project.terreno}</p>
              </div>
              <div className="bg-[#1e3a52] text-white p-6 rounded-lg">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Área Construída</p>
                <p className="text-2xl font-bold">{project.area}</p>
              </div>
              <div className="col-span-2 bg-[#1e3a52] text-white p-6 rounded-lg">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Localização</p>
                <p className="text-lg font-bold">{project.location}</p>
              </div>
            </div>

            {/* Créditos profissionais */}
            <div className="space-y-3 mb-8 text-sm">
              {project.architect && project.architect !== "Não informado" && (
                <p className="text-gray-700"><span className="font-semibold text-[#1e3a52]">Projeto Arquitetônico:</span> {project.architect}</p>
              )}
              {project.interior && project.interior !== "Não informado" && (
                <p className="text-gray-700"><span className="font-semibold text-[#1e3a52]">Projeto de Interiores:</span> {project.interior}</p>
              )}
              {project.photographer && project.photographer !== "Não informado" && (
                <p className="text-gray-700"><span className="font-semibold text-[#1e3a52]">Fotos:</span> {project.photographer}</p>
              )}
            </div>

            {/* CTA */}
            <Link href="/#contato">
              <Button className="w-full bg-[#d4af37] hover:bg-[#c49d2e] text-black font-bold py-6 text-lg rounded-lg">
                Agendar uma Conversa
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Galeria de fotos */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-[#d4af37] text-sm uppercase tracking-widest mb-2">[Faz e Mostra]</p>
          <h2 className="text-4xl font-bold text-[#1e3a52] mb-4">Galeria de Fotos</h2>
          <div className="w-16 h-1 bg-[#d4af37] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {project.gallery && project.gallery.length > 0 ? (
            project.gallery.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              >
                <Image
                  src={img}
                  alt={`${project.title} - Foto ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </button>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-gray-400">
              Galeria de fotos em breve
            </div>
          )}
        </div>

        {/* Lightbox */}
        {selectedImageIndex !== null && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImageIndex(null)}
            onKeyDown={handleKeyDown}
            role="dialog"
            aria-modal="true"
            tabIndex={0}
          >
            <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              {/* Botão fechar */}
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors backdrop-blur-sm"
                aria-label="Fechar lightbox"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Imagem principal */}
              <div className="relative w-full max-w-4xl max-h-[80vh]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_DSC9026-b1JtfF6D98Pwaead3I7k71UGBbvKnA.jpg"
                  alt={`${project.title} - Foto ${selectedImageIndex + 1}`}
                  width={1200}
                  height={800}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>

              {/* Seta esquerda */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handlePrevImage()
                }}
                className="absolute left-4 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors backdrop-blur-sm"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>

              {/* Seta direita */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleNextImage()
                }}
                className="absolute right-4 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors backdrop-blur-sm"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>

              {/* Contador de imagens */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                {selectedImageIndex + 1} / {project.gallery.length}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mais detalhes */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1e3a52] mb-6">Mais detalhes</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>{project.detailedDescription}</p>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="bg-[#1e3a52] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Quer conhecer mais sobre projetos como este?</h2>
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">Converse com nossa equipe sobre como podemos desenvolver seu projeto com a mesma excelência, atenção aos detalhes e comprometimento com a qualidade.</p>
          <Link href="/#contato">
            <Button className="bg-[#d4af37] hover:bg-[#c49d2e] text-black font-bold px-12 py-6 text-lg rounded-lg">
              Agendar uma Conversa
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default async function ProjectDetail({ params }: ProjectDetailProps) {
  const { id } = await params
  const project = projects.find(p => p.id === parseInt(id))

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1e3a52] mb-4">Projeto não encontrado</h1>
          <Link href="/#portfolio">
            <Button className="bg-[#d4af37] hover:bg-[#c49d2e] text-black">Voltar aos projetos</Button>
          </Link>
        </div>
      </div>
    )
  }

  return <ProjectDetailClient project={project} />
}
