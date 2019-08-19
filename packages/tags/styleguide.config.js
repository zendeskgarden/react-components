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
          name: 'Tag',
          content: '../../packages/tags/examples/tag.md'
        },
        {
          name: '',
          content: '../../packages/tags/examples/avatar.md'
        },
        {
          name: '',
          content: '../../packages/tags/examples/close.md'
        }
      ]
    },
    {
      name: 'Components',
      components: '../../packages/tags/src/components/Tag.js'
    }
  ]
};
