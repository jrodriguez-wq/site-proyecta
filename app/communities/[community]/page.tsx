"use client";

import { use } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CommunityModelsSection } from "@/components/communities/community-models-section";
import { CommunityPageContent } from "@/components/communities/community-page-content";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { AnimatedSection } from "@/components/ui/animated-section";
import { notFound } from "next/navigation";

// Community data
const labelleImages = [
  "/recursos/shutterstock-1065297917.webp",
  "/recursos/shutterstock-1197062707.webp",
  "/recursos/shutterstock-2252703911.webp",
  "/recursos/shutterstock-440999080.webp",
  "/recursos/rio.webp",
  "/recursos/pai.webp",
  "/recursos/familia-casa.webp",
  "/recursos/orlandof.webp",
];

const lehighAcresImages = [
  "/recursos/shutterstock-1197062707.webp",
  "/recursos/shutterstock-2252703911.webp",
  "/recursos/shutterstock-440999080.webp",
  "/recursos/shutterstock-1065297917.webp",
  "/recursos/playa.webp",
  "/recursos/familia-casa.webp",
  "/recursos/familia-cocina.webp",
  "/recursos/familia-conduciendo.webp",
];

interface CommunityPageProps {
  params: Promise<{
    community: string;
  }>;
}

export default function CommunityPage({ params }: CommunityPageProps) {
  const { community } = use(params);

  if (community === "labelle") {
    const labelleActivities = [
      {
        icon: "Fish",
        title: "Fishing & Water Sports",
        description: "Enjoy world-class fishing in the Caloosahatchee River with direct access to the ocean. Perfect for boating, kayaking, and water activities.",
        image: "/recursos/shutterstock-1197062707.webp",
      },
      {
        icon: "TreePine",
        title: "Outdoor Recreation",
        description: "Explore beautiful nature trails, parks, and outdoor spaces perfect for family activities and weekend adventures.",
        image: "/recursos/orlandof.webp",
      },
      {
        icon: "Sailboat",
        title: "Boating & River Access",
        description: "Direct access to the Caloosahatchee River with easy navigation to the Gulf of Mexico. Perfect for boat owners and water enthusiasts.",
        image: "/recursos/rio.webp",
      },
    ];

    const labelleModels = [
      { key: "louisiana" },
      { key: "viana" },
      { key: "delanie" },
      { key: "aurora" },
      { key: "langdon" },
      { key: "emelia" },
    ];

    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <WhatsAppFloat />

        {/* Hero Section */}
        <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={labelleImages[0]}
              alt="LaBelle, Florida - Beautiful community"
              fill
              className="object-cover"
              priority
              quality={90}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
          </div>

          <div className="relative z-20 w-full h-full flex items-center">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
              <div className="max-w-4xl">
                <motion.div 
                  className="space-y-6 sm:space-y-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <motion.div 
                    className="inline-block"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  >
                    <span className="text-sm font-semibold text-white uppercase tracking-wider px-4 py-2 bg-slate-900/95 backdrop-blur-md rounded-full border border-slate-700/50 shadow-xl">
                      Southwest Florida
                    </span>
                  </motion.div>

                  <motion.h1 
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.9] text-white"
                    style={{
                      textShadow: "0 4px 20px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.7), 0 0 40px rgba(0,0,0,0.5)",
                    }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  >
                    LaBelle
                  </motion.h1>

                  <motion.p 
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 font-medium max-w-3xl leading-relaxed"
                    style={{
                      textShadow: "0 2px 12px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.6)",
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  >
                    Discover Your Dream Home in Southwest Florida
                  </motion.p>

                  <motion.div 
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                  >
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        const modelsSection = document.getElementById("models-section");
                        if (modelsSection) {
                          modelsSection.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }}
                      size="lg"
                      className={cn(
                        "bg-[rgb(180,22,40)] hover:bg-[rgb(144,18,32)] text-white",
                        "px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6",
                        "text-base sm:text-lg font-bold",
                        "shadow-2xl hover:shadow-[rgb(180,22,40)]/40",
                        "transition-all duration-300 ease-out",
                        "hover:scale-105 active:scale-100",
                        "relative overflow-hidden group",
                        "border-2 border-[rgb(180,22,40)]/50"
                      )}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        View Available Models
                      </span>
                      <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>

          <ScrollIndicator 
            onClick={() => {
              const modelsSection = document.getElementById("models-section");
              if (modelsSection) {
                modelsSection.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          />

          <div className="absolute bottom-0 left-0 right-0 h-40 sm:h-48 md:h-56 bg-gradient-to-t from-white via-white/40 to-transparent z-10 pointer-events-none" />
        </section>

        <AnimatedSection delay={0.1}>
          <CommunityPageContent
            aboutTitle="About LaBelle"
            aboutDescription="LaBelle is located 2 hours from major cities: Miami, Tampa, and Orlando. Just 40 minutes from Fort Myers International Airport and 40 minutes from Southwest Florida beaches. 1 hour 30 minutes from Fort Lauderdale International Airport. Direct access to the Caloosahatchee River with access to the ocean."
            activitiesTitle="Family-Friendly Activities"
            activities={labelleActivities}
            features={[
              { icon: "Square", label: "1/4 Acre Lots" },
              { icon: "Home", label: "No HOA Fees" },
              { icon: "Car", label: "Family-Friendly" },
            ]}
            futureTitle="The Future of Florida"
            futureDescription="LaBelle represents the perfect balance between small-town charm and modern convenience. With its strategic location and natural beauty, it's the ideal place to build your family's future."
            scheduleTitle="Schedule Your Visit"
            scheduleDescription="Come see our beautiful community and available models. Contact us to schedule your visit today."
            scheduleButton="Contact Us"
            galleryTitle="LaBelle Gallery"
            galleryDescription="Explore the beauty of LaBelle through our photo gallery"
            galleryImages={labelleImages}
            ctaTitle="Ready to Make LaBelle Your Home?"
            ctaDescription="Discover our Rent to Own program and start your journey to homeownership today."
            ctaButton="Learn About Rent to Own"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div id="models-section" className="py-10 md:py-14 lg:py-18">
            <CommunityModelsSection
              modelKeys={labelleModels.map((m) => m.key)}
              title="Available Models in LaBelle"
              subtitle="Choose from our selection of beautiful home models available in LaBelle, Florida"
              community="labelle"
            />
          </div>
        </AnimatedSection>

        <Footer />
      </div>
    );
  }

  if (community === "lehigh-acres") {
    const lehighAcresActivities = [
      {
        icon: "Droplets",
        title: "Beaches & Coastal Access",
        description: "Just 40 minutes from the beautiful beaches of Southwest Florida. Perfect for weekend getaways and family beach days.",
        image: "/recursos/playa.webp",
      },
      {
        icon: "Users",
        title: "Entertainment & Shopping",
        description: "Close to Cape Coral and Fort Myers with access to shopping centers, restaurants, and entertainment venues.",
        image: "/recursos/shutterstock-2252703911.webp",
      },
      {
        icon: "TreePine",
        title: "Nature & Outdoor Living",
        description: "Enjoy the natural beauty of Southwest Florida with parks, nature preserves, and outdoor recreational opportunities.",
        image: "/recursos/familia-conduciendo.webp",
      },
    ];

    const lehighAcresModels = [
      { key: "langdon" },
      { key: "emelia" },
      { key: "delanie" },
      { key: "duplex" },
    ];

    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <WhatsAppFloat />

        {/* Hero Section */}
        <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={lehighAcresImages[0]}
              alt="Lehigh Acres, Florida - Beautiful community"
              fill
              className="object-cover"
              priority
              quality={90}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
          </div>

          <div className="relative z-20 w-full h-full flex items-center">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
              <div className="max-w-4xl">
                <motion.div 
                  className="space-y-6 sm:space-y-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <motion.div 
                    className="inline-block"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  >
                    <span className="text-sm font-semibold text-white uppercase tracking-wider px-4 py-2 bg-slate-900/95 backdrop-blur-md rounded-full border border-slate-700/50 shadow-xl">
                      Southwest Florida
                    </span>
                  </motion.div>

                  <motion.h1 
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.9] text-white"
                    style={{
                      textShadow: "0 4px 20px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.7), 0 0 40px rgba(0,0,0,0.5)",
                    }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  >
                    Lehigh Acres
                  </motion.h1>

                  <motion.p 
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 font-medium max-w-3xl leading-relaxed"
                    style={{
                      textShadow: "0 2px 12px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.6)",
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  >
                    Your Perfect Home Awaits in Southwest Florida
                  </motion.p>

                  <motion.div 
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                  >
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        const modelsSection = document.getElementById("models-section");
                        if (modelsSection) {
                          modelsSection.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }}
                      size="lg"
                      className={cn(
                        "bg-[rgb(180,22,40)] hover:bg-[rgb(144,18,32)] text-white",
                        "px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6",
                        "text-base sm:text-lg font-bold",
                        "shadow-2xl hover:shadow-[rgb(180,22,40)]/40",
                        "transition-all duration-300 ease-out",
                        "hover:scale-105 active:scale-100",
                        "relative overflow-hidden group",
                        "border-2 border-[rgb(180,22,40)]/50"
                      )}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        View Available Models
                      </span>
                      <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>

          <ScrollIndicator 
            onClick={() => {
              const modelsSection = document.getElementById("models-section");
              if (modelsSection) {
                modelsSection.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          />

          <div className="absolute bottom-0 left-0 right-0 h-40 sm:h-48 md:h-56 bg-gradient-to-t from-white via-white/40 to-transparent z-10 pointer-events-none" />
        </section>

        <AnimatedSection delay={0.1}>
          <CommunityPageContent
            aboutTitle="About Lehigh Acres"
            aboutDescription="Lehigh Acres is located 30 minutes from Cape Coral, 2 hours from major cities: Miami, Tampa, and Orlando. Just 40 minutes from Fort Myers International Airport and 40 minutes from Southwest Florida beaches. 1 hour 30 minutes from Fort Lauderdale International Airport. Direct access to the Caloosahatchee River with access to the ocean. 0% flood risk and low cost of living."
            activitiesTitle="Family-Friendly Activities"
            activities={lehighAcresActivities}
            features={[
              { icon: "Square", label: "Spacious Lots" },
              { icon: "Home", label: "Great Schools" },
              { icon: "Car", label: "Prime Location" },
            ]}
            futureTitle="The Future of Florida"
            futureDescription="Lehigh Acres offers the perfect combination of affordability, location, and quality of life. A growing community with excellent opportunities for families."
            scheduleTitle="Schedule Your Visit"
            scheduleDescription="Come see our beautiful community and available models. Contact us to schedule your visit today."
            scheduleButton="Contact Us"
            galleryTitle="Lehigh Acres Gallery"
            galleryDescription="Explore the beauty of Lehigh Acres through our photo gallery"
            galleryImages={lehighAcresImages}
            ctaTitle="Ready to Make Lehigh Acres Your Home?"
            ctaDescription="Discover our Rent to Own program and start your journey to homeownership today."
            ctaButton="Learn About Rent to Own"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div id="models-section" className="py-10 md:py-14 lg:py-18">
            <CommunityModelsSection
              modelKeys={lehighAcresModels.map((m) => m.key)}
              title="Available Models in Lehigh Acres"
              subtitle="Choose from our selection of beautiful home models available in Lehigh Acres, Florida"
              community="lehigh-acres"
            />
          </div>
        </AnimatedSection>

        <Footer />
      </div>
    );
  }

  notFound();
}
