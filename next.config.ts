import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  webpack(config, _options) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
}

export default nextConfig;
