/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  images: {
    loader: 'imgix',
    path: 'https://example.com/myaccount/',
  }
}

module.exports = nextConfig
