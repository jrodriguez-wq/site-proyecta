"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { Award, Users, Target, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

export const AboutUs = () => {
  return (
    <section id="quienes-somos" className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <FadeIn className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-proyecta-blue mb-6 leading-tight">
            About Us
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-proyecta-red to-proyecta-blue rounded-full mx-auto mb-10" />
        </FadeIn>

        {/* Main Content */}
        <StaggerContainer className="space-y-12 lg:space-y-16">
          <StaggerItem>
            <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
                Our company was created from our clients&apos; need to receive a complete solution when diversifying their wealth and generating passive income in dollars.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                When we think about investing outside our home country, many questions naturally arise. That&apos;s why, with over 5 years of experience in the Real Estate market in the United States, we have dedicated ourselves to developing transparent, secure, and profitable Real Estate Investment projects.
              </p>
            </div>
          </StaggerItem>

          {/* Juliana Bonilla Section */}
          <StaggerItem>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0">
                {/* Imagen - Lado izquierdo */}
                <div className="relative min-h-[350px] sm:min-h-[400px] lg:min-h-[600px] bg-gradient-to-br from-proyecta-blue/5 to-proyecta-red/5 flex items-center justify-center p-6 sm:p-8 lg:p-12">
                  <div className="relative w-full max-w-[280px] sm:max-w-md aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl group">
                    <Image
                      src="/img/juliana.webp"
                      alt="Juliana Bonilla - Founder and CEO"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Contenido - Lado derecho */}
                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12 space-y-6 sm:space-y-8">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="inline-block">
                      <span className="text-xs sm:text-sm font-semibold text-proyecta-red uppercase tracking-wider px-3 py-1.5 bg-proyecta-red/10 rounded-full">
                        Founder and CEO
                      </span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-proyecta-blue leading-tight">
                      Juliana Bonilla
                    </h3>
                    <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-proyecta-red to-proyecta-blue rounded-full" />
                  </div>

                  <div className="space-y-4 sm:space-y-5 text-base sm:text-lg text-gray-700 leading-relaxed">
                    <p className="font-medium">
                      Juliana Bonilla brings experience in administration and sales, ensuring smooth operations and excellent customer service.
                    </p>
                    <p>
                      She is dedicated to helping families find their dream home. We have a team of professionals who provide high-quality service through excellence, effectiveness, ethics, honesty, and confidentiality.
                    </p>
                    <p>
                      We offer you a complete solution when investing in Real Estate in the state of Florida, United States, being the strategic partners of construction projects and marketing of new homes.
                    </p>
                  </div>

                  <div className="pt-4">
                    <Button
                      asChild
                      variant="destructive"
                      className="!bg-gradient-to-r !from-proyecta-red !via-proyecta-red !to-[rgb(144,18,32)] hover:!from-[rgb(144,18,32)] hover:!via-proyecta-red hover:!to-proyecta-red !text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl border border-proyecta-red/20"
                      size="lg"
                    >
                      <Link href="/#contacto" className="flex items-center gap-2">
                        Get Personalized Consultation
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Values Section */}
          <StaggerItem>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-16">
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-proyecta-blue/5 to-transparent hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-proyecta-blue/10 text-proyecta-blue mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-bold text-proyecta-blue mb-2">Team Mentality</h4>
                <p className="text-sm text-gray-600">
                  We believe in the power of collaboration and building strong relationships.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-proyecta-red/5 to-transparent hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-proyecta-red/10 text-proyecta-red mb-4">
                  <Heart className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-bold text-proyecta-red mb-2">Win-Win Approach</h4>
                <p className="text-sm text-gray-600">
                  We create solutions that benefit everyone - our clients achieve their dreams.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-proyecta-blue/5 to-transparent hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-proyecta-blue/10 text-proyecta-blue mb-4">
                  <Target className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-bold text-proyecta-blue mb-2">Affordable Housing</h4>
                <p className="text-sm text-gray-600">
                  Making quality homes accessible with flexible financing options.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-proyecta-red/5 to-transparent hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-proyecta-red/10 text-proyecta-red mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-bold text-proyecta-red mb-2">Ethical Business</h4>
                <p className="text-sm text-gray-600">
                  Transparency, honesty, and integrity guide everything we do.
                </p>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};
