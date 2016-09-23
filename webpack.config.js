var path = require('path')
var cssnext = require('postcss-cssnext')
var importer = require('postcss-import')
var inputRange = require('postcss-input-range')

var sourceDir = path.resolve(__dirname, 'src')
var nodeModulesDir = path.resolve(__dirname, 'node_modules')

var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    'react-components': './src/index.js',
    'example-theme': './src/themes/example-theme/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
    filename: isProduction ? '[name].min.js' : '[name].js',
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
        loader: 'babel',
        query: {
          presets: [
            [ 'es2015', { 'loose': true, 'modules': false } ],
            'react',
            'stage-0'
          ]
        }
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

  postcss: [
    importer({
      path: [sourceDir, nodeModulesDir]
    }),
    inputRange(),
    cssnext()
  ]
}
