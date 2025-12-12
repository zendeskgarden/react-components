import React from 'react';
import type { StoryObj } from '@storybook/react';
import { SM } from '@zendeskgarden/react-typography';
import { TypescaleStory } from './stories/TypescaleStory';

export default {
  title: 'Packages/Typography/Typescale/SM',
  component: SM
};

export const Sm: StoryObj<typeof TypescaleStory> = {
  render: args => <TypescaleStory {...args} size="small" />,
  name: 'SM',

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
