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
          name: 'Text inputs',
          content: '../../packages/forms/examples/text-input.md'
        },
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
        },
        {
          name: 'Faux input',
          content: '../../packages/forms/examples/faux-input.md'
        },
        {
          name: 'Media input',
          content: '../../packages/forms/examples/media-input.md'
        }
      ]
    },
    {
      name: 'Components',
      sections: [
        {
          name: 'Common',
          components: '../../packages/forms/src/fields/common/[A-Z]*.js'
        },
        {
          name: 'Inputs',
          components: '../../packages/forms/src/fields/[A-Z]*.js'
        },
        {
          name: 'Other',
          components: '../../packages/forms/src/fields/other/[A-Z]*.js'
        }
      ]
    }
  ]
};
