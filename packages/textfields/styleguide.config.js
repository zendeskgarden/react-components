/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */

module.exports = {
  sections: [
    {
      name: '',
      content: '../../packages/textfields/README.md'
    },
    {
      name: 'Elements',
      components: '../../packages/textfields/src/elements/[A-Z]*.js'
    },
    {
      name: 'Views',
      components: '../../packages/textfields/src/views/[A-Z]*.js'
    }
  ]
};
