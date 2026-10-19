/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';

import { ColorSchemeProvider } from '../../src/index';
import { ColorSchemeProviderStory } from './stories/ColorSchemeProviderStory';

export default {
  title: 'Theming/ColorSchemeProvider',
  component: ColorSchemeProvider
};

export const Example: StoryObj<typeof ColorSchemeProviderStory> = {
  render: args => <ColorSchemeProviderStory {...args} />,
  name: 'ColorSchemeProvider',
  args: { initialColorScheme: 'system' }
};
