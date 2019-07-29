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
      name: 'Examples',
      sections: [
        {
          name: 'Button',
          content: '../../packages/buttons/examples/button.md'
        },
        {
          name: 'Anchor',
          content: '../../packages/buttons/examples/anchor.md'
        },
        {
          name: 'Button Group',
          content: '../../packages/buttons/examples/button-group.md'
        },
        {
          name: 'IconButton',
          content: '../../packages/buttons/examples/icon-button.md'
        }
      ]
    },
    {
      name: 'Components',
      components: '../../packages/buttons/src/components/*.js'
    }
  ]
};
