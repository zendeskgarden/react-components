import { Skeleton } from '@zendeskgarden/react-loaders';
import { SkeletonStory } from './stories/SkeletonStory';
import { TYPE_SCALE_OPTIONS } from './stories/data';
import README from '../README.md';

export default {
  title: 'Packages/Loaders/Skeleton',
  component: Skeleton
};

export const Skeleton = {
  render: args => <SkeletonStory {...args} />,
  name: 'Skeleton',

  args: {
    count: 1
  },

  argTypes: {
    backgroundColor: {
      control: 'color',

      table: {
        category: 'Story'
      }
    },

    count: {
      control: {
        type: 'range',
        min: 1,
        max: 20
      },

      table: {
        category: 'Story'
      }
    },

    typescale: {
      control: 'radio',
      options: TYPE_SCALE_OPTIONS,

      table: {
        category: 'Story'
      }
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=1502%3A141'
    }
  }
};
