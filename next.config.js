/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  basePath: "/HoloborodkoCV",
  reactStrictMode: true,
  images: { unoptimized: true },
  assetPrefix: "/MyCV/",
  // distDir: "out",
};

module.exports = nextConfig;
