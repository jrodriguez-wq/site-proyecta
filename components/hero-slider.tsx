"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroSlideConfig {
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
  primaryButton?: {
    text: string;
    action: "link" | "scroll";
    link?: string;
    scrollTarget?: string;
  };
  secondaryButton?: {
    text: string;
    action: "link" | "scroll";
    link?: string;
    scrollTarget?: string;
  };
}

const heroSlidesConfig: HeroSlideConfig[] = [
  {
    image: "/img/hero/1w5a0741-1.webp",
    title: "Building the Future",
    subtitle: "For American Families",
    description: "Let's make homeownership a reality for your family.",
    primaryButton: {
      text: "Contact Us",
      action: "link",
      link: "/contact",
    },
    secondaryButton: {
      text: "Apply Now",
      action: "link",
      link: "/contact",
    },
  },
  {
    image: "/img/hero/1w5a0814-1.webp",
    title: "Rent to Own New Homes",
    subtitle: "Become a Home Owner",
    description: "Live in your new home while building equity. Start your journey to homeownership today.",
    primaryButton: {
      text: "Get Pre Qualified",
      action: "link",
      link: "/rent-to-own#rto-application-form",
    },
  },
  {
    image: "/img/hero/1w5a1489-e5.webp",
    title: "$0 Down Payment & $0 Closing Cost",
    subtitle: "Family Homes",
    description: "Affordable homes with no hidden fees. More space, more savings, more value for your family.",
    primaryButton: {
      text: "Apply Now",
      action: "link",
            link: "/contact",
    },
    secondaryButton: {
      text: "View Communities",
      action: "link",
      link: "/communities/labelle",
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
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlidesConfig.length);
        setIsTransitioning(false);
      }, 500);
    }, 20000);

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

  const currentSlide = heroSlidesConfig[currentIndex];

  return (
    <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden pb-16">
      {/* Background Images - Slider */}
      <div className="absolute inset-0 z-0">
        {heroSlidesConfig.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]",
              index === currentIndex
                ? "opacity-100 z-10"
                : "opacity-0 z-0 pointer-events-none"
            )}
          >
            <Image
              src={slide.image}
              alt={
                index === 0
                  ? "New construction homes in Florida - Rent to Own with $0 down payment - Proyecta Business Group"
                  : index === 1
                  ? "Best home builder in Florida - Quality new homes for sale Miami, LaBelle, Lehigh Acres"
                  : "Buy house in Florida - New homes Miami, LaBelle - Home builder Florida"
              }
              fill
              className="object-cover"
              priority={index === 0}
              quality={90}
              sizes="100vw"
            />
          </div>
        ))}
        {/* Gradient Overlay - Lighter for more natural look */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
      </div>


      {/* Content */}
      <div className="relative z-20 w-full h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl">
            <div
              className={cn(
                "space-y-6 sm:space-y-8",
                "transition-opacity duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                isTransitioning ? "opacity-0" : "opacity-100"
              )}
              style={{
                transitionDelay: isTransitioning ? "0ms" : "100ms",
              }}
            >
              {/* Title */}
              <h1
                className={cn(
                  "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.9] text-white",
                  "transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  isTransitioning
                    ? "translate-y-4 opacity-0"
                    : "translate-y-0 opacity-100"
                )}
                style={{
                  textShadow:
                    "0 4px 20px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.7), 0 0 40px rgba(0,0,0,0.5)",
                  transitionDelay: isTransitioning ? "0ms" : "150ms",
                }}
              >
                {currentSlide.title}
                {currentSlide.subtitle && (
                  <span
                    className={cn(
                      "block text-[rgb(180,22,40)] mt-1 sm:mt-2 font-black",
                      "transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      isTransitioning
                        ? "translate-x-4 opacity-0"
                        : "translate-x-0 opacity-100"
                    )}
                    style={{
                      textShadow:
                        "0 4px 20px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6), 0 0 30px rgba(180,22,40,0.3)",
                      transitionDelay: isTransitioning ? "0ms" : "250ms",
                    }}
                  >
                    {currentSlide.subtitle}
                  </span>
                )}
              </h1>

              {/* Description */}
              {currentSlide.description && (
                <p
                  className={cn(
                    "text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 font-medium max-w-3xl leading-relaxed",
                    "transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    isTransitioning
                      ? "translate-y-4 opacity-0"
                      : "translate-y-0 opacity-100"
                  )}
                  style={{
                    textShadow:
                      "0 2px 12px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.6)",
                    transitionDelay: isTransitioning ? "0ms" : "300ms",
                  }}
                >
                  {currentSlide.description}
                </p>
              )}

              {/* CTA Buttons */}
              <div
                className={cn(
                  "flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2",
                  "transition-opacity duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                  isTransitioning ? "opacity-0" : "opacity-100"
                )}
                style={{
                  transitionDelay: isTransitioning ? "0ms" : "400ms",
                }}
              >
                {currentSlide.primaryButton &&
                  (currentSlide.primaryButton.action === "scroll" ? (
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        handleScrollTo(
                          currentSlide.primaryButton!.scrollTarget || "contacto"
                        );
                      }}
                      size="lg"
                      className={cn(
                        "bg-[rgb(180,22,40)] hover:bg-[rgb(144,18,32)] text-white",
                        "px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6",
                        "text-base sm:text-lg font-bold",
                        "shadow-2xl hover:shadow-[rgb(180,22,40)]/40",
                        "transition-all duration-300 ease-out",
                        "hover:scale-105 active:scale-100",
                        "relative overflow-hidden group",
                        "border-2 border-[rgb(180,22,40)]/50"
                      )}
                    >
                      <span className="relative z-10">
                        {currentSlide.primaryButton.text}
                      </span>
                      <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    </Button>
                  ) : currentSlide.primaryButton.link ? (
                    <Button
                      asChild
                      size="lg"
                      className={cn(
                        "bg-[rgb(180,22,40)] hover:bg-[rgb(144,18,32)] text-white",
                        "px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6",
                        "text-base sm:text-lg font-bold",
                        "shadow-2xl hover:shadow-[rgb(180,22,40)]/40",
                        "transition-all duration-300 ease-out",
                        "hover:scale-105 active:scale-100",
                        "relative overflow-hidden group",
                        "border-2 border-[rgb(180,22,40)]/50"
                      )}
                    >
                      <Link href={currentSlide.primaryButton.link}>
                        <span className="relative z-10">
                          {currentSlide.primaryButton.text}
                        </span>
                        <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                      </Link>
                    </Button>
                  ) : null)}
                {currentSlide.secondaryButton &&
                  (currentSlide.secondaryButton.action === "scroll" ? (
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        handleScrollTo(
                          currentSlide.secondaryButton!.scrollTarget || "contacto"
                        );
                      }}
                      variant="outline"
                      size="lg"
                      className={cn(
                        "bg-white/10 backdrop-blur-md border-2 border-white/40 text-white",
                        "px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6",
                        "text-base sm:text-lg font-bold",
                        "hover:bg-white/20 hover:border-white/60",
                        "shadow-xl hover:shadow-2xl",
                        "transition-all duration-300 ease-out",
                        "hover:scale-105 active:scale-100"
                      )}
                    >
                      {currentSlide.secondaryButton.text}
                    </Button>
                  ) : currentSlide.secondaryButton.link ? (
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className={cn(
                        "bg-white/10 backdrop-blur-md border-2 border-white/40 text-white",
                        "px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6",
                        "text-base sm:text-lg font-bold",
                        "hover:bg-white/20 hover:border-white/60",
                        "shadow-xl hover:shadow-2xl",
                        "transition-all duration-300 ease-out",
                        "hover:scale-105 active:scale-100"
                      )}
                    >
                      <Link href={currentSlide.secondaryButton.link}>
                        {currentSlide.secondaryButton.text}
                      </Link>
                    </Button>
                  ) : null)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Natural Fade Out */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 md:h-48 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, white 0%, rgba(255,255,255,0.4) 20%, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0.08) 60%, rgba(255,255,255,0.03) 80%, transparent 100%)",
        }}
      />

      <div
        className={cn(
          "absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-2",
          "animate-fade-in"
        )}
        style={{ animationDelay: "600ms" }}
      >
        {heroSlidesConfig.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={cn(
              "h-1.5 sm:h-2 rounded-full transition-all duration-500 ease-out cursor-pointer",
              "smooth-hover",
              index === currentIndex
                ? "w-6 sm:w-8 bg-[rgb(180,22,40)] shadow-lg shadow-[rgb(180,22,40)]/50"
                : "w-1.5 sm:w-2 bg-white/50 hover:bg-white/70 hover:w-2 sm:hover:w-3"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
