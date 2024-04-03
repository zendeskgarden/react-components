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
        // https://browsersl.ist/#q=%3E0.3%25%2C+last+4+versions%2C+not+dead%2C+Firefox+ESR%2C+not+and_qq+13-14%2C+not+kaios+2-5%0A
        targets: '>0.3%, last 4 versions, not dead, Firefox ESR, not and_qq 13-14, not kaios 2-5'
      }
    ],
    '@babel/preset-react',
    ['@babel/preset-typescript', { onlyRemoveTypeImports: true }]
  ],
  plugins: [
    '@babel/plugin-transform-object-assign',
    ['@babel/plugin-transform-class-properties', { loose: true }],
    'babel-plugin-styled-components',
    ['@babel/plugin-transform-private-property-in-object', { loose: true }],
    ['@babel/plugin-transform-private-methods', { loose: true }]
  ],
  env: {
    production: {
      plugins: [['react-remove-properties', { properties: [/data-test/u] }]]
    }
  }
};
