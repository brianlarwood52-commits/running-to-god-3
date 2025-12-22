/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Reduce memory usage during build
  swcMinify: true,
}

module.exports = nextConfig
