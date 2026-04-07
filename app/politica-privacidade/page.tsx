import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidade - PAGV Construção",
  description:
    "Conheça nossa política de privacidade e como protegemos seus dados pessoais na PAGV Construção.",
}

export default function PoliticaPrivacidade() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1e3a52] to-[#2d5271] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Privacidade</h1>
          <p className="text-lg text-gray-200">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            {/* Introdução */}
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a52] mb-4">1. Introdução</h2>
              <p className="text-gray-700 leading-relaxed">
                A PAGV Construção ("nós", "nosso" ou "Empresa") está comprometida com a proteção e o respeito à
                privacidade dos dados pessoais de nossos clientes, parceiros e visitantes do website. Esta Política de
                Privacidade descreve como coletamos, usamos, armazenamos e compartilhamos seus dados pessoais.
              </p>
            </div>

            {/* Coleta de Dados */}
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a52] mb-4">2. Coleta de Dados Pessoais</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Coletamos informações que você nos fornece voluntariamente, tais como:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Nome completo</li>
                <li>Endereço de email e telefone</li>
                <li>Endereço residencial ou comercial</li>
                <li>Informações sobre projetos de construção</li>
                <li>Dados de pagamento e faturamento</li>
                <li>Dados coletados automaticamente através de tecnologias de rastreamento (cookies, pixels, etc.)</li>
              </ul>
            </div>

            {/* Uso de Dados */}
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a52] mb-4">3. Como Usamos seus Dados</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Utilizamos os dados pessoais coletados para:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Prestar serviços de construção e gerenciamento de projetos</li>
                <li>Enviar orçamentos, propostas e documentações técnicas</li>
                <li>Comunicação sobre o status de seu projeto</li>
                <li>Atender requisições de informações e suporte ao cliente</li>
                <li>Melhorar nossos serviços e experiência do usuário</li>
                <li>Cumprir obrigações legais e regulatórias</li>
                <li>Prevenir fraudes e garantir a segurança dos dados</li>
              </ul>
            </div>

            {/* Base Legal */}
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a52] mb-4">4. Base Legal para o Processamento</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Processamos seus dados pessoais com base nas seguintes justificativas legais:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Seu consentimento explícito</li>
                <li>Execução de contrato com você</li>
                <li>Cumprimento de obrigação legal</li>
                <li>Proteção de interesses vitais</li>
                <li>Interesse legítimo da Empresa</li>
              </ul>
            </div>

            {/* Compartilhamento de Dados */}
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a52] mb-4">5. Compartilhamento de Dados</h2>
              <p className="text-gray-700 leading-relaxed">
                Seus dados pessoais podem ser compartilhados com terceiros apenas quando necessário e apropriado, tais
                como: subcontratados, fornecedores especializados, órgãos governamentais (quando exigido por lei) e
                parceiros comerciais envolvidos na execução de serviços. Todos os terceiros são obrigados a manter a
                confidencialidade e segurança dos dados.
              </p>
            </div>

            {/* Segurança de Dados */}
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a52] mb-4">6. Segurança dos Dados</h2>
              <p className="text-gray-700 leading-relaxed">
                Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados pessoais contra
                acesso, alteração, destruição ou divulgação não autorizados. Isso inclui criptografia, firewalls,
                senhas seguras e controles de acesso restrito. Porém, nenhuma transmissão de dados pela internet é
                100% segura, então você o faz por sua conta e risco.
              </p>
            </div>

            {/* Retenção de Dados */}
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a52] mb-4">7. Retenção de Dados</h2>
              <p className="text-gray-700 leading-relaxed">
                Retemos seus dados pessoais pelo tempo necessário para fornecer os serviços e cumprir as obrigações
                legais. Após esse período, os dados serão deletados ou anonimizados, a menos que a retenção seja
                exigida por lei ou regulamentação.
              </p>
            </div>

            {/* Direitos do Usuário */}
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a52] mb-4">8. Seus Direitos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Você tem o direito de exercer os seguintes direitos sobre seus dados pessoais:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Acessar seus dados pessoais</li>
                <li>Retificar dados imprecisos</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Limitar o processamento de seus dados</li>
                <li>Objetal ao processamento</li>
                <li>Portabilidade de dados</li>
                <li>Revogar consentimento a qualquer momento</li>
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a52] mb-4">9. Cookies e Tecnologias de Rastreamento</h2>
              <p className="text-gray-700 leading-relaxed">
                Nosso website utiliza cookies e outras tecnologias de rastreamento para melhorar sua experiência de
                navegação, personalizar conteúdo e analisar o uso do site. Você pode configurar seu navegador para
                bloquear cookies, porém isso pode afetar a funcionalidade do website. Ao continuar usando nosso site,
                você aceita o uso de cookies conforme descrito nesta política.
              </p>
            </div>

            {/* Links Externos */}
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a52] mb-4">10. Links para Sites Externos</h2>
              <p className="text-gray-700 leading-relaxed">
                Nosso website pode conter links para sites externos. Não somos responsáveis pelas práticas de
                privacidade desses sites. Recomendamos que você leia as políticas de privacidade de qualquer site
                externo antes de fornecer seus dados pessoais.
              </p>
            </div>

            {/* LGPD */}
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a52] mb-4">11. Lei Geral de Proteção de Dados (LGPD)</h2>
              <p className="text-gray-700 leading-relaxed">
                Estamos em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) do Brasil.
                Todos os dados pessoais são processados de acordo com os princípios e diretrizes estabelecidos pela
                LGPD, garantindo direitos e proteção aos titulares de dados.
              </p>
            </div>

            {/* Mudanças na Política */}
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a52] mb-4">12. Mudanças nesta Política</h2>
              <p className="text-gray-700 leading-relaxed">
                Reservamo-nos o direito de atualizar esta Política de Privacidade a qualquer momento. Mudanças
                significativas serão comunicadas através de email ou aviso destacado no website. O uso continuado de
                nossos serviços após as alterações indica sua aceitação da Política revisada.
              </p>
            </div>

            {/* Contato */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h2 className="text-3xl font-bold text-[#1e3a52] mb-4">13. Entre em Contato</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como lidamos com seus dados
                pessoais, entre em contato conosco:
              </p>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>PAGV Construção</strong>
                  <br />
                  R. Dona Carolina Prado Penteado, 45
                  <br />
                  Nova Campinas, Campinas - SP
                  <br />
                  CNPJ: 27.950.943/0001-31
                </p>
                <p>
                  <strong>Telefone:</strong> (19) 3291-8859
                  <br />
                  <strong>Email:</strong> pagv@pagv.com.br
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
