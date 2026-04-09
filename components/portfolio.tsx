"use client"

import { useState } from "react"
import PortfolioCarousel from "./portfolio-carousel"
import { projects } from "@/lib/projects"


export default function Portfolio() {
  const [residencialSlide, setResidencialSlide] = useState(0)
  const [comercialSlide, setComercialSlide] = useState(0)



  return (
    <>
      <section id="obras" className="py-12 md:py-16 bg-white">
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
