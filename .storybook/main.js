/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const webpack = require('webpack');
const svgoConfig = require('../.svgo.config.js');
const isCI = process.env.CI !== undefined;

module.exports = {
  stories: ['../packages/*/demo/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  staticDirs: ['./static'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-addon-designs',
    {
      name: 'storybook-addon-swc',
      options: {
        enable: true,
        enableSwcLoader: isCI,
        enableSwcMinify: false,
        swcLoaderOptions: {
          parseMap: true,
          sourceMaps: true,
          jsc: {
            parser: {
              syntax: 'typescript',
              tsx: true
            },
            transform: {
              react: {
                runtime: 'automatic'
              }
            },
            experimental: {
              plugins: [
                [
                  '@swc/plugin-styled-components',
                  {
                    displayName: true
                  }
                ]
              ]
            }
          }
        }
      }
    }
  ],
  core: {
    builder: 'webpack5'
  },
  webpackFinal: config => {
    const fileLoaderRule = config.module.rules.find(rule => rule.test.test('.svg'));

    fileLoaderRule.exclude = /@zendeskgarden\/svg-icons/u;

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

    return config;
  }
};
