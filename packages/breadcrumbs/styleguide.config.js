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
      content: '../../packages/breadcrumbs/README.md'
    },
    {
      name: 'Examples',
      sections: [
        {
          name: 'Basic',
          content: '../../packages/breadcrumbs/examples/basic.md'
        }
      ]
    },
    {
      name: 'Elements',
      components: '../../packages/breadcrumbs/src/elements/[A-Z]*.{ts,tsx}'
    }
  ]
};
