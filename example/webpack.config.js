var path = require('path');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
var webpack = require('webpack');

var sourceDir = path.join(__dirname, 'src');

var config = {
  context: __dirname,

  entry: {
    bundle: './src/index.js',

    vendor: ['babel-polyfill', 'react', 'react-dom', 'classnames', 'uuid']
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public')
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve(sourceDir),
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'node_modules'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.css$/,
        include: path.resolve(sourceDir),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    }),
    new CommonsChunkPlugin({
      names: ['vendor'],
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new DuplicatePackageCheckerPlugin()
  ]
};

if (process.env.BUNDLE_ANALYZER === 'true') {
  config.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = config;
