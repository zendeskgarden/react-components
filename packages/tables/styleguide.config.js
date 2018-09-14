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
      content: '../../packages/tables/README.md'
    },
    {
      name: 'Tables',
      content: '../../packages/tables/src/examples/tables.md',
      sections: [
        {
          name: 'Standard Styling',
          content: '../../packages/tables/src/examples/standard-table.md'
        },
        {
          name: 'Advanced Styling',
          content: '../../packages/tables/src/examples/advanced-table.md'
        },
        {
          name: 'Sortable',
          content: '../../packages/tables/src/examples/sortable-table.md'
        },
        {
          name: 'Selectable',
          content: '../../packages/tables/src/examples/selectable-table.md'
        },
        {
          name: 'Draggable',
          content: '../../packages/tables/src/examples/draggable-table.md'
        },
        {
          name: 'Scrollable',
          content: '../../packages/tables/src/examples/scrollable-table.md'
        },
        {
          name: 'Paginated',
          content: '../../packages/tables/src/examples/paginated-table.md'
        },
        {
          name: 'Overflow Menus',
          content: '../../packages/tables/src/examples/overflow-menu.md'
        },
        {
          name: 'Virtual Scrolling',
          content: '../../packages/tables/src/examples/virtual-table.md'
        }
      ]
    },
    {
      name: 'Views',
      components: '../../packages/tables/src/views/[A-Z]*.js'
    }
  ]
};
