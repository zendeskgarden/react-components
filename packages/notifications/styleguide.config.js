/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */

module.exports = {
  sections: [
    {
      name: '',
      content: '../../packages/notifications/README.md'
    },
    {
      name: 'Notifications',
      components: '../../packages/notifications/src/[A-Z]*.js'
    },
    {
      name: 'Content',
      components: '../../packages/notifications/src/content/[A-Z]*.js'
    }
  ]
};
