/**
 * Configuración central de contacto y dominio - proyectafl.com
 */

export const SITE_DOMAIN = "proyectafl.com";
export const SITE_URL = `https://www.${SITE_DOMAIN}`;

export const CONTACT = {
  phone: "(239) 247-3557",
  phoneRaw: "2392473557",
  whatsapp: "12392473557",
  emails: {
    customerService: "customerservice@proyectafl.com",
    investments: "investments@proyectafl.com",
    propertyManagement: "prop.mgt@proyectafl.com",
    admin: "admin@proyectafl.com",
  },
  /** Email principal para contacto general (formularios, footer, etc.) */
  mainEmail: "customerservice@proyectafl.com",
  address: "LaBelle, Florida",
} as const;
