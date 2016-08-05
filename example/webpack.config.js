var path = require('path')
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')
var cssnext = require('postcss-cssnext')
var importer = require('postcss-import')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var sourceDir = path.join(__dirname, 'src')

var config = {
  context: __dirname,

  entry: {
    'bundle': './src/index.js',
    'bedrock': 'zd-css-bedrock',
    'vendor': [
      'react',
      'react-dom',
      'classnames',
      'autosize',
      'uuid',
      'zd-react-components'
    ]
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public')
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel'
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'node_modules'),
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style',
          loader: 'css'
        })
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style',
          loader: 'css?module&importLoaders=1&localIdentName=[path][name]---[local]---[hash:base64:5]!postcss'
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
    new HtmlWebpackPlugin()
  ],

  postcss: [
    importer({
      path: [
        path.resolve(__dirname, 'node_modules'),
        sourceDir
      ]
    }),
    cssnext()
  ]
}

module.exports = config
