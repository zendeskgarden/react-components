/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */

module.exports = {
  sections: [
    {
      name: '',
      content: '../../packages/tabs/README.md'
    },
    {
      name: 'Elements',
      components: '../../packages/tabs/src/elements/[A-Z]*.js'
    },
    {
      name: 'Containers',
      components: '../../packages/tabs/src/containers/[A-Z]*.js'
    },
    {
      name: 'Views',
      components: '../../packages/tabs/src/views/[A-Z]*.js'
    }
  ]
};
