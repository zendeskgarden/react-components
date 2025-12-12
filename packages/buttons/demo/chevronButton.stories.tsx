/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';

import { useArgs } from 'storybook/preview-api';
import { ChevronButton } from '@zendeskgarden/react-buttons';

export default {
  title: 'Packages/Buttons/ChevronButton',
  component: ChevronButton
};

export const Example: StoryObj<typeof ChevronButton> = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const updateArgs = useArgs()[1];

    const handleClick = () =>
      updateArgs({
        isRotated: !args.isRotated
      });

    return <ChevronButton {...args} onClick={handleClick} />;
  },

  name: 'ChevronButton',

  args: {
    'aria-label': 'Label'
  },

  argTypes: {
    disabled: {
      control: 'boolean'
    }
  }
};
