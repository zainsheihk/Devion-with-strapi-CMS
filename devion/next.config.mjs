/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "devion-with-strapi-cms-production.up.railway.app",
      },
    ],
  },
};

export default nextConfig;
