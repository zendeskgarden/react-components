import { dirname, join } from 'node:path';
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('node:path');
const { readdirSync } = require('node:fs');
const webpack = require('webpack');
const svgoConfig = require('../.svgo.config.js');

const PACKAGE_NAMES = readdirSync(path.resolve(__dirname, '../packages')).filter(
  name => name !== '.template'
);

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

module.exports = {
  stories: ['../packages/*/demo/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  staticDirs: ['./static'],
  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-designs'),
    getAbsolutePath('@storybook/addon-webpack5-compiler-babel')
  ],

  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
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
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};
