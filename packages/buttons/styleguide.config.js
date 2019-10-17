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
      content: '../../packages/buttons/README.md'
    },
    {
      name: 'Elements',
      components: '../../packages/buttons/src/elements/[A-Z]*.js',
      sections: [
        {
          name: 'SplitButton',
          content: '../../packages/buttons/src/elements/SplitButton.example.md'
        }
      ]
    },
    {
      name: 'Views',
      sections: [
        {
          name: 'Generics',
          components: '../../packages/buttons/src/views/[A-Z]*.js'
        },
        {
          name: 'IconButton',
          components: '../../packages/buttons/src/views/icon-button/[A-Z]*.js'
        },
        {
          name: 'ButtonGroup',
          components: '../../packages/buttons/src/views/button-group/[A-Z]*.js'
        }
      ]
    }
  ]
};
