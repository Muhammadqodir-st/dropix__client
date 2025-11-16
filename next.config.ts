import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images:{
    remotePatterns:[new URL('https://i.postimg.cc/nhw9bdGX/5abd985735a8fd4adcb0e795de6a1005.jpg')]
  }
};

export default nextConfig;
