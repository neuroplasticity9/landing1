/** @type {import('next').NextConfig} */
const nextConfig = {
  // transpilePackages: ['react-confirm-alert', 'react-date-picker', 'react-konva'],
  // images: {
  //   // loader: 'imgix',
  //   // path: '/',
  //   deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  // },
  eslint: {
    dirs: ['.']
  },
  // basePath: '',
  poweredByHeader: false,
  // trailingSlash: true,
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    // Required:
    // appDir: true
    // runtime: 'experimental-edge'
    // esmExternals: 'loose',
  },
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
    };
  }
};

module.exports = nextConfig;
