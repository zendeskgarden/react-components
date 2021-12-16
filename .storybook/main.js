/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('path');
const webpack = require('webpack');
const externalConfig = require('../.svgo.config.js');
const docs = process.env.BROWSER ? process.env.BROWSER.toUpperCase() !== 'IE11' : true;

module.exports = {
  stories: ['../packages/*/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [{ name: '@storybook/addon-essentials', options: { docs } }, '@storybook/addon-a11y'],
  core: {
    builder: 'webpack5'
  },
  webpackFinal: config => {
    const fileLoaderRule = config.module.rules.find(rule => rule.test.test('.svg'));

    fileLoaderRule.exclude = /@zendeskgarden\/svg-icons/u;

    config.module.rules.push({
      test: /\.tsx?$/u,
      use: [
        {
          loader: 'eslint-loader',
          options: {
            emitWarning: true
          }
        }
      ],
      enforce: 'pre'
    });

    config.module.rules.push({
      test: /\.svg$/u,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            externalConfig
          }
        }
      ]
    });

    config.plugins.push(
      new webpack.DefinePlugin({
        PACKAGE_VERSION: JSON.stringify('storybook')
      })
    );

    return config;
  }
};
