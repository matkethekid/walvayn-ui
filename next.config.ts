// @ts-check
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '31.97.183.47',
        port: '9000',
        pathname: '/walvayn-bucket/**',
      },
    ],
  },
}
 
module.exports = nextConfig