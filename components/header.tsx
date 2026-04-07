"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-elegant" : "bg-[#1e3a52]"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-pagv.png"
              alt="PAGV Logo"
              width={100}
              height={40}
              className={`h-10 sm:h-12 w-auto transition-all duration-300 ${
                scrolled ? "brightness-0" : "brightness-0 invert"
              }`}
              priority
            />
          </Link>

          <ul
            className={`hidden lg:flex items-center gap-6 xl:gap-10 text-sm font-medium transition-colors duration-300 ${
              scrolled ? "text-[#4a5d70]" : "text-white"
            }`}
          >
            <li>
              <Link href="#sobre" className="hover:text-[#d4af37] transition-colors relative group">
                SOBRE A PAGV
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
            <li>
              <Link href="#servicos" className="hover:text-[#d4af37] transition-colors relative group">
                NOSSOS SERVIÇOS
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
            <li>
              <Link href="#obras" className="hover:text-[#d4af37] transition-colors relative group">
                OBRAS REALIZADAS
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
            <li>
              <Link href="#contato" className="hover:text-[#d4af37] transition-colors relative group">
                CONTATO
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
            <li>
              
            </li>
          </ul>

          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-[#1e3a52] hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-white/20">
            <ul className="flex flex-col gap-4 text-sm font-medium text-white">
              <li>
                <Link
                  href="#sobre"
                  className="block py-2 hover:text-[#d4af37] transition-colors"
                  onClick={handleLinkClick}
                >
                  SOBRE A PAGV
                </Link>
              </li>
              <li>
                <Link
                  href="#servicos"
                  className="block py-2 hover:text-[#d4af37] transition-colors"
                  onClick={handleLinkClick}
                >
                  NOSSOS SERVIÇOS
                </Link>
              </li>
              <li>
                <Link
                  href="#obras"
                  className="block py-2 hover:text-[#d4af37] transition-colors"
                  onClick={handleLinkClick}
                >
                  OBRAS REALIZADAS
                </Link>
              </li>
              <li>
                <Link
                  href="#contato"
                  className="block py-2 hover:text-[#d4af37] transition-colors"
                  onClick={handleLinkClick}
                >
                  CONTATO
                </Link>
              </li>
              <li>
                <Link
                  href="#acompanhe"
                  className="block py-2 hover:text-[#d4af37] transition-colors"
                  onClick={handleLinkClick}
                >
                  ACOMPANHE SUA OBRA
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
