import React from 'react';
import type { StoryObj } from '@storybook/react';
import { XL } from '@zendeskgarden/react-typography';
import { TypescaleStory } from './stories/TypescaleStory';

export default {
  title: 'Packages/Typography/Typescale/XL',
  component: XL
};

export const Xl: StoryObj<typeof TypescaleStory> = {
  render: args => <TypescaleStory {...args} size="extra-large" />,
  name: 'XL',

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
