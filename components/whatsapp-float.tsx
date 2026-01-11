"use client";

import Image from "next/image";
import Link from "next/link";

export const WhatsAppFloat = () => {
  return (
    <Link
      href="https://wa.me/12392473557"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[rgb(37,211,102)] hover:bg-[rgb(30,175,85)] rounded-full p-3 sm:p-4 shadow-2xl hover:shadow-[rgb(37,211,102)]/50 transition-all duration-300 hover:scale-110 group cursor-pointer flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      <Image
        src="/icons8-whatsapp.png"
        alt="WhatsApp"
        width={32}
        height={32}
        className="h-6 w-6 sm:h-8 sm:w-8 object-contain"
        priority
      />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[rgb(37,211,102)] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-[rgb(37,211,102)]"></span>
      </span>
    </Link>
  );
};

