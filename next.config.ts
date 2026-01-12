import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: { turbopackFileSystemCacheForDev: true },
  reactStrictMode: true,
  output: 'standalone',
};

export default nextConfig;
