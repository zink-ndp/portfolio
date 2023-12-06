/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'https://images.unsplash.com/',
          },
        ],
      },
}

module.exports = nextConfig
