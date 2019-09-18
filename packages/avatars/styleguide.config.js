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
      sections: [
        {
          name: 'Basic',
          content: '../../packages/avatars/examples/basic.md'
        },
        {
          name: 'Advanced',
          content: '../../packages/avatars/examples/advanced.md'
        }
      ]
    },
    {
      name: 'Components',
      components: '../../packages/avatars/src/components/[A-Z]*.js'
    }
  ]
};
