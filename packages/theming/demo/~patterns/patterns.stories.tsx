/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react-vite';
import { GetColorStory } from './stories/GetColorStory';
import { GetColorV8Story } from './stories/GetColorV8Story';

export default {
  title: 'Packages/Theming/[patterns]',
  tags: ['!manifest']
};

export const GetColorTest: StoryObj<typeof GetColorStory> = {
  render: args => <GetColorStory {...args} />,
  name: 'getColor test'
};

export const GetColorV8Test: StoryObj<typeof GetColorV8Story> = {
  render: args => <GetColorV8Story {...args} />,
  name: 'getColorV8 test'
};
