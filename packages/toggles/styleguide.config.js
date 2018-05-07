/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */

module.exports = {
  sections: [
    {
      name: '',
      content: '../../packages/toggles/README.md'
    },
    {
      name: 'Elements',
      components: '../../packages/toggles/src/elements/[A-Z]*.js'
    },
    {
      name: 'Views',
      components: '../../packages/toggles/src/views/[A-Z]*.js'
    }
  ]
};
