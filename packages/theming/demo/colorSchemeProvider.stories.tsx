/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';
import { ColorSchemeProvider } from '@zendeskgarden/react-theming';
import { ColorSchemeProviderStory } from './stories/ColorSchemeProviderStory';

export default {
  title: 'Packages/Theming/ColorSchemeProvider',
  component: ColorSchemeProvider
};

export const Default: StoryObj<typeof ColorSchemeProviderStory> = {
  render: args => <ColorSchemeProviderStory {...args} />,
  name: 'ColorSchemeProvider',
  args: {
    initialColorScheme: 'system'
  }
};
