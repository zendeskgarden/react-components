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
      content: '../../packages/datepickers/README.md'
    },
    {
      name: 'Examples',
      content: '../../packages/datepickers/examples/examples.md',
      sections: [
        {
          name: 'Default usage',
          content: '../../packages/datepickers/examples/default-usage.md'
        },
        {
          name: 'Custom date formats',
          content: '../../packages/datepickers/examples/custom-formats.md'
        },
        {
          name: 'Localization',
          content: '../../packages/datepickers/examples/localization.md'
        },
        {
          name: 'Min and max dates',
          content: '../../packages/datepickers/examples/min-max-dates.md'
        },
        {
          name: 'Compact sizing',
          content: '../../packages/datepickers/examples/compact.md'
        },
        {
          name: 'Range',
          content: '../../packages/datepickers/examples/range.md'
        }
      ]
    },
    {
      name: 'Components',
      components: [
        '../../packages/datepickers/src/elements/Datepicker/[A-Z]*.{ts,tsx}',
        '../../packages/datepickers/src/elements/DatepickerRange/[A-Z]*.{ts,tsx}'
      ]
    }
  ]
};
