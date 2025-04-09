/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  basePath: "/HoloborodkoCV",
  reactStrictMode: true,
  images: { unoptimized: true },
  assetPrefix: "/HoloborodkoCV/",
  distDir: "out",
};

module.exports = nextConfig;
