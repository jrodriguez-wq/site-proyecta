"use client";

import { ModelCard } from "@/components/models/model-card";
import { getModelMainImage } from "@/lib/models/model-images";
import { getModelData } from "@/lib/models/model-data";
import { useEffect, useState } from "react";
import { ModelData } from "@/lib/models/model-data";
import { Community } from "@/lib/models/model-pricing";
import { sortModelsByPrice } from "@/lib/models/model-utils";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";

interface CommunityModelsSectionProps {
  modelKeys: string[];
  title: string;
  subtitle: string;
  community: Community;
}

export const CommunityModelsSection = ({ modelKeys, title, subtitle, community }: CommunityModelsSectionProps) => {
  const [modelsData, setModelsData] = useState<(ModelData & { key: string })[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadModels = async () => {
      const data = await Promise.all(
        modelKeys.map(async (key) => {
          const modelData = await getModelData(key, community);
          return modelData ? { ...modelData, key } : null;
        })
      );
      const validModels = data.filter((m): m is ModelData & { key: string } => m !== null);
      const sortedModels = sortModelsByPrice(validModels);
      setModelsData(sortedModels);
      setLoading(false);
    };
    loadModels();
  }, [modelKeys, community]);

  if (loading) {
    return (
      <section className="py-10 md:py-14 lg:py-18">
        <div className="container mx-auto px-4 sm:px-5 md:px-6">
          <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[rgb(23,46,123)]">{title}</h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] via-[rgb(180,22,40)]/80 to-[rgb(180,22,40)] rounded-full mx-auto"></div>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
            </div>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {modelKeys.map((key) => (
                <div key={key} className="h-96 bg-gray-100 animate-pulse rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 md:py-14 lg:py-18">
      <div className="container mx-auto px-4 sm:px-5 md:px-6">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
          <motion.div 
            className="text-center space-y-4 mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[rgb(23,46,123)] tracking-tight">{title}</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] via-[rgb(180,22,40)]/80 to-[rgb(180,22,40)] rounded-full mx-auto"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
          </motion.div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {modelsData.map((modelData, index) => {
              const mainImage = getModelMainImage(modelData.key);
              return (
                <ModelCard
                  key={modelData.key}
                  modelKey={modelData.key}
                  name={modelData.name}
                  description={modelData.description}
                  image={mainImage}
                  price={modelData.price}
                  beds={modelData.bedrooms}
                  baths={modelData.bathrooms}
                  sqft={modelData.sqft}
                  garage={modelData.garage}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
