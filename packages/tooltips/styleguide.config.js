/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */

const path = require('path');

module.exports = {
  require: [
    path.resolve('node_modules', '@zendeskgarden', 'react-buttons', 'dist', 'styles.css'),
    path.resolve('node_modules', '@zendeskgarden', 'react-textfields', 'dist', 'styles.css'),
    path.resolve('node_modules', '@zendeskgarden', 'react-toggles', 'dist', 'styles.css')
  ],
  sections: [
    {
      name: '',
      content: '../../packages/tooltips/README.md'
    },
    {
      name: 'Elements',
      components: '../../packages/tooltips/src/elements/[A-Z]*.js'
    },
    {
      name: 'Containers',
      components: '../../packages/tooltips/src/containers/[A-Z]*.js'
    },
    {
      name: 'Views',
      components: '../../packages/tooltips/src/views/[A-Z]*.js',
      sections: [
        {
          name: 'Content',
          components: '../../packages/tooltips/src/views/content/[A-Z]*.js'
        }
      ]
    }
  ]
};
