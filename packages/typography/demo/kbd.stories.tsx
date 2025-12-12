import React from 'react';
import type { StoryObj } from '@storybook/react';
import { Kbd } from '@zendeskgarden/react-typography';
import { KbdStory } from './stories/KbdStory';

export default {
  title: 'Packages/Typography/Kbd',
  component: Kbd
};

export const Kbd: StoryObj<typeof KbdStory> = {
  render: args => <KbdStory {...args} />,
  name: 'Kbd',

  args: {
    children: '⇧ ⌃ ⌥ /',
    size: 'inherit'
  }
};
