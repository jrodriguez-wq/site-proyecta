"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroSlide {
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
  primaryButton?: {
    text: string;
    action: "scroll";
    target: string;
  };
  secondaryButton?: {
    text: string;
    action: "scroll";
    target: string;
  };
}

const heroSlides: HeroSlide[] = [
  {
    image: "/img/hero/1w5a0754-e4.webp",
    title: "Invierte en Bienes Raíces",
    subtitle: "Diversifica tu patrimonio en Dólares",
    description: "Solución integral para una inversión confiable, rentable y segura.",
    primaryButton: {
      text: "Quiero recibir asesoría",
      action: "scroll",
      target: "contacto",
    },
    secondaryButton: {
      text: "Conocer más",
      action: "scroll",
      target: "nuestras-casas",
    },
  },
  {
    image: "/img/hero/1w5a0814-1.webp",
    title: "Proyecta Business Group",
    subtitle: "Tu aliado en inversiones inmobiliarias",
    description: "Proyectos transparentes, seguros y rentables.",
    primaryButton: {
      text: "Quiero recibir asesoría",
      action: "scroll",
      target: "contacto",
    },
  },
  {
    image: "/img/hero/1w5a1456-e5.webp",
    title: "Inversión en Florida",
    subtitle: "Zonas de alta valorización",
    description: "Cerca de Miami, Orlando, Tampa y Fort Myers.",
    primaryButton: {
      text: "Quiero recibir asesoría",
      action: "scroll",
      target: "contacto",
    },
    secondaryButton: {
      text: "Ver proyectos",
      action: "scroll",
      target: "nuestras-casas",
    },
  },
  {
    image: "/img/hero/1w5a1489-e5.webp",
    title: "Diversifica tu Patrimonio",
    subtitle: "En Bienes Raíces en USA",
    description: "Inversión confiable y rentable en dólares.",
    primaryButton: {
      text: "Quiero recibir asesoría",
      action: "scroll",
      target: "contacto",
    },
  },
  {
    image: "/img/hero/1w5a1493-e5.webp",
    title: "Más de 5 años de Experiencia",
    subtitle: "En Real Estate en Estados Unidos",
    description: "Asesoría profesional para tu inversión.",
    primaryButton: {
      text: "Quiero recibir asesoría",
      action: "scroll",
      target: "contacto",
    },
  },
  {
    image: "/img/hero/1w5a1505-e5.webp",
    title: "Proyectos Transparentes",
    subtitle: "Seguros y Rentables",
    description: "Inversión en bienes raíces con garantía.",
    primaryButton: {
      text: "Quiero recibir asesoría",
      action: "scroll",
      target: "contacto",
    },
    secondaryButton: {
      text: "Ver proyectos",
      action: "scroll",
      target: "nuestras-casas",
    },
  },
  {
    image: "/img/hero/aurora.webp",
    title: "Inversión Inteligente",
    subtitle: "En Bienes Raíces en USA",
    description: "Confiable, rentable y segura.",
    primaryButton: {
      text: "Quiero recibir asesoría",
      action: "scroll",
      target: "contacto",
    },
  },
];

export const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
        setIsTransitioning(false);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  const handleScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const currentSlide = heroSlides[currentIndex];

  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[550px] lg:h-[650px] xl:h-[700px] overflow-hidden">
      {/* Background Images Slider */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              quality={90}
              sizes="100vw"
            />
          </div>
        ))}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full h-full flex items-center py-4 sm:py-6 md:py-8">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl">
            <div
              className={cn(
                "space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8",
                "transition-opacity duration-500 ease-in-out",
                isTransitioning ? "opacity-0" : "opacity-100"
              )}
            >
              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.15] sm:leading-tight text-white drop-shadow-2xl">
                {currentSlide.title}
                {currentSlide.subtitle && (
                  <span className="block text-[rgb(180,22,40)] mt-1.5 sm:mt-2 md:mt-3 font-bold">
                    {currentSlide.subtitle}
                  </span>
                )}
              </h1>

              {/* Description */}
              {currentSlide.description && (
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/95 font-medium max-w-3xl leading-relaxed drop-shadow-lg">
                  {currentSlide.description}
                </p>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 pt-1 sm:pt-2">
                {currentSlide.primaryButton && (
                  <Button
                    onClick={() => handleScrollTo(currentSlide.primaryButton!.target)}
                    size="default"
                    variant="destructive"
                    className="px-5 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-2.5 md:py-3 lg:py-6 text-xs sm:text-sm md:text-base lg:text-lg font-bold shadow-2xl hover:shadow-[rgb(144,18,32)]/50 transition-all duration-300 hover:scale-105"
                  >
                    {currentSlide.primaryButton.text}
                  </Button>
                )}
                {currentSlide.secondaryButton && (
                  <Button
                    onClick={() => handleScrollTo(currentSlide.secondaryButton!.target)}
                    variant="outline"
                    size="default"
                    className="bg-white/10 backdrop-blur-md border-2 border-white/40 text-white px-5 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-2.5 md:py-3 lg:py-6 text-xs sm:text-sm md:text-base lg:text-lg font-bold hover:bg-white/20 hover:border-white/60 shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    {currentSlide.secondaryButton.text}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 md:h-48 bg-gradient-to-t from-white via-white/40 to-transparent z-10 pointer-events-none" />

      {/* Navigation Dots */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300 ease-out cursor-pointer",
              index === currentIndex
                ? "w-8 bg-[rgb(180,22,40)] shadow-lg shadow-[rgb(180,22,40)]/50"
                : "w-2 bg-white/50 hover:bg-white/70 hover:w-3"
            )}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
