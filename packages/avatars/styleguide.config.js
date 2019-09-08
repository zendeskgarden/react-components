/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */

module.exports = {
  sections: [
    {
      name: '',
      content: '../../packages/avatars/README.md'
    },
    {
      name: 'Examples',
      content: '../../packages/avatars/examples/index.md'
    },
    {
      name: 'Components',
      components: '../../packages/avatars/src/components/[A-Z]*.js'
    }
  ]
};
