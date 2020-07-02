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
      content: '../../packages/pagination/README.md'
    },
    {
      name: 'Examples',
      sections: [
        {
          name: 'Basic',
          content: '../../packages/pagination/examples/basic.md'
        },
        {
          name: 'Advanced',
          content: '../../packages/pagination/examples/advanced.md'
        }
      ]
    },
    {
      name: 'Elements',
      components: [
        '../../packages/pagination/src/elements/Pagination/[A-Z]*.{ts,tsx}',
        '../../packages/pagination/src/elements/CursorPagination/[A-Z]*.{ts,tsx}'
      ]
    }
  ]
};
