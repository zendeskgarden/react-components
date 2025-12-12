/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react-webpack5';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import { MenuStory } from './stories/MenuStory';

export default {
  title: 'Packages/Tooltips/[patterns]',
  component: Tooltip
};

export const Example: StoryObj<typeof MenuStory> = {
  render: args => <MenuStory {...args} />,
  name: 'Menu',

  parameters: {
    controls: {
      include: ['appendToNode', 'placement']
    }
  },

  args: {
    appendToNode: false,
    placement: 'bottom'
  },

  argTypes: {
    appendToNode: {
      control: 'boolean'
    }
  }
};
