/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('path');
const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const TS_CONFIG_PATH = path.resolve(__dirname, '../tsconfig.json');

module.exports = {
  stories: ['../packages/*/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-a11y'],
  typescript: {
    check: true,
    checkOptions: {
      configFile: TS_CONFIG_PATH
    },
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      /**
       * Ensure that HTMLAttributes are not included in prop-sheets
       */
      propFilter: prop => (prop.parent ? !/node_modules/u.test(prop.parent.fileName) : true)
    }
  },
  webpackFinal: config => {
    config.module.rules.push({
      test: /\.tsx?$/u,
      loaders: [
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
            externalConfig: path.resolve('../.svgo.yml')
          }
        }
      ]
    });

    config.plugins.push(
      new webpack.DefinePlugin({
        PACKAGE_VERSION: JSON.stringify('storybook')
      })
    );

    config.resolve.plugins.push(new TsconfigPathsPlugin({ configFile: TS_CONFIG_PATH }));

    return config;
  }
};
