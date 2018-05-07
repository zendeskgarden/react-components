/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */

module.exports = {
  sections: [
    {
      name: '',
      content: '../../packages/checkboxes/README.md'
    },
    {
      name: 'Elements',
      components: '../../packages/checkboxes/src/elements/[A-Z]*.js'
    },
    {
      name: 'Views',
      components: '../../packages/checkboxes/src/views/[A-Z]*.js'
    }
  ]
};
