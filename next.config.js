/** @type {import('next').NextConfig} */
const nextConfig = {
  // transpilePackages: ['react-confirm-alert', 'react-date-picker', 'react-konva'],
  eslint: {
    dirs: ['.']
  },
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true
    // runtime: 'experimental-edge'
    // esmExternals: 'loose',
  }
};

module.exports = nextConfig;