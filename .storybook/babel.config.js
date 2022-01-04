/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('path');
const { readdirSync } = require('fs');
const { getStorybookBabelConfig } = require('@storybook/core-common');

const config = getStorybookBabelConfig();

const PACKAGE_NAMES = readdirSync(path.resolve(__dirname, '../packages')).filter(
  name => name !== '.template'
);

module.exports = {
  sourceType: 'unambiguous',
  presets: [...config.presets],
  plugins: [
    ...config.plugins,
    'babel-plugin-styled-components',
    [
      'module-resolver',
      {
        root: ['../'],
        alias: PACKAGE_NAMES.reduce((previousValue, packageName) => {
          previousValue[`@zendeskgarden/react-${packageName}`] = `./packages/${packageName}/src`;

          return previousValue;
        }, {})
      }
    ]
  ],
  env: {
    production: {
      plugins: [['react-remove-properties', { properties: [/data-test/u] }]]
    }
  }
};
