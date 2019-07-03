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
      content: '../../packages/theming/src/examples/palette.md'
    },
    {
      name: 'Theme',
      content: '../../packages/theming/src/examples/theme.md'
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
