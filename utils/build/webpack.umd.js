/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('path');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./webpack.base');
const packageManifest = require(path.resolve('package.json'));

module.exports = merge(baseConfig, {
  output: {
    path: path.resolve('dist', 'umd'),
    filename: 'bundle.min.js',
    library: packageManifest['zendeskgarden:library'],
    libraryTarget: 'umd'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      })
    ]
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'styled',
      root: 'styled'
    },
    'prop-types': {
      commonjs: 'rop-types',
      commonjs2: 'rop-types',
      amd: 'PropTypes',
      root: 'PropTypes'
    },
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'styled',
      root: 'styled'
    },
    '@zendeskgarden/react-theming': {
      commonjs: '@zendeskgarden/react-theming',
      commonjs2: '@zendeskgarden/react-theming',
      amd: 'GardenTheming',
      root: 'GardenTheming'
    }
  }
});
