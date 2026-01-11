"use client";

import Image from "next/image";

const familyImages = [
  "/recursos/clientes/testimonio-1.webp",
  "/recursos/clientes/testimonio-2.webp",
  "/recursos/clientes/testimonio-3.webp",
  "/recursos/clientes/testimonio-13.webp",
  "/recursos/clientes/testimonio-14.webp",
  "/recursos/clientes/testimonio-15.webp",
  "/recursos/clientes/testimonio-19.webp",
  "/recursos/clientes/testimonio-20.webp",
  "/recursos/clientes/testimonio-21.webp",
  "/recursos/clientes/testimonio-22.webp",
  "/recursos/clientes/testimonio-24.webp",
  "/recursos/clientes/testimonio-32.webp",
];

export const HappyFamiliesGallery = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 sm:space-y-6 px-2 sm:px-0">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-[rgb(23,46,123)] tracking-tight leading-tight">
              Familias Felices
            </h2>
            <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] to-[rgb(23,46,123)] rounded-full mx-auto"></div>
            <p className="text-base sm:text-lg lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Únete a cientos de familias que han confiado en nosotros para su inversión inmobiliaria en Estados Unidos
            </p>
          </div>
          
          {/* Galería - Grid uniforme */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {familyImages.map((src, index) => (
              <div
                key={`gallery-${index}`}
                className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 group shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={src}
                  alt={`Cliente satisfecho ${index + 1} - Proyecta Business Group`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  quality={85}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
