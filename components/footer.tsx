"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const address = "LaBelle, Florida";
const phone = "(239) 247-3557";
const email = "customerservice@proyectabusinessgroup.com";

const footerSections = [
  {
    title: "Properties",
    links: [
      { label: "Our Models", href: "/models" },
      { label: "Rent to Own", href: "/rent-to-own" },
    ],
  },
  {
    title: "Communities",
    links: [
      { label: "LaBelle, FL", href: "/communities/labelle" },
      { label: "Lehigh Acres, FL", href: "/communities/lehigh-acres" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Home Buying Guide", href: "/home-buying-guide" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200/20 bg-[rgb(12,25,65)] text-white">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info - Larger Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/Logotipo.png"
                alt="Proyecta Business Group"
                width={200}
                height={70}
                className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                priority
              />
            </Link>
            <p className="text-sm text-white/80 leading-relaxed max-w-md">
              Invierte en Bienes Raíces en los Estados Unidos y diversifica tu patrimonio en Dólares. Solución integral para una inversión confiable, rentable y segura.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[rgb(180,22,40)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-white/90 mb-1">Address</p>
                  <p className="text-sm text-white/70">{address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-[rgb(180,22,40)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-white/90 mb-1">Phone</p>
                  <a
                    href={`tel:${phone.replace(/[^0-9]/g, "")}`}
                    className="text-sm text-white/70 hover:text-[rgb(180,22,40)] transition-colors block"
                  >
                    {phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-[rgb(180,22,40)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-white/90 mb-1">Email</p>
                  <a
                    href={`mailto:${email}`}
                    className="text-sm text-white/70 hover:text-[rgb(180,22,40)] transition-colors break-words"
                  >
                    {email}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-white/90 mb-3">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-[rgb(180,22,40)]/20 text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-[rgb(180,22,40)]/20 text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-[rgb(180,22,40)]/20 text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-3">
              <h4 className="font-bold text-white text-sm uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white inline-block hover:translate-x-1 transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-12 md:mt-16 pt-6 sm:pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-white/70">
            <p>
              Copyright © 2026 Proyecta Business Group. All Rights Reserved
            </p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
