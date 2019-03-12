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
  require: [
    '../../packages/menus/dist/styles.css',
    '../../packages/textfields/dist/styles.css',
    '../../packages/tags/dist/styles.css',
    '../../packages/buttons/dist/styles.css'
  ],
  sections: [
    {
      name: '',
      content: '../../packages/autocomplete/README.md'
    },
    {
      name: 'Elements',
      components: '../../packages/autocomplete/src/elements/[A-Z]*.js'
    },
    {
      name: 'Containers',
      components: '../../packages/autocomplete/src/containers/[A-Z]*.js'
    }
  ]
};
