import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import AboutUs from "@/components/community"
import WhyChooseUs from "@/components/learning-resources"
import CompanyValues from "@/components/testimonials"
import Contact from "@/components/call-to-action"
import Footer from "@/components/footer"
import { ReactLenis, useLenis } from 'lenis/react'
import Brand from "@/components/brand"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <ReactLenis root>
      <main className="flex-1">
        <Hero />
        <Brand />
        <AboutUs />
        <Features />
        <WhyChooseUs />
        <CompanyValues />
        <Contact />
      </main>
      </ReactLenis>
      <Footer />
    </div>
  )
}
