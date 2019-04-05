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
      name: 'Dropdown',
      components: '../../packages/dropdowns/src/Dropdown.js'
    },
    {
      name: 'Trigger',
      components: '../../packages/dropdowns/src/Trigger/Trigger.js'
    },
    {
      name: 'Select',
      components: '../../packages/dropdowns/src/Select/Select.js'
    },
    {
      name: 'Multiselect',
      components: '../../packages/dropdowns/src/Multiselect/[A-Z]*.js'
    },
    {
      name: 'Autocomplete',
      components: '../../packages/dropdowns/src/Autocomplete/Autocomplete.js'
    },
    {
      name: 'Menu',
      components: '../../packages/dropdowns/src/Menu/Menu.js',
      sections: [
        {
          name: 'Items',
          components: '../../packages/dropdowns/src/Menu/Items/[A-Z]*.js'
        }
      ]
    }
  ]
};
