import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { PricingComparisonSection } from "@/components/pricing-comparison-section"
import { ReviewsSection } from "@/components/reviews-section"
import { DemoSection } from "@/components/demo-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <PricingComparisonSection />
      <ReviewsSection />
      <DemoSection />
      <CTASection />
      <Footer />
    </main>
  )
}
