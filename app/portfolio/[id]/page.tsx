"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { projects } from "@/lib/projects"

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
                  src={project.gallery[selectedImageIndex]}
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
