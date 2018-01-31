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
      name: 'Theming',
      components: '../../packages/theming/src/ThemeProvider/[A-Z]*.js'
    },
    {
      name: 'Utils',
      components: '../../packages/theming/src/utils/*.js'
    }
  ]
};
