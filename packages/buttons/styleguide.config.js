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
          name: 'Icon Button',
          content: '../../packages/buttons/examples/icon-button.md'
        },
        {
          name: 'Split Button',
          content: '../../packages/buttons/examples/split-button.md'
        },
        {
          name: 'Button Group',
          content: '../../packages/buttons/examples/button-group.md'
        }
      ]
    },
    {
      name: 'Components',
      components: '../../packages/buttons/src/components/*.{ts,tsx}'
    }
  ]
};
