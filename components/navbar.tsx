"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Manejar scroll cuando se navega desde otra página con hash
  React.useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const hash = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [pathname]);

  const handleScrollTo = (id: string) => {
    // Si estamos en otra página, navegar a la página principal primero
    if (pathname !== "/") {
      router.push(`/#${id}`);
      setMobileMenuOpen(false);
      return;
    }

    // Si estamos en la página principal, hacer scroll
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleLogoClick = () => {
    if (pathname !== "/") {
      router.push("/");
    } else {
      handleScrollTo("inicio");
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
          <div className="flex items-center shrink-0">
            <button
              onClick={handleLogoClick}
              className="flex items-center h-full"
              aria-label="Ir a inicio"
            >
              <Image
                src="/Logotipo.png"
                alt="Proyecta Business Group Logo"
                width={200}
                height={70}
                priority
                className="h-[50px] sm:h-[60px] lg:h-[70px] w-auto object-contain"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
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
              asChild
              variant="destructive"
              size="default"
              className="ml-1"
              aria-label="Aplicar"
            >
              <Link href="/application">Aplicar</Link>
            </Button>
            <Button
              onClick={() => handleScrollTo("contacto")}
              variant="default"
              size="default"
              className="ml-1"
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
            <Link
              href="/application"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-colors bg-[rgb(180,22,40)] text-white hover:bg-[rgb(144,18,32)]"
              aria-label="Aplicar"
            >
              Aplicar
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

