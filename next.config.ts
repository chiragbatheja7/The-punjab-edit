import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Blog pages are rendered on the server and generated at build time where possible.
  poweredByHeader: false,
};

export default nextConfig;
