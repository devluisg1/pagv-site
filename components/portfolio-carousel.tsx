"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Project {
  id: number
  image: string
  alt: string
  title: string
  category: string
  year: string
  area: string
  location: string
  services: string[]
  description: string
}

interface PortfolioCarouselProps {
  projects: Project[]
  currentSlide: number
  onSlideChange: (slide: number) => void
}

export default function PortfolioCarousel({
  projects,
  currentSlide,
  onSlideChange,
}: PortfolioCarouselProps) {
  const itemsPerSlide = 4
  const totalSlides = Math.ceil(projects.length / itemsPerSlide)

  const handlePrevious = () => {
    onSlideChange(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1)
  }

  const handleNext = () => {
    onSlideChange(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1)
  }

  const startIndex = currentSlide * itemsPerSlide
  const visibleProjects = projects.slice(startIndex, startIndex + itemsPerSlide)

  return (
    <div className="relative">
      {/* Grid de imagens */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {visibleProjects.map((project) => (
          <Link
            key={project.id}
            href={`/portfolio/${project.id}`}
            className="relative aspect-square overflow-hidden group cursor-pointer rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-3 md:p-4">
              <h3 className="text-white font-semibold text-xs md:text-sm leading-tight">
                {project.title}
              </h3>
              <p className="text-gray-300 text-xs mt-1">{project.year} | {project.area}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Botões de navegação (apenas se houver múltiplos slides) */}
      {totalSlides > 1 && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 md:p-3 hover:bg-gray-100 transition-colors shadow-lg"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
          </button>
          <button
            onClick={handleNext}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 md:p-3 hover:bg-gray-100 transition-colors shadow-lg"
            aria-label="Próximo slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
          </button>

          {/* Indicadores de slide */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => onSlideChange(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-[#1e3a52] w-6" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
