require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? '/app/.env' : '.env'
});

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    RECAPTCHA_SERVER_KEY: process.env.RECAPTCHA_SERVER_KEY,
    RECAPTCHA_CLIENT_KEY: process.env.RECAPTCHA_CLIENT_KEY,
    GA_TAG: process.env.GA_TAG,
  },
};
