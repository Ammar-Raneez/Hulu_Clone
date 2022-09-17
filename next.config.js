/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow images to render from following domains
    domains: ["press.hulu.com", "image.tmdb.org"],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
