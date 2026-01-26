"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Home, 
  Shield, 
  DollarSign, 
  Heart, 
  ArrowRight,
  Users,
  Target,
  Quote,
  Award,
  TrendingUp
} from "lucide-react";
import { motion } from "framer-motion";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

const stats = [
  {
    icon: Home,
    value: "100+",
    label: "Homes Built",
    description: "Quality homes delivered to families",
  },
  {
    icon: Users,
    value: "100+",
    label: "Happy Families",
    description: "Families living their American dream",
  },
  {
    icon: Award,
    value: "5",
    label: "Years Experience",
    description: "Building homes in Southwest Florida",
  },
  {
    icon: DollarSign,
    value: "$0",
    label: "Down Payment",
    description: "Homeownership with $0 down payment",
  },
];

const values = [
  {
    icon: Users,
    title: "Team Mentality",
    description: "We believe in the power of collaboration and building strong relationships with our clients, partners, and team members.",
  },
  {
    icon: Heart,
    title: "Win-Win Approach",
    description: "We create solutions that benefit everyone - our clients achieve their dreams while we build a sustainable, ethical business.",
  },
  {
    icon: DollarSign,
    title: "Affordable Housing",
    description: "We're committed to making quality homes accessible to families, offering flexible financing options including our Rent-to-Own program.",
  },
  {
    icon: Shield,
    title: "Ethical Business",
    description: "Transparency, honesty, and integrity guide everything we do. We believe in doing business the right way.",
  },
];

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/recursos/investment.jpg"
            alt="Proyecta Business Group - About Us"
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
                    About Us
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
                  Building Dreams, One Home at a Time
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
                  Your trusted partner for secure and profitable real estate investments in the United States. We help you diversify your wealth in dollars with quality properties and innovative financing solutions.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>

        <ScrollIndicator />

        <div className="absolute bottom-0 left-0 right-0 h-40 sm:h-48 md:h-56 bg-gradient-to-t from-white via-white/40 to-transparent z-10 pointer-events-none" />
      </section>

      {/* Statistics Section */}
      <AnimatedSection delay={0.1}>
        <section className="py-10 md:py-14 lg:py-18 bg-white">
          <div className="container mx-auto px-4 sm:px-5 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-10 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight px-4 text-[rgb(23,46,123)]">
                  Our Numbers Speak for Themselves
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                  The impact we've made in Southwest Florida
                </p>
                <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] via-[rgb(180,22,40)]/80 to-[rgb(180,22,40)] rounded-full mx-auto"></div>
              </div>

              <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="text-center space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-xl bg-gray-50 hover:bg-gray-100 border-2 border-[rgb(23,46,123)]/20 hover:border-[rgb(23,46,123)]/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[rgb(23,46,123)]/20"
                    >
                      <div className="flex justify-center">
                        <div className="p-3 sm:p-4 bg-[rgb(23,46,123)]/20 rounded-full border border-[rgb(23,46,123)]/40 shadow-lg shadow-[rgb(23,46,123)]/20">
                          <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-[rgb(23,46,123)]" />
                        </div>
                      </div>
                      <div className="space-y-1 sm:space-y-2">
                        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[rgb(23,46,123)]">
                          {stat.value}
                        </div>
                        <h3 className="text-base sm:text-lg md:text-xl font-black text-gray-900">{stat.label}</h3>
                        <p className="text-xs sm:text-sm text-gray-600 px-1">{stat.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Our Values Section */}
      <AnimatedSection delay={0.1}>
        <section className="py-10 md:py-14 lg:py-18 bg-[rgb(12,25,65)] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[rgb(180,22,40)] rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[rgb(180,22,40)] rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-5 md:px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-10 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight px-4">
                  Our Core Values
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto px-4 leading-relaxed">
                  The principles that guide everything we do
                </p>
                <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] via-[rgb(180,22,40)]/80 to-[rgb(180,22,40)] rounded-full mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={index}
                      className="border-2 border-white/20 bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 hover:border-[rgb(180,22,40)]/50 hover:bg-white/15 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="p-2 sm:p-2.5 md:p-3 bg-[rgb(180,22,40)]/20 rounded-lg sm:rounded-xl group-hover:bg-[rgb(180,22,40)]/30 group-hover:scale-110 transition-all duration-300 shrink-0">
                          <Icon className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0 space-y-1.5 sm:space-y-2">
                          <h3 className="text-base sm:text-lg md:text-xl font-black text-white leading-tight">{value.title}</h3>
                          <p className="text-sm sm:text-base text-white/80 leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Mission Section */}
      <AnimatedSection delay={0.1}>
        <section className="py-10 md:py-14 lg:py-18 bg-white">
          <div className="container mx-auto px-4 sm:px-5 md:px-6">
            <div className="max-w-6xl mx-auto">
              <Card className="border-2 border-[rgb(23,46,123)]/20 shadow-2xl bg-gradient-to-br from-[rgb(23,46,123)]/10 via-[rgb(23,46,123)]/5 to-white overflow-hidden">
                <div className="p-4 sm:p-6 md:p-8 lg:p-12 space-y-4 sm:space-y-5 md:space-y-6">
                  <div className="text-center space-y-3 sm:space-y-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight px-4 text-[rgb(23,46,123)]">
                      Our Mission
                    </h2>
                    <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] via-[rgb(180,22,40)]/80 to-[rgb(180,22,40)] rounded-full mx-auto"></div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mt-6 sm:mt-8">
                    <Card className="border-2 border-[rgb(23,46,123)]/20 bg-gradient-to-br from-[rgb(23,46,123)]/5 via-white to-white">
                      <div className="p-4 sm:p-5 space-y-2 sm:space-y-3">
                        <h3 className="text-base sm:text-lg font-black flex items-center gap-2 leading-tight">
                          <Award className="h-4 w-4 sm:h-5 sm:w-5 text-[rgb(23,46,123)] shrink-0" />
                          <span className="min-w-0">Our Mission</span>
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                          "We want to make prime-value homes available at an economical rate. We believe in making real estate investment accessible to everyone, helping families and investors build wealth through quality properties."
                        </p>
                      </div>
                    </Card>

                    <Card className="border-2 border-[rgb(23,46,123)]/20 bg-gradient-to-br from-[rgb(23,46,123)]/5 via-white to-white">
                      <div className="p-4 sm:p-5 space-y-2 sm:space-y-3">
                        <h3 className="text-base sm:text-lg font-black flex items-center gap-2 leading-tight">
                          <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-[rgb(23,46,123)] shrink-0" />
                          <span className="min-w-0">Our Vision</span>
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                          "To become the leading real estate investment partner in Southwest Florida, helping families and investors achieve their dreams through quality properties, innovative financing, and exceptional service."
                        </p>
                      </div>
                    </Card>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Call to Action Section */}
      <AnimatedSection delay={0.1}>
        <section className="py-10 md:py-14 lg:py-18 bg-[rgb(12,25,65)] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[rgb(180,22,40)] rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[rgb(180,22,40)] rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-5 md:px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <Card className="border-2 border-white/20 shadow-2xl bg-white/10 backdrop-blur-md">
                <div className="p-4 sm:p-6 md:p-8 lg:p-12 text-center space-y-4 sm:space-y-5 md:space-y-6 max-w-3xl mx-auto">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight px-4">
                    Ready to Start Your Investment Journey?
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 leading-relaxed px-4">
                    Let us guide you through the entire process of investing in real estate in the United States.
                  </p>
                  <div className="pt-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-[rgb(180,22,40)] hover:bg-[rgb(144,18,32)] text-white px-8 py-6 text-base md:text-lg font-black shadow-2xl shadow-[rgb(180,22,40)]/30 hover:shadow-[rgb(180,22,40)]/40 transition-all duration-300 group hover:scale-105"
                    >
                      <Link href="/contact">
                        Get in Touch
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  );
}
