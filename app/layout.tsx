import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
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
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
