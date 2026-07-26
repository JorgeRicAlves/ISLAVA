import { Hero } from '../components/Hero'
import { ProductsSection } from '../components/ProductsSection'
import { BenefitsSection } from '../components/BenefitsSection'
import { GallerySection } from '../components/GallerySection'
import { AboutSection } from '../components/AboutSection'
import { FAQSection } from '../components/FAQSection'
import { ContactSection } from '../components/ContactSection'

export function HomePage() {
  return (
    <main className="relative bg-background">
      <Hero />
      <ProductsSection />
      <BenefitsSection />
      <GallerySection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
    </main>
  )
}
