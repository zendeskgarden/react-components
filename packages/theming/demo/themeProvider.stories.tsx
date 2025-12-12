/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react-webpack5';
import { ThemeProvider, DEFAULT_THEME, PALETTE } from '@zendeskgarden/react-theming';
import { PaletteStory } from './stories/PaletteStory';

export default {
  title: 'Packages/Theming/ThemeProvider',
  component: ThemeProvider,

  subcomponents: {
    DEFAULT_THEME,
    PALETTE
  }
};

export const Example: StoryObj<typeof ThemeProvider> = {
  render: args => <ThemeProvider {...args} />,
  name: 'ThemeProvider',
  args: {
    theme: DEFAULT_THEME
  }
};

export const Palette: StoryObj<typeof PaletteStory> = {
  render: args => <PaletteStory {...args} />,
  name: 'PALETTE',

  args: {
    palette: PALETTE
  },

  argTypes: {
    palette: {
      control: {
        type: 'object'
      },

      name: 'PALETTE'
    }
  }
};
