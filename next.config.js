/** @type {import('next').NextConfig} */
const withImages = require('next-images');
const nextTranslate = require('next-translate');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  serverRuntimeConfig: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    RECAPTCHA_SERVER_KEY: process.env.RECAPTCHA_SERVER_KEY,
  },
  publicRuntimeConfig: {
    RECAPTCHA_CLIENT_KEY: process.env.RECAPTCHA_CLIENT_KEY,
    GA_TAG: process.env.GA_TAG,
  },
  images: {
    domains: ['orlow.fra1.cdn.digitaloceanspaces.com', 'orlow.fra1.digitaloceanspaces.com'],
  },
};

module.exports = withImages(nextTranslate(nextConfig));
