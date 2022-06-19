/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_API_URL: process.env.NEXT_API_URL,
    CI: process.env.CI
  }
}

// eslint-disable-next-line no-undef
module.exports = nextConfig
