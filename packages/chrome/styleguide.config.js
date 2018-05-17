/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */

const path = require('path');

module.exports = {
  require: [path.resolve('node_modules', '@zendeskgarden', 'react-toggles', 'dist', 'styles.css')],
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
            }
          ]
        }
      ]
    }
  ]
};
