"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { LocationMap } from "@/components/location-map";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";

const phone = "+1 (239) 439 50 75";
const phoneClean = phone.replace(/[^0-9]/g, ""); // Remove all non-digits for tel: links
const whatsappNumber = "12392473557";
const email = "investments@proyectabusinessgroup.com";
const address = "LaBelle, Florida";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/recursos/investment.jpg"
            alt="Proyecta Business Group - Contact Us"
            fill
            className="object-cover"
            priority
            quality={90}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/50 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
        </div>

        {/* Content */}
        <div className="relative z-20 w-full h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="space-y-6 sm:space-y-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Logo */}
                <motion.div 
                  className="flex justify-center mb-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  <Image
                    src="/Logotipo.png"
                    alt="Proyecta Business Group"
                    width={320}
                    height={120}
                    className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain drop-shadow-2xl"
                    priority
                  />
                </motion.div>

                {/* Title */}
                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.9] text-white"
                  style={{
                    textShadow: "0 4px 20px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.7), 0 0 40px rgba(0,0,0,0.5)",
                  }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                  Contact Us
                </motion.h1>

                {/* Subtitle */}
                <motion.p 
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 font-medium max-w-3xl mx-auto leading-relaxed"
                  style={{
                    textShadow: "0 2px 12px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.6)",
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                  Get in touch with our team for questions about our investment opportunities, Rent to Own program, or to learn more about our properties.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Natural Fade Out */}
        <div className="absolute bottom-0 left-0 right-0 h-40 sm:h-48 md:h-56 bg-gradient-to-t from-white via-white/40 to-transparent z-10 pointer-events-none" />
      </section>

      {/* Contact Information Cards */}
      <AnimatedSection delay={0.1}>
        <section className="py-10 md:py-14 lg:py-18 bg-white">
          <div className="container mx-auto px-4 sm:px-5 md:px-6">
            <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
              {/* Title */}
              <div className="text-center">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black mb-2 leading-tight px-4 text-[rgb(23,46,123)]">
                  Contact Information
                </h2>
                <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] via-[rgb(180,22,40)]/80 to-[rgb(180,22,40)] rounded-full mx-auto"></div>
              </div>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {/* Phone Card */}
                <Card className="hover:shadow-xl transition-all duration-300 border-2 border-[rgb(23,46,123)]/20 hover:border-[rgb(23,46,123)]/50 group hover:-translate-y-1">
                  <CardContent className="p-6 sm:p-7">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[rgb(23,46,123)]/20 rounded-xl group-hover:bg-[rgb(23,46,123)]/30 group-hover:scale-110 transition-all duration-300 shrink-0">
                        <Phone className="h-5 w-5 text-[rgb(23,46,123)]" />
                      </div>
                      <div className="flex-1 w-full min-w-0">
                        <p className="font-semibold text-xs text-muted-foreground mb-2 uppercase tracking-wider">
                          Phone
                        </p>
                        <a
                          href={`tel:${phoneClean}`}
                          className="text-sm sm:text-base font-black hover:text-[rgb(23,46,123)] transition-colors block break-words"
                        >
                          {phone}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Email Card */}
                <Card className="hover:shadow-xl transition-all duration-300 border-2 border-[rgb(23,46,123)]/20 hover:border-[rgb(23,46,123)]/50 group hover:-translate-y-1">
                  <CardContent className="p-6 sm:p-7">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[rgb(23,46,123)]/20 rounded-xl group-hover:bg-[rgb(23,46,123)]/30 group-hover:scale-110 transition-all duration-300 shrink-0">
                        <Mail className="h-5 w-5 text-[rgb(23,46,123)]" />
                      </div>
                      <div className="flex-1 w-full min-w-0">
                        <p className="font-semibold text-xs text-muted-foreground mb-2 uppercase tracking-wider">
                          Email
                        </p>
                        <a
                          href={`mailto:${email}`}
                          className="text-xs sm:text-[13px] md:text-[14px] font-black hover:text-[rgb(23,46,123)] transition-colors block break-words word-break-break-all"
                        >
                          {email}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Location Card */}
                <Card className="hover:shadow-xl transition-all duration-300 border-2 border-[rgb(23,46,123)]/20 hover:border-[rgb(23,46,123)]/50 group hover:-translate-y-1">
                  <CardContent className="p-6 sm:p-7">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[rgb(23,46,123)]/20 rounded-xl group-hover:bg-[rgb(23,46,123)]/30 group-hover:scale-110 transition-all duration-300 shrink-0">
                        <MapPin className="h-5 w-5 text-[rgb(23,46,123)]" />
                      </div>
                      <div className="flex-1 w-full min-w-0">
                        <p className="font-semibold text-xs text-muted-foreground mb-2 uppercase tracking-wider">
                          Location
                        </p>
                        <p className="text-sm sm:text-base font-black mb-1 break-words">
                          {address}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Hours Card */}
                <Card className="hover:shadow-xl transition-all duration-300 border-2 border-[rgb(23,46,123)]/20 hover:border-[rgb(23,46,123)]/50 group bg-gradient-to-br from-[rgb(23,46,123)]/5 to-transparent hover:-translate-y-1">
                  <CardContent className="p-6 sm:p-7">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[rgb(23,46,123)]/20 rounded-xl group-hover:bg-[rgb(23,46,123)]/30 group-hover:scale-110 transition-all duration-300 shrink-0">
                        <Clock className="h-5 w-5 text-[rgb(23,46,123)]" />
                      </div>
                      <div className="flex-1 w-full min-w-0">
                        <p className="font-semibold text-xs text-muted-foreground mb-2 uppercase tracking-wider">
                          Business Hours
                        </p>
                        <div className="space-y-1.5 text-xs sm:text-sm">
                          <p className="font-semibold text-foreground break-words">
                            Monday - Friday: 9am - 6pm
                          </p>
                          <p className="text-xs text-muted-foreground break-words">
                            Saturday: 10am - 4pm
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Action Buttons */}
              <div className="max-w-2xl mx-auto pt-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Button
                    asChild
                    className="w-full bg-[rgb(37,211,102)] hover:bg-[rgb(30,175,85)] text-white"
                    size="lg"
                  >
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>WhatsApp</span>
                    </a>
                  </Button>

                  <Button
                    asChild
                    className="w-full bg-[rgb(180,22,40)] hover:bg-[rgb(144,18,32)] text-white"
                    size="lg"
                  >
                    <a
                      href={`tel:${phoneClean}`}
                      className="flex items-center justify-center gap-2"
                    >
                      <Phone className="h-4 w-4" />
                      <span>Call Now</span>
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-[rgb(23,46,123)] text-[rgb(23,46,123)] hover:bg-[rgb(23,46,123)]/10"
                    size="lg"
                  >
                    <a
                      href={`mailto:${email}`}
                      className="flex items-center justify-center gap-2"
                    >
                      <Mail className="h-4 w-4" />
                      <span>Send Email</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Form */}
      <AnimatedSection delay={0.1}>
        <ContactForm />
      </AnimatedSection>

      {/* Location Map */}
      <AnimatedSection delay={0.1}>
        <LocationMap />
      </AnimatedSection>

      <Footer />
    </div>
  );
}
