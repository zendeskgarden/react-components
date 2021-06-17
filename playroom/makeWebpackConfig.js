/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const webpack = require('webpack');
const ReactDocgenTypescriptPlugin = require('react-docgen-typescript-plugin').default;
const path = require('path');
const browserslist = ['last 1 chrome version', 'last 1 firefox version', 'last 1 safari version'];

const isProduction = process.env.NODE_ENV === 'production';
const gardenPath = path.resolve(__dirname, '..');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const TS_CONFIG_PATH = path.resolve(__dirname, '../tsconfig.json');
const jsLoaders = [
  {
    loader: require.resolve('babel-loader'),
    options: {
      babelrc: false,
      presets: [
        [
          require.resolve('@babel/preset-typescript'),
          {
            isTSX: true,
            allExtensions: true
          }
        ],
        [
          require.resolve('@babel/preset-env'),
          {
            modules: false,
            targets: browserslist
          }
        ],
        require.resolve('@babel/preset-react')
      ],
      plugins: [
        require.resolve('@babel/plugin-transform-object-assign'),
        [
          require.resolve('@babel/plugin-proposal-class-properties'),
          {
            loose: true
          }
        ],
        require.resolve('babel-plugin-styled-components'),
        [require.resolve('@babel/plugin-proposal-private-methods'), { loose: true }],
        require.resolve('@babel/plugin-proposal-object-rest-spread')
      ]
    }
  }
];
const cssInJsLoaders = [
  {
    loader: require.resolve('style-loader'),
    options: {
      insertAt: 'top'
    }
  },
  {
    loader: require.resolve('css-loader'),
    options: {
      modules: true,
      minimize: isProduction,
      importLoaders: 2 + jsLoaders.length
    }
  },
  {
    loader: require.resolve('postcss-loader'),
    options: {
      plugins: () => [require('autoprefixer')(browserslist)]
    }
  },
  ...jsLoaders
];

module.exports = () => ({
  module: {
    rules: [
      {
        // eslint-disable-next-line prefer-named-capture-group, require-unicode-regexp
        test: /(?!\.css)\.(js|ts|tsx)$/,
        // eslint-disable-next-line require-unicode-regexp
        include: [gardenPath, /node_modules\/@zendeskgarden/],
        use: jsLoaders
      },
      {
        // eslint-disable-next-line require-unicode-regexp
        test: /\.css\.js$/,
        // eslint-disable-next-line require-unicode-regexp
        include: [gardenPath, /node_modules\/@zendeskgarden/],
        use: cssInJsLoaders
      },
      {
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
      },
      {
        test: /\.svg$/u,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              externalConfig: path.resolve('../.svgo.yml')
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.mjs', '.js', '.json', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin({ configFile: TS_CONFIG_PATH })]
  },
  plugins: [
    new ReactDocgenTypescriptPlugin(),
    new webpack.DefinePlugin({
      PACKAGE_VERSION: JSON.stringify('playroom')
    })
  ]
});
