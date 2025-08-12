import Hero from "@/components/Hero"
import FeaturedServices from "@/components/FeaturedServices"
import Testimonials from "@/components/Testimonials"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <FeaturedServices />
      <Testimonials />
      <Footer />
    </main>
  )
}
