const withNextra = require('nextra')('./components/cookbook.jsx')

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx'],
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
}

module.exports = withNextra(nextConfig)
