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
      content: '../../packages/tables/README.md'
    },
    {
      name: 'Examples',
      sections: [
        {
          name: 'Basic styling',
          content: '../../packages/tables/examples/basic.md'
        },
        {
          name: 'Sortable',
          content: '../../packages/tables/examples/sortable-table.md'
        },
        {
          name: 'Selectable',
          content: '../../packages/tables/examples/selectable-table.md'
        },
        {
          name: 'Draggable',
          content: '../../packages/tables/examples/draggable-table.md'
        },
        {
          name: 'Scrollable',
          content: '../../packages/tables/examples/scrollable-table.md'
        },
        {
          name: 'Paginated',
          content: '../../packages/tables/examples/paginated-table.md'
        },
        {
          name: 'Overflow menu',
          content: '../../packages/tables/examples/overflow-menu.md'
        },
        {
          name: 'Virtual scrolling',
          content: '../../packages/tables/examples/virtual-table.md'
        }
      ]
    },
    {
      name: 'Elements',
      components: '../../packages/tables/src/elements/[A-Z]*.{ts,tsx}'
    }
  ]
};
