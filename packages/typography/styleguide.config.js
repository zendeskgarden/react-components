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
      content: '../../packages/typography/README.md'
    },
    {
      name: 'Examples',
      sections: [
        {
          name: 'Typography',
          content: '../../packages/typography/examples/typography.md'
        },
        {
          name: 'Ellipsis',
          content: '../../packages/typography/examples/ellipsis.md'
        },
        {
          name: 'Code',
          content: '../../packages/typography/examples/code.md'
        },
        {
          name: 'Lists',
          content: '../../packages/typography/examples/lists.md'
        }
      ]
    },
    {
      name: 'Components',
      components: [
        '../../packages/typography/src/components/*.js',
        '../../packages/typography/src/components/lists/OrderedList.js',
        '../../packages/typography/src/components/lists/UnorderedList.js'
      ]
    }
  ]
};
