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
          name: 'Lists',
          content: '../../packages/typography/examples/list.md'
        }
      ]
    },
    {
      name: 'Components',
      components: [
        '../../packages/typography/src/views/SM.js',
        '../../packages/typography/src/views/MD.js',
        '../../packages/typography/src/views/LG.js',
        '../../packages/typography/src/views/XL.js',
        '../../packages/typography/src/views/XXL.js',
        '../../packages/typography/src/views/XXXL.js',
        '../../packages/typography/src/views/Code.js',
        '../../packages/typography/src/views/Ellipsis.js',
        '../../packages/typography/src/views/lists/OrderedList.js',
        '../../packages/typography/src/views/lists/UnorderedList.js'
      ]
    }
  ]
};
