"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedCard } from "@/components/ui/animated-card";

const COMMUNITIES_CONFIG = [
  {
    nameKey: "labelle",
    alt: "New homes in LaBelle, Florida - Home builder LaBelle - New construction homes by Proyecta Business Group",
    href: "/communities/labelle",
    image: "/recursos/shutterstock-1065297917.webp",
    features: [
      "1/4 Acre Lots",
      "No HOA Fees",
      "Family Friendly",
    ],
  },
  {
    nameKey: "lehighAcres",
    alt: "New homes in Lehigh Acres, Florida - Home builder Lehigh Acres - New construction homes by Proyecta Business Group",
    href: "/communities/lehigh-acres",
    image: "/recursos/shutterstock-1197062707.webp",
    features: [
      "Spacious Lots",
      "Great Schools",
      "Prime Location",
    ],
  },
] as const;

export const CommunitiesShowcase = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50/30 to-white">
      <div className="container mx-auto px-4 sm:px-5 md:px-6">
        <motion.div
          className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-[rgb(23,46,123)] px-2">
            Our Communities
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600 text-base sm:text-lg md:text-xl px-4">
            Discover your perfect home in South West Florida&apos;s most desirable locations
          </p>
        </motion.div>

        <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
          {COMMUNITIES_CONFIG.map((community, index) => {
            const communityName =
              community.nameKey === "labelle" ? "LaBelle" : "Lehigh Acres";

            return (
              <AnimatedCard key={community.nameKey} index={index}>
                <motion.div
                  className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500"
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  {/* Image Section - Full Width */}
                  <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden">
                    <Image
                      src={community.image}
                      alt={community.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Gradient Overlay - More subtle */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                    
                    {/* Community Name and Location - Overlay on Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10">
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="h-5 w-5 text-[rgb(180,22,40)]" />
                        <span className="text-sm sm:text-base font-semibold text-white/90 uppercase tracking-wider">
                          {communityName === "LaBelle" ? "LaBelle, FL" : "Lehigh Acres, FL"}
                        </span>
                      </div>
                      <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-2xl leading-tight">
                        {communityName}
                      </h3>
                    </div>
                  </div>

                  {/* Content Section - Clean Design */}
                  <div className="p-6 sm:p-8 md:p-10 bg-white">
                    {/* Features List */}
                    <div className="space-y-4 mb-8">
                      {community.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center gap-4 group/feature"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                        >
                          <div className="shrink-0 p-2 bg-[rgb(180,22,40)]/10 rounded-lg group-hover/feature:bg-[rgb(180,22,40)]/20 transition-colors">
                            <CheckCircle2 className="h-5 w-5 text-[rgb(180,22,40)] group-hover/feature:scale-110 transition-transform" />
                          </div>
                          <span className="text-base sm:text-lg text-gray-700 font-semibold">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button
                      asChild
                      className="w-full bg-[rgb(180,22,40)] hover:bg-[rgb(144,18,32)] text-white font-bold shadow-lg hover:shadow-xl hover:shadow-[rgb(180,22,40)]/30 transition-all duration-300 rounded-xl py-6 text-base sm:text-lg group/btn"
                      size="lg"
                    >
                      <Link href={community.href} className="flex items-center justify-center gap-2">
                        <span>Explore {communityName}</span>
                        <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
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
