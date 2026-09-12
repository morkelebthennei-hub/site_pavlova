import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    // Временно разрешаем SVG для собственных SVG-заглушек портфолио в public/images/portfolio.
    // Уберём, когда Ирина пришлёт реальные фото (JPG/WebP) для content/portfolio.json.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
