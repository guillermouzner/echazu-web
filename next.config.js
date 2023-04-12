/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "scontent.ftuc1-1.fna.fbcdn.net",
      "scontent.ftuc1-2.fna.fbcdn.net",
      "flic.kr",
      "live.staticflickr.com",
    ],
  },
};

module.exports = nextConfig;
