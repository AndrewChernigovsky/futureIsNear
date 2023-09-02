/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'chernigovsky1081.eternalhost.info',
        port: '',
        pathname: '/img/**/*',
      },
      {
        protocol: 'https',
        hostname: 'ir.ozone.ru',
        port: '',
        pathname: '/s3/**/**/*.{jpg,png}',
      },
    ],
  },
}
module.exports = nextConfig
