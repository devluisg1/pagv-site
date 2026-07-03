import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pagv.com.br"),
  title: "PAGV Construção - Expertise, Qualidade e Segurança",
  description:
    "Mais de duas décadas de experiência transformando projetos em realidade. Do residencial ao industrial, entregamos excelência e tranquilidade.",
  generator: "v0.app",
  icons: {
    icon: "/logo-pagv.png",
    apple: "/logo-pagv.png",
  },
  openGraph: {
    title: "PAGV Construção - Expertise, Qualidade e Segurança",
    description:
      "Mais de duas décadas de experiência transformando projetos em realidade. Do residencial ao industrial, entregamos excelência e tranquilidade.",
    images: [
      {
        url: "/logo-pagv.png",
        width: 400,
        height: 200,
        alt: "PAGV Logo",
      },
    ],
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary",
    title: "PAGV Construção - Expertise, Qualidade e Segurança",
    description:
      "Mais de duas décadas de experiência transformando projetos em realidade. Do residencial ao industrial, entregamos excelência e tranquilidade.",
    images: ["/logo-pagv.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`font-sans antialiased overflow-x-hidden`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W2C29JSJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Analytics />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W2C29JSJ');`,
          }}
        />
      </body>
    </html>
  )
}
