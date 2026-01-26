"use client";

import Link from "next/link";
import { TrendingUp, Home, DollarSign, Award, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const stats = [
  {
    number: "$0",
    label: "$0 Down Payment",
    icon: DollarSign,
    color: "from-[rgb(180,22,40)]/20 to-[rgb(180,22,40)]/10",
    iconColor: "text-[rgb(180,22,40)]",
  },
  {
    number: "100%",
    label: "No HOA Fees",
    icon: Home,
    color: "from-[rgb(23,46,123)]/20 to-[rgb(23,46,123)]/10",
    iconColor: "text-[rgb(23,46,123)]",
  },
  {
    number: "5",
    label: "Years Experience",
    icon: Award,
    color: "from-[rgb(180,22,40)]/20 to-[rgb(180,22,40)]/10",
    iconColor: "text-[rgb(180,22,40)]",
  },
  {
    number: "100+",
    label: "Happy Families",
    icon: TrendingUp,
    color: "from-[rgb(23,46,123)]/20 to-[rgb(23,46,123)]/10",
    iconColor: "text-[rgb(23,46,123)]",
  },
];

const benefits = [
  "Premium quality construction with extensive warranties and quality assurance",
  "Flexible financing options including our innovative Rent to Own program",
  "Over 5 years of experience building homes for American families",
];

export const WhyChooseUs = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50/30 to-white">
      <div className="container mx-auto px-4 sm:px-5 md:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[rgb(23,46,123)] leading-[1.1] mb-6">
            Why Choose Proyecta Business Group
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Building American homes with quality, integrity, and your family&apos;s future in mind
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              >
                <div className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/50 h-full`}>
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 bg-white rounded-xl shadow-lg ${stat.iconColor}`}>
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-semibold">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white rounded-3xl p-8 sm:p-10 md:p-12 shadow-xl border border-gray-200/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[rgb(23,46,123)] mb-8 text-center">
              What Sets Us Apart
            </h3>
            
            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 group p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                >
                  <div className="shrink-0 mt-1">
                    <div className="p-2 bg-[rgb(180,22,40)]/10 rounded-lg group-hover:bg-[rgb(180,22,40)]/20 transition-colors">
                      <CheckCircle2 className="h-6 w-6 text-[rgb(180,22,40)] group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed flex-1 pt-1">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center pt-4">
              <Button
                asChild
                size="lg"
                className="px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg font-bold bg-[rgb(180,22,40)] hover:bg-[rgb(144,18,32)] text-white shadow-lg shadow-[rgb(180,22,40)]/25 hover:shadow-xl hover:shadow-[rgb(180,22,40)]/30 transition-all duration-300 rounded-xl"
              >
                <Link href="/contact">
                  <span>Get Started Today</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
