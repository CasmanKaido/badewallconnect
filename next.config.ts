import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      crypto: false,
      "pino-pretty": false,
      "lokijs": false,
      "encoding": false,
    };
    config.externals.push("pino-pretty", "lokijs", "encoding", "tap", "why-is-node-running", "@gemini-wallet/core", "@metamask/sdk", "porto");
    return config;
  },
  reactCompiler: true,
};

export default nextConfig;
