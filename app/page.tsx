import Brand from "@/components/brand";
import Contact from "@/components/call-to-action";
import AboutUs from "@/components/community";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import WhyChooseUs from "@/components/learning-resources";
import CompanyValues from "@/components/testimonials";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {/* <ReactLenis root> */}
      <main className="flex-1">
        <Hero />
        <Brand />
        <AboutUs />
        <Features />
        <WhyChooseUs />
        <div className="bg-gradient-to-br from-slate-50/90 via-white/95 to-blue-50/90 dark:from-slate-900/90 dark:via-slate-800/95 dark:to-blue-900/90">
          <CompanyValues />
          <Contact />
          <Footer />
        </div>
      </main>
      {/* </ReactLenis> */}
    </div>
  );
}
