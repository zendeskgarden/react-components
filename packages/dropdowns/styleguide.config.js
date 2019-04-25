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
      content: '../../packages/dropdowns/README.md'
    },
    {
      name: 'Examples',
      content: '../../packages/dropdowns/src/examples/examples.md',
      sections: [
        {
          name: 'Menu usage',
          content: '../../packages/dropdowns/src/examples/menu.md'
        },
        {
          name: 'Select usage',
          content: '../../packages/dropdowns/src/examples/select.md'
        },
        {
          name: 'Autocomplete usage',
          content: '../../packages/dropdowns/src/examples/autocomplete.md'
        }
      ]
    },
    {
      name: 'Components',
      components: [
        '../../packages/dropdowns/src/Dropdown/Dropdown.js',
        '../../packages/dropdowns/src/Trigger/Trigger.js',
        '../../packages/dropdowns/src/Select/Select.js',
        '../../packages/dropdowns/src/Autocomplete/Autocomplete.js'
      ],
      sections: [
        {
          name: 'Fields',
          components: '../../packages/dropdowns/src/Fields/[A-Z]*.js'
        },
        {
          name: 'Menu',
          components: '../../packages/dropdowns/src/Menu/[A-Z]*.js',
          sections: [
            {
              name: 'Items',
              components: '../../packages/dropdowns/src/Menu/Items/[A-Z]*.js'
            }
          ]
        }
      ]
    }
  ]
};
