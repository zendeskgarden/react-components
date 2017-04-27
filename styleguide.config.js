var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var cssnext = require('postcss-cssnext');
var importer = require('postcss-import');
var inputRange = require('postcss-input-range');

var sourceDir = path.join(__dirname, 'src');

module.exports = {
  title: 'Zendesk Garden / React Style Guide',
  skipComponentsWithoutExample: true,
  sections: [
    {
      name: 'Components',
      content: './src/index.md',
      components: './src/*/index.js'
    },
    {
      name: 'Theming',
      content: './src/utils/theming/index.md',
      components: './src/utils/theming/*/index.js'
    },
    { name: 'Tooltips', components: './src/utils/tooltips/*/index.js' },
    {
      name: 'Core',
      content: './src/core/index.md',
      components: './src/core/*/index.js'
    },
    {
      name: 'Styleguide',
      content: './src/styleguide/index.md',
      components: './src/styleguide/*/index.js'
    }
  ],
  serverPort: 5000,
  template: './src/styleguide/index.html',
  webpackConfig: {
    entry: [
      'babel-polyfill',
      '!!style-loader!css-loader!./node_modules/zd-css-bedrock/dist/index.css',
      '!!style-loader!css-loader!postcss-loader!./src/styleguide/index.css'
    ],
    module: {
      loaders: [
        {
          test: /\.js$/,
          include: sourceDir,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          include: sourceDir,
          loaders: [
            'style-loader',
            'css-loader?module&importLoaders=1&localIdentName=rc-[local]-[hash:base64:5]!postcss-loader'
          ]
        },
        {
          test: /\.(svg|png|jpg|gif|woff|woff2)$/,
          include: [
            sourceDir,
            path.join(__dirname, 'node_modules', 'zd-svg-icons', 'src')
          ],
          loaders: ['url-loader?limit=1000']
        },
        {
          test: /\.json$/,
          include: sourceDir,
          loader: 'json-loader'
        }
      ]
    },
    resolve: {
      alias: {
        'rsg-components/Wrapper': path.join(__dirname, 'src/styleguide/Wrapper')
      }
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: 'src/styleguide/images/*.{png,jpeg}',
          to: 'images/[name].[ext]'
        }
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
    ]
  }
};
