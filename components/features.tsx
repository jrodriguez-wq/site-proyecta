"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, DollarSign, Shield } from "lucide-react";
import { AnimatedCard } from "@/components/ui/animated-card";
import { motion } from "framer-motion";

const features = [
  {
    icon: Home,
    title: "New and Modern Constructions",
    description: "Family homes on a 1/4 acre with contemporary designs and quality craftsmanship.",
    href: "/models",
    color: "text-[rgb(23,46,123)]",
    bgColor: "bg-[rgb(23,46,123)]/10",
  },
  {
    icon: DollarSign,
    title: "Exceptional Pricing",
    description: "Affordable homes for South Florida families. Best value in the market with flexible financing.",
    href: "/rent-to-own",
    color: "text-[rgb(180,22,40)]",
    bgColor: "bg-[rgb(180,22,40)]/10",
  },
  {
    icon: Shield,
    title: "No HOA Fees",
    description: "Save hundreds of dollars every month. No homeowners association fees, more money for your family.",
    href: "/about-us",
    color: "text-[rgb(23,46,123)]",
    bgColor: "bg-[rgb(23,46,123)]/10",
  },
];

export const Features = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[rgb(12,25,65)] text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[rgb(180,22,40)] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[rgb(180,22,40)] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-5 md:px-6 relative z-10">
        <motion.div 
          className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white px-2">
            What We Offer
          </h2>
          <p className="mx-auto max-w-[700px] text-white/80 text-base sm:text-lg md:text-xl px-4">
            Everything you need to make your dream home a reality
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <AnimatedCard key={feature.title} index={index}>
                <Card className="group relative overflow-hidden border-2 border-white/20 hover:border-[rgb(180,22,40)]/50 transition-all duration-200 hover:shadow-2xl bg-white/10 hover:bg-white/15 backdrop-blur-sm h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(180,22,40)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <CardHeader className="relative p-6 sm:p-8">
                  <div className="mb-6 sm:mb-8 flex items-start justify-between">
                    <div className={`inline-flex p-4 sm:p-5 rounded-2xl bg-[rgb(180,22,40)]/20 group-hover:bg-[rgb(180,22,40)]/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-200 shadow-lg border border-[rgb(180,22,40)]/30`}>
                      <Icon className={`h-8 w-8 sm:h-10 sm:w-10 text-white`} />
                    </div>
                    <div className="text-3xl sm:text-4xl font-black text-white/10 group-hover:text-[rgb(180,22,40)]/20 transition-colors duration-200">
                      {features.indexOf(feature) + 1}
                    </div>
                  </div>
                  <CardTitle className="text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 group-hover:text-[rgb(180,22,40)] transition-colors duration-150 text-white">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base leading-relaxed text-white/70">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative pt-0 p-6 sm:p-8">
                  <Link
                    href={feature.href}
                    className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all duration-150 group-hover:underline cursor-pointer text-sm sm:text-base"
                    aria-label={`Learn more about ${feature.title}`}
                  >
                    <span>Learn More</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-150">→</span>
                  </Link>
                </CardContent>
                </Card>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
