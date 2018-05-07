/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */

module.exports = {
  sections: [
    {
      name: '',
      content: '../../packages/buttons/README.md'
    },
    {
      name: 'Elements',
      components: '../../packages/buttons/src/elements/[A-Z]*.js'
    },
    {
      name: 'Containers',
      components: '../../packages/buttons/src/containers/[A-Z]*.js'
    },
    {
      name: 'Views',
      sections: [
        {
          name: 'Generics',
          components: '../../packages/buttons/src/views/[A-Z]*.js'
        },
        {
          name: 'IconButton',
          components: '../../packages/buttons/src/views/icon-button/[A-Z]*.js'
        },
        {
          name: 'ButtonGroup',
          components: '../../packages/buttons/src/views/button-group/[A-Z]*.js'
        }
      ]
    }
  ]
};
