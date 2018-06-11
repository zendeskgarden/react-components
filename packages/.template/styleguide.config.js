/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */

module.exports = {
  sections: [
    {
      name: '',
      content: '../../packages/{{component}}/README.md'
    },
    {
      name: 'Components',
      components: '../../packages/{{component}}/src/[A-Z]*.js'
    }
  ]
};
