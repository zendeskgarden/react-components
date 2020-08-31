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
      content: '../../packages/forms/README.md'
    },
    {
      name: 'Examples',
      sections: [
        {
          name: 'Basic',
          content: '../../packages/forms/examples/basic.md'
        },
        {
          name: 'Advanced',
          content: '../../packages/forms/examples/advanced.md'
        },
        {
          name: 'Tiles',
          content: '../../packages/forms/examples/tiles.md'
        },
        {
          name: 'Input Group',
          content: '../../packages/forms/examples/input-group.md'
        },
        {
          name: 'File Upload',
          content: '../../packages/forms/examples/file-upload.md'
        }
      ]
    },
    {
      name: 'Elements',
      components: [
        '../../packages/forms/src/elements/[A-Z]*.{ts,tsx}',
        '../../packages/forms/src/elements/common/[A-Z]*.{ts,tsx}',
        '../../packages/forms/src/elements/tiles/[A-Z]*.{ts,tsx}',
        '../../packages/forms/src/elements/input-group/InputGroup.tsx'
      ]
    }
  ]
};
