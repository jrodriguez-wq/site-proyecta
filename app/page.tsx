"use client";

import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { HeroSlider } from "@/components/hero-slider";
import { HappyFamiliesGallery } from "@/components/happy-families-gallery";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Home as HomeIcon, Building2, Clock, Star, BedDouble, Bath, Key, Facebook, Instagram, MessageCircle, FileText } from "lucide-react";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { models } from "@/lib/data/models";

const MODEL_MAIN_IMAGES: Record<string, string> = {
  louisiana: `/img/hero/1w5a1489-e5.webp`,
  viana: `/img/hero/1w5a0814-1.webp`,
  delanie: `/img/hero/1w5a1456-e5.webp`,
  aurora: `/img/hero/aurora.webp`,
  langdon: `/img/hero/1w5a1505-e5.webp`,
  emelia: `/img/hero/1w5a0754-e4.webp`,
  duplex: `/img/hero/1w5a1493-e5.webp`,
};

export default function Home() {

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <WhatsAppFloat />

      {/* Hero Slider Section */}
      <div id="inicio" className="pt-16 sm:pt-20">
        <HeroSlider />
      </div>

      {/* Nuestro Propósito */}
      <section id="proposito" className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <FadeIn className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group hover:shadow-3xl transition-all duration-500">
              <Image
                src="/recursos/nosotros.jpg"
                alt="About Us - Proyecta Business Group"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-[rgb(23,46,123)] mb-3 sm:mb-4 leading-tight">
                  Our Purpose
                </h2>
                <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] to-[rgb(23,46,123)] rounded-full mb-6 sm:mb-8" />
              </div>
              <div className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed space-y-4 sm:space-y-6">
                <p className="font-medium">
                  We firmly believe in the importance of <span className="font-bold text-[rgb(23,46,123)]">diversifying</span> your wealth in a currency as strong as the <span className="font-bold text-[rgb(180,22,40)]">dollar</span>.
                </p>
                <p>
                  For this reason, we provide our clients with a complete solution when it comes to investing and <span className="font-bold text-[rgb(23,46,123)]">generating passive income</span>.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quiénes somos */}
      <section id="quienes-somos" className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <FadeIn className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[rgb(23,46,123)] mb-6 leading-tight">
              About Us
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] to-[rgb(23,46,123)] rounded-full mx-auto mb-10" />
            <div className="max-w-4xl mx-auto text-lg sm:text-xl text-gray-700 leading-relaxed space-y-6">
              <p className="font-medium">
                Our company was created from our clients&apos; need to receive a complete solution when diversifying their wealth and generating passive income in dollars.
              </p>
              <p>
                When we think about investing outside our home country, many questions naturally arise. That&apos;s why, with over 5 years of experience in the Real Estate market in the United States, we have dedicated ourselves to developing transparent, secure, and profitable Real Estate Investment projects.
              </p>
            </div>
          </FadeIn>

          {/* Nuestro equipo - Juliana Bonilla */}
          <StaggerContainer className="mt-10 sm:mt-12 lg:mt-20">
            <StaggerItem>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0">
                  {/* Imagen - Lado izquierdo */}
                  <div className="relative min-h-[350px] sm:min-h-[400px] lg:min-h-[600px] bg-gradient-to-br from-[rgb(23,46,123)]/5 to-[rgb(180,22,40)]/5 flex items-center justify-center p-6 sm:p-8 lg:p-12">
                    <div className="relative w-full max-w-[280px] sm:max-w-md aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl group">
        <Image
                        src="/img/juliana.webp"
                        alt="Juliana Bonilla - Founder and CEO"
                        fill
                        className="object-contain transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 280px, (max-width: 1024px) 100vw, 50vw"
          priority
        />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    {/* Decoración de fondo */}
                    <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-[rgb(180,22,40)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-[rgb(23,46,123)]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                  </div>

                  {/* Contenido - Lado derecho */}
                  <div className="bg-white p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-4 sm:space-y-6">
                      {/* Badge */}
                      <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[rgb(180,22,40)]/10 text-[rgb(180,22,40)] text-xs sm:text-sm font-semibold">
                        Founder and CEO
                      </div>

                      {/* Nombre */}
                      <div>
                        <h3 className="text-2xl sm:text-3xl lg:text-5xl font-black text-[rgb(23,46,123)] mb-2 sm:mb-3 leading-tight">
                          Juliana Bonilla
                        </h3>
                        <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-[rgb(180,22,40)] to-[rgb(23,46,123)] rounded-full" />
                      </div>

                      {/* Descripción */}
                      <div className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
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

                      {/* CTA Button */}
                      <div className="pt-2 sm:pt-4">
                        <Button
                          onClick={() => {
                            const element = document.getElementById("contacto");
                            element?.scrollIntoView({ behavior: "smooth" });
                          }}
                          variant="default"
                          size="default"
                          className="w-full text-xs sm:text-sm md:text-base py-2 sm:py-2.5 md:py-3 px-4 sm:px-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                          aria-label="Get personalized consultation"
                        >
                          <span className="whitespace-normal sm:whitespace-nowrap text-center">Get Personalized Consultation</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[rgb(23,46,123)] via-[rgb(18,37,98)] to-[rgb(23,46,123)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <FadeIn>
            <div className="space-y-6">
              <div className="inline-block text-6xl sm:text-7xl lg:text-8xl text-white/20 font-black mb-4">&quot;</div>
              <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight drop-shadow-2xl">
                More than an investment, we create Life projects
              </p>
              <div className="inline-block text-6xl sm:text-7xl lg:text-8xl text-white/20 font-black mt-4">&quot;</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ¿Estás pensando en Invertir? Tips */}
      <section id="invertir" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <FadeIn className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(23,46,123)] mb-4">
              Are You Thinking About Investing?
            </h2>
            <p className="text-xl text-gray-600">Some Tips...</p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <StaggerItem>
              <Card className="h-full flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-[rgb(180,22,40)] bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="flex-1 flex flex-col">
                  <div className="text-6xl font-black text-[rgb(180,22,40)] mb-4 leading-none">01</div>
                  <CardTitle className="text-2xl sm:text-2xl font-bold mb-4">Clear Laws</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-700 leading-relaxed text-base">
                    The real estate market in the United States is fully regulated and has clear laws for all real estate transactions, giving us peace of mind throughout the entire support process for our clients.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-[rgb(180,22,40)] bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="flex-1 flex flex-col">
                  <div className="text-6xl font-black text-[rgb(180,22,40)] mb-4 leading-none">02</div>
                  <CardTitle className="text-2xl sm:text-2xl font-bold mb-4">Strong Economy</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-700 leading-relaxed text-base">
                    The United States of America has the largest and most important economy in the region by its gross domestic product (GDP) volume. Becoming one of the countries with the best financial and investment projection.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-[rgb(180,22,40)] bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="flex-1 flex flex-col">
                  <div className="text-6xl font-black text-[rgb(180,22,40)] mb-4 leading-none">03</div>
                  <CardTitle className="text-2xl sm:text-2xl font-bold mb-4">Foreign Investment</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-700 leading-relaxed text-base">
                    The American banking system is open to foreign investment, which is why we have a strategic partner to access housing credit for foreigners (Financing of 70% of the property value and fixed interest rates for up to 30 years).
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Inversión Seguras y Rentables */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <FadeIn className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[rgb(23,46,123)] mb-4 leading-tight">
              Secure and Profitable Investments
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] to-[rgb(23,46,123)] rounded-full mx-auto mb-6" />
            <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
              <span className="font-bold">We offer you Secure and Profitable investment options</span> in the <span className="font-bold text-[rgb(23,46,123)]">Real Estate</span> market in the United States.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
            <StaggerItem>
              <Card className="h-full shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 border-t-4 border-[rgb(180,22,40)] bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-black text-[rgb(23,46,123)]">Invest Together</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    Be part of a construction project thanks to our <span className="font-bold text-[rgb(180,22,40)]">Better together!</span> model
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-[rgb(180,22,40)] mr-4 font-black text-2xl mt-1">•</span>
                      <span className="text-gray-700 text-lg leading-relaxed">You can consolidate your trusted group.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[rgb(180,22,40)] mr-4 font-black text-2xl mt-1">•</span>
                      <span className="text-gray-700 text-lg leading-relaxed">Average profitability between <span className="font-bold text-[rgb(23,46,123)]">15% and 20% annually</span> of the invested value.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[rgb(180,22,40)] mr-4 font-black text-2xl mt-1">•</span>
                      <span className="text-gray-700 text-lg leading-relaxed">Real estate title shared with other investors.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 border-t-4 border-[rgb(23,46,123)] bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-black text-[rgb(23,46,123)]">Build and Sell</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    Invest 100% of the construction development of a property to achieve maximum return.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-[rgb(180,22,40)] mr-4 font-black text-2xl mt-1">•</span>
                      <span className="text-gray-700 text-lg leading-relaxed">Construction, follow-up, and marketing of the project.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[rgb(180,22,40)] mr-4 font-black text-2xl mt-1">•</span>
                      <span className="text-gray-700 text-lg leading-relaxed">Average profitability of <span className="font-bold text-[rgb(23,46,123)]">20% annually</span> of the invested value.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[rgb(180,22,40)] mr-4 font-black text-2xl mt-1">•</span>
                      <span className="text-gray-700 text-lg leading-relaxed">Sole owner of the real estate title.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn delay={0.3} className="text-center">
            <Button
              onClick={() => {
                const element = document.getElementById("contacto");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="default"
              size="default"
              className="text-xs sm:text-sm md:text-base py-2 sm:py-2.5 md:py-3 px-4 sm:px-6 md:px-8 mx-auto shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              aria-label="Get personalized consultation"
            >
              <span className="whitespace-normal sm:whitespace-nowrap text-center">Get Personalized Consultation</span>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Happy Families Gallery */}
      <HappyFamiliesGallery />

      {/* Características de Bienes Raíces */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <FadeIn className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[rgb(23,46,123)] mb-4 leading-tight">
              Real Estate Features
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] to-[rgb(23,46,123)] rounded-full mx-auto mb-6" />
            <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto font-medium">
              Everything you need to know about our Properties
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <StaggerItem>
              <Card className="h-full flex flex-col bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 bg-gradient-to-br from-[rgb(23,46,123)] to-[rgb(18,37,98)] overflow-hidden flex-shrink-0">
                  <Image
                    src="/recursos/familia-casa.webp"
                    alt="Large Lots"
                    fill
                    className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building2 className="h-16 w-16 sm:h-20 sm:w-20 text-white drop-shadow-lg" />
                  </div>
                </div>
                <CardHeader className="text-center flex-shrink-0">
                  <CardTitle className="text-xl sm:text-2xl text-[rgb(23,46,123)]">
                    Large Lots
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-1 flex items-center justify-center">
                  <p className="text-gray-700 leading-relaxed text-base">
                    Construction projects on large lots from 1,000 m² or 10,000 SqFt.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full flex flex-col bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 bg-gradient-to-br from-[rgb(180,22,40)] to-[rgb(144,18,32)] overflow-hidden flex-shrink-0">
                  <Image
                    src="/recursos/familia-cocina.webp"
                    alt="Casas"
                    fill
                    className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <HomeIcon className="h-16 w-16 sm:h-20 sm:w-20 text-white drop-shadow-lg" />
                  </div>
                </div>
                <CardHeader className="text-center flex-shrink-0">
                  <CardTitle className="text-xl sm:text-2xl text-[rgb(23,46,123)]">
                    Homes
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-1 flex items-center justify-center">
                  <p className="text-gray-700 leading-relaxed text-base">
                    Home models, from 150 to 300 m² of built area.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full flex flex-col bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 bg-gradient-to-br from-[rgb(23,46,123)] to-[rgb(18,37,98)] overflow-hidden flex-shrink-0">
                  <Image
                    src="/recursos/interior.jpg"
                    alt="Delivery Process"
                    fill
                    className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Clock className="h-16 w-16 sm:h-20 sm:w-20 text-white drop-shadow-lg" />
                  </div>
                </div>
                <CardHeader className="text-center flex-shrink-0">
                  <CardTitle className="text-xl sm:text-2xl text-[rgb(23,46,123)]">
                    Delivery Process
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-1 flex items-center justify-center">
                  <p className="text-gray-700 leading-relaxed text-base">
                    Between 10 and 12 months in construction cycle and sales process
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full flex flex-col bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 bg-gradient-to-br from-[rgb(180,22,40)] to-[rgb(144,18,32)] overflow-hidden flex-shrink-0">
                  <Image
                    src="/recursos/nosotros.jpg"
                    alt="Premium Finishes"
                    fill
                    className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Star className="h-16 w-16 sm:h-20 sm:w-20 text-white drop-shadow-lg" />
                  </div>
                </div>
                <CardHeader className="text-center flex-shrink-0">
                  <CardTitle className="text-xl sm:text-2xl text-[rgb(23,46,123)]">
                    Premium Finishes
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-1 flex items-center justify-center">
                  <p className="text-gray-700 leading-relaxed text-base">
                    Premium finishes of excellent quality and Modern Design.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full flex flex-col bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 bg-gradient-to-br from-[rgb(23,46,123)] to-[rgb(18,37,98)] overflow-hidden flex-shrink-0">
                  <Image
                    src="/recursos/playa.webp"
                    alt="Location"
                    fill
                    className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="h-16 w-16 sm:h-20 sm:w-20 text-white drop-shadow-lg" />
                  </div>
                </div>
                <CardHeader className="text-center flex-shrink-0">
                  <CardTitle className="text-xl sm:text-2xl text-[rgb(23,46,123)]">
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-1 flex items-center justify-center">
                  <p className="text-gray-700 leading-relaxed text-base">
                    Strategic location in high appreciation cities in Florida.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full flex flex-col bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 bg-gradient-to-br from-[rgb(180,22,40)] to-[rgb(144,18,32)] overflow-hidden flex-shrink-0">
                  <Image
                    src="/recursos/couple-in-real.jpg"
                    alt="Financing"
                    fill
                    className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Key className="h-16 w-16 sm:h-20 sm:w-20 text-white drop-shadow-lg" />
                  </div>
                </div>
                <CardHeader className="text-center flex-shrink-0">
                  <CardTitle className="text-xl sm:text-2xl text-[rgb(23,46,123)]">
                    Financing
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-1 flex items-center justify-center">
                  <p className="text-gray-700 leading-relaxed text-base">
                    Financing options available for foreigners with up to 70% of the property value.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Nuestras Casas Section */}
      <section id="nuestras-casas" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <FadeIn className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(23,46,123)] mb-4">
              Our Properties
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Available home models with premium features
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {models.map((model) => (
              <StaggerItem key={model.key}>
                <Card className="overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="relative aspect-[4/3] bg-gray-100 group">
                    <Image
                      src={MODEL_MAIN_IMAGES[model.key] || "/recursos/familia-casa.webp"}
                      alt={`Modelo ${model.name}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <CardHeader className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl sm:text-2xl text-[rgb(23,46,123)]">
                        {model.name}
                      </CardTitle>
                      <span className="text-lg font-bold text-[rgb(180,22,40)]">
                        {model.price}
                      </span>
                    </div>
                    <CardDescription className="text-base text-gray-600">
                      {model.sqft} SQ. FT.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <BedDouble className="h-5 w-5 text-[rgb(180,22,40)] mx-auto mb-1" />
                        <div className="text-sm font-semibold text-gray-900">{model.bedrooms}</div>
                        <div className="text-xs text-gray-500">Bedrooms</div>
                      </div>
                      <div className="text-center">
                        <Bath className="h-5 w-5 text-[rgb(180,22,40)] mx-auto mb-1" />
                        <div className="text-sm font-semibold text-gray-900">{model.bathrooms}</div>
                        <div className="text-xs text-gray-500">Bathrooms</div>
                      </div>
                      <div className="text-center">
                        <Building2 className="h-5 w-5 text-[rgb(180,22,40)] mx-auto mb-1" />
                        <div className="text-sm font-semibold text-gray-900 text-xs">
                          {model.garage.split(" ")[0]}
                        </div>
                        <div className="text-xs text-gray-500">Garage</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                      {model.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Mensaje de más modelos */}
          <FadeIn delay={0.3} className="text-center">
            <div className="bg-gradient-to-br from-[rgb(23,46,123)] via-[rgb(18,37,98)] to-[rgb(23,46,123)] rounded-3xl p-10 sm:p-14 lg:p-16 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight">
                  And more models available...
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-[rgb(180,22,40)] to-white rounded-full mx-auto mb-8" />
                <p className="text-xl sm:text-2xl text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                  We have a wide variety of models to choose from. Contact us to learn about all our available models and find the perfect one for you.
                </p>
                <Button
                  onClick={() => {
                    const element = document.getElementById("contacto");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  variant="destructive"
                  size="lg"
                  className="px-10 sm:px-12 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                >
                  View All Models
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Invierte ahora CTA */}
      <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[rgb(23,46,123)] via-[rgb(18,37,98)] to-[rgb(23,46,123)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <FadeIn className="relative aspect-video rounded-3xl overflow-hidden mb-12 shadow-2xl group hover:shadow-3xl transition-all duration-500">
            <Image
              src="/recursos/investment.jpg"
              alt="Investment in Florida"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 1024px) 100vw, 80vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/20" />
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
              Invest Now
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] to-white rounded-full mx-auto mb-10" />
            <div className="space-y-6 mb-12">
              <p className="text-xl sm:text-2xl text-white/95 leading-relaxed font-medium">
                We are located in strategic and high appreciation areas in Florida, being a mandatory stop and close to important cities like Miami, Orlando, Tampa, and Fort Myers.
              </p>
              <p className="text-xl sm:text-2xl text-white/95 leading-relaxed">
                Florida is one of the states with high development potential, which allows an unbeatable combination of construction costs and sustained growth in property appreciation.
              </p>
            </div>
            <Button
              onClick={() => {
                const element = document.getElementById("contacto");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="destructive"
              size="default"
              className="text-xs sm:text-sm md:text-base py-2 sm:py-2.5 md:py-3 px-4 sm:px-6 md:px-8 mx-auto shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              aria-label="Get personalized consultation"
            >
              <span className="whitespace-normal sm:whitespace-nowrap text-center">Get Personalized Consultation</span>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <FadeIn className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[rgb(23,46,123)] mb-4 leading-tight">
              Contact Us
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] to-[rgb(23,46,123)] rounded-full mx-auto mb-6" />
            <p className="text-xl sm:text-2xl text-gray-600 font-medium">
              We are ready to help you find the perfect investment
            </p>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-12">
            {/* Información de contacto */}
            <div className="space-y-5 sm:space-y-6 md:space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-proyecta-blue mb-3 sm:mb-4 md:mb-6">Contact Information</h3>
                <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
                  <div className="flex items-start">
                    <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 mt-1 shrink-0 text-proyecta-red" />
                    <a
                      href="https://wa.me/12392473557"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-proyecta-blue transition-colors text-sm sm:text-base md:text-lg flex items-center gap-2"
                      aria-label="Contactar por WhatsApp"
                    >
                      239 247 3557
                    </a>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 mt-1 shrink-0 text-proyecta-red" />
                    <a
                      href="mailto:investments@proyectabusinessgroup.com"
                      className="text-gray-700 hover:text-proyecta-blue transition-colors break-all text-sm sm:text-base md:text-lg"
                      aria-label="Enviar correo electrónico"
                    >
                      investments@proyectabusinessgroup.com
                    </a>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 mt-1 shrink-0 text-proyecta-red" />
                    <span className="text-gray-700 text-sm sm:text-base md:text-lg">Florida, United States</span>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/recursos/interior.jpg"
                  alt="Proyecta Business Group Office"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Botones de contacto */}
            <FadeIn delay={0.4}>
              <div className="space-y-4 sm:space-y-6">
                <Card className="p-4 sm:p-6 md:p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-[rgb(23,46,123)]">
                  <CardHeader className="text-center pb-3 sm:pb-4 md:pb-6">
                    <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[rgb(23,46,123)] mb-1.5 sm:mb-2 md:mb-3">
                      Contact Us Now
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm md:text-base text-gray-600 px-1">
                      Choose the most convenient way to get in touch with us
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-6 md:space-y-8">
                    <a
                      href="https://wa.me/12392473557"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block"
                      aria-label="Contactar por WhatsApp"
                    >
                      <Button
                        variant="default"
                        size="default"
                        className="w-full text-xs sm:text-sm md:text-base py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 shrink-0" />
                        <span className="whitespace-normal sm:whitespace-nowrap text-center">Contact Us via WhatsApp</span>
                      </Button>
                    </a>
                    <a
                      href="mailto:investments@proyectabusinessgroup.com?subject=Inquiry%20about%20Real%20Estate%20Investment&body=Hello,%20I%20am%20interested%20in%20obtaining%20more%20information%20about%20your%20real%20estate%20investment%20services."
                      className="w-full block"
                      aria-label="Send email"
                    >
                      <Button
                        variant="destructive"
                        size="default"
                        className="w-full text-xs sm:text-sm md:text-base py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <Mail className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 shrink-0" />
                        <span className="whitespace-normal sm:whitespace-nowrap text-center">Send Email</span>
                      </Button>
                    </a>
                    <Link href="/application" className="w-full block">
                      <Button
                        variant="outline"
                        size="default"
                        className="w-full text-xs sm:text-sm md:text-base py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 border-2 border-[rgb(23,46,123)]"
                        aria-label="Submit application"
                      >
                        <FileText className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 shrink-0" />
                        <span className="whitespace-normal sm:whitespace-nowrap text-center">Submit Application</span>
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Tiempos de Respuesta Rápidos */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <FadeIn className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[rgb(23,46,123)] mb-4 leading-tight">
              Fast Response Times
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] to-[rgb(23,46,123)] rounded-full mx-auto mb-6" />
            <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto font-medium">
              We value your time and respond quickly to all inquiries
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <StaggerItem>
              <Card className="h-full flex flex-col items-center text-center p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-[rgb(180,22,40)]">
                <div className="text-5xl font-black text-[rgb(180,22,40)] mb-4">&lt; 24h</div>
                <CardTitle className="text-xl sm:text-2xl mb-4">Phone Calls</CardTitle>
                <CardContent className="flex-1">
                  <p className="text-gray-700 leading-relaxed">
                    We respond to all phone inquiries in less than 24 hours
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full flex flex-col items-center text-center p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-[rgb(23,46,123)]">
                <div className="text-5xl font-black text-[rgb(23,46,123)] mb-4">&lt; 48h</div>
                <CardTitle className="text-xl sm:text-2xl mb-4">Email Inquiries</CardTitle>
                <CardContent className="flex-1">
                  <p className="text-gray-700 leading-relaxed">
                    Email responses in less than 48 hours
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full flex flex-col items-center text-center p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-[rgb(180,22,40)] sm:col-span-2 lg:col-span-1">
                <div className="text-5xl font-black text-[rgb(180,22,40)] mb-4">Same Day</div>
                <CardTitle className="text-xl sm:text-2xl mb-4">Appointments</CardTitle>
                <CardContent className="flex-1">
                  <p className="text-gray-700 leading-relaxed">
                    Schedule your visit the same day
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[rgb(18,37,98)] text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-16 mb-8 lg:mb-12">
            {/* Logo y Descripción */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Image
                  src="/Logotipo.png"
                  alt="Proyecta Business Group Logo"
                  width={240}
                  height={100}
                  className="h-auto w-auto max-w-[200px] sm:max-w-[240px]"
                  priority
                />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Complete solution for secure and profitable real estate investments in the United States.
              </p>
            </div>

            {/* Enlaces Rápidos */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("inicio");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                    aria-label="Ir a inicio"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("proposito");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                    aria-label="Go to our purpose"
                  >
                    Our Purpose
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("quienes-somos");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                    aria-label="Go to about us"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("invertir");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                    aria-label="Go to invest"
                  >
                    Want to Invest?
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("nuestras-casas");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                    aria-label="Go to our properties"
                  >
                    Our Properties
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("contacto");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                    aria-label="Go to contact"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Información de Contacto */}
            <div className="min-w-0">
              <h3 className="text-lg font-bold mb-4 text-white">Contacto</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://wa.me/12392473557"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-3"
                    aria-label="Contactar por WhatsApp"
                  >
                    <MessageCircle className="h-5 w-5 shrink-0 text-[rgb(180,22,40)]" />
                    <span>239 247 3557</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:investments@proyectabusinessgroup.com"
                    className="text-gray-300 hover:text-white transition-colors text-sm break-all flex items-start gap-3"
                    aria-label="Enviar correo electrónico"
                  >
                    <Mail className="h-5 w-5 shrink-0 text-[rgb(180,22,40)] mt-0.5" />
                    <span>investments@proyectabusinessgroup.com</span>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 shrink-0 text-[rgb(180,22,40)] mt-0.5" />
                  <span className="text-gray-300 text-sm">Florida, United States</span>
                </li>
              </ul>
            </div>

            {/* Redes Sociales */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Follow Us</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors text-sm group"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 mr-3 shrink-0" />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors text-sm group"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 mr-3 shrink-0" />
                  <span>Instagram</span>
          </a>
          <a
                  href="https://wa.me/12392473557"
            target="_blank"
            rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors text-sm group"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5 mr-3 shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Línea divisoria */}
          <div className="border-t border-white/20 pt-8 mt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-300 text-sm text-center md:text-left">
                © {new Date().getFullYear()} Proyecta Business Group. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-gray-300">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms and Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
