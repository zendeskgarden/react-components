import React from 'react';
import type { StoryObj } from '@storybook/react';
import { XXXL } from '@zendeskgarden/react-typography';
import { TypescaleStory } from './stories/TypescaleStory';

export default {
  title: 'Packages/Typography/Typescale/XXXL',
  component: XXXL
};

export const Xxxl: StoryObj<typeof TypescaleStory> = {
  render: args => <TypescaleStory {...args} size="3x-large" />,
  name: 'XXXL',

  args: {
    children: 'Text'
  },

  argTypes: {
    tag: {
      control: 'text'
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=102%3A107'
    }
  }
};
