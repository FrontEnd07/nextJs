const svg = require('@neodx/svg/webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        svg({
          group: true,
          root: 'src/shared/ui/icon/assets',
          output: 'public/sprite',
          resetColors: false,
          metadata: 'src/shared/ui/icon/sprite.h.ts',
        }),
      );
    }
    return config;
  },
}

module.exports = nextConfig
