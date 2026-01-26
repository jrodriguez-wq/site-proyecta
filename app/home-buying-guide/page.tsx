"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCheck, MapPin, Home, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedCard } from "@/components/ui/animated-card";

const steps = [
  {
    number: "1",
    icon: FileCheck,
    title: "Get Pre-Approved",
    description: "Start by getting pre-approved for financing. This helps you understand your budget and shows sellers you're a serious buyer. We'll help you explore all your options including traditional mortgages and our Rent-to-Own program.",
  },
  {
    number: "2",
    icon: MapPin,
    title: "Choose Your Community",
    description: "Select between LaBelle or Lehigh Acres. Each community offers unique benefits - from river access in LaBelle to proximity to Cape Coral in Lehigh Acres. We'll help you find the perfect location for your lifestyle.",
  },
  {
    number: "3",
    icon: Home,
    title: "Select Your Model",
    description: "Choose from our available models: Louisiana, Viana, Delanie, Aurora, Langdon, or Emelia. Each model offers different layouts, sizes, and features to match your family's needs and budget.",
  },
  {
    number: "4",
    icon: DollarSign,
    title: "Choose Your Financing",
    description: "Explore our financing options including traditional mortgages and our innovative Rent-to-Own program with $0 down payment. We'll help you find the best option for your financial situation.",
  },
];

export default function HomeBuyingGuidePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <WhatsAppFloat />

      <div className="pt-16 sm:pt-20 pb-10 md:pb-14 lg:pb-18">
        <div className="container mx-auto px-4 sm:px-5 md:px-6">
          <div className="max-w-6xl mx-auto space-y-12">
            <AnimatedSection delay={0.1}>
              <div className="text-center space-y-3 sm:space-y-4 px-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-tight text-[rgb(23,46,123)]">
                  Home Buying Guide
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Your step-by-step guide to buying your dream home in Southwest Florida. We'll walk you through the entire process from pre-approval to move-in day.
                </p>
                <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] via-[rgb(180,22,40)]/80 to-[rgb(180,22,40)] rounded-full mx-auto"></div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid gap-8 md:grid-cols-2">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <AnimatedCard key={step.number} index={index}>
                      <Card
                        className={cn(
                          "group relative overflow-hidden border-2 hover:border-[rgb(23,46,123)]/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50/50"
                        )}
                      >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(23,46,123)]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <CardHeader className="relative">
                          <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[rgb(180,22,40)] to-[rgb(180,22,40)]/80 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                              <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs sm:text-sm font-bold text-[rgb(23,46,123)]/60 mb-1">
                                Step {step.number}
                              </div>
                              <CardTitle className="text-lg sm:text-xl md:text-2xl group-hover:text-[rgb(23,46,123)] transition-colors duration-300 leading-tight">
                                {step.title}
                              </CardTitle>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="relative">
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </CardContent>
                      </Card>
                    </AnimatedCard>
                  );
                })}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-gradient-to-br from-[rgb(23,46,123)]/10 via-[rgb(23,46,123)]/5 to-white rounded-2xl p-6 sm:p-8 md:p-10 border-2 border-[rgb(23,46,123)]/20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[rgb(23,46,123)] mb-4">
                  Ready to Start Your Home Buying Journey?
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                  Our team is here to guide you through every step of the process. From finding the perfect home to securing the right financing, we make homeownership accessible and straightforward.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Contact us today to get started with your pre-approval and discover how we can help you achieve your dream of homeownership in Southwest Florida.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
