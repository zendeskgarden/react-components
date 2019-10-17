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
      content: '../../packages/chrome/README.md'
    },
    {
      name: 'Views',
      sections: [
        {
          name: 'Chrome',
          components: '../../packages/chrome/src/views/[A-Z]*.js'
        },
        {
          name: 'Nav',
          components: '../../packages/chrome/src/views/nav/[A-Z]*.js'
        },
        {
          name: 'SubNav',
          components: '../../packages/chrome/src/views/subnav/[A-Z]*.js'
        },
        {
          name: 'Body',
          components: '../../packages/chrome/src/views/body/[A-Z]*.js',
          sections: [
            {
              name: 'Header',
              components: '../../packages/chrome/src/views/header/[A-Z]*.js'
            },
            {
              name: 'Footer',
              components: '../../packages/chrome/src/views/footer/[A-Z]*.js'
            }
          ]
        }
      ]
    }
  ]
};
