import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root: a stray package-lock.json in the home directory
  // otherwise makes Turbopack infer ~/ as the root and fail to resolve deps.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
