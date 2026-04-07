import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import MissionVisionValues from "@/components/mission-vision-values"
import QualityPolicy from "@/components/quality-policy"
import Portfolio from "@/components/portfolio"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import Contact from "@/components/contact"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <QualityPolicy />
        <MissionVisionValues />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
