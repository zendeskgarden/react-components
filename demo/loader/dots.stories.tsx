/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';

import { Dots } from '../../src/index';

export default {
  title: 'Components/Loaders/Dots',
  component: Dots
};

export const Example: StoryObj<typeof Dots> = {
  render: args => <Dots {...args} />,
  name: 'Dots',
  argTypes: {
    color: { control: 'color' },
    size: { control: 'text' }
  }
};
