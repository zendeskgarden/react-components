/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const packageManifest = require(path.resolve('package.json'));

const options = {
  mode: 'production',
  entry: path.resolve('src', 'index.js'),
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          discardComments: { removeAllButFirst: true },
          reduceIdents: false,
          zindex: false
        }
      })
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
    new webpack.BannerPlugin(
      `
Copyright Zendesk, Inc.

Use of this source code is governed under the Apache License, Version 2.0
found at http://www.apache.org/licenses/LICENSE-2.0
    `.trim()
    ),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'styles.css'
    })
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
        exclude: /@zendeskgarden\/css/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.css?$/,
        include: /@zendeskgarden\/css/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              reduceIdents: false,
              zindex: false,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ]
      }
    ]
  }
};

if (process.env.ANALYZE_BUNDLE) {
  options.plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    })
  );
}

module.exports = options;
