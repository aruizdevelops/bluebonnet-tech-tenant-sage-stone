/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: '/bluebonnet-tech-tenant-sage-stone',
  reactStrictMode: true,
  poweredByHeader: false,
  transpilePackages: ['@bluebonnet-tech/core'],
};

export default nextConfig;
