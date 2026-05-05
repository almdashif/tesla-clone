/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['digitalassets.tesla.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'digitalassets.tesla.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
