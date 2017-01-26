var path = require('path')
var webpack = require('webpack')
var cssnext = require('postcss-cssnext')
var importer = require('postcss-import')
var inputRange = require('postcss-input-range')

var sourceDir = path.resolve(__dirname, 'src')
var nodeModulesDir = path.resolve(__dirname, 'node_modules')

var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  devtool: 'source-map',

  entry: {
    'react-components': './src/index.js',
    'example-theme': './src/themes/example-theme/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    pathinfo: true,
    publicPath: './',
    filename: isProduction ? '[name].js' : '[name].debug.js',
    libraryTarget: 'umd'
  },

  externals: [
    'autosize',
    'classnames',
    'react',
    'react-dom',
    'uuid'
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: sourceDir,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: [
          'style',
          'css?module&importLoaders=1&localIdentName=rc-[local]-[hash:base64:5]!postcss'
        ]
      },
      {
        test: /\.(svg|png|jpg|gif|woff|woff2)$/,
        include: [sourceDir, nodeModulesDir],
        loaders: [
          'url?limit=1000'
        ]
      }
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      test: /\.css$/,
      options: {
        context: __dirname,
        postcss: [
          importer({
            path: [sourceDir, nodeModulesDir]
          }),
          cssnext(),
          inputRange()
        ]
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      },
      comments: !isProduction,
      mangle: isProduction && {
        screw_ie8: true
      },
      beautify: true,
      sourceMap: true
    })
  ]
}
