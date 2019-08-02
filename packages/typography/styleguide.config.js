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
          sections: [
            {
              name: 'Small',
              content: '../../packages/typography/examples/sm.md'
            },
            {
              name: 'Medium',
              content: '../../packages/typography/examples/md.md'
            },
            {
              name: 'Large',
              content: '../../packages/typography/examples/lg.md'
            },
            {
              name: 'XL',
              content: '../../packages/typography/examples/xl.md'
            },
            {
              name: 'XXL',
              content: '../../packages/typography/examples/xxl.md'
            },
            {
              name: 'XXXL',
              content: '../../packages/typography/examples/xxxl.md'
            }
          ]
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
          sections: [
            {
              content: '../../packages/typography/examples/list.md'
            },
            {
              name: 'Ordered',
              content: '../../packages/typography/examples/ordered-list.md'
            },
            {
              name: 'Unordered',
              content: '../../packages/typography/examples/unordered-list.md'
            }
          ]
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
