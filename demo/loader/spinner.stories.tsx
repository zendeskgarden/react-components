/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';

import { Spinner } from '../../src/index';

export default {
  title: 'Components/Loaders/Spinner',
  component: Spinner
};

export const Example: StoryObj<typeof Spinner> = {
  render: args => <Spinner {...args} />,
  name: 'Spinner',
  argTypes: {
    color: { control: 'color' },
    size: { control: 'text' }
  }
};
