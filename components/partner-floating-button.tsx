"use client"

import { Handshake } from "lucide-react"

export default function PartnerFloatingButton() {
  const handleClick = () => {
    const mensagem = "Olá! Sou parceiro/fornecedor e tenho interesse em conversar com a PAGV."
    window.open(`https://wa.me/551932918859?text=${encodeURIComponent(mensagem)}`, "_blank")
  }

  return (
    <button
      id="btn-parceiro-flutuante"
      data-cta="parceiro"
      onClick={handleClick}
      aria-label="Seja um parceiro PAGV"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full bg-[#1e3a52] border border-[#d4af37] text-white pl-3 pr-4 py-3 shadow-lg hover:bg-[#d4af37] hover:text-[#1e3a52] transition-colors duration-300"
    >
      <Handshake className="w-5 h-5 flex-shrink-0" />
      <span className="text-sm font-medium hidden sm:inline">Seja um Parceiro</span>
    </button>
  )
}
