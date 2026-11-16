/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';

import { LG } from '../../src/index';
import { TypescaleStory } from './stories/TypescaleStory';

export default {
  title: 'Components/Typography/Typescale/LG',
  component: LG
};

export const Example: StoryObj<typeof TypescaleStory> = {
  render: args => <TypescaleStory {...args} size="large" />,
  name: 'LG',
  args: { children: 'Text' },
  argTypes: { tag: { control: 'text' } }
};
