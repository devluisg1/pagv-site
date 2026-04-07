"use client"

import type React from "react"

import { useState } from "react"
import { Phone } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    local: "",
    possuiTerreno: "",
    valorInvestimento: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica de envio do formulário
    console.log("Form submitted:", formData)
  }

  const handleWhatsappClick = () => {
    // Link WhatsApp da PAGV
    window.open("https://wa.me/5519329188859", "_blank")
  }

  return (
    <section id="contato" className="py-12 sm:py-16 md:py-20 bg-[#1e3a52] text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          {/* Coluna esquerda */}
          <div className="space-y-8 sm:space-y-12">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Agende uma conversa de alinhamento
              </h2>
              <p className="text-base sm:text-lg opacity-90">
                Será um prazer agendar uma reunião. Preencha o formulário ou entre em contato.
              </p>
            </div>

            <div className="border-t border-[#6b7a8f]/30 pt-6 sm:pt-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Fale agora com nossa equipe!</h3>
              <button
                onClick={handleWhatsappClick}
                className="bg-[#d4af37] hover:bg-[#c19d2e] text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors flex items-center gap-2 text-base sm:text-lg w-full sm:w-auto justify-center"
              >
                <Phone className="w-5 h-5" />
                Falar no Whatsapp
              </button>
            </div>
          </div>

          {/* Coluna direita - Formulário */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  placeholder="Nome"
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  required
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium mb-2">
                  Whatsapp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  placeholder="Whatsapp com DDD"
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  required
                />
              </div>

              <div>
                <label htmlFor="local" className="block text-sm font-medium mb-2">
                  Local que deseja construir
                </label>
                <input
                  type="text"
                  id="local"
                  value={formData.local}
                  onChange={(e) => setFormData({ ...formData, local: e.target.value })}
                  placeholder="Local que deseja construir"
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  required
                />
              </div>

              <div>
                <label htmlFor="possuiTerreno" className="block text-sm font-medium mb-2">
                  Em que etapa você está?
                </label>
                <select
                  id="possuiTerreno"
                  value={formData.possuiTerreno}
                  onChange={(e) => setFormData({ ...formData, possuiTerreno: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d4af37] appearance-none cursor-pointer"
                  required
                >
                  <option value="">Selecione</option>
                  <option value="terreno">Terreno</option>
                  <option value="projeto">Projeto</option>
                  <option value="aprovação">Aprovação</option>
                </select>
              </div>

              <div>
                <label htmlFor="valorInvestimento" className="block text-sm font-medium mb-2">
                  Faixa de investimento estimada?
                </label>
                <select
                  id="valorInvestimento"
                  value={formData.valorInvestimento}
                  onChange={(e) => setFormData({ ...formData, valorInvestimento: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d4af37] appearance-none cursor-pointer"
                  required
                >
                  <option value="">Selecione</option>
                  <option value="ate-500k">Até R$ 500.000</option>
                  <option value="500k-1m">De R$ 500.000 a R$ 1.000.000</option>
                  <option value="1m-2m">De R$ 1.000.000 a R$ 2.000.000</option>
                  <option value="acima-2m">Acima de R$ 2.000.000</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#d4af37] hover:bg-[#c19d2e] text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors text-base sm:text-lg"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
