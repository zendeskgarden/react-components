var path = require('path')

var cssnext = require('postcss-cssnext')
var importer = require('postcss-import')

module.exports = function (config) {
  config.set({
    files: [
      'test/index.js'
    ],

    preprocessors: {
      'test/index.js': ['webpack', 'sourcemap']
    },

    webpack: {
      devtool: 'inline-source-map',

      module: {
        preLoaders: [
          {
            test: /\.jsx?$/,
            include: [
              path.join(__dirname, 'src'),
              path.join(__dirname, 'test')
            ],
            loader: 'babel-loader'
          }
        ],
        loaders: [
          {
            test: /\.css$/,
            include: path.join(__dirname, 'src'),
            loader: 'css/locals?module&importLoaders=1&localIdentName=[local]!postcss'
          },
          {
            test: /\.json$/,
            loaders: [
              'json'
            ]
          }
        ]
      },

      postcss: [
        importer({
          path: [
            'node_modules',
            './src'
          ]
        }),
        cssnext()
      ],

      resolve: {
        alias: {
          'test/expect': path.join(__dirname, 'test', 'unexpected-with-plugins.js'),
          'sinon': path.join(__dirname, 'test', 'sinon.js')
        },
        extensions: ['', '.js', '.jsx', '.json', '.css'],
        fallback: path.join(__dirname, 'node_modules')
      },
      resolveLoader: { fallback: path.join(__dirname, 'node_modules') }
    },

    webpackMiddleware: {
      noInfo: true
    },

    browsers: ['jsdom'],
    frameworks: ['mocha', 'sinon'],

    browserDisconnectTimeout: '60000',
    browserNoActivityTimeout: '60000',

    client: {
      mocha: {
        timeout: '60000'
      }
    },

    reporters: ['spec'],

    specReporter: {
      showSpecTiming: false
    }
  })
}
