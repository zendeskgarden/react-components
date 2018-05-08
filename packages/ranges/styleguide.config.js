/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */

module.exports = {
  sections: [
    {
      name: '',
      content: '../../packages/ranges/README.md'
    },
    {
      name: 'Elements',
      components: '../../packages/ranges/src/elements/[A-Z]*.js'
    },
    {
      name: 'View',
      components: '../../packages/ranges/src/views/[A-Z]*.js'
    }
  ]
};
