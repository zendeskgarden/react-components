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
const babelOptions = require(path.resolve('../../babel.config.js'));

const options = {
  mode: 'production',
  entry: path.resolve('src', 'index.js'),
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: [
            'default',
            {
              cssDeclarationSorter: false,
              discardComments: {
                removeAllButFirst: true
              }
            }
          ]
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
        test: /\.jsx?$/u,
        exclude: /node_modules/u,
        use: [
          {
            loader: 'babel-loader',
            options: babelOptions
          }
        ]
      },
      {
        test: /\.svg$/u,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              externalConfig: path.resolve('../../.svgo.yml')
            }
          }
        ]
      },
      {
        test: /\.css?$/u,
        exclude: /@zendeskgarden\/css/u,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.css?$/u,
        include: /@zendeskgarden\/css/u,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              context: __dirname, // Solves CSS name clashes in multiple packages https://github.com/webpack-contrib/css-loader/issues/413
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
