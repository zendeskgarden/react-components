/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';

import { Inline } from '../../src/index';

export default {
  title: 'Components/Loaders/Inline',
  component: Inline
};

export const Example: StoryObj<typeof Inline> = {
  render: args => <Inline {...args} />,
  name: 'Inline',
  argTypes: { color: { control: 'color' } }
};
