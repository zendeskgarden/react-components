/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const packageManifest = require(path.resolve('package.json'));

const options = {
  mode: 'production',
  entry: path.resolve('src', 'index.js'),
  devtool: 'source-map',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    library: 'Garden',
    libraryTarget: 'umd'
  },
  externals: [
    nodeExternals({
      modulesFromFile: true,
      whitelist: [/^@zendeskgarden\/css-/]
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    /**
     * Allows the `data-garden-version` attribute to be applied to all
     * views without importing entire package.json into the bundle
     */
    new webpack.DefinePlugin({
      PACKAGE_VERSION: JSON.stringify(packageManifest.version)
    }),
    new webpack.BannerPlugin(`Copyright Zendesk, Inc.

Use of this source code is governed under the Apache License, Version 2.0
found at http://www.apache.org/licenses/LICENSE-2.0`)
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: ['es2015', 'react', 'stage-0'],
              plugins: ['inline-react-svg', 'transform-object-assign', 'styled-components']
            }
          }
        ]
      },
      {
        test: /\.css?$/,
        include: /@zendeskgarden\/css/,
        use: [
          {
            loader: 'style-loader',
            options: {
              /**
               * Allows consumers to customize the default injection
               * point of the Garden styling
               */
              /* eslint-disable object-shorthand, func-names */
              insertInto: function() {
                if (typeof window.__GARDEN_STYLE_INJECTOR__ === 'function') {
                  return window.__GARDEN_STYLE_INJECTOR__();
                }

                return document.head;
              }
              /* eslint-enable object-shorthand, func-names */
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              minimize: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ]
      }
    ]
  }
};

if (process.env.ANALYZE_BUNDLE) {
  options.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = options;
