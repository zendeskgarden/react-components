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
      content: '../../packages/forms/README.md'
    },
    {
      name: 'Examples',
      sections: [
        {
          name: 'Basic',
          content: '../../packages/forms/examples/basic.md'
        },
        {
          name: 'Advanced',
          content: '../../packages/forms/examples/advanced.md'
        }
      ]
    },
    {
      name: 'Elements',
      components: '../../packages/forms/src/elements/**/[A-Z]*.js'
    }
  ]
};
