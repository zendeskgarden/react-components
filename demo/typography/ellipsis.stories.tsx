/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';

import { Ellipsis } from '../../src/index';

export default {
  title: 'Components/Ellipsis',
  component: Ellipsis
};

export const Example: StoryObj<typeof Ellipsis> = {
  render: args => <Ellipsis {...args} />,
  name: 'Ellipsis',
  args: {
    children: 'Veggies es bonus vobis, proinde vos postulo essum magis.',
    style: { width: 150 }
  },
  argTypes: { tag: { control: 'text' } }
};
