/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';

import { ChevronButton } from '@zendeskgarden/react-buttons';
import React from 'react';
import { useArgs } from 'storybook/preview-api';

export default {
  title: 'Packages/Buttons/ChevronButton',
  component: ChevronButton
};

export const Example: StoryObj<typeof ChevronButton> = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleClick = () => updateArgs({ isRotated: !args.isRotated });

    return <ChevronButton {...args} onClick={handleClick} />;
  },
  name: 'ChevronButton',
  args: {
    'aria-label': 'Label'
  },
  argTypes: { disabled: { control: 'boolean' } }
};
