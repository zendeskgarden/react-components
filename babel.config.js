/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: '> 0.5%, last 2 versions, Firefox ESR, not dead'
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-proposal-class-properties',
    'babel-plugin-inline-react-svg',
    'babel-plugin-styled-components'
  ]
};
