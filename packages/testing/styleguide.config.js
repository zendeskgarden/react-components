/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */
module.exports = {
  sections: [
    {
      name: '',
      content: '../../packages/testing/README.md'
    },
    {
      name: 'Utils',
      sections: [
        {
          name: 'getExports',
          content: '../../packages/testing/src/utils/getExports.example.md'
        },
        {
          name: 'mountWithTheme',
          content: '../../packages/testing/src/utils/mountWithTheme.example.md'
        },
        {
          name: 'shallowWithTheme',
          content: '../../packages/testing/src/utils/shallowWithTheme.example.md'
        }
      ]
    }
  ]
};
