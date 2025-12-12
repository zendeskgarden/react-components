import { Tag } from '@zendeskgarden/react-tags';
import { TagStory } from './stories/TagStory';
import README from '../README.md';

export default {
  title: 'Packages/Tags/Tag',
  component: Tag,

  subcomponents: {
    'Tag.Avatar': Tag.Avatar,
    'Tag.Close': Tag.Close
  }
};

export const Tag = {
  render: args => <TagStory {...args} />,
  name: 'Tag',

  args: {
    children: 'Tag',
    hasAvatar: false,
    hasClose: false,
    closeAriaLabel: 'Label'
  },

  argTypes: {
    hue: {
      control: 'color'
    },

    hasAvatar: {
      name: 'Tag.Avatar',

      table: {
        category: 'Story'
      }
    },

    hasClose: {
      name: 'Tag.Close',

      table: {
        category: 'Story'
      }
    },

    closeAriaLabel: {
      name: 'aria-label',

      table: {
        category: 'Tag.Close'
      }
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=102%3A118'
    }
  }
};
