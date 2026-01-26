"use client"

import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

export interface LogoItem {
  src: string
  alt: string
  href?: string
  width?: number
  height?: number
  className?: string
}

interface LogoSliderProps {
  logos: LogoItem[]
  speed?: "slow" | "normal" | "fast"
  pauseOnHover?: boolean
  className?: string
  title?: string
  showTitle?: boolean
  variant?: "default" | "minimal" | "bordered"
}

const speedClasses = {
  slow: "animate-scroll-left-slow",
  normal: "animate-scroll-left",
  fast: "animate-scroll-left-fast",
}

export const LogoSlider = ({
  logos,
  speed = "normal",
  pauseOnHover = true,
  className,
  title,
  showTitle = false,
  variant = "default",
}: LogoSliderProps) => {
  const duplicatedLogos = [...logos, ...logos, ...logos]

  if (logos.length === 0) {
    return null
  }

  const variantStyles = {
    default: "py-8 sm:py-10 md:py-12 lg:py-16 bg-gray-50 border-y border-gray-200/50",
    minimal: "py-6 sm:py-8 md:py-10 lg:py-12 bg-transparent",
    bordered: "py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-br from-gray-50/20 via-gray-50/10 to-gray-50/20 border-y-2 border-[rgb(23,46,123)]/10",
  }

  return (
    <section
      className={cn(
        "overflow-hidden relative",
        variantStyles[variant],
        className
      )}
    >
      {showTitle && title && (
        <div className="text-center mb-6 md:mb-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            {title}
          </h3>
        </div>
      )}

      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div
          className={cn(
            "flex items-center justify-center gap-12 sm:gap-16 md:gap-20 lg:gap-24",
            pauseOnHover && "hover:[animation-play-state:paused]",
            speedClasses[speed]
          )}
        >
          {duplicatedLogos.map((logo, index) => {
            const logoImage = (
              <div className="relative grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 group flex items-center justify-center w-40 h-28">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width || 160}
                  height={logo.height || 112}
                  className={cn(
                    "w-full h-full object-contain transition-transform duration-300 group-hover:scale-110",
                    logo.className
                  )}
                  quality={100}
                  loading="lazy"
                />
              </div>
            )

            if (logo.href) {
              return (
                <Link
                  key={index}
                  href={logo.href}
                  target={logo.href.startsWith("http") ? "_blank" : "_self"}
                  rel={logo.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="shrink-0"
                >
                  {logoImage}
                </Link>
              )
            }

            return (
              <div key={index} className="shrink-0">
                {logoImage}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
