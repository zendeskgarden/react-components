/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */

module.exports = {
  sections: [
    {
      name: '',
      content: '../../packages/tags/README.md'
    },
    {
      name: 'Examples',
      sections: [
        {
          name: 'Basic',
          content: '../../packages/tags/examples/basic.md'
        }
      ]
    },
    {
      name: 'Components',
      components: '../../packages/tags/src/components/Tag.js'
    }
  ]
};
