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
        // https://browsersl.ist/#q=%3E+0.3%25%2C+last+2+versions%2C+Firefox+ESR%2C+not+dead%2C+not+and_qq+13-14%2C+not+kaios+2-5
        targets: '> 0.3%, last 2 versions, Firefox ESR, not dead, not and_qq 13-14, not kaios 2-5'
      }
    ],
    [
      '@babel/preset-react',
      {
        useBuiltIns: true // https://babeljs.io/docs/babel-preset-react#usebuiltins
      }
    ],
    ['@babel/preset-typescript', { onlyRemoveTypeImports: true }]
  ],
  plugins: ['babel-plugin-styled-components'],
  env: {
    production: {
      plugins: [['react-remove-properties', { properties: [/data-test/u] }]]
    }
  }
};
