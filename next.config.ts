import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/gelatinapv" : "";

const nextConfig: NextConfig = {
  // Export estático (gera pasta "out")
  output: "export",

  // Só aplica basePath/assetPrefix em produção (quando você for exportar)
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",

  // Ajuda em hospedagem por pasta (HostGator)
  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co", port: "", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com", port: "", pathname: "/**" },
      { protocol: "https", hostname: "picsum.photos", port: "", pathname: "/**" },
      { protocol: "https", hostname: "i.imgur.com", port: "", pathname: "/**" },
    ],
  },
};

export default nextConfig;