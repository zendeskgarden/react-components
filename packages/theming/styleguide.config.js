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
      components: [
        '../../packages/theming/src/ThemeProvider.js',
        '../../packages/theming/src/palette/index.js',
        '../../packages/theming/src/theme/index.js'
      ]
    },
    {
      name: 'Utils',
      components: '../../packages/theming/src/utils/*.js'
    }
  ]
};
