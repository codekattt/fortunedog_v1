/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    OPEN_AI_API: process.env.OPEN_AI_API,
  },
};

export default nextConfig;
