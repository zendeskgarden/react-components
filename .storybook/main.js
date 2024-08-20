/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('path');
const { readdirSync } = require('fs');
const webpack = require('webpack');
const svgoConfig = require('../.svgo.config.js');

const PACKAGE_NAMES = readdirSync(path.resolve(__dirname, '../packages')).filter(
  name => name !== '.template'
);

module.exports = {
  stories: [`../packages/${process.env.PACKAGE || '*'}/demo/**/*.stories.@(js|jsx|ts|tsx|mdx)`],
  staticDirs: ['./static'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y', '@storybook/addon-designs'],
  framework: {
    name: '@storybook/react-webpack5',
    options: { strictMode: true }
  },
  core: {
    disableWhatsNewNotifications: true
  },
  webpackFinal: config => {
    const fileLoaderRule = config.module.rules.find(rule => rule.test.test('.svg'));

    fileLoaderRule.exclude = /@zendeskgarden\/svg-icons/u;

    config.output.hashFunction = 'xxhash64';

    config.module.rules.push({
      test: /\.svg$/u,
      use: [
        {
          loader: '@svgr/webpack',
          options: { svgoConfig }
        }
      ]
    });

    config.plugins.push(
      new webpack.DefinePlugin({
        PACKAGE_VERSION: JSON.stringify('storybook')
      })
    );

    Object.assign(
      config.resolve.alias,
      PACKAGE_NAMES.reduce((previousValue, packageName) => {
        previousValue[`@zendeskgarden/react-${packageName}`] = path.resolve(
          __dirname,
          `../packages/${packageName}/src`
        );

        return previousValue;
      }, {})
    );

    return config;
  }
};
