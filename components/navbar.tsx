"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, Phone, X, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface NavigationItem {
  title: string;
  href: string;
  children?: Array<{
    title: string;
    href: string;
    description?: string;
  }>;
}

const phone = "+1 (239) 439 50 75";

const navigationItems: NavigationItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Rent to Own",
    href: "/rent-to-own",
  },
  {
    title: "Buy a Home",
    href: "#",
    children: [
      {
        title: "Our Models",
        href: "/models",
        description: "Explore our complete collection of models",
      },
      {
        title: "LaBelle",
        href: "/communities/labelle",
        description: "Beautiful new homes in the heart of LaBelle, Florida",
      },
      {
        title: "Lehigh Acres",
        href: "/communities/lehigh-acres",
        description: "Modern homes in growing Lehigh Acres community",
      },
    ],
  },
  {
    title: "Resources",
    href: "#",
    children: [
      {
        title: "Blog",
        href: "/blog",
        description: "Expert guides and resources about real estate, taxes, and homeownership",
      },
      {
        title: "Home Buying Guide",
        href: "/home-buying-guide",
        description: "Learn everything about buying a home",
      },
    ],
  },
  {
    title: "Company",
    href: "#",
    children: [
      {
        title: "About Us",
        href: "/about-us",
        description: "Learn more about Proyecta Business Group",
      },
      {
        title: "Contact",
        href: "/contact",
        description: "Get in touch with our team",
      },
    ],
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const [justClosed, setJustClosed] = useState(false);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown) {
        const dropdownElement = dropdownRefs.current[openDropdown];
        if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
          setOpenDropdown(null);
        }
      }
    };

    if (openDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [openDropdown]);

  // Manejar hover con delay de 1 segundo
  const handleMouseEnter = (itemTitle: string) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    
    if (openDropdown === itemTitle) {
      return;
    }
    
    if (justClosed) {
      return;
    }
    
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    const timeout = setTimeout(() => {
      setOpenDropdown(itemTitle);
    }, 1000);
    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    
    if (openDropdown) {
      const timeout = setTimeout(() => {
        setOpenDropdown(null);
      }, 200);
      setCloseTimeout(timeout);
    }
  };
  
  const handleDropdownMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
  };
  
  const handleDropdownMouseLeave = () => {
    if (openDropdown) {
      const timeout = setTimeout(() => {
        setOpenDropdown(null);
      }, 200);
      setCloseTimeout(timeout);
    }
  };

  const handleClick = (itemTitle: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setJustClosed(false);
    if (openDropdown === itemTitle) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(itemTitle);
    }
  };

  const handleLinkClick = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setJustClosed(true);
    setOpenDropdown(null);
    setIsOpen(false);
    
    setTimeout(() => {
      setJustClosed(false);
    }, 2000);
  };
  
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
      if (closeTimeout) {
        clearTimeout(closeTimeout);
      }
    };
  }, [hoverTimeout, closeTimeout]);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-[100] w-full border-b border-gray-200/20 bg-white/95 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/80 shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
      role="banner"
    >
      {/* Elegant top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgb(23,46,123)]/30 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 md:h-18 lg:h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            aria-label="Proyecta Business Group - Home"
          >
            <Image
              src="/Logotipo.png"
              alt="Proyecta Business Group"
              width={200}
              height={70}
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation - Premium Design */}
          <nav 
            className="hidden lg:flex items-center gap-1 xl:gap-2" 
            role="navigation" 
            aria-label="Main navigation"
          >
            {navigationItems.map((item, index) => {
              if (item.children) {
                const isOpen = openDropdown === item.title;
                return (
                  <div
                    key={item.title}
                    className="relative"
                    ref={(el) => {
                      dropdownRefs.current[item.title] = el;
                    }}
                    onMouseEnter={() => handleMouseEnter(item.title)}
                    onMouseLeave={handleMouseLeave}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <button
                      onClick={() => handleClick(item.title)}
                      className={cn(
                        "group relative inline-flex h-10 items-center justify-center rounded-lg px-2 xl:px-3 py-2",
                        "text-xs xl:text-sm font-semibold tracking-normal transition-all duration-300 ease-out whitespace-nowrap",
                        "text-gray-700 hover:text-[rgb(23,46,123)]",
                        "before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-[rgb(23,46,123)]/0 before:via-[rgb(23,46,123)]/0 before:to-[rgb(23,46,123)]/0",
                        "before:transition-all before:duration-300 before:opacity-0",
                        "hover:before:opacity-100 hover:before:from-[rgb(23,46,123)]/5 hover:before:via-[rgb(23,46,123)]/8 hover:before:to-[rgb(23,46,123)]/5",
                        isOpen && "text-[rgb(23,46,123)] before:opacity-100 before:from-[rgb(23,46,123)]/8 before:via-[rgb(23,46,123)]/10 before:to-[rgb(23,46,123)]/8",
                        "after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2",
                        "after:bg-gradient-to-r after:from-transparent after:via-[rgb(23,46,123)] after:to-transparent",
                        "after:transition-all after:duration-300",
                        (isOpen || "group-hover:after:w-3/4")
                      )}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      aria-label={`${item.title} menu`}
                    >
                      <span className="relative z-10 flex items-center gap-1 xl:gap-1.5">
                        {item.title}
                        <ChevronDown
                          className={cn(
                            "h-3 w-3 transition-all duration-300 ease-out",
                            isOpen && "rotate-180 text-[rgb(23,46,123)]"
                          )}
                          aria-hidden="true"
                        />
                      </span>
                    </button>

                    {/* Premium Dropdown Menu */}
                    {isOpen && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-[420px] min-w-[280px] lg:w-[480px] lg:min-w-[480px] rounded-xl border border-gray-200/30 bg-white/98 backdrop-blur-2xl shadow-[0_20px_60px_-12px_rgba(0,0,0,0.15)] overflow-hidden"
                        role="menu"
                        aria-label={`${item.title} submenu`}
                        onMouseEnter={handleDropdownMouseEnter}
                        onMouseLeave={handleDropdownMouseLeave}
                        style={{ maxWidth: 'min(480px, calc(100vw - 2rem))' }}
                      >
                        {/* Elegant gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(23,46,123)]/5 via-transparent to-[rgb(23,46,123)]/5 pointer-events-none" />
                        
                        {/* Top accent line */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgb(23,46,123)]/40 to-transparent" />
                        
                        <div className="relative p-4">
                          <div className="grid gap-2">
                            {item.children.map((child, childIndex) => (
                              <Link
                                key={child.title}
                                href={child.href}
                                onClick={handleLinkClick}
                                className={cn(
                                  "group/item relative block rounded-lg p-3.5 transition-all duration-300 ease-out",
                                  "border border-transparent hover:border-[rgb(23,46,123)]/20",
                                  "bg-white/50 hover:bg-gradient-to-br hover:from-[rgb(23,46,123)]/5 hover:via-[rgb(23,46,123)]/3 hover:to-transparent",
                                  "cursor-pointer overflow-hidden",
                                  "hover:shadow-md hover:shadow-[rgb(23,46,123)]/5"
                                )}
                                style={{ animationDelay: `${childIndex * 30}ms` }}
                                role="menuitem"
                                aria-label={child.title}
                              >
                                {/* Subtle background glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(23,46,123)]/0 via-[rgb(23,46,123)]/0 to-[rgb(23,46,123)]/0 group-hover/item:from-[rgb(23,46,123)]/10 group-hover/item:via-[rgb(23,46,123)]/5 group-hover/item:to-transparent transition-all duration-500 rounded-lg opacity-0 group-hover/item:opacity-100" />
                                
                                <div className="relative flex items-start justify-between gap-3">
                                  <div className="flex-1 space-y-1.5 min-w-0 pr-2">
                                    <div className="flex items-start gap-2">
                                      <div className="h-1 w-1 rounded-full bg-[rgb(23,46,123)]/0 group-hover/item:bg-[rgb(23,46,123)] transition-all duration-300 group-hover/item:scale-150 shrink-0 mt-1.5" />
                                      <h3 className="text-sm font-semibold leading-tight text-gray-900 group-hover/item:text-[rgb(23,46,123)] transition-colors duration-300 tracking-normal break-words">
                                        {child.title}
                                      </h3>
                                    </div>
                                    {child.description && (
                                      <p className="text-xs leading-snug text-gray-600/70 group-hover/item:text-gray-600/90 transition-colors duration-300 pl-3 break-words line-clamp-2">
                                        {child.description}
                                      </p>
                                    )}
                                  </div>
                                  <ChevronDown className="h-3.5 w-3.5 text-gray-400/30 group-hover/item:text-[rgb(23,46,123)] transition-all duration-300 -rotate-90 opacity-0 group-hover/item:opacity-100 shrink-0 mt-0.5" aria-hidden="true" />
                                </div>
                                
                                {/* Elegant bottom accent line */}
                                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgb(23,46,123)]/0 to-transparent group-hover/item:via-[rgb(23,46,123)]/40 transition-all duration-500" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={cn(
                    "group relative inline-flex h-10 items-center justify-center rounded-lg px-2 xl:px-3 py-2",
                    "text-xs xl:text-sm font-semibold tracking-normal transition-all duration-300 ease-out whitespace-nowrap",
                    "text-gray-700 hover:text-[rgb(23,46,123)]",
                    "before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-[rgb(23,46,123)]/0 before:via-[rgb(23,46,123)]/0 before:to-[rgb(23,46,123)]/0",
                    "before:transition-all before:duration-300 before:opacity-0",
                    "hover:before:opacity-100 hover:before:from-[rgb(23,46,123)]/5 hover:before:via-[rgb(23,46,123)]/8 hover:before:to-[rgb(23,46,123)]/5",
                    "after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2",
                    "after:bg-gradient-to-r after:from-transparent after:via-[rgb(23,46,123)] after:to-transparent",
                    "after:transition-all after:duration-300",
                    "group-hover:after:w-3/4"
                  )}
                >
                  <span className="relative z-10">{item.title}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Side Actions - Botones → Teléfono */}
          <div className="flex items-center gap-1.5 lg:gap-2 xl:gap-3">
            {/* Premium CTA Button - Apply Now */}
            <Button
              asChild
              className={cn(
                "hidden lg:flex bg-gradient-to-r from-[rgb(180,22,40)] via-[rgb(180,22,40)] to-[rgb(180,22,40)]/95",
                "hover:from-[rgb(144,18,32)] hover:via-[rgb(180,22,40)] hover:to-[rgb(180,22,40)]",
                "text-white px-3 xl:px-4 2xl:px-6 py-2 text-xs xl:text-sm font-bold tracking-wide whitespace-nowrap",
                "shadow-lg shadow-[rgb(180,22,40)]/25 hover:shadow-xl hover:shadow-[rgb(180,22,40)]/40",
                "transition-all duration-300 ease-out",
                "hover:scale-105 active:scale-100",
                "rounded-xl border border-[rgb(180,22,40)]/20",
                "relative overflow-hidden group/cta",
                "before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0",
                "before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
              )}
              size="default"
            >
              <Link href="/contact" className="relative z-10 flex items-center gap-1 xl:gap-1.5">
                <Sparkles className="h-3 w-3 xl:h-3.5 xl:w-3.5 opacity-80 group-hover/cta:opacity-100 transition-opacity duration-300" />
                <span>Apply Now</span>
              </Link>
            </Button>

            {/* Contact Button */}
            <Button
              asChild
              className={cn(
                "hidden lg:flex bg-gradient-to-r from-[rgb(23,46,123)] via-[rgb(23,46,123)] to-[rgb(23,46,123)]/95",
                "hover:from-[rgb(18,37,98)] hover:via-[rgb(23,46,123)] hover:to-[rgb(23,46,123)]",
                "text-white px-3 xl:px-4 2xl:px-5 py-2 text-xs xl:text-sm font-bold tracking-wide whitespace-nowrap",
                "shadow-lg shadow-[rgb(23,46,123)]/25 hover:shadow-xl hover:shadow-[rgb(23,46,123)]/40",
                "transition-all duration-300 ease-out",
                "hover:scale-105 active:scale-100",
                "rounded-xl border border-[rgb(23,46,123)]/20",
                "relative overflow-hidden group/contact",
                "before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0",
                "before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
              )}
              size="default"
            >
              <Link href="/contact" className="relative z-10 flex items-center gap-1 xl:gap-1.5">
                <span>Contact</span>
              </Link>
            </Button>

            {/* Premium Phone Link - Solo icono en pantallas grandes */}
            <a
              href={`tel:${phone.replace(/[^0-9]/g, "")}`}
              className="hidden lg:flex items-center justify-center h-9 w-9 rounded-lg text-gray-700 hover:text-[rgb(23,46,123)] transition-all duration-300 hover:bg-[rgb(23,46,123)]/5 cursor-pointer border border-transparent hover:border-[rgb(23,46,123)]/10 group/phone"
              aria-label={`Call us at ${phone}`}
            >
              <Phone className="h-4 w-4 transition-transform duration-300 group-hover/phone:scale-110" />
            </a>

            {/* Mobile Menu - Premium Design */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-11 w-11 rounded-xl hover:bg-[rgb(23,46,123)]/10 hover:text-[rgb(23,46,123)] transition-all duration-300 border border-transparent hover:border-[rgb(23,46,123)]/10"
                  aria-label="Toggle menu"
                >
                  {isOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full sm:w-[420px] p-0 flex flex-col bg-white/98 backdrop-blur-2xl border-l border-gray-200/20"
              >
                {/* Elegant top accent */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgb(23,46,123)]/30 to-transparent" />
                
                <SheetHeader className="px-6 pt-8 pb-6 border-b border-gray-200/20">
                  <div className="flex items-center justify-between">
                    <SheetTitle className="text-left text-2xl font-bold text-[rgb(23,46,123)] tracking-wide">
                      Home
                    </SheetTitle>
                    <Image
                      src="/Logotipo.png"
                      alt="Proyecta Business Group"
                      width={200}
                      height={70}
                      className="h-10 w-auto object-contain opacity-90"
                    />
                  </div>
                </SheetHeader>
                
                <nav 
                  className="flex-1 overflow-y-auto px-6 py-6" 
                  role="navigation" 
                  aria-label="Mobile navigation"
                >
                  <div className="flex flex-col gap-2">
                    {navigationItems.map((item, index) => (
                      <div key={item.title} style={{ animationDelay: `${index * 50}ms` }}>
                        {item.children ? (
                          <div className="space-y-2">
                            <button
                              onClick={() =>
                                setOpenSubmenu(
                                  openSubmenu === item.title ? null : item.title
                                )
                              }
                              className={cn(
                                "w-full flex items-center justify-between px-5 py-3.5 text-base font-bold rounded-xl transition-all duration-300 cursor-pointer",
                                "text-gray-900 hover:bg-[rgb(23,46,123)]/5 hover:text-[rgb(23,46,123)]",
                                "border border-transparent hover:border-[rgb(23,46,123)]/10",
                                openSubmenu === item.title && "bg-[rgb(23,46,123)]/5 text-[rgb(23,46,123)] border-[rgb(23,46,123)]/20 shadow-sm"
                              )}
                              aria-expanded={openSubmenu === item.title}
                              aria-haspopup="true"
                              aria-label={`${item.title} submenu`}
                            >
                              <span>{item.title}</span>
                              <ChevronDown
                                className={cn(
                                  "h-4 w-4 transition-transform duration-300",
                                  openSubmenu === item.title && "rotate-180 text-[rgb(23,46,123)]"
                                )}
                                aria-hidden="true"
                              />
                            </button>
                            {openSubmenu === item.title && (
                              <div className="pl-5 space-y-2 border-l-2 border-[rgb(23,46,123)]/30 ml-2">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.title}
                                    href={child.href === "#" ? "#" : child.href}
                                    onClick={() => {
                                      if (child.href !== "#") {
                                        setIsOpen(false);
                                        setOpenSubmenu(null);
                                      }
                                    }}
                                    className={cn(
                                      "block px-5 py-3.5 rounded-xl transition-all duration-300",
                                      child.href === "#"
                                        ? "text-gray-400 cursor-default pointer-events-none"
                                        : "text-gray-900 hover:bg-[rgb(23,46,123)]/5 hover:text-[rgb(23,46,123)] cursor-pointer border border-transparent hover:border-[rgb(23,46,123)]/10"
                                    )}
                                  >
                                    <h3 className="font-semibold text-[15px] tracking-wide break-words">
                                      {child.title}
                                    </h3>
                                    {child.description && (
                                      <p className="text-xs text-gray-600/70 mt-1.5 leading-relaxed break-words">
                                        {child.description}
                                      </p>
                                    )}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            className="block px-5 py-3.5 text-base font-semibold rounded-xl text-gray-900 hover:bg-[rgb(23,46,123)]/5 hover:text-[rgb(23,46,123)] transition-all duration-300 cursor-pointer border border-transparent hover:border-[rgb(23,46,123)]/10 tracking-wide"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.title}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </nav>
                
                <div className="px-6 py-6 border-t border-gray-200/20 space-y-4 bg-gradient-to-b from-gray-50/10 to-transparent">
                  <a
                    href={`tel:${phone.replace(/[^0-9]/g, "")}`}
                    className="flex items-center gap-3 px-5 py-3.5 text-base font-semibold rounded-xl bg-white hover:bg-[rgb(23,46,123)]/5 hover:text-[rgb(23,46,123)] transition-all duration-300 border border-gray-200/30 hover:border-[rgb(23,46,123)]/20 cursor-pointer shadow-sm hover:shadow-md group/phone"
                    onClick={() => setIsOpen(false)}
                    aria-label={`Call us at ${phone}`}
                  >
                    <Phone className="h-5 w-5 group-hover/phone:scale-110 transition-transform duration-300" />
                    <span className="tracking-wide">{phone}</span>
                  </a>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-[rgb(180,22,40)] via-[rgb(180,22,40)] to-[rgb(180,22,40)]/95 hover:from-[rgb(144,18,32)] hover:via-[rgb(180,22,40)] hover:to-[rgb(180,22,40)] text-white font-bold shadow-lg hover:shadow-xl tracking-wide rounded-xl border border-[rgb(180,22,40)]/20 relative overflow-hidden group/cta"
                    size="lg"
                  >
                    <Link
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                      className="relative z-10 flex items-center justify-center gap-2"
                    >
                      <Sparkles className="h-4 w-4 opacity-80" />
                      Apply Now
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-[rgb(23,46,123)] via-[rgb(23,46,123)] to-[rgb(23,46,123)]/95 hover:from-[rgb(18,37,98)] hover:via-[rgb(23,46,123)] hover:to-[rgb(23,46,123)] text-white font-bold shadow-lg hover:shadow-xl tracking-wide rounded-xl border border-[rgb(23,46,123)]/20 relative overflow-hidden group/contact"
                    size="lg"
                  >
                    <Link
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                      className="relative z-10 flex items-center justify-center gap-2"
                    >
                      Contact
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
