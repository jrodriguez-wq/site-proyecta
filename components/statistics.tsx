"use client";

import { Home, Users, Award, TrendingUp } from "lucide-react";
import { AnimatedCard } from "@/components/ui/animated-card";
import { motion } from "framer-motion";

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
    value: "Expert",
    label: "Rent to Own",
    description: "Extensive experience in the Rent to Own program",
  },
  {
    icon: TrendingUp,
    value: "$0",
    label: "Down Payment",
    description: "Homeownership with $0 down payment",
  },
];

export const Statistics = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[rgb(12,25,65)] text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[rgb(180,22,40)] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgb(180,22,40)] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[rgb(180,22,40)]/20 rounded-full blur-3xl" />
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
            Building Dreams, One Home at a Time
          </h2>
          <p className="mx-auto max-w-[700px] text-white/80 text-base sm:text-lg md:text-xl px-4">
            Our numbers speak for themselves
          </p>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <AnimatedCard key={stat.label} index={index}>
                <motion.div
                  className="text-center space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 hover:border-[rgb(180,22,40)]/30 transition-all duration-200 hover:shadow-lg hover:shadow-[rgb(180,22,40)]/20 h-full flex flex-col"
                  whileHover={{ scale: 1.05, y: -4, transition: { duration: 0.2 } }}
                >
                <div className="flex justify-center shrink-0">
                  <div className="p-3 sm:p-4 bg-[rgb(180,22,40)]/30 rounded-full border border-[rgb(180,22,40)]/40 shadow-lg shadow-[rgb(180,22,40)]/20">
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                </div>
                <div className="space-y-1 sm:space-y-2 flex-1 flex flex-col justify-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">
                    {stat.value}
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">{stat.label}</h3>
                  <p className="text-xs sm:text-sm text-white/70 px-1 mt-auto">{stat.description}</p>
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
