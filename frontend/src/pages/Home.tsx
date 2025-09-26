import Hero from '../components/Hero'
import FeaturedLogos from '../components/FeaturedLogos'
import ServicesGrid from '../components/ServicesGrid'
import About from '../components/About'
import SolutionsSection from '../components/SolutionsSection'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import CTASection from '../components/CTASection'
import WhatsAppButton from '../components/WhatsAppButton'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Logos */}
      <FeaturedLogos />
      
      {/* Services Section */}
      <ServicesGrid />
      
      {/* About Section */}
      <About />
      
      {/* Solutions Section */}
      <SolutionsSection />
      
      {/* Portfolio Section */}
      <Portfolio />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Call-to-Action Section */}
      <CTASection />
      
      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}

export default Home