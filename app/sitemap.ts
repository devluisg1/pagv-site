import type { MetadataRoute } from "next"
import { projects } from "@/lib/projects"

const BASE = "https://www.pagv.com.br"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/servicos/construcoes-residenciais",
    "/servicos/construcoes-comerciais-industriais",
    "/servicos/gerenciamento-de-obras",
    "/servicos/incorporacao-construcao-edificios",
    "/politica-privacidade",
  ].map(path => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }))

  const portfolioPages = projects.map(p => ({
    url: `${BASE}/portfolio/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticPages, ...portfolioPages]
}
