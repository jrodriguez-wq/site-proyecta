"use client";

import { Navbar } from "@/components/navbar";
import { HeroSlider } from "@/components/hero-slider";
import { InfiniteTextCarousel } from "@/components/infinite-text-carousel";
import { HappyFamiliesGallery } from "@/components/happy-families-gallery";
import { HomeModels } from "@/components/home-models";
import { Features } from "@/components/features";
import { CommunitiesShowcase } from "@/components/communities-showcase";
import { WhyChooseUs } from "@/components/why-choose-us";
import { AboutUs } from "@/components/about-us";
import { Statistics } from "@/components/statistics";
import { Testimonials } from "@/components/testimonials";
import { HowItWorks } from "@/components/how-it-works";
import { LocationMap } from "@/components/location-map";
import { CTASection } from "@/components/cta-section";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  return (
    <div className="flex flex-col w-full max-w-full min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <WhatsAppFloat />

      {/* 1. Hero Section - First impression with call to action */}
      <div id="inicio" className="pt-16 sm:pt-20">
        <HeroSlider />
      </div>

      {/* 2. Infinite Text Carousel - Brand message right after hero */}
      <AnimatedSection delay={50}>
        <InfiniteTextCarousel />
      </AnimatedSection>

      {/* 3. Happy Families Gallery - Real families, real trust (builds confidence) */}
      <AnimatedSection delay={100}>
      <HappyFamiliesGallery />
      </AnimatedSection>

      {/* 4. Home Models - Showcase available models immediately (main product) */}
      <AnimatedSection delay={150}>
        <HomeModels />
      </AnimatedSection>

      {/* 5. Features - Key benefits and what we offer */}
      <AnimatedSection delay={200}>
        <Features />
      </AnimatedSection>

      {/* 6. Communities Showcase - Where we build (locations) */}
      <AnimatedSection delay={100}>
        <CommunitiesShowcase />
      </AnimatedSection>

      {/* 7. About Us - Company information and team */}
      <AnimatedSection delay={150}>
        <AboutUs />
      </AnimatedSection>

      {/* 8. Why Choose Us - Trust and credibility building */}
      <AnimatedSection delay={200}>
        <WhyChooseUs />
      </AnimatedSection>

      {/* 9. Statistics - Social proof with numbers and achievements */}
      <AnimatedSection delay={100}>
        <Statistics />
      </AnimatedSection>

      {/* 10. Testimonials - Customer stories and reviews */}
      <AnimatedSection delay={150}>
        <Testimonials />
      </AnimatedSection>

      {/* 11. How It Works - Process explanation (educational) */}
      <AnimatedSection delay={200}>
        <HowItWorks />
      </AnimatedSection>

      {/* 12. Location Map - Physical presence and contact info */}
      <AnimatedSection delay={100}>
        <LocationMap />
      </AnimatedSection>

      {/* 13. Final CTA - Last call to action before footer */}
      <AnimatedSection delay={150}>
        <CTASection />
      </AnimatedSection>

      {/* 14. Contact Form - Contact form at the end */}
      <AnimatedSection delay={200}>
        <ContactForm />
      </AnimatedSection>

      {/* Footer */}
              <Footer />
    </div>
  );
}
