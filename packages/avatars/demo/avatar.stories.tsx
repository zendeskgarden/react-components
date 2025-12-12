import { Avatar } from '@zendeskgarden/react-avatars';
import { AvatarStory } from './stories/AvatarStory';
import { AVATAR_TYPE as TYPE } from './stories/data';
import README from '../README.md';

export default {
  title: 'Packages/Avatars/Avatar',
  component: Avatar,

  subcomponents: {
    'Avatar.Text': Avatar.Text
  }
};

export const Avatar = {
  render: args => <AvatarStory {...args} />,
  name: 'Avatar',

  args: {
    type: TYPE[1]
  },

  argTypes: {
    'aria-hidden': {
      control: 'boolean'
    },

    backgroundColor: {
      control: 'color'
    },

    badge: {
      control: 'text'
    },

    foregroundColor: {
      control: 'color'
    },

    children: {
      control: 'text',

      table: {
        category: 'Avatar.Text'
      }
    },

    type: {
      control: 'radio',
      options: TYPE,

      table: {
        category: 'Story'
      }
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=102%3A110'
    }
  }
};
