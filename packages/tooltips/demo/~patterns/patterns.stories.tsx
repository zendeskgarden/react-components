/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react-vite';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import { MenuStory } from './stories/MenuStory';
import { ToggletipStory } from './stories/ToggletipStory';
import { ToggletipAnchorStory } from './stories/ToggletipAnchorStory';
import { InfoToggletipStory } from './stories/InfoToggletipStory';

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
  argTypes: { appendToNode: { control: 'boolean' } }
};

export const Toggletip: StoryObj<typeof ToggletipStory> = {
  render: args => <ToggletipStory {...args} />,
  parameters: {
    controls: {
      include: ['hasArrow', 'placement']
    }
  },
  args: {
    hasArrow: true,
    placement: 'top',
    type: 'light',
    size: 'large'
  }
};

export const ToggletipWithAnchor: StoryObj<typeof ToggletipAnchorStory> = {
  render: args => <ToggletipAnchorStory {...args} />,
  name: 'Toggletip with anchor',
  parameters: {
    controls: {
      include: ['hasArrow', 'placement']
    }
  },
  args: {
    hasArrow: true,
    placement: 'top',
    type: 'light',
    size: 'large'
  }
};

export const InfoToggletip: StoryObj<typeof InfoToggletipStory> = {
  render: args => <InfoToggletipStory {...args} />,
  name: 'Info toggletip',
  parameters: {
    controls: {
      include: ['hasArrow', 'placement']
    }
  },
  args: {
    hasArrow: true,
    placement: 'top'
  }
};
