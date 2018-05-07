/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */

module.exports = {
  sections: [
    {
      name: '',
      content: '../../packages/radios/README.md'
    },
    {
      name: 'Elements',
      components: '../../packages/radios/src/elements/[A-Z]*.js'
    },
    {
      name: 'Views',
      components: '../../packages/radios/src/views/[A-Z]*.js'
    }
  ]
};
