var path = require('path')

var cssnext = require('postcss-cssnext')
var importer = require('postcss-import')

module.exports = {
  title: 'Style guide',
  rootDir: './src',
  skipComponentsWithoutExample: true,
  sections: [
    {name: 'Zendesk Garden', components: './src/*/index.js'},
    {name: 'Core', content: './src/core/index.md', components: './src/core/*/index.js'},
    {name: 'Styleguide', content: './src/styleguide/index.md', components: './src/styleguide/*/index.js'}
  ],
  serverPort: 5000,
  updateWebpackConfig: function (webpackConfig, env) {
    var sourceDir = path.join(__dirname, 'src')
    webpackConfig.entry.unshift('babel-polyfill')
    webpackConfig.entry.push('!!style!css!./node_modules/zd-css-bedrock/dist/index.css')
    webpackConfig.entry.push('!!style!css!./src/styleguide/index.css')

    webpackConfig.module.loaders.push(
      {
        test: /\.js$/,
        include: sourceDir,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        include: sourceDir,
        loaders: [
          'style',
          'css?module&importLoaders=1&localIdentName=rc-[local]-[hash:base64:5]!postcss'
        ]
      },
      {
        test: /\.(svg|png|jpg|gif|woff|woff2)$/,
        include: [
          sourceDir,
          path.join(__dirname, 'node_modules', 'zd-svg-icons', 'src')
        ],
        loaders: [
          'url?limit=1000'
        ]
      },
      {
        test: /\.json$/,
        include: sourceDir,
        loader: 'json'
      }
    )

    webpackConfig.postcss = [
      importer({
        path: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'src')
        ]
      }),
      cssnext()
    ]

    return webpackConfig
  }
}
