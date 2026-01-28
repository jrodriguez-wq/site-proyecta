"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { Mail, Phone, User, MessageSquare } from "lucide-react";
import { RTOGallery } from "@/components/rent-to-own/rto-gallery";
import { 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Shield,
  PiggyBank,
  TrendingUp,
  Lock,
  FileCheck,
  Handshake,
  Key,
  Bed,
  Bath,
  Square,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedCard } from "@/components/ui/animated-card";
import { models } from "@/lib/data/models";

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

// RTO prices (approximate - can be updated)
const RTO_PRICES: Record<string, string> = {
  louisiana: "$3,200/month",
  viana: "$2,900/month",
  delanie: "$2,800/month",
  aurora: "$2,700/month",
  langdon: "$2,900/month",
  emelia: "$2,800/month",
};

const phone = "(239) 247-3557";
const phoneClean = phone.replace(/[^0-9]/g, "");

export default function RentToOwnPage() {
  const [selectedCommunity, setSelectedCommunity] = useState<"all" | "labelle" | "lehigh-acres">("all");

  // Scroll to form when hash is present
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    if (window.location.hash === '#rto-application-form') {
      setTimeout(() => {
        const formSection = document.getElementById('rto-application-form');
        if (formSection) {
          formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }

    window.addEventListener('hashchange', () => {
      if (window.location.hash === '#rto-application-form') {
        setTimeout(() => {
          const formSection = document.getElementById('rto-application-form');
          if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    });

    return () => {
      window.removeEventListener('hashchange', () => {});
    };
  }, []);

  // Filter models based on community (simplified - all models available in both communities)
  const availableModels = models.filter(model => model.key !== 'duplex'); // Exclude duplex from RTO

  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/hero/1w5a0754-e4.webp"
            alt="Rent to Own Program - Proyecta Business Group"
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
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <motion.div 
                  className="inline-block"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                >
                  <span className="text-sm font-semibold text-white uppercase tracking-wider px-4 py-2 bg-slate-900/95 backdrop-blur-md rounded-full border border-slate-700/50 shadow-xl">
                    <Sparkles className="inline h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2" />
                    Rent to Own Program
                  </span>
                </motion.div>

                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.9] text-white"
                  style={{
                    textShadow: "0 4px 20px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.7), 0 0 40px rgba(0,0,0,0.5)",
                  }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                >
                  Rent to Own
                </motion.h1>

                <motion.p 
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 font-medium max-w-3xl leading-relaxed"
                  style={{
                    textShadow: "0 2px 12px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.6)",
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                >
                  An exclusive program designed to help YOU become a homeowner.
                </motion.p>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
                >
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      const modelsSection = document.getElementById("available-models");
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
                      "transition-all duration-200 ease-out",
                      "hover:scale-105 active:scale-100",
                      "relative overflow-hidden group",
                      "border-2 border-[rgb(180,22,40)]/50"
                    )}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      View Available Models
                    </span>
                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  </Button>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      const formSection = document.getElementById("rto-application-form");
                      if (formSection) {
                        formSection.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                    variant="outline"
                    size="lg"
                    className={cn(
                      "bg-white/10 backdrop-blur-md border-2 border-white/40 text-white",
                      "px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6",
                      "text-base sm:text-lg font-bold",
                      "hover:bg-white/20 hover:border-white/60",
                      "shadow-xl hover:shadow-2xl",
                      "transition-all duration-200 ease-out",
                      "hover:scale-105 active:scale-100"
                    )}
                  >
                    <span className="flex items-center gap-2">
                      Get Pre Qualified
                    </span>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 sm:h-48 md:h-56 bg-gradient-to-t from-background via-background/40 to-transparent z-10 pointer-events-none" />
      </section>

      {/* Main Description Section */}
      <AnimatedSection delay={0.1}>
        <section className="py-10 md:py-14 lg:py-18 bg-background">
          <div className="container mx-auto px-4 sm:px-5 md:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className="relative h-72 sm:h-80 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-2 border-[rgb(180,22,40)]/20">
                  <Image
                    src="/img/hero/1w5a1456-e5.webp"
                    alt="New home - Rent to Own"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <div className="space-y-3 sm:space-y-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-tight">
                      What is Rent to Own?
                    </h2>
                    <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] via-[rgb(180,22,40)]/80 to-[rgb(180,22,40)] rounded-full"></div>
                  </div>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Our Rent-to-Own Program is designed to turn your goal of homeownership into reality—without the common obstacles that hold buyers back. Credit challenges, down payment concerns, or closing costs do not have to stop you. With this program, you rent your future home at a fixed monthly rate, while automatically saving toward your down payment and closing costs, which are credited back to you at purchase. The home price is locked in from day one, eliminating surprises and rent increases, and you will receive professional guidance throughout the process, plus complimentary lawn care twice per month. It is a simple, secure, and smart path from renting to owning your dream home.
                  </p>
                  <Card className="border-2 border-[rgb(180,22,40)]/20 shadow-xl bg-gradient-to-br from-[rgb(180,22,40)]/10 via-[rgb(180,22,40)]/5 to-background">
                    <CardContent className="p-4 sm:p-5 md:p-6 lg:p-8">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="p-2.5 sm:p-3 md:p-4 bg-[rgb(180,22,40)]/20 rounded-xl sm:rounded-2xl shrink-0">
                          <PiggyBank className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-[rgb(180,22,40)]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-2 sm:mb-3 leading-tight">Program Objective</h3>
                          <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed">Help families save while living in a new home, accumulating funds that they can later use as part of the purchase process for their future purchase.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Key Features Section */}
      <AnimatedSection delay={0.1} direction="fade">
        <section className="py-10 md:py-14 lg:py-18 bg-[rgb(12,25,65)] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[rgb(180,22,40)] rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[rgb(180,22,40)] rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-5 md:px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-10 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                  Key Program Features
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto px-4 leading-relaxed">
                  Benefits designed to help you achieve your dream of homeownership
                </p>
                <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] via-[rgb(180,22,40)]/80 to-[rgb(180,22,40)] rounded-full mx-auto"></div>
              </div>

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Starting Rent", description: "Starting $2,700 USD monthly. The price may vary depending on the model and location.", icon: TrendingUp },
                  { title: "Monthly Savings", description: "Have a personalized plan designed to help you save money, from your rent, while living in your new home.", icon: PiggyBank },
                  { title: "Pay what you Sign", description: "We will freeze your property purchase price and payments for up to 5 years.", icon: Lock },
                  { title: "Warranty Included", description: "Includes free warranty and landscaping.", icon: Shield },
                  { title: "Pets Allowed", description: "Pets are more than welcomed.", icon: CheckCircle2 },
                  { title: "No Credit Check", description: "No credit required for our program", icon: FileCheck },
                ].map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={index} className="border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:border-[rgb(180,22,40)]/50 hover:bg-white/15 hover:shadow-xl transition-all duration-200 hover:-translate-y-2 group">
                      <CardContent className="pt-4 sm:pt-5 md:pt-6 p-4 sm:p-5 md:p-6">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="p-2 sm:p-2.5 md:p-3 bg-[rgb(180,22,40)]/20 rounded-lg sm:rounded-xl shrink-0 group-hover:bg-[rgb(180,22,40)]/30 group-hover:scale-110 transition-all duration-200">
                            <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[rgb(180,22,40)]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 text-white leading-tight">{feature.title}</h3>
                            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* RTO Gallery Section */}
      <RTOGallery />

      {/* Pioneers & Savings Section */}
      <AnimatedSection delay={0.1}>
        <section className="py-10 md:py-14 lg:py-18 bg-[rgb(12,25,65)] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[rgb(180,22,40)] rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgb(180,22,40)] rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[rgb(180,22,40)]/20 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-5 md:px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <div className="inline-block">
                    <span className="text-xs sm:text-sm md:text-base font-semibold text-[rgb(180,22,40)] uppercase tracking-wider px-3 sm:px-4 py-1.5 sm:py-2 bg-[rgb(180,22,40)]/10 rounded-full border border-[rgb(180,22,40)]/20">
                      Expert in Rent to Own
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white leading-tight">
                    Extensive Experience in Rent to Own
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed">
                    Proyecta Business Group has extensive experience in the Rent to Own program, helping families achieve their dream of homeownership.
                  </p>
                </div>

                <Card className="border-2 border-white/20 bg-white/10 backdrop-blur-sm shadow-2xl hover:shadow-[rgb(180,22,40)]/20 transition-all duration-200">
                  <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10">
                    <div className="space-y-4 sm:space-y-5 md:space-y-6">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="p-2.5 sm:p-3 md:p-4 bg-[rgb(180,22,40)]/20 rounded-xl sm:rounded-2xl shrink-0">
                          <PiggyBank className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-[rgb(180,22,40)]" />
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white leading-tight">
                          Save While You Rent
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
                        With our Rent to Own program, you can save money while living in your own home. Build equity and work towards ownership at your own pace.
                      </p>
                      <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4">
                        <div className="text-center p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-colors">
                          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[rgb(180,22,40)] mb-1 sm:mb-2 leading-tight">
                            Flexible
                          </div>
                          <p className="text-[10px] sm:text-xs md:text-sm text-white/70 leading-tight">
                            Plans from 1-5 years
                          </p>
                        </div>
                        <div className="text-center p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-colors">
                          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[rgb(180,22,40)] mb-1 sm:mb-2 leading-tight">
                            Monthly
                          </div>
                          <p className="text-[10px] sm:text-xs md:text-sm text-white/70 leading-tight">
                            Automatic savings
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Available Models Section */}
      <AnimatedSection delay={0.1}>
        <section id="available-models" className="py-10 md:py-14 lg:py-18 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-5 md:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight px-4">
                  Available Models for Rent to Own
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
                  Any model can be Rent to Own. Choose the one that best fits your family
                </p>
                <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] via-[rgb(180,22,40)]/80 to-[rgb(180,22,40)] rounded-full mx-auto"></div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {availableModels.map((model, index) => {
                  const mainImage = MODEL_MAIN_IMAGES[model.key] || `/img/hero/1w5a1489-e5.webp`;
                  const rtoPrice = RTO_PRICES[model.key] || "Contact Us";
                  
                  return (
                    <AnimatedCard key={model.key} index={index}>
                      <Card 
                        className="group border-2 border-border/50 hover:border-[rgb(180,22,40)]/50 hover:shadow-2xl transition-all duration-200 overflow-hidden bg-background relative py-0 h-full"
                      >
                        <div className="relative h-64 sm:h-72 overflow-hidden bg-muted">
                          <Image
                            src={mainImage}
                            alt={model.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent"></div>
                          <div className="absolute top-4 right-4 z-10">
                            <span className="px-3 py-1.5 bg-slate-900/95 backdrop-blur-md text-white text-xs font-bold rounded-full border border-slate-700/50 shadow-xl">
                              RTO Available
                            </span>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl md:text-2xl font-black mb-2 group-hover:text-[rgb(180,22,40)] transition-colors duration-150">
                            {model.name}
                          </h3>
                          <p className="text-sm md:text-base text-muted-foreground mb-5 line-clamp-2 leading-relaxed">
                            {model.description}
                          </p>
                          <div className="grid grid-cols-3 gap-2 mb-5 pb-5 border-b border-border/50">
                            <div className="text-center p-2.5 rounded-xl bg-muted/50 hover:bg-muted transition-colors duration-150">
                              <Bed className="h-4 w-4 text-[rgb(180,22,40)] mx-auto mb-1" />
                              <p className="text-[10px] text-muted-foreground mb-0.5">Beds</p>
                              <p className="font-black text-sm">{model.bedrooms}</p>
                            </div>
                            <div className="text-center p-2.5 rounded-xl bg-muted/50 hover:bg-muted transition-colors duration-150">
                              <Bath className="h-4 w-4 text-[rgb(180,22,40)] mx-auto mb-1" />
                              <p className="text-[10px] text-muted-foreground mb-0.5">Baths</p>
                              <p className="font-black text-sm">{model.bathrooms}</p>
                            </div>
                            <div className="text-center p-2.5 rounded-xl bg-muted/50 hover:bg-muted transition-colors duration-150">
                              <Square className="h-4 w-4 text-[rgb(180,22,40)] mx-auto mb-1" />
                              <p className="text-[10px] text-muted-foreground mb-0.5">Sq Ft</p>
                              <p className="font-black text-xs">{model.sqft}</p>
                            </div>
                          </div>
                          {/* RTO Price - Prominent Display */}
                          <div className="mb-5 pb-5 border-b border-border/50">
                            <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-xl p-4 border border-emerald-200/50 dark:border-emerald-800/50">
                              <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-semibold">
                                RTO Price
                              </p>
                              <p className="text-2xl md:text-3xl font-black text-emerald-700 dark:text-emerald-400 mb-1">
                                {rtoPrice}
                              </p>
                              {model.price && (
                                <p className="text-xs text-muted-foreground line-through opacity-60">
                                  Starting from {model.price}
                                </p>
                              )}
                            </div>
                          </div>
                          <Button 
                            asChild 
                            className="w-full bg-[rgb(180,22,40)] hover:bg-[rgb(144,18,32)] text-white hover:shadow-xl hover:shadow-[rgb(180,22,40)]/30 transition-all duration-200 group/btn"
                          >
                            <Link href={`/models/${model.key}`} className="flex items-center justify-center gap-2">
                              View Details
                              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-150" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </AnimatedCard>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Requirements Section */}
      <AnimatedSection delay={0.1}>
        <section className="py-10 md:py-14 lg:py-18 bg-background">
          <div className="container mx-auto px-4 sm:px-5 md:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-12">
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <div className="space-y-3 sm:space-y-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                      Application Requirements
                    </h2>
                    <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] via-[rgb(180,22,40)]/80 to-[rgb(180,22,40)] rounded-full"></div>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                    Simple and accessible requirements to qualify
                  </p>
                </div>
                <div className="relative h-72 sm:h-80 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-2 border-[rgb(180,22,40)]/20">
                  <Image
                    src="/img/hero/1w5a1493-e5.webp"
                    alt="Rent to Own requirements"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {[
                  { title: "Minimum Income", description: "Family or individual income of at least $6,000 USD monthly. Remember that you can calculate your income with your bank statements (bank account statements), cash, and commercial references.", icon: TrendingUp },
                  { title: "No Eviction History", description: "No history of evictions.", icon: Shield },
                  { title: "Immigration Status", description: "Be a citizen, resident, have a valid work permit, or have an ITIN.", icon: FileCheck },
                ].map((req, index) => {
                  const Icon = req.icon;
                  return (
                    <Card key={index} className="border-2 border-border/50 hover:border-[rgb(180,22,40)]/50 hover:shadow-xl transition-all duration-200 hover:-translate-y-2 group bg-background">
                      <CardHeader className="pb-3 sm:pb-4">
                        <CardTitle className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg md:text-xl font-black leading-tight">
                          <div className="p-2 sm:p-2.5 md:p-3 bg-[rgb(180,22,40)]/10 rounded-lg sm:rounded-xl group-hover:bg-[rgb(180,22,40)]/20 group-hover:scale-110 transition-all duration-200 shrink-0">
                            <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[rgb(180,22,40)]" />
                          </div>
                          <span className="min-w-0">{req.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">{req.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Documents Section */}
      <AnimatedSection delay={0.1} direction="fade">
        <section className="py-10 md:py-14 lg:py-18 bg-[rgb(12,25,65)] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[rgb(180,22,40)] rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgb(180,22,40)] rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-5 md:px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-10 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight px-4">
                  Required Documentation
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto px-4 leading-relaxed">
                  Simple and easy-to-obtain documents
                </p>
                <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] via-[rgb(180,22,40)]/80 to-[rgb(180,22,40)] rounded-full mx-auto"></div>
              </div>

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { name: "Taxes from the last 2 years", description: "W2 or 1099", icon: FileText },
                  { name: "Pay Stubs", description: "Last 30 days", icon: FileCheck },
                  { name: "Bank Account Statements", description: "Last 60 days", icon: FileText },
                  { name: "Driver's License or ID", description: "Valid identification", icon: FileCheck },
                ].map((doc, index) => {
                  const Icon = doc.icon;
                  return (
                    <Card key={index} className="border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:border-[rgb(180,22,40)]/50 hover:bg-white/15 hover:shadow-xl transition-all duration-200 hover:-translate-y-2 group">
                      <CardContent className="pt-4 sm:pt-5 md:pt-6 p-4 sm:p-5 md:p-6">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="p-2 sm:p-2.5 md:p-3 bg-[rgb(180,22,40)]/20 rounded-lg sm:rounded-xl shrink-0 group-hover:bg-[rgb(180,22,40)]/30 group-hover:scale-110 transition-all duration-200">
                            <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[rgb(180,22,40)]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold mb-1 sm:mb-2 text-sm sm:text-base md:text-lg text-white leading-tight">{doc.name}</p>
                            <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed">{doc.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Process Steps Section */}
      <AnimatedSection delay={0.1}>
        <section className="py-10 md:py-14 lg:py-18 bg-background">
          <div className="container mx-auto px-4 sm:px-5 md:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-12">
                <div className="relative h-72 sm:h-80 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-2 border-[rgb(180,22,40)]/20 order-2 md:order-1">
                  <Image
                    src="/img/hero/1w5a1505-e5.webp"
                    alt="Rent to Own application process"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="space-y-4 sm:space-y-5 md:space-y-6 order-1 md:order-2">
                  <div className="space-y-3 sm:space-y-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                      Application Process
                    </h2>
                    <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] via-[rgb(180,22,40)]/80 to-[rgb(180,22,40)] rounded-full"></div>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                    Simple steps to begin your path to homeownership
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
                {[
                  { title: "Submit Documents", description: "Submit the required documents to begin your application.", icon: FileText, step: 1 },
                  { title: "Complete Application", description: "Complete the RTO application ($50 per applicant).", icon: FileCheck, step: 2 },
                  { title: "Interview and Review", description: "Interview and document review by our team.", icon: Handshake, step: 3 },
                  { title: "Sign Contract", description: "Sign the contract and pay the deposit.", icon: FileText, step: 4 },
                  { title: "Move-in", description: "Choose the move-in date and start living in your new home!", icon: Key, step: 5 },
                ].map((step) => {
                  const Icon = step.icon;
                  return (
                    <Card key={step.step} className="border-2 border-border/50 hover:border-[rgb(180,22,40)]/50 hover:shadow-xl transition-all duration-200 hover:-translate-y-2 group bg-background">
                      <CardContent className="pt-4 sm:pt-5 md:pt-6 p-4 sm:p-5 md:p-6">
                        <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                          <div className="relative">
                            <div className="p-2.5 sm:p-3 md:p-4 bg-[rgb(180,22,40)]/10 rounded-xl sm:rounded-2xl group-hover:bg-[rgb(180,22,40)]/20 group-hover:scale-110 transition-all duration-200">
                              <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[rgb(180,22,40)]" />
                            </div>
                            <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-[rgb(180,22,40)] text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-black shadow-lg">
                              {step.step}
                            </div>
                          </div>
                          <div className="space-y-1.5 sm:space-y-2">
                            <h3 className="text-sm sm:text-base md:text-lg font-black leading-tight">{step.title}</h3>
                            <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Benefits Highlight Section */}
      <AnimatedSection delay={0.1}>
        <section className="py-10 md:py-14 lg:py-18 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-5 md:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
                <Card className="border-2 border-[rgb(180,22,40)]/20 shadow-2xl bg-gradient-to-br from-[rgb(180,22,40)]/10 via-[rgb(180,22,40)]/5 to-background overflow-hidden relative hover:shadow-[rgb(180,22,40)]/20 transition-all duration-200">
                  <CardContent className="pt-6 sm:pt-8 md:pt-10 lg:pt-12 p-4 sm:p-6 md:p-8 lg:p-10">
                    <div className="space-y-5 sm:space-y-6 md:space-y-8">
                      <div className="space-y-3 sm:space-y-4">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                          Why Choose Our Rent to Own Program?
                        </h2>
                        <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] via-[rgb(180,22,40)]/80 to-[rgb(180,22,40)] rounded-full"></div>
                      </div>
                      <div className="space-y-4 sm:space-y-5 md:space-y-6">
                        {[
                          { title: "Save While You Rent", description: "Part of your rent becomes savings for your future purchase", icon: PiggyBank },
                          { title: "Fixed Prices", description: "Payments and prices frozen for up to 5 years", icon: Lock },
                          { title: "No Credit Check", description: "No credit required", icon: FileCheck },
                        ].map((benefit, index) => {
                          const Icon = benefit.icon;
                          return (
                            <div key={index} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-[rgb(180,22,40)]/5 transition-colors">
                              <div className="p-2.5 sm:p-3 md:p-4 bg-[rgb(180,22,40)]/20 rounded-lg sm:rounded-xl shrink-0">
                                <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-[rgb(180,22,40)]" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="font-black text-base sm:text-lg md:text-xl mb-1 sm:mb-2 leading-tight">{benefit.title}</h3>
                                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                                  {benefit.description}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="relative h-72 sm:h-80 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-2 border-[rgb(180,22,40)]/20">
                  <Image
                    src="/img/hero/aurora.webp"
                    alt="Rent to Own benefits"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Application Form Section */}
      <AnimatedSection delay={0.1} direction="fade">
        <section id="rto-application-form" className="py-12 md:py-16 lg:py-20 bg-background scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-5 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight px-4">
                  Apply for Rent to Own
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
                  Fill out the form below to start your journey to homeownership. Our team will contact you soon.
                </p>
                <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] via-[rgb(180,22,40)]/80 to-[rgb(180,22,40)] rounded-full mx-auto"></div>
              </div>

              <Card className="shadow-2xl border-2 border-[rgb(180,22,40)]/20 bg-gradient-to-br from-background via-background to-[rgb(180,22,40)]/5">
                <CardHeader className="text-center space-y-3 pb-6 p-6 sm:p-8">
                  <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-black">
                    Rent to Own Application
                  </CardTitle>
                  <div className="w-24 h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] via-[rgb(180,22,40)]/80 to-[rgb(180,22,40)] rounded-full mx-auto"></div>
                  <CardDescription className="text-sm sm:text-base md:text-lg pt-2 text-muted-foreground">
                    Complete the form below and we&apos;ll review your application. No credit check required for initial application.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 sm:px-8 md:px-10 pb-8 sm:pb-10">
                  <form className="space-y-6" onSubmit={(e) => {
                    e.preventDefault();
                    // Form submission logic here
                    alert("Thank you! We'll contact you soon.");
                  }}>
                    <div className="space-y-2">
                      <label htmlFor="rto-name" className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <User className="h-4 w-4 text-[rgb(180,22,40)]" />
                        Full Name
                      </label>
                      <input
                        id="rto-name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-[rgb(180,22,40)] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="rto-email" className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <Mail className="h-4 w-4 text-[rgb(180,22,40)]" />
                        Email
                      </label>
                      <input
                        id="rto-email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-[rgb(180,22,40)] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="rto-phone" className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <Phone className="h-4 w-4 text-[rgb(180,22,40)]" />
                        Phone
                      </label>
                      <input
                        id="rto-phone"
                        name="phone"
                        type="tel"
                        placeholder="(123) 456-7890"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-[rgb(180,22,40)] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="rto-interest" className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-[rgb(180,22,40)]" />
                        Tell us about your interest in Rent to Own
                      </label>
                      <textarea
                        id="rto-interest"
                        name="interest"
                        placeholder="I'm interested in the Rent to Own program because..."
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-[rgb(180,22,40)] focus:outline-none transition-colors min-h-[120px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[rgb(180,22,40)] hover:bg-[rgb(144,18,32)] text-white font-bold py-6 text-base sm:text-lg shadow-lg shadow-[rgb(180,22,40)]/25 hover:shadow-xl hover:shadow-[rgb(180,22,40)]/30 transition-all duration-300"
                      size="lg"
                    >
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection delay={0.1} direction="fade">
        <section className="py-12 md:py-16 lg:py-20 bg-[rgb(12,25,65)] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[rgb(180,22,40)] rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[rgb(180,22,40)] rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-5 md:px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              <Card className="border-2 border-white/20 shadow-2xl bg-white/10 backdrop-blur-md relative z-10 hover:bg-white/15 transition-all duration-200">
                <CardContent className="pt-12 md:pt-14 pb-12 md:pb-14 px-6 md:px-10">
                  <div className="text-center space-y-4 sm:space-y-5 md:space-y-6 max-w-3xl mx-auto text-white px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                      Ready to Get Started?
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
                      Contact us today and discover how you can live in your new home while saving for your future purchase
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                      <Button
                        asChild
                        size="lg"
                        className="bg-[rgb(180,22,40)] hover:bg-[rgb(144,18,32)] text-white px-8 py-6 text-base md:text-lg font-black shadow-2xl shadow-[rgb(180,22,40)]/30 hover:shadow-[rgb(180,22,40)]/40 transition-all duration-200 hover:scale-105 relative overflow-hidden group"
                      >
                        <Link href="/contact" className="relative z-10 flex items-center justify-center gap-2">
                          Apply Now
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-150" />
                          <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="border-2 border-white/40 text-white bg-white/10 hover:bg-white/20 hover:border-white/60 hover:text-white px-8 py-6 text-base md:text-lg font-bold backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 relative overflow-hidden group"
                      >
                        <a href={`tel:${phoneClean}`} className="relative z-10 flex items-center justify-center gap-2">
                          Call: {phone}
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  );
}
