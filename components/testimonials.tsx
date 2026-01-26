"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, MapPin } from "lucide-react";
import { AnimatedCard } from "@/components/ui/animated-card";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Carlos & Ana Rodriguez",
    location: "Lehigh Acres, FL",
    text: "Amazing experience from day one! The investment quality is outstanding and the customer service is top-notch. We love our portfolio and the returns. Proyecta Business Group truly delivers on their promises.",
    rating: 5,
    image: "/recursos/clientes/testimonio-3.webp",
  },
  {
    name: "James & Lisa Thompson",
    location: "LaBelle, FL",
    text: "Best decision we ever made! The investment program was perfect for our situation. The properties are beautiful, profitable, and exactly what we needed. Thank you Proyecta Business Group for making our dream a reality!",
    rating: 5,
    image: "/recursos/clientes/testimonio-2.webp",
  },
  {
    name: "Miguel & Carmen Martinez",
    location: "Lehigh Acres, FL",
    text: "We are so grateful to Proyecta Business Group. The entire process was transparent and stress-free. Our investment portfolio is perfect for our growing wealth. The quality and attention to detail exceeded our expectations!",
    rating: 5,
    image: "/recursos/clientes/testimonio-1.webp",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(23,46,123,0.04),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(180,22,40,0.02),transparent_60%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-5 md:px-6 relative z-10">
        <motion.div 
          className="text-center space-y-4 sm:space-y-5 md:space-y-6 mb-12 sm:mb-16 md:mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-block">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-[rgb(23,46,123)] px-2">
              What Our Clients Say
            </h2>
            <div className="h-1 sm:h-1.5 md:h-2 w-24 sm:w-28 md:w-32 bg-gradient-to-r from-[rgb(180,22,40)] via-[rgb(180,22,40)]/80 to-[rgb(23,46,123)]/40 mx-auto mt-3 sm:mt-4 md:mt-6 rounded-full shadow-lg shadow-[rgb(180,22,40)]/20" />
          </div>
          <p className="mx-auto max-w-[750px] text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-light tracking-wide px-4">
            Real stories from real clients who found their investment success with us
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedCard key={index} index={index}>
              <Card className="group relative overflow-hidden border-2 bg-white hover:shadow-2xl transition-all duration-200 p-0 flex flex-col h-full">
                {/* Image Section - Principal */}
                <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 bg-gray-100 overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name} - ${testimonial.location}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-0.5 sm:gap-1 bg-white/95 backdrop-blur-sm rounded-full px-2 py-1 sm:px-3 sm:py-2 shadow-lg border border-white/80 z-10">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  
                  {/* Gradient Overlay at bottom for smooth transition */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
                </div>

                {/* Content Section - Secundario */}
                <CardContent className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-5 flex-1 flex flex-col">
                  {/* Quote Icon and Text */}
                  <div className="flex items-start gap-2 sm:gap-3 flex-1">
                    <div className="shrink-0 mt-1">
                      <Quote className="h-4 w-4 sm:h-5 sm:w-5 text-[rgb(23,46,123)]/40 group-hover:text-[rgb(23,46,123)]/60 transition-colors duration-150" />
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed italic flex-1">
                      &quot;{testimonial.text}&quot;
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gray-200/50" />

                  {/* Author Info */}
                  <div className="space-y-1 sm:space-y-1.5">
                    <div className="font-bold text-sm sm:text-base md:text-lg text-[rgb(23,46,123)] group-hover:text-[rgb(180,22,40)] transition-colors duration-150">
                      {testimonial.name}
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500">
                      <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[rgb(23,46,123)]/60 shrink-0" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
