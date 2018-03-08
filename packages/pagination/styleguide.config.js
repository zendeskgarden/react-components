/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */

module.exports = {
  sections: [
    {
      name: '',
      content: '../../packages/pagination/README.md'
    },
    {
      name: 'Elements',
      components: '../../packages/pagination/src/elements/[A-Z]*.js'
    },
    {
      name: 'Containers',
      components: '../../packages/pagination/src/containers/[A-Z]*.js'
    },
    {
      name: 'Views',
      components: '../../packages/pagination/src/views/[A-Z]*.js'
    }
  ]
};
