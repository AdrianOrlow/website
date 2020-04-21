const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

dotenvLoad();

const withNextEnv = nextEnv();

module.exports = withNextEnv({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    RECAPTCHA_CLIENT_KEY: process.env.RECAPTCHA_CLIENT_KEY,
    RECAPTCHA_SERVER_KEY: process.env.RECAPTCHA_SERVER_KEY,
    GA_TAG: process.env.GA_TAG,
  }
});
