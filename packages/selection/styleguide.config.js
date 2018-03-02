/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */

module.exports = {
  sections: [
    {
      name: '',
      content: '../../packages/selection/README.md'
    },
    {
      name: 'Containers',
      components: '../../packages/selection/src/containers/[A-Z]*.js'
    },
    {
      name: 'Utils',
      components: '../../packages/selection/src/utils/*.js'
    },
    {
      name: 'Constants',
      components: '../../packages/selection/src/constants/*.js'
    }
  ]
};
