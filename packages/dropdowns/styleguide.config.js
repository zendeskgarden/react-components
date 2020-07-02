/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('path');
const reactDocgenTypescript = require('react-docgen-typescript');
const reactDocgen = require('react-docgen');

/**
 * Package specific styleguide configuration
 */
module.exports = {
  propsParser: reactDocgenTypescript.withCustomConfig(
    path.resolve(__dirname, '../../tsconfig.json'),
    {
      propFilter: props => {
        return props.parent.fileName.indexOf('node_modules') === -1;
      }
    }
  ).parse,
  resolver: reactDocgen.resolver.findAllComponentDefinitions,
  sections: [
    {
      name: '',
      content: '../../packages/dropdowns/README.md'
    },
    {
      name: 'Examples',
      content: '../../packages/dropdowns/examples/examples.md',
      sections: [
        {
          name: 'Menu usage',
          content: '../../packages/dropdowns/examples/basic-menu.md'
        },
        {
          name: 'Advanced Menu usage',
          content: '../../packages/dropdowns/examples/advanced-menu.md'
        },
        {
          name: 'Tree Menu usage',
          content: '../../packages/dropdowns/examples/tree-menu.md'
        },
        {
          name: 'Select usage',
          content: '../../packages/dropdowns/examples/basic-select.md'
        },
        {
          name: 'Advanced Select usage',
          content: '../../packages/dropdowns/examples/advanced-select.md'
        },
        {
          name: 'Autocomplete usage',
          content: '../../packages/dropdowns/examples/autocomplete.md'
        },
        {
          name: 'Multiselect usage',
          content: '../../packages/dropdowns/examples/multiselect.md'
        },
        {
          name: 'Field variants',
          content: '../../packages/dropdowns/examples/field-variants.md'
        }
      ]
    },
    {
      name: 'Elements',
      components: [
        '../../packages/dropdowns/src/elements/Dropdown/Dropdown.tsx',
        '../../packages/dropdowns/src/elements/Trigger/Trigger.tsx',
        '../../packages/dropdowns/src/elements/Select/Select.tsx',
        '../../packages/dropdowns/src/elements/Autocomplete/Autocomplete.tsx',
        '../../packages/dropdowns/src/elements/Multiselect/Multiselect.tsx'
      ],
      sections: [
        {
          name: 'Fields',
          components: '../../packages/dropdowns/src/elements/Fields/[A-Z]*.{tsx,ts}'
        },
        {
          name: 'Menu',
          components: '../../packages/dropdowns/src/elements/Menu/[A-Z]*.{tsx,ts}',
          sections: [
            {
              name: 'Items',
              components: '../../packages/dropdowns/src/elements/Menu/Items/[A-Z]*.{tsx,ts}'
            }
          ]
        }
      ]
    }
  ]
};
