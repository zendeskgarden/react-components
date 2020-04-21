/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('path');
const reactDocgenTypescript = require('react-docgen-typescript');
const reactDocgen = require('react-docgen');

/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */
module.exports = {
  propsParser: reactDocgenTypescript.withCustomConfig(
    path.resolve(__dirname, '../../tsconfig.json'),
    {
      propFilter: props => {
        return props.parent.fileName.indexOf('node_modules') === -1;
      }
    }
  ).parse,
  resolver: reactDocgen.resolver.findAllComponentDefinitions,
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
        },
        {
          name: 'Paragraph',
          content: '../../packages/typography/examples/paragraph.md'
        }
      ]
    },
    {
      name: 'Elements',
      components: [
        '../../packages/typography/src/elements/*.{ts,tsx}',
        '../../packages/typography/src/elements/lists/OrderedList.tsx',
        '../../packages/typography/src/elements/lists/UnorderedList.tsx'
      ]
    }
  ]
};
