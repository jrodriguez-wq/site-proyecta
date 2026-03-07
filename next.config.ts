import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Desactivar optimización de imágenes: se sirven tal cual desde public (evita hydration mismatch y 404)
  images: {
    unoptimized: true,
    qualities: [75, 85, 90],
  },
};

export default nextConfig;
