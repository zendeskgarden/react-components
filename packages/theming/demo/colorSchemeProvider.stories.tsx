import React from 'react';
import type { StoryObj } from '@storybook/react';
import { ColorSchemeProvider } from '@zendeskgarden/react-theming';
import { ColorSchemeProviderStory } from './stories/ColorSchemeProviderStory';

export default {
  title: 'Packages/Theming/ColorSchemeProvider',
  component: ColorSchemeProvider
};

export const ColorSchemeProvider: StoryObj<typeof ColorSchemeProviderStory> = {
  render: args => <ColorSchemeProviderStory {...args} />,
  name: 'ColorSchemeProvider',

  args: {
    initialColorScheme: 'system'
  }
};
