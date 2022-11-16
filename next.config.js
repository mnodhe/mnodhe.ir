/** @type {import('next').NextConfig} */
const withWorkbox = require("next-with-workbox");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  images: {
    domains: ["cdn.tabinu.com"],
  },
  workbox: {
    // .
    // ..
    // ... any workbox-webpack-plugin.GenerateSW option
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["fa", "en"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "fa",
    localeDetection: true,
  },
  // experimental: {
  //   outputStandalone: true,
  // },
};

module.exports = withWorkbox(nextConfig);
