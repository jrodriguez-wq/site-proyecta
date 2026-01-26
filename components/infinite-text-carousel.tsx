"use client";

export const InfiniteTextCarousel = () => {
  const message = "Own Your Dream Home with $0 Down Payment - Rent to Own Program Available Now";
  
  // Duplicar el mensaje varias veces para efecto infinito suave
  const duplicatedMessage = `${message} • `.repeat(8);

  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-[rgb(23,46,123)]/5 overflow-hidden items-center justify-center relative">
      <div className="relative w-full min-h-[60px] sm:min-h-[80px] md:min-h-[100px] lg:min-h-[120px] flex items-center justify-center">
        <div className="flex items-center justify-center gap-0 w-full overflow-hidden">
          <div className="flex items-center animate-scroll-left whitespace-nowrap shrink-0">
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-[rgb(23,46,123)] tracking-wide leading-none">
              {duplicatedMessage}
            </span>
          </div>
          <div className="flex items-center animate-scroll-left whitespace-nowrap shrink-0">
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-[rgb(23,46,123)] tracking-wide leading-none">
              {duplicatedMessage}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
