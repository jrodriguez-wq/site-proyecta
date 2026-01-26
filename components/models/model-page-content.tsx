"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Square, Car, ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { YouTubeVideo } from "@/components/ui/youtube-video";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { ModelData } from "@/lib/models/model-data";
import { cn } from "@/lib/utils";
import { MODEL_FLOORPLANS, getModelInteriorImages, getModelExteriorImages } from "@/lib/models/model-images";
import { AnimatedSection } from "@/components/ui/animated-section";

interface ModelPageContentProps {
  modelData: ModelData & { images: string[] };
}

export const ModelPageContent = ({ modelData }: ModelPageContentProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryImageIndex, setGalleryImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("inside");
  const [isFloorplanExpanded, setIsFloorplanExpanded] = useState(false);

  const { name, sqft, bedrooms, bathrooms, garage, price, rtoPrice, description, youtubeUrl, images, sections } = modelData;

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const openGallery = (index: number) => {
    setGalleryImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = useCallback(() => {
    setIsGalleryOpen(false);
  }, []);

  const changeGalleryImage = useCallback((direction: number) => {
    setGalleryImageIndex((prev) => {
      const newIndex = prev + direction;
      if (newIndex < 0) return images.length - 1;
      if (newIndex >= images.length) return 0;
      return newIndex;
    });
  }, [images.length]);

  useEffect(() => {
    if (!isGalleryOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeGallery();
      } else if (e.key === "ArrowLeft") {
        changeGalleryImage(-1);
      } else if (e.key === "ArrowRight") {
        changeGalleryImage(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isGalleryOpen, changeGalleryImage, closeGallery]);

  const handleKeyDown = (e: React.KeyboardEvent, callback: () => void) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      callback();
    }
  };

  const insideImages = useMemo(() => {
    return getModelInteriorImages(modelData.key);
  }, [modelData.key]);
  
  const exteriorImages = useMemo(() => {
    return getModelExteriorImages(modelData.key);
  }, [modelData.key]);
  
  const findImageIndex = (imagePath: string): number => {
    return images.findIndex((img) => img === imagePath);
  };

  return (
    <>
      <div className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20">
        <div className="container mx-auto px-4 sm:px-5 md:px-6 max-w-7xl">
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {/* Hero Section */}
            <AnimatedSection delay={0}>
              <div className="relative">
                <div className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] min-h-[400px] sm:min-h-[450px] md:min-h-[500px] rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                  {images.length > 0 ? (
                    <>
                      <Image
                        src={images[currentImageIndex]}
                        alt={`${name} - Image ${currentImageIndex + 1}`}
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                      {images.length > 1 && (
                        <>
                          <button
                            onClick={handlePreviousImage}
                            onKeyDown={(e) => handleKeyDown(e, handlePreviousImage)}
                            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md p-2 sm:p-3 rounded-full hover:bg-white transition-all hover:scale-110 border border-gray-200 shadow-lg z-20"
                            aria-label="Previous image"
                            type="button"
                          >
                            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-900" />
                          </button>
                          <button
                            onClick={handleNextImage}
                            onKeyDown={(e) => handleKeyDown(e, handleNextImage)}
                            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md p-2 sm:p-3 rounded-full hover:bg-white transition-all hover:scale-110 border border-gray-200 shadow-lg z-20"
                            aria-label="Next image"
                            type="button"
                          >
                            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-900" />
                          </button>
                        </>
                      )}

                      {images.length > 1 && (
                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/90 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200 shadow-lg z-20">
                          <span className="text-gray-900 text-xs sm:text-sm font-medium">
                            {currentImageIndex + 1} / {images.length}
                          </span>
                        </div>
                      )}

                      {images.length > 1 && (
                        <button
                          onClick={() => openGallery(currentImageIndex)}
                          onKeyDown={(e) => handleKeyDown(e, () => openGallery(currentImageIndex))}
                          className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2 hover:bg-white transition-all hover:scale-105 border border-gray-200 shadow-lg z-20"
                          aria-label="View gallery"
                          type="button"
                        >
                          <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-900" />
                          <span className="text-gray-900 text-xs sm:text-sm font-medium hidden sm:inline">View Gallery</span>
                        </button>
                      )}
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-gray-600 text-base sm:text-lg">No images available</p>
                    </div>
                  )}

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 z-10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent h-32 sm:h-40 md:h-48" />
                      <div className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10 lg:py-12">
                        <div className="max-w-5xl mx-auto text-center">
                          <h1 
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight text-white"
                            style={{
                              textShadow: "0 2px 8px rgba(0,0,0,0.3), 0 1px 3px rgba(0,0,0,0.2)",
                            }}
                          >
                            {name}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Model Information Section */}
            <AnimatedSection delay={0.1}>
              <section className="mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
                  {/* Price Card */}
                  <Card className="lg:col-span-1 bg-gradient-to-br from-[rgb(23,46,123)]/10 via-[rgb(23,46,123)]/5 to-white border-2 border-[rgb(23,46,123)]/20 shadow-lg hover:shadow-xl transition-all duration-200">
                    <CardHeader className="p-5 sm:p-6">
                      <CardDescription className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2">
                        Starting Price
                      </CardDescription>
                      <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[rgb(23,46,123)] to-[rgb(23,46,123)]/80 bg-clip-text text-transparent">
                        {price}
                      </CardTitle>
                      <p className="text-sm sm:text-base md:text-lg font-semibold text-[rgb(180,22,40)] mt-2">
                        $0 Down
                      </p>
                    </CardHeader>
                    <CardContent className="p-5 sm:p-6 pt-0 space-y-4">
                      {rtoPrice && (
                        <div className="pt-4 border-t border-gray-200/50">
                          <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2">
                            Rent to Own Program
                          </p>
                          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[rgb(180,22,40)]">
                            {rtoPrice}
                          </p>
                        </div>
                      )}
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Contact us for financing options and more information.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Features Grid */}
                  <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                    <Card className="group hover:border-[rgb(23,46,123)]/50 transition-all duration-200 hover:shadow-lg h-full flex flex-col">
                      <CardContent className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col items-center justify-center min-h-[180px] sm:min-h-[200px] md:min-h-[220px]">
                        <div className="flex flex-col items-center justify-center text-center space-y-3 sm:space-y-4 w-full h-full">
                          <div className="shrink-0 p-3 sm:p-3.5 bg-[rgb(23,46,123)]/10 rounded-xl group-hover:bg-[rgb(23,46,123)]/20 group-hover:scale-110 transition-all duration-200">
                            <Square className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[rgb(23,46,123)]" />
                          </div>
                          <div className="flex-1 flex flex-col justify-center items-center w-full">
                            <p className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-1">{sqft}</p>
                            <p className="text-xs sm:text-sm text-gray-600 font-medium uppercase tracking-wide">
                              Sq Ft
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="group hover:border-[rgb(23,46,123)]/50 transition-all duration-200 hover:shadow-lg h-full flex flex-col">
                      <CardContent className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col items-center justify-center min-h-[180px] sm:min-h-[200px] md:min-h-[220px]">
                        <div className="flex flex-col items-center justify-center text-center space-y-3 sm:space-y-4 w-full h-full">
                          <div className="shrink-0 p-3 sm:p-3.5 bg-[rgb(23,46,123)]/10 rounded-xl group-hover:bg-[rgb(23,46,123)]/20 group-hover:scale-110 transition-all duration-200">
                            <Bed className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[rgb(23,46,123)]" />
                          </div>
                          <div className="flex-1 flex flex-col justify-center items-center w-full">
                            <p className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-1">{bedrooms}</p>
                            <p className="text-xs sm:text-sm text-gray-600 font-medium uppercase tracking-wide">
                              Bedrooms
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="group hover:border-[rgb(23,46,123)]/50 transition-all duration-200 hover:shadow-lg h-full flex flex-col">
                      <CardContent className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col items-center justify-center min-h-[180px] sm:min-h-[200px] md:min-h-[220px]">
                        <div className="flex flex-col items-center justify-center text-center space-y-3 sm:space-y-4 w-full h-full">
                          <div className="shrink-0 p-3 sm:p-3.5 bg-[rgb(23,46,123)]/10 rounded-xl group-hover:bg-[rgb(23,46,123)]/20 group-hover:scale-110 transition-all duration-200">
                            <Bath className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[rgb(23,46,123)]" />
                          </div>
                          <div className="flex-1 flex flex-col justify-center items-center w-full">
                            <p className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-1">{bathrooms}</p>
                            <p className="text-xs sm:text-sm text-gray-600 font-medium uppercase tracking-wide">
                              Bathrooms
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="group hover:border-[rgb(23,46,123)]/50 transition-all duration-200 hover:shadow-lg h-full flex flex-col">
                      <CardContent className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col items-center justify-center min-h-[180px] sm:min-h-[200px] md:min-h-[220px]">
                        <div className="flex flex-col items-center justify-center text-center space-y-3 sm:space-y-4 w-full h-full">
                          <div className="shrink-0 p-3 sm:p-3.5 bg-[rgb(23,46,123)]/10 rounded-xl group-hover:bg-[rgb(23,46,123)]/20 group-hover:scale-110 transition-all duration-200">
                            <Car className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[rgb(23,46,123)]" />
                          </div>
                          <div className="flex-1 flex flex-col justify-center items-center w-full">
                            <p className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 leading-tight mb-1">{garage}</p>
                            <p className="text-xs sm:text-sm text-gray-600 font-medium uppercase tracking-wide">
                              Garage
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>
            </AnimatedSection>

            {/* Description Section */}
            <AnimatedSection delay={0.15}>
              <section className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-[rgb(23,46,123)]">About This Model</h2>
                    <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-[rgb(180,22,40)] to-[rgb(180,22,40)]/50 rounded-full"></div>
                  </div>
                  <Card className="border-2">
                    <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">{description}</p>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </AnimatedSection>

            {/* Tabs Section - Continuará en siguiente parte debido a longitud */}
            {sections && (
              <AnimatedSection delay={0.15}>
                <section className="mt-10 sm:mt-12 md:mt-16 lg:mt-20">
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <div className="mb-6 sm:mb-8 md:mb-12">
                      <TabsList className="inline-flex h-auto p-1 sm:p-1.5 bg-gray-100/50 rounded-xl border border-gray-200/50 shadow-sm w-full md:w-auto">
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 w-full md:w-auto">
                          {sections.inside && (
                            <TabsTrigger 
                              value="inside"
                              className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base font-semibold rounded-lg transition-all duration-200 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-[rgb(23,46,123)] border border-transparent data-[state=active]:border-[rgb(23,46,123)]/20 flex-1 sm:flex-none"
                            >
                              Inside
                            </TabsTrigger>
                          )}
                          {sections.exterior && (
                            <TabsTrigger 
                              value="exterior"
                              className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base font-semibold rounded-lg transition-all duration-200 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-[rgb(23,46,123)] border border-transparent data-[state=active]:border-[rgb(23,46,123)]/20 flex-1 sm:flex-none"
                            >
                              Exterior
                            </TabsTrigger>
                          )}
                          {sections.virtualTour && (
                            <TabsTrigger 
                              value="virtualTour"
                              className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base font-semibold rounded-lg transition-all duration-200 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-[rgb(23,46,123)] border border-transparent data-[state=active]:border-[rgb(23,46,123)]/20 flex-1 sm:flex-none"
                            >
                              Virtual Tour
                            </TabsTrigger>
                          )}
                          {sections.floorplan && (
                            <TabsTrigger 
                              value="floorplan"
                              className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base font-semibold rounded-lg transition-all duration-200 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-[rgb(23,46,123)] border border-transparent data-[state=active]:border-[rgb(23,46,123)]/20 flex-1 sm:flex-none"
                            >
                              Floorplan
                            </TabsTrigger>
                          )}
                          {sections.standardFeatures && (
                            <TabsTrigger 
                              value="standardFeatures"
                              className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base font-semibold rounded-lg transition-all duration-200 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-[rgb(23,46,123)] border border-transparent data-[state=active]:border-[rgb(23,46,123)]/20 flex-1 sm:flex-none"
                            >
                              Standard Features
                            </TabsTrigger>
                          )}
                        </div>
                      </TabsList>
                    </div>

                    {/* Inside Tab */}
                    {sections.inside && (
                      <TabsContent value="inside" className="space-y-6 sm:space-y-8 mt-6 sm:mt-8">
                        <div>
                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-[rgb(23,46,123)]">Inside</h3>
                          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8">{sections.inside.description || "Explore the beautiful interior spaces of this model."}</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                          {insideImages.map((image, index) => {
                            const realIndex = findImageIndex(image);
                            return (
                              <button
                                key={index}
                                onClick={() => openGallery(realIndex)}
                                onKeyDown={(e) => handleKeyDown(e, () => openGallery(realIndex))}
                                className="relative aspect-video rounded-xl overflow-hidden group transition-opacity duration-200 hover:opacity-90"
                                aria-label={`View image ${index + 1}`}
                                type="button"
                              >
                                <Image
                                  src={image}
                                  alt={`${name} inside - ${index + 1}`}
                                  fill
                                  className="object-cover rounded-xl"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                              </button>
                            );
                          })}
                        </div>
                      </TabsContent>
                    )}

                    {/* Exterior Tab */}
                    {sections.exterior && (
                      <TabsContent value="exterior" className="space-y-6 sm:space-y-8 mt-6 sm:mt-8">
                        <div>
                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-[rgb(23,46,123)]">Exterior</h3>
                          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8">{sections.exterior.description || "See the stunning exterior design and architecture."}</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                          {exteriorImages.map((image, index) => {
                            const realIndex = findImageIndex(image);
                            return (
                              <button
                                key={index}
                                onClick={() => openGallery(realIndex)}
                                onKeyDown={(e) => handleKeyDown(e, () => openGallery(realIndex))}
                                className="relative aspect-video rounded-xl overflow-hidden group transition-opacity duration-200 hover:opacity-90"
                                aria-label={`View image ${index + 1}`}
                                type="button"
                              >
                                <Image
                                  src={image}
                                  alt={`${name} exterior - ${index + 1}`}
                                  fill
                                  className="object-cover rounded-xl"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                              </button>
                            );
                          })}
                        </div>
                      </TabsContent>
                    )}

                    {/* Virtual Tour Tab */}
                    {sections.virtualTour && youtubeUrl && (
                      <TabsContent value="virtualTour" className="space-y-6 sm:space-y-8 mt-6 sm:mt-8">
                        <div>
                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-[rgb(23,46,123)]">Virtual Tour</h3>
                          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8">{sections.virtualTour.description || "Take a virtual walkthrough of this beautiful home."}</p>
                        </div>
                        <div className="max-w-4xl mx-auto">
                          <YouTubeVideo url={youtubeUrl} title={`${name} Virtual Tour`} />
                        </div>
                      </TabsContent>
                    )}

                    {/* Floorplan Tab */}
                    {sections.floorplan && (
                      <TabsContent value="floorplan" className="space-y-6 sm:space-y-8 mt-6 sm:mt-8">
                        <div>
                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-[rgb(23,46,123)]">Floorplan</h3>
                          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8">{sections.floorplan.description || "View the detailed floor plan layout."}</p>
                        </div>
                        {(() => {
                          const floorplanImage = sections.floorplan.image || MODEL_FLOORPLANS[modelData.key.toLowerCase()];
                          
                          if (floorplanImage) {
                            return (
                              <Card className="border-2 border-gray-200 shadow-xl overflow-hidden">
                                <CardContent className="p-2 sm:p-3 md:p-4 lg:p-6">
                                  <div className="relative w-full bg-white rounded-lg overflow-hidden">
                                    <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] min-h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
                                      <Image
                                        src={floorplanImage}
                                        alt={`${name} Floorplan`}
                                        fill
                                        className="object-contain p-2 sm:p-3 md:p-4 lg:p-6 xl:p-8"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
                                        quality={90}
                                        loading="lazy"
                                      />
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            );
                          }
                          
                          return (
                            <Card>
                              <CardContent className="pt-6 p-4 sm:p-6">
                                <p className="text-center text-sm sm:text-base text-gray-600">Floorplan coming soon</p>
                              </CardContent>
                            </Card>
                          );
                        })()}
                      </TabsContent>
                    )}

                    {/* Standard Features Tab */}
                    {sections.standardFeatures && (
                      <TabsContent value="standardFeatures" className="space-y-6 sm:space-y-8 mt-6 sm:mt-8">
                        <div>
                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-[rgb(23,46,123)]">Standard Features</h3>
                          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8">{sections.standardFeatures.description || "All the standard features included in this model."}</p>
                        </div>
                        {sections.standardFeatures.categories && (
                          <Accordion type="single" collapsible className="w-full">
                            {Object.entries(sections.standardFeatures.categories).map(([key, category]) => (
                              <AccordionItem key={key} value={key}>
                                <AccordionTrigger className="text-left font-semibold">
                                  {category.title}
                                </AccordionTrigger>
                                <AccordionContent>
                                  <ul className="space-y-2 pl-4">
                                    {category.items.map((item, index) => (
                                      <li key={index} className="list-disc text-gray-600">
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                          </Accordion>
                        )}
                      </TabsContent>
                    )}
                  </Tabs>
                </section>
              </AnimatedSection>
            )}

            {/* Contact Form Section */}
            <AnimatedSection delay={0.2}>
              <section className="py-8 sm:py-10 md:py-12 lg:py-16 mt-10 sm:mt-12 md:mt-16 lg:mt-20">
                <Card className="max-w-2xl mx-auto">
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-2xl sm:text-3xl text-center text-[rgb(23,46,123)]">Request More Information</CardTitle>
                    <CardDescription className="text-center text-sm sm:text-base md:text-lg">
                      Interested in this model? Fill out the form below and we&apos;ll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    <ContactForm />
                  </CardContent>
                </Card>
              </section>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {isGalleryOpen && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-sm"
          onClick={closeGallery}
          role="dialog"
          aria-modal="true"
          aria-label="Image Gallery"
        >
          <div
            className="relative bg-white rounded-xl sm:rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-xl border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 sm:p-5 bg-white/95 backdrop-blur-sm border-b border-gray-200">
              <div className="flex items-center gap-3">
                <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                  {name}
                </h2>
                {images.length > 1 && (
                  <span className="text-sm text-gray-600">
                    {galleryImageIndex + 1} / {images.length}
                  </span>
                )}
              </div>
              <button
                onClick={closeGallery}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close gallery"
                type="button"
              >
                <X className="w-5 h-5 text-gray-900" />
              </button>
            </div>

            <div className="relative bg-gray-100 h-[75vh] sm:h-[80vh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-20 sm:pb-24">
              <Image
                src={images[galleryImageIndex]}
                alt={`${name} - Image ${galleryImageIndex + 1} of ${images.length}`}
                fill
                className="object-contain p-6 sm:p-8 md:p-10"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                priority
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={() => changeGalleryImage(-1)}
                    onKeyDown={(e) => handleKeyDown(e, () => changeGalleryImage(-1))}
                    className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors border border-gray-200 shadow-lg z-20"
                    aria-label="Previous image"
                    type="button"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
                  </button>
                  <button
                    onClick={() => changeGalleryImage(1)}
                    onKeyDown={(e) => handleKeyDown(e, () => changeGalleryImage(1))}
                    className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors border border-gray-200 shadow-lg z-20"
                    aria-label="Next image"
                    type="button"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
                  </button>
                </>
              )}
            </div>

            {images.length > 1 && (
              <div className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-5 bg-white/95 backdrop-blur-sm border-t border-gray-200">
                <div className="flex gap-3 sm:gap-4 justify-center overflow-x-auto scrollbar-hide px-4 sm:px-6 scroll-smooth">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setGalleryImageIndex(index)}
                      onKeyDown={(e) => handleKeyDown(e, () => setGalleryImageIndex(index))}
                      className={cn(
                        "relative w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 transition-opacity shrink-0",
                        index === galleryImageIndex
                          ? "border-[rgb(23,46,123)] opacity-100"
                          : "border-transparent opacity-50 hover:opacity-75"
                      )}
                      aria-label={`View image ${index + 1}`}
                      aria-current={index === galleryImageIndex ? "true" : "false"}
                      type="button"
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 640px) 64px, 80px"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
