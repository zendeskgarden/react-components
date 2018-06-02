/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs'
  },
  externals: [
    nodeExternals({
      modulesFromFile: true,
      whitelist: [/@zendeskgarden\/css/, /\.css?$/]
    })
  ]
});
