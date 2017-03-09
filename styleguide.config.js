var path = require('path')
var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin')

var cssnext = require('postcss-cssnext')
var importer = require('postcss-import')
var inputRange = require('postcss-input-range')

module.exports = {
  title: 'Zendesk Garden / React Style Guide',
  rootDir: './src',
  skipComponentsWithoutExample: true,
  sections: [
    {name: 'Components', content: './src/index.md', components: './src/*/index.js'},
    {name: 'Theming', content: './src/utils/theming/index.md', components: './src/utils/theming/*/index.js'},
    {name: 'Tooltips', content: './src/utils/tooltips/index.md', components: './src/utils/tooltips/*/index.js'},
    {name: 'Core', content: './src/core/index.md', components: './src/core/*/index.js'},
    {name: 'Styleguide', content: './src/styleguide/index.md', components: './src/styleguide/*/index.js'}
  ],
  serverPort: 5000,
  template: './src/styleguide/index.html',
  updateWebpackConfig: function (webpackConfig, env) {
    var sourceDir = path.join(__dirname, 'src')
    webpackConfig.entry.unshift('babel-polyfill')
    webpackConfig.entry.push('!!style!css!./node_modules/zd-css-bedrock/dist/index.css')
    webpackConfig.entry.push('!!style!css!postcss!./src/styleguide/index.css')

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

    webpackConfig.resolve.alias['rsg-components/Wrapper'] = path.join(__dirname, 'src/styleguide/Wrapper')

    webpackConfig.plugins.push(
      new CopyWebpackPlugin([
        { from: 'src/styleguide/images/*.png', to: 'images/[name].[ext]' }
      ]),
      new webpack.LoaderOptionsPlugin({
        test: /\.css$/,
        options: {
          context: __dirname,
          postcss: [
            importer({
              path: [
                path.resolve(__dirname, 'node_modules'),
                path.resolve(__dirname, 'src')
              ]
            }),
            inputRange(),
            cssnext()
          ]
        }
      }),
      new webpack.optimize.OccurrenceOrderPlugin()
    )

    return webpackConfig
  }
}
