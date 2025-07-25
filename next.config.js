/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/splitchores-landing',
  assetPrefix: '/splitchores-landing',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
