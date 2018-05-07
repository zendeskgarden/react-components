/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */

module.exports = {
  sections: [
    {
      name: '',
      content: '../../packages/tags/README.md'
    },
    {
      name: 'Views',
      components: '../../packages/tags/src/views/[A-Z]*.js'
    }
  ]
};
