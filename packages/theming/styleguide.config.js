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
      name: 'Palette',
      content: '../../packages/theming/src/palette/palette.example.md'
    },
    {
      name: 'Theme',
      content: '../../packages/theming/src/theme/theme.example.md'
    },
    {
      name: 'ThemeProvider',
      components: '../../packages/theming/src/ThemeProvider/[A-Z]*.js'
    },
    {
      name: 'Utils',
      components: '../../packages/theming/src/utils/*.js'
    }
  ]
};
