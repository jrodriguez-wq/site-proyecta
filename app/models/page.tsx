"use client";

import { useMemo } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { ModelCard } from "@/components/models/model-card";
import { models } from "@/lib/data/models";
import { AnimatedSection } from "@/components/ui/animated-section";

// Model main images mapping
const MODEL_MAIN_IMAGES: Record<string, string> = {
  louisiana: `/img/hero/1w5a1489-e5.webp`,
  viana: `/img/hero/1w5a0814-1.webp`,
  delanie: `/img/hero/1w5a1456-e5.webp`,
  aurora: `/img/hero/aurora.webp`,
  langdon: `/img/hero/1w5a1505-e5.webp`,
  emelia: `/img/hero/1w5a0754-e4.webp`,
  duplex: `/img/hero/1w5a1493-e5.webp`,
};

export default function ModelsPage() {
  // Sort models by price
  const sortedModels = useMemo(() => {
    return [...models].sort((a, b) => {
      const priceA = parseInt(a.price.replace(/[^0-9]/g, ""));
      const priceB = parseInt(b.price.replace(/[^0-9]/g, ""));
      return priceA - priceB;
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/30">
      <Navbar />
      <WhatsAppFloat />

      <div className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20">
        <div className="container mx-auto px-4 sm:px-5 md:px-6">
          {/* Header Section */}
          <AnimatedSection delay={0.1}>
            <div className="text-center space-y-4 sm:space-y-5 md:space-y-6 mb-8 sm:mb-10 md:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[rgb(23,46,123)] leading-tight">
                Our Home Models
              </h1>
              <p className="mx-auto max-w-2xl text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed px-4">
                Browse our complete collection of new construction home models. From 2 to 5 bedrooms, find your perfect home.
              </p>
              <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] via-[rgb(180,22,40)]/80 to-[rgb(180,22,40)] rounded-full mx-auto"></div>
            </div>
          </AnimatedSection>

          {/* Models Grid */}
          <AnimatedSection delay={0.15}>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {sortedModels.map((model, index) => {
                const mainImage = MODEL_MAIN_IMAGES[model.key] || `/img/hero/1w5a0754-e4.webp`;
                
                return (
                  <ModelCard
                    key={model.key}
                    modelKey={model.key}
                    name={model.name}
                    description={model.description}
                    image={mainImage}
                    price={model.price}
                    beds={model.bedrooms}
                    baths={model.bathrooms}
                    sqft={model.sqft}
                    garage={model.garage}
                    index={index}
                  />
                );
              })}
            </div>
          </AnimatedSection>

          {/* Results Info */}
          <AnimatedSection delay={0.25}>
            <div className="mt-12 text-center">
              <p className="text-sm sm:text-base text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{sortedModels.length}</span>{" "}
                {sortedModels.length === 1 ? "model" : "models"} available
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground/70 mt-2">
                Sorted by price: Low to High
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <Footer />
    </div>
  );
}
