import { useMemo } from "react";

// Traducciones para Proyecta Business Group
const translations: Record<string, string> = {
  // Hero Slider
  "hero.title1": "Invierte en Bienes Raíces en los Estados Unidos",
  "hero.subtitle1": "y diversifica tu patrimonio en Dólares",
  "hero.description1": "Te ofrecemos una solución integral para una inversión confiable, rentable y segura. Contamos con mas de 5 años de Experiencia en el Mercado de Real Estate en Estados Unidos.",
  "hero.title2": "Invierte en Bienes Raíces en los Estados Unidos",
  "hero.subtitle2": "y diversifica tu patrimonio en Dólares",
  "hero.description2": "Te ofrecemos una solución integral para una inversión confiable, rentable y segura. Contamos con mas de 5 años de Experiencia en el Mercado de Real Estate en Estados Unidos.",
  "hero.title3": "Invierte en Bienes Raíces en los Estados Unidos",
  "hero.subtitle3": "y diversifica tu patrimonio en Dólares",
  "hero.description3": "Te ofrecemos una solución integral para una inversión confiable, rentable y segura. Contamos con mas de 5 años de Experiencia en el Mercado de Real Estate en Estados Unidos.",
  "hero.contactUs": "Quiero recibir asesoría",
  "hero.applyNow": "Conocer más",
  "hero.getPreQualified": "Información sobre inversiones",
  "hero.viewCommunities": "Ver nuestros proyectos",
  
  // Happy Families Gallery
  "home.happyFamilies.title": "Familias Felices",
  "home.happyFamilies.subtitle": "Únete a cientos de familias que han confiado en nosotros para su inversión inmobiliaria en Estados Unidos",
};

export const useTranslation = () => {
  const t = useMemo(
    () => (key: string) => {
      return translations[key] || key;
    },
    []
  );

  return {
    t,
    language: "es",
    translations,
  };
};

