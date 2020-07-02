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
      content: '../../packages/accordions/README.md'
    },
    {
      name: 'Examples',
      sections: [
        {
          name: 'Basic',
          content: '../../packages/accordions/examples/basic.md'
        },
        {
          name: 'Advanced',
          content: '../../packages/accordions/examples/advanced.md'
        }
      ]
    },
    {
      name: 'Elements',
      components: [
        '../../packages/accordions/src/elements/accordion/[A-Z]*.{ts,tsx}',
        '../../packages/accordions/src/elements/stepper/[A-Z]*.{ts,tsx}'
      ]
    }
  ]
};
