import { Star } from "lucide-react"

const testimonials = [
  {
    name: "André Morete",
    text: "Dedicação para fazer com muita excelência",
    rating: 5,
  },
  {
    name: "Fátima M.",
    text: "Para mim a principal qualidade da PAGV que me faz indicá-los é a confiança que eles nos transmitem, nos projetos, nos profissionais e na clareza de orçamentos e de custos.",
    rating: 5,
  },
  {
    name: "Felipe Dias",
    text: "Honestidade, transparência, planilha aberta: Qualidade impecável!",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a52] mb-4 uppercase tracking-wide">
          O que dizem nossos clientes
        </h2>
        <div className="w-16 h-1 bg-[#a8a9ad] mb-12 sm:mb-16"></div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#a8a9ad] text-[#a8a9ad]"
                  />
                ))}
              </div>

              <p className="text-gray-700 font-medium mb-4 text-sm sm:text-base leading-relaxed">
                "{testimonial.text}"
              </p>

              <p className="text-[#1e3a52] font-bold text-sm sm:text-base">
                Cliente: {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
