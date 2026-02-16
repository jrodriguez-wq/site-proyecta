import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Desactivar optimización de imágenes: se sirven tal cual desde public (ya optimizadas)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
