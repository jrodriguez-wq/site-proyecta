"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export const CTASection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[rgb(12,25,65)] text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[rgb(180,22,40)] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgb(180,22,40)] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-5 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 sm:space-y-5 md:space-y-6 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white px-2">
            Ready to Start Your Homeownership Journey?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 px-4">
            Get free advice on the buying process and discover how you can own your dream home with $0 down payment through our Rent to Own program.
          </p>
          <div className="flex flex-col items-center gap-4 sm:gap-5 pt-2 sm:pt-4 w-full px-4 sm:px-0">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg font-semibold bg-[rgb(180,22,40)] hover:bg-[rgb(144,18,32)] text-white shadow-lg shadow-[rgb(180,22,40)]/30 hover:shadow-xl hover:shadow-[rgb(180,22,40)]/40 transition-all duration-300 rounded-xl"
              >
                <Link 
                  href="/contact"
                  aria-label="Apply for Rent to Own program - $0 down payment new homes Florida"
                >
                  Apply Now - $0 Down
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg font-semibold border-2 border-white/40 bg-transparent text-white hover:text-white hover:bg-white/10 hover:border-white/60 transition-all duration-300 rounded-xl backdrop-blur-sm"
              >
                <Link 
                  href="/contact" 
                  aria-label="Contact us - New homes consultation Florida"
                >
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
