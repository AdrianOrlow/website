const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

module.exports = {
  webpack(config) {
    config.plugins.push(
      new webpack.EnvironmentPlugin(localEnv)
    );

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
