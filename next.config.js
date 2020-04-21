require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = {
  webpack(config) {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ];

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config
  },
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    RECAPTCHA_CLIENT_KEY: process.env.RECAPTCHA_CLIENT_KEY,
    RECAPTCHA_SERVER_KEY: process.env.RECAPTCHA_SERVER_KEY,
    GA_TAG: process.env.GA_TAG,
  }
};
