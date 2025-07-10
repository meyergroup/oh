/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/oh', // 👈 Name of your GitHub repo
  assetPrefix: '/oh', // 👈 Prefix for assets (CSS, JS, etc.)
}

module.exports = nextConfig;
