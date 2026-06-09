import type { NextConfig } from "next";
import path from "node:path";

// Pin the workspace root to this project. A stray lockfile higher up the tree
// (C:\Users\acstu\package-lock.json) otherwise makes Next infer the wrong root.
const root = path.join(__dirname);

const nextConfig: NextConfig = {
  turbopack: { root },
  outputFileTracingRoot: root,
};

export default nextConfig;
