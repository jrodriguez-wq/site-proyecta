"use client";

import { Button } from "@/components/ui/button";
import { MapPin, Phone, ExternalLink, Mail, MessageCircle } from "lucide-react";

const address = "LaBelle, Florida";
const googleMapsUrl = "https://www.google.com/maps/search/LaBelle,+Florida";
const phone = "+1 (239) 439 50 75";
const phoneClean = phone.replace(/[^0-9]/g, ""); // Remove all non-digits for tel: links
const whatsappNumber = "12392473557";
const email = "investments@proyectabusinessgroup.com";

export const LocationMap = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[rgb(23,46,123)]">Our Main Operations Center</h2>
          <p className="mx-auto max-w-[700px] text-gray-600 text-lg md:text-xl">Located in LaBelle, Florida - Our main operations center where we serve families across the region.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Mapa - Ocupa 2 columnas */}
          <div className="lg:col-span-2">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57019.439055401584!2d-81.49168045607226!3d26.721552266313363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db8368fb7ecfdd%3A0x7369cf646024c0c5!2sLaBelle%2C%20FL%2033935%2C%20USA!5e0!3m2!1sen!2sco!4v1769316105144!5m2!1sen!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Proyecta Business Group - Main Operations Center in LaBelle, Florida"
                className="absolute inset-0"
              />
            </div>
          </div>

          {/* Información de Contacto y Botones - Ocupa 1 columna */}
          <div className="space-y-6">
            {/* Información de Contacto */}
            <div className="bg-gradient-to-br from-[rgb(23,46,123)]/5 to-white rounded-2xl p-6 space-y-6 shadow-lg">
              <div>
                <h3 className="text-xl font-black text-[rgb(23,46,123)] mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[rgb(180,22,40)]" />
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Location</p>
                    <p className="text-gray-900 font-semibold">{address}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                    <a
                      href={`tel:${phoneClean}`}
                      className="text-gray-900 font-semibold hover:text-[rgb(180,22,40)] transition-colors cursor-pointer block"
                    >
                      {phone}
                    </a>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Email</p>
                    <a
                      href={`mailto:${email}`}
                      className="text-gray-900 font-semibold hover:text-[rgb(180,22,40)] transition-colors cursor-pointer block break-words"
                    >
                      {email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Botones de Acción */}
            <div className="space-y-3">
              <Button
                asChild
                className="w-full bg-[rgb(37,211,102)] hover:bg-[rgb(30,175,85)] text-white shadow-lg hover:shadow-xl transition-all"
                size="lg"
              >
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp</span>
                </a>
              </Button>

              <Button
                asChild
                className="w-full bg-[rgb(180,22,40)] hover:bg-[rgb(144,18,32)] text-white shadow-lg hover:shadow-xl transition-all"
                size="lg"
              >
                <a
                  href={`tel:${phoneClean}`}
                  className="flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full border-2 border-[rgb(23,46,123)] text-[rgb(23,46,123)] hover:bg-[rgb(23,46,123)] hover:text-white transition-all"
                size="lg"
              >
                <a
                  href={`mailto:${email}`}
                  className="flex items-center justify-center gap-2"
                >
                  <Mail className="h-5 w-5" />
                  <span>Send Email</span>
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition-all"
                size="lg"
              >
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>View on Maps</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
