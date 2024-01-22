/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.insamer.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
    ],
  },
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
