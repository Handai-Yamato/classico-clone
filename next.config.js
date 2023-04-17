/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.microcms-assets.io"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
