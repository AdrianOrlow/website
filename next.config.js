/** @type {import('next').NextConfig} */
const withImages = require('next-images');
const nextTranslate = require('next-translate');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = withImages(nextTranslate(nextConfig));
