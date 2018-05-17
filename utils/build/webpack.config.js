/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
      whitelist: [/^@zendeskgarden\/css-/, /dist\/styles.css/]
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve()
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
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
              importLoaders: 1,
              localIndentName: '[name]__[local]___[hash:base64:5]'
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
