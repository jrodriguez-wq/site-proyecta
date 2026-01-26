"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Bed, Bath, Square, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { AnimatedCard } from "@/components/ui/animated-card";

export interface ModelCardProps {
  modelKey: string;
  name: string;
  description: string;
  image: string;
  price: string;
  beds: string;
  baths: string;
  sqft: string;
  garage?: string;
  index: number;
}

export const ModelCard = ({
  modelKey,
  name,
  description,
  image,
  price,
  beds,
  baths,
  sqft,
  garage,
  index,
}: ModelCardProps) => {
  return (
    <AnimatedCard index={index} className="relative w-full">
      <motion.div
        className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group h-full flex flex-col"
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
      >
        {/* Image Section */}
        <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          <Image
            src={image}
            alt={`${name} model home in Florida - New construction home by Proyecta Business Group`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            priority={index < 3}
            quality={90}
          />
          
          {/* Price Badge */}
          <div className="absolute top-4 left-4 z-10 bg-slate-900/95 backdrop-blur-md rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 shadow-xl">
            <div className="text-[10px] sm:text-xs text-slate-300 font-medium">Starting at</div>
            <div className="text-base sm:text-lg font-bold text-white">{price}</div>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-8 flex-1 flex flex-col">
          {/* Title and Description */}
          <div className="space-y-3 mb-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-foreground group-hover:text-[rgb(180,22,40)] transition-colors duration-300">
              {name}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>

          {/* Specifications Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 p-4 bg-muted/50 rounded-xl mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[rgb(180,22,40)]/10 rounded-lg shrink-0">
                <Bed className="h-4 w-4 sm:h-5 sm:w-5 text-[rgb(180,22,40)]" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs text-muted-foreground font-medium">Beds</div>
                <div className="font-black text-sm sm:text-base">{beds}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[rgb(180,22,40)]/10 rounded-lg shrink-0">
                <Bath className="h-4 w-4 sm:h-5 sm:w-5 text-[rgb(180,22,40)]" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs text-muted-foreground font-medium">Baths</div>
                <div className="font-black text-sm sm:text-base">{baths}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[rgb(23,46,123)]/10 rounded-lg shrink-0">
                <Square className="h-4 w-4 sm:h-5 sm:w-5 text-[rgb(23,46,123)]" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs text-muted-foreground font-medium">Sq Ft</div>
                <div className="font-black text-xs sm:text-base">{sqft}</div>
              </div>
            </div>
            {garage && (
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[rgb(23,46,123)]/10 rounded-lg shrink-0">
                  <Square className="h-4 w-4 sm:h-5 sm:w-5 text-[rgb(23,46,123)]" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs text-muted-foreground font-medium">Garage</div>
                  <div className="font-black text-xs sm:text-sm">{garage}</div>
                </div>
              </div>
            )}
          </div>

          {/* View Details Button */}
          <Button
            variant="default"
            className="w-full mt-auto bg-[rgb(180,22,40)] hover:bg-[rgb(144,18,32)] text-white shadow-lg hover:shadow-xl hover:shadow-[rgb(180,22,40)]/30 transition-all duration-300 group/btn"
            size="lg"
            asChild
          >
            <Link href={`/models/${modelKey}`}>
              <span className="flex items-center justify-center gap-2">
                View Details
                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </span>
            </Link>
          </Button>
        </div>
      </motion.div>
    </AnimatedCard>
  );
};
