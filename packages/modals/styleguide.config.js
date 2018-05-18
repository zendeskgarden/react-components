/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */

const path = require('path');

module.exports = {
  sections: [
    {
      name: '',
      content: '../../packages/modals/README.md'
    },
    {
      name: 'Elements',
      components: '../../packages/modals/src/elements/[A-Z]*.js'
    },
    {
      name: 'Containers',
      components: '../../packages/modals/src/containers/[A-Z]*.js'
    },
    {
      name: 'Views',
      components: '../../packages/modals/src/views/[A-Z]*.js'
    }
  ]
};
