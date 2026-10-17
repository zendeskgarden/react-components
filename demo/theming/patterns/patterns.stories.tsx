/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';
import React from 'react';

import { GetColorStory } from './stories/GetColorStory';

export default {
  title: 'Packages/Theming/[patterns]'
};

export const GetColorTest: StoryObj<typeof GetColorStory> = {
  render: args => <GetColorStory {...args} />,
  name: 'getColor test'
};
