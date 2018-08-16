/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  sections: [
    {
      name: '',
      content: '../../packages/select/README.md'
    },
    {
      name: 'Elements',
      components: '../../packages/select/src/elements/[A-Z]*.js'
    },
    {
      name: 'Containers',
      components: '../../packages/select/src/containers/[A-Z]*.js'
    },
    {
      name: 'Views',
      components: '../../packages/select/src/views/[A-Z]*.js',
      sections: [
        {
          name: 'Items',
          components: '../../packages/select/src/views/items/[A-Z]*.js',
          sections: [
            {
              name: 'Header',
              components: '../../packages/select/src/views/items/header/[A-Z]*.js'
            },
            {
              name: 'Media',
              components: '../../packages/select/src/views/items/media/[A-Z]*.js'
            }
          ]
        },
        {
          name: 'Fields',
          components: '../../packages/select/src/views/fields/[A-Z]*.js'
        }
      ]
    }
  ]
};
