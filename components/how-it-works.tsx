"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { AnimatedCard } from "@/components/ui/animated-card";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Get Pre-Approved",
    description: "Start by getting pre-approved in one of our programs. Meet an advisor who will guide you through the process.",
  },
  {
    number: "02",
    title: "Choose Your Community",
    description: "Select between LaBelle or Lehigh Acres. Each community offers unique benefits.",
  },
  {
    number: "03",
    title: "Select Your Model",
    description: "Choose from our available models: Louisiana, Viana, Delanie, Aurora, Langdon, or Emelia.",
  },
  {
    number: "04",
    title: "Choose Financing",
    description: "Explore our financing options including traditional mortgages and our Rent to Own program with $0 down.",
  },
  {
    number: "05",
    title: "Build Your Home",
    description: "Watch your dream home come to life with quality construction and attention to detail.",
  },
  {
    number: "06",
    title: "Move In",
    description: "Receive the keys to your new home and start creating lasting memories with your family.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[rgb(12,25,65)] text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[rgb(180,22,40)] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgb(180,22,40)] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[rgb(180,22,40)]/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-5 md:px-6 relative z-10">
        <motion.div 
          className="text-center space-y-4 sm:space-y-5 md:space-y-6 mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white px-2">
            Start Now
          </h2>
          <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] via-[rgb(180,22,40)]/80 to-[rgb(180,22,40)] rounded-full mx-auto"></div>
          <p className="mx-auto max-w-[750px] text-white/80 text-base sm:text-lg md:text-xl lg:text-2xl px-4 leading-relaxed">
            Your journey to homeownership in 6 simple steps
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const nextTitle = index < steps.length - 1 ? steps[index + 1].title : "Complete";
            
            return (
              <AnimatedCard key={step.number} index={index}>
                <motion.div
                  className="group relative overflow-hidden rounded-2xl bg-white/10 hover:bg-white/15 backdrop-blur-sm h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-[rgb(180,22,40)]/20"
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  {/* Decorative glow on hover */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(180,22,40)]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative p-6 sm:p-8 flex flex-col h-full">
                    {/* Step Number and Title Section */}
                    <div className="flex items-start gap-4 sm:gap-5 mb-6 sm:mb-8">
                      <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[rgb(180,22,40)] to-[rgb(180,22,40)]/80 text-white flex items-center justify-center font-black text-xl sm:text-2xl shadow-lg shadow-[rgb(180,22,40)]/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        {step.number}
                      </div>
                      <div className="flex-1 pt-1 min-w-0">
                        <div className="text-xs sm:text-sm font-bold text-white/60 uppercase tracking-wider mb-2">
                          Step {step.number}
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black group-hover:text-[rgb(180,22,40)] transition-colors duration-300 leading-tight text-white">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed flex-1 mb-6">
                      {step.description}
                    </p>

                    {/* Next Step Indicator */}
                    <div className="pt-6 border-t border-white/20">
                      <div className="flex items-center gap-3 text-sm sm:text-base text-white/70 group-hover:text-white/90 transition-colors">
                        <div className="h-2 w-2 rounded-full bg-[rgb(180,22,40)] animate-pulse shrink-0" />
                        <span className="font-semibold">Next: {nextTitle}</span>
                        <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
