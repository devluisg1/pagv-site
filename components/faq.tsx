'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    id: "1",
    question: "A PAGV trabalha com quais tipos de obra?",
    answer:
      "Atuamos principalmente na gestão completa de obras residenciais de alto luxo. Também atendemos obras comerciais selecionadas e, por meio de uma empresa do grupo, iniciamos uma linha dedicada à incorporação.",
  },
  {
    id: "2",
    question: "Qual é o investimento mínimo para a PAGV assumir uma obra residencial?",
    answer:
      "Trabalhamos com investimento mínimo a partir de R$ 5.000.000. Esse critério garante o nível de estrutura, método e dedicação necessários para o padrão técnico e de acabamento que entregamos.",
  },
  {
    id: "3",
    question: "Como funciona a obra por administração?",
    answer:
      "No modelo por administração, o cliente paga os custos diretos da obra (materiais, mão de obra e terceiros) e a PAGV é remunerada por uma taxa de administração pela gestão completa e coordenação técnica.",
  },
  {
    id: "4",
    question: "Como é a transparência e a prestação de contas (planilha aberta)?",
    answer:
      "Acompanhamos o físico e o financeiro com relatórios periódicos e documentação de apoio (medições, notas e registros), garantindo visibilidade dos custos, decisões e evolução do cronograma ao longo da obra.",
  },
  {
    id: "5",
    question: "A PAGV realiza reformas?",
    answer:
      "Sim, realizamos reformas de alto padrão dentro do nosso escopo de gestão e padrão técnico, mas para garantir segurança, padrão de execução e cumprimento de prazos, atuamos apenas em reformas com o imóvel desocupado.",
  },
  {
    id: "6",
    question: "A PAGV faz projetos de arquitetura e engenharia?",
    answer:
      "Não desenvolvemos projetos. Trabalhamos em parceria com o arquiteto e projetistas do cliente (ou indicamos profissionais alinhados ao padrão da obra) e auxiliamos na compatibilização técnica para evitar incompatibilidades na execução.",
  },
  {
    id: "8",
    question: "Como funciona o acompanhamento e a comunicação durante a obra?",
    answer:
      "Mantemos uma rotina estruturada de comunicação, com reuniões periódicas, relatórios de avanço, controle fotográfico e atualização de custos e cronograma. O cliente tem visibilidade completa e pode acompanhar cada etapa por meio de nossa plataforma de gestão. Assim há previsibilidade, clareza de próximos passos e controle das decisões ao longo da execução.",
  },
  {
    id: "9",
    question: "Qual é o prazo médio para conclusão de um projeto?",
    answer:
      "O prazo varia conforme o escopo, complexidade e decisões do cliente. Em obras residenciais de alto padrão, a gestão completa (do planejamento aos acabamentos) costuma levar entre 12 e 24 meses. Após análise detalhada do projeto, apresentamos um cronograma realista com marcos bem definidos.",
  },
]

export default function FAQ() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 sm:mb-12 md:mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a52] mb-4 text-balance">
              Perguntas Frequentes
            </h2>
            <p className="text-base sm:text-lg text-gray-600 text-pretty">
              Encontre respostas para as dúvidas mais comuns sobre nossos serviços e processos.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border border-gray-200 rounded-lg px-5 sm:px-6 bg-white hover:shadow-md transition-shadow duration-300"
              >
                <AccordionTrigger className="text-base sm:text-lg font-semibold text-[#1e3a52] hover:text-[#a8a9ad] py-4 sm:py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-gray-600 leading-relaxed pb-4 sm:pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 sm:mt-14 p-6 sm:p-8 bg-white rounded-lg border border-gray-200 text-center">
            <p className="text-gray-700 mb-4">
              Não encontrou sua dúvida?
            </p>
            <a
              href="/#contato"
              className="inline-block bg-[#a8a9ad] hover:bg-[#98999c] text-[#1e3a52] font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
