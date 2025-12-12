import { Dropzone } from '@zendeskgarden/react-draggable';
import { DropzoneStory } from './stories/DropzoneStory';
import README from '../README.md';

export default {
  title: 'Packages/Draggable/Dropzone',
  component: Dropzone,

  subcomponents: {
    'Dropzone.Icon': Dropzone.Icon,
    'Dropzone.Message': Dropzone.Message
  }
};

export const Dropzone = {
  render: args => <DropzoneStory {...args} />,
  name: 'Dropzone',

  args: {
    hasIcon: true,
    children: 'Message'
  },

  argTypes: {
    tag: {
      control: {
        type: 'text'
      }
    },

    hasIcon: {
      name: 'Dropzone.Icon',

      table: {
        category: 'Story'
      }
    },

    children: {
      name: 'Dropzone.Message',

      table: {
        category: 'Story'
      }
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=14015-52473'
    }
  }
};
