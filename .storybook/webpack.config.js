/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('path');
const webpack = require('webpack');
const { promisify } = require('util');
const { readdir } = require('fs');
const babelOptions = require(path.resolve(__dirname, '../babel.config.js'));
const lernaConfig = require(path.resolve(__dirname, '../lerna.json'));

module.exports = async ({ config }) => {
  const packageNames = await promisify(readdir)(path.resolve(__dirname, '../packages'));

  /**
   * Include global variables
   */
  config.plugins.push(
    new webpack.DefinePlugin({
      PACKAGE_VERSION: JSON.stringify(lernaConfig.version)
    })
  );

  /**
   * Add aliases to resolve Garden package paths
   */
  packageNames.forEach(packageName => {
    config.resolve.alias[`@zendeskgarden/react-${packageName}`] = path.resolve(
      __dirname,
      `../packages/${packageName}/src`
    );
  });

  config.resolve.alias['storybook-utils'] = path.resolve(__dirname, './utils.ts');

  /**
   * Reset rules and include typescript loaders
   */
  config.module.rules = [];

  config.module.rules.push({
    test: /\.stories\.tsx?$/u,
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: { parser: 'typescript' }
      },
      {
        loader: 'eslint-loader'
      }
    ],
    enforce: 'pre'
  });

  config.module.rules.push({
    test: /\.tsx?$/u,
    loaders: [
      {
        loader: 'eslint-loader'
      }
    ],
    enforce: 'pre'
  });

  config.module.rules.push({
    test: /\.md$/u,
    use: [
      {
        loader: 'html-loader'
      },
      {
        loader: 'markdown-loader'
      }
    ]
  });

  config.module.rules.push({
    test: /\.jsx?$/u,
    exclude: /node_modules/u,
    use: [
      {
        loader: 'babel-loader',
        options: babelOptions
      }
    ]
  });

  config.module.rules.push({
    test: /\.tsx?$/u,
    include: [path.resolve(__dirname, `../packages`), path.resolve(__dirname)],
    use: [
      {
        loader: 'babel-loader',
        options: babelOptions
      },
      {
        loader: require.resolve('ts-loader'),
        options: {
          configFile: path.resolve(__dirname, `tsconfig.storybook.json`)
        }
      }
    ]
  });

  config.module.rules.push({
    test: /\.css$/u,
    exclude: /@zendeskgarden\/css-/u,
    loader: 'style-loader!css-loader'
  });

  config.module.rules.push({
    test: /\.css$/u,
    include: /@zendeskgarden\/css-/u,
    loader:
      'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
  });

  config.module.rules.push({
    test: /\.svg$/u,
    include: /@zendeskgarden\/svg-icons/u,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          externalConfig: path.resolve(__dirname, '../.svgo.yml')
        }
      }
    ]
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
