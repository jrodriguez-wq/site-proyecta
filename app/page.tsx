"use client";

import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { HeroSlider } from "@/components/hero-slider";
import { HappyFamiliesGallery } from "@/components/happy-families-gallery";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Home as HomeIcon, Building2, Clock, Star, BedDouble, Bath, Key, Facebook, Instagram, MessageCircle } from "lucide-react";
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
                alt="Nosotros - Proyecta Business Group"
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
                  Nuestro Propósito
                </h2>
                <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] to-[rgb(23,46,123)] rounded-full mb-6 sm:mb-8" />
              </div>
              <div className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed space-y-4 sm:space-y-6">
                <p className="font-medium">
                  Creemos firmemente en la importancia de <span className="font-bold text-[rgb(23,46,123)]">diversificar</span> tu patrimonio en una moneda tan fuerte como el <span className="font-bold text-[rgb(180,22,40)]">dólar</span>.
                </p>
                <p>
                  Por este motivo brindamos a nuestros clientes una solución integral al momento de pensar en invertir y <span className="font-bold text-[rgb(23,46,123)]">generar ingresos pasivos</span>.
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
              ¿Quiénes somos?
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] to-[rgb(23,46,123)] rounded-full mx-auto mb-10" />
            <div className="max-w-4xl mx-auto text-lg sm:text-xl text-gray-700 leading-relaxed space-y-6">
              <p className="font-medium">
                Nuestra compañía se creó a partir de la necesidad de nuestros clientes de recibir una solución integral al momento de diversificar su patrimonio, y generar ingresos pasivos en dólares.
              </p>
              <p>
                Cuando pensamos en invertir fuera de nuestro país de origen surgen naturalmente muchas dudas, por esto, con nuestra experiencia de más de 5 años en el mercado Inmobiliario en los Estados Unidos, nos hemos dedicado a desarrollar proyectos de Inversión en Bienes Raíces transparentes, seguros y rentables.
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
                        alt="Juliana Bonilla - Fundadora y CEO"
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
                        Fundadora y CEO
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
                          Juliana Bonilla aporta experiencia en administración y ventas, asegurando operaciones fluidas y un excelente servicio al cliente.
                        </p>
                        <p>
                          Está dedicada a ayudar a las familias a encontrar su casa soñada. Contamos con un equipo de profesionales que brinda un servicio de alta calidad a través de la excelencia, efectividad, ética, honestidad y confidencialidad.
                        </p>
                        <p>
                          Te ofrecemos una solución integral al momento de invertir en Finca Raíz en el estado de la Florida de los Estados Unidos, siendo los aliados estratégicos de proyectos de construcción y de comercialización de viviendas nuevas.
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
                          className="w-full text-sm sm:text-base py-2.5 sm:py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                          aria-label="Quiero recibir asesoría personalizada"
                        >
                          Quiero recibir asesoría personalizada
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
                Mas que una inversión, creamos proyectos de Vida
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
              ¿Estas pensando en Invertir?
            </h2>
            <p className="text-xl text-gray-600">Algunos Tips…</p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <StaggerItem>
              <Card className="h-full flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-[rgb(180,22,40)] bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="flex-1 flex flex-col">
                  <div className="text-6xl font-black text-[rgb(180,22,40)] mb-4 leading-none">01</div>
                  <CardTitle className="text-2xl sm:text-2xl font-bold mb-4">Leyes claras</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-700 leading-relaxed text-base">
                    El mercado de bienes raíces en los Estados Unidos esta completamente reglamentado y cuenta con leyes claras para todas las transacciones inmobiliarias brindándonos tranquilidad en todo el proceso de acompañamiento para nuestros clientes.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-[rgb(180,22,40)] bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="flex-1 flex flex-col">
                  <div className="text-6xl font-black text-[rgb(180,22,40)] mb-4 leading-none">02</div>
                  <CardTitle className="text-2xl sm:text-2xl font-bold mb-4">Economía fuerte</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-700 leading-relaxed text-base">
                    Estados Unidos de América es la economía más grande e importante de la región por su volumen de producto interno bruto (PIB). Convirtiéndose en uno de los países con la mejor proyección financiera y de inversiones.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-[rgb(180,22,40)] bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="flex-1 flex flex-col">
                  <div className="text-6xl font-black text-[rgb(180,22,40)] mb-4 leading-none">03</div>
                  <CardTitle className="text-2xl sm:text-2xl font-bold mb-4">Inversión extranjera</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-700 leading-relaxed text-base">
                    El sistema bancario americano está abierto para la inversión extranjera, por esto contamos un aliado estratégico para acceder a un crédito de vivienda para extranjeros (Financiamiento del 70% del valor de la vivienda e intereses fijos hasta 30 años).
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
              inversión Seguras y Rentables
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] to-[rgb(23,46,123)] rounded-full mx-auto mb-6" />
            <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
              <span className="font-bold">Te ofrecemos opciones de inversión Seguras y Rentables</span> en el mercado de <span className="font-bold text-[rgb(23,46,123)]">Propiedad Raíz</span> en los Estados Unidos.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
            <StaggerItem>
              <Card className="h-full shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 border-t-4 border-[rgb(180,22,40)] bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-black text-[rgb(23,46,123)]">Invierte en conjunto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    Forma parte de un proyecto de construccción gracias a nuestro modelo <span className="font-bold text-[rgb(180,22,40)]">Better together!</span>
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-[rgb(180,22,40)] mr-4 font-black text-2xl mt-1">•</span>
                      <span className="text-gray-700 text-lg leading-relaxed">Puedes consolidar tú grupo de confianza.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[rgb(180,22,40)] mr-4 font-black text-2xl mt-1">•</span>
                      <span className="text-gray-700 text-lg leading-relaxed">Rentabilidad promedio entre el <span className="font-bold text-[rgb(23,46,123)]">15% y el 20% EA</span> del valor invertido.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[rgb(180,22,40)] mr-4 font-black text-2xl mt-1">•</span>
                      <span className="text-gray-700 text-lg leading-relaxed">Título inmobiliario compartido con los demás inversionistas.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 border-t-4 border-[rgb(23,46,123)] bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-black text-[rgb(23,46,123)]">Construye y Vende</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    Invierte el 100% del desarrollo constructivo de un inmueble para lograr máximo retorno.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-[rgb(180,22,40)] mr-4 font-black text-2xl mt-1">•</span>
                      <span className="text-gray-700 text-lg leading-relaxed">Construcción, seguimiento y comercialización del proyecto.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[rgb(180,22,40)] mr-4 font-black text-2xl mt-1">•</span>
                      <span className="text-gray-700 text-lg leading-relaxed">Rentabilidad promedio del <span className="font-bold text-[rgb(23,46,123)]">20% EA</span> del valor invertido.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[rgb(180,22,40)] mr-4 font-black text-2xl mt-1">•</span>
                      <span className="text-gray-700 text-lg leading-relaxed">Único dueño de Título inmobiliario.</span>
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
              size="lg"
              className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              aria-label="Quiero recibir asesoría personalizada"
            >
              Quiero recibir asesoría personalizada
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
              Caracteristicas de Bienes Raíces
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] to-[rgb(23,46,123)] rounded-full mx-auto mb-6" />
            <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto font-medium">
              Todo lo que necesitas saber sobre nuestras propiedades
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <StaggerItem>
              <Card className="h-full flex flex-col bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 bg-gradient-to-br from-[rgb(23,46,123)] to-[rgb(18,37,98)] overflow-hidden flex-shrink-0">
                  <Image
                    src="/recursos/familia-casa.webp"
                    alt="Lotes Amplios"
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
                    Lotes Amplios
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-1 flex items-center justify-center">
                  <p className="text-gray-700 leading-relaxed text-base">
                    Proyectos de construcción en amplios Lotes desde 1.000 mts2. o 10,000 SqFt.
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
                    Casas
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-1 flex items-center justify-center">
                  <p className="text-gray-700 leading-relaxed text-base">
                    Modelos de Casas, desde 150 a 300 mts2 de área construida.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full flex flex-col bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 bg-gradient-to-br from-[rgb(23,46,123)] to-[rgb(18,37,98)] overflow-hidden flex-shrink-0">
                  <Image
                    src="/recursos/interior.jpg"
                    alt="Proceso de Entrega"
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
                    Proceso de Entrega
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-1 flex items-center justify-center">
                  <p className="text-gray-700 leading-relaxed text-base">
                    Entre 10 y 12 meses en ciclo de construcción y proceso de venta
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full flex flex-col bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 bg-gradient-to-br from-[rgb(180,22,40)] to-[rgb(144,18,32)] overflow-hidden flex-shrink-0">
                  <Image
                    src="/recursos/nosotros.jpg"
                    alt="Acabados Premium"
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
                    Acabados Premium
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-1 flex items-center justify-center">
                  <p className="text-gray-700 leading-relaxed text-base">
                    Acabados Premium de excelente calidad y Diseño Moderno.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full flex flex-col bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 bg-gradient-to-br from-[rgb(23,46,123)] to-[rgb(18,37,98)] overflow-hidden flex-shrink-0">
                  <Image
                    src="/recursos/playa.webp"
                    alt="Ubicación"
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
                    Ubicación
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-1 flex items-center justify-center">
                  <p className="text-gray-700 leading-relaxed text-base">
                    Ubicación estratégica en ciudades de alta valorización en Florida.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full flex flex-col bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 bg-gradient-to-br from-[rgb(180,22,40)] to-[rgb(144,18,32)] overflow-hidden flex-shrink-0">
                  <Image
                    src="/recursos/couple-in-real.jpg"
                    alt="Financiamiento"
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
                    Financiamiento
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-1 flex items-center justify-center">
                  <p className="text-gray-700 leading-relaxed text-base">
                    Opciones de financiamiento disponibles para extranjeros con hasta 70% del valor de la vivienda.
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
              Nuestras Casas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modelos de casas disponibles con características premium
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
                        <div className="text-xs text-gray-500">Dormitorios</div>
                      </div>
                      <div className="text-center">
                        <Bath className="h-5 w-5 text-[rgb(180,22,40)] mx-auto mb-1" />
                        <div className="text-sm font-semibold text-gray-900">{model.bathrooms}</div>
                        <div className="text-xs text-gray-500">Baños</div>
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
                  Y más modelos disponibles...
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-[rgb(180,22,40)] to-white rounded-full mx-auto mb-8" />
                <p className="text-xl sm:text-2xl text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                  Contamos con una amplia variedad de modelos para elegir. Contáctanos para conocer todos nuestros modelos disponibles y encontrar el perfecto para ti.
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
                  Ver todos los modelos
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
              alt="Inversión en Florida"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 1024px) 100vw, 80vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/20" />
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
              Invierte ahora
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] to-white rounded-full mx-auto mb-10" />
            <div className="space-y-6 mb-12">
              <p className="text-xl sm:text-2xl text-white/95 leading-relaxed font-medium">
                Estamos ubicados en zonas estratégicas y de alta valorización en Florida, debido a ser un paso obligado y cercano a importantes ciudades como Miami, Orlando, Tampa, Fort Myers.
              </p>
              <p className="text-xl sm:text-2xl text-white/95 leading-relaxed">
                Florida es uno de los estados con alto potencial de desarrollo, lo cual permite una mezcla imbatible de costos de construcción y crecimientos sostenidos en la valorización de la vivienda.
              </p>
            </div>
            <Button
              onClick={() => {
                const element = document.getElementById("contacto");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="destructive"
              size="lg"
              className="shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              aria-label="Quiero recibir asesoría personalizada"
            >
              Quiero recibir asesoría personalizada
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <FadeIn className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[rgb(23,46,123)] mb-4 leading-tight">
              Contáctenos
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] to-[rgb(23,46,123)] rounded-full mx-auto mb-6" />
            <p className="text-xl sm:text-2xl text-gray-600 font-medium">
              Estamos listos para ayudarte a encontrar la inversión perfecta
            </p>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Información de contacto */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-proyecta-blue mb-6">Información de contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MessageCircle className="h-5 w-5 mr-3 mt-1 shrink-0 text-proyecta-red" />
                    <a
                      href="https://wa.me/12392473557"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-proyecta-blue transition-colors text-lg flex items-center gap-2"
                      aria-label="Contactar por WhatsApp"
                    >
                      239 247 3557
                    </a>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 mt-1 shrink-0 text-proyecta-red" />
                    <a
                      href="mailto:investments@proyectabusinessgroup.com"
                      className="text-gray-700 hover:text-proyecta-blue transition-colors break-all text-lg"
                      aria-label="Enviar correo electrónico"
                    >
                      investments@proyectabusinessgroup.com
                    </a>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 mt-1 shrink-0 text-proyecta-red" />
                    <span className="text-gray-700 text-lg">Florida, Estados Unidos</span>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/recursos/interior.jpg"
                  alt="Oficina Proyecta Business Group"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Botones de contacto */}
            <FadeIn delay={0.4}>
              <div className="space-y-6">
                <Card className="p-8 sm:p-10 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-[rgb(23,46,123)]">
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-2xl sm:text-3xl text-[rgb(23,46,123)] mb-3">
                      Contáctanos ahora
                    </CardTitle>
                    <CardDescription className="text-base text-gray-600">
                      Elige la forma más conveniente para ponerte en contacto con nosotros
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <a
                      href="https://wa.me/12392473557"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block"
                      aria-label="Contactar por WhatsApp"
                    >
                      <Button
                        variant="default"
                        size="lg"
                        className="w-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                      >
                        <MessageCircle className="h-6 w-6" />
                        <span>Contáctanos por WhatsApp</span>
                      </Button>
                    </a>
                    <a
                      href="mailto:investments@proyectabusinessgroup.com?subject=Consulta%20sobre%20Inversión%20en%20Bienes%20Raíces&body=Hola,%20me%20interesa%20obtener%20más%20información%20sobre%20sus%20servicios%20de%20inversión%20en%20bienes%20raíces."
                      className="w-full block"
                      aria-label="Enviar correo electrónico"
                    >
                      <Button
                        variant="destructive"
                        size="lg"
                        className="w-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                      >
                        <Mail className="h-6 w-6" />
                        <span>Enviar Correo Electrónico</span>
                      </Button>
                    </a>
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
              Tiempos de Respuesta Rápidos
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] to-[rgb(23,46,123)] rounded-full mx-auto mb-6" />
            <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto font-medium">
              Valoramos tu tiempo y respondemos rápidamente a todas las consultas
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <StaggerItem>
              <Card className="h-full flex flex-col items-center text-center p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-[rgb(180,22,40)]">
                <div className="text-5xl font-black text-[rgb(180,22,40)] mb-4">&lt; 24h</div>
                <CardTitle className="text-xl sm:text-2xl mb-4">Llamadas Telefónicas</CardTitle>
                <CardContent className="flex-1">
                  <p className="text-gray-700 leading-relaxed">
                    Respondemos a todas las consultas telefónicas en menos de 24 horas
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full flex flex-col items-center text-center p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-[rgb(23,46,123)]">
                <div className="text-5xl font-black text-[rgb(23,46,123)] mb-4">&lt; 48h</div>
                <CardTitle className="text-xl sm:text-2xl mb-4">Consultas por Email</CardTitle>
                <CardContent className="flex-1">
                  <p className="text-gray-700 leading-relaxed">
                    Respuestas por email en menos de 48 horas
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full flex flex-col items-center text-center p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-[rgb(180,22,40)] sm:col-span-2 lg:col-span-1">
                <div className="text-5xl font-black text-[rgb(180,22,40)] mb-4">Mismo Día</div>
                <CardTitle className="text-xl sm:text-2xl mb-4">Citas</CardTitle>
                <CardContent className="flex-1">
                  <p className="text-gray-700 leading-relaxed">
                    Programa tu visita el mismo día
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
                  src="/favicon.png"
                  alt="Proyecta Business Group Logo"
                  width={180}
                  height={90}
                  className="h-auto w-auto max-w-[180px]"
                  priority
                />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Solución integral para inversiones inmobiliarias seguras y rentables en Estados Unidos.
              </p>
            </div>

            {/* Enlaces Rápidos */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Enlaces Rápidos</h3>
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
                    aria-label="Ir a nuestro propósito"
                  >
                    Nuestro Propósito
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("quienes-somos");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                    aria-label="Ir a quiénes somos"
                  >
                    ¿Quiénes somos?
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("invertir");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                    aria-label="Ir a invertir"
                  >
                    ¿Quieres invertir?
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("nuestras-casas");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                    aria-label="Ir a nuestras casas"
                  >
                    Nuestras Casas
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("contacto");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                    aria-label="Ir a contacto"
                  >
                    Contáctenos
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
                  <span className="text-gray-300 text-sm">Florida, Estados Unidos</span>
                </li>
              </ul>
            </div>

            {/* Redes Sociales */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Síguenos</h3>
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
                © {new Date().getFullYear()} Proyecta Business Group. Todos los derechos reservados.
              </p>
              <div className="flex gap-6 text-sm text-gray-300">
                <a href="#" className="hover:text-white transition-colors">
                  Política de Privacidad
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Términos y Condiciones
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
