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
      content: '../../packages/menus/README.md'
    },
    {
      name: 'Elements',
      components: '../../packages/menus/src/elements/[A-Z]*.js'
    },
    {
      name: 'Containers',
      components: '../../packages/menus/src/containers/[A-Z]*.js'
    },
    {
      name: 'Views',
      components: '../../packages/menus/src/views/[A-Z]*.js',
      sections: [
        {
          name: 'Items',
          components: '../../packages/menus/src/views/items/[A-Z]*.js',
          sections: [
            {
              name: 'Header',
              components: '../../packages/menus/src/views/items/header/[A-Z]*.js'
            },
            {
              name: 'Media',
              components: '../../packages/menus/src/views/items/media/[A-Z]*.js'
            }
          ]
        }
      ]
    }
  ]
};
