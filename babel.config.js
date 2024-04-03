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
    [
      '@babel/preset-react',
      {
        useBuiltIns: true // https://babeljs.io/docs/babel-preset-react#usebuiltins
      }
    ], // https://babeljs.io/docs/babel-preset-react#usebuiltins
    ['@babel/preset-typescript', { onlyRemoveTypeImports: true }]
  ],
  plugins: ['babel-plugin-styled-components'],
  env: {
    production: {
      plugins: [['react-remove-properties', { properties: [/data-test/u] }]]
    }
  }
};
