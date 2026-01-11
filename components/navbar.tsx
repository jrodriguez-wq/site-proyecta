"use client";

import * as React from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "inicio" },
    { label: "Nuestro Propósito", id: "proposito" },
    { label: "¿Quiénes somos?", id: "quienes-somos" },
    { label: "¿Quieres invertir?", id: "invertir" },
    { label: "Nuestras Casas", id: "nuestras-casas" },
    { label: "Contáctenos", id: "contacto" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white shadow-lg"
          : "bg-white/95 backdrop-blur-sm shadow-sm",
        className
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => handleScrollTo("inicio")}
              className="flex items-center"
              aria-label="Ir a inicio"
            >
              <Image
                src="/Logotipo.jpg"
                alt="Proyecta Business Group Logo"
                width={180}
                height={60}
                priority
                className="h-auto w-auto max-h-[60px]"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.slice(0, -1).map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-semibold transition-colors",
                  "text-gray-700 hover:text-proyecta-red hover:bg-gray-100",
                  "focus:outline-none focus:ring-2 focus:ring-proyecta-blue focus:ring-offset-2"
                )}
                aria-label={`Ir a ${item.label}`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => handleScrollTo("contacto")}
              variant="default"
              size="default"
              className="ml-2"
              aria-label="Contáctenos"
            >
              Contáctenos
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-proyecta-blue p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Menú"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 space-y-2 animate-in slide-in-from-top duration-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className={cn(
                  "block w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-colors",
                  item.id === "contacto"
                    ? "bg-proyecta-blue text-white hover:bg-[rgb(18,37,98)]"
                    : "text-gray-700 hover:text-proyecta-red hover:bg-gray-100"
                )}
                aria-label={`Ir a ${item.label}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

