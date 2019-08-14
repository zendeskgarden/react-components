/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */

module.exports = {
  sections: [
    {
      name: '',
      content: '../../packages/theming/README.md'
    },
    {
      name: 'Components',
      sections: [
        {
          name: 'ThemeProvider',
          content: '../../packages/theming/examples/theme-provider.md'
        },
        {
          name: 'PALETTE',
          content: '../../packages/theming/examples/palette.md'
        },
        {
          name: 'DEFAULT_THEME',
          content: '../../packages/theming/examples/default-theme.md'
        }
      ]
    },
    {
      name: 'Utils',
      components: '../../packages/theming/src/utils/*.js'
    }
  ]
};
