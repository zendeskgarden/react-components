/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */

module.exports = {
  sections: [
    {
      name: '',
      content: '../../packages/grid/README.md'
    },
    {
      name: 'Views',
      components: [
        '../../packages/grid/src/views/Grid.js',
        '../../packages/grid/src/views/Row.js',
        '../../packages/grid/src/views/Col.js'
      ]
    }
  ]
};
