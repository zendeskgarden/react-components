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
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
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
          content: '../../packages/dropdowns/examples/menu.md'
        },
        {
          name: 'Select usage',
          content: '../../packages/dropdowns/examples/select.md'
        },
        {
          name: 'Autocomplete usage',
          content: '../../packages/dropdowns/examples/autocomplete.md'
        },
        {
          name: 'Multiselect usage',
          content: '../../packages/dropdowns/examples/multiselect.md'
        }
      ]
    },
    {
      name: 'Components',
      components: [
        '../../packages/dropdowns/src/Dropdown/Dropdown.tsx',
        '../../packages/dropdowns/src/Trigger/Trigger.tsx',
        '../../packages/dropdowns/src/Select/Select.tsx',
        '../../packages/dropdowns/src/Autocomplete/Autocomplete.tsx',
        '../../packages/dropdowns/src/Multiselect/Multiselect.tsx'
      ],
      sections: [
        {
          name: 'Fields',
          components: '../../packages/dropdowns/src/Fields/[A-Z]*.{tsx,ts}'
        },
        {
          name: 'Menu',
          components: '../../packages/dropdowns/src/Menu/[A-Z]*.{tsx,ts}',
          sections: [
            {
              name: 'Items',
              components: '../../packages/dropdowns/src/Menu/Items/[A-Z]*.{tsx,ts}'
            }
          ]
        }
      ]
    }
  ]
};
