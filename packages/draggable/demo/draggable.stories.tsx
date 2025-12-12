import React from 'react';
import type { StoryObj } from '@storybook/react';
import { Draggable } from '@zendeskgarden/react-draggable';
import { DraggableStory } from './stories/DraggableStory';

export default {
  title: 'Packages/Draggable/Draggable',
  component: Draggable,

  subcomponents: {
    'Draggable.Content': Draggable.Content,
    'Draggable.Grip': Draggable.Grip
  }
};

export const Draggable: StoryObj<typeof DraggableStory> = {
  render: args => <DraggableStory {...args} />,
  name: 'Draggable',

  args: {
    hasGrip: true,
    children: 'Content'
  },

  argTypes: {
    children: {
      name: 'Draggable.Content',

      table: {
        category: 'Story'
      }
    },

    hasGrip: {
      name: 'Draggable.Grip',

      table: {
        category: 'Story'
      }
    },

    tag: {
      control: {
        type: 'text'
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
