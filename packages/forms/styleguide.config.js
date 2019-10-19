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
      name: 'Introduction',
      content: '../../packages/forms/examples/introduction.md'
    },
    {
      name: 'Examples',
      sections: [
        {
          name: 'Basic',
          content: '../../packages/forms/examples/basic.md'
        }
      ]
    },
    {
      name: 'Examples',
      sections: [
        {
          name: 'Checkboxes',
          content: '../../packages/forms/examples/checkbox.md'
        },
        {
          name: 'Radio',
          content: '../../packages/forms/examples/radio.md'
        },
        {
          name: 'Range',
          content: '../../packages/forms/examples/range.md'
        },
        {
          name: 'Multi-Thumb Range',
          content: '../../packages/forms/examples/multi-thumb-range.md'
        },
        {
          name: 'Toggle',
          content: '../../packages/forms/examples/toggle.md'
        }
      ]
    },
    {
      name: 'Elements',
      components: '../../packages/forms/src/elements/**/[A-Z]*.js'
    }
  ]
};
