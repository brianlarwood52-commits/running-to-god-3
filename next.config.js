/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Reduce memory usage during build
  swcMinify: true,
  // Allow builds to proceed even if ESLint emits warnings
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
