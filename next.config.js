/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
